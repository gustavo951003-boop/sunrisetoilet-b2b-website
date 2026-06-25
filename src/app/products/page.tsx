import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portable Toilet Products",
  description:
    "HDPE portable toilet product range from Sunrise, including standard, hand-wash, reinforced and accessible portable toilet models.",
  alternates: {
    canonical: "/products",
  },
};

const productLinks = [
  {
    model: "PT-360",
    title: "Standard Portable Toilet",
    text: "Core rental-fleet model for construction sites, events and distributor stock.",
    href: "/contact",
  },
  {
    model: "PT-370",
    title: "Portable Toilet with Hand Wash",
    text: "Hand-wash portable restroom for markets that require improved on-site hygiene.",
    href: "/products/pt-370-portable-toilet",
  },
  {
    model: "PT-390",
    title: "Double-wall Portable Toilet",
    text: "Reinforced HDPE cabin option for repeated handling and long-term outdoor use.",
    href: "/contact",
  },
  {
    model: "PDT-100",
    title: "Accessible Portable Toilet",
    text: "Wide-entry portable sanitation unit for public projects and inclusive facilities.",
    href: "/products/accessible-portable-toilet",
  },
];

export default function ProductsPage() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/">
          Sunrise
        </Link>
        <span className="section-kicker">PRODUCTS</span>
        <h1>Portable toilet product range.</h1>
        <p>
          This page is prepared for future product detail expansion. Sunrise supplies HDPE
          portable toilets for rental fleets, distributors, construction suppliers and project buyers.
        </p>
      </section>

      <section className="placeholder-grid" aria-label="Portable toilet models">
        {productLinks.map((product) => (
          <article key={product.model}>
            <span>{product.model}</span>
            <h2>{product.title}</h2>
            <p>{product.text}</p>
            <Link href={product.href}>View details</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
