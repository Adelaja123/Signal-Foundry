import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a stat line from strategy data
 */
export function formatStatLine(counts: {
  audiences: number;
  features: number;
  launchPlan: number;
}): string {
  return [
    `${counts.audiences} audiences`,
    `${counts.features} launch pillars`,
    `${counts.launchPlan} rollout steps`,
  ].join("  ·  ");
}
