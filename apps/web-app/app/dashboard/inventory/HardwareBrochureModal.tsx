"use client";

import React from "react";
import {
  X,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Plus,
  Minus,
  Layers,
  AlertCircle,
  Stethoscope,
  Lock,
} from "lucide-react";
import { MasterHardwareItem } from "@/app/lib/hardwareCatalog";
import { HardwarePackagingImage } from "./HardwarePackagingImage";

interface HardwareBrochureModalProps {
  item: MasterHardwareItem | null;
  isOpen: boolean;
  onClose: () => void;
  onStageItem?: (item: MasterHardwareItem) => void;
  onUpdateQuantity?: (id: string, delta: number) => void;
  currentStock?: number;
  canAdjustStock?: boolean;
}

export function HardwareBrochureModal({
  item,
  isOpen,
  onClose,
  onStageItem,
  onUpdateQuantity,
  currentStock,
  canAdjustStock = false,
}: HardwareBrochureModalProps) {
  if (!isOpen || !item) return null;

  const stock = currentStock !== undefined ? currentStock : item.currentStock;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden font-sans text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Company Derived Theme Bar */}
        <div
          className="p-5 text-white flex items-start justify-between relative overflow-hidden shadow-sm"
          style={{ backgroundColor: item.boxColor.primary }}
        >
          {/* Subtle watermarked manufacturer name */}
          <div className="absolute right-12 -bottom-3 text-5xl font-black text-white/10 uppercase tracking-widest pointer-events-none select-none">
            {item.manufacturer.split(" ")[0]}
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <HardwarePackagingImage item={item} size="lg" showBadge={false} />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-white/20 text-white backdrop-blur-xs border border-white/30">
                  {item.manufacturer}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/25 text-white border border-white/20">
                  {item.category}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/15 text-white/90">
                  {item.packagingType}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1.5 leading-snug">
                {item.name}
              </h2>
              <p className="text-xs text-white/80 font-mono mt-0.5">
                RMSCL SKU: {item.rmsclMatchingCode} • Lot Spec: {item.specification}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer relative z-10"
            title="Close Brochure"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* 1. Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Current Store Stock</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono text-slate-900">{stock}</span>
                <span className="text-xs text-slate-500">{item.unit}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">RMSCL Tariff Cap</span>
              <div className="text-xl font-bold font-mono text-emerald-700 mt-1">
                ₹{item.tariffCappedInr.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Reorder Minimum</span>
              <div className="text-xl font-bold font-mono text-amber-700 mt-1">
                {item.reorderLevel} {item.unit}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Verification Status</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mt-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>e-Aushadhi 100%</span>
              </div>
            </div>
          </div>

          {/* 2. Official Brochure Highlights */}
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Official Manufacturer Brochure Highlights &amp; Engineering Specs
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.brochureHighlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Clinical Indications & Target Anatomy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 mb-2 text-blue-600">
                <Stethoscope className="w-4 h-4" />
                <h4 className="font-bold text-xs text-slate-900">Clinical Indications</h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {item.clinicalIndications}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 mb-2 text-emerald-600">
                <Layers className="w-4 h-4" />
                <h4 className="font-bold text-xs text-slate-900">Instructions For Use (IFU)</h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {item.ifuHighlights}
              </p>
            </div>
          </div>

          {/* 4. Detailed Specification Table */}
          <div className="rounded-xl border border-slate-200 overflow-x-auto">
            <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-900">
              Regulatory &amp; RMSCL Supply Chain Identifiers
            </div>
            <table className="w-full text-left text-xs">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-slate-500 w-1/3">Item ID / SKU</td>
                  <td className="px-4 py-2.5 font-mono text-slate-900">{item.sku}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-slate-500">Official Manufacturer</td>
                  <td className="px-4 py-2.5 text-slate-900">{item.manufacturer} ({item.brandName})</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-slate-500">Packaging Style</td>
                  <td className="px-4 py-2.5 text-slate-900">{item.packagingType.replace("_", " ")}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-slate-500">Size &amp; Dimensions</td>
                  <td className="px-4 py-2.5 text-slate-900">{item.frenchOrGauge} • {item.lengthOrDiameter}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-slate-500">Assigned Store Lot</td>
                  <td className="px-4 py-2.5 font-mono text-slate-900">{item.lastLot} (Exp: {item.expiryDate})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          {canAdjustStock && onUpdateQuantity ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Quick Store Stock Adjust:</span>
              <div className="inline-flex items-center bg-white rounded-lg p-0.5 border border-slate-200 shadow-xs">
                <button
                  onClick={() => onUpdateQuantity(item.id, -1)}
                  disabled={stock <= 0}
                  className="w-7 h-7 rounded flex items-center justify-center text-slate-700 hover:bg-gray-100 hover:text-rose-700 disabled:opacity-30 transition cursor-pointer"
                  title="Decrease Stock"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-mono font-bold text-xs text-slate-900">
                  {stock}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded flex items-center justify-center text-slate-700 hover:bg-gray-100 hover:text-emerald-700 transition cursor-pointer"
                  title="Increase Stock (Restock)"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Store Stock:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 border border-slate-200 text-xs font-medium text-slate-500">
                <Lock className="w-3 h-3 text-slate-500" />
                <span className="font-mono font-bold text-slate-900">{stock} {item.unit}</span>
                <span className="text-[10px] text-slate-500">(Read-Only)</span>
              </span>
            </div>
          )}

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-gray-50 text-slate-700 font-medium text-xs transition cursor-pointer flex-1 sm:flex-initial"
            >
              Close
            </button>
            {onStageItem && (
              <button
                onClick={() => {
                  onStageItem(item);
                  onClose();
                }}
                disabled={stock <= 0}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50 shadow-xs flex-1 sm:flex-initial"
              >
                <Plus className="w-4 h-4" />
                <span>Stage 1 Unit for Case</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
