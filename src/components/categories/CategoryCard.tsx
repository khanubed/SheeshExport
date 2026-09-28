import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Category } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link 
      href={`/categories/${category.slug}`}
      className={cn(
        "group block border border-border bg-[#FAFAFA] hover:border-primary/50 transition-colors h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className="relative h-64 w-full overflow-hidden border-b border-border">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="p-8 flex-1 flex flex-col bg-card">
        {category.overview?.quickStats?.productsAvailable !== undefined && (
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {category.overview.quickStats.productsAvailable} Products Available
          </span>
        )}
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6 line-clamp-2">
          {category.description}
        </p>
        <div className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary">
          Explore Category <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
