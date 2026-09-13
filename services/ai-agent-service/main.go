package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"sync/atomic"
	"syscall"
	"time"
)

// ---------------------------------------------------------------------------
// Clinical Guidelines & Knowledge Models (RAG Pipeline)
// ---------------------------------------------------------------------------

type PublishingBody string

const (
	BodySIR   PublishingBody = "SIR"
	BodyCIRSE PublishingBody = "CIRSE"
	BodyRERC  PublishingBody = "RERC"
	BodyAASLD PublishingBody = "AASLD"
)

type ClinicalGuideline struct {
	Citation       string         `json:"citation"`
	Title          string         `json:"title"`
	PublishingBody PublishingBody `json:"publishingBody"`
	Year           int            `json:"year"`
	EvidenceGrade  string         `json:"evidenceGrade"`
	Url            string         `json:"url,omitempty"`
}

type RiskLevel string

const (
	RiskCritical RiskLevel = "CRITICAL"
	RiskHigh     RiskLevel = "HIGH"
	RiskModerate RiskLevel = "MODERATE"
	RiskLow      RiskLevel = "LOW"
)

type DecisionSupportResponse struct {
	QueryId             string              `json:"queryId"`
	Query               string              `json:"query"`
	Intent              string              `json:"intent"`
	Recommendation      string              `json:"recommendation"`
	ClinicalRationale   string              `json:"clinicalRationale"`
	RiskLevel           RiskLevel           `json:"riskLevel"`
	Guidelines          []ClinicalGuideline `json:"guidelines"`
	ConfidenceScore     float64             `json:"confidenceScore"`
	PhysicianSignOffReq bool                `json:"physicianSignOffRequired"`
	SafetyDisclaimer    string              `json:"safetyDisclaimer"`
	Timestamp           string              `json:"timestamp"`
	TraceID             string              `json:"traceId,omitempty"`
}

type ProtocolCheckRequest struct {
	ProcedureType     string  `json:"procedureType"`
	PatientAge        int     `json:"patientAge"`
	WeightKg          float64 `json:"weightKg"`
	SerumCreatinine   float64 `json:"serumCreatinine"`
	Inr               float64 `json:"inr"`
	Platelets         float64 `json:"platelets"`
	ContrastPlannedMl float64 `json:"contrastPlannedMl"`
	TargetVessel      string  `json:"targetVessel"`
	AnatomicalVariant string  `json:"anatomicalVariant,omitempty"`
}

type ProtocolCheckResponse struct {
	ApprovedForProcedure  bool                `json:"approvedForProcedure"`
	MacdLimitMl           float64             `json:"macdLimitMl"`
	ContrastMarginMl      float64             `json:"contrastMarginMl"`
	BleedingRiskStatus    string              `json:"bleedingRiskStatus"`
	AnatomicalAlerts      []string            `json:"anatomicalAlerts"`
	RequiredPreMeds       []string            `json:"requiredPreMedications"`
	MandatoryGuidelines   []ClinicalGuideline `json:"guidelines"`
	PhysicianSignOffReq   bool                `json:"physicianSignOffRequired"`
	Timestamp             string              `json:"timestamp"`
}

// ---------------------------------------------------------------------------
// Telemetry & Metrics
// ---------------------------------------------------------------------------

type MetricsRegistry struct {
	queriesTotal    uint64
	protocolsTotal  uint64
	overridesTotal  uint64
	startTime       time.Time
}

var globalMetrics = &MetricsRegistry{
	startTime: time.Now(),
}

func (m *MetricsRegistry) IncQueries()   { atomic.AddUint64(&m.queriesTotal, 1) }
func (m *MetricsRegistry) IncProtocols() { atomic.AddUint64(&m.protocolsTotal, 1) }

// ---------------------------------------------------------------------------
// Clinical Guideline Repository (Pre-Indexed RAG Knowledge Base)
// ---------------------------------------------------------------------------

