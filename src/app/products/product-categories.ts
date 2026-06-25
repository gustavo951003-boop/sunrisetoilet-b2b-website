import { products, type Product } from "./product-data";

export type ProductCategory = {
  slug: string;
  title: string;
  menuLabel: string;
  heroTitle: string;
  description: string;
  shortNote: string;
  buyerNote: string;
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
    buyerNote:
      "Compare standard, premium, waterless and sewer-connect portable toilet models for container supply.",
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
    heroTitle: "Accessible Toilets for Public Venues and Project Tenders",
    description:
      "Accessible portable toilets for public events, project procurement and inclusive temporary sanitation planning.",
    shortNote: "Wide-entry accessible units for public and project buyers.",
    buyerNote:
      "Review accessible portable toilet layouts, wide entry planning and public venue supply options.",
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
    buyerNote:
      "Review shower cabin specifications for water connection, drainage planning and outdoor deployment.",
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
    buyerNote:
      "Compare freshwater capacity, wastewater capacity, mobility and double-sided hand wash station options.",
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
    buyerNote:
      "Review 2000L, 4000L and 6000L waste tank options for site waste storage and transport planning.",
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
