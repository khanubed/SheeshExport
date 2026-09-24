import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { ProductDetailClient } from "@/components/products/pdp/ProductDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug && p.categorySlug === resolvedParams.category);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Premium B2B Export | Sheesh Exports`,
    description: product.description.substring(0, 160),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === resolvedParams.slug && p.categorySlug === resolvedParams.category);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <ProductDetailClient product={product} />
    </main>
  );
}
