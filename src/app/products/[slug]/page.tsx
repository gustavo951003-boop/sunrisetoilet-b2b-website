import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "../ProductDetail";
import { getProductBySlug, products } from "../product-data";

const staticRoutes = new Set(["pt-370-portable-toilet", "accessible-portable-toilet"]);

export function generateStaticParams() {
  return products
    .filter((product) => !staticRoutes.has(product.slug))
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.model} ${product.name}`,
    description: `${product.description} Review dimensions, tank volume, weight and B2B specifications from Sunrise.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