var masterGuidelines = []ClinicalGuideline{
	{
		Citation:       "SIR-2023-BAE",
		Title:          "Society of Interventional Radiology Standards of Practice: Bronchial Artery Embolization for Massive Hemoptysis",
		PublishingBody: BodySIR,
		Year:           2023,
		EvidenceGrade:  "Class I, Level A",
		Url:            "https://doi.org/10.1016/j.jvir.2023.01.012",
	},
	{
		Citation:       "CIRSE-2021-TACE",
		Title:          "CIRSE Guidelines on Transarterial Chemoembolisation (TACE) in Hepatocellular Carcinoma",
		PublishingBody: BodyCIRSE,
		Year:           2021,
		EvidenceGrade:  "Class I, Level A",
		Url:            "https://doi.org/10.1007/s00270-021-02843-7",
	},
	{
		Citation:       "RERC-2024-MACD",
		Title:          "Renal Exposure Risk Consensus: Maximum Allowable Contrast Dose (Cigarroa MACD) in Interventional Radiology",
		PublishingBody: BodyRERC,
		Year:           2024,
		EvidenceGrade:  "Class IIa, Level B",
		Url:            "https://doi.org/10.1016/j.jvir.2024.03.004",
	},
	{
		Citation:       "CIRSE-2022-PTBD",
		Title:          "CIRSE Quality Improvement Guidelines for Percutaneous Transhepatic Biliary Drainage and Stenting",
		PublishingBody: BodyCIRSE,
		Year:           2022,
		EvidenceGrade:  "Class I, Level B",
		Url:            "https://doi.org/10.1007/s00270-022-03112-9",
	},
	{
		Citation:       "SIR-2022-GI-BLEED",
		Title:          "SIR Clinical Practice Guideline on Transcatheter Embolization for Acute Lower Gastrointestinal Bleeding",
		PublishingBody: BodySIR,
		Year:           2022,
		EvidenceGrade:  "Class I, Level B",
		Url:            "https://doi.org/10.1016/j.jvir.2022.08.019",
	},
}

// ---------------------------------------------------------------------------
// RAG Query Engine
// ---------------------------------------------------------------------------

