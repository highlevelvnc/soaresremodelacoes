import Image from "next/image";
import { navLinks, services, site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:gap-12 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-light.png"
              alt="Soares Remodelações"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div className="leading-none">
              <span className="block font-display text-base font-extrabold uppercase tracking-tight text-white">
                Soares
              </span>
              <span className="block font-display text-[11px] font-semibold uppercase tracking-extra-wide text-gold">
                Remodelações
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            Soluções completas de remodelação em Portugal. Pladur, piso
            flutuante, canalização, pinturas, ladrilhos e instalação de
            equipamentos — com qualidade, compromisso e bom acabamento.
          </p>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-display uppercase tracking-extra-wide">
              Disponíveis para novos projetos
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappMessage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-5 py-3 font-display text-[11px] font-bold uppercase tracking-extra-wide text-ink transition-colors hover:bg-gold-300"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-display text-[11px] font-bold uppercase tracking-extra-wide text-white transition-colors hover:border-white"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h5 className="font-display text-[11px] font-bold uppercase tracking-extra-wide text-gold">
            Navegação
          </h5>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h5 className="font-display text-[11px] font-bold uppercase tracking-extra-wide text-gold">
            Serviços
          </h5>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href="#servicos"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-7 text-center sm:flex-row sm:text-left">
          <p className="font-display text-[11px] uppercase tracking-extra-wide text-white/50">
            © {year} Soares Remodelações. Todos os direitos reservados.
          </p>
          <p className="font-display text-[11px] uppercase tracking-extra-wide text-white/50">
            Feito com rigor em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
