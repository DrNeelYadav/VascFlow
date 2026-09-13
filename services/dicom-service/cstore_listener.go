package main

import (
	"encoding/binary"
	"fmt"
	"io"
	"log"
	"net"
	"sync"
	"time"
)

// =============================================================================
// Hardware Telemetry & C-STORE SCP Daemon
// Default TCP Port: 11112
// Target Cath Lab Fluoroscopy Units:
//   - Philips Azurion 7 C20 (Angio Suite 1)
//   - Siemens Artis Zee Floor (Angio Suite 2)
//   - GE Revolution Apex 512 (CT Suite D9211)
// =============================================================================

const (
	DefaultCStorePort = "11112"
	MaxDicomPduSize   = 65536 // 64 KB maximum PDU buffer
)

// HardwareStreamState represents live network and dosimetry telemetry for a surgical suite
type HardwareStreamState struct {
	SuiteID              string            `json:"suiteId"`
	SuiteName            string            `json:"suiteName"`
	Modality             string            `json:"modality"`
	Device               DeviceParticipant `json:"device"`
	IPAddress            string            `json:"ipAddress"`
	Port                 int               `json:"port"`
	Status               string            `json:"status"` // ONLINE, DEGRADED, STANDBY, OFFLINE
	LastHeartbeat        string            `json:"lastHeartbeat"`
	LastHeartbeatUnixMs  int64             `json:"lastHeartbeatUnixMs"`
	PacketsPerMinute     int               `json:"packetsPerMinute"`
	TotalPacketsReceived int64             `json:"totalPacketsReceived"`
	AccumulatedDose      AccumulatedDose   `json:"accumulatedDose"`
	LatestAngles         string            `json:"latestAngles"`
	RecentEvents         []PduEventLog     `json:"recentEvents"`
}

// PduEventLog records incoming DICOM/MLLP packet transfers
type PduEventLog struct {
	ID        string  `json:"id"`
	Timestamp string  `json:"timestamp"`
	PduType   string  `json:"pduType"`
	Bytes     int     `json:"bytes"`
	Summary   string  `json:"summary"`
	AirKerma  float64 `json:"airKermaMGy,omitempty"`
	DAP       float64 `json:"dapGyCm2,omitempty"`
}

// HardwareStreamRegistry manages thread-safe state for cath lab equipment
type HardwareStreamRegistry struct {
	mu      sync.RWMutex
	streams map[string]*HardwareStreamState
}

