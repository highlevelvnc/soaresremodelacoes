import { services, site } from "@/lib/site";

const URL_BASE = "https://soaresremodelacoes.pt";

export default function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${URL_BASE}/#business`,
    name: site.name,
    legalName: "Soares Remodelações",
    url: URL_BASE,
    logo: `${URL_BASE}/logo.png`,
    image: `${URL_BASE}/og-image.png`,
    telephone: site.phone,
    email: site.email,
    priceRange: "€€",
    description:
      "Empresa portuguesa de remodelações. Pladur, piso flutuante, canalização, pinturas, ladrilhos e instalação de equipamentos.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressRegion: "Portugal",
    },
    areaServed: [
      { "@type": "Country", name: "Portugal" },
      { "@type": "AdministrativeArea", name: "Lisboa" },
      { "@type": "AdministrativeArea", name: "Porto" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [site.whatsapp],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "PT",
      availableLanguage: ["pt-PT", "Portuguese"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Soares Remodelações",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          areaServed: { "@type": "Country", name: "Portugal" },
          provider: { "@id": `${URL_BASE}/#business` },
        },
        position: i + 1,
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${URL_BASE}/#website`,
    url: URL_BASE,
    name: site.name,
    inLanguage: "pt-PT",
    publisher: { "@id": `${URL_BASE}/#business` },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: URL_BASE,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
