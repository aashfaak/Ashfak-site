import { trips } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Travel() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-3xl">Travel</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        Places I&apos;ve been, and what they left me with.
      </p>

      <div className="mt-10 space-y-8">
        {trips.map((trip) => (
          <Link
            key={trip.slug}
            href={`/travel/${trip.slug}`}
            className="group block rounded-2xl border border-line bg-white/60 p-5 no-underline shadow-[0_8px_20px_rgba(27,26,23,0.05)] transition-transform hover:-translate-y-1"
          >
            <article>
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-serif text-xl text-ink transition-colors group-hover:text-signal">{trip.title}</h2>
                <p className="shrink-0 text-xs text-muted">{trip.location} · {trip.date}</p>
              </div>
              <div className={`mt-4 grid gap-5 border-t border-line pt-4 ${trip.imageUrl ? "sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-start" : ""}`}>
                <p className="text-sm leading-relaxed text-ink/80">{trip.excerpt}</p>
                {trip.imageUrl && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-line">
                    <Image
                      src={trip.imageUrl}
                      alt={trip.title}
                      fill
                      sizes="(min-width: 640px) 224px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              {trip.routeStops && (
                <div className="mt-4 border-t border-line pt-3">
                  <p className="text-[10px] font-semibold uppercase text-muted">Route</p>
                  <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {trip.routeStops.map((stop, index, stops) => (
                      <li key={stop} className="inline-flex items-center gap-2 text-xs text-ink/80">
                        <span>{stop}</span>
                        {index < stops.length - 1 && (
                          <span aria-hidden="true" className="text-signal">→</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
