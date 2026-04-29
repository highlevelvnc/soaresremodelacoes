import { site } from "@/lib/site";
import { ArrowRightIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-canvas py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left" className="order-2 lg:order-1">
            <div className="corner-frame relative">
              <div className="aspect-[4/5] overflow-hidden bg-canvas-dim">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Aplicação de ladrilhos em obra de remodelação"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden bg-ink p-7 text-white sm:block lg:-bottom-8 lg:-left-8 lg:right-auto">
                <p className="max-w-[220px] font-display text-lg font-semibold leading-snug">
                  Cada obra é entregue com o cuidado de quem a faria em casa.
                </p>
                <span className="mt-4 block font-display text-[10px] font-bold uppercase tracking-extra-wide text-gold">
                  — Soares Remodelações
                </span>
              </div>
              <div className="absolute -right-4 top-12 hidden h-16 w-16 border-2 border-gold/40 lg:block animate-float-slow" />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-7 lg:order-2">
            <Reveal variant="right" delay={120}>
              <span className="eyebrow">Sobre nós</span>
            </Reveal>
            <Reveal variant="right" delay={200}>
              <h2 className="heading-section text-balance">
                Uma equipa portuguesa que entrega obras com rigor e bom
                acabamento.
              </h2>
            </Reveal>
            <Reveal variant="right" delay={280}>
              <div className="space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                <p>
                  A <strong className="text-ink">Soares Remodelações</strong>{" "}
                  está focada em serviços completos de remodelação para
                  habitações, lojas e espaços comerciais. Tratamos do projeto
                  de ponta a ponta — do pladur à pintura, dos ladrilhos à
                  canalização — sem subcontratações desconhecidas.
                </p>
                <p>
                  Trabalhamos com comunicação direta, planeamento realista e
                  acabamentos cuidados. O resultado é uma obra entregue dentro
                  do prazo, com qualidade visível em cada detalhe.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={360}>
              <div className="grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
                {[
                  { value: "100%", label: "Acompanhamento direto" },
                  { value: "7", label: "Áreas de especialidade" },
                  { value: "PT", label: "Equipa em Portugal" },
                  { value: "0€", label: "Orçamento sem compromisso" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group relative pl-4 transition-all"
                  >
                    <span className="absolute left-0 top-0 h-full w-px bg-ink/15 transition-all group-hover:bg-gold group-hover:w-[2px]" />
                    <p className="font-display text-3xl font-bold text-ink">
                      {item.value}
                    </p>
                    <p className="mt-1 font-display text-[11px] font-semibold uppercase tracking-extra-wide text-ink/60">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" delay={440}>
              <div className="pt-2">
                <a
                  href={site.whatsappMessage}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-extra-wide text-ink"
                >
                  <span className="relative">
                    <span className="border-b-2 border-gold pb-1">
                      Falar com a equipa
                    </span>
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
