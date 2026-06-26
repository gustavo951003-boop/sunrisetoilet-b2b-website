import Image from "next/image";
import Link from "next/link";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { CountUpStat } from "@/components/site/CountUpStat";
import { ExportCases } from "@/components/site/ExportCases";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { categoryNavigationAssets } from "@/data/categoryNavigation";
import { productCategories } from "./products/product-categories";
import { featuredProductSlugs, products } from "./products/product-data";
import { ScrollReveal } from "./ScrollReveal";

const heroSlides = [
  {
    image: "/images/site/hero-yard.webp",
    alt: "Sunrise HDPE portable toilets prepared for export in the factory yard",
  },
  {
    image: "/images/site/finished-units.webp",
    alt: "Finished Sunrise portable toilet units ready for buyer inspection",
  },
  {
    image: "/images/site/factory-line.webp",
    alt: "Sunrise portable toilet production line for HDPE molded cabins",
  },
];

const heroTrustStats: Array<
  | {
      kind: "count";
      end: number;
      suffix: string;
      duration: number;
      label: string;
      ariaLabel: string;
    }
  | {
      kind: "text";
      value: string;
      label: string;
    }
> = [
  {
    kind: "count",
    end: 20,
    suffix: "+",
    duration: 900,
    label: "Years manufacturing",
    ariaLabel: "20 plus years manufacturing",
  },
  {
    kind: "count",
    end: 1100,
    suffix: "+",
    duration: 1400,
    label: "Global B2B customers",
    ariaLabel: "1,100 plus global B2B customers",
  },
  {
    kind: "text",
    value: "AU / EU / US",
    label: "Export support",
  },
  {
    kind: "text",
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
  "Rotational molded HDPE products",
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
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SiteHeader variant="transparent" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          {heroSlides.map((slide, index) => (
            <Image
              className={`hero-image hero-image-${index + 1}`}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              key={slide.image}
            />
          ))}
        </div>
        <div className="hero-overlay" />

        <div className="hero-content" data-reveal>
          <span className="eyebrow">PORTABLE TOILET MANUFACTURER IN CHINA</span>
          <h1 id="hero-title">Factory-direct HDPE portable toilets for rental fleets.</h1>
          <p>
            Manufactured in Ningbo for distributors, site-service companies and project buyers
            across Australia, the UK, the US and global markets.
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

        <div className="hero-metrics" aria-label="B2B buyer trust points" data-reveal>
          {heroTrustStats.map((item) => (
            <div className="hero-metric" key={item.label}>
              <strong>
                {item.kind === "count" ? (
                  <CountUpStat
                    end={item.end}
                    suffix={item.suffix}
                    duration={item.duration}
                    label={item.label}
                    ariaLabel={item.ariaLabel}
                  />
                ) : (
                  item.value
                )}
              </strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CertificationStrip />

      <section className="section home-category-section">
        <div className="section-inner">
          <div className="section-head" data-reveal>
            <div>
              <span className="section-kicker">PRODUCT CATEGORIES</span>
              <h2>Start with the right temporary sanitation category.</h2>
            </div>
            <p>
              Choose a product category, then request model specifications, packing data and
              container loading advice for your market.
            </p>
          </div>

          <div className="home-category-grid">
            {productCategories.map((category, index) => (
              <Link
                className="home-category-card"
                href={`/products/category/${category.slug}`}
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
                key={category.slug}
              >
                <span className="home-category-art">
                  <Image
                    src={categoryNavigationAssets[category.slug]?.image ?? category.image}
                    alt={categoryNavigationAssets[category.slug]?.alt ?? category.menuLabel}
                    fill
                    sizes="(max-width: 560px) 44vw, (max-width: 980px) 28vw, 190px"
                  />
                </span>
                <div className="home-category-content">
                  <span className="home-category-label">CATEGORY</span>
                  <strong className="home-category-title">{category.menuLabel}</strong>
                  <span className="home-category-copy">
                    {categoryNavigationAssets[category.slug]?.copy ?? category.shortNote}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
