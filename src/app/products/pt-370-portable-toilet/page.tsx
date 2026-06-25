import type { Metadata } from "next";
import { ProductDetail } from "../ProductDetail";
import { getProductBySlug } from "../product-data";

const product = getProductBySlug("pt-370-portable-toilet");

export const metadata: Metadata = {
  title: "PT-370 Portable Toilet with Hand Wash",
  description:
    "PT-370 HDPE portable toilet with optional hand wash sink, urinal and recirculating flush for rental fleets and event supply.",
  alternates: {
    canonical: "/products/pt-370-portable-toilet",
  },
};

export default function Pt370Page() {
  return <ProductDetail product={product!} />;
}
