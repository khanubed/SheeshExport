import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CountryFlagProps extends React.HTMLAttributes<HTMLDivElement> {
  countryCode: string
  size?: "sm" | "md" | "lg"
  alt?: string
}

const sizeConfig = {
  sm: { width: 20, height: 15, urlWidth: "w20" },
  md: { width: 32, height: 24, urlWidth: "w40" },
  lg: { width: 64, height: 48, urlWidth: "w80" },
}

export function CountryFlag({
  countryCode,
  size = "md",
  alt,
  className,
  ...props
}: CountryFlagProps) {
  if (!countryCode) return null

  const normalizedCode = countryCode.toLowerCase()
  const dimensions = sizeConfig[size]
  // Using flagcdn for fast, lightweight SVGs/PNGs without heavy dependencies
  const flagUrl = `https://flagcdn.com/${dimensions.urlWidth}/${normalizedCode}.png`

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2px] bg-muted shadow-sm",
        className
      )}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      {...props}
    >
      <Image
        src={flagUrl}
        alt={alt || `${countryCode} flag`}
        fill
        className="object-cover"
        sizes={`${dimensions.width}px`}
        unoptimized // FlagCDN already delivers optimized sizes
      />
    </div>
  )
}