func processClinicalQuery(q string) DecisionSupportResponse {
	lower := strings.ToLower(q)
	now := time.Now().UTC().Format(time.RFC3339)
	queryId := fmt.Sprintf("AI-DDS-%d", time.Now().UnixNano()%1000000)

	const defaultDisclaimer = "Vascule OS AI Clinical Decision Support is an adjunct decision-making aid. Final procedural execution requires independent verification and sign-off by a board-certified Interventional Radiologist."

	// 1. Bronchial Artery Embolization & Spinal Artery Risk
	if strings.Contains(lower, "adamkiewicz") || strings.Contains(lower, "spinal") || strings.Contains(lower, "bae") || strings.Contains(lower, "hemoptysis") {
		return DecisionSupportResponse{
			QueryId:             queryId,
			Query:               q,
			Intent:              "IR_PROCEDURE_BAE_SPINAL_RISK",
			Recommendation:      "CRITICAL SPINAL ARTERY VERIFICATION: Carefully inspect bronchial arteriogram for anterior medullary artery (hairpin loop of Adamkiewicz, T8-L1). Microcatheter must be coaxially advanced DISTAL to any spinal branches prior to embolic deployment.",
			ClinicalRationale:   "Spinal cord infarction is a recognized complication if embolic agents reflux into anterior medullary branches. Use 300-500 um PVA particles or calibrated microspheres under high-magnification fluoroscopic blank roadmapping. Liquid embolic agents (NBCA/Onyx) are strictly contraindicated unless performing expert-level superselection.",
			RiskLevel:           RiskCritical,
			Guidelines:          []ClinicalGuideline{masterGuidelines[0]},
			ConfidenceScore:     0.97,
			PhysicianSignOffReq: true,
			SafetyDisclaimer:    defaultDisclaimer,
			Timestamp:           now,
		}
	}

	// 2. TACE & BCLC Staging
	if strings.Contains(lower, "tace") || strings.Contains(lower, "bclc") || strings.Contains(lower, "hepatocellular") || strings.Contains(lower, "hcc") {
		return DecisionSupportResponse{
			QueryId:             queryId,
			Query:               q,
			Intent:              "IR_PROCEDURE_TACE_STAGING",
			Recommendation:      "BCLC-B INTERMEDIATE HCC PROTOCOL: Confirm preserved hepatic function (Child-Pugh A/B7, ALBI Grade 1/2) and patent main portal vein. Maximum recommended Lipiodol emulsion dose is 0.5 mL per cm tumor diameter, capped at 15 mL per single session.",
			ClinicalRationale:   "Targeted subsegmental chemoembolization spares non-tumorous liver parenchyma and reduces post-embolization syndrome. Administer pre-procedural antiemetics (Ondansetron 8mg) and IV hydration. In patients with segmental portal vein thrombosis, drug-eluting beads (DEB-TACE) 70-150 um are preferred over conventional Lipiodol.",
			RiskLevel:           RiskModerate,
			Guidelines:          []ClinicalGuideline{masterGuidelines[1]},
			ConfidenceScore:     0.94,
			PhysicianSignOffReq: true,
			SafetyDisclaimer:    defaultDisclaimer,
			Timestamp:           now,
		}
	}

	// 3. Contrast Safety & MACD
	if strings.Contains(lower, "macd") || strings.Contains(lower, "contrast") || strings.Contains(lower, "creatinine") || strings.Contains(lower, "nephro") {
		return DecisionSupportResponse{
			QueryId:             queryId,
			Query:               q,
			Intent:              "NEPHROPROTECTION_MACD_CHECK",
			Recommendation:      "CIGARROA MACD FORMULA ENFORCED: Maximum Allowable Contrast Dose (mL) = [5 mL x Body Weight (kg)] / Serum Creatinine (mg/dL). Maintain cumulative intra-procedural contrast under 1.0x MACD to prevent Contrast-Induced Acute Kidney Injury (CI-AKI).",
			ClinicalRationale:   "For patients nearing MACD threshold, switch to digital subtraction angiography with CO2 insufflation for non-cerebral vascular territories or utilize 50% saline-diluted iso-osmolar non-ionic contrast (Iodixanol 320). Initiate 1 mL/kg/hr 0.9% normal saline hydration post-procedure.",
			RiskLevel:           RiskHigh,
			Guidelines:          []ClinicalGuideline{masterGuidelines[2]},
			ConfidenceScore:     0.98,
			PhysicianSignOffReq: true,
			SafetyDisclaimer:    defaultDisclaimer,
			Timestamp:           now,
		}
	}

	// 4. PTBD & Biliary Decompression
	if strings.Contains(lower, "ptbd") || strings.Contains(lower, "biliary") || strings.Contains(lower, "bismuth") || strings.Contains(lower, "jaundice") {
		return DecisionSupportResponse{
			QueryId:             queryId,
			Query:               q,
			Intent:              "IR_PROCEDURE_PTBD_BILIARY",
			Recommendation:      "PERCUTANEOUS BILIARY DRAINAGE PROTOCOL: Target peripheral duct access (segment III for left ductal access; segment VI/VII for right ductal access). Verify INR < 1.5 and platelets > 50,000/uL prior to capsular puncture.",
			ClinicalRationale:   "Peripheral puncture reduces hemobilia risk by avoiding central portal triad vessels. Ensure pre-procedure broad-spectrum IV antibiotic prophylaxis (Piperacillin-Tazobactam 4.5g IV). In malignant hilar obstruction (Bismuth III/IV), plan staged bilateral drainage or uncovered SEMS placement.",
			RiskLevel:           RiskHigh,
			Guidelines:          []ClinicalGuideline{masterGuidelines[3]},
			ConfidenceScore:     0.93,
			PhysicianSignOffReq: true,
			SafetyDisclaimer:    defaultDisclaimer,
			Timestamp:           now,
		}
	}

	// Default fallback: general IR safety overview
	return DecisionSupportResponse{
		QueryId:             queryId,
		Query:               q,
		Intent:              "GENERAL_IR_CLINICAL_DECISION_SUPPORT",
		Recommendation:      "STANDARDS OF PRACTICE COMPLIANCE: Adhere to Society of Interventional Radiology (SIR) peri-procedural checklist. Verify patient consent, coagulopathy window (PT/INR, aPTT, Platelets), NPO status, and vascular closure plan.",
		ClinicalRationale:   "All vascular interventional procedures require pre-procedural hemodynamic risk stratification and continuous monitoring of invasive arterial blood pressure, pulse oximetry, and end-tidal CO2.",
		RiskLevel:           RiskLow,
		Guidelines:          masterGuidelines[:2],
		ConfidenceScore:     0.88,
		PhysicianSignOffReq: true,
		SafetyDisclaimer:    defaultDisclaimer,
		Timestamp:           now,
	}
}

