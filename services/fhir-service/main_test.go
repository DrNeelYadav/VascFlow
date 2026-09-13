package main

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"
	"time"
)

// Sample valid ADT^A01 message
const sampleADTA01 = "MSH|^~\\&|EPIC|HOSPITAL_A|VASCULE_OS|ANGIO_SUITE|20260913120000||ADT^A01^ADT_A01|MSG00001|P|2.5\r" +
	"EVN|A01|20260913120000\r" +
	"PID|1||1002345^^^HOSPITAL^MR||DOE^JOHN^A||19800512|M|||123 MAIN ST^SUITE 400^SPRINGFIELD^IL^62701^USA\r" +
	"PV1|1|I|ANGIO^RM1^BED1^HOSP|||||12345^SMITH^ALICE^M^DR||||||||||1234567|||||||||||||||||||||||||20260913110000\r"

func TestHealthEndpoint(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/health", nil)
	rec := httptest.NewRecorder()

	handleHealth(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var resp HealthResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("failed to decode health response: %v", err)
	}

	if resp.Service != "fhir-service" {
		t.Errorf("expected service 'fhir-service', got '%s'", resp.Service)
	}
	if resp.Status != "healthy" {
		t.Errorf("expected status 'healthy', got '%s'", resp.Status)
	}
	if resp.Version != "1.0.0" {
		t.Errorf("expected version '1.0.0', got '%s'", resp.Version)
	}
	if resp.Timestamp == "" {
		t.Errorf("expected non-empty timestamp")
	}
}

func TestADTA01ValidParsing(t *testing.T) {
	event, msh, err := ParseADTA01Message(sampleADTA01)
	if err != nil {
		t.Fatalf("unexpected parsing error: %v", err)
	}

	if msh == nil {
		t.Fatal("expected non-nil MSHInfo")
	}
	if msh.MessageControlID != "MSG00001" {
		t.Errorf("expected MsgControlID MSG00001, got %s", msh.MessageControlID)
	}
	if msh.SendingApp != "EPIC" {
		t.Errorf("expected SendingApp EPIC, got %s", msh.SendingApp)
	}
	if msh.SendingFacility != "HOSPITAL_A" {
		t.Errorf("expected SendingFacility HOSPITAL_A, got %s", msh.SendingFacility)
	}

	// Verify Canonical Patient
	p := event.Patient
	if p.MRN != "1002345" {
		t.Errorf("expected MRN 1002345, got %s", p.MRN)
	}
	if p.Name.FamilyName != "DOE" || p.Name.GivenName != "JOHN" || p.Name.MiddleName != "A" {
		t.Errorf("expected name DOE JOHN A, got %+v", p.Name)
	}
	if p.Gender != "Male" || p.GenderCode != "M" {
		t.Errorf("expected Gender Male/M, got %s/%s", p.Gender, p.GenderCode)
	}
	if p.DateOfBirth != "1980-05-12" {
		t.Errorf("expected DOB 1980-05-12, got %s", p.DateOfBirth)
	}
	if p.Address.Street != "123 MAIN ST" || p.Address.City != "SPRINGFIELD" || p.Address.State != "IL" || p.Address.Zip != "62701" {
		t.Errorf("unexpected address: %+v", p.Address)
	}

	// Verify PV1 Encounter
	if event.Visit == nil {
		t.Fatal("expected non-nil CanonicalVisit")
	}
	if event.Visit.PatientClass != "Inpatient" {
		t.Errorf("expected PatientClass Inpatient, got %s", event.Visit.PatientClass)
	}
	if event.Visit.AssignedLocation.PointOfCare != "ANGIO" || event.Visit.AssignedLocation.Room != "RM1" {
		t.Errorf("unexpected assigned location: %+v", event.Visit.AssignedLocation)
	}

	// Verify ACK Generation
	ack := GenerateACK(msh, "AA", "Message accepted and parsed successfully")
	if !strings.Contains(ack, "MSH|^~\\&|VASCULE_OS|ANGIO_SUITE|EPIC|HOSPITAL_A|") {
		t.Errorf("ACK missing expected MSH header: %s", ack)
	}
	if !strings.Contains(ack, "MSA|AA|MSG00001|Message accepted and parsed successfully") {
		t.Errorf("ACK missing expected MSA segment: %s", ack)
	}
}

func TestADTA01HTTPPostRaw(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/api/v1/hl7/adt-a01", strings.NewReader(sampleADTA01))
	req.Header.Set("Content-Type", "application/hl7-v2")
	rec := httptest.NewRecorder()

	handleADTA01(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d with body: %s", rec.Code, rec.Body.String())
	}

	var resp HL7IntakeResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.Status != "success" {
		t.Errorf("expected status 'success', got '%s'", resp.Status)
	}
	if !strings.Contains(resp.ACKMessage, "MSA|AA|MSG00001|") {
		t.Errorf("ACK does not contain MSA|AA|MSG00001: %s", resp.ACKMessage)
	}
	if resp.CanonicalEvent == nil || resp.CanonicalEvent.Patient.MRN != "1002345" {
		t.Errorf("canonical event MRN mismatch: %+v", resp.CanonicalEvent)
	}
}

