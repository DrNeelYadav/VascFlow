package main

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.24.0"
	"go.opentelemetry.io/otel/trace"
)

const (
	serviceName       = "auth-service"
	serviceVersion    = "1.0.0"
	tracerPackageName = "github.com/vascule-os/auth-service"
	institutionalSalt = "vascule_institutional_secret_salt_v1"
	tokenTTL          = 24 * time.Hour
)

// InstitutionalAccount represents an authorized institutional member in the directory.
type InstitutionalAccount struct {
	ID                 string
	InstitutionalEmail string
	SecurityPinHash    string
	FullName           string
	RoleCode           string
	Department         string
	InstitutionID      string
	Permissions        []string
}

// InstitutionalClaims defines the JWT claims issued and verified by Vascule OS.
type InstitutionalClaims struct {
	UserID             string   `json:"uid"`
	InstitutionalEmail string   `json:"email"`
	FullName           string   `json:"fullName"`
	RoleCode           string   `json:"roleCode"`
	Department         string   `json:"department"`
	InstitutionID      string   `json:"institutionId"`
	Permissions        []string `json:"permissions"`
	jwt.RegisteredClaims
}

// UserProfile represents the public user metadata returned on successful login.
type UserProfile struct {
	ID                 string   `json:"id"`
	InstitutionalEmail string   `json:"institutionalEmail"`
	FullName           string   `json:"fullName"`
	RoleCode           string   `json:"roleCode"`
	Department         string   `json:"department"`
	InstitutionID      string   `json:"institutionId"`
	Status             string   `json:"status"`
	Permissions        []string `json:"permissions"`
}

// LoginRequest defines the payload for POST /api/v1/auth/login.
type LoginRequest struct {
	InstitutionalEmail string `json:"institutionalEmail" binding:"required,email"`
	SecurityPin        string `json:"securityPin" binding:"required,min=4,max=12"`
	RoleCode           string `json:"roleCode" binding:"required"`
}

// LoginResponse defines the successful authentication response payload.
type LoginResponse struct {
	Token     string      `json:"token"`
	TokenType string      `json:"tokenType"`
	ExpiresIn int64       `json:"expiresIn"`
	User      UserProfile `json:"user"`
}

// VerifyTokenRequest defines the optional body for POST /api/v1/auth/verify.
type VerifyTokenRequest struct {
	Token string `json:"token"`
}

// VerifyTokenResponse defines the verification result payload.
type VerifyTokenResponse struct {
	Valid     bool                 `json:"valid"`
	Claims    *InstitutionalClaims `json:"claims,omitempty"`
	ExpiresAt string               `json:"expiresAt,omitempty"`
	Message   string               `json:"message"`
}

// ComponentStatus represents individual dependency operational status.
type ComponentStatus struct {
	Status      string `json:"status"`
	Description string `json:"description"`
}

// HealthResponse represents the payload returned by GET /health.
type HealthResponse struct {
	Status        string                     `json:"status"`
	Service       string                     `json:"service"`
	Version       string                     `json:"version"`
	Timestamp     string                     `json:"timestamp"`
	UptimeSeconds float64                    `json:"uptimeSeconds"`
	Environment   string                     `json:"environment"`
	Components    map[string]ComponentStatus `json:"components"`
}

// ValidationErrorDetail encapsulates a single parameter validation violation.
type ValidationErrorDetail struct {
	Field   string `json:"field"`
	Message string `json:"message"`
}

// ValidationErrorResponse represents the HTTP 422 error schema.
type ValidationErrorResponse struct {
	Status  int                     `json:"status"`
	Error   string                  `json:"error"`
	Message string                  `json:"message"`
	Errors  []ValidationErrorDetail `json:"errors"`
}

// ErrorResponse represents standard structured error responses.
type ErrorResponse struct {
	Status    int    `json:"status"`
	Error     string `json:"error"`
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
	TraceID   string `json:"traceId,omitempty"`
}

// AuditRecord represents a tamper-evident audit log item complying with HIPAA § 164.312(b).
type AuditRecord struct {
	ID          string    `json:"id"`
	Action      string    `json:"action"`
	EntityType  string    `json:"entityType"`
	EntityID    string    `json:"entityId"`
	StaffID     string    `json:"staffId"`
	IPAddress   string    `json:"ipAddress"`
	UserAgent   string    `json:"userAgent"`
	StatusCode  int       `json:"statusCode"`
	TraceID     string    `json:"traceId"`
	TamperHash  string    `json:"tamperHash"`
	Timestamp   time.Time `json:"timestamp"`
}

// AuditStore manages the thread-safe storage and tamper verification of audit records.
type AuditStore struct {
	mu      sync.RWMutex
	records []AuditRecord
	maxSize int
	secret  string
}

