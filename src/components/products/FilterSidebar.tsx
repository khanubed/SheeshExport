import React from 'react';
import { FILTER_OPTIONS } from '@/lib/data/products';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { FilterState } from './ProductCatalogClient';

type FilterSidebarProps = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

export function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  
  const handleCheckboxChange = (group: keyof Omit<FilterState, 'search'>, value: string, checked: boolean) => {
    setFilters(prev => {
      const groupArray = prev[group];
      if (checked) {
        return { ...prev, [group]: [...groupArray, value] };
      } else {
        return { ...prev, [group]: groupArray.filter((item: string) => item !== value) };
      }
    });
  };

  const renderFilterGroup = (title: string, group: keyof Omit<FilterState, 'search'>, options: string[]) => (
    <AccordionItem value={group} className="border-b-0">
      <AccordionTrigger className="hover:no-underline font-semibold text-foreground py-3">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pt-1 pb-4">
        <div className="space-y-3">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-3">
              <Checkbox 
                id={`${group}-${option}`} 
                checked={filters[group].includes(option)}
                onCheckedChange={(checked) => handleCheckboxChange(group, option, checked as boolean)}
                className="rounded-sm"
              />
              <Label htmlFor={`${group}-${option}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <div className="space-y-6 w-full">
      {/* Search */}
      <div>
        <h3 className="font-semibold text-foreground mb-3 text-sm tracking-tight">Search Catalog</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="pl-9 bg-background focus-visible:ring-primary"
            value={filters.search}
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-border" />

      {/* Accordion Filters */}
      <Accordion type="multiple" defaultValue={['categories', 'certifications']} className="w-full">
        {renderFilterGroup("Categories", "categories", FILTER_OPTIONS.categories)}
        {renderFilterGroup("Certifications", "certifications", FILTER_OPTIONS.certifications)}
        {renderFilterGroup("Export Markets", "exportMarkets", FILTER_OPTIONS.exportMarkets)}
        {renderFilterGroup("Packaging Types", "packagingTypes", FILTER_OPTIONS.packagingTypes)}
      </Accordion>
    </div>
  );
}
