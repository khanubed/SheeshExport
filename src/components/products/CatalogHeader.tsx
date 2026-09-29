import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MobileFilterSheet } from "./MobileFilterSheet";
import { FilterState } from "./ProductCatalogClient";

type CatalogHeaderProps = {
  resultCount: number;
  sort: string;
  setSort: (s: string) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

export function CatalogHeader({
  resultCount,
  sort,
  setSort,
  filters,
  setFilters,
}: CatalogHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
      <div>
        <h1 className="text-3xl font-bold font-heading text-foreground tracking-tight">
          Product Catalog
        </h1>
        <p className="text-muted-foreground mt-1">
          Showing {resultCount} {resultCount === 1 ? "product" : "products"}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <MobileFilterSheet filters={filters} setFilters={setFilters} />

        <div className="hidden sm:flex items-center gap-3">
          <span className="text-sm font-medium text-foreground whitespace-nowrap">Sort by:</span>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Sort Dropdown */}
        <div className="sm:hidden w-full max-w-[150px]">
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full bg-background">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