// NewAuditStore creates a initialized in-memory audit ledger.
func NewAuditStore(maxSize int, secret string) *AuditStore {
	if maxSize <= 0 {
		maxSize = 1000
	}
	if secret == "" {
		secret = "vascule-tamper-evident-audit-secret-key-2026"
	}
	return &AuditStore{
		records: make([]AuditRecord, 0, maxSize),
		maxSize: maxSize,
		secret:  secret,
	}
}

// ComputeTamperHash computes an HMAC-SHA256 signature over canonical audit fields.
func (s *AuditStore) ComputeTamperHash(rec AuditRecord) string {
	canonical := fmt.Sprintf("%s|%s|%s|%s|%s|%s|%d",
		rec.Timestamp.UTC().Format(time.RFC3339Nano),
		rec.StaffID,
		rec.Action,
		rec.EntityType,
		rec.EntityID,
		rec.IPAddress,
		rec.StatusCode,
	)
	mac := hmac.New(sha256.New, []byte(s.secret))
	mac.Write([]byte(canonical))
	return hex.EncodeToString(mac.Sum(nil))
}

// Record appends an audit record to the store with cryptographic tamper hashing.
func (s *AuditStore) Record(rec AuditRecord) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if rec.ID == "" {
		rec.ID = uuid.New().String()
	}
	if rec.Timestamp.IsZero() {
		rec.Timestamp = time.Now().UTC()
	}
	rec.TamperHash = s.ComputeTamperHash(rec)

	if len(s.records) >= s.maxSize {
		s.records = s.records[1:]
	}
	s.records = append(s.records, rec)
}

// GetRecent retrieves recent audit entries, optionally filtered by action.
func (s *AuditStore) GetRecent(limit int, actionFilter string) []AuditRecord {
	s.mu.RLock()
	defer s.mu.RUnlock()

	if limit <= 0 || limit > len(s.records) {
		limit = len(s.records)
	}

	result := make([]AuditRecord, 0, limit)
	filterUpper := strings.ToUpper(actionFilter)

	// Iterate in reverse (most recent first)
	for i := len(s.records) - 1; i >= 0 && len(result) < limit; i-- {
		rec := s.records[i]
		if filterUpper == "" || filterUpper == "ALL" || strings.EqualFold(rec.Action, filterUpper) {
			result = append(result, rec)
		}
	}
	return result
}

// VerifyIntegrity checks whether an audit record's tamper hash matches its canonical fields.
func (s *AuditStore) VerifyIntegrity(rec AuditRecord) bool {
	expected := s.ComputeTamperHash(rec)
	return hmac.Equal([]byte(rec.TamperHash), []byte(expected))
}

// hashSecurityPIN generates an HMAC-SHA256 digest of the security pin.
func hashSecurityPIN(pin string, salt string) string {
	mac := hmac.New(sha256.New, []byte(salt))
	mac.Write([]byte(pin))
	return hex.EncodeToString(mac.Sum(nil))
}

