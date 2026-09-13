package main

import (
	"bufio"
	"bytes"
	"context"
	"crypto/rand"
	"crypto/sha1"
	"encoding/base64"
	"encoding/binary"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"math"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"sync"
	"syscall"
	"time"
)

// Service Metadata Constants
const (
	ServiceName    = "fhir-service"
	ServiceVersion = "1.0.0"
	DefaultHTTPPort = "8081"
	DefaultMLLPPort = "2575"

	// MLLP Protocol Byte Delimiters
	MLLPStartByte = byte(0x0b) // VT (Vertical Tab, ASCII 11)
	MLLPEndByte1  = byte(0x1c) // FS (File Separator, ASCII 28)
	MLLPEndByte2  = byte(0x0d) // CR (Carriage Return, ASCII 13)
)

var fhirServiceStartTime = time.Now()

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

var globalFhirMetrics = &MetricsRegistry{
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

func (m *MetricsRegistry) SetActiveWebsockets(count int64) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.activeWebsockets = count
}

func (m *MetricsRegistry) IncActiveWebsockets() {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.activeWebsockets++
}

func (m *MetricsRegistry) DecActiveWebsockets() {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.activeWebsockets > 0 {
		m.activeWebsockets--
	}
}

// ---------------------------------------------------------------------
// Canonical Data Structures
// ---------------------------------------------------------------------

// HealthResponse represents diagnostic health check output.
type HealthResponse struct {
	Service   string `json:"service"`
	Status    string `json:"status"`
	Version   string `json:"version"`
	Timestamp string `json:"timestamp"`
}

// SystemEndpoint identifies sending/receiving applications and facilities.
type SystemEndpoint struct {
	Application string `json:"application"`
	Facility    string `json:"facility"`
}

// PatientID represents an identifier from PID-3 list.
type PatientID struct {
	ID                 string `json:"id"`
	AssigningAuthority string `json:"assigningAuthority,omitempty"`
	Type               string `json:"type,omitempty"`
}

// CanonicalName represents parsed patient name components.
type CanonicalName struct {
	FamilyName string `json:"familyName"`
	GivenName  string `json:"givenName"`
	MiddleName string `json:"middleName,omitempty"`
	Prefix     string `json:"prefix,omitempty"`
	Suffix     string `json:"suffix,omitempty"`
	FullName   string `json:"fullName"`
}

// CanonicalAddress represents structured patient address.
type CanonicalAddress struct {
	Street           string `json:"street"`
	OtherDesignation string `json:"otherDesignation,omitempty"`
	City             string `json:"city"`
	State            string `json:"state"`
	Zip              string `json:"zip"`
	Country          string `json:"country,omitempty"`
	FullAddress      string `json:"fullAddress"`
}

// PatientLocation represents physical hospital location components from PV1-3.
type PatientLocation struct {
	PointOfCare string `json:"pointOfCare,omitempty"`
	Room        string `json:"room,omitempty"`
	Bed         string `json:"bed,omitempty"`
	Facility    string `json:"facility,omitempty"`
}

// CanonicalVisit represents encounter and visit information from PV1.
type CanonicalVisit struct {
	SetID            string          `json:"setId,omitempty"`
	PatientClass     string          `json:"patientClass,omitempty"`
	AssignedLocation PatientLocation `json:"assignedLocation,omitempty"`
	VisitNumber      string          `json:"visitNumber,omitempty"`
	AdmitDateTime    *time.Time      `json:"admitDateTime,omitempty"`
	AttendingDoctor  string          `json:"attendingDoctor,omitempty"`
}

// CanonicalPatient encapsulates validated patient identity.
type CanonicalPatient struct {
	MRN             string           `json:"mrn"`
	Identifiers     []PatientID      `json:"identifiers"`
	Name            CanonicalName    `json:"name"`
	DateOfBirth     string           `json:"dateOfBirth"`
	DateOfBirthTime *time.Time       `json:"dateOfBirthTime,omitempty"`
	Gender          string           `json:"gender"`
	GenderCode      string           `json:"genderCode"`
	Address         CanonicalAddress `json:"address"`
}

// CanonicalPatientAdmitEvent represents the canonical JSON structure for ADT^A01.
type CanonicalPatientAdmitEvent struct {
	EventID           string           `json:"eventId"`
	EventType         string           `json:"eventType"`
	TriggerEvent      string           `json:"triggerEvent"`
	Timestamp         time.Time        `json:"timestamp"`
	SourceSystem      SystemEndpoint   `json:"sourceSystem"`
	DestinationSystem SystemEndpoint   `json:"destinationSystem"`
	MessageControlID  string           `json:"messageControlId"`
	ProcessingID      string           `json:"processingId"`
	HL7Version        string           `json:"hl7Version"`
	Patient           CanonicalPatient `json:"patient"`
	Visit             *CanonicalVisit  `json:"visit,omitempty"`
	ParsedSegments    []string         `json:"parsedSegments"`
}

// InboundHL7Payload allows flexible JSON body wrapper intake.
type InboundHL7Payload struct {
	RawHL7  string `json:"rawHl7"`
	Message string `json:"message"`
	HL7     string `json:"hl7"`
}

// HL7IntakeResponse is returned by HTTP endpoint /api/v1/hl7/adt-a01.
type HL7IntakeResponse struct {
	Status         string                      `json:"status"`
	ACKMessage     string                      `json:"ackMessage"`
	CanonicalEvent *CanonicalPatientAdmitEvent `json:"canonicalEvent,omitempty"`
	Error          string                      `json:"error,omitempty"`
}

// ---------------------------------------------------------------------
// HL7 v2.x Internal Parsing Structures
// ---------------------------------------------------------------------

// MSHInfo holds extracted and validated message header fields.
type MSHInfo struct {
	FieldSeparator     string
	EncodingCharacters string
	ComponentSeparator string
	RepetitionSeparator string
	EscapeCharacter    string
	SubComponentSeparator string
	SendingApp         string
	SendingFacility    string
	ReceivingApp       string
	ReceivingFacility  string
	MessageDateTime    time.Time
	MessageDateTimeRaw string
	MessageCode        string
	TriggerEvent       string
	MessageStructure   string
	MessageControlID   string
	ProcessingID       string
	VersionID          string
}

