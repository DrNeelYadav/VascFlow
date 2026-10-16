"use client";

import React from "react";

/**
 * High-Resolution Printable Vector Line Diagram: Celiac Axis & Mesenteric Arteries
 * Designed for Upper & Lower GI Bleeder embolization pre-booking pen markup.
 * Displays Aorta, Celiac Trunk (LGA, Splenic, CHA -> GDA), SMA, and IMA arcades.
 */
export const CeliacMesentericLineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[420px] mx-auto",
}) => {
  return (
    <div className={`border border-slate-300 dark:border-slate-700 rounded-lg p-3 bg-white text-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Celiac Axis & Mesenteric Arterial Tree (GI Bleeder)
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
        {/* Abdominal Aorta Trunk */}
        <path
          d="M 230,20 L 230,330 M 270,20 L 270,330"
          stroke="#dc2626"
          strokeWidth="2.4"
          fill="none"
        />
        <text x="250" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">
          AORTA
        </text>

        {/* Celiac Trunk Origin (at T12-L1 level) */}
        <path
          d="M 250,80 L 250,110"
          stroke="#0f172a"
          strokeWidth="3.2"
        />
        <circle cx="250" cy="80" r="3.5" fill="#0f172a" />
        <text x="215" y="105" fontSize="9.5" fontWeight="bold" fill="#0f172a">Celiac Trunk</text>

        {/* 1. Left Gastric Artery (LGA) */}
        <path
          d="M 250,110 C 235,90 220,70 190,85 C 170,95 160,130 175,160"
          stroke="#0f172a"
          strokeWidth="2"
        />
        <text x="165" y="80" fontSize="9" fontWeight="bold" fill="#0f172a">LGA</text>

        {/* 2. Splenic Artery (Tortuous branch to left) */}
        <path
          d="M 250,110 C 290,105 320,120 340,105 C 365,90 390,115 425,110"
          stroke="#0f172a"
          strokeWidth="2.2"
        />
        <text x="430" y="115" fontSize="9.5" fontWeight="bold" fill="#0f172a">Splenic A.</text>

        {/* 3. Common Hepatic Artery (CHA) -> Proper Hepatic & GDA */}
        <path
          d="M 250,110 C 200,120 160,115 130,115"
          stroke="#0f172a"
          strokeWidth="2.4"
        />
        <text x="180" y="130" fontSize="9" fontWeight="bold" fill="#0f172a">CHA</text>

        {/* Proper Hepatic Artery -> RHA & LHA */}
        <path d="M 130,115 L 105,75 M 105,75 L 80,60 M 105,75 L 85,90" stroke="#0f172a" strokeWidth="2" />
        <text x="75" y="55" fontSize="8.5" fontWeight="bold" fill="#0f172a">RHA</text>
        <text x="75" y="100" fontSize="8.5" fontWeight="bold" fill="#0f172a">LHA</text>

        {/* Gastroduodenal Artery (GDA) running inferiorly */}
        <path
          d="M 130,115 L 130,195 C 130,225 150,240 180,245"
          stroke="#0f172a"
          strokeWidth="2.4"
        />
        <text x="95" y="160" fontSize="9.5" fontWeight="bold" fill="#0f172a">GDA</text>
        {/* Right Gastroepiploic branch */}
        <path d="M 130,195 C 115,225 90,240 70,250" stroke="#0f172a" strokeWidth="1.6" />
        <text x="45" y="260" fontSize="8" fontWeight="600" fill="#475569">R. Gastroepiploic</text>

        {/* Pancreaticoduodenal Arcade (Connecting GDA and SMA) */}
        <path
          d="M 180,245 C 205,248 230,230 250,205"
          stroke="#64748b"
          strokeWidth="1.6"
          strokeDasharray="4 2"
        />
        <text x="160" y="235" fontSize="8" fontWeight="600" fill="#64748b">PD Arcade</text>

        {/* Superior Mesenteric Artery (SMA Origin at L1 level) */}
        <path
          d="M 250,175 C 265,200 270,240 275,305"
          stroke="#0f172a"
          strokeWidth="2.8"
        />
        <circle cx="250" cy="175" r="3.5" fill="#0f172a" />
        <text x="280" y="185" fontSize="9.5" fontWeight="bold" fill="#0f172a">SMA</text>

        {/* SMA Branches: Middle Colic, Right Colic, Ileocolic, Jejunal */}
        <path d="M 260,200 C 230,185 190,175 160,175" stroke="#0f172a" strokeWidth="1.8" />
        <text x="175" y="170" fontSize="8.5" fontWeight="bold" fill="#0f172a">Mid Colic</text>

        <path d="M 265,225 C 220,225 180,235 150,250" stroke="#0f172a" strokeWidth="1.8" />
        <text x="155" y="265" fontSize="8.5" fontWeight="bold" fill="#0f172a">Rt Colic</text>

        <path d="M 270,260 C 240,285 200,305 170,315" stroke="#0f172a" strokeWidth="2" />
        <text x="180" y="310" fontSize="9" fontWeight="bold" fill="#0f172a">Ileocolic A.</text>

        {/* Jejunal & Ileal Arcades to patient's left */}
        <path d="M 270,220 C 310,230 360,250 400,270" stroke="#0f172a" strokeWidth="1.6" />
        <path d="M 273,245 C 310,265 350,290 380,315" stroke="#0f172a" strokeWidth="1.6" />
        <text x="360" y="250" fontSize="8.5" fontWeight="600" fill="#475569">Jejunal / Ileal</text>

        {/* Inferior Mesenteric Artery (IMA Origin at L3 level) */}
        <path
          d="M 250,280 C 285,290 320,300 350,305"
          stroke="#0f172a"
          strokeWidth="2"
        />
        <circle cx="250" cy="280" r="3" fill="#0f172a" />
        <text x="250" y="295" fontSize="9" fontWeight="bold" fill="#0f172a">IMA</text>

        {/* IR Pen Markup Annotation Legend */}
        <rect x="20" y="335" width="460" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <text x="30" y="352" fontSize="9.5" fill="#334155" fontWeight="500">
          Markings: [ * ] Active contrast extravasation / blush  |  [ O ] Pseudoaneurysm  |  [ X ] Microcoil pack / PVA
        </text>
      </svg>
    </div>
  );
};
