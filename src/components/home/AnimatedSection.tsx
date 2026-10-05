import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  delay?: number;
  className?: string;
  viewport?: unknown;
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  transition?: unknown;
  variants?: unknown;
}

export function FadeIn({
  children,
  className = "",
  delay: _delay,
  viewport: _viewport,
  initial: _initial,
  animate: _animate,
  whileInView: _whileInView,
  transition: _transition,
  variants: _variants,
  ...props
}: SectionProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  viewport: _viewport,
  initial: _initial,
  animate: _animate,
  whileInView: _whileInView,
  transition: _transition,
  variants: _variants,
  ...props
}: SectionProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  viewport: _viewport,
  initial: _initial,
  animate: _animate,
  whileInView: _whileInView,
  transition: _transition,
  variants: _variants,
  ...props
}: SectionProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
