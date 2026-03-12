import os

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")
GOOGLE_PROJECT_ID = os.getenv("GOOGLE_PROJECT_ID", "")

from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

prompt = PromptTemplate.from_template("Tell me a joke about {topic}")

print(prompt.format(topic="cats"))

model = ChatGoogleGenerativeAI(
    model="gemini-flash-latest",

    temperature=1.0,  # Gemini 3.0+ defaults to 1.0
    max_tokens=None,
    timeout=None,
    max_retries=2,
    api_key=GOOGLE_API_KEY,
)

async def chat_with_llm(question) -> str:
    response = await model.ainvoke(question)
    return response.text
