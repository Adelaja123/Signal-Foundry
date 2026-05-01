"use client";

import { useCallback, useState } from "react";
import type { Strategy, StrategyResponse } from "@/lib/types";
import { isStrategySuccess } from "@/lib/types";
import { SAMPLE_STRATEGY } from "@/lib/constants";

interface UseStrategyReturn {
  strategy: Strategy;
  isLoading: boolean;
  error: string | null;
  generateStrategy: (idea: string) => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

/**
 * Hook for managing strategy generation state and API calls
 */
export function useStrategy(): UseStrategyReturn {
  const [strategy, setStrategy] = useState<Strategy>(SAMPLE_STRATEGY);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateStrategy = useCallback(async (idea: string) => {
    // Client-side validation
    const trimmedIdea = idea.trim();
    if (!trimmedIdea) {
      setError("Add an idea first so the foundry has something to shape.");
      return;
    }

    if (trimmedIdea.length < 10) {
      setError("Your idea should be at least 10 characters to generate a meaningful strategy.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/strategy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea: trimmedIdea }),
      });

      const payload: StrategyResponse = await response.json();

      if (!response.ok || !isStrategySuccess(payload)) {
        const errorMessage =
          "error" in payload
            ? payload.error
            : "The AI route returned an unexpected response.";
        throw new Error(errorMessage);
      }

      setStrategy(payload.strategy);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while generating the strategy.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const reset = useCallback(() => {
    setStrategy(SAMPLE_STRATEGY);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    strategy,
    isLoading,
    error,
    generateStrategy,
    clearError,
    reset,
  };
}
