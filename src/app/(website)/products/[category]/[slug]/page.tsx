import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { ProductDetailClient } from "@/components/products/pdp/ProductDetailClient";
import { ProductCard } from "@/components/products/ProductCard";
import { Metadata } from "next";
import { buildProductSchema } from "@/lib/seo/product";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find(
    (p) => p.slug === resolvedParams.slug && p.categorySlug === resolvedParams.category
  );

  if (!product) {
    return { title: "Product Not Found" };
  }

  const seoTitle =
    product.seoMetaData?.metaTitle ||
    `${product.name} Exporter & Wholesale Supplier from India | Sheesh Exports`;
  
  const seoDescription =
    product.seoMetaData?.metaDescription ||
    `Premium ${product.name} from India. APEDA & FSSAI certified wholesale exporter. High quality, custom packaging available. Minimum order: ${product.packagingOptions?.[0]?.moq || "Flexible"}.`;

  return buildMetadata({
    title: seoTitle.replace(" | Sheesh Exports", ""), // buildMetadata will append it
    description: seoDescription,
    pathname: `/products/${product.categorySlug}/${product.slug}`,
    ogImage: typeof product.variants?.[0]?.images?.[0] === "string" ? product.variants?.[0]?.images?.[0] : (product.variants?.[0]?.images?.[0] as any)?.src,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const product = PRODUCTS_DATA.find(
    (p) => p.slug === resolvedParams.slug && p.categorySlug === resolvedParams.category
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  const productSchema = buildProductSchema(product);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.category, href: `/products/${product.categorySlug}` },
    { label: product.name, href: `/products/${product.categorySlug}/${product.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={[productSchema, breadcrumbSchema]} />
      <ProductDetailClient product={product} />

      {relatedProducts.length > 0 && (
        <section className="bg-muted/30 py-6 lg:py-12 border-t border-border">
          <div className="container mx-auto px-4 max-w-8xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-heading text-foreground font-bold mb-3">
                Related Products
              </h2>
              <p className="text-muted-foreground font-sans">
                Explore other export-grade commodities in the {product.category} category.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
