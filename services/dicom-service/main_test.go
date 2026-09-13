package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"
)

// setupTestServer creates a configured test server with seed data.
func setupTestServer() http.Handler {
	repo := NewStudyRepository()
	server := NewServer(repo)
	return BuildHandler(server)
}

// ---------------------------------------------------------------------
// 1. Health Check Tests
// ---------------------------------------------------------------------

func TestHealthCheck(t *testing.T) {
	handler := setupTestServer()

	req, err := http.NewRequest(http.MethodGet, "/health", nil)
	if err != nil {
		t.Fatalf("Failed to construct health check request: %v", err)
	}

	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	// Verify status code
	if rec.Code != http.StatusOK {
		t.Errorf("Expected status 200, got %d", rec.Code)
	}

	// Verify Content-Type
	contentType := rec.Header().Get("Content-Type")
	if !strings.Contains(contentType, "application/json") {
		t.Errorf("Expected application/json Content-Type, got %s", contentType)
	}

	// Parse JSON payload
	var resp HealthResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("Failed to parse health response JSON: %v", err)
	}

	// Verify required diagnostic fields
	if resp.Service != ServiceName {
		t.Errorf("Expected service '%s', got '%s'", ServiceName, resp.Service)
	}
	if resp.Status != "healthy" {
		t.Errorf("Expected status 'healthy', got '%s'", resp.Status)
	}
	if resp.Version != ServiceVersion {
		t.Errorf("Expected version '%s', got '%s'", ServiceVersion, resp.Version)
	}
	if _, err := time.Parse(time.RFC3339, resp.Timestamp); err != nil {
		t.Errorf("Timestamp '%s' is not valid RFC3339 format: %v", resp.Timestamp, err)
	}

	// Verify tracing headers attached by middleware
	if traceID := rec.Header().Get("X-Trace-ID"); len(traceID) != 32 {
		t.Errorf("Expected 32-hex character X-Trace-ID, got '%s'", traceID)
	}
	if spanID := rec.Header().Get("X-Span-ID"); len(spanID) != 16 {
		t.Errorf("Expected 16-hex character X-Span-ID, got '%s'", spanID)
	}
	if respTime := rec.Header().Get("X-Response-Time"); respTime == "" {
		t.Errorf("Expected X-Response-Time header to be populated")
	}
}

func TestHealthCheckMethodNotAllowed(t *testing.T) {
	handler := setupTestServer()

	req, _ := http.NewRequest(http.MethodPost, "/health", nil)
	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusMethodNotAllowed {
		t.Errorf("Expected status 405 Method Not Allowed, got %d", rec.Code)
	}
}

// ---------------------------------------------------------------------
// 2. Tracing Middleware & Latency Header Tests
// ---------------------------------------------------------------------

func TestTracingMiddlewarePropagation(t *testing.T) {
	handler := setupTestServer()

	customTraceID := "4bf92f3577b34da6a3ce929d0e0e4736"
	req, _ := http.NewRequest(http.MethodGet, "/health", nil)
	req.Header.Set("X-Trace-ID", customTraceID)

	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d", rec.Code)
	}

	// Verify caller's trace ID was preserved and propagated
	propagatedTraceID := rec.Header().Get("X-Trace-ID")
	if propagatedTraceID != customTraceID {
		t.Errorf("Expected preserved trace ID '%s', got '%s'", customTraceID, propagatedTraceID)
	}

	// Verify new span ID was generated
	spanID := rec.Header().Get("X-Span-ID")
	if len(spanID) != 16 {
		t.Errorf("Expected 16-character span ID, got '%s'", spanID)
	}

	// Verify response latency header
	responseTime := rec.Header().Get("X-Response-Time")
	if !strings.HasSuffix(responseTime, "ms") {
		t.Errorf("Expected X-Response-Time ending in 'ms', got '%s'", responseTime)
	}
}

// ---------------------------------------------------------------------
// 3. DICOMweb QIDO-RS Study Lookup Tests
// ---------------------------------------------------------------------

