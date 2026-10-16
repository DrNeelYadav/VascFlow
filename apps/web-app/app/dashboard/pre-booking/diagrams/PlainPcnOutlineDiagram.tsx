"use client";

import React from "react";

/**
 * Elaborative Clinical PCN (Percutaneous Nephrostomy) & Renal Diagram
 * High-definition vector line art for pre-operative planning of nephrostomy access:
 * Renal pelvis, Upper/Middle/Lower pole calyces, PUJ, Lower pole posterior calyx
 * puncture trajectory (Brodel's bloodless line of avascularity), and ureteric obstruction.
 */
export const PlainPcnOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[320px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 340 300"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Kidney Renal Capsule Contour */}
        <path
          d="M 120,30 
             C 170,30 230,45 250,85 
             C 275,130 270,185 250,230 
             C 225,270 170,285 120,280 
             C 75,275 60,240 65,195 
             C 70,165 85,155 85,145 
             C 85,135 70,125 65,95 
             C 60,50 75,30 120,30 Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Renal Hilum & Renal Pelvis (Hydronephrosis Pelvis Contour) */}
        <path
          d="M 85,145 
             C 105,125 145,120 170,135 
             C 185,145 185,175 170,185 
             C 145,200 105,195 85,175"
          strokeWidth="2.0"
          strokeLinecap="round"
          fill="#ffffff"
        />

        {/* Pelvicalyceal System (Upper, Middle, and Lower Pole Major & Minor Calyces) */}
        {/* Upper Pole Calyces */}
        <path d="M 160,130 C 175,105 195,80 205,65" strokeWidth="1.8" />
        <path d="M 205,65 C 220,60 235,70 230,85 C 220,95 200,95 180,115" strokeWidth="1.6" />

        {/* Middle Pole Calyces */}
        <path d="M 175,155 C 205,150 225,145 240,150" strokeWidth="1.8" />
        <path d="M 240,150 C 248,155 248,165 240,170 C 225,172 205,168 175,165" strokeWidth="1.6" />

        {/* Lower Pole Posterior Calyx (Primary Target for PCN Access!) */}
        <path d="M 160,180 C 175,205 195,230 205,245" strokeWidth="2.2" />
        <path d="M 205,245 C 220,250 235,240 230,225 C 220,215 200,215 180,195" strokeWidth="1.8" />
        <circle cx="215" cy="235" r="5" strokeWidth="2.0" />
        <text x="225" y="238" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">PCN Target Calyx</text>

        {/* Needle Trajectory Track (Posterior oblique 30° / Brodel's line) */}
        <line x1="285" y1="280" x2="215" y2="235" strokeWidth="1.8" strokeDasharray="3 2" />
        <polygon points="215,232 207,235 213,240" fill="#000000" />
        <text x="245" y="292" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">18G/21G Puncture Vector &rarr;</text>

        {/* Proximal Ureter descending from PUJ */}
        <path d="M 125,185 C 110,210 95,245 80,290" strokeWidth="2.4" strokeLinecap="round" />
        <text x="85" y="285" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Ureter (PUJ)</text>

        {/* Anatomical Guidance Annotations */}
        <text x="140" y="55" fontSize="8" fill="#000000" stroke="none">Upper Pole</text>
        <text x="135" y="155" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Renal Pelvis</text>
        <text x="135" y="240" fontSize="8" fill="#000000" stroke="none">Lower Pole</text>
      </svg>
    </div>
  );
};