// institutionalDirectory holds the pre-registered clinical staff directory.
var institutionalDirectory = map[string]InstitutionalAccount{
	"lead.radiologist@vascule.hospital.org": {
		ID:                 "usr_rad_001",
		InstitutionalEmail: "lead.radiologist@vascule.hospital.org",
		SecurityPinHash:    hashSecurityPIN("749201", institutionalSalt),
		FullName:           "Dr. Eleanor Vance, MD",
		RoleCode:           "RADIOLOGIST",
		Department:         "Diagnostic & Interventional Radiology",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"records:read",
			"imaging:read",
			"imaging:report",
			"opd:read",
		},
	},
	"dr.roy@hospital.lan": {
		ID:                 "usr_ir_roy",
		InstitutionalEmail: "dr.roy@hospital.lan",
		SecurityPinHash:    hashSecurityPIN("742918", institutionalSalt),
		FullName:           "Dr. Roy, MD",
		RoleCode:           "FACULTY",
		Department:         "Interventional Radiology",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"records:read",
			"records:write",
			"imaging:read",
			"imaging:write",
			"procedures:schedule",
			"procedures:execute",
			"audit:read",
		},
	},
	"ir.specialist@vascule.hospital.org": {
		ID:                 "usr_ir_002",
		InstitutionalEmail: "ir.specialist@vascule.hospital.org",
		SecurityPinHash:    hashSecurityPIN("830192", institutionalSalt),
		FullName:           "Dr. Marcus Thorne, MD, FSIR",
		RoleCode:           "INTERVENTIONAL_RADIOLOGIST",
		Department:         "Vascular & Interventional Angiography",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"records:read",
			"records:write",
			"imaging:read",
			"imaging:write",
			"procedures:schedule",
			"procedures:execute",
			"inventory:order",
			"prescriptions:write",
		},
	},
	"admin.sys@vascule.hospital.org": {
		ID:                 "usr_adm_003",
		InstitutionalEmail: "admin.sys@vascule.hospital.org",
		SecurityPinHash:    hashSecurityPIN("902184", institutionalSalt),
		FullName:           "Sarah Jenkins, CISO",
		RoleCode:           "ADMIN",
		Department:         "Clinical Informatics & Cyber Infrastructure",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"system:configure",
			"audit:read",
			"users:manage",
			"records:read",
			"records:write",
		},
	},
	"admin@hospital.lan": {
		ID:                 "usr_adm_lan",
		InstitutionalEmail: "admin@hospital.lan",
		SecurityPinHash:    hashSecurityPIN("991100", institutionalSalt),
		FullName:           "System Administrator",
		RoleCode:           "ADMIN",
		Department:         "Clinical Informatics & SRE",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"system:configure",
			"audit:read",
			"users:manage",
			"records:read",
			"records:write",
		},
	},
	"fellow@hospital.lan": {
		ID:                 "usr_res_sterling",
		InstitutionalEmail: "fellow@hospital.lan",
		SecurityPinHash:    hashSecurityPIN("123456", institutionalSalt),
		FullName:           "Dr. A. Sterling, MD",
		RoleCode:           "RESIDENT",
		Department:         "Vascular Surgery Fellowship",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"records:read",
			"records:write",
			"vitals:read",
			"procedures:read",
		},
	},
	"clinician.opd@vascule.hospital.org": {
		ID:                 "usr_cli_004",
		InstitutionalEmail: "clinician.opd@vascule.hospital.org",
		SecurityPinHash:    hashSecurityPIN("112233", institutionalSalt),
		FullName:           "Dr. Aarav Patel, MBBS",
		RoleCode:           "CLINICIAN",
		Department:         "Outpatient Diagnostic Department",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"records:read",
			"records:write",
			"opd:read",
			"opd:write",
			"prescriptions:write",
		},
	},
	"nurse.vascular@vascule.hospital.org": {
		ID:                 "usr_nur_005",
		InstitutionalEmail: "nurse.vascular@vascule.hospital.org",
		SecurityPinHash:    hashSecurityPIN("445566", institutionalSalt),
		FullName:           "Clara Oswald, BSN, RN",
		RoleCode:           "NURSE",
		Department:         "Vascular Post-Op Recovery & Day Clinic",
		InstitutionID:      "inst_vascule_central",
		Permissions: []string{
			"records:read",
			"vitals:write",
			"medication:administer",
			"nursing:log",
		},
	},
}

// ValidateToken strictly verifies cryptographic signature, timing parameters, and institutional claims.
func ValidateToken(tokenString string, jwtSecret string) (*InstitutionalClaims, error) {
	if strings.TrimSpace(tokenString) == "" {
		return nil, errors.New("token string is empty")
	}

	token, err := jwt.ParseWithClaims(tokenString, &InstitutionalClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(jwtSecret), nil
	}, jwt.WithValidMethods([]string{"HS256"}))

	if err != nil {
		return nil, fmt.Errorf("cryptographic token validation failed: %w", err)
	}

	claims, ok := token.Claims.(*InstitutionalClaims)
	if !ok || !token.Valid {
		return nil, errors.New("invalid token claims")
	}

	// Enforce strict claim parameters
	if claims.Issuer != "vascule-os" {
		return nil, fmt.Errorf("invalid token issuer: %s", claims.Issuer)
	}

	hasAudience := false
	for _, aud := range claims.Audience {
		if aud == "vascule-clinical-network" {
			hasAudience = true
			break
		}
	}
	if !hasAudience {
		return nil, errors.New("invalid token audience")
	}

	return claims, nil
}

// initTracer initializes an OpenTelemetry TracerProvider with resource attributes.
func initTracer(ctx context.Context, env string) (*sdktrace.TracerProvider, error) {
	res, err := resource.New(ctx,
		resource.WithAttributes(
			semconv.ServiceNameKey.String(serviceName),
			semconv.ServiceVersionKey.String(serviceVersion),
			attribute.String("deployment.environment", env),
			attribute.String("telemetry.sdk.language", "go"),
		),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create OpenTelemetry resource: %w", err)
	}

	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSampler(sdktrace.AlwaysSample()),
		sdktrace.WithResource(res),
	)

	otel.SetTracerProvider(tp)
	otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(
		propagation.TraceContext{},
		propagation.Baggage{},
	))

	return tp, nil
}

