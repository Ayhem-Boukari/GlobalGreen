# GlobalGreen Chatbot Setup Instructions

## Issue: Invalid Groq API Key

The chatbot is currently returning errors because the Groq API key in the `.env` file is invalid.

## How to Fix:

### 1. Get a Valid Groq API Key

1. Visit: https://console.groq.com/keys
2. Sign up or log in to your Groq account
3. Create a new API key
4. Copy the generated API key

### 2. Update the Environment Files

Update the `GROQ_API_KEY` in both:
- `.env`
- `.env.local`

Replace the current invalid key with your new valid key:

```
GROQ_API_KEY=your_new_valid_groq_api_key_here
```

### 3. Restart the Backend Server

After updating the API key, restart the FastAPI backend:

```powershell
powershell -Command "Set-Location 'C:\Users\MSI\Downloads\GlobalGreen-main\GlobalGreen-main\backend'; python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000"
```

### 4. Test the Chatbot

Once restarted, go to http://localhost:3001/chat and test the chatbot again.

## Current Setup Status

✅ Node.js installed (v22.20.0)  
✅ npm installed (v10.9.3)  
✅ Python installed (v3.13.5)  
✅ Backend dependencies installed  
✅ Frontend dependencies installed  
✅ FastAPI backend running on http://localhost:8000  
✅ Next.js frontend running on http://localhost:3001  
❌ Groq API key is invalid - **needs to be updated**

## Alternative: Use a Mock Backend (for testing only)

If you don't want to get a Groq API key right now, I can create a simple mock backend that returns predefined responses for testing purposes.