func TestStudyLookupStandardDICOMweb(t *testing.T) {
	handler := setupTestServer()
	studyUID := "1.2.840.113619.2.55.3.604681319.743.1726210001.1"

	req, _ := http.NewRequest(http.MethodGet, "/api/v1/studies/"+studyUID, nil)
	req.Header.Set("Accept", "application/dicom+json")

	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected status 200, got %d: %s", rec.Code, rec.Body.String())
	}

	contentType := rec.Header().Get("Content-Type")
	if !strings.Contains(contentType, "application/dicom+json") {
		t.Errorf("Expected application/dicom+json content-type, got %s", contentType)
	}

	var datasets []DicomStudyDataset
	if err := json.Unmarshal(rec.Body.Bytes(), &datasets); err != nil {
		t.Fatalf("Failed to parse DICOM PS3.18 JSON array: %v", err)
	}

	if len(datasets) != 1 {
		t.Fatalf("Expected 1 DICOM dataset, got %d", len(datasets))
	}

	ds := datasets[0]

	// Verify 0020000D (StudyInstanceUID)
	if el, ok := ds["0020000D"]; !ok || el.VR != "UI" || len(el.Value) != 1 || el.Value[0] != studyUID {
		t.Errorf("Tag 0020000D invalid: %+v", el)
	}

	// Verify 00080060 (ModalitiesInStudy)
	if el, ok := ds["00080060"]; !ok || el.VR != "CS" || len(el.Value) < 1 {
		t.Errorf("Tag 00080060 invalid: %+v", el)
	}

	// Verify 00100010 (PatientName)
	if el, ok := ds["00100010"]; !ok || el.VR != "PN" || len(el.Value) != 1 {
		t.Errorf("Tag 00100010 invalid: %+v", el)
	} else {
		// Verify Alphabetic component
		pnBytes, _ := json.Marshal(el.Value[0])
		var pn PersonName
		if err := json.Unmarshal(pnBytes, &pn); err != nil || pn.Alphabetic != "SHARMA^RAJESH" {
			t.Errorf("Expected PatientName 'SHARMA^RAJESH', got %+v", el.Value[0])
		}
	}

	// Verify 00100020 (PatientID)
	if el, ok := ds["00100020"]; !ok || el.VR != "LO" || el.Value[0] != "MRN-VIR-2026-001" {
		t.Errorf("Tag 00100020 invalid: %+v", el)
	}

	// Verify 00080020 (StudyDate)
	if el, ok := ds["00080020"]; !ok || el.VR != "DA" || el.Value[0] != "20260912" {
		t.Errorf("Tag 00080020 invalid: %+v", el)
	}

	// Verify 00080030 (StudyTime)
	if el, ok := ds["00080030"]; !ok || el.VR != "TM" || el.Value[0] != "093000" {
		t.Errorf("Tag 00080030 invalid: %+v", el)
	}

	// Verify 00080050 (AccessionNumber)
	if el, ok := ds["00080050"]; !ok || el.VR != "SH" || el.Value[0] != "ACC-2026-0912-01" {
		t.Errorf("Tag 00080050 invalid: %+v", el)
	}

	// Verify 00081030 (StudyDescription)
	if el, ok := ds["00081030"]; !ok || el.VR != "LO" || el.Value[0] != "Hepatic Angiogram & TACE Embolization" {
		t.Errorf("Tag 00081030 invalid: %+v", el)
	}

	// Verify 00201206 (NumberOfStudyRelatedSeries)
	if el, ok := ds["00201206"]; !ok || el.VR != "IS" {
		t.Errorf("Tag 00201206 missing or wrong VR: %+v", el)
	}

	// Verify 00201208 (NumberOfStudyRelatedInstances)
	if el, ok := ds["00201208"]; !ok || el.VR != "IS" {
		t.Errorf("Tag 00201208 missing or wrong VR: %+v", el)
	}

	// Verify 00080080 (InstitutionName)
	if el, ok := ds["00080080"]; !ok || el.VR != "LO" || el.Value[0] != "Vascule Angio Suite 1" {
		t.Errorf("Tag 00080080 invalid: %+v", el)
	}
}

// ---------------------------------------------------------------------
// 4. Simplified / Canonical JSON View Tests
// ---------------------------------------------------------------------

