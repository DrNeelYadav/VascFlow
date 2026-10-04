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
  Lock,
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
import { useEndoflowStore } from "@/app/dashboard/useEndoflowStore";
import { INSTITUTIONAL_STAFF_ACCOUNTS } from "@/app/lib/staffAccounts";
import { db, isFirebaseConfigured } from "@/app/lib/firebase";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";

/**
 * Synchronize single stock item quantity directly to Firestore database collection "inventory"
 */
async function syncHardwareStockToFirestore(
  item: MasterHardwareItem,
  updatedStock: number,
  actorName: string
): Promise<void> {
  if (!isFirebaseConfigured() || !db) return;
  try {
    const inventoryRef = collection(db, "inventory");
    const docId = item.sku || item.id;
    const itemDocRef = doc(inventoryRef, docId);
    const writePromise = setDoc(
      itemDocRef,
      {
        id: item.id,
        sku: item.sku,
        name: item.name,
        category: item.category,
        specification: item.specification,
        frenchOrGauge: item.frenchOrGauge,
        manufacturer: item.manufacturer,
        brandName: item.brandName,
        currentStock: updatedStock,
        quantityOnHand: updatedStock,
        reorderLevel: item.reorderLevel,
        unit: item.unit,
        lastLot: item.lastLot,
        expiryDate: item.expiryDate,
        rmsclMatchingCode: item.rmsclMatchingCode,
        tariffCappedInr: item.tariffCappedInr,
        updatedAt: new Date().toISOString(),
        updatedBy: actorName,
      },
      { merge: true }
    );

    // Timeout guard so offline or unconfigured networks do not stall UI
    await Promise.race([
      writePromise,
      new Promise<void>((_, reject) =>
        setTimeout(() => reject(new Error("Firestore sync timed out")), 2000)
      ),
    ]);
  } catch (err) {
    console.warn(`[Firestore] Failed to persist hardware stock for ${item.sku}:`, err);
  }
}

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
  const { currentStaff, setCurrentStaff } = useEndoflowStore();

  // Strict RBAC: Only Cath Lab Technicians (role: 'TECH' | 'TECHNICIAN') can adjust stock
  const isTechnician = useMemo(() => {
    if (!currentStaff) return false;
    const role = (currentStaff.role || "").toUpperCase().trim();
    const tier = (currentStaff.tier || "").toUpperCase().trim();
    const code = (currentStaff.code || "").toUpperCase().trim();

    // Doctors ('DOCTOR', 'CONSULTANT', 'RESIDENT') and Nursing Officers ('NURSE') cannot edit, add, or decrement inventory quantities
    if (
      role === "DOCTOR" ||
      role === "CONSULTANT" ||
      role === "RESIDENT" ||
      role === "NURSE" ||
      tier === "FACULTY" ||
      tier === "DM_RESIDENT" ||
      tier === "SENIOR_RESIDENT" ||
      tier === "NURSING_OFFICER"
    ) {
      return false;
    }

    // Authorize Technicians
    return (
      role === "TECH" ||
      role === "TECHNICIAN" ||
      tier === "CATHLAB_TECHNICIAN" ||
      code.startsWith("TC")
    );
  }, [currentStaff]);

  const [stockItems, setStockItems] = useState<MasterHardwareItem[]>(MASTER_HARDWARE_CATALOG);
  const [depletionLogs, setDepletionLogs] = useState<DepletionLog[]>(INITIAL_DEPLETION_LOGS);
  const [activeCategory, setActiveCategory] = useState<InventoryCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isScannerOpen, setIsScannerOpen] = useState<boolean>(false);
  const [stagedDepletions, setStagedDepletions] = useState<ParsedGs1Barcode[]>([]);
  const [isDepleting, setIsDepleting] = useState<boolean>(false);
  const [depletionFeedback, setDepletionFeedback] = useState<string | null>(null);
  const [depletionIsError, setDepletionIsError] = useState<boolean>(false);

  // Real-time synchronization of stock items from Cloud Firestore "inventory" collection
  React.useEffect(() => {
    if (!isFirebaseConfigured() || !db) return;
    try {
      const inventoryRef = collection(db, "inventory");
      const unsubscribe = onSnapshot(
        inventoryRef,
        (snapshot) => {
          if (!snapshot.empty) {
            const cloudStockMap = new Map<string, number>();
            snapshot.forEach((docSnap) => {
              const data = docSnap.data();
              const qty = data.currentStock ?? data.quantityOnHand;
              if (typeof qty === "number") {
                if (data.id) cloudStockMap.set(data.id, qty);
                if (data.sku) cloudStockMap.set(data.sku, qty);
                cloudStockMap.set(docSnap.id, qty);
              }
            });

            setStockItems((prev) =>
              prev.map((item) => {
                const cloudQty = cloudStockMap.get(item.id) ?? cloudStockMap.get(item.sku);
                if (cloudQty !== undefined && cloudQty !== item.currentStock) {
                  return { ...item, currentStock: cloudQty };
                }
                return item;
              })
            );
          }
        },
        (err) => {
          console.warn("[Firestore] Inventory live sync snapshot error:", err.message);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.warn("[Firestore] Unable to register inventory listener:", err);
    }
  }, []);

  // Brochure Modal State
  const [selectedBrochureItem, setSelectedBrochureItem] = useState<MasterHardwareItem | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);

  // Open Brochure Modal for an item
  const handleOpenBrochure = (item: MasterHardwareItem) => {
    setSelectedBrochureItem(item);
    setIsBrochureOpen(true);
  };

  // Instant Quantity Adjustments in Master Table (Strict RBAC: Only Technicians, synced to Firestore)
  const handleUpdateQuantity = async (id: string, delta: number) => {
    if (!isTechnician) {
      setDepletionFeedback(
        "Access Denied: Only Cath Lab Technicians (role: TECH / TECHNICIAN) are authorized to increment or decrement stock. Doctors and Nurses have read-only visibility."
      );
      setDepletionIsError(true);
      return;
    }

    const targetItem = stockItems.find((i) => i.id === id);
    if (!targetItem) return;

    const nextStock = Math.max(0, targetItem.currentStock + delta);
    setStockItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, currentStock: nextStock } : item))
    );

    setDepletionFeedback(
      `${targetItem.name} quantity updated to ${nextStock} ${targetItem.unit} (${delta > 0 ? `+${delta}` : delta}) • Syncing to Firestore...`
    );
    setDepletionIsError(false);

    try {
      await syncHardwareStockToFirestore(
        targetItem,
        nextStock,
        currentStaff?.name || "Cath Lab Technician"
      );
      setDepletionFeedback(
        `${targetItem.name} stock updated to ${nextStock} ${targetItem.unit} (${delta > 0 ? `+${delta}` : delta}) • Synced to Cloud Firestore`
      );
    } catch (err) {
      console.warn("Firestore stock update error:", err);
    }
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

    // Depletion must be attributable to a real patient. If none is selected,
    // abort rather than write the transaction against an invented record.
    const activePatient = currentPatient;
    if (!activePatient) {
      setDepletionFeedback("Select an admitted patient before recording depletion.");
      setDepletionIsError(true);
      setIsDepleting(false);
      return;
    }

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
            // Sync depleted count directly to Firestore
            void syncHardwareStockToFirestore(
              stock,
              newCount,
              currentStaff?.name || "Cath Lab Staff"
            );
            return {
              ...stock,
              currentStock: newCount,
              lastLot: matchingStaged[matchingStaged.length - 1].lotNumber || stock.lastLot,
            };
          }
          return stock;
        })
      );

      const signerIdentity = currentStaff
        ? `${currentStaff.name} (${currentStaff.title})`
        : "Dr. Neel Yadav (DM Resident)";

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
        signedBy: signerIdentity,
        status: "CONFIRMED_DEPLETED",
      }));
      setDepletionLogs((prev) => [...createdLogs, ...prev]);

      setDepletionIsError(false);
      setDepletionFeedback(`Successfully depleted ${stagedDepletions.length} implant(s) from inventory and synced to Firestore.`);
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
    <div className="flex flex-col gap-5 max-w-7xl mx-auto font-sans text-slate-900">
      {/* Top Banner Header with RBAC Operator Console */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-slate-900">
                Hardware Inventory &amp; Depletion Ledger
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-slate-700 border border-slate-200">
                Angiosuite Inventory
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Sterile endovascular hardware, diagnostic consumables, and implant tracking
            </p>
          </div>
        </div>

        {/* RBAC Operator Identification and Barcode Scanner */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs">
            <span className="text-slate-500 font-medium">Logged In:</span>
            <select
              value={currentStaff?.code || "DM01"}
              onChange={(e) => {
                const found = INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === e.target.value);
                if (found) setCurrentStaff(found);
              }}
              className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
            >
              {INSTITUTIONAL_STAFF_ACCOUNTS.map((staff) => (
                <option key={staff.code} value={staff.code}>
                  {staff.name} ({staff.role})
                </option>
              ))}
            </select>
          </div>

          {isTechnician ? (
            <span className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Technician (+/- Stock Adjust Active)</span>
            </span>
          ) : (
            <span className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1.5 shadow-xs">
              <Lock className="w-3.5 h-3.5 text-amber-700" />
              <span>{currentStaff?.role || "CLINICAL"} (Read-Only Inventory)</span>
            </span>
          )}

          <button
            onClick={() => setIsScannerOpen(true)}
            className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center gap-2 transition cursor-pointer shadow-xs"
          >
            <Scan className="w-4 h-4" />
            <span>Scan Barcode / RFID</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-slate-500">Total Implants Stocked</span>
            <div className="text-xl font-semibold text-slate-900 font-mono mt-0.5">{totalImplantsCount}</div>
            <span className="text-[11px] text-slate-500">{stockItems.length} Master SKUs (Needles to Shunts)</span>
          </div>
          <div className="p-2 rounded-lg bg-gray-50 text-gray-600 border border-slate-200">
            <Layers className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-slate-500">Low-Stock Alerts</span>
            <div
              className={`text-xl font-semibold font-mono mt-0.5 ${
                lowStockCount > 0 ? "text-rose-700" : "text-emerald-700"
              }`}
            >
              {lowStockCount}
            </div>
            <span className="text-[11px] text-slate-500">Below Reorder Level</span>
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

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-slate-500">RMSCL Alignment</span>
            <div className="text-xl font-semibold text-emerald-700 font-mono mt-0.5">100%</div>
            <span className="text-[11px] text-slate-500">e-Aushadhi &amp; RGHS Verified</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
          <div>
            <span className="text-xs text-slate-500">Staged for Case</span>
            <div className="text-xl font-semibold text-blue-600 font-mono mt-0.5">
              {stagedDepletions.length}
            </div>
            <span className="text-[11px] text-slate-500">Pending Sign-Off</span>
          </div>
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <Scan className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 1. Staged Hardware for Case Depletion Table */}
      {stagedDepletions.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Standardized Table Heading Card */}
          <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-slate-900">
                    Hardware Inventory &amp; Depletion Ledger
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-slate-700 border border-slate-200">
                    Angiosuite Inventory
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                    Staged for Case Depletion
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pre-procedural sterile verification and atomic batch depletion
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium">Billed To:</span>
                <select
                  value={selectedPatientId ?? ""}
                  onChange={(e) => setSelectedPatientId(e.target.value)}
                  className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
                >
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.patientName} ({p.crNumber})
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                {stagedDepletions.length} Item(s) Staged
              </span>
              <button
                onClick={handleExecuteDepletion}
                disabled={isDepleting}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs flex items-center gap-1.5 transition disabled:opacity-50 cursor-pointer shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                {isDepleting ? "Executing..." : "Confirm & Deplete All"}
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500">
                <tr>
                  <th className="px-4 py-2.5">Packaging &amp; Hardware</th>
                  <th className="px-4 py-2.5">Category</th>
                  <th className="px-4 py-2.5">RMSCL SKU</th>
                  <th className="px-4 py-2.5 text-center">Quantity</th>
                  <th className="px-4 py-2.5">Lot Number &amp; Expiry</th>
                  <th className="px-4 py-2.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
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
                              className={`font-medium text-slate-900 text-xs ${
                                matchedCatalogItem
                                  ? "hover:text-blue-600 hover:underline cursor-pointer"
                                  : ""
                              }`}
                            >
                              {staged.catalogName}
                            </div>
                            <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                              {matchedCatalogItem?.manufacturer || "Cath-Lab Store"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-slate-700 border border-slate-200">
                          {staged.category || "Implants"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-emerald-700">
                        {staged.rmsclSku || staged.gtin || "RMSCL-DEPLETE-ITEM"}
                      </td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-xs text-blue-600">
                        1 Unit
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px]">
                        <div className="text-slate-900">Lot: {staged.lotNumber}</div>
                        <div className="text-[10px] text-slate-500">Exp: {staged.expirationDate}</div>
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
      <div className="flex flex-col gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
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
              className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 outline-none"
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
                  ? "bg-blue-600 text-white font-semibold shadow-xs"
                  : "bg-white text-slate-500 hover:bg-gray-50 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Master Hardware Ledger Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        {/* Standardized Table Heading Card */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-slate-900">
                  Hardware Inventory &amp; Depletion Ledger
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-slate-700 border border-slate-200">
                  Angiosuite Inventory
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  {stockItems.length} SKUs (Needles to Shunts)
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Active catalog with GS1 barcoding, sterile lot tracking, and reorder levels
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-slate-500">
              Showing <strong>{filteredItems.length}</strong> of {stockItems.length} Verified SKUs
            </span>
          </div>
        </div>

        {/* Mobile Inventory Cards */}
        <div className="block md:hidden divide-y divide-slate-200">
          {filteredItems.map((item) => {
            const isLow = item.currentStock <= item.reorderLevel;
            const isCritical = item.currentStock === 0;

            return (
              <div key={`m-${item.id}`} className="p-3.5 space-y-2.5 bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <HardwarePackagingImage
                      item={item}
                      size="sm"
                      onClick={() => handleOpenBrochure(item)}
                    />
                    <div>
                      <div
                        onClick={() => handleOpenBrochure(item)}
                        className="font-medium text-slate-900 text-xs hover:text-blue-600 hover:underline cursor-pointer"
                      >
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {item.sku} • {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium shrink-0">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCritical
                          ? "bg-rose-700"
                          : isLow
                          ? "bg-amber-700"
                          : "bg-emerald-700"
                      }`}
                    />
                    {isCritical ? "Out of Stock" : isLow ? "Low Stock" : "Adequate"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200 text-center text-xs">
                  <div>
                    <div className="text-[10px] text-slate-500">Stock</div>
                    <div className={`font-mono font-bold ${isCritical ? "text-rose-700" : isLow ? "text-amber-700" : "text-slate-900"}`}>
                      {item.currentStock} {item.unit}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">Reorder</div>
                    <div className="font-mono text-slate-500">{item.reorderLevel} {item.unit}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">Tariff</div>
                    <div className="font-mono text-slate-900 font-medium">₹{item.tariffCappedInr.toLocaleString("en-IN")}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-[10px] text-slate-500">
                    Lot: {item.lastLot} • Exp: {item.expiryDate}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {isTechnician ? (
                      <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, -1)}
                          disabled={item.currentStock <= 0}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-700 hover:bg-white hover:text-rose-700 disabled:opacity-30 transition cursor-pointer"
                          title="Decrease Quantity by 1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-mono font-bold text-xs text-slate-900">
                          {item.currentStock}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-slate-700 hover:bg-white hover:text-emerald-700 transition cursor-pointer"
                          title="Increase Quantity by 1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-slate-500 border border-slate-200">
                        <Lock className="w-2.5 h-2.5 text-slate-500" />
                        <span>{item.currentStock} {item.unit} (Read-Only)</span>
                      </span>
                    )}

                    <button
                      onClick={() => handleOpenBrochure(item)}
                      className="p-1 rounded-md text-blue-600 hover:bg-blue-50 border border-blue-100 transition cursor-pointer"
                      title="View Brochure"
                    >
                      <FileText className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500">
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
            <tbody className="divide-y divide-slate-200">
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
                            className="font-semibold text-slate-900 text-xs hover:text-blue-600 hover:underline cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{item.name}</span>
                            <Info className="w-3 h-3 text-gray-400 shrink-0" />
                          </div>
                          <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                            {item.manufacturer}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{item.rmsclMatchingCode}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center font-mono">
                      <div className="flex items-center justify-center gap-1">
                        <span
                          className={`text-xs font-bold ${
                            isCritical
                              ? "text-rose-700"
                              : isLow
                              ? "text-amber-700"
                              : "text-slate-900"
                          }`}
                        >
                          {item.currentStock}
                        </span>
                        <span className="text-[10px] text-slate-500">{item.unit}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center font-mono text-slate-500">
                      {item.reorderLevel} {item.unit}
                    </td>

                    <td className="px-4 py-3 font-mono text-[11px]">
                      <div className="text-slate-900">{item.lastLot}</div>
                      <div className="text-[10px] text-slate-500">Exp: {item.expiryDate}</div>
                    </td>

                    <td className="px-4 py-3 text-right font-mono text-slate-900 whitespace-nowrap font-medium">
                      ₹{item.tariffCappedInr.toLocaleString("en-IN")}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-700 whitespace-nowrap">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCritical
                              ? "bg-rose-700"
                              : isLow
                              ? "bg-amber-700"
                              : "bg-emerald-700"
                          }`}
                        />
                        {isCritical ? "Out of Stock" : isLow ? "Low Stock" : "Adequate"}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        {/* Interactive Quantity Adjuster: Technicians Only */}
                        {isTechnician ? (
                          <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              disabled={item.currentStock <= 0}
                              className="w-6 h-6 rounded flex items-center justify-center text-slate-700 hover:bg-white hover:text-rose-700 disabled:opacity-30 transition cursor-pointer"
                              title="Decrease Quantity by 1"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center font-mono font-bold text-xs text-slate-900">
                              {item.currentStock}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded flex items-center justify-center text-slate-700 hover:bg-white hover:text-emerald-700 transition cursor-pointer"
                              title="Increase Quantity by 1 (Restock)"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-slate-500 border border-slate-200"
                            title="Read-Only: Only Cath Lab Technicians can adjust stock levels"
                          >
                            <Lock className="w-3 h-3 text-slate-500" />
                            <span className="font-mono font-bold text-slate-900">{item.currentStock}</span>
                            <span className="text-[10px]">Read-Only</span>
                          </span>
                        )}

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
                          className="px-2 py-1 rounded text-[11px] font-medium bg-blue-50 text-blue-600 hover:bg-blue-200 border border-blue-200 disabled:opacity-40 transition cursor-pointer"
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
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        {/* Standardized Table Heading Card */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
              <History className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-slate-900">
                  Hardware Inventory &amp; Depletion Ledger
                </h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-slate-700 border border-slate-200">
                  Cath-Lab Store
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Consumption Audit Trail
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                SMS Medical College, Jaipur • Rajasthan RMSCL SKU synchronization
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-slate-500">
              <strong>{depletionLogs.length}</strong> Logged Depletions
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500">
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
            <tbody className="divide-y divide-slate-200">
              {depletionLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900 text-xs">{log.patientName}</div>
                    <div className="font-mono text-[11px] text-blue-600">{log.crNo}</div>
                    <div className="text-[10px] text-slate-500 truncate max-w-xs">{log.procedure}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900 text-xs">{log.itemName}</div>
                    <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                      {log.manufacturer || "Cath-Lab Store"}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-emerald-700">
                    {log.rmsclSku}
                  </td>
                  <td className="px-4 py-3 text-center font-mono font-bold text-xs text-rose-700">
                    -{log.quantity} {log.unit}
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] text-slate-900">
                    {log.lotNumber}
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-900">
                    {log.signedBy}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
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
        onUpdateQuantity={isTechnician ? handleUpdateQuantity : undefined}
        canAdjustStock={isTechnician}
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
