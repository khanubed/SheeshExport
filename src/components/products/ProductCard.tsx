import Link from "next/link";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const featuredImage = product.images.find((img) => img.isFeatured) || product.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100 flex items-center justify-center">
        {featuredImage ? (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
            {featuredImage.alt}
          </div>
        ) : (
          <div className="text-slate-400 text-sm">No image available</div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="success">HS {product.hsCode}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-emerald-700">
          {product.category.name}
        </span>
        <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          <Link href={`/products/${product.slug}`} className="focus:outline-none">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {product.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>MOQ: {product.minimumOrderQuantity.split("(")[0]}</span>
          <Link
            href={`/products/${product.slug}`}
            className="font-medium text-emerald-700 hover:text-emerald-800"
          >
            Specs & RFQ &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
