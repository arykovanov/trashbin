all: docker_image

docker_image_base: 
	docker build -f Dockerfile.base -t llm-chat-base .

docker_image: docker_image_base frontend
	docker build -t llm-chat .

frontend:
	cd frontend && npm run build

.PHONY: all docker_image_base docker_image frontend
