package main

import (
	"bytes"
	"encoding/binary"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

// TestRDSRJsonParser verifies parsing of canonical and DICOMweb JSON RDSR datasets
func TestRDSRJsonParser(t *testing.T) {
	sampleJSON := `{
		"sopClassUid": "1.2.840.10008.5.1.4.1.1.88.67",
		"sopInstanceUid": "1.2.840.113619.2.55.3.604681319.743.RDSR.01",
		"studyInstanceUid": "1.2.840.113619.2.55.3.604681319.743.1726210001.1",
		"patientId": "MRN-VIR-2026-001",
		"patientName": "KUMAR^RAJESH",
		"studyDate": "20260913",
		"studyTime": "113000",
		"device": {
			"deviceObserverUid": "1.2.840.10008.2026.AZURION.01",
			"manufacturer": "Philips Medical Systems",
			"modelName": "Azurion 7 C20",
			"serialNumber": "PH-AZ-88310-SMS",
			"stationName": "ANGIO_DSA1_SMS",
			"institutionName": "SMS Medical College, Jaipur",
			"departmentName": "Interventional Radiology"
		},
		"accumulatedDose": {
			"cumulativeAirKermaMGy": 384.2,
			"doseAreaProductGyCm2": 24.8,
			"totalFluoroscopyTimeSec": 720.0,
			"totalAcquisitionTimeSec": 32.5,
			"totalIrradiationEvents": 14,
			"dapOriginalUnit": "Gy.cm2"
		},
		"events": [
			{
				"eventIndex": 1,
				"positionerPrimaryAngleDeg": 30.0,
				"positionerSecondaryAngleDeg": 15.0,
				"doseAreaProductGyCm2": 2.4,
				"airKermaMGy": 35.0
			},
			{
				"eventIndex": 2,
				"positionerPrimaryAngleDeg": -25.5,
				"positionerSecondaryAngleDeg": -10.0,
				"doseAreaProductGyCm2": 3.1,
				"airKermaMGy": 48.0
			}
		]
	}`

	parsed, err := ParseRDSR([]byte(sampleJSON))
	if err != nil {
		t.Fatalf("ParseRDSR returned unexpected error: %v", err)
	}

	if parsed.SOPClassUID != RDSRSOPClassUID {
		t.Errorf("Expected SOPClassUID %s, got %s", RDSRSOPClassUID, parsed.SOPClassUID)
	}

	// TID 1021: Device Participant assertions
	if parsed.Device.Manufacturer != "Philips Medical Systems" {
		t.Errorf("Expected manufacturer 'Philips Medical Systems', got '%s'", parsed.Device.Manufacturer)
	}
	if parsed.Device.ModelName != "Azurion 7 C20" {
		t.Errorf("Expected model 'Azurion 7 C20', got '%s'", parsed.Device.ModelName)
	}
	if parsed.Device.StationName != "ANGIO_DSA1_SMS" {
		t.Errorf("Expected station 'ANGIO_DSA1_SMS', got '%s'", parsed.Device.StationName)
	}

	// TID 1020: Accumulated Dose assertions
	if parsed.AccumulatedDose.CumulativeAirKermaMGy != 384.2 {
		t.Errorf("Expected Air Kerma 384.2, got %.1f", parsed.AccumulatedDose.CumulativeAirKermaMGy)
	}
	if parsed.AccumulatedDose.DoseAreaProductGyCm2 != 24.8 {
		t.Errorf("Expected DAP 24.8, got %.1f", parsed.AccumulatedDose.DoseAreaProductGyCm2)
	}
	if parsed.AccumulatedDose.TotalFluoroscopyTimeSec != 720.0 {
		t.Errorf("Expected Fluoro time 720.0s, got %.1f", parsed.AccumulatedDose.TotalFluoroscopyTimeSec)
	}
	if parsed.AccumulatedDose.TotalIrradiationEvents != 14 {
		t.Errorf("Expected 14 events, got %d", parsed.AccumulatedDose.TotalIrradiationEvents)
	}

	// Irradiation Events assertions
	if len(parsed.Events) != 2 {
		t.Fatalf("Expected 2 irradiation events, got %d", len(parsed.Events))
	}
	if parsed.Events[0].PositionerPrimaryAngle != 30.0 || parsed.Events[0].PositionerSecondaryAngle != 15.0 {
		t.Errorf("Unexpected event 0 angles: %.1f / %.1f", parsed.Events[0].PositionerPrimaryAngle, parsed.Events[0].PositionerSecondaryAngle)
	}
}

// TestRDSRBinaryParser verifies parsing of synthetic binary DICOM Part 10 streams
func TestRDSRBinaryParser(t *testing.T) {
	buf := new(bytes.Buffer)

	// 128-byte preamble
	buf.Write(make([]byte, 128))
	// "DICM" prefix
	buf.WriteString("DICM")

	// Helper to write explicit VR element (Short VR: 2 bytes VR + 2 bytes Length)
	writeElem := func(group, element uint16, vr string, val string) {
		binary.Write(buf, binary.LittleEndian, group)
		binary.Write(buf, binary.LittleEndian, element)
		buf.WriteString(vr)
		length := uint16(len(val))
		binary.Write(buf, binary.LittleEndian, length)
		buf.WriteString(val)
	}

	// Write SOP Class UID (0008, 0016)
	writeElem(0x0008, 0x0016, "UI", RDSRSOPClassUID)
	// Write Patient Name (0010, 0010)
	writeElem(0x0010, 0x0010, "PN", "SHARMA^SUNITA")
	// Write Patient ID (0010, 0020)
	writeElem(0x0010, 0x0020, "LO", "MRN-SMS-2026-99")
	// Write Manufacturer (0008, 0070)
	writeElem(0x0008, 0x0070, "LO", "Siemens Healthineers")
	// Write Model Name (0008, 1090)
	writeElem(0x0008, 0x1090, "LO", "Artis Zee Floor")
	// Write Station Name (0008, 1010)
	writeElem(0x0008, 0x1010, "SH", "HYBRID_OR2_SMS")
	// Write Air Kerma (0018, 115A)
	writeElem(0x0018, 0x115A, "DS", "245.5")
	// Write DAP (0018, 115E)
	writeElem(0x0018, 0x115E, "DS", "18.2")
	// Write Fluoro Time (0018, 1155)
	writeElem(0x0018, 0x1155, "DS", "540")
	// Write Positioner Primary Angle (0018, 1510)
	writeElem(0x0018, 0x1510, "DS", "45.0")
	// Write Positioner Secondary Angle (0018, 1511)
	writeElem(0x0018, 0x1511, "DS", "20.0")

	parsed, err := ParseRDSR(buf.Bytes())
	if err != nil {
		t.Fatalf("Failed to parse synthetic binary RDSR: %v", err)
	}

	if parsed.PatientName != "SHARMA^SUNITA" {
		t.Errorf("Expected patient 'SHARMA^SUNITA', got '%s'", parsed.PatientName)
	}
	if parsed.Device.Manufacturer != "Siemens Healthineers" {
		t.Errorf("Expected manufacturer 'Siemens Healthineers', got '%s'", parsed.Device.Manufacturer)
	}
	if parsed.Device.ModelName != "Artis Zee Floor" {
		t.Errorf("Expected model 'Artis Zee Floor', got '%s'", parsed.Device.ModelName)
	}
	if parsed.AccumulatedDose.CumulativeAirKermaMGy != 245.5 {
		t.Errorf("Expected Air Kerma 245.5, got %.1f", parsed.AccumulatedDose.CumulativeAirKermaMGy)
	}
	if parsed.AccumulatedDose.DoseAreaProductGyCm2 != 18.2 {
		t.Errorf("Expected DAP 18.2, got %.1f", parsed.AccumulatedDose.DoseAreaProductGyCm2)
	}
	if len(parsed.Events) != 1 {
		t.Fatalf("Expected 1 parsed event, got %d", len(parsed.Events))
	}
	if parsed.Events[0].PositionerPrimaryAngle != 45.0 || parsed.Events[0].PositionerSecondaryAngle != 20.0 {
		t.Errorf("Unexpected angles: %.1f / %.1f", parsed.Events[0].PositionerPrimaryAngle, parsed.Events[0].PositionerSecondaryAngle)
	}
}

// TestNormalizeDAPUnits validates radiation unit conversions
func TestNormalizeDAPUnits(t *testing.T) {
	// 100 dGy·cm² = 10 Gy·cm²
	dgy := NormalizeDAPToGyCm2(100.0, "dGy.cm2")
	if dgy != 10.0 {
		t.Errorf("Expected 10.0 Gy.cm2 for 100 dGy.cm2, got %.2f", dgy)
	}

	// 25 µGy·m² = 25 Gy·cm²
	ugy := NormalizeDAPToGyCm2(25.0, "uGy.m2")
	if ugy != 25.0 {
		t.Errorf("Expected 25.0 Gy.cm2 for 25 uGy.m2, got %.2f", ugy)
	}

	// Default Gy·cm²
	gy := NormalizeDAPToGyCm2(15.5, "Gy.cm2")
	if gy != 15.5 {
		t.Errorf("Expected 15.5 Gy.cm2, got %.2f", gy)
	}
}

// TestFormatCArmAngles validates clinical angle notation output
func TestFormatCArmAngles(t *testing.T) {
	a1 := FormatCArmAngles(30.0, 15.0)
	if a1 != "LAO 30.0° / CRA 15.0°" {
		t.Errorf("Expected 'LAO 30.0° / CRA 15.0°', got '%s'", a1)
	}

	a2 := FormatCArmAngles(-25.0, -10.0)
	if a2 != "RAO 25.0° / CAU 10.0°" {
		t.Errorf("Expected 'RAO 25.0° / CAU 10.0°', got '%s'", a2)
	}

	a3 := FormatCArmAngles(0.0, 0.0)
	if a3 != "AP 0.0° / 0.0°" {
		t.Errorf("Expected 'AP 0.0° / 0.0°', got '%s'", a3)
	}
}

// TestHardwareStreamsEndpoint tests GET /api/v1/hardware/streams HTTP handler
func TestHardwareStreamsEndpoint(t *testing.T) {
	repo := NewStudyRepository()
	server := NewServer(repo)
	handler := BuildHandler(server)

	req := httptest.NewRequest(http.MethodGet, "/api/v1/hardware/streams", nil)
	rec := httptest.NewRecorder()

	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected status 200, got %d: %s", rec.Code, rec.Body.String())
	}

	var streams []HardwareStreamState
	if err := json.Unmarshal(rec.Body.Bytes(), &streams); err != nil {
		t.Fatalf("Failed to decode response JSON: %v", err)
	}

	if len(streams) != 3 {
		t.Errorf("Expected 3 registered suites, got %d", len(streams))
	}

	foundSuite1 := false
	for _, s := range streams {
		if s.SuiteID == "angio-suite-1" {
			foundSuite1 = true
			if s.Device.ModelName != "Azurion 7 C20" {
				t.Errorf("Expected model 'Azurion 7 C20', got '%s'", s.Device.ModelName)
			}
			if s.Status != "ONLINE" {
				t.Errorf("Expected status ONLINE, got '%s'", s.Status)
			}
		}
	}

	if !foundSuite1 {
		t.Errorf("Suite 'angio-suite-1' not found in stream response")
	}
}

