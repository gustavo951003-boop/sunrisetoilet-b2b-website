import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Catalogs, Certificates & Buyer Documents",
  description:
    "Download Sunrise portable toilet catalogs, RoHS documents, SGS material test reports, waste tank reports and supplier assessment files for distributor review, rental fleet purchasing and project quotation.",
  alternates: {
    canonical: "/resources",
  },
};

const introPoints = [
  "Product catalog and model overview",
  "Compliance and material test files",
  "Supplier assessment and project document support",
];

const primaryDocuments = [
  {
    title: "Sunrise Product Catalog 2026",
    text: "Portable toilets, hand wash stations, shower cabins, sewer-connect units, waste tanks and accessories.",
    href: "/downloads/Sunrise-Catalog-2026.pdf",
    action: "Download Product Catalog",
    meta: "PDF · 26 MB",
  },
  {
    title: "Supplier Assessment Report 2026",
    text: "Third-party supplier assessment file for Ningbo Sunrise Environmental Protection Solution Co., Ltd.",
    href: "/downloads/Supplier-Assessment-Report-2026.pdf",
    action: "Download Supplier Assessment Report",
    meta: "PDF",
  },
];

const complianceDocuments = [
  {
    title: "RoHS - Portable Toilet",
    text: "RoHS report and certificate for portable toilet models including PT-390, PT-360, PT-370, PT-380, PT-381 and PDT-100.",
    links: [
      {
        href: "/downloads/RoHS-Portable-Toilet-Report.pdf",
        label: "Download Portable Toilet RoHS Report",
      },
      {
        href: "/downloads/RoHS-Portable-Toilet-Certificate.pdf",
        label: "Download Portable Toilet RoHS Certificate",
      },
    ],
  },
  {
    title: "RoHS - Hand Wash Station",
    text: "RoHS report and certificate for PH-120 with PH-40, PH-60, PH-200 and PH-200A reference models.",
    links: [
      {
        href: "/downloads/RoHS-Hand-Wash-Station-Report.pdf",
        label: "Download Hand Wash Station RoHS Report",
      },
      {
        href: "/downloads/RoHS-Hand-Wash-Station-Certificate.pdf",
        label: "Download Hand Wash Station RoHS Certificate",
      },
    ],
  },
];

const testReports = [
  {
    title: "SGS UV Ageing - Portable Toilet Materials",
    text: "Xenon-arc UV ageing reports for roof, door, wall and toilet base materials with 600h exposure results.",
    links: [
      {
        href: "/downloads/SGS-UV-Ageing-Roof.pdf",
        label: "Download Roof UV Ageing Report",
      },
      {
        href: "/downloads/SGS-UV-Ageing-Door.pdf",
        label: "Download Door UV Ageing Report",
      },
      {
        href: "/downloads/SGS-UV-Ageing-Wall.pdf",
        label: "Download Wall UV Ageing Report",
      },
      {
        href: "/downloads/SGS-UV-Ageing-Toilet-Base.pdf",
        label: "Download Base UV Ageing Report",
      },
    ],
  },
  {
    title: "Waste Tank Test Reports",
    text: "SGS water tightness witness report and low-temperature drop weight impact report for wastewater tank body parts.",
    links: [
      {
        href: "/downloads/SGS-Water-Tightness-Wastewater-Tank.pdf",
        label: "Download Water Tightness Report",
      },
      {
        href: "/downloads/SGS-Low-Temperature-Impact-Waste-Tank.pdf",
        label: "Download Low-Temperature Impact Report",
      },
    ],
  },
];

function PdfLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="resource-link" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <SiteHeader />
      <PageHero
        kicker="Resources"
        title="Catalogs, Certificates & Buyer Documents"
        description="Download Sunrise product catalogs, compliance documents, material test reports and supplier assessment files for distributor review, rental fleet purchasing and project quotation."
        backgroundImage="/images/site/hero-verified-workshop.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
        primaryCTA={{
          label: "Download Product Catalog",
          href: "/downloads/Sunrise-Catalog-2026.pdf",
        }}
        secondaryCTA={{ label: "Request Project Documents", href: "/contact" }}
      />

      <section className="resources-intro" aria-label="Buyer document center overview">
        <div>
          <span className="section-kicker">BUYER DOCUMENT CENTER</span>
          <h2>Documents for buyer review and quotation preparation</h2>
          <p>
            Use these files to review product range, supplier background, material
            reliability and compliance references before requesting model specifications,
            packing data or a factory quote.
          </p>
        </div>
        <div className="resources-intro-points">
          {introPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="resource-section" aria-label="Product catalog and supplier files">
        <div className="resource-section-header">
          <span className="section-kicker">DOWNLOADS</span>
          <h2>Product Catalog & Supplier Files</h2>
        </div>
        <div className="resource-card-grid resource-card-grid-featured">
          {primaryDocuments.map((item) => (
            <article className="resource-card resource-card-featured" key={item.title}>
              <div>
                <span className="resource-card-meta">{item.meta}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <PdfLink href={item.href} label={item.action} />
            </article>
          ))}
        </div>
      </section>

      <section className="resource-section" aria-label="Compliance documents">
        <div className="resource-section-header">
          <span className="section-kicker">COMPLIANCE REFERENCES</span>
          <h2>Compliance Documents</h2>
          <p>
            Reference documents are available for buyer review and can support purchasing
            checks for relevant models and destination markets.
          </p>
        </div>
        <div className="resource-card-grid">
          {complianceDocuments.map((item) => (
            <article className="resource-card" key={item.title}>
              <span className="resource-card-meta">PDF</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="resource-link-list">
                {item.links.map((link) => (
                  <PdfLink href={link.href} label={link.label} key={link.href} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-section" aria-label="Material and product test reports">
        <div className="resource-section-header">
          <span className="section-kicker">TEST REPORTS</span>
          <h2>Material & Product Test Reports</h2>
        </div>
        <div className="resource-card-grid">
          {testReports.map((item) => (
            <article className="resource-card" key={item.title}>
              <span className="resource-card-meta">PDF</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="resource-link-list">
                {item.links.map((link) => (
                  <PdfLink href={link.href} label={link.label} key={link.href} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-final-cta" aria-label="Request project-specific documents">
        <div>
          <span className="section-kicker">DOCUMENT REQUEST</span>
          <h2>Need documents for a specific model or project?</h2>
          <p>
            Tell us your target product model, quantity and destination market. Our team
            can share available specifications, packing data, test files and quotation
            documents during project review.
          </p>
        </div>
        <div className="resources-final-actions">
          <Link className="button button-primary" href="/contact">
            Request Project Documents
          </Link>
          <Link className="button button-light" href="/products">
            View Product Range
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