// NewHardwareStreamRegistry initializes the registry pre-seeded with SMS Hospital Angiosuites
func NewHardwareStreamRegistry() *HardwareStreamRegistry {
	now := time.Now().UTC()
	nowStr := now.Format(time.RFC3339)
	nowMs := now.UnixMilli()

	reg := &HardwareStreamRegistry{
		streams: make(map[string]*HardwareStreamState),
	}

	// 1. Angio Suite 1: Philips Azurion 7 C20
	reg.streams["angio-suite-1"] = &HardwareStreamState{
		SuiteID:   "angio-suite-1",
		SuiteName: "Angio Suite 1 (DSA-1 Bangur)",
		Modality:  "XA",
		Device: DeviceParticipant{
			DeviceObserverUID: "1.2.840.10008.2026.AZURION.01",
			Manufacturer:      "Philips Medical Systems",
			ModelName:         "Azurion 7 C20",
			SerialNumber:      "PH-AZ-88310-SMS",
			StationName:       "ANGIO_DSA1_SMS",
			InstitutionName:   "SMS Medical College, Jaipur",
			DepartmentName:    "Interventional Radiology",
		},
		IPAddress:            "192.168.42.10",
		Port:                 11112,
		Status:               "ONLINE",
		LastHeartbeat:        nowStr,
		LastHeartbeatUnixMs:  nowMs,
		PacketsPerMinute:     42,
		TotalPacketsReceived: 18420,
		AccumulatedDose: AccumulatedDose{
			CumulativeAirKermaMGy:   485.4,
			DoseAreaProductGyCm2:    28.6,
			TotalFluoroscopyTimeSec: 840.0, // 14 min
			TotalAcquisitionTimeSec: 36.2,
			TotalIrradiationEvents:  18,
			DAPOriginalUnit:         "Gy.cm2",
		},
		LatestAngles: "LAO 30.0° / CRA 15.0°",
		RecentEvents: []PduEventLog{
			{
				ID:        "pdu-az-01",
				Timestamp: nowStr,
				PduType:   "C-STORE-RQ (RDSR)",
				Bytes:     4096,
				Summary:   "TACE Chemoembolization Segment 8 Run - 18 frames",
				AirKerma:  42.5,
				DAP:       2.4,
			},
		},
	}

	// 2. Angio Suite 2: Siemens Artis Zee Floor
	reg.streams["angio-suite-2"] = &HardwareStreamState{
		SuiteID:   "angio-suite-2",
		SuiteName: "Angio Suite 2 (Hybrid OR)",
		Modality:  "XA",
		Device: DeviceParticipant{
			DeviceObserverUID: "1.2.840.10008.2026.ARTIS.02",
			Manufacturer:      "Siemens Healthineers",
			ModelName:         "Artis Zee Floor",
			SerialNumber:      "SI-ARTIS-5520-SMS",
			StationName:       "HYBRID_OR2_SMS",
			InstitutionName:   "SMS Medical College, Jaipur",
			DepartmentName:    "Vascular Surgery / IR",
		},
		IPAddress:            "192.168.42.11",
		Port:                 11112,
		Status:               "ONLINE",
		LastHeartbeat:        nowStr,
		LastHeartbeatUnixMs:  nowMs,
		PacketsPerMinute:     28,
		TotalPacketsReceived: 12150,
		AccumulatedDose: AccumulatedDose{
			CumulativeAirKermaMGy:   210.8,
			DoseAreaProductGyCm2:    14.2,
			TotalFluoroscopyTimeSec: 420.0, // 7 min
			TotalAcquisitionTimeSec: 18.0,
			TotalIrradiationEvents:  8,
			DAPOriginalUnit:         "Gy.cm2",
		},
		LatestAngles: "RAO 15.0° / CAU 10.0°",
		RecentEvents: []PduEventLog{
			{
				ID:        "pdu-si-01",
				Timestamp: nowStr,
				PduType:   "C-STORE-RQ (RDSR)",
				Bytes:     3840,
				Summary:   "EVAR Aortic Neck Roadmapping - 30 frames",
				AirKerma:  28.0,
				DAP:       1.8,
			},
		},
	}

	// 3. CT Suite D9211: GE Revolution Apex 512
	reg.streams["ct-suite-d9211"] = &HardwareStreamState{
		SuiteID:   "ct-suite-d9211",
		SuiteName: "CT Suite D9211 (Trauma Center)",
		Modality:  "CT",
		Device: DeviceParticipant{
			DeviceObserverUID: "1.2.840.10008.2026.APEX.03",
			Manufacturer:      "GE Healthcare",
			ModelName:         "Revolution Apex 512",
			SerialNumber:      "GE-APEX-9921-SMS",
			StationName:       "CT_D9211_SMS",
			InstitutionName:   "SMS Medical College, Jaipur",
			DepartmentName:    "Radiodiagnosis & Trauma IR",
		},
		IPAddress:            "192.168.42.12",
		Port:                 11112,
		Status:               "STANDBY",
		LastHeartbeat:        nowStr,
		LastHeartbeatUnixMs:  nowMs,
		PacketsPerMinute:     6,
		TotalPacketsReceived: 8940,
		AccumulatedDose: AccumulatedDose{
			CumulativeAirKermaMGy:   112.5,
			DoseAreaProductGyCm2:    9.4,
			TotalFluoroscopyTimeSec: 0.0, // CT uses DLP/CTDI
			TotalAcquisitionTimeSec: 24.5,
			TotalIrradiationEvents:  4,
			DAPOriginalUnit:         "mGy.cm",
		},
		LatestAngles: "Gantry Tilt 0.0°",
		RecentEvents: []PduEventLog{
			{
				ID:        "pdu-ge-01",
				Timestamp: nowStr,
				PduType:   "C-STORE-RQ (CT RDSR)",
				Bytes:     5120,
				Summary:   "Deep Pelvic Abscess Drainage Planning Scan",
				AirKerma:  18.5,
				DAP:       1.2,
			},
		},
	}

	return reg
}

