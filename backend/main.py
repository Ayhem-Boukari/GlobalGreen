import json
import logging
import os
from pathlib import Path

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).resolve().parents[1]
ENV_FILES = [ROOT_DIR / ".env", ROOT_DIR / ".env.local"]

for env_file in ENV_FILES:
    if env_file.exists():
        load_dotenv(env_file, override=False)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
GROQ_ENDPOINT = os.getenv(
    "GROQ_CHAT_URL",
    "https://api.groq.com/openai/v1/chat/completions",
)

SYSTEM_PROMPT = os.getenv(
    "GROQ_SYSTEM_PROMPT",
    "You are EcoBot, a helpful sustainability assistant for GlobalGreen. Provide concise, actionable responses that empower users to make environmentally conscious decisions.",
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AskRequest(BaseModel):
    question: str


class AskResponse(BaseModel):
    response: str


@app.get("/health", response_model=dict)
async def health_check() -> dict:
    return {"status": "ok"}


async def _query_groq(question: str) -> str:
    if not GROQ_API_KEY:
        logger.error("GROQ_API_KEY is not configured; cannot process chat requests.")
        raise HTTPException(
            status_code=500,
            detail="Assistant is not configured. Please set GROQ_API_KEY in your .env file.",
        )

    payload = {
        "model": GROQ_MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": question},
        ],
        "temperature": 0.7,
        "max_tokens": 512,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        try:
            response = await client.post(
                GROQ_ENDPOINT,
                headers={
                    "Authorization": f"Bearer {GROQ_API_KEY}",
                    "Content-Type": "application/json",
                },
                json=payload,
            )
            response.raise_for_status()
        except httpx.HTTPStatusError as exc:
            error_detail = exc.response.text
            logger.error(
                "Groq API responded with an error: %s", error_detail, exc_info=exc
            )
            
            # Check if it's an invalid API key error
            if exc.response.status_code == 401:
                raise HTTPException(
                    status_code=500,
                    detail="Invalid Groq API key. Please get a valid API key from https://console.groq.com/keys and update your .env file.",
                ) from exc
            
            raise HTTPException(
                status_code=exc.response.status_code,
                detail=f"Assistant could not generate a reply: {error_detail}",
            ) from exc
        except httpx.RequestError as exc:
            logger.exception("Error communicating with Groq API: %s", exc)
            raise HTTPException(
                status_code=502,
                detail="Assistant is unavailable. Please try again shortly.",
            ) from exc

    data = response.json()
    try:
        message = data["choices"][0]["message"]["content"].strip()
    except (KeyError, IndexError, TypeError, AttributeError) as exc:
        logger.error("Unexpected Groq response format: %s", json.dumps(data), exc_info=exc)
        raise HTTPException(
            status_code=502,
            detail="Assistant returned an unexpected response. Please try again.",
        ) from exc

    return message or "I'm not sure how to help with that just yet."


@app.post("/ask", response_model=AskResponse)
async def ask_endpoint(payload: AskRequest) -> AskResponse:
    cleaned_question = payload.question.strip()

    if not cleaned_question:
        raise HTTPException(status_code=400, detail="Please provide a valid question.")

    answer = await _query_groq(cleaned_question)

    return AskResponse(response=answer)
