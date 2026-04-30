FROM node:22-bullseye-slim AS base
RUN npm install -g pnpm

FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY ./.env.local ./.env.local

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY ./.env.local ./.env.local
RUN pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV TZ=Asia/Seoul
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create the data directory and set permissions BEFORE defining the VOLUME
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data
VOLUME /app/data

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY ./.env.local ./.env.local

# If you have initial data, copy it, but be careful with volume mounting
# Overwriting a volume mount with COPY often doesn't work as expected if the volume is already mapped
COPY --from=builder --chown=nextjs:nodejs /app/data ./data

USER nextjs
EXPOSE 3000


ENTRYPOINT ["node", "server.js"]


# docker build --tag anguklaw:2024030401 .
# docker save anguklaw:2024030403 >> ~/anguklaw2024030403.tar
# sudo scp -i penvotkeypair1.pem ./anguklaw2024030403.tar ubuntu@3.35.49.93:/home/ubuntu/
# sudo docker load -i /home/ubuntu/anguklaw2024030403.tar
# sudo docker run -dit --name anguklaw -p 3000:3000 -v $(pwd)/data:/app/data anguklaw:2024030403