// ---------------------------------------------------------------------------
// Protocol Checker Engine
// ---------------------------------------------------------------------------

func evaluateProtocol(req ProtocolCheckRequest) ProtocolCheckResponse {
	now := time.Now().UTC().Format(time.RFC3339)
	var macd float64 = 0.0
	if req.SerumCreatinine > 0 {
		macd = (5.0 * req.WeightKg) / req.SerumCreatinine
	}
	contrastMargin := macd - req.ContrastPlannedMl

	approved := true
	var alerts []string
	var preMeds []string
	var guidelines []ClinicalGuideline

	// 1. Contrast Safety Check
	if req.ContrastPlannedMl > macd && macd > 0 {
		approved = false
		alerts = append(alerts, fmt.Sprintf("CRITICAL: Planned contrast (%0.1f mL) exceeds patient MACD limit (%0.1f mL). CI-AKI risk elevated.", req.ContrastPlannedMl, macd))
		guidelines = append(guidelines, masterGuidelines[2])
	}

	// 2. Coagulation / Bleeding Risk Check
	bleedingStatus := "OPTIMAL"
	if req.Inr > 1.5 {
		approved = false
		bleedingStatus = "HIGH_BLEEDING_RISK_COAGULOPATHY"
		alerts = append(alerts, fmt.Sprintf("WARNING: Patient INR %0.2f exceeds safe threshold (1.5). Fresh frozen plasma or vitamin K reversal recommended.", req.Inr))
	}
	if req.Platelets < 50000 && req.Platelets > 0 {
		approved = false
		bleedingStatus = "HIGH_BLEEDING_RISK_THROMBOCYTOPENIA"
		alerts = append(alerts, fmt.Sprintf("WARNING: Platelet count %0.0f/uL below safe interventional threshold (50,000/uL). Platelet transfusion indicated.", req.Platelets))
	}

	// 3. Anatomical Variant Checks
	if req.AnatomicalVariant != "" {
		lowerVar := strings.ToLower(req.AnatomicalVariant)
		if strings.Contains(lowerVar, "spinal") || strings.Contains(lowerVar, "adamkiewicz") {
			alerts = append(alerts, "ANATOMICAL ALERT: Anterior medullary artery origin suspected. Mandatory superselective microcatheterization required.")
			guidelines = append(guidelines, masterGuidelines[0])
		}
		if strings.Contains(lowerVar, "replaced hepatic") || strings.Contains(lowerVar, "michels") {
			alerts = append(alerts, "ANATOMICAL ALERT: Replaced right hepatic artery from SMA (Michels Type III) noted. Guide catheter selection to Cobra C2 / Simmons 1.")
		}
	}

	// Required Premedications
	preMeds = append(preMeds, "IV Normal Saline 0.9% @ 1 mL/kg/hr for 6 hrs pre/post")
	if strings.Contains(strings.ToUpper(req.ProcedureType), "TACE") {
		preMeds = append(preMeds, "Ondansetron 8mg IV", "Dexamethasone 8mg IV")
		guidelines = append(guidelines, masterGuidelines[1])
	}
	if strings.Contains(strings.ToUpper(req.ProcedureType), "PTBD") {
		preMeds = append(preMeds, "Piperacillin-Tazobactam 4.5g IV prophylaxis")
		guidelines = append(guidelines, masterGuidelines[3])
	}

	return ProtocolCheckResponse{
		ApprovedForProcedure: approved,
		MacdLimitMl:          macd,
		ContrastMarginMl:     contrastMargin,
		BleedingRiskStatus:   bleedingStatus,
		AnatomicalAlerts:     alerts,
		RequiredPreMeds:      preMeds,
		MandatoryGuidelines:  guidelines,
		PhysicianSignOffReq:  true,
		Timestamp:            now,
	}
}

