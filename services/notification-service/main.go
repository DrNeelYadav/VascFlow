package main

import (
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"sync"
	"sync/atomic"
	"syscall"
	"time"
)

// ClinicalEventType defines high-priority clinical alert triggers across hospital angio suites.
type ClinicalEventType string

const (
	EventStatCaseBooked          ClinicalEventType = "STAT_CASE_BOOKED"
	EventCiAkiWarning            ClinicalEventType = "CI_AKI_WARNING"
	EventCriticalContrastReaction ClinicalEventType = "CRITICAL_CONTRAST_REACTION"
	EventCArmRadiationLimit      ClinicalEventType = "C_ARM_RADIATION_LIMIT"
	EventScheduleChange          ClinicalEventType = "SCHEDULE_CHANGE"
)

// PlatformType identifies the mobile operating system.
type PlatformType string

const (
	PlatformIOS     PlatformType = "ios"
	PlatformAndroid PlatformType = "android"
)

// DeviceRegistration records an authenticated clinician's push token tied to their hospital tenant.
type DeviceRegistration struct {
	DeviceToken string       `json:"deviceToken"`
	Platform    PlatformType `json:"platform"`
	ClinicianID string       `json:"clinicianId"`
	TenantID    string       `json:"tenantId"`
	RoleTier    string       `json:"roleTier"`
	RegisteredAt time.Time    `json:"registeredAt"`
}

// BroadcastRequest specifies the incoming notification payload to dispatch.
type BroadcastRequest struct {
	TenantID   string            `json:"tenantId"`
	EventType  ClinicalEventType `json:"eventType"`
	Title      string            `json:"title"`
	Body       string            `json:"body"`
	Priority   string            `json:"priority"` // "HIGH", "CRITICAL", "NORMAL"
	TargetRole string            `json:"targetRole,omitempty"` // Optional filter e.g. "Faculty", "Resident"
	PatientID  string            `json:"patientId,omitempty"`
	SuiteName  string            `json:"suiteName,omitempty"`
	DeepLink   string            `json:"deepLink,omitempty"`
	Metadata   map[string]string `json:"metadata,omitempty"`
}

// APNSPayload represents the Apple Push Notification Service HTTP/2 wire format.
type APNSPayload struct {
	APS struct {
		Alert struct {
			Title string `json:"title"`
			Body  string `json:"body"`
		} `json:"alert"`
		Sound            string `json:"sound"`
		Badge            int    `json:"badge"`
		ContentAvailable int    `json:"content-available"`
		Category         string `json:"category"`
	} `json:"aps"`
	CustomData map[string]interface{} `json:"customData"`
}

// FCMPayload represents the Firebase Cloud Messaging v1 wire format.
type FCMPayload struct {
	Message struct {
		Token string `json:"token"`
		Notification struct {
			Title string `json:"title"`
			Body  string `json:"body"`
		} `json:"notification"`
		Data map[string]string `json:"data"`
		Android struct {
			Priority     string `json:"priority"` // "high" or "normal"
			Notification struct {
				ChannelID string `json:"channel_id"`
				Sound     string `json:"sound"`
			} `json:"notification"`
		} `json:"android"`
	} `json:"message"`
}

// BroadcastResponse summarizes the dispatch outcome across APNS and FCM.
type BroadcastResponse struct {
	MessageID          string   `json:"messageId"`
	TenantID           string   `json:"tenantId"`
	EventType          string   `json:"eventType"`
	Priority           string   `json:"priority"`
	TotalRecipients    int      `json:"totalRecipients"`
	SuccessfulDispatches int    `json:"successfulDispatches"`
	FailedDispatches   int      `json:"failedDispatches"`
	DispatchedPlatforms []string `json:"dispatchedPlatforms"`
	LatencyMs          float64  `json:"latencyMs"`
	Timestamp          string   `json:"timestamp"`
}

// NotificationServer manages the state, device registry, and metrics for the notification service.
type NotificationServer struct {
	mu              sync.RWMutex
	devices         map[string]DeviceRegistration // key: deviceToken
	startTime       time.Time
	logger          *slog.Logger
	broadcastCount  uint64
	alertStatCount  uint64
	alertAkiCount   uint64
	devicesCount    uint64
}

