package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestPrometheusMetricsEndpoint(t *testing.T) {
	_, router := setupTestAuthRouter()

	// 1. Trigger some requests so HTTP metrics counter accumulates
	healthReq, _ := http.NewRequest(http.MethodGet, "/health", nil)
	healthRec := httptest.NewRecorder()
	router.ServeHTTP(healthRec, healthReq)

	if healthRec.Code != http.StatusOK {
		t.Fatalf("Expected 200 for health check, got %d", healthRec.Code)
	}

	// 2. Simulate clinical telemetry metrics
	globalMetrics.SetActiveWebsockets(4)
	globalMetrics.IncHL7()
	globalMetrics.RecordDicomQuery(0.0125)

	// 3. Request /metrics
	req, _ := http.NewRequest(http.MethodGet, "/metrics", nil)
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected status 200 from /metrics, got %d: %s", rec.Code, rec.Body.String())
	}

	contentType := rec.Header().Get("Content-Type")
	if !strings.Contains(contentType, "text/plain") || !strings.Contains(contentType, "version=0.0.4") {
		t.Errorf("Expected Prometheus text/plain; version=0.0.4 Content-Type, got '%s'", contentType)
	}

	body := rec.Body.String()

	// Verify required Prometheus metadata and metric names per SRE directive
	expectedMetrics := []string{
		"vascule_active_websockets_gauge",
		"vascule_hl7_packets_total",
		"vascule_dicom_query_duration_seconds",
		"vascule_http_requests_total",
		"vascule_http_request_duration_seconds",
		"vascule_service_uptime_seconds",
	}

	for _, metricName := range expectedMetrics {
		if !strings.Contains(body, metricName) {
			t.Errorf("Prometheus output missing metric: '%s'", metricName)
		}
		if !strings.Contains(body, "# HELP "+metricName) {
			t.Errorf("Prometheus output missing # HELP for metric: '%s'", metricName)
		}
		if !strings.Contains(body, "# TYPE "+metricName) {
			t.Errorf("Prometheus output missing # TYPE for metric: '%s'", metricName)
		}
	}

	// Verify values
	if !strings.Contains(body, "vascule_active_websockets_gauge{service=\"auth-service\"} 4") {
		t.Errorf("Expected active websockets gauge value 4 in metrics output")
	}

	if !strings.Contains(body, "vascule_hl7_packets_total{service=\"auth-service\",message_type=\"ADT_A01\"} 1") {
		t.Errorf("Expected HL7 packets total value 1 in metrics output")
	}

	if !strings.Contains(body, "vascule_dicom_query_duration_seconds_count{service=\"auth-service\"} 1") {
		t.Errorf("Expected DICOM query count 1 in metrics output")
	}
}
