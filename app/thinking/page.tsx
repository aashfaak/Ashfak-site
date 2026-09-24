import Link from "next/link";
import { thinking } from "@/lib/data";

export default function Thinking() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl">Fragments</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        Random thoughts, half-formed ideas, observations, and everything in between.
      </p>

      <div className="mt-10">
        {thinking.map((post) => (
          <Link
            key={post.slug}
            href={`/thinking/${post.slug}`}
            className="block border-t border-line py-6 no-underline first:border-t-0"
          >
            <p className="text-xs text-muted">
              {post.category} · {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </p>
            <h2 className="mt-1 font-serif text-lg text-ink">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
