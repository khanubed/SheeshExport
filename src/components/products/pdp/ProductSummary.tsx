"use client";

import { Product } from '@/lib/data/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ShieldCheck, Clock } from 'lucide-react';

interface ProductSummaryProps {
  product: Product;
  onOpenRfq: () => void;
}

export function ProductSummary({ product, onOpenRfq }: ProductSummaryProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
          {product.name}
        </h1>
        {product.botanicalName && (
          <p className="text-muted-foreground italic text-lg mb-4">
            Botanical Name: {product.botanicalName}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.certifications.map(cert => (
            <Badge key={cert.id} variant="secondary" className="px-3 py-1">
              <ShieldCheck className="w-3 h-3 mr-1 inline" />
              {cert.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="prose prose-sm dark:prose-invert">
        <p className="text-lg">{product.shortDescription}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-md text-primary">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Origin</p>
            <p className="font-semibold">{product.origin}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-md text-primary">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Lead Time</p>
            <p className="font-semibold">{product.leadTime}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Button size="lg" className="flex-1 text-lg" onClick={onOpenRfq}>
          Request Quote
        </Button>
        <Button size="lg" variant="outline" className="flex-1 text-lg">
          Download Specs
        </Button>
      </div>
    </div>
  );
}
