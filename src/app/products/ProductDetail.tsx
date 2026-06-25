import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { productCategories } from "./product-categories";
import type { Product } from "./product-data";
import { products } from "./product-data";

function getUniqueItems(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

function getVolumeValue(
  product: Product,
  keywords: string[],
  fallback: string,
  useAllVolumesAsFallback = false,
) {
  const usableVolume = product.volume.filter((item) => item.trim() && item.trim() !== "/");
  const matched = usableVolume.find((item) => {
    const normalizedItem = item.toLowerCase();

    return keywords.some((keyword) => normalizedItem.includes(keyword));
  });

  if (matched) {
    return matched;
  }

  if (useAllVolumesAsFallback && usableVolume.length > 0) {
    return usableVolume.join(" / ");
  }

  return fallback;
}

function getRelatedProducts(product: Product) {
  const category = productCategories.find((item) => item.productSlugs.includes(product.slug));
  const categoryRelated = category
    ? category.productSlugs
        .filter((slug) => slug !== product.slug)
        .map((slug) => products.find((item) => item.slug === slug))
        .filter((item): item is Product => item !== undefined)
    : [];

  if (categoryRelated.length >= 3) {
    return categoryRelated.slice(0, 3);
  }

  return [
    ...categoryRelated,
    ...products.filter(
      (item) =>
        item.slug !== product.slug &&
        !categoryRelated.some((related) => related.slug === item.slug),
    ),
  ].slice(0, 3);
}

export function ProductDetail({ product }: { product: Product }) {
  const relatedProducts = getRelatedProducts(product);
  const categoryLabel = product.category.toLowerCase();
  const waterTank = getVolumeValue(
    product,
    ["water tank", "clean water", "freshwater", "fresh water"],
    categoryLabel.includes("waste") ? "Not applicable" : "External water connection or model-specific tank",
  );
  const wasteTank = getVolumeValue(
    product,
    ["waste tank", "wastewater", "waste"],
    categoryLabel.includes("shower") || categoryLabel.includes("sewer")
      ? "External drainage connection"
      : "See model configuration",
    categoryLabel.includes("waste"),
  );
  const mainOptions = getUniqueItems([
    ...product.cardSpecs,
    ...product.keySpecifications.filter((item) =>
      /option|available|custom|skid|flush|hand wash|pump|connection|dual|waterless|sewer|tank/i.test(item),
    ),
  ]).slice(0, 5);
  const configurationOptions = getUniqueItems([
    ...mainOptions,
    ...product.advantages,
    ...product.keySpecifications,
  ]).slice(0, 6);
  const specRows = [
    ["Model", product.model],
    ["Product name", product.name],
    ["Ideal for", product.idealFor],
    ["Dimensions", product.dimensions],
    ["Water tank", waterTank],
    ["Waste tank", wasteTank],
    ["Weight", product.weight],
    ["Structure", product.keySpecifications[0]],
    ["Main options", mainOptions.join(" / ")],
  ];

  return (
    <main className="product-detail-page">
      <SiteHeader />
      <PageHero
        kicker="Portable Toilet Model"
        title={`${product.model} ${product.name}`}
        description={product.description}
        backgroundImage="/images/site/hero-yard.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.model },
        ]}
        primaryCTA={{ label: "Request Specifications", href: "/contact" }}
        secondaryCTA={{ label: "Ask for Container Loading Plan", href: "/contact" }}
      />

      <section className="product-overview-section">
        <div className="product-detail-media">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
          />
        </div>

        <aside className="product-quote-panel" aria-label={`${product.model} quote and specification panel`}>
          <span className="section-kicker">{product.category}</span>
          <h2>{product.model} procurement summary</h2>
          <p>{product.idealFor}</p>
          <dl>
            <div>
              <dt>Model</dt>
              <dd>{product.model}</dd>
            </div>
            <div>
              <dt>Name</dt>
              <dd>{product.name}</dd>
            </div>
            <div>
              <dt>Ideal for</dt>
              <dd>{product.idealFor}</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>Water tank</dt>
              <dd>{waterTank}</dd>
            </div>
            <div>
              <dt>Waste tank</dt>
              <dd>{wasteTank}</dd>
            </div>
            <div>
              <dt>Weight</dt>
              <dd>{product.weight}</dd>
            </div>
            <div>
              <dt>Options</dt>
              <dd>{mainOptions.join(" / ")}</dd>
            </div>
          </dl>
          <div className="quote-panel-actions">
            <Link className="button button-primary" href="/contact">
              Request Specifications
            </Link>
            <Link className="button button-light" href="/contact">
              Ask for Factory Quote
            </Link>
          </div>
          <div className="procurement-support-block">
            <strong>Procurement Support</strong>
            {product.procurementSupport.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">KEY SPECIFICATIONS</span>
          <h2>Technical data for B2B procurement review.</h2>
          <p>
            Review dimensions, tank capacity, structure and options before requesting
            price, MOQ and packing data.
          </p>
        </div>
        <div className="spec-table">
          {specRows.map(([label, value]) => (
            <div key={label}>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="product-compact-section" aria-label={`${product.model} best-fit applications`}>
        <div>
          <span className="section-kicker">BEST-FIT APPLICATIONS</span>
          <h2>Where this model fits best.</h2>
        </div>
        <div className="application-chip-list">
          {product.applications.slice(0, 4).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">OPTIONS AND CONFIGURATION</span>
          <h2>Configure the model for your market and service plan.</h2>
          <p>
            Confirm skid type, tank layout, hand wash, flush, color, fittings and other
            model-specific options before Sunrise prepares MOQ, price and packing data.
          </p>
        </div>
        <div className="detail-list">
          {configurationOptions.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="product-detail-section">
        <div className="catalog-section-head">
          <span className="section-kicker">RELATED PRODUCTS</span>
          <h2>Compare nearby models from the Sunrise catalog.</h2>
        </div>
        <div className="product-index-grid">
          {relatedProducts.map((related) => (
            <ProductCard product={related} key={related.slug} />
          ))}
        </div>
      </section>

      <SectionCta
        title="Request price, specifications and packing data."
        text={`Send your target quantity, destination market and configuration requirements for ${product.model}. Sunrise can prepare specifications, MOQ, lead time and container loading advice.`}
        primaryLabel="Request Product Quote"
        secondaryLabel="Ask for Container Loading Plan"
        secondaryHref="/contact"
      />
      <SiteFooter />
    </main>
  );
}
