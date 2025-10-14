import { askAI } from "@/services/chat.services";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 },
      );
    }

    const response = await askAI(question);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat proxy error:", error);

    return NextResponse.json(
      { response: "Sorry, something went wrong. Please try again." },
      { status: 502 },
    );
  }
}
