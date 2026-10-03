"use client";

import React from "react";
import { useQueryStates, useQueryState, parseAsString, parseAsArrayOf, parseAsInteger } from "nuqs";
import { PRODUCTS_DATA } from "@/lib/data/products";
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

  const filteredProducts = React.useMemo(() => {
    let result = [...PRODUCTS_DATA];

    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (filters.categories && filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    if (filters.certifications && filters.certifications.length > 0) {
      result = result.filter((p) =>
        p.certifications?.some((c) => filters.certifications.includes(c))
      );
    }

    if (filters.exportMarkets && filters.exportMarkets.length > 0) {
      result = result.filter((p) =>
        p.exportMarkets?.some((m) => filters.exportMarkets.includes(m))
      );
    }

    if (filters.packagingTypes && filters.packagingTypes.length > 0) {
      result = result.filter((p) =>
        p.packagingOptions?.some((pt) => filters.packagingTypes.includes(pt.name))
      );
    }

    if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [filters, sort]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const currentItems = React.useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

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
    <section aria-labelledby="catalog-heading" className=" bg-background">
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
          <aside className="hidden lg:block w-72 shrink-0" aria-label="Product filters">
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
          </aside>

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

            {totalItems > 0 ? (
              <>
                <ul
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4"
                  role="list"
                  aria-label="Product listings"
                >
                  {currentItems.map((product) => (
                    <li key={product.id} role="listitem">
                      <ProductCard product={product} />
                    </li>
                  ))}
                </ul>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav className="mt-12 mb-8 flex justify-center" aria-label="Pagination">
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
                            aria-label="Previous page"
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
                              aria-label={`Page ${p}`}
                              aria-current={page === p ? "page" : undefined}
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
                            aria-label="Next page"
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </nav>
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
    </section>
  );
}
