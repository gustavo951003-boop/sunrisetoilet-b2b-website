import type { Metadata } from "next";
import { ProductDetail } from "../ProductDetail";
import { getProductBySlug } from "../product-data";

const product = getProductBySlug("accessible-portable-toilet");

export const metadata: Metadata = {
  title: "PDT-100 Accessible Portable Toilet",
  description:
    "PDT-100 accessible HDPE portable toilet with wide entry, spacious interior, flushing system and low-profile sink for public project procurement.",
  alternates: {
    canonical: "/products/accessible-portable-toilet",
  },
};

export default function AccessiblePortableToiletPage() {
  return <ProductDetail product={product!} />;
}