func TestStudyCanonicalViewEndpoint(t *testing.T) {
	handler := setupTestServer()
	studyUID := "1.2.840.113619.2.55.3.604681319.743.1726210001.1"

	// Test GET /api/v1/studies/{studyUID}?view=canonical
	req, _ := http.NewRequest(http.MethodGet, "/api/v1/studies/"+studyUID+"?view=canonical", nil)
	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected status 200, got %d: %s", rec.Code, rec.Body.String())
	}

	var view CanonicalStudyView
	if err := json.Unmarshal(rec.Body.Bytes(), &view); err != nil {
		t.Fatalf("Failed to parse canonical view: %v", err)
	}

	if view.StudyInstanceUID != studyUID {
		t.Errorf("Expected studyInstanceUid '%s', got '%s'", studyUID, view.StudyInstanceUID)
	}
	if view.Modality != "XA" {
		t.Errorf("Expected modality 'XA', got '%s'", view.Modality)
	}
	if view.PatientName != "SHARMA^RAJESH" {
		t.Errorf("Expected patientName 'SHARMA^RAJESH', got '%s'", view.PatientName)
	}
	if view.PatientID != "MRN-VIR-2026-001" {
		t.Errorf("Expected patientId 'MRN-VIR-2026-001', got '%s'", view.PatientID)
	}
	if view.StudyDate != "20260912" {
		t.Errorf("Expected studyDate '20260912', got '%s'", view.StudyDate)
	}
	if view.StudyDescription != "Hepatic Angiogram & TACE Embolization" {
		t.Errorf("Expected studyDescription 'Hepatic Angiogram & TACE Embolization', got '%s'", view.StudyDescription)
	}
	if view.NumberOfInstances != 420 {
		t.Errorf("Expected numberOfInstances 420, got %d", view.NumberOfInstances)
	}
	if view.NumberOfSeries != 6 {
		t.Errorf("Expected numberOfSeries 6, got %d", view.NumberOfSeries)
	}

	// Verify radiation dose report
	if view.RadiationDoseReport == nil {
		t.Fatalf("RadiationDoseReport is nil")
	}
	if view.RadiationDoseReport.TotalDAPGyCm2 != 142.50 {
		t.Errorf("Expected TotalDAPGyCm2 142.50, got %f", view.RadiationDoseReport.TotalDAPGyCm2)
	}
	if view.RadiationDoseReport.CumulativeAirKermaMGy != 850.20 {
		t.Errorf("Expected CumulativeAirKermaMGy 850.20, got %f", view.RadiationDoseReport.CumulativeAirKermaMGy)
	}
	if view.RadiationDoseReport.FluoroscopyTimeSeconds != 745.0 {
		t.Errorf("Expected FluoroscopyTimeSeconds 745.0, got %f", view.RadiationDoseReport.FluoroscopyTimeSeconds)
	}
	if view.RadiationDoseReport.TotalFrames != 420 {
		t.Errorf("Expected TotalFrames 420, got %d", view.RadiationDoseReport.TotalFrames)
	}

	// Also test dedicated sub-path: /api/v1/studies/{studyUID}/canonical
	reqSub, _ := http.NewRequest(http.MethodGet, "/api/v1/studies/"+studyUID+"/canonical", nil)
	recSub := httptest.NewRecorder()
	handler.ServeHTTP(recSub, reqSub)

	if recSub.Code != http.StatusOK {
		t.Errorf("Expected status 200 on /canonical sub-resource, got %d", recSub.Code)
	}
}

// ---------------------------------------------------------------------
// 5. Studies Listing & Filtering Tests
// ---------------------------------------------------------------------

func TestStudiesListingAndFiltering(t *testing.T) {
	handler := setupTestServer()

	// List all studies
	req, _ := http.NewRequest(http.MethodGet, "/api/v1/studies", nil)
	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected 200 OK, got %d", rec.Code)
	}

	var allDatasets []DicomStudyDataset
	if err := json.Unmarshal(rec.Body.Bytes(), &allDatasets); err != nil {
		t.Fatalf("Failed to parse datasets: %v", err)
	}
	if len(allDatasets) != 4 {
		t.Errorf("Expected 4 seeded studies, got %d", len(allDatasets))
	}

	// Filter by Modality=CT
	reqCT, _ := http.NewRequest(http.MethodGet, "/api/v1/studies?modality=CT", nil)
	recCT := httptest.NewRecorder()
	handler.ServeHTTP(recCT, reqCT)

	var ctDatasets []DicomStudyDataset
	_ = json.Unmarshal(recCT.Body.Bytes(), &ctDatasets)
	if len(ctDatasets) != 1 {
		t.Errorf("Expected 1 CT study, got %d", len(ctDatasets))
	}

	// Filter by standard QIDO-RS tag ModalitiesInStudy=XA
	reqXA, _ := http.NewRequest(http.MethodGet, "/api/v1/studies?ModalitiesInStudy=XA", nil)
	recXA := httptest.NewRecorder()
	handler.ServeHTTP(recXA, reqXA)

	var xaDatasets []DicomStudyDataset
	_ = json.Unmarshal(recXA.Body.Bytes(), &xaDatasets)
	if len(xaDatasets) < 2 {
		t.Errorf("Expected at least 2 XA studies, got %d", len(xaDatasets))
	}

	// Filter by PatientID=MRN-VIR-2026-003 with view=canonical
	reqPatient, _ := http.NewRequest(http.MethodGet, "/api/v1/studies?patientId=MRN-VIR-2026-003&view=canonical", nil)
	recPatient := httptest.NewRecorder()
	handler.ServeHTTP(recPatient, reqPatient)

	var patientViews []CanonicalStudyView
	_ = json.Unmarshal(recPatient.Body.Bytes(), &patientViews)
	if len(patientViews) != 1 || patientViews[0].PatientName != "DOE^JOHN" {
		t.Errorf("Expected John Doe study, got %+v", patientViews)
	}
}

