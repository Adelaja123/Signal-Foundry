import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {
  strategyRequestSchema,
  strategySchema,
  strategyJsonSchema,
} from "@/lib/validations";
import { ERROR_CODES } from "@/lib/constants";
import type { StrategyErrorResponse, StrategySuccessResponse } from "@/lib/types";

/**
 * OpenAI API response types
 */
interface OpenAIMessage {
  role: string;
  content: string;
}

interface OpenAIChoice {
  index: number;
  message: OpenAIMessage;
  finish_reason: string;
}

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: OpenAIChoice[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  error?: {
    message: string;
    type: string;
    code: string;
  };
}

/**
 * System prompt for the AI strategist
 */
const SYSTEM_PROMPT = `You are a sharp AI product strategist with deep expertise in go-to-market strategy, product positioning, and startup methodology.

Your task is to transform rough product ideas into launch-ready concepts. For each idea:

1. **Name**: Create a memorable, marketable product name
2. **Tagline**: Write a compelling one-liner that captures the value proposition
3. **Summary**: Provide a 2-3 sentence description of what the product does and why it matters
4. **Audiences**: Identify 3-4 specific target audiences who would benefit most
5. **Differentiators**: List 3-4 key ways this product stands out from alternatives
6. **Features**: Define 3-4 core features with clear names and descriptions
7. **Launch Plan**: Create a 3-4 phase rollout plan with specific goals
8. **First-Run Moments**: Describe 3-4 key moments in the initial user experience
9. **Metrics**: Suggest 3-4 signals worth tracking early on

Keep recommendations:
- Concise and actionable
- Realistic in scope for early-stage products
- Focused on validation over perfection
- Sharp in language and positioning`;

/**
 * Create a structured error response
 */
function createErrorResponse(
  error: string,
  code: string,
  status: number
): NextResponse<StrategyErrorResponse> {
  return NextResponse.json({ error, code }, { status });
}

/**
 * Validate environment configuration
 */
function validateEnvironment(): string | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    return null;
  }
  return apiKey;
}

/**
 * POST /api/strategy
 * Generates a product strategy from a rough idea using OpenAI
 */
export async function POST(
  request: Request
): Promise<NextResponse<StrategySuccessResponse | StrategyErrorResponse>> {
  // Validate API key exists
  const apiKey = validateEnvironment();
  if (!apiKey) {
    return createErrorResponse(
      "OpenAI API key is not configured. Add OPENAI_API_KEY to your environment variables.",
      ERROR_CODES.MISSING_API_KEY,
      500
    );
  }

  // Parse and validate request body
  let requestBody: unknown;
  try {
    requestBody = await request.json();
  } catch {
    return createErrorResponse(
      "Invalid JSON in request body.",
      ERROR_CODES.VALIDATION_ERROR,
      400
    );
  }

  // Validate request schema
  let validatedRequest: { idea: string };
  try {
    validatedRequest = strategyRequestSchema.parse(requestBody);
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.errors[0]?.message || "Invalid request data.";
      return createErrorResponse(message, ERROR_CODES.VALIDATION_ERROR, 400);
    }
    return createErrorResponse(
      "Failed to validate request.",
      ERROR_CODES.VALIDATION_ERROR,
      400
    );
  }

  // Call OpenAI API
  let openaiResponse: Response;
  try {
    openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: `Shape this rough product idea into a launch-ready concept:\n\n${validatedRequest.idea}`,
          },
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "product_strategy",
            strict: true,
            schema: strategyJsonSchema,
          },
        },
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });
  } catch (error) {
    console.error("[API] Network error calling OpenAI:", error);
    return createErrorResponse(
      "Failed to connect to OpenAI. Please try again.",
      ERROR_CODES.NETWORK_ERROR,
      503
    );
  }

  // Parse OpenAI response
  let payload: OpenAIResponse;
  try {
    payload = (await openaiResponse.json()) as OpenAIResponse;
  } catch {
    return createErrorResponse(
      "Failed to parse OpenAI response.",
      ERROR_CODES.PARSE_ERROR,
      502
    );
  }

  // Handle OpenAI errors
  if (!openaiResponse.ok || payload.error) {
    const errorMessage =
      payload.error?.message || "OpenAI returned an error while generating the strategy.";
    console.error("[API] OpenAI error:", payload.error);
    return createErrorResponse(
      errorMessage,
      ERROR_CODES.OPENAI_ERROR,
      openaiResponse.status >= 400 && openaiResponse.status < 500 ? 400 : 502
    );
  }

  // Extract content from response
  const content = payload.choices?.[0]?.message?.content;
  if (!content) {
    return createErrorResponse(
      "OpenAI returned an empty response. Please try again.",
      ERROR_CODES.PARSE_ERROR,
      502
    );
  }

  // Parse and validate strategy
  let strategy: unknown;
  try {
    strategy = JSON.parse(content);
  } catch {
    console.error("[API] Failed to parse strategy JSON:", content);
    return createErrorResponse(
      "Failed to parse the generated strategy. Please try again.",
      ERROR_CODES.PARSE_ERROR,
      502
    );
  }

  // Validate against schema
  try {
    const validatedStrategy = strategySchema.parse(strategy);
    return NextResponse.json({ strategy: validatedStrategy });
  } catch (error) {
    console.error("[API] Strategy validation failed:", error);
    return createErrorResponse(
      "The generated strategy did not match the expected format. Please try again.",
      ERROR_CODES.PARSE_ERROR,
      502
    );
  }
}
