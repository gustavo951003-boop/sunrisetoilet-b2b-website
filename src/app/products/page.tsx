import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "./product-data";

export const metadata: Metadata = {
  title: "Portable Toilet Products",
  description:
    "HDPE portable toilet product range from Sunrise, including standard, hand-wash, reinforced, accessible, shower, hand wash station and waste tank models.",
  alternates: {
    canonical: "/products",
  },
};

const categories = ["Standard model", "Premium model", "Washbasin", "Waste tanks"];

export default function ProductsPage() {
  return (
    <main className="products-index-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/">
          Sunrise
        </Link>
        <span className="section-kicker">PRODUCTS</span>
        <h1>Portable toilet product range from the Sunrise catalog.</h1>
        <p>
          Catalog-based product pages for B2B buyers comparing portable toilets, hand wash
          stations, shower cabins, sewer-connect units and waste tanks for container supply.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/downloads/Sunrise-Catalog-2026.pdf">
            Download 2026 Catalog
          </a>
          <Link className="button button-light" href="/contact">
            Request Quote
          </Link>
        </div>
      </section>

      <section className="product-index-categories" aria-label="Product categories">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className="product-index-grid" aria-label="Portable toilet product models">
        {products.map((product) => (
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
