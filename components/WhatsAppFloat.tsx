"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.whatsappMessage}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-3 text-white shadow-ambient-lg transition-all duration-500 sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <span
        className={`relative overflow-hidden whitespace-nowrap font-display text-[12px] font-bold uppercase tracking-extra-wide transition-all duration-500 ${
          hovered ? "max-w-[180px] pr-2 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Falar agora
      </span>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:rotate-12 sm:h-11 sm:w-11">
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>
    </a>
  );
}
