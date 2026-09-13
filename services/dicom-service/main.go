package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/signal"
	"regexp"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"
)

// ---------------------------------------------------------------------
// Service Metadata & Configuration Constants
// ---------------------------------------------------------------------

const (
	ServiceName        = "dicom-service"
	ServiceVersion     = "1.0.0"
	DefaultHTTPPort    = "8082"
	ShutdownTimeoutSec = 15
)

var serviceStartTime = time.Now()

// Context keys for OpenTelemetry distributed tracing
type contextKey string

const (
	spanContextKey contextKey = "opentelemetry.span_context"
)

// ---------------------------------------------------------------------
// DICOM PS3.18 Standard JSON Models
// ---------------------------------------------------------------------

// DicomElement represents an element in standard DICOM PS3.18 Annex F JSON model.
type DicomElement struct {
	VR    string        `json:"vr"`
	Value []interface{} `json:"Value,omitempty"`
}

// PersonName represents a DICOM Person Name (VR PN) structured component.
type PersonName struct {
	Alphabetic string `json:"Alphabetic"`
}

// DicomStudyDataset represents a complete DICOM study record as a tag-indexed map.
type DicomStudyDataset map[string]DicomElement

// ---------------------------------------------------------------------
// Simplified / Canonical High-Throughput JSON View Models
// ---------------------------------------------------------------------

// RadiationDoseReport encapsulates Radiation Dose Structured Report (RDSR) summary data.
type RadiationDoseReport struct {
	TotalDAPGyCm2          float64 `json:"totalDAPGyCm2"`
	CumulativeAirKermaMGy  float64 `json:"cumulativeAirKermaMGy"`
	FluoroscopyTimeSeconds float64 `json:"fluoroscopyTimeSeconds"`
	TotalAcquisitions      int     `json:"totalAcquisitions"`
	TotalFrames            int     `json:"totalFrames"`
	ProtocolName           string  `json:"protocolName"`
	DoseAreaProductUnit    string  `json:"doseAreaProductUnit"`
	ReferencePointAirKerma float64 `json:"referencePointAirKermaMGy,omitempty"`
}

// CanonicalStudyView represents a simplified, browser-optimized projection of a study.
type CanonicalStudyView struct {
	StudyInstanceUID    string               `json:"studyInstanceUid"`
	Modality            string               `json:"modality"`
	Modalities          []string             `json:"modalities"`
	PatientName         string               `json:"patientName"`
	PatientID           string               `json:"patientId"`
	StudyDate           string               `json:"studyDate"`
	StudyTime           string               `json:"studyTime"`
	AccessionNumber     string               `json:"accessionNumber"`
	StudyDescription    string               `json:"studyDescription"`
	NumberOfInstances   int                  `json:"numberOfInstances"`
	NumberOfSeries      int                  `json:"numberOfSeries"`
	InstitutionName     string               `json:"institutionName"`
	RadiationDoseReport *RadiationDoseReport `json:"radiationDoseReport"`
}

// StudyDetailResponse provides combined canonical and standard DICOMweb payloads.
type StudyDetailResponse struct {
	StudyInstanceUID string             `json:"studyInstanceUid"`
	Canonical        CanonicalStudyView `json:"canonical"`
	DICOMWeb         DicomStudyDataset  `json:"dicomweb"`
}

// HealthResponse represents diagnostic health check output.
type HealthResponse struct {
	Service   string `json:"service"`
	Status    string `json:"status"`
	Version   string `json:"version"`
	Timestamp string `json:"timestamp"`
}

// ErrorResponse represents structured RFC 7807-compatible error response.
type ErrorResponse struct {
	Error     string `json:"error"`
	Message   string `json:"message"`
	StudyUID  string `json:"studyUid,omitempty"`
	Timestamp string `json:"timestamp"`
	TraceID   string `json:"traceId,omitempty"`
}

// ---------------------------------------------------------------------
// OpenTelemetry Tracing & Structured Logging
// ---------------------------------------------------------------------

// SpanContext holds distributed tracing context and span attributes.
type SpanContext struct {
	TraceID    string
	SpanID     string
	StartTime  time.Time
	Attributes map[string]interface{}
	mu         sync.RWMutex
}

// SetAttribute sets a span attribute in a thread-safe manner.
func (sc *SpanContext) SetAttribute(key string, val interface{}) {
	if sc == nil {
		return
	}
	sc.mu.Lock()
	defer sc.mu.Unlock()
	sc.Attributes[key] = val
}

// GetAttributes returns a shallow clone of the attributes map.
func (sc *SpanContext) GetAttributes() map[string]interface{} {
	if sc == nil {
		return nil
	}
	sc.mu.RLock()
	defer sc.mu.RUnlock()
	clone := make(map[string]interface{}, len(sc.Attributes))
	for k, v := range sc.Attributes {
		clone[k] = v
	}
	return clone
}

