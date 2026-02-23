/**
 * Injects JSON-LD structured data for SEO (Organization + LocalBusiness).
 * Update the base URL when deploying to production.
 */
const SITE_URL = "https://genies.marketing";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Genies Ltd",
      url: SITE_URL,
      description:
        "Results-driven paid advertising consultancy. Google Ads strategy, campaign management, and optimization that delivers measurable growth for tech companies.",
      slogan: "Your wish is my command",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Genies Ltd",
      description:
        "Boutique digital marketing consultancy specializing in paid advertising and Google Ads. Campaign strategy, ongoing management, performance reporting, and account audits.",
      url: SITE_URL,
      areaServed: "Worldwide",
      serviceType: ["Digital Marketing", "Google Ads", "Paid Advertising", "Campaign Management"],
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
