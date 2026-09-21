import { SEOData } from "./common";

export interface Certification {
  id: string;
  name: string;
  slug: string;
  issuingBody: string;
  badgeImage: string;
  certificateNumber?: string;
  validity?: string;
  description: string;
  complianceDetails: string;
  featured: boolean;
  seo: SEOData;
}
