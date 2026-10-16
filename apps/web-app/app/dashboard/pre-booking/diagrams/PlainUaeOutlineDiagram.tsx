"use client";

import React from "react";

/**
 * Elaborative Clinical Uterine Artery Embolization (UAE / UFE) Pelvic Diagram
 * High-definition vector line art for marking uterine fibroids, anterior internal iliac
 * division, uterine artery hairpin turn, fundal branches, and ovarian anastomoses.
 */
export const PlainUaeOutlineDiagram: React.FC<{ className?: string }> = ({
  className = "w-full max-w-[320px] mx-auto",
}) => {
  return (
    <div className={`relative bg-white text-black ${className}`}>
      <svg
        viewBox="0 0 360 300"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        {/* Pelvic Brim Guideline (Subtle) */}
        <path
          d="M 50,60 C 90,40 180,45 180,45 C 180,45 270,40 310,60 C 330,120 320,220 280,270 L 80,270 C 40,220 30,120 50,60 Z"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        {/* Central Uterus Contour (Pear-shaped) */}
        <path
          d="M 180,110 
             C 145,110 130,135 130,175 
             C 130,215 155,245 180,250 
             C 205,245 230,215 230,175 
             C 230,135 215,110 180,110 Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="#ffffff"
        />
        {/* Cervix & Endometrial Cavity line */}
        <line x1="180" y1="130" x2="180" y2="235" strokeWidth="1.2" strokeDasharray="3 2" />

        {/* Uterine Fibroid / Myoma Outline Guidelines for Pen Shading */}
        <circle cx="160" cy="150" r="14" strokeWidth="1.5" strokeDasharray="3 2" fill="#ffffff" />
        <circle cx="200" cy="185" r="16" strokeWidth="1.5" strokeDasharray="3 2" fill="#ffffff" />
        <text x="148" y="153" fontSize="7" fill="#000000" stroke="none">Fibroid 1</text>
        <text x="188" y="188" fontSize="7" fill="#000000" stroke="none">Fibroid 2</text>

        {/* Aorta & Iliac Bifurcation */}
        <path d="M 180,15 L 180,55" strokeWidth="3.0" strokeLinecap="round" />
        {/* Right Common Iliac & Internal Iliac */}
        <path d="M 180,55 C 160,70 135,90 110,125" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 135,90 C 130,115 125,145 120,180" strokeWidth="2.0" strokeLinecap="round" />

        {/* Left Common Iliac & Internal Iliac */}
        <path d="M 180,55 C 200,70 225,90 250,125" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M 225,90 C 230,115 235,145 240,180" strokeWidth="2.0" strokeLinecap="round" />

        {/* Right Uterine Artery (Classic Hairpin Turn at Cervix ascending along lateral margin) */}
        <path
          d="M 120,180 C 120,215 140,225 152,215 C 158,205 155,185 152,150 C 150,130 160,120 170,115"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Left Uterine Artery */}
        <path
          d="M 240,180 C 240,215 220,225 208,215 C 202,205 205,185 208,150 C 210,130 200,120 190,115"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Bilateral Ovaries & Ovarian Anastomoses (Upper corners) */}
        <ellipse cx="95" cy="115" rx="10" ry="7" strokeWidth="1.2" strokeDasharray="3 2" />
        <ellipse cx="265" cy="115" rx="10" ry="7" strokeWidth="1.2" strokeDasharray="3 2" />
        <line x1="95" y1="115" x2="145" y2="125" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="265" y1="115" x2="215" y2="125" strokeWidth="1" strokeDasharray="2 2" />

        {/* Labels for Anatomical Pen Marking */}
        <text x="185" y="35" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Aorta</text>
        <text x="95" y="85" fontSize="8" fill="#000000" stroke="none">Rt Iliac</text>
        <text x="235" y="85" fontSize="8" fill="#000000" stroke="none">Lt Iliac</text>
        <text x="75" y="195" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Rt. Uterine Art.</text>
        <text x="245" y="195" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Lt. Uterine Art.</text>
        <text x="165" y="265" fontSize="8" fontWeight="bold" fill="#000000" stroke="none">Cervix</text>
      </svg>
    </div>
  );
};
