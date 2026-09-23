"use client"

import * as React from "react"
import {
  Pagination as PaginationWrapper,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
  siblingCount?: number
}

export function Pagination({ page, totalPages, onChange, siblingCount = 1 }: PaginationProps) {
  if (totalPages <= 1) return null

  // Generate pagination items
  const paginationItems = React.useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // siblingCount + firstPage + lastPage + currentPage + 2*ellipsis

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "dots", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, "dots", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, "dots", ...middleRange, "dots", lastPageIndex];
    }

    return [];
  }, [totalPages, page, siblingCount]);

  return (
    <PaginationWrapper>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) onChange(page - 1);
            }} 
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        
        {paginationItems.map((item, index) => {
          if (item === "dots") {
            return (
              <PaginationItem key={`dots-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          
          return (
            <PaginationItem key={item}>
              <PaginationLink 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onChange(item as number);
                }}
                isActive={page === item}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) onChange(page + 1);
            }}
            className={page >= totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrapper>
  )
}
