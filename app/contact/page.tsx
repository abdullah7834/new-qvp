import Link from "next/link";
import { ContactForm } from "../_components/contact-form";
import { Reveal } from "../_components/reveal";

const OFFICES = [
  {
    city: "Lisbon",
    country: "Portugal",
    address: "Rua das Janelas Verdes, 32\n1200-690 Lisboa",
    hours: "Mon — Fri · 09:00 — 18:00 WET",
  },
  {
    city: "New York",
    country: "United States",
    address: "61 Greenpoint Avenue, 3F\nBrooklyn, NY 11222",
    hours: "Mon — Thu · 09:00 — 18:00 ET",
  },
];

const FAQ = [
  {
    q: "How long until we hear back?",
    a: "Usually within one working day. If your project is a fit, we&rsquo;ll suggest a 30-minute intro call.",
  },
  {
    q: "Do you work with stealth or pre-launch teams?",
    a: "Often. Most of our brand-system work is for companies still under wraps. NDAs are fine.",
  },
  {
    q: "Can you start next week?",
    a: "Sometimes. We keep a small buffer for short engagements, but bigger projects typically queue 4 — 6 weeks.",
  },
  {
    q: "Do you do equity-only work?",
    a: "Not as a rule, but we&rsquo;ll consider blended arrangements for stage-appropriate teams we love.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ───── HERO + FORM ───── */}
      <section className="px-6 md:px-10 pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* Left — copy + meta */}
          <div className="flex flex-col">
            <span className="eyebrow rise rise-1">Contact</span>
            <h1 className="rise rise-2 mt-6 font-display font-semibold text-[var(--color-ink)] text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.03] tracking-[-0.025em]">
              Tell us about
              <br />
              <span className="italic font-medium text-[var(--color-primary)]">
                the work ahead.
              </span>
            </h1>
            <p className="rise rise-3 mt-7 max-w-md text-[1.05rem] leading-[1.7] text-[var(--color-ink-soft)]">
              The more context the better — a few paragraphs is perfect. Links,
              decks, half-formed thoughts, all welcome. We read every note.
            </p>

            <dl className="rise rise-4 mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="label">Email us directly</dt>
                <dd className="mt-2 font-display text-[1.05rem] text-[var(--color-ink)]">
                  <Link
                    href="mailto:hello@northwind.studio"
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    hello@northwind.studio
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="label">Phone (Lisbon)</dt>
                <dd className="mt-2 font-display text-[1.05rem] text-[var(--color-ink)]">
                  +1 (415) 555-0119
                </dd>
              </div>
              <div>
                <dt className="label">Press & speaking</dt>
                <dd className="mt-2 font-display text-[1.05rem] text-[var(--color-ink)]">
                  press@northwind.studio
                </dd>
              </div>
              <div>
                <dt className="label">Careers</dt>
                <dd className="mt-2 font-display text-[1.05rem] text-[var(--color-ink)]">
                  Two open seats —{" "}
                  <Link href="#" className="text-[var(--color-primary)] underline underline-offset-2">
                    view roles
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right — form (client component) */}
          <ContactForm />
        </div>
      </section>

      {/* ───── OFFICES ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">Studios</span>
          <h2 className="mt-5 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em] max-w-xl">
            Two doors, both open.
          </h2>

          <Reveal as="div" stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                className="keyline rounded-[1.5rem] bg-white/70 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(215,235,225,0.7),transparent_65%)] drift"
                />
                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display font-semibold text-[1.6rem] text-[var(--color-ink)] tracking-tight">
                      {o.city}
                    </h3>
                    <span className="tile-number">{o.country}</span>
                  </div>
                  <p className="mt-5 font-body text-[0.97rem] leading-[1.65] text-[var(--color-ink-soft)] whitespace-pre-line">
                    {o.address}
                  </p>
                  <p className="mt-4 text-[13px] text-[var(--color-ink-muted)] font-display">
                    {o.hours}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Reveal>

      {/* ───── FAQ ───── */}
      <Reveal as="section" className="px-6 md:px-10 mt-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display font-semibold text-[var(--color-ink)] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em]">
              The questions we&rsquo;re asked most.
            </h2>
            <p className="mt-4 text-[var(--color-ink-muted)] max-w-sm">
              Don&rsquo;t see yours? Add it to the form and we&rsquo;ll answer
              in the reply.
            </p>
          </div>

          <Reveal as="ul" stagger className="space-y-3">
            {FAQ.map((f, i) => (
              <li
                key={f.q}
                className="keyline rounded-[1.25rem] bg-white/70 backdrop-blur-sm p-6 md:p-7"
              >
                <details className="group">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <span className="font-display font-medium text-[1.05rem] text-[var(--color-ink)] tracking-tight">
                      <span className="text-[var(--color-ink-muted)] font-normal mr-3">
                        0{i + 1}
                      </span>
                      {f.q}
                    </span>
                    <span className="mt-1 shrink-0 h-7 w-7 grid place-items-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink)] transition-transform duration-300 group-open:rotate-45">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p
                    className="mt-4 text-[0.97rem] leading-[1.7] text-[var(--color-ink-soft)] max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: f.a }}
                  />
                </details>
              </li>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </>
  );
}
