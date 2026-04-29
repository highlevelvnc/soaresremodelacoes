import { differentiators } from "@/lib/site";
import { differentiatorIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Diferenciais() {
  return (
    <section className="noise relative overflow-hidden bg-ink pb-20 pt-16 text-white tech-gradient sm:pb-32 sm:pt-24">
      <div className="grid-pattern absolute inset-0 opacity-50" />

      {/* Animated gold beam at top */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
          }}
        />
      </div>

      {/* Floating gold accent */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rotate-45 border border-gold/10" />

      <div className="container-x relative">
        <div className="flex items-center gap-3 pb-10 sm:pb-14">
          <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-white/40">
            03 — Diferenciais
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow !text-gold">Porque escolher-nos</span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="heading-section mt-5 text-balance text-white">
                Confiança construída obra a obra. Profissionalismo que se vê em
                cada detalhe.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 h-1 w-16 bg-gold" />
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
                Queremos que receba a obra com a tranquilidade de saber que
                tudo foi pensado, planeado e executado por quem entende do
                ofício.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {differentiators.map((item, idx) => {
                const Icon =
                  differentiatorIcons[
                    item.icon as keyof typeof differentiatorIcons
                  ];
                return (
                  <Reveal key={item.title} delay={idx * 70} variant="fade">
                    <div className="group relative flex h-full gap-4 overflow-hidden bg-ink p-5 transition-all duration-500 hover:bg-ink-soft sm:gap-5 sm:p-7">
                      <div className="absolute inset-y-0 left-0 w-0 bg-gold/[0.04] transition-all duration-500 group-hover:w-full" />
                      <span className="absolute right-5 top-5 font-display text-[10px] font-semibold tracking-extra-wide text-white/20">
                        0{idx + 1}
                      </span>
                      <div className="relative flex h-12 w-12 flex-none items-center justify-center border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink group-hover:rotate-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="relative">
                        <h4 className="font-display text-lg font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
