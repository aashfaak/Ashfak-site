import { socialLinks } from "@/lib/socials";

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-3xl">Let&apos;s connect</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        The easiest ways to reach me, or send a note directly below.
      </p>

      <ul className="mt-8 space-y-2 text-sm">
        <li>
          <a href="mailto:mhdashfak03@gmail.com" className="text-signal">mhdashfak03@gmail.com</a>
        </li>
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer" className="text-signal">
              {social.label}
            </a>
          </li>
        ))}
      </ul>

      {/*
        TODO: wire this form up once the backend exists — e.g. write to a
        Firestore "messages" collection, or POST to an API route that does.
        Left as plain, uncontrolled inputs for now.
      */}
      <form className="mt-12 space-y-5">
        <div>
          <label htmlFor="name" className="text-xs text-muted">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs text-muted">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xs text-muted">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-signalDeep"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
