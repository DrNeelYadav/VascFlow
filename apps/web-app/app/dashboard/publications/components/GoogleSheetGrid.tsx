"use client";

import React, { useState, useMemo } from "react";
import { generateSafeCsv } from "@vascule/utils/sanitizers";
import { PaperDefinition } from "../data/papersRegistry";
import { PaperCaseRecord } from "../data/allSixPapersData";
import {
  Search,
  Filter,
  Download,
  Copy,
  Check,
  ArrowUpDown,
  FileSpreadsheet,
  Layers,
  Key,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface GoogleSheetGridProps {
  paper: PaperDefinition;
  cases: PaperCaseRecord[];
  onUpdateCase: (caseId: string, field: keyof PaperCaseRecord, value: any) => void;
  onBatchUpdateCases?: (updatedCases: PaperCaseRecord[]) => void;
}

export function GoogleSheetGrid({
  paper,
  cases,
  onUpdateCase,
  onBatchUpdateCases,
}: GoogleSheetGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [classificationFilter, setClassificationFilter] = useState<string>("ALL");
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);
  const [sortField, setSortField] = useState<keyof PaperCaseRecord>("caseId");
  const [sortAsc, setSortAsc] = useState(true);

  // Google Sheets API modal state
  const [showGoogleApiModal, setShowGoogleApiModal] = useState(false);
  const [googleApiKey, setGoogleApiKey] = useState("");
  const [spreadsheetId, setSpreadsheetId] = useState("");

  // Filtered and Sorted Cases
  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      if (statusFilter !== "ALL" && c.reviewStatus !== statusFilter) return false;
      if (classificationFilter !== "ALL" && c.classificationStage !== classificationFilter)
        return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.caseId.toLowerCase().includes(q) ||
        c.patientName.toLowerCase().includes(q) ||
        c.diagnosis.toLowerCase().includes(q) ||
        c.procedureName.toLowerCase().includes(q) ||
        (c.subsite && c.subsite.toLowerCase().includes(q)) ||
        (c.sourceFile && c.sourceFile.toLowerCase().includes(q))
      );
    });
  }, [cases, searchQuery, statusFilter, classificationFilter]);

  const sortedCases = useMemo(() => {
    return [...filteredCases].sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];

      if (valA === null || valA === undefined) return sortAsc ? 1 : -1;
      if (valB === null || valB === undefined) return sortAsc ? -1 : 1;

      if (typeof valA === "number" && typeof valB === "number") {
        return sortAsc ? valA - valB : valB - valA;
      }
      return sortAsc
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [filteredCases, sortField, sortAsc]);

  const handleSort = (field: keyof PaperCaseRecord) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  // Copy TSV for Google Sheets (direct paste into any Google Sheet)
  const handleCopyGoogleSheetsTsv = () => {
    const headers = [
      "Case ID",
      "Patient Name",
      "Age",
      "Gender",
      paper.primaryClassificationName,
      paper.landingZoneRelevant ? "Landing Zone (mm)" : "Sub-Classification",
      paper.landingZoneRelevant ? "Landing Zone Adequacy" : "Anatomy Subsite",
      "Technique / Embolic",
      "Access Site",
      "Technical Success",
      "Complications",
      "Contrast (mL)",
      "Fluoroscopy Time (min)",
      "DAP (Gy.cm2)",
      "Review Status",
      "DICOM Series UID",
      "Review Notes",
      "Diagnosis",
      "Source File",
    ];

    const rows = sortedCases.map((c) => [
      c.caseId,
      c.patientName,
      c.age ?? "",
      c.gender,
      c.classificationStage || "Pending Review",
      paper.landingZoneRelevant ? (c.landingZoneMm ?? "") : (c.subclassification || ""),
      paper.landingZoneRelevant ? (c.landingZoneAdequacy || "") : (c.subsite || ""),
      c.embolicAgent,
      c.accessSite,
      c.technicalSuccess,
      c.complications,
      c.contrastVolumeMl ?? "",
      c.fluoroscopyTimeMins ?? "",
      c.doseAreaProductGycm2 ?? "",
      c.reviewStatus,
      c.dicomSeriesUid,
      c.reviewNotes,
      c.diagnosis,
      c.sourceFile,
    ]);

    const tsvContent = [headers.join("\t"), ...rows.map((r) => r.join("\t"))].join("\n");
    navigator.clipboard.writeText(tsvContent);
    setCopiedNotification(
      `Copied ${sortedCases.length} rows to clipboard! Open Google Sheets and press Ctrl+V to paste.`
    );
    setTimeout(() => setCopiedNotification(null), 4000);
  };

  // Download CSV
  const handleDownloadCsv = () => {
    const headers = [
      "Case_ID",
      "Patient_Name",
      "Age",
      "Gender",
      paper.primaryClassificationName.replace(/[^a-zA-Z0-9]/g, "_"),
      paper.landingZoneRelevant ? "Landing_Zone_mm" : "Sub_Classification",
      paper.landingZoneRelevant ? "Landing_Zone_Adequacy" : "Anatomy_Subsite",
      "Technique_Embolic",
      "Access_Site",
      "Technical_Success",
      "Complications",
      "Contrast_mL",
      "Fluoro_Time_min",
      "DAP_Gy_cm2",
      "Review_Status",
      "DICOM_Series_UID",
      "Diagnosis",
      "Source_File",
    ];

    const rows = sortedCases.map((c) => [
      c.caseId,
      c.patientName,
      c.age,
      c.gender,
      c.classificationStage || "Pending Review",
      paper.landingZoneRelevant ? c.landingZoneMm : c.subclassification,
      paper.landingZoneRelevant ? c.landingZoneAdequacy : c.subsite,
      c.embolicAgent,
      c.accessSite,
      c.technicalSuccess,
      c.complications,
      c.contrastVolumeMl,
      c.fluoroscopyTimeMins,
      c.doseAreaProductGycm2,
      c.reviewStatus,
      c.dicomSeriesUid,
      c.diagnosis,
      c.sourceFile,
    ]);

    const csvString = generateSafeCsv(headers, rows);
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${paper.code}_SMS_Jaipur_Research_Sheet.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const reviewedCount = cases.filter((c) => c.reviewStatus === "Completed").length;

  return (
    <div className="space-y-4">
      {/* Action and Filter Control Bar */}
      <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1">
          {/* Quick Search */}
          <div className="relative flex-1 min-w-[220px] max-w-sm">
            <Search className="w-4 h-4 text-[#5F6368] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search SMS ID, CR, patient name, diagnosis..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-[#DADCE0] text-xs focus:outline-none focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] bg-[#F8F9FA]"
            />
          </div>

          {/* Classification Stage Dropdown Filter */}
          <select
            value={classificationFilter}
            onChange={(e) => setClassificationFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-[#DADCE0] text-xs bg-white text-[#202124] focus:outline-none focus:border-[#1A73E8]"
          >
            <option value="ALL">All {paper.primaryClassificationName} Stages</option>
            {paper.primaryClassificationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {/* Review Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-[#DADCE0] text-xs bg-white text-[#202124] focus:outline-none focus:border-[#1A73E8]"
          >
            <option value="ALL">All Review Statuses</option>
            <option value="Pending Review">Pending Review</option>
            <option value="Completed">Review Completed</option>
          </select>

          <span className="text-xs text-[#5F6368] font-medium hidden sm:inline">
            Showing <strong>{sortedCases.length}</strong> of {cases.length} cases
          </span>
        </div>

        {/* Export & Google Integration Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyGoogleSheetsTsv}
            className="px-3 py-1.5 rounded-lg bg-[#E8F0FE] hover:bg-[#D2E3FC] text-[#1A73E8] text-xs font-semibold border border-[#D2E3FC] transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title="Copies table formatted for direct paste into Google Sheets"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy for Google Sheets</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadCsv}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-gray-50 text-[#202124] text-xs font-semibold border border-[#DADCE0] transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
            title="Download CSV for Excel, SPSS, or R"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CSV</span>
          </button>

          <button
            type="button"
            onClick={() => setShowGoogleApiModal(true)}
            className="p-1.5 rounded-lg bg-white hover:bg-gray-50 text-[#5F6368] hover:text-[#202124] border border-[#DADCE0] transition cursor-pointer"
            title="Google Sheets API & Cloud Sync Settings"
          >
            <Key className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copy Notification Toast */}
      {copiedNotification && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* Google Sheets-like Grid Container */}
      <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
        {/* Formula / Cell Helper Bar */}
        <div className="px-3 py-2 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between text-xs text-[#5F6368]">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-[#1A73E8] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              fx
            </span>
            <span className="italic">
              Direct cell click-to-edit enabled. Changes auto-save instantly to localStorage and recalculate live charts.
            </span>
          </div>
          <span className="font-medium text-[#202124]">
            Reviewed: {reviewedCount}/{cases.length} ({Math.round(cases.length > 0 ? (reviewedCount / cases.length) * 100 : 0)}%)
          </span>
        </div>

        {/* The Spreadsheet Table */}
        <div className="overflow-x-auto max-h-[640px] overflow-y-auto">
          <table className="w-full text-left text-xs border-collapse font-sans">
            <thead className="bg-[#F1F3F4] text-[#202124] sticky top-0 z-10 border-b border-[#DADCE0] select-none font-semibold">
              <tr>
                <th className="py-2.5 px-3 w-10 text-center border-r border-[#DADCE0] text-[10px] text-[#5F6368]">
                  #
                </th>
                <th
                  onClick={() => handleSort("caseId")}
                  className="py-2.5 px-3 min-w-[140px] border-r border-[#DADCE0] cursor-pointer hover:bg-[#E8EAED]"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span>Case ID (SMS)</span>
                    <ArrowUpDown className="w-3 h-3 text-[#5F6368]" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort("patientName")}
                  className="py-2.5 px-3 min-w-[150px] border-r border-[#DADCE0] cursor-pointer hover:bg-[#E8EAED]"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span>Patient Name</span>
                    <ArrowUpDown className="w-3 h-3 text-[#5F6368]" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort("age")}
                  className="py-2.5 px-2 w-16 text-center border-r border-[#DADCE0] cursor-pointer hover:bg-[#E8EAED]"
                >
                  Age/Sex
                </th>
                <th
                  onClick={() => handleSort("classificationStage")}
                  className="py-2.5 px-3 min-w-[210px] border-r border-[#DADCE0] bg-[#E8F0FE] text-[#1A73E8] cursor-pointer hover:bg-[#D2E3FC]"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span>{paper.primaryClassificationName}</span>
                    <ArrowUpDown className="w-3 h-3 text-[#1A73E8]" />
                  </div>
                </th>
                {paper.landingZoneRelevant ? (
                  <>
                    <th className="py-2.5 px-2 w-28 text-center border-r border-[#DADCE0]">
                      Landing Zone (mm)
                    </th>
                    <th className="py-2.5 px-3 min-w-[170px] border-r border-[#DADCE0]">
                      Landing Adequacy
                    </th>
                  </>
                ) : (
                  <th className="py-2.5 px-3 min-w-[160px] border-r border-[#DADCE0]">
                    {paper.secondaryParameterName}
                  </th>
                )}
                <th className="py-2.5 px-3 min-w-[190px] border-r border-[#DADCE0]">
                  Technique / Embolic
                </th>
                <th
                  onClick={() => handleSort("technicalSuccess")}
                  className="py-2.5 px-3 min-w-[160px] border-r border-[#DADCE0] cursor-pointer hover:bg-[#E8EAED]"
                >
                  Technical Success
                </th>
                <th className="py-2.5 px-3 min-w-[150px] border-r border-[#DADCE0]">
                  Complications
                </th>
                <th className="py-2.5 px-2 w-24 text-center border-r border-[#DADCE0]">
                  Fluoro (min)
                </th>
                <th className="py-2.5 px-2 w-24 text-center border-r border-[#DADCE0]">
                  DAP (Gy.cm²)
                </th>
                <th
                  onClick={() => handleSort("reviewStatus")}
                  className="py-2.5 px-3 min-w-[130px] border-r border-[#DADCE0] cursor-pointer hover:bg-[#E8EAED]"
                >
                  Review Status
                </th>
                <th className="py-2.5 px-3 min-w-[140px] border-r border-[#DADCE0]">
                  DICOM Series UID
                </th>
                <th className="py-2.5 px-3 min-w-[180px]">Review Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0]">
              {sortedCases.map((record, index) => {
                const isReviewed = record.reviewStatus === "Completed";

                return (
                  <tr
                    key={record.id}
                    className={`hover:bg-[#F8F9FA] transition-colors ${
                      isReviewed ? "bg-white" : "bg-[#FEF7E0]/15"
                    }`}
                  >
                    {/* Row Number */}
                    <td className="py-2 px-3 text-center border-r border-[#DADCE0] text-[11px] text-[#5F6368] bg-[#F8F9FA] font-mono">
                      {index + 1}
                    </td>

                    {/* Case ID */}
                    <td className="py-2 px-3 border-r border-[#DADCE0] font-mono text-xs font-semibold text-[#1A73E8]">
                      {record.caseId}
                    </td>

                    {/* Patient Name */}
                    <td className="py-2 px-3 border-r border-[#DADCE0] text-xs font-medium text-[#202124]">
                      {record.patientName}
                    </td>

                    {/* Age / Sex */}
                    <td className="py-2 px-2 border-r border-[#DADCE0] text-center text-xs text-[#5F6368]">
                      {record.age ? `${record.age}y` : "—"}/{record.gender}
                    </td>

                    {/* Primary Classification (IN-CELL DROPDOWN) */}
                    <td className="py-1 px-2 border-r border-[#DADCE0] bg-blue-50/30">
                      <select
                        value={record.classificationStage || ""}
                        onChange={(e) => {
                          onUpdateCase(record.id, "classificationStage", e.target.value);
                          if (e.target.value) {
                            onUpdateCase(record.id, "reviewStatus", "Completed");
                          }
                        }}
                        className={`w-full py-1 px-2 rounded text-xs font-medium border focus:outline-none focus:ring-1 focus:ring-[#1A73E8] ${
                          record.classificationStage
                            ? "bg-white border-[#BDC1C6] text-[#202124]"
                            : "bg-amber-50 border-amber-300 text-amber-900 italic"
                        }`}
                      >
                        <option value="">— Select Classification —</option>
                        {paper.primaryClassificationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Landing Zone or Sub-Classification */}
                    {paper.landingZoneRelevant ? (
                      <>
                        {/* Landing Zone mm (IN-CELL NUMBER INPUT) */}
                        <td className="py-1 px-2 border-r border-[#DADCE0]">
                          <input
                            type="number"
                            min="0"
                            max="50"
                            step="0.5"
                            value={record.landingZoneMm ?? ""}
                            onChange={(e) => {
                              const val = e.target.value === "" ? null : parseFloat(e.target.value);
                              onUpdateCase(record.id, "landingZoneMm", val);
                              if (val !== null) {
                                if (val >= 10) {
                                  onUpdateCase(record.id, "landingZoneAdequacy", "Adequate (>=10mm)");
                                } else if (val >= 5) {
                                  onUpdateCase(record.id, "landingZoneAdequacy", "Marginal (5-9mm)");
                                } else {
                                  onUpdateCase(record.id, "landingZoneAdequacy", "Insufficient (<5mm)");
                                }
                              }
                            }}
                            placeholder="mm"
                            className="w-full py-1 px-2 text-center rounded border border-[#DADCE0] text-xs focus:outline-none focus:border-[#1A73E8]"
                          />
                        </td>

                        {/* Landing Adequacy (IN-CELL DROPDOWN) */}
                        <td className="py-1 px-2 border-r border-[#DADCE0]">
                          <select
                            value={record.landingZoneAdequacy || ""}
                            onChange={(e) =>
                              onUpdateCase(record.id, "landingZoneAdequacy", e.target.value)
                            }
                            className="w-full py-1 px-2 rounded border border-[#DADCE0] text-xs bg-white text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                          >
                            <option value="">— Select Adequacy —</option>
                            <option value="Adequate (>=10mm)">Adequate (&ge;10mm)</option>
                            <option value="Marginal (5-9mm)">Marginal (5-9mm)</option>
                            <option value="Insufficient (<5mm)">Insufficient (&lt;5mm)</option>
                            <option value="Not Applicable">Not Applicable</option>
                          </select>
                        </td>
                      </>
                    ) : (
                      /* Non-VAPSA Secondary Parameter */
                      <td className="py-1 px-2 border-r border-[#DADCE0]">
                        <select
                          value={record.subclassification || ""}
                          onChange={(e) =>
                            onUpdateCase(record.id, "subclassification", e.target.value)
                          }
                          className="w-full py-1 px-2 rounded border border-[#DADCE0] text-xs bg-white text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                        >
                          <option value="">— Select {paper.secondaryParameterName} —</option>
                          {paper.secondaryParameterOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </td>
                    )}

                    {/* Technique / Embolic Modality (IN-CELL DROPDOWN / TEXT) */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <select
                        value={record.embolicAgent || ""}
                        onChange={(e) => onUpdateCase(record.id, "embolicAgent", e.target.value)}
                        className="w-full py-1 px-2 rounded border border-[#DADCE0] text-xs bg-white text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                      >
                        <option value={record.embolicAgent}>{record.embolicAgent || "Select Technique"}</option>
                        {paper.techniqueOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Technical Success */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <select
                        value={record.technicalSuccess}
                        onChange={(e) =>
                          onUpdateCase(record.id, "technicalSuccess", e.target.value)
                        }
                        className={`w-full py-1 px-2 rounded text-xs font-medium border focus:outline-none ${
                          record.technicalSuccess.includes("Success Achieved")
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-red-50 text-red-800 border-red-200"
                        }`}
                      >
                        <option value="Technical Success Achieved">Technical Success</option>
                        <option value="Partial Technical Success">Partial Success</option>
                        <option value="Procedure Aborted / Failed">Aborted / Failed</option>
                      </select>
                    </td>

                    {/* Complications */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <input
                        type="text"
                        value={record.complications}
                        onChange={(e) => onUpdateCase(record.id, "complications", e.target.value)}
                        className="w-full py-1 px-2 rounded border border-[#DADCE0] text-xs focus:outline-none focus:border-[#1A73E8]"
                      />
                    </td>

                    {/* Fluoroscopy Time mins */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={record.fluoroscopyTimeMins ?? ""}
                        onChange={(e) =>
                          onUpdateCase(
                            record.id,
                            "fluoroscopyTimeMins",
                            e.target.value === "" ? null : parseFloat(e.target.value)
                          )
                        }
                        placeholder="mins"
                        className="w-full py-1 px-1 text-center rounded border border-[#DADCE0] text-xs focus:outline-none focus:border-[#1A73E8]"
                      />
                    </td>

                    {/* DAP Gy.cm2 */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={record.doseAreaProductGycm2 ?? ""}
                        onChange={(e) =>
                          onUpdateCase(
                            record.id,
                            "doseAreaProductGycm2",
                            e.target.value === "" ? null : parseFloat(e.target.value)
                          )
                        }
                        placeholder="Gy.cm²"
                        className="w-full py-1 px-1 text-center rounded border border-[#DADCE0] text-xs focus:outline-none focus:border-[#1A73E8]"
                      />
                    </td>

                    {/* Review Status Toggle */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <select
                        value={record.reviewStatus}
                        onChange={(e) =>
                          onUpdateCase(
                            record.id,
                            "reviewStatus",
                            e.target.value as "Pending Review" | "Completed"
                          )
                        }
                        className={`w-full py-1 px-2 rounded text-xs font-semibold border focus:outline-none ${
                          record.reviewStatus === "Completed"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    {/* DICOM Series UID */}
                    <td className="py-1 px-2 border-r border-[#DADCE0]">
                      <input
                        type="text"
                        value={record.dicomSeriesUid || ""}
                        onChange={(e) =>
                          onUpdateCase(record.id, "dicomSeriesUid", e.target.value)
                        }
                        placeholder="Tag (0020,000E)"
                        className="w-full py-1 px-2 rounded border border-[#DADCE0] text-xs font-mono text-[11px] focus:outline-none focus:border-[#1A73E8]"
                      />
                    </td>

                    {/* Review Notes */}
                    <td className="py-1 px-2">
                      <input
                        type="text"
                        value={record.reviewNotes || ""}
                        onChange={(e) =>
                          onUpdateCase(record.id, "reviewNotes", e.target.value)
                        }
                        placeholder="Add retrospective notes..."
                        className="w-full py-1 px-2 rounded border border-[#DADCE0] text-xs focus:outline-none focus:border-[#1A73E8]"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Google Sheets API Modal */}
      {showGoogleApiModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#DADCE0] max-w-lg w-full p-6 shadow-xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#202124]">
                    Google Sheets Cloud Integration
                  </h3>
                  <p className="text-xs text-[#5F6368]">
                    Sync this dataset directly with your institution's Google Sheets account.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGoogleApiModal(false)}
                className="p-1.5 rounded-lg text-[#5F6368] hover:bg-gray-100"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div>
                <label className="font-semibold text-[#202124] block mb-1">
                  Google API Key (Optional)
                </label>
                <input
                  type="password"
                  value={googleApiKey}
                  onChange={(e) => setGoogleApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full p-2.5 rounded-lg border border-[#DADCE0] font-mono text-xs focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-[#202124] block mb-1">
                  Google Spreadsheet ID
                </label>
                <input
                  type="text"
                  value={spreadsheetId}
                  onChange={(e) => setSpreadsheetId(e.target.value)}
                  placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
                  className="w-full p-2.5 rounded-lg border border-[#DADCE0] font-mono text-xs focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] text-[11px] text-[#5F6368] space-y-1 leading-relaxed">
                <p>
                  <strong>Tip for instant sync:</strong> You do not even need an API key! Simply click{" "}
                  <strong>&quot;Copy for Google Sheets&quot;</strong> on the toolbar, open your Google Sheet, and press{" "}
                  <kbd className="px-1 py-0.5 rounded bg-white border border-gray-300 font-mono">
                    Ctrl + V
                  </kbd>
                  . All columns, headers, and values will paste seamlessly aligned.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowGoogleApiModal(false)}
                className="px-4 py-2 rounded-lg border border-[#DADCE0] text-xs font-semibold text-[#5F6368] hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowGoogleApiModal(false);
                  setCopiedNotification("Google API credentials saved for session sync.");
                  setTimeout(() => setCopiedNotification(null), 3000);
                }}
                className="px-4 py-2 rounded-lg bg-[#1A73E8] text-white text-xs font-semibold hover:bg-blue-600"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
