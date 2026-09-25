import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Warehouse, ShieldCheck, MapPin, Globe, Award, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/home/AnimatedSection";
import { AboutHeroSwiper } from "@/components/about/AboutHeroSwiper";

export const metadata: Metadata = buildMetadata({
  title: "About Sheesh Exports | Premium Indian Agro & Spices Exporter",
  description: "Learn about Sheesh Exports, our farm-level sourcing network across India, state-of-the-art cleaning and processing facilities, and global shipping capabilities.",
  pathname: "/about",
});

const EXPORT_CATEGORIES = [
  { name: "Whole Spices", image: "/images/about/cat-whole-spices.jpg" },
  { name: "Ground Spices", image: "/images/about/cat-ground-spices.jpg" },
  { name: "Oil Seeds", image: "/images/about/cat-oil-seeds.jpg" },
  { name: "Pulses", image: "/images/about/cat-pulses.jpg" },
  { name: "Grains", image: "/images/about/cat-grains.jpg" },
  { name: "Agro Commodities", image: "/images/about/cat-agro.jpg" },
];

const JOURNEY_STEPS = [
  { title: "Farm Sourcing", desc: "Direct from verified Indian growers." },
  { title: "Cleaning", desc: "Multi-stage mechanical cleaning." },
  { title: "Sorting", desc: "Optical and color sortex perfection." },
  { title: "Processing", desc: "Temperature-controlled grinding." },
  { title: "Testing", desc: "SGS / Spices Board accredited lab checks." },
  { title: "Packaging", desc: "Custom food-grade bulk packaging." },
  { title: "Container Loading", desc: "Supervised and fumigated dispatch." },
  { title: "Global Distribution", desc: "CIF / FOB delivery to 50+ nations." },
];

const BUYER_BENEFITS = [
  "Consistent Product Quality",
  "Flexible Packaging Solutions",
  "Private Label Support",
  "Dedicated Export Documentation",
  "Multi-Country Logistics Network",
  "Responsive Procurement Team"
];

