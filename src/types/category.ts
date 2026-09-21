import { SEOData } from "./common";

export interface Category {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  featured: boolean;
  itemCount?: number;
  seo: SEOData;
}
