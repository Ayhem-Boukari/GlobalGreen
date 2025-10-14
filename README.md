🌱 GlobalGreen
A full-stack platform that promotes sustainable farming and green energy actions.

Users earn eco-currencies (HydroCoins, BioCoins, LogiCoins, CarbonCredits) that combine into EcoCoins, usable in a green marketplace.

An AI chatbot powered by Groq provides instant, practical sustainability guidance.

🚀 Features
💰 Multi-currency eco-reward system

🛒 Green marketplace with smart filters

🤖 AI chatbot for sustainability tips (Groq Llama 3.3)

📊 Dashboard with interactive charts

🌓 Responsive and accessible UI with dark mode

🧠 Tech Stack
Frontend: Next.js 15 · React 19 · TypeScript · Tailwind CSS · ApexCharts

Backend: FastAPI (Python 3.13) · Uvicorn · Pydantic · httpx

AI: Groq – Llama 3.3 (70B Versatile)

⚙️ Requirements
Node.js 18+

Python 3.11+

Git

🧩 Quick Start
1️⃣ Install dependencies

# Install frontend dependencies
npm install --legacy-peer-deps

# Create and activate Python virtual environment
python -m venv .venv
.\.venv\Scripts\Activate.ps1 # For Windows PowerShell

# Install backend dependencies
pip install -r backend/requirements.txt

2️⃣ Create environment file .env

GROQ_API_KEY=your_groq_api_key
FASTAPI_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/chat

3️⃣ Run the project

Backend

cd backend
python -m uvicorn main:app --reload

Frontend

npm run dev

➡️ Frontend: http://localhost:3000

➡️ Backend Docs: http://localhost:8000/docs

🧭 API Overview
Endpoint

Method

Description

/health

GET

Check server status

/ask

POST

Send question to AI chatbot

Example Request Body for /ask:

{
  "question": "How to save water in farming?"
}

🗂️ Project Structure
GlobalGreen/
├── backend/           # FastAPI backend
├── src/               # Next.js frontend
│   ├── app/           # Pages and routes
│   ├── components/    # Reusable UI components
│   ├── services/      # API layer
│   └── types/         # TypeScript types
├── public/            # Static assets
├── .env.example
└── README.md

🛠️ Roadmap
[✅] Core eco-currency system

[✅] AI chatbot integration

[🚧] Authentication & profiles

[🚧] Real-time notifications

[🚧] Mobile version

📜 License
Licensed under the MIT License.

© 2025 GlobalGreen — Made with 💚 for a sustainable future.
