import { z } from "zod";

/**
 * Request validation schema
 */
export const strategyRequestSchema = z.object({
  idea: z
    .string()
    .min(10, "Your idea should be at least 10 characters to generate a meaningful strategy.")
    .max(2000, "Please keep your idea under 2000 characters.")
    .transform((val) => val.trim()),
});

/**
 * Feature schema for structured output
 */
export const featureSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

/**
 * Launch step schema for structured output
 */
export const launchStepSchema = z.object({
  phase: z.string().min(1),
  goal: z.string().min(1),
});

/**
 * Complete strategy schema for validating AI responses
 */
export const strategySchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  summary: z.string().min(1),
  audiences: z.array(z.string().min(1)).min(3).max(4),
  differentiators: z.array(z.string().min(1)).min(3).max(4),
  features: z.array(featureSchema).min(3).max(4),
  launchPlan: z.array(launchStepSchema).min(3).max(4),
  firstRunMoments: z.array(z.string().min(1)).min(3).max(4),
  metrics: z.array(z.string().min(1)).min(3).max(4),
});

/**
 * JSON Schema for OpenAI structured output
 * Matches the Zod schema above
 */
export const strategyJsonSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "name",
    "tagline",
    "summary",
    "audiences",
    "differentiators",
    "features",
    "launchPlan",
    "firstRunMoments",
    "metrics",
  ],
  properties: {
    name: { type: "string", minLength: 1 },
    tagline: { type: "string", minLength: 1 },
    summary: { type: "string", minLength: 1 },
    audiences: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 3,
      maxItems: 4,
    },
    differentiators: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 3,
      maxItems: 4,
    },
    features: {
      type: "array",
      minItems: 3,
      maxItems: 4,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "description"],
        properties: {
          name: { type: "string", minLength: 1 },
          description: { type: "string", minLength: 1 },
        },
      },
    },
    launchPlan: {
      type: "array",
      minItems: 3,
      maxItems: 4,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["phase", "goal"],
        properties: {
          phase: { type: "string", minLength: 1 },
          goal: { type: "string", minLength: 1 },
        },
      },
    },
    firstRunMoments: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 3,
      maxItems: 4,
    },
    metrics: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 3,
      maxItems: 4,
    },
  },
} as const;

export type StrategyRequest = z.infer<typeof strategyRequestSchema>;
export type Strategy = z.infer<typeof strategySchema>;
