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
 * Implements Plan B (High-performance SSR Image for LCP + Client Deferred Video).
 * 
 * - Desktop: Mounts video after initial idle/paint so broadband loads it smoothly.
 * - Mobile: Mounts on first user engagement (scroll/touch/click).
 *   This guarantees a sub-1.5s Mobile LCP (Green 🟢) while ensuring mobile users
 *   still enjoy the video experience as soon as they interact with the page.
 * - Uses smooth CSS cross-fade so the video seamlessly takes over the SSR Image.
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

    let isMounted = false;

    const triggerMount = () => {
      if (isMounted) return;
      isMounted = true;
      setShouldMount(true);
      cleanup();
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const cleanup = () => {
      window.removeEventListener("scroll", triggerMount);
      window.removeEventListener("touchstart", triggerMount);
      window.removeEventListener("click", triggerMount);
    };

    if (isMobile) {
      // On mobile, mount upon first user engagement (scroll or touch)
      window.addEventListener("scroll", triggerMount, { once: true, passive: true });
      window.addEventListener("touchstart", triggerMount, { once: true, passive: true });
      window.addEventListener("click", triggerMount, { once: true, passive: true });
    } else {
      // On desktop, mount on early interaction or after main thread is comfortably idle
      window.addEventListener("scroll", triggerMount, { once: true, passive: true });
      window.addEventListener("click", triggerMount, { once: true, passive: true });
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number }).requestIdleCallback(
          triggerMount,
          { timeout: 3500 }
        );
      } else {
        setTimeout(triggerMount, 3000);
      }
    }

    return cleanup;
  }, []);

  // Robust autoplay initialization for mobile Safari and Android Chrome
  useEffect(() => {
    if (shouldMount && videoRef.current) {
      const video = videoRef.current;
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy or low power mode blocked playback; poster remains visible
        });
      }
    }
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