func NewNotificationServer() *NotificationServer {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
		Level: slog.LevelInfo,
	}))

	s := &NotificationServer{
		devices:   make(map[string]DeviceRegistration),
		startTime: time.Now(),
		logger:    logger,
	}

	// Pre-seed mock device registrations for SMS Jaipur and AIIMS Jodhpur for testing
	s.registerDevice(DeviceRegistration{
		DeviceToken:  "apns_sms_dr_roy_token_2026",
		Platform:     PlatformIOS,
		ClinicianID:  "dr.roy@hospital.lan",
		TenantID:     "tenant_sms_jaipur",
		RoleTier:     "Faculty",
		RegisteredAt: time.Now(),
	})
	s.registerDevice(DeviceRegistration{
		DeviceToken:  "fcm_sms_resident_fellow_token_2026",
		Platform:     PlatformAndroid,
		ClinicianID:  "fellow@hospital.lan",
		TenantID:     "tenant_sms_jaipur",
		RoleTier:     "Resident",
		RegisteredAt: time.Now(),
	})
	s.registerDevice(DeviceRegistration{
		DeviceToken:  "apns_aiims_consultant_token_2026",
		Platform:     PlatformIOS,
		ClinicianID:  "consultant@aiims.edu",
		TenantID:     "tenant_aiims_jodhpur",
		RoleTier:     "Faculty",
		RegisteredAt: time.Now(),
	})

	return s
}

func (s *NotificationServer) registerDevice(d DeviceRegistration) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if _, exists := s.devices[d.DeviceToken]; !exists {
		atomic.AddUint64(&s.devicesCount, 1)
	}
	s.devices[d.DeviceToken] = d
}

// GenerateTraceID generates a pseudo-random 16-hex-char OpenTelemetry trace identifier.
func GenerateTraceID() string {
	b := make([]byte, 8)
	if _, err := rand.Read(b); err != nil {
		return fmt.Sprintf("trace-%d", time.Now().UnixNano())
	}
	return hex.EncodeToString(b)
}

// FormatAPNSPayload converts a clinical broadcast request to an APNS alert payload.
func FormatAPNSPayload(req BroadcastRequest) APNSPayload {
	sound := "default"
	if req.Priority == "CRITICAL" || req.EventType == EventStatCaseBooked {
		sound = "alarm_stat.wav"
	} else if req.EventType == EventCiAkiWarning {
		sound = "warning_chime.wav"
	}

	p := APNSPayload{}
	p.APS.Alert.Title = req.Title
	p.APS.Alert.Body = req.Body
	p.APS.Sound = sound
	p.APS.Badge = 1
	p.APS.ContentAvailable = 1
	p.APS.Category = string(req.EventType)

	p.CustomData = map[string]interface{}{
		"tenantId":   req.TenantID,
		"eventType":  string(req.EventType),
		"priority":   req.Priority,
		"patientId":  req.PatientID,
		"suiteName":  req.SuiteName,
		"deepLink":   req.DeepLink,
		"dispatched": time.Now().UTC().Format(time.RFC3339),
	}
	for k, v := range req.Metadata {
		p.CustomData[k] = v
	}

	return p
}

// FormatFCMPayload converts a clinical broadcast request to an FCM alert payload.
func FormatFCMPayload(req BroadcastRequest, deviceToken string) FCMPayload {
	channelID := "clinical_alerts"
	sound := "default"
	if req.Priority == "CRITICAL" || req.EventType == EventStatCaseBooked {
		channelID = "stat_emergency"
		sound = "alarm_stat"
	}

	p := FCMPayload{}
	p.Message.Token = deviceToken
	p.Message.Notification.Title = req.Title
	p.Message.Notification.Body = req.Body
	p.Message.Android.Priority = "high"
	p.Message.Android.Notification.ChannelID = channelID
	p.Message.Android.Notification.Sound = sound

	p.Message.Data = map[string]string{
		"tenantId":  req.TenantID,
		"eventType": string(req.EventType),
		"priority":  req.Priority,
		"patientId": req.PatientID,
		"suiteName": req.SuiteName,
		"deepLink":  req.DeepLink,
	}
	for k, v := range req.Metadata {
		p.Message.Data[k] = v
	}

	return p
}

