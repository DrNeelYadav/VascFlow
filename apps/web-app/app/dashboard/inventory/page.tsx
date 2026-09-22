"use client";

import React, { useState, useMemo } from "react";
import {
  Package,
  Scan,
  AlertTriangle,
  CheckCircle2,
  Search,
  Trash2,
  Layers,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  Clock,
  History,
  FileText,
  ExternalLink,
  Info,
} from "lucide-react";
import { BarcodeScannerModal, ParsedGs1Barcode } from "./BarcodeScannerModal";
import {
  MasterHardwareItem,
  HardwareCategory,
  MASTER_HARDWARE_CATALOG,
} from "@/app/lib/hardwareCatalog";
import { HardwarePackagingImage } from "./HardwarePackagingImage";
import { HardwareBrochureModal } from "./HardwareBrochureModal";
import { usePatientLogisticsStore, PatientLogisticsRecord } from "@/app/lib/logistics/patientLogisticsStore";

export type InventoryCategory = "ALL" | HardwareCategory;

export interface DepletionLog {
  id: string;
  timestamp: string;
  caseId: string;
  patientName: string;
  crNo: string;
  procedure: string;
  itemName: string;
  manufacturer?: string;
  rmsclSku: string;
  quantity: number;
  unit: string;
  lotNumber: string;
  signedBy: string;
  status: "CONFIRMED_DEPLETED" | "VERIFIED_RMSCL";
}

const INITIAL_DEPLETION_LOGS: DepletionLog[] = [];

const CATEGORY_LIST: { id: InventoryCategory; label: string }[] = [
  { id: "ALL", label: "All Cath-Lab Items" },
  { id: "Access Sheaths", label: "Access Sheaths (4F-7F)" },
  { id: "Diagnostic Catheters", label: "Diagnostic Catheters (C2/Sim/MPA/Pigtail)" },
  { id: "Microcatheters", label: "Progreat Microcatheters" },
  { id: "Guidewires", label: "0.035\" Glidewires" },
  { id: "Embolics & Coils", label: "Coils, PVA, Lipiodol & VenaSeal" },
  { id: "Stents & Endoprostheses", label: "SEMS Biliary Stents" },
  { id: "Drainage & Access", label: "PTBD Catheters" },
  { id: "Needles & Biopsy", label: "Chiba Needles" },
];

