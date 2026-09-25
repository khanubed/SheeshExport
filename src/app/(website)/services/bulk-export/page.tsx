import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { Anchor, ShieldAlert, Box, Database, TrendingDown } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Bulk Spice Exporter India | Container & FCL Spice Shipments",
  description:
    "Container-scale wholesale shipments of spices and food ingredients for processors, importers and distributors. Optimized FCL export with desiccant protection.",
  pathname: "/services/bulk-export",
});

export default function BulkExportPage() {
  return (
    <main className="bg-[#F7F5F0] min-h-screen text-[#1E1E1E] font-sans selection:bg-[#0B2F26] selection:text-white">
      
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#0B2F26] text-white">
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <Image src="/images/about/infra-warehouse.jpg" alt="Warehouse stacked with bags of spices" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F26] via-[#0B2F26]/90 to-transparent" />
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 pt-24 pb-16">
          <span className="inline-block text-[#C8A96B] font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-[#C8A96B]/30 pb-2">
            Wholesale Spice Exporter India
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl">
            Export-Ready Bulk Commodities<br/>For Global Supply Chains
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl font-light leading-relaxed mb-12">
            Container-scale shipments of spices and food ingredients optimized for food manufacturers, processors, and wholesale distributors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#formats" className="inline-flex items-center justify-center bg-[#C8A96B] text-[#0B2F26] px-8 py-4 font-medium tracking-wide hover:bg-[#C8A96B]/90 transition-colors">
              View Packaging Formats
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 font-medium tracking-wide hover:bg-white/5 transition-colors">
              Request Bulk Shipment Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: PACKAGING FORMATS */}
      <section id="formats" className="py-16 lg:py-24 bg-white border-b border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-16 text-center">
            Industrial Packaging Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors bg-[#F7F5F0]">
              <Database className="w-10 h-10 text-[#C8A96B] mb-6" />
              <h3 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-3">25 KG PP Bags</h3>
              <p className="text-[#1E1E1E]/70 font-light text-sm mb-6">Polypropylene bags ideal for grounded spices and dense seeds. Offers high tensile strength and basic moisture resistance.</p>
              <span className="text-xs uppercase tracking-widest text-[#1E1E1E]/50 font-semibold">Standard Wholesale</span>
            </div>
            
            <div className="border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors bg-[#F7F5F0]">
              <Database className="w-10 h-10 text-[#C8A96B] mb-6" />
              <h3 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-3">50 KG Jute Bags</h3>
              <p className="text-[#1E1E1E]/70 font-light text-sm mb-6">Breathable traditional gunny bags used primarily for whole spices like Red Chilli and Turmeric to prevent sweating.</p>
              <span className="text-xs uppercase tracking-widest text-[#1E1E1E]/50 font-semibold">Whole Spices</span>
            </div>

            <div className="border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors bg-[#F7F5F0]">
              <Database className="w-10 h-10 text-[#C8A96B] mb-6" />
              <h3 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-3">Multiwall Kraft Bags</h3>
              <p className="text-[#1E1E1E]/70 font-light text-sm mb-6">Food-grade multiwall paper bags with inner PE liners. Essential for high-value powders and hydroscopic products.</p>
              <span className="text-xs uppercase tracking-widest text-[#1E1E1E]/50 font-semibold">Premium Extracts</span>
            </div>

            <div className="border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors bg-[#F7F5F0]">
              <Database className="w-10 h-10 text-[#C8A96B] mb-6" />
              <h3 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-3">Jumbo Bags (FIBC)</h3>
              <p className="text-[#1E1E1E]/70 font-light text-sm mb-6">1 Tonne Flexible Intermediate Bulk Containers for massive industrial processors requiring forklift unloading.</p>
              <span className="text-xs uppercase tracking-widest text-[#1E1E1E]/50 font-semibold">Industrial Processors</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: CONTAINER OPTIMIZATION */}
      <section className="py-16 lg:py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-16 text-center">
            Container Loading Optimization
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white border border-[#1E1E1E]/10 p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-32 h-32 text-[#1E1E1E]" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-[#1E1E1E] mb-4 relative z-10">20FT Container (TEU)</h3>
              <ul className="space-y-4 text-[#1E1E1E]/80 font-light relative z-10">
                <li className="flex justify-between border-b border-[#1E1E1E]/10 pb-2"><span>Payload Capacity</span> <span className="font-medium">Up to 14 - 18 MT</span></li>
                <li className="flex justify-between border-b border-[#1E1E1E]/10 pb-2"><span>Ideal For</span> <span className="font-medium">Heavy/Dense Cargo (Powders, Seeds)</span></li>
                <li className="flex justify-between border-b border-[#1E1E1E]/10 pb-2"><span>Typical Use</span> <span className="font-medium">Cumin, Coriander Seeds, Turmeric Powder</span></li>
              </ul>
            </div>

            <div className="bg-white border border-[#1E1E1E]/10 p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-32 h-32 text-[#0B2F26]" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-[#1E1E1E] mb-4 relative z-10">40FT HC Container (FEU)</h3>
              <ul className="space-y-4 text-[#1E1E1E]/80 font-light relative z-10">
                <li className="flex justify-between border-b border-[#1E1E1E]/10 pb-2"><span>Payload Capacity</span> <span className="font-medium">Up to 26 - 28 MT</span></li>
                <li className="flex justify-between border-b border-[#1E1E1E]/10 pb-2"><span>Ideal For</span> <span className="font-medium">Voluminous Cargo</span></li>
                <li className="flex justify-between border-b border-[#1E1E1E]/10 pb-2"><span>Typical Use</span> <span className="font-medium">Whole Red Chillies, Jute Bags</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: DESICCANT PROTECTION (SEO BLOCK) */}
      <section className="py-16 lg:py-24 bg-[#0B2F26] text-white border-y border-white/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-8">
                Cargo Preservation & Desiccant Protection
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                Ocean transit exposes bulk agricultural commodities to extreme temperature fluctuations, causing "Container Rain" and threatening cargo integrity.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <ShieldAlert className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-2xl mb-1 text-white">Moisture Protection</h4>
                    <p className="text-white/70 font-light text-sm leading-relaxed">We install high-capacity calcium chloride container desiccants to absorb ambient moisture and maintain relative humidity below the critical dew point.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-2xl mb-1 text-white">Preventing Container Condensation</h4>
                    <p className="text-white/70 font-light text-sm leading-relaxed">By strategically placing desiccant poles and applying kraft paper linings, we eliminate the risk of aflatoxin development and mold during 30+ day ocean voyages.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full border border-[#C8A96B] flex items-center justify-center mb-6">
                <ShieldAlert className="w-10 h-10 text-[#C8A96B]" />
              </div>
              <h4 className="font-heading text-3xl font-medium text-white mb-4">Zero Moisture Damage Guarantee</h4>
              <p className="text-white/60 font-light px-8">Our FCL shipments are engineered to withstand the most aggressive maritime climates from India to the USA and Northern Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: LOGISTICS NETWORK */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-12 text-center">
            Major Export Ports
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-8 border border-[#1E1E1E]/10 bg-[#F7F5F0] hover:border-[#C8A96B] transition-colors">
              <Anchor className="w-10 h-10 text-[#C8A96B] mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E]">Nhava Sheva</h4>
              <p className="text-xs uppercase tracking-wider text-[#1E1E1E]/50 mt-2">Mumbai (West Coast)</p>
            </div>
            <div className="p-8 border border-[#1E1E1E]/10 bg-[#F7F5F0] hover:border-[#C8A96B] transition-colors">
              <Anchor className="w-10 h-10 text-[#C8A96B] mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E]">Mundra Port</h4>
              <p className="text-xs uppercase tracking-wider text-[#1E1E1E]/50 mt-2">Gujarat (West Coast)</p>
            </div>
            <div className="p-8 border border-[#1E1E1E]/10 bg-[#F7F5F0] hover:border-[#C8A96B] transition-colors">
              <Anchor className="w-10 h-10 text-[#C8A96B] mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E]">Chennai Port</h4>
              <p className="text-xs uppercase tracking-wider text-[#1E1E1E]/50 mt-2">Tamil Nadu (East Coast)</p>
            </div>
            <div className="p-8 border border-[#1E1E1E]/10 bg-[#F7F5F0] hover:border-[#C8A96B] transition-colors">
              <Anchor className="w-10 h-10 text-[#C8A96B] mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E]">Krishnapatnam</h4>
              <p className="text-xs uppercase tracking-wider text-[#1E1E1E]/50 mt-2">Andhra (East Coast)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: CTA */}
      <section className="py-20 lg:py-24 bg-[#F7F5F0] border-t border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B2F26] mb-8">
            Secure Your Supply Chain
          </h2>
          <p className="text-xl text-[#1E1E1E]/80 font-light mb-10 max-w-2xl mx-auto">
            Contact our export division to receive latest bulk pricing, freight estimates, and current container availability.
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#0B2F26] text-white px-10 py-5 font-medium tracking-wide w-full sm:w-auto hover:bg-[#0B2F26]/90 transition-colors">
              Request Bulk Shipment Proposal
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
