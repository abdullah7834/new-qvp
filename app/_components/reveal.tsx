"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "section" | "ul" | "ol";

type Props = {
  children: ReactNode;
  className?: string;
  /** Apply child-stagger pattern instead of single-element rise. */
  stagger?: boolean;
  /** Pixels of root-margin offset for triggering early. */
  rootMargin?: string;
  /** Once shown, stop observing. Default true. */
  once?: boolean;
  as?: Tag;
};

export function Reveal({
  children,
  className = "",
  stagger = false,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin, threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, once]);

  const cls = `${stagger ? "reveal-stagger" : "reveal"} ${className}`;
  const dataShown = shown ? "true" : "false";
  const commonProps = { className: cls, "data-shown": dataShown };

  switch (as) {
    case "section":
      return (
        <section ref={ref as React.RefObject<HTMLElement>} {...commonProps}>
          {children}
        </section>
      );
    case "ul":
      return (
        <ul
          ref={ref as unknown as React.RefObject<HTMLUListElement>}
          {...commonProps}
        >
          {children}
        </ul>
      );
    case "ol":
      return (
        <ol
          ref={ref as unknown as React.RefObject<HTMLOListElement>}
          {...commonProps}
        >
          {children}
        </ol>
      );
    case "div":
    default:
      return (
        <div
          ref={ref as unknown as React.RefObject<HTMLDivElement>}
          {...commonProps}
        >
          {children}
        </div>
      );
  }
}
