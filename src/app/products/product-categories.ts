import { products, type Product } from "./product-data";

export type ProductCategory = {
  slug: string;
  title: string;
  menuLabel: string;
  heroTitle: string;
  description: string;
  shortNote: string;
  categoryIntro: string;
  categoryHighlights: string[];
  image: string;
  alt: string;
  productSlugs: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "portable-toilets",
    title: "Portable Toilets",
    menuLabel: "Portable Toilets",
    heroTitle: "Portable Toilets for Rental Fleets and Project Supply",
    description:
      "HDPE portable toilet cabins for rental fleets, construction sites, events, public projects and distributor stock.",
    shortNote: "Core HDPE portable toilets for fleet and distributor supply.",
    categoryIntro:
      "Compare HDPE portable toilet models for rental fleets, construction sites, events and distributor stock. Review tank capacity, base type, flushing options and container-loading requirements before requesting a quote.",
    categoryHighlights: [
      "Rental fleet supply",
      "Tank capacity options",
      "Container loading support",
    ],
    image: "/images/site/pt-360.webp",
    alt: "Sunrise HDPE portable toilet category",
    productSlugs: [
      "pt-360-standard-portable-toilet",
      "pt-370-portable-toilet",
      "pt-380-maximum-capacity-portable-toilet",
      "pt-381-signature-portable-toilet",
      "pt-390-double-wall-portable-toilet",
      "pt-400-upgraded-premium-portable-toilet",
      "pt-280-squatting-portable-toilet",
      "pt-300-waterless-portable-toilet",
      "sc-100-sewer-connect-portable-toilet",
    ],
  },
  {
    slug: "accessible-toilets",
    title: "Accessible Toilets",
    menuLabel: "Accessible Toilets",
    heroTitle: "Accessible Portable Toilets for Events and Public Projects",
    description:
      "Accessible portable toilets for public events, project procurement and inclusive temporary sanitation planning.",
    shortNote: "Wide-entry accessible units for public and project buyers.",
    categoryIntro:
      "Accessible portable toilets for public events, project procurement and inclusive temporary sanitation. Compare cabin size, wide-entry access, internal layout and hand-wash options.",
    categoryHighlights: [
      "Wide-entry cabin",
      "Public event use",
      "Inclusive project supply",
    ],
    image: "/images/site/pdt-100.webp",
    alt: "Sunrise accessible portable toilet category",
    productSlugs: ["accessible-portable-toilet"],
  },
  {
    slug: "portable-showers",
    title: "Portable Showers",
    menuLabel: "Portable Showers",
    heroTitle: "Portable Showers and Hygiene Units",
    description:
      "Mobile shower cabins for temporary camps, construction sites, disaster relief and outdoor sanitation projects.",
    shortNote: "Mobile shower cabins for camps, projects and outdoor facilities.",
    categoryIntro:
      "Portable shower cabins for temporary camps, construction sites, disaster relief and outdoor projects. Compare models by water connection, drainage layout, cabin structure and export packing requirements.",
    categoryHighlights: [
      "Water connection",
      "Drainage planning",
      "Outdoor deployment",
    ],
    image: "/images/products/ps-330.webp",
    alt: "Sunrise portable shower category",
    productSlugs: ["ps-330-mobile-shower-cabin"],
  },
  {
    slug: "hand-wash-stations",
    title: "Hand Wash Stations",
    menuLabel: "Hand Wash Stations",
    heroTitle: "Hand Wash Stations for Events and Construction Sites",
    description:
      "Single and dual portable hand wash stations for events, rental fleets and hygiene support at temporary sites.",
    shortNote: "Single and dual hand wash stations for hygiene support.",
    categoryIntro:
      "Single and dual portable hand wash stations for events, rental fleets and temporary sites. Compare freshwater capacity, wastewater capacity, foot-pump operation and mobility.",
    categoryHighlights: [
      "Freshwater capacity",
      "Foot-pump operation",
      "Event hygiene support",
    ],
    image: "/images/products/ph-200a.webp",
    alt: "Sunrise portable hand wash station category",
    productSlugs: [
      "ph-120-portable-hand-wash-station",
      "ph-200-dual-hand-wash-station",
      "ph-200a-mobile-dual-hand-wash-station",
    ],
  },
  {
    slug: "waste-tanks",
    title: "Waste Tanks",
    menuLabel: "Waste Tanks",
    heroTitle: "Portable Waste Tanks for Temporary Sanitation Projects",
    description:
      "Portable polyethylene waste tanks for temporary sanitation projects where sewer connection is unavailable.",
    shortNote: "Large waste storage for sites without sewer connection.",
    categoryIntro:
      "Portable waste tanks for temporary sanitation projects where sewer connection is unavailable. Compare 2000L, 4000L and 6000L options by capacity, steel frame rating and site transport needs.",
    categoryHighlights: [
      "2000L / 4000L / 6000L",
      "Steel frame support",
      "Off-grid sanitation",
    ],
    image: "/images/products/wt4000.webp",
    alt: "Sunrise portable waste tank category",
    productSlugs: ["portable-waste-tanks"],
  },
];

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductsByCategorySlug(slug: string) {
  const category = getProductCategoryBySlug(slug);

  if (!category) {
    return [];
  }

  return category.productSlugs
    .map((productSlug) => products.find((product) => product.slug === productSlug))
    .filter((product): product is Product => product !== undefined);
}
