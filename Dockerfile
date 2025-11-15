# Stage 1: build
FROM node:18-alpine AS builder
LABEL maintainer="GitHub Copilot"
WORKDIR /usr/src/app
ENV NODE_ENV=development

# Instala ferramentas necessárias (opcional: removível se não usar bibliotecas nativas)
RUN apk add --no-cache python3 make g++

# Copia arquivos de dependências e instala
COPY package*.json ./
# Se usar yarn/pnpm, substitua por COPY yarn.lock . / RUN yarn --frozen-lockfile
RUN npm ci

# Copia o restante do código e roda build (ajuste se não usar TypeScript)
COPY . .
RUN npm run build

# Stage 2: runtime
FROM node:18-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV PORT=3000

# Cria usuário não-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copia artefatos do build
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

USER appuser
EXPOSE 3000

# Ajuste o comando abaixo conforme o ponto de entrada real do seu projeto.
# Ex: ["node", "dist/server.js"] ou ["npm", "start"]
CMD ["node", "dist/index.js"]