import { trips } from "@/lib/data";

export default function Travel() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-3xl">Travel</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        Places I&apos;ve been, and what they left me with.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {trips.map((trip) => (
          <article key={trip.slug} className="border-t border-line pt-6">
            <p className="text-xs text-muted">
              {trip.location} · {trip.date}
            </p>
            <h2 className="mt-1 font-serif text-lg">{trip.title}</h2>
            <p className="mt-2 text-sm text-ink/80">{trip.excerpt}</p>
            {/* TODO: gallery + map once Cloudinary/photos are connected */}
          </article>
        ))}
      </div>
    </div>
  );
}
