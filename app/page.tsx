import Link from "next/link";
import { projects, ideas, thinking, trips, goals } from "@/lib/data";
import FeaturedProjects from "@/components/FeaturedProjects";
import SectionHeading from "@/components/SectionHeading";
import HeroArt from "@/components/HeroArt";
import Image from "next/image";
import { socialLinks } from "@/lib/socials";
import ContentCarousel from "@/components/ContentCarousel";

export default function Home() {
  const profileImage = "/ashfak.jpg";
  const latestThinking = thinking.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero-panel mx-auto grid max-w-5xl items-center gap-10 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
        <div className="relative z-10">
          <h1 className="max-w-xl font-serif leading-tight">
            <span className="block text-5xl text-signal sm:text-6xl">Hi! I&apos;m Ashfak.</span>
            <span className="mt-5 block max-w-lg text-3xl leading-snug text-ink sm:text-4xl">
              A place for the things I build, the ideas I chase, and the places I wander
              <span className="text-clay"> —</span>
            </span>
            
            <span className="mt-6 block font-sans text-sm font-medium uppercase tracking-[0.18em] text-muted">
              Welcome in. Explore at your own pace.
            </span>
          </h1>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-signal px-5 py-2.5 text-sm text-paper no-underline transition-colors hover:bg-signalDeep"
            >
              Explore my work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-ink no-underline transition-colors hover:border-ink"
            >
              More about me
            </Link>
          </div>
          <div className="connect-panel mt-8 max-w-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-signal">Connect with me</p>
                <p className="mt-1 text-sm text-muted">Whatever you want to talk about, find me here.</p>
              </div>
              
            </div>
            <nav aria-label="Social media links" className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Ashfak on ${social.label}`}
                  className="social-link group flex items-center gap-2 rounded-xl border border-line bg-white/65 px-2.5 py-2 text-xs text-ink no-underline transition-all hover:-translate-y-0.5 hover:border-signal hover:bg-white"
                >
                  <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal text-[10px] font-bold text-paper transition-colors group-hover:bg-signalDeep">
                    {social.mark}
                  </span>
                  <span className="truncate">{social.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="order-first mx-auto w-full max-w-xs md:order-none md:max-w-none">
          <div className="relative px-7 py-5 sm:px-10">
            <div className="relative">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Ashfak"
                  width={420}
                  height={480}
                  priority
                  className="aspect-[7/8] w-full object-cover"
                />
              ) : (
                <HeroArt />
              )}
              <span className="hero-bubble absolute left-0 top-[12%] bg-signal text-paper sm:-left-3">Data</span>
              <span className="hero-bubble absolute right-0 top-[22%] bg-clay text-paper sm:-right-3">Software</span>
              <span className="hero-bubble absolute -left-1 top-[52%] bg-paper text-signal sm:-left-4">Ideas</span>
              <span className="hero-bubble absolute right-0 top-[45%] bg-signalDeep text-paper sm:-right-4">Projects</span>
              
              <span className="hero-bubble absolute -left-1 bottom-[25%] bg-white text-clay sm:-left-3">Experiments</span>
              <span className="hero-bubble absolute left-[18%] bottom-2 bg-clay text-paper">Journeys</span>
              <span className="hero-bubble absolute right-[18%] top-5 bg-white text-clay sm:-right-3">Places</span>
              <span className="hero-bubble absolute right-0 bottom-[28%] bg-paper text-signal sm:-right-3">Stories</span>
              <span className="hero-bubble absolute left-[8%] top-[30%] bg-ink text-paper sm:-left-4">Explore</span>
              <span className="hero-bubble absolute right-[18%] bottom-2 bg-white text-clay">Observe</span>

            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section id="projects" className="color-band-mint mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
            title="Projects"
          action={
            <Link href="/projects" className="text-sm text-signal no-underline">
              View More
            </Link>
          }
        />
        <FeaturedProjects projects={projects} />
      </section>

      {/* Ideas */}
      <section id="ideas" className="color-band-peach border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            title="Ideas"
            action={<Link href="/ideas" className="text-sm text-signal no-underline">View More</Link>}
          />
          <ContentCarousel>
            {ideas.map((idea) => (
              <article key={idea.slug} className="content-card group flex h-[18rem] w-[18rem] max-w-[calc(100vw-3rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(28.571%-0.857rem)]">
                <div className="relative -mx-5 -mt-5 mb-4 h-40 shrink-0 overflow-hidden rounded-t-2xl bg-clay/10">
                  {idea.imageUrl ? (
                    <Image src={idea.imageUrl} alt={idea.title} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 84vw" className="object-cover" />
                  ) : (
                    <span className="flex h-full items-center justify-center font-serif text-3xl text-clay/60">I</span>
                  )}
                </div>
                <h3 className="font-serif text-lg group-hover:text-signal">{idea.title}</h3>
              </article>
            ))}
          </ContentCarousel>
        </div>
      </section>

      {/* Latest fragments */}
      <section id="thinking" className="color-band-lilac border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            title="Latest fragments"
            action={
              <Link href="/thinking" className="text-sm text-signal no-underline">
                View More
              </Link>
            }
          />
          <ContentCarousel>
            {latestThinking.map((t) => (
              <Link key={t.slug} href={`/thinking/${t.slug}`} className="content-card group flex h-[18rem] w-[18rem] max-w-[calc(100vw-3rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl p-5 no-underline transition-transform hover:-translate-y-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(28.571%-0.857rem)]">
                <div className="relative -mx-5 -mt-5 mb-4 h-40 shrink-0 overflow-hidden rounded-t-2xl bg-signal/10">
                  {t.imageUrl ? (
                    <Image src={t.imageUrl} alt={t.title} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 84vw" className="object-cover" />
                  ) : (
                    <span className="flex h-full items-center justify-center font-serif text-3xl text-signal/60">T</span>
                  )}
                </div>
                <h3 className="font-serif text-lg text-ink group-hover:text-signal">{t.title}</h3>
              </Link>
            ))}
          </ContentCarousel>
        </div>
      </section>

      {/* Recent journey + current plans */}
      <section id="travel" className="color-band-mint mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-16">
          <div>
            <SectionHeading
              title="Recent journey"
              action={<Link href="/travel" className="text-sm text-signal no-underline">View More</Link>}
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip) => (
                <Link key={trip.slug} href={`/travel/${trip.slug}`} className="content-card group flex h-[18rem] flex-col overflow-hidden rounded-2xl p-6 no-underline transition-transform hover:-translate-y-1">
                  <div className="relative -mx-6 -mt-6 mb-5 h-40 shrink-0 overflow-hidden rounded-t-2xl bg-signal/10">
                    {trip.imageUrl ? (
                      <Image src={trip.imageUrl} alt={trip.title} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                    ) : (
                      <span className="flex h-full items-center justify-center font-serif text-3xl text-signal/60">T</span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-ink group-hover:text-signal">{trip.title}</h3>
                </Link>
              ))}
            </div>
          </div>
          <div id="planning" className="content-card rounded-2xl p-6">
            <SectionHeading title="Current plans" />
            <ul className="space-y-4">
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
        </div>
      </section>

      {/* About and contact */}
      <section id="about" className="color-band-lilac border-t border-line">
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
          <div className="content-card rounded-2xl p-6">
            <SectionHeading title="About" action={<Link href="/about" className="text-sm text-signal no-underline">View More</Link>} />
            <p className="max-w-prose text-sm leading-6 text-muted">
              I&apos;m a CSE student at Premier University Chittagong, building across web, mobile, data, and AI while documenting what I learn.
            </p>
          </div>
          <div id="contact" className="content-card rounded-2xl p-6">
            <SectionHeading title="Let&apos;s connect" action={<Link href="/contact" className="text-sm text-signal no-underline">View More</Link>} />
            <p className="text-sm text-muted">Have an idea, question, or project to discuss?</p>
            <a href="mailto:mhdashfak03@gmail.com.com" className="mt-3 inline-block text-sm text-signal">mhdashfak03@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