// HL7Segment models an individual segment with 1-based field addressing.
type HL7Segment struct {
	Name   string
	Fields []string
}

// GetField retrieves field value by 1-based HL7 index.
// Handles special MSH field offset where MSH-1 is the delimiter itself.
func (s HL7Segment) GetField(index int) string {
	if s.Name == "MSH" {
		if index == 1 {
			return "|"
		}
		idx := index - 1
		if idx >= 0 && idx < len(s.Fields) {
			return s.Fields[idx]
		}
		return ""
	}
	if index >= 0 && index < len(s.Fields) {
		return s.Fields[index]
	}
	return ""
}

// ---------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------

// generateID creates a unique identifier with a given prefix.
func generateID(prefix string) string {
	b := make([]byte, 8)
	if _, err := rand.Read(b); err != nil {
		return fmt.Sprintf("%s-%d", prefix, time.Now().UnixNano())
	}
	return fmt.Sprintf("%s-%s", prefix, hex.EncodeToString(b))
}

// parseHL7Timestamp attempts to parse HL7 v2 formatted date/time strings.
func parseHL7Timestamp(ts string) (time.Time, error) {
	clean := strings.TrimSpace(ts)
	if clean == "" {
		return time.Time{}, errors.New("empty timestamp")
	}

	formats := []string{
		"20060102150405-0700",
		"20060102150405",
		"200601021504",
		"20060102",
	}

	for _, format := range formats {
		if t, err := time.Parse(format, clean); err == nil {
			return t, nil
		}
	}

	// Try removing sub-seconds or trailing punctuation if present
	if len(clean) >= 14 {
		base := clean[:14]
		if t, err := time.Parse("20060102150405", base); err == nil {
			return t, nil
		}
	} else if len(clean) >= 8 {
		base := clean[:8]
		if t, err := time.Parse("20060102", base); err == nil {
			return t, nil
		}
	}

	return time.Time{}, fmt.Errorf("unable to parse HL7 timestamp '%s'", clean)
}

// splitSegments splits an HL7 message across \r, \n, or \r\n line breaks.
func splitSegments(raw string) []string {
	normalized := strings.ReplaceAll(raw, "\r\n", "\r")
	normalized = strings.ReplaceAll(normalized, "\n", "\r")
	lines := strings.Split(normalized, "\r")

	var segments []string
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed != "" {
			segments = append(segments, trimmed)
		}
	}
	return segments
}

// ---------------------------------------------------------------------
// HL7 v2.x ADT^A01 Parser
// ---------------------------------------------------------------------

