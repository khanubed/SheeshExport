import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Step {
  id: string
  title: string
  description?: string
}

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[]
  currentStep: number // 0-indexed
  orientation?: "horizontal" | "vertical"
}

export function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
  className,
  ...props
}: StepperProps) {
  return (
    <div
      className={cn(
        "flex w-full",
        orientation === "horizontal" ? "flex-row items-center justify-between" : "flex-col space-y-8",
        className
      )}
      {...props}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep

        return (
          <div
            key={step.id}
            className={cn(
              "relative flex flex-1",
              orientation === "horizontal" ? "items-center" : "flex-col items-start"
            )}
          >
            {/* Step Content */}
            <div
              className={cn(
                "flex items-center gap-3 z-10",
                orientation === "horizontal" ? "flex-col text-center w-full" : "flex-row text-left"
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                  isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : isCurrent
                    ? "border-primary text-primary"
                    : "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : index + 1}
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-sm font-medium",
                    isCurrent || isCompleted ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
                {step.description && orientation === "vertical" && (
                  <span className="text-sm text-muted-foreground">{step.description}</span>
                )}
              </div>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute bg-muted-foreground/20 transition-colors",
                  isCompleted ? "bg-primary" : "",
                  orientation === "horizontal"
                    ? "top-5 w-full h-[2px] left-[50%] right-[-50%] -z-0"
                    : "left-5 top-10 w-[2px] h-[calc(100%+32px)] -translate-x-[1px] -z-0"
                )}
                aria-hidden="true"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
