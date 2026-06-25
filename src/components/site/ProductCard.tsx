import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/products/product-data";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link className="product-card-modern" href={`/products/${product.slug}`}>
      <div className="product-card-image">
        <Image
          className="product-card-img"
          src={product.image}
          alt={product.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
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
