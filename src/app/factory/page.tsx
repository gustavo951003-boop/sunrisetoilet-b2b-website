import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { certificationBadges } from "../certification-data";

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

      <section className="factory-certification-section" aria-label="Factory certification references">
        <div>
          <span className="section-kicker">CERTIFICATION REFERENCES</span>
          <h2>Quality, compliance and market-standard marks for buyer review.</h2>
          <p>
            Sunrise presents third-party quality assurance, SGS-related review materials,
            RoHS compliance support and Australian market standard references alongside
            factory video and downloadable documents.
          </p>
        </div>
        <div className="factory-certification-grid">
          {certificationBadges.map((badge) => (
            <article key={badge.name}>
              <div className="factory-certification-logo">
                <Image
                  src={badge.image}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  sizes="(max-width: 720px) 42vw, 160px"
                />
              </div>
              <h3>{badge.name}</h3>
              <p>{badge.note}</p>
            </article>
          ))}
        </div>
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
