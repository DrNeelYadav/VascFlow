# Multi-stage build for Vascule OS Notification Microservice
FROM golang:1.22-alpine AS builder

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-w -s" -o /notification-service main.go

FROM alpine:3.19

RUN addgroup -S vascule && adduser -S vascule -G vascule

WORKDIR /app

COPY --from=builder /notification-service /app/notification-service

USER vascule

EXPOSE 8084

HEALTHCHECK --interval=15s --timeout=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8084/health || exit 1

ENTRYPOINT ["/app/notification-service"]
