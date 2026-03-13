import os

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")

from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import StrOutputParser

prompt = PromptTemplate.from_template("Make funny response on the topic: {topic}")

print(prompt.format(topic="cats"))

model = ChatGoogleGenerativeAI(
    model="gemini-flash-latest",

    temperature=1.0,  # Gemini 3.0+ defaults to 1.0
    max_tokens=None,
    timeout=None,
    max_retries=2,
    api_key=GOOGLE_API_KEY,
)

chain = prompt | model | StrOutputParser()

async def chat_with_llm(question) -> str:
    response = await chain.ainvoke({"topic": question})
    return response