// otelTracingMiddleware instruments HTTP requests with OpenTelemetry spans and context propagation.
func otelTracingMiddleware(tracer trace.Tracer) gin.HandlerFunc {
	propagator := otel.GetTextMapPropagator()

	return func(c *gin.Context) {
		ctx := propagator.Extract(c.Request.Context(), propagation.HeaderCarrier(c.Request.Header))

		spanRoute := c.FullPath()
		if spanRoute == "" {
			spanRoute = c.Request.URL.Path
		}
		spanName := fmt.Sprintf("%s %s", c.Request.Method, spanRoute)

		ctx, span := tracer.Start(ctx, spanName,
			trace.WithSpanKind(trace.SpanKindServer),
			trace.WithAttributes(
				attribute.String("http.method", c.Request.Method),
				attribute.String("http.route", spanRoute),
				attribute.String("http.url", c.Request.URL.String()),
				attribute.String("http.client_ip", c.ClientIP()),
				attribute.String("http.user_agent", c.Request.UserAgent()),
			),
		)
		defer span.End()

		traceID := span.SpanContext().TraceID().String()
		spanID := span.SpanContext().SpanID().String()

		c.Header("X-Trace-ID", traceID)
		c.Header("X-Span-ID", spanID)

		c.Set("trace_id", traceID)
		c.Set("span_id", spanID)

		c.Request = c.Request.WithContext(ctx)

		c.Next()

		status := c.Writer.Status()
		span.SetAttributes(attribute.Int("http.status_code", status))
		if status >= 500 {
			span.SetAttributes(attribute.String("error.message", strings.Join(c.Errors.Errors(), "; ")))
		}
	}
}

// auditInterceptorMiddleware intercepts mutating HTTP requests and records non-blocking audit entries.
func auditInterceptorMiddleware(auditStore *AuditStore, jwtSecret string, logger *slog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		isMutating := c.Request.Method == http.MethodPost ||
			c.Request.Method == http.MethodPut ||
			c.Request.Method == http.MethodDelete ||
			c.Request.Method == http.MethodPatch

		c.Next()

		if isMutating {
			staffID := "anonymous"
			authHeader := c.GetHeader("Authorization")
			if strings.HasPrefix(strings.ToLower(authHeader), "bearer ") {
				rawToken := strings.TrimSpace(authHeader[7:])
				if claims, err := ValidateToken(rawToken, jwtSecret); err == nil {
					staffID = claims.InstitutionalEmail
				}
			}

			traceIDVal, _ := c.Get("trace_id")
			traceID, _ := traceIDVal.(string)

			entityType := "System"
			path := c.Request.URL.Path
			if strings.Contains(path, "auth") {
				entityType = "Authentication"
			} else if strings.Contains(path, "patient") {
				entityType = "Patient"
			} else if strings.Contains(path, "studies") {
				entityType = "ImagingStudy"
			} else if strings.Contains(path, "audit") {
				entityType = "AuditLedger"
			}

			rec := AuditRecord{
				ID:         uuid.New().String(),
				Action:     c.Request.Method,
				EntityType: entityType,
				EntityID:   path,
				StaffID:    staffID,
				IPAddress:  c.ClientIP(),
				UserAgent:  c.Request.UserAgent(),
				StatusCode: c.Writer.Status(),
				TraceID:    traceID,
				Timestamp:  time.Now().UTC(),
			}

			// Asynchronous, non-blocking dispatch to audit ledger
			go func(r AuditRecord) {
				auditStore.Record(r)
				if logger != nil {
					logger.Info("Audit log entry persisted asynchronously",
						slog.String("action", r.Action),
						slog.String("staff_id", r.StaffID),
						slog.String("entity_type", r.EntityType),
						slog.String("entity_id", r.EntityID),
						slog.String("tamper_hash", r.TamperHash),
					)
				}
			}(rec)
		}
	}
}

// structuredLoggingMiddleware produces structured JSON log entries for each incoming request.
func structuredLoggingMiddleware(logger *slog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		startTime := time.Now()

		c.Next()

		duration := time.Since(startTime)
		statusCode := c.Writer.Status()

		traceID, _ := c.Get("trace_id")
		spanID, _ := c.Get("span_id")

		logAttrs := []any{
			slog.String("method", c.Request.Method),
			slog.String("path", c.Request.URL.Path),
			slog.String("query", c.Request.URL.RawQuery),
			slog.Int("status", statusCode),
			slog.Int64("duration_ms", duration.Milliseconds()),
			slog.String("client_ip", c.ClientIP()),
			slog.String("user_agent", c.Request.UserAgent()),
			slog.Any("trace_id", traceID),
			slog.Any("span_id", spanID),
		}

		if len(c.Errors) > 0 {
			logAttrs = append(logAttrs, slog.String("gin_errors", c.Errors.String()))
		}

		if statusCode >= 500 {
			logger.ErrorContext(c.Request.Context(), "HTTP Request Processed - Server Error", logAttrs...)
		} else if statusCode >= 400 {
			logger.WarnContext(c.Request.Context(), "HTTP Request Processed - Client Error", logAttrs...)
		} else {
			logger.InfoContext(c.Request.Context(), "HTTP Request Processed - Success", logAttrs...)
		}
	}
}

