import { cn } from "@/lib/utils";
import type { LaunchStep } from "@/lib/types";

interface LaunchStepCardProps {
  step: LaunchStep;
  className?: string;
}

/**
 * Card component for displaying a launch plan step
 */
export function LaunchStepCard({ step, className }: LaunchStepCardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.15rem] border border-line bg-white/78 px-4 py-3",
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">
        {step.phase}
      </p>
      <p className="mt-1 text-sm leading-6 text-foreground/75">{step.goal}</p>
    </article>
  );
}
