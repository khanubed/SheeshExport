import React from 'react';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { FilterState } from './ProductCatalogClient';

export function ActiveFilters({ filters, setFilters }: { filters: FilterState, setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) {
  const activeCount = 
    (filters.search ? 1 : 0) + 
    filters.categories.length + 
    filters.certifications.length + 
    filters.exportMarkets.length + 
    filters.packagingTypes.length;

  if (activeCount === 0) return null;

  const removeFilter = (group: keyof FilterState, value: string) => {
    setFilters(prev => {
      if (group === 'search') return { ...prev, search: '' };
      return { ...prev, [group]: (prev[group] as string[]).filter((item: string) => item !== value) };
    });
  };

  const clearAll = () => {
    setFilters({ search: '', categories: [], certifications: [], exportMarkets: [], packagingTypes: [] });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      <span className="text-sm font-medium text-muted-foreground mr-1">Active filters:</span>
      
      {filters.search && (
        <Badge variant="secondary" className="pl-2 pr-1 py-1 gap-1 flex items-center bg-accent text-accent-foreground border-border">
          "{filters.search}"
          <button onClick={() => removeFilter('search', '')} className="hover:bg-muted/80 rounded-full p-0.5 transition-colors"><X className="w-3 h-3" /></button>
        </Badge>
      )}

      {(['categories', 'certifications', 'exportMarkets', 'packagingTypes'] as const).map(group => (
        filters[group].map(val => (
          <Badge key={`${group}-${val}`} variant="secondary" className="pl-2 pr-1 py-1 gap-1 flex items-center bg-accent text-accent-foreground border-border">
            {val}
            <button onClick={() => removeFilter(group, val)} className="hover:bg-muted/80 rounded-full p-0.5 transition-colors"><X className="w-3 h-3" /></button>
          </Badge>
        ))
      ))}
      
      <button onClick={clearAll} className="text-sm text-primary hover:underline ml-2 font-medium">
        Clear all
      </button>
    </div>
  );
}