// corsMiddleware configures standard Cross-Origin Resource Sharing headers.
func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, X-Trace-ID")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}

// handleHealth returns service metadata, uptime, and component statuses.
func handleHealth(serviceStart time.Time, env string) gin.HandlerFunc {
	return func(c *gin.Context) {
		uptime := time.Since(serviceStart).Seconds()

		response := HealthResponse{
			Status:        "healthy",
			Service:       serviceName,
			Version:       serviceVersion,
			Timestamp:     time.Now().UTC().Format(time.RFC3339),
			UptimeSeconds: uptime,
			Environment:   env,
			Components: map[string]ComponentStatus{
				"tracer": {
					Status:      "UP",
					Description: "OpenTelemetry tracing provider active",
				},
				"auth_engine": {
					Status:      "UP",
					Description: "Institutional credential validator operational",
				},
				"token_signer": {
					Status:      "UP",
					Description: "HMAC-SHA256 JWT signature engine ready",
				},
				"audit_ledger": {
					Status:      "UP",
					Description: "Tamper-evident audit trail interceptor active",
				},
			},
		}

		c.JSON(http.StatusOK, response)
	}
}

// handleLogin validates institutional credentials and issues a signed JWT token with claims.
func handleLogin(jwtSecret string, logger *slog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		traceIDVal, _ := c.Get("trace_id")
		traceID, _ := traceIDVal.(string)

		var req LoginRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			var validationErrors []ValidationErrorDetail

			if req.InstitutionalEmail == "" {
				validationErrors = append(validationErrors, ValidationErrorDetail{
					Field:   "institutionalEmail",
					Message: "institutionalEmail is required and must be a valid email address",
				})
			} else if !strings.Contains(req.InstitutionalEmail, "@") {
				validationErrors = append(validationErrors, ValidationErrorDetail{
					Field:   "institutionalEmail",
					Message: "institutionalEmail format is invalid",
				})
			}

			if req.SecurityPin == "" {
				validationErrors = append(validationErrors, ValidationErrorDetail{
					Field:   "securityPin",
					Message: "securityPin is required",
				})
			} else if len(req.SecurityPin) < 4 || len(req.SecurityPin) > 12 {
				validationErrors = append(validationErrors, ValidationErrorDetail{
					Field:   "securityPin",
					Message: "securityPin length must be between 4 and 12 characters",
				})
			}

			if req.RoleCode == "" {
				validationErrors = append(validationErrors, ValidationErrorDetail{
					Field:   "roleCode",
					Message: "roleCode is required",
				})
			}

			if len(validationErrors) == 0 {
				validationErrors = append(validationErrors, ValidationErrorDetail{
					Field:   "body",
					Message: err.Error(),
				})
			}

			c.JSON(http.StatusUnprocessableEntity, ValidationErrorResponse{
				Status:  http.StatusUnprocessableEntity,
				Error:   "Unprocessable Entity",
				Message: "The request payload failed institutional credential schema validation",
				Errors:  validationErrors,
			})
			return
		}

		normalizedEmail := strings.ToLower(strings.TrimSpace(req.InstitutionalEmail))
		userAccount, exists := institutionalDirectory[normalizedEmail]

		computedPinHash := hashSecurityPIN(req.SecurityPin, institutionalSalt)
		isValidCredentials := exists &&
			hmac.Equal([]byte(userAccount.SecurityPinHash), []byte(computedPinHash)) &&
			strings.EqualFold(userAccount.RoleCode, req.RoleCode)

		if !isValidCredentials {
			logger.WarnContext(c.Request.Context(), "Authentication rejected for credentials",
				slog.String("email", normalizedEmail),
				slog.String("requested_role", req.RoleCode),
				slog.String("trace_id", traceID),
			)

			c.JSON(http.StatusUnauthorized, ErrorResponse{
				Status:    http.StatusUnauthorized,
				Error:     "Unauthorized",
				Message:   "Invalid institutional credentials or unauthorized role requested",
				Timestamp: time.Now().UTC().Format(time.RFC3339),
				TraceID:   traceID,
			})
			return
		}

		now := time.Now()
		expiresAt := now.Add(tokenTTL)
		tokenID := uuid.New().String()

		claims := InstitutionalClaims{
			UserID:             userAccount.ID,
			InstitutionalEmail: userAccount.InstitutionalEmail,
			FullName:           userAccount.FullName,
			RoleCode:           userAccount.RoleCode,
			Department:         userAccount.Department,
			InstitutionID:      userAccount.InstitutionID,
			Permissions:        userAccount.Permissions,
			RegisteredClaims: jwt.RegisteredClaims{
				Issuer:    "vascule-os",
				Subject:   userAccount.ID,
				Audience:  jwt.ClaimStrings{"vascule-clinical-network"},
				ExpiresAt: jwt.NewNumericDate(expiresAt),
				NotBefore: jwt.NewNumericDate(now),
				IssuedAt:  jwt.NewNumericDate(now),
				ID:        tokenID,
			},
		}

		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		signedToken, err := token.SignedString([]byte(jwtSecret))
		if err != nil {
			logger.ErrorContext(c.Request.Context(), "Failed to sign JWT authentication token",
				slog.String("error", err.Error()),
				slog.String("trace_id", traceID),
			)
			c.JSON(http.StatusInternalServerError, ErrorResponse{
				Status:    http.StatusInternalServerError,
				Error:     "Internal Server Error",
				Message:   "Failed to issue authenticated token",
				Timestamp: time.Now().UTC().Format(time.RFC3339),
				TraceID:   traceID,
			})
			return
		}

		logger.InfoContext(c.Request.Context(), "Institutional session created successfully",
			slog.String("user_id", userAccount.ID),
			slog.String("role_code", userAccount.RoleCode),
			slog.String("trace_id", traceID),
		)

		c.JSON(http.StatusOK, LoginResponse{
			Token:     signedToken,
			TokenType: "Bearer",
			ExpiresIn: int64(tokenTTL.Seconds()),
			User: UserProfile{
				ID:                 userAccount.ID,
				InstitutionalEmail: userAccount.InstitutionalEmail,
				FullName:           userAccount.FullName,
				RoleCode:           userAccount.RoleCode,
				Department:         userAccount.Department,
				InstitutionID:      userAccount.InstitutionID,
				Status:             "ACTIVE",
				Permissions:        userAccount.Permissions,
			},
		})
	}
}

