import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { trips } from "@/lib/data";

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export default function TravelDetail({ params }: { params: { slug: string } }) {
  const trip = trips.find((item) => item.slug === params.slug);
  if (!trip) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/travel" className="text-sm text-muted no-underline">
        ← All travel
      </Link>

      {trip.imageUrl && (
        <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-2xl bg-line">
          <Image
            src={trip.imageUrl}
            alt={trip.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <p className="mt-8 text-xs uppercase tracking-[0.14em] text-muted">
        {trip.location} · {trip.date}
      </p>
      <h1 className="mt-2 font-serif text-3xl">{trip.title}</h1>
      <p className="mt-6 max-w-prose text-ink/80">{trip.excerpt}</p>
    </div>
  );
}
