import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { categoryNavigationAssets } from "@/data/categoryNavigation";
import { getProductsByCategorySlug, productCategories } from "./product-categories";
import { featuredProductSlugs, products } from "./product-data";

export const dynamic = "force-static";

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
        title="Portable Toilet Product Range For B2B Buyers"
        description="Compare HDPE portable toilets, accessible units, shower cabins, hand wash stations and waste tanks for rental fleets, distributors and project supply."
        backgroundImage="/images/site/hero-yard.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        primaryCTA={{ label: "Request Product Specifications", href: "/contact" }}
        secondaryCTA={{ label: "Download Catalog", href: "/downloads/Sunrise-Catalog-2026.pdf" }}
      />

      <section className="catalog-intro">
        <span className="section-kicker">CATALOG OVERVIEW</span>
        <h2>Choose a product category.</h2>
        <p>
          Start with a category, compare compact model cards, then request specifications,
          pricing, packing data and container loading advice.
        </p>
      </section>

      <section className="home-category-grid product-category-cards" aria-label="Product categories">
        {productCategories.map((category) => (
          <Link
            className="home-category-card"
            href={`/products/category/${category.slug}`}
            key={category.slug}
          >
            <span className="home-category-art">
              <Image
                src={categoryNavigationAssets[category.slug]?.image ?? category.image}
                alt={categoryNavigationAssets[category.slug]?.alt ?? category.alt}
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
      </section>

      <section className="catalog-section">
        <div className="catalog-section-head">
          <span className="section-kicker">FEATURED MODELS</span>
          <h2>Common B2B starting points for fleet and distributor buyers.</h2>
        </div>
        <div className="product-index-grid" aria-label="Featured portable toilet models">
          {featuredProducts.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </section>

      <section className="catalog-section">
        <div className="catalog-section-head">
          <span className="section-kicker">FULL PRODUCT CATALOG</span>
          <h2>Full product range by category.</h2>
        </div>
        <div className="grouped-product-range" aria-label="Full Sunrise product range">
          {productCategories.map((category) => {
            const categoryProducts = getProductsByCategorySlug(category.slug);

            return (
              <section className="product-category-group" key={category.slug}>
                <div className="product-category-group-head">
                  <div>
                    <span className="section-kicker">{category.menuLabel}</span>
                    <h3>{category.shortNote}</h3>
                  </div>
                  <Link href={`/products/category/${category.slug}`}>
                    View {category.menuLabel}
                  </Link>
                </div>
                <div className="product-index-grid">
                  {categoryProducts.map((product) => (
                    <ProductCard product={product} key={product.slug} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <CertificationStrip compact />
      <SectionCta
        kicker="REQUEST SPECIFICATIONS"
        title="Need price, specifications and packing data?"
        text="Send your target models, quantity and destination market. Sunrise can prepare product specifications, MOQ, lead time and container loading support."
        primaryLabel="Request Factory Quote"
        secondaryLabel="Ask for Container Loading Plan"
        secondaryHref="/contact"
      />
      <SiteFooter />
    </main>
  );
}
