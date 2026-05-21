"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 md:px-8 pt-3 md:pt-5">
      <div
        className={`relative mx-auto max-w-7xl rounded-3xl bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "shadow-[0_18px_50px_-20px_rgba(15,32,39,0.35)]"
            : "shadow-[0_10px_40px_-22px_rgba(15,32,39,0.25)]"
        }`}
      >
        <div className="relative px-5 md:px-8 h-[68px] flex items-center gap-6">
          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-[var(--color-ink)] text-[var(--color-canvas)] font-display font-semibold text-sm shadow-[0_8px_20px_-10px_rgba(15,32,39,0.6)] transition-transform duration-300 group-hover:rotate-6">
              N
              <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] ring-2 ring-white" />
            </span>
            <span className="font-display font-bold text-[1.1rem] tracking-[-0.02em] text-[var(--color-ink)] hidden sm:block">
              Northwind
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-1 mx-auto">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center px-4 py-2 text-[0.88rem] font-display font-medium tracking-tight transition-colors duration-200 ${
                    active
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-ink)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-1 rounded-full bg-[var(--color-accent)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 ml-auto lg:ml-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex text-[0.88rem] font-display font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/contact"
              className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-[0.85rem] font-display font-medium text-white shadow-[0_8px_24px_-10px_rgba(227,111,90,0.6)] transition-all duration-200 hover:bg-[#cc5a45] hover:-translate-y-0.5"
            >
              Start a project
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile toggle */}
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid place-items-center h-9 w-9 rounded-full bg-[var(--color-canvas-soft)] text-[var(--color-ink)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-5 pb-5 pt-1 flex flex-col gap-1">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 font-display text-[0.95rem] transition-colors ${
                      active
                        ? "bg-[var(--color-canvas-soft)] text-[var(--color-primary)]"
                        : "text-[var(--color-ink)] hover:bg-[var(--color-canvas-soft)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
