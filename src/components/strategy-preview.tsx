"use client";

import { useMemo } from "react";
import type { Strategy } from "@/lib/types";
import { formatStatLine } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { InfoCard } from "@/components/ui/info-card";
import { ListRow } from "@/components/ui/list-row";
import { FeatureCard } from "@/components/ui/feature-card";
import { LaunchStepCard } from "@/components/ui/launch-step-card";

interface StrategyPreviewProps {
  strategy: Strategy;
  isLoading?: boolean;
}

/**
 * Premium strategy preview panel with dark theme
 */
export function StrategyPreview({ strategy, isLoading }: StrategyPreviewProps) {
  const statLine = useMemo(
    () =>
      formatStatLine({
        audiences: strategy.audiences.length,
        features: strategy.features.length,
        launchPlan: strategy.launchPlan.length,
      }),
    [strategy.audiences.length, strategy.features.length, strategy.launchPlan.length]
  );

  return (
    <aside
      className="relative overflow-hidden rounded-2xl border border-border bg-card"
      aria-label="Strategy preview"
      aria-busy={isLoading}
    >
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-card/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            <p className="text-sm text-muted">Generating strategy...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-border p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Preview</Badge>
              <span className="text-xs text-muted-foreground">{statLine}</span>
            </div>
            <h2 className="mt-2 truncate text-xl font-semibold text-foreground">
              {strategy.name}
            </h2>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-h-[calc(100vh-280px)] space-y-4 overflow-y-auto p-5">
        {/* Tagline Section */}
        <section className="rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 p-5 ring-1 ring-accent/20">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            Tagline
          </p>
          <p className="mt-2 text-lg font-medium leading-snug text-foreground text-balance">
            {strategy.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {strategy.summary}
          </p>
        </section>

        {/* Audience & Differentiators */}
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Target Audience">
            {strategy.audiences.map((audience, index) => (
              <ListRow key={`audience-${index}`} value={audience} />
            ))}
          </InfoCard>
          <InfoCard title="Differentiators">
            {strategy.differentiators.map((point, index) => (
              <ListRow key={`diff-${index}`} value={point} />
            ))}
          </InfoCard>
        </div>

        {/* Features */}
        <InfoCard title="Core Features">
          <div className="grid gap-2">
            {strategy.features.map((feature, index) => (
              <FeatureCard key={`feature-${index}`} feature={feature} />
            ))}
          </div>
        </InfoCard>

        {/* Launch Plan & Metrics */}
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Launch Plan">
            {strategy.launchPlan.map((step, index) => (
              <LaunchStepCard key={`step-${index}`} step={step} index={index} />
            ))}
          </InfoCard>
          <InfoCard title="Success Metrics">
            {strategy.metrics.map((metric, index) => (
              <ListRow key={`metric-${index}`} value={metric} />
            ))}
          </InfoCard>
        </div>

        {/* First-run Journey */}
        <InfoCard title="Onboarding Flow">
          {strategy.firstRunMoments.map((moment, index) => (
            <ListRow key={`moment-${index}`} value={moment} />
          ))}
        </InfoCard>
      </div>
    </aside>
  );
}
