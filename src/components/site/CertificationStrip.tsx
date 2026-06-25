import Image from "next/image";
import Link from "next/link";
import { certificationBadges } from "@/data/certifications";

type CertificationStripProps = {
  compact?: boolean;
  title?: string;
  subtitle?: string;
};

export function CertificationStrip({
  compact = false,
  title = "Certification & Compliance Documents for Buyer Review",
  subtitle = "Intertek, SGS, RoHS and Australian market reference documents are available to support distributor, rental fleet and project procurement review.",
}: CertificationStripProps) {
  return (
    <section className={compact ? "certification-panel certification-panel-compact" : "certification-panel"}>
      <div className="certification-panel-head">
        <span className="section-kicker">BUYER VERIFICATION</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="certification-card-grid">
        {certificationBadges.map((badge) => (
          <article key={badge.name}>
            <div className="certification-card-logo">
              <Image
                src={badge.image}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                sizes="(max-width: 680px) 42vw, 150px"
              />
            </div>
            <h3>{badge.name}</h3>
            <p>{badge.note}</p>
          </article>
        ))}
      </div>
      <Link className="text-link" href="/contact">
        Request certification and compliance files
      </Link>
    </section>
  );
}
