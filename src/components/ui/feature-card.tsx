import { cn } from "@/lib/utils";
import type { Feature } from "@/lib/types";

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

/**
 * Card component for displaying a feature with name and description
 */
export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.25rem] border border-line bg-white/80 p-4",
        className
      )}
    >
      <h4 className="font-medium text-foreground">{feature.name}</h4>
      <p className="mt-1 text-sm leading-6 text-foreground/65">
        {feature.description}
      </p>
    </article>
  );
}
