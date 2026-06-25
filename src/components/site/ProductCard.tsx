import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/products/product-data";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="catalog-product-card">
      <Link href={`/products/${product.slug}`} className="catalog-product-media">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          priority={priority}
          sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) 50vw, 25vw"
        />
        <span>{product.model}</span>
      </Link>
      <div className="catalog-product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.idealFor}</p>
        <ul>
          {product.keySpecifications.slice(0, 3).map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
        <Link href={`/products/${product.slug}`}>View {product.model} specifications</Link>
      </div>
    </article>
  );
}
