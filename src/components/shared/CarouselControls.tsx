"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselControlsProps {
  targetId: string;
  controlsPosition?: "top-right" | "top-right-absolute" | "bottom" | "sides";
  itemGap?: number;
}

export function CarouselControls({
  targetId,
  controlsPosition = "sides",
  itemGap = 24,
}: CarouselControlsProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  }, [targetId]);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    checkScroll();

    const ro = new ResizeObserver(() => {
      checkScroll();
    });
    ro.observe(el);

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [targetId, checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const firstItem = el.firstElementChild as HTMLElement;
    const itemWidth = firstItem?.offsetWidth || 320;
    const containerWidth = el.clientWidth;
    const scrollDistance = itemWidth > 0 ? itemWidth + itemGap : Math.floor(containerWidth * 0.75);
    const scrollAmount = direction === "left" ? -scrollDistance : scrollDistance;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const standardControls = (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Previous items"
        className={cn(
          "h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground transition-all duration-200 shadow-sm cursor-pointer hover:bg-muted hover:border-primary/50 active:scale-95",
          !canScrollLeft && "opacity-35 cursor-not-allowed hover:bg-card hover:border-border pointer-events-none active:scale-100"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Next items"
        className={cn(
          "h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground transition-all duration-200 shadow-sm cursor-pointer hover:bg-muted hover:border-primary/50 active:scale-95",
          !canScrollRight && "opacity-35 cursor-not-allowed hover:bg-card hover:border-border pointer-events-none active:scale-100"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );

  if (controlsPosition === "top-right") {
    return (
      <div className="flex items-center justify-end mb-4">
        {standardControls}
      </div>
    );
  }

  if (controlsPosition === "top-right-absolute") {
    return (
      <div className="hidden sm:flex items-center gap-2 absolute -top-16 right-0 z-10">
        {standardControls}
      </div>
    );
  }

  if (controlsPosition === "bottom") {
    return (
      <div className="flex justify-center mt-6">
        {standardControls}
      </div>
    );
  }

  // "sides"
  return (
    <>
      <div className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous items"
          className={cn(
            "pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-border bg-card/95 backdrop-blur-md flex items-center justify-center text-foreground transition-all duration-200 shadow-md cursor-pointer hover:bg-muted hover:border-primary/50 hover:scale-105 active:scale-95",
            !canScrollLeft && "opacity-0 pointer-events-none"
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next items"
          className={cn(
            "pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-border bg-card/95 backdrop-blur-md flex items-center justify-center text-foreground transition-all duration-200 shadow-md cursor-pointer hover:bg-muted hover:border-primary/50 hover:scale-105 active:scale-95",
            !canScrollRight && "opacity-0 pointer-events-none"
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
