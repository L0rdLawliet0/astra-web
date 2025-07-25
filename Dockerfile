# Étape 1 – installation + build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 – runtime
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# On récupère uniquement ce qu’il faut
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /app/next.config.js       ./next.config.js
COPY --from=builder /app/public/locales ./public/locales

EXPOSE 3000
CMD ["npm", "start"]
