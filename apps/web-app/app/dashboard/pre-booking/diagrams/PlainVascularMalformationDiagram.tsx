import React, { useState } from "react";
import Image from "next/image";

/**
 * Elaborative Clinical Vascular Malformation & Phlebogram Diagram
 * High-definition vector line art and Gemini medical schematic for pen annotation.
 */
export const PlainVascularMalformationDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative bg-white text-black ${className}`}>
      {!imgError ? (
        <div className="relative w-full aspect-[4/3] border border-slate-200">
          <Image
            src="/diagrams/sclerotherapy.jpg"
            alt="Vascular Malformation Sclerotherapy Planning Diagram"
            fill
            className="object-contain"
            onError={() => setImgError(true)}
            priority
          />
        </div>
      ) : (
        <svg
          viewBox="0 0 380 260"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
        {/* Left Panel: Body Region Location Silhouettes */}
        <g strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Head & Neck Profile */}
          <path
            d="M 50,20 C 65,20 75,30 75,45 C 75,55 70,62 72,68 C 76,70 82,72 82,76 C 80,82 72,82 72,88 C 72,96 78,100 78,105 C 75,110 65,112 60,115 L 60,130 L 35,130 L 35,110 C 35,95 38,70 42,50 C 42,30 40,20 50,20 Z"
            fill="#ffffff"
          />
          {/* Facial features hint (Orbit, Ear) */}
          <circle cx="62" cy="52" r="3" strokeWidth="1" />
          <path d="M 46,65 C 44,70 44,78 48,82" strokeWidth="1.2" />

          {/* Extremity / Limb Outline */}
          <path
            d="M 105,25 C 115,25 120,40 120,70 C 120,100 118,130 115,160 C 112,185 110,215 110,240 L 95,240 C 95,215 98,185 100,160 C 102,130 102,100 100,70 C 100,40 98,25 105,25 Z"
            fill="#ffffff"
          />
          {/* Joint markers (Dashed) */}
          <line x1="97" y1="95" x2="121" y2="95" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="94" y1="175" x2="116" y2="175" strokeWidth="1" strokeDasharray="3 2" />
        </g>

        {/* Right Panel: Dysplastic Venous Malformation Architecture & Nidus */}
        <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Venous Lake / Cavernous Spongiform Spaces */}
          <path
            d="M 220,90 
               C 200,70 170,85 165,110 
               C 160,135 180,160 205,165 
               C 230,170 255,160 265,140 
               C 275,120 265,95 245,85 
               C 235,80 228,85 220,90 Z"
            strokeWidth="2.2"
            fill="#ffffff"
          />

          {/* Internal Endothelial Septations & Cavities */}
          <path d="M 185,105 C 200,115 215,110 230,125" strokeWidth="1.3" />
          <path d="M 195,135 C 210,140 225,130 240,145" strokeWidth="1.3" />
          <path d="M 215,95 C 220,115 210,135 220,155" strokeWidth="1.3" strokeDasharray="3 2" />

          {/* Draining Vein Outflow (Direct / Systemic) */}
          <path
            d="M 255,100 C 280,85 310,75 345,65"
            strokeWidth="2.4"
          />
          {/* Second Deep Draining Vein */}
          <path
            d="M 245,155 C 275,170 305,185 340,195"
            strokeWidth="2"
            strokeDasharray="4 2"
          />

          {/* Compression Occlusion Site Landmark */}
          <rect
            x="290"
            y="55"
            width="28"
            height="18"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            fill="#ffffff"
          />
          <text x="293" y="67" fontSize="7" fontWeight="bold" fill="#000000" stroke="none">COMPRESS</text>

          {/* Puncture Needle Track Indicator Guide */}
          <line x1="140" y1="135" x2="180" y2="130" strokeWidth="1.4" strokeDasharray="3 2" />
          <polygon points="180,127 187,130 180,133" fill="#000000" />
        </g>

        {/* Labels & Pen Marking Guidance */}
        <text x="38" y="145" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Head &amp; Neck</text>
        <text x="92" y="253" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Extremity</text>
        <text x="175" y="75" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Cavernous Nidus (VM)</text>
        <text x="135" y="148" fontSize="7" fill="#000000" stroke="none">Needle Access</text>
        <text x="275" y="50" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Draining Vein &rarr;</text>
        <text x="270" y="210" fontSize="8" fill="#000000" stroke="none">Deep Pathway (Dashed)</text>
      </svg>
      )}
    </div>
  );
};
