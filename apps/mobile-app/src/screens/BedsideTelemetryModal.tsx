import React, { useState } from "react";
import { WardRoundPatient } from "../types";
import { offlineSyncService } from "../services/offlineSync";
import { mobileNotificationClient } from "../services/notificationClient";

interface BedsideTelemetryModalProps {
  patient: WardRoundPatient;
  onClose: () => void;
  onSignOffSuccess: () => void;
}

export const BedsideTelemetryModal: React.FC<BedsideTelemetryModalProps> = ({
  patient,
  onClose,
  onSignOffSuccess,
}) => {
  const [clinicianName, setClinicianName] = useState("Dr. Roy (Faculty IR)");
  const [assessmentNotes, setAssessmentNotes] = useState(
    patient.signOffNotes || "Patient stable on morning rounds. Pre-procedure assessment verified."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statPagingSent, setStatPagingSent] = useState(false);

  const contrastPercentage =
    patient.cigarroaMacdLimit > 0
      ? Math.min(100, Math.round((patient.contrastMlInjected / patient.cigarroaMacdLimit) * 100))
      : 0;

  const handleSignOff = () => {
    setIsSubmitting(true);
    offlineSyncService.recordPhysicianSignOff(
      patient.id,
      clinicianName,
      assessmentNotes,
      patient.tenantId
    );
    setIsSubmitting(false);
    onSignOffSuccess();
  };

  const handleStatPage = async () => {
    setStatPagingSent(true);
    await mobileNotificationClient.dispatchClinicalAlert({
      tenantId: patient.tenantId,
      eventType: "STAT_CASE_BOOKED",
      title: `EMERGENCY STAT: ${patient.name} (${patient.bedNo})`,
      body: `Immediate angiography team requested for ${patient.plannedProcedure}. Indication: ${patient.diagnosis}`,
      priority: "CRITICAL",
      patientId: patient.crNo,
      suiteName: "Angio Suite 1",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
      }}
    >
      <div
        style={{
          backgroundColor: "#090A0F",
          border: "1px solid #1E293B",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "540px",
          padding: "24px",
          color: "#FFFFFF",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#2563EB",
                textTransform: "uppercase",
              }}
            >
              Bedside Telemetry & Rounds Assessment
            </span>
            <h2 style={{ fontSize: "20px", fontWeight: 700, margin: "4px 0 0 0" }}>
              {patient.name} ({patient.age}y / {patient.gender})
            </h2>
            <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>
              {patient.ward.replace(/_/g, " ")} • {patient.bedNo} • CR: {patient.crNo}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#94A3B8",
              fontSize: "20px",
              cursor: "pointer",
              padding: "4px 8px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Live Vitals Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
            backgroundColor: "#000000",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #1E293B",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>ABP (MAP)</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#38BDF8" }}>
              {patient.vitals.abp}
            </div>
            <div style={{ fontSize: "10px", color: "#94A3B8" }}>{patient.vitals.map} mmHg</div>
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>PULSE</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#4ADE80" }}>
              {patient.vitals.heartRate}
            </div>
            <div style={{ fontSize: "10px", color: "#94A3B8" }}>BPM</div>
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>SpO2</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#A78BFA" }}>
              {patient.vitals.spo2}%
            </div>
            <div style={{ fontSize: "10px", color: "#94A3B8" }}>EtCO2 36</div>
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>TEMP / RR</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#FBBF24" }}>
              {patient.vitals.temperatureC}°C
            </div>
            <div style={{ fontSize: "10px", color: "#94A3B8" }}>{patient.vitals.respiratoryRate}/min</div>
          </div>
        </div>

        {/* Contrast MACD Risk Tracker */}
        <div
          style={{
            backgroundColor: "#0B1120",
            border: "1px solid #1E293B",
            borderRadius: "10px",
            padding: "12px",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
            <span style={{ color: "#94A3B8" }}>Cigarroa Contrast Limit (MACD):</span>
            <span style={{ fontWeight: 700, color: contrastPercentage > 80 ? "#F87171" : "#34D399" }}>
              {patient.contrastMlInjected} / {patient.cigarroaMacdLimit} mL ({contrastPercentage}%)
            </span>
          </div>
          <div style={{ height: "6px", width: "100%", backgroundColor: "#1E293B", borderRadius: "3px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${contrastPercentage}%`,
                backgroundColor: contrastPercentage > 80 ? "#EF4444" : "#2563EB",
              }}
            />
          </div>
        </div>

        {/* Procedure & Clinical Notes */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#94A3B8", marginBottom: "4px" }}>
            Planned Interventional Procedure:
          </div>
          <div
            style={{
              backgroundColor: "#0F172A",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#E2E8F0",
              fontWeight: 500,
            }}
          >
            {patient.plannedProcedure}
          </div>
        </div>

        {/* Sign-Off Inputs */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "#64748B", marginBottom: "4px" }}>
            Physician Sign-Off Notes:
          </label>
          <textarea
            value={assessmentNotes}
            onChange={(e) => setAssessmentNotes(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#000000",
              border: "1px solid #334155",
              borderRadius: "8px",
              padding: "8px 12px",
              color: "#FFFFFF",
              fontSize: "13px",
              resize: "vertical",
            }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleStatPage}
            disabled={statPagingSent}
            style={{
              flex: 1,
              backgroundColor: statPagingSent ? "#475569" : "#DC2626",
              color: "#FFFFFF",
              border: "none",
              padding: "10px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "13px",
              cursor: statPagingSent ? "default" : "pointer",
            }}
          >
            {statPagingSent ? "✓ STAT Alert Paged" : "🚨 Page STAT Team"}
          </button>
          <button
            onClick={handleSignOff}
            disabled={isSubmitting}
            style={{
              flex: 1.5,
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              border: "none",
              padding: "10px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            ✓ Complete Bedside Sign-Off
          </button>
        </div>
      </div>
    </div>
  );
};
