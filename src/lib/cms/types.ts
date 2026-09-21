import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { ExportMarket } from "@/types/market";
import { Certification } from "@/types/certification";
import { BlogPost } from "@/types/blog";

export interface CMSAdapter {
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getFeaturedProducts(): Promise<Product[]>;
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
  getMarkets(): Promise<ExportMarket[]>;
  getMarketBySlug(slug: string): Promise<ExportMarket | null>;
  getCertifications(): Promise<Certification[]>;
  getCertificationBySlug(slug: string): Promise<Certification | null>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
}