// ParseADTA01Message validates and parses an incoming HL7 ADT^A01 message.
func ParseADTA01Message(rawMsg string) (*CanonicalPatientAdmitEvent, *MSHInfo, error) {
	segments := splitSegments(rawMsg)
	if len(segments) == 0 {
		return nil, nil, errors.New("empty HL7 message received")
	}

	// 1. Locate and parse MSH segment
	var mshLine string
	var pidLine string
	var pv1Line string
	var parsedNames []string

	for _, seg := range segments {
		if len(seg) < 3 {
			continue
		}
		tag := seg[:3]
		parsedNames = append(parsedNames, tag)
		switch tag {
		case "MSH":
			if mshLine == "" {
				mshLine = seg
			}
		case "PID":
			if pidLine == "" {
				pidLine = seg
			}
		case "PV1":
			if pv1Line == "" {
				pv1Line = seg
			}
		}
	}

	if mshLine == "" {
		return nil, nil, errors.New("invalid HL7 message: missing MSH (Message Header) segment")
	}

	if len(mshLine) < 4 {
		return nil, nil, errors.New("malformed MSH segment: insufficient length")
	}

	fieldSep := string(mshLine[3])
	if fieldSep != "|" {
		return nil, nil, fmt.Errorf("unexpected field separator '%s', expected '|'", fieldSep)
	}

	mshParts := strings.Split(mshLine, fieldSep)
	mshSeg := HL7Segment{Name: "MSH", Fields: mshParts}

	encodingChars := mshSeg.GetField(2)
	if len(encodingChars) < 1 {
		return nil, nil, errors.New("malformed MSH segment: missing encoding characters (MSH.2)")
	}

	compSep := string(encodingChars[0])
	repSep := "~"
	if len(encodingChars) > 1 {
		repSep = string(encodingChars[1])
	}
	escChar := "\\"
	if len(encodingChars) > 2 {
		escChar = string(encodingChars[2])
	}
	subCompSep := "&"
	if len(encodingChars) > 3 {
		subCompSep = string(encodingChars[3])
	}

	// Extract MSH fields
	sendingApp := mshSeg.GetField(3)
	sendingFacility := mshSeg.GetField(4)
	receivingApp := mshSeg.GetField(5)
	receivingFacility := mshSeg.GetField(6)
	msgDateTimeRaw := mshSeg.GetField(7)
	msgTypeRaw := mshSeg.GetField(9)
	controlID := mshSeg.GetField(10)
	processingID := mshSeg.GetField(11)
	versionID := mshSeg.GetField(12)

	// Validate MSH.9 Message Type (ADT^A01 / ADT^A01^ADT_A01)
	msgTypeParts := strings.Split(msgTypeRaw, compSep)
	msgCode := ""
	triggerEvent := ""
	msgStructure := ""

	if len(msgTypeParts) > 0 {
		msgCode = strings.TrimSpace(msgTypeParts[0])
	}
	if len(msgTypeParts) > 1 {
		triggerEvent = strings.TrimSpace(msgTypeParts[1])
	}
	if len(msgTypeParts) > 2 {
		msgStructure = strings.TrimSpace(msgTypeParts[2])
	}

	if !strings.EqualFold(msgCode, "ADT") {
		return nil, nil, fmt.Errorf("invalid MSH.9 message code '%s', expected 'ADT'", msgCode)
	}
	if !strings.EqualFold(triggerEvent, "A01") {
		return nil, nil, fmt.Errorf("invalid MSH.9 trigger event '%s', expected 'A01'", triggerEvent)
	}
	if controlID == "" {
		return nil, nil, errors.New("missing required field: MSH.10 Message Control ID")
	}
	if processingID == "" {
		processingID = "P"
	}
	if versionID == "" {
		versionID = "2.5"
	}

	parsedMsgTime := time.Now().UTC()
	if msgDateTimeRaw != "" {
		if pt, err := parseHL7Timestamp(msgDateTimeRaw); err == nil {
			parsedMsgTime = pt
		}
	}

	mshInfo := &MSHInfo{
		FieldSeparator:        fieldSep,
		EncodingCharacters:    encodingChars,
		ComponentSeparator:    compSep,
		RepetitionSeparator:   repSep,
		EscapeCharacter:       escChar,
		SubComponentSeparator: subCompSep,
		SendingApp:            sendingApp,
		SendingFacility:       sendingFacility,
		ReceivingApp:          receivingApp,
		ReceivingFacility:     receivingFacility,
		MessageDateTime:       parsedMsgTime,
		MessageDateTimeRaw:    msgDateTimeRaw,
		MessageCode:           msgCode,
		TriggerEvent:          triggerEvent,
		MessageStructure:      msgStructure,
		MessageControlID:      controlID,
		ProcessingID:          processingID,
		VersionID:             versionID,
	}

	// 2. Locate and parse PID segment
	if pidLine == "" {
		return nil, mshInfo, errors.New("missing required PID (Patient Identification) segment")
	}

	pidParts := strings.Split(pidLine, fieldSep)
	pidSeg := HL7Segment{Name: "PID", Fields: pidParts}

	// PID.3: Patient Identifier List / MRN
	rawIDList := pidSeg.GetField(3)
	if strings.TrimSpace(rawIDList) == "" {
		return nil, mshInfo, errors.New("missing required field: PID.3 Patient Identifier List / MRN")
	}

	var identifiers []PatientID
	primaryMRN := ""

	idRepetitions := strings.Split(rawIDList, repSep)
	for _, idEntry := range idRepetitions {
		idComponents := strings.Split(idEntry, compSep)
		idVal := ""
		idAuth := ""
		idType := ""
		if len(idComponents) > 0 {
			idVal = strings.TrimSpace(idComponents[0])
		}
		if len(idComponents) > 3 {
			idAuth = strings.TrimSpace(idComponents[3])
		}
		if len(idComponents) > 4 {
			idType = strings.TrimSpace(idComponents[4])
		}

		if idVal != "" {
			identifiers = append(identifiers, PatientID{
				ID:                 idVal,
				AssigningAuthority: idAuth,
				Type:               idType,
			})
			if primaryMRN == "" || strings.EqualFold(idType, "MR") {
				primaryMRN = idVal
			}
		}
	}

	if primaryMRN == "" && len(identifiers) > 0 {
		primaryMRN = identifiers[0].ID
	}

	// PID.5: Patient Name (Family ^ Given ^ Middle ^ Suffix ^ Prefix)
	rawName := pidSeg.GetField(5)
	nameComponents := strings.Split(rawName, compSep)
	familyName := ""
	givenName := ""
	middleName := ""
	suffix := ""
	prefix := ""

	if len(nameComponents) > 0 {
		familyName = strings.TrimSpace(nameComponents[0])
	}
	if len(nameComponents) > 1 {
		givenName = strings.TrimSpace(nameComponents[1])
	}
	if len(nameComponents) > 2 {
		middleName = strings.TrimSpace(nameComponents[2])
	}
	if len(nameComponents) > 3 {
		suffix = strings.TrimSpace(nameComponents[3])
	}
	if len(nameComponents) > 4 {
		prefix = strings.TrimSpace(nameComponents[4])
	}

	if familyName == "" && givenName == "" {
		return nil, mshInfo, errors.New("missing required field: PID.5 Patient Name (must contain family or given name)")
	}

	fullNameParts := []string{}
	if prefix != "" {
		fullNameParts = append(fullNameParts, prefix)
	}
	if givenName != "" {
		fullNameParts = append(fullNameParts, givenName)
	}
	if middleName != "" {
		fullNameParts = append(fullNameParts, middleName)
	}
	if familyName != "" {
		fullNameParts = append(fullNameParts, familyName)
	}
	if suffix != "" {
		fullNameParts = append(fullNameParts, suffix)
	}
	fullName := strings.Join(fullNameParts, " ")

	canonicalName := CanonicalName{
		FamilyName: familyName,
		GivenName:  givenName,
		MiddleName: middleName,
		Prefix:     prefix,
		Suffix:     suffix,
		FullName:   fullName,
	}

	// PID.7: Date/Time of Birth
	rawDOB := pidSeg.GetField(7)
	dobString := ""
	var dobTimePtr *time.Time
	if rawDOB != "" {
		if dt, err := parseHL7Timestamp(rawDOB); err == nil {
			dobTimePtr = &dt
			dobString = dt.Format("2006-01-02")
		} else {
			dobString = rawDOB
		}
	}

	// PID.8: Administrative Sex ("M", "F", "O", "U", etc.)
	rawSex := strings.ToUpper(strings.TrimSpace(pidSeg.GetField(8)))
	genderStr := "Unknown"
	switch rawSex {
	case "M":
		genderStr = "Male"
	case "F":
		genderStr = "Female"
	case "O":
		genderStr = "Other"
	case "U":
		genderStr = "Unknown"
	case "A":
		genderStr = "Ambiguous"
	case "N":
		genderStr = "Not Applicable"
	default:
		if rawSex != "" {
			genderStr = rawSex
		} else {
			rawSex = "U"
		}
	}

	// PID.11: Patient Address (Street ^ Other ^ City ^ State ^ Zip ^ Country)
	rawAddress := pidSeg.GetField(11)
	addrComponents := strings.Split(rawAddress, compSep)
	street := ""
	otherDesignation := ""
	city := ""
	state := ""
	zip := ""
	country := ""

	if len(addrComponents) > 0 {
		street = strings.TrimSpace(addrComponents[0])
	}
	if len(addrComponents) > 1 {
		otherDesignation = strings.TrimSpace(addrComponents[1])
	}
	if len(addrComponents) > 2 {
		city = strings.TrimSpace(addrComponents[2])
	}
	if len(addrComponents) > 3 {
		state = strings.TrimSpace(addrComponents[3])
	}
	if len(addrComponents) > 4 {
		zip = strings.TrimSpace(addrComponents[4])
	}
	if len(addrComponents) > 5 {
		country = strings.TrimSpace(addrComponents[5])
	}

	fullAddrParts := []string{}
	if street != "" {
		fullAddrParts = append(fullAddrParts, street)
	}
	if otherDesignation != "" {
		fullAddrParts = append(fullAddrParts, otherDesignation)
	}
	if city != "" {
		fullAddrParts = append(fullAddrParts, city)
	}
	if state != "" || zip != "" {
		stateZip := strings.TrimSpace(fmt.Sprintf("%s %s", state, zip))
		fullAddrParts = append(fullAddrParts, stateZip)
	}
	if country != "" {
		fullAddrParts = append(fullAddrParts, country)
	}
	fullAddress := strings.Join(fullAddrParts, ", ")

	canonicalAddress := CanonicalAddress{
		Street:           street,
		OtherDesignation: otherDesignation,
		City:             city,
		State:            state,
		Zip:              zip,
		Country:          country,
		FullAddress:      fullAddress,
	}

	canonicalPatient := CanonicalPatient{
		MRN:             primaryMRN,
		Identifiers:     identifiers,
		Name:            canonicalName,
		DateOfBirth:     dobString,
		DateOfBirthTime: dobTimePtr,
		Gender:          genderStr,
		GenderCode:      rawSex,
		Address:         canonicalAddress,
	}

	// 3. Optional PV1 Segment Parsing
	var canonicalVisit *CanonicalVisit
	if pv1Line != "" {
		pv1Parts := strings.Split(pv1Line, fieldSep)
		pv1Seg := HL7Segment{Name: "PV1", Fields: pv1Parts}

		rawClass := pv1Seg.GetField(2)
		rawLoc := pv1Seg.GetField(3)
		rawDoctor := pv1Seg.GetField(7)
		rawVisitNum := pv1Seg.GetField(19)
		rawAdmitTime := pv1Seg.GetField(44)

		locParts := strings.Split(rawLoc, compSep)
		poc := ""
		rm := ""
		bed := ""
		fac := ""
		if len(locParts) > 0 {
			poc = strings.TrimSpace(locParts[0])
		}
		if len(locParts) > 1 {
			rm = strings.TrimSpace(locParts[1])
		}
		if len(locParts) > 2 {
			bed = strings.TrimSpace(locParts[2])
		}
		if len(locParts) > 3 {
			fac = strings.TrimSpace(locParts[3])
		}

		var admitTimePtr *time.Time
		if rawAdmitTime != "" {
			if at, err := parseHL7Timestamp(rawAdmitTime); err == nil {
				admitTimePtr = &at
			}
		}

		classStr := rawClass
		switch strings.ToUpper(rawClass) {
		case "I":
			classStr = "Inpatient"
		case "O":
			classStr = "Outpatient"
		case "E":
			classStr = "Emergency"
		case "P":
			classStr = "Preadmit"
		}

		canonicalVisit = &CanonicalVisit{
			SetID:        pv1Seg.GetField(1),
			PatientClass: classStr,
			AssignedLocation: PatientLocation{
				PointOfCare: poc,
				Room:        rm,
				Bed:         bed,
				Facility:    fac,
			},
			VisitNumber:     rawVisitNum,
			AdmitDateTime:   admitTimePtr,
			AttendingDoctor: rawDoctor,
		}
	}

	// 4. Assemble Canonical Event
	event := &CanonicalPatientAdmitEvent{
		EventID:      generateID("EVT-ADMIT"),
		EventType:    "ADT_A01",
		TriggerEvent: "A01",
		Timestamp:    parsedMsgTime,
		SourceSystem: SystemEndpoint{
			Application: sendingApp,
			Facility:    sendingFacility,
		},
		DestinationSystem: SystemEndpoint{
			Application: receivingApp,
			Facility:    receivingFacility,
		},
		MessageControlID: controlID,
		ProcessingID:     processingID,
		HL7Version:       versionID,
		Patient:          canonicalPatient,
		Visit:            canonicalVisit,
		ParsedSegments:   parsedNames,
	}

	return event, mshInfo, nil
}

