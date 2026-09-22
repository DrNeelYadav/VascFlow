"use client";

import React, { useState, useEffect } from "react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { generateSafeCsv, generateSafeTsv } from "@vascule/utils/sanitizers";
import { CloudUpload, Copy, FileText, Heart, X, CheckCircle2, AlertCircle } from "lucide-react";

interface DataToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DataToolsModal({ isOpen, onClose }: DataToolsModalProps) {
  const patients = useEndoflowStore((s) => s.patients);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "info" } | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const showNotification = (message: string, type: "success" | "info" = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification((curr) => (curr?.message === message ? null : curr));
    }, 4000);
  };

  const handleSyncSheets = () => {
    showNotification("Google Sheets sync initiated. Configure webhook URL in Settings.", "info");
  };

  const handleCopyTsv = () => {
    const headers = [
      "ID",
      "Name",
      "Age",
      "Sex",
      "HID",
      "Procedure",
      "Modality",
      "Status",
      "Scheme",
    ];

    const rows = patients.map((pt) => [
      pt.id,
      pt.name,
      pt.age,
      pt.sex,
      pt.hid,
      pt.procedure,
      pt.modality,
      pt.status,
      pt.scheme,
    ]);

    const tsv = generateSafeTsv(headers, rows);

    navigator.clipboard
      .writeText(tsv)
      .then(() => showNotification("TSV table copied to clipboard.", "success"))
      .catch(() => showNotification("Failed to copy. Please check browser permissions.", "info"));
  };

  const handleDownloadCsv = () => {
    const headers = [
      "ID",
      "Name",
      "Age",
      "Sex",
      "HID",
      "Scan ID",
      "Phone",
      "Unit",
      "Posted By",
      "Procedure",
      "Modality",
      "Status",
      "Scheme",
      "TID",
      "AST",
      "ALT",
      "Bilirubin",
      "Albumin",
      "Creatinine",
      "INR",
      "Platelets",
    ];

    const rows = patients.map((pt) => [
      pt.id,
      pt.name,
      pt.age,
      pt.sex,
      pt.hid,
      pt.scanId,
      pt.phone,
      pt.unit,
      pt.postedBy,
      pt.procedure,
      pt.modality,
      pt.status,
      pt.scheme,
      pt.schemeTid,
      pt.labs.ast,
      pt.labs.alt,
      pt.labs.bili,
      pt.labs.alb,
      pt.labs.creat,
      pt.labs.inr,
      pt.labs.plt,
    ]);

    const csv = generateSafeCsv(headers, rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `vascule_research_export_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showNotification("Clinical CSV export completed.", "success");
  };

  const handleAllDossiers = () => {
    showNotification("Browse all patient dossiers from the main worklist.", "info");
    onClose();
  };

  const tools = [
    {
      id: "sync-sheets",
      icon: CloudUpload,
      iconColor: "text-[#1A73E8]",
      title: "Sync Google Sheets",
      subtitle: "Webhook sync",
      actionLabel: "Sync",
      actionColor: "text-[#1A73E8]",
      handler: handleSyncSheets,
    },
    {
      id: "copy-tsv",
      icon: Copy,
      iconColor: "text-[#137333]",
      title: "Copy TSV Table",
      subtitle: "Clipboard (Excel / Sheets)",
      actionLabel: "Copy",
      actionColor: "text-[#137333]",
      handler: handleCopyTsv,
    },
    {
      id: "export-csv",
      icon: FileText,
      iconColor: "text-[#E37400]",
      title: "Export Research CSV",
      subtitle: "Tabular dataset",
      actionLabel: "Download",
      actionColor: "text-[#E37400]",
      handler: handleDownloadCsv,
    },
    {
      id: "all-dossiers",
      icon: Heart,
      iconColor: "text-[#7E22CE]",
      title: "Patient Dossiers",
      subtitle: "Consultation records",
      actionLabel: "View",
      actionColor: "text-[#7E22CE]",
      handler: handleAllDossiers,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="data-tools-title"
    >
      <div className="bg-white border border-[#DADCE0] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
          <h3 id="data-tools-title" className="text-base font-bold text-[#202124]">
            Data &amp; Export Tools
          </h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#80868B] hover:text-[#202124] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {notification && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center gap-2 border transition-all ${
              notification.type === "success"
                ? "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]"
                : "bg-[#E8F0FE] border-[#D2E3FC] text-[#1A73E8]"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        <div className="space-y-2.5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={tool.handler}
                className="w-full flex items-center justify-between p-3 rounded-xl border border-[#DADCE0] hover:bg-[#F8F9FA] transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${tool.iconColor}`} />
                  <div>
                    <p className="font-semibold text-xs text-[#202124]">
                      {tool.title}
                    </p>
                    <p className="text-[10px] text-[#80868B]">
                      {tool.subtitle}
                    </p>
                  </div>
                </div>
                <span className={`text-xs font-medium ${tool.actionColor}`}>
                  {tool.actionLabel} &rarr;
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
