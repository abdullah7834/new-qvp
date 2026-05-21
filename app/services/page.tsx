import Link from "next/link";
import { Reveal } from "../_components/reveal";

const SERVICES = [
  {
    n: "01",
    title: "Brand Systems",
    tag: "Identity · Voice · Motion",
    body: "Identities built to scale beyond the logo. We design the typography, motion, photography direction, and the tiny rules that hold a brand together across surfaces.",
    bullets: [
      "Naming & verbal identity",
      "Logo, marks, and core system",
      "Typography & color architecture",
      "Brand guidelines (living document)",
    ],
    timeline: "6 — 10 weeks",
    from: "from $32k",
  },
  {
    n: "02",
    title: "Marketing & Web",
    tag: "Strategy · Design · Build",
    body: "Marketing sites and landing pages designed and built in the same room. Considered structure, real copy, and the kind of details that make a site feel maintained.",
    bullets: [
      "Information architecture",
      "Design system + page library",
      "Next.js / Astro build",
      "Editorial CMS handoff",
    ],
    timeline: "5 — 8 weeks",
    from: "from $24k",
  },
  {
    n: "03",
    title: "Product & App",
    tag: "Interfaces · Flows · Prototypes",
    body: "Product surfaces for SaaS, dashboards, internal tools, and consumer apps. We model the system, not just the screens — so the next forty features fit too.",
    bullets: [
      "Product audits & teardown",
      "Flow design & prototyping",
      "Component library (Figma + code)",
      "Engineering pairing",
    ],
    timeline: "Ongoing or 8 — 12 weeks",
    from: "from $38k",
  },
  {
    n: "04",
    title: "Strategy & Research",
    tag: "Sprints · Interviews · Positioning",
    body: "Customer interviews, positioning sprints, and lightweight roadmaps for teams between 0 → 1 and 1 → 10. Sharp questions, plain language, useful artifacts.",
    bullets: [
      "Customer interviews (8 — 15)",
      "Positioning workshops",
      "Messaging architecture",
      "Light roadmap & next-quarter brief",
    ],
    timeline: "3 — 5 weeks",
    from: "from $18k",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Listen",
    body: "A 60-minute call. We ask more than we pitch. You leave with a one-page recap, whether or not we work together.",
  },
  {
    n: "02",
    title: "Shape",
    body: "A short written proposal — scope, timeline, fee, and the questions we still need to answer. No 40-page decks.",
  },
  {
    n: "03",
    title: "Make",
    body: "Weekly working sessions, daily Loom updates, one Linear board. You see the work as it&rsquo;s being made.",
  },
  {
    n: "04",
    title: "Hand off",
    body: "Documented, dependable, and ready to maintain. We&rsquo;re available for one month after launch, on the house.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="px-6 md:px-10 pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow rise rise-1">Practice</span>
          <h1 className="rise rise-2 mt-6 font-display font-semibold text-[var(--color-ink)] text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1.02] tracking-[-0.025em] max-w-4xl">
            Four ways we
            <br />
            <span className="italic font-medium text-[var(--color-primary)]">
              work with you.
            </span>
          </h1>
          <p className="rise rise-3 mt-7 max-w-2xl text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)]">
            Each engagement is shaped to the question you&rsquo;re actually
            asking — but most fall into one of the four practices below. Mix
            them, sequence them, or start small.
          </p>
        </div>
      </section>

      {/* ───── SERVICES LIST ───── */}
      <section className="px-6 md:px-10 mt-20">
        <Reveal as="ul" stagger className="mx-auto max-w-7xl space-y-5">
          {SERVICES.map((s) => (
            <li
              key={s.n}
              className="keyline group relative grid gap-8 lg:grid-cols-[auto_1.4fr_1fr_auto] items-start rounded-[1.5rem] bg-white/70 backdrop-blur-sm p-8 md:p-10"
            >
              <div>
                <span className="tile-number">— {s.n}</span>
              </div>

              <div>
                <p className="font-display font-medium text-[0.78rem] tracking-[0.16em] uppercase text-[var(--color-primary)]">
                  {s.tag}
                </p>
                <h2 className="mt-3 font-display font-semibold text-[1.7rem] md:text-[2rem] text-[var(--color-ink)] tracking-[-0.02em] leading-[1.1]">
                  {s.title}
                </h2>
                <p className="mt-4 text-[1rem] leading-[1.65] text-[var(--color-ink-soft)] max-w-lg">
                  {s.body}
                </p>
              </div>

              <ul className="space-y-2.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[0.95rem] text-[var(--color-ink-soft)]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      className="mt-1 shrink-0"
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="lg:text-right space-y-2 lg:min-w-[150px]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)] font-display font-medium">
                    Timeline
                  </p>
                  <p className="mt-1 font-display text-[var(--color-ink)] text-[0.95rem]">
                    {s.timeline}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)] font-display font-medium">
                    Investment
                  </p>
                  <p className="mt-1 font-display text-[var(--color-ink)] text-[0.95rem]">
                    {s.from}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-display font-medium text-[var(--color-primary)] hover:gap-3 transition-all"
                >
                  Enquire
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </Reveal>
      </section>

      {/* ───── PROCESS ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Process</span>
            <h2 className="mt-5 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.1] tracking-[-0.02em]">
              A small, transparent loop —{" "}
              <span className="italic font-medium text-[var(--color-primary)]">
                repeated until done.
              </span>
            </h2>
          </div>

          <Reveal as="ol" stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li
                key={p.n}
                className="keyline rounded-[1.25rem] bg-gradient-to-br from-white/85 to-white/55 backdrop-blur-sm p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="tile-number">— {p.n}</span>
                  <span className="font-display font-semibold text-[2.2rem] text-[var(--color-primary)]/15 leading-none">
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-[1.2rem] text-[var(--color-ink)] tracking-tight">
                  {p.title}
                </h3>
                <p
                  className="mt-2.5 text-[0.95rem] leading-[1.65] text-[var(--color-ink-soft)]"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ───── FAQ-ish CTA ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[var(--color-ink)] text-[var(--color-canvas)] p-10 md:p-14 grid gap-8 md:grid-cols-[1.4fr_1fr] items-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(227,111,90,0.4),transparent_70%)] drift"
          />
          <div className="relative">
            <span className="eyebrow !text-[var(--color-accent-soft)]">
              Have a budget under $15k?
            </span>
            <h3 className="mt-5 font-display font-semibold text-[clamp(1.7rem,2.8vw,2.2rem)] leading-[1.15] tracking-tight">
              We&rsquo;ll still take your email.
            </h3>
            <p className="mt-3 text-white/75 max-w-md">
              We don&rsquo;t fit every project — but we know studios that do.
              Send us a note and we&rsquo;ll point you somewhere useful.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--color-canvas)] text-[var(--color-ink)] font-display font-medium hover:bg-white transition-colors w-fit md:justify-self-end"
          >
            Send an email
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </>
  );
}