// GenerateACK creates a compliant HL7 v2.x ACK response string.
func GenerateACK(msh *MSHInfo, ackCode string, textMessage string) string {
	timestamp := time.Now().UTC().Format("20060102150405")
	ackControlID := generateID("ACK")

	destApp := "UNKNOWN_APP"
	destFacility := "UNKNOWN_FACILITY"
	procID := "P"
	verID := "2.5"
	origControlID := "UNKNOWN"

	if msh != nil {
		if msh.SendingApp != "" {
			destApp = msh.SendingApp
		}
		if msh.SendingFacility != "" {
			destFacility = msh.SendingFacility
		}
		if msh.ProcessingID != "" {
			procID = msh.ProcessingID
		}
		if msh.VersionID != "" {
			verID = msh.VersionID
		}
		if msh.MessageControlID != "" {
			origControlID = msh.MessageControlID
		}
	}

	mshSeg := fmt.Sprintf("MSH|^~\\&|VASCULE_OS|ANGIO_SUITE|%s|%s|%s||ACK^A01|%s|%s|%s",
		destApp, destFacility, timestamp, ackControlID, procID, verID)
	msaSeg := fmt.Sprintf("MSA|%s|%s|%s", ackCode, origControlID, textMessage)

	return fmt.Sprintf("%s\r%s\r", mshSeg, msaSeg)
}

// WrapMLLP wraps an HL7 payload in MLLP framing characters (0x0B ... 0x1C 0x0D).
func WrapMLLP(message string) []byte {
	buf := make([]byte, 0, len(message)+3)
	buf = append(buf, MLLPStartByte)
	buf = append(buf, []byte(message)...)
	buf = append(buf, MLLPEndByte1, MLLPEndByte2)
	return buf
}

// ---------------------------------------------------------------------
// HTTP Handlers & Middlewares
// ---------------------------------------------------------------------

// loggingMiddleware records incoming HTTP requests with timing and records Prometheus metrics.
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		rw := &statusResponseWriter{ResponseWriter: w, status: http.StatusOK}
		next.ServeHTTP(rw, r)
		duration := time.Since(start)
		globalFhirMetrics.RecordRequest(r.Method, r.URL.Path, rw.status, duration.Seconds())
		log.Printf("[HTTP] %s %s %s - %d (%s)", r.RemoteAddr, r.Method, r.URL.Path, rw.status, duration)
	})
}

