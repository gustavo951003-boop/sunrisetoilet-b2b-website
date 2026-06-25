import Image from "next/image";
import Link from "next/link";
import type { Product } from "./product-data";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <main className="product-detail-page">
      <section className="product-detail-hero">
        <div>
          <Link className="back-link" href="/products">
            Products
          </Link>
          <span className="section-kicker">{product.category.toUpperCase()}</span>
          <h1>
            {product.model} {product.name}
          </h1>
          <p>{product.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request Specifications
            </Link>
            <a className="button button-light" href="/downloads/Sunrise-Catalog-2026.pdf">
              Download Catalog
            </a>
          </div>
        </div>
        <div className="product-detail-media">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
          />
        </div>
      </section>

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">IDEAL FOR</span>
          <h2>{product.idealFor}</h2>
          <p>
            This page summarizes the current catalog data for B2B buyers comparing model
            fit, tank capacity, weight, service interval and container-order planning.
          </p>
        </div>
        <div className="spec-table">
          <div>
            <strong>Dimensions</strong>
            <span>{product.dimensions}</span>
          </div>
          <div>
            <strong>Volume</strong>
            <span>{product.volume.join(" / ")}</span>
          </div>
          <div>
            <strong>Weight</strong>
            <span>{product.weight}</span>
          </div>
        </div>
      </section>

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">KEY SPECIFICATIONS</span>
          <h2>Buyer-focused technical points.</h2>
        </div>
        <div className="detail-list">
          {product.keySpecifications.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="product-detail-section product-detail-grid">
        <div>
          <span className="section-kicker">SUNRISE ADVANTAGES</span>
          <h2>Why this model matters for rental and project buyers.</h2>
        </div>
        <div className="detail-list">
          {product.advantages.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
