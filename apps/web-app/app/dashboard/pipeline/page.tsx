"use client";

import React, { useState } from "react";
import { useEndoflowStore, type ClinicalStage, type EndoflowPatient } from "../useEndoflowStore";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { PatientDossierModal } from "../../components/PatientDossierModal";

const COLUMNS: {
  label: string;
  statuses: ClinicalStage[];
  color: string;
  bgColor: string;
}[] = [
  {
    label: "Scheduled / Pre-Op Bay",
    statuses: ["Scheduled", "Pre-Op Pending"],
    color: "#5F6368",
    bgColor: "#F1F3F4",
  },
  {
    label: "In Cath-Lab",
    statuses: ["In Cath-Lab"],
    color: "#1A73E8",
    bgColor: "#E8F0FE",
  },
  {
    label: "Post-Op ICU",
    statuses: ["Post-Op ICU"],
    color: "#C5221F",
    bgColor: "#FCE8E6",
  },
  {
    label: "Discharged",
    statuses: ["Discharged"],
    color: "#137333",
    bgColor: "#E6F4EA",
  },
];

const MODALITY_BADGE: Record<string, string> = {
  XA: "bg-[#FCE8E6] text-[#C5221F]",
  CT: "bg-[#FEF7E0] text-[#B06000]",
  US: "bg-[#E6F4EA] text-[#137333]",
  ROSE: "bg-[#F3E8FD] text-[#7E22CE]",
};

const NEXT_STAGE: Record<string, ClinicalStage> = {
  Scheduled: "Pre-Op Pending",
  "Pre-Op Pending": "In Cath-Lab",
  "In Cath-Lab": "Post-Op ICU",
  "Post-Op ICU": "Discharged",
};

export default function PipelinePage() {
  const patients = useEndoflowStore((s) => s.patients);
  const advanceStage = useEndoflowStore((s) => s.advanceStage);
  const [selectedPatient, setSelectedPatient] = useState<EndoflowPatient | null>(null);

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#DADCE0]">
        <div>
          <h2 className="text-base font-bold text-[#202124]">
            Cath-Lab Procedural Pipeline
          </h2>
          <p className="text-xs text-[#5F6368]">
            Turnaround tracking across clinical stages
          </p>
        </div>
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Worklist
        </Link>
      </div>

      {/* Kanban Columns */}
      <div className="flex gap-3 overflow-x-auto pb-4">
        {COLUMNS.map((col) => {
          const colPatients = patients.filter((pt) =>
            col.statuses.includes(pt.status)
          );
          return (
            <div
              key={col.label}
              className="min-w-[260px] flex-1 flex flex-col rounded-xl border border-[#DADCE0] bg-white p-3"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-bold"
                  style={{ color: col.color }}
                >
                  {col.label}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                  style={{
                    backgroundColor: col.bgColor,
                    color: col.color,
                  }}
                >
                  {colPatients.length}
                </span>
              </div>

              {/* Patient Cards */}
              <div className="space-y-2 overflow-y-auto flex-1 pr-1 max-h-[60vh]">
                {colPatients.length === 0 && (
                  <div className="text-center py-6 text-[11px] text-[#80868B]">
                    No patients in this stage
                  </div>
                )}
                {colPatients.map((pt) => (
                  <div
                    key={pt.id}
                    className="p-3 rounded-xl border border-[#DADCE0] hover:border-[#1A73E8] transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#202124] truncate">
                          {pt.name}
                        </p>
                        <p className="text-[10px] text-[#5F6368]">
                          {pt.age}Y/{pt.sex === "Male" ? "M" : "F"} &bull;{" "}
                          {pt.hid}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          MODALITY_BADGE[pt.modality] || "bg-[#F1F3F4] text-[#5F6368]"
                        }`}
                      >
                        {pt.modality}
                      </span>
                    </div>

                    <p className="text-[10px] text-[#3C4043] truncate">
                      {pt.procedure}
                    </p>

                    <div className="flex items-center gap-1.5">
                      <button
                        className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#DADCE0] bg-white text-[#5F6368] hover:bg-[#F1F3F4] text-[10px] font-medium transition-colors cursor-pointer"
                        onClick={() => setSelectedPatient(pt)}
                      >
                        <Eye className="w-3 h-3" />
                        Dossier
                      </button>
                      {NEXT_STAGE[pt.status] && (
                        <button
                          onClick={() =>
                            advanceStage(
                              pt.id,
                              NEXT_STAGE[pt.status]
                            )
                          }
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[10px] font-medium transition-colors cursor-pointer"
                        >
                          <ArrowRight className="w-3 h-3" />
                          Advance
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Patient Clinical Dossier Modal */}
      {selectedPatient && (
        <PatientDossierModal
          patient={selectedPatient}
          isOpen={true}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}
