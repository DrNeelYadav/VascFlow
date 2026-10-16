"use client";

import React from "react";
import {
  Printer,
  Copy,
  Download,
  RotateCcw,
  Check,
  FileText,
} from "lucide-react";
import { PROCEDURE_TEMPLATES } from "./procedureTemplatesCatalog";
import { WordPadFormattingControls } from "./WordPadFormattingControls";

interface WordPadRibbonProps {
  selectedProcedureId: string;
  onSelectProcedure: (id: string) => void;
  fontFamily: string;
  setFontFamily: (font: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  isBold: boolean;
  setIsBold: React.Dispatch<React.SetStateAction<boolean>>;
  isItalic: boolean;
  setIsItalic: React.Dispatch<React.SetStateAction<boolean>>;
  isUnderline: boolean;
  setIsUnderline: React.Dispatch<React.SetStateAction<boolean>>;
  textAlign: "left" | "center" | "right" | "justify";
  setTextAlign: (align: "left" | "center" | "right" | "justify") => void;
  copyFeedback: boolean;
  onCopy: () => void;
  onPrint: () => void;
  onDownloadDocx: () => void;
  onResetTemplate: () => void;
}

export function WordPadRibbon({
  selectedProcedureId,
  onSelectProcedure,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  isBold,
  setIsBold,
  isItalic,
  setIsItalic,
  isUnderline,
  setIsUnderline,
  textAlign,
  setTextAlign,
  copyFeedback,
  onCopy,
  onPrint,
  onDownloadDocx,
  onResetTemplate,
}: WordPadRibbonProps) {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-t-xl p-2 select-none shadow-xs text-xs print:hidden space-y-2">
      {/* Top Row: File & Document Actions + Procedure Dropdown */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shrink-0">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Select Procedure Template:</span>
          </span>
          <select
            value={selectedProcedureId}
            onChange={(e) => onSelectProcedure(e.target.value)}
            className="h-8 px-2.5 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none max-w-xs sm:max-w-md truncate"
          >
            {PROCEDURE_TEMPLATES.map((tmpl) => (
              <option key={tmpl.id} value={tmpl.id}>
                {tmpl.title} ({tmpl.category})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          <button
            type="button"
            onClick={onResetTemplate}
            title="Reset to default template"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            type="button"
            onClick={onCopy}
            className="flex items-center gap-1 px-3 py-1.5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-2xs"
          >
            {copyFeedback ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copyFeedback ? "Copied" : "Copy Note"}</span>
          </button>
          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
          <button
            type="button"
            onClick={onDownloadDocx}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export .doc</span>
          </button>
        </div>
      </div>

      {/* Formatting Controls Bar */}
      <WordPadFormattingControls
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        isBold={isBold}
        setIsBold={setIsBold}
        isItalic={isItalic}
        setIsItalic={setIsItalic}
        isUnderline={isUnderline}
        setIsUnderline={setIsUnderline}
        textAlign={textAlign}
        setTextAlign={setTextAlign}
      />
    </div>
  );
}