func TestADTA01HTTPPostJSONWrapper(t *testing.T) {
	payload := map[string]string{
		"rawHl7": sampleADTA01,
	}
	body, _ := json.Marshal(payload)

	req := httptest.NewRequest(http.MethodPost, "/api/v1/hl7/adt-a01", bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	handleADTA01(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d with body: %s", rec.Code, rec.Body.String())
	}

	var resp HL7IntakeResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.Status != "success" {
		t.Errorf("expected status success, got %s", resp.Status)
	}
}

func TestADTA01ValidationFailure(t *testing.T) {
	// Missing PID
	invalidMsg := "MSH|^~\\&|EPIC|HOSPITAL_A|VASCULE_OS|ANGIO_SUITE|20260913120000||ADT^A01^ADT_A01|MSG99999|P|2.5\r"
	req := httptest.NewRequest(http.MethodPost, "/api/v1/hl7/adt-a01", strings.NewReader(invalidMsg))
	req.Header.Set("Content-Type", "application/hl7-v2")
	rec := httptest.NewRecorder()

	handleADTA01(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("expected status 400 Bad Request, got %d", rec.Code)
	}

	var resp HL7IntakeResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if resp.Status != "error" {
		t.Errorf("expected status 'error', got '%s'", resp.Status)
	}
	if !strings.Contains(resp.ACKMessage, "MSA|AE|MSG99999|") {
		t.Errorf("ACK missing AE (Application Error) code: %s", resp.ACKMessage)
	}
}

func TestMLLPFramingAndTCP(t *testing.T) {
	// Test WrapMLLP framing
	msg := "MSH|^~\\&|TEST\rPID|1\r"
	framed := WrapMLLP(msg)

	if len(framed) != len(msg)+3 {
		t.Fatalf("framed length expected %d, got %d", len(msg)+3, len(framed))
	}
	if framed[0] != MLLPStartByte {
		t.Errorf("start byte expected 0x0B, got 0x%02X", framed[0])
	}
	if framed[len(framed)-2] != MLLPEndByte1 || framed[len(framed)-1] != MLLPEndByte2 {
		t.Errorf("end bytes expected 0x1C 0x0D, got 0x%02X 0x%02X", framed[len(framed)-2], framed[len(framed)-1])
	}

	// Test MLLP TCP Server over loopback
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	var wg sync.WaitGroup
	serverAddr := "127.0.0.1:25759" // Dedicated test port

	err := StartMLLPServer(ctx, serverAddr, &wg)
	if err != nil {
		t.Fatalf("failed to start test MLLP server: %v", err)
	}

	// Allow listener time to bind
	time.Sleep(100 * time.Millisecond)

	// Connect TCP client
	conn, err := net.DialTimeout("tcp", serverAddr, 2*time.Second)
	if err != nil {
		t.Fatalf("failed to connect to test MLLP server: %v", err)
	}
	defer conn.Close()

	// Send framed sample message
	testHL7 := sampleADTA01
	if _, err := conn.Write(WrapMLLP(testHL7)); err != nil {
		t.Fatalf("failed to write MLLP frame: %v", err)
	}

	// Read MLLP ACK response
	reader := bufio.NewReader(conn)
	_ = conn.SetReadDeadline(time.Now().Add(3 * time.Second))

	// Find start byte
	for {
		b, err := reader.ReadByte()
		if err != nil {
			t.Fatalf("failed reading start byte: %v", err)
		}
		if b == MLLPStartByte {
			break
		}
	}

	var ackBuf bytes.Buffer
	for {
		b, err := reader.ReadByte()
		if err != nil {
			t.Fatalf("failed reading ACK payload: %v", err)
		}
		if b == MLLPEndByte1 {
			next, err := reader.ReadByte()
			if err != nil {
				t.Fatalf("failed reading end byte 2: %v", err)
			}
			if next == MLLPEndByte2 {
				break
			}
			ackBuf.WriteByte(b)
			ackBuf.WriteByte(next)
			continue
		}
		ackBuf.WriteByte(b)
	}

	ackStr := ackBuf.String()
	if !strings.Contains(ackStr, "MSA|AA|MSG00001|") {
		t.Errorf("MLLP ACK missing MSA|AA|MSG00001: %s", ackStr)
	}

	cancel()
	_ = conn.Close()
	wg.Wait()
}

func TestPrometheusMetricsEndpoint(t *testing.T) {
	// Set metrics
	globalFhirMetrics.SetActiveWebsockets(3)
	globalFhirMetrics.IncHL7()

	req := httptest.NewRequest(http.MethodGet, "/metrics", nil)
	rec := httptest.NewRecorder()

	handleMetrics(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200 from /metrics, got %d", rec.Code)
	}

	contentType := rec.Header().Get("Content-Type")
	if !strings.Contains(contentType, "text/plain") || !strings.Contains(contentType, "version=0.0.4") {
		t.Errorf("expected text/plain; version=0.0.4, got '%s'", contentType)
	}

	body := rec.Body.String()
	expectedMetrics := []string{
		"vascule_service_uptime_seconds",
		"vascule_active_websockets_gauge",
		"vascule_hl7_packets_total",
		"vascule_dicom_query_duration_seconds",
		"vascule_http_requests_total",
		"vascule_http_request_duration_seconds",
	}

	for _, m := range expectedMetrics {
		if !strings.Contains(body, m) {
			t.Errorf("expected metric '%s' in body", m)
		}
	}

	if !strings.Contains(body, fmt.Sprintf("vascule_active_websockets_gauge{service=\"%s\"} 3", ServiceName)) {
		t.Errorf("expected active websockets gauge value 3")
	}
}
