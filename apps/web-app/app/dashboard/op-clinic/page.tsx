"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export interface OPAppointment {
  token: string;
  slot: string;
  name: string;
  age: number;
  sex: "Male" | "Female";
  crNo: string;
  dept: "eye" | "ir" | "gastro" | "surgery" | "urology";
  deptTitle: string;
  doctor: string;
  indication: string;
  status: "Waiting" | "In Consultation" | "Scheduled for IR" | "Completed";
  suggestedProc: string;
}

const INITIAL_OP_LIST: OPAppointment[] = [
  {
    token: "OP-01",
    slot: "09:00 AM",
    name: "Mukesh Kumar",
    age: 42,
    sex: "Male",
    crNo: "SMS-2026-EYE-101",
    dept: "eye",
    deptTitle: "Ophthalmology (Eye OPD-4)",
    doctor: "Dr. B. L. Meena",
    indication:
      "Direct Carotid-Cavernous Fistula (CCF) with pulsatile proptosis & ocular bruit. Referred for Transarterial / Transvenous Onyx Embolization.",
    status: "Waiting",
    suggestedProc: "Carotid-Cavernous Fistula Onyx Embolization",
  },
  {
    token: "OP-02",
    slot: "09:30 AM",
    name: "Pooja Meena",
    age: 8,
    sex: "Female",
    crNo: "SMS-2026-EYE-105",
    dept: "eye",
    deptTitle: "Ophthalmology (Retinoblastoma Clinic)",
    doctor: "Dr. Ritu Agarwal",
    indication:
      "Group D Unilateral Retinoblastoma. Referred for Superselective Intra-Arterial Chemotherapy (IAC) via Ophthalmic Artery (Melphalan).",
    status: "In Consultation",
    suggestedProc: "Ophthalmic Intra-Arterial Chemotherapy (IAC)",
  },
  {
    token: "OP-03",
    slot: "10:00 AM",
    name: "Mohan Lal Kumawat",
    age: 52,
    sex: "Male",
    crNo: "SMS-2026-EYE-112",
    dept: "eye",
    deptTitle: "Ophthalmology (Oculoplasty Clinic)",
    doctor: "Dr. Sanjeev Kumar",
    indication:
      "Orbital Cavernous Venous Malformation with retrobulbar ache & visual disturbance. Referred for Percutaneous Bleomycin Sclerotherapy.",
    status: "Waiting",
    suggestedProc: "Percutaneous Orbital Sclerotherapy",
  },
  {
    token: "OP-04",
    slot: "10:30 AM",
    name: "Sunita Devi",
    age: 47,
    sex: "Female",
    crNo: "SMS-2026-IR-204",
    dept: "ir",
    deptTitle: "Interventional Radiology Clinic",
    doctor: "Dr. Neel Yadav",
    indication:
      "Symptomatic Uterine Fibroids (FIGO 3, 7 cm) with heavy menorrhagia. Requesting Uterine Artery Embolization (UAE/UFE).",
    status: "Waiting",
    suggestedProc: "Uterine Artery Embolization (UAE/UFE)",
  },
  {
    token: "OP-05",
    slot: "11:00 AM",
    name: "Gopal Lal Verma",
    age: 58,
    sex: "Male",
    crNo: "SMS-2026-GAS-318",
    dept: "gastro",
    deptTitle: "Gastroenterology (Unit IV)",
    doctor: "Dr. Sandeep Nijhawan",
    indication:
      "Cirrhosis with recurrent gastric fundal varices (GOV2) despite endoscopic glue. Referred for Balloon-Occluded Retrograde Transvenous Obliteration (BRTO).",
    status: "Waiting",
    suggestedProc: "BRTO / PARTO for Gastric Varices",
  },
  {
    token: "OP-06",
    slot: "11:30 AM",
    name: "Manish Saini",
    age: 34,
    sex: "Male",
    crNo: "SMS-2026-SUR-402",
    dept: "surgery",
    deptTitle: "Vascular Surgery (Unit II)",
    doctor: "Dr. R. K. Mathur",
    indication:
      "Left common iliac vein compression (May-Thurner Syndrome) with recurrent left leg DVT. Referred for IVC/Iliac venoplasty & stenting.",
    status: "Waiting",
    suggestedProc: "Iliocaval Venoplasty & Stenting",
  },
  {
    token: "OP-07",
    slot: "12:00 PM",
    name: "Bhagwan Sahai",
    age: 65,
    sex: "Male",
    crNo: "SMS-2026-URO-510",
    dept: "urology",
    deptTitle: "Urology (Unit I)",
    doctor: "Dr. Vikas Gupta",
    indication:
      "Severe BPH (Prostate 85 cc, IPSS 24) refractory to medical therapy, high surgical risk. Referred for Prostatic Artery Embolization (PAE).",
    status: "Waiting",
    suggestedProc: "Prostatic Artery Embolization (PAE)",
  },
];

