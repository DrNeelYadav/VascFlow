"use client";

import React from "react";

/**
 * Elaborative Clinical JNA & Head/Neck Arterial Anatomy Diagram
 * High-definition vector line art for pre-operative planning of JNA embolization:
 * External Carotid Artery (ECA), Internal Maxillary (IMAX), Sphenopalatine,
 * Ascending Pharyngeal, Middle Meningeal (MMA safety), and nasopharyngeal blush.
 */
export const PlainJnaOutlineDiagram: React.FC<{ className?: string }> = ({
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
        {/* Skull & Nasopharynx Lateral Contour */}
        <path
          d="M 60,80 C 65,35 120,20 180,25 C 240,30 280,60 285,110 C 288,145 270,175 255,185 C 265,195 285,200 285,215 C 280,230 250,235 240,240 L 220,290 L 150,290 L 150,250 C 120,245 90,230 75,200 C 60,170 55,120 60,80 Z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 3"
          fill="#ffffff"
        />

        {/* Orbit and Maxillary Sinus Landmark */}
        <circle cx="230" cy="110" r="18" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M 210,135 L 255,135 L 245,175 L 210,165 Z" strokeWidth="1.2" strokeDasharray="3 2" />

        {/* Hypervascular JNA Tumor Blush (Nasopharynx / Pterygopalatine fossa) */}
        <ellipse cx="195" cy="155" rx="22" ry="16" strokeWidth="1.8" strokeDasharray="2 2" fill="#ffffff" />
        <text x="175" y="158" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">JNA NIDUS</text>

        {/* Common Carotid Artery (CCA) & Bifurcation */}
        <path d="M 170,290 L 170,230" strokeWidth="2.8" strokeLinecap="round" />
        {/* Internal Carotid Artery (ICA - Siphons into Skull Base, posterior) */}
        <path d="M 170,230 C 160,200 150,160 145,110 C 145,80 155,60 165,50" strokeWidth="2.2" strokeDasharray="4 2" />

        {/* External Carotid Artery (ECA - Anterior branch) */}
        <path d="M 170,230 C 180,205 188,185 190,165" strokeWidth="2.4" strokeLinecap="round" />

        {/* Ascending Pharyngeal Artery (Dangerous anastomoses check!) */}
        <path d="M 172,215 C 162,190 158,160 160,135" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="160" cy="135" r="3" strokeWidth="1" />

        {/* Facial Artery */}
        <path d="M 175,205 C 195,200 215,205 235,215" strokeWidth="1.6" strokeLinecap="round" />

        {/* Internal Maxillary Artery (IMAX - Primary Culprit Feeder to JNA) */}
        <path d="M 190,165 C 195,155 205,150 215,145 C 225,140 235,140 245,135" strokeWidth="2.2" strokeLinecap="round" />
        {/* Sphenopalatine branch into tumor */}
        <path d="M 215,145 C 210,150 205,155 195,155" strokeWidth="2.0" />

        {/* Middle Meningeal Artery (MMA - Dangerous Dural Feeder / Avoid Embo!) */}
        <path d="M 195,155 C 195,130 190,105 185,80" strokeWidth="1.6" strokeLinecap="round" />
        <text x="175" y="75" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">MMA (Safety)</text>

        {/* Labels for Pen Annotation */}
        <text x="175" y="285" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">CCA</text>
        <text x="130" y="225" fontSize="8" fill="#000000" stroke="none">ICA</text>
        <text x="195" y="210" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">ECA &rarr;</text>
        <text x="215" y="130" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">IMAX (Feeder)</text>
        <text x="110" y="180" fontSize="7" fill="#000000" stroke="none">Asc. Pharyngeal</text>
        <text x="240" y="228" fontSize="7" fill="#000000" stroke="none">Facial Art.</text>
      </svg>
    </div>
  );
};
