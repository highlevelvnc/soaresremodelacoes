import { process } from "@/lib/site";
import Reveal from "./Reveal";

export default function Processo() {
  return (
    <section className="relative overflow-hidden bg-canvas-alt pb-20 pt-16 sm:pb-32 sm:pt-24">
      <div className="grid-pattern-light absolute inset-0 opacity-50" />
      <div className="container-x relative">
        <div className="flex items-center gap-3 pb-10 sm:pb-14">
          <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-ink/40">
            05 — Como trabalhamos
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
      </div>
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mx-auto justify-center">
              Como trabalhamos
            </span>
            <h2 className="heading-section mt-5 text-balance">
              Um processo simples, do primeiro contacto à entrega da obra.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              Quatro passos claros para garantir que a sua remodelação corre
              sem surpresas.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line with gold accent dots */}
          <div className="pointer-events-none absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent lg:block" />
          <div
            className="pointer-events-none absolute left-0 right-0 top-[64px] hidden lg:flex"
            aria-hidden
          >
            <div className="container-x flex items-center justify-around">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="block h-2 w-2 rounded-full bg-gold/80 ring-4 ring-canvas-alt"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.step} delay={index * 120}>
                <div className="group relative flex h-full flex-col gap-4 bg-canvas-alt p-6 transition-all duration-500 hover:bg-white sm:gap-5 sm:p-8">
                  <div className="absolute inset-x-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-baseline gap-3">
                    <span className="relative font-display text-5xl font-bold text-ink/10 transition-all duration-500 group-hover:text-gold">
                      {step.step}
                      <span className="absolute -inset-1 -z-10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 bg-gold/30" />
                    </span>
                    <span className="h-px flex-1 bg-ink/15" />
                    <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-ink/40">
                      {index === process.length - 1 ? "Final" : "Etapa"}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {step.description}
                  </p>

                  {/* Subtle dot indicator */}
                  <span className="absolute bottom-4 right-4 h-1.5 w-1.5 bg-ink/20 transition-all duration-500 group-hover:bg-gold group-hover:scale-150" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
