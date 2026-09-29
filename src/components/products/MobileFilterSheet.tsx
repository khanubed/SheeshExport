import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";
import { FilterState } from "./ProductCatalogClient";

export function MobileFilterSheet({
  filters,
  setFilters,
}: {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}) {
  const activeCount =
    (filters.search ? 1 : 0) +
    filters.categories.length +
    filters.certifications.length +
    filters.exportMarkets.length +
    filters.packagingTypes.length;

  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="outline" className="lg:hidden flex items-center gap-2" />}
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
        {activeCount > 0 && (
          <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {activeCount}
          </span>
        )}
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader className="mb-6 text-left">
          <SheetTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" /> Filter Products
          </SheetTitle>
          <SheetDescription className="sr-only">
            Filter the product catalog by category, certification, market, and more.
          </SheetDescription>
        </SheetHeader>
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </SheetContent>
    </Sheet>
  );
}
