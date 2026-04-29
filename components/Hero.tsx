"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import Counter from "./Counter";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.1)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-up");
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 -z-10">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Interior moderno remodelado"
          className="h-full w-full object-cover will-change-transform"
          style={{ transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-ink/55 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/55 lg:via-ink/70 lg:to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40 lg:to-transparent" />
      </div>

      {/* Tech grid + scanline overlay */}
      <div className="grid-pattern absolute inset-0 -z-10 opacity-40" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Floating geometric accents */}
      <div className="pointer-events-none absolute -left-20 top-1/4 -z-10 hidden h-64 w-64 rotate-45 border border-gold/20 lg:block" />
      <div className="pointer-events-none absolute -right-12 bottom-12 -z-10 hidden h-48 w-48 rotate-12 border border-gold/15 lg:block" />

      <div className="container-x relative z-10 flex flex-col gap-10 py-32 pt-40 text-white sm:py-36 lg:py-40">
        <div className="flex max-w-3xl flex-col gap-7">
          <div
            className="flex items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="block h-px w-12 bg-gold" />
            <span className="font-display text-[11px] font-bold uppercase tracking-extra-wide text-gold">
              Soares Remodelações · {site.region}
            </span>
            <span className="hidden h-1 w-1 animate-pulse bg-gold sm:block" />
          </div>

          <h1
            ref={titleRef}
            className="heading-display text-balance text-white opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            Remodelações com{" "}
            <span className="relative inline-block text-gold">
              qualidade, compromisso
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gold/70" />
            </span>
            <br className="hidden md:block" /> e acabamento profissional.
          </h1>

          <p
            className="body-lg max-w-2xl text-white/80 opacity-0 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            Serviços de pladur, piso flutuante, canalização, pinturas,
            ladrilhos, instalação de equipamentos e remodelações em geral.
          </p>

          <div
            className="flex flex-col gap-3 pt-3 opacity-0 animate-fade-up sm:flex-row sm:items-center sm:gap-4"
            style={{ animationDelay: "440ms" }}
          >
            <MagneticButton
              href={site.whatsappMessage}
              target="_blank"
              rel="noreferrer"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="relative h-5 w-5" />
              <span className="relative">Pedir orçamento pelo WhatsApp</span>
            </MagneticButton>
            <a href="#servicos" className="btn-ghost group">
              Ver serviços
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Hero stats */}
        <div
          className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 opacity-0 animate-fade-up sm:grid-cols-4 sm:gap-x-12"
          style={{ animationDelay: "600ms" }}
        >
          {[
            { value: 100, suffix: "%", label: "Satisfação" },
            { value: 10, suffix: "+", label: "Anos a remodelar" },
            { value: 7, suffix: "", label: "Áreas de obra" },
            { value: 0, suffix: "€", label: "Orçamento" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-gold sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="font-display text-[11px] font-semibold uppercase tracking-extra-wide text-white/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 right-8 hidden flex-col items-end gap-3 lg:flex">
        <span className="block h-12 w-px bg-gradient-to-b from-transparent to-gold" />
        <span className="font-display text-[10px] font-semibold uppercase tracking-extra-wide text-white/60">
          Scroll
        </span>
      </div>
    </section>
  );
}
