"use client";

import React, { useState } from "react";
import type { FrcrQuestion, QuizMode, UserAnswerRecord } from "../types";
import { QuizImageModal } from "./QuizImageModal";

interface QuizExplanationCardProps {
  question: FrcrQuestion;
  currentAnswer?: UserAnswerRecord;
  mode: QuizMode;
}

export function QuizExplanationCard({
  question,
  currentAnswer,
  mode,
}: QuizExplanationCardProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption?: string } | null>(null);
  const isAnswered = currentAnswer !== undefined;

  // In Tutor mode, reveal explanation once answered.
  if (!isAnswered && mode === "tutor") {
    return null;
  }

  const blocks = question.explanationBlocks && question.explanationBlocks.length > 0
    ? question.explanationBlocks
    : question.explanation
    ? [{ type: "text" as const, content: question.explanation }]
    : [];

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-2xs transition-colors">
        {/* Verbatim Explanation Content from Google Docs */}
        <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 select-text">
          {blocks.map((block, idx) => {
            if (block.type === "image" && block.src) {
              return (
                <div key={idx} className="my-3 flex flex-col items-center">
                  <div
                    onClick={() => setSelectedImage({ src: block.src!, caption: block.caption })}
                    className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950/20 max-w-full hover:ring-2 hover:ring-blue-500 transition"
                  >
                    <img
                      src={block.src}
                      alt={block.caption || "Radiology Case Image"}
                      className="max-h-[420px] w-auto object-contain rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/75 text-[10px] text-white backdrop-blur-xs opacity-80 group-hover:opacity-100 transition">
                      Click to zoom
                    </div>
                  </div>
                  {block.caption && (
                    <div className="mt-1 text-center text-[11px] text-slate-500 italic max-w-lg">
                      {block.caption}
                    </div>
                  )}
                </div>
              );
            }

            const text = block.content || "";
            // Check if markdown table
            if (text.startsWith("|") && text.includes("\n|")) {
              const rows = text.split("\n").filter((r) => r.trim().startsWith("|"));
              return (
                <div key={idx} className="my-2 overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse border border-slate-300 dark:border-slate-700">
                    <tbody>
                      {rows.map((rowStr, rIdx) => {
                        if (rowStr.includes("---")) return null;
                        const cells = rowStr.split("|").slice(1, -1).map((c) => c.trim());
                        return (
                          <tr
                            key={rIdx}
                            className={rIdx === 0 ? "bg-slate-100 dark:bg-slate-800 font-semibold" : "border-t border-slate-200 dark:border-slate-800"}
                          >
                            {cells.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2 border-r border-slate-200 dark:border-slate-800">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }

            return (
              <p key={idx} className="whitespace-pre-line">
                {text}
              </p>
            );
          })}
        </div>
      </div>

      {/* 1-Click Modal Zoom */}
      <QuizImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        caption={selectedImage?.caption}
      />
    </>
  );
}
