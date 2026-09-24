"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/ideas", label: "Ideas" },
  { href: "/thinking", label: "Fragments" },
  { href: "/travel", label: "Travel" },
  { href: "/planning", label: "Planning" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-nav sticky top-0 z-50 border-b border-line">
      <div className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-[padding] duration-200 ${scrolled ? "py-2" : "py-5"}`}>
        <Link href="/" className="font-serif text-xl" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Ashfak"
            width={128}
            height={40}
            priority
            className="h-8 w-auto object-contain drop-shadow-[0_4px_10px_rgba(31,111,99,0.38)]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-2 py-1 no-underline transition-colors hover:bg-signal/10 hover:text-signal ${
                pathname === l.href ? "bg-signal/10 text-signal" : "text-ink/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-ink transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2 text-sm">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line/60 last:border-b-0">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 no-underline ${
                    pathname === l.href ? "text-signal" : "text-ink/80"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
