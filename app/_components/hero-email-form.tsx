"use client";

export function HeroEmailForm() {
  return (
    <form
      className="relative max-w-md rounded-full bg-white shadow-[0_12px_40px_-16px_rgba(15,32,39,0.25)] ring-1 ring-[var(--color-line)] flex items-center pl-5 pr-1.5 py-1.5 transition-shadow duration-300 hover:shadow-[0_18px_50px_-18px_rgba(15,32,39,0.32)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex-1 min-w-0">
        <label
          htmlFor="hero-email"
          className="block text-[10px] font-medium tracking-[0.06em] text-[var(--color-ink-muted)] mb-0.5"
        >
          Your email address
        </label>
        <input
          id="hero-email"
          name="email"
          type="email"
          placeholder="hello@yourcompany.com"
          className="w-full bg-transparent outline-none text-[0.92rem] text-[#0f2027] placeholder:text-[var(--color-ink-muted)]/60"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#2d5f54] px-5 py-3 text-[0.85rem] font-display font-medium text-white transition-all duration-200 hover:bg-[#234d44] hover:-translate-y-0.5 active:translate-y-0 group"
      >
        Get Started
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
      </button>

      <span
        aria-hidden
        className="absolute -left-6 -bottom-6 grid grid-cols-4 gap-1.5 opacity-50"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#3d6b66]/40" />
        ))}
      </span>
    </form>
  );
}
