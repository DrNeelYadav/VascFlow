"use client";

import React from "react";
import type { OperativeNoteDocumentData } from "./WordPadPaperSheet";

interface WordPadHeaderBlockProps {
  data: OperativeNoteDocumentData;
  onChange: <K extends keyof OperativeNoteDocumentData>(
    key: K,
    value: OperativeNoteDocumentData[K]
  ) => void;
}

export function WordPadHeaderBlock({ data, onChange }: WordPadHeaderBlockProps) {
  return (
    <div className="space-y-3">
      {/* Institutional Header */}
      <div className="text-center space-y-0.5 border-b border-black/10 pb-2">
        <h1 className="text-base sm:text-lg font-bold tracking-tight uppercase leading-tight">
          Department of Interventional Radiology
        </h1>
        <h2 className="text-sm sm:text-base font-semibold leading-tight">
          S.M.S. Hospital, Jaipur
        </h2>
      </div>

      {/* Procedure Title (Bold Centered) */}
      <div className="text-center pt-1 pb-1">
        <input
          type="text"
          value={data.procedureTitle}
          onChange={(e) => onChange("procedureTitle", e.target.value)}
          className="w-full text-center text-sm sm:text-base font-bold bg-transparent border-b border-dashed border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none tracking-wide"
          placeholder="Procedure Title"
        />
      </div>

      {/* Demographics Table: 2 Columns x 3 Rows */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black text-xs leading-normal">
          <tbody>
            <tr>
              <td className="border border-black p-1.5 w-1/2">
                <span className="font-semibold">Patient Name : </span>
                <input
                  type="text"
                  value={data.patientName}
                  onChange={(e) => onChange("patientName", e.target.value)}
                  className="bg-transparent border-none focus:outline-none font-medium w-3/5"
                  placeholder="Patient Name"
                />
              </td>
              <td className="border border-black p-1.5 w-1/2">
                <span className="font-semibold">Age/ Sex : </span>
                <input
                  type="text"
                  value={data.ageSex}
                  onChange={(e) => onChange("ageSex", e.target.value)}
                  className="bg-transparent border-none focus:outline-none font-medium w-3/5"
                  placeholder="e.g. 45 Yr / M"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-black p-1.5">
                <span className="font-semibold">Date : </span>
                <input
                  type="text"
                  value={data.dateStr}
                  onChange={(e) => onChange("dateStr", e.target.value)}
                  className="bg-transparent border-none focus:outline-none font-medium w-3/5"
                  placeholder="DD/MM/YYYY"
                />
              </td>
              <td className="border border-black p-1.5">
                <span className="font-semibold">Referred by : </span>
                <input
                  type="text"
                  value={data.referredBy}
                  onChange={(e) => onChange("referredBy", e.target.value)}
                  className="bg-transparent border-none focus:outline-none font-medium w-3/5"
                  placeholder="Referring Department"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-black p-1.5">
                <span className="font-semibold">HID / CR No: </span>
                <input
                  type="text"
                  value={data.hidCr}
                  onChange={(e) => onChange("hidCr", e.target.value)}
                  className="bg-transparent border-none focus:outline-none font-mono font-medium w-3/5"
                  placeholder="CR Number"
                />
              </td>
              <td className="border border-black p-1.5">
                <span className="font-semibold">IR no. : </span>
                <input
                  type="text"
                  value={data.irNo}
                  onChange={(e) => onChange("irNo", e.target.value)}
                  className="bg-transparent border-none focus:outline-none font-mono font-medium w-3/5"
                  placeholder="IR Number"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pre-Procedure Checklist Table: 3 Columns x 2 Rows */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black text-[11px] leading-tight">
          <tbody>
            <tr>
              <td className="border border-black p-1 w-1/3">
                <span className="font-semibold">Allergies: </span>
                <input
                  type="text"
                  value={data.allergies}
                  onChange={(e) => onChange("allergies", e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-1/2"
                />
              </td>
              <td className="border border-black p-1 w-1/3">
                <span className="font-semibold">Anesthesia: </span>
                <input
                  type="text"
                  value={data.anesthesia}
                  onChange={(e) => onChange("anesthesia", e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-1/2"
                />
              </td>
              <td className="border border-black p-1 w-1/3">
                <span className="font-semibold">Medication: </span>
                <input
                  type="text"
                  value={data.medication}
                  onChange={(e) => onChange("medication", e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-1/2"
                />
              </td>
            </tr>
            <tr>
              <td className="border border-black p-1">
                <span className="font-semibold">Field: </span>
                <input
                  type="text"
                  value={data.field}
                  onChange={(e) => onChange("field", e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-1/2"
                />
              </td>
              <td className="border border-black p-1">
                <span className="font-semibold">Classification: </span>
                <input
                  type="text"
                  value={data.procedureClassification}
                  onChange={(e) => onChange("procedureClassification", e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-1/2"
                />
              </td>
              <td className="border border-black p-1">
                <span className="font-semibold">Position: </span>
                <input
                  type="text"
                  value={data.position}
                  onChange={(e) => onChange("position", e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-1/2"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