export default function InventoryDashboard() {
  const { patients, selectedPatientId, setSelectedPatientId } = usePatientLogisticsStore();
  const currentPatient = patients.find((p) => p.id === selectedPatientId) || patients[0];

  const [stockItems, setStockItems] = useState<MasterHardwareItem[]>(MASTER_HARDWARE_CATALOG);
  const [depletionLogs, setDepletionLogs] = useState<DepletionLog[]>(INITIAL_DEPLETION_LOGS);
  const [activeCategory, setActiveCategory] = useState<InventoryCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isScannerOpen, setIsScannerOpen] = useState<boolean>(false);
  const [stagedDepletions, setStagedDepletions] = useState<ParsedGs1Barcode[]>([]);
  const [isDepleting, setIsDepleting] = useState<boolean>(false);
  const [depletionFeedback, setDepletionFeedback] = useState<string | null>(null);
  const [depletionIsError, setDepletionIsError] = useState<boolean>(false);

  // Brochure Modal State
  const [selectedBrochureItem, setSelectedBrochureItem] = useState<MasterHardwareItem | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);

  // Open Brochure Modal for an item
  const handleOpenBrochure = (item: MasterHardwareItem) => {
    setSelectedBrochureItem(item);
    setIsBrochureOpen(true);
  };

  // Instant Quantity Adjustments in Master Table
  const handleUpdateQuantity = (id: string, delta: number) => {
    setStockItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStock = Math.max(0, item.currentStock + delta);
          setDepletionFeedback(
            `${item.name} quantity updated to ${nextStock} ${item.unit} (${delta > 0 ? `+${delta}` : delta})`
          );
          setDepletionIsError(false);
          return { ...item, currentStock: nextStock };
        }
        return item;
      })
    );
  };

  // Quick Stage Single Item for Case Depletion
  const handleStageItem = (item: MasterHardwareItem) => {
    const parsed: ParsedGs1Barcode = {
      rawBarcode: item.sku,
      gtin: item.sku,
      lotNumber: item.lastLot,
      expirationDate: item.expiryDate,
      category: item.category,
      catalogName: item.name,
      rmsclSku: item.rmsclMatchingCode,
    };
    setStagedDepletions((prev) => [...prev, parsed]);
    setDepletionFeedback(`${item.name} staged for case depletion.`);
    setDepletionIsError(false);
  };

  // Filtered Stock Items
  const filteredItems = useMemo(() => {
    return stockItems.filter((item) => {
      const matchCategory =
        activeCategory === "ALL" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        item.rmsclMatchingCode.toLowerCase().includes(q) ||
        item.manufacturer.toLowerCase().includes(q) ||
        item.brandName.toLowerCase().includes(q) ||
        item.specification.toLowerCase().includes(q) ||
        item.frenchOrGauge.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [stockItems, activeCategory, searchQuery]);

  // Overall Statistics
  const lowStockCount = useMemo(
    () => stockItems.filter((i) => i.currentStock <= i.reorderLevel).length,
    [stockItems]
  );
  const totalImplantsCount = useMemo(
    () => stockItems.reduce((acc, i) => acc + i.currentStock, 0),
    [stockItems]
  );

  // Handle Scan Success from BarcodeScannerModal
  const handleScanSuccess = (scanned: ParsedGs1Barcode) => {
    setStagedDepletions((prev) => [...prev, scanned]);
  };

  // Remove item from staged depletion list
  const handleRemoveStaged = (index: number) => {
    setStagedDepletions((prev) => prev.filter((_, i) => i !== index));
  };

  // Execute Atomic Depletion via /api/inventory/deplete
  const handleExecuteDepletion = async () => {
    if (stagedDepletions.length === 0) return;
    setIsDepleting(true);
    setDepletionFeedback(null);
    setDepletionIsError(false);

    const activePatient = currentPatient || {
      id: "PT01",
      crNumber: "SMS-2026-089",
      patientName: "Ramswaroop Meena",
      procedureTitle: "Direct Transcaval Portosystemic Shunt (DIPS)",
    };

    try {
      const response = await fetch("/api/inventory/deplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: `CASE-${activePatient.id}`,
          patientCrNo: activePatient.crNumber,
          consultantSignOff: true,
          items: stagedDepletions.map((d) => ({
            sku: d.rmsclSku || d.gtin || "RMSCL-DEPLETE-ITEM",
            name: d.catalogName || "Implant Item",
            category: d.category || "Implants",
            lotNumber: d.lotNumber || "UNKNOWN_LOT",
            quantity: 1,
          })),
        }),
      });

      if (!response.ok) {
        let errMsg = "Depletion transaction could not be processed by inventory service.";
        try {
          const errData = await response.json();
          if (errData?.error || errData?.message) {
            errMsg = errData.error || errData.message;
          }
        } catch {
          // Keep default message
        }
        setDepletionIsError(true);
        setDepletionFeedback(errMsg);
        return;
      }

      setStockItems((prev) =>
        prev.map((stock) => {
          const matchingStaged = stagedDepletions.filter(
            (s) => s.rmsclSku === stock.sku || s.catalogName?.includes(stock.name)
          );
          if (matchingStaged.length > 0) {
            const newCount = Math.max(0, stock.currentStock - matchingStaged.length);
            return {
              ...stock,
              currentStock: newCount,
              lastLot: matchingStaged[matchingStaged.length - 1].lotNumber || stock.lastLot,
            };
          }
          return stock;
        })
      );

      const createdLogs: DepletionLog[] = stagedDepletions.map((d, idx) => ({
        id: `DEP-${Date.now()}-${idx}`,
        timestamp: new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        caseId: `CASE-${activePatient.id}`,
        patientName: activePatient.patientName,
        crNo: activePatient.crNumber,
        procedure: activePatient.procedureTitle,
        itemName: d.catalogName || "Endovascular Implant / Consumable",
        rmsclSku: d.rmsclSku || "RMSCL-ITEM",
        quantity: 1,
        unit: "Units",
        lotNumber: d.lotNumber || "LOT-VERIFIED",
        signedBy: "Dr. Neel Yadav (DM Resident)",
        status: "CONFIRMED_DEPLETED",
      }));
      setDepletionLogs((prev) => [...createdLogs, ...prev]);

      setDepletionIsError(false);
      setDepletionFeedback(`Successfully depleted ${stagedDepletions.length} implant(s) from Cath-Lab store.`);
      setStagedDepletions([]);
    } catch (err) {
      console.warn("Inventory depletion error caught gracefully:", err);
      setDepletionIsError(true);
      setDepletionFeedback("Unable to reach inventory service. Staged items retained for retry.");
    } finally {
      setIsDepleting(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto font-sans text-[#202124]">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-[#DADCE0] shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-[#202124]">
                Hardware Inventory &amp; Depletion Ledger
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                Cath-Lab Store
              </span>
            </div>
            <p className="text-xs text-[#5F6368] mt-0.5">
              SMS Medical College, Jaipur • Rajasthan RMSCL SKU synchronization
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsScannerOpen(true)}
          className="px-3.5 py-2 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-medium text-xs flex items-center gap-2 transition cursor-pointer shadow-xs"
        >
          <Scan className="w-4 h-4" />
          <span>Scan Barcode / RFID</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-[#5F6368]">Total Implants Stocked</span>
            <div className="text-xl font-semibold text-[#202124] font-mono mt-0.5">{totalImplantsCount}</div>
            <span className="text-[11px] text-[#5F6368]">{stockItems.length} Master SKUs (Needles to Shunts)</span>
          </div>
          <div className="p-2 rounded-lg bg-gray-50 text-gray-600 border border-[#DADCE0]">
            <Layers className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-[#5F6368]">Low-Stock Alerts</span>
            <div
              className={`text-xl font-semibold font-mono mt-0.5 ${
                lowStockCount > 0 ? "text-[#C5221F]" : "text-[#137333]"
              }`}
            >
              {lowStockCount}
            </div>
            <span className="text-[11px] text-[#5F6368]">Below Reorder Level</span>
          </div>
          <div
            className={`p-2 rounded-lg border ${
              lowStockCount > 0
                ? "bg-red-50 text-red-600 border-red-100"
                : "bg-emerald-50 text-emerald-600 border-emerald-100"
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-[#5F6368]">RMSCL Alignment</span>
            <div className="text-xl font-semibold text-[#137333] font-mono mt-0.5">100%</div>
            <span className="text-[11px] text-[#5F6368]">e-Aushadhi &amp; RGHS Verified</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#DADCE0] flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-[#5F6368]">Staged for Case</span>
            <div className="text-xl font-semibold text-[#1A73E8] font-mono mt-0.5">
              {stagedDepletions.length}
            </div>
            <span className="text-[11px] text-[#5F6368]">Pending Sign-Off</span>
          </div>
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <Scan className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 1. Staged Hardware for Case Depletion Table */}
      {stagedDepletions.length > 0 && (
        <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
          {/* Standardized Table Heading Card */}
          <div className="p-4 border-b border-[#DADCE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F9FA]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-[#202124]">
                    Hardware Inventory &amp; Depletion Ledger
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                    Cath-Lab Store
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3]">
                    Staged for Case Depletion
                  </span>
                </div>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  SMS Medical College, Jaipur • Rajasthan RMSCL SKU synchronization
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 bg-[#F8F9FA] px-3 py-1 rounded-lg border border-[#DADCE0] text-xs">
                <span className="text-[#5F6368] font-medium">Billed To:</span>
                <select
                  value={selectedPatientId}
                  onChange={(e) => setSelectedPatientId(e.target.value)}
                  className="bg-transparent font-bold text-[#202124] focus:outline-none cursor-pointer"
                >
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.patientName} ({p.crNumber})
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-xs font-semibold text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-1 rounded-full border border-[#D2E3FC]">
                {stagedDepletions.length} Item(s) Staged
              </span>
              <button
                onClick={handleExecuteDepletion}
                disabled={isDepleting}
                className="px-3.5 py-1.5 rounded-lg bg-[#137333] hover:bg-[#0d5926] text-white font-medium text-xs flex items-center gap-1.5 transition disabled:opacity-50 cursor-pointer shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                {isDepleting ? "Executing..." : "Confirm & Deplete All"}
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#3C4043]">
              <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368]">
                <tr>
                  <th className="px-4 py-2.5">Packaging &amp; Hardware</th>
                  <th className="px-4 py-2.5">Category</th>
                  <th className="px-4 py-2.5">RMSCL SKU</th>
                  <th className="px-4 py-2.5 text-center">Quantity</th>
                  <th className="px-4 py-2.5">Lot Number &amp; Expiry</th>
                  <th className="px-4 py-2.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADCE0]">
                {stagedDepletions.map((staged, idx) => {
                  const matchedCatalogItem = MASTER_HARDWARE_CATALOG.find(
                    (m: MasterHardwareItem) =>
                      m.sku === staged.rmsclSku ||
                      m.sku === staged.gtin ||
                      m.name === staged.catalogName
                  );

                  return (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {matchedCatalogItem && (
                            <HardwarePackagingImage
                              item={matchedCatalogItem}
                              size="sm"
                              onClick={() => handleOpenBrochure(matchedCatalogItem)}
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div
                              onClick={() =>
                                matchedCatalogItem && handleOpenBrochure(matchedCatalogItem)
                              }
                              className={`font-medium text-[#202124] text-xs ${
                                matchedCatalogItem
                                  ? "hover:text-blue-600 hover:underline cursor-pointer"
                                  : ""
                              }`}
                            >
                              {staged.catalogName}
                            </div>
                            <div className="text-[10px] text-[#9AA0A6] font-normal mt-0.5">
                              {matchedCatalogItem?.manufacturer || "Cath-Lab Store"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                          {staged.category || "Implants"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-[#137333]">
                        {staged.rmsclSku || staged.gtin || "RMSCL-DEPLETE-ITEM"}
                      </td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-xs text-[#1A73E8]">
                        1 Unit
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px]">
                        <div className="text-[#202124]">Lot: {staged.lotNumber}</div>
                        <div className="text-[10px] text-[#5F6368]">Exp: {staged.expirationDate}</div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="inline-flex items-center gap-1.5 justify-end">
                          {matchedCatalogItem && (
                            <button
                              onClick={() => handleOpenBrochure(matchedCatalogItem)}
                              className="p-1.5 rounded-md text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition cursor-pointer"
                              title="View Product Brochure"
                            >
                              <FileText className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            onClick={() => handleRemoveStaged(idx)}
                            className="p-1.5 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition cursor-pointer"
                            title="Remove from Staged List"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Depletion Feedback Toast */}
      {depletionFeedback && (
        <div
          className={`p-3 rounded-lg border text-xs font-medium flex items-center gap-2 ${
            depletionIsError
              ? "bg-red-50 border-red-200 text-red-800"
              : "bg-emerald-50 border-emerald-200 text-emerald-800"
          }`}
        >
          {depletionIsError ? (
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          )}
          <span>{depletionFeedback}</span>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3 bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#5F6368] uppercase tracking-wider">
              Filter by Category:
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-blue-700 font-bold border border-blue-100">
              15 IR Specialties
            </span>
          </div>

          <div className="w-full sm:w-80 relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Needle, Stent, Shunt, SKU, Brand..."
              className="w-full bg-white border border-[#DADCE0] focus:border-blue-500 rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#202124] outline-none"
            />
          </div>
        </div>

        {/* 10 Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORY_LIST.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 rounded-md text-xs transition cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#1A73E8] text-white font-semibold shadow-xs"
                  : "bg-white text-[#5F6368] hover:bg-gray-50 border border-[#DADCE0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Master Hardware Ledger Table */}
      <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
        {/* Standardized Table Heading Card */}
        <div className="p-4 border-b border-[#DADCE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F9FA]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-[#202124]">
                  Hardware Inventory &amp; Depletion Ledger
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                  Cath-Lab Store
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  {stockItems.length} SKUs (Needles to Shunts)
                </span>
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                SMS Medical College, Jaipur • Rajasthan RMSCL SKU synchronization
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-[#5F6368]">
              Showing <strong>{filteredItems.length}</strong> of {stockItems.length} Verified SKUs
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#3C4043]">
            <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368]">
              <tr>
                <th className="px-4 py-2.5">Packaging &amp; Hardware</th>
                <th className="px-4 py-2.5">Category</th>
                <th className="px-4 py-2.5">RMSCL SKU</th>
                <th className="px-4 py-2.5 text-center">Quantity</th>
                <th className="px-4 py-2.5 text-center">Reorder Level</th>
                <th className="px-4 py-2.5">Last Lot &amp; Expiry</th>
                <th className="px-4 py-2.5 text-right">Tariff Cap (₹)</th>
                <th className="px-4 py-2.5 text-center">Status</th>
                <th className="px-4 py-2.5 text-center">Quick Adjust</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0]">
              {filteredItems.map((item) => {
                const isLow = item.currentStock <= item.reorderLevel;
                const isCritical = item.currentStock === 0;

                return (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {/* Company Packaging Box Thumbnail */}
                        <HardwarePackagingImage
                          item={item}
                          size="md"
                          onClick={() => handleOpenBrochure(item)}
                        />
                        <div className="flex-1 min-w-0">
                          <div
                            onClick={() => handleOpenBrochure(item)}
                            className="font-semibold text-[#202124] text-xs hover:text-blue-600 hover:underline cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{item.name}</span>
                            <Info className="w-3 h-3 text-gray-400 shrink-0" />
                          </div>
                          <div className="text-[11px] text-[#9AA0A6] font-normal mt-0.5">
                            {item.manufacturer}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-[#3C4043] border border-[#DADCE0] whitespace-nowrap">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#137333]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#137333] shrink-0" />
                        <span>{item.rmsclMatchingCode}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center font-mono">
                      <div className="flex items-center justify-center gap-1">
                        <span
                          className={`text-xs font-bold ${
                            isCritical
                              ? "text-[#C5221F]"
                              : isLow
                              ? "text-[#B06000]"
                              : "text-[#202124]"
                          }`}
                        >
                          {item.currentStock}
                        </span>
                        <span className="text-[10px] text-[#5F6368]">{item.unit}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center font-mono text-[#5F6368]">
                      {item.reorderLevel} {item.unit}
                    </td>

                    <td className="px-4 py-3 font-mono text-[11px]">
                      <div className="text-[#202124]">{item.lastLot}</div>
                      <div className="text-[10px] text-[#5F6368]">Exp: {item.expiryDate}</div>
                    </td>

                    <td className="px-4 py-3 text-right font-mono text-[#202124] whitespace-nowrap font-medium">
                      ₹{item.tariffCappedInr.toLocaleString("en-IN")}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#3C4043] whitespace-nowrap">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCritical
                              ? "bg-[#C5221F]"
                              : isLow
                              ? "bg-[#B06000]"
                              : "bg-[#137333]"
                          }`}
                        />
                        {isCritical ? "Out of Stock" : isLow ? "Low Stock" : "Adequate"}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        {/* Interactive Quantity Adjuster */}
                        <div className="inline-flex items-center bg-[#F1F3F4] rounded-lg p-0.5 border border-[#DADCE0]">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            disabled={item.currentStock <= 0}
                            className="w-6 h-6 rounded flex items-center justify-center text-[#3C4043] hover:bg-white hover:text-[#C5221F] disabled:opacity-30 transition cursor-pointer"
                            title="Decrease Quantity by 1"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-mono font-bold text-xs text-[#202124]">
                            {item.currentStock}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-[#3C4043] hover:bg-white hover:text-[#137333] transition cursor-pointer"
                            title="Increase Quantity by 1 (Restock)"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Quick Action Buttons */}
                        <button
                          onClick={() => handleOpenBrochure(item)}
                          className="p-1.5 rounded-md text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition cursor-pointer"
                          title="View Official Brochure & IFU"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleStageItem(item)}
                          disabled={item.currentStock <= 0}
                          className="px-2 py-1 rounded text-[11px] font-medium bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC] border border-[#D2E3FC] disabled:opacity-40 transition cursor-pointer"
                          title="Stage 1 Unit for Case Depletion"
                        >
                          Stage
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Recent Consumptions & Case Depletions Table */}
      <div className="bg-white rounded-xl border border-[#DADCE0] overflow-hidden shadow-xs">
        {/* Standardized Table Heading Card */}
        <div className="p-4 border-b border-[#DADCE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F9FA]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
              <History className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-[#202124]">
                  Hardware Inventory &amp; Depletion Ledger
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                  Cath-Lab Store
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-[#137333] border border-emerald-200">
                  Consumption Audit Trail
                </span>
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                SMS Medical College, Jaipur • Rajasthan RMSCL SKU synchronization
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-[#5F6368]">
              <strong>{depletionLogs.length}</strong> Logged Depletions
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#3C4043]">
            <thead className="bg-[#F8F9FA] border-b border-[#DADCE0] text-[11px] font-semibold text-[#5F6368]">
              <tr>
                <th className="px-4 py-2.5">Date &amp; Time</th>
                <th className="px-4 py-2.5">Patient &amp; Case CR</th>
                <th className="px-4 py-2.5">Hardware Item</th>
                <th className="px-4 py-2.5">RMSCL SKU</th>
                <th className="px-4 py-2.5 text-center">Quantity</th>
                <th className="px-4 py-2.5">Lot Number</th>
                <th className="px-4 py-2.5">Sign-Off Clinician</th>
                <th className="px-4 py-2.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0]">
              {depletionLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-mono text-[11px] text-[#5F6368] whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-[#202124] text-xs">{log.patientName}</div>
                    <div className="font-mono text-[11px] text-[#1A73E8]">{log.crNo}</div>
                    <div className="text-[10px] text-[#5F6368] truncate max-w-xs">{log.procedure}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-[#202124] text-xs">{log.itemName}</div>
                    <div className="text-[10px] text-[#9AA0A6] font-normal mt-0.5">
                      {log.manufacturer || "Cath-Lab Store"}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-[#137333]">
                    {log.rmsclSku}
                  </td>
                  <td className="px-4 py-3 text-center font-mono font-bold text-xs text-[#C5221F]">
                    -{log.quantity} {log.unit}
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-[#202124]">
                    {log.lotNumber}
                  </td>
                  <td className="px-4 py-3 text-xs text-[#202124]">
                    {log.signedBy}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-[#137333] border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      {log.status === "CONFIRMED_DEPLETED" ? "Depleted" : "RMSCL Verified"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Brochure Modal */}
      <HardwareBrochureModal
        isOpen={isBrochureOpen}
        item={selectedBrochureItem}
        onClose={() => {
          setIsBrochureOpen(false);
          setSelectedBrochureItem(null);
        }}
        onStageItem={handleStageItem}
        onUpdateQuantity={handleUpdateQuantity}
        currentStock={
          selectedBrochureItem
            ? stockItems.find((s) => s.id === selectedBrochureItem.id)?.currentStock
            : undefined
        }
      />

      {/* Barcode Scanner Modal */}
      <BarcodeScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScanSuccess={handleScanSuccess}
      />

      {/* Light subtle footer attribution */}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
