import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PT-370 Portable Toilet with Hand Wash",
  description:
    "PT-370 HDPE portable toilet with hand wash basin for rental fleets, construction sites, events and B2B portable restroom supply.",
  alternates: {
    canonical: "/products/pt-370-portable-toilet",
  },
};

const specs = [
  "HDPE rotational molded portable toilet cabin",
  "Integrated hand wash basin configuration",
  "Fresh water and waste tank planning available",
  "Suitable for container supply and repeat fleet orders",
];

export default function Pt370Page() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/products">
          Products
        </Link>
        <span className="section-kicker">PT-370</span>
        <h1>PT-370 portable toilet with hand wash.</h1>
        <p>
          A hand-wash portable restroom option for B2B buyers serving job sites, events,
          public-use projects and rental markets that require improved hygiene.
        </p>
        <Link className="button button-primary" href="/contact">
          Request PT-370 Specifications
        </Link>
      </section>

      <section className="placeholder-list" aria-label="PT-370 quick specifications">
        {specs.map((spec) => (
          <div key={spec}>{spec}</div>
        ))}
      </section>
    </main>
  );
}
