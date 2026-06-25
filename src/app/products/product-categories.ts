import { products, type Product } from "./product-data";

export type ProductCategory = {
  slug: string;
  title: string;
  menuLabel: string;
  description: string;
  buyerNote: string;
  productSlugs: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "portable-toilets",
    title: "Portable Toilets",
    menuLabel: "Portable Toilets",
    description:
      "HDPE portable toilet cabins for rental fleets, construction sites, events, public projects and distributor stock.",
    buyerNote:
      "Compare standard, premium, accessible, waterless and sewer-connect portable toilet models for container supply.",
    productSlugs: [
      "pt-360-standard-portable-toilet",
      "pt-370-portable-toilet",
      "accessible-portable-toilet",
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
    slug: "portable-showers",
    title: "Portable Showers",
    menuLabel: "Portable Showers",
    description:
      "Mobile shower cabins for temporary camps, construction sites, disaster relief and outdoor sanitation projects.",
    buyerNote:
      "Review shower cabin specifications for water connection, drainage planning and outdoor deployment.",
    productSlugs: ["ps-330-mobile-shower-cabin"],
  },
  {
    slug: "hand-wash-stations",
    title: "Hand Wash Stations",
    menuLabel: "Hand Wash Stations",
    description:
      "Single and dual portable hand wash stations for events, rental fleets and hygiene support at temporary sites.",
    buyerNote:
      "Compare freshwater capacity, wastewater capacity, mobility and double-sided hand wash station options.",
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
    description:
      "Portable polyethylene waste tanks for temporary sanitation projects where sewer connection is unavailable.",
    buyerNote:
      "Review 2000L, 4000L and 6000L waste tank options for site waste storage and transport planning.",
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
