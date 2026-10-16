"use client";

import React from "react";

/**
 * Plain Printable Celiac Axis & Mesenteric Arteries Outline Diagram
 * Pure black-and-white vector line contour without shading, hatching, or text labels.
 * Designed for Interventional Radiologists to draw contrast extravasation, pseudoaneurysms,
 * and microcatheter coil placement with pen on A4 pre-booking sheets.
 */
export const PlainCeliacOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-slate-900 border border-slate-300 rounded-lg p-2 ${className}`}>
      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
        <span>Celiac Axis &amp; SMA (Pen Sketch Area)</span>
        <span>Mark Extravasation / Coiling Site</span>
      </div>
      <svg
        viewBox="0 0 380 320"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Abdominal Aorta Trunk */}
        <path
          d="M 175,15 L 175,305 M 205,15 L 205,305"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Celiac Axis Origin & Main Trunk */}
        <path
          d="M 190,85 C 190,95 190,110 190,120"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Splenic Artery (Tortuous branch to anatomical left / diagram right) */}
        <path
          d="M 190,120 
             C 215,115 230,130 250,118 
             C 270,105 285,125 315,115 
             C 335,110 350,120 365,115"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Left Gastric Artery (Ascending branch) */}
        <path
          d="M 190,120 C 195,95 205,75 220,60"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Common Hepatic Artery (CHA) heading to anatomical right / diagram left */}
        <path
          d="M 190,120 C 165,122 145,115 125,120"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Proper Hepatic Artery & Right/Left Branches (Ascending) */}
        <path
          d="M 125,120 C 115,100 105,75 95,50"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 105,75 C 80,70 65,65 50,70"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Gastroduodenal Artery (GDA) (Descending branch) */}
        <path
          d="M 125,120 C 122,150 120,185 115,225"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Superior Mesenteric Artery (SMA) Origin & Branches */}
        <path
          d="M 190,155 C 190,180 185,215 180,265"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 185,200 C 160,215 135,230 115,255"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 182,230 C 210,240 235,250 260,265"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};
