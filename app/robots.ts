import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://soaresremodelacoes.pt/sitemap.xml",
    host: "https://soaresremodelacoes.pt",
  };
}
