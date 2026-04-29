import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gold py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49%, #0a0a0a 49%, #0a0a0a 51%, transparent 51%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Animated geometric accent */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rotate-45 border-2 border-ink/10 animate-float-slow" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rotate-12 border-2 border-ink/5" />

      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="space-y-6">
              <span className="font-display text-[11px] font-bold uppercase tracking-extra-wide text-ink/70">
                Pronto para começar?
              </span>
              <h2 className="heading-section text-balance text-ink">
                Precisa de uma remodelação ou reparação?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
                Entre em contacto com a Soares Remodelações e peça um
                orçamento sem compromisso. Respondemos rapidamente pelo
                WhatsApp.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="flex flex-col gap-5 lg:items-end">
              <a
                href={site.whatsappMessage}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full items-center justify-between gap-4 overflow-hidden bg-ink px-8 py-6 text-white shadow-ambient-lg transition-all duration-500 hover:-translate-y-1 hover:bg-ink-soft sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative flex flex-col text-left">
                  <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-gold">
                    WhatsApp
                  </span>
                  <span className="font-display text-lg font-semibold">
                    Falar pelo WhatsApp
                  </span>
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
              </a>

              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex w-full items-center justify-between gap-4 border-2 border-ink/15 bg-transparent px-8 py-6 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white sm:w-auto"
              >
                <span className="flex flex-col text-left">
                  <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-ink/60 group-hover:text-gold">
                    Telefone direto
                  </span>
                  <span className="font-display text-lg font-semibold">
                    {site.phone}
                  </span>
                </span>
                <PhoneIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
