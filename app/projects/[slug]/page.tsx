"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDocs, query, where } from "firebase/firestore";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { projects as mockProjects } from "@/lib/data";
import { Project } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import Image from "next/image";

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null | "not-found">(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Try Firestore first (published only)
      try {
        const q = query(
          collection(db, "projects"),
          where("slug", "==", params.slug),
          where("status", "==", "published")
        );
        const snap = await getDocs(q);
        if (!snap.empty && !cancelled) {
          setProject(snap.docs[0].data() as Project);
          return;
        }
      } catch {
        // Firestore not reachable — fall through to mock data below
      }

      const fallback = mockProjects.find((p) => p.slug === params.slug);
      if (!cancelled) setProject(fallback ?? "not-found");
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [params.slug]);

  if (project === "not-found") return notFound();
  if (project === null) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-sm text-muted">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/projects" className="text-sm text-muted no-underline">
        ← All projects
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="font-serif text-3xl">{project.title}</h1>
        <StatusBadge status={project.status} />
      </div>
      {project.imageUrl && (
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl bg-line">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <p className="mt-2 text-sm text-muted">
        {project.category} · {project.technologies?.join(" / ")}
      </p>
      <p className="mt-6 max-w-prose text-ink">{project.short}</p>

      <div className="mt-4 flex gap-4 text-sm">
        {project.github && <a href={project.github} className="text-signal">GitHub</a>}
        {project.demo && <a href={project.demo} className="text-signal">Live demo</a>}
      </div>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="font-serif text-xl">Problem</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/80">{project.problem}</p>
        </section>
        <section>
          <h2 className="font-serif text-xl">Idea</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/80">{project.ideaText}</p>
        </section>
        <section>
          <h2 className="font-serif text-xl">How it works</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/80">{project.howItWorks}</p>
        </section>
        <section>
          <h2 className="font-serif text-xl">Features</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/80">
            {(project.features ?? []).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-xl">Challenges</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/80">{project.challenges}</p>
        </section>
        <section>
          <h2 className="font-serif text-xl">What I learned</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/80">{project.learned}</p>
        </section>
        <section>
          <h2 className="font-serif text-xl">Future improvements</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/80">{project.future}</p>
        </section>
        {/* TODO: screenshots gallery once Cloudinary images are attached */}
      </div>
    </div>
  );
}
