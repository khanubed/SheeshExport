"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Package } from "lucide-react";
import { ProductPackagingOption } from "@/lib/data/types";

interface PackagingOptionsProps {
  options: ProductPackagingOption[];
}

export function PackagingOptions({ options }: PackagingOptionsProps) {
  if (!options || options.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-heading font-semibold mb-4 flex items-center gap-2">
        <Package className="w-5 h-5 text-primary" />
        Available Packaging
      </h3>
      <ToggleGroup type="multiple" variant="outline" className="justify-start flex-wrap gap-2">
        {options.map(opt => (
          <ToggleGroupItem key={opt.id} value={opt.id} className="px-4 py-2 h-auto data-[state=on]:bg-primary/10 data-[state=on]:border-primary flex-col items-start gap-1">
            <span>{opt.type}</span>
            <span className="text-xs text-muted-foreground font-normal">{opt.sizes.join(', ')}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
