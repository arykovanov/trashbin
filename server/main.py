from fastapi import FastAPI
from chat import chat_with_llm
from pydantic import BaseModel

app = FastAPI()


class ChatResponse(BaseModel):
    answer: str


@app.get("/api/chat")
async def chat(message: str) -> ChatResponse:
    answer = await chat_with_llm(message)
    return ChatResponse(answer=answer)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
