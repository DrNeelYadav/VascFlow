"use client";

import React from "react";

export function WordPadRuler() {
  return (
    <div className="h-5 bg-slate-200 dark:bg-slate-800 border-x border-b border-slate-300 dark:border-slate-700 flex items-center justify-between px-8 text-[9px] font-mono text-slate-500 select-none print:hidden shadow-inner">
      <div className="flex items-center gap-6 sm:gap-12 w-full justify-between">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((inch) => (
          <div key={inch} className="relative flex flex-col items-center">
            <span className="leading-none">{inch}</span>
            <div className="w-[1px] h-2 bg-slate-400 mt-0.5" />
          </div>
        ))}
      </div>
    </div>
  );
}
