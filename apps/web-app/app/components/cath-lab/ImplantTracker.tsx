"use client";

import React, { useState } from "react";
import {
  Barcode,
  Package,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Scan,
  Sparkles,
} from "lucide-react";

export interface ImplantItem {
  id: string;
  category: "Sheath" | "Catheter" | "Microcatheter" | "Guidewire" | "Stent" | "Coil" | "Embolic" | "Closure";
  name: string;
  lotNumber: string;
  expiryDate: string;
  quantity: number;
  isScanned: boolean;
}

const DEFAULT_IMPLANTS: ImplantItem[] = [
  {
    id: "imp-01",
    category: "Sheath",
    name: "Terumo Radifocus Introducer II 6F 11cm",
    lotNumber: "LOT-8291042",
    expiryDate: "2027-11-30",
    quantity: 1,
    isScanned: true,
  },
  {
    id: "imp-02",
    category: "Microcatheter",
    name: "Terumo Progreat 2.7F 130cm (Coaxial)",
    lotNumber: "LOT-9482103",
    expiryDate: "2028-03-15",
    quantity: 1,
    isScanned: true,
  },
  {
    id: "imp-03",
    category: "Stent",
    name: "Boston Scientific Wallstent Endoprosthesis 10x60mm",
    lotNumber: "LOT-2849102",
    expiryDate: "2027-08-31",
    quantity: 1,
    isScanned: true,
  },
  {
    id: "imp-04",
    category: "Closure",
    name: "Terumo Angio-Seal VIP 6F Vascular Closure Device",
    lotNumber: "LOT-5510931",
    expiryDate: "2026-12-31",
    quantity: 1,
    isScanned: true,
  },
];

interface ImplantTrackerProps {
  onImplantSummaryChange?: (summary: string) => void;
}

