"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "fade" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  delay?: number;
  className?: string;
};

const variants: Record<Variant, { hidden: string; visible: string }> = {
  up: {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  fade: { hidden: "opacity-0", visible: "opacity-100" },
  left: {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  right: {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-[0.96]",
    visible: "opacity-100 scale-100",
  },
};

export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-60px 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;
  const v = variants[variant];

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform ${
        visible ? v.visible : v.hidden
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
