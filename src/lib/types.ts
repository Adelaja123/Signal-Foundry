/**
 * Core domain types for Signal Foundry
 * Single source of truth for all strategy-related types
 */

export interface Feature {
  name: string;
  description: string;
}

export interface LaunchStep {
  phase: string;
  goal: string;
}

export interface Strategy {
  name: string;
  tagline: string;
  summary: string;
  audiences: string[];
  differentiators: string[];
  features: Feature[];
  launchPlan: LaunchStep[];
  firstRunMoments: string[];
  metrics: string[];
}

export interface StrategyRequest {
  idea: string;
}

export interface StrategySuccessResponse {
  strategy: Strategy;
}

export interface StrategyErrorResponse {
  error: string;
  code?: string;
}

export type StrategyResponse = StrategySuccessResponse | StrategyErrorResponse;

export function isStrategySuccess(
  response: StrategyResponse
): response is StrategySuccessResponse {
  return "strategy" in response;
}

export function isStrategyError(
  response: StrategyResponse
): response is StrategyErrorResponse {
  return "error" in response;
}
