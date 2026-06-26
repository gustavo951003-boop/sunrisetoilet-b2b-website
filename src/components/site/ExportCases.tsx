import Image from "next/image";
import Link from "next/link";
import { visibleExportCases } from "@/data/exportCases";

const proofPoints = [
  "Factory visits and product review support",
  "Packing data and container loading planning",
  "Export documentation and spare parts coordination",
];

type ExportCasesProps = {
  variant?: "home" | "factory";
};

export function ExportCases({ variant = "home" }: ExportCasesProps) {
  const isFactory = variant === "factory";
  const cases = visibleExportCases.filter((caseStudy) => caseStudy.type === "case");
  const title = "Buyer Visits & Export Support";
  const subtitle =
    "Factory visits, product inspection, packing review and export support help procurement buyers confirm portable toilet orders with clearer evidence.";
  const secondaryCta = isFactory
    ? { label: "View Product Range", href: "/products" }
    : { label: "View Factory Capability", href: "/factory" };

  return (
    <section
      className={isFactory ? "export-cases-section export-cases-compact" : "export-cases-section"}
      aria-labelledby={isFactory ? "factory-export-cases-title" : "home-export-cases-title"}
    >
      <div className="export-cases-inner">
        <div className="export-cases-copy" data-reveal={!isFactory ? true : undefined}>
          <span className="section-kicker">EXPORT PROOF</span>
          <h2 id={isFactory ? "factory-export-cases-title" : "home-export-cases-title"}>
            {title}
          </h2>
          <p>{subtitle}</p>
          <div className="export-proof-list" aria-label="Export proof points">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="export-cases-actions">
            <Link className="button button-primary" href="/contact">
              Discuss Your Project
            </Link>
            <Link className="button button-light" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="export-case-grid" data-reveal={!isFactory ? true : undefined}>
          {cases.map((caseStudy) => (
            <article
              className={
                caseStudy.type === "cta"
                  ? "export-case-card export-case-cta-card"
                  : "export-case-card"
              }
              key={caseStudy.id}
            >
              <div className="export-case-media">
                {caseStudy.image && caseStudy.alt ? (
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="export-case-reference-art" aria-hidden="true">
                    <span>SR</span>
                  </div>
                )}
              </div>
              <div className="export-case-body">
                <span>{caseStudy.kicker}</span>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
                {caseStudy.href ? (
                  <Link className="export-case-link" href={caseStudy.href}>
                    Discuss Your Project
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
