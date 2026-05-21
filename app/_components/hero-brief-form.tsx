"use client";

export function HeroBriefForm() {
  return (
    <form
      className="relative w-full mx-auto rounded-full bg-white/95 backdrop-blur-md shadow-[0_18px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/30 flex items-center pl-2 pr-1.5 py-1.5 transition-shadow duration-300 hover:shadow-[0_24px_70px_-22px_rgba(0,0,0,0.55)]"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Name */}
      <label className="flex items-center gap-2 flex-1 min-w-0 px-3.5 py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)] shrink-0">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Your name"
          className="w-full bg-transparent outline-none text-[0.88rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)]/70"
        />
      </label>

      <span className="h-7 w-px bg-[var(--color-line-strong)]/50" aria-hidden />

      {/* Contact */}
      <label className="flex items-center gap-2 flex-1 min-w-0 px-3.5 py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)] shrink-0">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <input
          type="email"
          name="contact"
          placeholder="Email or phone"
          aria-label="Email or phone"
          className="w-full bg-transparent outline-none text-[0.88rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)]/70"
        />
      </label>

      <span className="h-7 w-px bg-[var(--color-line-strong)]/50" aria-hidden />

      {/* Service */}
      <label className="hidden sm:flex items-center gap-2 flex-1 min-w-0 px-3.5 py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)] shrink-0">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-3v-7H8v7H5a2 2 0 0 1-2-2z" />
        </svg>
        <select
          name="service"
          aria-label="What service do you need?"
          defaultValue=""
          className="w-full bg-transparent outline-none text-[0.88rem] text-[var(--color-ink)] appearance-none cursor-pointer"
        >
          <option value="" disabled>What you need</option>
          <option>Brand identity</option>
          <option>Marketing site</option>
          <option>Product design</option>
          <option>Strategy sprint</option>
        </select>
      </label>

      <button
        type="submit"
        className="group shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-5 py-3 text-[0.85rem] font-display font-medium text-white transition-all duration-200 hover:bg-[#cc5a45] hover:-translate-y-0.5 active:translate-y-0"
      >
        Send brief
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
