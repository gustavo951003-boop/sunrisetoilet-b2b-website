import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Sunrise Portable Toilets | Request Factory Quote",
  description:
    "Contact Sunrise for HDPE portable toilet specifications, MOQ, lead time, packing data and factory-direct B2B quotation.",
  alternates: {
    canonical: "/contact",
  },
};

const requestItems = [
  "Target model or application",
  "Estimated quantity and destination market",
  "Preferred configuration, color and accessories",
  "Container loading, spare parts or certificate requirements",
];

export default function ContactPage() {
  return (
    <main className="placeholder-page">
      <SiteHeader />
      <PageHero
        kicker="Contact"
        title="Request a factory quote."
        description="Send Sunrise your model, quantity, destination market and configuration requirements for a B2B quotation."
        backgroundImage="/images/site/case-buyers.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        primaryCTA={{ label: "Email Sales Team", href: "mailto:sales@sunrisetoilet.com" }}
        secondaryCTA={{ label: "View Product Catalog", href: "/products" }}
      />

      <section className="placeholder-list" aria-label="Information to include in an inquiry">
        {requestItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </section>

      <SectionCta
        title="Include the details procurement teams need."
        text="Model, quantity, destination market and configuration requirements help Sunrise prepare specifications, MOQ, lead time and packing data faster."
        primaryLabel="Email Sales Team"
        primaryHref="mailto:sales@sunrisetoilet.com"
        secondaryLabel="Download Product Catalog"
        secondaryHref="/downloads/Sunrise-Catalog-2026.pdf"
      />
      <SiteFooter />
    </main>
  );
}
