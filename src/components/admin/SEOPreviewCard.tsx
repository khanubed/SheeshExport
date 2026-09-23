import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SEOPreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  url: string
}

export function SEOPreviewCard({
  title,
  description,
  url,
  className,
  ...props
}: SEOPreviewCardProps) {
  // Truncate logic similar to Google Search
  const displayTitle = title.length > 60 ? `${title.substring(0, 60)}...` : title
  const displayDescription = description.length > 160 ? `${description.substring(0, 160)}...` : description

  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <CardHeader className="bg-muted/50 pb-4">
        <CardTitle className="text-sm font-medium">Search Engine Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col max-w-[600px] bg-card rounded p-4 border shadow-sm">
          {/* Breadcrumb / URL */}
          <div className="flex items-center text-[13px] text-[#202124] dark:text-[#bdc1c6] mb-1">
            <span className="truncate">{url || "https://example.com"}</span>
          </div>
          
          {/* Title */}
          <div className="text-[20px] text-[#1a0dab] dark:text-[#8ab4f8] font-normal leading-[1.3] mb-1 cursor-pointer hover:underline truncate">
            {displayTitle || "SEO Title Preview"}
          </div>
          
          {/* Description */}
          <div className="text-[14px] text-[#4d5156] dark:text-[#9aa0a6] leading-[1.58] line-clamp-2">
            {displayDescription || "This is a preview of how your page will appear in search results. Ensure the description is compelling."}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
