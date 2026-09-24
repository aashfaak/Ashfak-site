"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AdminGuard from "@/components/admin/AdminGuard";
import CloudinaryUpload from "@/components/admin/CloudinaryUpload";

const forms = {
  ideas: {
    title: "idea",
    collection: "ideas",
    fields: [
      ["title", "Title", "input", true],
      ["what", "What is it?", "textarea", true],
      ["why", "Why did you think about it?", "textarea", true],
      ["problem", "What problem does it solve?", "textarea", true],
      ["who", "Who could use it?", "textarea", true],
      ["how", "How might it work?", "textarea", true],
    ],
  },
  thinking: {
    title: "fragment",
    collection: "thinking",
    fields: [
      ["title", "Title", "input", true],
      ["excerpt", "Excerpt", "textarea", true],
      ["category", "Category", "input", true],
      ["date", "Date", "date", true],
      ["content", "Full fragment", "textarea", false],
    ],
  },
  travel: {
    title: "travel entry",
    collection: "trips",
    fields: [
      ["title", "Title", "input", true],
      ["location", "Location", "input", true],
      ["date", "Date", "input", true],
      ["excerpt", "Excerpt", "textarea", true],
      ["content", "Travel notes", "textarea", false],
    ],
  },
  planning: {
    title: "planning goal",
    collection: "goals",
    fields: [
      ["title", "Goal", "input", true],
      ["progress", "Progress (0-100)", "number", true],
      ["category", "Category", "input", true],
    ],
  },
} as const;

type FormType = keyof typeof forms;
type Field = (typeof forms)[FormType]["fields"][number];

function slugify(text: string) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function CollectionForm({ type }: { type: FormType }) {
  const router = useRouter();
  const form = forms[type];
  const [values, setValues] = useState<Record<string, string>>({
    date: type === "thinking" ? new Date().toISOString().slice(0, 10) : "",
    progress: type === "planning" ? "0" : "",
    status: type === "ideas" ? "idea" : "",
    imageUrl: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function updateValue(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const document = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          key === "progress" ? Number(value) : value.trim(),
        ]),
      );
      await addDoc(collection(db, form.collection), {
        ...document,
        slug: slugify(values.title),
        createdAt: serverTimestamp(),
      });
      router.push("/admin/dashboard");
    } catch {
      setError("Could not save. Check that Firestore is set up and rules allow writes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <a href="/admin/dashboard" className="text-sm text-muted no-underline">
        ← Admin dashboard
      </a>
      <h1 className="mt-2 font-serif text-2xl">Add {form.title}</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="text-xs text-muted">Image</label>
          <CloudinaryUpload value={values.imageUrl} onChange={(url) => updateValue("imageUrl", url)} />
        </div>
        {form.fields.map(([key, label, inputType, required]: Field) => (
          <div key={key}>
            <label className="text-xs text-muted" htmlFor={key}>{label}</label>
            {inputType === "textarea" ? (
              <textarea
                id={key}
                required={required}
                rows={key === "content" ? 8 : 3}
                value={values[key] ?? ""}
                onChange={(event) => updateValue(key, event.target.value)}
                className={inputClass}
              />
            ) : (
              <input
                id={key}
                required={required}
                type={inputType}
                min={key === "progress" ? 0 : undefined}
                max={key === "progress" ? 100 : undefined}
                value={values[key] ?? ""}
                onChange={(event) => updateValue(key, event.target.value)}
                className={inputClass}
              />
            )}
          </div>
        ))}

        {type === "ideas" && (
          <div>
            <label className="text-xs text-muted" htmlFor="status">Status</label>
            <select
              id="status"
              value={values.status ?? "idea"}
              onChange={(event) => updateValue("status", event.target.value)}
              className={inputClass}
            >
              <option value="idea">Idea</option>
              <option value="researching">Researching</option>
              <option value="building">Building</option>
              <option value="launched">Launched</option>
              <option value="paused">Paused</option>
            </select>
          </div>
        )}

        {error && <p className="text-sm text-clay">{error}</p>}
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-signalDeep disabled:opacity-50"
        >
          {saving ? "Saving…" : `Save ${form.title}`}
        </button>
      </form>
    </div>
  );
}

const inputClass = "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-ink";

export default function AdminCollection({ params }: { params: { type: string } }) {
  const type = params.type as FormType;
  const form = forms[type];

  if (!form) {
    return <div className="mx-auto max-w-2xl px-6 py-16 text-sm text-muted">Collection not found.</div>;
  }

  return (
    <AdminGuard>
      <CollectionForm type={type} />
    </AdminGuard>
  );
}
