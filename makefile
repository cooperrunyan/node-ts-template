.PHONY: dev start build buildstart

build:
	@docker-compose build

start:
	@docker-compose up

buildstart:
	@docker-compose up --build

dev:
	@docker-compose -f ./compose.dev.yml up --build
