import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portable Toilet Catalogs and Certificates",
  description:
    "Download Sunrise portable toilet catalog, RoHS reports, SGS UV ageing tests, waste tank test reports and supplier assessment documents.",
  alternates: {
    canonical: "/resources",
  },
};

const downloads = [
  {
    title: "Sunrise Product Catalog 2026",
    text: "Full catalog covering portable toilets, hand wash stations, shower cabin, sewer-connect model, waste tanks and accessories.",
    href: "/downloads/Sunrise-Catalog-2026.pdf",
  },
  {
    title: "Supplier Assessment Report 2026",
    text: "Third-party Alibaba / Intertek supplier assessment report for Ningbo Sunrise Environmental Protection Solution Co., Ltd.",
    href: "/downloads/Supplier-Assessment-Report-2026.pdf",
  },
];

const certificates = [
  {
    title: "RoHS - Portable Toilet",
    text: "RoHS compliance report and certificate for portable toilet models including PT-390, PT-360, PT-370, PT-380, PT-381 and PDT-100.",
    links: [
      ["/downloads/RoHS-Portable-Toilet-Report.pdf", "Report"],
      ["/downloads/RoHS-Portable-Toilet-Certificate.pdf", "Certificate"],
    ],
  },
  {
    title: "RoHS - Hand Wash Station",
    text: "RoHS compliance report and certificate for PH-120 with PH-40, PH-60, PH-200 and PH-200A reference models.",
    links: [
      ["/downloads/RoHS-Hand-Wash-Station-Report.pdf", "Report"],
      ["/downloads/RoHS-Hand-Wash-Station-Certificate.pdf", "Certificate"],
    ],
  },
  {
    title: "SGS UV Ageing - Portable Toilet Materials",
    text: "Xenon-arc UV ageing reports for roof, door, wall and toilet base materials with 600h exposure results.",
    links: [
      ["/downloads/SGS-UV-Ageing-Roof.pdf", "Roof"],
      ["/downloads/SGS-UV-Ageing-Door.pdf", "Door"],
      ["/downloads/SGS-UV-Ageing-Wall.pdf", "Wall"],
      ["/downloads/SGS-UV-Ageing-Toilet-Base.pdf", "Base"],
    ],
  },
  {
    title: "Waste Tank Test Reports",
    text: "SGS water tightness witness report and low-temperature drop weight impact report for wastewater tank body parts.",
    links: [
      ["/downloads/SGS-Water-Tightness-Wastewater-Tank.pdf", "Water tightness"],
      ["/downloads/SGS-Low-Temperature-Impact-Waste-Tank.pdf", "Low temperature impact"],
    ],
  },
];

const placement = [
  "Catalog PDF: Resources page and product-detail download CTA",
  "RoHS portable toilet files: Resources certificates section and buyer confidence section",
  "SGS UV ageing reports: Quality / material reliability proof",
  "Waste tank reports: Waste tank product page and Resources page",
  "Factory video: Factory page only, using preload metadata to protect homepage speed",
];

export default function ResourcesPage() {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero">
        <Link className="back-link" href="/">
          Sunrise
        </Link>
        <span className="section-kicker">RESOURCES</span>
        <h1>Portable toilet catalogs and certificates.</h1>
        <p>
          These files are the correct location for buyer downloads and compliance review:
          catalog, RoHS documents, SGS material tests, waste tank reports and supplier assessment.
        </p>
      </section>

      <section className="resource-download-grid" aria-label="Catalog and supplier documents">
        {downloads.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <a href={item.href}>Download PDF</a>
          </article>
        ))}
      </section>

      <section className="certificate-section" aria-label="Certificates and test reports">
        {certificates.map((item) => (
          <article key={item.title}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div>
              {item.links.map(([href, label]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="placeholder-list" aria-label="Recommended website placement">
        {placement.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </section>
    </main>
  );
}
