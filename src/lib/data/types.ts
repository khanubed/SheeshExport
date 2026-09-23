export type ProductStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export type ProductImage = {
  id: string;
  productId: string;
  url: string;
  alt: string;
  isFeatured: boolean;
  sortOrder: number;
};

export type ProductSpecification = {
  id: string;
  productId: string;
  label: string;
  value: string;
  sortOrder: number;
};

export type ProductGrade = {
  id: string;
  productId: string;
  gradeName: string;
  description: string;
};

export type ProductPackagingOption = {
  id: string;
  productId: string;
  type: string;
  sizes: string[];
};

export type ProductFaq = {
  id: string;
  productId: string;
  question: string;
  answer: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Certification = {
  id: string;
  name: string;
  slug: string;
  issuingBody: string;
  badgeImage: string;
  description: string;
};

export type ExportMarket = {
  id: string;
  country: string;
  slug: string;
  region: string;
  overview: string;
  keyImportRequirements: string[];
  majorPortsServed: string[];
  transitTimeEstimate: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  botanicalName: string | null;
  hsCode: string;
  categoryId: string;
  category: Category;
  shortDescription: string;
  description: string;
  origin: string;
  harvestSeason: string | null;
  minimumOrderQuantity: string;
  shelfLife: string;
  applications: string[];
  status: ProductStatus;
  featured: boolean;
  
  images: ProductImage[];
  specifications: ProductSpecification[];
  grades: ProductGrade[];
  packagingOptions: ProductPackagingOption[];
  faqs: ProductFaq[];
  
  certifications: Certification[];
  exportMarkets: ExportMarket[];
  
  seoMetaTitle: string | null;
  seoMetaDesc: string | null;
  canonicalUrl: string | null;
  
  createdAt: string;
  updatedAt: string;
};
