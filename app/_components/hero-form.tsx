"use client";

import Link from "next/link";

export function HeroForm() {
  return (
    <form
      className="glass rounded-[1.6rem] p-6 md:p-7 relative transition-transform duration-500 hover:-translate-y-0.5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        aria-hidden
        className="absolute -top-3 left-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-ink)] text-[var(--color-canvas)] text-[11px] font-display tracking-[0.18em] uppercase"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
        Request a brief
      </div>

      <h2 className="mt-1 font-display font-semibold text-[1.4rem] leading-tight text-[var(--color-ink)] tracking-tight">
        Tell us about the project.
      </h2>
      <p className="mt-1.5 text-[0.88rem] text-[var(--color-ink-muted)]">
        We reply within one working day with a short note and next steps.
      </p>

      <div className="mt-5 space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="hero-name" className="label block mb-1.5">
              Full name
            </label>
            <input
              id="hero-name"
              name="name"
              type="text"
              placeholder="Jordan Avery"
              className="field transition-all duration-200 focus:scale-[1.01]"
              required
            />
          </div>
          <div>
            <label htmlFor="hero-email" className="label block mb-1.5">
              Work email
            </label>
            <input
              id="hero-email"
              name="email"
              type="email"
              placeholder="jordan@company.com"
              className="field transition-all duration-200 focus:scale-[1.01]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="hero-service" className="label block mb-1.5">
              What do you need?
            </label>
            <select
              id="hero-service"
              name="service"
              className="field appearance-none transition-all duration-200 focus:scale-[1.01] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2305405a%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[center_right_1rem]"
              defaultValue=""
            >
              <option value="" disabled>
                Area of focus
              </option>
              <option>Brand identity</option>
              <option>Marketing site</option>
              <option>Product UI / app</option>
              <option>Strategy sprint</option>
            </select>
          </div>
          <div>
            <label htmlFor="hero-budget" className="label block mb-1.5">
              Approx. budget
            </label>
            <input
              id="hero-budget"
              name="budget"
              type="text"
              placeholder="$25k — $60k"
              className="field transition-all duration-200 focus:scale-[1.01]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full justify-center mt-1 group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
        >
          Send brief
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>

        <p className="text-[11.5px] text-[var(--color-ink-muted)] text-center pt-0.5">
          By submitting you agree to our{" "}
          <Link href="#" className="underline underline-offset-2 hover:text-[var(--color-ink)]">
            privacy notice
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
