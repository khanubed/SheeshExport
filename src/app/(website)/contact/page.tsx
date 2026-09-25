import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageSquare, Clock, Globe, ArrowRight, Paperclip, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Sheesh Exports India",
  description:
    "Contact Sheesh Exports for pricing, product information, and export operations support. We supply global food buyers directly from India.",
  pathname: "/contact",
});

const FAQ = [
  { q: "How quickly do you respond?", a: "Our procurement desk typically responds to all inquiries within 24 hours." },
  { q: "Can I request samples?", a: "Yes, we dispatch commercial samples via DHL/FedEx globally for verified buyers." },
  { q: "Do you provide private labeling?", a: "Yes, we offer complete OEM private label manufacturing and packing services." },
  { q: "Which countries do you export to?", a: "We export globally, with primary markets in North America, Europe, the Middle East, and Asia Pacific." },
  { q: "Can I request compliance documents?", a: "Yes, our Quality team can provide relevant COAs, FDA registrations, and ISO certifications upon request." }
];

export default function ContactPage() {
  return (
    <main className="bg-[#F7F5F0] min-h-screen text-[#1E1E1E] font-sans selection:bg-[#0B2F26] selection:text-white">
      
      {/* SECTION 01: HERO */}
      <section className="bg-[#0B2F26] text-white pt-20 pb-0 lg:pt-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div className="pb-16 lg:pb-24">
              <span className="inline-block text-[#C8A96B] font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-[#C8A96B]/30 pb-2">
                Contact Sheesh Exports
              </span>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-8">
                Talk To Our Export Specialists
              </h1>
              <p className="text-xl text-white/80 max-w-lg font-light leading-relaxed">
                Whether you need pricing, product information, export documentation support or shipment planning, our team is ready to help.
              </p>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block">
              <Image src="/images/about/factory-processing.jpg" alt="Trade logistics and port operations" fill className="object-cover grayscale-[20%]" priority />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: CONTACT CHANNELS */}
      <section className="bg-[#1E1E1E] text-white border-t border-white/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="p-8 hover:bg-white/5 transition-colors">
              <Phone className="w-8 h-8 text-[#C8A96B] mb-4" />
              <h4 className="font-heading text-xl font-medium mb-1">Call Us</h4>
              <p className="text-white/60 font-light text-sm mb-4">Working Hours: 9 AM - 6 PM (IST)</p>
              <a href="tel:+919876543210" className="text-lg font-medium hover:text-[#C8A96B] transition-colors">+91 98765 43210</a>
            </div>
            <div className="p-8 hover:bg-white/5 transition-colors">
              <Mail className="w-8 h-8 text-[#C8A96B] mb-4" />
              <h4 className="font-heading text-xl font-medium mb-1">Email</h4>
              <p className="text-white/60 font-light text-sm mb-4">Procurement & General Enquiries</p>
              <a href="mailto:export@sheeshexports.com" className="text-lg font-medium hover:text-[#C8A96B] transition-colors">export@sheeshexports.com</a>
            </div>
            <div className="p-8 hover:bg-white/5 transition-colors">
              <MessageSquare className="w-8 h-8 text-[#C8A96B] mb-4" />
              <h4 className="font-heading text-xl font-medium mb-1">WhatsApp</h4>
              <p className="text-white/60 font-light text-sm mb-4">Direct procurement support</p>
              <a href="#" className="text-lg font-medium hover:text-[#C8A96B] transition-colors">Chat with Export Team</a>
            </div>
            <div className="p-8 hover:bg-white/5 transition-colors">
              <Clock className="w-8 h-8 text-[#C8A96B] mb-4" />
              <h4 className="font-heading text-xl font-medium mb-1">Response Time</h4>
              <p className="text-white/60 font-light text-sm mb-4">Global Support</p>
              <span className="text-lg font-medium">Typically within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: HEADQUARTERS & CONTACT FORM */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Headquarters Info */}
            <div>
              <span className="inline-block text-[#C8A96B] font-semibold tracking-[0.2em] uppercase text-xs mb-6">Global Headquarters</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-10">Sheesh Exports</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#C8A96B] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-xl font-medium text-[#1E1E1E] mb-2">Registered Address</h4>
                    <p className="text-[#1E1E1E]/70 font-light leading-relaxed">
                      123 Trade Center, Export Zone<br />
                      Guntur, Andhra Pradesh - 522001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-[#1E1E1E]/10 pt-8 flex gap-12">
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/50 mb-1">GST Number</span>
                    <span className="font-medium text-[#1E1E1E]">27ABCDE1234F1Z5</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/50 mb-1">IEC Code</span>
                    <span className="font-medium text-[#1E1E1E]">0312345678</span>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-[300px] bg-[#1E1E1E]/5 border border-[#1E1E1E]/10 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122588.42398592534!2d80.36675231713063!3d16.323565582313674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(1) contrast(1.2)" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="bg-[#F7F5F0] border border-[#1E1E1E]/10 p-8 lg:p-12">
              <h3 className="font-heading text-3xl font-medium text-[#0B2F26] mb-8">Send An Enquiry</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Name *</label>
                    <input type="text" className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Company *</label>
                    <input type="text" className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Email Address *</label>
                    <input type="email" className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Country</label>
                    <input type="text" className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Subject</label>
                    <select className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors">
                      <option value="General">General Enquiry</option>
                      <option value="Product">Product Information</option>
                      <option value="Documentation">Documentation / Quality</option>
                      <option value="Logistics">Shipping / Logistics</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1E1E1E]/60 mb-2">Message *</label>
                  <textarea rows={5} className="w-full bg-white border border-[#1E1E1E]/20 p-4 outline-none focus:border-[#C8A96B] transition-colors resize-none" />
                </div>
                
                <div className="border border-dashed border-[#1E1E1E]/20 bg-white p-6 flex items-center justify-center cursor-pointer hover:border-[#C8A96B] transition-colors group">
                  <Paperclip className="w-5 h-5 text-[#1E1E1E]/40 mr-3 group-hover:text-[#C8A96B]" />
                  <span className="text-sm font-medium text-[#1E1E1E]/70 group-hover:text-[#1E1E1E]">Attach Documents (Optional)</span>
                </div>
                
                <button type="button" className="w-full flex items-center justify-center bg-[#0B2F26] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#0B2F26]/90 transition-colors">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: DEPARTMENTS DIRECTORY */}
      <section className="py-12 lg:py-16 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-16 text-center">
            Department Directory
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Sales & Quotations</h4>
              <p className="text-sm text-[#1E1E1E]/60 mb-6">Product pricing and contract negotiation.</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Email:</span> sales@sheeshexports.com</p>
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Phone:</span> +91 98765 43211</p>
              </div>
            </div>

            <div className="bg-white border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Export Documentation</h4>
              <p className="text-sm text-[#1E1E1E]/60 mb-6">Shipping documents, customs and LC support.</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Email:</span> docs@sheeshexports.com</p>
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Phone:</span> +91 98765 43212</p>
              </div>
            </div>

            <div className="bg-white border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Private Label</h4>
              <p className="text-sm text-[#1E1E1E]/60 mb-6">OEM enquiries and packaging solutions.</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Email:</span> oem@sheeshexports.com</p>
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Phone:</span> +91 98765 43213</p>
              </div>
            </div>

            <div className="bg-white border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Quality & Compliance</h4>
              <p className="text-sm text-[#1E1E1E]/60 mb-6">Lab reports, specs and certification queries.</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Email:</span> qa@sheeshexports.com</p>
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Phone:</span> +91 98765 43214</p>
              </div>
            </div>

            <div className="bg-white border border-[#1E1E1E]/10 p-8 hover:border-[#C8A96B] transition-colors">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Logistics</h4>
              <p className="text-sm text-[#1E1E1E]/60 mb-6">Container planning and vessel schedules.</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Email:</span> logistics@sheeshexports.com</p>
                <p><span className="font-medium text-[#1E1E1E]/50 w-24 inline-block">Phone:</span> +91 98765 43215</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: GLOBAL COVERAGE */}
      <section className="py-12 lg:py-16 bg-[#0B2F26] text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-6">Global Business Coverage</h2>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-10">
                Supporting importers, distributors, retail chains, and food manufacturers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-y-4 font-medium">
                <div className="flex items-center"><Globe className="w-5 h-5 text-[#C8A96B] mr-3" /> North America</div>
                <div className="flex items-center"><Globe className="w-5 h-5 text-[#C8A96B] mr-3" /> Europe</div>
                <div className="flex items-center"><Globe className="w-5 h-5 text-[#C8A96B] mr-3" /> Middle East</div>
                <div className="flex items-center"><Globe className="w-5 h-5 text-[#C8A96B] mr-3" /> Asia Pacific</div>
                <div className="flex items-center"><Globe className="w-5 h-5 text-[#C8A96B] mr-3" /> Africa</div>
              </div>
            </div>
            
            <div className="relative h-[300px] lg:h-[400px] border border-white/10 bg-white/5 flex items-center justify-center p-8 text-center">
              <Globe className="w-32 h-32 text-white/10 absolute" />
              <p className="text-2xl font-heading font-medium text-white/90 relative z-10">
                Shipping globally from<br/>Nhava Sheva, Mundra, Chennai,<br/>and Krishnapatnam ports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#1E1E1E]/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-16 text-center">
            Why Work With Sheesh Exports
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <div className="border-t border-[#C8A96B] pt-4">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Direct Farm Sourcing</h4>
              <p className="text-[#1E1E1E]/70 font-light text-sm">Bypassing middle-men for guaranteed traceability and competitive FOB pricing.</p>
            </div>
            <div className="border-t border-[#C8A96B] pt-4">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Export Compliance Expertise</h4>
              <p className="text-[#1E1E1E]/70 font-light text-sm">Deep regulatory knowledge of ASTA, ESA, FDA, and major global food safety laws.</p>
            </div>
            <div className="border-t border-[#C8A96B] pt-4">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Flexible Packaging</h4>
              <p className="text-[#1E1E1E]/70 font-light text-sm">Capabilities ranging from 50kg industrial sacks to 100g retail-ready private label jars.</p>
            </div>
            <div className="border-t border-[#C8A96B] pt-4">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Global Logistics Network</h4>
              <p className="text-[#1E1E1E]/70 font-light text-sm">Partnerships with top tier ocean carriers securing reliable container availability.</p>
            </div>
            <div className="border-t border-[#C8A96B] pt-4">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Mixed Container Solutions</h4>
              <p className="text-[#1E1E1E]/70 font-light text-sm">Consolidate multiple commodities into a single cost-effective FCL shipment.</p>
            </div>
            <div className="border-t border-[#C8A96B] pt-4">
              <h4 className="font-heading text-2xl font-medium text-[#1E1E1E] mb-2">Dedicated Support</h4>
              <p className="text-[#1E1E1E]/70 font-light text-sm">Single point of contact from initial quotation through to destination port delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[800px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#0B2F26] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            {FAQ.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-medium text-[#1E1E1E] mb-2">{item.q}</h4>
                <p className="text-[#1E1E1E]/80 font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 lg:py-16 bg-[#0B2F26] text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium mb-8">
            Ready To Start Your Import Journey?
          </h2>
          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
            <Link href="/request-quote" className="inline-flex items-center justify-center bg-[#C8A96B] text-[#0B2F26] px-10 py-5 font-medium tracking-wide w-full sm:w-auto hover:bg-[#C8A96B]/90 transition-colors">
              Request Quote
            </Link>
            <Link href="#top" className="inline-flex items-center justify-center border border-white/30 text-white px-10 py-5 font-medium tracking-wide w-full sm:w-auto hover:bg-white/5 transition-colors">
              Talk To Export Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
