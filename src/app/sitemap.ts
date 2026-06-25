import type { MetadataRoute } from "next";

const baseUrl = "https://sunrisetoilet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/pt-370-portable-toilet",
    "/products/accessible-portable-toilet",
    "/factory",
    "/resources",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