// handleVerifyToken provides cryptographic validation of incoming bearer tokens.
func handleVerifyToken(jwtSecret string) gin.HandlerFunc {
	return func(c *gin.Context) {
		var tokenStr string

		// 1. Try Authorization header
		authHeader := c.GetHeader("Authorization")
		if strings.HasPrefix(strings.ToLower(authHeader), "bearer ") {
			tokenStr = strings.TrimSpace(authHeader[7:])
		}

		// 2. Try JSON body fallback
		if tokenStr == "" {
			var body VerifyTokenRequest
			if err := c.ShouldBindJSON(&body); err == nil && body.Token != "" {
				tokenStr = body.Token
			}
		}

		if tokenStr == "" {
			c.JSON(http.StatusBadRequest, ErrorResponse{
				Status:    http.StatusBadRequest,
				Error:     "Bad Request",
				Message:   "Authorization token is required in Authorization header or body",
				Timestamp: time.Now().UTC().Format(time.RFC3339),
			})
			return
		}

		claims, err := ValidateToken(tokenStr, jwtSecret)
		if err != nil {
			c.JSON(http.StatusUnauthorized, VerifyTokenResponse{
				Valid:   false,
				Message: err.Error(),
			})
			return
		}

		var expiresAtStr string
		if claims.ExpiresAt != nil {
			expiresAtStr = claims.ExpiresAt.Time.UTC().Format(time.RFC3339)
		}

		c.JSON(http.StatusOK, VerifyTokenResponse{
			Valid:     true,
			Claims:    claims,
			ExpiresAt: expiresAtStr,
			Message:   "Cryptographic token verification succeeded",
		})
	}
}

// handleGetAuditLogs returns recent tamper-evident audit records.
func handleGetAuditLogs(auditStore *AuditStore) gin.HandlerFunc {
	return func(c *gin.Context) {
		limitStr := c.DefaultQuery("limit", "50")
		action := c.DefaultQuery("action", "ALL")

		limit, err := strconv.Atoi(limitStr)
		if err != nil || limit <= 0 {
			limit = 50
		}
		if limit > 200 {
			limit = 200
		}

		logs := auditStore.GetRecent(limit, action)
		c.JSON(http.StatusOK, gin.H{
			"total":  len(logs),
			"logs":   logs,
			"status": "synchronized",
		})
	}
}

