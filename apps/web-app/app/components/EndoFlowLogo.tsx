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

  const isLightText = theme === "light";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Unified Minimalist EndoFlow Vector Mark */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/endoflow_logo.svg"
          alt="EndoFlow Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-heading font-extrabold tracking-tight ${
              isLightText ? "text-white" : "text-[#202124]"
            } ${textSizes[size]}`}
          >
            EndoFlow
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[10px] font-mono tracking-wider uppercase mt-0.5 ${
              isLightText ? "text-[#9AA0A6]" : "text-[#5F6368]"
            }`}
          >
            Interventional Radiology
          </span>
        )}
      </div>
    </div>
  );
}
