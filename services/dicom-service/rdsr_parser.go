package main

import (
	"bytes"
	"encoding/binary"
	"encoding/json"
	"errors"
	"fmt"
	"math"
	"strconv"
	"strings"
	"time"
)

// =============================================================================
// DICOM RDSR Standards & UID Constants
// SOP Class: X-Ray Radiation Dose SR Storage (1.2.840.10008.5.1.4.1.1.88.67)
// Templates: TID 1020 (Accumulated Dose) & TID 1021 (Device Participant)
// =============================================================================

const (
	RDSRSOPClassUID = "1.2.840.10008.5.1.4.1.1.88.67"

	// DICOM PS3.16 Concept Name Codes
	CodeDoseRP         = "113725" // Dose (RP) Total / Air Kerma at Reference Point (mGy)
	CodeDAPTotal       = "113722" // Dose Area Product Total
	CodeFluoroTime     = "113730" // Fluoroscopy Time Total (s)
	CodeTotalAcqTime   = "113731" // Exposure / Total Acquisition Time (s)
	CodeIrradEventNum  = "113706" // Number of Irradiation Events
	CodeDeviceObserver = "121005" // Device Observer UID
)

// DeviceParticipant models DICOM PS3.16 Template 1021 (Device Participant)
type DeviceParticipant struct {
	DeviceObserverUID string `json:"deviceObserverUid"`
	Manufacturer      string `json:"manufacturer"`
	ModelName         string `json:"modelName"`
	SerialNumber      string `json:"serialNumber"`
	StationName       string `json:"stationName"`
	InstitutionName   string `json:"institutionName"`
	DepartmentName    string `json:"departmentName"`
}

// AccumulatedDose models DICOM PS3.16 Template 1020 (Accumulated X-Ray Dose)
type AccumulatedDose struct {
	CumulativeAirKermaMGy  float64 `json:"cumulativeAirKermaMGy"`
	DoseAreaProductGyCm2   float64 `json:"doseAreaProductGyCm2"`
	TotalFluoroscopyTimeSec float64 `json:"totalFluoroscopyTimeSec"`
	TotalAcquisitionTimeSec float64 `json:"totalAcquisitionTimeSec"`
	TotalIrradiationEvents  int     `json:"totalIrradiationEvents"`
	DAPOriginalUnit        string  `json:"dapOriginalUnit,omitempty"`
}

// IrradiationEventGeometry models angulations during an X-ray exposure
type IrradiationEventGeometry struct {
	EventIndex             int     `json:"eventIndex"`
	PositionerPrimaryAngle float64 `json:"positionerPrimaryAngleDeg"`   // RAO (-) / LAO (+) in degrees
	PositionerSecondaryAngle float64 `json:"positionerSecondaryAngleDeg"` // CRA (+) / CAU (-) in degrees
	DoseAreaProductGyCm2   float64 `json:"doseAreaProductGyCm2"`
	AirKermaMGy            float64 `json:"airKermaMGy"`
	PulseRateHz            float64 `json:"pulseRateHz,omitempty"`
}

// ParsedRDSR represents the canonical parsed Radiation Dose Structured Report
type ParsedRDSR struct {
	SOPClassUID      string                     `json:"sopClassUid"`
	SOPInstanceUID   string                     `json:"sopInstanceUid"`
	StudyInstanceUID string                     `json:"studyInstanceUid"`
	PatientID        string                     `json:"patientId"`
	PatientName      string                     `json:"patientName"`
	StudyDate        string                     `json:"studyDate"`
	StudyTime        string                     `json:"studyTime"`
	Device           DeviceParticipant          `json:"device"`
	AccumulatedDose  AccumulatedDose            `json:"accumulatedDose"`
	Events           []IrradiationEventGeometry `json:"events,omitempty"`
	ParseTimestamp   string                     `json:"parseTimestamp"`
}

// -----------------------------------------------------------------------------
// Tag Parsing Helpers
// -----------------------------------------------------------------------------

