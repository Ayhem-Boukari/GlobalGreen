GlobalGreen
===========

A full‑stack platform to promote sustainable farming and green energy actions.
Users earn eco‑currencies (HydroCoins, BioCoins, LogiCoins, CarbonCredits) that
roll up into EcoCoins and can be used in a green marketplace. An AI chatbot
powered by Groq provides quick, practical guidance.

Features
--------
- Eco‑currencies with balances and transaction history
- Green marketplace with filters and product details
- AI chatbot (Groq Llama 3.3) for sustainability tips
- Dashboard with charts and period filters
- Responsive, accessible UI with dark mode

Tech Stack
---------
- Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, ApexCharts
- Backend: FastAPI (Python 3.13), Uvicorn, Pydantic, httpx
- AI: Groq (llama-3.3-70b-versatile)

Requirements
------------
- Node.js 18+
- Python 3.11+
- Git

Quick Start
-----------
1) Install dependencies

```powershell
# from project root
npm install --legacy-peer-deps
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r backend/requirements.txt
```

2) Configure environment variables

Create `.env` or `.env.local` (not committed):

```env
GROQ_API_KEY=your_groq_api_key
FASTAPI_URL=http://localhost:8000
NEXT_PUBLIC_CHAT_ENDPOINT=/api/chat
```

3) Run locally

Terminal A (backend):
```powershell
cd backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Terminal B (frontend):
```powershell
npm run dev
```

Frontend: http://localhost:3000
Backend:  http://localhost:8000  (docs at /docs)

API (brief)
-----------
- GET `/health` → `{ "status": "ok" }`
- POST `/ask` with `{ "question": "..." }` → `{ "response": "..." }`

Project Structure (short)
-------------------------
```
backend/           # FastAPI app
src/               # Next.js app (app/, components/, services/)
public/            # Static assets
.env.example       # Env template
```

Notes
-----
- Do not commit `.env` or `.env.local` (already ignored).
- If port 3000 is busy, Next.js will auto‑switch to 3001.

License
-------
MIT
<div align="center"># NextAdmin - Next.js Admin Dashboard Template and Components



# 🌱 GlobalGreen**NextAdmin** is a Free, open-source Next.js admin dashboard toolkit featuring 200+ UI components and templates that come with pre-built elements, components, pages, high-quality design, integrations, and much more to help you create powerful admin dashboards with ease.



### Sustainable Farming & Green Energy Management Platform

[![nextjs admin template](https://cdn.pimjo.com/nextadmin-2.png)](https://nextadmin.co/)

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)**NextAdmin** provides you with a diverse set of dashboard UI components, elements, examples and pages necessary for creating top-notch admin panels or dashboards with **powerful** features and integrations. Whether you are working on a complex web application or a basic website, **NextAdmin** has got you covered.

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)

[![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python)](https://www.python.org/)### [✨ Visit Website](https://nextadmin.co/)

[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)### [🚀 Live Demo](https://demo.nextadmin.co/)

### [📖 Docs](https://docs.nextadmin.co/)

**A full-stack web application that gamifies environmental consciousness through blockchain-inspired eco-currencies, AI-powered sustainability guidance, and a green marketplace.**

By leveraging the latest features of **Next.js 14** and key functionalities like **server-side rendering (SSR)**, **static site generation (SSG)**, and seamless **API route integration**, **NextAdmin** ensures optimal performance. With the added benefits of **React 18 advancements** and **TypeScript** reliability, **NextAdmin** is the ultimate choice to kickstart your **Next.js** project efficiently.

[Features](#-features) • [Demo](#-demo) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

## Installation

</div>

1. Download/fork/clone the repo and Once you're in the correct directory, it's time to install all the necessary dependencies. You can do this by typing the following command:

---

```

## 📋 Table of Contentsnpm install

```

- [Overview](#-overview)If you're using **Yarn** as your package manager, the command will be:

- [Features](#-features)

- [Tech Stack](#-tech-stack)```

