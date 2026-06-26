import type { Metadata } from "next";
import Link from "next/link";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { ExportCases } from "@/components/site/ExportCases";
import { PageHero } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { FactoryVideo } from "./FactoryVideo";

export const metadata: Metadata = {
  title: "Portable Toilet Factory in China | Sunrise Manufacturing Capability",
  description:
    "Review Sunrise factory video, production capability, export support, spare parts planning and container loading for HDPE portable toilet supply.",
  alternates: {
    canonical: "/factory",
  },
  openGraph: {
    title: "Portable Toilet Factory in China | Sunrise Manufacturing Capability",
    description:
      "Factory video, production capability and compliance documents for B2B portable toilet buyers.",
    images: [
      {
        url: "/images/site/factory-line.webp",
        width: 1200,
        height: 630,
        alt: "Sunrise portable toilet factory production line",
      },
    ],
  },
};

const facts = [
  "Rotational molding experience for HDPE portable toilet cabins and large plastic products",
  "Blow molding and selected plastic component support for compatible OEM projects",
  "Container loading, export packing and document preparation",
  "Spare parts planning for rental fleets, distributors and repeat orders",
];

const assetPlacement = [
  {
    title: "Factory video",
    text: "Review the workshop flow, assembly process and export preparation before supplier qualification.",
  },
  {
    title: "Factory screenshots",
    text: "Use production-line and finished-unit images for procurement review, distributor files and project discussions.",
  },
  {
    title: "Supplier assessment",
    text: "Download third-party supplier review files to support compliance checks and internal vendor approval.",
  },
];

export default function FactoryPage() {
  return (
    <main className="placeholder-page">
      <SiteHeader />
      <PageHero
        kicker="Factory Capability"
        title="Portable toilet factory capability."
        description="Sunrise uses factory video, production images and third-party assessment files to help B2B buyers review manufacturing capability before quotation."
        backgroundImage="/images/site/factory-line.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Factory" },
        ]}
        primaryCTA={{ label: "Request Factory Quote", href: "/contact" }}
        secondaryCTA={{ label: "View Product Range", href: "/products" }}
      />

      <section className="factory-video-section" aria-label="Sunrise factory video">
        <FactoryVideo />
        <div className="factory-video-copy">
          <span className="section-kicker">FACTORY TOUR</span>
          <h2>See how Sunrise portable toilets are built for export orders.</h2>
          <p>
            Take a closer look at our production workshop, assembly process and export
            preparation. This video helps rental companies, distributors and project buyers
            review our manufacturing environment before requesting specifications or a
            factory quote.
          </p>
          <ul className="factory-video-points">
            <li>HDPE portable toilet production and assembly</li>
            <li>Product structure, fittings and quality checks</li>
            <li>Packing support for bulk container shipments</li>
          </ul>
          <div className="factory-video-actions">
            <Link className="button button-primary" href="/contact">
              Request Factory Quote
            </Link>
            <Link className="button button-light" href="/products">
              View Product Range
            </Link>
          </div>
        </div>
      </section>

      <section className="placeholder-list" aria-label="Factory capability">
        {facts.map((fact) => (
          <div key={fact}>{fact}</div>
        ))}
      </section>

      <ExportCases variant="factory" />

      <CertificationStrip
        variant="panel"
        title="Third-party verification files available for buyer review"
        subtitle="Intertek, SGS, RoHS and Australian market reference documentation can support distributor, rental fleet and project procurement review."
      />

      <section className="asset-map-section" aria-label="Factory asset placement">
        {assetPlacement.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <SectionCta
        title="Review factory capability before confirming a container order."
        text="Ask for production details, packing data, compliance files and shipment planning support for your portable toilet procurement."
        primaryLabel="Request Factory Quote"
        secondaryLabel="View Portable Toilet Range"
        secondaryHref="/products"
      />
      <SiteFooter />
    </main>
  );
}
