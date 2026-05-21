"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Target value as a number; non-numeric `value` (e.g. "4.9") falls back to the string. */
  to: number;
  /** Duration in ms. */
  duration?: number;
  /** Number of decimals to render. */
  decimals?: number;
  /** Optional prefix / suffix string. */
  prefix?: string;
  suffix?: string;
  className?: string;
};

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

export function CountUp({
  to,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            io.disconnect();
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              setValue(to * easeOutQuint(t));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
