import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/reveal";

const VALUES = [
  {
    n: "01",
    title: "Few clients, long arcs",
    body: "We take on a small number of projects each quarter so we can stay on the ones that matter — months later, not weeks.",
  },
  {
    n: "02",
    title: "Design and code, same room",
    body: "No design-to-engineering translation tax. The person drawing the screen is usually the person shipping it.",
  },
  {
    n: "03",
    title: "Quiet over clever",
    body: "We&rsquo;d rather make the third detail right than add a fourth. Restraint is a design tool.",
  },
  {
    n: "04",
    title: "Plain language",
    body: "No theatre. We tell you what we&rsquo;ll do, what it costs, and when. If a thing isn&rsquo;t working, we say so first.",
  },
];

const TEAM = [
  {
    name: "Iris Marlowe",
    role: "Founder, Brand & Strategy",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2.4&w=400&h=500&q=80",
  },
  {
    name: "Theo Okonkwo",
    role: "Design Director",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.4&w=400&h=500&q=80",
  },
  {
    name: "Sana Iqbal",
    role: "Principal Engineer",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&facepad=2.4&w=400&h=500&q=80",
  },
  {
    name: "Anders Holm",
    role: "Research & Words",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.4&w=400&h=500&q=80",
  },
];

const TIMELINE = [
  { year: "2019", text: "Iris founds the studio in a one-bedroom in Lisbon." },
  { year: "2021", text: "First product engagement; Sana joins from a fintech." },
  { year: "2023", text: "We open a second studio in New York. Quietly." },
  { year: "2026", text: "Four people. Two open seats. Same letters." },
];

export default function AboutPage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="px-6 md:px-10 pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.2fr_1fr] items-end">
          <div>
            <span className="eyebrow rise rise-1">About the studio</span>
            <h1 className="rise rise-2 mt-6 font-display font-semibold text-[var(--color-ink)] text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.04] tracking-[-0.025em]">
              Four people,
              <br />
              <span className="italic font-medium text-[var(--color-primary)]">
                two cities,
              </span>{" "}
              one inbox.
            </h1>
            <p className="rise rise-3 mt-7 max-w-xl text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)]">
              Northwind is an independent studio working at the intersection of
              brand, product, and engineering. We&rsquo;re small on purpose —
              the project you&rsquo;re hiring us for is the one we&rsquo;re
              actually doing.
            </p>
          </div>

          <div className="rise rise-3 relative aspect-[5/4] rounded-[2rem] overflow-hidden border border-[var(--color-line)] shadow-[0_30px_70px_-30px_rgba(15,32,39,0.3)]">
            <div className="absolute inset-0 kenburns">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Studio workspace with daylight"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
            />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2027]/25 via-transparent to-[#fbe2d4]/30" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[var(--color-canvas)]">
              <p className="font-display text-[0.78rem] tracking-[0.18em] uppercase">
                Studio · Lisbon
              </p>
              <p className="font-display text-[0.78rem] tracking-[0.18em] uppercase">
                Nº 04 / 12
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── VALUES ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] items-start">
            <div>
              <span className="eyebrow">How we work</span>
              <h2 className="mt-5 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
                A short, useful set of principles.
              </h2>
            </div>
            <Reveal as="ul" stagger className="grid sm:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <li
                  key={v.n}
                  className="keyline rounded-[1.25rem] bg-white/70 p-6 backdrop-blur-sm"
                >
                  <span className="tile-number">— {v.n}</span>
                  <h3 className="mt-5 font-display font-semibold text-[1.2rem] text-[var(--color-ink)] tracking-tight">
                    {v.title}
                  </h3>
                  <p
                    className="mt-2.5 text-[0.95rem] leading-[1.65] text-[var(--color-ink-soft)]"
                    dangerouslySetInnerHTML={{ __html: v.body }}
                  />
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* ───── TEAM ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">The studio</span>
              <h2 className="mt-5 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
                People who answer their own emails.
              </h2>
            </div>
            <p className="max-w-sm text-[var(--color-ink-muted)] text-[0.95rem] leading-relaxed">
              No account managers, no junior hand-off. You speak with the same
              two people from kickoff to launch.
            </p>
          </div>

          <Reveal as="ul" stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((p) => (
              <li
                key={p.name}
                className="group relative rounded-[1.25rem] overflow-hidden border border-[var(--color-line)] bg-[var(--color-canvas-soft)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 300px, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2027]/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-[var(--color-canvas)]">
                  <p className="font-display font-semibold text-[1.05rem] tracking-tight">
                    {p.name}
                  </p>
                  <p className="text-[12.5px] text-white/80 mt-0.5">{p.role}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ───── TIMELINE ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/70 border border-[var(--color-line)] p-10 md:p-14">
          <span className="eyebrow">A short history</span>
          <ol className="mt-10 grid gap-y-10 md:grid-cols-4 md:gap-x-8 relative">
            <span
              aria-hidden
              className="hidden md:block absolute left-0 right-0 top-3 h-px bg-[var(--color-line-strong)]"
            />
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="hidden md:block absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full bg-[var(--color-primary)]" />
                <p className="font-display font-semibold text-[var(--color-primary)] text-[1.2rem] tracking-tight">
                  {t.year}
                </p>
                <p className="mt-3 text-[0.95rem] leading-[1.6] text-[var(--color-ink-soft)] max-w-xs">
                  {t.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* ───── CTA ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-[#e7f0ec] via-[#f3ece2] to-[#e4ecf3] border border-[var(--color-line)] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-semibold text-[var(--color-ink)] text-[clamp(1.6rem,2.6vw,2.1rem)] leading-[1.15] tracking-tight max-w-xl">
              Want to see how we&rsquo;d approach your brief?
            </h3>
            <p className="mt-2 text-[var(--color-ink-muted)]">
              Send us a couple of paragraphs — we&rsquo;ll reply within a day.
            </p>
          </div>
          <Link href="/contact" className="btn-primary self-start md:self-auto">
            Contact the studio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </>
  );
}
