import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface PriceSummaryItem {
  label: string
  value: number
}

interface PriceSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: PriceSummaryItem[]
  taxes?: number
  shipping?: number
  currency?: string
}

export function PriceSummary({
  items,
  taxes = 0,
  shipping = 0,
  currency = "$",
  className,
  ...props
}: PriceSummaryProps) {
  const subtotal = items.reduce((acc, item) => acc + item.value, 0)
  const total = subtotal + taxes + shipping

  const formatPrice = (amount: number) => {
    return `${currency}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-lg">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{formatPrice(item.value)}</span>
            </div>
          ))}
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-medium">{shipping === 0 ? "Calculated at checkout" : formatPrice(shipping)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Taxes</span>
            <span className="font-medium">{taxes === 0 ? "Calculated at checkout" : formatPrice(taxes)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 pt-4 flex-col gap-4 items-stretch rounded-b-xl border-t">
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-semibold">Total</span>
          <span className="text-lg font-bold">{formatPrice(total)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
