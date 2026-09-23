"use client";

import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import { ZoomIn } from 'lucide-react';
import { ProductImage } from '@/lib/data/types';

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef] = useEmblaCarousel({ axis: 'y', dragFree: true });
  
  const displayImages = images.length > 0 ? images.map(img => img.url) : ['/images/placeholder.jpg', '/images/placeholder.jpg'];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
      {/* Thumbnails */}
      <div className="md:w-24 shrink-0 h-[400px] md:h-[500px] overflow-hidden" ref={emblaRef}>
        <div className="flex md:flex-col gap-3 h-full">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "relative aspect-square w-20 md:w-full shrink-0 overflow-hidden rounded-md border-2 transition-all",
                selectedIndex === idx ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
              )}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-muted/20 rounded-xl overflow-hidden relative group">
        <TransformWrapper>
          <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full">
            <img 
              src={displayImages[selectedIndex]} 
              alt="Product Main" 
              className="w-full h-full object-cover aspect-square md:aspect-auto"
            />
          </TransformComponent>
        </TransformWrapper>
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <ZoomIn className="w-5 h-5 text-foreground" />
        </div>
      </div>
    </div>
  );
}
