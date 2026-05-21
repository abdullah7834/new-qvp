"use client";

export function ContactForm() {
  return (
    <form
      className="rise rise-3 glass rounded-[1.75rem] p-8 md:p-10 self-start"
      onSubmit={(e) => e.preventDefault()}
    >
      <p className="font-display font-medium text-[0.75rem] tracking-[0.16em] uppercase text-[var(--color-primary)]">
        Project enquiry
      </p>
      <h2 className="mt-2 font-display font-semibold text-[1.7rem] leading-tight tracking-tight text-[var(--color-ink)]">
        Send us a brief.
      </h2>

      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-name" className="label block mb-2">
            Full name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            placeholder="Jordan Avery"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="c-company" className="label block mb-2">
            Company
          </label>
          <input
            id="c-company"
            name="company"
            type="text"
            placeholder="Lumen Bank"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="label block mb-2">
            Work email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            placeholder="jordan@company.com"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="c-phone" className="label block mb-2">
            Phone (optional)
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            placeholder="+1 (415) 555-0119"
            className="field"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-service" className="label block mb-2">
            What do you need?
          </label>
          <select
            id="c-service"
            name="service"
            defaultValue=""
            className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2305405a%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[center_right_1rem]"
          >
            <option value="" disabled>
              Select an area of focus
            </option>
            <option>Brand identity &amp; system</option>
            <option>Marketing site / landing</option>
            <option>Product UI / app design</option>
            <option>Strategy &amp; research sprint</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label block mb-2">Approximate budget</label>
          <div className="flex flex-wrap gap-2">
            {[
              "< $15k",
              "$15k — $30k",
              "$30k — $60k",
              "$60k — $120k",
              "$120k+",
            ].map((opt, i) => (
              <label
                key={opt}
                className="cursor-pointer rounded-full border border-[var(--color-line-strong)] px-4 py-1.5 text-[13px] text-[var(--color-ink-soft)] transition-colors has-[input:checked]:bg-[var(--color-ink)] has-[input:checked]:text-[var(--color-canvas)] has-[input:checked]:border-[var(--color-ink)]"
              >
                <input
                  type="radio"
                  name="budget"
                  value={opt}
                  defaultChecked={i === 1}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="label block mb-2">
            About the project
          </label>
          <textarea
            id="c-message"
            name="message"
            required
            rows={5}
            placeholder="A couple of paragraphs is perfect. What you're building, who it's for, what's tricky."
            className="field resize-y"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[12px] text-[var(--color-ink-muted)] max-w-xs">
          We&rsquo;ll reply within one working day. Your details stay with
          us &mdash; full stop.
        </p>
        <button type="submit" className="btn-primary">
          Send the brief
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
