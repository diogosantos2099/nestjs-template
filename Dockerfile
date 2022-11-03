FROM node:16 AS build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

# Install NPM dependencies
RUN npm ci
COPY . .

RUN npm run-script build

FROM node:16

WORKDIR /app

# Start server
COPY --from=build /app /app

CMD ["node", "dist/main.js"]