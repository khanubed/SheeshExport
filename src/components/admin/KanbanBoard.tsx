"use client"

import * as React from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
// In a full implementation, you would also use @dnd-kit/sortable and @dnd-kit/utilities
// For this scaffolding, we provide the core DND context structure

export interface KanbanColumn {
  id: string
  title: string
}

export interface KanbanItem {
  id: string
  columnId: string
  title: string
  description?: string
  [key: string]: any
}

interface KanbanBoardProps {
  columns: KanbanColumn[]
  items: KanbanItem[]
  onDragEnd: (event: DragEndEvent) => void
  renderItem?: (item: KanbanItem) => React.ReactNode
  className?: string
}

export function KanbanBoard({
  columns,
  items,
  onDragEnd,
  renderItem,
  className,
}: KanbanBoardProps) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null)
    onDragEnd(event)
  }

  const activeItem = React.useMemo(
    () => items.find((item) => item.id === activeId),
    [activeId, items]
  )

  return (
    <div className={cn("flex h-full w-full gap-4 overflow-x-auto pb-4", className)}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {columns.map((column) => (
          <div key={column.id} className="flex h-full min-w-[300px] max-w-[300px] flex-col rounded-lg bg-muted/50 p-4">
            <h3 className="mb-4 font-semibold text-foreground flex items-center justify-between">
              {column.title}
              <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {items.filter((item) => item.columnId === column.id).length}
              </span>
            </h3>
            
            <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
              {/* Droppable Area placeholder */}
              {items
                .filter((item) => item.columnId === column.id)
                .map((item) => (
                  <Card key={item.id} className="cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors">
                    {renderItem ? (
                      renderItem(item)
                    ) : (
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm">{item.title}</CardTitle>
                      </CardHeader>
                    )}
                  </Card>
                ))}
            </div>
          </div>
        ))}
        
        <DragOverlay>
          {activeItem ? (
            <Card className="cursor-grabbing shadow-xl border-primary/50 opacity-90 scale-105 transition-none">
              {renderItem ? (
                renderItem(activeItem)
              ) : (
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">{activeItem.title}</CardTitle>
                </CardHeader>
              )}
            </Card>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
