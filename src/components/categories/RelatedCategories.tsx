import React from "react";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RelatedCategories({ currentSlug }: { currentSlug: string }) {
  const related = CATEGORIES_DATA.filter((c) => c.slug !== currentSlug).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-8">
          Related Export Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group block border border-slate-200 p-6 hover:border-slate-400 transition-colors"
            >
              <h3 className="font-bold text-slate-900 mb-2">{cat.name}</h3>
              <p className="text-sm text-slate-500 font-sans mb-6 line-clamp-2">
                {cat.description}
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-wider text-primary group-hover:text-slate-900 transition-colors">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