// TestHardwarePingEndpoint tests POST /api/v1/hardware/ping HTTP handler
func TestHardwarePingEndpoint(t *testing.T) {
	repo := NewStudyRepository()
	server := NewServer(repo)
	handler := BuildHandler(server)

	body := strings.NewReader(`{"ip": "192.168.42.10"}`)
	req := httptest.NewRequest(http.MethodPost, "/api/v1/hardware/ping", body)
	rec := httptest.NewRecorder()

	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("Expected status 200, got %d: %s", rec.Code, rec.Body.String())
	}

	var resp struct {
		TargetIP  string  `json:"targetIp"`
		LatencyMs float64 `json:"latencyMs"`
		Reachable bool    `json:"reachable"`
		Status    string  `json:"status"`
	}

	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("Failed to decode ping response JSON: %v", err)
	}

	if !resp.Reachable || resp.Status != "REACHABLE" {
		t.Errorf("Expected reachable status, got %+v", resp)
	}
	if resp.LatencyMs <= 0 {
		t.Errorf("Expected positive latency, got %.2f ms", resp.LatencyMs)
	}
}

// TestCStoreRdsrEndpoint tests POST /api/v1/cstore/rdsr HTTP handler
func TestCStoreRdsrEndpoint(t *testing.T) {
	repo := NewStudyRepository()
	server := NewServer(repo)
	handler := BuildHandler(server)

	rdsrPayload := `{
		"sopClassUid": "1.2.840.10008.5.1.4.1.1.88.67",
		"patientId": "MRN-TEST-100",
		"patientName": "MEENA^RAMESH",
		"accumulatedDose": {
			"cumulativeAirKermaMGy": 50.0,
			"doseAreaProductGyCm2": 3.5,
			"totalFluoroscopyTimeSec": 60.0,
			"totalIrradiationEvents": 2
		}
	}`

	req := httptest.NewRequest(http.MethodPost, "/api/v1/cstore/rdsr?suiteId=angio-suite-1", strings.NewReader(rdsrPayload))
	rec := httptest.NewRecorder()

	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusCreated {
		t.Fatalf("Expected status 201 Created, got %d: %s", rec.Code, rec.Body.String())
	}

	var resp struct {
		Status     string          `json:"status"`
		SuiteID    string          `json:"suiteId"`
		ParsedDose AccumulatedDose `json:"parsedDose"`
	}
	if err := json.Unmarshal(rec.Body.Bytes(), &resp); err != nil {
		t.Fatalf("Failed to parse response: %v", err)
	}

	if resp.Status != "INGESTED" || resp.SuiteID != "angio-suite-1" {
		t.Errorf("Unexpected response: %+v", resp)
	}
	if resp.ParsedDose.CumulativeAirKermaMGy != 50.0 {
		t.Errorf("Expected parsed air kerma 50.0, got %.1f", resp.ParsedDose.CumulativeAirKermaMGy)
	}
}

// TestMalformedRDSR_Handling ensures safety on invalid inputs
func TestMalformedRDSR_Handling(t *testing.T) {
	// Empty buffer
	_, err := ParseRDSR([]byte{})
	if err == nil {
		t.Errorf("Expected error on empty buffer, got nil")
	}

	// Truncated buffer
	_, err2 := ParseRDSR([]byte("DICM_TRUNCATED"))
	if err2 == nil {
		t.Errorf("Expected error on truncated buffer, got nil")
	}
}
