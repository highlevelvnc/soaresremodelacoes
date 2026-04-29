import { services, site } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    image: "https://soaresremodelacoes.pt/logo.png",
    "@id": "https://soaresremodelacoes.pt",
    url: "https://soaresremodelacoes.pt",
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
    },
    areaServed: { "@type": "Country", name: "Portugal" },
    description:
      "Serviços de remodelação, pladur, piso flutuante, canalização, pinturas, ladrilhos e instalação de equipamentos em Portugal.",
    sameAs: [site.whatsapp],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Soares Remodelações",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
        position: i + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
