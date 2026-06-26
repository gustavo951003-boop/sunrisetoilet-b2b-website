import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/products/product-data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const hasSecondaryImage = Boolean(product.secondaryImage && product.secondaryAlt);
  const cardImage = product.cardImage ?? `/images/products/card/${product.slug}.webp`;
  const cardSecondaryImage = `/images/products/card/${product.slug}-secondary.webp`;

  return (
    <Link className="product-card-modern" href={`/products/${product.slug}`}>
      <div
        className={
          hasSecondaryImage ? "product-card-image product-card-image-has-secondary" : "product-card-image"
        }
      >
        <Image
          className="product-card-img product-card-img-primary"
          src={cardImage}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {hasSecondaryImage ? (
          <Image
            className="product-card-img product-card-img-secondary"
            src={cardSecondaryImage}
            alt={product.secondaryAlt ?? product.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : null}
        <span className="product-model-badge">{product.model}</span>
      </div>
      <div className="product-card-body">
        <span className="product-category-pill">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.cardDescription}</p>
        <div className="product-spec-chips">
          {product.cardSpecs.slice(0, 3).map((spec) => (
            <span key={spec}>{spec}</span>
          ))}
        </div>
        <span className="product-card-link">View {product.model} specifications</span>
      </div>
    </Link>
  );
}
