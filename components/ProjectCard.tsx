import Image from "next/image";
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group mb-4 block rounded-2xl border border-line bg-white/60 p-5 no-underline shadow-[0_8px_20px_rgba(27,26,23,0.05)] transition-transform hover:-translate-y-1"
    >
      <div className="flex items-start gap-5">
        <div className="relative hidden h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-signal/10 sm:block">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt=""
              fill
              sizes="128px"
              className="object-cover"
            />
          ) : (
            <span className="flex h-full items-center justify-center font-serif text-2xl text-signal/60">
              {project.title.slice(0, 1)}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-serif text-lg text-ink transition-colors group-hover:text-signal">
            {project.title}
          </h3>
          <p className="mt-1 max-w-prose text-sm text-muted">{project.short}</p>
          <p className="mt-2 text-xs text-ink/50">
            {project.category} · {project.technologies.join(" / ")}
          </p>
        </div>
        <div className="ml-auto shrink-0">
          <StatusBadge status={project.status} />
        </div>
      </div>
    </Link>
  );
}
