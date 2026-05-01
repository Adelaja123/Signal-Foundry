import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
  className?: string;
}

/**
 * Premium badge component for tags and status indicators
 */
export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "border border-border bg-card text-muted",
        variant === "accent" &&
          "bg-accent/10 text-accent border border-accent/20",
        variant === "success" &&
          "bg-success/10 text-success border border-success/20",
        className
      )}
    >
      {children}
    </span>
  );
}