// handleIngestAuditLog allows ingestion of external audit log records with tamper hashing.
func handleIngestAuditLog(auditStore *AuditStore) gin.HandlerFunc {
	return func(c *gin.Context) {
		var input struct {
			Action     string `json:"action" binding:"required"`
			EntityType string `json:"entityType" binding:"required"`
			EntityID   string `json:"entityId" binding:"required"`
			StaffID    string `json:"staffId" binding:"required"`
			IPAddress  string `json:"ipAddress"`
			UserAgent  string `json:"userAgent"`
			StatusCode int    `json:"statusCode"`
		}

		if err := c.ShouldBindJSON(&input); err != nil {
			c.JSON(http.StatusUnprocessableEntity, gin.H{"error": err.Error()})
			return
		}

		ip := input.IPAddress
		if ip == "" {
			ip = c.ClientIP()
		}

		rec := AuditRecord{
			ID:         uuid.New().String(),
			Action:     input.Action,
			EntityType: input.EntityType,
			EntityID:   input.EntityID,
			StaffID:    input.StaffID,
			IPAddress:  ip,
			UserAgent:  input.UserAgent,
			StatusCode: input.StatusCode,
			Timestamp:  time.Now().UTC(),
		}

		auditStore.Record(rec)
		c.JSON(http.StatusCreated, rec)
	}
}

// MetricsRegistry tracks Prometheus-compatible clinical and infrastructure telemetry.
type MetricsRegistry struct {
	mu                    sync.RWMutex
	httpRequestsTotal     map[string]uint64
	httpRequestDurations  map[string]float64
	activeWebsockets      int64
	hl7PacketsTotal       uint64
	dicomQueryDurationSum float64
	dicomQueryCount       uint64
}

var globalMetrics = &MetricsRegistry{
	httpRequestsTotal:    make(map[string]uint64),
	httpRequestDurations: make(map[string]float64),
}

func (m *MetricsRegistry) RecordRequest(method, path string, status int, durationSec float64) {
	m.mu.Lock()
	defer m.mu.Unlock()

	key := fmt.Sprintf(`method="%s",handler="%s",status="%d"`, method, path, status)
	m.httpRequestsTotal[key]++
	m.httpRequestDurations[key] += durationSec
}

func (m *MetricsRegistry) IncHL7() {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.hl7PacketsTotal++
}

func (m *MetricsRegistry) RecordDicomQuery(durationSec float64) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.dicomQueryCount++
	m.dicomQueryDurationSum += durationSec
}

func (m *MetricsRegistry) SetActiveWebsockets(count int64) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.activeWebsockets = count
}

func prometheusMetricsMiddleware(metrics *MetricsRegistry) gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		c.Next()
		duration := time.Since(start).Seconds()

		route := c.FullPath()
		if route == "" {
			route = c.Request.URL.Path
		}
		metrics.RecordRequest(c.Request.Method, route, c.Writer.Status(), duration)
	}
}

func handlePrometheusMetrics(metrics *MetricsRegistry, serviceStart time.Time) gin.HandlerFunc {
	return func(c *gin.Context) {
		metrics.mu.RLock()
		defer metrics.mu.RUnlock()

		var sb strings.Builder
		uptimeSec := time.Since(serviceStart).Seconds()

		sb.WriteString("# HELP vascule_service_uptime_seconds Total uptime of Vascule OS microservice in seconds.\n")
		sb.WriteString("# TYPE vascule_service_uptime_seconds counter\n")
		sb.WriteString(fmt.Sprintf("vascule_service_uptime_seconds{service=\"%s\"} %.2f\n\n", serviceName, uptimeSec))

		sb.WriteString("# HELP vascule_active_websockets_gauge Current active WebSocket clinical telemetry connections.\n")
		sb.WriteString("# TYPE vascule_active_websockets_gauge gauge\n")
		sb.WriteString(fmt.Sprintf("vascule_active_websockets_gauge{service=\"%s\"} %d\n\n", serviceName, metrics.activeWebsockets))

		sb.WriteString("# HELP vascule_hl7_packets_total Total number of ingested HL7 v2 ADT^A01 messages.\n")
		sb.WriteString("# TYPE vascule_hl7_packets_total counter\n")
		sb.WriteString(fmt.Sprintf("vascule_hl7_packets_total{service=\"%s\",message_type=\"ADT_A01\"} %d\n\n", serviceName, metrics.hl7PacketsTotal))

		sb.WriteString("# HELP vascule_dicom_query_duration_seconds Latency of QIDO-RS DICOM study queries in seconds.\n")
		sb.WriteString("# TYPE vascule_dicom_query_duration_seconds summary\n")
		sb.WriteString(fmt.Sprintf("vascule_dicom_query_duration_seconds_sum{service=\"%s\"} %.6f\n", serviceName, metrics.dicomQueryDurationSum))
		sb.WriteString(fmt.Sprintf("vascule_dicom_query_duration_seconds_count{service=\"%s\"} %d\n\n", serviceName, metrics.dicomQueryCount))

		sb.WriteString("# HELP vascule_http_requests_total Total number of HTTP requests processed.\n")
		sb.WriteString("# TYPE vascule_http_requests_total counter\n")
		for labels, count := range metrics.httpRequestsTotal {
			sb.WriteString(fmt.Sprintf("vascule_http_requests_total{service=\"%s\",%s} %d\n", serviceName, labels, count))
		}
		if len(metrics.httpRequestsTotal) == 0 {
			sb.WriteString(fmt.Sprintf("vascule_http_requests_total{service=\"%s\",method=\"INIT\",status=\"200\"} 0\n", serviceName))
		}
		sb.WriteString("\n")

		sb.WriteString("# HELP vascule_http_request_duration_seconds Cumulative time spent processing HTTP requests.\n")
		sb.WriteString("# TYPE vascule_http_request_duration_seconds counter\n")
		for labels, dur := range metrics.httpRequestDurations {
			sb.WriteString(fmt.Sprintf("vascule_http_request_duration_seconds{service=\"%s\",%s} %.6f\n", serviceName, labels, dur))
		}

		c.Header("Content-Type", "text/plain; version=0.0.4; charset=utf-8")
		c.String(http.StatusOK, sb.String())
	}
}

