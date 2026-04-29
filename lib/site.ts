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
      "Aplicação de pladur para paredes, tetos falsos, divisórias e soluções modernas para interiores.",
    icon: "pladur",
  },
  {
    id: "piso-flutuante",
    title: "Piso flutuante",
    description:
      "Instalação de piso flutuante com acabamento limpo, moderno e resistente.",
    icon: "floor",
  },
  {
    id: "instalacao-equipamentos",
    title: "Instalação de equipamentos",
    description:
      "Instalação de equipamentos e pequenos ajustes técnicos para deixar o espaço funcional e pronto a usar.",
    icon: "tools",
  },
  {
    id: "remodelacao",
    title: "Remodelação",
    description:
      "Remodelações completas ou parciais para habitações, lojas e espaços comerciais.",
    icon: "remodel",
  },
  {
    id: "canalizacao",
    title: "Canalização",
    description:
      "Serviços de canalização para reparações, substituições e instalações.",
    icon: "plumbing",
  },
  {
    id: "pinturas",
    title: "Pinturas",
    description:
      "Pinturas interiores e exteriores com preparação adequada e acabamento profissional.",
    icon: "paint",
  },
  {
    id: "ladrilhos",
    title: "Ladrilhos",
    description:
      "Aplicação de ladrilhos em cozinhas, casas de banho, pavimentos e revestimentos.",
    icon: "tile",
  },
];

export const differentiators = [
  {
    title: "Atendimento direto",
    description:
      "Falamos diretamente consigo do primeiro contacto à entrega da obra.",
    icon: "support",
  },
  {
    title: "Orçamento personalizado",
    description:
      "Cada espaço é único — preparamos uma proposta clara e adaptada ao seu projeto.",
    icon: "quote",
  },
  {
    title: "Qualidade nos acabamentos",
    description:
      "Rigor estético e técnico em cada detalhe para um resultado duradouro.",
    icon: "verified",
  },
  {
    title: "Cumprimento de prazos",
    description:
      "Planeamento realista e execução eficiente para entregar dentro do tempo combinado.",
    icon: "clock",
  },
  {
    title: "Equipa experiente",
    description:
      "Profissionais qualificados em todas as áreas da obra, do pladur à pintura.",
    icon: "team",
  },
  {
    title: "Soluções completas",
    description:
      "Da pequena reparação à remodelação integral — tratamos de tudo numa só equipa.",
    icon: "layers",
  },
];

export const process = [
  {
    step: "01",
    title: "Contacto inicial",
    description:
      "Apresente-nos a ideia ou necessidade do seu espaço, sem compromisso.",
  },
  {
    step: "02",
    title: "Análise do serviço",
    description:
      "Avaliamos o local e estudamos a melhor solução técnica para o projeto.",
  },
  {
    step: "03",
    title: "Orçamento personalizado",
    description:
      "Receberá uma proposta detalhada, transparente e adaptada à sua obra.",
  },
  {
    step: "04",
    title: "Execução da obra",
    description:
      "Mãos à obra com acompanhamento constante até à entrega final.",
  },
];

export const projects = [
  {
    title: "Cozinha contemporânea",
    category: "Remodelação completa",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Casa de banho moderna",
    category: "Ladrilhos & canalização",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Sala com piso flutuante",
    category: "Piso flutuante & pintura",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Teto falso em pladur",
    category: "Pladur & iluminação",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Pintura interior",
    category: "Pinturas",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Espaço comercial",
    category: "Remodelação integral",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    span: "lg:col-span-2",
  },
];