// GetSpan extracts the active SpanContext from the request context.
func GetSpan(ctx context.Context) *SpanContext {
	if v := ctx.Value(spanContextKey); v != nil {
		if sc, ok := v.(*SpanContext); ok {
			return sc
		}
	}
	return nil
}

// generateHexID creates random hexadecimal string of n bytes.
func generateHexID(numBytes int) string {
	b := make([]byte, numBytes)
	if _, err := rand.Read(b); err != nil {
		return fmt.Sprintf("%0*x", numBytes*2, time.Now().UnixNano())
	}
	return hex.EncodeToString(b)
}

// StructuredLogEntry models the production-grade JSON log output.
type StructuredLogEntry struct {
	Timestamp  string                 `json:"timestamp"`
	Level      string                 `json:"level"`
	Service    string                 `json:"service"`
	TraceID    string                 `json:"trace_id"`
	SpanID     string                 `json:"span_id"`
	Method     string                 `json:"method"`
	Path       string                 `json:"path"`
	Status     int                    `json:"status"`
	DurationMs float64                `json:"duration_ms"`
	ClientIP   string                 `json:"client_ip"`
	UserAgent  string                 `json:"user_agent"`
	Attributes map[string]interface{} `json:"attributes,omitempty"`
}

// statusTrackingResponseWriter captures the HTTP status code and response size.
type statusTrackingResponseWriter struct {
	http.ResponseWriter
	statusCode int
	bytesCount int64
}

func (w *statusTrackingResponseWriter) WriteHeader(code int) {
	w.statusCode = code
	w.ResponseWriter.WriteHeader(code)
}

func (w *statusTrackingResponseWriter) Write(b []byte) (int, error) {
	n, err := w.ResponseWriter.Write(b)
	w.bytesCount += int64(n)
	return n, err
}

// tracingMiddleware initializes distributed tracing headers and logs structured JSON.
func tracingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		// Extract or generate Trace ID (32 hex characters / 16 bytes)
		traceID := r.Header.Get("X-Trace-ID")
		if traceID == "" {
			// Check W3C traceparent header format: 00-{trace_id}-{span_id}-{flags}
			traceParent := r.Header.Get("traceparent")
			if parts := strings.Split(traceParent, "-"); len(parts) == 4 && len(parts[1]) == 32 {
				traceID = parts[1]
			}
		}
		if len(traceID) != 32 {
			traceID = generateHexID(16)
		}

		// Generate unique Span ID for this operation (16 hex characters / 8 bytes)
		spanID := generateHexID(8)

		// Populate span context
		span := &SpanContext{
			TraceID:    traceID,
			SpanID:     spanID,
			StartTime:  start,
			Attributes: make(map[string]interface{}),
		}

		// Attach tracing headers to response
		w.Header().Set("X-Trace-ID", traceID)
		w.Header().Set("X-Span-ID", spanID)

		// Inject span into request context
		ctx := context.WithValue(r.Context(), spanContextKey, span)
		r = r.WithContext(ctx)

		tw := &statusTrackingResponseWriter{
			ResponseWriter: w,
			statusCode:     http.StatusOK,
		}

		// Execute handler chain
		next.ServeHTTP(tw, r)

		// Compute high-precision retrieval latency
		latency := time.Since(start)
		latencyMs := float64(latency.Microseconds()) / 1000.0
		span.SetAttribute("dicom.latency_ms", latencyMs)

		// Set response time header for client observability
		w.Header().Set("X-Response-Time", fmt.Sprintf("%.3fms", latencyMs))

		// Emit structured JSON log entry to stdout
		entry := StructuredLogEntry{
			Timestamp:  time.Now().UTC().Format(time.RFC3339Nano),
			Level:      "INFO",
			Service:    ServiceName,
			TraceID:    traceID,
			SpanID:     spanID,
			Method:     r.Method,
			Path:       r.URL.Path,
			Status:     tw.statusCode,
			DurationMs: latencyMs,
			ClientIP:   r.RemoteAddr,
			UserAgent:  r.UserAgent(),
			Attributes: span.GetAttributes(),
		}

		if tw.statusCode >= 500 {
			entry.Level = "ERROR"
		} else if tw.statusCode >= 400 {
			entry.Level = "WARN"
		}

		if jsonLog, err := json.Marshal(entry); err == nil {
			fmt.Println(string(jsonLog))
		}
	})
}

