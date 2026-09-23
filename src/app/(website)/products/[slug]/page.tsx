import { ProductDetailClient } from "@/components/products/pdp/ProductDetailClient";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generates dynamic SEO metadata based on the slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // In a real app, you would fetch the product details here server-side to generate SEO tags
  const productName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${productName} Exporter & Supplier | Sheesh Exports`,
    description: `Premium quality ${productName} available for global export. Competitive pricing, bulk quantities, and comprehensive certifications.`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
