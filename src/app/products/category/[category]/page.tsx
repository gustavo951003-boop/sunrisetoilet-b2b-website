import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductCategoryBySlug,
  getProductsByCategorySlug,
  productCategories,
} from "../../product-categories";

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
    title: `${category.title} | Sunrise Product Catalog`,
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
      <section className="placeholder-hero product-category-hero">
        <Link className="back-link" href="/products">
          Products
        </Link>
        <span className="section-kicker">PRODUCT CATEGORY</span>
        <h1>{category.title} from the Sunrise catalog.</h1>
        <p>{category.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/downloads/Sunrise-Catalog-2026.pdf">
            Download Catalog
          </a>
          <Link className="button button-light" href="/contact">
            Request Quote
          </Link>
        </div>
      </section>

      <section className="product-model-tabs" aria-label={`${category.title} models`}>
        {categoryProducts.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.slug}>
            <span>{product.model}</span>
            <strong>{product.name}</strong>
          </Link>
        ))}
      </section>

      <section className="category-summary">
        <div>
          <span className="section-kicker">BUYER NOTE</span>
          <h2>{category.buyerNote}</h2>
        </div>
        <p>
          Select a model to view specifications, dimensions, tank capacity, application notes
          and export-ready supply details.
        </p>
      </section>

      <section className="product-index-grid" aria-label={`${category.title} product list`}>
        {categoryProducts.map((product) => (
          <article key={product.slug}>
            <Link href={`/products/${product.slug}`} className="product-index-media">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) 50vw, 25vw"
              />
              <span>{product.model}</span>
            </Link>
            <div>
              <span className="product-category">{product.category}</span>
              <h2>{product.name}</h2>
              <p>{product.idealFor}</p>
              <Link href={`/products/${product.slug}`}>View specifications</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
