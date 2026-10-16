"use client";

import React from "react";

/**
 * Elaborative Clinical Biliary Tree Outline Diagram
 * High-definition vector line art for marking biliary strictures (Bismuth I-IV),
 * PTBD puncture routes (Right vs Left), and planned SEMS deployment extents.
 */
export const PlainBiliaryOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[320px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 360 280"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Duodenum C-Loop background reference */}
        <path
          d="M 195,190 C 230,200 240,225 235,250 C 228,275 190,275 160,270"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* Biliary Tree Ducts */}
        <g strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Left Hepatic Duct and Segmental Branches */}
          <path d="M 270,45 C 245,65 220,85 195,105" />
          <path d="M 255,40 C 240,50 230,65 225,80" strokeWidth="1.4" />
          <path d="M 290,65 C 265,75 235,90 205,100" strokeWidth="1.4" />

          {/* Right Hepatic Duct and Sectoral Branches */}
          <path d="M 75,45 C 105,65 140,85 165,105" />
          {/* Right Anterior Sectoral (V, VIII) */}
          <path d="M 90,30 C 110,48 135,70 148,88" strokeWidth="1.4" />
          {/* Right Posterior Sectoral (VI, VII) */}
          <path d="M 55,65 C 80,78 115,90 140,102" strokeWidth="1.4" />

          {/* Confluence (Hilum) & Common Hepatic Duct (CHD) */}
          <path d="M 165,105 C 175,112 185,112 195,105" />
          <path d="M 180,110 C 180,125 180,140 180,155" />

          {/* Gallbladder & Cystic Duct */}
          <path d="M 125,125 C 145,130 165,140 180,148" strokeWidth="1.6" />
          <path
            d="M 125,125 C 105,120 90,135 95,155 C 100,175 120,180 130,165 C 135,150 135,135 125,125 Z"
            strokeWidth="1.8"
            fill="#ffffff"
          />

          {/* Common Bile Duct (CBD) to Ampulla */}
          <path d="M 180,155 C 182,185 188,215 195,240" />
          <circle cx="195" cy="240" r="3" fill="#000000" stroke="none" />
        </g>

        {/* Labels for Anatomical Guidance */}
        <text x="50" y="35" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">Rt. Ducts (V-VIII)</text>
        <text x="260" y="35" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">Lt. Ducts (II, III)</text>
        <text x="195" y="100" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Hilum / Confluence</text>
        <text x="85" y="195" fontSize="9" fill="#000000" stroke="none">Gallbladder</text>
        <text x="195" y="170" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">CHD / CBD</text>
        <text x="205" y="245" fontSize="9" fill="#000000" stroke="none">Ampulla</text>
      </svg>
    </div>
  );
};
