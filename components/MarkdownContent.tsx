function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatInlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\s--\s/g, " &mdash; ")
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>');
}

export function renderMarkdownText(text: string) {
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, blockIndex) => {
    const lines = block
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines[0] && /^#{1,6}\s+/.test(lines[0])) {
      const headingText = lines[0].replace(/^#{1,6}\s+/, "");
      const remainingText = lines.slice(1).join("\n");
      const level = Math.min(lines[0].match(/^#+/)?.[0].length ?? 2, 3);
      const Heading = `h${level}` as keyof JSX.IntrinsicElements;

      return (
        <div key={blockIndex} className="mt-6">
          <Heading
            className="font-serif text-xl text-ink"
            dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(headingText) }}
          />
          {remainingText ? <div>{renderMarkdownText(remainingText)}</div> : null}
        </div>
      );
    }

    if (lines.every((line) => /^[-*]\s+/.test(line))) {
      return (
        <ul key={blockIndex} className="mt-2 list-disc space-y-1 pl-5 text-ink/80">
          {lines.map((line, index) => (
            <li
              key={`${blockIndex}-${index}`}
              dangerouslySetInnerHTML={{
                __html: formatInlineMarkdown(line.replace(/^[-*]\s+/, "")),
              }}
            />
          ))}
        </ul>
      );
    }

    if (lines.every((line) => /^\d+\.\s+/.test(line))) {
      return (
        <ol key={blockIndex} className="mt-2 list-decimal space-y-1 pl-5 text-ink/80">
          {lines.map((line, index) => (
            <li
              key={`${blockIndex}-${index}`}
              dangerouslySetInnerHTML={{
                __html: formatInlineMarkdown(line.replace(/^\d+\.\s+/, "")),
              }}
            />
          ))}
        </ol>
      );
    }

    if (lines.length === 1 && /^>\s?/.test(lines[0])) {
      return (
        <blockquote
          key={blockIndex}
          className="mt-2 border-l-2 border-muted pl-4 text-ink/80"
          dangerouslySetInnerHTML={{
            __html: formatInlineMarkdown(lines[0].replace(/^>\s?/, "")),
          }}
        />
      );
    }

    return (
      <p
        key={blockIndex}
        className="mt-3 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block) }}
      />
    );
  });
}