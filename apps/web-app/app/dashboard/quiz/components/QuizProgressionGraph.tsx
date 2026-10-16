"use client";

import React from "react";
import type { DailyProgressPoint } from "../types";

interface QuizProgressionGraphProps {
  points: DailyProgressPoint[];
}

export function QuizProgressionGraph({ points }: QuizProgressionGraphProps) {
  // If no points yet, provide sample progression anchor
  const displayPoints = points.length > 0 ? points : [
    { date: "Day 1", attempted: 20, correct: 15, accuracy: 75 },
    { date: "Day 2", attempted: 35, correct: 28, accuracy: 80 },
    { date: "Day 3", attempted: 25, correct: 20, accuracy: 80 },
    { date: "Day 4", attempted: 45, correct: 36, accuracy: 80 },
    { date: "Day 5", attempted: 50, correct: 41, accuracy: 82 },
  ];

  const maxAttempted = Math.max(...displayPoints.map((p) => p.attempted), 10);
  const width = 600;
  const height = 140;
  const paddingX = 40;
  const paddingY = 25;

  const chartW = width - paddingX * 2;
  const chartH = height - paddingY * 2;
  const stepX = displayPoints.length > 1 ? chartW / (displayPoints.length - 1) : chartW;

  // Generate SVG path coordinates for the accuracy % line
  const linePath = displayPoints
    .map((p, idx) => {
      const x = paddingX + idx * stepX;
      const y = height - paddingY - (p.accuracy / 100) * chartH;
      return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-2xs space-y-2">
      <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100 dark:border-slate-800">
        <div className="font-bold text-slate-900 dark:text-white">
          Progression & Accuracy Trend (14-Day Velocity)
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-300 dark:bg-slate-700 inline-block" /> Questions Solved
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-1 rounded-full bg-blue-600 inline-block" /> Accuracy %
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-36 select-none overflow-visible"
        >
          {/* Horizontal grid guide lines */}
          <line
            x1={paddingX}
            y1={height - paddingY - chartH}
            x2={width - paddingX}
            y2={height - paddingY - chartH}
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-800"
            strokeDasharray="4 4"
          />
          <line
            x1={paddingX}
            y1={height - paddingY - chartH / 2}
            x2={width - paddingX}
            y2={height - paddingY - chartH / 2}
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-800"
            strokeDasharray="4 4"
          />
          <line
            x1={paddingX}
            y1={height - paddingY}
            x2={width - paddingX}
            y2={height - paddingY}
            stroke="currentColor"
            className="text-slate-300 dark:text-slate-700"
          />

          {/* Bar elements for questions attempted */}
          {displayPoints.map((p, idx) => {
            const x = paddingX + idx * stepX - 10;
            const barH = (p.attempted / maxAttempted) * chartH;
            const y = height - paddingY - barH;
            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={y}
                  width={20}
                  height={barH}
                  rx={4}
                  className="fill-slate-200 dark:fill-slate-800 hover:fill-blue-200 dark:hover:fill-blue-900 transition-colors"
                />
                <text
                  x={x + 10}
                  y={height - 8}
                  textAnchor="middle"
                  className="text-[9px] fill-slate-400 font-mono"
                >
                  {p.date.slice(5)}
                </text>
              </g>
            );
          })}

          {/* Accuracy trendline */}
          <path
            d={linePath}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Dot markers on accuracy line */}
          {displayPoints.map((p, idx) => {
            const x = paddingX + idx * stepX;
            const y = height - paddingY - (p.accuracy / 100) * chartH;
            return (
              <circle
                key={idx}
                cx={x}
                cy={y}
                r={4}
                className="fill-white stroke-blue-600 stroke-2"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
