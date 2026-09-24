import { notFound } from "next/navigation";
import Link from "next/link";
import { thinking } from "@/lib/data";

export function generateStaticParams() {
  return thinking.map((t) => ({ slug: t.slug }));
}

export default function ThinkingPost({ params }: { params: { slug: string } }) {
  const post = thinking.find((t) => t.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/thinking" className="text-sm text-muted no-underline">
        ← All fragments
      </Link>
      <p className="mt-4 text-xs text-muted">{post.category}</p>
      <h1 className="mt-1 font-serif text-3xl">{post.title}</h1>
      <p className="mt-6 max-w-prose text-ink/80">{post.excerpt}</p>
      <p className="mt-10 text-sm text-muted">
        {/* TODO: replace with real post content (rich text from the admin panel) */}
        Full post content goes here once it&apos;s written in the admin panel.
      </p>
    </div>
  );
}
