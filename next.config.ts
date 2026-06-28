import type { NextConfig } from "next";

const legacyRedirects = [
  {
    source: "/collections/portable-toilets",
    destination: "/products/category/portable-toilets",
  },
  {
    source: "/collections/portable-toilet",
    destination: "/products/category/portable-toilets",
  },
  {
    source: "/collections/disabled-portable-toilets",
    destination: "/products/category/accessible-toilets",
  },
  {
    source: "/collections/disabled-portable-toilet",
    destination: "/products/category/accessible-toilets",
  },
  {
    source: "/collections/accessible-toilets",
    destination: "/products/category/accessible-toilets",
  },
  {
    source: "/collections/portable-shower",
    destination: "/products/category/portable-showers",
  },
  {
    source: "/collections/portable-showers",
    destination: "/products/category/portable-showers",
  },
  {
    source: "/collections/hand-sink",
    destination: "/products/category/hand-wash-stations",
  },
  {
    source: "/collections/hand-wash-stations",
    destination: "/products/category/hand-wash-stations",
  },
  {
    source: "/collections/hand-wash-station",
    destination: "/products/category/hand-wash-stations",
  },
  {
    source: "/collections/waste-tanks",
    destination: "/products/category/waste-tanks",
  },
  {
    source: "/collections/waste-tank",
    destination: "/products/category/waste-tanks",
  },
  {
    source: "/collections/all",
    destination: "/products",
  },
  {
    source: "/products/disabled-portable-toilet",
    destination: "/products/accessible-portable-toilet",
  },
  {
    source: "/products/accessible-portable-toilet-pdt-100",
    destination: "/products/accessible-portable-toilet",
  },
  {
    source: "/products/pdt-100",
    destination: "/products/accessible-portable-toilet",
  },
  {
    source: "/products/pt-360",
    destination: "/products/pt-360-standard-portable-toilet",
  },
  {
    source: "/products/pt-370",
    destination: "/products/pt-370-portable-toilet",
  },
  {
    source: "/products/pt-380",
    destination: "/products/pt-380-maximum-capacity-portable-toilet",
  },
  {
    source: "/products/pt-381",
    destination: "/products/pt-381-signature-portable-toilet",
  },
  {
    source: "/products/pt-390",
    destination: "/products/pt-390-double-wall-portable-toilet",
  },
  {
    source: "/products/pt-400",
    destination: "/products/pt-400-upgraded-premium-portable-toilet",
  },
  {
    source: "/products/pt-280",
    destination: "/products/pt-280-squatting-portable-toilet",
  },
  {
    source: "/products/pt-300",
    destination: "/products/pt-300-waterless-portable-toilet",
  },
  {
    source: "/products/ps-330",
    destination: "/products/ps-330-mobile-shower-cabin",
  },
  {
    source: "/products/portable-shower",
    destination: "/products/ps-330-mobile-shower-cabin",
  },
  {
    source: "/products/sc-100",
    destination: "/products/sc-100-sewer-connect-portable-toilet",
  },
  {
    source: "/products/sewer-connect-portable-toilet",
    destination: "/products/sc-100-sewer-connect-portable-toilet",
  },
  {
    source: "/products/ph-120",
    destination: "/products/ph-120-portable-hand-wash-station",
  },
  {
    source: "/products/ph-200",
    destination: "/products/ph-200-dual-hand-wash-station",
  },
  {
    source: "/products/ph-200a",
    destination: "/products/ph-200a-mobile-dual-hand-wash-station",
  },
  {
    source: "/products/hand-sink",
    destination: "/products/category/hand-wash-stations",
  },
  {
    source: "/products/waste-tank",
    destination: "/products/portable-waste-tanks",
  },
  {
    source: "/products/waste-tanks",
    destination: "/products/portable-waste-tanks",
  },
  {
    source: "/products/wt2000",
    destination: "/products/portable-waste-tanks",
  },
  {
    source: "/products/wt4000",
    destination: "/products/portable-waste-tanks",
  },
  {
    source: "/products/wt6000",
    destination: "/products/portable-waste-tanks",
  },
  {
    source: "/pages/contact-us",
    destination: "/contact",
  },
  {
    source: "/pages/contact",
    destination: "/contact",
  },
  {
    source: "/pages/about-us",
    destination: "/factory",
  },
  {
    source: "/pages/about",
    destination: "/factory",
  },
  {
    source: "/pages/factory",
    destination: "/factory",
  },
  {
    source: "/pages/factory-tour",
    destination: "/factory",
  },
  {
    source: "/pages/certificates",
    destination: "/resources",
  },
  {
    source: "/pages/catalog",
    destination: "/resources",
  },
  {
    source: "/pages/catalogs",
    destination: "/resources",
  },
  {
    source: "/pages/downloads",
    destination: "/resources",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.flatMap(({ source, destination }) => [
      {
        source,
        destination,
        statusCode: 301,
      },
      {
        source: `${source}/`,
        destination,
        statusCode: 301,
      },
    ]);
  },
};

export default nextConfig;
