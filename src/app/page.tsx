import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const products = [
  {
    model: "PT-360",
    name: "Standard Portable Toilet",
    image: "/images/site/pt-360.webp",
    alt: "PT-360 portable toilet with open door",
    description: "Rental-ready HDPE cabin for construction, events and fleet supply.",
  },
  {
    model: "PT-370",
    name: "Portable Toilet with Hand Wash",
    image: "/images/site/pt-370.webp",
    alt: "PT-370 portable toilet product",
    description: "Hand-wash configuration for commercial portable restroom projects.",
  },
  {
    model: "PT-390",
    name: "Double-wall Portable Toilet",
    image: "/images/site/pt-390.webp",
    alt: "PT-390 double-wall portable toilet",
    description: "Reinforced HDPE structure for transport, storage and daily use.",
  },
  {
    model: "PDT-100",
    name: "Accessible Portable Toilet",
    image: "/images/site/pdt-100.webp",
    alt: "Accessible portable toilet model PDT-100",
    description: "Wide-entry portable sanitation unit for inclusive job sites and venues.",
  },
];

const capabilities = [
  "Factory-direct supply",
  "Rental fleet orders",
  "Packing and loading data",
  "Certificates for review",
];

const proof = [
  {
    value: "Ningbo",
    label: "China factory",
  },
  {
    value: "HDPE",
    label: "Portable toilets",
  },
  {
    value: "Bulk Supply",
    label: "Fleet and distributor orders",
  },
  {
    value: "Export Ready",
    label: "Documents and loading",
  },
];

const process = [
  "Match models to your market and order volume",
  "Review dimensions, certificates and packing data",
  "Confirm MOQ, lead time, color and accessories",
  "Arrange inspection, export packing and container loading",
];

const resources = [
  "How to choose a portable toilet manufacturer in China",
  "Portable toilet dimensions, packing and container loading guide",
  "Accessible portable toilet procurement checklist",
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      className={light ? "brand brand-light" : "brand"}
      href="#top"
      aria-label="Sunrise Toilet home"
      style={{ gap: "8px" }}
    >
      <Image
        className="brand-logo"
        src="/images/brand/sunrise-symbol-tight.png"
        alt="Sunrise Toilet"
        width={520}
        height={396}
        priority
        style={{ width: "58px", height: "auto" }}
      />
      <span className="brand-copy" style={{ transform: "none" }}>
        <strong>Sunrise</strong>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <ScrollReveal />
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/site/hero-yard.webp"
          alt="Sunrise portable toilets prepared outside the factory"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />

        <header className="site-header">
          <div className="header-inner">
            <BrandMark light />
            <nav className="desktop-nav" aria-label="Primary navigation">
              <a href="#products">Products</a>
              <a href="#factory">Factory</a>
              <a href="#cases">Cases</a>
              <a href="#resources">Resources</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="header-cta" href="#contact">Request Quote</a>
            <details className="mobile-menu">
              <summary title="Open navigation" aria-label="Open navigation">
                <span />
                <span />
                <span />
              </summary>
              <nav aria-label="Mobile navigation">
                <a href="#products">Products</a>
                <a href="#factory">Factory</a>
                <a href="#cases">Cases</a>
                <a href="#resources">Resources</a>
                <a href="#contact">Request Quote</a>
              </nav>
            </details>
          </div>
        </header>

        <div className="hero-content" data-reveal>
          <span className="eyebrow">PORTABLE TOILET MANUFACTURER IN CHINA</span>
          <h1 id="hero-title">Factory-direct portable toilets for fleets, distributors and projects.</h1>
          <p>
            HDPE portable restrooms from Ningbo with clear specifications, certificates,
            packing data and container-loading support.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Request a Quotation</a>
            <a className="button button-ghost" href="#products">View Product Range</a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Company highlights" data-reveal>
          {proof.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-inner intro-grid" data-reveal>
          <div>
            <span className="section-kicker">WHY SOURCE FROM SUNRISE</span>
            <h2>Manufacturing clarity for global buyers.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Review portable toilet models, factory capability, compliance files and export cases
              before requesting price.
            </p>
            <div className="capability-list reveal-list">
              {capabilities.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">PRODUCT RANGE</span>
              <h2>Commercial portable toilet range</h2>
            </div>
            <p>
              Standard, hand-wash, reinforced and accessible models for rental fleets,
              construction suppliers and sanitation distributors.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.model} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
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
                  <a href="#contact">Request Specifications</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="factory-band" id="factory">
        <Image
          className="factory-band-image"
          src="/images/site/factory-line.webp"
          alt="Sunrise rotational molding production line"
          fill
          sizes="100vw"
        />
        <div className="factory-band-overlay" />
        <div className="factory-band-content" data-reveal>
          <span className="eyebrow">FACTORY REVIEW</span>
          <h2>From model selection to container loading.</h2>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={item}>
                <strong>0{index + 1}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section verification-section">
        <div className="section-inner verify-grid">
          <div className="verify-image" data-reveal>
            <Image
              src="/images/site/finished-units.webp"
              alt="Finished Sunrise portable toilet units in factory"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 50vw"
            />
          </div>
          <div className="verify-copy" data-reveal>
            <span className="section-kicker">BUYER CONFIDENCE</span>
            <h2>Built for wholesale procurement.</h2>
            <p>
              Sunrise keeps supplier review practical: product comparison, factory proof,
              documentation and shipment planning.
            </p>
            <ul>
              <li>Factory and equipment visuals</li>
              <li>SGS, RoHS and assessment files</li>
              <li>Catalog, model and packing data</li>
              <li>Overseas buyer case records</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section cases-section" id="cases">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">EXPORT CASES</span>
              <h2>Customer visits and export cases</h2>
            </div>
            <p>
              Real project visuals help buyers verify Sunrise before commercial discussion.
            </p>
          </div>
          <div className="case-grid">
            <article data-reveal>
              <Image src="/images/site/case-team.webp" alt="Overseas customers visiting Sunrise" fill sizes="(max-width: 900px) calc(100vw - 32px), 50vw" />
              <div>
                <strong>Customer Visit</strong>
                <span>Factory and product review with overseas buyers</span>
              </div>
            </article>
            <article data-reveal style={{ transitionDelay: "90ms" }}>
              <Image src="/images/site/case-buyers.webp" alt="Customers standing beside portable toilets" fill sizes="(max-width: 900px) calc(100vw - 32px), 50vw" />
              <div>
                <strong>Project Discussion</strong>
                <span>Model selection and commercial supply planning</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section resources-section" id="resources">
        <div className="section-inner resource-grid">
          <div data-reveal>
            <span className="section-kicker">BUYER RESOURCES</span>
            <h2>Portable toilet sourcing resources.</h2>
          </div>
          <div className="resource-list">
            {resources.map((item, index) => (
              <a href="#contact" key={item} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span>{item}</span>
                <strong>Open</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner contact-inner">
          <div data-reveal>
            <span className="section-kicker">REQUEST A QUOTATION</span>
            <h2>Send model, quantity and destination port.</h2>
            <p>Get specifications, MOQ, lead time, packing data and a B2B quotation.</p>
          </div>
          <div className="contact-actions" data-reveal>
            <a className="button button-primary" href="https://sunrisetoilet.com">Contact Sunrise</a>
            <a className="button button-dark" href="https://sunrisetoilet.com">Current Catalogue</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <BrandMark light />
          <span>Portable toilet manufacturing and export support from Ningbo, China.</span>
        </div>
      </footer>
    </main>
  );
}