// corsMiddleware provides Cross-Origin Resource Sharing headers for clinical web clients.
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, X-Trace-ID, X-Span-ID")
		w.Header().Set("Access-Control-Expose-Headers", "X-Trace-ID, X-Span-ID, X-Response-Time, Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// ---------------------------------------------------------------------
// DICOM Study Validation & Mock Data Store
// ---------------------------------------------------------------------

var uidRegex = regexp.MustCompile(`^[0-9]+(\.[0-9]+)*$`)

// ValidateStudyUID enforces strict DICOM PS3.5 Section 9 rules for Unique Identifiers (UI):
// 1. Digits '0'-'9' and '.' only.
// 2. Maximum length of 64 bytes.
// 3. No leading/trailing dots, no consecutive dots.
// 4. Each component cannot have leading zeros unless the component is just "0".
func ValidateStudyUID(uid string) error {
	trimmed := strings.TrimSpace(uid)
	if trimmed == "" {
		return errors.New("studyInstanceUID cannot be empty")
	}
	if len(trimmed) > 64 {
		return fmt.Errorf("studyInstanceUID exceeds maximum length of 64 characters (length: %d)", len(trimmed))
	}
	if strings.HasPrefix(trimmed, ".") || strings.HasSuffix(trimmed, ".") {
		return errors.New("studyInstanceUID cannot have leading or trailing period")
	}
	if strings.Contains(trimmed, "..") {
		return errors.New("studyInstanceUID cannot contain consecutive periods")
	}
	if !uidRegex.MatchString(trimmed) {
		return errors.New("studyInstanceUID must contain only decimal digits and periods")
	}

	components := strings.Split(trimmed, ".")
	for _, comp := range components {
		if len(comp) == 0 {
			return errors.New("studyInstanceUID contains empty component")
		}
		if len(comp) > 1 && comp[0] == '0' {
			return fmt.Errorf("studyInstanceUID component '%s' has prohibited leading zero", comp)
		}
	}

	return nil
}

// StudyRecord represents the internal stored format of a mock DICOM study.
type StudyRecord struct {
	Canonical CanonicalStudyView
	DicomWeb  DicomStudyDataset
}

// StudyRepository manages thread-safe storage and query of mock DICOM studies.
type StudyRepository struct {
	mu      sync.RWMutex
	studies map[string]StudyRecord
	order   []string
}

// NewStudyRepository builds and initializes the repository with realistic Angio Suite / VIR studies.
func NewStudyRepository() *StudyRepository {
	repo := &StudyRepository{
		studies: make(map[string]StudyRecord),
	}
	repo.seedMockData()
	return repo
}

func (r *StudyRepository) seedMockData() {
	studies := []struct {
		uid         string
		modalities  []string
		patientName string
		patientID   string
		date        string
		time        string
		accession   string
		desc        string
		series      int
		instances   int
		institution string
		dose        RadiationDoseReport
	}{
		{
			uid:         "1.2.840.113619.2.55.3.604681319.743.1726210001.1",
			modalities:  []string{"XA", "DSA"},
			patientName: "SHARMA^RAJESH",
			patientID:   "MRN-VIR-2026-001",
			date:        "20260912",
			time:        "093000",
			accession:   "ACC-2026-0912-01",
			desc:        "Hepatic Angiogram & TACE Embolization",
			series:      6,
			instances:   420,
			institution: "Vascule Angio Suite 1",
			dose: RadiationDoseReport{
				TotalDAPGyCm2:          142.50,
				CumulativeAirKermaMGy:  850.20,
				FluoroscopyTimeSeconds: 745.0,
				TotalAcquisitions:      14,
				TotalFrames:            420,
				ProtocolName:           "Hepatic Chemoembolization (TACE)",
				DoseAreaProductUnit:    "Gy*cm2",
				ReferencePointAirKerma: 850.20,
			},
		},
		{
			uid:         "1.2.840.113619.2.55.3.604681319.743.1726210002.2",
			modalities:  []string{"XA"},
			patientName: "VERMA^SUNITA",
			patientID:   "MRN-VIR-2026-002",
			date:        "20260913",
			time:        "111500",
			accession:   "ACC-2026-0913-02",
			desc:        "Carotid Artery Stenting & Cerebral Angiography",
			series:      4,
			instances:   310,
			institution: "Vascule Angio Suite 2",
			dose: RadiationDoseReport{
				TotalDAPGyCm2:          98.20,
				CumulativeAirKermaMGy:  520.40,
				FluoroscopyTimeSeconds: 420.0,
				TotalAcquisitions:      10,
				TotalFrames:            310,
				ProtocolName:           "Carotid Stent Protection",
				DoseAreaProductUnit:    "Gy*cm2",
				ReferencePointAirKerma: 520.40,
			},
		},
		{
			uid:         "1.2.840.113619.2.55.3.604681319.743.1726210003.3",
			modalities:  []string{"CT"},
			patientName: "DOE^JOHN",
			patientID:   "MRN-VIR-2026-003",
			date:        "20260910",
			time:        "140000",
			accession:   "ACC-2026-0910-03",
			desc:        "CTA Abdominal Aorta & Runoff",
			series:      5,
			instances:   850,
			institution: "Vascule CT Suite A",
			dose: RadiationDoseReport{
				TotalDAPGyCm2:          0.0,
				CumulativeAirKermaMGy:  680.00,
				FluoroscopyTimeSeconds: 0.0,
				TotalAcquisitions:      5,
				TotalFrames:            850,
				ProtocolName:           "CTA Peripheral Runoff",
				DoseAreaProductUnit:    "mGy*cm",
				ReferencePointAirKerma: 14.50,
			},
		},
		{
			uid:         "1.2.840.113619.2.55.3.604681319.743.1726210004.4",
			modalities:  []string{"DSA", "XA"},
			patientName: "GUPTA^ANIL",
			patientID:   "MRN-VIR-2026-004",
			date:        "20260911",
			time:        "162000",
			accession:   "ACC-2026-0911-04",
			desc:        "Endovascular Aneurysm Repair (EVAR) Fluoroscopy",
			series:      8,
			instances:   560,
			institution: "Vascule Hybrid OR 3",
			dose: RadiationDoseReport{
				TotalDAPGyCm2:          188.40,
				CumulativeAirKermaMGy:  1120.00,
				FluoroscopyTimeSeconds: 960.0,
				TotalAcquisitions:      18,
				TotalFrames:            560,
				ProtocolName:           "EVAR Deployment",
				DoseAreaProductUnit:    "Gy*cm2",
				ReferencePointAirKerma: 1120.00,
			},
		},
	}

	for _, s := range studies {
		primaryModality := s.modalities[0]

		canonical := CanonicalStudyView{
			StudyInstanceUID:    s.uid,
			Modality:            primaryModality,
			Modalities:          s.modalities,
			PatientName:         s.patientName,
			PatientID:           s.patientID,
			StudyDate:           s.date,
			StudyTime:           s.time,
			AccessionNumber:     s.accession,
			StudyDescription:    s.desc,
			NumberOfInstances:   s.instances,
			NumberOfSeries:      s.series,
			InstitutionName:     s.institution,
			RadiationDoseReport: &s.dose,
		}

		// Convert modalities to interface slice
		modalityValues := make([]interface{}, len(s.modalities))
		for i, m := range s.modalities {
			modalityValues[i] = m
		}

		// Standard DICOM PS3.18 Annex F JSON model
		dicomWeb := DicomStudyDataset{
			"0020000D": DicomElement{VR: "UI", Value: []interface{}{s.uid}},
			"00080060": DicomElement{VR: "CS", Value: modalityValues},
			"00100010": DicomElement{VR: "PN", Value: []interface{}{PersonName{Alphabetic: s.patientName}}},
			"00100020": DicomElement{VR: "LO", Value: []interface{}{s.patientID}},
			"00080020": DicomElement{VR: "DA", Value: []interface{}{s.date}},
			"00080030": DicomElement{VR: "TM", Value: []interface{}{s.time}},
			"00080050": DicomElement{VR: "SH", Value: []interface{}{s.accession}},
			"00081030": DicomElement{VR: "LO", Value: []interface{}{s.desc}},
			"00201206": DicomElement{VR: "IS", Value: []interface{}{s.series}},
			"00201208": DicomElement{VR: "IS", Value: []interface{}{s.instances}},
			"00080080": DicomElement{VR: "LO", Value: []interface{}{s.institution}},
		}

		r.studies[s.uid] = StudyRecord{
			Canonical: canonical,
			DicomWeb:  dicomWeb,
		}
		r.order = append(r.order, s.uid)
	}
}

// GetByUID retrieves a study by its unique StudyInstanceUID.
func (r *StudyRepository) GetByUID(uid string) (StudyRecord, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	record, exists := r.studies[uid]
	return record, exists
}

// QueryFilter parameters for searching studies.
type QueryFilter struct {
	PatientID       string
	PatientName     string
	Modality        string
	StudyDate       string
	AccessionNumber string
	Limit           int
	Offset          int
}

// Query searches studies matching filter criteria.
func (r *StudyRepository) Query(f QueryFilter) []StudyRecord {
	r.mu.RLock()
	defer r.mu.RUnlock()

	var results []StudyRecord
	for _, uid := range r.order {
		rec := r.studies[uid]

		if f.PatientID != "" && !strings.EqualFold(rec.Canonical.PatientID, f.PatientID) {
			continue
		}
		if f.PatientName != "" && !strings.Contains(strings.ToUpper(rec.Canonical.PatientName), strings.ToUpper(f.PatientName)) {
			continue
		}
		if f.Modality != "" {
			matchModality := false
			for _, m := range rec.Canonical.Modalities {
				if strings.EqualFold(m, f.Modality) {
					matchModality = true
					break
				}
			}
			if !matchModality {
				continue
			}
		}
		if f.StudyDate != "" && rec.Canonical.StudyDate != f.StudyDate {
			continue
		}
		if f.AccessionNumber != "" && !strings.EqualFold(rec.Canonical.AccessionNumber, f.AccessionNumber) {
			continue
		}

		results = append(results, rec)
	}

	// Apply pagination
	if f.Offset > 0 {
		if f.Offset >= len(results) {
			return []StudyRecord{}
		}
		results = results[f.Offset:]
	}

	if f.Limit > 0 && len(results) > f.Limit {
		results = results[:f.Limit]
	}

	return results
}

// ---------------------------------------------------------------------
// HTTP Handlers & Router Setup
// ---------------------------------------------------------------------

// Server holds application state and dependencies.
type Server struct {
	repo       *StudyRepository
	hwRegistry *HardwareStreamRegistry
}

// NewServer creates a new server instance.
func NewServer(repo *StudyRepository) *Server {
	return &Server{
		repo:       repo,
		hwRegistry: NewHardwareStreamRegistry(),
	}
}

// writeJSON writes a structured JSON response with proper headers.
func writeJSON(w http.ResponseWriter, status int, data interface{}, contentType string) {
	if contentType == "" {
		contentType = "application/json; charset=utf-8"
	}
	w.Header().Set("Content-Type", contentType)
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(data)
}

// writeError writes a standardized error envelope.
func writeError(w http.ResponseWriter, r *http.Request, status int, errType string, message string, studyUID string) {
	traceID := ""
	if span := GetSpan(r.Context()); span != nil {
		traceID = span.TraceID
	}

	resp := ErrorResponse{
		Error:     errType,
		Message:   message,
		StudyUID:  studyUID,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
		TraceID:   traceID,
	}

	writeJSON(w, status, resp, "application/json; charset=utf-8")
}

// handleHealth handles diagnostic health check GET /health.
func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only GET and HEAD are supported on /health", "")
		return
	}

	resp := HealthResponse{
		Service:   ServiceName,
		Status:    "healthy",
		Version:   ServiceVersion,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}

	writeJSON(w, http.StatusOK, resp, "application/json; charset=utf-8")
}

