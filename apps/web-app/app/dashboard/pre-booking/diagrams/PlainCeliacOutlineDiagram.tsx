"use client";

import React from "react";

/**
 * Clinical Celiac Axis, SMA & Visceral Arterial Line Diagram
 * Renders the high-definition medical line art template showing the
 * abdominal aorta, celiac trunk (LGA, tortuous splenic, CHA, PHA, RHA, LHA, GDA, SPDA),
 * renal arteries, and superior mesenteric artery (SMA, IPDA, middle colic, right colic, ileocolic,
 * jejunal/ileal arcades) with zero text labels and zero gray shading.
 * Designed for interventional radiologists to annotate bleeding vessels, pseudoaneurysms,
 * and planned coil embolization targets on A4 clinical pre-booking sheets.
 */
export const PlainCeliacOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[320px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/diagrams/normal_celiac_arterial_tree.png"
        alt="Visceral Celiac Trunk and SMA Arterial Tree for Bleeder and TACE Pre-Booking"
        className="w-full h-auto object-contain max-h-[300px] mx-auto"
      />
    </div>
  );
};

