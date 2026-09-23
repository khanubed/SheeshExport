"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Star, BadgeCheck, ChevronRight, ChevronLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import "swiper/css";

const REVIEWS = [
  {
    name: "BeccaJane",
    time: "1 year ago",
    text: "I spoke to a lovely gentleman named Aman who was incredibly helpful and knowledgeable. I would highly recommend this company for anyone looking for premium exports.",
    initial: "B",
    bg: "bg-pink-200 text-pink-700",
  },
  {
    name: "Saurabh Katake",
    time: "1 year ago",
    text: "Excellent service and top quality spices. Highly professional and reliable team. The shipment arrived perfectly on time without any issues.",
    initial: "S",
    bg: "bg-indigo-200 text-indigo-700",
  },
  {
    name: "jeel Patel",
    time: "1 year ago",
    text: "Best selling Distrubiter jeera & souff. The quality of the seeds is unmatched compared to other suppliers we have tried.",
    initial: "j",
    bg: "bg-blue-600 text-white",
  },
  {
    name: "Amit Sharma",
    time: "6 months ago",
    text: "Outstanding quality control and transparent pricing. Sheesh Exports has become our primary supplier for all agro commodities.",
    initial: "A",
    bg: "bg-green-200 text-green-700",
  },
  {
    name: "Sarah Williams",
    time: "2 months ago",
    text: "Very responsive communication and the packaging was excellent. The spices retained their full aroma upon arrival.",
    initial: "S",
    bg: "bg-purple-200 text-purple-700",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">Testimonials</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Global Buyers Say
          </h2>
          <p className="text-muted-foreground">
            Our clients value us for consistent quality, timely shipment, transparent pricing, and responsive communication.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-stretch">
          {/* Company Summary Column */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left bg-transparent lg:bg-card p-2 lg:p-6 rounded-2xl lg:border lg:border-border lg:shadow-sm">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-border p-1">
              <Image src="/images/sheesh-logo.jpeg" alt="Sheesh Exports" width={60} height={60} className="object-contain rounded-full" />
            </div>
            <h3 className="font-bold text-lg text-foreground leading-tight mb-2">
              Sheesh Exports - Premium Spices Manufacturer and Exporter
            </h3>
            <div className="flex items-center gap-1 mb-1">
              <span className="font-bold text-lg mr-1 text-foreground">5.0</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-6">61 Google reviews</p>
            <a href="#" className={buttonVariants({ variant: "outline", className: "w-full rounded-full shadow-sm" })}>
              Write a review
            </a>
          </div>

          {/* Swiper Column */}
          <div className="lg:col-span-3 relative px-0 sm:px-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              loop={true}
              autoplay={{ delay: 6000, disableOnInteraction: true }}
              className="py-4 px-2"
            >
              {REVIEWS.map((review, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="bg-slate-50 dark:bg-card border border-border/50 rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${review.bg}`}>
                          {review.initial}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-foreground">{review.name}</div>
                          <div className="text-xs text-muted-foreground">{review.time}</div>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                      <BadgeCheck className="w-4 h-4 text-blue-500 ml-1" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed line-clamp-4">
                      {review.text}
                    </p>
                    <button className="text-xs text-muted-foreground hover:text-primary mt-2 text-left w-fit font-medium">
                      Read more
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full shadow-sm flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground z-10 transition-colors hidden sm:flex">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full shadow-sm flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground z-10 transition-colors hidden sm:flex">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
