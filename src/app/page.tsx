"use client";

import { Hero } from "@/components/hero";
import { IdeaForm } from "@/components/idea-form";
import { StrategyPreview } from "@/components/strategy-preview";
import { useStrategy } from "@/hooks/use-strategy";

/**
 * Main page component for Signal Foundry
 * Orchestrates the strategy generation flow
 */
export default function Home() {
  const { strategy, isLoading, error, generateStrategy, clearError } = useStrategy();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-6 sm:px-8 lg:px-10">
      <section
        className="relative overflow-hidden rounded-[2rem] border border-line bg-panel px-6 py-8 shadow-[0_18px_60px_rgba(20,38,29,0.08)] backdrop-blur sm:px-8 lg:px-10"
        aria-labelledby="main-heading"
      >
        {/* Decorative gradient */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(207,95,42,0.16),transparent_65%)]"
          aria-hidden="true"
        />

        {/* Main content grid */}
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left column: Hero + Form */}
          <div className="space-y-8">
            <Hero />
            <IdeaForm
              onSubmit={generateStrategy}
              isLoading={isLoading}
              error={error}
              onClearError={clearError}
            />
          </div>

          {/* Right column: Strategy Preview */}
          <StrategyPreview strategy={strategy} isLoading={isLoading} />
        </div>
      </section>
    </main>
  );
}
