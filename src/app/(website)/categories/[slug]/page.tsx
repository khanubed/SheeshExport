import { notFound } from "next/navigation";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { CategoryHero } from "@/components/categories/CategoryHero";
import { CategoryOverview } from "@/components/categories/CategoryOverview";
import { CategoryWhyIndia } from "@/components/categories/CategoryWhyIndia";
import { CategoryProductShowcase } from "@/components/categories/CategoryProductShowcase";
import { CategorySourcingMap } from "@/components/categories/CategorySourcingMap";
import { CategoryQuality } from "@/components/categories/CategoryQuality";
import { CategoryPackaging } from "@/components/categories/CategoryPackaging";
import { CategoryExportMarkets } from "@/components/categories/CategoryExportMarkets";
import { CategoryApplications } from "@/components/categories/CategoryApplications";
import { FAQSection } from "@/components/shared/FAQSection";
import { CategoryRFQCTA } from "@/components/categories/CategoryRFQCTA";
import { RelatedCategories } from "@/components/categories/RelatedCategories";

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

  const seoTitle = category.seoTitle || `${category.name} Suppliers & Bulk Exporters India`;
  const seoDescription = category.seoDescription || `Buy wholesale ${category.name} from India. Trusted exporters offering competitive pricing, APEDA/FSSAI compliance, and custom bulk packaging.`;

  return buildMetadata({
    title: seoTitle,
    description: seoDescription,
    pathname: `/categories/${category.slug}`,
    ogImage: category.heroImage,
  });
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

  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: category.name, href: `/categories/${category.slug}` },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `${SITE_CONFIG.url}/categories/${category.slug}`,
  };

  return (
    <main className="bg-card">
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />
      {/* 1. IMMERSIVE HERO */}
      <CategoryHero category={category} />
      
      {/* 2. CATEGORY OVERVIEW (SEO CONTENT) */}
      <CategoryOverview category={category} />
      
      {/* 3. WHY SOURCE FROM INDIA */}
      <CategoryWhyIndia category={category} />
      
      {/* 4. COMMERCIAL PRODUCT DIRECTORY */}
      <CategoryProductShowcase category={category} products={categoryProducts} />
      
      {/* 5. REGIONAL SOURCING MAP */}
      <CategorySourcingMap category={category} />
      
      {/* 6. QUALITY & COMPLIANCE */}
      <CategoryQuality category={category} />
      
      {/* 7. PACKAGING OPTIONS */}
      <CategoryPackaging category={category} />
      
      {/* 8. EXPORT MARKETS */}
      <CategoryExportMarkets category={category} />
      
      {/* 9. BUYER APPLICATIONS */}
      <CategoryApplications category={category} />
      
      {/* 10. FAQ */}
      {category.faqs && category.faqs.length > 0 && (
        <FAQSection 
          title={`${category.name} FAQs`} 
          subtitle="Frequently Asked Questions"
          faqs={category.faqs}
          className="!py-16"
        />
      )}
      
      {/* 11. REQUEST QUOTE CTA */}
      <CategoryRFQCTA category={category} />
      
      {/* 12. RELATED EXPORT CATEGORIES */}
      <RelatedCategories currentSlug={category.slug} />
    </main>
  );
}
