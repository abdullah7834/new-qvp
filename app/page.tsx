import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./_components/reveal";
import { CountUp } from "./_components/count-up";
import { HeroBriefForm } from "./_components/hero-brief-form";

// ─────────────────────────────────────────── data
const STATS: { numeric: number; decimals?: number; label: string }[] = [
  { numeric: 12400, label: "Documents attested" },
  { numeric: 7, label: "Countries served" },
  { numeric: 11, label: "Years of practice" },
  { numeric: 4.9, decimals: 1, label: "Avg. rating · 1,200+" },
];

const SERVICES = [
  {
    n: "01",
    title: "Document Attestation",
    tag: "MOFA · HEC · Embassy",
    body: "Educational, personal, and commercial documents authenticated for use abroad. We coordinate the entire chain of stamps so you do not chase ministries.",
    steps: [
      "Upload scans for a free review",
      "We handle the full seal trail",
      "Originals delivered to your door",
    ],
  },
  {
    n: "02",
    title: "Visa & Embassy Services",
    tag: "Gulf-focused · work, family, student",
    body: "From application drafting to embassy submission and follow-up. An 11-year record across seven destination countries.",
    steps: [
      "Brief us on the destination",
      "We prepare and submit",
      "Status tracked until issuance",
    ],
  },
];

const RISKS = [
  {
    n: "01",
    title: "Rejection at the airport",
    body: "A missing seal or wrong stamp order means a return flight — no refund, a black mark on file.",
  },
  {
    n: "02",
    title: "Multi-year entry ban",
    body: "Improperly attested documents are flagged across Gulf databases. Clerical errors can trigger a ban.",
  },
  {
    n: "03",
    title: "Forfeited fees",
    body: "Embassy fees, courier costs, and lost time are unrecoverable. One mistake can cost PKR 80k+.",
  },
];

const GUARANTEES = [
  "Verified delivery to your address",
  "Complete stamp trail with copies on file",
  "Full refund if we cannot deliver",
];

const STEPS = [
  { n: "01", title: "Submit query", body: "Tell us what you need and where. We respond within one working day." },
  { n: "02", title: "Send documents", body: "Drop originals or schedule a free pickup in major cities." },
  { n: "03", title: "Expert processing", body: "Specialists handle every stamp — notary, HEC, MOFA, embassy." },
  { n: "04", title: "Receive attestation", body: "Sealed, travel-ready documents delivered to your address." },
];

const COUNTRIES = [
  { flag: "🇵🇰", name: "Pakistan", note: "All provinces" },
  { flag: "🇮🇳", name: "India", note: "MEA & embassy" },
  { flag: "🇸🇦", name: "Saudi Arabia", note: "Cultural Mission" },
  { flag: "🇦🇪", name: "UAE", note: "Same-week to most" },
  { flag: "🇶🇦", name: "Qatar", note: "Doha network" },
  { flag: "🇰🇼", name: "Kuwait", note: "Direct ministry" },
  { flag: "🇧🇭", name: "Bahrain", note: "Manama embassy" },
];

const WHY = [
  { title: "Expert team", body: "Specialists on every file. Not a clerk in an inbox." },
  { title: "Zero error policy", body: "Two reviewers check the seal trail before shipping." },
  { title: "Fast processing", body: "Most attestations in 5 – 7 working days." },
  { title: "Government aligned", body: "Direct liaisons with MOFA, HEC, and IBCC." },
  { title: "24/7 support", body: "WhatsApp, email, voice — always answered." },
  { title: "Money back", body: "Full refund if we cannot deliver. Written into your order." },
];

const TESTIMONIALS = [
  {
    name: "Hina Saleem",
    role: "Pharmacist · Jeddah",
    country: "🇸🇦",
    stars: 5,
    body: "Documents reached Jeddah in five working days. Every seal was where it needed to be.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
  },
  {
    name: "Bilal Ahmed",
    role: "Engineer · Dubai",
    country: "🇦🇪",
    stars: 5,
    body: "They handled the entire MOFA chain while I was already on site. Saved me a 14-day round trip.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
  },
  {
    name: "Aisha Rauf",
    role: "Teacher · Doha",
    country: "🇶🇦",
    stars: 5,
    body: "Honest, fast, and they explained every stamp. WhatsApp updates felt like family at the ministry.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
  },
];