// SetupRouter creates and configures the Gin HTTP engine with all middleware and routes.
func SetupRouter(
	jwtSecret string,
	auditStore *AuditStore,
	tracer trace.Tracer,
	logger *slog.Logger,
	serviceStart time.Time,
	env string,
) *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	router := gin.New()

	if logger == nil {
		logger = slog.New(slog.NewJSONHandler(io.Discard, nil))
	}

	// Register middleware stack
	router.Use(gin.Recovery())
	if tracer != nil {
		router.Use(otelTracingMiddleware(tracer))
	}
	if logger != nil {
		router.Use(structuredLoggingMiddleware(logger))
	}
	router.Use(corsMiddleware())
	router.Use(prometheusMetricsMiddleware(globalMetrics))
	router.Use(auditInterceptorMiddleware(auditStore, jwtSecret, logger))

	// Diagnostic endpoints
	router.GET("/health", handleHealth(serviceStart, env))
	router.GET("/metrics", handlePrometheusMetrics(globalMetrics, serviceStart))

	// API v1 routes
	apiV1 := router.Group("/api/v1")
	{
		authGroup := apiV1.Group("/auth")
		{
			authGroup.POST("/login", handleLogin(jwtSecret, logger))
			authGroup.POST("/verify", handleVerifyToken(jwtSecret))
		}

		auditGroup := apiV1.Group("/audit")
		{
			auditGroup.GET("/logs", handleGetAuditLogs(auditStore))
			auditGroup.POST("/logs", handleIngestAuditLog(auditStore))
		}
	}

	return router
}

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: slog.LevelInfo,
	}))
	slog.SetDefault(logger)

	serviceStart := time.Now()

	env := os.Getenv("ENV")
	if env == "" {
		env = "production"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	jwtSecret := os.Getenv("JWT_SECRET")
	if jwtSecret == "" {
		jwtSecret = "vascule_os_clinical_infrastructure_secure_signing_key_2026_prod"
	}

	auditSecret := os.Getenv("AUDIT_HMAC_SECRET")
	if auditSecret == "" {
		auditSecret = "vascule-tamper-evident-audit-secret-key-2026"
	}

	// Initialize OpenTelemetry distributed tracing
	ctx, cancelTracer := context.WithTimeout(context.Background(), 5*time.Second)
	tracerProvider, err := initTracer(ctx, env)
	cancelTracer()
	if err != nil {
		logger.Error("Failed to initialize OpenTelemetry tracer provider", slog.String("error", err.Error()))
		os.Exit(1)
	}
	defer func() {
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		if err := tracerProvider.Shutdown(shutdownCtx); err != nil {
			logger.Error("Error terminating OpenTelemetry tracer provider", slog.String("error", err.Error()))
		}
	}()

	tracer := otel.Tracer(tracerPackageName)
	auditStore := NewAuditStore(1000, auditSecret)

	router := SetupRouter(jwtSecret, auditStore, tracer, logger, serviceStart, env)

	server := &http.Server{
		Addr:         ":" + port,
		Handler:      router,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	go func() {
		logger.Info("Starting Vascule OS Authentication Service listener",
			slog.String("port", port),
			slog.String("env", env),
			slog.String("service", serviceName),
			slog.String("version", serviceVersion),
		)
		if err := server.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			logger.Error("HTTP listener crashed unexpectedly", slog.String("error", err.Error()))
			os.Exit(1)
		}
	}()

	// Graceful shutdown lifecycle handling
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	logger.Info("Termination signal received; initiating graceful server shutdown...")

	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer shutdownCancel()

	if err := server.Shutdown(shutdownCtx); err != nil {
		logger.Error("Server forced to shutdown after timeout", slog.String("error", err.Error()))
	} else {
		logger.Info("Server graceful shutdown completed cleanly")
	}
}