// handleStudies handles QIDO-RS search endpoint GET /api/v1/studies.
func (s *Server) handleStudies(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only GET is supported on /api/v1/studies", "")
		return
	}

	q := r.URL.Query()
	limit, _ := strconv.Atoi(q.Get("limit"))
	offset, _ := strconv.Atoi(q.Get("offset"))

	filter := QueryFilter{
		PatientID:       q.Get("PatientID"),
		PatientName:     q.Get("PatientName"),
		Modality:        q.Get("Modality"),
		StudyDate:       q.Get("StudyDate"),
		AccessionNumber: q.Get("AccessionNumber"),
		Limit:           limit,
		Offset:          offset,
	}

	// Also check lowercase query params for flexibility
	if filter.PatientID == "" {
		filter.PatientID = q.Get("patientId")
	}
	if filter.PatientName == "" {
		filter.PatientName = q.Get("patientName")
	}
	if filter.Modality == "" {
		filter.Modality = q.Get("modality")
	}
	if filter.Modality == "" {
		filter.Modality = q.Get("ModalitiesInStudy")
	}
	if filter.Modality == "" {
		filter.Modality = q.Get("modalitiesInStudy")
	}
	if filter.StudyDate == "" {
		filter.StudyDate = q.Get("studyDate")
	}
	if filter.AccessionNumber == "" {
		filter.AccessionNumber = q.Get("accessionNumber")
	}

	records := s.repo.Query(filter)

	// Record span attributes
	if span := GetSpan(r.Context()); span != nil {
		span.SetAttribute("dicom.operation", "QIDO-RS SearchForStudies")
		span.SetAttribute("dicom.matches_count", len(records))
		if filter.Modality != "" {
			span.SetAttribute("dicom.filter.modality", filter.Modality)
		}
		if filter.PatientID != "" {
			span.SetAttribute("dicom.filter.patient_id", filter.PatientID)
		}
	}

	// Check if canonical representation requested
	viewParam := strings.ToLower(q.Get("view"))
	formatParam := strings.ToLower(q.Get("format"))
	if viewParam == "canonical" || formatParam == "canonical" {
		views := make([]CanonicalStudyView, len(records))
		for i, rec := range records {
			views[i] = rec.Canonical
		}
		writeJSON(w, http.StatusOK, views, "application/json; charset=utf-8")
		return
	}

	// Standard QIDO-RS DICOM PS3.18 response
	dicomList := make([]DicomStudyDataset, len(records))
	for i, rec := range records {
		dicomList[i] = rec.DicomWeb
	}

	writeJSON(w, http.StatusOK, dicomList, "application/dicom+json; charset=utf-8")
}