export function ImplantTracker({ onImplantSummaryChange }: ImplantTrackerProps) {
  const [implants, setImplants] = useState<ImplantItem[]>(DEFAULT_IMPLANTS);
  const [barcodeInput, setBarcodeInput] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategory, setNewCategory] = useState<ImplantItem["category"]>("Stent");
  const [newName, setNewName] = useState("");
  const [newLot, setNewLot] = useState("");

  const notifyChange = (updated: ImplantItem[]) => {
    const summary = updated
      .map((item) => `${item.name} (Lot: ${item.lotNumber}) x${item.quantity}`)
      .join("; ");
    if (onImplantSummaryChange) {
      onImplantSummaryChange(summary);
    }
  };

  const handleSimulateScan = (barcodeText: string) => {
    // GS1 / Datamatrix barcode simulator
    const parsedName = barcodeText.includes("WALL")
      ? "Boston Scientific Wallstent 10x60mm"
      : barcodeText.includes("COIL")
      ? "Cook Medical Tornado Embolization Coil 4mm/2mm"
      : barcodeText.includes("ONYX")
      ? "Medtronic Onyx 34 LES Liquid Embolic (1.5 mL)"
      : "Cook Beacon Tip Torcon NB 5F Roberts Uterine";

    const generatedLot = "LOT-" + Math.floor(1000000 + Math.random() * 9000000);

    const newItem: ImplantItem = {
      id: `imp-${Date.now()}`,
      category: barcodeText.includes("STENT") ? "Stent" : barcodeText.includes("COIL") ? "Coil" : "Catheter",
      name: parsedName,
      lotNumber: generatedLot,
      expiryDate: "2027-12-31",
      quantity: 1,
      isScanned: true,
    };

    const next = [newItem, ...implants];
    setImplants(next);
    notifyChange(next);
    setBarcodeInput("");
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newLot) return;

    const newItem: ImplantItem = {
      id: `imp-${Date.now()}`,
      category: newCategory,
      name: newName,
      lotNumber: newLot,
      expiryDate: "2028-01-01",
      quantity: 1,
      isScanned: false,
    };

    const next = [...implants, newItem];
    setImplants(next);
    notifyChange(next);
    setNewName("");
    setNewLot("");
    setShowAddForm(false);
  };

  const handleRemoveItem = (id: string) => {
    const next = implants.filter((i) => i.id !== id);
    setImplants(next);
    notifyChange(next);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-blue-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Hardware & Barcode Inventory Deductions
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <Plus className="h-3.5 w-3.5" /> Manual Entry
          </button>
        </div>
      </div>

      {/* Barcode Quick Scanner Box */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col sm:flex-row items-center gap-2">
        <div className="flex items-center gap-2 text-slate-600 text-xs shrink-0 font-medium">
          <Barcode className="h-4 w-4 text-blue-600" />
          <span>Scan Hardware GS1 Barcode:</span>
        </div>
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Scan barcode or enter serial/batch number..."
            value={barcodeInput}
            onChange={(e) => setBarcodeInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && barcodeInput.trim()) {
                handleSimulateScan(barcodeInput);
              }
            }}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-mono focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-1.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleSimulateScan(barcodeInput || "WALLSTENT-10x60")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition"
          >
            <Scan className="h-3.5 w-3.5" /> Deduct Stock
          </button>
        </div>
      </div>

      {/* Quick Test Barcode Pills */}
      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 flex-wrap">
        <span className="font-semibold text-slate-600">Simulate Barcode Scan:</span>
        <button
          type="button"
          onClick={() => handleSimulateScan("WALLSTENT-10x60")}
          className="rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 px-2 py-0.5 font-mono border border-slate-200 transition"
        >
          + Wallstent 10x60
        </button>
        <button
          type="button"
          onClick={() => handleSimulateScan("COIL-TORNADO-4x2")}
          className="rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 px-2 py-0.5 font-mono border border-slate-200 transition"
        >
          + Tornado Coils
        </button>
        <button
          type="button"
          onClick={() => handleSimulateScan("ONYX-34-LES")}
          className="rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 px-2 py-0.5 font-mono border border-slate-200 transition"
        >
          + Onyx-34 Embolic
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <form onSubmit={handleAddItem} className="rounded-xl border border-blue-200 bg-blue-50/50 p-3 text-xs space-y-3">
          <div className="font-semibold text-blue-900">Manual Device Consumption Entry</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label className="block text-slate-600 mb-1">Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as ImplantItem["category"])}
                className="w-full rounded border border-slate-300 p-1.5 bg-white text-xs"
              >
                <option value="Sheath">Vascular Sheath</option>
                <option value="Catheter">Diagnostic Catheter</option>
                <option value="Microcatheter">Microcatheter</option>
                <option value="Guidewire">Guidewire</option>
                <option value="Stent">Endovascular Stent</option>
                <option value="Coil">Embolic Coils</option>
                <option value="Embolic">Liquid/Particle Embolic</option>
                <option value="Closure">Closure Device</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-600 mb-1">Device Name & Specs</label>
              <input
                type="text"
                placeholder="e.g. Roberts Uterine 5F 65cm"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full rounded border border-slate-300 p-1.5 bg-white text-xs"
                required
              />
            </div>
            <div>
              <label className="block text-slate-600 mb-1">Lot / Batch Number</label>
              <input
                type="text"
                placeholder="e.g. LOT-4821092"
                value={newLot}
                onChange={(e) => setNewLot(e.target.value)}
                className="w-full rounded border border-slate-300 p-1.5 bg-white text-xs font-mono"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="rounded px-3 py-1 text-slate-600 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-3 py-1 font-semibold text-white hover:bg-blue-700"
            >
              Save & Deduct
            </button>
          </div>
        </form>
      )}

      {/* Implant Ledger List */}
      <div className="divide-y divide-slate-100 border rounded-xl overflow-hidden">
        {implants.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-2.5 bg-white hover:bg-slate-50 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                {item.category}
              </span>
              <div>
                <div className="font-semibold text-slate-900">{item.name}</div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                  <span className="font-bold text-slate-700">{item.lotNumber}</span>
                  <span>&bull;</span>
                  <span>Exp: {item.expiryDate}</span>
                  {item.isScanned && (
                    <span className="inline-flex items-center gap-0.5 text-emerald-600 font-sans font-medium">
                      <CheckCircle2 className="h-2.5 w-2.5" /> Barcode Verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-700 text-xs">Qty: {item.quantity}</span>
              <button
                type="button"
                onClick={() => handleRemoveItem(item.id)}
                className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-600 transition"
                title="Remove item"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
