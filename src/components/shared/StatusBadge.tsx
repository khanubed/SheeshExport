import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      statusType: {
        rfq: "",
        order: "",
        product: "",
      },
      status: {
        // Product Statuses
        draft: "bg-muted text-muted-foreground hover:bg-muted/80",
        published: "bg-success/15 text-success hover:bg-success/25",
        archived: "bg-destructive/15 text-destructive hover:bg-destructive/25",
        
        // RFQ Statuses
        pending: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/25",
        in_progress: "bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25",
        quoted: "bg-primary/15 text-primary hover:bg-primary/25",
        rejected: "bg-destructive/15 text-destructive hover:bg-destructive/25",
        
        // Order Statuses
        processing: "bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25",
        shipped: "bg-purple-500/15 text-purple-700 dark:text-purple-400 hover:bg-purple-500/25",
        delivered: "bg-success/15 text-success hover:bg-success/25",
        cancelled: "bg-destructive/15 text-destructive hover:bg-destructive/25",
      },
    },
    defaultVariants: {
      statusType: "product",
      status: "draft",
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof statusBadgeVariants>, "status" | "statusType"> {
  status: string
  type: "rfq" | "order" | "product"
}

export function StatusBadge({
  className,
  status,
  type,
  ...props
}: StatusBadgeProps) {
  // Normalize status string to match variant keys if possible, or fallback
  const normalizedStatus = status.toLowerCase().replace(" ", "_") as any
  
  return (
    <div
      className={cn(statusBadgeVariants({ statusType: type, status: normalizedStatus }), className)}
      {...props}
    >
      {/* Capitalize first letter of each word for display */}
      {status.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
    </div>
  )
}
