import type { Metadata } from "next";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { ExportCases } from "@/components/site/ExportCases";
import { PageHero } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

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
    text: "Use on the Factory page as proof of production environment and buyer review material.",
  },
  {
    title: "Factory screenshots",
    text: "Use across Factory and homepage capability sections as still images when video is not needed.",
  },
  {
    title: "Supplier assessment",
    text: "Use under Resources / Certificates as a downloadable third-party supplier review file.",
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
        <video controls preload="metadata" src="/videos/sunrise-factory-video.mp4">
        </video>
        <div>
          <span className="section-kicker">VIDEO REVIEW</span>
          <h2>Factory video belongs on the Factory page, not as a homepage background.</h2>
          <p>
            Keeping video here preserves homepage speed while still giving procurement teams
            a clear place to review production capability, workshop environment and export readiness.
          </p>
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
