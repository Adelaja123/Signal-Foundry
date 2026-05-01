"use client";

import { FormEvent, useMemo, useState } from "react";

type Feature = {
  name: string;
  description: string;
};

type LaunchStep = {
  phase: string;
  goal: string;
};

type Strategy = {
  name: string;
  tagline: string;
  summary: string;
  audiences: string[];
  differentiators: string[];
  features: Feature[];
  launchPlan: LaunchStep[];
  firstRunMoments: string[];
  metrics: string[];
};

const sampleStrategy: Strategy = {
  name: "Signal Foundry",
  tagline: "Shape raw ideas into product strategies you can actually ship.",
  summary:
    "Paste a rough concept, and the app returns a tighter product story, a feature stack worth building, and a calmer go-to-market plan.",
  audiences: [
    "Solo founders validating a new product direction",
    "Small teams trying to turn internal ideas into a clearer roadmap",
    "Freelancers packaging AI features into client-ready concepts",
  ],
  differentiators: [
    "Frames the idea as a marketable product, not just a feature list.",
    "Balances ambition with realistic launch scope.",
    "Keeps the recommendations crisp enough to act on today.",
  ],
  features: [
    {
      name: "Positioning Snapshot",
      description: "Distills the concept into a sharper promise, audience, and wedge.",
    },
    {
      name: "Launch Sequence",
      description: "Breaks the first release into staged moves with clear momentum.",
    },
    {
      name: "Signal Metrics",
      description: "Highlights the behavior worth tracking before you overbuild.",
    },
  ],
  launchPlan: [
    {
      phase: "Week 1",
      goal: "Refine the core promise and lock the first user workflow.",
    },
    {
      phase: "Week 2",
      goal: "Ship the thinnest usable version and watch where attention clusters.",
    },
    {
      phase: "Week 3",
      goal: "Turn feedback into a stronger onboarding path and clearer retention hook.",
    },
  ],
  firstRunMoments: [
    "Prompt arrives as a rough idea, problem, or market hunch.",
    "The app responds with a tighter concept and a more believable product shape.",
    "The user leaves with language and priorities they can immediately build around.",
  ],
  metrics: [
    "Percent of sessions that generate a strategy",
    "Ideas saved or copied into a planning doc",
    "Follow-up generations per concept",
  ],
};

const promptChips = [
  "An AI concierge for independent gyms that writes member check-ins and churn alerts.",
  "A studio assistant that turns rough client briefs into polished landing page concepts.",
  "A meal planner that learns a household budget and produces flexible weekly menus.",
];

