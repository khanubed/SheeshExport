"use client";
import { ProductSpecification } from '@/lib/data/types';

interface SpecsTableProps {
  specifications?: ProductSpecification[];
}

export function SpecsTable({ specifications }: SpecsTableProps) {
  if (!specifications || specifications.length === 0) {
    return <p className="text-muted-foreground italic">Detailed specifications are currently unavailable.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-border">
          {specifications.map((spec, idx) => (
            <tr key={spec.id} className={idx % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
              <th className="px-4 py-3 font-medium text-muted-foreground w-1/3 border-r border-border">
                {spec.label}
              </th>
              <td className="px-4 py-3 font-semibold text-foreground">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
