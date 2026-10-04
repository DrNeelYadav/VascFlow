"use client";

import React from "react";

interface EndoFlowLogoProps {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
  theme?: "dark" | "light"; // "dark" = dark text on light surfaces (default Google style), "light" = white text on dark surfaces
}

export function EndoFlowLogo({
  size = "md",
  showSubtitle = true,
  className = "",
  theme = "dark",
}: EndoFlowLogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const iconDimensions = {
    sm: 28,
    md: 36,
    lg: 44,
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  const isLightText = theme === "light";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Unified Minimalist EndoFlow Vector Mark */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/endoflow_logo.svg"
          alt="EndoFlow Logo"
          width={iconDimensions[size]}
          height={iconDimensions[size]}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-heading font-extrabold tracking-tight ${
              isLightText ? "text-white" : "text-slate-900"
            } ${textSizes[size]}`}
          >
            EndoFlow
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`${subtitleSizes[size]} font-mono tracking-wider uppercase mt-0.5 ${
              isLightText ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Interventional Radiology
          </span>
        )}
      </div>
    </div>
  );
}
