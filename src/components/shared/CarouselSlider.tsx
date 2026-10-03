import React, { useId } from "react";
import { CarouselControls } from "./CarouselControls";
import { cn } from "@/lib/utils";

export interface CarouselSliderProps {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  controlsPosition?: "top-right" | "top-right-absolute" | "bottom" | "sides";
  itemGap?: number;
  id?: string;
}

/**
 * CarouselSlider (React Server Component)
 *
 * Renders the container, markup, and children completely on the server (100% SSR).
 * Only the navigation buttons are rendered as a minimal client island (CarouselControls),
 * ensuring optimal SEO, instant LCP, and zero unnecessary client JavaScript.
 */
export function CarouselSlider({
  children,
  ariaLabel = "Slider",
  className = "",
  containerClassName = "",
  controlsPosition = "sides",
  itemGap = 24,
  id,
}: CarouselSliderProps) {
  const reactId = useId();
  const sliderId = id || `slider-${reactId.replace(/:/g, "")}`;

  return (
    <div className={cn("w-full relative group/carousel", className)}>
      {controlsPosition !== "bottom" && (
        <CarouselControls
          targetId={sliderId}
          controlsPosition={controlsPosition}
          itemGap={itemGap}
        />
      )}

      {/* 100% Server Rendered Snap Scroll Track */}
      <div
        id={sliderId}
        className={cn(
          "flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0",
          containerClassName
        )}
        role="region"
        aria-label={ariaLabel}
      >
        {children}
      </div>

      {controlsPosition === "bottom" && (
        <CarouselControls
          targetId={sliderId}
          controlsPosition="bottom"
          itemGap={itemGap}
        />
      )}
    </div>
  );
}
