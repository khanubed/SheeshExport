export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  isFeatured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  country: string;
  product: string;
  grade?: string;
  quantity: number;
  unit: "MT" | "KG" | "Containers";
  packaging: string;
  destinationPort: string;
  incoterm: "FOB" | "CIF" | "CFR" | "EXW";
  targetDeliveryDate?: string;
  message?: string;
}

export interface NewsletterFormData {
  email: string;
}
