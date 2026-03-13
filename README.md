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

### 3. Docker Deployment

This project includes Dockerfiles and a Makefile for containerizing the application. The Docker image builds the frontend and serves it alongside the FastAPI backend.

To build the Docker image:

```bash
# This will build the base image, build the frontend, and create the final 'llm-chat' image
make docker_image
```

To run the Docker container:

```bash
# Don't forget to pass your environment variables (like GOOGLE_API_KEY)
docker run -p 8000:80 --env-file .env llm-chat
```

The application will now be accessible at `http://localhost:8000`.
