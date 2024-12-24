setup: install
	npx simple-git-hooks

install:
	npm ci

start-server:
	node bin/server.js

dev:
	npm run dev

run:
	make start-server & make dev

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

update-deps:
	npx ncu -u

test-steps:
	node --test --test-name-pattern step1
