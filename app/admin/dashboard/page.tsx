"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/useAuth";
import AdminGuard from "@/components/admin/AdminGuard";
import { projects, ideas, trips, goals } from "@/lib/data";
import Link from "next/link";

const stats = [
  { label: "Projects", value: projects.length },
  { label: "Ideas", value: ideas.length },
  { label: "Travel", value: trips.length },
  { label: "Plans", value: goals.length },
  { label: "Messages", value: 0 }, // TODO: read from Firestore "messages" once contact form writes to it
];

// TODO: replace with a real Firestore query (e.g. latest docs across
// collections, ordered by updatedAt) once content is actually edited here.
const recentActivity = [
  "Site scaffolded from the plan",
  "Admin panel connected to Firebase Auth",
];

const uploadLinks = [
  { label: "Project", href: "/admin", description: "Add a finished or in-progress project" },
  { label: "Idea", href: "/admin/ideas", description: "Capture an idea before it becomes a project" },
  { label: "Fragment", href: "/admin/thinking", description: "Publish a random thought, idea, or observation" },
  { label: "Travel entry", href: "/admin/travel", description: "Record a place or trip" },
  { label: "Planning goal", href: "/admin/planning", description: "Track something you are working toward" },
];

function DashboardContent() {
  const { user } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await signOut(auth);
    router.push("/admin");
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl">Ashfak Admin</h1>
          <p className="mt-1 text-sm text-muted">Signed in as {user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
        >
          Log out
        </button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-line pt-3">
            <p className="text-xs text-muted">{s.label}</p>
            <p className="mt-1 font-serif text-2xl">
              {String(s.value).padStart(2, "0")}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-serif text-lg">Recent activity</h2>
        <ul className="mt-4 space-y-2 text-sm text-ink/80">
          {recentActivity.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-lg">Add content</h2>
          <span className="text-xs text-muted">Choose a collection</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {uploadLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-line p-4 no-underline transition-colors hover:border-ink"
            >
              <p className="font-serif text-base text-ink">{item.label}</p>
              <p className="mt-1 text-xs text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function Dashboard() {
  return (
    <AdminGuard>
      <DashboardContent />
    </AdminGuard>
  );
}