// handleMetrics serves GET /metrics exporting Prometheus text exposition format.
func handleMetrics(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	globalFhirMetrics.mu.RLock()
	defer globalFhirMetrics.mu.RUnlock()

	var sb strings.Builder
	uptimeSec := time.Since(fhirServiceStartTime).Seconds()

	sb.WriteString("# HELP vascule_service_uptime_seconds Total uptime of Vascule OS microservice in seconds.\n")
	sb.WriteString("# TYPE vascule_service_uptime_seconds counter\n")
	sb.WriteString(fmt.Sprintf("vascule_service_uptime_seconds{service=\"%s\"} %.2f\n\n", ServiceName, uptimeSec))

	sb.WriteString("# HELP vascule_active_websockets_gauge Current active WebSocket clinical telemetry connections.\n")
	sb.WriteString("# TYPE vascule_active_websockets_gauge gauge\n")
	sb.WriteString(fmt.Sprintf("vascule_active_websockets_gauge{service=\"%s\"} %d\n\n", ServiceName, globalFhirMetrics.activeWebsockets))

	sb.WriteString("# HELP vascule_hl7_packets_total Total number of ingested HL7 v2 ADT^A01 messages.\n")
	sb.WriteString("# TYPE vascule_hl7_packets_total counter\n")
	sb.WriteString(fmt.Sprintf("vascule_hl7_packets_total{service=\"%s\",message_type=\"ADT_A01\"} %d\n\n", ServiceName, globalFhirMetrics.hl7PacketsTotal))

	sb.WriteString("# HELP vascule_dicom_query_duration_seconds Latency of QIDO-RS DICOM study queries in seconds.\n")
	sb.WriteString("# TYPE vascule_dicom_query_duration_seconds summary\n")
	sb.WriteString(fmt.Sprintf("vascule_dicom_query_duration_seconds_sum{service=\"%s\"} 0.000000\n", ServiceName))
	sb.WriteString(fmt.Sprintf("vascule_dicom_query_duration_seconds_count{service=\"%s\"} 0\n\n", ServiceName))

	sb.WriteString("# HELP vascule_http_requests_total Total number of HTTP requests processed.\n")
	sb.WriteString("# TYPE vascule_http_requests_total counter\n")
	for labels, count := range globalFhirMetrics.httpRequestsTotal {
		sb.WriteString(fmt.Sprintf("vascule_http_requests_total{service=\"%s\",%s} %d\n", ServiceName, labels, count))
	}
	if len(globalFhirMetrics.httpRequestsTotal) == 0 {
		sb.WriteString(fmt.Sprintf("vascule_http_requests_total{service=\"%s\",method=\"INIT\",status=\"200\"} 0\n", ServiceName))
	}
	sb.WriteString("\n")

	sb.WriteString("# HELP vascule_http_request_duration_seconds Cumulative time spent processing HTTP requests.\n")
	sb.WriteString("# TYPE vascule_http_request_duration_seconds counter\n")
	for labels, dur := range globalFhirMetrics.httpRequestDurations {
		sb.WriteString(fmt.Sprintf("vascule_http_request_duration_seconds{service=\"%s\",%s} %.6f\n", ServiceName, labels, dur))
	}

	w.Header().Set("Content-Type", "text/plain; version=0.0.4; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte(sb.String()))
}

// corsMiddleware attaches basic CORS headers.
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

type statusResponseWriter struct {
	http.ResponseWriter
	status int
}

func (rw *statusResponseWriter) WriteHeader(code int) {
	rw.status = code
	rw.ResponseWriter.WriteHeader(code)
}

// handleHealth serves GET /health.
func handleHealth(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	resp := HealthResponse{
		Service:   ServiceName,
		Status:    "healthy",
		Version:   ServiceVersion,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(resp)
}

// handleADTA01 serves POST /api/v1/hl7/adt-a01.
func handleADTA01(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		// Provide informational guidance for GET requests
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]interface{}{
			"endpoint":    "/api/v1/hl7/adt-a01",
			"description": "HL7 v2.x ADT^A01 (Patient Admit / Visit Notification) intake endpoint.",
			"method":      "POST",
			"contentType": []string{"application/hl7-v2", "text/plain", "application/json"},
			"format":      "Pipe-delimited segments (MSH, PID, optional PV1)",
		})
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	// Read body with limit to protect against oversized payloads (max 2MB)
	bodyBytes, err := io.ReadAll(io.LimitReader(r.Body, 2*1024*1024))
	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(HL7IntakeResponse{
			Status: "error",
			Error:  "failed to read request body: " + err.Error(),
		})
		return
	}
	defer r.Body.Close()

	rawHL7 := string(bodyBytes)

	// If content type is JSON, attempt to unmarshal wrapper structure
	contentType := r.Header.Get("Content-Type")
	if strings.Contains(contentType, "application/json") || (len(rawHL7) > 0 && rawHL7[0] == '{') {
		var payload InboundHL7Payload
		if err := json.Unmarshal(bodyBytes, &payload); err == nil {
			if payload.RawHL7 != "" {
				rawHL7 = payload.RawHL7
			} else if payload.Message != "" {
				rawHL7 = payload.Message
			} else if payload.HL7 != "" {
				rawHL7 = payload.HL7
			}
		}
	}

	rawHL7 = strings.TrimSpace(rawHL7)
	if rawHL7 == "" {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(HL7IntakeResponse{
			Status: "error",
			Error:  "request body contains no HL7 message content",
		})
		return
	}

	// Parse message
	canonicalEvent, mshInfo, err := ParseADTA01Message(rawHL7)
	if err != nil {
		nack := GenerateACK(mshInfo, "AE", err.Error())
		log.Printf("[HL7 PARSE ERROR] %v", err)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(HL7IntakeResponse{
			Status:     "error",
			ACKMessage: nack,
			Error:      err.Error(),
		})
		return
	}

	ack := GenerateACK(mshInfo, "AA", "Message accepted and parsed successfully")
	globalFhirMetrics.IncHL7()
	log.Printf("[HL7 ADMIT ACCEPTED] EventID=%s MRN=%s Patient=%s MsgControlID=%s",
		canonicalEvent.EventID, canonicalEvent.Patient.MRN, canonicalEvent.Patient.Name.FullName, canonicalEvent.MessageControlID)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(HL7IntakeResponse{
		Status:         "success",
		ACKMessage:     ack,
		CanonicalEvent: canonicalEvent,
	})
}

