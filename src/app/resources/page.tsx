import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portable Toilet Buyer Resources",
  description:
    "Portable toilet sourcing resources for B2B buyers comparing manufacturers, dimensions, packing data and accessible toilet options.",
  alternates: {
    canonical: "/resources",
  },
};

const resources = [
  "How to choose a portable toilet manufacturer in China",
  "Portable toilet dimensions, packing and container loading guide",
  "Accessible portable toilet procurement checklist",
  "Spare parts planning for portable toilet rental fleets",
];

export default function ResourcesPage() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/">
          Sunrise
        </Link>
        <span className="section-kicker">RESOURCES</span>
        <h1>Portable toilet sourcing resources.</h1>
        <p>
          This page is prepared for future SEO resource articles. For this stage it keeps
          the structure crawlable without adding a CMS or database.
        </p>
      </section>

      <section className="placeholder-list" aria-label="Resource topics">
        {resources.map((resource) => (
          <div key={resource}>{resource}</div>
        ))}
      </section>
    </main>
  );
}
