export type Product = {
  slug: string;
  model: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  cardDescription: string;
  cardSpecs: string[];
  idealFor: string;
  description: string;
  keySpecifications: string[];
  advantages: string[];
  dimensions: string;
  volume: string[];
  weight: string;
};

export const products: Product[] = [
  {
    slug: "pt-360-standard-portable-toilet",
    model: "PT-360",
    name: "Standard Pro Portable Toilet",
    category: "Standard model",
    image: "/images/products/pt-360.webp",
    alt: "PT-360 standard HDPE portable toilet",
    cardDescription: "Standard HDPE toilet for construction sites and rental fleets.",
    cardSpecs: ["Metal skid", "370L waste tank", "HDPE cabin"],
    idealFor: "Versatile outdoor applications and long-term construction sites.",
    description:
      "A workhorse HDPE portable toilet for rental fleets, construction sites and distributor stock. The PT-360 balances interior space, tank capacity and transport stability for repeat field use.",
    keySpecifications: [
      "Heavy-duty metal skid for stability and frequent relocation",
      "Enhanced interior space for user comfort and mobility",
      "Optional integrated urinal layout",
      "High-volume tank for approximately 450-550 uses per service cycle",
    ],
    advantages: [
      "Robust construction with ergonomic interior design",
      "Versatile standard model for outdoor projects",
      "Suitable for mixed-model container orders",
    ],
    dimensions: "111 x 118 x 235 cm",
    volume: ["Water tank: 110L", "Waste tank: 370L"],
    weight: "140kg single-skin wall / 170kg double-skin wall",
  },
  {
    slug: "pt-370-portable-toilet",
    model: "PT-370",
    name: "Entry-Pro Portable Toilet",
    category: "Basic model",
    image: "/images/products/pt-370.webp",
    alt: "PT-370 portable toilet with hand wash option",
    cardDescription: "Hand wash portable toilet for sites, events and rental fleets.",
    cardSpecs: ["Hand wash option", "Foot pump available", "HDPE cabin"],
    idealFor: "Short-term events, festivals and rental fleets.",
    description:
      "A lightweight and adaptable portable toilet model with optional hand wash sink, urinal and recirculating flush configurations for fast deployment.",
    keySpecifications: [
      "Durable plastic skid for easy transport and rapid deployment",
      "Modular interior supports urinal, hand wash station or waterless dry toilet conversion",
      "Recirculating flush available with foot-pump or hand-press operation",
      "High-efficiency tank for approximately 400-450 uses per service cycle",
    ],
    advantages: [
      "Lightweight for quick transport and setup",
      "Low maintenance for rental operation cost control",
      "Adaptable for both water-supported and water-scarce sites",
    ],
    dimensions: "115 x 115 x 230 cm",
    volume: ["Water tank: 120L", "Hand sink: 65L", "Waste tank: 270L"],
    weight: "120kg with hand wash sink / 105kg without hand wash sink",
  },
  {
    slug: "accessible-portable-toilet",
    model: "PDT-100",
    name: "Enhanced Accessibility Suite",
    category: "Accessible portable toilet",
    image: "/images/products/pdt-100.webp",
    alt: "PDT-100 accessible portable toilet with wide entry",
    cardDescription: "Wide-entry accessible toilet for public venues and project tenders.",
    cardSpecs: ["Wide entry", "Grab bars", "Large interior"],
    idealFor:
      "Public festivals, high-traffic commercial sites and inclusive outdoor venues.",
    description:
      "A spacious accessible portable toilet with flush-and-wash functionality, designed for public venues and project buyers that require barrier-free sanitation.",
    keySpecifications: [
      "Large 1950 x 1950 x 2300mm footprint with approximately 3.8 square meters of interior space",
      "Zero-threshold ground-level entry with oversized door",
      "Premium flushing system and dedicated low-profile sink",
      "Heavy-duty wraparound grab bars and self-closing door with occupancy indicator",
    ],
    advantages: [
      "Provides a permanent-restroom experience in a mobile cabin",
      "Supports inclusive project and public venue procurement",
      "Impact-resistant HDPE structure designed for easy sanitation",
    ],
    dimensions: "1950 x 1950 x 2300 mm",
    volume: ["Water tank: 110L", "Waste tank: 150L"],
    weight: "180kg",
  },
  {
    slug: "pt-380-maximum-capacity-portable-toilet",
    model: "PT-380",
    name: "Maximum Capacity Portable Toilet",
    category: "Ultra model",
    image: "/images/products/pt-380.webp",
    alt: "PT-380 high capacity portable toilet",
    cardDescription: "High-capacity toilet for sites needing longer service intervals.",
    cardSpecs: ["390L waste tank", "Metal skid", "High traffic"],
    idealFor: "High-traffic outdoor sites and remote locations with limited servicing.",
    description:
      "A high-capacity portable toilet engineered for extended service intervals and rugged outdoor environments.",
    keySpecifications: [
      "Heavy-duty metal skid for extreme stability and rugged terrain",
      "Large freshwater and waste tank system for longer use between servicing",
      "Approximately 600-650 uses per service cycle",
      "Designed for demanding outdoor environments",
    ],
    advantages: [
      "Minimizes service frequency",
      "Maximizes operational uptime for remote or high-traffic sites",
      "Suitable for rental fleets with fewer service windows",
    ],
    dimensions: "111 x 118 x 235 cm",
    volume: ["Water tank: 130L", "Waste tank: 390L"],
    weight: "140kg single-skin wall / 170kg double-skin wall",
  },
  {
    slug: "pt-381-signature-portable-toilet",
    model: "PT-381",
    name: "Signature Series Portable Toilet",
    category: "Advanced model",
    image: "/images/products/pt-381.webp",
    alt: "PT-381 signature series portable toilet",
    cardDescription: "Signature portable toilet for premium events and commercial rental.",
    cardSpecs: ["Modern profile", "Metal skid", "390L waste tank"],
    idealFor: "Premium outdoor events and versatile commercial use.",
    description:
      "A refined portable toilet model combining high-capacity performance with a more modern exterior profile for commercial rental markets.",
    keySpecifications: [
      "Refined contoured exterior for a professional appearance",
      "Heavy-duty metal skid for durability and stability",
      "High-volume tank for approximately 600-650 uses per service cycle",
      "Engineered for all outdoor environments",
    ],
    advantages: [
      "Elegant exterior redesign",
      "Balances endurance with a premium profile",
      "Useful for event rental and commercial buyers",
    ],
    dimensions: "111 x 118 x 235 cm",
    volume: ["Water tank: 130L", "Waste tank: 390L"],
    weight: "140kg single-skin wall / 170kg double-skin wall",
  },
  {
    slug: "pt-390-double-wall-portable-toilet",
    model: "PT-390",
    name: "The Perfect Balance Portable Toilet",
    category: "Premium model",
    image: "/images/products/pt-390.webp",
    alt: "PT-390 premium double wall portable toilet",
    cardDescription: "Premium fleet model with strong capacity and fast deployment.",
    cardSpecs: ["400L waste tank", "Double-wall option", "Fleet use"],
    idealFor: "Premium rentals and high-demand sites requiring rapid setup.",
    description:
      "A premium portable toilet model known for durability, setup speed and a strong balance between interior space and tank capacity.",
    keySpecifications: [
      "Fully self-contained layout",
      "Approximately 550-600 uses per service cycle",
      "Heavy-duty metal skid for outdoor stability",
      "Optional plastic skid configuration available",
    ],
    advantages: [
      "Industry-favored balance of capacity and usability",
      "Designed for premium rental fleets",
      "Supports repeated container supply and distributor orders",
    ],
    dimensions: "111 x 118 x 235 cm",
    volume: ["Water tank: 120L", "Waste tank: 400L"],
    weight: "140kg single-skin wall / 170kg double-skin wall",
  },
  {
    slug: "pt-400-upgraded-premium-portable-toilet",
    model: "PT-400",
    name: "Industry Game Changer Portable Toilet",
    category: "Upgraded premium model",
    image: "/images/products/pt-400.webp",
    alt: "PT-400 upgraded premium portable toilet",
    cardDescription: "Upgraded premium toilet with simplified plumbing for fleet buyers.",
    cardSpecs: ["Internal plumbing", "Metal skid", "400L waste tank"],
    idealFor: "High-demand fleets needing simplified setup and reliable plumbing.",
    description:
      "An upgraded premium model with re-engineered internal plumbing and a plug-and-play setup approach for fleet buyers.",
    keySpecifications: [
      "Integrated internal plumbing with no exposed piping outside the tank",
      "Optimized interior cabin space without sacrificing tank volume",
      "Heavy-duty metal skid for all-terrain stability",
      "Approximately 550-600 uses per service cycle",
    ],
    advantages: [
      "Reduces leak risks and installation errors",
      "Designed for faster setup and reliability",
      "Combines high-capacity endurance with fail-safe structure",
    ],
    dimensions: "111 x 118 x 235 cm",
    volume: ["Water tank: 120L", "Waste tank: 400L"],
    weight: "140kg single-skin wall / 170kg double-skin wall",
  },
  {
    slug: "pt-280-squatting-portable-toilet",
    model: "PT-280",
    name: "National Standard Squatting Toilet",
    category: "Squatting toilet",
    image: "/images/products/pt-280.webp",
    alt: "PT-280 squatting portable toilet",
    cardDescription: "Squat-style portable toilet for high-frequency public use.",
    cardSpecs: ["Squat design", "320L waste tank", "Rapid deployment"],
    idealFor: "Large public events, emergency disaster relief, construction sites and military drills.",
    description:
      "A squat-style portable toilet designed for high-frequency public use and markets where squatting toilets are preferred.",
    keySpecifications: [
      "Squat-style design for high-traffic public use",
      "Rapid deployment across diverse field scenarios",
      "Durable structure for mission-critical infrastructure",
      "Approximately 600-700 uses per service cycle",
    ],
    advantages: [
      "Battle-tested model for broad application conditions",
      "Rugged design for demanding public-use environments",
      "Suitable for emergency and infrastructure projects",
    ],
    dimensions: "100 x 100 x 235 cm",
    volume: ["Clean water tank: 28L", "Water tank: 100L", "Waste tank: 320L"],
    weight: "95kg",
  },
  {
    slug: "pt-300-waterless-portable-toilet",
    model: "PT-300",
    name: "Extreme Cold Specialist Waterless Toilet",
    category: "Waterless toilet",
    image: "/images/products/pt-300.webp",
    alt: "PT-300 waterless portable toilet for cold climates",
    cardDescription: "Waterless dry toilet for cold climates and water-scarce sites.",
    cardSpecs: ["Waterless", "-30C use", "400L waste tank"],
    idealFor: "High-latitude regions, water-scarce areas and extreme winter environments.",
    description:
      "A squat-style dry toilet system engineered for cold climates and water-scarce sites where flushing systems may fail.",
    keySpecifications: [
      "Designed for extreme sub-zero conditions down to -30C",
      "Waterless operation for freezing or water-scarce conditions",
      "Robust storage for approximately 600-700 uses per service cycle",
      "Professional squat-style dry toilet system",
    ],
    advantages: [
      "Built for harsh winter sanitation",
      "Reliable where traditional flushing systems are unsuitable",
      "Useful for northern markets and remote projects",
    ],
    dimensions: "100 x 100 x 240 cm",
    volume: ["Waste tank: 400L"],
    weight: "90kg",
  },
  {
    slug: "ps-330-mobile-shower-cabin",
    model: "PS-330",
    name: "Mobile Shower Cabin",
    category: "Portable shower",
    image: "/images/products/ps-330.webp",
    alt: "PS-330 mobile shower cabin",
    cardDescription: "Mobile shower cabin for camps, sites and outdoor facilities.",
    cardSpecs: ["Hot/cold intake", "Anti-slip floor", "Sewer outlet"],
    idealFor: "Construction sites, campgrounds, disaster relief and outdoor events.",
    description:
      "A professional mobile shower solution with external water source connection and drainage planning for temporary facilities.",
    keySpecifications: [
      "External water source connection with cold and hot water intake",
      "Built-in structural support for optional external water heater mounting",
      "Anti-slip floor with low-point drain for fast water clearance",
      "Rear outlet for direct connection to sewage pipes or municipal grids",
    ],
    advantages: [
      "Combines domestic comfort with industrial durability",
      "Suitable for camps, events and relief projects",
      "Designed for challenging outdoor conditions",
    ],
    dimensions: "118 x 117 x 230 cm",
    volume: ["/"],
    weight: "110kg",
  },
  {
    slug: "sc-100-sewer-connect-portable-toilet",
    model: "SC-100",
    name: "Sewer-Connect Series",
    category: "Sewer connect toilet",
    image: "/images/products/sc-100.webp",
    alt: "SC-100 sewer connect portable toilet interior",
    cardDescription: "Sewer-connect unit for long-term and semi-permanent projects.",
    cardSpecs: ["Sewer outlet", "Custom base", "Long-term use"],
    idealFor: "High-rise construction sites, long-term outdoor projects and semi-permanent installations.",
    description:
      "A sewer-connect sanitation unit for long-term projects requiring a more permanent facility experience in a mobile structure.",
    keySpecifications: [
      "Customizable base options in stainless steel or reinforced plastic",
      "Ceramic or lightweight plastic toilet options",
      "Integrated showering, hand washing and toileting station when connected to external water",
      "Rear-mounted outlet for municipal sewage connection",
    ],
    advantages: [
      "Designed for long-term, high-intensity use",
      "Zero-seepage connection system for site hygiene",
      "Useful for semi-permanent job sites",
    ],
    dimensions: "111 x 118 x 230 cm",
    volume: ["/"],
    weight: "130kg",
  },
  {
    slug: "ph-120-portable-hand-wash-station",
    model: "PH-120",
    name: "Portable Hand Wash Station",
    category: "Washbasin",
    image: "/images/products/ph-120.webp",
    alt: "PH-120 portable hand wash station",
    cardDescription: "Compact hand wash station for events and construction sites.",
    cardSpecs: ["60L freshwater", "Foot pump", "Mobile base"],
    idealFor: "High-traffic outdoor events, festivals, concerts and remote construction sites.",
    description:
      "A compact hand wash station for sites without restroom access, designed for hygiene support in high-frequency public use.",
    keySpecifications: [
      "Dual-tank system with 60L freshwater and 65L wastewater capacity",
      "Integrated foot-pump activation for hands-free operation",
      "Wheeled base and built-in handle for transport",
      "Top-fill and bottom-drain servicing design",
    ],
    advantages: [
      "Compact hygiene solution for event and construction sites",
      "Custom color panels available subject to MOQ",
      "Pre-allocated space for towel and soap dispensers",
    ],
    dimensions: "40 x 52 x 134 cm",
    volume: ["Water tank: 60L", "Waste tank: 65L"],
    weight: "22kg",
  },
  {
    slug: "ph-200-dual-hand-wash-station",
    model: "PH-200",
    name: "Dual Stationary Max Hand Wash Station",
    category: "Washbasin",
    image: "/images/products/ph-200.webp",
    alt: "PH-200 dual hand wash station",
    cardDescription: "Dual stationary hand wash station for long-term high-use sites.",
    cardSpecs: ["Dual users", "100L freshwater", "Stationary base"],
    idealFor: "Long-term construction sites, public parks, industrial facilities and semi-permanent outdoor installations.",
    description:
      "A stationary double-sided hand wash station for long-term projects that need higher hand washing throughput.",
    keySpecifications: [
      "Double-sided design for two simultaneous users",
      "100L freshwater and 110L wastewater tank capacity",
      "Stable fixed base for long-term placement",
      "Independent dual foot-pumps for touchless operation",
    ],
    advantages: [
      "Set-and-forget hygiene solution for heavy use",
      "Reduces service frequency and maintenance cost",
      "Integrated surfaces for towel and soap dispensers",
    ],
    dimensions: "76 x 50 x 132 cm",
    volume: ["Water tank: 100L", "Waste tank: 110L"],
    weight: "32kg",
  },
  {
    slug: "ph-200a-mobile-dual-hand-wash-station",
    model: "PH-200A",
    name: "Dual-Go Hand Wash Station",
    category: "Washbasin",
    image: "/images/products/ph-200a.webp",
    alt: "PH-200A mobile dual hand wash station",
    cardDescription: "Mobile dual-user hand wash station for large events and projects.",
    cardSpecs: ["Dual users", "Wheeled base", "100L freshwater"],
    idealFor: "Large festivals, high-traffic concerts, fairs and major construction projects.",
    description:
      "A mobile dual-user hand wash station with high tank capacity, foot-pump operation and easier repositioning.",
    keySpecifications: [
      "Double-sided configuration for two simultaneous users",
      "100L freshwater and 110L wastewater tank capacity",
      "Dual independent foot-pumps for hands-free hygiene",
      "Integrated handle and heavy-duty wheeled base",
    ],
    advantages: [
      "High throughput for events and large projects",
      "Designed for rapid deployment and repositioning",
      "Easy-access fill ports and side-bottom drain system",
    ],
    dimensions: "76 x 50 x 132 cm",
    volume: ["Water tank: 100L", "Waste tank: 110L"],
    weight: "34kg",
  },
  {
    slug: "portable-waste-tanks",
    model: "WT2000 / WT4000 / WT6000",
    name: "Portable Waste Tanks",
    category: "Waste tanks",
    image: "/images/products/wt4000.webp",
    alt: "Portable waste tanks for temporary sanitation",
    cardDescription: "Portable waste tanks for temporary sanitation without sewer access.",
    cardSpecs: ["2000-6000L", "Steel frame", "Skid design"],
    idealFor: "Large waste storage where sewer connection is not available.",
    description:
      "UV-resistant polyethylene waste tanks designed to sit under ablution blocks, lunchrooms or kitchens when sewer connection is unavailable.",
    keySpecifications: [
      "Available in 2000L, 4000L and 6000L models",
      "Certified steel frame for loading and transport",
      "Lifting points for empty tank handling",
      "Skid frame design for site drag or tow",
    ],
    advantages: [
      "Convex poly tank design with through cones for strength",
      "Inspection ports, breathers and optional waste valve",
      "Optional float alarm, flashing light and valve interlock",
    ],
    dimensions:
      "WT2000: 2300 x 2100 x 700 mm / WT4000: 2300 x 3850 x 700 mm / WT6000: 2300 x 5900 x 700 mm",
    volume: ["WT2000: 2000L", "WT4000: 4000L", "WT6000: 6000L"],
    weight: "WT2000: 500kg / WT4000: 750kg / WT6000: 1000kg empty",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const featuredProductSlugs = [
  "pt-360-standard-portable-toilet",
  "pt-370-portable-toilet",
  "accessible-portable-toilet",
  "pt-390-double-wall-portable-toilet",
];
