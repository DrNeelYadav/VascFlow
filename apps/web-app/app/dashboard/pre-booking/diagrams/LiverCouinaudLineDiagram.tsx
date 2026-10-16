"use client";

import React from "react";

/**
 * High-Resolution Printable Vector Line Diagram: Liver Couinaud Segments (I - VIII)
 * Optimized for physical A4 pen markup by Interventional Radiologists.
 * Zero event clutter, pure surgical stroke lines with generous annotation margin.
 */
export const LiverCouinaudLineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[420px] mx-auto",
}) => {
  return (
    <div className={`border border-slate-300 dark:border-slate-700 rounded-lg p-3 bg-white text-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Liver Couinaud Segments (I–VIII) & Vascular Supply
        </span>
        <span className="text-[10px] font-mono text-slate-500">[Pen Annotation Ready]</span>
      </div>

      <svg
        viewBox="0 0 500 360"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        {/* Outer Liver Capsule Outline */}
        <path
          d="M 60,220 C 50,140 100,70 230,65 C 340,60 440,90 460,170 C 470,230 430,280 340,290 C 260,300 170,280 110,270 C 80,265 65,245 60,220 Z"
          stroke="#0f172a"
          strokeWidth="2.2"
          fill="#fafafa"
        />

        {/* Inferior Vena Cava (IVC) at posterior superior margin */}
        <path
          d="M 235,50 L 235,95 C 235,105 255,105 255,95 L 255,50"
          stroke="#334155"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <text x="245" y="44" textAnchor="middle" fontSize="10" fontWeight="600" fill="#475569">
          IVC
        </text>

        {/* Major Hepatic Veins (Right, Middle, Left) */}
        <path d="M 245,95 Q 240,140 230,175" stroke="#64748b" strokeWidth="1.8" />
        <path d="M 240,110 Q 180,140 140,170" stroke="#64748b" strokeWidth="1.8" />
        <path d="M 250,110 Q 320,135 365,165" stroke="#64748b" strokeWidth="1.8" />

        {/* Cantlie's Line (Middle Hepatic Vein dividing Right & Left Lobes) */}
        <line x1="230" y1="65" x2="250" y2="295" stroke="#0f172a" strokeWidth="1.6" strokeDasharray="5 3" />

        {/* Right Intersegmental Plane (Dividing Anterior V/VIII and Posterior VI/VII) */}
        <line x1="350" y1="80" x2="385" y2="280" stroke="#334155" strokeWidth="1.4" strokeDasharray="4 3" />

        {/* Left Intersegmental Plane / Falciform Ligament (Dividing Medial IV and Lateral II/III) */}
        <line x1="160" y1="68" x2="180" y2="275" stroke="#334155" strokeWidth="1.4" strokeDasharray="4 3" />

        {/* Transverse Portal Plane (Dividing Superior VII, VIII, IVa, II from Inferior VI, V, IVb, III) */}
        <path
          d="M 75,185 C 150,175 240,170 330,175 C 400,180 455,185 455,185"
          stroke="#0f172a"
          strokeWidth="1.6"
          strokeDasharray="5 3"
        />

        {/* Segmental Labels with crisp circles */}
        {/* Left Lateral Superior: Segment II */}
        <circle cx="115" cy="125" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="115" y="129" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">II</text>

        {/* Left Lateral Inferior: Segment III */}
        <circle cx="125" cy="225" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="125" y="229" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">III</text>

        {/* Left Medial Superior: Segment IVa */}
        <circle cx="200" cy="125" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="200" y="129" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">IVa</text>

        {/* Left Medial Inferior: Segment IVb */}
        <circle cx="205" cy="225" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="205" y="229" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">IVb</text>

        {/* Right Anterior Superior: Segment VIII */}
        <circle cx="295" cy="125" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="295" y="129" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">VIII</text>

        {/* Right Anterior Inferior: Segment V */}
        <circle cx="310" cy="225" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="310" y="229" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">V</text>

        {/* Right Posterior Superior: Segment VII */}
        <circle cx="400" cy="130" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="400" y="134" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">VII</text>

        {/* Right Posterior Inferior: Segment VI */}
        <circle cx="410" cy="230" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
        <text x="410" y="234" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">VI</text>

        {/* Caudate Lobe (Segment I) indicated at posterior porta */}
        <ellipse cx="230" cy="145" rx="16" ry="11" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" strokeDasharray="3 2" />
        <text x="230" y="149" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">I (Caudate)</text>

        {/* Gallbladder Fossa Indication */}
        <path d="M 260,285 C 255,270 265,260 270,270 C 275,280 270,295 260,285 Z" stroke="#16a34a" strokeWidth="1.5" fill="#f0fdf4" />
        <text x="268" y="310" textAnchor="middle" fontSize="9" fontWeight="600" fill="#15803d">GB Fossa</text>

        {/* Portal Vein & Hepatic Artery Bifurcation Marker at Porta */}
        <g stroke="#0284c7" strokeWidth="1.5">
          <path d="M 250,225 L 250,195 M 250,195 L 225,185 M 250,195 L 285,185" />
          <circle cx="250" cy="225" r="3" fill="#0284c7" />
        </g>
        <text x="250" y="240" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0369a1">
          Porta Hepatis (HA / PV)
        </text>

        {/* Pen Markup Legend for Interventional Radiologist */}
        <rect x="20" y="325" width="460" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <text x="30" y="342" fontSize="9.5" fill="#334155" fontWeight="500">
          Markings: [ O ] Lesion location & size (cm)  |  [ ---&gt; ] Arterial feeder / microcatheter position  |  [ X ] Coiled branch
        </text>
      </svg>
    </div>
  );
};
