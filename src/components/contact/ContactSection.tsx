"use client";

import React from "react";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-section-heading" className="bg-white border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <h2 id="contact-section-heading" className="sr-only">Contact Section</h2>
        <div className="flex flex-col lg:flex-row border-x border-border -mx-px">
          
          {/* LEFT PANEL: Headquarters & Departments (35%) */}
          <div className="w-full lg:w-[35%] lg:border-r border-border bg-[#FAFAFA]">
            <div className="p-6 lg:p-8 flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                Headquarters
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Registered Address</span>
                  <address className="not-italic font-sans text-base font-medium text-foreground leading-relaxed">
                    507, B-Block, The One Building<br />
                    5 RNT Marg, Indore<br />
                    Madhya Pradesh - 452001, India
                  </address>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Legal Identifiers</span>
                  <div className="font-sans text-sm font-medium text-foreground mt-1">GST: 27ABCDE1234F1Z5</div>
                  <div className="font-sans text-sm font-medium text-foreground mt-1">IEC: 0312345678</div>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                Departments
              </h3>

              <address className="space-y-4 not-italic">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Sales & Quotations</span>
                  <a href="mailto:info@sheeshexports.in" className="font-sans text-sm text-foreground hover:text-primary transition-colors">info@sheeshexports.in</a>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Export Documentation</span>
                  <a href="mailto:info@sheeshexports.in" className="font-sans text-sm text-foreground hover:text-primary transition-colors">info@sheeshexports.in</a>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Quality & Compliance</span>
                  <a href="mailto:info@sheeshexports.in" className="font-sans text-sm text-foreground hover:text-primary transition-colors">info@sheeshexports.in</a>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Logistics</span>
                  <a href="mailto:info@sheeshexports.in" className="font-sans text-sm text-foreground hover:text-primary transition-colors">info@sheeshexports.in</a>
                </div>
              </address>
            </div>
          </div>

          {/* RIGHT PANEL: Form (65%) */}
          <div className="w-full lg:w-[65%] p-6 lg:p-8 bg-white">
            <div className="max-w-3xl mx-auto">
              
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send An Enquiry</h3>
              
              <form className="space-y-6" aria-label="Contact form">
                <fieldset>
                  <legend className="sr-only">Contact Information</legend>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Name *</label>
                      <input id="contact-name" type="text" required className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Company *</label>
                      <input id="contact-company" type="text" required className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Email Address *</label>
                      <input id="contact-email" type="email" required className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Phone Number</label>
                      <input id="contact-phone" type="tel" className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                    </div>
                  </div>
                </fieldset>
                
                <fieldset>
                  <legend className="sr-only">Location and Subject</legend>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-country" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Country</label>
                      <input id="contact-country" type="text" className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans" />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Subject</label>
                      <select id="contact-subject" className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans">
                        <option value="General">General Enquiry</option>
                        <option value="Product">Product Information</option>
                        <option value="Documentation">Documentation / Quality</option>
                        <option value="Logistics">Shipping / Logistics</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">Message *</label>
                  <textarea id="contact-message" rows={4} required className="w-full border border-border bg-[#FAFAFA] p-4 text-base focus:border-primary focus:outline-none transition-colors font-sans resize-y min-h-[100px] placeholder:text-muted-foreground/50" placeholder="Your message..." />
                </div>
                
                <div className="pt-6 border-t border-border flex flex-col gap-4">
                  <button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground font-bold uppercase tracking-widest px-8 py-4 text-xs hover:bg-primary/90 transition-colors">
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
