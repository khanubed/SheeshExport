import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle2, Package, Globe, ShieldCheck, Box, Anchor } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Export Process & Supply Chain Operations | Sheesh Exports",
  description:
    "Explore our complete farm-to-port export workflow, including sourcing, quality control, customized packaging, mixed containers, and international shipping.",
  pathname: "/export-process",
});

const EXPORT_JOURNEY = [
  {
    step: "01",
    title: "Sourcing",
    image: "/images/about/mission.jpg",
    desc: "Products sourced from approved growing regions through verified suppliers and farming networks.",
    tags: ["Guntur", "Erode", "Unjha", "Malabar"]
  },
  {
    step: "02",
    title: "Cleaning & Sorting",
    image: "/images/about/factory-processing.jpg",
    desc: "Removal of foreign matter, dust, stones and impurities via automated processing machinery.",
    tags: ["Mechanical Cleaning", "Destoning", "Sorting", "Grading"]
  },
  {
    step: "03",
    title: "Laboratory Testing",
    image: "/images/about/infra-testing.jpg",
    desc: "Every export batch undergoes rigorous quality, microbiological, and safety verification.",
    tags: ["Moisture", "Aflatoxin", "Microbiology", "Heavy Metals", "Pesticides"]
  },
  {
    step: "04",
    title: "Product Approval",
    image: "/images/about/quality-assurance.webp",
    desc: "Batches are cleared by quality inspectors against strict international limits before moving forward.",
    tags: ["Quality Release", "Compliance Check", "Batch Tagging"]
  },
  {
    step: "05",
    title: "Packaging",
    image: "/images/about/infra-warehouse.jpg",
    desc: "Customized export packaging executed according to exact buyer and destination requirements.",
    tags: ["Bulk Commodity", "Private Label", "Sheesh Packaging"]
  },
  {
    step: "06",
    title: "Container Planning",
    image: "/images/about/vision.jpg",
    desc: "Optimized loading plans maximize product protection, weight limits, and freight efficiency.",
    tags: ["20FT Containers", "40FT HC", "FCL", "LCL", "Mixed Containers"]
  },
  {
    step: "07",
    title: "Documentation",
    image: "/images/about/quality-assurance.webp",
    desc: "Complete documentation prepared to ensure frictionless customs clearance at destination ports.",
    tags: ["Commercial Invoice", "Certificate of Origin", "Phytosanitary", "Bill of Lading"]
  },
  {
    step: "08",
    title: "Port Clearance",
    image: "/images/about/infra-warehouse.jpg",
    desc: "Efficient customs clearance and terminal handling operations through major Indian ports.",
    tags: ["Nhava Sheva", "Mundra", "Chennai", "Krishnapatnam"]
  },
  {
    step: "09",
    title: "Global Delivery",
    image: "/images/about/factory-processing.jpg",
    desc: "Products shipped worldwide through our network of trusted ocean freight and logistics partners.",
    tags: ["USA", "Europe", "Middle East", "Africa", "Asia Pacific"]
  }
];

const DOCUMENTATION = [
  { title: "Commercial Invoice", desc: "Detailed valuation and transaction record." },
  { title: "Packing List", desc: "Exact container contents, weights, and dimensions." },
  { title: "Certificate of Origin", desc: "Chamber of Commerce verified origin proof." },
  { title: "Phytosanitary Certificate", desc: "Plant Quarantine clearance ensuring pest-free cargo." },
  { title: "Certificate of Analysis", desc: "Batch-specific laboratory testing results." },
  { title: "Fumigation Certificate", desc: "Proof of treatment against biological hazards." },
  { title: "Bill of Lading", desc: "Legal transport document and title of goods." },
  { title: "Health Certificate", desc: "Additional safety compliance for human consumption." }
];

