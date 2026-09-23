"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGrade } from "@/lib/data/types";

interface GradesTabsProps {
  grades?: ProductGrade[];
}

export function GradesTabs({ grades }: GradesTabsProps) {
  if (!grades || grades.length === 0) return null;

  return (
    <Tabs defaultValue={grades[0].id} className="w-full">
      <TabsList className="mb-4 flex flex-wrap h-auto">
        {grades.map(g => (
          <TabsTrigger key={g.id} value={g.id} className="px-6 py-2">
            {g.gradeName}
          </TabsTrigger>
        ))}
      </TabsList>
      {grades.map(g => (
        <TabsContent key={g.id} value={g.id} className="p-6 bg-muted/20 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-2">{g.gradeName}</h3>
          <p className="text-muted-foreground leading-relaxed">{g.description}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
