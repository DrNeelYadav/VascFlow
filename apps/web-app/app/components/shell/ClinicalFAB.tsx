"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  Zap,
  Calculator,
  CalendarPlus,
  Pill,
  FileSpreadsheet,
} from "lucide-react";
import { useEndoflowStore } from "../../dashboard/useEndoflowStore";

export function ClinicalFAB({
  onOpenBookingModal,
}: {
  onOpenBookingModal?: () => void;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const actions = [
    {
      id: "book",
      label: "Book Cath-Lab Case",
      icon: CalendarPlus,
      color: "bg-[#1A73E8] text-white hover:bg-[#1557B0]",
      onClick: () => {
        setIsOpen(false);
        if (onOpenBookingModal) onOpenBookingModal();
        else router.push("/dashboard?view=calendar");
      },
    },
    {
      id: "calc",
      label: "Risk Calculators (MELD, Rotterdam, MACD)",
      icon: Calculator,
      color: "bg-[#FEF7E0] text-[#B06000] hover:bg-[#FEEFC3] border border-[#B06000]/30",
      onClick: () => {
        setIsOpen(false);
        router.push("/dashboard/calculators");
      },
    },
    {
      id: "protocols",
      label: "Drug Protocols & Formularies",
      icon: Pill,
      color: "bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC] border border-[#1A73E8]/30",
      onClick: () => {
        setIsOpen(false);
        router.push("/dashboard/protocols");
      },
    },
    {
      id: "discharge",
      label: "Discharge Card Studio",
      icon: FileSpreadsheet,
      color: "bg-[#E6F4EA] text-[#137333] hover:bg-[#CEEAD6] border border-[#137333]/30",
      onClick: () => {
        setIsOpen(false);
        router.push("/dashboard/discharge");
      },
    },
  ];

  return (
    <div ref={fabRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Speed Dial Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="flex flex-col items-end gap-2.5 mb-3"
          >
            {actions.map((act) => (
              <motion.button
                key={act.id}
                onClick={act.onClick}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full shadow-lg text-xs font-semibold transition cursor-pointer ${act.color}`}
              >
                <span>{act.label}</span>
                <act.icon className="w-4 h-4" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        title="Clinical Quick Actions"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </button>
    </div>
  );
}
