import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Custom Rotational & Blow Molding Manufacturer in China | Sunrise",
  description:
    "Sunrise supports OEM plastic manufacturing projects using rotational molding and blow molding for large HDPE products, tanks, containers, outdoor housings and custom molded components.",
  keywords: [
    "rotational molding manufacturer China",
    "blow molding manufacturer China",
    "OEM plastic molding",
    "custom HDPE plastic products",
    "large plastic product manufacturer",
    "plastic tank manufacturer China",
  ],
  alternates: {
    canonical: "/oem-plastic-molding",
  },
};

const processes = [
  {
    title: "Rotational molding",
    text: "Suitable for large hollow plastic products, outdoor housings, tanks and durable HDPE structures.",
  },
  {
    title: "Blow molding",
    text: "Suitable for plastic tanks, containers and selected hollow plastic components.",
  },
  {
    title: "Plastic assembly and OEM support",
    text: "Logo, color, fitting, packaging and export support for compatible B2B projects.",
  },
  {
    title: "Selected plastic components",
    text: "Support for compatible plastic parts and assembly requirements without overclaiming full injection molding specialization.",
  },
];

const suitableProjects = [
  "Large hollow plastic products",
  "HDPE water and waste tanks",
  "Outdoor plastic enclosures",
  "Portable sanitation components",
  "Industrial plastic containers",
  "Custom molded plastic housings",
  "Private label plastic products for rental and construction markets",
];

const trustPoints = [
  "Experience exporting to Australia, UK, US and other markets",
  "Factory-direct communication",
  "Experience with HDPE outdoor products",
  "Support for bulk container loading",
  "OEM color, logo and fitting customization",
  "Spare parts and repeat-order support",
  "Practical packing and shipping support",
];

const buyerInputs = [
  "Product drawing or sample photo",
  "Approximate dimensions",
  "Material requirement",
  "Target quantity",
  "Destination market",
  "Application scenario",
  "Target price range if available",
];

export default function OemPlasticMoldingPage() {
  return (
    <main className="oem-page">
      <SiteHeader />
      <PageHero
        kicker="Secondary Factory Capability"
        title="Custom Rotational & Blow Molding Manufacturer in China"
        description="Sunrise remains focused on HDPE portable toilet manufacturing while supporting selected OEM plastic projects using rotational molding and blow molding."
        backgroundImage="/images/site/factory-workshop.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "OEM Capabilities" },
        ]}
        primaryCTA={{ label: "Discuss OEM Project", href: "/contact" }}
        secondaryCTA={{ label: "View Portable Toilet Range", href: "/products" }}
      />

      <section className="oem-hero">
        <div>
          <span className="section-kicker">SECONDARY FACTORY CAPABILITY</span>
          <h2>OEM capability without diluting the core portable toilet business.</h2>
          <p>
            Sunrise manufactures HDPE portable toilets and large outdoor plastic products
            using rotational molding and blow molding processes. We support selected OEM
            plastic manufacturing projects for overseas buyers who need durable plastic
            housings, tanks, containers and custom molded components.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Discuss OEM Project
            </Link>
            <Link className="button button-light" href="/contact">
              Send Product Drawing
            </Link>
          </div>
        </div>
        <aside aria-label="Primary business reminder">
          <strong>Primary focus</strong>
          <span>
            Sunrise remains focused on HDPE portable toilet manufacturing. OEM plastic
            molding is offered as a selected factory capability for compatible projects.
          </span>
        </aside>
      </section>

      <section className="oem-section">
        <div className="oem-section-head">
          <span className="section-kicker">MANUFACTURING PROCESSES</span>
          <h2>Rotational molding, blow molding and practical OEM support.</h2>
        </div>
        <div className="oem-card-grid">
          {processes.map((process) => (
            <article key={process.title}>
              <h3>{process.title}</h3>
              <p>{process.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="oem-section oem-split">
        <div>
          <span className="section-kicker">SUITABLE OEM PROJECTS</span>
          <h2>Large HDPE plastic products and compatible molded components.</h2>
          <p>
            Sunrise is a practical fit for buyers comparing a custom rotational molding
            manufacturer, blow molding supplier China or OEM plastic manufacturing partner
            for outdoor and rental-market plastic products.
          </p>
        </div>
        <div className="oem-list">
          {suitableProjects.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="oem-section">
        <div className="oem-section-head">
          <span className="section-kicker">WHY WORK WITH SUNRISE</span>
          <h2>Export-focused plastic manufacturing support without diluting the core portable toilet business.</h2>
        </div>
        <div className="oem-trust-list">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="oem-section oem-split">
        <div>
          <span className="section-kicker">BUYER REQUIREMENTS</span>
          <h2>What we need to review an OEM plastic product inquiry.</h2>
          <p>
            Clear project inputs help the factory judge whether the item fits rotational
            molding or blow molding capabilities before quoting tooling, MOQ or container supply.
          </p>
        </div>
        <div className="oem-list">
          {buyerInputs.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="oem-final-cta">
        <div>
          <span className="section-kicker">OEM INQUIRY</span>
          <h2>Send your OEM plastic product inquiry.</h2>
          <p>
            Share your drawing, sample photo or product idea. Our team will review whether
            it fits our rotational molding or blow molding production capabilities.
          </p>
        </div>
        <div className="contact-actions">
          <Link className="button button-primary" href="/contact">
            Contact Sales Team
          </Link>
          <Link className="button button-dark" href="/products">
            View Portable Toilet Range
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
