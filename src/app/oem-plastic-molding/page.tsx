import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Custom Rotational & Blow Molding Support for Large HDPE Products | Sunrise",
  description:
    "Sunrise supports selected OEM plastic projects for overseas buyers who need durable HDPE tanks, containers, outdoor housings and large molded plastic components using rotational molding and blow molding.",
  alternates: {
    canonical: "/oem-plastic-molding",
  },
};

const capabilityTags = [
  "Rotational molding",
  "Blow molding",
  "Export packing support",
];

const supportCapabilities = [
  {
    title: "Rotational Molded HDPE Products",
    text: "Large hollow plastic structures, outdoor housings, tanks and durable HDPE cabins for outdoor and rental-market applications.",
  },
  {
    title: "Blow Molded Tanks & Containers",
    text: "Selected hollow plastic tanks, containers and compatible project parts based on product size, material and quantity.",
  },
  {
    title: "Assembly, Color & Private Label Support",
    text: "Color matching, logo options, fittings, packaging and export preparation for compatible OEM projects.",
  },
];

const suitableProjects = [
  "Large hollow HDPE plastic products",
  "Water and waste tanks",
  "Outdoor plastic housings and enclosures",
  "Portable sanitation components",
  "Private label products for rental, construction and outdoor markets",
];

const buyerReasons = [
  {
    title: "Experience with HDPE outdoor products",
    text: "Portable toilets and related outdoor products give Sunrise practical experience with durable HDPE structures and repeated handling.",
  },
  {
    title: "Export packing and container planning",
    text: "Support for packing method, container loading discussion and export documentation.",
  },
  {
    title: "Color, logo and fitting options",
    text: "Selected private label options can be reviewed based on product structure and order quantity.",
  },
  {
    title: "Spare parts and repeat-order support",
    text: "Useful for rental, construction and sanitation projects that require repeat supply.",
  },
];

const reviewGroups = [
  {
    title: "Product information",
    items: [
      "Drawing, sample photo or product concept",
      "Approximate dimensions",
      "Material and usage environment",
    ],
  },
  {
    title: "Commercial information",
    items: [
      "Estimated quantity",
      "Destination market",
      "Packaging or private label request",
    ],
  },
];

export default function OemPlasticMoldingPage() {
  return (
    <main className="oem-page">
      <SiteHeader />
      <PageHero
        kicker="OEM CAPABILITIES"
        title="Custom Rotational & Blow Molding Support for Large HDPE Products"
        description="Sunrise supports selected OEM plastic projects for overseas buyers who need durable HDPE tanks, housings, containers and outdoor molded components. Projects are reviewed based on drawings, sample photos, material, quantity and export feasibility."
        backgroundImage="/images/site/factory-workshop.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "OEM Capabilities" },
        ]}
        primaryCTA={{ label: "Discuss OEM Project", href: "/contact" }}
        secondaryCTA={{ label: "Send Product Drawing", href: "/contact" }}
      />

      <section className="oem-section">
        <div className="oem-section-head">
          <span className="section-kicker">WHAT WE CAN SUPPORT</span>
          <h2>Selected OEM plastic molding support for compatible B2B projects.</h2>
          <p>
            Custom rotational and blow molding support is available for large HDPE
            products where the product size, material, tooling feasibility, quantity and
            export requirements fit Sunrise capabilities.
          </p>
          <div className="oem-capability-tags" aria-label="OEM capability tags">
            {capabilityTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="oem-card-grid oem-card-grid-three">
          {supportCapabilities.map((capability) => (
            <article key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="oem-section oem-split">
        <div>
          <span className="section-kicker">SUITABLE OEM PROJECTS</span>
          <h2>Suitable OEM Project Types</h2>
          <p>
            Sunrise is a better fit for large HDPE outdoor products than small precision
            plastic parts.
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
          <span className="section-kicker">WHY BUYERS USE SUNRISE</span>
          <h2>Why Buyers Use Sunrise for Selected OEM Projects</h2>
        </div>
        <div className="oem-card-grid">
          {buyerReasons.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="oem-section oem-split">
        <div>
          <span className="section-kicker">PROJECT REVIEW</span>
          <h2>How We Review Your Project</h2>
          <p>
            These details help us judge process fit, tooling feasibility, MOQ, packing
            method and quotation direction.
          </p>
        </div>
        <div className="oem-review-grid">
          {reviewGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="oem-fit-note">
        <span className="section-kicker">PROJECT FIT MATTERS</span>
        <h2>Project Fit Matters</h2>
        <p>
          OEM inquiries are reviewed based on product size, molding process, tooling
          feasibility, order quantity and export requirements. Sunrise is usually a better
          fit for large HDPE outdoor products than small precision plastic parts.
        </p>
      </section>

      <SectionCta
        kicker="OEM PROJECT REVIEW"
        title="Have a suitable HDPE plastic product project?"
        text="Send your drawing, sample photo or product idea. Our team will review whether the project fits our rotational molding or blow molding capabilities."
        primaryLabel="Discuss OEM Project"
        secondaryLabel="View Portable Toilet Range"
        secondaryHref="/products"
      />
      <SiteFooter />
    </main>
  );
}
