FROM python:3.14

WORKDIR /app

COPY server/requirements.txt .
COPY server/*.py .
COPY frontend/dist ./static

RUN pip install -r requirements.txt

CMD ["python", "main.py", "--port", "80"]
