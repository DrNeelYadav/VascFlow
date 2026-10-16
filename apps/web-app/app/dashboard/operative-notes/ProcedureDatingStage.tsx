"use client";

import React, { useState } from "react";
import { Printer } from "lucide-react";
import { ProcedureCategory } from "../pre-booking/preBookingTypes";
import { SclerotherapyPage1Sheet } from "../pre-booking/SclerotherapyPage1Sheet";
import { SclerotherapyPage2Sheet } from "../pre-booking/SclerotherapyPage2Sheet";
import { TacePreBookingSheet } from "../pre-booking/TacePreBookingSheet";
import { BaePreBookingSheet } from "../pre-booking/BaePreBookingSheet";
import { BleederPreBookingSheet } from "../pre-booking/BleederPreBookingSheet";
import { GeneralIrPreBookingSheet } from "../pre-booking/GeneralIrPreBookingSheet";

interface ProcedureDatingStageProps {
  patientName: string;
  age: string;
  sex: string;
  uhid: string;
  contactNumber: string;
  location: string;
  unit: string;
  scheduledDate: string;
  initialCategory?: ProcedureCategory;
}

const CATEGORIES: { key: ProcedureCategory; label: string }[] = [
  { key: "sclerotherapy", label: "Sclerotherapy (AIIMS Delhi)" },
  { key: "tace", label: "TACE (Liver Anatomy)" },
  { key: "bae", label: "BAE (Lungs / Mediastinum)" },
  { key: "bleeder", label: "GI Bleeder (Celiac Axis)" },
  { key: "general", label: "General IR Dating" },
];

export const ProcedureDatingStage: React.FC<ProcedureDatingStageProps> = ({
  patientName,
  age,
  sex,
  uhid,
  contactNumber,
  location,
  unit,
  scheduledDate,
  initialCategory = "sclerotherapy",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory>(initialCategory);
  const [scleroPage, setScleroPage] = useState<"page1" | "page2" | "both">("both");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      {/* Category Tabs & Print Action */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-2xs print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-1">
            Procedure Protocol:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-all border ${
                selectedCategory === cat.key
                  ? "bg-teal-700 text-white border-teal-800 shadow-xs"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {selectedCategory === "sclerotherapy" && (
            <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md border border-slate-200 dark:border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setScleroPage("page1")}
                className={`px-2 py-0.5 rounded font-medium ${scleroPage === "page1" ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
              >
                Page 1
              </button>
              <button
                type="button"
                onClick={() => setScleroPage("page2")}
                className={`px-2 py-0.5 rounded font-medium ${scleroPage === "page2" ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
              >
                Page 2
              </button>
              <button
                type="button"
                onClick={() => setScleroPage("both")}
                className={`px-2 py-0.5 rounded font-medium ${scleroPage === "both" ? "bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 font-bold shadow-2xs" : "text-slate-600"}`}
              >
                Both Pages
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print A4 Dating Sheet</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet View */}
      <div className="print:p-0 print:m-0 space-y-6 print:space-y-0">
        {selectedCategory === "sclerotherapy" && (
          <>
            {(scleroPage === "page1" || scleroPage === "both") && (
              <div className="print:break-after-page">
                <SclerotherapyPage1Sheet
                  patientName={patientName}
                  age={age}
                  sex={sex}
                  uhid={uhid}
                  contactNumber={contactNumber}
                  location={location}
                  unit={unit}
                  scheduledDate={scheduledDate}
                />
              </div>
            )}
            {(scleroPage === "page2" || scleroPage === "both") && (
              <div className="print:break-before-page">
                <SclerotherapyPage2Sheet patientName={patientName} uhid={uhid} />
              </div>
            )}
          </>
        )}

        {selectedCategory === "tace" && (
          <TacePreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}

        {selectedCategory === "bae" && (
          <BaePreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}

        {selectedCategory === "bleeder" && (
          <BleederPreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}

        {selectedCategory === "general" && (
          <GeneralIrPreBookingSheet
            patientName={patientName}
            age={age}
            sex={sex}
            uhid={uhid}
            contactNumber={contactNumber}
            location={location}
            unit={unit}
            scheduledDate={scheduledDate}
          />
        )}
      </div>
    </div>
  );
};
