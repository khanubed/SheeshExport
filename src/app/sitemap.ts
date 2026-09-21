import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import {
  getProducts,
  getCategories,
  getMarkets,
  getCertifications,
  getBlogPosts,
} from "@/lib/cms/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/quality",
    "/certifications",
    "/export-process",
    "/products",
    "/services",
    "/services/private-label",
    "/services/bulk-export",
    "/services/mixed-container",
    "/export-markets",
    "/blog",
    "/contact",
    "/request-quote",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/products") || route === "/request-quote" ? 0.9 : 0.7,
  }));

  // Dynamic products
  const products = await getProducts();
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic categories
  const categories = await getCategories();
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic markets
  const markets = await getMarkets();
  const marketRoutes: MetadataRoute.Sitemap = markets.map((m) => ({
    url: `${baseUrl}/export-markets/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic certifications
  const certs = await getCertifications();
  const certRoutes: MetadataRoute.Sitemap = certs.map((c) => ({
    url: `${baseUrl}/certifications/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Dynamic blog posts
  const posts = await getBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...categoryRoutes,
    ...marketRoutes,
    ...certRoutes,
    ...blogRoutes,
  ];
}
