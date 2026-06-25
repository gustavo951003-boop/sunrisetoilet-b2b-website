import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "../ProductDetail";
import { getProductBySlug, products } from "../product-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

function getProductMetaTitle(slug: string, model: string, name: string) {
  if (slug === "pt-370-portable-toilet") {
    return "PT-370 Portable Toilet with Hand Wash | Sunrise";
  }

  if (slug === "accessible-portable-toilet") {
    return "Accessible Portable Toilet Supplier | PDT-100 Sunrise";
  }

  return `${model} ${name} | Sunrise`;
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
    title: getProductMetaTitle(product.slug, product.model, product.name),
    description: `${product.description} Review dimensions, tank volume, weight and B2B specifications from Sunrise.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: getProductMetaTitle(product.slug, product.model, product.name),
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.alt,
        },
      ],
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
