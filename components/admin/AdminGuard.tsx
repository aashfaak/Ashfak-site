"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/useAuth";

// Wraps any /admin/* page that should require login.
// Redirects to /admin (the login page) if nobody's signed in.
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/admin");
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-muted">
        Checking sign-in…
      </div>
    );
  }

  if (!user) return null; // redirect above is already firing

  return <>{children}</>;
}
