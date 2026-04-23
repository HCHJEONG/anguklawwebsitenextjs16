FROM node:20-bullseye-slim AS base
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV TZ=Asia/Seoul
ENV PORT=3000

ENTRYPOINT ["node", "server.js"]


# docker build --tag anguklaw:2024030401 .
# docker save anguklaw:2024030403 >> ~/anguklaw2024030403.tar
# sudo scp -i penvotkeypair1.pem ./anguklaw2024030403.tar ubuntu@3.35.49.93:/home/ubuntu/
# sudo docker load -i /home/ubuntu/anguklaw2024030403.tar
# sudo docker run -dit --name anguklaw -p 3000:3000 anguklaw:2024030403