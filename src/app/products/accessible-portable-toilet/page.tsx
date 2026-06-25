import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessible Portable Toilet",
  description:
    "Accessible HDPE portable toilet for public projects, venues and inclusive temporary sanitation procurement.",
  alternates: {
    canonical: "/products/accessible-portable-toilet",
  },
};

const specs = [
  "Wide-entry portable sanitation cabin",
  "Spacious interior layout for accessible use",
  "Suitable for public projects and event supply",
  "Can be quoted with standard portable toilets for mixed container orders",
];

export default function AccessiblePortableToiletPage() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/products">
          Products
        </Link>
        <span className="section-kicker">ACCESSIBLE MODEL</span>
        <h1>Accessible portable toilet for project procurement.</h1>
        <p>
          A wide-entry HDPE portable toilet prepared for inclusive job sites, venues,
          public-use projects and sanitation distributors.
        </p>
        <Link className="button button-primary" href="/contact">
          Request Accessible Toilet Quote
        </Link>
      </section>

      <section className="placeholder-list" aria-label="Accessible portable toilet quick specifications">
        {specs.map((spec) => (
          <div key={spec}>{spec}</div>
        ))}
      </section>
    </main>
  );
}
