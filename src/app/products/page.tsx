import type { Metadata } from "next";
import Link from "next/link";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { productCategories } from "./product-categories";
import { featuredProductSlugs, products } from "./product-data";

export const metadata: Metadata = {
  title: "Portable Toilet Product Range | HDPE Portable Toilet Supplier",
  description:
    "Compare Sunrise HDPE portable toilets, accessible units, shower cabins, hand wash stations and waste tanks for rental fleets, distributors and project supply.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Portable Toilet Product Range | HDPE Portable Toilet Supplier",
    description:
      "Catalog-based product range for B2B buyers sourcing HDPE portable toilets from China.",
    images: [
      {
        url: "/images/site/pt-360.webp",
        width: 1200,
        height: 630,
        alt: "Sunrise HDPE portable toilet product range",
      },
    ],
  },
};

export default function ProductsPage() {
  const featuredProducts = featuredProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined);

  return (
    <main className="products-index-page">
      <SiteHeader />
      <PageHero
        kicker="Product Catalog"
        title="Portable Toilet Product Range for B2B Buyers"
        description="Compare HDPE portable toilets, accessible units, shower cabins, hand wash stations and waste tanks for rental fleets, distributors and project supply."
        backgroundImage="/images/site/hero-yard.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        primaryCTA={{ label: "Request Product Catalog", href: "/downloads/Sunrise-Catalog-2026.pdf" }}
        secondaryCTA={{ label: "Ask for Factory Quote", href: "/contact" }}
      />

      <section className="catalog-intro">
        <span className="section-kicker">CATALOG OVERVIEW</span>
        <h2>Factory-direct sanitation products for export supply.</h2>
        <p>
          Sunrise organizes its catalog around real procurement workflows: choose the product
          category, compare model specifications, then request pricing, packing data and
          container loading advice for your market.
        </p>
      </section>

      <section className="product-index-categories" aria-label="Product categories">
        {productCategories.map((category) => (
          <Link href={`/products/category/${category.slug}`} key={category.slug}>
            <strong>{category.menuLabel}</strong>
            <span>{category.productSlugs.length} models / {category.buyerNote}</span>
          </Link>
        ))}
      </section>

      <section className="catalog-section">
        <div className="catalog-section-head">
          <span className="section-kicker">FEATURED MODELS</span>
          <h2>Common B2B starting points for fleet and distributor buyers.</h2>
        </div>
        <div className="product-index-grid" aria-label="Featured portable toilet models">
          {featuredProducts.map((product, index) => (
            <ProductCard product={product} priority={index === 0} key={product.slug} />
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-section-head">
          <span className="section-kicker">FULL PRODUCT CATALOG</span>
          <h2>All catalog models currently available for specification review.</h2>
        </div>
        <div className="product-index-grid" aria-label="Portable toilet product models">
        {products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
        </div>
      </section>

      <CertificationStrip compact />
      <SectionCta
        title="Need price, specifications and packing data?"
        text="Send your target models, quantity and destination market. Sunrise can prepare product specifications, MOQ, lead time and container loading support."
        primaryLabel="Request Factory Quote"
        secondaryLabel="View Factory Capability"
        secondaryHref="/factory"
      />
      <SiteFooter />
    </main>
  );
}
