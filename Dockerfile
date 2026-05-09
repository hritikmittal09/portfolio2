# ── Stage 1: build ──────────────────────────
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# ── Stage 2: dev ────────────────────────────
FROM node:18-alpine AS dev

WORKDIR /app

RUN npm install -g tailwindcss live-server

COPY --from=build /app .

EXPOSE 3000
CMD ["live-server", "--port=3000"]

# ── Stage 3: prod ───────────────────────────
FROM nginx:alpine AS prod

COPY --from=build /app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]