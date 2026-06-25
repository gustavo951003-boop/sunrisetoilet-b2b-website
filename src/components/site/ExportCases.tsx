import Image from "next/image";
import Link from "next/link";

const homepageCases = [
  {
    title: "Buyer Visit & Product Review",
    image: "/images/site/case-buyers.webp",
    alt: "Overseas buyers reviewing Sunrise portable toilet products at the factory",
    text: "Buyers can review product structure, accessories, certificates and packing details before bulk orders.",
  },
  {
    title: "Project Discussion & Export Support",
    image: "/images/site/case-team.webp",
    alt: "Sunrise team discussing portable toilet export project with overseas buyers",
    text: "Sunrise supports model selection, container loading planning, spare parts preparation and export documentation.",
  },
];

const factoryCases = [
  {
    ...homepageCases[0],
    title: "Factory Visit & Product Inspection",
    text: "Buyers can review product structure, accessories, workshop conditions and inspection details before confirming bulk supply.",
  },
  {
    ...homepageCases[1],
    title: "Packing Review & Export Planning",
    text: "Sunrise supports packing review, container loading planning, spare parts coordination and export documentation for B2B orders.",
  },
];

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
  const cases = isFactory ? factoryCases : homepageCases;
  const title = isFactory ? "Buyer Visits & Export Support" : "Export Cases & Buyer Visits";
  const subtitle = isFactory
    ? "Factory visits, product inspection, packing review and export support help procurement buyers confirm portable toilet orders with clearer evidence."
    : "Real buyer visits, product reviews and export support for portable toilet distributors, rental fleets and project buyers.";
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

        <div className="export-case-mosaic" data-reveal={!isFactory ? true : undefined}>
          {cases.map((caseStudy, index) => (
            <article className="export-case-card" key={caseStudy.image}>
              <div className="export-case-image">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="export-case-caption">
                <span>{index === 0 ? "Buyer review" : "Export support"}</span>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
