import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight, Box, Edit, Globe, MoreVertical } from "lucide-react"

import { Product } from "@/types/product"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const productCardVariants = cva(
  "group overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full bg-card border-border",
  {
    variants: {
      variant: {
        default: "rounded-xl border",
        compact: "rounded-lg border",
        admin: "rounded-md border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ProductCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productCardVariants> {
  product: Product
}

export function ProductCard({
  product,
  variant,
  className,
  ...props
}: ProductCardProps) {
  // Determine primary image
  const primaryImage = product.images?.[0]?.url || "/images/placeholder.jpg"
  const primaryImageAlt = product.images?.[0]?.altText || product.name

  if (variant === "compact") {
    return (
      <Link href={`/products/${product.slug}`}>
        <Card
          className={cn(productCardVariants({ variant }), className)}
          {...props}
        >
          <div className="flex flex-row items-center p-3 gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0 bg-muted">
              <Image
                src={primaryImage}
                alt={primaryImageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground truncate">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground truncate">
                {product.shortDescription}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  if (variant === "admin") {
    return (
      <Card
        className={cn(productCardVariants({ variant }), className)}
        {...props}
      >
        <div className="flex flex-row items-center p-4 gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-sm flex-shrink-0 bg-muted">
            <Image
              src={primaryImage}
              alt={primaryImageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-foreground truncate">
                {product.name}
              </h3>
              <Badge variant={product.status === "published" ? "default" : "secondary"} className="text-[10px] px-1.5 py-0">
                {product.status}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1 gap-3">
              <span className="flex items-center gap-1">
                <Box className="h-3 w-3" /> {product.hsCode}
              </span>
              {typeof product.category !== 'string' && product.category?.name && (
                <span className="flex items-center gap-1">
                  <Globe className="h-3 w-3" /> {product.category.name}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  // Default variant
  return (
    <Card
      className={cn(productCardVariants({ variant }), className)}
      {...props}
    >
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={primaryImage}
            alt={primaryImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide">
                Featured
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="p-5 pb-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              {typeof product.category !== 'string' && product.category?.name && (
                <span className="text-xs font-medium text-secondary uppercase tracking-wider mb-1 block">
                  {product.category.name}
                </span>
              )}
              <h3 className="text-lg font-serif font-semibold text-foreground line-clamp-1">
                {product.name}
              </h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-5 pt-0 flex-1">
          <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
            {product.shortDescription}
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0 mt-auto border-t border-border/50 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            MOQ: <span className="text-foreground">{product.minimumOrderQuantity}</span>
          </span>
          <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:underline underline-offset-4">
            View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Link>
    </Card>
  )
}
