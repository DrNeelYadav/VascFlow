"use client";

import React from "react";

/**
 * Elaborative Clinical Liver Anatomy Diagram with Couinaud Segments & Hepatic Arterial Tree
 * High-definition vector line art for pen annotation of tumor locations,
 * feeding arteries, and selective microcatheter paths during TACE pre-booking.
 */
export const PlainLiverOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[340px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 400 290"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Outer Liver Capsule Contour */}
        <path
          d="M 120,240 
             C 80,240 45,215 35,175 
             C 22,125 38,70 80,40 
             C 125,12 195,10 240,22 
             C 260,28 275,38 285,50 
             C 298,40 320,32 350,38 
             C 378,45 392,72 388,102 
             C 378,145 330,175 285,182 
             C 265,185 252,195 245,210 
             C 232,230 208,240 185,240 
             C 165,240 145,242 120,240 Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Falciform Ligament dividing Right and Left Lobes */}
        <path
          d="M 285,50 C 275,85 268,125 260,160 C 255,182 250,195 245,210"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Couinaud Segmental Partition Guidelines (Subtle Dashed Lines) */}
        {/* Right Intersegmental Plane (Between Segments VI/VII and V/VIII) */}
        <path
          d="M 155,25 C 150,75 145,130 135,190"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        {/* Cantlie Line (IVC to Gallbladder Fossa - Functional Bisection) */}
        <path
          d="M 230,22 C 220,80 205,140 195,200"
          strokeWidth="1.4"
          strokeDasharray="5 3"
          strokeLinecap="round"
        />
        {/* Left Segmental Division (Segment II above, Segment III below) */}
        <path
          d="M 285,115 C 320,110 355,100 385,95"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* Gallbladder Contour in Fossa */}
        <path
          d="M 175,205 C 168,235 188,255 205,250 C 218,245 218,220 212,200"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
        />

        {/* Inferior Vena Cava (IVC) groove */}
        <path
          d="M 225,10 C 228,25 230,40 230,55"
          strokeWidth="2.0"
          strokeLinecap="round"
        />
        <path
          d="M 242,12 C 245,26 247,40 247,55"
          strokeWidth="2.0"
          strokeLinecap="round"
        />

        {/* Hepatic Arterial Tree (Celiac -> Common Hepatic -> Proper Hepatic -> RHA & LHA) */}
        <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Proper Hepatic Trunk */}
          <path d="M 210,280 C 212,245 215,225 220,205" />
          {/* Gastroduodenal Artery (GDA) takeoff */}
          <path d="M 215,240 C 205,255 195,268 185,280" strokeWidth="1.4" />
          {/* Left Hepatic Artery branching to Segments II, III, IV */}
          <path d="M 220,205 C 235,185 260,170 280,155" />
          <path d="M 280,155 C 305,140 330,125 350,110" strokeWidth="1.4" />
          <path d="M 280,155 C 295,170 315,180 335,185" strokeWidth="1.4" />
          <path d="M 260,170 C 255,150 250,130 245,115" strokeWidth="1.2" />

          {/* Right Hepatic Artery branching into Anterior and Posterior divisions */}
          <path d="M 220,205 C 200,185 175,170 150,155" />
          {/* Right Posterior (Segments VI & VII) */}
          <path d="M 150,155 C 120,140 95,120 70,105" strokeWidth="1.4" />
          <path d="M 95,120 C 85,145 75,170 65,190" strokeWidth="1.2" />
          {/* Right Anterior (Segments V & VIII) */}
          <path d="M 150,155 C 145,130 140,100 135,75" strokeWidth="1.4" />
          <path d="M 140,100 C 160,85 180,75 200,65" strokeWidth="1.2" />
          <path d="M 145,130 C 160,145 175,160 185,175" strokeWidth="1.2" />
        </g>

        {/* Couinaud Segment Numeric Watermarks */}
        <text x="310" y="80" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">II</text>
        <text x="330" y="150" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">III</text>
        <text x="250" y="90" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">IVa</text>
        <text x="240" y="165" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">IVb</text>
        <text x="160" y="180" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">V</text>
        <text x="80" y="180" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">VI</text>
        <text x="75" y="80" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">VII</text>
        <text x="160" y="70" fontSize="13" fontWeight="bold" fill="#000000" stroke="none" opacity="0.6">VIII</text>
        <text x="200" y="275" fontSize="9" fontWeight="bold" fill="#000000" stroke="none">Proper Hepatic Art.</text>
        <text x="150" y="275" fontSize="8" fill="#000000" stroke="none">GDA</text>
      </svg>
    </div>
  );
};
