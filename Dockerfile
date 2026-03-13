FROM llm-chat-base

WORKDIR /app

COPY server/*.py .
COPY frontend/dist ./static

CMD ["python", "main.py", "--port", "80"]
