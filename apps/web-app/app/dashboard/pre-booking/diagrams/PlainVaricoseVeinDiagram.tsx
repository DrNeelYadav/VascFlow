"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Clinical Varicose Veins Lower Limb Venous Anatomy Diagram
 * Incorporates the high-resolution Google Gemini medical line art diagram
 * with vector SVG anatomical fallbacks for GSV, SSV, SFJ, SPJ, and perforators.
 */
export const PlainVaricoseVeinDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[320px] mx-auto",
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative bg-white text-black ${className}`}>
      {!imgError ? (
        <div className="relative w-full aspect-[3/4] border border-slate-200">
          <Image
            src="/diagrams/varicose_veins.jpg"
            alt="Lower Limb Venous Anatomy for EVLA and Glue Embolization"
            fill
            className="object-contain"
            onError={() => setImgError(true)}
            priority
          />
        </div>
      ) : (
        <svg
          viewBox="0 0 320 380"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          {/* Leg Contour Outline */}
          <path
            d="M 110,20 C 135,20 160,35 175,70 C 190,110 185,160 180,210 C 175,250 168,290 165,330 L 195,365 L 140,365 L 135,330 C 125,290 120,250 115,210 C 105,160 95,110 95,70 C 95,35 100,20 110,20 Z"
            strokeWidth="2.0"
            strokeLinecap="round"
            fill="#ffffff"
          />
          {/* Patella landmark */}
          <ellipse cx="145" cy="180" rx="16" ry="12" strokeWidth="1.2" strokeDasharray="3 2" />

          {/* Deep Femoral Vein (CFV) */}
          <path d="M 130,20 L 135,80" strokeWidth="2.8" strokeLinecap="round" />

          {/* Great Saphenous Vein (GSV) from SFJ to Ankle */}
          <path
            d="M 135,50 C 145,90 152,140 152,185 C 152,230 148,275 142,320 C 140,335 138,350 136,365"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Saphenofemoral Junction (SFJ) */}
          <circle cx="135" cy="50" r="4.5" strokeWidth="1.8" />

          {/* Incompetent Perforators (Cockett / Boyd / Dodd) */}
          <line x1="152" y1="130" x2="135" y2="130" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="152" y1="230" x2="138" y2="230" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="145" y1="290" x2="130" y2="290" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Tortuous Varicose Tributaries */}
          <path
            d="M 152,140 C 165,145 170,160 165,175 C 160,190 172,205 168,220 C 162,235 170,248 165,260"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Anatomical Guidance Labels */}
          <text x="145" y="48" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">SFJ (Groin)</text>
          <text x="160" y="110" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">GSV Trunk</text>
          <text x="175" y="170" fontSize="7" fill="#000000" stroke="none">Varicosities</text>
          <text x="100" y="235" fontSize="7" fill="#000000" stroke="none">Boyd Perf.</text>
          <text x="95" y="295" fontSize="7" fill="#000000" stroke="none">Cockett Perf.</text>
          <text x="145" y="360" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Medial Malleolus</text>
        </svg>
      )}
    </div>
  );
};
