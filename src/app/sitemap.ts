import type { MetadataRoute } from "next";
import { productCategories } from "./products/product-categories";
import { products } from "./products/product-data";

const baseUrl = "https://sunrisetoilet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/factory",
    "/oem-plastic-molding",
    "/resources",
    "/contact",
    ...productCategories.map((category) => `/products/category/${category.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
