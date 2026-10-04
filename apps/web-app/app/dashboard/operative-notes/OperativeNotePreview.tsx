"use client";

import React from "react";

interface OperativeNotePreviewProps {
  text: string;
}

export function OperativeNotePreview({ text }: OperativeNotePreviewProps) {
  return (
    <div className="card-compact p-6 bg-white dark:bg-slate-950 font-mono text-[11px] leading-relaxed text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 rounded-md whitespace-pre-wrap select-text shadow-xs min-h-[600px]">
      {text}
    </div>
  );
}
