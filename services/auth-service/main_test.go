package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
)

const (
	testJWTSecret   = "test-jwt-secret-key-vascule-enterprise-2026"
	testAuditSecret = "test-audit-hmac-secret-vascule-enterprise-2026"
)

// helper to build test router
func setupTestAuthRouter() (*AuditStore, http.Handler) {
	auditStore := NewAuditStore(100, testAuditSecret)
	router := SetupRouter(testJWTSecret, auditStore, nil, nil, time.Now(), "test")
	return auditStore, router
}

// ---------------------------------------------------------------------
// 1. Cryptographic Token Validation Tests
// ---------------------------------------------------------------------

func TestValidateToken_ValidToken(t *testing.T) {
	now := time.Now()
	claims := InstitutionalClaims{
		UserID:             "usr_ir_roy",
		InstitutionalEmail: "dr.roy@hospital.lan",
		FullName:           "Dr. Roy, MD",
		RoleCode:           "FACULTY",
		Department:         "Interventional Radiology",
		InstitutionID:      "inst_vascule_central",
		Permissions:        []string{"records:read", "imaging:write"},
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "vascule-os",
			Subject:   "usr_ir_roy",
			Audience:  jwt.ClaimStrings{"vascule-clinical-network"},
			ExpiresAt: jwt.NewNumericDate(now.Add(2 * time.Hour)),
			NotBefore: jwt.NewNumericDate(now.Add(-1 * time.Minute)),
			IssuedAt:  jwt.NewNumericDate(now),
			ID:        uuid.New().String(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedStr, err := token.SignedString([]byte(testJWTSecret))
	if err != nil {
		t.Fatalf("Failed to sign test token: %v", err)
	}

	extracted, err := ValidateToken(signedStr, testJWTSecret)
	if err != nil {
		t.Fatalf("Expected token to validate successfully, got error: %v", err)
	}

	if extracted.InstitutionalEmail != "dr.roy@hospital.lan" {
		t.Errorf("Expected email 'dr.roy@hospital.lan', got '%s'", extracted.InstitutionalEmail)
	}
	if extracted.RoleCode != "FACULTY" {
		t.Errorf("Expected role 'FACULTY', got '%s'", extracted.RoleCode)
	}
}

func TestValidateToken_ExpiredToken(t *testing.T) {
	now := time.Now()
	claims := InstitutionalClaims{
		UserID:             "usr_expired",
		InstitutionalEmail: "expired@hospital.lan",
		RoleCode:           "RESIDENT",
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "vascule-os",
			Audience:  jwt.ClaimStrings{"vascule-clinical-network"},
			ExpiresAt: jwt.NewNumericDate(now.Add(-1 * time.Hour)), // Expired 1 hour ago
			IssuedAt:  jwt.NewNumericDate(now.Add(-2 * time.Hour)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedStr, _ := token.SignedString([]byte(testJWTSecret))

	_, err := ValidateToken(signedStr, testJWTSecret)
	if err == nil {
		t.Fatalf("Expected expired token to be rejected, but validation succeeded")
	}
	if !strings.Contains(strings.ToLower(err.Error()), "expired") && !strings.Contains(strings.ToLower(err.Error()), "validation failed") {
		t.Errorf("Expected expiration error message, got: %v", err)
	}
}

func TestValidateToken_InvalidSignature(t *testing.T) {
	now := time.Now()
	claims := InstitutionalClaims{
		UserID:             "usr_attacker",
		InstitutionalEmail: "attacker@hospital.lan",
		RoleCode:           "ADMIN",
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "vascule-os",
			Audience:  jwt.ClaimStrings{"vascule-clinical-network"},
			ExpiresAt: jwt.NewNumericDate(now.Add(1 * time.Hour)),
		},
	}

	// Signed with WRONG secret
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedStr, _ := token.SignedString([]byte("wrong-attacker-secret-key-1234567890123"))

	_, err := ValidateToken(signedStr, testJWTSecret)
	if err == nil {
		t.Fatalf("Expected token with invalid signature to be rejected, but it succeeded")
	}
}

func TestValidateToken_InvalidIssuerAndAudience(t *testing.T) {
	now := time.Now()
	// Invalid issuer
	claims := InstitutionalClaims{
		UserID:             "usr_test",
		InstitutionalEmail: "test@hospital.lan",
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "rogue-issuer",
			Audience:  jwt.ClaimStrings{"vascule-clinical-network"},
			ExpiresAt: jwt.NewNumericDate(now.Add(1 * time.Hour)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedStr, _ := token.SignedString([]byte(testJWTSecret))

	_, err := ValidateToken(signedStr, testJWTSecret)
	if err == nil || !strings.Contains(err.Error(), "invalid token issuer") {
		t.Errorf("Expected invalid token issuer error, got: %v", err)
	}

	// Invalid audience
	claims.Issuer = "vascule-os"
	claims.Audience = jwt.ClaimStrings{"external-rogue-audience"}
	tokenAud := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedStrAud, _ := tokenAud.SignedString([]byte(testJWTSecret))

	_, errAud := ValidateToken(signedStrAud, testJWTSecret)
	if errAud == nil || !strings.Contains(errAud.Error(), "invalid token audience") {
		t.Errorf("Expected invalid token audience error, got: %v", errAud)
	}
}

// ---------------------------------------------------------------------
// 2. Token Verification HTTP Endpoint Tests (/api/v1/auth/verify)
// ---------------------------------------------------------------------

func TestVerifyTokenEndpoint_Success(t *testing.T) {
	_, router := setupTestAuthRouter()

	now := time.Now()
	claims := InstitutionalClaims{
		UserID:             "usr_ir_roy",
		InstitutionalEmail: "dr.roy@hospital.lan",
		FullName:           "Dr. Roy, MD",
		RoleCode:           "FACULTY",
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "vascule-os",
			Audience:  jwt.ClaimStrings{"vascule-clinical-network"},
			ExpiresAt: jwt.NewNumericDate(now.Add(1 * time.Hour)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedStr, _ := token.SignedString([]byte(testJWTSecret))

	// Test via Authorization header
	req, _ := http.NewRequest(http.MethodPost, "/api/v1/auth/verify", nil)
	req.Header.Set("Authorization", "Bearer "+signedStr)
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d: %s", rec.Code, rec.Body.String())
	}

	var resp VerifyTokenResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("Failed to parse JSON: %v", err)
	}
	if !resp.Valid || resp.Claims.RoleCode != "FACULTY" {
		t.Errorf("Expected valid verification response with role 'FACULTY', got %+v", resp)
	}
}

func TestVerifyTokenEndpoint_UnauthorizedOnBadToken(t *testing.T) {
	_, router := setupTestAuthRouter()

	bodyBytes, _ := json.Marshal(VerifyTokenRequest{Token: "bad-corrupted-token"})
	req, _ := http.NewRequest(http.MethodPost, "/api/v1/auth/verify", bytes.NewReader(bodyBytes))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusUnauthorized {
		t.Errorf("Expected status 401 Unauthorized, got %d", rec.Code)
	}
}

// ---------------------------------------------------------------------
// 3. Mutating Audit Interceptor Middleware & Tamper Verification Tests
// ---------------------------------------------------------------------

func TestAuditInterceptor_RecordsMutatingRequests(t *testing.T) {
	auditStore, router := setupTestAuthRouter()

	// 1. Non-mutating GET /health should NOT record in audit store
	reqGet, _ := http.NewRequest(http.MethodGet, "/health", nil)
	recGet := httptest.NewRecorder()
	router.ServeHTTP(recGet, reqGet)

	if recGet.Code != http.StatusOK {
		t.Fatalf("Expected 200 for health check, got %d", recGet.Code)
	}

	time.Sleep(15 * time.Millisecond) // Allow async goroutine to execute
	if len(auditStore.GetRecent(10, "ALL")) != 0 {
		t.Errorf("GET /health should not generate audit record")
	}

	// 2. Mutating POST /api/v1/auth/login MUST record an audit log entry
	loginBody, _ := json.Marshal(LoginRequest{
		InstitutionalEmail: "dr.roy@hospital.lan",
		SecurityPin:        "742918",
		RoleCode:           "FACULTY",
	})
	reqPost, _ := http.NewRequest(http.MethodPost, "/api/v1/auth/login", bytes.NewReader(loginBody))
	reqPost.Header.Set("Content-Type", "application/json")
	recPost := httptest.NewRecorder()
	router.ServeHTTP(recPost, reqPost)

	if recPost.Code != http.StatusOK {
		t.Fatalf("Expected 200 for login, got %d: %s", recPost.Code, recPost.Body.String())
	}

	time.Sleep(30 * time.Millisecond) // Allow async goroutine to execute
	records := auditStore.GetRecent(10, "ALL")
	if len(records) == 0 {
		t.Fatalf("Expected at least 1 audit record from mutating POST, got 0")
	}

	rec := records[0]
	if rec.Action != http.MethodPost {
		t.Errorf("Expected action POST, got '%s'", rec.Action)
	}
	if rec.EntityType != "Authentication" {
		t.Errorf("Expected entityType Authentication, got '%s'", rec.EntityType)
	}
	if rec.TamperHash == "" {
		t.Errorf("Expected non-empty tamper hash")
	}

	// 3. Cryptographic integrity check
	if !auditStore.VerifyIntegrity(rec) {
		t.Errorf("Audit record failed tamper-evident cryptographic validation")
	}

	// Tampered action check
	tampered := rec
	tampered.Action = "DELETE"
	if auditStore.VerifyIntegrity(tampered) {
		t.Errorf("Tampered audit record should have failed verification")
	}
}

// ---------------------------------------------------------------------
// 4. Audit Log Query & Ingestion API Tests
// ---------------------------------------------------------------------

func TestAuditLogQueryAndIngest(t *testing.T) {
	auditStore, router := setupTestAuthRouter()

	// Seed directly
	auditStore.Record(AuditRecord{
		Action:     "WRITE",
		EntityType: "Patient",
		EntityID:   "pat_test_001",
		StaffID:    "dr.roy@hospital.lan",
		IPAddress:  "10.0.4.15",
		StatusCode: 200,
	})

	// Query via GET /api/v1/audit/logs
	req, _ := http.NewRequest(http.MethodGet, "/api/v1/audit/logs?limit=5", nil)
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d: %s", rec.Code, rec.Body.String())
	}

	var resp struct {
		Total  int           `json:"total"`
		Logs   []AuditRecord `json:"logs"`
		Status string        `json:"status"`
	}
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("Failed to parse audit logs response: %v", err)
	}
	if resp.Total == 0 || len(resp.Logs) == 0 {
		t.Errorf("Expected seeded audit log to be returned in query")
	}
	if resp.Logs[0].EntityID != "pat_test_001" {
		t.Errorf("Expected entityId 'pat_test_001', got '%s'", resp.Logs[0].EntityID)
	}
}
