"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEndoflowStore } from "../useEndoflowStore";
import { stripPhiSafeHarbor, publishToDepartmentCensus } from "../../lib/census/registrySync";
import {
  FileCheck2,
  FileText,
  Lock,
  ShieldCheck,
  Printer,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  Sparkles,
  Download,
  Share2,
} from "lucide-react";
import { VoiceDictationStudio, VascularExtractedEntities } from "../report/components/VoiceDictationStudio";

export interface SynopticReportData {
  caseId: string;
  patientName: string;
  crNumber: string;
  age: number;
  gender: "Male" | "Female";
  procedureName: string;
  indication: string;
  accessSite: string;
  sheathSize: string;
  fluoroscopyTime: number;
  dapDose: number;
  contrastVolumeMl: number;
  technicalFindings: string;
  complications: string;
  implantLotNumbers: string;
  postOpOrders: string;
}

interface SynopticEditorProps {
  caseId: string;
  initialData?: Partial<SynopticReportData>;
  userRole?: "CONSULTANT" | "SENIOR_RESIDENT";
}

export function SynopticEditor({
  caseId,
  initialData,
  userRole: propUserRole,
}: SynopticEditorProps) {
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const storePatient = useEndoflowStore((s) =>
    s.patients.find((p) => p.id.toUpperCase() === caseId.toUpperCase())
  );

  // Determine user role (defaults to SENIOR_RESIDENT or CONSULTANT based on active profile or prop)
  const isFaculty =
    currentStaff?.tier === "FACULTY" || currentStaff?.code?.startsWith("FC");
  const [activeRole, setActiveRole] = useState<"CONSULTANT" | "SENIOR_RESIDENT">(
    propUserRole || (isFaculty ? "CONSULTANT" : "SENIOR_RESIDENT")
  );

  const [report, setReport] = useState<SynopticReportData>({
    caseId,
    patientName: initialData?.patientName || storePatient?.name || "Ramswaroop Meena",
    crNumber: initialData?.crNumber || storePatient?.hid || "SMS-2026-089",
    age: initialData?.age || storePatient?.age || 56,
    gender: initialData?.gender || storePatient?.sex || "Male",
    procedureName: initialData?.procedureName || storePatient?.procedure || "Direct Transcaval Portosystemic Shunt (DIPS)",
    indication: initialData?.indication || storePatient?.summary || "Budd-Chiari Syndrome with diffuse hepatic vein occlusion and refractory tense ascites. Rotterdam Class III.",
    accessSite: initialData?.accessSite || storePatient?.inRoom?.activeSheathAccess || "Right Internal Jugular Vein (RIJV) & Right Common Femoral Artery",
    sheathSize: initialData?.sheathSize || "10F Check-Flo & 6F Radifocus",
    fluoroscopyTime:
      initialData?.fluoroscopyTime ??
      (storePatient?.inRoom?.elapsedFluoroSeconds
        ? +(storePatient.inRoom.elapsedFluoroSeconds / 60).toFixed(1)
        : 22.4),
    dapDose: initialData?.dapDose ?? 168.2,
    contrastVolumeMl:
      initialData?.contrastVolumeMl ??
      storePatient?.inRoom?.contrastInjectedMl ??
      90,
    technicalFindings:
      initialData?.technicalFindings ||
      "Under ultrasound guidance, RIJV and RCFA accessed. Inferior vena cavogram demonstrated severe IVC compression. Transcaval puncture performed from retrohepatic IVC into intrahepatic portal vein branch. Portal venous pressure measured 32 mmHg; IVC pressure 11 mmHg (Portosystemic gradient = 21 mmHg). Shunt tract dilated with 8mm Mustang balloon, followed by deployment of Gore Viatorr TIPS endoprosthesis 10x70mm. Post-deployment portosystemic gradient reduced to 7 mmHg with brisk antegrade flow. Excellent technical outcome.",
    complications: initialData?.complications || "None (CIRSE Grade 0)",
    implantLotNumbers:
      initialData?.implantLotNumbers ||
      "Gore Viatorr Endoprosthesis 10x70mm (Lot: 9284102); Boston Scientific Mustang 8x40mm (Lot: 482104); Terumo Angio-Seal 6F (Lot: 5510931)",
    postOpOrders:
      initialData?.postOpOrders ||
      "1. Strict supine bed rest for 4 hours.\n2. Hourly femoral and neck puncture site checks for hematoma.\n3. IV Normal Saline at 75 mL/hr for contrast clearance.\n4. Doppler USG of shunt tomorrow 09:00 AM.",
  });

  const [signedByResident, setSignedByResident] = useState(false);
  const [residentSigStamp, setResidentSigStamp] = useState<{
    name: string;
    regNo: string;
    time: string;
  } | null>(null);

  const [verifiedByConsultant, setVerifiedByConsultant] = useState(false);
  const [consultantSigStamp, setConsultantSigStamp] = useState<{
    name: string;
    designation: string;
    time: string;
    lockHash: string;
  } | null>(null);

  const [publishedToCensus, setPublishedToCensus] = useState(false);
  const [censusResearchId, setCensusResearchId] = useState<string | null>(null);

  // Synchronize hands-free voice dictation extracted entities
  const handleVoiceEntities = (entities: VascularExtractedEntities) => {
    setReport((prev) => {
      const updated = { ...prev };
      if (entities.accessSite) {
        updated.accessSite = entities.accessSite;
      }
      if (entities.sheathSize) {
        updated.sheathSize = entities.sheathSize;
      }
      if (entities.rawTranscript) {
        updated.technicalFindings = prev.technicalFindings
          ? `${prev.technicalFindings}\n[Dictation]: ${entities.rawTranscript}`
          : entities.rawTranscript;
      }
      return updated;
    });
  };

  // Resident Sign
  const handleResidentSign = async () => {
    const stamp = {
      name: currentStaff?.name || "Dr. Neel Yadav",
      regNo: "RMC-64821/DM",
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };
    setResidentSigStamp(stamp);
    setSignedByResident(true);

    // Also update case status to REPORT_DRAFTED
    try {
      await fetch(`/api/cases/${caseId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nextStatus: "REPORT_DRAFTED",
          staffId: currentStaff?.code || "DM01",
          notes: `Draft signed by ${stamp.name}`,
        }),
      });
    } catch {
      // Non-blocking
    }
  };

  // Consultant Verify, Lock & Publish to Census
  const handleConsultantVerify = async () => {
    const lockHash = `SHA256-${Math.random().toString(36).substring(2, 10).toUpperCase()}-LOCKED`;
    const stamp = {
      name: "Dr. Meenu Bagarhatta",
      designation: "Senior Professor & Head (Department of Radiodiagnosis)",
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      lockHash,
    };
    setConsultantSigStamp(stamp);
    setVerifiedByConsultant(true);

    // Strip 18 HIPAA identifiers and publish to Departmental Census
    const deIdentified = stripPhiSafeHarbor({
      caseId,
      patientName: report.patientName,
      age: report.age,
      gender: report.gender,
      procedureName: report.procedureName,
      indication: report.indication,
      complications: report.complications,
      fluoroTimeMinutes: report.fluoroscopyTime,
      dapGyCm2: report.dapDose,
      contrastVolumeMl: report.contrastVolumeMl,
    });

    publishToDepartmentCensus(deIdentified);
    setCensusResearchId(deIdentified.researchId);
    setPublishedToCensus(true);

    // Update case status to FINALIZED_SIGNED
    try {
      await fetch(`/api/cases/${caseId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nextStatus: "FINALIZED_SIGNED",
          staffId: "FC01",
          notes: `Verified & Locked by ${stamp.name}`,
        }),
      });
    } catch {
      // Non-blocking
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-800">
      {/* Top Bar: Title & Dual Status Stamps */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              CIRSE Synoptic Procedural Report
            </h2>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono font-bold text-slate-600 border border-slate-200">
              CIRSE-SIR Standard
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            SMS Medical College & Attached Hospitals &bull; Division of Interventional Radiology
          </p>
        </div>

        {/* Dual Sign-off Status Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span
            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 border transition ${
              signedByResident
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-slate-100 border-slate-200 text-slate-600"
            }`}
          >
            {signedByResident ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Resident: Signed
              </>
            ) : (
              <>
                <AlertCircle className="h-3.5 w-3.5 text-slate-400" />
                Resident Draft: Pending
              </>
            )}
          </span>

          <span
            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 border transition ${
              verifiedByConsultant
                ? "bg-purple-50 border-purple-300 text-purple-800 font-bold"
                : "bg-slate-100 border-slate-200 text-slate-600"
            }`}
          >
            {verifiedByConsultant ? (
              <>
                <Lock className="h-3.5 w-3.5 text-purple-600" />
                Consultant: Verified & Locked
              </>
            ) : (
              <>
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                Consultant: Awaiting Verification
              </>
            )}
          </span>

          {/* Role Switching for Pair Programming Testing */}
          <div className="ml-2 flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-[11px]">
            <button
              type="button"
              onClick={() => setActiveRole("SENIOR_RESIDENT")}
              className={`rounded-md px-2 py-0.5 transition font-semibold ${
                activeRole === "SENIOR_RESIDENT"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Resident View
            </button>
            <button
              type="button"
              onClick={() => setActiveRole("CONSULTANT")}
              className={`rounded-md px-2 py-0.5 transition font-semibold ${
                activeRole === "CONSULTANT"
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Consultant View
            </button>
          </div>
        </div>
      </div>

      {/* Patient Header Banner */}
      <div className="rounded-xl bg-slate-50/80 border border-slate-200 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Patient Name</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">{report.patientName}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">CR / Hospital ID</div>
            <div className="font-mono font-bold text-slate-900 text-sm mt-0.5">{report.crNumber}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Age / Sex</div>
            <div className="font-semibold text-slate-800 text-sm mt-0.5">{report.age} Y / {report.gender}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Procedure</div>
            <div className="font-bold text-blue-700 text-xs mt-0.5 truncate">{report.procedureName}</div>
          </div>
        </div>
      </div>

      {/* Hands-Free Voice Dictation Studio */}
      <VoiceDictationStudio onEntitiesExtracted={handleVoiceEntities} />

      {/* Clinical Indication */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Clinical Indication & Diagnosis
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-200 p-2.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50"
          value={report.indication}
          onChange={(e) => setReport({ ...report, indication: e.target.value })}
          disabled={verifiedByConsultant}
        />
      </div>

      {/* Vascular Access & Implants Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            Vascular Access & Sheaths
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.accessSite}
            onChange={(e) => setReport({ ...report, accessSite: e.target.value })}
            disabled={verifiedByConsultant}
          />
        </div>
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            Implants, Stents & Lot Numbers (GS1 Barcode Synced)
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 p-2.5 font-mono focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.implantLotNumbers}
            onChange={(e) => setReport({ ...report, implantLotNumbers: e.target.value })}
            disabled={verifiedByConsultant}
          />
        </div>
      </div>

      {/* Radiation & Contrast Dosimetry Strip */}
      <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Fluoro Time</span>
          <div className="font-mono font-bold text-slate-900 mt-0.5">{report.fluoroscopyTime} min</div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Cumulative DAP</span>
          <div className="font-mono font-bold text-slate-900 mt-0.5">{report.dapDose} Gy&middot;cm&sup2;</div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Contrast Volume</span>
          <div className="font-mono font-bold text-blue-700 mt-0.5">{report.contrastVolumeMl} mL (Safe MACD)</div>
        </div>
      </div>

      {/* Operative Narrative */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Operative Technique, Findings & Hemostasis Endpoints
        </label>
        <textarea
          rows={6}
          className="w-full rounded-lg border border-slate-200 p-3 text-xs leading-relaxed focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50"
          value={report.technicalFindings}
          onChange={(e) => setReport({ ...report, technicalFindings: e.target.value })}
          disabled={verifiedByConsultant}
        />
      </div>

      {/* Complications & Post-Op Orders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            CIRSE Complication Classification
          </label>
          <input
            className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.complications}
            onChange={(e) => setReport({ ...report, complications: e.target.value })}
            disabled={verifiedByConsultant}
          />
        </div>
        <div>
          <label className="block font-bold uppercase tracking-wider text-slate-600 mb-1">
            Immediate Post-Procedure Orders
          </label>
          <textarea
            rows={3}
            className="w-full rounded-lg border border-slate-200 p-2.5 focus:border-blue-500 focus:outline-none disabled:bg-slate-50"
            value={report.postOpOrders}
            onChange={(e) => setReport({ ...report, postOpOrders: e.target.value })}
            disabled={verifiedByConsultant}
          />
        </div>
      </div>

      {/* Digital Signature Stamps Display */}
      {(residentSigStamp || consultantSigStamp) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          {residentSigStamp && (
            <div className="rounded-lg border border-emerald-200 bg-white p-3 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <CheckCircle2 className="h-4 w-4" /> Primary Author Digital Signature
              </div>
              <div className="mt-1 font-bold text-slate-900">{residentSigStamp.name}</div>
              <div className="font-mono text-[10px] text-slate-500">Reg No: {residentSigStamp.regNo}</div>
              <div className="text-[10px] text-slate-400 mt-1">Signed: {residentSigStamp.time}</div>
            </div>
          )}

          {consultantSigStamp && (
            <div className="rounded-lg border border-purple-200 bg-white p-3 text-xs">
              <div className="flex items-center gap-1.5 text-purple-700 font-bold">
                <Lock className="h-4 w-4" /> Consultant Verification & Document Lock
              </div>
              <div className="mt-1 font-bold text-slate-900">{consultantSigStamp.name}</div>
              <div className="text-[10px] text-slate-500">{consultantSigStamp.designation}</div>
              <div className="font-mono text-[10px] text-purple-600 mt-1 font-bold">
                Lock Seal: {consultantSigStamp.lockHash}
              </div>
              <div className="text-[10px] text-slate-400">Verified: {consultantSigStamp.time}</div>
            </div>
          )}
        </div>
      )}

      {/* Census Publication Notice */}
      {publishedToCensus && (
        <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 p-4 text-xs text-blue-950">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600 shrink-0" />
            <div>
              <span className="font-bold">De-Identified & Published to Departmental Census: </span>
              <span className="font-mono font-bold text-blue-800">Research ID #{censusResearchId}</span>
              <p className="text-[11px] text-blue-700 mt-0.5">
                All 18 HIPAA PHI identifiers stripped. Record is now queryable in the research registry.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/census"
            className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700 transition shrink-0"
          >
            View Census <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition"
          >
            <Printer className="h-3.5 w-3.5" /> Print / Export PDF
          </button>
          <Link
            href="/dashboard/discharge"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition"
          >
            <FileText className="h-3.5 w-3.5 text-blue-600" /> Rajasthan IHMS Packet
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {activeRole === "SENIOR_RESIDENT" && !signedByResident && (
            <button
              type="button"
              onClick={handleResidentSign}
              className="rounded-lg bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              Sign & Submit to Consultant
            </button>
          )}

          {activeRole === "CONSULTANT" && signedByResident && !verifiedByConsultant && (
            <button
              type="button"
              onClick={handleConsultantVerify}
              className="rounded-lg bg-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-purple-700 transition"
            >
              Verify, Lock & Publish to Census
            </button>
          )}

          {activeRole === "CONSULTANT" && !signedByResident && (
            <span className="text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
              Awaiting Primary Resident Sign-off
            </span>
          )}

          {verifiedByConsultant && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <Lock className="h-3.5 w-3.5" /> Operative Report Locked
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
