"use client";

import React from "react";

/**
 * Elaborative Clinical Lungs & Bronchial Tree Outline Diagram
 * Clean pure black-and-white vector line art for marking culprit bronchial/intercostal
 * arteries, bleeding lobes, and systemic arterial collaterals for BAE pre-booking.
 */
export const PlainLungsOutlineDiagram: React.FC<{ className?: string }> = ({
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
        {/* Central Trachea & Mainstem Bronchi Outlines */}
        <path
          d="M 183,15 L 183,95 L 140,130 M 197,15 L 197,95 L 240,130"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 183,95 C 190,102 190,102 197,95"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Lung Outline */}
        <path
          d="M 165,45 
             C 150,20 115,20 100,45 
             C 70,95 50,165 48,230 
             C 47,260 70,275 105,272 
             C 140,268 160,245 168,220 
             C 172,185 168,130 165,45 
             Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Right Lung Interlobar Fissures (Horizontal & Oblique) */}
        <path d="M 52,150 C 95,155 140,165 168,185" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 65,215 C 110,200 145,205 168,220" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Left Lung Outline */}
        <path
          d="M 215,45 
             C 230,20 265,20 280,45 
             C 310,95 330,165 332,230 
             C 333,260 310,275 275,272 
             C 240,268 222,245 214,220 
             C 205,180 205,150 216,120 
             C 220,90 216,65 215,45 
             Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Left Lung Oblique Fissure */}
        <path d="M 285,105 C 260,160 230,210 216,235" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Descending Thoracic Aorta & Intercostobronchial (ICBT) takeoff points */}
        <path d="M 197,95 L 197,285" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <path d="M 197,125 C 175,130 160,140 145,150" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 197,145 C 220,150 235,160 250,170" strokeWidth="1.6" strokeLinecap="round" />

        {/* Anatomical Lobe Indicators */}
        <text x="105" y="100" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">RUL</text>
        <text x="95" y="185" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">RML</text>
        <text x="105" y="245" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">RLL</text>
        <text x="265" y="100" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">LUL</text>
        <text x="265" y="225" fontSize="10" fontWeight="bold" fill="#000000" stroke="none">LLL</text>
        <text x="175" y="295" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Desc. Aorta</text>
      </svg>
    </div>
  );
};