// handleHealth returns microservice availability and metadata.
func (s *NotificationServer) handleHealth(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, `{"error":"Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	s.mu.RLock()
	devCount := len(s.devices)
	s.mu.RUnlock()

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(map[string]interface{}{
		"service":           "notification-service",
		"status":            "healthy",
		"version":           "1.0.0",
		"uptimeSeconds":     time.Since(s.startTime).Seconds(),
		"registeredDevices": devCount,
		"timestamp":         time.Now().UTC().Format(time.RFC3339),
	})
}

// handleRegisterDevice registers a mobile client device token.
func (s *NotificationServer) handleRegisterDevice(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, `{"error":"Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	var d DeviceRegistration
	if err := json.NewDecoder(r.Body).Decode(&d); err != nil {
		http.Error(w, `{"error":"Invalid JSON payload"}`, http.StatusBadRequest)
		return
	}

	if strings.TrimSpace(d.DeviceToken) == "" || strings.TrimSpace(d.TenantID) == "" {
		http.Error(w, `{"error":"deviceToken and tenantId are required"}`, http.StatusBadRequest)
		return
	}

	if d.Platform != PlatformIOS && d.Platform != PlatformAndroid {
		d.Platform = PlatformAndroid
	}
	if d.RegisteredAt.IsZero() {
		d.RegisteredAt = time.Now().UTC()
	}

	s.registerDevice(d)

	s.logger.Info("Registered push notification device",
		"clinicianId", d.ClinicianID,
		"tenantId", d.TenantID,
		"platform", d.Platform,
	)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	_ = json.NewEncoder(w).Encode(map[string]interface{}{
		"status":   "registered",
		"token":    d.DeviceToken,
		"tenantId": d.TenantID,
		"platform": d.Platform,
	})
}

// handleBroadcast dispatches notifications strictly to devices registered under the request's tenantId.
func (s *NotificationServer) handleBroadcast(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, `{"error":"Method not allowed"}`, http.StatusMethodNotAllowed)
		return
	}

	start := time.Now()
	traceID := r.Header.Get("X-Trace-ID")
	if traceID == "" {
		traceID = GenerateTraceID()
	}

	var req BroadcastRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, `{"error":"Invalid broadcast request payload"}`, http.StatusBadRequest)
		return
	}

	// Validate required fields
	req.TenantID = strings.TrimSpace(req.TenantID)
	if req.TenantID == "" {
		// Fallback to X-Tenant-ID header if present
		req.TenantID = strings.TrimSpace(r.Header.Get("X-Tenant-ID"))
	}
	if req.TenantID == "" {
		http.Error(w, `{"error":"tenantId is mandatory for notification broadcast"}`, http.StatusBadRequest)
		return
	}

	if req.Title == "" || req.Body == "" {
		http.Error(w, `{"error":"title and body are mandatory fields"}`, http.StatusBadRequest)
		return
	}

	if req.Priority == "" {
		req.Priority = "NORMAL"
	}

	// Increment metrics
	atomic.AddUint64(&s.broadcastCount, 1)
	if req.EventType == EventStatCaseBooked {
		atomic.AddUint64(&s.alertStatCount, 1)
	} else if req.EventType == EventCiAkiWarning {
		atomic.AddUint64(&s.alertAkiCount, 1)
	}

	// Find matching devices within the same tenant
	s.mu.RLock()
	var targets []DeviceRegistration
	for _, dev := range s.devices {
		if dev.TenantID == req.TenantID {
			if req.TargetRole == "" || strings.EqualFold(dev.RoleTier, req.TargetRole) {
				targets = append(targets, dev)
			}
		}
	}
	s.mu.RUnlock()

	platformsMap := make(map[string]bool)
	successCount := 0
	failedCount := 0

	for _, dev := range targets {
		platformsMap[string(dev.Platform)] = true
		// Simulate wire dispatch to APNS / FCM
		if dev.Platform == PlatformIOS {
			_ = FormatAPNSPayload(req)
			successCount++
		} else {
			_ = FormatFCMPayload(req, dev.DeviceToken)
			successCount++
		}
	}

	var platforms []string
	for p := range platformsMap {
		platforms = append(platforms, p)
	}

	messageID := fmt.Sprintf("msg_%s_%d", req.TenantID, time.Now().UnixNano())
	elapsed := float64(time.Since(start).Microseconds()) / 1000.0

	s.logger.Info("Dispatched clinical broadcast",
		"messageId", messageID,
		"tenantId", req.TenantID,
		"eventType", req.EventType,
		"recipients", len(targets),
		"latencyMs", elapsed,
		"traceId", traceID,
	)

	resp := BroadcastResponse{
		MessageID:            messageID,
		TenantID:             req.TenantID,
		EventType:            string(req.EventType),
		Priority:             req.Priority,
		TotalRecipients:      len(targets),
		SuccessfulDispatches: successCount,
		FailedDispatches:     failedCount,
		DispatchedPlatforms:  platforms,
		LatencyMs:            elapsed,
		Timestamp:            time.Now().UTC().Format(time.RFC3339),
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("X-Trace-ID", traceID)
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(resp)
}

