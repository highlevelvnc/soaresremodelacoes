"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Stage = "loading" | "fading" | "done";

export default function Loader() {
  const [stage, setStage] = useState<Stage>("loading");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    if (sessionStorage.getItem("soares_loaded")) {
      setStage("done");
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const fadeAt = reduce ? 400 : 1900;
    const doneAt = reduce ? 800 : 2400;

    const t1 = setTimeout(() => setStage("fading"), fadeAt);
    const t2 = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("soares_loaded", "1");
      document.body.style.overflow = "";
    }, doneAt);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || stage === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="A carregar Soares Remodelações"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-500 ${
        stage === "fading"
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      {/* Tech background */}
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-to-center from-transparent via-transparent to-ink/60" />

      {/* Gold accent corners */}
      <span className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-l-2 border-t-2 border-gold/60 sm:left-10 sm:top-10 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-6 top-6 h-6 w-6 border-r-2 border-t-2 border-gold/60 sm:right-10 sm:top-10 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-b-2 border-l-2 border-gold/60 sm:bottom-10 sm:left-10 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b-2 border-r-2 border-gold/60 sm:bottom-10 sm:right-10 sm:h-8 sm:w-8" />

      <div className="relative flex flex-col items-center gap-6 px-6 sm:gap-8">
        {/* Logo with brick-stack reveal */}
        <div className="relative h-24 w-24 sm:h-32 sm:w-32">
          <div className="loader-brick relative h-full w-full">
            <Image
              src="/logo-light.png"
              alt=""
              width={140}
              height={140}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          {/* Gold scanline travelling upward */}
          <div className="loader-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
        </div>

        {/* Wordmark */}
        <div className="loader-text flex flex-col items-center gap-2 opacity-0">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight text-white sm:text-2xl">
            Soares Remodelações
          </span>
          <span className="flex items-center gap-3 font-display text-[10px] font-bold uppercase tracking-extra-wide text-gold sm:text-[11px]">
            <span className="h-1 w-1 animate-pulse rounded-full bg-gold" />
            A preparar a obra
            <span className="h-1 w-1 animate-pulse rounded-full bg-gold" />
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-px w-40 overflow-hidden bg-white/15 sm:w-56">
          <div className="loader-progress absolute inset-y-0 left-0 bg-gradient-to-r from-gold via-gold-300 to-gold" />
        </div>
      </div>
    </div>
  );
}
