import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { ProductSpecification } from "@/types/product"
import { cn } from "@/lib/utils"

interface SpecsTableProps extends React.HTMLAttributes<HTMLDivElement> {
  specifications: ProductSpecification[]
}

export function SpecsTable({ specifications, className, ...props }: SpecsTableProps) {
  if (!specifications || specifications.length === 0) {
    return null
  }

  return (
    <div className={cn("rounded-md border bg-card text-card-foreground", className)} {...props}>
      <Table>
        <TableBody>
          {specifications.map((spec, index) => (
            <TableRow key={index} className="hover:bg-muted/50">
              <TableCell className="font-medium text-muted-foreground w-1/3 align-top py-3 px-4 border-r">
                {spec.label}
              </TableCell>
              <TableCell className="text-foreground py-3 px-4 font-mono text-sm">
                {spec.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