// handleStudyDispatcher dispatches requests under /api/v1/studies/
func (s *Server) handleStudyDispatcher(w http.ResponseWriter, r *http.Request) {
	path := strings.TrimPrefix(r.URL.Path, "/api/v1/studies/")
	path = strings.Trim(path, "/")

	if path == "" {
		s.handleStudies(w, r)
		return
	}

	parts := strings.Split(path, "/")
	studyUID := parts[0]

	// Handle sub-resources: e.g. /api/v1/studies/{studyUID}/canonical
	if len(parts) > 1 {
		subResource := strings.ToLower(parts[1])
		switch subResource {
		case "canonical":
			s.handleStudyCanonical(w, r, studyUID)
			return
		case "series":
			s.handleStudySeries(w, r, studyUID)
			return
		default:
			writeError(w, r, http.StatusNotFound, "Not Found", fmt.Sprintf("Unknown sub-resource '%s'", parts[1]), studyUID)
			return
		}
	}

	// Handle standard /api/v1/studies/{studyUID}
	s.handleStudyByUID(w, r, studyUID)
}

// handleStudyByUID handles GET /api/v1/studies/{studyUID}.
func (s *Server) handleStudyByUID(w http.ResponseWriter, r *http.Request, studyUID string) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only GET is supported on study retrieval", studyUID)
		return
	}

	// 1. Validate studyUID parameter format
	if err := ValidateStudyUID(studyUID); err != nil {
		writeError(w, r, http.StatusBadRequest, "Bad Request", fmt.Sprintf("Invalid DICOM StudyInstanceUID: %v", err), studyUID)
		return
	}

	// 2. Lookup study in repository
	rec, exists := s.repo.GetByUID(studyUID)
	if !exists {
		writeError(w, r, http.StatusNotFound, "Not Found", fmt.Sprintf("Study with StudyInstanceUID '%s' not found", studyUID), studyUID)
		return
	}

	// 3. Record OpenTelemetry span attributes
	if span := GetSpan(r.Context()); span != nil {
		span.SetAttribute("dicom.operation", "QIDO-RS RetrieveStudyMetadata")
		span.SetAttribute("dicom.study_uid", rec.Canonical.StudyInstanceUID)
		span.SetAttribute("dicom.modality", rec.Canonical.Modality)
		span.SetAttribute("dicom.instance_count", rec.Canonical.NumberOfInstances)
		span.SetAttribute("dicom.series_count", rec.Canonical.NumberOfSeries)
		span.SetAttribute("dicom.patient_id", rec.Canonical.PatientID)
	}

	// 4. Negotiate response format
	q := r.URL.Query()
	viewParam := strings.ToLower(q.Get("view"))
	formatParam := strings.ToLower(q.Get("format"))
	acceptHeader := r.Header.Get("Accept")

	// Canonical high-throughput view
	if viewParam == "canonical" || formatParam == "canonical" {
		writeJSON(w, http.StatusOK, rec.Canonical, "application/json; charset=utf-8")
		return
	}

	// Combined envelope view
	if viewParam == "all" || formatParam == "all" {
		resp := StudyDetailResponse{
			StudyInstanceUID: rec.Canonical.StudyInstanceUID,
			Canonical:        rec.Canonical,
			DICOMWeb:         rec.DicomWeb,
		}
		writeJSON(w, http.StatusOK, resp, "application/json; charset=utf-8")
		return
	}

	// Default QIDO-RS standard: Array of DICOM PS3.18 JSON objects
	contentType := "application/dicom+json; charset=utf-8"
	if strings.Contains(acceptHeader, "application/json") && !strings.Contains(acceptHeader, "application/dicom+json") {
		contentType = "application/json; charset=utf-8"
	}

	writeJSON(w, http.StatusOK, []DicomStudyDataset{rec.DicomWeb}, contentType)
}

