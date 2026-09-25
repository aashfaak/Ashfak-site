"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Project } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!projects.length) {
    return <p className="text-sm text-muted">No featured projects yet.</p>;
  }

  return (
    <div>
      <div ref={carouselRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group flex h-[22rem] w-[18rem] max-w-[calc(100vw-3rem)] shrink-0 snap-start flex-col overflow-hidden border border-line bg-white/60 shadow-[0_8px_20px_rgba(27,26,23,0.1)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(28.571%-0.857rem)]"
          >
            <Link href={`/projects/${project.slug}`} className="flex min-h-0 flex-1 flex-col no-underline">
              <div className="relative h-36 shrink-0 overflow-hidden bg-line">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 78vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-signal/10 px-8 text-center">
                    <span className="font-serif text-4xl text-signal/70">{project.title.slice(0, 1)}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[10px] uppercase tracking-[0.14em] text-muted">{project.category}</p>
                <StatusBadge status={project.status} />
              </div>
              <h3 className="mt-2 font-serif text-lg text-ink group-hover:text-signal">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">{project.short}</p>
              </div>
            </Link>
            <div className="flex items-center justify-between gap-2 px-4 pb-4">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex rounded-full border border-signalDeep bg-signal px-3 py-1.5 text-xs font-medium text-paper no-underline transition-colors hover:bg-signalDeep"
              >
                Open project
              </Link>
              {project.slug === "card-matching-memory-game" || project.slug === "predict-me" || project.slug === "neon-flappy-game" || project.slug === "neon-snake-game" || project.slug === "tanim-intesar-portfolio" ? null : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-signal bg-white px-3 py-1.5 text-xs font-medium text-signal no-underline transition-colors hover:bg-signal/10"
                >
                  GitHub
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed rounded-full border border-line bg-line/40 px-3 py-1.5 text-xs font-medium text-muted">
                  GitHub
                </span>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-signal px-4 py-2 text-xs font-medium text-paper no-underline transition-colors hover:bg-signalDeep"
                >
                  Play
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
