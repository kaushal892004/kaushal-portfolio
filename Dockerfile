# -------- Stage 1: Install dependencies --------
FROM node:18-alpine AS deps
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.11.0 --activate

# Copy lockfiles and install only prod deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# -------- Stage 2: Build the app --------
FROM node:18-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.11.0 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env.production .env

ENV NODE_ENV=production
RUN pnpm build

# -------- Stage 3: Production runtime --------
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy only necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY .env.production .env

EXPOSE 3000

CMD ["pnpm", "start"]
