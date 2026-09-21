import { SEOData } from "./common";

export interface ExportMarket {
  id: string;
  country: string;
  slug: string;
  region: "Middle East" | "Europe" | "North America" | "Asia Pacific" | "Africa";
  flagIcon: string;
  heroImage: string;
  overview: string;
  keyImportRequirements: string[];
  topExportedProducts: string[]; // Product slugs
  majorPortsServed: string[];
  transitTimeEstimate: string;
  featured: boolean;
  seo: SEOData;
}
