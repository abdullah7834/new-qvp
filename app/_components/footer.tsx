import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/services", label: "Document Attestation" },
  { href: "/services", label: "Visa & Embassy Services" },
  { href: "/services", label: "MOFA Stamping" },
  { href: "/services", label: "HEC / IBCC Attestation" },
];

const COUNTRIES_SERVED = [
  { href: "/services", label: "🇵🇰 Pakistan" },
  { href: "/services", label: "🇮🇳 India" },
  { href: "/services", label: "🇸🇦 Saudi Arabia" },
  { href: "/services", label: "🇦🇪 UAE" },
  { href: "/services", label: "🇶🇦 Qatar" },
  { href: "/services", label: "🇰🇼 Kuwait" },
  { href: "/services", label: "🇧🇭 Bahrain" },
];

const SOCIALS = [
  {
    href: "https://wa.me/923000000000",
    label: "WhatsApp",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.1-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.8 2 .8 2.8 1 3.8.9.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5z" />
        <path d="M3.4 20.6l1.2-4.4A8.6 8.6 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.3-1.2zM12 5.2A6.8 6.8 0 0 0 5.2 12c0 1.4.4 2.8 1.2 4l-.7 2.6 2.7-.7c1.1.7 2.4 1 3.6 1A6.8 6.8 0 0 0 18.8 12 6.8 6.8 0 0 0 12 5.2z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 22.5h4.6V8H.2v14.5zM7.7 8h4.4v2.04h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.49 3.05 5.49 7.01v9.83h-4.6V15.6c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76v7.02H7.7V8z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="mt-24 w-full bg-[var(--color-ink)] text-[var(--color-canvas)] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(227,111,90,0.35),transparent_70%)] drift"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(29,108,127,0.45),transparent_65%)] drift-alt"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand + tagline + WhatsApp CTA */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="relative grid place-items-center h-10 w-10 rounded-xl bg-white text-[var(--color-ink)] font-display font-semibold text-base shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:rotate-6">
                N
                <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] ring-2 ring-[var(--color-ink)]" />
              </span>
              <span className="font-display font-bold text-[1.25rem] tracking-[-0.02em]">
                Northwind
              </span>
            </Link>

            <p className="mt-5 font-display text-[1.05rem] leading-[1.4] max-w-xs text-white/85">
              Quiet, careful attestation work for people who cannot afford a
              mistake.
            </p>

            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25d366] text-white font-display font-medium text-[0.85rem] hover:bg-[#1faa54] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.1-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.8 2 .8 2.8 1 3.8.9.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5z" />
                <path d="M3.4 20.6l1.2-4.4A8.6 8.6 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.3-1.2zM12 5.2A6.8 6.8 0 0 0 5.2 12c0 1.4.4 2.8 1.2 4l-.7 2.6 2.7-.7c1.1.7 2.4 1 3.6 1A6.8 6.8 0 0 0 18.8 12 6.8 6.8 0 0 0 12 5.2z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow !text-[var(--color-accent-soft)] !text-[0.68rem] mb-4">
              Quick links
            </p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-white text-[0.9rem] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow !text-[var(--color-accent-soft)] !text-[0.68rem] mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-white text-[0.9rem] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries served + Contact info */}
          <div>
            <p className="eyebrow !text-[var(--color-accent-soft)] !text-[0.68rem] mb-4">
              Countries served
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-7">
              {COUNTRIES_SERVED.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 hover:text-white text-[0.85rem] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="eyebrow !text-[var(--color-accent-soft)] !text-[0.68rem] mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-[0.88rem] text-white/75">
              <li>
                <a href="mailto:hello@northwind.studio" className="hover:text-white transition-colors">
                  hello@northwind.studio
                </a>
              </li>
              <li>
                <a href="tel:+923000000000" className="hover:text-white transition-colors">
                  +92 300 000 0000
                </a>
              </li>
              <li className="text-white/55 text-[0.82rem] leading-[1.5]">
                Karachi · Lahore · Islamabad
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-[0.82rem] text-white/55">
            © {new Date().getFullYear()} Northwind Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="grid place-items-center h-9 w-9 rounded-full bg-white/8 hover:bg-white/15 text-white/80 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
