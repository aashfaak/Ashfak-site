import Link from "next/link";
import Image from "next/image";
import { ideas } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

function renderConcept(concept: string) {
  return concept.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

export default function Ideas() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-3xl">Ideas</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        Not everything here has been built — this is where an idea lives before it becomes a project.
      </p>

      <div className="mt-10 space-y-10">
        {ideas.map((idea) => (
          <Link key={idea.slug} href={`/ideas/${idea.slug}`} className="group block rounded-2xl border border-line bg-white/60 p-5 no-underline shadow-[0_8px_20px_rgba(27,26,23,0.05)] transition-transform hover:-translate-y-1">
            <article>
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-serif text-xl text-ink transition-colors group-hover:text-signal">{idea.title}</h2>
                <StatusBadge status={idea.status} />
              </div>
              <div className="mt-4 grid gap-5 border-t border-line pt-4 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-start">
                <section>
                  <h3 className="text-xs font-semibold uppercase text-muted">Concept</h3>
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink/80">{renderConcept(idea.concept)}</p>
                </section>
                {idea.imageUrl && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                    <Image
                      src={idea.imageUrl}
                      alt={idea.title}
                      fill
                      sizes="(min-width: 640px) 224px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