export default function OpClinicPage() {
  const [appointments, setAppointments] = useState<OPAppointment[]>(INITIAL_OP_LIST);
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bookingModalAppt, setBookingModalAppt] = useState<OPAppointment | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const filtered = appointments.filter((item) => {
    if (selectedDept !== "all" && item.dept !== selectedDept) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCr = item.crNo.toLowerCase().includes(q);
      const matchInd = item.indication.toLowerCase().includes(q);
      const matchDoc = item.doctor.toLowerCase().includes(q);
      const matchToken = item.token.toLowerCase().includes(q);
      if (!matchName && !matchCr && !matchInd && !matchDoc && !matchToken)
        return false;
    }
    return true;
  });

  const handleStatusChange = (
    token: string,
    newStatus: OPAppointment["status"]
  ) => {
    setAppointments((prev) =>
      prev.map((a) => (a.token === token ? { ...a, status: newStatus } : a))
    );
  };

  const handleConfirmCathLabSchedule = () => {
    if (!bookingModalAppt) return;
    handleStatusChange(bookingModalAppt.token, "Scheduled for IR");
    setSuccessToast(
      `Case for ${bookingModalAppt.name} successfully scheduled in Cath-Lab 1!`
    );
    setTimeout(() => {
      setBookingModalAppt(null);
      setSuccessToast(null);
    }, 1500);
  };

  return (
    <div className="space-y-5">
      {/* Clinic Header */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarCheck className="w-5 h-5 text-[#1A73E8]" />
              <h1 className="text-lg font-bold text-[#202124]">
                Outpatient Interventional Clinic & Referral Queue
              </h1>
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                OPD Consults & Triage
              </span>
            </div>
            <p className="text-xs text-[#5F6368]">
              Cross-departmental referrals from Ophthalmology, Gastroenterology, Vascular Surgery & Urology
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
              <div className="text-[11px] text-[#5F6368]">Total Referrals</div>
              <div className="text-base font-bold text-[#202124]">
                {appointments.length} Consults
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#E8F0FE] border border-[#D2E3FC]">
              <div className="text-[11px] text-[#1A73E8] font-medium">Waiting</div>
              <div className="text-base font-bold text-[#1A73E8]">
                {appointments.filter((a) => a.status === "Waiting").length}
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6]">
              <div className="text-[11px] text-[#137333] font-medium">Scheduled</div>
              <div className="text-base font-bold text-[#137333]">
                {appointments.filter((a) => a.status === "Scheduled for IR").length}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-5 pt-4 border-t border-[#F1F3F4] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: "all", label: "All Referrals (7)" },
              { id: "eye", label: "Ophthalmology (3)" },
              { id: "ir", label: "IR Clinic (1)" },
              { id: "gastro", label: "Gastroenterology (1)" },
              { id: "surgery", label: "Vascular Surgery (1)" },
              { id: "urology", label: "Urology (1)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDept(tab.id)}
                className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                  selectedDept === tab.id
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "bg-white text-[#3C4043] border border-[#DADCE0] hover:bg-[#F1F3F4]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
            <input
              type="text"
              placeholder="Search token, patient, diagnosis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs text-[#202124] focus:border-[#1A73E8] focus:outline-none w-56 sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* Appointment Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((appt) => {
          const isWaiting = appt.status === "Waiting";
          const isConsulting = appt.status === "In Consultation";
          const isScheduled = appt.status === "Scheduled for IR";

          return (
            <div
              key={appt.token}
              className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Token, Time, Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F1F3F4] text-[#202124] font-bold text-xs">
                      {appt.token}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#5F6368]">
                      <Clock className="w-3 h-3 text-[#1A73E8]" />
                      {appt.slot}
                    </span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      isScheduled
                        ? "bg-[#E6F4EA] text-[#137333]"
                        : isConsulting
                        ? "bg-[#FEF7E0] text-[#B06000]"
                        : "bg-[#E8F0FE] text-[#1A73E8]"
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>

                {/* Patient Demographics */}
                <div className="mb-3">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-bold text-[#202124]">
                      {appt.name}
                    </h3>
                    <span className="text-[11px] text-[#5F6368]">
                      {appt.age}y • {appt.sex}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#5F6368]">
                    CR: {appt.crNo}
                  </div>
                </div>

                {/* Referral Dept and Doctor */}
                <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-1 text-xs mb-3">
                  <div className="text-[11px] font-semibold text-[#1A73E8]">
                    {appt.deptTitle}
                  </div>
                  <div className="text-[10px] text-[#5F6368]">
                    Referred by: <span className="font-medium text-[#202124]">{appt.doctor}</span>
                  </div>
                  <p className="text-[11px] text-[#3C4043] pt-1">
                    {appt.indication}
                  </p>
                </div>

                {/* Suggested IR Procedure */}
                <div className="text-xs mb-2">
                  <span className="text-[10px] uppercase font-bold text-[#80868B] block mb-0.5">
                    Planned IR Intervention:
                  </span>
                  <span className="font-semibold text-[#202124]">
                    {appt.suggestedProc}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#F1F3F4] flex items-center justify-between gap-2">
                {isWaiting && (
                  <button
                    onClick={() => handleStatusChange(appt.token, "In Consultation")}
                    className="flex-1 py-1.5 px-3 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    Call into Consult
                  </button>
                )}

                {isConsulting && (
                  <button
                    onClick={() => handleStatusChange(appt.token, "Waiting")}
                    className="py-1.5 px-3 rounded-full border border-[#DADCE0] bg-white text-[#5F6368] hover:bg-[#F1F3F4] text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    Hold
                  </button>
                )}

                <button
                  onClick={() => setBookingModalAppt(appt)}
                  className="flex-1 py-1.5 px-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>Book Cath-Lab Slot</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cath-Lab Booking Modal */}
      {bookingModalAppt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-lg shadow-xl p-6 relative">
            <button
              onClick={() => setBookingModalAppt(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <CalendarPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Schedule Case into Cath-Lab
                </h3>
                <p className="text-xs text-[#5F6368]">
                  From OP Referral: {bookingModalAppt.token} ({bookingModalAppt.name})
                </p>
              </div>
            </div>

            {successToast ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#1E8E3E] mx-auto" />
                <p className="text-xs font-semibold text-[#1E8E3E]">
                  {successToast}
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-xl p-3 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#5F6368]">Patient CR:</span>
                    <span className="font-mono text-[#202124] font-semibold">
                      {bookingModalAppt.crNo}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5F6368]">Referring Department:</span>
                    <span className="text-[#202124]">
                      {bookingModalAppt.deptTitle}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5F6368]">Procedure:</span>
                    <span className="font-semibold text-[#1A73E8]">
                      {bookingModalAppt.suggestedProc}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Angiosuite Room
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none">
                      <option value="suite_1">Angio Suite 1 (Siemens Artis Zee)</option>
                      <option value="suite_2">Angio Suite 2 (Philips Allura)</option>
                      <option value="hybrid_or">Hybrid OR 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Target Recovery Bed
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none">
                      <option value="PACU-02">PACU-02 (Cath Holding)</option>
                      <option value="IR-D03">IR Ward D-03</option>
                      <option value="LICU-02">Liver ICU Bed 02</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setBookingModalAppt(null)}
                    className="px-4 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmCathLabSchedule}
                    className="px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold transition-colors cursor-pointer"
                  >
                    Confirm Cath-Lab Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
