"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Variant = "up" | "fade" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.setAttribute("data-revealed", "true");
      return;
    }

    el.setAttribute("data-revealed", "false");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-60px 0px", threshold: 0.1 },
    );

    observer.observe(el);

    const safety = setTimeout(() => {
      el.setAttribute("data-revealed", "true");
    }, 3500);

    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, []);

  const Tag = as as any;

  return (
    <Tag
      ref={ref as any}
      data-reveal={variant}
      style={{ transitionDelay: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
}
