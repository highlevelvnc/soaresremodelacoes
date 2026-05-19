export const site = {
  name: "Soares Remodelações",
  phone: "+351 935 875 215",
  phoneRaw: "351935875215",
  whatsapp: "https://wa.me/351935875215",
  whatsappMessage:
    "https://wa.me/351935875215?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20%C3%A0%20Soares%20Remodela%C3%A7%C3%B5es.",
  email: "geral@soaresremodelacoes.pt",
  region: "Portugal",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon:
    | "pladur"
    | "floor"
    | "tools"
    | "remodel"
    | "plumbing"
    | "paint"
    | "tile";
};

export const services: Service[] = [
  {
    id: "pladur",
    title: "Pladur",
    description:
      "Paredes, tetos falsos, sancas e divisórias com acabamento liso, pronto a pintar.",
    icon: "pladur",
  },
  {
    id: "piso-flutuante",
    title: "Piso flutuante",
    description:
      "Aplicação de pavimento flutuante com nivelamento cuidado e remates limpos.",
    icon: "floor",
  },
  {
    id: "instalacao-equipamentos",
    title: "Instalação de equipamentos",
    description:
      "Montagem de eletrodomésticos, sanitários e mobiliário, com acabamentos prontos a usar.",
    icon: "tools",
  },
  {
    id: "remodelacao",
    title: "Remodelação",
    description:
      "Obras totais ou parciais em casas, apartamentos, lojas e espaços comerciais.",
    icon: "remodel",
  },
  {
    id: "canalizacao",
    title: "Canalização",
    description:
      "Reparações, substituições e novas instalações de canalização com garantia de estanquicidade.",
    icon: "plumbing",
  },
  {
    id: "pinturas",
    title: "Pinturas",
    description:
      "Interiores e exteriores com preparação de superfícies e tintas de qualidade profissional.",
    icon: "paint",
  },
  {
    id: "ladrilhos",
    title: "Ladrilhos",
    description:
      "Aplicação de azulejo e mosaico em cozinhas, casas de banho, pavimentos e revestimentos.",
    icon: "tile",
  },
];

export const differentiators = [
  {
    title: "Atendimento direto",
    description:
      "Falamos consigo do primeiro contacto à entrega — sem intermediários a perder informação.",
    icon: "support",
  },
  {
    title: "Orçamento personalizado",
    description:
      "Cada espaço é único. Preparamos uma proposta clara, detalhada e sem compromisso.",
    icon: "quote",
  },
  {
    title: "Qualidade nos acabamentos",
    description:
      "Rigor estético e técnico em cada detalhe, dos remates às juntas, para um resultado duradouro.",
    icon: "verified",
  },
  {
    title: "Cumprimento de prazos",
    description:
      "Planeamos com realismo e executamos com método para entregar dentro do tempo combinado.",
    icon: "clock",
  },
  {
    title: "Equipa experiente",
    description:
      "Profissionais qualificados em cada área da obra — do pladur à pintura, do piso à canalização.",
    icon: "team",
  },
  {
    title: "Soluções completas",
    description:
      "Da pequena reparação à remodelação integral, tratamos de tudo numa só equipa de confiança.",
    icon: "layers",
  },
];

export const process = [
  {
    step: "01",
    title: "Contacto inicial",
    description:
      "Fale connosco pelo WhatsApp ou telefone e descreva-nos a sua ideia ou necessidade.",
  },
  {
    step: "02",
    title: "Análise do serviço",
    description:
      "Avaliamos o local, esclarecemos dúvidas e estudamos a melhor solução técnica.",
  },
  {
    step: "03",
    title: "Orçamento personalizado",
    description:
      "Recebe uma proposta clara e detalhada, com prazos, materiais e valores transparentes.",
  },
  {
    step: "04",
    title: "Execução da obra",
    description:
      "Mãos à obra com rigor e acompanhamento permanente até à entrega final.",
  },
];

export const projects = [
  {
    title: "Cozinha contemporânea",
    category: "Remodelação completa",
    alt: "Remodelação completa de cozinha contemporânea — armários, bancada e iluminação por Soares Remodelações",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Casa de banho moderna",
    category: "Ladrilhos & canalização",
    alt: "Casa de banho remodelada com ladrilhos modernos e canalização nova",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Pintura profissional",
    category: "Pinturas",
    alt: "Pintura interior profissional em habitação — preparação de superfícies e tintas de qualidade",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Teto falso em pladur",
    category: "Pladur & iluminação",
    alt: "Teto falso em pladur com sancas e iluminação embutida — execução pela Soares Remodelações",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Aplicação de ladrilhos",
    category: "Ladrilhos",
    alt: "Aplicação de ladrilhos cerâmicos em pavimento e revestimento de parede",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Espaço comercial",
    category: "Remodelação integral",
    alt: "Remodelação integral de espaço comercial em Portugal — pladur, pinturas e pavimentos",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    span: "lg:col-span-2",
  },
];

type HeroStat = {
  value: number;
  suffix: string;
  label: string;
  display?: string;
};

export const heroStats: HeroStat[] = [
  { value: 7, suffix: "", label: "Especialidades" },
  { value: 24, suffix: "h", label: "Resposta WhatsApp" },
  { value: 100, suffix: "%", label: "Acompanhamento" },
  { value: 0, suffix: "", label: "Equipa local", display: "PT" },
];