export default function AboutPage() {
  return (
    <main className="bg-[#F9F8F6] min-h-screen text-[#1C1C1C] font-sans selection:bg-[#0B3B24] selection:text-white">
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        <AboutHeroSwiper />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="max-w-4xl">
            <span className="inline-block text-[#C5A059] font-semibold tracking-[0.2em] uppercase text-sm mb-6 border-b border-[#C5A059]/30 pb-2">
              India's Trusted Export Partner
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] mb-8 drop-shadow-lg">
              For Spices, Agro Commodities & Food Ingredients
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Connecting global buyers with carefully sourced, processed and export-ready agricultural products from India's most renowned growing regions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 02: WHO WE ARE */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3B24] leading-[1.1] mb-8">
                Built Around Supply Reliability, Quality Consistency & Global Trade Expertise
              </h2>
              <div className="space-y-6 text-lg text-[#1C1C1C]/80 font-light leading-relaxed">
                <p>
                  We are not merely traders. Sheesh Exports is a fully integrated supply chain partner bridging the gap between India's vast agrarian landscape and international markets. Our infrastructure is designed to give you absolute confidence in your procurement.
                </p>
                <p>
                  By cultivating a direct Farmer Network, implementing rigorous Quality Control protocols, and operating advanced Processing facilities, we eliminate intermediaries and adulteration risks.
                </p>
                <p>
                  Our dedicated Export Logistics team ensures that every consignment is supported by flawless documentation, meeting the stringent phytosanitary and customs requirements of your destination port.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image src="/images/about/factory-processing.jpg" alt="Spice Processing Facility" fill className="object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHAT WE EXPORT */}
      <section className="py-24 bg-white border-y border-[#0B3B24]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B3B24] text-center">What We Export</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {EXPORT_CATEGORIES.map((cat, idx) => (
              <StaggerItem key={idx} className="group relative h-[400px] overflow-hidden bg-[#1C1C1C]">
                <Image src={cat.image} alt={cat.name} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-heading text-3xl text-white font-medium tracking-wide">{cat.name}</h3>
                  <div className="h-0.5 w-12 bg-[#C5A059] mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 04: FARM TO GLOBAL MARKET */}
      <section className="py-32 bg-[#0B3B24] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <Image src="/images/about/texture-map.png" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <FadeIn className="mb-20">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F9F8F6] text-center">
              Farm To Global Market
            </h2>
            <p className="text-center text-[#C5A059] tracking-[0.2em] uppercase text-sm mt-4">Our Signature Supply Chain</p>
          </FadeIn>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2" />
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">
              {JOURNEY_STEPS.map((step, idx) => (
                <StaggerItem key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-4 h-4 rounded-full bg-[#C5A059] mb-6 shadow-[0_0_15px_rgba(197,160,89,0.5)] group-hover:scale-150 transition-transform duration-300" />
                  <h4 className="font-heading text-xl font-medium text-[#F9F8F6] mb-2">{step.title}</h4>
                  <p className="text-xs text-white/60 font-light px-2 leading-relaxed">{step.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* SECTION 05: INDIA ORIGINS */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1 relative h-[600px] w-full">
              {/* Using a clean map placeholder, user mentioned "Clean India Map. Not interactive." */}
              <Image src="/images/about/india-map-clean.png" alt="Sourcing Regions in India" fill className="object-contain object-left" />
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <span className="text-[#C5A059] font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">India Origins</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B3B24] mb-12">
                Sourced from the Finest Terroirs
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-[#C5A059] pl-6">
                  <h4 className="font-heading text-2xl font-medium text-[#1C1C1C]">Guntur</h4>
                  <p className="text-[#1C1C1C]/60 uppercase tracking-wider text-xs mt-1 mb-2">Andhra Pradesh</p>
                  <p className="text-[#1C1C1C]/80 font-light">The global epicenter for premium S4 Sananam and Teja red chillies.</p>
                </div>
                <div className="border-l-2 border-[#C5A059] pl-6">
                  <h4 className="font-heading text-2xl font-medium text-[#1C1C1C]">Erode & Nizamabad</h4>
                  <p className="text-[#1C1C1C]/60 uppercase tracking-wider text-xs mt-1 mb-2">Tamil Nadu & Telangana</p>
                  <p className="text-[#1C1C1C]/80 font-light">Known for deep yellow, high-curcumin turmeric fingers.</p>
                </div>
                <div className="border-l-2 border-[#C5A059] pl-6">
                  <h4 className="font-heading text-2xl font-medium text-[#1C1C1C]">Unjha</h4>
                  <p className="text-[#1C1C1C]/60 uppercase tracking-wider text-xs mt-1 mb-2">Gujarat</p>
                  <p className="text-[#1C1C1C]/80 font-light">Asia's largest cumin and oil seed cultivation belt.</p>
                </div>
                <div className="border-l-2 border-[#C5A059] pl-6">
                  <h4 className="font-heading text-2xl font-medium text-[#1C1C1C]">Malabar Coast</h4>
                  <p className="text-[#1C1C1C]/60 uppercase tracking-wider text-xs mt-1 mb-2">Kerala</p>
                  <p className="text-[#1C1C1C]/80 font-light">The historic home of Tellicherry black pepper and cardamom.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 06: GLOBAL REACH */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0B3B24] mb-16">
              Serving Importers Across 50+ Countries
            </h2>
            <div className="relative h-[400px] w-full mb-16 opacity-80 mix-blend-multiply">
              <Image src="/images/about/world-map-routes.png" alt="Global Export Routes" fill className="object-contain" />
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[#1C1C1C]/80 font-heading text-2xl tracking-wide">
              <span>North America</span>
              <span>Europe</span>
              <span>Middle East</span>
              <span>Africa</span>
              <span>Asia Pacific</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 07: QUALITY & COMPLIANCE */}
      <section className="py-24 sm:py-32 bg-[#F9F8F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B3B24] mb-6">
                Quality Assurance
              </h2>
              <div className="w-12 h-0.5 bg-[#C5A059] mb-8" />
              <p className="text-lg text-[#1C1C1C]/80 font-light leading-relaxed mb-6">
                International buyers cannot risk non-compliance at destination ports. That is why our quality framework is uncompromising.
              </p>
              <p className="text-lg text-[#1C1C1C]/80 font-light leading-relaxed">
                Every consignment undergoes mandatory lab analysis for pesticide residues, aflatoxins, moisture content, and microbial loads. We partner with internationally recognized third-party surveyors like SGS and Eurofins to ensure your goods meet ASTA, ESA, and FDA standards before they ever leave Indian shores.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-10 sm:p-14 shadow-sm border border-[#0B3B24]/10 rounded-sm">
              <h3 className="font-heading text-2xl font-medium text-[#1C1C1C] mb-10 pb-4 border-b border-black/10">Official Certifications</h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#0B3B24]" />
                  <span className="font-medium tracking-wide">ISO 22000</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-[#0B3B24]" />
                  <span className="font-medium tracking-wide">APEDA</span>
                </div>
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-[#0B3B24]" />
                  <span className="font-medium tracking-wide">US FDA</span>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#0B3B24]" />
                  <span className="font-medium tracking-wide">FSSAI</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-[#0B3B24]" />
                  <span className="font-medium tracking-wide">Spices Board India</span>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#0B3B24]" />
                  <span className="font-medium tracking-wide">Halal & Kosher</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 08: INFRASTRUCTURE */}
      <section className="py-24 sm:py-32 bg-[#1C1C1C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#F9F8F6]">Industrial Infrastructure</h2>
            <p className="text-[#F9F8F6]/60 mt-4 max-w-2xl font-light text-lg">
              Operating state-of-the-art facilities equipped with optical sortex machines, temperature-controlled warehousing, and automated packaging lines to handle bulk industrial volumes.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem className="relative h-[350px] group overflow-hidden">
              <Image src="/images/about/infra-processing.jpg" alt="Processing Facilities" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="font-heading text-2xl font-medium">Processing Facilities</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-[350px] group overflow-hidden">
              <Image src="/images/about/infra-warehouse.jpg" alt="Warehousing" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="font-heading text-2xl font-medium">Warehousing</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-[350px] group overflow-hidden">
              <Image src="/images/about/infra-packaging.jpg" alt="Packaging Lines" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="font-heading text-2xl font-medium">Packaging Lines</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-[350px] group overflow-hidden">
              <Image src="/images/about/infra-testing.jpg" alt="Quality Testing" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="font-heading text-2xl font-medium">Quality Testing</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-[350px] group overflow-hidden lg:col-span-2">
              <Image src="/images/about/infra-loading.jpg" alt="Container Loading Operations" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="font-heading text-2xl font-medium">Container Loading Operations</h4>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 09: WHY BUYERS CHOOSE SHEESH */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B3B24] mb-16">
              Why Buyers Work With Us
            </h2>
            <ul className="space-y-6">
              {BUYER_BENEFITS.map((benefit, idx) => (
                <li key={idx} className="font-heading text-2xl sm:text-3xl text-[#1C1C1C] border-b border-[#1C1C1C]/10 pb-6 last:border-0 tracking-wide">
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10: LEADERSHIP NOTE */}
      <section className="py-24 bg-[#F9F8F6] border-y border-[#0B3B24]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <FadeIn>
            <div className="mx-auto w-12 h-12 mb-8 text-[#C5A059]">
              <FileText className="w-full h-full" strokeWidth={1} />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#0B3B24] mb-10">
              A Message From Sheesh Exports
            </h2>
            <div className="space-y-6 text-lg text-[#1C1C1C]/80 font-light leading-relaxed italic">
              <p>
                "In international commodity trade, the foundation of every successful transaction is trust. We understand that our buyers are managing complex supply chains across oceans, and they require a partner in India who acts as a dependable extension of their own procurement team."
              </p>
              <p>
                "Our philosophy is built entirely around transparency, uncompromising quality, and long-term global partnerships. When you import from Sheesh Exports, you are not just buying a product; you are securing peace of mind."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-24 sm:py-32 bg-[#0B3B24] text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium mb-12">
              Ready To Source Premium<br className="hidden sm:block"/> Indian Agricultural Products?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/request-quote" className={buttonVariants({ size: "lg", className: "bg-[#C5A059] text-[#0B3B24] hover:bg-[#C5A059]/90 font-medium tracking-wide w-full sm:w-auto h-14 px-8 text-lg rounded-none" })}>
                Request Quote
              </Link>
              <a href="#" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-transparent border-white/30 text-white hover:bg-white/10 w-full sm:w-auto h-14 px-8 text-lg rounded-none" })}>
                Download Company Profile
              </a>
              <Link href="/contact" className="text-white hover:text-[#C5A059] underline-offset-4 hover:underline transition-all mt-4 sm:mt-0 font-light">
                Talk To Procurement Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