- [Architecture](#-architecture)yarn install

- [Quick Start](#-quick-start)```

- [Environment Setup](#-environment-setup)

- [Usage](#-usage)2. Okay, you're almost there. Now all you need to do is start the development server. If you're using **npm**, the command is:

- [API Documentation](#-api-documentation)

- [Project Structure](#-project-structure)```

- [Contributing](#-contributing)npm run dev

- [License](#-license)```

And if you're using **Yarn**, it's:

---

```

## 🌍 Overviewyarn dev

```

**GlobalGreen** is a comprehensive platform designed to incentivize and track sustainable farming practices through an innovative multi-currency ecosystem. Users earn eco-rewards for environmentally-friendly actions and can spend them in a marketplace featuring sustainable products.

And voila! You're now ready to start developing. **Happy coding**!

### 🎯 Purpose

## Highlighted Features

- **Track Sustainability Efforts** - Monitor water conservation, organic farming, logistics optimization, and carbon reduction**200+ Next.js Dashboard Ul Components and Templates** - includes a variety of prebuilt **Ul elements, components, pages, and examples** crafted with a high-quality design.

- **Earn Eco-Rewards** - Get rewarded with multiple currency types based on specific sustainable actionsAdditionally, features seamless **essential integrations and extensive functionalities**.

- **Shop Green** - Purchase eco-friendly products using earned currencies

- **Get AI Guidance** - Receive personalized sustainability advice from EcoBot (powered by Groq AI)- A library of over **200** professional dashboard UI components and elements.

- **Manage Carbon Credits** - Track and trade carbon offset credits- Five distinctive dashboard variations, catering to diverse use-cases.

- A comprehensive set of essential dashboard and admin pages.

---- More than **45** **Next.js** files, ready for use.

- Styling facilitated by **Tailwind CSS** files.

## ✨ Features- A design that resonates premium quality and high aesthetics.

- A handy UI kit with assets.

### 💰 Multi-Currency Ecosystem- Over ten web apps complete with examples.

- Support for both **dark mode** and **light mode**.

Four distinct eco-currencies tied to specific sustainability actions:- Essential integrations including - Authentication (**NextAuth**), Database (**Postgres** with **Prisma**), and Search (**Algolia**).

- Detailed and user-friendly documentation.

| Currency | Purpose | How to Earn |- Customizable plugins and add-ons.

|----------|---------|-------------|- **TypeScript** compatibility.

| 💧 **HydroCoins** | Water conservation | Efficient irrigation & water-saving practices |- Plus, much more!

| 🌿 **BioCoins** | Organic farming | Bio-fertilizers & organic methods |

| 🚚 **LogiCoins** | Logistics optimization | Reducing waste & optimizing farm logistics |All these features and more make **NextAdmin** a robust, well-rounded solution for all your dashboard development needs.

| ☁️ **CarbonCredits** | Emission reduction | Lowering CO₂ emissions |

| 🪙 **EcoCoins** | Main currency | Aggregate of all sub-currencies (blockchain-based) |## Update Logs



### 🛒 Green Marketplace### Version 1.2.0 - Major Upgrade and UI Improvements - [Jan 27, 2025]



- **Sustainable Products** - Drip irrigation kits, organic fertilizers, electric vehicles- Upgraded to Next.js v15 and updated dependencies

- **Multi-Currency Support** - Pay with any of the four eco-currencies- API integration with loading skeleton for tables and charts.

- **Smart Filtering** - Filter by currency type, price, rating, and stock availability- Improved code structure for better readability.

- **Featured Products** - Highlighted eco-friendly items- Rebuilt components like dropdown, sidebar, and all ui-elements using accessibility practices.

- Using search-params to store dropdown selection and refetch data.

### 🤖 AI-Powered Chatbot (EcoBot)- Semantic markups, better separation of concerns and more.



- **Real-time Advice** - Get instant sustainability tips powered by Groq's Llama 3.3 70B model### Version 1.1.0

- **Context-Aware** - Understands your farming practices and provides personalized guidance- Updated Dependencies

- **Markdown Support** - Formatted responses with links, lists, and emphasis- Removed Unused Integrations

- **Character Limit** - 500 characters per message for concise interactions- Optimized App



### 📊 Interactive Dashboard### Version 1.0

- Initial Release - [May 13, 2024]

- **Real-Time Metrics** - Track your sustainability score and eco-currency balances
- **Visual Charts** - ApexCharts integration for data visualization
- **Period Filtering** - View data by month or year
- **Transaction History** - Complete audit trail of all currency transactions

### 🌓 Modern UI/UX

- **Dark Mode** - Full theme support
- **Responsive Design** - Mobile-first approach
- **Loading States** - Smooth skeleton loaders
- **Accessibility** - ARIA labels and keyboard navigation

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.1.6 | React framework with SSR & API routes |
| **React** | 19.0.0 | UI component library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.16 | Utility-first CSS framework |
| **Lucide React** | 0.475.0 | Modern icon library |
| **ApexCharts** | 3.45.2 | Interactive charts |
| **React Markdown** | 10.0.0 | Markdown rendering |
| **Axios** | 1.7.9 | HTTP client |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **FastAPI** | 0.115.4 | Modern Python web framework |
| **Python** | 3.13.5 | Backend programming language |
| **Uvicorn** | 0.32.0 | ASGI server |
| **Pydantic** | 2.9.2 | Data validation |
| **httpx** | 0.27.2 | Async HTTP client |
| **python-dotenv** | 1.0.1 | Environment management |

### AI Integration

| Service | Model | Purpose |
|---------|-------|---------|
| **Groq AI** | llama-3.3-70b-versatile | Fast AI inference for chatbot |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      User Interface                         │
│              (Next.js 15 + React 19 + TypeScript)          │
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
```

### Data Flow

```
User Input → Next.js UI → API Route → FastAPI Backend → Groq AI → Response
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**
- **Python** 3.11+ ([Download](https://www.python.org/))
- **pip** (comes with Python)
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/globalgreen.git
cd globalgreen
```

2. **Install frontend dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Setup Python backend**

```bash
# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On Windows:
.\.venv\Scripts\Activate.ps1
# On macOS/Linux:
source .venv/bin/activate

# Install backend dependencies
pip install -r backend/requirements.txt
```

4. **Configure environment variables**

```bash
# Copy the example environment file
cp .env.example .env
cp .env.example .env.local

# Edit .env and .env.local with your actual credentials
# IMPORTANT: Get your Groq API key from https://console.groq.com/keys
```

5. **Start the services**

**Terminal 1 - Backend:**
```bash
cd backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

6. **Access the application**

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🔐 Environment Setup

### Required Environment Variables

Create a `.env` file in the root directory:

```env
# AI Configuration (REQUIRED)
GROQ_API_KEY=your_groq_api_key_here

# Backend Configuration
FASTAPI_URL=http://localhost:8000

# Frontend Configuration
NEXT_PUBLIC_CHAT_ENDPOINT=/api/chat
```

### Getting a Groq API Key

1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key and paste it in your `.env` file

**⚠️ IMPORTANT:** Never commit your `.env` or `.env.local` files to Git!

---

## 📖 Usage

### Dashboard

Navigate to the home page to see:
- EcoCoins balance and overview
- Sub-currency breakdown
- Recent transactions
- Sustainability metrics

### Marketplace

1. Go to **Marketplace** in the sidebar
2. Browse sustainable products
3. Filter by currency type (HydroCoins, BioCoins, LogiCoins, CarbonCredits)
4. Sort by price, rating, or stock
5. View product details and ratings

### Coin Management

1. Navigate to **Coins** page
2. View your EcoCoins balance
3. Check sub-currency balances
4. Review transaction history
5. Monitor green loan status
6. Complete tasks to earn more coins

### AI Chatbot

1. Click on **Chatbot** in the sidebar
2. Type your sustainability question (max 500 characters)
3. Get instant AI-powered advice from EcoBot
4. View responses in formatted markdown

---

## 📚 API Documentation

### Backend Endpoints

#### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "ok"
}
```

#### AI Chat
```http
POST /ask
Content-Type: application/json

{
  "question": "How can I reduce water usage in farming?"
}
```

**Response:**
```json
{
  "response": "Here are some effective ways to reduce water usage..."
}
```

### Frontend API Routes

#### Chat Proxy
```http
POST /api/chat
Content-Type: application/json

{
  "question": "Your question here"
}
```

For detailed API documentation, visit [http://localhost:8000/docs](http://localhost:8000/docs) when the backend is running.

---

## 📁 Project Structure

```
GlobalGreen/
├── backend/                      # Python FastAPI backend
│   ├── main.py                  # Main FastAPI application
│   ├── requirements.txt         # Python dependencies
│   └── __init__.py             # Package initialization
├── src/
│   ├── app/                     # Next.js app directory
│   │   ├── (home)/             # Dashboard pages
│   │   ├── api/chat/           # Chat API proxy
│   │   ├── chat/               # Chatbot UI
│   │   ├── coins/              # Coin management
│   │   ├── marketplace/        # Marketplace pages
│   │   └── layout.tsx          # Root layout
│   ├── components/             # Reusable UI components
│   │   ├── Layouts/            # Layout components
│   │   ├── Charts/             # Data visualization
│   │   ├── Tables/             # Table components
│   │   └── ui/                 # Base UI elements
│   ├── services/               # API service layer
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript definitions
├── public/                     # Static assets
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── package.json               # Node.js dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind CSS config
├── next.config.mjs            # Next.js config
└── README.md                  # This file
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 🐛 Known Issues

- Image domain deprecation warning (use `remotePatterns` instead of `domains`)
- Port 3000 may be in use (auto-switches to 3001)

---

## 🔮 Roadmap

### Phase 1: Core Enhancements
- [ ] Real blockchain integration (Ethereum/Polygon)
- [ ] User authentication system (NextAuth)
- [ ] Real-time notifications (Socket.io)
- [ ] Mobile app (React Native)

### Phase 2: Features
- [ ] Social features (profiles, leaderboards)
- [ ] Community marketplace
- [ ] IoT sensor integration
- [ ] Advanced analytics dashboard

### Phase 3: Scale
- [ ] Multi-language support (i18n)
- [ ] Regional marketplace variations
- [ ] Partnership integrations
- [ ] Carbon offset verification

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **FastAPI** - For the modern Python web framework
- **Groq** - For fast AI inference
- **Vercel** - For hosting and deployment
- **TailwindCSS** - For the utility-first CSS framework
- **Lucide** - For beautiful icons

---

## 📞 Support

Need help? Have questions?

- 📧 Email: support@globalgreen.app
- 💬 Discord: [Join our community](#)
- 🐦 Twitter: [@GlobalGreenApp](#)
- 📚 Documentation: [See TECHNICAL_REPORT.md](TECHNICAL_REPORT.md)

---

<div align="center">

**Made with 💚 for a sustainable future**

⭐ **Star this repo if you find it helpful!** ⭐

[Back to Top](#-globalgreen)

</div>
