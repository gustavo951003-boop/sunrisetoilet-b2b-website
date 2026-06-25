import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portable Toilet Factory in China",
  description:
    "Review Sunrise factory capability for HDPE portable toilet production, packing support, spare parts and export supply.",
  alternates: {
    canonical: "/factory",
  },
};

const facts = [
  "HDPE portable toilet model selection and configuration support",
  "Container loading, export packing and document preparation",
  "Spare parts planning for rental fleets and distributors",
  "Factory visuals and certificate files for buyer review",
];

export default function FactoryPage() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/">
          Sunrise
        </Link>
        <span className="section-kicker">FACTORY</span>
        <h1>Portable toilet factory capability.</h1>
        <p>
          This section is prepared for a future factory tour page covering production,
          materials, inspection, packing and export readiness.
        </p>
      </section>

      <section className="placeholder-list" aria-label="Factory capability">
        {facts.map((fact) => (
          <div key={fact}>{fact}</div>
        ))}
      </section>
    </main>
  );
}
