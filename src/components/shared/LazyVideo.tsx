"use client";

import React, { useEffect, useRef, useState } from "react";

export interface LazyVideoProps {
  /** Source URL of the video file (e.g. /masala.webm) */
  src: string;
  /** Static poster image displayed before the video enters viewport */
  poster: string;
  /** MIME type of the video stream (defaults to video/webm) */
  type?: string;
  /** CSS classes applied to both the poster image and the video */
  className?: string;
  /** CSS classes applied to the outer container */
  containerClassName?: string;
  /** Accessible alt text for the poster image */
  alt?: string;
  /** Whether the media should be hidden from accessibility trees */
  ariaHidden?: boolean;
  /** Distance before viewport to start loading the video (default: 350px) */
  rootMargin?: string;
}

/**
 * LazyVideo
 * 
 * Defers video streaming until the section is near the viewport (IntersectionObserver).
 * Renders the lightweight static poster initially, completely eliminating
 * video download contention on page load.
 */
export function LazyVideo({
  src,
  poster,
  type = "video/webm",
  className = "",
  containerClassName = "relative w-full h-full",
  alt = "",
  ariaHidden = true,
  rootMargin = "350px",
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  // Ensure autoplay triggers reliably on mobile browsers when mounted
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled silently: browser low-power or autoplay policy prevented playback
        });
      }
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className={containerClassName}>
      {/* Poster Image: Displays immediately without streaming video */}
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        decoding="async"
        aria-hidden={ariaHidden}
        className={`absolute inset-0 ${className}`}
        style={{
          opacity: isPlaying ? 0 : undefined,
          transition: "opacity 0.6s ease-out",
          pointerEvents: isPlaying ? "none" : undefined,
        }}
      />

      {/* Video Stream: Mounted only when approaching the viewport */}
      {isInView && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden={ariaHidden}
          poster={poster}
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 ${className}`}
        >
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
