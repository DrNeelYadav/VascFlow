"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  useEndoflowStore,
  CtReviewRecord,
} from "../useEndoflowStore";
import {
  IR_CLINICAL_PROTOCOLS,
} from "@vascule/catalog";
import {
  INSTITUTIONAL_STAFF_ACCOUNTS,
} from "../../lib/staffAccounts";
import {
  RAJASTHAN_HOLIDAYS_2026,
  getHolidayForDate,
} from "../../lib/rajasthanHolidays2026";
import { RAJASTHAN_DISTRICTS } from "../../lib/rajasthanDistricts";
import {
  CalendarCheck,
  Search,
  Filter,
  Eye,
  Stethoscope,
  Clock,
  CheckCircle2,
  CalendarPlus,
  ArrowRight,
  User,
  Plus,
  X,
  FileText,
  AlertCircle,
  Phone,
  Building,
  Calendar,
  Layers,
  Sparkles,
  ChevronRight,
  ClipboardList,
  AlertTriangle,
  Radio,
} from "lucide-react";

export default function OpCtReviewQueuePage() {
  const {
    ctReviews,
    addCtReview,
    updateCtReview,
    convertCtReviewToBooking,
    currentStaff,
  } = useEndoflowStore();

  const activeStaff =
    currentStaff ||
    INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "DM01") ||
    INSTITUTIONAL_STAFF_ACCOUNTS[0];

  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Modals
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [reviewingItem, setReviewingItem] = useState<CtReviewRecord | null>(null);
  const [bookingConversionItem, setBookingConversionItem] = useState<CtReviewRecord | null>(null);

  // Success Toast
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // New Intake Form State
  const [newName, setNewName] = useState<string>("");
  const [newAge, setNewAge] = useState<number>(50);
  const [newSex, setNewSex] = useState<"Male" | "Female">("Male");
  const [newContact, setNewContact] = useState<string>("");
  const [newSmsBillId, setNewSmsBillId] = useState<string>("");
  const [newCtNumber, setNewCtNumber] = useState<string>("");
  const [newCenter, setNewCenter] = useState<string>("Sonie Hospital");
  const [newDiagnosis, setNewDiagnosis] = useState<string>("");
  const [newReviewNotes, setNewReviewNotes] = useState<string>("");
  const [newOrganSystem, setNewOrganSystem] = useState<string>("Liver & Hepatobiliary");
  const [newDiseaseKey, setNewDiseaseKey] = useState<string>("budd_chiari_dips");

  // Edit Review Notes State
  const [editNotes, setEditNotes] = useState<string>("");
  const [editStatus, setEditStatus] = useState<"Pending Review" | "Reviewed - Ready to Book" | "Booked in Cath-Lab">("Reviewed - Ready to Book");

  // Booking Conversion Form State
  const [bookingDate, setBookingDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [bookingDiseaseKey, setBookingDiseaseKey] = useState<string>("budd_chiari_dips");

  // Check holiday status on booking conversion date
  const bookingDateHoliday = useMemo(() => {
    return getHolidayForDate(bookingDate);
  }, [bookingDate]);

  // Filtered List
  const filteredReviews = useMemo(() => {
    return ctReviews.filter((r) => {
      // Center filter
      if (selectedCenter !== "all" && r.hospitalSource !== selectedCenter) {
        return false;
      }
      // Status filter
      if (selectedStatus !== "all" && r.status !== selectedStatus) {
        return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          r.patientName.toLowerCase().includes(q) ||
          r.ctNumber.toLowerCase().includes(q) ||
          r.smsBillId.toLowerCase().includes(q) ||
          r.primaryDiagnosis.toLowerCase().includes(q) ||
          r.contactNumber.includes(q) ||
          r.ctReviewNotes.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [ctReviews, selectedCenter, selectedStatus, searchQuery]);

  // Handle Add CT Review Submit
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newCtNumber.trim()) return;

    const matchedProtocol = IR_CLINICAL_PROTOCOLS.find((p) => p.key === newDiseaseKey);

    addCtReview({
      patientName: newName.trim(),
      age: Number(newAge),
      sex: newSex,
      date: new Date().toISOString().split("T")[0],
      primaryDiagnosis: newDiagnosis.trim() || "Suspected Vascular / Biliary Pathology",
      ctNumber: newCtNumber.trim(),
      ctReviewNotes: newReviewNotes.trim() || "Review cross-sectional anatomy for catheter intervention feasibility.",
      smsBillId: newSmsBillId.trim() || `SMS-BILL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      hospitalSource: newCenter,
      contactNumber: newContact.trim() || "9829000000",
      organSystem: newOrganSystem,
      diseaseKey: newDiseaseKey,
      procedureTitle: matchedProtocol ? matchedProtocol.title : "Interventional Radiology Cath-Lab Procedure",
    });

    setShowAddModal(false);
    setSuccessToast(`Patient ${newName} added to OPD CT Review Queue.`);
    setTimeout(() => setSuccessToast(null), 3500);

    // Reset Form
    setNewName("");
    setNewContact("");
    setNewSmsBillId("");
    setNewCtNumber("");
    setNewDiagnosis("");
    setNewReviewNotes("");
  };

  // Handle Edit Notes Submit
  const handleEditNotesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewingItem) return;

    updateCtReview(reviewingItem.id, {
      ctReviewNotes: editNotes,
      status: editStatus,
    });

    setReviewingItem(null);
    setSuccessToast(`CT Review notes updated for ${reviewingItem.patientName}.`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Handle Convert to Cath-Lab Booking
  const handleConvertBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingConversionItem) return;

    const matchedProtocol = IR_CLINICAL_PROTOCOLS.find((p) => p.key === bookingDiseaseKey) || IR_CLINICAL_PROTOCOLS[0];

    const result = convertCtReviewToBooking(
      bookingConversionItem.id,
      bookingDate,
      bookingDiseaseKey,
      matchedProtocol.title,
      `${activeStaff.name} (${activeStaff.code})`
    );

    if (result.success) {
      setBookingConversionItem(null);
      setSuccessToast(`Success! ${bookingConversionItem.patientName} booked in Cath-Lab for ${bookingDate}.`);
      setTimeout(() => setSuccessToast(null), 4000);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* 1. Header Banner */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC] flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-[#202124] tracking-tight">
                OPD CT Review Queue &amp; Angio Workup
              </h1>
              <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                {ctReviews.length} Records
              </span>
            </div>
            <p className="text-xs text-[#5F6368] mt-0.5">
              Department of Radiodiagnosis &amp; Interventional Radiology • SMS Medical College, Jaipur
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add CT Review Intake</span>
          </button>
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] transition-colors cursor-pointer"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* 2. Success Toast */}
      {successToast && (
        <div className="p-3.5 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] text-xs font-semibold flex items-center justify-between shadow-xs animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0" />
            <span>{successToast}</span>
          </div>
          <Link
            href="/dashboard"
            className="underline text-[#137333] hover:text-[#0d5324] font-bold cursor-pointer"
          >
            View in Cath-Lab Diary →
          </Link>
        </div>
      )}

      {/* 3. Metrics Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
          <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Total CT Reviews</p>
          <p className="text-xl font-bold text-[#202124] mt-0.5">{ctReviews.length}</p>
        </div>
        <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
          <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Pending CT Review</p>
          <p className="text-xl font-bold text-[#B06000] mt-0.5">
            {ctReviews.filter((r) => r.status === "Pending Review").length}
          </p>
        </div>
        <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
          <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Reviewed (Ready to Book)</p>
          <p className="text-xl font-bold text-[#1A73E8] mt-0.5">
            {ctReviews.filter((r) => r.status === "Reviewed - Ready to Book").length}
          </p>
        </div>
        <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
          <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Booked in Cath-Lab</p>
          <p className="text-xl font-bold text-[#137333] mt-0.5">
            {ctReviews.filter((r) => r.status === "Booked in Cath-Lab").length}
          </p>
        </div>
      </div>

      {/* 4. Search & Center Filter Controls */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patient, CT number, SMS Bill ID, diagnosis..."
            className="w-full bg-[#F1F3F4] text-xs rounded-full pl-9 pr-4 py-2 border border-transparent focus:border-[#1A73E8] focus:bg-[#FFFFFF] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Center Selector */}
          <select
            value={selectedCenter}
            onChange={(e) => setSelectedCenter(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-xs font-semibold text-[#3C4043] focus:border-[#1A73E8] focus:outline-none"
          >
            <option value="all">All Imaging Centers</option>
            <option value="Sonie Hospital">Sonie Hospital PACS</option>
            <option value="SMS Hospital">SMS Hospital CT</option>
            <option value="External PACS">External / Other</option>
          </select>

          {/* Status Selector */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-xs font-semibold text-[#3C4043] focus:border-[#1A73E8] focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="Pending Review">Pending Review</option>
            <option value="Reviewed - Ready to Book">Reviewed (Ready to Book)</option>
            <option value="Booked in Cath-Lab">Booked in Cath-Lab</option>
          </select>
        </div>
      </div>

      {/* 5. CT Review Queue List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-12 text-center text-[#5F6368] space-y-2">
            <Eye className="w-10 h-10 mx-auto text-[#BDC1C6]" />
            <p className="font-semibold text-sm text-[#202124]">No CT Review records match current filters</p>
            <p className="text-xs">Adjust search query or add a new patient to the OPD CT Review Queue.</p>
          </div>
        ) : (
          filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs hover:border-[#BDC1C6] transition-all space-y-3"
            >
              {/* Card Top Line */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#DADCE0] pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base text-[#202124]">
                      {item.patientName}
                    </h3>
                    <span className="text-xs text-[#5F6368]">
                      ({item.age}y / {item.sex})
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
                      HID: {item.smsBillId}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                        item.status === "Booked in Cath-Lab"
                          ? "bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]"
                          : item.status === "Reviewed - Ready to Book"
                          ? "bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]"
                          : "bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#5F6368]">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-[#1A73E8]" />
                      <strong>{item.hospitalSource}</strong>
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[#202124]">
                      <Radio className="w-3.5 h-3.5 text-[#E37400]" />
                      CT Scan #: <strong>{item.ctNumber}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#137333]" />
                      <a href={`tel:${item.contactNumber}`} className="hover:underline text-[#202124]">
                        {item.contactNumber}
                      </a>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#5F6368]" />
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setReviewingItem(item);
                      setEditNotes(item.ctReviewNotes);
                      setEditStatus(item.status);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] transition-colors cursor-pointer"
                  >
                    <ClipboardList className="w-3.5 h-3.5 text-[#5F6368]" />
                    <span>Review &amp; Edit</span>
                  </button>

                  {item.status !== "Booked in Cath-Lab" ? (
                    <button
                      onClick={() => {
                        setBookingConversionItem(item);
                        setBookingDiseaseKey(item.diseaseKey || "budd_chiari_dips");
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                    >
                      <CalendarPlus className="w-3.5 h-3.5" />
                      <span>Add to Cath-Lab Booking</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E6F4EA] text-[#137333] text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Booked</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Diagnosis & "What to Review on CT" Box */}
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-[#5F6368]">Primary Diagnosis: </span>
                  <span className="font-bold text-[#202124]">{item.primaryDiagnosis}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-1">
                  <p className="font-bold text-[11px] text-[#1A73E8] uppercase tracking-wider flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    What to Review on CT (Catheterization Planning):
                  </p>
                  <p className="text-xs text-[#202124] leading-relaxed">
                    {item.ctReviewNotes}
                  </p>
                </div>

                {item.procedureTitle && (
                  <p className="text-[11px] text-[#5F6368]">
                    Suggested IR Protocol: <strong className="text-[#1A73E8]">{item.procedureTitle}</strong> ({item.organSystem})
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* ========================================================================= */}
      {/* 6. MODALS: ADD INTAKE, EDIT REVIEW, CONVERT TO CATH-LAB BOOKING */}
      {/* ========================================================================= */}

      {/* MODAL 1: Add New CT Review Intake */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl w-full max-w-2xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto my-6 text-[#202124]">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5 border-b border-[#DADCE0] pb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Add Patient to OPD CT Review Queue
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Log cross-sectional scan details and anatomical checklist before Cath-Lab booking
                </p>
              </div>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Bhanwar Lal"
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    Age / Sex
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={newAge}
                      onChange={(e) => setNewAge(Number(e.target.value))}
                      className="w-20 px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                    <select
                      value={newSex}
                      onChange={(e) => setNewSex(e.target.value as "Male" | "Female")}
                      className="flex-1 px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    Contact Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newContact}
                    onChange={(e) => setNewContact(e.target.value)}
                    placeholder="e.g. 9829012345"
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    CT Scan / PACS Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCtNumber}
                    onChange={(e) => setNewCtNumber(e.target.value)}
                    placeholder="e.g. SONIE-PACS-99214"
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    Imaging Center / Source
                  </label>
                  <select
                    value={newCenter}
                    onChange={(e) => setNewCenter(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  >
                    <option value="Sonie Hospital">Sonie Hospital PACS</option>
                    <option value="SMS Hospital">SMS Hospital CT</option>
                    <option value="External PACS">External / Other Center</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    SMS Bill ID / HID
                  </label>
                  <input
                    type="text"
                    value={newSmsBillId}
                    onChange={(e) => setNewSmsBillId(e.target.value)}
                    placeholder="SMS-BILL-2026-..."
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  Primary Clinical Diagnosis *
                </label>
                <input
                  type="text"
                  required
                  value={newDiagnosis}
                  onChange={(e) => setNewDiagnosis(e.target.value)}
                  placeholder="e.g. Cirrhosis with recurrent gastric variceal hemorrhage"
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  What to Review on CT (Specific Roadmap Questions) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newReviewNotes}
                  onChange={(e) => setNewReviewNotes(e.target.value)}
                  placeholder="e.g. Review triple-phase CECT: Check main portal vein patency, assess splenic vein caliber, and evaluate gastrorenal shunt for BRTO..."
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#DADCE0]">
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    Organ System
                  </label>
                  <select
                    value={newOrganSystem}
                    onChange={(e) => {
                      const newSys = e.target.value;
                      setNewOrganSystem(newSys);
                      const first = IR_CLINICAL_PROTOCOLS.find((p) => p.organSystem === newSys);
                      if (first) setNewDiseaseKey(first.key);
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  >
                    <option value="Liver & Hepatobiliary">Liver & Hepatobiliary</option>
                    <option value="Thoracic & Pulmonary">Thoracic & Pulmonary</option>
                    <option value="Gastrointestinal & Mesenteric">Gastrointestinal & Mesenteric</option>
                    <option value="Peripheral Vascular">Peripheral Vascular</option>
                    <option value="Pelvic & Genitourinary">Pelvic & Genitourinary</option>
                    <option value="Venous & Dialysis Access">Venous & Dialysis Access</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">
                    Suspected IR Procedure
                  </label>
                  <select
                    value={newDiseaseKey}
                    onChange={(e) => setNewDiseaseKey(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  >
                    {IR_CLINICAL_PROTOCOLS.filter((p) => p.organSystem === newOrganSystem).map((p) => (
                      <option key={p.key} value={p.key}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#DADCE0]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F1F3F4] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold cursor-pointer shadow-xs"
                >
                  Save CT Review Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Review CT Notes & Update Status */}
      {reviewingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl w-full max-w-lg shadow-xl p-6 relative">
            <button
              onClick={() => setReviewingItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[#202124] mb-1">
              Review CT Findings &amp; Clinical Notes
            </h3>
            <p className="text-xs text-[#5F6368] mb-4">
              Patient: <strong>{reviewingItem.patientName}</strong> • CT #{reviewingItem.ctNumber} ({reviewingItem.hospitalSource})
            </p>

            <form onSubmit={handleEditNotesSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  CT Review Notes &amp; Anatomical Findings:
                </label>
                <textarea
                  rows={4}
                  required
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  Queue Status:
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as typeof editStatus)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-semibold"
                >
                  <option value="Pending Review">Pending Review</option>
                  <option value="Reviewed - Ready to Book">Reviewed - Ready to Book in Cath-Lab</option>
                  <option value="Booked in Cath-Lab">Booked in Cath-Lab</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#DADCE0]">
                <button
                  type="button"
                  onClick={() => setReviewingItem(null)}
                  className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F1F3F4] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold cursor-pointer"
                >
                  Save Findings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Convert CT Review directly to Cath-Lab Booking */}
      {bookingConversionItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl w-full max-w-lg shadow-xl p-6 relative">
            <button
              onClick={() => setBookingConversionItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <CalendarPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Confirm Cath-Lab Booking from CT Review
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Transfer patient directly into DM Resident Cath-Lab diary
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] text-xs space-y-1 mb-4">
              <p><strong>Patient:</strong> {bookingConversionItem.patientName} ({bookingConversionItem.age}y / {bookingConversionItem.sex})</p>
              <p><strong>CT Scan:</strong> {bookingConversionItem.ctNumber} ({bookingConversionItem.hospitalSource})</p>
              <p><strong>Diagnosis:</strong> {bookingConversionItem.primaryDiagnosis}</p>
            </div>

            <form onSubmit={handleConvertBookingSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  Scheduled Cath-Lab Date *
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              {/* Rajasthan Holiday Warning on Date */}
              {(bookingDateHoliday.isHoliday || bookingDateHoliday.isSunday) && (
                <div className="p-2.5 rounded-lg bg-[#FEF7E0] border border-[#FEEFC3] text-[#B06000] flex items-center gap-2 text-[11px]">
                  <AlertTriangle className="w-4 h-4 text-[#F29900] shrink-0" />
                  <span>
                    <strong>Notice:</strong> {bookingDateHoliday.name || "Sunday"} is a Rajasthan {bookingDateHoliday.type || "Gazetted"} Holiday.
                  </span>
                </div>
              )}

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  Procedure Protocol *
                </label>
                <select
                  value={bookingDiseaseKey}
                  onChange={(e) => setBookingDiseaseKey(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-semibold"
                >
                  {IR_CLINICAL_PROTOCOLS.map((p) => (
                    <option key={p.key} value={p.key}>
                      {p.title} ({p.organSystem})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#DADCE0]">
                <button
                  type="button"
                  onClick={() => setBookingConversionItem(null)}
                  className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F1F3F4] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold cursor-pointer shadow-xs"
                >
                  Confirm &amp; Add to Cath-Lab List
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