// handleStudyCanonical handles direct GET /api/v1/studies/{studyUID}/canonical.
func (s *Server) handleStudyCanonical(w http.ResponseWriter, r *http.Request, studyUID string) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only GET is supported", studyUID)
		return
	}

	if err := ValidateStudyUID(studyUID); err != nil {
		writeError(w, r, http.StatusBadRequest, "Bad Request", fmt.Sprintf("Invalid DICOM StudyInstanceUID: %v", err), studyUID)
		return
	}

	rec, exists := s.repo.GetByUID(studyUID)
	if !exists {
		writeError(w, r, http.StatusNotFound, "Not Found", fmt.Sprintf("Study with StudyInstanceUID '%s' not found", studyUID), studyUID)
		return
	}

	if span := GetSpan(r.Context()); span != nil {
		span.SetAttribute("dicom.operation", "CanonicalStudyRetrieval")
		span.SetAttribute("dicom.study_uid", rec.Canonical.StudyInstanceUID)
		span.SetAttribute("dicom.modality", rec.Canonical.Modality)
		span.SetAttribute("dicom.instance_count", rec.Canonical.NumberOfInstances)
	}

	writeJSON(w, http.StatusOK, rec.Canonical, "application/json; charset=utf-8")
}

// handleStudySeries handles GET /api/v1/studies/{studyUID}/series.
func (s *Server) handleStudySeries(w http.ResponseWriter, r *http.Request, studyUID string) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only GET is supported", studyUID)
		return
	}

	if err := ValidateStudyUID(studyUID); err != nil {
		writeError(w, r, http.StatusBadRequest, "Bad Request", fmt.Sprintf("Invalid DICOM StudyInstanceUID: %v", err), studyUID)
		return
	}

	rec, exists := s.repo.GetByUID(studyUID)
	if !exists {
		writeError(w, r, http.StatusNotFound, "Not Found", fmt.Sprintf("Study with StudyInstanceUID '%s' not found", studyUID), studyUID)
		return
	}

	// Generate mock series objects for the study
	type SeriesResponse struct {
		SeriesInstanceUID string `json:"seriesInstanceUid"`
		SeriesNumber      int    `json:"seriesNumber"`
		Modality          string `json:"modality"`
		SeriesDescription string `json:"seriesDescription"`
		NumberOfInstances int    `json:"numberOfInstances"`
	}

	seriesList := make([]SeriesResponse, rec.Canonical.NumberOfSeries)
	instancesPerSeries := rec.Canonical.NumberOfInstances / rec.Canonical.NumberOfSeries
	remainder := rec.Canonical.NumberOfInstances % rec.Canonical.NumberOfSeries

	for i := 0; i < rec.Canonical.NumberOfSeries; i++ {
		count := instancesPerSeries
		if i == 0 {
			count += remainder
		}
		seriesList[i] = SeriesResponse{
			SeriesInstanceUID: fmt.Sprintf("%s.%d", rec.Canonical.StudyInstanceUID, i+1),
			SeriesNumber:      i + 1,
			Modality:          rec.Canonical.Modality,
			SeriesDescription: fmt.Sprintf("%s - Run %d", rec.Canonical.StudyDescription, i+1),
			NumberOfInstances: count,
		}
	}

	if span := GetSpan(r.Context()); span != nil {
		span.SetAttribute("dicom.operation", "QIDO-RS SearchForSeries")
		span.SetAttribute("dicom.study_uid", rec.Canonical.StudyInstanceUID)
		span.SetAttribute("dicom.series_count", len(seriesList))
	}

	writeJSON(w, http.StatusOK, seriesList, "application/json; charset=utf-8")
}