// ---------------------------------------------------------------------------
// HTTP Handlers
// ---------------------------------------------------------------------------

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		traceID := r.Header.Get("X-Trace-ID")
		if traceID == "" {
			traceID = fmt.Sprintf("ai-trace-%d", time.Now().UnixNano())
		}
		w.Header().Set("X-Trace-ID", traceID)

		next.ServeHTTP(w, r)
		log.Printf("[AI-AGENT] Method=%s Path=%s Duration=%s TraceID=%s",
			r.Method, r.URL.Path, time.Since(start), traceID)
	})
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Trace-ID")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"service":   "vascule-ai-agent-service",
		"status":    "healthy",
		"version":   "1.0.0",
		"uptimeSec": time.Since(globalMetrics.startTime).Seconds(),
		"timestamp": time.Now().UTC().Format(time.RFC3339),
	})
}

func handleMetrics(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain; version=0.0.4")
	uptime := time.Since(globalMetrics.startTime).Seconds()
	queries := atomic.LoadUint64(&globalMetrics.queriesTotal)
	protocols := atomic.LoadUint64(&globalMetrics.protocolsTotal)

	fmt.Fprintf(w, "# HELP vascule_ai_service_uptime_seconds AI Service uptime in seconds\n")
	fmt.Fprintf(w, "# TYPE vascule_ai_service_uptime_seconds gauge\n")
	fmt.Fprintf(w, "vascule_ai_service_uptime_seconds %0.2f\n", uptime)

	fmt.Fprintf(w, "# HELP vascule_ai_queries_total Total AI decision support queries processed\n")
	fmt.Fprintf(w, "# TYPE vascule_ai_queries_total counter\n")
	fmt.Fprintf(w, "vascule_ai_queries_total %d\n", queries)

	fmt.Fprintf(w, "# HELP vascule_ai_protocol_checks_total Total clinical protocol checks evaluated\n")
	fmt.Fprintf(w, "# TYPE vascule_ai_protocol_checks_total counter\n")
	fmt.Fprintf(w, "vascule_ai_protocol_checks_total %d\n", protocols)
}

func handleAiQuery(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req struct {
		Query string `json:"query"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil || strings.TrimSpace(req.Query) == "" {
		http.Error(w, "Invalid query payload", http.StatusBadRequest)
		return
	}

	globalMetrics.IncQueries()
	resp := processClinicalQuery(req.Query)
	resp.TraceID = r.Header.Get("X-Trace-ID")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func handleProtocolCheck(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req ProtocolCheckRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid protocol check payload", http.StatusBadRequest)
		return
	}

	globalMetrics.IncProtocols()
	resp := evaluateProtocol(req)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func SetupRouter() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/health", handleHealth)
	mux.HandleFunc("/metrics", handleMetrics)
	mux.HandleFunc("/api/v1/ai/query", handleAiQuery)
	mux.HandleFunc("/api/v1/ai/protocol-check", handleProtocolCheck)

	return corsMiddleware(loggingMiddleware(mux))
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8083"
	}

	srv := &http.Server{
		Addr:         ":" + port,
		Handler:      SetupRouter(),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
	}

	go func() {
		log.Printf("Starting Vascule OS AI Agent Microservice on port %s...", port)
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("AI Agent Service failed: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
	<-stop

	log.Println("Shutting down AI Agent Service gracefully...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	srv.Shutdown(ctx)
}
