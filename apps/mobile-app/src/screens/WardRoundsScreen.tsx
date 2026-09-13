import React, { useState, useEffect } from "react";
import { WardRoundPatient, WardLocation } from "../types";
import { offlineSyncService } from "../services/offlineSync";
import { BedsideTelemetryModal } from "./BedsideTelemetryModal";

export const WardRoundsScreen: React.FC = () => {
  const [patients, setPatients] = useState<WardRoundPatient[]>([]);
  const [selectedWard, setSelectedWard] = useState<WardLocation>("ALL");
  const [onlyPending, setOnlyPending] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activePatient, setActivePatient] = useState<WardRoundPatient | null>(null);
  const [isOnline, setIsOnline] = useState(offlineSyncService.isNetworkConnected());
  const [pendingQueueCount, setPendingQueueCount] = useState(0);

  useEffect(() => {
    const updateState = () => {
      setPatients(offlineSyncService.getPatients());
      setIsOnline(offlineSyncService.isNetworkConnected());
      setPendingQueueCount(offlineSyncService.getPendingQueueCount());
    };

    updateState();
    const unsubscribe = offlineSyncService.subscribe(updateState);
    return unsubscribe;
  }, []);

  const toggleNetwork = () => {
    offlineSyncService.setNetworkStatus(!isOnline);
  };

  const filteredPatients = patients.filter((p) => {
    if (selectedWard !== "ALL" && p.ward !== selectedWard) return false;
    if (onlyPending && p.signOffStatus === "SIGNED_OFF") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.crNo.toLowerCase().includes(q) ||
        p.bedNo.toLowerCase().includes(q) ||
        p.plannedProcedure.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Mobile Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #1E293B",
          paddingBottom: "14px",
          marginBottom: "16px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 800,
                padding: "2px 6px",
                borderRadius: "4px",
                letterSpacing: "0.05em",
              }}
            >
              VASCULE ROUNDS
            </span>
            <span style={{ fontSize: "11px", color: "#64748B" }}>SMS Medical College (Jaipur)</span>
          </div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, margin: "4px 0 0 0" }}>
            Morning IR Ward Rounds
          </h1>
        </div>

        {/* Network Connectivity Badge & Offline Simulator Toggle */}
        <div style={{ textAlign: "right" }}>
          <button
            onClick={toggleNetwork}
            style={{
              backgroundColor: isOnline ? "#064E3B" : "#7F1D1D",
              color: isOnline ? "#34D399" : "#F87171",
              border: `1px solid ${isOnline ? "#059669" : "#DC2626"}`,
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {isOnline ? "● ONLINE" : "○ OFFLINE (TAP)"}
          </button>
          {pendingQueueCount > 0 && (
            <div style={{ fontSize: "10px", color: "#FBBF24", marginTop: "4px", fontWeight: 600 }}>
              ⚡ {pendingQueueCount} queued for sync
            </div>
          )}
        </div>
      </div>

      {/* Ward Filter Chips */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "10px",
          marginBottom: "12px",
        }}
      >
        {[
          { key: "ALL", label: "All Wards" },
          { key: "VASCULAR_SURGERY_3B", label: "Vascular 3B" },
          { key: "EMERGENCY_TRIAGE", label: "Emergency Triage" },
          { key: "CARDIOTHORACIC_ICU", label: "CTVS ICU" },
          { key: "NEPHROLOGY_HD", label: "Nephrology / HD" },
        ].map((w) => (
          <button
            key={w.key}
            onClick={() => setSelectedWard(w.key as WardLocation)}
            style={{
              whiteSpace: "nowrap",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 600,
              backgroundColor: selectedWard === w.key ? "#2563EB" : "#0F172A",
              color: selectedWard === w.key ? "#FFFFFF" : "#94A3B8",
              border: `1px solid ${selectedWard === w.key ? "#3B82F6" : "#1E293B"}`,
              cursor: "pointer",
            }}
          >
            {w.label}
          </button>
        ))}
      </div>

      {/* Search & Pending Filter Controls */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Search by patient, CR, or bed number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: 1,
            backgroundColor: "#090A0F",
            border: "1px solid #1E293B",
            borderRadius: "8px",
            padding: "8px 12px",
            color: "#FFFFFF",
            fontSize: "13px",
            outline: "none",
          }}
        />
        <button
          onClick={() => setOnlyPending(!onlyPending)}
          style={{
            backgroundColor: onlyPending ? "#1E293B" : "#090A0F",
            border: `1px solid ${onlyPending ? "#2563EB" : "#334155"}`,
            color: onlyPending ? "#38BDF8" : "#94A3B8",
            borderRadius: "8px",
            padding: "8px 12px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {onlyPending ? "✓ Pending Only" : "Show All"}
        </button>
      </div>

      {/* Patient Card List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {filteredPatients.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 16px",
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            No active ward round cases match the selected filter.
          </div>
        ) : (
          filteredPatients.map((patient) => {
            const contrastPct =
              patient.cigarroaMacdLimit > 0
                ? Math.min(100, Math.round((patient.contrastMlInjected / patient.cigarroaMacdLimit) * 100))
                : 0;

            return (
              <div
                key={patient.id}
                style={{
                  backgroundColor: "#090A0F",
                  border: `1px solid ${
                    patient.signOffStatus === "STAT_FLAGGED"
                      ? "#DC2626"
                      : patient.signOffStatus === "SIGNED_OFF"
                      ? "#1E293B"
                      : "#2563EB"
                  }`,
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                {/* Top Row: Bed No & Sign-off Status Pill */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        backgroundColor: "#1E293B",
                        color: "#38BDF8",
                        fontWeight: 700,
                        fontSize: "12px",
                        padding: "2px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {patient.bedNo}
                    </span>
                    <span style={{ fontSize: "11px", color: "#64748B" }}>
                      {patient.ward.replace(/_/g, " ")}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "12px",
                      backgroundColor:
                        patient.signOffStatus === "SIGNED_OFF"
                          ? "#064E3B"
                          : patient.signOffStatus === "STAT_FLAGGED"
                          ? "#7F1D1D"
                          : "#1E3A8A",
                      color:
                        patient.signOffStatus === "SIGNED_OFF"
                          ? "#34D399"
                          : patient.signOffStatus === "STAT_FLAGGED"
                          ? "#F87171"
                          : "#60A5FA",
                    }}
                  >
                    {patient.signOffStatus === "SIGNED_OFF"
                      ? "✓ SIGNED OFF"
                      : patient.signOffStatus === "STAT_FLAGGED"
                      ? "🚨 STAT CASE"
                      : "○ PENDING"}
                  </span>
                </div>

                {/* Patient Name & Demographics */}
                <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 4px 0", color: "#FFFFFF" }}>
                  {patient.name}{" "}
                  <span style={{ fontSize: "13px", fontWeight: 400, color: "#94A3B8" }}>
                    ({patient.age}y / {patient.gender}) • CR: {patient.crNo}
                  </span>
                </h3>

                {/* Diagnosis & Planned Procedure */}
                <div style={{ fontSize: "12px", color: "#CBD5E1", marginBottom: "10px" }}>
                  <strong style={{ color: "#94A3B8" }}>Indication:</strong> {patient.diagnosis}
                </div>
                <div
                  style={{
                    backgroundColor: "#000000",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    color: "#93C5FD",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  ⚡ Procedure: {patient.plannedProcedure}
                </div>

                {/* Live Telemetry Summary Strip */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#0F172A",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <span style={{ color: "#64748B" }}>ABP: </span>
                    <strong style={{ color: "#38BDF8" }}>{patient.vitals.abp}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748B" }}>HR: </span>
                    <strong style={{ color: "#4ADE80" }}>{patient.vitals.heartRate} bpm</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748B" }}>SpO2: </span>
                    <strong style={{ color: "#A78BFA" }}>{patient.vitals.spo2}%</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748B" }}>Contrast: </span>
                    <strong style={{ color: contrastPct > 80 ? "#F87171" : "#34D399" }}>
                      {contrastPct}%
                    </strong>
                  </div>
                </div>

                {/* Sign-Off Metadata if already signed off */}
                {patient.signOffStatus === "SIGNED_OFF" && (
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#94A3B8",
                      backgroundColor: "#062817",
                      border: "1px solid #064E3B",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      marginBottom: "12px",
                    }}
                  >
                    ✓ Signed off by <strong>{patient.signedOffBy}</strong> at {patient.signedOffAt}:{" "}
                    <em>"{patient.signOffNotes}"</em>
                  </div>
                )}

                {/* Bedside Action Trigger */}
                <button
                  onClick={() => setActivePatient(patient)}
                  style={{
                    width: "100%",
                    backgroundColor: patient.signOffStatus === "SIGNED_OFF" ? "#1E293B" : "#2563EB",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "9px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  {patient.signOffStatus === "SIGNED_OFF"
                    ? "View Bedside Telemetry & Notes"
                    : "Bedside Assessment & Sign-Off →"}
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Bedside Modal */}
      {activePatient && (
        <BedsideTelemetryModal
          patient={activePatient}
          onClose={() => setActivePatient(null)}
          onSignOffSuccess={() => setActivePatient(null)}
        />
      )}
    </div>
  );
};
