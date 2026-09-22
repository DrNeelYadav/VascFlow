"use client";

import React, { useState } from "react";
import { MasterHardwareItem } from "@/app/lib/hardwareCatalog";

interface HardwarePackagingImageProps {
  item: MasterHardwareItem;
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  showBadge?: boolean;
}

export function HardwarePackagingImage({
  item,
  size = "md",
  onClick,
  showBadge = true,
}: HardwarePackagingImageProps) {
  const [imgError, setImgError] = useState(false);
  // Dimension definitions - large and prominent for clean visibility
  const dimensions = {
    sm: "w-14 h-14",
    md: "w-20 h-20 sm:w-24 sm:h-24",
    lg: "w-32 h-32 sm:w-36 sm:h-36",
    xl: "w-48 h-48 sm:w-56 sm:h-56",
  }[size];

  // Render SVG Silhouette based on item.productSilhouette
  const renderSilhouette = () => {
    switch (item.productSilhouette) {
      case "NEEDLE":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5">
            {/* Bevel Needle Hub & Cannula */}
            <path d="M12 48 L22 38" strokeWidth="5" strokeLinecap="round" stroke="#E2E8F0" />
            <path d="M20 40 L45 15" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="45,15 52,8 48,18" fill="currentColor" />
            <line x1="28" y1="32" x2="30" y2="30" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="34" y1="26" x2="36" y2="24" stroke="#CBD5E1" strokeWidth="1" />
          </svg>
        );
      case "WIRE":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.2">
            {/* Coiled Guidewire */}
            <circle cx="30" cy="30" r="18" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="30" cy="30" r="13" />
            <path d="M43 30 C43 37 37 43 30 43 C23 43 17 37 17 30 C17 23 23 17 30 17 C35 17 40 21 41 26 L48 20" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="48" cy="20" r="2" fill="#FBBF24" />
          </svg>
        );
      case "SHEATH":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5">
            {/* Introducer Sheath with Valve & Sidearm */}
            <rect x="14" y="36" width="12" height="12" rx="3" fill="#E2E8F0" stroke="#CBD5E1" />
            <path d="M22 36 L44 14" strokeWidth="4" strokeLinecap="round" />
            <path d="M44 14 L49 9" strokeWidth="2" strokeLinecap="round" stroke="#FBBF24" />
            <path d="M20 44 C20 48 16 52 10 52" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );
      case "CATHETER":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5">
            {/* Angiographic Catheter Curve (Cobra / Simmons) */}
            <path d="M12 48 L28 32 C34 26 40 22 42 16 C44 10 38 8 34 12 C30 16 32 24 38 24" strokeLinecap="round" />
            <circle cx="12" cy="48" r="3" fill="#E2E8F0" />
            <circle cx="38" cy="24" r="1.5" fill="#EF4444" />
          </svg>
        );
      case "MICROCATHETER":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Fine Coaxial Microcatheter with Dual Radiopaque Gold Markers */}
            <path d="M10 50 L35 25 L48 12" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="42" y="16" width="3" height="3" fill="#F59E0B" rx="0.5" />
            <rect x="46" y="12" width="3" height="3" fill="#F59E0B" rx="0.5" />
            <circle cx="10" cy="50" r="3.5" fill="#E2E8F0" />
          </svg>
        );
      case "BALLOON":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2">
            {/* PTA Angioplasty Balloon with Tapered Shoulders */}
            <line x1="8" y1="52" x2="52" y2="8" strokeWidth="1.5" />
            <path d="M22 38 L25 31 L35 21 L42 18 L38 22 L31 35 L22 38 Z" fill="currentColor" fillOpacity="0.3" strokeWidth="2" />
            <circle cx="27" cy="33" r="1.5" fill="#FBBF24" />
            <circle cx="37" cy="23" r="1.5" fill="#FBBF24" />
          </svg>
        );
      case "STENT":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.8">
            {/* Cylindrical Mesh Wireframe Stent */}
            <rect x="15" y="20" width="30" height="20" rx="3" strokeWidth="2" />
            <line x1="20" y1="20" x2="25" y2="40" strokeWidth="1.2" />
            <line x1="25" y1="20" x2="20" y2="40" strokeWidth="1.2" />
            <line x1="30" y1="20" x2="35" y2="40" strokeWidth="1.2" />
            <line x1="35" y1="20" x2="30" y2="40" strokeWidth="1.2" />
            <line x1="40" y1="20" x2="45" y2="40" strokeWidth="1.2" />
          </svg>
        );
      case "SHUNT":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Viatorr TIPS Shunt with Covered Body & Bare Portal Cage */}
            <rect x="14" y="22" width="22" height="16" rx="2" fill="#E2E8F0" fillOpacity="0.4" strokeWidth="2" />
            <rect x="36" y="22" width="10" height="16" strokeDasharray="2 2" strokeWidth="1.5" />
            <line x1="36" y1="20" x2="36" y2="40" stroke="#F59E0B" strokeWidth="2.5" />
          </svg>
        );
      case "COIL":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.2">
            {/* Fibered Platinum Embolization Coil Helix */}
            <path d="M12 36 Q18 20 24 36 T36 36 T48 36" strokeLinecap="round" />
            <line x1="24" y1="36" x2="24" y2="28" stroke="#38BDF8" strokeWidth="1.2" />
            <line x1="30" y1="36" x2="30" y2="44" stroke="#38BDF8" strokeWidth="1.2" />
            <line x1="36" y1="36" x2="36" y2="28" stroke="#38BDF8" strokeWidth="1.2" />
            <line x1="42" y1="36" x2="42" y2="44" stroke="#38BDF8" strokeWidth="1.2" />
          </svg>
        );
      case "AMPOULE":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Glass Pharmaceutical Ampoule / Vial */}
            <path d="M26 12 L34 12 L34 18 L37 23 L37 46 L23 46 L23 23 L26 18 Z" fill="currentColor" fillOpacity="0.25" rx="1" />
            <line x1="26" y1="18" x2="34" y2="18" stroke="#FBBF24" strokeWidth="2" />
            <rect x="25" y="28" width="10" height="12" rx="1" fill="#FFFFFF" fillOpacity="0.8" />
          </svg>
        );
      case "DRAIN":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.2">
            {/* Pigtail Drainage Catheter with Suture Lock */}
            <path d="M14 48 L32 30" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="22" r="10" strokeDasharray="3 2" />
            <circle cx="32" cy="30" r="3" fill="#3B82F6" />
          </svg>
        );
      case "CLOSURE":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-[#5F6368]" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Vascular Closure Suture / Collagen Device */}
            <rect x="18" y="15" width="24" height="30" rx="3" strokeWidth="2" fill="#E8EAED" />
            <line x1="30" y1="10" x2="30" y2="50" strokeWidth="2.5" stroke="#1A73E8" />
            <circle cx="30" cy="30" r="4" fill="#137333" />
            <path d="M22 45 L38 45" strokeWidth="2" stroke="#EA4335" />
          </svg>
        );
      case "RETRIEVER":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-[#5F6368]" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Stent Retriever / Snare Basket */}
            <line x1="10" y1="30" x2="25" y2="30" strokeWidth="2.5" stroke="#1A73E8" />
            <ellipse cx="38" cy="30" rx="14" ry="9" strokeWidth="2" strokeDasharray="3 2" fill="#E8EAED" fillOpacity="0.4" />
            <path d="M25 30 Q38 18 50 30 Q38 42 25 30" strokeWidth="2" stroke="#FBBC04" />
          </svg>
        );
      case "FILTER":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-[#5F6368]" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Conical IVC Vena Cava Filter with Anchoring Struts */}
            <circle cx="30" cy="14" r="3" fill="#1A73E8" />
            <line x1="30" y1="14" x2="16" y2="46" strokeWidth="2" stroke="#5F6368" />
            <line x1="30" y1="14" x2="44" y2="46" strokeWidth="2" stroke="#5F6368" />
            <line x1="30" y1="14" x2="24" y2="46" strokeWidth="1.5" stroke="#137333" />
            <line x1="30" y1="14" x2="36" y2="46" strokeWidth="1.5" stroke="#137333" />
            <circle cx="16" cy="46" r="2" fill="#EA4335" />
            <circle cx="44" cy="46" r="2" fill="#EA4335" />
          </svg>
        );
      case "ACCESSORY":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-[#5F6368]" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Syringe / Y-Connector / Stopcock */}
            <rect x="20" y="16" width="20" height="28" rx="2" fill="#E8EAED" stroke="#5F6368" strokeWidth="2" />
            <line x1="30" y1="10" x2="30" y2="16" strokeWidth="3" stroke="#1A73E8" />
            <line x1="24" y1="10" x2="36" y2="10" strokeWidth="2" stroke="#1A73E8" />
            <path d="M30 44 L30 52" strokeWidth="3" stroke="#5F6368" />
            <line x1="25" y1="24" x2="35" y2="24" strokeWidth="1.5" stroke="#137333" />
            <line x1="25" y1="32" x2="35" y2="32" strokeWidth="1.5" stroke="#137333" />
          </svg>
        );
      case "DRUG":
        return (
          <svg viewBox="0 0 60 60" className="w-3/4 h-3/4 text-[#5F6368]" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Glass Pharmaceutical Vial with Flip-Off Cap */}
            <rect x="22" y="14" width="16" height="6" rx="1" fill="#EA4335" stroke="#EA4335" />
            <rect x="25" y="20" width="10" height="6" fill="#BDC1C6" />
            <rect x="18" y="26" width="24" height="26" rx="3" fill="#E8EAED" stroke="#5F6368" strokeWidth="2" />
            <rect x="20" y="32" width="20" height="14" fill="#FFFFFF" stroke="#BDC1C6" strokeWidth="1" />
            <line x1="23" y1="38" x2="37" y2="38" stroke="#1A73E8" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative flex items-center justify-center shrink-0 select-none transition-all duration-200 ${
        onClick ? "cursor-pointer hover:scale-105 active:scale-95" : ""
      } ${dimensions}`}
      title={`${item.name} (${item.manufacturer}) - Click to inspect brochure`}
    >
      {item.imageUrl && !imgError ? (
        <img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[#5F6368]">
          {renderSilhouette()}
        </div>
      )}
    </div>
  );
}