export default function ExportProcessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the export process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline varies based on product readiness, packaging requirements, and vessel availability, typically ranging from 7 to 21 days from order confirmation to vessel departure."
        }
      },
      {
        "@type": "Question",
        "name": "Can products be mixed in one container?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in Mixed Container solutions, allowing buyers to consolidate multiple commodities into a single FCL shipment to optimize freight costs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide Certificates of Analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every shipment is accompanied by a batch-specific Certificate of Analysis detailing moisture, purity, and safety parameters."
        }
      },
      {
        "@type": "Question",
        "name": "Which ports do you ship from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate primarily through major Indian ports including Nhava Sheva (Mumbai), Mundra, Chennai, and Krishnapatnam."
        }
      }
    ]
  };

  return (
    <main className="bg-[#F7F5F0] min-h-screen text-[#1E1E1E] font-sans selection:bg-[#0B2F26] selection:text-white">
      <JsonLd data={schema} />
      
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#0B2F26] text-white overflow-hidden">
        {/* Split Screen Background */}
        <div className="absolute inset-0 z-0 flex opacity-30 mix-blend-luminosity">
          <div className="w-1/3 relative"><Image src="/images/about/mission.jpg" alt="Farm Sourcing" fill className="object-cover" /></div>
          <div className="w-1/3 relative border-x border-white/10"><Image src="/images/about/factory-processing.jpg" alt="Processing Facility" fill className="object-cover" /></div>
          <div className="w-1/3 relative"><Image src="/images/about/infra-warehouse.jpg" alt="Export Container" fill className="object-cover" /></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F26] via-[#0B2F26]/80 to-transparent z-10" />

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-20 pt-20 pb-10">
          <span className="inline-block text-[#C8A96B] font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-[#C8A96B]/30 pb-2 max-w-max">
            Supply Chain Transparency Report
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl">
            From Indian Farms<br /> To Global Markets
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl font-light leading-relaxed mb-12">
            A transparent export process designed to ensure quality, traceability, and reliable delivery across international supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#journey" className="inline-flex items-center justify-center bg-[#C8A96B] text-[#0B2F26] px-8 py-4 font-medium tracking-wide hover:bg-[#C8A96B]/90 transition-colors">
              Explore Export Workflow
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 font-medium tracking-wide hover:bg-white/5 transition-colors">
              Request Export Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: EXPORT OVERVIEW */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px] text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-8">
            Built For Reliable International Trade
          </h2>
          <p className="text-xl text-[#1E1E1E]/80 font-light leading-relaxed editorial-content text-left md:text-center">
            Successful international commodity shipping requires more than just product availability. It demands a highly synchronized workflow integrating precise <strong className="font-medium text-[#1E1E1E]">farm sourcing</strong>, rigorous <strong className="font-medium text-[#1E1E1E]">quality control</strong>, flexible <strong className="font-medium text-[#1E1E1E]">product customization</strong>, flawless <strong className="font-medium text-[#1E1E1E]">export compliance</strong>, and intelligent <strong className="font-medium text-[#1E1E1E]">container optimization</strong>. At Sheesh Exports, our entire Indian spice export process is engineered to mitigate risk and guarantee seamless global shipping.
          </p>
        </div>
      </section>

      {/* SECTION 03: EXPORT JOURNEY (THE CORE) */}
      <section id="journey" className="py-16 lg:py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-4">
              The Export Journey
            </h2>
            <p className="text-[#1E1E1E]/60 uppercase tracking-widest text-sm font-medium">End-To-End Supply Chain Operations</p>
          </div>

          <div className="space-y-16 lg:space-y-32">
            {EXPORT_JOURNEY.map((step, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center`}>
                  <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[500px]">
                    <Image src={step.image} alt={step.title} fill className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 shadow-sm" />
                    <div className="absolute top-6 left-6 bg-[#0B2F26] text-white px-4 py-2 font-heading text-3xl font-medium shadow-md">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <h3 className="font-heading text-4xl lg:text-5xl font-medium text-[#1E1E1E] mb-6">
                      {step.title}
                    </h3>
                    <p className="text-xl text-[#1E1E1E]/80 font-light leading-relaxed mb-8">
                      {step.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {step.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="border border-[#1E1E1E]/20 text-[#1E1E1E]/70 px-4 py-2 text-sm font-medium uppercase tracking-wider bg-white">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {step.title === "Packaging" && (
                      <div className="mt-8">
                        <Link href="/services/private-label" className="inline-flex items-center text-[#C8A96B] hover:text-[#0B2F26] font-medium tracking-wide uppercase text-sm transition-colors group">
                          Explore Private Label Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                    {step.title === "Container Planning" && (
                      <div className="mt-8">
                        <Link href="/services/mixed-container" className="inline-flex items-center text-[#C8A96B] hover:text-[#0B2F26] font-medium tracking-wide uppercase text-sm transition-colors group">
                          Explore Mixed Containers <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04: EXPORT DOCUMENTATION CENTER */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-12">
            Documentation Supporting International Trade
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DOCUMENTATION.map((doc, idx) => (
              <div key={idx} className="bg-[#F7F5F0] p-6 border border-[#1E1E1E]/10 hover:border-[#C8A96B] transition-colors">
                <FileText className="w-8 h-8 text-[#C8A96B] mb-4" />
                <h4 className="font-heading text-xl font-medium text-[#1E1E1E] mb-2">{doc.title}</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: MIXED CONTAINER SOLUTIONS */}
      <section className="py-16 lg:py-24 bg-[#0B2F26] text-white overflow-hidden relative">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-[#C8A96B] font-semibold tracking-[0.2em] uppercase text-xs mb-6 border-b border-[#C8A96B]/30 pb-2">
                Supply Chain Optimization
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-6 leading-tight">
                Consolidate Multiple Products Into One Shipment
              </h2>
              <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
                Maximize freight efficiency and reduce inventory costs. Our mixed container export solutions allow you to source Red Chilli, Turmeric, Cumin, and Coriander consolidated inside a single FCL shipment from India.
              </p>
              <Link href="/services/mixed-container" className="inline-flex items-center justify-center bg-[#C8A96B] text-[#0B2F26] px-8 py-4 font-medium tracking-wide hover:bg-[#C8A96B]/90 transition-colors">
                Explore Mixed Container Exports
              </Link>
            </div>
            
            <div className="relative h-[400px] bg-[#F7F5F0]/5 border border-white/10 p-8 flex flex-col justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <Box className="w-12 h-12 text-[#C8A96B] mb-8" />
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-heading text-2xl">Red Chilli (Stemless)</span>
                  <span className="text-white/50 font-medium">30% Volume</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-heading text-2xl">Turmeric Fingers</span>
                  <span className="text-white/50 font-medium">30% Volume</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-heading text-2xl">Cumin Seeds</span>
                  <span className="text-white/50 font-medium">20% Volume</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-heading text-2xl">Coriander Seeds</span>
                  <span className="text-white/50 font-medium">20% Volume</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: WHY BUYERS PREFER THIS PROCESS */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-12">
            Why Buyers Prefer Our Process
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Batch Traceability</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">Farm-to-port tracking ensuring total supply chain visibility.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Pre-Shipment Testing</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">Accredited laboratory clearance prior to any container sealing.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Flexible Packaging</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">Retail pouches, bulk bags, or custom private label formatting.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Documentation Support</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">Error-free paperwork ensuring frictionless destination customs clearance.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Global Logistics Network</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">Partnerships with top-tier ocean carriers for reliable transit times.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Regulatory Compliance</h4>
                <p className="text-[#1E1E1E]/70 font-light text-sm">Adherence to ASTA, ESA, FDA, and EU maximum residue limits.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 07: FAQ */}
      <section className="py-16 lg:py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[800px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-12 text-center">
            Export Operations FAQ
          </h2>
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-medium text-[#1E1E1E] mb-2">How long does the export process take?</h4>
              <p className="text-[#1E1E1E]/80 font-light leading-relaxed">The timeline varies based on product readiness, packaging requirements, and vessel availability, typically ranging from 7 to 21 days from order confirmation to vessel departure.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#1E1E1E] mb-2">Can products be mixed in one container?</h4>
              <p className="text-[#1E1E1E]/80 font-light leading-relaxed">Yes, we specialize in Mixed Container solutions, allowing buyers to consolidate multiple commodities into a single FCL shipment to optimize freight costs.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#1E1E1E] mb-2">Do you provide Certificates of Analysis?</h4>
              <p className="text-[#1E1E1E]/80 font-light leading-relaxed">Every shipment is accompanied by a batch-specific Certificate of Analysis detailing moisture, purity, and safety parameters.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#1E1E1E] mb-2">Can packaging be customized?</h4>
              <p className="text-[#1E1E1E]/80 font-light leading-relaxed">Yes, we support extensive packaging customization including Private Labeling directly from our processing facilities.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#1E1E1E] mb-2">Which countries do you export to?</h4>
              <p className="text-[#1E1E1E]/80 font-light leading-relaxed">We ship globally, with a strong focus on high-compliance markets including the USA, Europe (EU & UK), the Middle East, and Asia Pacific.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: CTA */}
      <section className="py-20 lg:py-24 bg-[#0B2F26] text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium mb-6">
            Ready To Source Directly From India?
          </h2>
          <p className="text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
            Speak with our export team to discuss products, packaging requirements and shipment planning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-quote" className="inline-flex items-center justify-center bg-[#C8A96B] text-[#0B2F26] px-8 py-4 font-medium tracking-wide w-full sm:w-auto hover:bg-[#C8A96B]/90 transition-colors">
              Request Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 font-medium tracking-wide w-full sm:w-auto hover:bg-white/5 transition-colors">
              Talk To Export Team
            </Link>
            <Link href="/services/mixed-container" className="inline-flex items-center justify-center text-white underline-offset-4 hover:text-[#C8A96B] hover:underline px-8 py-4 font-light w-full sm:w-auto transition-colors">
              Explore Mixed Containers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
