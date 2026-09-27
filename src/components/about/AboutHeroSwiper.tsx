"use client";

import React from "react";

export function AboutHeroSwiper() {
  return (
    <div className="absolute inset-0 z-0 bg-primary">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/about/about-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent " />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
