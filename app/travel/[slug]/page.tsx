import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { trips } from "@/lib/data";
import { renderMarkdownText } from "@/components/MarkdownContent";

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export default function TravelDetail({ params }: { params: { slug: string } }) {
  const trip = trips.find((item) => item.slug === params.slug);
  if (!trip) return notFound();
  const tripImages = trip.detailImageUrls ?? [trip.detailImageUrl ?? trip.imageUrl].filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/travel" className="text-sm text-muted no-underline">
        ← All travel
      </Link>

      {tripImages.length > 0 && (
        <div className={`mt-6 grid gap-3 ${tripImages.length > 1 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1"}`}>
          {tripImages.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={tripImages.length > 1 ? `${trip.title} photo ${index + 1}` : trip.title}
                width={1200}
                height={1600}
                priority={index === 0}
                sizes={tripImages.length > 1 ? "(min-width: 640px) 33vw, 100vw" : "(min-width: 768px) 768px, 100vw"}
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-xs uppercase tracking-[0.14em] text-muted">
        {trip.location} · {trip.date}
      </p>
      <h1 className="mt-2 font-serif text-3xl">{trip.title}</h1>
      <p className="mt-6 max-w-prose text-ink/80">{trip.excerpt}</p>
      {trip.body && (
        <article className="mt-8 text-sm text-ink/80">
          {renderMarkdownText(trip.body)}
        </article>
      )}
    </div>
  );
}