// FormatCArmAngles converts numerical angles into clinical notation (e.g., "LAO 30.0° / CRA 15.0°")
func FormatCArmAngles(primary, secondary float64) string {
	primStr := "AP 0.0°"
	if primary > 0.1 {
		primStr = fmt.Sprintf("LAO %.1f°", primary)
	} else if primary < -0.1 {
		primStr = fmt.Sprintf("RAO %.1f°", math.Abs(primary))
	}

	secStr := "0.0°"
	if secondary > 0.1 {
		secStr = fmt.Sprintf("CRA %.1f°", secondary)
	} else if secondary < -0.1 {
		secStr = fmt.Sprintf("CAU %.1f°", math.Abs(secondary))
	}

	return fmt.Sprintf("%s / %s", primStr, secStr)
}

// NormalizeDAPToGyCm2 converts diverse clinical units (dGy·cm², µGy·m², mGy·cm²) into standard Gy·cm²
func NormalizeDAPToGyCm2(value float64, unit string) float64 {
	u := strings.TrimSpace(strings.ToLower(unit))
	switch {
	case strings.Contains(u, "dgy*cm2") || strings.Contains(u, "dgy.cm2") || strings.Contains(u, "dgycm2"):
		// 1 dGy = 0.1 Gy
		return value * 0.1
	case strings.Contains(u, "ugy*m2") || strings.Contains(u, "ugy.m2") || strings.Contains(u, "ugym2") || strings.Contains(u, "µgy"):
		// 1 µGy·m² = 1 Gy·cm²
		return value
	case strings.Contains(u, "mgy*cm2") || strings.Contains(u, "mgy.cm2"):
		// 1 mGy = 0.001 Gy
		return value * 0.001
	case strings.Contains(u, "gy*m2") || strings.Contains(u, "gy.m2"):
		// 1 Gy·m² = 10,000 Gy·cm²
		return value * 10000.0
	default:
		// Default assumption is Gy·cm²
		return value
	}
}

// -----------------------------------------------------------------------------
// JSON RDSR Parser (Supports Standard DICOMweb and Canonical Format)
// -----------------------------------------------------------------------------