export default function Home() {
  const [idea, setIdea] = useState(promptChips[0]);
  const [strategy, setStrategy] = useState<Strategy>(sampleStrategy);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const statLine = useMemo(
    () =>
      [
        `${strategy.audiences.length} audiences`,
        `${strategy.features.length} launch pillars`,
        `${strategy.launchPlan.length} rollout steps`,
      ].join("  ·  "),
    [strategy],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!idea.trim()) {
      setError("Add an idea first so the foundry has something to shape.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/strategy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });

      const payload = (await response.json()) as
        | { strategy: Strategy }
        | { error?: string };

      if (!response.ok || !("strategy" in payload)) {
        const errorMessage =
          "error" in payload
            ? payload.error
            : "The AI route returned an unexpected response.";
        throw new Error(
          errorMessage ?? "The AI route returned an unexpected response.",
        );
      }

      setStrategy(payload.strategy);
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while generating the strategy.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-6 sm:px-8 lg:px-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-line bg-panel px-6 py-8 shadow-[0_18px_60px_rgba(20,38,29,0.08)] backdrop-blur sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(207,95,42,0.16),transparent_65%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-forest/75">
              <span className="rounded-full border border-line bg-white/65 px-3 py-1">
                AI product studio
              </span>
              <span className="rounded-full border border-line bg-white/65 px-3 py-1">
                OpenAI-ready
              </span>
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-forest/70">
                Signal Foundry
              </p>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.94] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Turn a rough AI idea into a product shape worth building.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg">
                This starter app takes a messy concept and returns a tighter
                name, clearer positioning, smarter launch steps, and a few
                signals to track before you overbuild.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-3">
                <span className="text-sm font-medium text-foreground/80">
                  Describe the product you want to explore
                </span>
                <textarea
                  value={idea}
                  onChange={(event) => setIdea(event.target.value)}
                  rows={5}
                  className="w-full rounded-[1.6rem] border border-line bg-white/80 px-5 py-4 text-base leading-7 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none placeholder:text-foreground/35 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                  placeholder="An AI studio that turns client notes into launch-ready product plans..."
                />
              </label>

              <div className="flex flex-wrap gap-2">
                {promptChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setIdea(chip)}
                    className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-foreground/75 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-white"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-[#fff7ef] shadow-[0_10px_30px_rgba(20,38,29,0.18)] hover:-translate-y-0.5 hover:bg-forest disabled:cursor-wait disabled:opacity-70"
                >
                  {isLoading ? "Forging strategy..." : "Forge product strategy"}
                </button>
                <p className="text-sm text-foreground/60">
                  Add `OPENAI_API_KEY` in `.env.local` to turn the studio live.
                </p>
              </div>

              {error ? (
                <p className="rounded-2xl border border-[#d58d76] bg-[#fff1eb] px-4 py-3 text-sm text-[#8f3f1f]">
                  {error}
                </p>
              ) : null}
            </form>
          </div>

          <div className="rounded-[1.8rem] border border-line bg-[linear-gradient(180deg,rgba(255,252,246,0.92),rgba(247,241,230,0.92))] p-5 shadow-[0_16px_40px_rgba(20,38,29,0.06)]">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-foreground/45">
                  Current concept
                </p>
                <h2 className="mt-2 font-display text-3xl text-foreground">
                  {strategy.name}
                </h2>
                <p className="mt-1 text-sm text-foreground/60">{statLine}</p>
              </div>
              <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-[#7a3517]">
                live preview
              </div>
            </div>

            <div className="mt-5 space-y-5">
              <div className="rounded-[1.5rem] bg-forest px-5 py-5 text-[#f8f2e8]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f5d8bf]">
                  Tagline
                </p>
                <p className="mt-3 font-display text-2xl leading-tight">
                  {strategy.tagline}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#f1e4d4]">
                  {strategy.summary}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InfoCard title="Audience">
                  {strategy.audiences.map((audience) => (
                    <ListRow key={audience} value={audience} />
                  ))}
                </InfoCard>
                <InfoCard title="Differentiators">
                  {strategy.differentiators.map((point) => (
                    <ListRow key={point} value={point} />
                  ))}
                </InfoCard>
              </div>

              <InfoCard title="Feature pillars">
                <div className="grid gap-3">
                  {strategy.features.map((feature) => (
                    <article
                      key={feature.name}
                      className="rounded-[1.25rem] border border-line bg-white/80 p-4"
                    >
                      <p className="font-medium text-foreground">{feature.name}</p>
                      <p className="mt-1 text-sm leading-6 text-foreground/65">
                        {feature.description}
                      </p>
                    </article>
                  ))}
                </div>
              </InfoCard>

              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <InfoCard title="Launch plan">
                  {strategy.launchPlan.map((step) => (
                    <article
                      key={step.phase}
                      className="rounded-[1.15rem] border border-line bg-white/78 px-4 py-3"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">
                        {step.phase}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-foreground/75">
                        {step.goal}
                      </p>
                    </article>
                  ))}
                </InfoCard>
                <InfoCard title="Signals to watch">
                  {strategy.metrics.map((metric) => (
                    <ListRow key={metric} value={metric} />
                  ))}
                </InfoCard>
              </div>

              <InfoCard title="First-run journey">
                {strategy.firstRunMoments.map((moment) => (
                  <ListRow key={moment} value={moment} />
                ))}
              </InfoCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="rounded-[1.5rem] border border-line bg-panel-strong p-4 shadow-[0_8px_24px_rgba(20,38,29,0.04)]">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function ListRow({ value }: Readonly<{ value: string }>) {
  return (
    <div className="rounded-[1.15rem] border border-line bg-white/78 px-4 py-3 text-sm leading-6 text-foreground/75">
      {value}
    </div>
  );
}
