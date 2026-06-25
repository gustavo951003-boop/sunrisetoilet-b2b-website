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

const applications = [
  "Rental fleets",
  "Construction sites",
  "Events",
  "Public venues",
  "Distributors",
  "Project tenders",
];

const buyerVerification = [
  "Material and structure review",
  "SGS / RoHS documents available",
  "Packing and container loading data",
  "Inspection support before shipment",
  "Spare parts support for repeat orders",
];

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
  const specRows = [
    ["Model", product.model],
    ["Dimensions", product.dimensions],
    ["Tank capacity", product.volume.join(" / ")],
    ["Weight", product.weight],
    ["Structure", product.keySpecifications[0]],
    ["Options", product.keySpecifications.slice(1, 4).join(" / ")],
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
              <dt>Product name</dt>
              <dd>{product.name}</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>Tank volume</dt>
              <dd>{product.volume.join(" / ")}</dd>
            </div>
            <div>
              <dt>Weight</dt>
              <dd>{product.weight}</dd>
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
          <div className="buyer-files-block">
            <strong>Buyer verification files</strong>
            {buyerVerification.slice(0, 4).map((item) => (
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

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">APPLICATIONS</span>
          <h2>Use cases for rental, construction and project supply.</h2>
        </div>
        <div className="application-list">
          {applications.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">BUYER VERIFICATION</span>
          <h2>Documents and support available before shipment.</h2>
          <p>
            Sunrise supports practical B2B review without overclaiming certification coverage.
            Buyers can request compliance files, packing plans and pre-shipment review support.
          </p>
        </div>
        <div className="detail-list">
          {[...product.advantages, ...buyerVerification].map((item) => (
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
        secondaryLabel="Back to Product Catalog"
        secondaryHref="/products"
      />
      <SiteFooter />
    </main>
  );
}