// ParseRDSRJson parses a JSON-serialized RDSR payload into ParsedRDSR
func ParseRDSRJson(data []byte) (*ParsedRDSR, error) {
	if len(data) == 0 {
		return nil, errors.New("empty RDSR JSON buffer")
	}

	// First attempt: Check if it is a canonical format directly
	var canonical struct {
		SOPClassUID      string `json:"sopClassUid"`
		SOPInstanceUID   string `json:"sopInstanceUid"`
		StudyInstanceUID string `json:"studyInstanceUid"`
		PatientID        string `json:"patientId"`
		PatientName      string `json:"patientName"`
		StudyDate        string `json:"studyDate"`
		StudyTime        string `json:"studyTime"`
		Device           struct {
			DeviceObserverUID string `json:"deviceObserverUid"`
			Manufacturer      string `json:"manufacturer"`
			ModelName         string `json:"modelName"`
			SerialNumber      string `json:"serialNumber"`
			StationName       string `json:"stationName"`
			InstitutionName   string `json:"institutionName"`
			DepartmentName    string `json:"departmentName"`
		} `json:"device"`
		AccumulatedDose struct {
			CumulativeAirKermaMGy   float64 `json:"cumulativeAirKermaMGy"`
			DoseAreaProductGyCm2    float64 `json:"doseAreaProductGyCm2"`
			TotalFluoroscopyTimeSec float64 `json:"totalFluoroscopyTimeSec"`
			TotalAcquisitionTimeSec float64 `json:"totalAcquisitionTimeSec"`
			TotalIrradiationEvents  int     `json:"totalIrradiationEvents"`
			DAPOriginalUnit         string  `json:"dapOriginalUnit"`
		} `json:"accumulatedDose"`
		Events []IrradiationEventGeometry `json:"events"`
	}

	if err := json.Unmarshal(data, &canonical); err == nil && (canonical.SOPClassUID != "" || canonical.AccumulatedDose.CumulativeAirKermaMGy > 0) {
		sopUID := canonical.SOPClassUID
		if sopUID == "" {
			sopUID = RDSRSOPClassUID
		}
		return &ParsedRDSR{
			SOPClassUID:      sopUID,
			SOPInstanceUID:   canonical.SOPInstanceUID,
			StudyInstanceUID: canonical.StudyInstanceUID,
			PatientID:        canonical.PatientID,
			PatientName:      canonical.PatientName,
			StudyDate:        canonical.StudyDate,
			StudyTime:        canonical.StudyTime,
			Device: DeviceParticipant{
				DeviceObserverUID: canonical.Device.DeviceObserverUID,
				Manufacturer:      canonical.Device.Manufacturer,
				ModelName:         canonical.Device.ModelName,
				SerialNumber:      canonical.Device.SerialNumber,
				StationName:       canonical.Device.StationName,
				InstitutionName:   canonical.Device.InstitutionName,
				DepartmentName:    canonical.Device.DepartmentName,
			},
			AccumulatedDose: AccumulatedDose{
				CumulativeAirKermaMGy:   canonical.AccumulatedDose.CumulativeAirKermaMGy,
				DoseAreaProductGyCm2:    canonical.AccumulatedDose.DoseAreaProductGyCm2,
				TotalFluoroscopyTimeSec: canonical.AccumulatedDose.TotalFluoroscopyTimeSec,
				TotalAcquisitionTimeSec: canonical.AccumulatedDose.TotalAcquisitionTimeSec,
				TotalIrradiationEvents:  canonical.AccumulatedDose.TotalIrradiationEvents,
				DAPOriginalUnit:         canonical.AccumulatedDose.DAPOriginalUnit,
			},
			Events:         canonical.Events,
			ParseTimestamp: time.Now().UTC().Format(time.RFC3339),
		}, nil
	}

	// Second attempt: Parse as DICOM PS3.18 Tag-indexed JSON
	var dicomMap map[string]struct {
		VR    string        `json:"vr"`
		Value []interface{} `json:"Value"`
	}

	if err := json.Unmarshal(data, &dicomMap); err != nil {
		return nil, fmt.Errorf("failed to parse RDSR json: %w", err)
	}

	getStringVal := func(tag string) string {
		if elem, ok := dicomMap[tag]; ok && len(elem.Value) > 0 {
			if s, ok := elem.Value[0].(string); ok {
				return s
			}
		}
		return ""
	}

	getFloatVal := func(tag string) float64 {
		if elem, ok := dicomMap[tag]; ok && len(elem.Value) > 0 {
			switch v := elem.Value[0].(type) {
			case float64:
				return v
			case int:
				return float64(v)
			case string:
				if f, err := strconv.ParseFloat(v, 64); err == nil {
					return f
				}
			}
		}
		return 0.0
	}

	getIntVal := func(tag string) int {
		if elem, ok := dicomMap[tag]; ok && len(elem.Value) > 0 {
			switch v := elem.Value[0].(type) {
			case float64:
				return int(v)
			case int:
				return v
			case string:
				if i, err := strconv.Atoi(v); err == nil {
					return i
				}
			}
		}
		return 0
	}

	sopClass := getStringVal("00080016")
	if sopClass == "" {
		sopClass = RDSRSOPClassUID
	}

	return &ParsedRDSR{
		SOPClassUID:      sopClass,
		SOPInstanceUID:   getStringVal("00080018"),
		StudyInstanceUID: getStringVal("0020000D"),
		PatientID:        getStringVal("00100020"),
		PatientName:      getStringVal("00100010"),
		StudyDate:        getStringVal("00080020"),
		StudyTime:        getStringVal("00080030"),
		Device: DeviceParticipant{
			Manufacturer:    getStringVal("00080070"),
			ModelName:       getStringVal("00081090"),
			SerialNumber:    getStringVal("00181000"),
			StationName:     getStringVal("00081010"),
			InstitutionName: getStringVal("00080080"),
			DepartmentName:  getStringVal("00081040"),
		},
		AccumulatedDose: AccumulatedDose{
			CumulativeAirKermaMGy:   getFloatVal("0018115A"), // Raw exposure or mapped TID 1020 code
			DoseAreaProductGyCm2:    getFloatVal("0018115E"),
			TotalFluoroscopyTimeSec: getFloatVal("00181155"),
			TotalIrradiationEvents:  getIntVal("00200013"),
		},
		ParseTimestamp: time.Now().UTC().Format(time.RFC3339),
	}, nil
}

