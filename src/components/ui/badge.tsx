import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

/**
 * Badge component for tags and labels
 */
export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-sm",
        variant === "default" && "border border-line bg-white/65 text-forest/75",
        variant === "accent" && "bg-accent-soft text-[#7a3517] text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
