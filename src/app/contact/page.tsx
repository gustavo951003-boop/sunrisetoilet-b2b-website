import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Sunrise for Factory Quote",
  description:
    "Contact Sunrise for HDPE portable toilet specifications, MOQ, lead time, packing data and factory-direct B2B quotation.",
  alternates: {
    canonical: "/contact",
  },
};

const requestItems = [
  "Target model or application",
  "Estimated quantity and destination market",
  "Preferred configuration, color and accessories",
  "Container loading, spare parts or certificate requirements",
];

export default function ContactPage() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/">
          Sunrise
        </Link>
        <span className="section-kicker">CONTACT</span>
        <h1>Request a factory quote.</h1>
        <p>
          A full inquiry form can be added later. For now, send Sunrise your model,
          quantity, destination market and configuration requirements for a B2B quotation.
        </p>
        <a className="button button-primary" href="mailto:sales@sunrisetoilet.com">
          Email Sales Team
        </a>
      </section>

      <section className="placeholder-list" aria-label="Information to include in an inquiry">
        {requestItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </section>
    </main>
  );
}
