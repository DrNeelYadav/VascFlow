"use client";

import React from "react";

/**
 * Clinical Liver Anatomical Line Diagram
 * Renders the clean, high-resolution Gemini medical line art template
 * with anterior anatomical contours (right lobe, left lobe, falciform line,
 * gallbladder, and inferior margin) for pen annotations during TACE pre-booking.
 */
export const PlainLiverOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/diagrams/normal_liver.png"
        alt="Normal Liver Anatomical Line Diagram"
        className="w-full h-auto object-contain max-h-[240px] mx-auto"
      />
    </div>
  );
};
