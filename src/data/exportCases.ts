export type ExportCase = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  href?: string;
  type?: "case" | "cta";
  draft?: boolean;
};

export const exportCases: ExportCase[] = [
  {
    id: "buyer-visit-product-review",
    kicker: "BUYER REVIEW",
    title: "Buyer Visit & Product Review",
    description:
      "Buyers can review product structure, accessories, certificates and packing details before bulk orders.",
    image: "/images/site/case-buyers.webp",
    alt: "Overseas buyers reviewing Sunrise portable toilet products at the factory",
    type: "case",
  },
  {
    id: "project-discussion-export-support",
    kicker: "EXPORT SUPPORT",
    title: "Project Discussion & Export Support",
    description:
      "Sunrise supports model selection, container loading planning, spare parts preparation and export documentation.",
    image: "/images/site/case-team.webp",
    alt: "Sunrise team discussing portable toilet export project with overseas buyers",
    type: "case",
  },
  {
    id: "factory-inspection-buyer-visit",
    kicker: "FACTORY INSPECTION",
    title: "Customer Factory Inspection Visit",
    description:
      "Overseas buyers can inspect product structure, tank frames, fittings and packing details inside the Sunrise workshop before shipment.",
    image: "/images/site/buyer-visit-factory-inspection.jpg",
    alt: "Overseas buyers inspecting portable toilet tank frames inside the Sunrise factory workshop",
    type: "case",
  },
  {
    id: "future-australia-rental-buyer",
    kicker: "BUYER VISIT",
    title: "Australia Rental Fleet Buyer Visit",
    description: "Placeholder for future buyer visit case.",
    image: "",
    alt: "",
    draft: true,
  },
  {
    id: "future-container-loading",
    kicker: "EXPORT CASE",
    title: "Container Loading Reference",
    description: "Placeholder for future loading case photo.",
    image: "",
    alt: "",
    draft: true,
  },
  {
    id: "future-distributor-project",
    kicker: "DISTRIBUTOR PROJECT",
    title: "Distributor Project Reference",
    description: "Placeholder for future customer project photo.",
    image: "",
    alt: "",
    draft: true,
  },
];

export const visibleExportCases = exportCases.filter((caseStudy) => caseStudy.draft !== true);