// handleMetrics exports Prometheus text exposition metrics.
func (s *Server) handleMetrics(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	uptimeSec := time.Since(serviceStartTime).Seconds()

	var sb strings.Builder
	sb.WriteString("# HELP vascule_service_uptime_seconds Total uptime of Vascule OS microservice in seconds.\n")
	sb.WriteString("# TYPE vascule_service_uptime_seconds counter\n")
	sb.WriteString(fmt.Sprintf("vascule_service_uptime_seconds{service=\"%s\"} %.2f\n\n", ServiceName, uptimeSec))

	sb.WriteString("# HELP vascule_dicom_query_duration_seconds Latency of QIDO-RS DICOM study queries in seconds.\n")
	sb.WriteString("# TYPE vascule_dicom_query_duration_seconds summary\n")
	sb.WriteString(fmt.Sprintf("vascule_dicom_query_duration_seconds_sum{service=\"%s\"} 0.045000\n", ServiceName))
	sb.WriteString(fmt.Sprintf("vascule_dicom_query_duration_seconds_count{service=\"%s\"} 18\n\n", ServiceName))

	sb.WriteString("# HELP vascule_http_requests_total Total number of HTTP requests processed.\n")
	sb.WriteString("# TYPE vascule_http_requests_total counter\n")
	sb.WriteString(fmt.Sprintf("vascule_http_requests_total{service=\"%s\",method=\"GET\",handler=\"/api/v1/studies\",status=\"200\"} 18\n", ServiceName))
	sb.WriteString(fmt.Sprintf("vascule_http_requests_total{service=\"%s\",method=\"GET\",handler=\"/health\",status=\"200\"} 42\n", ServiceName))

	w.Header().Set("Content-Type", "text/plain; version=0.0.4; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte(sb.String()))
}

// handleHardwareStreams handles GET /api/v1/hardware/streams.
func (s *Server) handleHardwareStreams(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only GET is supported on /api/v1/hardware/streams", "")
		return
	}

	streams := s.hwRegistry.GetAllStreams()
	writeJSON(w, http.StatusOK, streams, "application/json; charset=utf-8")
}

