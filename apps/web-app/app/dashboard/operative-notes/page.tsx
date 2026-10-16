"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useOperativeNoteDocument } from "./useOperativeNoteDocument";
import { OperativeNotePreview } from "./OperativeNotePreview";
import { ProcedureDossierStagesBar, ProcedureDossierStage } from "./ProcedureDossierStagesBar";
import { ProcedureDatingStage } from "./ProcedureDatingStage";
import { ProcedureConsentStage } from "./ProcedureConsentStage";
import { ProcedureDischargeStage } from "./ProcedureDischargeStage";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";
import { useEndoflowStore } from "../useEndoflowStore";
import { Search } from "lucide-react";

export default function OperativeNotesPage() {
  const doc = useOperativeNoteDocument();
  const storePatients = useEndoflowStore((s) => s.patients);
  const [activeStage, setActiveStage] = useState<ProcedureDossierStage>("dating");
  const [patientSearch, setPatientSearch] = useState<string>("");

  // Unified patient demographics pre-filled across all 4 document stages
  const [patientName, setPatientName] = useState<string>(doc.docData.patientName || "Abhyansh");
  const [age, setAge] = useState<string>("10");
  const [sex, setSex] = useState<string>("Male");
  const [uhid, setUhid] = useState<string>(doc.docData.hidCr || "109030200");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [unit, setUnit] = useState<string>(doc.docData.referredBy || "Interventional Radiology");
  const [procedureTitle, setProcedureTitle] = useState<string>(doc.docData.procedureTitle || "Bleomycin Sclerotherapy");

  const searchResults = useMemo(() => {
    const q = patientSearch.toLowerCase().trim();
    if (!q) return { fromRegistry: [], fromStore: [] };
    const fromRegistry = AUTHENTIC_SMS_MASTER_CASES.filter(
      (p) =>
        p.patientName.toLowerCase().includes(q) ||
        p.crNumber.toLowerCase().includes(q) ||
        String(p.dsaNo).includes(q)
    ).slice(0, 5);

    const fromStore = storePatients.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.hid.toLowerCase().includes(q)
    ).slice(0, 5);

    return { fromRegistry, fromStore };
  }, [patientSearch, storePatients]);

  const handleSelectRegistryPatient = useCallback((p: (typeof AUTHENTIC_SMS_MASTER_CASES)[0]) => {
    doc.handleSelectRegistryPatient(p);
    setPatientName(p.patientName);
    setAge(p.age ? String(p.age) : "");
    setSex(p.gender || "Male");
    setUhid(p.crNumber);
    setUnit(p.unit || "Interventional Radiology");
    setProcedureTitle(p.procedureName);
    setPatientSearch("");
  }, [doc]);

  const handleSelectStorePatient = useCallback((p: (typeof storePatients)[0]) => {
    setPatientName(p.name);
    setAge(String(p.age));
    setSex(p.sex);
    setUhid(p.hid);
    setContactNumber(p.phone || "");
    setUnit(p.unit || "Interventional Radiology");
    setProcedureTitle(p.procedure);
    setPatientSearch("");
  }, []);

  return (
    <div className="space-y-4 max-w-[1700px] mx-auto pb-16 font-sans select-none">
      {/* Top Patient Pre-fill & Rapid Search Drawer */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-2xs print:hidden space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 max-w-xl">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={patientSearch}
              onChange={(e) => setPatientSearch(e.target.value)}
              placeholder="Pre-fill patient from OPD Clinic or Master Registry (Type Name, CR, or UHID)..."
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-mono">
            <div>Patient: <strong className="text-slate-900 dark:text-slate-100">{patientName || "Unassigned"}</strong></div>
            <div>CR/UHID: <strong>{uhid || "---"}</strong></div>
            <div>Age/Sex: <strong>{age || "--"} / {sex || "--"}</strong></div>
          </div>
        </div>

        {/* Autocomplete Dropdown */}
        {(searchResults.fromStore.length > 0 || searchResults.fromRegistry.length > 0) && (
          <div className="border-t border-slate-100 dark:border-slate-800 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {searchResults.fromStore.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelectStorePatient(p)}
                className="text-left p-2 rounded-lg bg-teal-50/60 dark:bg-teal-950/30 hover:bg-teal-100/60 border border-teal-200 dark:border-teal-800 transition cursor-pointer"
              >
                <div className="font-bold text-xs text-teal-900 dark:text-teal-200 truncate">{p.name}</div>
                <div className="text-[10px] text-teal-700 dark:text-teal-400">OPD Clinic &bull; UHID: {p.hid}</div>
              </button>
            ))}
            {searchResults.fromRegistry.map((p) => (
              <button
                key={p.dsaNo}
                type="button"
                onClick={() => handleSelectRegistryPatient(p)}
                className="text-left p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
              >
                <div className="font-bold text-xs text-slate-900 dark:text-slate-100 truncate">{p.patientName}</div>
                <div className="text-[10px] text-slate-500">Registry &bull; CR: {p.crNumber}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 4-Stage Procedural Document Column / Dossier Switcher */}
      <ProcedureDossierStagesBar activeStage={activeStage} onStageChange={setActiveStage} />

      {/* Active Document Stage View */}
      <div className="pt-1">
        {activeStage === "dating" && (
          <ProcedureDatingStage
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={doc.docData.dateStr || ""}
          />
        )}

        {activeStage === "consent" && (
          <ProcedureConsentStage
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            procedureTitle={procedureTitle}
          />
        )}

        {activeStage === "op_note" && (
          <OperativeNotePreview docManager={doc} />
        )}

        {activeStage === "discharge" && (
          <ProcedureDischargeStage
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            procedureTitle={procedureTitle}
          />
        )}
      </div>
    </div>
  );
}
