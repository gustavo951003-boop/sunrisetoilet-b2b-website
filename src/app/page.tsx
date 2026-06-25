import Image from "next/image";
import Link from "next/link";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ScrollReveal } from "./ScrollReveal";

const heroTrustPoints = [
  "HDPE rotational molded toilets",
  "Factory-direct pricing",
  "Australia / UK / US focused supply",
  "Bulk orders and export documents",
];

const products = [
  {
    model: "PT-360",
    name: "Standard Portable Toilet",
    image: "/images/site/pt-360.webp",
    alt: "PT-360 HDPE standard portable toilet for rental fleets",
    description:
      "Core HDPE portable toilet for construction sites, events and rental fleet supply.",
    useCase: "Best for: rental fleets and construction suppliers",
    specs: ["Rotational molded HDPE cabin", "Waste tank configuration", "Easy cleaning and service access"],
    options: ["Urinal", "Foot pump", "Lifting points"],
    containerNote: "Suitable for mixed-model container orders and rental fleet replenishment.",
    href: "/products/pt-360-standard-portable-toilet",
  },
  {
    model: "PT-370",
    name: "Portable Toilet with Hand Wash",
    image: "/images/site/pt-370.webp",
    alt: "PT-370 portable toilet with hand wash basin",
    description:
      "Hand-wash portable restroom option for markets that require better on-site hygiene.",
    useCase: "Best for: job sites, events and public-use projects",
    specs: ["Integrated hand wash basin", "Fresh water and waste tank options", "Foot pump configuration available"],
    options: ["Hand wash basin", "Fresh water tank", "Color options"],
    containerNote: "Common choice for container supply to construction and event rental buyers.",
    href: "/products/pt-370-portable-toilet",
  },
  {
    model: "PT-390",
    name: "Double-wall Portable Toilet",
    image: "/images/site/pt-390.webp",
    alt: "PT-390 reinforced double-wall HDPE portable toilet",
    description:
      "Reinforced cabin structure for repeated transport, outdoor storage and long-term use.",
    useCase: "Best for: heavy-use fleets and distributor stock",
    specs: ["Double-wall HDPE structure", "Durable for repeated handling", "Color and accessory options"],
    options: ["Reinforced cabin", "Branding color", "Spare fittings"],
    containerNote: "Built for distributors planning long-term stock and repeated fleet orders.",
    href: "/products/pt-390-double-wall-portable-toilet",
  },
  {
    model: "PDT-100",
    name: "Accessible Portable Toilet",
    image: "/images/site/pdt-100.webp",
    alt: "PDT-100 accessible portable toilet with wide entry",
    description:
      "Wide-entry portable sanitation unit for inclusive sites, venues and project tenders.",
    useCase: "Best for: accessible facilities and public projects",
    specs: ["Wide-entry cabin design", "Spacious interior layout", "Suitable for project procurement"],
    options: ["Wide door", "Handrail planning", "Accessible layout"],
    containerNote: "Can be quoted with standard toilets for project and public venue supply.",
    href: "/products/accessible-portable-toilet",
  },
];

const factoryFacts = [
  {
    title: "Factory capability",
    text: "HDPE portable toilet production with model selection, accessory planning and export packing support.",
  },
  {
    title: "Container loading",
    text: "Support for MOQ review, packing data and container loading plans before bulk orders are confirmed.",
  },
  {
    title: "Spare parts support",
    text: "Repeatable supply of common parts such as tanks, pumps, seats, basins, hinges and fittings.",
  },
  {
    title: "OEM options",
    text: "Color, branding and configuration discussions for distributors and rental companies with repeat orders.",
  },
];

const oemCapabilities = [
  "Rotational molded HDPE products",
  "Blow molded tanks and containers",
  "Custom color, logo and fittings",
  "Export packing and container loading support",
];

const procurementSteps = [
  "Match models to your rental fleet, market rules and order volume",
  "Review HDPE material, dimensions, accessories, certificates and packing data",
  "Confirm MOQ, lead time, color, spare parts and container loading plan",
  "Arrange inspection, export packing and shipment documents",
];

const qualityPoints = [
  "Rotational molded HDPE cabins for outdoor use",
  "Options for hand wash basin, urinal, foot pump and lifting points",
  "SGS, RoHS and supplier assessment files for buyer review",
  "Practical support for repeated fleet orders and distributor stock",
];

const markets = ["Australia", "United Kingdom", "United States", "New Zealand", "Global distributors"];

