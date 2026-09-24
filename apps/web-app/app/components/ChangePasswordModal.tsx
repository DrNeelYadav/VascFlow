"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle2, AlertCircle, X, KeyRound } from "lucide-react";
import { changeStaffPassword, getStaffAccountByCode } from "../lib/staffAccounts";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStaffCode?: string;
  onSuccess?: (code?: string) => void;
}

export function ChangePasswordModal({
  isOpen,
  onClose,
  defaultStaffCode = "DM01",
  onSuccess,
}: ChangePasswordModalProps) {
  const [staffCode, setStaffCode] = useState(defaultStaffCode);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync default staff code when opening
  React.useEffect(() => {
    if (isOpen) {
      if (defaultStaffCode) setStaffCode(defaultStaffCode);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setErrorMsg(null);
      setSuccessMsg(null);
      setIsSubmitting(false);
    }
  }, [isOpen, defaultStaffCode]);

  if (!isOpen) return null;

  const staffAccount = getStaffAccountByCode(staffCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!staffCode.trim()) {
      setErrorMsg("Please enter your Resident / Staff ID.");
      return;
    }

    if (!currentPassword) {
      setErrorMsg("Please enter your current PIN / Password.");
      return;
    }

    if (newPassword.length < 4) {
      setErrorMsg("New PIN / Password must be at least 4 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg("New password and confirmation do not match.");
      return;
    }

    if (currentPassword === newPassword) {
      setErrorMsg("New password must be different from your current password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = changeStaffPassword(staffCode, currentPassword, newPassword);
      if (!res.success) {
        setErrorMsg(res.message);
        setIsSubmitting(false);
        return;
      }

      setSuccessMsg(res.message);
      setIsSubmitting(false);

      setTimeout(() => {
        if (onSuccess) onSuccess(staffCode.trim().toUpperCase());
        onClose();
      }, 1500);
    } catch {
      setErrorMsg("An unexpected error occurred while updating the password.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="change-password-modal-title"
    >
      <div className="w-full max-w-md rounded-2xl border border-[#DADCE0] bg-white p-6 shadow-2xl text-[#202124] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
          aria-label="Close change password modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[#F1F3F4] pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
            <KeyRound className="h-5 w-5" />
          </div>
          <div>
            <h3 id="change-password-modal-title" className="text-base font-bold text-[#202124] tracking-tight">
              Update Resident Password
            </h3>
            <p className="text-xs text-[#5F6368]">
              Interventional Radiology Workstation Security
            </p>
          </div>
        </div>

        {/* Resident Indicator if found */}
        {staffAccount && (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A73E8] font-bold text-white text-xs">
              {staffAccount.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-[#202124] truncate">
                {staffAccount.name}
              </div>
              <div className="text-[11px] text-[#5F6368] truncate">
                {staffAccount.title} &bull; {staffAccount.code}
              </div>
            </div>
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white text-[#1A73E8] border border-[#D2E3FC]">
              {staffAccount.tier}
            </span>
          </div>
        )}

        {/* Change Password Form with Chrome Password Manager compliant attributes */}
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-3.5 mt-4"
          autoComplete="on"
        >
          {/* Staff ID / Username */}
          <div className="space-y-1">
            <label htmlFor="change-password-username" className="block text-xs font-medium text-[#202124]">
              Resident / Staff ID
            </label>
            <input
              type="text"
              id="change-password-username"
              name="username"
              autoComplete="username"
              autoCapitalize="characters"
              spellCheck={false}
              required
              value={staffCode}
              onChange={(e) => {
                setStaffCode(e.target.value.toUpperCase());
                setErrorMsg(null);
              }}
              placeholder="e.g. DM01"
              className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-sm text-[#202124] uppercase font-mono tracking-wide focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none"
            />
          </div>

          {/* Current Password */}
          <div className="space-y-1">
            <label htmlFor="change-password-current" className="block text-xs font-medium text-[#202124]">
              Current Password / PIN
            </label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                id="change-password-current"
                name="current-password"
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Enter current PIN"
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-sm text-[#202124] tracking-widest focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none pr-9"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5F6368] hover:text-[#202124]"
                aria-label={showCurrent ? "Hide current password" : "Show current password"}
              >
                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-1">
            <label htmlFor="change-password-new" className="block text-xs font-medium text-[#202124]">
              New Password / PIN (Min. 4 chars)
            </label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                id="change-password-new"
                name="new-password"
                autoComplete="new-password"
                required
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Enter new PIN"
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-sm text-[#202124] tracking-widest focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none pr-9"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5F6368] hover:text-[#202124]"
                aria-label={showNew ? "Hide new password" : "Show new password"}
              >
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-1">
            <label htmlFor="change-password-confirm" className="block text-xs font-medium text-[#202124]">
              Confirm New Password / PIN
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                id="change-password-confirm"
                name="confirm-new-password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder="Re-enter new PIN"
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-sm text-[#202124] tracking-widest focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] focus:outline-none pr-9"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5F6368] hover:text-[#202124]"
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Feedback Alerts */}
          {errorMsg && (
            <div className="p-2.5 rounded-lg border border-[#FAD2CF] bg-[#FCE8E6] text-[#C5221F] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#C5221F]" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-2.5 rounded-lg border border-[#CEEAD6] bg-[#E6F4EA] text-[#137333] text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#137333]" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-[#5F6368] hover:bg-[#F1F3F4] rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-xs font-medium text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-lg transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Update Password</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
