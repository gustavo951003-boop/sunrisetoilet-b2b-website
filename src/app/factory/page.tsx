import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portable Toilet Factory in China",
  description:
    "Review Sunrise factory video, production capability, export support, spare parts planning and container loading for HDPE portable toilet supply.",
  alternates: {
    canonical: "/factory",
  },
};

const facts = [
  "Rotational molding experience for HDPE portable toilet cabins and large plastic products",
  "Blow molding and selected plastic component support for compatible OEM projects",
  "Container loading, export packing and document preparation",
  "Spare parts planning for rental fleets, distributors and repeat orders",
];

const assetPlacement = [
  {
    title: "Factory video",
    text: "Use on the Factory page as proof of production environment and buyer review material.",
  },
  {
    title: "Factory screenshots",
    text: "Use across Factory and homepage capability sections as still images when video is not needed.",
  },
  {
    title: "Supplier assessment",
    text: "Use under Resources / Certificates as a downloadable third-party supplier review file.",
  },
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
          Sunrise uses its factory video, production images and third-party assessment files
          to help B2B buyers review manufacturing capability before quotation.
        </p>
      </section>

      <section className="factory-video-section" aria-label="Sunrise factory video">
        <video controls preload="metadata" src="/videos/sunrise-factory-video.mp4">
        </video>
        <div>
          <span className="section-kicker">VIDEO REVIEW</span>
          <h2>Factory video belongs on the Factory page, not as a homepage background.</h2>
          <p>
            Keeping video here preserves homepage speed while still giving procurement teams
            a clear place to review production capability, workshop environment and export readiness.
          </p>
        </div>
      </section>

      <section className="placeholder-list" aria-label="Factory capability">
        {facts.map((fact) => (
          <div key={fact}>{fact}</div>
        ))}
      </section>

      <section className="asset-map-section" aria-label="Factory asset placement">
        {assetPlacement.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
