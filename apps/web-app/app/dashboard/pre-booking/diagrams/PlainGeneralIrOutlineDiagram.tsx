"use client";

import React from "react";

/**
 * Elaborative Clinical General Interventional Radiology Access & Target Diagram
 * High-definition vector line art for marking biopsy routes, drainage catheter tracks,
 * PCN / nephrostomy angles, and vascular access sites (Jugular, Subclavian, Femoral, Radial).
 */
export const PlainGeneralIrOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 380 270"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Torso & Abdominal Outline */}
        <path
          d="M 120,20 
             C 140,30 160,35 190,35 
             C 220,35 240,30 260,20 
             C 275,35 295,75 290,130 
             C 285,185 270,225 250,250 
             L 130,250 
             C 110,225 95,185 90,130 
             C 85,75 105,35 120,20 Z"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Clavicles & Midline Sternal Reference Line */}
        <path d="M 120,40 C 150,48 180,48 190,52 C 200,48 230,48 260,40" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="190" y1="52" x2="190" y2="245" strokeWidth="1" strokeDasharray="3 3" />

        {/* Target Organ Silhouettes for Pen Outlining */}
        {/* Liver Contour (Right Upper Quadrant) */}
        <path
          d="M 105,75 C 135,68 175,70 185,85 C 185,120 165,140 120,135 C 105,130 100,105 105,75 Z"
          strokeWidth="1.5"
          fill="#ffffff"
        />
        {/* Spleen Contour (Left Upper Quadrant) */}
        <path
          d="M 255,85 C 275,95 275,125 260,135 C 248,130 248,100 255,85 Z"
          strokeWidth="1.4"
          fill="#ffffff"
        />

        {/* Bilateral Kidneys (Retroperitoneal PCN & Biopsy landmarks) */}
        {/* Right Kidney */}
        <path
          d="M 130,140 C 145,140 152,155 150,175 C 145,190 132,190 125,180 C 120,165 122,145 130,140 Z"
          strokeWidth="1.4"
          strokeDasharray="4 2"
          fill="#ffffff"
        />
        {/* Left Kidney */}
        <path
          d="M 250,135 C 258,140 260,160 255,175 C 248,188 235,188 230,172 C 228,155 235,138 250,135 Z"
          strokeWidth="1.4"
          strokeDasharray="4 2"
          fill="#ffffff"
        />

        {/* Pelvic Bladder / Fluid Collection Fossa */}
        <ellipse cx="190" cy="225" rx="30" ry="16" strokeWidth="1.3" strokeDasharray="3 2" fill="#ffffff" />

        {/* Common Vascular Access Nodes (Circles for Pen Checkmark) */}
        {/* Right Internal Jugular (RIJV) */}
        <circle cx="170" cy="28" r="4.5" strokeWidth="1.5" />
        {/* Right Subclavian */}
        <circle cx="140" cy="48" r="4.5" strokeWidth="1.5" />
        {/* Right Common Femoral Artery/Vein (CFA/CFV) */}
        <circle cx="155" cy="250" r="5" strokeWidth="1.8" />
        {/* Left Common Femoral Artery/Vein */}
        <circle cx="225" cy="250" r="5" strokeWidth="1.8" />

        {/* Needle Puncture Guidance Grid (Depth Gauge) */}
        <g strokeWidth="0.8" stroke="#000000">
          <line x1="315" y1="100" x2="315" y2="220" strokeWidth="1.2" />
          <line x1="310" y1="100" x2="320" y2="100" />
          <line x1="312" y1="130" x2="318" y2="130" />
          <line x1="310" y1="160" x2="320" y2="160" />
          <line x1="312" y1="190" x2="318" y2="190" />
          <line x1="310" y1="220" x2="320" y2="220" />
        </g>
        <text x="325" y="103" fontSize="7" fill="#000000" stroke="none">0 cm</text>
        <text x="325" y="163" fontSize="7" fill="#000000" stroke="none">5 cm</text>
        <text x="325" y="223" fontSize="7" fill="#000000" stroke="none">10 cm</text>

        {/* Anatomical Annotations */}
        <text x="110" y="95" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Liver</text>
        <text x="250" y="105" fontSize="8" fill="#000000" stroke="none">Spleen</text>
        <text x="125" y="165" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Rt Kidney</text>
        <text x="230" y="162" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Lt Kidney</text>
        <text x="172" y="228" fontSize="8" fill="#000000" stroke="none">Pelvis / Fluid</text>
        <text x="135" y="28" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">Rt IJV</text>
        <text x="140" y="266" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">Rt Femoral</text>
        <text x="215" y="266" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">Lt Femoral</text>
      </svg>
    </div>
  );
};
