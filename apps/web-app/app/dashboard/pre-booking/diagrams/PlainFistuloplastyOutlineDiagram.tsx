"use client";

import React from "react";

/**
 * Elaborative Clinical AV Fistuloplasty & Dialysis Access Circuit Diagram
 * High-definition vector line art for pre-operative planning of dialysis fistula salvage:
 * Anastomosis, Juxta-anastomotic swing segment, Cephalic vein, Basilic transposition,
 * Cephalic arch stenosis, Subclavian vein, and central venous thoracic inlet.
 */
export const PlainFistuloplastyOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 380 260"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Upper Limb Outline (Forearm & Arm to Shoulder) */}
        <path
          d="M 25,180 
             C 40,175 70,170 120,165 
             C 170,160 220,150 260,135 
             C 300,120 330,95 350,60 
             L 360,95 
             C 335,130 295,155 250,170 
             C 200,185 150,195 100,200 
             C 60,205 35,205 25,180 Z"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="4 3"
          fill="#ffffff"
        />

        {/* Feeding Artery (Radial / Brachial) */}
        <path d="M 25,175 L 140,165 L 260,145" strokeWidth="2.2" strokeLinecap="round" />
        <text x="35" y="165" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">Arterial Inflow</text>

        {/* Surgical AV Anastomosis Site (End-to-side / Side-to-side) */}
        <path d="M 65,172 C 75,160 85,145 95,135" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="65" cy="172" r="4.5" strokeWidth="1.8" />
        <text x="40" y="152" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">Anastomosis</text>

        {/* Outflow Vein (Cephalic / Dialysis Cannulation Zone) */}
        <path
          d="M 95,135 
             C 125,128 175,120 220,110 
             C 255,102 285,90 310,75"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Juxta-Anastomotic Swing Segment Stenosis Landmark (Frequent culprit!) */}
        <rect x="85" y="138" width="16" height="12" strokeWidth="1.3" strokeDasharray="2 2" fill="#ffffff" />
        <text x="75" y="125" fontSize="7" fill="#000000" stroke="none">Swing Stenosis</text>

        {/* Cannulation Segment Aneurysm / Pseudoaneurysm Landmark */}
        <ellipse cx="170" cy="120" rx="14" ry="10" strokeWidth="1.5" strokeDasharray="3 2" fill="#ffffff" />
        <text x="145" y="105" fontSize="7" fill="#000000" stroke="none">Cannulation Zone</text>

        {/* Cephalic Arch (Severe 90-degree curve entering Axillary Vein) */}
        <path
          d="M 310,75 C 325,65 338,50 335,35 C 330,20 310,25 295,30 L 265,35"
          strokeWidth="3.0"
          strokeLinecap="round"
        />
        <text x="290" y="18" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Cephalic Arch</text>

        {/* Subclavian Vein & Central Thoracic Inflow */}
        <path d="M 295,30 C 270,35 240,40 210,42" strokeWidth="3.4" strokeLinecap="round" />
        <text x="215" y="35" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Subclavian / Central Vein</text>

        {/* Dialysis Permacath Dual-Lumen Catheter Schematic (Right IJ to Atrium) */}
        <path d="M 190,15 C 190,30 200,40 205,42" strokeWidth="2.0" strokeDasharray="3 2" />
        <text x="140" y="20" fontSize="7" fill="#000000" stroke="none">Permacath (RIJV)</text>

        {/* Legend for Angioplasty Balloon Sizing */}
        <g strokeWidth="0.8" stroke="#000000">
          <line x1="30" y1="235" x2="350" y2="235" strokeWidth="0.5" />
          <text x="30" y="248" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">High-Pressure Balloon Angioplasty (Conquest / Mustang / Ultraverse 6-10mm)</text>
        </g>
      </svg>
    </div>
  );
};