const resources = [
  "How to choose a portable toilet manufacturer in China",
  "Portable toilet dimensions, packing and container loading guide",
  "Accessible portable toilet procurement checklist",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sunrise Portable Toilets",
  url: "https://sunrisetoilet.com",
  description:
    "Portable toilet manufacturer in China supplying HDPE portable toilets for rental fleets, distributors and project buyers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ningbo",
    addressCountry: "CN",
  },
};

function CtaStrip({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: string;
  secondary?: string;
}) {
  return (
    <div className="cta-strip" data-reveal>
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <div className="cta-strip-actions">
        <Link className="button button-primary" href="/contact">
          {primary}
        </Link>
        {secondary ? (
          <Link className="button button-light" href="/factory">
            {secondary}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/site/hero-yard.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />

        <SiteHeader variant="transparent" />

        <div className="hero-content" data-reveal>
          <span className="eyebrow">PORTABLE TOILET MANUFACTURER IN CHINA</span>
          <h1 id="hero-title">
            Professional portable toilet manufacturer for rental fleets, distributors and project buyers.
          </h1>
          <p>
            Sunrise manufactures HDPE portable toilets in Ningbo, China, with factory-direct
            supply for Australia, UK, US, New Zealand and global B2B markets.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request Factory Quote
            </Link>
            <Link className="button button-ghost" href="/products">
              View Portable Toilet Range
            </Link>
          </div>
          <div className="hero-trust-line">
            Intertek / SGS / RoHS / Australia market reference documents available
          </div>
        </div>

        <div className="hero-proof" aria-label="B2B buyer trust points" data-reveal>
          {heroTrustPoints.map((item) => (
            <div key={item}>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <CertificationStrip />

      <section className="section intro-section">
        <div className="section-inner intro-grid" data-reveal>
          <div>
            <span className="section-kicker">WHY BUYERS SOURCE FROM SUNRISE</span>
            <h2>Factory information that helps procurement teams make decisions.</h2>
          </div>
          <div className="intro-copy">
            <p>
              A portable toilet supplier should make model comparison, material reliability,
              export packing and repeated fleet supply clear before price negotiation.
              Sunrise keeps the homepage focused on the facts B2B buyers usually ask for first.
            </p>
            <div className="market-list reveal-list" aria-label="Export markets">
              {markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section product-strength-section">
        <div className="section-inner strength-grid">
          <div className="strength-image" data-reveal>
            <Image
              src="/images/site/hero-bridge-team.webp"
              alt="Sunrise team testing HDPE portable toilet roof strength near bridge"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 50vw"
            />
          </div>
          <div data-reveal>
            <span className="section-kicker">HDPE STRUCTURE TESTING</span>
            <h2>HDPE Structure Tested for Rental Fleet Use</h2>
            <p>
              Our reinforced HDPE portable toilet cabin is designed for outdoor rental fleets,
              repeated handling and long-term project use.
            </p>
            <Link className="text-link" href="/products/category/portable-toilets">
              Explore HDPE portable toilet models
            </Link>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">PRODUCT RANGE</span>
              <h2>HDPE portable toilets for rental fleets and distributors.</h2>
            </div>
            <p>
              Core models for construction sites, event rental, sanitation distributors and
              public project procurement. Full product pages can be added later as the catalog expands.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article
                className="product-card"
                id={product.model.toLowerCase()}
                key={product.model}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="product-media">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) 50vw, 25vw"
                  />
                  <span>{product.model}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <em>{product.useCase}</em>
                  <ul>
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <div className="product-options" aria-label={`${product.model} options`}>
                    {product.options.map((option) => (
                      <span key={option}>{option}</span>
                    ))}
                  </div>
                  <strong className="container-note">{product.containerNote}</strong>
                  <div className="product-links">
                    <Link href={product.href}>View Model</Link>
                    <Link href="/contact">Request Specs</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <CtaStrip
            title="Comparing models for a fleet order?"
            text="Send the target market, order quantity and preferred configuration."
            primary="Get Product Specifications"
            secondary="Review Factory Capability"
          />
        </div>
      </section>

      <section className="factory-band" id="factory">
        <Image
          className="factory-band-image"
          src="/images/site/factory-line.webp"
          alt="Sunrise rotational molding production line for HDPE portable toilets"
          fill
          sizes="100vw"
        />
        <div className="factory-band-overlay" />
        <div className="factory-band-content" data-reveal>
          <span className="eyebrow">FACTORY CAPABILITY</span>
          <h2>From HDPE molded cabins to export-ready bulk supply.</h2>
          <p>
            Sunrise supports portable toilet factory China sourcing with model selection,
            accessory planning, inspection files, spare parts and shipment preparation.
          </p>
          <div className="process-grid">
            {procurementSteps.map((item, index) => (
              <div key={item}>
                <strong>0{index + 1}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section oem-mini-section">
        <div className="section-inner oem-mini-grid" data-reveal>
          <div>
            <span className="section-kicker">SECONDARY FACTORY CAPABILITY</span>
            <h2>OEM plastic manufacturing capabilities</h2>
            <p>
              In addition to portable toilet manufacturing, Sunrise supports selected OEM
              plastic projects based on rotational molding, blow molding and large HDPE
              product development.
            </p>
          </div>
          <div className="oem-mini-card">
            <div className="oem-mini-points">
              {oemCapabilities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <Link className="button button-primary" href="/oem-plastic-molding">
              Explore OEM Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="section trust-section" id="bulk-supply">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">BULK SUPPLY SUPPORT</span>
              <h2>Built for procurement, container loading and repeat orders.</h2>
            </div>
            <p>
              Buyers need more than a product photo. They need stable models, spare parts,
              packing information and practical support for long-term fleet operation.
            </p>
          </div>
          <div className="trust-grid">
            {factoryFacts.map((fact, index) => (
              <article key={fact.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
          <CtaStrip
            title="Planning a container shipment?"
            text="Ask for packing data, loading advice and spare parts recommendations."
            primary="Ask for Container Loading Plan"
          />
        </div>
      </section>

      <section className="section verification-section">
        <div className="section-inner verify-grid">
          <div className="verify-image" data-reveal>
            <Image
              src="/images/site/brand-product-application.webp"
              alt="Sunrise portable toilet and hand wash station in an outdoor application scene"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 50vw"
            />
          </div>
          <div className="verify-copy" data-reveal>
            <span className="section-kicker">QUALITY AND EXPORT REVIEW</span>
            <h2>Material reliability, inspection files and market-fit configurations.</h2>
            <p>
              Sunrise focuses on practical buyer review: HDPE material, molded structure,
              configuration options, certificates, packing data and export case records.
            </p>
            <ul>
              {qualityPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" href="/contact">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      <section className="section cases-section" id="cases">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">EXPORT MARKET EXPERIENCE</span>
              <h2>Supplier review for English-speaking B2B markets.</h2>
            </div>
            <p>
              Sunrise works toward the requirements of rental companies, distributors,
              construction suppliers and project buyers in Australia, UK, US and New Zealand.
            </p>
          </div>
          <div className="case-grid">
            <article data-reveal>
              <Image
                src="/images/site/case-team.webp"
                alt="Overseas buyers visiting Sunrise portable toilet factory"
                fill
                sizes="(max-width: 900px) calc(100vw - 32px), 50vw"
              />
              <div>
                <strong>Factory Visit</strong>
                <span>Buyer review of products, factory capability and supply details</span>
              </div>
            </article>
            <article data-reveal style={{ transitionDelay: "90ms" }}>
              <Image
                src="/images/site/case-buyers.webp"
                alt="B2B buyers reviewing Sunrise portable toilets beside finished units"
                fill
                sizes="(max-width: 900px) calc(100vw - 32px), 50vw"
              />
              <div>
                <strong>Project Discussion</strong>
                <span>Model selection, commercial supply planning and export support</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section resources-section" id="resources">
        <div className="section-inner resource-grid">
          <div data-reveal>
            <span className="section-kicker">BUYER RESOURCES</span>
            <h2>Portable toilet sourcing topics for future SEO pages.</h2>
            <p>
              These topics prepare the site for future resources without adding a CMS or
              complex backend in this stage.
            </p>
          </div>
          <div className="resource-list">
            {resources.map((item, index) => (
              <Link href="/resources" key={item} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span>{item}</span>
                <strong>Request</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner contact-inner">
          <div data-reveal>
            <span className="section-kicker">REQUEST A FACTORY QUOTE</span>
            <h2>Send model, quantity, destination market and preferred configuration.</h2>
            <p>
              Sunrise can prepare model suggestions, specifications, MOQ, lead time,
              packing data and a B2B quotation for your portable toilet order.
            </p>
          </div>
          <div className="contact-actions" data-reveal>
            <Link className="button button-primary" href="/contact">
              Contact Sales Team
            </Link>
            <Link className="button button-dark" href="/resources">
              Current Catalogue
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
