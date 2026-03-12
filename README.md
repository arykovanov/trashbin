# RAG Project

This is a simple full-stack application featuring a React/Vite frontend and a FastAPI backend powered by LangChain and Google's Gemini LLM.

## Project Structure

- `frontend/`: A React application built with Vite.
- `server/`: A FastAPI backend that integrates with `langchain-google-genai`.

## Prerequisites

- Node.js (for the frontend)
- Python 3.x (for the backend)
- A Google API Key for using Gemini (`GOOGLE_API_KEY`).

## Getting Started

### 1. Backend Setup

Navigate to the `server` directory, configure your environment, and run the FastAPI server.

```bash
cd server

# Note: The project already contains a `.venv` directory. You can activate it using:
source .venv/bin/activate

# Install the required Python dependencies
pip install -r requirements.txt
```

#### Environment Variables

Ensure there is a `.env` file in the root directory configued with your Google Cloud credentials. For example:

```env
export GOOGLE_API_KEY="your_api_key_here"
export GOOGLE_PROJECT_ID="your_project_id_here"
```

To run the backend server:

```bash
# Make sure your environment variables are loaded
source ../.env

# Start the application
python main.py
```

The FastAPI server will start on `http://0.0.0.0:8000` (or `http://localhost:8000`).

### 2. Frontend Setup

Open a new terminal, navigate to the `frontend` directory, and start the development server.

```bash
cd frontend

# Install Node dependencies
npm install

# Start the Vite development server
npm run dev
```

Your React frontend will be accessible, typically at `http://localhost:5173/`.