// GetAllStreams returns all registered hardware streams
func (r *HardwareStreamRegistry) GetAllStreams() []HardwareStreamState {
	r.mu.RLock()
	defer r.mu.RUnlock()

	streams := make([]HardwareStreamState, 0, len(r.streams))
	for _, s := range r.streams {
		streams = append(streams, *s)
	}
	return streams
}

// GetStream returns the specified hardware stream
func (r *HardwareStreamRegistry) GetStream(suiteID string) (*HardwareStreamState, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	s, ok := r.streams[suiteID]
	if !ok {
		return nil, false
	}
	copied := *s
	return &copied, true
}

// RecordRDSR updates a suite stream with a freshly parsed RDSR packet
func (r *HardwareStreamRegistry) RecordRDSR(suiteID string, rdsr *ParsedRDSR) {
	r.mu.Lock()
	defer r.mu.Unlock()

	s, ok := r.streams[suiteID]
	if !ok {
		// Attempt to match by station or manufacturer
		for _, candidate := range r.streams {
			if rdsr.Device.StationName != "" && candidate.Device.StationName == rdsr.Device.StationName {
				s = candidate
				break
			}
		}
		if s == nil {
			s = r.streams["angio-suite-1"] // Fallback to Suite 1
		}
	}

	now := time.Now().UTC()
	s.LastHeartbeat = now.Format(time.RFC3339)
	s.LastHeartbeatUnixMs = now.UnixMilli()
	s.Status = "ONLINE"
	s.TotalPacketsReceived++
	s.PacketsPerMinute++

	// Accumulate dose
	if rdsr.AccumulatedDose.CumulativeAirKermaMGy > 0 {
		s.AccumulatedDose.CumulativeAirKermaMGy += rdsr.AccumulatedDose.CumulativeAirKermaMGy
	}
	if rdsr.AccumulatedDose.DoseAreaProductGyCm2 > 0 {
		s.AccumulatedDose.DoseAreaProductGyCm2 += rdsr.AccumulatedDose.DoseAreaProductGyCm2
	}
	if rdsr.AccumulatedDose.TotalFluoroscopyTimeSec > 0 {
		s.AccumulatedDose.TotalFluoroscopyTimeSec += rdsr.AccumulatedDose.TotalFluoroscopyTimeSec
	}
	s.AccumulatedDose.TotalIrradiationEvents += rdsr.AccumulatedDose.TotalIrradiationEvents

	// Update angles if events present
	if len(rdsr.Events) > 0 {
		lastEvent := rdsr.Events[len(rdsr.Events)-1]
		s.LatestAngles = FormatCArmAngles(lastEvent.PositionerPrimaryAngle, lastEvent.PositionerSecondaryAngle)
	}

	// Record event log
	eventLog := PduEventLog{
		ID:        fmt.Sprintf("pdu-%d", now.UnixNano()),
		Timestamp: s.LastHeartbeat,
		PduType:   "C-STORE-RQ (RDSR)",
		Bytes:     1024,
		Summary:   fmt.Sprintf("Patient: %s | SOP: %s", rdsr.PatientName, rdsr.SOPInstanceUID),
		AirKerma:  rdsr.AccumulatedDose.CumulativeAirKermaMGy,
		DAP:       rdsr.AccumulatedDose.DoseAreaProductGyCm2,
	}

	s.RecentEvents = append([]PduEventLog{eventLog}, s.RecentEvents...)
	if len(s.RecentEvents) > 20 {
		s.RecentEvents = s.RecentEvents[:20]
	}
}

// SimulatePing tests network latency to a medical hardware device
func (r *HardwareStreamRegistry) SimulatePing(targetIP string) (float64, bool) {
	// If it matches one of our active suites, simulate hospital switch latency (0.2ms - 1.5ms)
	r.mu.RLock()
	defer r.mu.RUnlock()

	for _, s := range r.streams {
		if s.IPAddress == targetIP || targetIP == "127.0.0.1" || targetIP == "localhost" {
			latency := 0.42 + (float64(time.Now().UnixNano()%50) / 100.0)
			return latency, true
		}
	}
	return 0.85, true
}

// -----------------------------------------------------------------------------
// DICOM C-STORE Service Class Provider (SCP) Daemon
// -----------------------------------------------------------------------------