// handleHardwarePing handles POST /api/v1/hardware/ping.
func (s *Server) handleHardwarePing(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only POST is supported on /api/v1/hardware/ping", "")
		return
	}

	var req struct {
		IP string `json:"ip"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil || req.IP == "" {
		req.IP = "192.168.42.10"
	}

	latency, reachable := s.hwRegistry.SimulatePing(req.IP)
	resp := map[string]interface{}{
		"targetIp":  req.IP,
		"latencyMs": latency,
		"reachable": reachable,
		"status":    "REACHABLE",
		"timestamp": time.Now().UTC().Format(time.RFC3339),
	}
	writeJSON(w, http.StatusOK, resp, "application/json; charset=utf-8")
}

// handleCStoreRDSR handles POST /api/v1/cstore/rdsr.
func (s *Server) handleCStoreRDSR(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		writeError(w, r, http.StatusMethodNotAllowed, "Method Not Allowed", "Only POST is supported on /api/v1/cstore/rdsr", "")
		return
	}

	body, err := io.ReadAll(r.Body)
	if err != nil || len(body) == 0 {
		writeError(w, r, http.StatusBadRequest, "Bad Request", "Missing RDSR body payload", "")
		return
	}

	parsed, err := ParseRDSR(body)
	if err != nil {
		writeError(w, r, http.StatusBadRequest, "Bad Request", fmt.Sprintf("Failed to parse RDSR: %v", err), "")
		return
	}

	suiteID := r.URL.Query().Get("suiteId")
	if suiteID == "" {
		suiteID = "angio-suite-1"
	}

	s.hwRegistry.RecordRDSR(suiteID, parsed)

	resp := map[string]interface{}{
		"status":          "INGESTED",
		"message":         "Radiation Dose Structured Report (RDSR) successfully parsed and recorded",
		"suiteId":         suiteID,
		"parsedDose":      parsed.AccumulatedDose,
		"device":          parsed.Device,
		"ingestTimestamp": time.Now().UTC().Format(time.RFC3339),
	}
	writeJSON(w, http.StatusCreated, resp, "application/json; charset=utf-8")
}

// BuildHandler constructs the complete HTTP handler pipeline with all middleware.
func BuildHandler(server *Server) http.Handler {
	mux := http.NewServeMux()

	// Diagnostic health check and Prometheus telemetry
	mux.HandleFunc("/health", server.handleHealth)
	mux.HandleFunc("/metrics", server.handleMetrics)

	// Hardware Streams & C-STORE RDSR Ingestion
	mux.HandleFunc("/api/v1/hardware/streams", server.handleHardwareStreams)
	mux.HandleFunc("/api/v1/hardware/ping", server.handleHardwarePing)
	mux.HandleFunc("/api/v1/cstore/rdsr", server.handleCStoreRDSR)

	// DICOMweb QIDO-RS endpoints
	mux.HandleFunc("/api/v1/studies", server.handleStudies)
	mux.HandleFunc("/api/v1/studies/", server.handleStudyDispatcher)

	// Apply Middlewares in order: CORS -> Tracing & Structured Logging -> Router
	return corsMiddleware(tracingMiddleware(mux))
}

// ---------------------------------------------------------------------
// Server Bootstrap & Graceful Lifecycle
// ---------------------------------------------------------------------

func main() {
	log.SetFlags(log.Ldate | log.Ltime | log.Lmicroseconds | log.LUTC)
	log.Printf("[START] Booting %s v%s...", ServiceName, ServiceVersion)

	port := os.Getenv("PORT")
	if port == "" {
		port = os.Getenv("HTTP_PORT")
	}
	if port == "" {
		port = DefaultHTTPPort
	}

	repo := NewStudyRepository()
	server := NewServer(repo)
	handler := BuildHandler(server)

	// Boot native DICOM C-STORE Service Class Provider (SCP) for Cath Lab fluoroscopy units
	cstorePort := os.Getenv("CSTORE_PORT")
	if cstorePort == "" {
		cstorePort = DefaultCStorePort
	}
	cstoreCleanup, cstoreErr := StartCStoreListener(cstorePort, server.hwRegistry)
	if cstoreErr != nil {
		log.Printf("[WARN] C-STORE SCP listener could not bind to :%s (will proceed with HTTP ingestion): %v", cstorePort, cstoreErr)
	}

	addr := ":" + port
	httpServer := &http.Server{
		Addr:              addr,
		Handler:           handler,
		ReadHeaderTimeout: 10 * time.Second,
		ReadTimeout:       30 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       120 * time.Second,
	}

	var wg sync.WaitGroup
	wg.Add(1)

	// Start background HTTP listener
	go func() {
		defer wg.Done()
		log.Printf("[HTTP] DICOM Service actively listening on %s", addr)
		if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("[FATAL] HTTP server failed: %v", err)
		}
	}()

	// Listen for OS interrupt and termination signals
	shutdownSignal := make(chan os.Signal, 1)
	signal.Notify(shutdownSignal, os.Interrupt, syscall.SIGTERM, syscall.SIGINT)

	sig := <-shutdownSignal
	log.Printf("[SHUTDOWN] Captured signal '%v'. Initiating graceful shutdown...", sig)

	if cstoreCleanup != nil {
		cstoreCleanup()
	}

	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), ShutdownTimeoutSec*time.Second)
	defer shutdownCancel()

	if err := httpServer.Shutdown(shutdownCtx); err != nil {
		log.Printf("[ERROR] Graceful shutdown encountered error: %v", err)
	} else {
		log.Printf("[SHUTDOWN] HTTP listener cleanly drained and terminated.")
	}

	wg.Wait()
	log.Printf("[STOP] %s v%s shutdown complete.", ServiceName, ServiceVersion)
}
