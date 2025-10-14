# 🌱 GlobalGreen

A full-stack platform that promotes sustainable farming and green energy actions.  
Users earn eco-currencies (**HydroCoins**, **BioCoins**, **LogiCoins**, **CarbonCredits**) that combine into **EcoCoins**, usable in a green marketplace.  
An AI chatbot powered by **Groq** provides instant, practical sustainability guidance.

---

## 🚀 Features

- 💰 **Multi-currency eco-reward system**  
- 🛒 **Green marketplace** with smart filters  
- 🤖 **AI chatbot** for sustainability tips (Groq Llama 3.3)  
- 📊 **Dashboard** with interactive charts  
- 🌓 **Responsive and accessible UI** with dark mode  

---

## 🧠 Tech Stack

**Frontend:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · ApexCharts  
**Backend:** FastAPI (Python 3.13) · Uvicorn · Pydantic · httpx  
**AI:** Groq – Llama 3.3 (70B Versatile)

---

## ⚙️ Requirements

- Node.js 18+  
- Python 3.11+  
- Git

---

## 🧩 Quick Start

### 1️⃣ Install Dependencies

```bash
# Frontend
npm install --legacy-peer-deps

# Backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1     # (Windows)
# or source .venv/bin/activate   # (Mac/Linux)
pip install -r backend/requirements.txt
```

### 2️⃣ Create Environment File

Create a `.env` file in the root directory with the following variables:

```env
# Groq AI API Configuration
GROQ_API_KEY=your_groq_api_key_here

# Backend API Configuration
FASTAPI_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/chat

# Optional: Database & Additional Settings
# DATABASE_URL=your_database_url
# NODE_ENV=development
```

**Important Notes:**
- Replace `your_groq_api_key_here` with your actual Groq API key
- Ensure no spaces around the `=` signs
- Keep this file secure and never commit it to version control

### 3️⃣ Run the Project

**Backend Server**
```bash
cd backend
python -m uvicorn main:app --reload
```

**Frontend Development**
```bash
npm run dev
```

**Access Points:**
- ➡️ **Frontend**: http://localhost:3000
- ➡️ **Backend API Docs**: http://localhost:8000/docs

---

## 🧭 API Overview

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Check server status |
| `/ask` | POST | Send question to AI chatbot |

**Example Request:**
```json
{
    "question": "How to save water in farming?"
}
```

---

## 🗂 Project Structure

```
GlobalGreen/
├── backend/           # FastAPI backend
│   ├── main.py       # FastAPI application
│   └── requirements.txt
├── src/               # Next.js frontend
│   ├── app/          # Pages and routes
│   ├── components/   # Reusable UI components
│   ├── services/     # API layer
│   └── types/        # TypeScript types
├── public/           # Static assets
├── .env.example      # Environment template
└── README.md
```

---

## 🛠 Roadmap

- ✅ **Core eco-currency system**
- ✅ **AI chatbot integration**
- 🚧 **Authentication & profiles**
- 🚧 **Real-time notifications**
- 🚧 **Mobile version**

---

## 📜 License

Licensed under the MIT License.  
© 2025 GlobalGreen — Made with 💚 for a sustainable future.
