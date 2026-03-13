from fastapi import FastAPI
from chat import chat_with_llm
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

app = FastAPI()


class ChatResponse(BaseModel):
    answer: str

app.mount("/", StaticFiles(directory="static", html=True, check_dir=False), name="static")

@app.get("/api/chat")
async def chat(message: str) -> ChatResponse:
    answer = await chat_with_llm(message)
    return ChatResponse(answer=answer)

if __name__ == "__main__":
    import argparse
    import uvicorn

    parser = argparse.ArgumentParser(description="Run the FastAPI server.")
    parser.add_argument("--host", type=str, default="0.0.0.0", help="Host IP address to bind to.")
    parser.add_argument("--port", type=int, default=8000, help="Port to bind to.")
    args = parser.parse_args()

    uvicorn.run(app, host=args.host, port=args.port)
