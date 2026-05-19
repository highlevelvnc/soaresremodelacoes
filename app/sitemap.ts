import type { MetadataRoute } from "next";

const BASE = "https://soaresremodelacoes.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    "",
    "#sobre",
    "#servicos",
    "#projetos",
    "#contacto",
  ];

  return sections.map((hash) => ({
    url: `${BASE}/${hash}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: hash === "" ? 1 : 0.7,
  }));
}
