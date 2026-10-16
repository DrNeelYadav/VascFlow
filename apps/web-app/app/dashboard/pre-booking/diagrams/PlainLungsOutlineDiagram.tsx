"use client";

import React from "react";

/**
 * Clinical Lungs & Tracheobronchial Tree Outline Diagram
 * Renders the clean, high-resolution Gemini medical line art template
 * with trachea, carina, bronchial branching, lung lobes, cardiac silhouette,
 * and diaphragm for marking BAE bleeding lobes and arterial embolization targets.
 */
export const PlainLungsOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/diagrams/normal_lungs_bae.png"
        alt="Normal Lungs & Tracheobronchial Tree Line Diagram"
        className="w-full h-auto object-contain max-h-[250px] mx-auto"
      />
    </div>
  );
};
