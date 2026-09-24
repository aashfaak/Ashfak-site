import { ideas } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

export default function Ideas() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-3xl">Ideas</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        Not everything here has been built — this is where an idea lives before it becomes a project.
      </p>

      <div className="mt-10 space-y-10">
        {ideas.map((idea) => (
          <article key={idea.slug} className="border-t border-line pt-8 first:border-t-0 first:pt-0">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-xl">{idea.title}</h2>
              <StatusBadge status={idea.status} />
            </div>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-muted">What is it?</dt>
                <dd className="mt-1 text-sm text-ink/80">{idea.what}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Why did I think about it?</dt>
                <dd className="mt-1 text-sm text-ink/80">{idea.why}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">What problem does it solve?</dt>
                <dd className="mt-1 text-sm text-ink/80">{idea.problem}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Who could use it?</dt>
                <dd className="mt-1 text-sm text-ink/80">{idea.who}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs text-muted">How might it work?</dt>
                <dd className="mt-1 text-sm text-ink/80">{idea.how}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
