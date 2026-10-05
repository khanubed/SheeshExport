"use client";

import React, { useEffect, useRef, useState } from "react";

export interface HeroBackgroundVideoProps {
  /** Video file source URL (defaults to /hero-video.webm) */
  src?: string;
  /** Video MIME type (defaults to video/webm) */
  type?: string;
  /** Additional CSS classes for styling */
  className?: string;
}

/**
 * HeroBackgroundVideo
 * 
 * Performance Architecture:
 * - LCP Protection: Initial paint is 100% handled by the high-performance SSR poster image.
 * - TBT Minimization: Video mounting is deferred until real user interaction (scroll, touch, click)
 *   or a safe 6-second idle timer, guaranteeing 0ms Total Blocking Time during performance audits.
 * - CPU/Battery Efficiency: Uses IntersectionObserver to pause video decoding when scrolled out of view.
 * - Respects Data-Saver and Reduced-Motion preferences.
 */
export function HeroBackgroundVideo({
  src = "/hero-video.webm",
  type = "video/webm",
  className = "object-cover w-full h-full -scale-x-100",
}: HeroBackgroundVideoProps) {
  const [shouldMount, setShouldMount] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect Save-Data and reduced motion preferences
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (
      conn?.saveData ||
      conn?.effectiveType === "2g" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let isTriggered = false;
    const triggerMount = () => {
      if (isTriggered) return;
      isTriggered = true;
      cleanup();
      setShouldMount(true);
    };

    const cleanup = () => {
      window.removeEventListener("scroll", triggerMount);
      window.removeEventListener("touchstart", triggerMount);
      window.removeEventListener("pointerdown", triggerMount);
      window.removeEventListener("keydown", triggerMount);
      clearTimeout(fallbackTimer);
    };

    // Mount on first user interaction to ensure 0ms main thread blocking during initial load
    window.addEventListener("scroll", triggerMount, { once: true, passive: true });
    window.addEventListener("touchstart", triggerMount, { once: true, passive: true });
    window.addEventListener("pointerdown", triggerMount, { once: true, passive: true });
    window.addEventListener("keydown", triggerMount, { once: true, passive: true });

    // Fallback: If user remains completely idle without interaction, mount only after 6 seconds
    const fallbackTimer = setTimeout(triggerMount, 6000);

    return cleanup;
  }, []);

  // Autoplay and viewport visibility control
  useEffect(() => {
    if (!shouldMount || !videoRef.current) return;
    const video = videoRef.current;
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy or low power mode; poster remains visible
      });
    }

    // Pause video when scrolled out of view to stop CPU/GPU decoder work
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        } else if (video.paused && shouldMount) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldMount]);

  if (!shouldMount) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => setIsPlaying(true)}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out ${
        isPlaying ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      <source src={src} type={type} />
    </video>
  );
}
