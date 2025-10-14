# 🌱 GlobalGreen

<div align="center">

**A Revolutionary Platform for Sustainable Farming and Green Energy Solutions**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Python%203.13-green?style=for-the-badge&logo=fastapi)
![Groq](https://img.shields.io/badge/AI-Groq_Llama_3.3-FF6B6B?style=for-the-badge)

*Empowering sustainable actions through AI-driven eco-rewards and smart marketplace solutions*

</div>

## 📖 Overview

GlobalGreen is a comprehensive full-stack platform that bridges sustainable farming practices with green energy initiatives. Our innovative ecosystem rewards users with multi-tiered eco-currencies for environmentally conscious actions, creating a circular economy that promotes sustainability through tangible incentives.

### 🌟 Eco-Currency System

| Currency | Purpose | Earning Actions |
|----------|---------|-----------------|
| **HydroCoins** 💧 | Water conservation | Efficient irrigation, Rainwater harvesting |
| **BioCoins** 🌿 | Organic farming | Composting, Natural pesticides |
| **LogiCoins** 📦 | Sustainable logistics | Local sourcing, Eco-packaging |
| **CarbonCredits** 🌍 | Carbon footprint reduction | Renewable energy, Tree planting |
| **EcoCoins** 💚 | Universal currency | Combined from all currencies |

## 🚀 Key Features

### 💰 Smart Reward System
- **Multi-currency ecosystem** with specialized eco-currencies
- **Automated reward calculation** based on sustainable actions
- **Real-time currency conversion** to universal EcoCoins
- **Gamified achievement system** to encourage continuous participation

### 🛒 Green Marketplace
- **Smart filtering** by sustainability impact and product category
- **Eco-coin transactions** for seamless green shopping
- **Vendor sustainability ratings** to promote ethical businesses
- **Carbon footprint tracking** for each purchase

### 🤖 AI Sustainability Assistant
- **Instant guidance** powered by Groq's Llama 3.3 (70B)
- **Personalized recommendations** based on user location and preferences
- **Actionable insights** for improving sustainability practices
- **24/7 availability** for immediate eco-guidance

### 📊 Advanced Analytics Dashboard
- **Interactive charts** and sustainability metrics
- **Progress tracking** across all eco-currencies
- **Environmental impact visualization**
- **Personalized goal setting** and achievement tracking

### 🌓 Premium User Experience
- **Fully responsive design** across all devices
- **Dark/Light mode** with automatic system preference detection
- **Accessibility-first approach** (WCAG 2.1 compliant)
- **Optimized performance** with lazy loading and efficient state management

## 🛠 Tech Stack

### Frontend Excellence
- **Next.js 15** - App Router with React Server Components
- **React 19** - Latest features with concurrent rendering
- **TypeScript** - Full type safety and developer experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **ApexCharts** - Interactive and responsive data visualization

### Backend Powerhouse
- **FastAPI** - High-performance Python web framework
- **Python 3.13** - Latest features and optimizations
- **Uvicorn** - Lightning-fast ASGI server
- **Pydantic** - Data validation with Python type hints
- **httpx** - Modern async HTTP client

### AI Integration
- **Groq LPU** - Language Processing Unit inference engine
- **Llama 3.3 (70B)** - State-of-the-art language model
- **Custom prompt engineering** for sustainability expertise
- **Context-aware responses** with real-time data integration

## ⚙️ Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Python** 3.11+ ([Download](https://python.org))
- **Git** ([Download](https://git-scm.com/))

## 🚀 Quick Start

### 1️⃣ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-org/globalgreen.git
cd globalgreen

# Install frontend dependencies
npm install --legacy-peer-deps

# Set up Python virtual environment
python -m venv .venv

# Activate virtual environment
# Windows PowerShell:
.\.venv\Scripts\Activate.ps1

# Mac/Linux:
source .venv/bin/activate

# Install backend dependencies
pip install -r backend/requirements.txt
```

### 2️⃣ Environment Configuration

Create a `.env` file in the root directory:

```env
# ============================================
# GROQ AI API CONFIGURATION
# ============================================
GROQ_API_KEY=your_groq_api_key_here

# ============================================
# BACKEND API CONFIGURATION
# ============================================
FASTAPI_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/chat

# ============================================
# DATABASE CONFIGURATION (Optional)
# ============================================
# DATABASE_URL=postgresql://user:pass@localhost:5432/globalgreen

# ============================================
# APPLICATION SETTINGS
# ============================================
NODE_ENV=development
LOG_LEVEL=INFO
```

> **⚠️ Security Notice**: 
> - Replace `your_groq_api_key_here` with your actual Groq API key
> - Ensure no spaces around `=` signs in environment variables
> - Never commit `.env` file to version control
> - Use `.env.example` as a template for production deployment

### 3️⃣ Application Launch

**Start Backend Server:**
```bash
cd backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Start Frontend Development Server:**
```bash
npm run dev
```

### 🌐 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend Application** | http://localhost:3000 | Main user interface |
| **Backend API Documentation** | http://localhost:8000/docs | Interactive API docs |
| **Backend Health Check** | http://localhost:8000/health | Service status |

## 🔌 API Reference

### Core Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/health` | `GET` | Service health check | None |
| `/api/chat` | `POST` | AI sustainability assistant | `question: string` |
| `/api/eco-actions` | `GET` | Available eco-actions | `category?: string` |
| `/api/rewards/calculate` | `POST` | Calculate eco-rewards | `action: EcoAction` |

### Example API Usage

**AI Chatbot Request:**
```bash
curl -X POST "http://localhost:8000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What are the most effective water conservation techniques for small farms in arid regions?",
    "context": {
      "location": "arid_region",
      "farm_size": "small"
    }
  }'
```

**Response:**
```json
{
  "response": "For small farms in arid regions, consider implementing drip irrigation systems, mulching to reduce evaporation, rainwater harvesting, and drought-resistant crop varieties...",
  "sources": ["FAO Water Management", "Sustainable Agriculture Research"],
  "suggested_actions": [
    {
      "action": "Install drip irrigation",
      "hydrocoins_earned": 50,
      "impact": "Reduces water usage by 30-50%"
    }
  ]
}
```

## 📁 Project Architecture

```
GlobalGreen/
├── 📂 backend/                 # FastAPI Backend
│   ├── main.py               # FastAPI application entry point
│   ├── requirements.txt      # Python dependencies
│   ├── 📂 api/              # API route handlers
│   ├── 📂 models/           # Pydantic data models
│   ├── 📂 services/         # Business logic layer
│   └── 📂 utils/            # Utility functions
├── 📂 src/                   # Next.js Frontend
│   ├── 📂 app/              # App Router pages and routes
│   ├── 📂 components/       # Reusable React components
│   │   ├── 📂 ui/          # Base UI components
│   │   ├── 📂 dashboard/   # Dashboard-specific components
│   │   └── 📂 marketplace/ # Marketplace components
│   ├── 📂 services/         # API client and data fetching
│   ├── 📂 types/           # TypeScript type definitions
│   ├── 📂 utils/           # Frontend utilities
│   └── 📂 styles/          # Global styles and Tailwind config
├── 📂 public/               # Static assets
│   ├── images/             # Image resources
│   └── icons/              # SVG icons and logos
├── .env.example            # Environment variables template
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation
```

## 🗺️ Development Roadmap

### ✅ Completed
- **Core eco-currency reward system**
- **AI chatbot integration with Groq**
- **Basic marketplace functionality**
- **Interactive dashboard with charts**
- **Responsive UI with dark mode**

### 🚧 In Progress
- **User authentication & profile management**
- **Real-time notifications system**
- **Advanced marketplace features**
- **Mobile application development**

### 📅 Planned
- **Blockchain integration for transparent transactions**
- **IoT device integration for automated reward tracking**
- **Multi-language support**
- **Advanced analytics and reporting**
- **Community features and social sharing**

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Code style and standards
- Pull request process
- Issue reporting
- Feature requests

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for full details.

**© 2025 GlobalGreen** - *Building a sustainable future, one eco-action at a time* 💚

---

<div align="center">

### 🌍 Join the Sustainability Revolution

*Together, we're creating a greener tomorrow through technology and community action*

[Report Bug](https://github.com/your-org/globalgreen/issues) • 
[Request Feature](https://github.com/your-org/globalgreen/issues) • 
[Documentation](https://docs.globalgreen.app)

</div>
