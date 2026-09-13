# Build Stage: Multi-stage Docker build using Go 1.22 Alpine
FROM golang:1.22-alpine AS builder

WORKDIR /src

# Install CA certificates and git for module resolution if needed
RUN apk --no-cache add ca-certificates git

# Cache and download Go dependencies
COPY go.mod go.sum* ./
RUN go mod download

# Copy application source code
COPY . .

# Compile optimized, static binary
RUN CGO_ENABLED=0 GOOS=linux go build \
    -trimpath \
    -ldflags="-w -s" \
    -o /app/fhir-service .

# Runtime Stage: Hardened Alpine 3.19 runtime with non-root user
FROM alpine:3.19

# Install security certificates and curl for container healthchecking
RUN apk --no-cache add ca-certificates tzdata curl && \
    addgroup -g 10001 -S vascule && \
    adduser -u 10001 -S vascule -G vascule

WORKDIR /app

# Copy binary from builder stage with proper non-root ownership
COPY --from=builder --chown=vascule:vascule /app/fhir-service /app/fhir-service

# Run as non-root user for security hardening
USER vascule:vascule

# Expose HTTP API port and MLLP TCP port
EXPOSE 8081 2575

# Health check against the /health endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8081/health || exit 1

# Application Entrypoint
ENTRYPOINT ["/app/fhir-service"]
