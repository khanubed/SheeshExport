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
        <source src="/images/about/ABOUT-HERO.webm" type="video/webm" />
      </video>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent " /> */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