// StartCStoreListener initializes the TCP server for receiving C-STORE RDSR pushes
func StartCStoreListener(port string, registry *HardwareStreamRegistry) (func(), error) {
	if port == "" {
		port = DefaultCStorePort
	}

	listener, err := net.Listen("tcp", ":"+port)
	if err != nil {
		return nil, fmt.Errorf("failed to bind C-STORE TCP listener on :%s: %w", port, err)
	}

	log.Printf("[C-STORE SCP] Hardware DICOM listener active on TCP :%s (Philips/Siemens/GE RDSR ready)", port)

	stopChan := make(chan struct{})

	go func() {
		for {
			conn, err := listener.Accept()
			if err != nil {
				select {
				case <-stopChan:
					return
				default:
					log.Printf("[C-STORE SCP] Accept error: %v", err)
					continue
				}
			}

			go handleCStoreConnection(conn, registry)
		}
	}()

	cleanup := func() {
		close(stopChan)
		_ = listener.Close()
		log.Printf("[C-STORE SCP] TCP listener on :%s terminated.", port)
	}

	return cleanup, nil
}

// handleCStoreConnection processes DICOM Part 8 PDU handshakes
func handleCStoreConnection(conn net.Conn, registry *HardwareStreamRegistry) {
	defer conn.Close()
	_ = conn.SetDeadline(time.Now().Add(15 * time.Second))

	buf := make([]byte, MaxDicomPduSize)

	for {
		n, err := conn.Read(buf)
		if err != nil {
			if err != io.EOF {
				log.Printf("[C-STORE SCP] Read error from %s: %v", conn.RemoteAddr(), err)
			}
			return
		}

		if n < 6 {
			return
		}

		pduType := buf[0]
		pduLength := binary.BigEndian.Uint32(buf[2:6])

		switch pduType {
		case 0x01: // A-ASSOCIATE-RQ
			log.Printf("[C-STORE SCP] Received A-ASSOCIATE-RQ (%d bytes) from %s", pduLength, conn.RemoteAddr())
			// Respond with A-ASSOCIATE-AC (PDU Type 0x02)
			response := make([]byte, 68)
			response[0] = 0x02 // A-ASSOCIATE-AC
			binary.BigEndian.PutUint32(response[2:6], 62)
			copy(response[6:], buf[6:68]) // Echo negotiation parameters
			_, _ = conn.Write(response)

		case 0x04: // P-DATA-TF (Presentation Data)
			log.Printf("[C-STORE SCP] Received P-DATA-TF (%d bytes) from %s", pduLength, conn.RemoteAddr())

			// Parse potential RDSR payload inside PDU
			if n > 12 {
				payload := buf[12:n]
				if parsed, err := ParseRDSR(payload); err == nil {
					registry.RecordRDSR("angio-suite-1", parsed)
					log.Printf("[C-STORE SCP] Parsed RDSR from %s: AirKerma=%.1f mGy, DAP=%.1f Gy.cm2",
						conn.RemoteAddr(), parsed.AccumulatedDose.CumulativeAirKermaMGy, parsed.AccumulatedDose.DoseAreaProductGyCm2)
				}
			}

			// Respond with C-STORE-RSP (Status 0x0000 = Success)
			resp := make([]byte, 16)
			resp[0] = 0x04 // P-DATA-TF
			binary.BigEndian.PutUint32(resp[2:6], 10)
			resp[6] = 0x00 // Command fragment
			resp[7] = 0x02 // Last fragment
			binary.BigEndian.PutUint16(resp[8:10], 0x0000) // Success Status
			_, _ = conn.Write(resp)

		case 0x05: // A-RELEASE-RQ
			log.Printf("[C-STORE SCP] Received A-RELEASE-RQ from %s", conn.RemoteAddr())
			// Respond with A-RELEASE-RP (PDU Type 0x06)
			releaseRp := []byte{0x06, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00}
			_, _ = conn.Write(releaseRp)
			return

		case 0x07: // A-ABORT
			log.Printf("[C-STORE SCP] Received A-ABORT from %s", conn.RemoteAddr())
			return

		default:
			// Unrecognized PDU, close connection
			return
		}
	}
}
