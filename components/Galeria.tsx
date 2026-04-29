import { projects, site } from "@/lib/site";
import { ArrowRightIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Galeria() {
  return (
    <section
      id="projetos"
      className="relative overflow-hidden bg-canvas pb-20 pt-16 sm:pb-32 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/[0.04] to-transparent" />

      <div className="container-x relative">
        <div className="flex items-center gap-3 pb-10 sm:pb-14">
          <span className="font-display text-[10px] font-bold uppercase tracking-extra-wide text-ink/40">
            04 — Portfólio
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
      </div>

      <div className="container-x relative">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-5">
              <span className="eyebrow">Projetos</span>
              <h2 className="heading-section text-balance">
                Obras onde a qualidade se vê do primeiro ao último detalhe.
              </h2>
            </div>
            <a
              href={site.whatsappMessage}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 self-start font-display text-sm font-bold uppercase tracking-extra-wide text-ink"
            >
              <span className="border-b-2 border-gold pb-1">
                Pedir orçamento
              </span>
              <ArrowRightIcon className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-3 sm:mt-14 sm:auto-rows-[260px] sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <Reveal
              key={project.title}
              variant="scale"
              delay={idx * 80}
              className={project.span}
            >
              <article className="group relative h-full overflow-hidden bg-ink">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-ink/95" />

                {/* Gold corner brackets */}
                <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 -translate-x-2 -translate-y-2 border-l-2 border-t-2 border-gold opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 translate-x-2 translate-y-2 border-b-2 border-r-2 border-gold opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-flex w-fit bg-gold px-3 py-1 font-display text-[10px] font-bold uppercase tracking-extra-wide text-ink transition-transform duration-500 group-hover:-translate-y-1">
                    {project.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="mt-2 inline-flex translate-y-3 items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-extra-wide text-white/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Falar pelo WhatsApp
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-center font-display text-[12px] font-semibold uppercase tracking-extra-wide text-ink/50">
            Imagens representativas — em breve, fotos das obras Soares
            Remodelações.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
