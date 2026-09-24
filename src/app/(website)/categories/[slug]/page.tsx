import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getCategories } from "@/lib/cms/queries";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProductGrid } from "@/components/products/ProductGrid";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return buildMetadata({
      title: "Category Not Found",
      pathname: `/categories/${slug}`,
    });
  }

  return buildMetadata({
    title: category.seo.title || `${category.name} Wholesale Exporters & Suppliers India`,
    description: category.seo.description || category.description,
    pathname: `/categories/${category.slug}`,
  });
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS_DATA.filter((p) => p.categorySlug === slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-800">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-slate-800">Products</Link>
        <span>/</span>
        <span className="font-semibold text-slate-900">{category.name}</span>
      </nav>

      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Wholesale Commodity Category
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          {category.description}
        </p>
      </div>

      <div className="mt-12">
        <ProductGrid products={categoryProducts} />
      </div>
    </div>
  );
}
