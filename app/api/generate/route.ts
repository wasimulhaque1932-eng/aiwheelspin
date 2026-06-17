import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `You are an AI for a decision wheel platform. The user typed: "${prompt.trim()}"

Generate exactly 8 short, creative, actionable options for a decision wheel (each 2-5 words max, include 1 relevant emoji at the start of each option).

Return ONLY a valid JSON array of 8 strings. No explanation, no preamble, no markdown code fences. Example format:
["🍕 Order Pizza", "🥗 Make Salad", "🍜 Cook Ramen", "🥡 Get Takeout", "🍳 Eggs & Toast", "🥪 Simple Sandwich", "🍝 Pasta Night", "🤷 Ask Someone Else"]`,
        },
      ],
    });

    const text = message.content
      .map((block) => (block.type === "text" ? block.text : ""))
      .join("");

    const cleaned = text.replace(/```json|```/g, "").trim();
    const options: string[] = JSON.parse(cleaned);

    if (!Array.isArray(options) || options.length === 0) {
      throw new Error("Invalid response format");
    }

    return NextResponse.json({ options: options.slice(0, 8) });
  } catch (error) {
    console.error("AI generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate options. Check your API key." },
      { status: 500 }
    );
  }
}
