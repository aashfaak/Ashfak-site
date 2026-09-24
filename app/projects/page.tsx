"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { projects as mockProjects } from "@/lib/data";
import { Project } from "@/lib/types";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [liveProjects, setLiveProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, "projects"),
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => setLiveProjects(snap.docs.map((d) => d.data() as Project)),
      () => setLiveProjects([]) // Firestore not reachable yet — fall back to mock data below
    );
    return unsubscribe;
  }, []);

  // Show real Firestore projects once there are any; otherwise fall back to
  // the placeholder data so the page isn't empty before you've published
  // anything from /admin/projects.
  const list = liveProjects && liveProjects.length > 0 ? liveProjects : mockProjects;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-3xl">Projects</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        Things I&apos;ve built, from coursework to weekend experiments.
      </p>
      <div className="mt-10">
        {list.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
