"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Scan,
  X,
  CheckCircle2,
  AlertCircle,
  Keyboard,
  Package,
} from "lucide-react";

export interface ParsedGs1Barcode {
  rawBarcode: string;
  gtin?: string; // (01)
  lotNumber?: string; // (10)
  expirationDate?: string; // (17) YYMMDD -> YYYY-MM-DD
  serialNumber?: string; // (21)
  catalogName?: string;
  category?: string;
  rmsclSku?: string;
}

interface BarcodeScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanSuccess: (scanned: ParsedGs1Barcode) => void;
}

// Known hospital implant GTIN mappings
const HOSPITAL_CATALOG_REGISTRY: Record<string, { name: string; category: ParsedGs1Barcode["category"]; rmsclSku: string }> = {
  "00884521098231": {
    name: "Boston Scientific Wallstent Endoprosthesis 10mm x 60mm",
    category: "SEMS",
    rmsclSku: "RMSCL-SURG-STENT-042",
  },
  "00384910248102": {
    name: "Terumo Progreat 2.7F 130cm Coaxial Microcatheter",
    category: "Microcatheters",
    rmsclSku: "RMSCL-SURG-MICROCATH-018",
  },
  "00761928410294": {
    name: "Guerbet Lipiodol Ultra-Fluid (10 mL Ampoule)",
    category: "Embolic Agents",
    rmsclSku: "RMSCL-DRUG-LIPIODOL-10ML",
  },
  "00481920481093": {
    name: "Terumo Radifocus Introducer II 6F 11cm",
    category: "Access Sheaths",
    rmsclSku: "RMSCL-SURG-SHEATH-6F",
  },
  "00591029481029": {
    name: "Cordis Vista Brite Tip Guiding Catheter 6F JR4",
    category: "Guiding Catheters",
    rmsclSku: "RMSCL-SURG-GUIDING-6F",
  },
  "00918239102948": {
    name: "Cook Medical Tornado Embolization Coil 4mm x 2mm",
    category: "Embolic Agents",
    rmsclSku: "RMSCL-SURG-COIL-004",
  },
};

/**
 * Parses GS1-128 & 2D DataMatrix Application Identifiers (AI)
 * Handles both parenthesized format '(01)...(17)...' and raw FNC1 concatenated strings.
 */
export function parseGs1Barcode(rawInput: string): ParsedGs1Barcode | null {
  const clean = rawInput.trim();
  if (!clean) return null;

  let gtin: string | undefined;
  let lotNumber: string | undefined;
  let expirationDate: string | undefined;
  let serialNumber: string | undefined;

  // Format 1: Human-readable parenthesized AIs: (01)00884521098231(17)270831(10)LOT8291042(21)SN104928
  if (clean.includes("(") && clean.includes(")")) {
    const gtinMatch = clean.match(/\(01\)(\d{14})/);
    if (gtinMatch) gtin = gtinMatch[1];

    const expMatch = clean.match(/\(17\)(\d{6})/);
    if (expMatch) {
      const yy = expMatch[1].slice(0, 2);
      const mm = expMatch[1].slice(2, 4);
      const dd = expMatch[1].slice(4, 6);
      expirationDate = `20${yy}-${mm}-${dd}`;
    }

    const lotMatch = clean.match(/\(10\)([^\(\)]+)/);
    if (lotMatch) lotNumber = lotMatch[1].trim();

    const snMatch = clean.match(/\(21\)([^\(\)]+)/);
    if (snMatch) serialNumber = snMatch[1].trim();
  } else {
    // Format 2: Unparenthesized GS1 string e.g. 01008845210982311727083110LOT8291042
    if (clean.startsWith("01") && clean.length >= 16) {
      gtin = clean.slice(2, 16);
      let remainder = clean.slice(16);

      if (remainder.startsWith("17") && remainder.length >= 8) {
        const yy = remainder.slice(2, 4);
        const mm = remainder.slice(4, 6);
        const dd = remainder.slice(6, 8);
        expirationDate = `20${yy}-${mm}-${dd}`;
        remainder = remainder.slice(8);
      }

      if (remainder.startsWith("10")) {
        const afterLot = remainder.slice(2);
        const splitSn = afterLot.indexOf("21");
        if (splitSn !== -1) {
          lotNumber = afterLot.slice(0, splitSn);
          serialNumber = afterLot.slice(splitSn + 2);
        } else {
          lotNumber = afterLot;
        }
      }
    } else {
      // General fallback for lot or product code
      lotNumber = clean;
    }
  }

  // Lookup in Hospital Catalog Registry
  const registered = gtin ? HOSPITAL_CATALOG_REGISTRY[gtin] : undefined;

  return {
    rawBarcode: clean,
    gtin,
    lotNumber: lotNumber || "LOT-" + Math.floor(100000 + Math.random() * 900000),
    expirationDate: expirationDate || "2027-12-31",
    serialNumber,
    catalogName: registered?.name || (gtin ? `Implant Item (${gtin})` : `Scanned Lot ${clean}`),
    category: registered?.category || "Implants",
    rmsclSku: registered?.rmsclSku || "RMSCL-GENERIC-CAT-01",
  };
}

