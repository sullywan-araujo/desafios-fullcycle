FROM node:20-slim

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION=v0.9.9


RUN apt-get update && apt-get install -y wget ca-certificates tar \
    && ARCH="$(dpkg --print-architecture)" \
    && case "$ARCH" in \
    amd64)  DOCKERIZE_ARCH="amd64" ;; \
    arm64)  DOCKERIZE_ARCH="arm64" ;; \
    *) echo "Arquitetura não suportada: $ARCH" && exit 1 ;; \
    esac \
    && wget https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-linux-${DOCKERIZE_ARCH}-${DOCKERIZE_VERSION}.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-${DOCKERIZE_ARCH}-${DOCKERIZE_VERSION}.tar.gz \
    && rm dockerize-linux-${DOCKERIZE_ARCH}-${DOCKERIZE_VERSION}.tar.gz \
    && apt-get clean # Limpa o cache para diminuir o tamanho da imagem

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

#CMD [ "node", "index.js" ]