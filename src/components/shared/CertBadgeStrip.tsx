import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface Certification {
  id: string
  name: string
  imageUrl: string
}

interface CertBadgeStripProps extends React.HTMLAttributes<HTMLDivElement> {
  certifications: Certification[]
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
}

export function CertBadgeStrip({
  certifications,
  size = "md",
  className,
  ...props
}: CertBadgeStripProps) {
  if (!certifications || certifications.length === 0) return null

  return (
    <div
      className={cn("flex flex-wrap items-center gap-6", className)}
      {...props}
    >
      {certifications.map((cert) => (
        <div 
          key={cert.id} 
          className={cn("relative w-auto flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100", sizeClasses[size])}
          title={cert.name}
        >
          <Image
            src={cert.imageUrl}
            alt={`${cert.name} Certification`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}