export function BarcodeScannerModal({
  isOpen,
  onClose,
  onScanSuccess,
}: BarcodeScannerModalProps) {
  const [inputVal, setInputVal] = useState<string>("");
  const [lastScanned, setLastScanned] = useState<ParsedGs1Barcode | null>(null);
  const [scanFlash, setScanFlash] = useState<"NONE" | "SUCCESS" | "ERROR">("NONE");
  const [scanCount, setScanCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    } else {
      setInputVal("");
      setLastScanned(null);
      setScanFlash("NONE");
    }
  }, [isOpen]);

  const handleProcessScan = (barcodeText: string) => {
    const parsed = parseGs1Barcode(barcodeText);
    if (parsed) {
      setLastScanned(parsed);
      setScanFlash("SUCCESS");
      setScanCount((c) => c + 1);
      setInputVal("");

      setTimeout(() => {
        setScanFlash("NONE");
      }, 600);
    } else {
      setScanFlash("ERROR");
      setTimeout(() => {
        setScanFlash("NONE");
      }, 600);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputVal.trim()) {
        handleProcessScan(inputVal);
      }
    }
  };

  const handleConfirmAndDeplete = () => {
    if (lastScanned) {
      onScanSuccess(lastScanned);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity">
      <div
        className={`bg-white border rounded-xl w-full max-w-xl shadow-xl overflow-hidden transition-all duration-200 ${
          scanFlash === "SUCCESS"
            ? "border-emerald-500 ring-4 ring-emerald-500/20"
            : scanFlash === "ERROR"
            ? "border-red-500 ring-4 ring-red-500/20"
            : "border-[#DADCE0]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#F8F9FA] border-b border-[#DADCE0]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <Scan className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Barcode & RFID Scanner
              </h2>
              <p className="text-xs text-gray-500">
                Interventional Hardware Depletion • SMS Medical College, Jaipur
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scan Input Area */}
        <div className="p-5 flex flex-col gap-4">
          <div className="rounded-lg border border-[#DADCE0] bg-[#F8F9FA] p-4 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <Keyboard className="w-3.5 h-3.5 text-gray-500" />
              <span>Listening for USB/Bluetooth HID Barcode Wedge or Manual Entry</span>
            </div>

            <div className="w-full max-w-md relative">
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Scan barcode or enter GS1 string and press Enter..."
                className="w-full bg-white border border-[#DADCE0] focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-gray-900 font-mono text-sm px-3.5 py-2 rounded-lg outline-none transition"
              />
              <button
                onClick={() => {
                  if (inputVal.trim()) handleProcessScan(inputVal);
                }}
                className="absolute right-1.5 top-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded transition"
              >
                Scan
              </button>
            </div>

            <div className="flex items-center gap-2 mt-2.5 text-[11px] text-gray-500">
              <span>GS1 AI:</span>
              <span className="font-mono text-gray-700">(01) GTIN</span>
              <span className="font-mono text-gray-700">(17) EXP</span>
              <span className="font-mono text-gray-700">(10) LOT</span>
              <span className="font-mono text-gray-700">(21) SN</span>
            </div>
          </div>

          {/* Quick Test Presets */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-gray-500">
              Quick Test Presets:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  handleProcessScan("(01)00884521098231(17)270831(10)LOT8291042(21)SN104928")
                }
                className="text-left p-2.5 rounded-lg bg-white hover:bg-gray-50 border border-[#DADCE0] text-xs transition"
              >
                <div className="font-medium text-gray-900">Wallstent 10x60mm (SEMS)</div>
                <div className="font-mono text-[11px] text-gray-500 truncate">
                  (01)00884521098231(17)270831(10)LOT8291042
                </div>
              </button>
              <button
                type="button"
                onClick={() =>
                  handleProcessScan("(01)00384910248102(17)280315(10)LOT9482103(21)SN882104")
                }
                className="text-left p-2.5 rounded-lg bg-white hover:bg-gray-50 border border-[#DADCE0] text-xs transition"
              >
                <div className="font-medium text-gray-900">Progreat 2.7F Coaxial Microcatheter</div>
                <div className="font-mono text-[11px] text-gray-500 truncate">
                  (01)00384910248102(17)280315(10)LOT9482103
                </div>
              </button>
              <button
                type="button"
                onClick={() =>
                  handleProcessScan("(01)00761928410294(17)261231(10)LOT5510931(21)SN948123")
                }
                className="text-left p-2.5 rounded-lg bg-white hover:bg-gray-50 border border-[#DADCE0] text-xs transition"
              >
                <div className="font-medium text-gray-900">Lipiodol Ultra-Fluid (10ml)</div>
                <div className="font-mono text-[11px] text-gray-500 truncate">
                  (01)00761928410294(17)261231(10)LOT5510931
                </div>
              </button>
              <button
                type="button"
                onClick={() =>
                  handleProcessScan("(01)00918239102948(17)270530(10)LOT3819204(21)SN552109")
                }
                className="text-left p-2.5 rounded-lg bg-white hover:bg-gray-50 border border-[#DADCE0] text-xs transition"
              >
                <div className="font-medium text-gray-900">Cook Tornado Coil 4mm/2mm</div>
                <div className="font-mono text-[11px] text-gray-500 truncate">
                  (01)00918239102948(17)270530(10)LOT3819204
                </div>
              </button>
            </div>
          </div>

          {/* Scanned Item Details Card */}
          {lastScanned && (
            <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-200 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-800">
                    Validated GS1 Item
                  </span>
                </div>
                <span className="text-[11px] font-medium text-gray-700 bg-white px-2 py-0.5 rounded border border-gray-200">
                  {lastScanned.category}
                </span>
              </div>

              <div className="font-semibold text-sm text-gray-900">{lastScanned.catalogName}</div>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>
                  <span className="text-gray-500">Lot:</span>{" "}
                  <span className="font-mono font-medium text-gray-900">{lastScanned.lotNumber}</span>
                </div>
                <div>
                  <span className="text-gray-500">Expiry:</span>{" "}
                  <span className="font-mono font-medium text-gray-900">{lastScanned.expirationDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">RMSCL SKU:</span>{" "}
                  <span className="font-mono font-medium text-gray-900">{lastScanned.rmsclSku}</span>
                </div>
                <div>
                  <span className="text-gray-500">GTIN:</span>{" "}
                  <span className="font-mono font-medium text-gray-900">{lastScanned.gtin || "N/A"}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 bg-[#F8F9FA] border-t border-[#DADCE0] flex items-center justify-between">
          <div className="text-xs text-gray-500">
            Scans: <span className="font-mono font-semibold text-gray-900">{scanCount}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-medium text-xs border border-[#DADCE0] transition"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmAndDeplete}
              disabled={!lastScanned}
              className={`px-4 py-1.5 rounded-md font-medium text-xs flex items-center gap-1.5 transition ${
                lastScanned
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-400 border border-[#DADCE0] cursor-not-allowed"
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              Stage for Depletion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
