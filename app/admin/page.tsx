"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AdminGuard from "@/components/admin/AdminGuard";
import CloudinaryUpload from "@/components/admin/CloudinaryUpload";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function NewProjectContent() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [short, setShort] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [problem, setProblem] = useState("");
  const [ideaText, setIdeaText] = useState("");
  const [howItWorks, setHowItWorks] = useState("");
  const [features, setFeatures] = useState("");
  const [challenges, setChallenges] = useState("");
  const [learned, setLearned] = useState("");
  const [future, setFuture] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">("draft");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await addDoc(collection(db, "projects"), {
        title,
        slug: slugify(title),
        category,
        technologies: technologies.split(",").map((t) => t.trim()).filter(Boolean),
        short,
        imageUrl,
        problem,
        ideaText,
        howItWorks,
        features: features.split("\n").map((f) => f.trim()).filter(Boolean),
        challenges,
        learned,
        future,
        github,
        demo,
        featured,
        status,
        createdAt: serverTimestamp(),
      });
      router.push("/admin/projects");
    } catch (err) {
      // Common cause: Firestore database not created yet, or security rules
      // don't allow writes for signed-in users. Check the Firebase console.
      setError("Couldn't save. Check that Firestore is set up and rules allow writes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <a href="/admin/dashboard" className="text-sm text-muted no-underline">
        ← Admin dashboard
      </a>
      <h1 className="mt-2 font-serif text-2xl">Add project</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Field label="Title">
          <input required value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Short description">
          <textarea required rows={2} value={short} onChange={(e) => setShort(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Project image">
          <CloudinaryUpload value={imageUrl} onChange={setImageUrl} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Category">
            <input value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass} />
          </Field>
          <Field label="Technologies (comma separated)">
            <input value={technologies} onChange={(e) => setTechnologies(e.target.value)} className={inputClass} />
          </Field>
        </div>
        <Field label="Problem">
          <textarea rows={2} value={problem} onChange={(e) => setProblem(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Idea">
          <textarea rows={2} value={ideaText} onChange={(e) => setIdeaText(e.target.value)} className={inputClass} />
        </Field>
        <Field label="How it works">
          <textarea rows={2} value={howItWorks} onChange={(e) => setHowItWorks(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Features (one per line)">
          <textarea rows={3} value={features} onChange={(e) => setFeatures(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Challenges">
          <textarea rows={2} value={challenges} onChange={(e) => setChallenges(e.target.value)} className={inputClass} />
        </Field>
        <Field label="What I learned">
          <textarea rows={2} value={learned} onChange={(e) => setLearned(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Future improvements">
          <textarea rows={2} value={future} onChange={(e) => setFuture(e.target.value)} className={inputClass} />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="GitHub URL">
            <input value={github} onChange={(e) => setGithub(e.target.value)} className={inputClass} />
          </Field>
          <Field label="Live demo URL">
            <input value={demo} onChange={(e) => setDemo(e.target.value)} className={inputClass} />
          </Field>
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
            Featured
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span>Status</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="rounded-md border border-line bg-white px-2 py-1 text-sm"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
        </div>

        {error && <p className="text-sm text-clay">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-signalDeep disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save project"}
        </button>
      </form>
    </div>
  );
}

const inputClass =
  "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-ink";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs text-muted">{label}</label>
      {children}
    </div>
  );
}

export default function NewProject() {
  return (
    <AdminGuard>
      <NewProjectContent />
    </AdminGuard>
  );
}
