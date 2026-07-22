import type { MetadataRoute } from "next";
import { getEnglishSitemapEntries } from "@/sanity/queries";
import { productCategories } from "./products/product-categories";
import { products } from "./products/product-data";

const baseUrl = "https://sunrisetoilet.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/products",
    "/factory",
    "/oem-plastic-molding",
    "/resources",
    "/blog",
    "/contact",
    ...productCategories.map((category) => `/products/category/${category.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  try {
    const posts = await getEnglishSitemapEntries();
    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticEntries, ...postEntries];
  } catch (error) {
    console.error("Unable to add Sanity articles to the sitemap.", error);
    return staticEntries;
  }
}
