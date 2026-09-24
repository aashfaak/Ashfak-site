import { goals } from "@/lib/data";

export default function Planning() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl">Planning</h1>
      <p className="mt-3 max-w-prose text-sm text-muted">
        What I&apos;m working toward right now.
        {/* Some goals can later be marked private via the admin panel */}
      </p>

      <div className="mt-10">
        <h2 className="font-serif text-xl">Goals</h2>
        <ul className="mt-4 space-y-5">
          {goals.map((g) => (
            <li key={g.title}>
              <div className="flex items-center justify-between text-sm">
                <span>{g.title}</span>
                <span className="text-muted">{g.progress}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-line">
                <div
                  className="h-1.5 rounded-full bg-signal"
                  style={{ width: `${g.progress}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="font-serif text-xl">Future wishlist</h2>
        <ul className="mt-4 grid gap-6 sm:grid-cols-3">
          <li>
            <p className="text-xs text-muted">Things I want to learn</p>
            {/* TODO: fill in */}
          </li>
          <li>
            <p className="text-xs text-muted">Places I want to visit</p>
            {/* TODO: fill in */}
          </li>
          <li>
            <p className="text-xs text-muted">Things I want to build</p>
            {/* TODO: fill in */}
          </li>
        </ul>
      </div>
    </div>
  );
}
