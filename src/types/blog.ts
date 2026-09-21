import { SEOData } from "./common";

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  category: BlogCategory;
  tags?: string[];
  featuredImage: {
    url: string;
    alt: string;
  };
  relatedProducts?: string[]; // Product slugs
  relatedArticles?: string[]; // Article slugs
  readingTimeMinutes?: number;
  featured?: boolean;
  seo: SEOData;
}