// handleMetrics exports Prometheus metrics.
func (s *NotificationServer) handleMetrics(w http.ResponseWriter, r *http.Request) {
	s.mu.RLock()
	devCount := len(s.devices)
	s.mu.RUnlock()

	w.Header().Set("Content-Type", "text/plain; version=0.0.4")
	w.WriteHeader(http.StatusOK)

	fmt.Fprintf(w, "# HELP notifications_broadcast_total Total number of notification broadcasts initiated.\n")
	fmt.Fprintf(w, "# TYPE notifications_broadcast_total counter\n")
	fmt.Fprintf(w, "notifications_broadcast_total %d\n", atomic.LoadUint64(&s.broadcastCount))

	fmt.Fprintf(w, "# HELP notifications_stat_cases_total Total number of emergency STAT case alerts.\n")
	fmt.Fprintf(w, "# TYPE notifications_stat_cases_total counter\n")
	fmt.Fprintf(w, "notifications_stat_cases_total %d\n", atomic.LoadUint64(&s.alertStatCount))

	fmt.Fprintf(w, "# HELP notifications_ci_aki_warnings_total Total number of contrast-induced nephrotoxicity warnings.\n")
	fmt.Fprintf(w, "# TYPE notifications_ci_aki_warnings_total counter\n")
	fmt.Fprintf(w, "notifications_ci_aki_warnings_total %d\n", atomic.LoadUint64(&s.alertAkiCount))

	fmt.Fprintf(w, "# HELP notifications_registered_devices_current Current registered active device tokens.\n")
	fmt.Fprintf(w, "# TYPE notifications_registered_devices_current gauge\n")
	fmt.Fprintf(w, "notifications_registered_devices_current %d\n", devCount)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8084"
	}

	server := NewNotificationServer()
	mux := http.NewServeMux()

	mux.HandleFunc("/health", server.handleHealth)
	mux.HandleFunc("/api/v1/notifications/broadcast", server.handleBroadcast)
	mux.HandleFunc("/api/v1/notifications/register-device", server.handleRegisterDevice)
	mux.HandleFunc("/metrics", server.handleMetrics)

	httpServer := &http.Server{
		Addr:         ":" + port,
		Handler:      mux,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	stopChan := make(chan os.Signal, 1)
	signal.Notify(stopChan, os.Interrupt, syscall.SIGTERM)

	go func() {
		server.logger.Info("Starting Vascule OS Push Notification Service", "port", port)
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			server.logger.Error("Notification server terminated with error", "error", err)
		}
	}()

	<-stopChan
	server.logger.Info("Shutting down notification service gracefully...")
}