// ---------------------------------------------------------------------
// 6. Error Handling Tests: 400 Bad Request & 404 Not Found
// ---------------------------------------------------------------------

func TestInvalidStudyUID_400(t *testing.T) {
	handler := setupTestServer()

	invalidUIDs := []struct {
		name string
		uid  string
	}{
		{"alphabetic characters", "1.2.840.INVALID.UID"},
		{"leading zero in component", "1.2.0840.113619.1"},
		{"consecutive periods", "1.2..840.1"},
		{"trailing period", "1.2.840.1."},
		{"leading period", ".1.2.840.1"},
		{"exceeds 64 characters", "1.2.840.113619.2.55.3.604681319.743.1726210001.123456789012345678901234567890"},
	}

	for _, tc := range invalidUIDs {
		t.Run(tc.name, func(t *testing.T) {
			req, _ := http.NewRequest(http.MethodGet, "/api/v1/studies/"+tc.uid, nil)
			rec := httptest.NewRecorder()
			handler.ServeHTTP(rec, req)

			if rec.Code != http.StatusBadRequest {
				t.Errorf("Expected status 400 for UID '%s', got %d", tc.uid, rec.Code)
			}

			var errResp ErrorResponse
			if err := json.Unmarshal(rec.Body.Bytes(), &errResp); err != nil {
				t.Fatalf("Failed to parse error response JSON: %v", err)
			}

			if errResp.Error != "Bad Request" {
				t.Errorf("Expected Error='Bad Request', got '%s'", errResp.Error)
			}
			if errResp.StudyUID != tc.uid {
				t.Errorf("Expected studyUid='%s', got '%s'", tc.uid, errResp.StudyUID)
			}
		})
	}
}

func TestStudyNotFound_404(t *testing.T) {
	handler := setupTestServer()

	unknownValidUID := "1.2.840.99999.1.2.3.4.5"
	req, _ := http.NewRequest(http.MethodGet, "/api/v1/studies/"+unknownValidUID, nil)
	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusNotFound {
		t.Errorf("Expected status 404 for unknown UID, got %d", rec.Code)
	}

	var errResp ErrorResponse
	if err := json.Unmarshal(rec.Body.Bytes(), &errResp); err != nil {
		t.Fatalf("Failed to parse error response JSON: %v", err)
	}

	if errResp.Error != "Not Found" {
		t.Errorf("Expected Error='Not Found', got '%s'", errResp.Error)
	}
	if errResp.StudyUID != unknownValidUID {
		t.Errorf("Expected studyUid='%s', got '%s'", unknownValidUID, errResp.StudyUID)
	}
}

// ---------------------------------------------------------------------
// 7. Study Series Sub-Resource Tests
// ---------------------------------------------------------------------

func TestStudySeriesEndpoint(t *testing.T) {
	handler := setupTestServer()
	studyUID := "1.2.840.113619.2.55.3.604681319.743.1726210001.1"

	req, _ := http.NewRequest(http.MethodGet, "/api/v1/studies/"+studyUID+"/series", nil)
	rec := httptest.NewRecorder()
	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected status 200, got %d: %s", rec.Code, rec.Body.String())
	}

	var seriesList []struct {
		SeriesInstanceUID string `json:"seriesInstanceUid"`
		SeriesNumber      int    `json:"seriesNumber"`
		Modality          string `json:"modality"`
		NumberOfInstances int    `json:"numberOfInstances"`
	}

	if err := json.Unmarshal(rec.Body.Bytes(), &seriesList); err != nil {
		t.Fatalf("Failed to parse series response JSON: %v", err)
	}

	if len(seriesList) != 6 {
		t.Errorf("Expected 6 series, got %d", len(seriesList))
	}

	totalInstances := 0
	for _, s := range seriesList {
		totalInstances += s.NumberOfInstances
	}
	if totalInstances != 420 {
		t.Errorf("Expected total instances across series to be 420, got %d", totalInstances)
	}
}
