"use server";
import axios from "axios";

const FASTAPI_URL = process.env.FASTAPI_URL ?? "http://localhost:8000";

export async function askAI(question: string) {
  try {
    const response = await axios.post(`${FASTAPI_URL}/ask`, {
      question: question,
    });

    return response.data.response;
  } catch (error) {
    console.error("Error fetching response:", error);
    return "Sorry, something went wrong. Please try again.";
  }
}
