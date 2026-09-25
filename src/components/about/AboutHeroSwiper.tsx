"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const IMAGES = [
  "/images/about/hero-processing.jpg",
  "/images/about/hero-warehouse.jpg",
  "/images/about/hero-loading.jpg",
];

export function AboutHeroSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#0B3B24]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES[currentIndex]}
            alt="Sheesh Exports Facilities"
            fill
            className="object-cover opacity-60 mix-blend-multiply"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B24]/90 via-[#0B3B24]/40 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
