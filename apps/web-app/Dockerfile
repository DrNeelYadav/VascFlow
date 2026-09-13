# Multi-stage Docker build for Next.js Web App
# Stage 1: Dependency resolution
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on root package manifests
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Production compilation
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Compile application bundle
RUN npm run build || npx next build

# Stage 3: Hardened production runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Security hardening: Dedicated non-root service user
RUN addgroup -g 10001 -S vascule && \
    adduser -u 10001 -S vascule -G vascule

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder --chown=vascule:vascule /app/dist ./dist
COPY --from=builder --chown=vascule:vascule /app/.next ./.next

USER vascule:vascule

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["npx", "next", "start", "-p", "3000"]
