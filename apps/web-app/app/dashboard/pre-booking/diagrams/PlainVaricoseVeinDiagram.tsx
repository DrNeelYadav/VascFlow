"use client";

import React from "react";

/**
 * Clinical Varicose Veins Lower Limb Venous Anatomy Diagram
 * Renders the clean, high-resolution Gemini medical line art template
 * with anterior and posterior lower limb silhouettes (SFJ, GSV, SSV, SPJ, deep femoral)
 * with zero labels and zero shading for pen annotations during pre-booking.
 */
export const PlainVaricoseVeinDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[320px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/diagrams/normal_varicose_vein.png"
        alt="Lower Limb Venous Anatomy for EVLA and Varicose Vein Pre-Booking"
        className="w-full h-auto object-contain max-h-[300px] mx-auto"
      />
    </div>
  );
};
