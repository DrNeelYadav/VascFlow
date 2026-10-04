"use client";

import React from "react";

export function SmsHospitalCrest({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title="Sawai Man Singh Medical College & Attached Hospitals, Jaipur"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
        role="img"
        aria-label="SMS Medical College Institutional Crest"
      >
        {/* Shield Outer Gold / Sapphire Border */}
        <path
          d="M20 2L5 7V19C5 29.5 11.5 36.5 20 38.5C28.5 36.5 35 29.5 35 19V7L20 2Z"
          fill="url(#crest-bg-grad)"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        {/* Inner Gold Shield Accent */}
        <path
          d="M20 4.5L7.5 8.7V18.5C7.5 27.2 12.8 33.2 20 35C27.2 33.2 32.5 27.2 32.5 18.5V8.7L20 4.5Z"
          stroke="#F59E0B"
          strokeWidth="0.8"
          strokeDasharray="2 1"
          opacity="0.8"
        />
        {/* Medical Caduceus / Staff of Asclepius */}
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="30"
          stroke="#F8FAFC"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Gold Finial */}
        <circle cx="20" cy="7.5" r="1.5" fill="#FBBF24" />
        {/* Entwined Serpent */}
        <path
          d="M16 12C18 10.5 22 10.5 24 12C25 13 25 14.5 24 15.5C22 17.5 18 17.5 16 19.5C15 20.5 15 22 16 23C18 24.5 22 24.5 24 26C24.8 26.8 24.8 27.8 24 28.5"
          stroke="#38BDF8"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* Radiopaque Diamond Core */}
        <path
          d="M20 18L21.8 20.5L20 23L18.2 20.5L20 18Z"
          fill="#EF4444"
          stroke="#FFFFFF"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="crest-bg-grad" x1="5" y1="2" x2="35" y2="38.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" />
            <stop offset="0.5" stopColor="#1E40AF" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
