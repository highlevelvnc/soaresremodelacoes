import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gold py-20 sm:py-28"
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
              <span className="inline-flex items-center gap-3 font-display text-[11px] font-bold uppercase tracking-extra-wide text-ink/70">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-ink" />
                Pronto para começar?
              </span>
              <h2 className="heading-section text-balance text-ink">
                Precisa de uma remodelação ou reparação?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
                Fale connosco hoje pelo WhatsApp e receba um orçamento
                personalizado, sem compromisso. Respondemos com rapidez para
                não perder tempo na sua obra.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="flex flex-col gap-5 lg:items-end">
              <a
                href={site.whatsappMessage}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex w-full items-center justify-between gap-3 overflow-hidden bg-ink px-5 py-5 text-white shadow-ambient-lg transition-all duration-500 hover:-translate-y-1 hover:bg-ink-soft sm:w-auto sm:gap-4 sm:px-8 sm:py-6"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative flex flex-col text-left">
                  <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-gold">
                    WhatsApp
                  </span>
                  <span className="font-display text-base font-semibold sm:text-lg">
                    Falar pelo WhatsApp
                  </span>
                </span>
                <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink sm:h-12 sm:w-12">
                  <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </a>

              <a
                href={`tel:${site.phoneRaw}`}
                className="group inline-flex w-full items-center justify-between gap-3 border-2 border-ink/15 bg-transparent px-5 py-5 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white sm:w-auto sm:gap-4 sm:px-8 sm:py-6"
              >
                <span className="flex flex-col text-left">
                  <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-ink/60 group-hover:text-gold">
                    Telefone direto
                  </span>
                  <span className="font-display text-base font-semibold sm:text-lg">
                    {site.phone}
                  </span>
                </span>
                <PhoneIcon className="h-5 w-5 flex-none transition-transform duration-300 group-hover:rotate-12 sm:h-6 sm:w-6" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
