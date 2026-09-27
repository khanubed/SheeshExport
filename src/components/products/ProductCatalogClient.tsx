"use client";

import React from "react";
import { useQueryStates, useQueryState, parseAsString, parseAsArrayOf, parseAsInteger } from "nuqs";
import { useGetProductsQuery } from "@/lib/redux/api/productsApi";
import { CatalogHeader } from "./CatalogHeader";
import { FilterSidebar } from "./FilterSidebar";
import { ActiveFilters } from "./ActiveFilters";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "./EmptyState";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader2 } from "lucide-react";

export type FilterState = {
  search: string;
  categories: string[];
  certifications: string[];
  exportMarkets: string[];
  packagingTypes: string[];
};

const ITEMS_PER_PAGE = 6;

export function ProductCatalogClient() {
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(""),
    categories: parseAsArrayOf(parseAsString).withDefault([]),
    certifications: parseAsArrayOf(parseAsString).withDefault([]),
    exportMarkets: parseAsArrayOf(parseAsString).withDefault([]),
    packagingTypes: parseAsArrayOf(parseAsString).withDefault([]),
  });

  const [sort, setSort] = useQueryState("sort", parseAsString.withDefault("relevance"));
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    search: filters.search,
    categories: filters.categories,
    certifications: filters.certifications,
    exportMarkets: filters.exportMarkets,
    packagingTypes: filters.packagingTypes,
    sort,
    page,
  });

  const currentItems = response?.data || [];
  const totalItems = response?.total || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handleResetFilters = () => {
    setFilters({
      search: "",
      categories: [],
      certifications: [],
      exportMarkets: [],
      packagingTypes: [],
    });
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="py-8 bg-background">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <CatalogHeader
          resultCount={totalItems}
          sort={sort}
          setSort={(val) => {
            setSort(val);
            setPage(1);
          }}
          filters={filters}
          setFilters={(newFilters) => {
            if (typeof newFilters === "function") {
              setFilters(newFilters).then(() => setPage(1));
            } else {
              setFilters(newFilters).then(() => setPage(1));
            }
          }}
        />

        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="hidden lg:block w-72 shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={(newFilters) => {
                if (typeof newFilters === "function") {
                  setFilters(newFilters).then(() => setPage(1));
                } else {
                  setFilters(newFilters).then(() => setPage(1));
                }
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <ActiveFilters
              filters={filters}
              setFilters={(newFilters) => {
                if (typeof newFilters === "function") {
                  setFilters(newFilters).then(() => setPage(1));
                } else {
                  setFilters(newFilters).then(() => setPage(1));
                }
              }}
            />

            {isLoading ? (
              <div className="flex justify-center items-center py-32 flex-col">
                <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground animate-pulse">Loading products...</p>
              </div>
            ) : totalItems > 0 ? (
              <>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 transition-opacity duration-300 ${isFetching ? "opacity-50" : "opacity-100"}`}
                >
                  {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 mb-8 flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page - 1);
                            }}
                            className={page === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                          <PaginationItem key={p}>
                            <PaginationLink
                              href="#"
                              isActive={page === p}
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(p);
                              }}
                            >
                              {p}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page + 1);
                            }}
                            className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            ) : (
              <div className="mt-4">
                <EmptyState onReset={handleResetFilters} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
