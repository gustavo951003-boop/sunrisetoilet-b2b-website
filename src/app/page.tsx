import Image from "next/image";
import Link from "next/link";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { ExportCases } from "@/components/site/ExportCases";
import { HomeHeroMedia } from "@/components/site/HomeHeroMedia";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { featuredProductSlugs, products } from "./products/product-data";
import { HomeScrollReveal } from "./HomeScrollReveal";

export const dynamic = "force-static";

const heroSlides = [
  {
    image: "/images/site/hero-yard.webp",
    alt: "Sunrise HDPE portable toilets prepared for export in the factory yard",
    width: 2400,
    height: 1600,
  },
  {
    image: "/images/site/finished-units.webp",
    alt: "Finished Sunrise portable toilet units ready for buyer inspection",
    width: 1672,
    height: 941,
  },
  {
    image: "/images/site/factory-line.webp",
    alt: "Sunrise portable toilet production line for HDPE molded cabins",
    width: 1672,
    height: 941,
  },
];

const heroTrustStats = [
  {
    value: "20+",
    label: "Years manufacturing",
  },
  {
    value: "1,100+",
    label: "Global B2B customers",
  },
  {
    value: "AU / EU / US",
    label: "Export support",
  },
  {
    value: "Documents",
    label: "Certificates & packing data",
  },
];

const procurementSteps = [
  "Model selection for rental fleets, events and construction sites",
  "Specification, certificate and packing data review before quote",
  "MOQ, lead time, color and spare parts planning",
  "Inspection, export packing and container loading support",
];

const oemCapabilities = [
  "Rotational molded plastic products",
  "Blow molded tanks and containers",
  "Custom color, logo and fittings",
  "Export packing and container loading support",
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

export default function Home() {
  const featuredProducts = featuredProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);

  return (
    <main id="top">
      <HomeScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SiteHeader variant="transparent" />

      <section className="hero" aria-labelledby="hero-title">
        <HomeHeroMedia slides={heroSlides} />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow">Portable Toilet Manufacturer in China</span>
          <h1 id="hero-title">Factory-Direct HDPE Portable Toilets For Rental Fleets.</h1>
          <p>
            Manufactured in Ningbo for distributors, site-service companies and project buyers
            across Australia, Europe, the US and global markets.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request Factory Quote
            </Link>
            <Link className="button button-ghost" href="/products">
              View Product Range
            </Link>
          </div>
        </div>

        <div className="hero-metrics" aria-label="B2B buyer trust points">
          {heroTrustStats.map((item) => (
            <div className="hero-metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CertificationStrip />

      <section className="section products-section" id="products">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">FEATURED MODELS</span>
              <h2>Portable Toilet Product Range for Rental Fleets and Distributors</h2>
            </div>
            <p>
              Start with high-demand Sunrise models, then request specifications, packing data
              and container loading advice for your market.
            </p>
          </div>

          <div className="product-index-grid">
            {featuredProducts.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
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
            Sunrise supports model selection, accessory planning, inspection files, spare parts
            and container shipment preparation.
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

      <ExportCases />

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

      <section className="section oem-mini-section">
        <div className="section-inner oem-mini-grid" data-reveal>
          <div>
            <span className="section-kicker">SECONDARY FACTORY CAPABILITY</span>
            <h2>OEM plastic manufacturing capabilities</h2>
            <p>
              In addition to portable toilet manufacturing, Sunrise supports selected OEM
              plastic projects based on rotational molding, blow molding and large plastic
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

      <SectionCta
        kicker="GET A FACTORY QUOTE"
        title="Request price, specifications and packing data."
        text="Send your target models, quantity and destination market. Sunrise can prepare model suggestions, MOQ, lead time, packing data and a B2B quotation."
        primaryLabel="Request Factory Quote"
        secondaryLabel="Get Product Specifications"
        secondaryHref="/contact"
      />

      <SiteFooter />
    </main>
  );
}
