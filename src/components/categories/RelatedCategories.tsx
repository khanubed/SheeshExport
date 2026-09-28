import React from "react";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "./CategoryCard";

export function RelatedCategories({ currentSlug }: { currentSlug: string }) {
  const related = CATEGORIES_DATA.filter((c) => c.slug !== currentSlug).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
          Related Export Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
