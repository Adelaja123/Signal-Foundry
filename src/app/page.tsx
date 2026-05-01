"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { IdeaForm } from "@/components/idea-form";
import { StrategyPreview } from "@/components/strategy-preview";
import { useStrategy } from "@/hooks/use-strategy";

/**
 * Main page - Premium AI Product Strategy Studio
 */
export default function Home() {
  const { strategy, isLoading, error, generateStrategy, clearError } =
    useStrategy();

  return (
    <>
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section
          id="generate"
          className="relative overflow-hidden border-b border-border"
        >
          {/* Background grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: Hero + Form */}
              <div className="space-y-10">
                <Hero />
                <IdeaForm
                  onSubmit={generateStrategy}
                  isLoading={isLoading}
                  error={error}
                  onClearError={clearError}
                />
              </div>

              {/* Right: Strategy Preview */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <StrategyPreview strategy={strategy} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything you need to validate ideas
              </h2>
              <p className="mt-4 text-lg text-muted">
                From rough concept to launch-ready strategy in seconds.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-hover hover:bg-card-elevated"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-lg text-muted">
                Three simple steps to your product strategy.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-1/2 top-12 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-border to-transparent md:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
                      {index + 1}
                    </div>
                    <h3 className="mt-6 font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent">
                  <svg
                    className="h-3 w-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">
                  Signal Foundry
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Built with Next.js and OpenAI
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// Feature data
const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "GPT-4o analyzes your idea and generates comprehensive product strategies based on market patterns.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Instant Positioning",
    description:
      "Get clear taglines, target audiences, and differentiators that set your product apart.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Feature Roadmap",
    description:
      "Automatically generated feature pillars with descriptions tailored to your product vision.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Launch Planning",
    description:
      "Phased launch strategy with clear milestones and goals for each stage of your rollout.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Success Metrics",
    description:
      "Key performance indicators and signals to track before you invest heavily in development.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Onboarding Flow",
    description:
      "First-run experience moments designed to activate and retain your early users.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

// Steps data
const steps = [
  {
    title: "Describe your idea",
    description:
      "Enter a rough product concept or choose from example prompts to get started.",
  },
  {
    title: "AI analyzes",
    description:
      "GPT-4o processes your input and generates a comprehensive product strategy.",
  },
  {
    title: "Get your strategy",
    description:
      "Review positioning, features, launch plan, and metrics in an organized format.",
  },
];
