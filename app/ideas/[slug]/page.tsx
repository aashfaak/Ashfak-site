import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ideas } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";
import { renderMarkdownText } from "@/components/MarkdownContent";

type IdeaDisplayText = {
  concept: string;
  problem: string;
  solution: string;
  features?: { title: string; body: string };
  coreIdea?: string;
  categories?: string;
  privacy?: string;
  workflow?: string;
  future?: string;
  trust?: string;
  campus?: string;
  example?: string;
  business?: string;
  mvp?: string;
  bigger?: string;
  statusDetails?: string;
};

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export default function IdeaDetail({ params }: { params: { slug: string } }) {
  const idea = ideas.find((item) => item.slug === params.slug);

  if (!idea) return notFound();

  const isMarketplace = idea.slug === "university-marketplace";

  const content: IdeaDisplayText | null = isMarketplace
    ? {
        concept: "A student-only marketplace designed specifically for university communities, where students can buy, sell, exchange, or give away items they no longer need.\n\nInstead of competing with large general marketplaces, the platform would focus on campus-level transactions, making it easier for students to find relevant items from people within their own university or nearby campus area.\n\nThe goal is to create a simple, trusted space for students to exchange everyday university essentials.",
        problem: "University students frequently need things such as:\n\n- Textbooks and academic materials\n- Calculators and lab equipment\n- Used laptops and accessories\n- Furniture and room essentials\n- Bicycles\n- Electronics\n- Clothing\n- Event or club-related items\n- Admission and exam preparation materials\n\nAt the same time, students often have these items sitting unused after completing a course, semester, or academic year.\n\nHowever, buying and selling within a university is usually scattered across:\n\n- Facebook groups\n- Messenger groups\n- WhatsApp groups\n- Friends and classmates\n- Informal campus networks\n\nThese channels make it difficult to discover listings, compare items, communicate with sellers, and determine whether someone actually belongs to the university.",
        solution: "Build a verified student marketplace where users can create listings and connect with other students from the same university.\n\nA student could:\n\n1. Create an account using their university email or student verification.\n2. Select their university and campus.\n3. Browse available items.\n4. Search by category, price, condition, or location.\n5. Contact the seller.\n6. Arrange a campus pickup or mutually agreed meeting point.\n7. Mark the item as sold after completing the transaction.\n\nThe platform would focus on making the process simple, local, and student-oriented.",
        features: {
          title: "Core Features",
          body: "### Student Verification\nUsers could verify their identity through:\n\n- University email\n- Student ID verification\n- University-specific registration\n\nVerified users could receive a visible verification badge.\n\n### Marketplace Listings\nEach listing could contain:\n\n- Title\n- Description\n- Price\n- Condition\n- Category\n- Photos\n- Location/campus\n- Date posted\n- Seller profile\n\n### Categories\nPossible categories:\n\n- Books\n- Electronics\n- Computers & Accessories\n- Academic Equipment\n- Furniture\n- Clothing\n- Transportation\n- Room Essentials\n- Other\n\n### Search & Filters\nStudents could search by:\n\n- Keyword\n- Category\n- Price range\n- Condition\n- Campus\n- Distance/location\n- Recently posted\n\n### Seller Profiles\nEach seller could have a basic profile showing:\n\n- Name\n- University\n- Verification status\n- Active listings\n- Completed/sold listings\n- Joined date\n\nA reputation system could potentially be added later."
        },
        trust: "Trust would be an important part of the platform.\n\nPossible mechanisms include:\n\n- Student verification\n- Report listing\n- Report user\n- Block user\n- Verified seller badge\n- Listing moderation\n- Suspicious activity detection\n- Basic transaction guidelines\n- Community reporting\n\nThe platform would not necessarily process payments initially. Students could arrange payment and exchange directly.",
        campus: "The biggest difference from a general marketplace would be campus proximity.\n\nFor example:\n\n> Premier University → Chittagong\n\nA student could see items available from other students within their university community instead of searching through thousands of unrelated marketplace listings.\n\nA listing could show:\n\n**Casio Calculator FX-991ES Plus**\n৳800 · Good Condition\n📍 Premier University\n👤 Verified Student\n\nThis makes the marketplace highly relevant to student needs.",
        example: "A student finishes a semester and no longer needs a textbook.\n\nInstead of posting it in several Facebook groups, they could:\n\n**Create Listing → Add Photos → Set Price → Publish**\n\nAnother student searching for that course could find the book, contact the seller, and arrange a convenient campus pickup.\n\nThe same concept could work for laptops, calculators, furniture, bicycles, lab equipment, and many other items.",
        future: "If the platform gains users, it could eventually expand beyond simple buying and selling.\n\nPossible features:\n\n- Free / Give Away\n- Rent an Item\n- Item Exchange\n- Campus Deals\n- Wanted Listings\n- Student Services\n- Wishlist\n- Saved Searches\n- In-app messaging\n- Seller ratings\n- University-specific marketplaces\n- Multiple campus support\n- Delivery/pickup coordination\n\nA future version could potentially support multiple universities while keeping each university community separated and verified.",
        business: "The initial version could remain completely free to build a user base.\n\nPossible future revenue models could include:\n\n- Featured listings\n- Sponsored listings\n- University/business advertisements\n- Premium seller tools\n- Small promotional fees for commercial sellers\n\nThe goal would be to first validate whether students actually need and use the platform before introducing monetization.",
        mvp: "The first version doesn't need everything.\n\nA simple MVP could include:\n\n**Authentication**\n→ Student verification\n\n**Listings**\n→ Create, edit, delete, and browse listings\n\n**Categories**\n→ Books, Electronics, Academic, Furniture, etc.\n\n**Search & Filters**\n→ Find relevant items quickly\n\n**Profiles**\n→ Basic verified student profiles\n\n**Contact Seller**\n→ Simple messaging/contact mechanism\n\n**Report System**\n→ Report users or listings\n\nThis would be enough to test the core idea.",
        bigger: "The marketplace is not really about selling used books or calculators.\n\nIt is about creating a digital marketplace around a university community.\n\nA university already has a naturally connected network of people who share similar needs, locations, courses, schedules, and environments.\n\nThe idea is to turn that existing community into a structured, searchable, and trusted digital marketplace.",
      }
    : null;

  const displayText: IdeaDisplayText = content ?? {
    concept: idea.concept,
    problem: idea.problem,
    solution: idea.solution,
    workflow: idea.workflow,
    features: idea.features ? { title: idea.featuresTitle ?? "Possible Features", body: idea.features } : undefined,
    categories: idea.categories,
    trust: idea.trust,
    privacy: idea.privacy,
    example: idea.example,
    mvp: idea.mvp,
    coreIdea: idea.coreIdea,
    future: idea.future,
    statusDetails: idea.statusDetails,
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/ideas" className="text-sm text-muted no-underline">
        ← All ideas
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="font-serif text-3xl">{idea.title}</h1>
        <StatusBadge status={idea.status} />
      </div>

      {idea.imageUrl && (
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl bg-line">
          <Image
            src={idea.imageUrl}
            alt={idea.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-8 space-y-8 text-sm text-ink/80">
        <section>
          <h2 className="font-serif text-xl text-ink">Concept</h2>
          <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.concept)}</div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">The Problem</h2>
          <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.problem)}</div>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Possible Solution</h2>
          <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.solution)}</div>
        </section>

        {displayText.workflow && (
          <section>
            <h2 className="font-serif text-xl text-ink">How It Could Work</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.workflow)}</div>
          </section>
        )}

        {displayText.features && (
          <section>
            <h2 className="font-serif text-xl text-ink">{displayText.features.title}</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.features.body)}</div>
          </section>
        )}

        {displayText.categories && (
          <section>
            <h2 className="font-serif text-xl text-ink">Possible Categories</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.categories)}</div>
          </section>
        )}

        {displayText.trust && (
          <section>
            <h2 className="font-serif text-xl text-ink">Trust &amp; Safety</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.trust)}</div>
          </section>
        )}

        {displayText.privacy && (
          <section>
            <h2 className="font-serif text-xl text-ink">Privacy &amp; Moderation</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.privacy)}</div>
          </section>
        )}

        {displayText.campus && (
          <section>
            <h2 className="font-serif text-xl text-ink">Campus-Based Experience</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.campus)}</div>
          </section>
        )}

        {displayText.example && (
          <section>
            <h2 className="font-serif text-xl text-ink">Example Use Case</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.example)}</div>
          </section>
        )}

        {displayText.future && (
          <section>
            <h2 className="font-serif text-xl text-ink">Future Possibilities</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.future)}</div>
          </section>
        )}

        {displayText.business && (
          <section>
            <h2 className="font-serif text-xl text-ink">Business Model</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.business)}</div>
          </section>
        )}

        {displayText.mvp && (
          <section>
            <h2 className="font-serif text-xl text-ink">MVP</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.mvp)}</div>
          </section>
        )}

        {displayText.bigger && (
          <section>
            <h2 className="font-serif text-xl text-ink">The Bigger Idea</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.bigger)}</div>
          </section>
        )}

        {displayText.coreIdea && (
          <section>
            <h2 className="font-serif text-xl text-ink">Core Idea</h2>
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.coreIdea)}</div>
          </section>
        )}

        <section>
          <h2 className="font-serif text-xl text-ink">Status</h2>
          <div className="mt-2 flex items-center gap-2">
            <StatusBadge status={idea.status} />
          </div>
          {displayText.statusDetails && (
            <div className="mt-2 leading-relaxed">{renderMarkdownText(displayText.statusDetails)}</div>
          )}
        </section>
      </div>
    </div>
  );
}
