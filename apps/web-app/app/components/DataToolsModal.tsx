"use client";

import React from "react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { CloudUpload, Copy, FileText, Heart, X } from "lucide-react";

interface DataToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DataToolsModal({ isOpen, onClose }: DataToolsModalProps) {
  const patients = useEndoflowStore((s) => s.patients);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    alert(msg);
  };

  const handleSyncSheets = () => {
    showToast("Google Sheets sync initiated. Configure webhook URL in Settings.");
  };

  const handleCopyTsv = () => {
    const header = [
      "ID",
      "Name",
      "Age",
      "Sex",
      "HID",
      "Procedure",
      "Modality",
      "Status",
      "Scheme",
    ].join("\t");

    const rows = patients.map((pt) =>
      [
        pt.id,
        pt.name,
        pt.age,
        pt.sex,
        pt.hid,
        pt.procedure,
        pt.modality,
        pt.status,
        pt.scheme,
      ].join("\t")
    );

    const tsv = [header, ...rows].join("\n");

    navigator.clipboard
      .writeText(tsv)
      .then(() => showToast("TSV table copied to clipboard."))
      .catch(() => showToast("Failed to copy. Please check browser permissions."));
  };

  const handleDownloadCsv = () => {
    const header = [
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
    ].join(",");

    const rows = patients.map((pt) =>
      [
        pt.id,
        `"${pt.name}"`,
        pt.age,
        pt.sex,
        pt.hid,
        pt.scanId,
        pt.phone,
        `"${pt.unit}"`,
        `"${pt.postedBy}"`,
        `"${pt.procedure}"`,
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
      ].join(",")
    );

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `vascule_research_export_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAllDossiers = () => {
    showToast("Browse all patient dossiers from the main worklist.");
    onClose();
  };

  const tools = [
    {
      id: "sync-sheets",
      icon: CloudUpload,
      iconColor: "text-[#1A73E8]",
      title: "Sync to Google Sheets",
      subtitle: "Live webhook synchronization",
      actionLabel: "Sync",
      actionColor: "text-[#1A73E8]",
      handler: handleSyncSheets,
    },
    {
      id: "copy-tsv",
      icon: Copy,
      iconColor: "text-[#137333]",
      title: "Copy TSV Table",
      subtitle: "Clipboard table for Excel or Sheets",
      actionLabel: "Copy",
      actionColor: "text-[#137333]",
      handler: handleCopyTsv,
    },
    {
      id: "export-csv",
      icon: FileText,
      iconColor: "text-[#E37400]",
      title: "Download Research CSV",
      subtitle: "Analytical dataset for statistical analysis",
      actionLabel: "Download",
      actionColor: "text-[#E37400]",
      handler: handleDownloadCsv,
    },
    {
      id: "all-dossiers",
      icon: Heart,
      iconColor: "text-[#7E22CE]",
      title: "All Patient Dossiers",
      subtitle: "Browse all consultation dossiers",
      actionLabel: "View",
      actionColor: "text-[#7E22CE]",
      handler: handleAllDossiers,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white border border-[#DADCE0] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
          <h3 className="text-base font-bold text-[#202124]">
            Data Integration & Export Tools
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#80868B] hover:text-[#202124] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

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
