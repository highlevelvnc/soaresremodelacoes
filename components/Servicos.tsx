import { services, site } from "@/lib/site";
import { ArrowRightIcon, serviceIcons, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Servicos() {
  return (
    <section id="servicos" className="relative bg-canvas-alt py-20 sm:py-32">
      <div className="grid-pattern-light absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-5">
              <span className="eyebrow">Especialidades</span>
              <h2 className="heading-section text-balance">
                Sete especialidades, uma só equipa para a sua obra.
              </h2>
            </div>
            <p className="max-w-md text-base text-ink/70">
              Reunimos numa equipa as áreas mais procuradas em remodelação —
              tratamos do projeto de ponta a ponta, com responsabilidade
              única.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 80} className="h-full">
                <article className="service-card group flex h-full flex-col">
                  <span className="absolute right-6 top-6 font-display text-[11px] font-semibold tracking-extra-wide text-ink/30 transition-colors duration-300 group-hover:text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-ink text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -inset-2 -z-10 border border-gold/0 transition-all duration-500 group-hover:border-gold/40" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/65">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
                    <a
                      href={site.whatsappMessage}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-[11px] font-bold uppercase tracking-extra-wide text-ink/70 transition-colors duration-300 group-hover:text-gold-700"
                    >
                      Pedir orçamento
                    </a>
                    <ArrowRightIcon className="h-4 w-4 text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" />
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={services.length * 80} className="h-full">
            <article className="group relative flex h-full flex-col justify-between overflow-hidden bg-ink p-7 text-white tech-gradient">
              <div className="grid-pattern absolute inset-0 opacity-30" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all duration-700 group-hover:bg-gold/20" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center bg-gold text-ink transition-transform duration-500 group-hover:scale-110">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  Não encontrou o seu serviço?
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  Fale connosco. Estudamos qualquer projeto de remodelação ou
                  pequena reparação.
                </p>
              </div>
              <a
                href={site.whatsappMessage}
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 inline-flex items-center gap-2 border-t border-white/20 pt-5 font-display text-[11px] font-bold uppercase tracking-extra-wide text-gold transition-all"
              >
                Falar pelo WhatsApp
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