// -----------------------------------------------------------------------------
// Binary DICOM Part 10 RDSR Parser
// Decodes tags from fluoroscopy C-Arm C-STORE pushes
// -----------------------------------------------------------------------------

// ParseRDSRBinary extracts TID 1020, TID 1021, and irradiation geometry from binary DICOM Part 10 streams
func ParseRDSRBinary(data []byte) (*ParsedRDSR, error) {
	if len(data) < 132 {
		return nil, errors.New("data buffer too small to be valid DICOM Part 10 stream")
	}

	offset := 0

	// Check standard 128-byte preamble + "DICM" prefix
	if string(data[128:132]) == "DICM" {
		offset = 132
	}

	parsed := &ParsedRDSR{
		SOPClassUID:    RDSRSOPClassUID,
		ParseTimestamp: time.Now().UTC().Format(time.RFC3339),
	}

	var events []IrradiationEventGeometry
	currentEvent := IrradiationEventGeometry{}

	// Read elements sequentially
	for offset+8 <= len(data) {
		group := binary.LittleEndian.Uint16(data[offset : offset+2])
		element := binary.LittleEndian.Uint16(data[offset+2 : offset+4])

		// Check explicit VR (2 characters) vs implicit VR
		var length uint32
		var valOffset int
		vr := string(data[offset+4 : offset+6])

		// Standard explicit VRs with 2-byte reserved padding: OB, OW, OF, SQ, UT, UN
		if vr == "OB" || vr == "OW" || vr == "OF" || vr == "SQ" || vr == "UT" || vr == "UN" {
			if offset+12 > len(data) {
				break
			}
			length = binary.LittleEndian.Uint32(data[offset+8 : offset+12])
			valOffset = offset + 12
			offset = valOffset + int(length)
		} else if isStandardExplicitVR(vr) {
			length = uint32(binary.LittleEndian.Uint16(data[offset+6 : offset+8]))
			valOffset = offset + 8
			offset = valOffset + int(length)
		} else {
			// Implicit VR (Little Endian)
			length = binary.LittleEndian.Uint32(data[offset+4 : offset+8])
			valOffset = offset + 8
			offset = valOffset + int(length)
		}

		if valOffset+int(length) > len(data) || length == 0xFFFFFFFF {
			// Undefined length or end of buffer
			break
		}

		valBytes := data[valOffset : valOffset+int(length)]
		strVal := strings.TrimRight(string(valBytes), "\x00 ")

		// Match DICOM Standard Tags
		switch {
		case group == 0x0008 && element == 0x0016: // SOP Class UID
			parsed.SOPClassUID = strVal
		case group == 0x0008 && element == 0x0018: // SOP Instance UID
			parsed.SOPInstanceUID = strVal
		case group == 0x0020 && element == 0x000D: // Study Instance UID
			parsed.StudyInstanceUID = strVal
		case group == 0x0010 && element == 0x0010: // Patient's Name
			parsed.PatientName = strVal
		case group == 0x0010 && element == 0x0020: // Patient ID
			parsed.PatientID = strVal
		case group == 0x0008 && element == 0x0020: // Study Date
			parsed.StudyDate = strVal
		case group == 0x0008 && element == 0x0030: // Study Time
			parsed.StudyTime = strVal

		// TID 1021: Device Participant
		case group == 0x0008 && element == 0x0070: // Manufacturer
			parsed.Device.Manufacturer = strVal
		case group == 0x0008 && element == 0x1090: // Manufacturer's Model Name
			parsed.Device.ModelName = strVal
		case group == 0x0018 && element == 0x1000: // Device Serial Number
			parsed.Device.SerialNumber = strVal
		case group == 0x0008 && element == 0x1010: // Station Name
			parsed.Device.StationName = strVal
		case group == 0x0008 && element == 0x0080: // Institution Name
			parsed.Device.InstitutionName = strVal
		case group == 0x0008 && element == 0x1040: // Department Name
			parsed.Device.DepartmentName = strVal

		// TID 1020: Accumulated Dose Elements
		case group == 0x0018 && element == 0x115A: // Cumulative Air Kerma at Reference Point (mGy)
			if f, err := strconv.ParseFloat(strVal, 64); err == nil {
				parsed.AccumulatedDose.CumulativeAirKermaMGy = f
			}
		case group == 0x0018 && element == 0x115E: // Dose Area Product Total
			if f, err := strconv.ParseFloat(strVal, 64); err == nil {
				parsed.AccumulatedDose.DoseAreaProductGyCm2 = NormalizeDAPToGyCm2(f, "Gy.cm2")
			}
		case group == 0x0018 && element == 0x1155: // Total Fluoroscopy Time (s)
			if f, err := strconv.ParseFloat(strVal, 64); err == nil {
				parsed.AccumulatedDose.TotalFluoroscopyTimeSec = f
			}
		case group == 0x0018 && element == 0x1150: // Exposure Time / Acquisition Time
			if f, err := strconv.ParseFloat(strVal, 64); err == nil {
				parsed.AccumulatedDose.TotalAcquisitionTimeSec = f
			}
		case group == 0x0020 && element == 0x0013: // Instance / Event Number
			if i, err := strconv.Atoi(strVal); err == nil {
				parsed.AccumulatedDose.TotalIrradiationEvents = i
			}

		// Irradiation Event Geometry: Positioner Angles
		case group == 0x0018 && element == 0x1510: // Positioner Primary Angle (degrees)
			if f, err := strconv.ParseFloat(strVal, 64); err == nil {
				currentEvent.PositionerPrimaryAngle = f
			}
		case group == 0x0018 && element == 0x1511: // Positioner Secondary Angle (degrees)
			if f, err := strconv.ParseFloat(strVal, 64); err == nil {
				currentEvent.PositionerSecondaryAngle = f
				currentEvent.EventIndex = len(events) + 1
				events = append(events, currentEvent)
				currentEvent = IrradiationEventGeometry{}
			}
		}
	}

	parsed.Events = events
	return parsed, nil
}

// isStandardExplicitVR checks whether a 2-char string matches standard 2-byte length VRs
func isStandardExplicitVR(vr string) bool {
	switch vr {
	case "AE", "AS", "AT", "CS", "DA", "DS", "DT", "FL", "FD", "IS", "LO", "LT", "PN", "SH", "SL", "SS", "ST", "TM", "UI", "UL", "US":
		return true
	default:
		return false
	}
}

// ParseRDSR dynamically inspects the header to invoke the appropriate parser
func ParseRDSR(data []byte) (*ParsedRDSR, error) {
	trimmed := bytes.TrimSpace(data)
	if len(trimmed) == 0 {
		return nil, errors.New("cannot parse empty RDSR payload")
	}

	// JSON detection
	if trimmed[0] == '{' || trimmed[0] == '[' {
		return ParseRDSRJson(trimmed)
	}

	// Binary DICOM Part 10 or Tag Buffer
	return ParseRDSRBinary(trimmed)
}
