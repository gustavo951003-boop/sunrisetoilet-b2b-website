import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionCta } from "@/components/site/SectionCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  getProductCategoryBySlug,
  getProductsByCategorySlug,
  productCategories,
} from "../../product-categories";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getProductCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} Product Catalog`,
    description: category.description,
    alternates: {
      canonical: `/products/category/${category.slug}`,
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getProductCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategorySlug(category.slug);

  return (
    <main className="products-index-page">
      <SiteHeader />
      <PageHero
        kicker="Product Category"
        title={category.heroTitle}
        description={category.description}
        backgroundImage="/images/site/factory-workshop.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.title },
        ]}
        primaryCTA={{ label: "Request Specifications", href: "/contact" }}
        secondaryCTA={{ label: "Ask for Container Loading Plan", href: "/contact" }}
      />

      <section className="category-overview" aria-labelledby="category-overview-title">
        <div>
          <span className="section-kicker" id="category-overview-title">
            Category Overview
          </span>
          <p className="category-overview-text">{category.categoryIntro}</p>
        </div>
        <div className="category-highlight-chips" aria-label={`${category.title} highlights`}>
          {category.categoryHighlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </section>

      <section className="product-index-grid" aria-label={`${category.title} product list`}>
        {categoryProducts.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </section>

      <SectionCta
        kicker="REQUEST SPECIFICATIONS"
        title={`Need help comparing ${category.title.toLowerCase()}?`}
        text="Share your destination market, quantity and required configuration. Sunrise can recommend models, specifications and packing data for your order review."
        primaryLabel="Request Category Quote"
        secondaryLabel="Contact Sales Team"
        secondaryHref="/contact"
      />
      <SiteFooter />
    </main>
  );
}
