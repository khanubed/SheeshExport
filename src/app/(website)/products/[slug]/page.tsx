import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProducts } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildProductSchema } from "@/lib/seo/product";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      pathname: `/products/${slug}`,
    });
  }

  return buildMetadata({
    title: product.seo.title || `${product.name} Exporter & Wholesale Supplier`,
    description: product.seo.description || product.shortDescription,
    pathname: `/products/${product.slug}`,
    ogImage: product.images[0]?.url,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = buildProductSchema(product);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.category.name, href: `/categories/${product.category.slug}` },
    { label: product.name, href: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-slate-800">Products</Link>
          <span>/</span>
          <Link href={`/categories/${product.category.slug}`} className="hover:text-slate-800">{product.category.name}</Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Gallery / Images */}
          <div className="space-y-4">
            <div className="aspect-square w-full rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
              <span className="text-sm text-slate-400">{product.name} Visual / Specimen</span>
            </div>
          </div>

          {/* Product Commercial Summary */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Badge variant="success">HS Code: {product.hsCode}</Badge>
              {product.botanicalName && (
                <span className="text-xs italic text-slate-500">
                  ({product.botanicalName})
                </span>
              )}
            </div>

            <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {product.description}
            </p>

            <div className="mt-6 space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Origin:</span>
                <span className="font-semibold text-slate-900">{product.origin}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">MOQ:</span>
                <span className="font-semibold text-slate-900">{product.minimumOrderQuantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Shelf Life:</span>
                <span className="font-semibold text-slate-900">{product.shelfLife}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                className="flex-1 rounded-md bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                Request Quote for {product.name}
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">Technical Specifications & Lab Standards</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <tbody className="divide-y divide-slate-200 bg-white">
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="w-1/3 px-6 py-3.5 font-medium text-slate-700">{spec.label}</td>
                    <td className="px-6 py-3.5 text-slate-900 font-semibold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
