import type { Strategy } from "./types";

/**
 * Sample strategy for initial state and loading skeleton reference
 */
export const SAMPLE_STRATEGY: Strategy = {
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
      description:
        "Distills the concept into a sharper promise, audience, and wedge.",
    },
    {
      name: "Launch Sequence",
      description:
        "Breaks the first release into staged moves with clear momentum.",
    },
    {
      name: "Signal Metrics",
      description:
        "Highlights the behavior worth tracking before you overbuild.",
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

/**
 * Prompt suggestions for user onboarding
 */
export const PROMPT_SUGGESTIONS = [
  "An AI concierge for independent gyms that writes member check-ins and churn alerts.",
  "A studio assistant that turns rough client briefs into polished landing page concepts.",
  "A meal planner that learns a household budget and produces flexible weekly menus.",
] as const;

/**
 * Error codes for structured error handling
 */
export const ERROR_CODES = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  MISSING_API_KEY: "MISSING_API_KEY",
  OPENAI_ERROR: "OPENAI_ERROR",
  PARSE_ERROR: "PARSE_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
