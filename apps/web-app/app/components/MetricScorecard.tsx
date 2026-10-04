"use client";

import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export type IndicatorColor = "emerald" | "cyan" | "sapphire" | "amber" | "crimson";

export interface MetricScorecardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    direction: "up" | "down" | "neutral";
    label: string;
  };
  indicatorColor?: IndicatorColor;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  onClick?: () => void;
}

const INDICATOR_MAP: Record<IndicatorColor, { dot: string; glow: string; text: string; bgLight: string }> = {
  emerald: {
    dot: "bg-emerald-500",
    glow: "shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    text: "text-emerald-700 dark:text-emerald-300",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/40",
  },
  cyan: {
    dot: "bg-sky-500",
    glow: "shadow-[0_0_8px_rgba(14,165,233,0.6)]",
    text: "text-sky-700 dark:text-sky-300",
    bgLight: "bg-sky-50 dark:bg-sky-950/40 border-sky-200/60 dark:border-sky-800/40",
  },
  sapphire: {
    dot: "bg-blue-600",
    glow: "shadow-[0_0_8px_rgba(37,99,235,0.6)]",
    text: "text-blue-700 dark:text-blue-300",
    bgLight: "bg-blue-50 dark:bg-blue-950/40 border-blue-200/60 dark:border-blue-800/40",
  },
  amber: {
    dot: "bg-amber-500",
    glow: "shadow-[0_0_8px_rgba(245,158,11,0.6)]",
    text: "text-amber-700 dark:text-amber-300",
    bgLight: "bg-amber-50 dark:bg-amber-950/40 border-amber-200/60 dark:border-amber-800/40",
  },
  crimson: {
    dot: "bg-rose-500",
    glow: "shadow-[0_0_8px_rgba(244,63,94,0.6)]",
    text: "text-rose-700 dark:text-rose-300",
    bgLight: "bg-rose-50 dark:bg-rose-950/40 border-rose-200/60 dark:border-rose-800/40",
  },
};

export function MetricScorecard({
  title,
  value,
  subtitle,
  trend,
  indicatorColor = "sapphire",
  icon,
  badge,
  className = "",
  onClick,
}: MetricScorecardProps) {
  const colorConfig = INDICATOR_MAP[indicatorColor];

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`group relative overflow-hidden rounded-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 ring-1 ring-inset ring-slate-900/5 dark:ring-white/10 p-3.5 sm:p-4 shadow-xs hover:shadow-sm transition-all duration-200 select-none ${
        onClick ? "cursor-pointer active:scale-[0.99]" : ""
      } ${className}`}
    >
      {/* Top Bar: Title, Dot, Optional Icon/Badge */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${colorConfig.dot} ${colorConfig.glow}`}
            aria-hidden="true"
          />
          <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate tracking-tight">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {badge && (
            <span
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${colorConfig.bgLight} ${colorConfig.text}`}
            >
              {badge}
            </span>
          )}
          {icon && (
            <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              {icon}
            </div>
          )}
        </div>
      </div>

      {/* Main Metric Value */}
      <div className="flex items-baseline justify-between gap-2 mt-1">
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono tabular-nums">
          {value}
        </div>

        {trend && (
          <div
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold ${
              trend.direction === "up"
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                : trend.direction === "down"
                ? "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300"
                : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {trend.direction === "up" && <TrendingUp className="w-3 h-3" />}
            {trend.direction === "down" && <TrendingDown className="w-3 h-3" />}
            {trend.direction === "neutral" && <Minus className="w-3 h-3" />}
            <span>{trend.label}</span>
          </div>
        )}
      </div>

      {/* Subtitle / Context Note */}
      {subtitle && (
        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
          {subtitle}
        </p>
      )}

      {/* Ambient gradient corner highlight */}
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-xl dark:opacity-20"
        style={{
          background:
            indicatorColor === "emerald"
              ? "#10B981"
              : indicatorColor === "cyan"
              ? "#38BDF8"
              : indicatorColor === "crimson"
              ? "#EF4444"
              : indicatorColor === "amber"
              ? "#F59E0B"
              : "#3B82F6",
        }}
      />
    </div>
  );
}
