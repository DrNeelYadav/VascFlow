"use client";

import React, { useState, useEffect, useRef } from "react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { Lock, ShieldCheck, KeyRound, AlertCircle, RefreshCw, X } from "lucide-react";

interface SessionTimeoutModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onUnlocked?: () => void;
}

export function SessionTimeoutModal({
  isOpen,
  onClose,
  onUnlocked,
}: SessionTimeoutModalProps) {
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const [pin, setPin] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPin("");
      setError(null);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVerifyPin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!pin || pin.length < 4) {
      setError("Please enter your 6-digit security PIN");
      return;
    }

    setIsVerifying(true);
    setError(null);

    setTimeout(() => {
      // Check PIN: default institutional PIN is "123456" or "000000"
      if (pin === "123456" || pin === "000000") {
        setIsVerifying(false);
        if (onUnlocked) onUnlocked();
        if (onClose) onClose();
      } else {
        setIsVerifying(false);
        setError("Invalid security PIN. Access denied.");
        setPin("");
        inputRef.current?.focus();
      }
    }, 300);
  };

  const handleKeypadPress = (digit: string) => {
    if (pin.length < 6) {
      const nextPin = pin + digit;
      setPin(nextPin);
      if (nextPin.length === 6) {
        // Auto-submit on 6 digits
        setTimeout(() => {
          if (nextPin === "123456" || nextPin === "000000") {
            if (onUnlocked) onUnlocked();
            if (onClose) onClose();
          } else {
            setError("Invalid security PIN. Access denied.");
            setPin("");
          }
        }, 150);
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-md rounded-2xl border border-[#DADCE0] bg-white p-6 shadow-2xl text-[#202124] relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#F1F3F4] pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3]">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#202124] tracking-tight">
              Bedside Clinical Station Locked
            </h3>
            <p className="text-xs text-[#5F6368]">
              HIPAA Quick Re-Authentication &bull; Cath-Lab Safety Gate
            </p>
          </div>
        </div>

        {/* Staff Profile Pill */}
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A73E8] font-bold text-white text-xs shadow-xs">
            {currentStaff?.avatar || "DR"}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-[#202124] truncate">
              {currentStaff?.name || "Dr. Neel Yadav"}
            </div>
            <div className="text-xs text-[#5F6368] truncate">
              {currentStaff?.title || "DM Resident"} &bull; {currentStaff?.code || "DM01"}
            </div>
          </div>
          <span className="rounded-md bg-[#E8F0FE] px-2 py-0.5 text-[10px] font-semibold text-[#1A73E8] border border-[#D2E3FC]">
            {currentStaff?.tier || "FACULTY / RESIDENT"}
          </span>
        </div>

        {/* PIN Input & Visual Indicators */}
        <form onSubmit={handleVerifyPin} className="mt-5 space-y-4">
          <div>
            <label className="block text-center text-xs font-semibold uppercase tracking-wider text-[#5F6368] mb-2">
              Enter 6-Digit Institutional Security PIN
            </label>
            <div className="flex justify-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const isFilled = index < pin.length;
                return (
                  <div
                    key={index}
                    className={`h-10 w-10 rounded-lg border flex items-center justify-center text-lg font-mono font-bold transition-all ${
                      isFilled
                        ? "border-[#1A73E8] bg-[#E8F0FE] text-[#1A73E8] shadow-xs"
                        : "border-[#DADCE0] bg-[#F8F9FA] text-[#80868B]"
                    }`}
                  >
                    {isFilled ? "&bull;" : ""}
                  </div>
                );
              })}
            </div>
            <input
              ref={inputRef}
              type="password"
              inputMode="numeric"
              maxLength={6}
              value={pin}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                setPin(val);
                setError(null);
              }}
              className="sr-only"
              autoFocus
            />
          </div>

          {error && (
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#FCE8E6] border border-[#F5C2C7] p-2 text-xs text-[#C5221F]">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Quick Touch Keypad for Cath-Lab Monitors */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "OK"].map((key) => {
              if (key === "C") {
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={handleBackspace}
                    className="h-11 rounded-xl bg-[#F1F3F4] hover:bg-[#E8EAED] border border-[#DADCE0] text-xs font-semibold text-[#5F6368] hover:text-[#202124] transition active:scale-95 cursor-pointer"
                  >
                    Delete
                  </button>
                );
              }
              if (key === "OK") {
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleVerifyPin()}
                    disabled={isVerifying || pin.length < 4}
                    className="h-11 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] border border-[#1765CC] disabled:opacity-40 text-xs font-bold text-white transition active:scale-95 flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  >
                    {isVerifying ? <RefreshCw className="h-4 w-4 animate-spin" /> : "Unlock"}
                  </button>
                );
              }
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleKeypadPress(key)}
                  className="h-11 rounded-xl bg-[#FFFFFF] hover:bg-[#F1F3F4] border border-[#DADCE0] text-sm font-bold font-mono text-[#202124] transition active:scale-95 shadow-xs cursor-pointer"
                >
                  {key}
                </button>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <p className="text-[11px] text-[#5F6368]">
              Preserves active case vitals, flowsheet metrics, and draft reports in memory.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
