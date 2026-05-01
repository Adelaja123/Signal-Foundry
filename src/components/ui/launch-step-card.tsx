import { cn } from "@/lib/utils";
import type { LaunchStep } from "@/lib/types";

interface LaunchStepCardProps {
  step: LaunchStep;
  index?: number;
  className?: string;
}

/**
 * Premium launch step card with numbered indicator
 */
export function LaunchStepCard({ step, index = 0, className }: LaunchStepCardProps) {
  return (
    <article
      className={cn(
        "flex items-start gap-3 rounded-lg bg-card-elevated/50 px-3 py-3",
        className
      )}
    >
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
        {index + 1}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {step.phase}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">{step.goal}</p>
      </div>
    </article>
  );
}
