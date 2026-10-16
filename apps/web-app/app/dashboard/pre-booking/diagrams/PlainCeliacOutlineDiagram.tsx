"use client";

import React from "react";

/**
 * Elaborative Clinical Celiac Axis, SMA & Mesenteric Arteries Outline Diagram
 * Clean pure black-and-white vector line art for marking contrast extravasation,
 * pseudoaneurysms, GDA / LGA branches, and selective microcatheter coil placements.
 */
export const PlainCeliacOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 380 300"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Abdominal Aorta Trunk */}
        <path
          d="M 175,10 L 175,290 M 205,10 L 205,290"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Celiac Axis Origin & Main Trunk */}
        <path
          d="M 190,75 C 190,85 190,100 190,110"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Splenic Artery (Tortuous branch to anatomical left / diagram right) */}
        <path
          d="M 190,110 
             C 215,105 230,120 250,108 
             C 270,95 285,115 315,105 
             C 335,100 350,110 365,105"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Left Gastric Artery (LGA - Ascending branch to lesser curvature) */}
        <path
          d="M 190,110 C 195,85 205,65 220,50"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Common Hepatic Artery (CHA) heading to anatomical right / diagram left */}
        <path
          d="M 190,110 C 165,112 145,105 125,110"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Proper Hepatic Artery & Right/Left Branches (Ascending) */}
        <path
          d="M 125,110 C 115,90 105,65 95,40"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 105,65 C 80,60 65,55 50,60"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Gastroduodenal Artery (GDA) (Descending branch) */}
        <path
          d="M 125,110 C 122,140 120,175 115,215"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Superior Mesenteric Artery (SMA) Origin & Branches */}
        <path
          d="M 190,145 C 190,170 185,205 180,255"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 185,190 C 160,205 135,220 115,245"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 182,220 C 210,230 235,240 260,255"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Labels for Anatomical Guidance */}
        <text x="180" y="25" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">Aorta</text>
        <text x="215" y="45" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">LGA</text>
        <text x="310" y="95" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Splenic Art.</text>
        <text x="65" y="40" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Hepatic</text>
        <text x="85" y="160" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">GDA</text>
        <text x="195" y="160" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">SMA</text>
      </svg>
    </div>
  );
};
