package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestNotificationHealth(t *testing.T) {
	server := NewNotificationServer()
	req := httptest.NewRequest(http.MethodGet, "/health", nil)
	rec := httptest.NewRecorder()

	server.handleHealth(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d", rec.Code)
	}

	var body map[string]interface{}
	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if body["service"] != "notification-service" {
		t.Errorf("Expected service 'notification-service', got %v", body["service"])
	}
	if body["status"] != "healthy" {
		t.Errorf("Expected status 'healthy', got %v", body["status"])
	}
}

func TestDeviceRegistration(t *testing.T) {
	server := NewNotificationServer()

	reg := DeviceRegistration{
		DeviceToken: "apns_test_token_nurse_99",
		Platform:    PlatformIOS,
		ClinicianID: "nurse@hospital.lan",
		TenantID:    "tenant_sms_jaipur",
		RoleTier:    "Nursing",
	}
	data, _ := json.Marshal(reg)

	req := httptest.NewRequest(http.MethodPost, "/api/v1/notifications/register-device", bytes.NewReader(data))
	rec := httptest.NewRecorder()

	server.handleRegisterDevice(rec, req)

	if rec.Code != http.StatusCreated {
		t.Fatalf("Expected 201 Created, got %d. Body: %s", rec.Code, rec.Body.String())
	}

	// Verify device exists in map
	server.mu.RLock()
	dev, ok := server.devices["apns_test_token_nurse_99"]
	server.mu.RUnlock()

	if !ok {
		t.Fatalf("Device was not found in registered device list")
	}
	if dev.TenantID != "tenant_sms_jaipur" {
		t.Errorf("Expected tenant 'tenant_sms_jaipur', got %s", dev.TenantID)
	}
}

func TestTenantIsolatedBroadcast(t *testing.T) {
	server := NewNotificationServer()

	// Broadcast for SMS Jaipur (which has 2 seeded devices: dr.roy and fellow)
	bReq := BroadcastRequest{
		TenantID:  "tenant_sms_jaipur",
		EventType: EventStatCaseBooked,
		Title:     "STAT BAE Case Booked - Cath Lab Suite 1",
		Body:      "Massive hemoptysis patient admitted. Immediate bronchial angiography required.",
		Priority:  "CRITICAL",
		SuiteName: "Angio Suite 1",
		PatientID: "SMS2026-IR-0099",
		DeepLink:  "/dashboard/imaging/1.2.840.113619.2.55.3.2831164244",
	}
	data, _ := json.Marshal(bReq)

	req := httptest.NewRequest(http.MethodPost, "/api/v1/notifications/broadcast", bytes.NewReader(data))
	req.Header.Set("X-Trace-ID", "test-trace-sms-001")
	rec := httptest.NewRecorder()

	server.handleBroadcast(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d. Body: %s", rec.Code, rec.Body.String())
	}

	var resp BroadcastResponse
	if err := json.NewDecoder(rec.Body).Decode(&resp); err != nil {
		t.Fatalf("Failed to parse response: %v", err)
	}

	if resp.TenantID != "tenant_sms_jaipur" {
		t.Errorf("Expected tenant 'tenant_sms_jaipur', got %s", resp.TenantID)
	}
	if resp.TotalRecipients != 2 {
		t.Errorf("Expected 2 SMS Jaipur recipients, got %d", resp.TotalRecipients)
	}
	if resp.SuccessfulDispatches != 2 {
		t.Errorf("Expected 2 successful dispatches, got %d", resp.SuccessfulDispatches)
	}

	// Now broadcast for a tenant with ZERO registered devices: tenant_apollo_delhi
	bReqCross := BroadcastRequest{
		TenantID:  "tenant_apollo_delhi",
		EventType: EventCiAkiWarning,
		Title:     "Contrast Warning",
		Body:      "Patient contrast volume limit reached",
		Priority:  "HIGH",
	}
	dataCross, _ := json.Marshal(bReqCross)

	reqCross := httptest.NewRequest(http.MethodPost, "/api/v1/notifications/broadcast", bytes.NewReader(dataCross))
	recCross := httptest.NewRecorder()

	server.handleBroadcast(recCross, reqCross)

	if recCross.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d", recCross.Code)
	}

	var respCross BroadcastResponse
	if err := json.NewDecoder(recCross.Body).Decode(&respCross); err != nil {
		t.Fatalf("Failed to parse response: %v", err)
	}

	// Must be ZERO recipients - ensuring Tenant Isolation!
	if respCross.TotalRecipients != 0 {
		t.Errorf("Tenant isolation failed: expected 0 recipients for unregistered tenant, got %d", respCross.TotalRecipients)
	}
}

func TestAPNSAndFCMFormatting(t *testing.T) {
	req := BroadcastRequest{
		TenantID:  "tenant_sms_jaipur",
		EventType: EventStatCaseBooked,
		Title:     "STAT Embolization",
		Body:      "Patient in hypovolemic shock",
		Priority:  "CRITICAL",
		SuiteName: "Suite 1",
		PatientID: "IR-100",
		DeepLink:  "/dashboard",
	}

	apns := FormatAPNSPayload(req)
	if apns.APS.Sound != "alarm_stat.wav" {
		t.Errorf("Expected APNS critical sound 'alarm_stat.wav', got %s", apns.APS.Sound)
	}
	if apns.CustomData["tenantId"] != "tenant_sms_jaipur" {
		t.Errorf("Expected tenantId in APNS customData, got %v", apns.CustomData["tenantId"])
	}

	fcm := FormatFCMPayload(req, "sample_fcm_token_123")
	if fcm.Message.Android.Notification.Sound != "alarm_stat" {
		t.Errorf("Expected FCM sound 'alarm_stat', got %s", fcm.Message.Android.Notification.Sound)
	}
	if fcm.Message.Android.Notification.ChannelID != "stat_emergency" {
		t.Errorf("Expected FCM channel 'stat_emergency', got %s", fcm.Message.Android.Notification.ChannelID)
	}
}

func TestMetricsEndpoint(t *testing.T) {
	server := NewNotificationServer()
	req := httptest.NewRequest(http.MethodGet, "/metrics", nil)
	rec := httptest.NewRecorder()

	server.handleMetrics(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d", rec.Code)
	}

	body := rec.Body.String()
	if !strings.Contains(body, "notifications_broadcast_total") {
		t.Errorf("Metrics missing notifications_broadcast_total")
	}
	if !strings.Contains(body, "notifications_registered_devices_current") {
		t.Errorf("Metrics missing notifications_registered_devices_current")
	}
}
