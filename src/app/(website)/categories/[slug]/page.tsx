import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { CategoryHero } from "@/components/categories/CategoryHero";
import { CategoryOverview } from "@/components/categories/CategoryOverview";
import { CategoryProductShowcase } from "@/components/categories/CategoryProductShowcase";

// Pre-render all categories at build time
export async function generateStaticParams() {
  return CATEGORIES_DATA.map((category) => ({
    slug: category.slug,
  }));
}

// Generate SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES_DATA.find((c) => c.slug === slug);
  
  if (!category) return {};

  return {
    title: `${category.name} | Premium B2B Export | Sheesh Exports`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Premium Export | Sheesh Exports`,
      description: category.description,
      images: [category.heroImage],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES_DATA.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Get products that belong to this category
  const categoryProducts = PRODUCTS_DATA.filter(
    (product) => product.categorySlug === category.slug
  );

  return (
    <main className="bg-white">
      {/* SECTION 01: IMMERSIVE HERO */}
      <CategoryHero category={category} />
      
      {/* SECTION 02: CATEGORY OVERVIEW */}
      <CategoryOverview category={category} />
      
      {/* Placeholders for upcoming sections */}
      {/* 
        <ProductPortfolioExplorer category={category} products={categoryProducts} />
        <WhySourceFromIndia category={category} />
        <MajorOrigins category={category} />
        <ExportMarkets category={category} />
        <CategoryApplications category={category} />
        <SupplyChainJourney category={category} />
        <CertificationEcosystem category={category} />
        <MarketIntelligence category={category} />
        <RelatedCategories currentSlug={category.slug} />
        <CategoryFAQ category={category} />
        <RFQCTA category={category} />
      */}
      
      {/* SECTION: CATEGORY PRODUCTS */}
      <CategoryProductShowcase category={category} products={categoryProducts} />
    </main>
  );
}
