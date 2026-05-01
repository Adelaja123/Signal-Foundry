import { cn } from "@/lib/utils";
import type { Feature } from "@/lib/types";

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

/**
 * Premium feature card with icon and hover effects
 */
export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-lg border border-border bg-card-elevated/50 p-4 transition-colors hover:border-border-hover hover:bg-card-elevated",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
          <svg
            className="h-4 w-4 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-medium text-foreground">{feature.name}</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}
