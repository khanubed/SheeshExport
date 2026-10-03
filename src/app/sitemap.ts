import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import { INDUSTRIES_DATA } from "@/lib/data/industries";
import { COUNTRY_MARKETS, CITY_MARKETS } from "@/lib/data/international";
import { getAllBlogPosts, BLOG_CATEGORIES } from "@/lib/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  // 1. Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/quality",
    "/certifications",
    "/export-process",
    "/products",
    "/categories",
    "/industries",
    "/services",
    "/services/private-label",
    "/services/bulk-export",
    "/services/mixed-container",
    "/international",
    "/blog",
    "/contact",
    "/request-quote",
    "/investor",
    "/exporters-in-india",
    "/indian-exporter",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/products") || route === "/categories" || route === "/request-quote"
        ? 0.9
        : 0.75,
  }));

  // 2. Dynamic products: /products/[category]/[slug]
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_DATA.map((p) => ({
    url: `${baseUrl}/products/${p.categorySlug}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Dynamic categories: /categories/[slug]
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES_DATA.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 4. Dynamic industries: /industries/[slug]
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 5. Dynamic country markets: /international/[country]
  const countryRoutes: MetadataRoute.Sitemap = COUNTRY_MARKETS.map((m) => ({
    url: `${baseUrl}/international/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 6. Dynamic city markets: /international/[country]/[city]
  const cityRoutes: MetadataRoute.Sitemap = CITY_MARKETS.map((c) => ({
    url: `${baseUrl}/international/${c.country}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // 7. Dynamic certifications: /certifications/[slug]
  const certSlugs = ["apeda", "fssai", "spices-board", "fieo", "star-export-house"];
  const certRoutes: MetadataRoute.Sitemap = certSlugs.map((slug) => ({
    url: `${baseUrl}/certifications/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 8. Dynamic blog posts: /blog/[slug]
  const posts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.publishDate || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // 9. Dynamic blog categories: /blog/category/[slug]
  const blogCategoryRoutes: MetadataRoute.Sitemap = Object.values(BLOG_CATEGORIES).map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...categoryRoutes,
    ...industryRoutes,
    ...countryRoutes,
    ...cityRoutes,
    ...certRoutes,
    ...blogRoutes,
    ...blogCategoryRoutes,
  ];
}
