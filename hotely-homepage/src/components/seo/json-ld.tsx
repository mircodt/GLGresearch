import { content } from "@/lib/content/it";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${content.meta.url}#organization`,
        name: "Aurora Technologies S.r.l.",
        url: content.meta.url,
        logo: `${content.meta.url}/assets/logo/hotely-logo.svg`,
        sameAs: ["https://www.linkedin.com/company/aurora-technologies"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Solaro",
          addressRegion: "MI",
          addressCountry: "IT",
        },
        vatID: "IT14056600969",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${content.meta.url}#software`,
        name: "Hotely",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        url: content.meta.url,
        description: content.meta.description,
        offers: {
          "@type": "Offer",
          price: "89",
          priceCurrency: "EUR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120",
        },
        publisher: { "@id": `${content.meta.url}#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
