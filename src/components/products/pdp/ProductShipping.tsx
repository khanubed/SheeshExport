import React from "react";
import { ShippingDetails } from "@/lib/data/types";
import { Ship, Anchor, Clock, Box } from "lucide-react";

export function ProductShipping({ shipping }: { shipping: ShippingDetails }) {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground/80 mb-4">
            Logistics
          </h2>
          <h3 className="text-3xl lg:text-4xl font-serif font-medium">
            Shipping & Containerization
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-8 border border-primary/50 bg-primary/80/50">
            <Box className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">20FT FCL</h4>
            <p className="text-muted-foreground/80">{shipping.capacity20ft}</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-primary/50 bg-primary/80/50">
            <Box className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">40FT HC</h4>
            <p className="text-muted-foreground/80">{shipping.capacity40ft}</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-primary/50 bg-primary/80/50">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">Transit Time</h4>
            <p className="text-muted-foreground/80">{shipping.transitTime}</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-primary/50 bg-primary/80/50">
            <Anchor className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">Export Ports</h4>
            <p className="text-muted-foreground/80">{shipping.exportPorts.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
