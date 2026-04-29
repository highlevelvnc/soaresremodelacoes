"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="#inicio"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Soares Remodelações"
            width={48}
            height={48}
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-9 w-9" : "h-11 w-11"
            }`}
            priority
          />
          <div className="leading-none">
            <span
              className={`block font-display font-extrabold uppercase tracking-tight transition-colors duration-300 ${
                scrolled ? "text-ink" : "text-white"
              } text-[15px] group-hover:text-gold`}
            >
              Soares
            </span>
            <span className="block font-display text-[10px] font-semibold uppercase tracking-extra-wide text-gold">
              Remodelações
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-display text-[12px] font-semibold uppercase tracking-extra-wide transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-gold-700"
                      : "text-ink/80 hover:text-ink"
                    : isActive
                      ? "text-gold"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsappMessage}
            target="_blank"
            rel="noreferrer"
            className={`group relative hidden items-center gap-2 overflow-hidden rounded-md px-5 py-2.5 font-display text-[11px] font-bold uppercase tracking-extra-wide transition-all duration-500 lg:inline-flex ${
              scrolled
                ? "bg-ink text-white hover:bg-gold hover:text-ink"
                : "bg-gold text-ink hover:bg-white"
            }`}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <WhatsAppIcon className="relative h-4 w-4" />
            <span className="relative">Pedir orçamento</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md border transition-all duration-300 lg:hidden ${
              scrolled || open
                ? "border-ink/15 text-ink hover:border-ink"
                : "border-white/30 text-white hover:border-white"
            }`}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="border-t border-ink/10 bg-white">
          <nav className="container-x flex flex-col gap-1 py-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${idx * 60 + 100}ms` : "0ms",
                }}
                className={`group flex items-center justify-between border-b border-ink/5 py-4 font-display text-sm font-semibold uppercase tracking-extra-wide text-ink transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-display text-[10px] font-bold text-gold/60">
                    0{idx + 1}
                  </span>
                  {link.label}
                </span>
                <span className="font-body text-xs text-gold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
            <a
              href={site.whatsappMessage}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 font-display text-[12px] font-bold uppercase tracking-extra-wide text-ink shadow-gold"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
