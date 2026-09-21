import { Category } from "./category";
import { FAQItem, ImageAsset, SEOData } from "./common";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductGrade {
  gradeName: string;
  description: string;
}

export interface PackagingOption {
  type: string;
  sizes: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  botanicalName?: string;
  hsCode: string;
  category: Category | { id: string; name: string; slug: string };
  subcategory?: string;
  shortDescription: string;
  description: string;
  origin: string;
  harvestSeason?: string;
  images: ImageAsset[];
  specifications: ProductSpecification[];
  grades: ProductGrade[];
  packaging: PackagingOption[];
  minimumOrderQuantity: string;
  shelfLife: string;
  applications: string[];
  availableMarkets: string[]; // Country slugs
  certifications: string[]; // Certification slugs
  faqs?: FAQItem[];
  featured: boolean;
  status: "draft" | "published" | "archived";
  seo: SEOData;
}
