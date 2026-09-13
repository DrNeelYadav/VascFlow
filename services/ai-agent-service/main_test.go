package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestAiHealthCheck(t *testing.T) {
	router := SetupRouter()
	req, _ := http.NewRequest("GET", "/health", nil)
	rr := httptest.NewRecorder()

	router.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rr.Code)
	}

	var body map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &body); err != nil {
		t.Fatalf("failed to parse json: %v", err)
	}

	if body["service"] != "vascule-ai-agent-service" {
		t.Errorf("expected vascule-ai-agent-service, got %v", body["service"])
	}
}

func TestAiQueryBaeSpinalRisk(t *testing.T) {
	router := SetupRouter()
	payload := `{"query": "Is there a spinal artery risk with bronchial artery embolization in this patient?"}`
	req, _ := http.NewRequest("POST", "/api/v1/ai/query", bytes.NewBufferString(payload))
	req.Header.Set("Content-Type", "application/json")
	rr := httptest.NewRecorder()

	router.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rr.Code)
	}

	var resp DecisionSupportResponse
	if err := json.Unmarshal(rr.Body.Bytes(), &resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.RiskLevel != RiskCritical {
		t.Errorf("expected RiskCritical, got %s", resp.RiskLevel)
	}

	if !strings.Contains(resp.Recommendation, "SPINAL ARTERY VERIFICATION") {
		t.Errorf("recommendation missing spinal artery verification: %s", resp.Recommendation)
	}

	if len(resp.Guidelines) == 0 || resp.Guidelines[0].PublishingBody != BodySIR {
		t.Errorf("expected SIR guideline citation, got: %v", resp.Guidelines)
	}

	if resp.ConfidenceScore < 0.90 {
		t.Errorf("expected confidence score >= 0.90, got: %f", resp.ConfidenceScore)
	}

	if !resp.PhysicianSignOffReq {
		t.Errorf("expected mandatory physician sign-off requirement")
	}
}

func TestAiProtocolCheckContrastExceedance(t *testing.T) {
	router := SetupRouter()
	checkReq := ProtocolCheckRequest{
		ProcedureType:     "TACE",
		PatientAge:        64,
		WeightKg:          70.0,
		SerumCreatinine:   2.0, // MACD = (5 * 70) / 2.0 = 175 mL
		Inr:               1.2,
		Platelets:         120000,
		ContrastPlannedMl: 220.0, // Exceeds 175 mL
		TargetVessel:      "Right Hepatic Artery",
	}

	bodyBytes, _ := json.Marshal(checkReq)
	req, _ := http.NewRequest("POST", "/api/v1/ai/protocol-check", bytes.NewBuffer(bodyBytes))
	req.Header.Set("Content-Type", "application/json")
	rr := httptest.NewRecorder()

	router.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rr.Code)
	}

	var resp ProtocolCheckResponse
	if err := json.Unmarshal(rr.Body.Bytes(), &resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.ApprovedForProcedure {
		t.Errorf("expected procedure check to fail due to contrast exceedance")
	}

	if resp.MacdLimitMl != 175.0 {
		t.Errorf("expected MACD 175.0 mL, got %f", resp.MacdLimitMl)
	}

	if resp.ContrastMarginMl >= 0 {
		t.Errorf("expected negative contrast margin, got %f", resp.ContrastMarginMl)
	}

	if len(resp.AnatomicalAlerts) == 0 {
		t.Errorf("expected alert on contrast exceedance")
	}
}

func TestAiMetricsEndpoint(t *testing.T) {
	router := SetupRouter()
	req, _ := http.NewRequest("GET", "/metrics", nil)
	rr := httptest.NewRecorder()

	router.ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rr.Code)
	}

	body := rr.Body.String()
	if !strings.Contains(body, "vascule_ai_service_uptime_seconds") {
		t.Errorf("missing uptime metric in Prometheus output")
	}
	if !strings.Contains(body, "vascule_ai_queries_total") {
		t.Errorf("missing queries metric in Prometheus output")
	}
}
