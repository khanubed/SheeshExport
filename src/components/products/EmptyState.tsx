import React from 'react';
import { PackageX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-card rounded-2xl border border-dashed border-border w-full">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <PackageX className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-bold font-heading text-foreground mb-2">No Products Found</h3>
      <p className="text-muted-foreground max-w-md mb-6">
        We couldn't find any products matching your current filter criteria. Please try adjusting your filters or search term to see more results.
      </p>
      <Button onClick={onReset} variant="outline" size="lg" className="font-semibold">
        Reset All Filters
      </Button>
    </div>
  );
}
