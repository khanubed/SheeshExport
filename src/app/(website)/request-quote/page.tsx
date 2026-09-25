"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Upload, Globe, Package, PhoneCall, Mail, MessageSquare } from "lucide-react";

const FAQ = [
  { q: "How quickly will I receive a quote?", a: "Our procurement team typically prepares comprehensive commercial proposals within 24 hours of receiving your RFQ." },
  { q: "Can I request multiple products?", a: "Yes, you can request a mixed container quotation. Simply detail all required commodities in the Product Requirements section." },
  { q: "Can I request private label packaging?", a: "Absolutely. Select 'Private Label' in Step 2, and our team will follow up to discuss MOQ and artwork requirements." },
  { q: "Can I share my product specification sheet?", a: "Yes, you can upload your PDF, DOCX, or COA specification sheets directly in the Product Requirements step." }
];

interface RFQFormData {
  category: string;
  products: string;
  variant: string;
  grade: string;
  productForm: string;
  notes: string;
  packagingType: string;
  packagingFormat: string;
  privateLabelOptions: string[];
  quantity: string;
  unit: string;
  containerPref: string;
  incoterm: string;
  country: string;
  port: string;
  deliveryWindow: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  whatsapp: string;
  industry: string;
}

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RFQFormData>({
    category: "",
    products: "",
    variant: "",
    grade: "",
    productForm: "",
    notes: "",
    packagingType: "",
    packagingFormat: "",
    privateLabelOptions: [],
    quantity: "",
    unit: "MT",
    containerPref: "",
    incoterm: "",
    country: "",
    port: "",
    deliveryWindow: "",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    whatsapp: "",
    industry: ""
  });

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleCheckbox = (key: 'privateLabelOptions', value: string) => {
    setFormData(prev => {
      const arr = prev[key] as string[];
      if (arr.includes(value)) {
        return { ...prev, [key]: arr.filter(i => i !== value) };
      } else {
        return { ...prev, [key]: [...arr, value] };
      }
    });
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* HERO SECTION */}
      <section aria-labelledby="hero-title" className="bg-primary text-primary-foreground pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary/30 pb-2">
                Request A Quote
              </span>
              <h1 id="hero-title" className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-8">
                Let's Build Your Global<br/>Supply Plan
              </h1>
              <p className="text-xl text-primary-foreground/80 font-sans max-w-lg font-light leading-relaxed font-sans mb-10">
                Tell us what products, packaging, volumes and destinations you require. Our export specialists will prepare a customized commercial proposal.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-primary-foreground/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-4" /> 50+ Countries Served
                </li>
                <li className="flex items-center text-primary-foreground/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-4" /> Export Documentation Support
                </li>
                <li className="flex items-center text-primary-foreground/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-4" /> Flexible Packaging
                </li>
                <li className="flex items-center text-primary-foreground/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-4" /> Multi Commodity Shipments
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block">
              <Image src="/images/about/infra-warehouse.jpg" alt="Export operations and container loading" fill className="object-cover grayscale-[20%]" priority />
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-STEP RFQ WIZARD */}
      <section aria-labelledby="rfq-form" className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px]">
          
          {/* Progress Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 border-b border-border pb-8">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <div key={num} className={`flex items-center gap-3 ${step === num ? 'text-primary' : step > num ? 'text-secondary' : 'text-muted-foreground/30'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm border ${step === num ? 'bg-primary text-primary-foreground border-[#0B2F26]' : step > num ? 'bg-secondary text-primary border-secondary' : 'border-input'}`}>
                  {step > num ? <CheckCircle2 className="w-4 h-4" /> : `0${num}`}
                </div>
                <span className="hidden sm:block font-heading uppercase tracking-widest text-xs font-semibold">
                  {num === 1 ? 'Products' : num === 2 ? 'Packaging' : num === 3 ? 'Logistics' : num === 4 ? 'Business' : 'Review'}
                </span>
              </div>
            ))}
          </div>

          {/* FORM STEPS */}
          <div className="bg-card text-card-foreground border border-border rounded-md p-8 lg:p-12 shadow-sm">
            
            {/* STEP 1: PRODUCTS */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl font-medium text-primary mb-8">01. Product Requirements</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Product Category</label>
                    <select className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.category} onChange={e => updateForm('category', e.target.value)}>
                      <option value="">Select Category...</option>
                      <option value="Whole Spices">Whole Spices</option>
                      <option value="Ground Spices">Ground Spices</option>
                      <option value="Oil Seeds">Oil Seeds</option>
                      <option value="Pulses">Pulses & Grains</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Products Required</label>
                    <input type="text" placeholder="e.g. Red Chilli, Turmeric, Cumin" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.products} onChange={e => updateForm('products', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Product Form</label>
                    <select className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.productForm} onChange={e => updateForm('productForm', e.target.value)}>
                      <option value="">Select Form...</option>
                      <option value="Whole">Whole</option>
                      <option value="Ground/Powder">Ground / Powder</option>
                      <option value="Seeds">Seeds</option>
                      <option value="Customized">Customized Form</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Target Grade</label>
                    <input type="text" placeholder="e.g. Teja S17, Erode ASTA" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.grade} onChange={e => updateForm('grade', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Additional Specifications & Notes</label>
                    <textarea rows={4} placeholder="Describe ASTA levels, moisture limits, quality requirements, etc." className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans resize-none"
                      value={formData.notes} onChange={e => updateForm('notes', e.target.value)} />
                  </div>
                  <div className="md:col-span-2 border-2 border-dashed border-input bg-card p-8 text-center hover:border-secondary transition-colors cursor-pointer group">
                    <Upload className="w-8 h-8 text-muted-foreground/80 mx-auto mb-4 group-hover:text-secondary transition-colors" />
                    <span className="block font-medium text-foreground mb-1">Upload Product Specification</span>
                    <span className="block text-sm text-muted-foreground font-sans">Support PDF, DOCX, Images, COA (Max 10MB)</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PACKAGING */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl font-medium text-primary mb-8">02. Packaging Requirements</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-4">Packaging Type</label>
                    <div className="space-y-3">
                      {["Raw Commodity Supply", "Private Label Packaging", "Sheesh Export Packaging"].map(t => (
                        <label key={t} className={`block border p-4 cursor-pointer transition-colors ${formData.packagingType === t ? 'border-primary bg-primary/5 text-primary font-medium' : 'border-input bg-card text-muted-foreground font-sans hover:border-secondary'}`}>
                          <input type="radio" name="packType" className="hidden" value={t} onChange={() => updateForm('packagingType', t)} />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-4">Packaging Format</label>
                    <div className="space-y-3">
                      {["25kg PP Bag", "50kg Jute Bag", "Stand Up Pouch", "PET Jar", "Glass Jar", "Tin Container"].map(t => (
                        <label key={t} className={`block border p-4 cursor-pointer transition-colors ${formData.packagingFormat === t ? 'border-primary bg-primary/5 text-primary font-medium' : 'border-input bg-card text-muted-foreground font-sans hover:border-secondary'}`}>
                          <input type="radio" name="packFormat" className="hidden" value={t} onChange={() => updateForm('packagingFormat', t)} />
                          {t}
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.packagingType === "Private Label Packaging" && (
                    <div className="md:col-span-2 border-t border-border pt-8 mt-4">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-4">Private Label Options</label>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {["Need Branding?", "Need Barcode?", "Need FDA Label?", "Need EU Label?"].map(t => (
                          <label key={t} className="flex items-center gap-3 border border-input bg-card p-4 cursor-pointer hover:border-secondary transition-colors">
                            <input type="checkbox" className="w-5 h-5 accent-primary" 
                              checked={formData.privateLabelOptions.includes(t)}
                              onChange={() => handleCheckbox('privateLabelOptions', t)} />
                            <span className="text-sm font-medium">{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: LOGISTICS */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl font-medium text-primary mb-8">03. Shipping & Logistics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Quantity Required</label>
                    <div className="flex">
                      <input type="number" placeholder="e.g. 14" className="w-2/3 rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                        value={formData.quantity} onChange={e => updateForm('quantity', e.target.value)} />
                      <select className="w-1/3 rounded-r-md bg-card border border-input border-input p-4 outline-none focus:border-secondary transition-colors font-medium"
                        value={formData.unit} onChange={e => updateForm('unit', e.target.value)}>
                        <option value="MT">MT</option>
                        <option value="KG">KG</option>
                        <option value="Containers">Containers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Container Preference</label>
                    <select className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.containerPref} onChange={e => updateForm('containerPref', e.target.value)}>
                      <option value="">Select Container...</option>
                      <option value="20FT">20FT</option>
                      <option value="40FT HC">40FT HC</option>
                      <option value="FCL">Full Container Load (FCL)</option>
                      <option value="LCL">Less Container Load (LCL)</option>
                      <option value="Mixed Container">Mixed Container</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Incoterms</label>
                    <select className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.incoterm} onChange={e => updateForm('incoterm', e.target.value)}>
                      <option value="">Select Incoterm...</option>
                      <option value="FOB">FOB (Free On Board)</option>
                      <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                      <option value="CNF">CNF (Cost & Freight)</option>
                      <option value="EXW">EXW (Ex Works)</option>
                      <option value="DAP">DAP (Delivered at Place)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Expected Delivery Window</label>
                    <input type="text" placeholder="e.g. November 2023" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.deliveryWindow} onChange={e => updateForm('deliveryWindow', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Destination Country</label>
                    <input type="text" placeholder="e.g. UAE, Germany, USA" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.country} onChange={e => updateForm('country', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Destination Port</label>
                    <input type="text" placeholder="e.g. Jebel Ali, Hamburg, Los Angeles" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.port} onChange={e => updateForm('port', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: BUSINESS DETAILS */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl font-medium text-primary mb-8">04. Business Information</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Company Name *</label>
                    <input type="text" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.companyName} onChange={e => updateForm('companyName', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Contact Person *</label>
                    <input type="text" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.contactPerson} onChange={e => updateForm('contactPerson', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Corporate Email *</label>
                    <input type="email" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.email} onChange={e => updateForm('email', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Phone Number</label>
                    <input type="tel" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.phone} onChange={e => updateForm('phone', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">WhatsApp Number (Optional)</label>
                    <input type="tel" className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.whatsapp} onChange={e => updateForm('whatsapp', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Industry Type</label>
                    <select className="w-full rounded-md bg-background border border-input p-4 outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors font-sans"
                      value={formData.industry} onChange={e => updateForm('industry', e.target.value)}>
                      <option value="">Select Industry...</option>
                      <option value="Importer">Importer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Wholesaler">Wholesaler</option>
                      <option value="Food Processor">Food Processor</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Retail Brand">Retail Brand</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW */}
            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl font-medium text-primary mb-8">05. Commercial Review</h2>
                
                <div className="bg-card border border-input p-8 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-y-8 gap-x-12">
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Products</span>
                      <p className="font-medium text-lg text-primary">{formData.products || 'Not Specified'}</p>
                      <p className="text-sm text-muted-foreground font-sans mt-1">{formData.productForm || 'Any Form'} • {formData.grade || 'Any Grade'}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Packaging</span>
                      <p className="font-medium text-lg text-primary">{formData.packagingFormat || 'Not Specified'}</p>
                      <p className="text-sm text-muted-foreground font-sans mt-1">{formData.packagingType || 'Standard Packaging'}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Shipment</span>
                      <p className="font-medium text-lg text-primary">{formData.quantity ? `${formData.quantity} ${formData.unit}` : 'Not Specified'}</p>
                      <p className="text-sm text-muted-foreground font-sans mt-1">{formData.containerPref || 'Any Container'} • {formData.incoterm || 'FOB'}</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Destination</span>
                      <p className="font-medium text-lg text-primary">{formData.port || formData.country ? `${formData.port}, ${formData.country}` : 'Not Specified'}</p>
                    </div>
                    <div className="sm:col-span-2 pt-6 border-t border-border">
                      <span className="block text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans mb-2">Buyer Profile</span>
                      <p className="font-medium text-lg text-primary">{formData.companyName || 'Unknown Company'}</p>
                      <p className="text-sm text-muted-foreground font-sans mt-1">{formData.contactPerson} • {formData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              {step > 1 ? (
                <button onClick={prevStep} className="px-6 py-3 font-medium text-muted-foreground font-sans hover:text-primary transition-colors uppercase tracking-widest text-sm">
                  Go Back
                </button>
              ) : <div />}
              
              {step < 5 ? (
                <button onClick={nextStep} className="flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
                  Continue To Next Step <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              ) : (
                <button className="flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-8 py-4 font-sans font-medium tracking-wide hover:bg-secondary/90 transition-colors">
                  Request Commercial Proposal
                </button>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* ALTERNATIVE CONTACT BLOCK */}
      <section aria-labelledby="assist-title" className="py-12 lg:py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 id="assist-title" className="font-heading text-4xl font-medium text-primary mb-12 text-center">Need Immediate Assistance?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border bg-card p-8 hover:border-secondary transition-colors text-center group">
              <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">WhatsApp</h4>
              <p className="text-muted-foreground font-sans text-sm mb-4">Fastest response for urgent queries.</p>
              <a href="#" className="font-medium text-primary hover:text-secondary underline underline-offset-4">+91 98765 43210</a>
            </div>
            <div className="border border-border bg-card p-8 hover:border-secondary transition-colors text-center group">
              <PhoneCall className="w-8 h-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Call Export Team</h4>
              <p className="text-muted-foreground font-sans text-sm mb-4">Direct line to procurement specialists.</p>
              <a href="#" className="font-medium text-primary hover:text-secondary underline underline-offset-4">+91 12345 67890</a>
            </div>
            <div className="border border-border bg-card p-8 hover:border-secondary transition-colors text-center group">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Email Procurement Desk</h4>
              <p className="text-muted-foreground font-sans text-sm mb-4">For detailed RFPs and tenders.</p>
              <a href="#" className="font-medium text-primary hover:text-secondary underline underline-offset-4">export@sheeshexports.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUYERS REQUEST QUOTES */}
      <section aria-labelledby="why-title" className="py-12 lg:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 id="why-title" className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Why Partner With Sheesh Exports
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <div className="border-t border-secondary pt-4">
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Direct Sourcing</h4>
              <p className="text-muted-foreground font-sans font-light text-sm">Origin-based procurement bypassing intermediaries for maximum cost efficiency.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Export Expertise</h4>
              <p className="text-muted-foreground font-sans font-light text-sm">Deep understanding of ASTA, ESA, and FDA regulatory frameworks.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Flexible Packaging</h4>
              <p className="text-muted-foreground font-sans font-light text-sm">From 50kg bulk jute bags to shelf-ready private label retail pouches.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Mixed Container Solutions</h4>
              <p className="text-muted-foreground font-sans font-light text-sm">Consolidate multiple commodities into a single cost-effective FCL shipment.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Documentation Support</h4>
              <p className="text-muted-foreground font-sans font-light text-sm">Flawless commercial invoices, Certificates of Origin, and COAs.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h4 className="font-heading text-2xl font-medium text-foreground mb-2">Global Logistics</h4>
              <p className="text-muted-foreground font-sans font-light text-sm">Strong ocean freight networks ensuring timely delivery worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="assist-title" className="py-12 lg:py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[800px]">
          <h2 id="faq-title" className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12 text-center">
            Quotation FAQ
          </h2>
          <div className="space-y-10">
            {FAQ.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-medium text-foreground mb-2">{item.q}</h4>
                <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
