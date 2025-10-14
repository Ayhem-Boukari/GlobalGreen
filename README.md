# 🌱 GlobalGreen

A full-stack platform to promote **sustainable farming** and **green energy actions**.  
Users earn eco-currencies — **HydroCoins, BioCoins, LogiCoins, CarbonCredits** — that combine into **EcoCoins**, usable in a green marketplace.  
An **AI chatbot powered by Groq** provides quick, practical sustainability guidance.

---

## 🚀 Features

- 💰 Multi-currency eco-reward system  
- 🛒 Green marketplace with filters and product details  
- 🤖 AI chatbot (Groq Llama 3.3) for sustainability tips  
- 📊 Dashboard with charts and filters  
- 🌓 Responsive and accessible UI with dark mode  

---

## 🧠 Tech Stack

**Frontend:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · ApexCharts  
**Backend:** FastAPI (Python 3.13) · Uvicorn · Pydantic · httpx  
**AI:** Groq (Llama 3.3 70B Versatile)

---

## ⚙️ Requirements

- Node.js 18+  
- Python 3.11+  
- Git  

---

## ⚡ Quick Start

### 1️⃣ Install dependencies
```bash
npm install --legacy-peer-deps
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r backend/requirements.txt
2️⃣ Configure environment variables
Create .env or .env.local:

env
Copier le code
GROQ_API_KEY=your_groq_api_key
FASTAPI_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/chat
3️⃣ Run locally
Backend

bash
Copier le code
cd backend
python -m uvicorn main:app --reload
Frontend

bash
Copier le code
npm run dev
Frontend → http://localhost:3000
Backend → http://localhost:8000/docs

📡 API Overview
Endpoint	Method	Description
/health	GET	Check server status
/ask	POST	Send a question to the AI chatbot

Example:

json
Copier le code
{
  "question": "How to save water in farming?"
}
🏗 Architecture
scss
Copier le code
┌─────────────────────────────────────────────────────────────┐
│                      User Interface                         │
│              (Next.js 15 + React 19 + TypeScript)           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js API Routes                        │
│                    (Server Actions)                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   FastAPI Backend                           │
│              (Python 3.13 + FastAPI)                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                      Groq AI API                            │
│           (Llama 3.3 70B Versatile Model)                   │
└─────────────────────────────────────────────────────────────┘
Data Flow

mathematica
Copier le code
User Input → Next.js UI → API Route → FastAPI Backend → Groq AI → Response
📁 Project Structure
csharp
Copier le code
GlobalGreen/
├── backend/            # FastAPI app
│   ├── main.py
│   └── requirements.txt
├── src/
│   ├── app/            # Pages and routes
│   ├── components/     # Reusable UI components
│   ├── services/       # API logic
│   ├── lib/            # Utils and helpers
│   └── types/          # TypeScript types
├── public/             # Static assets
├── .env.example
├── package.json
└── README.md
🛠 Roadmap
✅ Core eco-currency system

✅ AI chatbot integration

🚧 Authentication & profiles

🚧 Notifications and leaderboard

🚧 Mobile version

📜 License
Licensed under the MIT License.
© 2025 GlobalGreen — Made with 💚 for a sustainable future.

yaml
Copier le code

---

Would you like me to add minimal **GitHub badges** (Next.js, FastAPI, Python, MIT) on top for a more polis
