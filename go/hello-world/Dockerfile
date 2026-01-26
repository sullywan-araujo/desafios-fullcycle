FROM golang:1.25.6-alpine AS builder

WORKDIR /app

# otimizando cache do Docker
COPY go.mod ./
RUN go mod download

COPY . .

# CGO_ENABLED=0 cria um binário estático
RUN CGO_ENABLED=0 GOOS=linux go build -o hello-fullcycle -ldflags="-s -w" .

# MultiStage Building
FROM scratch

# cópia do binário anterior
COPY --from=builder /app/hello-fullcycle ./hello-fullcycle



CMD [ "./hello-fullcycle" ]