// ---------------------------------------------------------------------
// Real-Time Telemetry & Patient State Data Structures
// ---------------------------------------------------------------------

// PatientClinicalProfile represents patient clinical data returned by GET /api/v1/patients/{patientId}.
type PatientClinicalProfile struct {
	ID                 string   `json:"id"`
	MRN                string   `json:"mrn"`
	Name               string   `json:"name"`
	Age                int      `json:"age"`
	Gender             string   `json:"gender"`
	WeightKg           float64  `json:"weightKg"`
	SerumCreatinine    float64  `json:"serumCreatinine"`
	TotalBilirubin     float64  `json:"totalBilirubin"`
	SerumAlbumin       float64  `json:"serumAlbumin"`
	INR                float64  `json:"inr"`
	SodiumMeqL         float64  `json:"sodiumMeqL"`
	EGFR               float64  `json:"egfr"`
	BaselineActSeconds int      `json:"baselineActSeconds"`
	ProcedureName      string   `json:"procedureName"`
	AttendingPhysician string   `json:"attendingPhysician"`
	SuiteLocation      string   `json:"suiteLocation"`
	Allergies          []string `json:"allergies"`
	ContrastAgent      string   `json:"contrastAgent"`
	MACDThresholdMl    float64  `json:"macdThresholdMl"`
	CreatedAt          string   `json:"createdAt"`
}

// LiveTelemetryFrame represents streaming hemodynamic and telemetry packet sent via WebSocket/SSE.
type LiveTelemetryFrame struct {
	PatientID         string  `json:"patientId"`
	Timestamp         string  `json:"timestamp"`
	Systolic          int     `json:"systolic"`
	Diastolic         int     `json:"diastolic"`
	MAP               int     `json:"map"`
	HeartRate         int     `json:"heartRate"`
	SpO2Percent       int     `json:"spo2Percent"`
	EtCO2MmHg         int     `json:"etco2MmHg"`
	RespiratoryRate   int     `json:"respiratoryRate"`
	ACTSeconds        int     `json:"actSeconds"`
	RhythmStatus      string  `json:"rhythmStatus"`
	AirKermaMgy       float64 `json:"airKermaMgy"`
	DAPGyCm2          float64 `json:"dapGyCm2"`
	FluoroTimeMinutes int     `json:"fluoroTimeMinutes"`
	FluoroTimeSeconds int     `json:"fluoroTimeSeconds"`
	Source            string  `json:"source"`
}

const wsRFC6455GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"

// generateTelemetryFrame creates fluctuating, high-fidelity hemodynamic values for real-time streaming.
func generateTelemetryFrame(patientID string, seq int) LiveTelemetryFrame {
	sineVal := math.Sin(float64(seq) * 0.2)
	hrDelta := int(math.Round(3.0 * sineVal))
	sysDelta := int(math.Round(4.0 * math.Cos(float64(seq)*0.15)))
	diaDelta := int(math.Round(2.0 * math.Sin(float64(seq)*0.15)))

	sys := 118 + sysDelta
	dia := 76 + diaDelta
	meanArterial := int(math.Round(float64(dia) + float64(sys-dia)/3.0))

	spo2 := 99
	if seq%7 == 0 {
		spo2 = 98
	}

	act := 294 + int(math.Round(2.0*math.Sin(float64(seq)*0.05)))
	airKerma := 342.0 + float64(seq)*0.25
	dap := 18.6 + float64(seq)*0.015
	totalSec := 14*60 + 38 + seq

	return LiveTelemetryFrame{
		PatientID:         patientID,
		Timestamp:         time.Now().UTC().Format(time.RFC3339Nano),
		Systolic:          sys,
		Diastolic:         dia,
		MAP:               meanArterial,
		HeartRate:         72 + hrDelta,
		SpO2Percent:       spo2,
		EtCO2MmHg:         36 + int(math.Round(sineVal)),
		RespiratoryRate:   14,
		ACTSeconds:        act,
		RhythmStatus:      "Normal Sinus Rhythm",
		AirKermaMgy:       math.Round(airKerma*10) / 10,
		DAPGyCm2:          math.Round(dap*100) / 100,
		FluoroTimeMinutes: totalSec / 60,
		FluoroTimeSeconds: totalSec % 60,
		Source:            "Right Radial A-Line",
	}
}

// writeWebSocketTextFrame encodes and sends an RFC 6455 unmasked server-to-client text frame (Opcode 0x1).
func writeWebSocketTextFrame(w io.Writer, payload []byte) error {
	length := len(payload)
	var header []byte
	byte0 := byte(0x81) // FIN (0x80) | Opcode text (0x01)

	if length < 126 {
		header = []byte{byte0, byte(length)}
	} else if length <= 65535 {
		header = make([]byte, 4)
		header[0] = byte0
		header[1] = 126
		binary.BigEndian.PutUint16(header[2:4], uint16(length))
	} else {
		header = make([]byte, 10)
		header[0] = byte0
		header[1] = 127
		binary.BigEndian.PutUint64(header[2:10], uint64(length))
	}

	if _, err := w.Write(header); err != nil {
		return err
	}
	_, err := w.Write(payload)
	return err
}