const FAQS = [
  {
    q: "How long does attestation usually take?",
    a: "Most attestations are completed in 5 – 7 working days. Express channels can deliver to most Gulf cities within 72 hours, depending on the destination ministry.",
  },
  {
    q: "What documents do you need from me?",
    a: "Originals or notarized copies, depending on the destination, plus a clear scan of your passport bio page. We send a precise list after the first WhatsApp message.",
  },
  {
    q: "How much does it cost?",
    a: "Educational attestation for Gulf countries starts at PKR 6,500 all-in. We quote a single fixed price after seeing your documents — no hidden ministry fees added later.",
  },
  {
    q: "What if my document is lost or damaged in transit?",
    a: "Everything ships via tracked courier with insurance equal to the document's reissue cost. If anything goes wrong on our watch, we cover replacement and re-processing.",
  },
  {
    q: "Do I need to come to your office in person?",
    a: "No. Free pickup in Karachi, Lahore, and Islamabad. For other cities, courier in your originals and we will return them via the same channel.",
  },
  {
    q: "Can you handle documents already partially attested elsewhere?",
    a: "Yes — send us a photo of the seals already on the document and we will tell you exactly what's missing and the cost to finish the chain.",
  },
];

const POSTS = [
  {
    thumb: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    category: "Guide",
    title: "MOFA attestation in 2026 — what changed",
    excerpt: "A plain-language breakdown of the new MOFA fee structure and the pitfalls that get first-timers rejected.",
    minutes: 7,
  },
  {
    thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    category: "Country brief",
    title: "Saudi Arabia: the seal order that saves a week",
    excerpt: "Why submitting to the Cultural Mission before MOFA can shave days off your timeline.",
    minutes: 5,
  },
  {
    thumb: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=80",
    category: "Warning",
    title: "Five errors that cost workers their flight",
    excerpt: "Drawn from 1,000+ rejections we have helped people recover from.",
    minutes: 6,
  },
];

