"use client";

import React, { useState } from "react";
import { useEndoflowStore, type DopplerRecord } from "../useEndoflowStore";
import { CheckCircle, AlertTriangle, Clock, X } from "lucide-react";

const INTERVAL_FILTERS = [
  { key: "all", label: "All Follow-ups" },
  { key: "1m", label: "1-Month Post-Op" },
  { key: "3m", label: "3-Month Post-Op" },
  { key: "completed", label: "Completed" },
];

const PATENCY_OPTIONS = [
  "Widely Patent (Normal Velocity)",
  "Borderline / Mild Acceleration",
  "Hemodynamically Significant Stenosis",
  "Occluded Shunt / In-Stent Thrombosis",
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] text-[10px] font-bold">
        <CheckCircle className="w-3 h-3" />
        Completed
      </span>
    );
  }
  if (status === "Due This Week") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FEF7E0] text-[#B06000] text-[10px] font-bold">
        <AlertTriangle className="w-3 h-3" />
        Due This Week
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-[10px] font-bold">
      <Clock className="w-3 h-3" />
      Scheduled
    </span>
  );
}

export default function DopplerPage() {
  const dopplerRecords = useEndoflowStore((s) => s.dopplerRecords);
  const updateDopplerRecord = useEndoflowStore((s) => s.updateDopplerRecord);
  const [activeFilter, setActiveFilter] = useState("all");
  const [recordModal, setRecordModal] = useState<DopplerRecord | null>(null);

  // Form state for recording a finding
  const [formPsv, setFormPsv] = useState("");
  const [formMpv, setFormMpv] = useState("");
  const [formPatency, setFormPatency] = useState(PATENCY_OPTIONS[0]);
  const [formNotes, setFormNotes] = useState("");
  const [formDate, setFormDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [formInterval, setFormInterval] = useState("1-Month Post-Op");

  const filtered =
    activeFilter === "all"
      ? dopplerRecords
      : dopplerRecords.filter((d) => d.interval === activeFilter);

  const dueCount = dopplerRecords.filter(
    (d) => d.status === "Due This Week"
  ).length;

  const openRecordModal = (rec: DopplerRecord) => {
    setRecordModal(rec);
    setFormPsv(String(rec.lastPsv || ""));
    setFormMpv(String(rec.lastMpv || ""));
    setFormPatency(rec.patency);
    setFormNotes(rec.notes);
    setFormDate(new Date().toISOString().split("T")[0]);
    setFormInterval(rec.intervalLabel);
  };

  const handleSaveFinding = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recordModal) return;
    updateDopplerRecord(recordModal.id, {
      lastPsv: parseFloat(formPsv) || 0,
      lastMpv: parseFloat(formMpv) || 0,
      patency: formPatency,
      notes: formNotes,
      status: "Completed",
      interval: "completed",
    });
    setRecordModal(null);
  };

  return (
    <div className="space-y-4 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-white border border-[#DADCE0]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-[#202124]">
              Doppler Ultrasound Surveillance & Shunt Patency Tracker
            </h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7]">
              {dueCount} Due This Week
            </span>
          </div>
          <p className="text-[11px] text-[#5F6368] mt-0.5">
            CIRSE / APASL surveillance protocol for TIPS/Viatorr, arterial
            stents, and embolization
          </p>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {INTERVAL_FILTERS.map((f) => {
            const count =
              f.key === "all"
                ? dopplerRecords.length
                : dopplerRecords.filter((d) => d.interval === f.key).length;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeFilter === f.key
                    ? "bg-[#E8F0FE] text-[#1A73E8]"
                    : "hover:bg-[#F1F3F4] text-[#5F6368]"
                }`}
              >
                {f.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Velocity Threshold Guidance Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs">
        <div className="space-y-0.5">
          <span className="font-bold text-[#166534]">
            <CheckCircle className="w-3 h-3 inline mr-1" />
            TIPS / Viatorr Shunt:
          </span>
          <p className="text-[11px] text-[#15803D]">
            Normal Peak Velocity: <strong>90 - 190 cm/s</strong>
            <br />
            Alert if &lt;50 cm/s (thrombosis) or &gt;200 cm/s (stenosis).
          </p>
        </div>
        <div className="space-y-0.5">
          <span className="font-bold text-[#166534]">
            <CheckCircle className="w-3 h-3 inline mr-1" />
            Peripheral Arterial Stents:
          </span>
          <p className="text-[11px] text-[#15803D]">
            Normal Velocity: <strong>&lt; 150 cm/s</strong>
            <br />
            Peak Systolic Velocity Ratio (PSVR) &lt; 2.0.
          </p>
        </div>
        <div className="space-y-0.5">
          <span className="font-bold text-[#166534]">
            <CheckCircle className="w-3 h-3 inline mr-1" />
            Dialysis AVF / Graft:
          </span>
          <p className="text-[11px] text-[#15803D]">
            Volume Flow: <strong>&gt; 500-600 mL/min</strong>
            <br />
            Normal anastomotic PSV &lt; 300 cm/s.
          </p>
        </div>
      </div>

      {/* Surveillance Table & Mobile Cards */}
      <div className="bg-white border border-[#DADCE0] rounded-xl overflow-hidden">
        {/* Mobile Cards */}
        <div className="block md:hidden divide-y divide-[#E8EAED]">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#80868B]">
              No Doppler surveillance cases in this interval.
            </div>
          ) : (
            filtered.map((d) => (
              <div key={`m-${d.id}`} className="p-3.5 space-y-2 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[#1A73E8]">
                      Due: {d.dueDate}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#F1F3F4] text-[#3C4043] text-[10px] font-semibold">
                      {d.intervalLabel}
                    </span>
                  </div>
                  <StatusBadge status={d.status} />
                </div>

                <div>
                  <p className="font-bold text-sm text-[#202124]">{d.name}</p>
                  <p className="text-xs text-[#5F6368] font-mono">
                    {d.age}Y/{d.sex} • CR: {d.crNo}
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-2.5 rounded-lg border border-[#E8EAED] space-y-1 text-xs">
                  <div className="font-semibold text-[#202124]">{d.proc}</div>
                  <div className="text-[11px] text-[#1A73E8] font-medium">{d.implant}</div>
                  <div className="text-[11px] text-[#5F6368]">
                    {d.targetVessel} • {d.targetVelocity}
                  </div>
                  {d.lastPsv > 0 && (
                    <div className="text-[11px] font-mono text-[#1A73E8]">
                      Last PSV: {d.lastPsv} cm/s {d.lastMpv > 0 && `| MPV: ${d.lastMpv} cm/s`}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end pt-1">
                  {d.status !== "Completed" ? (
                    <button
                      onClick={() => openRecordModal(d)}
                      className="px-3 py-1 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Record Finding
                    </button>
                  ) : (
                    <span className="text-xs text-[#137333] font-semibold">
                      Completed
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#DADCE0] bg-[#F8F9FA]">
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider w-24">
                  Due Date
                </th>
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider">
                  Patient Details
                </th>
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider">
                  Procedure & Implant
                </th>
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider">
                  Interval
                </th>
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider">
                  Target Vessel & Velocity
                </th>
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider text-center w-32">
                  Status
                </th>
                <th className="px-3 py-2.5 font-bold text-[#5F6368] text-[11px] uppercase tracking-wider text-right w-32">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-3 py-8 text-center text-[#80868B]"
                  >
                    No Doppler surveillance cases in this interval.
                  </td>
                </tr>
              )}
              {filtered.map((d) => (
                <tr
                  key={d.id}
                  className="border-b border-[#F1F3F4] hover:bg-[#F8F9FA] transition-colors"
                >
                  <td className="px-3 py-2.5 font-mono font-semibold text-[#202124]">
                    {d.dueDate}
                  </td>
                  <td className="px-3 py-2.5">
                    <p className="font-bold text-[#202124]">{d.name}</p>
                    <p className="text-[10px] text-[#5F6368]">
                      {d.age}Y/{d.sex} &bull; {d.crNo}
                    </p>
                  </td>
                  <td className="px-3 py-2.5">
                    <p className="font-semibold text-[#202124]">{d.proc}</p>
                    <p className="text-[10px] text-[#1A73E8] font-medium">
                      {d.implant}
                    </p>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#F1F3F4] text-[#3C4043] text-[10px] font-semibold">
                      {d.intervalLabel}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <p className="font-semibold text-[#202124]">
                      {d.targetVessel}
                    </p>
                    <p className="text-[10px] text-[#5F6368]">
                      {d.targetVelocity}
                    </p>
                    {d.lastPsv > 0 && (
                      <p className="text-[10px] font-mono text-[#1A73E8]">
                        Last PSV: {d.lastPsv} cm/s
                        {d.lastMpv > 0 && ` | MPV: ${d.lastMpv} cm/s`}
                      </p>
                    )}
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <StatusBadge status={d.status} />
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    {d.status !== "Completed" ? (
                      <button
                        onClick={() => openRecordModal(d)}
                        className="px-2.5 py-1 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                      >
                        Record Finding
                      </button>
                    ) : (
                      <span className="text-[10px] text-[#137333] font-semibold">
                        Done
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Doppler Finding Modal */}
      {recordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Record Doppler Ultrasound Finding
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Department of Interventional Radiology, SMS Jaipur
                </p>
              </div>
              <button
                onClick={() => setRecordModal(null)}
                className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#80868B] hover:text-[#202124] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFinding} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                  Patient Name & CR No
                </label>
                <input
                  type="text"
                  value={`${recordModal.name} | ${recordModal.crNo}`}
                  readOnly
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#F8F9FA] text-[#202124] text-xs font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                    Surveillance Interval
                  </label>
                  <select
                    value={formInterval}
                    onChange={(e) => setFormInterval(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] text-xs font-semibold focus:border-[#1A73E8] focus:outline-none"
                  >
                    <option value="1-Month Post-Op">1-Month Post-Op</option>
                    <option value="3-Month Post-Op">3-Month Post-Op</option>
                    <option value="6-Month Post-Op">6-Month Post-Op</option>
                    <option value="1-Year Post-Op">1-Year Post-Op</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                    Doppler Date
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] text-xs focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                    Shunt / In-Stent PSV (cm/s)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formPsv}
                    onChange={(e) => setFormPsv(e.target.value)}
                    placeholder="e.g. 135"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] text-xs font-mono focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                    Main PV / Distal Velocity (cm/s)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formMpv}
                    onChange={(e) => setFormMpv(e.target.value)}
                    placeholder="e.g. 38"
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] text-xs font-mono focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                  Patency Assessment
                </label>
                <select
                  value={formPatency}
                  onChange={(e) => setFormPatency(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#137333] text-xs font-bold focus:border-[#1A73E8] focus:outline-none"
                >
                  {PATENCY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5F6368] mb-1">
                  Ultrasound Findings & Liver Stiffness (kPa)
                </label>
                <textarea
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  rows={2}
                  placeholder="Ascites status, spleen size, liver shear-wave elastography..."
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] text-xs focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setRecordModal(null)}
                  className="px-4 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Save Doppler Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
