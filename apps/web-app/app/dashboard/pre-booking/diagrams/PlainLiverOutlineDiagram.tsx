"use client";

import React from "react";

/**
 * Plain Printable Liver Outline Diagram (Anatomical Template)
 * Pure black-and-white vector line contour without shading, hatching, or text labels.
 * Designed specifically for Interventional Radiologists to draw tumor size/location
 * and catheter paths with pen on physical A4 pre-booking forms.
 */
export const PlainLiverOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-slate-900 border border-slate-300 rounded-lg p-2 ${className}`}>
      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
        <span>Liver Anatomy (Pen Sketch Area)</span>
        <span>Draw Lesion / Arterial Branch</span>
      </div>
      <svg
        viewBox="0 0 380 280"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Main Liver Contour: Large Right Lobe, Falciform Groove & Tapered Left Lobe */}
        <path
          d="M 110,230 
             C 80,230 50,210 42,175 
             C 32,130 45,75 85,45 
             C 125,18 185,15 225,25 
             C 240,29 250,38 255,48 
             C 265,38 285,30 315,35 
             C 345,40 365,65 360,95 
             C 350,135 305,165 260,170 
             C 245,172 235,180 230,195 
             C 220,215 200,225 180,225 
             C 165,225 150,230 135,232 
             Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Falciform Ligament / Interlobar Notch Contour */}
        <path
          d="M 255,48 C 250,75 245,115 240,150 C 235,175 235,185 230,195"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Gallbladder Contour emerging beneath inferior right lobe border */}
        <path
          d="M 145,200 C 140,228 160,248 175,245 C 188,240 188,215 185,195"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Porta Hepatis / Inferior Vena Cava vascular notch */}
        <path
          d="M 205,190 C 210,210 215,225 215,240"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 220,185 C 224,205 228,220 228,240"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};