// handleGetPatient serves GET /api/v1/patients/{patientId}.
func handleGetPatient(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	patientID := strings.TrimPrefix(r.URL.Path, "/api/v1/patients/")
	patientID = strings.TrimSpace(patientID)
	if patientID == "" {
		patientID = "IR-2026-8841"
	}

	mrn := patientID
	if !strings.HasPrefix(mrn, "#") {
		mrn = "#" + mrn
	}

	profile := PatientClinicalProfile{
		ID:                 patientID,
		MRN:                mrn,
		Name:               "VALENTINE, MARCUS R.",
		Age:                67,
		Gender:             "M",
		WeightKg:           82.5,
		SerumCreatinine:    1.14,
		TotalBilirubin:     0.8,
		SerumAlbumin:       3.9,
		INR:                1.1,
		SodiumMeqL:         139.0,
		EGFR:               68.0,
		BaselineActSeconds: 128,
		ProcedureName:      "Bifurcated EVAR // DrySeal 14 Fr",
		AttendingPhysician: "Dr. Sarah Chen, MD",
		SuiteLocation:      "Angio Suite 1 (Hybrid OR)",
		Allergies:          []string{"NKDA"},
		ContrastAgent:      "Isovue 370 (Iopamidol)",
		MACDThresholdMl:    160.0,
		CreatedAt:          time.Now().UTC().Format(time.RFC3339),
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(profile)
}

// handleTelemetryWS serves WebSocket connections on /ws/vitals/{patientId}.
func handleTelemetryWS(w http.ResponseWriter, r *http.Request) {
	patientID := strings.TrimPrefix(r.URL.Path, "/ws/vitals/")
	patientID = strings.TrimSpace(patientID)
	if patientID == "" {
		patientID = "IR-2026-8841"
	}

	// Verify WebSocket Upgrade Request
	connectionHdr := strings.ToLower(r.Header.Get("Connection"))
	upgradeHdr := strings.ToLower(r.Header.Get("Upgrade"))
	if !strings.Contains(connectionHdr, "upgrade") || upgradeHdr != "websocket" {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		_ = json.NewEncoder(w).Encode(map[string]interface{}{
			"error":     "Expected WebSocket upgrade request",
			"usage":     "Connect using ws:// or wss:// protocol",
			"patientId": patientID,
		})
		return
	}

	secKey := strings.TrimSpace(r.Header.Get("Sec-WebSocket-Key"))
	if secKey == "" {
		http.Error(w, "Missing Sec-WebSocket-Key", http.StatusBadRequest)
		return
	}

	// Compute Sec-WebSocket-Accept according to RFC 6455
	h := sha1.New()
	h.Write([]byte(secKey + wsRFC6455GUID))
	acceptKey := base64.StdEncoding.EncodeToString(h.Sum(nil))

	// Hijack the underlying TCP connection
	hijacker, ok := w.(http.Hijacker)
	if !ok {
		http.Error(w, "Webserver doesn't support hijacking", http.StatusInternalServerError)
		return
	}

	conn, bufrw, err := hijacker.Hijack()
	if err != nil {
		log.Printf("[WS] Hijack failed: %v", err)
		return
	}
	defer conn.Close()

	// Write RFC 6455 Handshake Response
	response := fmt.Sprintf(
		"HTTP/1.1 101 Switching Protocols\r\n"+
			"Upgrade: websocket\r\n"+
			"Connection: Upgrade\r\n"+
			"Sec-WebSocket-Accept: %s\r\n\r\n",
		acceptKey,
	)
	if _, err := bufrw.WriteString(response); err != nil {
		log.Printf("[WS] Handshake write error: %v", err)
		return
	}
	if err := bufrw.Flush(); err != nil {
		log.Printf("[WS] Flush handshake error: %v", err)
		return
	}
	globalFhirMetrics.IncActiveWebsockets()
	defer globalFhirMetrics.DecActiveWebsockets()

	log.Printf("[WS] Real-time telemetry client connected for Patient: %s (%s)", patientID, conn.RemoteAddr().String())

	closeChan := make(chan struct{})

	// Read loop to detect client disconnection or close frame
	go func() {
		for {
			byte0, err := bufrw.ReadByte()
			if err != nil {
				close(closeChan)
				return
			}
			opcode := byte0 & 0x0F
			if opcode == 0x08 { // Close frame
				close(closeChan)
				return
			}
			byte1, err := bufrw.ReadByte()
			if err != nil {
				close(closeChan)
				return
			}
			masked := (byte1 & 0x80) != 0
			payloadLen := int(byte1 & 0x7F)
			if payloadLen == 126 {
				var extLen uint16
				_ = binary.Read(bufrw, binary.BigEndian, &extLen)
				payloadLen = int(extLen)
			} else if payloadLen == 127 {
				var extLen uint64
				_ = binary.Read(bufrw, binary.BigEndian, &extLen)
				payloadLen = int(extLen)
			}
			maskKeyLen := 0
			if masked {
				maskKeyLen = 4
			}
			toDiscard := payloadLen + maskKeyLen
			if toDiscard > 0 {
				_, _ = bufrw.Discard(toDiscard)
			}
		}
	}()

	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()

	seq := 0
	for {
		select {
		case <-closeChan:
			log.Printf("[WS] Telemetry client disconnected for Patient: %s", patientID)
			return
		case <-ticker.C:
			seq++
			frame := generateTelemetryFrame(patientID, seq)
			frameBytes, err := json.Marshal(frame)
			if err != nil {
				continue
			}

			_ = conn.SetWriteDeadline(time.Now().Add(5 * time.Second))
			if err := writeWebSocketTextFrame(bufrw, frameBytes); err != nil {
				log.Printf("[WS] Write error to %s: %v", patientID, err)
				return
			}
			if err := bufrw.Flush(); err != nil {
				log.Printf("[WS] Flush error to %s: %v", patientID, err)
				return
			}
		}
	}
}

// handleTelemetrySSE serves HTTP Server-Sent Events stream for telemetry.
func handleTelemetrySSE(w http.ResponseWriter, r *http.Request) {
	patientID := strings.TrimPrefix(r.URL.Path, "/api/v1/telemetry/stream/")
	patientID = strings.TrimSpace(patientID)
	if patientID == "" {
		patientID = "IR-2026-8841"
	}

	flusher, ok := w.(http.Flusher)
	if !ok {
		http.Error(w, "Streaming unsupported", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	ticker := time.NewTicker(1 * time.Second)
	defer ticker.Stop()

	seq := 0
	for {
		select {
		case <-r.Context().Done():
			return
		case <-ticker.C:
			seq++
			frame := generateTelemetryFrame(patientID, seq)
			data, _ := json.Marshal(frame)
			fmt.Fprintf(w, "data: %s\n\n", data)
			flusher.Flush()
		}
	}
}

// ---------------------------------------------------------------------
// MLLP TCP Server (Port 2575)
// ---------------------------------------------------------------------

// StartMLLPServer boots the native HL7 Minimal Lower Layer Protocol TCP listener.
func StartMLLPServer(ctx context.Context, addr string, wg *sync.WaitGroup) error {
	listener, err := net.Listen("tcp", addr)
	if err != nil {
		return fmt.Errorf("failed to bind MLLP listener on %s: %w", addr, err)
	}

	log.Printf("[MLLP] TCP listener active on %s (framing: VT 0x0B ... FS 0x1C CR 0x0D)", addr)

	wg.Add(1)
	go func() {
		defer wg.Done()
		defer listener.Close()

		go func() {
			<-ctx.Done()
			_ = listener.Close()
		}()

		for {
			conn, err := listener.Accept()
			if err != nil {
				select {
				case <-ctx.Done():
					return
				default:
					log.Printf("[MLLP] Accept connection error: %v", err)
					continue
				}
			}

			wg.Add(1)
			go func(c net.Conn) {
				defer wg.Done()
				handleMLLPConnection(ctx, c)
			}(conn)
		}
	}()

	return nil
}

// handleMLLPConnection processes HL7 frames over a persistent or transient TCP connection.
func handleMLLPConnection(ctx context.Context, conn net.Conn) {
	defer conn.Close()
	remoteAddr := conn.RemoteAddr().String()
	log.Printf("[MLLP] Client connected: %s", remoteAddr)

	reader := bufio.NewReader(conn)

	for {
		select {
		case <-ctx.Done():
			return
		default:
		}

		// Set 60-second idle timeout per frame
		_ = conn.SetReadDeadline(time.Now().Add(60 * time.Second))

		// 1. Seek to MLLP Start Byte (0x0B)
		for {
			b, err := reader.ReadByte()
			if err != nil {
				if errors.Is(err, io.EOF) {
					log.Printf("[MLLP] Client %s disconnected gracefully", remoteAddr)
				} else {
					log.Printf("[MLLP] Read error from %s: %v", remoteAddr, err)
				}
				return
			}
			if b == MLLPStartByte {
				break
			}
		}

		// 2. Read payload until 0x1C 0x0D
		var payload bytes.Buffer
		frameDone := false
		for !frameDone {
			b, err := reader.ReadByte()
			if err != nil {
				log.Printf("[MLLP] Incomplete frame from %s: %v", remoteAddr, err)
				return
			}
			if b == MLLPEndByte1 {
				nextByte, err := reader.ReadByte()
				if err != nil {
					log.Printf("[MLLP] Premature frame termination from %s: %v", remoteAddr, err)
					return
				}
				if nextByte == MLLPEndByte2 {
					frameDone = true
					break
				}
				payload.WriteByte(b)
				payload.WriteByte(nextByte)
				continue
			}
			payload.WriteByte(b)
		}

		rawHL7 := payload.String()
		canonicalEvent, mshInfo, err := ParseADTA01Message(rawHL7)

		var ackMsg string
		if err != nil {
			log.Printf("[MLLP] Message validation error from %s: %v", remoteAddr, err)
			ackMsg = GenerateACK(mshInfo, "AE", err.Error())
		} else {
			log.Printf("[MLLP] Accepted ADT^A01 from %s: EventID=%s MRN=%s Patient=%s",
				remoteAddr, canonicalEvent.EventID, canonicalEvent.Patient.MRN, canonicalEvent.Patient.Name.FullName)
			ackMsg = GenerateACK(mshInfo, "AA", "Message accepted and parsed successfully")
		}

		// Wrap ACK in MLLP framing and respond
		_ = conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
		mllpFrame := WrapMLLP(ackMsg)
		if _, writeErr := conn.Write(mllpFrame); writeErr != nil {
			log.Printf("[MLLP] Failed writing ACK to %s: %v", remoteAddr, writeErr)
			return
		}
	}
}

// ---------------------------------------------------------------------
// Server Bootstrap & Lifecycle
// ---------------------------------------------------------------------

func main() {
	log.SetFlags(log.Ldate | log.Ltime | log.Lmicroseconds | log.LUTC)
	log.Printf("[START] Starting %s v%s", ServiceName, ServiceVersion)

	httpPort := os.Getenv("PORT")
	if httpPort == "" {
		httpPort = os.Getenv("HTTP_PORT")
	}
	if httpPort == "" {
		httpPort = DefaultHTTPPort
	}

	mllpPort := os.Getenv("MLLP_PORT")
	if mllpPort == "" {
		mllpPort = DefaultMLLPPort
	}

	enableMLLP := os.Getenv("ENABLE_MLLP")
	if enableMLLP == "" {
		enableMLLP = "true"
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	var wg sync.WaitGroup

	// Configure HTTP Router
	mux := http.NewServeMux()
	mux.HandleFunc("/health", handleHealth)
	mux.HandleFunc("/metrics", handleMetrics)
	mux.HandleFunc("/api/v1/hl7/adt-a01", handleADTA01)
	mux.HandleFunc("/api/v1/patients/", handleGetPatient)
	mux.HandleFunc("/ws/vitals/", handleTelemetryWS)
	mux.HandleFunc("/ws/vitals", handleTelemetryWS)
	mux.HandleFunc("/api/v1/telemetry/stream/", handleTelemetrySSE)

	// Apply Middlewares
	handler := corsMiddleware(loggingMiddleware(mux))

	httpAddr := ":" + httpPort
	httpServer := &http.Server{
		Addr:              httpAddr,
		Handler:           handler,
		ReadHeaderTimeout: 10 * time.Second,
		ReadTimeout:       30 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       120 * time.Second,
	}

	// Start HTTP Server
	wg.Add(1)
	go func() {
		defer wg.Done()
		log.Printf("[HTTP] Listening for HTTP requests on %s", httpAddr)
		if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("[FATAL] HTTP server failure: %v", err)
		}
	}()

	// Start Optional TCP MLLP Server
	if strings.ToLower(enableMLLP) == "true" || enableMLLP == "1" {
		mllpAddr := ":" + mllpPort
		if err := StartMLLPServer(ctx, mllpAddr, &wg); err != nil {
			log.Printf("[WARN] Failed to start MLLP server: %v", err)
		}
	}

	// Handle Graceful Termination Signals
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, syscall.SIGTERM, syscall.SIGINT)
	sig := <-quit
	log.Printf("[STOP] Received signal '%s', initiating graceful shutdown...", sig)

	cancel()

	// Graceful shutdown context with 15s timeout
	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer shutdownCancel()

	if err := httpServer.Shutdown(shutdownCtx); err != nil {
		log.Printf("[ERROR] HTTP graceful shutdown encountered error: %v", err)
	}

	wg.Wait()
	log.Printf("[EXIT] %s cleanly terminated.", ServiceName)
}
