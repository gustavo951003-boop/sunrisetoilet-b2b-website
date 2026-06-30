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

const factoryVideoHighlights = [
  {
    title: "Workshop Environment",
    text: "A quick view of our production floor, assembly area and factory workflow.",
  },
  {
    title: "Portable Toilet Assembly",
    text: "Review HDPE cabin structure, fittings installation and product preparation.",
  },
  {
    title: "Export Packing Support",
    text: "Understand how Sunrise prepares bulk orders, packing data and shipment documents.",
  },
  {
    title: "Spare Parts Planning",
    text: "Support for pumps, locks, hinges, fittings and repeat rental fleet orders.",
  },
];

export default function FactoryPage() {
  return (
    <main className="placeholder-page">
      <SiteHeader />
      <PageHero
        kicker="Factory Capability"
        title="Portable Toilet Factory Capability."
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
          <div className="factory-video-review">
            <h3>What buyers can review in this factory video</h3>
            <div className="factory-video-highlight-grid">
              {factoryVideoHighlights.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
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

      <ExportCases variant="factory" />

      <CertificationStrip
        variant="panel"
        title="Certification & Compliance Documents for Buyer Review"
        subtitle="CE, Intertek, SGS, RoHS and Australian market reference files are available to support distributor, rental fleet and project procurement review."
      />

      <SectionCta
        kicker="PROJECT SUPPORT"
        title="Review factory capability before confirming a container order."
        text="Ask for production details, packing data, compliance files and shipment planning support for your portable toilet order."
        primaryLabel="Request Factory Quote"
        secondaryLabel="View Portable Toilet Range"
        secondaryHref="/products"
      />
      <SiteFooter />
    </main>
  );
}
