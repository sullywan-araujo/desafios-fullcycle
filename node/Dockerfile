FROM node:20-alpine

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION=v0.9.9

# Detecta a arquitetura e baixa o dockerize correto
RUN apk add --no-cache wget ca-certificates \
    && ARCH="$(apk --print-arch)" \
    && case "$ARCH" in \
    x86_64)   DOCKERIZE_ARCH="amd64" ;; \
    aarch64)  DOCKERIZE_ARCH="arm64" ;; \
    *) echo "Arquitetura não suportada: $ARCH" && exit 1 ;; \
    esac \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-linux-${DOCKERIZE_ARCH}-${DOCKERIZE_VERSION}.tar.gz \
    | tar xzf - -C /usr/local/bin \
    && apk del wget

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

#CMD [ "node", "index.js" ]