"use client";

import React from "react";

/**
 * High-Resolution Printable Vector Line Diagram: Lungs & Mediastinum (Tracheobronchial Tree)
 * Specifically crafted for Bronchial Artery Embolization (BAE) pre-booking pen markup.
 * Clear tracheobronchial arborization, mediastinal contour, aortic arch, and lobes.
 */
export const LungMediastinumLineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[420px] mx-auto",
}) => {
  return (
    <div className={`border border-slate-300 dark:border-slate-700 rounded-lg p-3 bg-white text-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Lungs, Mediastinum & Bronchial Tree (BAE Map)
        </span>
        <span className="text-[10px] font-mono text-slate-500">[Pen Annotation Ready]</span>
      </div>

      <svg
        viewBox="0 0 500 370"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        {/* Thoracic Cavity & Ribcage Outlines (Subtle Reference) */}
        <path
          d="M 50,300 C 40,150 110,50 200,45 M 300,45 C 390,50 460,150 450,300"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        {/* Right Lung Outline (3 Lobes: Superior, Middle, Inferior) */}
        <path
          d="M 180,60 C 130,70 70,120 70,210 C 70,270 100,300 175,295 C 190,290 195,250 195,200 C 195,140 190,80 180,60 Z"
          stroke="#0f172a"
          strokeWidth="2"
          fill="#fafafa"
        />
        {/* Right Horizontal Fissure (Separating RUL and RML) */}
        <line x1="75" y1="180" x2="192" y2="175" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />
        {/* Right Oblique Fissure (Separating RML/RUL from RLL) */}
        <path d="M 175,100 C 140,180 110,240 90,285" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Left Lung Outline (2 Lobes with Cardiac Notch) */}
        <path
          d="M 320,60 C 370,70 430,120 430,210 C 430,270 400,300 325,295 C 310,290 300,260 295,210 C 290,165 305,140 305,80 C 310,70 315,65 320,60 Z"
          stroke="#0f172a"
          strokeWidth="2"
          fill="#fafafa"
        />
        {/* Left Oblique Fissure (Separating LUL and LLL) */}
        <path d="M 325,100 C 360,180 390,240 410,285" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Trachea (Central Airway) */}
        <rect x="238" y="25" width="24" height="85" rx="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />
        {/* Tracheal rings */}
        <line x1="238" y1="40" x2="262" y2="40" stroke="#64748b" strokeWidth="1.2" />
        <line x1="238" y1="55" x2="262" y2="55" stroke="#64748b" strokeWidth="1.2" />
        <line x1="238" y1="70" x2="262" y2="70" stroke="#64748b" strokeWidth="1.2" />
        <line x1="238" y1="85" x2="262" y2="85" stroke="#64748b" strokeWidth="1.2" />
        <line x1="238" y1="100" x2="262" y2="100" stroke="#64748b" strokeWidth="1.2" />
        <text x="250" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">Trachea</text>

        {/* Carina & Bronchial Bifurcation */}
        {/* Right Main Bronchus (Shorter, wider, more vertical) */}
        <path d="M 238,110 L 205,145 L 218,155 L 248,118 Z" stroke="#0f172a" strokeWidth="1.8" fill="#ffffff" />
        {/* Left Main Bronchus (Longer, more horizontal) */}
        <path d="M 262,110 L 298,145 L 288,155 L 252,118 Z" stroke="#0f172a" strokeWidth="1.8" fill="#ffffff" />

        {/* Lobar Bronchial Branches */}
        {/* Right Upper Lobe Bronchus */}
        <path d="M 205,145 Q 160,130 145,115" stroke="#0f172a" strokeWidth="1.8" />
        {/* Bronchus Intermedius -> RML & RLL */}
        <path d="M 213,152 Q 185,210 160,250" stroke="#0f172a" strokeWidth="1.8" />
        <path d="M 195,190 Q 150,205 130,210" stroke="#0f172a" strokeWidth="1.5" />

        {/* Left Upper Lobe & Lingular Bronchi */}
        <path d="M 298,145 Q 345,130 360,115" stroke="#0f172a" strokeWidth="1.8" />
        <path d="M 315,160 Q 345,190 355,215" stroke="#0f172a" strokeWidth="1.5" />
        {/* Left Lower Lobe Bronchus */}
        <path d="M 290,154 Q 315,210 340,250" stroke="#0f172a" strokeWidth="1.8" />

        {/* Aortic Arch & Descending Thoracic Aorta (Red Vascular Reference) */}
        <path
          d="M 250,115 C 275,85 295,95 290,130 L 280,280"
          stroke="#dc2626"
          strokeWidth="2.2"
          strokeDasharray="5 3"
        />
        <text x="305" y="105" fontSize="9" fontWeight="bold" fill="#b91c1c">Aortic Arch</text>
        <text x="290" y="245" fontSize="8.5" fontWeight="600" fill="#b91c1c">Desc. Aorta</text>

        {/* Anatomical Lobe Indicators */}
        <rect x="90" y="105" width="45" height="20" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
        <text x="112" y="119" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">RUL</text>

        <rect x="85" y="195" width="45" height="20" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
        <text x="107" y="209" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">RML</text>

        <rect x="110" y="260" width="45" height="20" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
        <text x="132" y="274" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">RLL</text>

        <rect x="365" y="105" width="45" height="20" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
        <text x="387" y="119" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">LUL</text>

        <rect x="345" y="260" width="45" height="20" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
        <text x="367" y="274" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">LLL</text>

        {/* Adamkiewicz Spinal Safety Caution Box */}
        <rect x="175" y="300" width="150" height="24" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.2" />
        <text x="250" y="315" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#b91c1c">
          ⚠️ Check Anterior Spinal Artery
        </text>

        {/* IR Pen Markup Annotation Legend */}
        <rect x="20" y="335" width="460" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <text x="30" y="352" fontSize="9.5" fill="#334155" fontWeight="500">
          Markings: [ * ] Cavity / Hypervascular focus  |  [ ---&gt; ] Bronchial feeder (R-ICBT, L-Sup/Inf)  |  [ S ] Spinal branch
        </text>
      </svg>
    </div>
  );
};