// ─────────────────────────────────────────── tiny atoms
const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden -mt-[88px]">
        <div className="absolute inset-0 kenburns">
          <Image src="/hero_img.webp" alt="" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[#06141a]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06141a]/55 via-[#06141a]/45 to-[#06141a]/80" />

        <div className="relative mx-auto max-w-6xl flex flex-col items-center text-center px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 lg:pt-52 pb-14 md:pb-20">
          <h1 className="rise rise-2 font-display font-semibold tracking-[-0.028em] text-white text-[clamp(1.85rem,4.2vw,3.4rem)] leading-[1.06] max-w-4xl text-balance">
            Considered work,{" "}
            <span className="italic font-medium text-[var(--color-accent-soft)]">built quietly</span>
            <br className="hidden sm:block" /> for teams who feel the difference.
          </h1>

          <p className="rise rise-3 mt-5 max-w-lg text-[0.95rem] md:text-[1rem] leading-[1.7] text-white/80">
            Document attestation, visa filings, and embassy liaison — handled
            end-to-end by specialists who have done this 12,000+ times.
          </p>

          <div className="rise rise-4 mt-9 w-full">
            <HeroBriefForm />
          </div>

          {/* Announcement bar */}
          <div className="mt-14 md:mt-20 w-full">
            <div className="relative rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/15 overflow-hidden">
              <div
                className="marquee py-2.5 px-6
                           [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
                           [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
              >
                <div className="marquee-track flex items-center gap-12 whitespace-nowrap text-[0.8rem] font-display text-white/85">
                  {Array.from({ length: 2 }).map((_, dupe) => (
                    <div key={dupe} aria-hidden={dupe === 1} className="flex items-center gap-12 shrink-0">
                      <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-soft)]" />Express MOFA window open for Q3 travelers</span>
                      <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />New Bahrain attestation desk live in Manama</span>
                      <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />Free pickup · Karachi · Lahore · Islamabad</span>
                      <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-soft)]" />WhatsApp reply within minutes</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ TRUST STATS ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-20 md:mt-24">
        <div className="mx-auto max-w-6xl">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-6 md:gap-x-8 bg-white/60 backdrop-blur-sm border border-[var(--color-line)] rounded-2xl px-6 md:px-10 py-9 md:py-11">
            {STATS.map((s, i) => (
              <li
                key={s.label}
                className={`relative text-center md:text-left ${
                  i !== 0 ? "md:border-l md:border-[var(--color-line-strong)]/30 md:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="font-display font-semibold text-[var(--color-ink)] text-[clamp(1.75rem,2.8vw,2.25rem)] leading-none tracking-[-0.03em]">
                  {s.decimals ? <CountUp to={s.numeric} decimals={s.decimals} /> : <CountUp to={s.numeric} />}
                </div>
                <p className="mt-2.5 text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-muted)] font-display font-medium">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ SERVICES ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl mb-10 md:mb-14">
            <span className="eyebrow">Two practices</span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              Everything you need to move{" "}
              <span className="italic font-medium text-[var(--color-primary)]">legally and quickly</span>.
            </h2>
          </header>

          <Reveal as="ul" stagger className="grid gap-5 md:gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <li
                key={s.n}
                className="group relative rounded-2xl bg-white/70 backdrop-blur-sm border border-[var(--color-line)] p-7 md:p-9 transition-all duration-500 hover:bg-white hover:-translate-y-1 hover:border-[var(--color-primary)]/25 hover:shadow-[0_18px_50px_-24px_rgba(15,32,39,0.18)]"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="tile-number">— {s.n}</span>
                  <span aria-hidden className="grid place-items-center h-10 w-10 rounded-xl bg-[var(--color-canvas-soft)] text-[var(--color-primary)] transition-transform duration-500 group-hover:rotate-6">
                    {s.n === "01" ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6M9 13l2 2 4-4" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16v16H4z" />
                        <circle cx="12" cy="11" r="3" />
                        <path d="M9 17h6" />
                      </svg>
                    )}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-[1.4rem] md:text-[1.55rem] leading-[1.15] text-[var(--color-ink)] tracking-[-0.015em]">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[0.82rem] tracking-[0.04em] text-[var(--color-primary)]">
                  {s.tag}
                </p>
                <p className="mt-4 text-[0.92rem] leading-[1.7] text-[var(--color-ink-soft)]">
                  {s.body}
                </p>

                <ol className="mt-6 space-y-2.5 border-t border-[var(--color-line)] pt-6">
                  {s.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-[0.86rem] text-[var(--color-ink-soft)]">
                      <span className="shrink-0 grid place-items-center h-5 w-5 rounded-full bg-[var(--color-canvas-soft)] text-[var(--color-primary)] text-[10px] font-semibold font-display">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-1.5 font-display font-medium text-[0.88rem] text-[var(--color-primary)] hover:gap-3 transition-all"
                >
                  Learn more <Arrow />
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ DIY WARNING ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl mb-10 md:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.22em] uppercase font-display font-semibold text-[#c0392b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c0392b]" />
              Worth knowing
            </span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              Three things that go wrong when people{" "}
              <span className="italic font-medium text-[#c0392b]">try alone</span>.
            </h2>
            <p className="mt-4 max-w-lg text-[0.92rem] leading-[1.7] text-[var(--color-ink-soft)]">
              Attestation looks like a list of steps. In practice it is a sequence
              of stamps that must arrive in a specific order, with specific
              signatures, on a specific day.
            </p>
          </header>

          <Reveal as="ul" stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RISKS.map((r) => (
              <li
                key={r.n}
                className="relative rounded-2xl bg-white/75 backdrop-blur-sm border border-[var(--color-line)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#c0392b]/25"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[#fde9e5] text-[#c0392b] font-display font-semibold text-[12px]">
                    {r.n}
                  </span>
                  <span className="h-px flex-1 bg-[#fde9e5]" />
                </div>
                <h3 className="font-display font-semibold text-[1.05rem] leading-[1.25] text-[var(--color-ink)] tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-[0.88rem] leading-[1.65] text-[var(--color-ink-soft)]">
                  {r.body}
                </p>
              </li>
            ))}
          </Reveal>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Let experts handle it <Arrow />
            </Link>
            <span className="text-[0.82rem] text-[var(--color-ink-muted)]">
              Free consultation · WhatsApp reply in minutes
            </span>
          </div>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ MONEY BACK GUARANTEE ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden bg-[#0d3a3c] text-white">
            {/* paper grain */}
            <div aria-hidden className="absolute inset-0 grain opacity-[0.35] pointer-events-none" />

            <div className="relative px-6 sm:px-10 lg:px-14 py-14 md:py-20 text-center max-w-3xl mx-auto">
              {/* Minted seal */}
              <div className="inline-flex items-center justify-center mb-7">
                <svg viewBox="0 0 140 140" className="w-28 h-28 md:w-32 md:h-32">
                  <defs>
                    <path
                      id="seal-arc"
                      d="M 70,18 a 52,52 0 1,1 0,104 a 52,52 0 1,1 0,-104"
                      fill="none"
                    />
                  </defs>

                  {/* Outer ring */}
                  <circle cx="70" cy="70" r="66" fill="none" stroke="#e8c98a" strokeWidth="1" opacity="0.4" />
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#e8c98a" strokeWidth="1.5" />

                  {/* Rotating text band */}
                  <g className="seal-spin">
                    <text
                      fill="#e8c98a"
                      fontSize="8.5"
                      fontWeight="600"
                      letterSpacing="2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <textPath href="#seal-arc" startOffset="0">
                        MONEY BACK • GUARANTEE • SINCE 2015 • MONEY BACK • GUARANTEE • SINCE 2015 •
                      </textPath>
                    </text>
                  </g>

                  {/* Inner dashed ring */}
                  <circle
                    cx="70"
                    cy="70"
                    r="40"
                    fill="none"
                    stroke="#e8c98a"
                    strokeWidth="0.6"
                    strokeDasharray="2 3"
                    opacity="0.55"
                  />

                  {/* Center mark */}
                  <text
                    x="70"
                    y="69"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#e8c98a"
                    letterSpacing="0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    100%
                  </text>
                  <text
                    x="70"
                    y="86"
                    textAnchor="middle"
                    fontSize="6.5"
                    fontWeight="600"
                    fill="#e8c98a"
                    letterSpacing="3"
                    opacity="0.85"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    REFUND
                  </text>
                </svg>
              </div>

              <p className="text-[0.66rem] tracking-[0.3em] uppercase font-display font-semibold text-[#e8c98a]">
                Our promise
              </p>
              <h2 className="mt-3 font-display font-semibold text-[clamp(1.6rem,2.9vw,2.4rem)] leading-[1.1] tracking-[-0.025em]">
                We refund every rupee
                <br className="hidden sm:block" />{" "}
                <span className="italic text-[#e8c98a]">if we cannot deliver.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[0.92rem] leading-[1.7] text-white/75">
                No fine print. If your attestation cannot be completed for any
                reason within our control, you get a full refund — written into
                your service order.
              </p>

              {/* Inline conditions row */}
              <ul className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-3 text-left">
                {GUARANTEES.map((g) => (
                  <li key={g} className="flex flex-col items-start gap-3">
                    <span className="grid place-items-center h-9 w-9 rounded-full border border-[#e8c98a]/35 bg-[#e8c98a]/10 text-[#e8c98a]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <p className="text-[0.86rem] leading-[1.55] text-white/85">
                      {g}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-10 pt-7 border-t border-white/10 text-[0.76rem] text-white/55">
                Conditions apply to documents submitted within the agreed timeline ·{" "}
                <Link href="/services" className="underline underline-offset-2 hover:text-white">
                  Read full terms
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ HOW IT WORKS ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <span className="eyebrow">From query to delivered seal</span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              How it works.
            </h2>
          </header>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div aria-hidden className="hidden md:block absolute top-5 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-[repeating-linear-gradient(to_right,var(--color-line-strong)_0_4px,transparent_4px_8px)] opacity-60" />

            <Reveal as="ol" stagger className="relative grid gap-10 md:gap-6 md:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="relative z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line-strong)] font-display font-semibold text-[0.82rem] text-[var(--color-ink)]">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-[1.02rem] text-[var(--color-ink)] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-[1.65] text-[var(--color-ink-soft)] max-w-[16rem]">
                    {s.body}
                  </p>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ COUNTRIES ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl mb-10 md:mb-12">
            <span className="eyebrow">Where we deliver</span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              Seven countries,{" "}
              <span className="italic font-medium text-[var(--color-primary)]">one careful workflow.</span>
            </h2>
          </header>

          <Reveal as="ul" stagger className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {COUNTRIES.map((c, i) => (
              <li
                key={c.name}
                className={`group relative rounded-2xl bg-white/70 backdrop-blur-sm border border-[var(--color-line)] p-5 transition-all duration-500 hover:bg-white hover:-translate-y-1 hover:border-[var(--color-primary)]/30 ${i === 0 ? "lg:col-span-1" : ""}`}
              >
                <span className="text-3xl block leading-none">{c.flag}</span>
                <h3 className="mt-3 font-display font-semibold text-[0.98rem] text-[var(--color-ink)] tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-0.5 text-[0.78rem] text-[var(--color-ink-muted)]">
                  {c.note}
                </p>
              </li>
            ))}
            {/* Trailing "+ ask" tile */}
            <li className="hidden sm:flex flex-col justify-between rounded-2xl border border-dashed border-[var(--color-line-strong)]/50 p-5 text-[var(--color-ink-muted)]">
              <span className="font-display font-semibold text-[0.92rem] text-[var(--color-ink)]">
                Need another?
              </span>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-[0.82rem] text-[var(--color-primary)] mt-3 hover:gap-3 transition-all">
                Ask us <Arrow />
              </Link>
            </li>
          </Reveal>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ WHY CHOOSE US ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <span className="eyebrow">Why choose us</span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              Six reasons clients stay.
            </h2>
          </header>

          <Reveal as="ul" stagger className="grid gap-px bg-[var(--color-line)] rounded-2xl overflow-hidden border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <li
                key={w.title}
                className="bg-[var(--color-canvas)]/85 backdrop-blur-sm p-7 md:p-8 transition-colors duration-300 hover:bg-white"
              >
                <span aria-hidden className="grid place-items-center h-9 w-9 rounded-lg bg-[var(--color-canvas-soft)] text-[var(--color-primary)]">
                  {i === 0 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21a6 6 0 0 1 12 0M16 3.13a4 4 0 0 1 0 7.75M21 21a6 6 0 0 0-3-5.2" /></svg>}
                  {i === 1 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg>}
                  {i === 2 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>}
                  {i === 3 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9l9-7 9 7v12M9 21V12h6v9" /></svg>}
                  {i === 4 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" /></svg>}
                  {i === 5 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                </span>
                <h3 className="mt-5 font-display font-semibold text-[1rem] text-[var(--color-ink)] tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-[1.65] text-[var(--color-ink-soft)]">
                  {w.body}
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ TESTIMONIALS ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl mb-10 md:mb-12">
            <span className="eyebrow">What clients say</span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              Reviews from{" "}
              <span className="italic font-medium text-[var(--color-primary)]">people who flew.</span>
            </h2>
          </header>

          <Reveal as="ul" stagger className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.name}
                className="relative rounded-2xl bg-white/75 backdrop-blur-sm border border-[var(--color-line)] p-7 transition-all duration-500 hover:bg-white hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 text-[var(--color-accent)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < t.stars} />
                  ))}
                </div>
                <p className="mt-4 font-display text-[0.98rem] leading-[1.55] text-[var(--color-ink)] tracking-[-0.005em]">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-[var(--color-line)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="relative h-10 w-10 rounded-full overflow-hidden bg-[var(--color-canvas-soft)] ring-2 ring-white shrink-0">
                      <Image src={t.avatar} alt="" fill className="object-cover" sizes="40px" />
                    </span>
                    <div className="leading-tight min-w-0">
                      <p className="font-display font-semibold text-[0.88rem] text-[var(--color-ink)] truncate">
                        {t.name}
                      </p>
                      <p className="text-[0.75rem] text-[var(--color-ink-muted)] truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-xl leading-none shrink-0" aria-label="Destination">{t.country}</span>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ FAQS ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl grid gap-10 lg:gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left — header */}
          <header className="lg:sticky lg:top-32">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              Questions we hear{" "}
              <span className="italic font-medium text-[var(--color-primary)]">most weeks.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[0.92rem] leading-[1.7] text-[var(--color-ink-soft)]">
              Cannot find your question here? Message us on WhatsApp — we
              answer specifics faster in chat.
            </p>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-display font-medium text-[var(--color-primary)] hover:gap-3 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.1-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.8 2 .8 2.8 1 3.8.9.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5z" /><path d="M3.4 20.6l1.2-4.4A8.6 8.6 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.3-1.2zM12 5.2A6.8 6.8 0 0 0 5.2 12c0 1.4.4 2.8 1.2 4l-.7 2.6 2.7-.7c1.1.7 2.4 1 3.6 1A6.8 6.8 0 0 0 18.8 12 6.8 6.8 0 0 0 12 5.2z" /></svg>
              Ask on WhatsApp <Arrow />
            </a>
          </header>

          {/* Right — accordion (native <details> = no JS state needed) */}
          <Reveal as="ul" stagger className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {FAQS.map((f) => (
              <li key={f.q}>
                <details className="group">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-5 select-none">
                    <span className="font-display font-medium text-[1rem] md:text-[1.05rem] text-[var(--color-ink)] tracking-[-0.01em] transition-colors group-hover:text-[var(--color-primary)] group-open:text-[var(--color-primary)]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 grid place-items-center h-7 w-7 rounded-full border border-[var(--color-line-strong)]/40 text-[var(--color-ink)] mt-0.5 transition-all duration-300 group-open:rotate-45 group-open:bg-[var(--color-ink)] group-open:text-[var(--color-canvas)] group-open:border-[var(--color-ink)]"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </summary>
                  <div className="pr-12 pb-5 -mt-1 text-[0.9rem] leading-[1.7] text-[var(--color-ink-soft)]">
                    {f.a}
                  </div>
                </details>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ BLOG ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32">
        <div className="mx-auto max-w-6xl">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
            <div className="max-w-xl">
              <span className="eyebrow">From the desk</span>
              <h2 className="mt-3 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
                Latest writing.
              </h2>
            </div>
            <Link href="/blog" className="btn-ghost self-start sm:self-auto">
              All posts <Arrow />
            </Link>
          </header>

          <Reveal as="ul" stagger className="grid gap-5 md:gap-6 md:grid-cols-3">
            {POSTS.map((p) => (
              <li
                key={p.title}
                className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-line)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-white"
              >
                <div className="relative w-full aspect-[5/3] overflow-hidden">
                  <Image
                    src={p.thumb}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-display tracking-[0.18em] uppercase font-semibold text-[var(--color-ink)]">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-[1.02rem] leading-[1.3] text-[var(--color-ink)] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.86rem] leading-[1.6] text-[var(--color-ink-soft)]">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[0.78rem]">
                    <Link href="/blog" className="inline-flex items-center gap-1.5 font-display font-medium text-[var(--color-primary)] hover:gap-3 transition-all">
                      Read more <Arrow />
                    </Link>
                    <span className="text-[var(--color-ink-muted)]">{p.minutes} min</span>
                  </div>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ═══════════════════════════════════════ FINAL CTA ═══════════════════════════════════════ */}
      <Reveal as="section" className="px-5 sm:px-8 lg:px-12 mt-24 md:mt-32 mb-4">
        <div className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden bg-[#0e1c22] text-white">
          {/* subtle dot grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-14 px-6 sm:px-10 lg:px-14 py-12 md:py-16">
            {/* LEFT — copy + CTAs */}
            <div className="text-left">
              <span className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.22em] uppercase font-display font-semibold text-[#a7d7c5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
                Free 15-minute consultation
              </span>
              <h2 className="mt-4 font-display font-semibold text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.08] tracking-[-0.025em] text-balance">
                Don&rsquo;t risk your career —{" "}
                <span className="italic text-[var(--color-accent-soft)]">let our experts</span> handle it.
              </h2>
              <p className="mt-4 max-w-md text-[0.92rem] leading-[1.7] text-white/70">
                Send us a photo of your documents. We will tell you exactly
                what is needed, what it costs, and when it ships — usually
                within minutes.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25d366] text-white font-display font-medium text-[0.88rem] shadow-[0_14px_36px_-14px_rgba(37,211,102,0.55)] transition-all duration-200 hover:bg-[#1faa54] hover:-translate-y-0.5"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.1-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.8 2 .8 2.8 1 3.8.9.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5z" />
                    <path d="M3.4 20.6l1.2-4.4A8.6 8.6 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.3-1.2zM12 5.2A6.8 6.8 0 0 0 5.2 12c0 1.4.4 2.8 1.2 4l-.7 2.6 2.7-.7c1.1.7 2.4 1 3.6 1A6.8 6.8 0 0 0 18.8 12 6.8 6.8 0 0 0 12 5.2z" />
                  </svg>
                  WhatsApp us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/8 ring-1 ring-white/20 text-white font-display font-medium text-[0.88rem] transition-all duration-200 hover:bg-white/12 hover:-translate-y-0.5"
                >
                  Get free consultation
                </Link>
              </div>

              <p className="mt-6 text-[0.76rem] text-white/50">
                We reply within minutes · 9am – 9pm PKT
              </p>
            </div>

            {/* RIGHT — WhatsApp chat preview */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm rounded-[1.4rem] overflow-hidden bg-[#e7ddd2] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
                {/* WhatsApp header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#075e54] text-white">
                  <span className="grid place-items-center h-9 w-9 rounded-full bg-white/15 text-white font-display font-semibold text-sm">
                    N
                  </span>
                  <div className="leading-tight">
                    <p className="font-display font-semibold text-[0.88rem]">Northwind Attestation</p>
                    <p className="text-[0.7rem] text-white/75 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#25d366] inline-block" />
                      online · replies in minutes
                    </p>
                  </div>
                </div>

                {/* Chat body */}
                <div
                  className="relative px-4 py-5 space-y-3"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(15,32,39,0.04) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                >
                  {/* Incoming (user) bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-[#dcf8c6] text-[#0e1c22] text-[0.82rem] leading-[1.45] rounded-2xl rounded-tr-md px-3.5 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      Hi, I need to attest my BSc degree for Saudi Arabia. Can you help?
                      <span className="block text-[10px] text-[#5a6a72] mt-1 text-right">10:42 AM</span>
                    </div>
                  </div>

                  {/* Outgoing (us) bubble */}
                  <div className="flex">
                    <div className="max-w-[85%] bg-white text-[#0e1c22] text-[0.82rem] leading-[1.45] rounded-2xl rounded-tl-md px-3.5 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      Hello! Yes — please send a clear photo of the degree and your passport bio page.
                      <span className="block text-[10px] text-[#5a6a72] mt-1">10:43 AM</span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="max-w-[85%] bg-white text-[#0e1c22] text-[0.82rem] leading-[1.45] rounded-2xl rounded-tl-md px-3.5 py-2 shadow-[0_1px_1px_rgba(0,0,0,0.08)]">
                      We can have it sealed and delivered in Riyadh in <span className="font-semibold">6 working days</span> for <span className="font-semibold">PKR 7,500</span> all-in.
                      <span className="block text-[10px] text-[#5a6a72] mt-1">10:43 AM</span>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex">
                    <div className="bg-white rounded-2xl rounded-tl-md px-3.5 py-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.08)] inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0e6b54] animate-pulse" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0e6b54] animate-pulse [animation-delay:0.15s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0e6b54] animate-pulse [animation-delay:0.3s]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating timing badge */}
              <span className="hidden md:inline-flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#0e6b54] font-display font-semibold text-[10px] tracking-[0.18em] uppercase shadow-[0_10px_28px_-10px_rgba(0,0,0,0.35)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25d366] animate-pulse" />
                Avg. reply 3 min
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
