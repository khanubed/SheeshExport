"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Product } from "@/lib/data/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface RFQStickyPanelProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RFQStickyPanel({ product, open, onOpenChange }: RFQStickyPanelProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onOpenChange(false);
      }, 2000);
    }, 1500);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-heading">Request a Quote</SheetTitle>
          <SheetDescription>
            Get pricing for <strong className="text-foreground">{product.name}</strong>. Our team will respond within 24 hours.
          </SheetDescription>
        </SheetHeader>

        {success ? (
          <div className="bg-green-500/10 text-green-600 p-6 rounded-lg text-center font-medium border border-green-500/20">
            Quote request submitted successfully! We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Required Quantity (MOQ: {product.minimumOrderQuantity})</Label>
              <Input id="quantity" required placeholder={`e.g., ${product.minimumOrderQuantity}`} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" required placeholder="Your Company Ltd" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" required placeholder="purchasing@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="port">Destination Port</Label>
              <Input id="port" required placeholder="e.g., Jebel Ali, Dubai" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Requirements</Label>
              <textarea 
                id="notes" 
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Specific grading, packaging, or certifications needed..."
              />
            </div>

            <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit RFQ"}
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}
