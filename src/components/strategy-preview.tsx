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
 * Preview component that displays the generated strategy
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
      className="rounded-[1.8rem] border border-line bg-[linear-gradient(180deg,rgba(255,252,246,0.92),rgba(247,241,230,0.92))] p-5 shadow-[0_16px_40px_rgba(20,38,29,0.06)]"
      aria-label="Strategy preview"
      aria-busy={isLoading}
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-foreground/45">
            Current concept
          </p>
          <h2 className="mt-2 font-display text-3xl text-foreground text-balance">
            {strategy.name}
          </h2>
          <p className="mt-1 text-sm text-foreground/60">{statLine}</p>
        </div>
        <Badge variant="accent">live preview</Badge>
      </header>

      {/* Content */}
      <div className="mt-5 space-y-5">
        {/* Tagline Section */}
        <section className="rounded-[1.5rem] bg-forest px-5 py-5 text-[#f8f2e8]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#f5d8bf]">
            Tagline
          </p>
          <p className="mt-3 font-display text-2xl leading-tight text-balance">
            {strategy.tagline}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#f1e4d4]">
            {strategy.summary}
          </p>
        </section>

        {/* Audience & Differentiators */}
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Audience">
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
        <InfoCard title="Feature pillars">
          <div className="grid gap-3">
            {strategy.features.map((feature, index) => (
              <FeatureCard key={`feature-${index}`} feature={feature} />
            ))}
          </div>
        </InfoCard>

        {/* Launch Plan & Metrics */}
        <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
          <InfoCard title="Launch plan">
            {strategy.launchPlan.map((step, index) => (
              <LaunchStepCard key={`step-${index}`} step={step} />
            ))}
          </InfoCard>
          <InfoCard title="Signals to watch">
            {strategy.metrics.map((metric, index) => (
              <ListRow key={`metric-${index}`} value={metric} />
            ))}
          </InfoCard>
        </div>

        {/* First-run Journey */}
        <InfoCard title="First-run journey">
          {strategy.firstRunMoments.map((moment, index) => (
            <ListRow key={`moment-${index}`} value={moment} />
          ))}
        </InfoCard>
      </div>
    </aside>
  );
}
