# Ashfak — Build · Think · Explore

The public-facing site from your plan: Home, About, Projects, Ideas, Fragments,
Travel, Planning, Contact. Next.js 14 (App Router) + TypeScript +
Tailwind CSS. All content currently comes from `lib/data.ts` (mock data) —
this is the frontend only, ready for you to wire the backend into.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's built

- All 8 public pages, including dynamic project pages (`/projects/[slug]`)
  and dynamic thinking posts (`/thinking/[slug]`), generated from `lib/data.ts`.
- Shared `Nav` / `Footer`, plus `StatusBadge`, `ProjectCard`, `SectionHeading`
  components in `components/`.
- Typed content shapes in `lib/types.ts` — mirror your planned Firestore
  collections (`projects`, `ideas`, `thinking`, `travels`, `plans`).
- Design: serif "Fraunces" for headings + "Space Grotesk" for UI, paper/ink
  palette with a teal "signal" accent, defined in `tailwind.config.ts`.

## Recent tweaks

- Hero section now has a right-side visual (`components/HeroArt.tsx`) — an
  abstract placeholder graphic. Swap it for your own photo whenever you have
  one; it's a single component, so no other file needs to change.
- Nav collapses into a hamburger menu below the `md` breakpoint
  (`components/Nav.tsx`), so links no longer disappear on a narrow screen.

## Admin panel (new)

- `/admin` — login page (Firebase email/password).
- `/admin/dashboard` — protected shell showing content counts + a recent
  activity placeholder. `components/admin/AdminGuard.tsx` handles the
  redirect-if-signed-out logic; `lib/useAuth.ts` / `lib/firebase.ts` wrap
  Firebase Auth.
- Copy `.env.local.example` → `.env.local` and fill in your Firebase web
  config, then create one user for yourself in the Firebase console
  (Authentication → Users) — there's no public sign-up form by design.
- Add `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and
  `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` to `.env.local` to enable image
  uploads in the admin forms. The upload preset must be unsigned.
- To show your portrait in the home hero, place an image named `me.jpg` in
  the `public` folder.
- `npm install` again first (added the `firebase` package).
- This is the shell only — per-section editors (Projects, Ideas, Fragments,
  Travel, Planning, Messages: list + add/edit forms, Draft/Publish)
  aren't built yet; marked with `TODO` in `app/admin/dashboard/page.tsx`.

## What's intentionally left for you (per your plan)

Search the codebase for `TODO` — each marks a specific spot:

1. **Firebase Auth + Admin Panel** — no `/admin` route exists yet. When you
   build it, `lib/data.ts` is the shape to replace: each exported array
   (`projects`, `ideas`, etc.) should become a Firestore read instead.
2. **Firestore** — swap the static imports in each page for real queries
   once your collections exist (draft/publish status maps to `StatusBadge`
   already).
3. **Cloudinary** — admin forms upload images directly to Cloudinary and save
  the returned `imageUrl` in Firestore. Screenshots/galleries on project,
  travel pages are still marked with `TODO` comments.
4. **Contact form** — the form in `app/contact/page.tsx` is uncontrolled
   HTML with no submit handler yet; hook it to an API route or Firestore
   write.
5. **Search + categories, responsive admin, draft→preview→publish flow** —
   all from your plan, not started; they depend on the admin panel existing
   first.

## Structure

```
app/
  layout.tsx, globals.css        root layout + design tokens
  page.tsx                       Home
  about/, projects/, ideas/,
  thinking/, travel/,
  planning/, contact/            one folder per section
components/                      shared UI
lib/types.ts, lib/data.ts        content shapes + mock data
```
