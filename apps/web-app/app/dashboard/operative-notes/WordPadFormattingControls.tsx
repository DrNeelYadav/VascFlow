"use client";

import React from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

interface WordPadFormattingControlsProps {
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
}

export function WordPadFormattingControls({
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
}: WordPadFormattingControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-slate-700 dark:text-slate-300">
      <select
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
        className="h-7 px-2 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-medium focus:outline-none"
      >
        <option value="Calibri, sans-serif">Calibri</option>
        <option value="'Times New Roman', serif">Times New Roman</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="Georgia, serif">Georgia</option>
      </select>

      <select
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="h-7 px-1.5 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-medium focus:outline-none"
      >
        <option value="9pt">9</option>
        <option value="10pt">10</option>
        <option value="11pt">11</option>
        <option value="12pt">12</option>
        <option value="14pt">14</option>
      </select>

      <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

      <button
        type="button"
        onClick={() => setIsBold((b) => !b)}
        title="Bold (Ctrl+B)"
        className={`p-1 rounded transition-colors ${
          isBold
            ? "bg-blue-600 text-white font-bold"
            : "bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        <Bold className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => setIsItalic((i) => !i)}
        title="Italic (Ctrl+I)"
        className={`p-1 rounded transition-colors ${
          isItalic
            ? "bg-blue-600 text-white font-bold"
            : "bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        <Italic className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => setIsUnderline((u) => !u)}
        title="Underline (Ctrl+U)"
        className={`p-1 rounded transition-colors ${
          isUnderline
            ? "bg-blue-600 text-white font-bold"
            : "bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        <Underline className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1" />

      <button
        type="button"
        onClick={() => setTextAlign("left")}
        title="Align Left"
        className={`p-1 rounded transition-colors ${
          textAlign === "left"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        <AlignLeft className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => setTextAlign("center")}
        title="Align Center"
        className={`p-1 rounded transition-colors ${
          textAlign === "center"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        <AlignCenter className="w-3.5 h-3.5" />
      </button>
      <button
        type="button"
        onClick={() => setTextAlign("right")}
        title="Align Right"
        className={`p-1 rounded transition-colors ${
          textAlign === "right"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        <AlignRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
