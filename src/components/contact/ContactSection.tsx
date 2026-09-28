"use client";

import React from "react";

export function ContactSection() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="flex flex-col lg:flex-row border-x border-border -mx-px">
          
          {/* LEFT PANEL: Headquarters & Departments (35%) */}
          <div className="w-full lg:w-[35%] lg:border-r border-border bg-[#FAFAFA]">
            <div className="p-8 lg:p-12 flex flex-col">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border">
                Headquarters
              </h3>
              
              <div className="space-y-6 mb-12">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Registered Address</span>
                  <div className="font-sans text-base font-medium text-foreground leading-relaxed">
                    123 Trade Center, Export Zone<br />
                    Guntur, Andhra Pradesh - 522001<br />
                    India
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Legal Identifiers</span>
                  <div className="font-sans text-sm font-medium text-foreground mt-1">GST: 27ABCDE1234F1Z5</div>
                  <div className="font-sans text-sm font-medium text-foreground mt-1">IEC: 0312345678</div>
                </div>
              </div>

              <h3 className="font-heading text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border">
                Departments
              </h3>

              <div className="space-y-8">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Sales & Quotations</span>
                  <div className="font-sans text-sm text-foreground">sales@sheeshexports.com</div>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Export Documentation</span>
                  <div className="font-sans text-sm text-foreground">docs@sheeshexports.com</div>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Quality & Compliance</span>
                  <div className="font-sans text-sm text-foreground">qa@sheeshexports.com</div>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Logistics</span>
                  <div className="font-sans text-sm text-foreground">logistics@sheeshexports.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Form (65%) */}
          <div className="w-full lg:w-[65%] p-6 lg:p-12 xl:p-16 bg-white">
            <div className="max-w-3xl mx-auto">
              
              <h2 className="font-heading text-3xl font-bold text-foreground mb-12">Send An Enquiry</h2>
              
              <form className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Name *</label>
                    <input type="text" className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Company *</label>
                    <input type="text" className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Email Address *</label>
                    <input type="email" className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Phone Number</label>
                    <input type="tel" className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Country</label>
                    <input type="text" className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Subject</label>
                    <select className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none font-sans">
                      <option value="General">General Enquiry</option>
                      <option value="Product">Product Information</option>
                      <option value="Documentation">Documentation / Quality</option>
                      <option value="Logistics">Shipping / Logistics</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Message *</label>
                  <textarea rows={6} className="w-full border border-border bg-[#FAFAFA] p-6 text-base focus:border-primary focus:outline-none transition-colors font-sans resize-y min-h-[150px] placeholder:text-muted-foreground/50" />
                </div>
                
                <div className="pt-8 border-t border-border flex flex-col gap-4">
                  <button type="button" className="w-full sm:w-auto bg-primary text-primary-foreground font-bold uppercase tracking-widest px-10 py-5 text-sm hover:bg-primary/90 transition-colors">
                    Send Enquiry
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
