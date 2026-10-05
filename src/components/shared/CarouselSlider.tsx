"use client";

import React, { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselSliderProps<T = unknown> {
  /** Array of data items to render */
  items?: T[];
  /** Render function for each item */
  renderItem?: (item: T, index: number) => ReactNode;
  /** Key extractor */
  keyExtractor?: (item: T, index: number) => string | number;
  /** Alternatively pass children directly as slide elements */
  children?: ReactNode;
  /** Class name for each slide wrapper */
  itemClassName?: string;
  /** Additional CSS classes for the outer wrapper */
  className?: string;
  /** Additional CSS classes for the scrollable container */
  containerClassName?: string;
  /** Where to position navigation buttons: 'top-right', 'inline', 'bottom', or 'none' */
  controlsPosition?: "top-right" | "inline" | "bottom" | "none";
  /** Optional title to show next to top-right controls */
  title?: ReactNode;
  /** Accessible label */
  ariaLabel?: string;
  /** Custom action/link next to top-right controls */
  headerAction?: ReactNode;
}

export function CarouselSlider<T = unknown>({
  items,
  renderItem,
  keyExtractor,
  children,
  itemClassName = "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  className,
  containerClassName,
  controlsPosition = "top-right",
  title,
  ariaLabel = "Content carousel",
  headerAction,
}: CarouselSliderProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Allow small 2px threshold for floating point rounding
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      checkScrollability();
    });
    const el = scrollRef.current;
    if (!el) {
      return () => cancelAnimationFrame(frameId);
    }

    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability, items, children]);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;

    // Determine scroll distance: first visible child width + gap, or 80% of container width
    const firstChild = el.firstElementChild as HTMLElement | null;
    const distance = firstChild ? firstChild.offsetWidth + 24 : el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const navButtons = (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => scroll("prev")}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
        className={cn(
          "h-10 w-10 rounded-full border border-border bg-card text-foreground",
          "hover:bg-primary hover:text-primary-foreground hover:border-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "transition-all duration-200 flex items-center justify-center shadow-sm shrink-0",
          "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-foreground disabled:hover:border-border"
        )}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scroll("next")}
        disabled={!canScrollNext}
        aria-label="Next slide"
        className={cn(
          "h-10 w-10 rounded-full border border-border bg-card text-foreground",
          "hover:bg-primary hover:text-primary-foreground hover:border-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "transition-all duration-200 flex items-center justify-center shadow-sm shrink-0",
          "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-foreground disabled:hover:border-border"
        )}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <div className={cn("w-full relative group", className)} role="region" aria-label={ariaLabel}>
      {/* Top Header Controls (if title, headerAction or top-right controls) */}
      {controlsPosition === "top-right" && (title || headerAction || controlsPosition === "top-right") && (
        <div className="flex items-center justify-between gap-4 mb-6">
          {title ? <div>{title}</div> : <div />}
          <div className="flex items-center gap-4">
            {headerAction}
            {navButtons}
          </div>
        </div>
      )}

      {/* Inline Left Button */}
      {controlsPosition === "inline" && (
        <div className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20">
          <button
            type="button"
            onClick={() => scroll("prev")}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
            className={cn(
              "h-11 w-11 rounded-full border border-border/80 bg-background/95 text-foreground backdrop-blur-sm",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              "transition-all duration-200 flex items-center justify-center shadow-md shrink-0",
              "disabled:opacity-0 disabled:pointer-events-none"
            )}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Inline Right Button */}
      {controlsPosition === "inline" && (
        <div className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
          <button
            type="button"
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
            aria-label="Next slide"
            className={cn(
              "h-11 w-11 rounded-full border border-border/80 bg-background/95 text-foreground backdrop-blur-sm",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              "transition-all duration-200 flex items-center justify-center shadow-md shrink-0",
              "disabled:opacity-0 disabled:pointer-events-none"
            )}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Scrollable Container (Native Snap Scrolling) */}
      <div
        ref={scrollRef}
        className={cn(
          "flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory py-2 px-1",
          "scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          containerClassName
        )}
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items && renderItem
          ? items.map((item, index) => {
              const key = keyExtractor ? keyExtractor(item, index) : index;
              return (
                <div
                  key={key}
                  className={cn("shrink-0 snap-start", itemClassName)}
                  role="group"
                  aria-roledescription="slide"
                >
                  {renderItem(item, index)}
                </div>
              );
            })
          : React.Children.map(children, (child, index) => (
              <div
                key={index}
                className={cn("shrink-0 snap-start", itemClassName)}
                role="group"
                aria-roledescription="slide"
              >
                {child}
              </div>
            ))}
      </div>

      {/* Bottom Controls */}
      {controlsPosition === "bottom" && (
        <div className="flex items-center justify-center mt-6">
          {navButtons}
        </div>
      )}
    </div>
  );
}
