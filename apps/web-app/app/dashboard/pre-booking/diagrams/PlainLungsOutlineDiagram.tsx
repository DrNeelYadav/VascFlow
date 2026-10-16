"use client";

import React from "react";

/**
 * Plain Printable Lungs & Mediastinum Outline Diagram
 * Pure black-and-white vector line contour without shading, hatching, or text labels.
 * Designed for Interventional Radiologists to draw culprit bronchial arteries,
 * bleeding segments, and lung lesions with pen on A4 pre-booking sheets.
 */
export const PlainLungsOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-slate-900 border border-slate-300 rounded-lg p-2 ${className}`}>
      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
        <span>Lungs &amp; Mediastinum (Pen Sketch Area)</span>
        <span>Mark Bleeder / Culprit Vessel</span>
      </div>
      <svg
        viewBox="0 0 380 320"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Central Trachea & Mainstem Bronchi Outlines */}
        <path
          d="M 183,20 L 183,105 L 140,140 M 197,20 L 197,105 L 240,140"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 183,105 C 190,112 190,112 197,105"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Lung Outline (Apex, Lateral Rib Cage Margin, Diaphragm Dome, Mediastinal Edge) */}
        <path
          d="M 165,55 
             C 150,30 115,30 100,55 
             C 70,105 50,175 48,240 
             C 47,270 70,285 105,282 
             C 140,278 160,255 168,230 
             C 172,195 168,140 165,55 
             Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Right Lung Interlobar Fissures (Horizontal & Oblique) */}
        <path d="M 52,160 C 95,165 140,175 168,195" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 65,225 C 110,210 145,215 168,230" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Left Lung Outline (Apex, Lateral Margin, Diaphragm, Cardiac Notch, Mediastinal Edge) */}
        <path
          d="M 215,55 
             C 230,30 265,30 280,55 
             C 310,105 330,175 332,240 
             C 333,270 310,285 275,282 
             C 240,278 222,255 214,230 
             C 205,190 205,160 216,130 
             C 220,100 216,75 215,55 
             Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Left Lung Oblique Fissure */}
        <path d="M 285,115 C 260,170 230,220 216,245" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Heart / Cardiac Silhouette Contour */}
        <path
          d="M 172,160 C 170,205 180,250 205,265 C 220,255 224,225 215,165"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="4 3"
          fill="none"
        />
      </svg>
    </div>
  );
};
