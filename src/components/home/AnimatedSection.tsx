import React, { ReactNode } from "react";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, className = "", delay: _delay, ...props }: AnimatedSectionProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function StaggerContainer({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
