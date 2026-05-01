import { NextResponse } from "next/server";

const strategySchema = {
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
    name: { type: "string" },
    tagline: { type: "string" },
    summary: { type: "string" },
    audiences: {
      type: "array",
      items: { type: "string" },
      minItems: 3,
      maxItems: 4,
    },
    differentiators: {
      type: "array",
      items: { type: "string" },
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
          name: { type: "string" },
          description: { type: "string" },
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
          phase: { type: "string" },
          goal: { type: "string" },
        },
      },
    },
    firstRunMoments: {
      type: "array",
      items: { type: "string" },
      minItems: 3,
      maxItems: 4,
    },
    metrics: {
      type: "array",
      items: { type: "string" },
      minItems: 3,
      maxItems: 4,
    },
  },
} as const;

type OpenAIResponse = {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
  error?: {
    message?: string;
  };
};

function extractOutputText(payload: OpenAIResponse) {
  if (payload.output_text) {
    return payload.output_text;
  }

  return payload.output
    ?.flatMap((item) => item.content ?? [])
    .find((content) => content.type === "output_text" && content.text)?.text;
}

export async function POST(request: Request) {
  const { idea } = (await request.json()) as { idea?: string };

  if (!idea?.trim()) {
    return NextResponse.json(
      { error: "Share a product idea before requesting a strategy." },
      { status: 400 },
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "OPENAI_API_KEY is missing. Add it to .env.local, then try again.",
      },
      { status: 500 },
    );
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are a sharp AI product strategist. Return concise, practical product concepts with strong naming, believable scope, and clear go-to-market sequencing.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Shape this rough product idea into a launch-ready concept:\n\n${idea}`,
            },
          ],
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "product_strategy",
          strict: true,
          schema: strategySchema,
        },
      },
    }),
  });

  const payload = (await response.json()) as OpenAIResponse;

  if (!response.ok) {
    return NextResponse.json(
      {
        error:
          payload.error?.message ??
          "OpenAI returned an error while generating the strategy.",
      },
      { status: response.status },
    );
  }

  const outputText = extractOutputText(payload);

  if (!outputText) {
    return NextResponse.json(
      { error: "The model response did not include structured output text." },
      { status: 502 },
    );
  }

  return NextResponse.json({ strategy: JSON.parse(outputText) });
}
