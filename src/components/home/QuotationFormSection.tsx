"use client";

import React, { useState } from "react";
import { Send, Building2, Phone, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/home/AnimatedSection";

export function QuotationFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your quotation request has been received.");
    }, 1500);
  };

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Info */}
          <FadeIn>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">Request a Quote</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Get Custom Pricing for Bulk Orders
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Provide us with your requirements and our export team will get back to you within 24 hours with a competitive quote, product specifications, and shipping details.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Corporate Office</h4>
                  <p className="text-muted-foreground">MG Road, Indore, Madhya Pradesh - 452001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Call Us Directly</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email Inquiries</h4>
                  <p className="text-muted-foreground">sales@sheeshexports.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-sm h-64 relative bg-muted group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.23307525338!2d75.86718045!3d22.71694365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1a2b724cc1%3A0xc6a8274d812d45c5!2sMahatma%20Gandhi%20Rd%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale dark:invert-[.9] dark:hue-rotate-180 contrast-75 opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </FadeIn>

          {/* Right Column - Form */}
          <FadeIn delay={0.2}>
            <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">Submit Your Requirements</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <input required id="name" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</label>
                    <input id="company" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" placeholder="Global Traders LLC" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                    <input required id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp</label>
                    <input id="phone" type="tel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" placeholder="+1 234 567 890" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="product" className="text-sm font-medium text-foreground">Product of Interest *</label>
                    <select required id="product" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                      <option value="">Select a product</option>
                      <option value="spices">Spices (Cumin, Turmeric, etc.)</option>
                      <option value="grains">Grains & Rice</option>
                      <option value="oilseeds">Oil Seeds</option>
                      <option value="pulses">Pulses & Lentils</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-medium text-foreground">Estimated Quantity</label>
                    <input id="quantity" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" placeholder="e.g., 20 MT or 1 FCL" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Requirements</label>
                  <textarea id="message" rows={4} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" placeholder="Tell us about specific packaging needs, destination port, target price, etc."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={buttonVariants({ size: "lg", className: "w-full mt-4" })}
                >
                  {isSubmitting ? "Sending Request..." : (
                    <>Submit Quotation Request <Send className="ml-2 w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
