const LABELS: Record<string, string> = {
  idea: "Idea",
  researching: "Researching",
  building: "Building",
  completed: "Completed",
  launched: "Launched",
  paused: "Paused",
  draft: "Draft",
  published: "Published",
};

const DOT: Record<string, string> = {
  idea: "bg-muted",
  researching: "bg-clay",
  building: "bg-clay",
  completed: "bg-signal",
  launched: "bg-signal",
  paused: "bg-line",
  draft: "bg-clay",
  published: "bg-signal",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-ink/70">
      <span className={`h-1.5 w-1.5 rounded-full ${DOT[status] ?? "bg-muted"}`} />
      {LABELS[status] ?? status}
    </span>
  );
}
