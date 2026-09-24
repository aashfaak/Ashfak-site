"use client";

import { ChangeEvent, useState } from "react";

type CloudinaryUploadProps = {
  value: string;
  onChange: (url: string) => void;
};

export default function CloudinaryUpload({ value, onChange }: CloudinaryUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file || !cloudName || !uploadPreset) return;

    setUploading(true);
    setError("");
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("upload_preset", uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body },
      );
      const result = await response.json();
      if (!response.ok || !result.secure_url) {
        throw new Error("Cloudinary upload failed");
      }
      onChange(result.secure_url);
    } catch {
      setError("Upload failed. Check your Cloudinary cloud name and upload preset.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  if (!cloudName || !uploadPreset) {
    return (
      <p className="mt-1 text-xs text-muted">
        Add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to .env.local to enable image uploads.
      </p>
    );
  }

  return (
    <div className="mt-1 space-y-2">
      <label className="inline-flex cursor-pointer rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink">
        <span>{uploading ? "Uploading..." : value ? "Replace image" : "Upload image"}</span>
        <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} className="sr-only" />
      </label>
      {value && (
        <div className="flex items-center gap-3">
          <img src={value} alt="Uploaded preview" className="h-20 w-20 rounded-md object-cover" />
          <button type="button" onClick={() => onChange("")} className="text-xs text-muted hover:text-ink">
            Remove image
          </button>
        </div>
      )}
      {error && <p className="text-xs text-clay">{error}</p>}
    </div>
  );
}
