"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  useEndoflowStore,
  EndoflowPatient,
  ClinicalStage,
  ModalityType,
  BookedCaseRecord,
  BedRecord,
} from "./useEndoflowStore";
import { PatientDossierModal } from "../components/PatientDossierModal";
import {
  IR_CLINICAL_PROTOCOLS,
  calculateRotterdam,
  RotterdamResult,
} from "@vascule/catalog";
import {
  INSTITUTIONAL_STAFF_ACCOUNTS,
  StaffAccount,
  getStaffPermissions,
} from "../lib/staffAccounts";
import {
  RAJASTHAN_HOLIDAYS_2026,
  getHolidayForDate,
  isDateElectiveBlocked,
} from "../lib/rajasthanHolidays2026";
import { RAJASTHAN_DISTRICTS } from "../lib/rajasthanDistricts";
import { IR_SCHEME_PACKAGES, IrSchemePackage } from "../lib/irSchemeCodes";
import {
  Activity,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  UserCheck,
  Stethoscope,
  HeartPulse,
  Radio,
  Plus,
  ArrowRight,
  BedDouble,
  ShieldCheck,
  FileText,
  Syringe,
  Microscope,
  Radiation,
  X,
  RefreshCw,
  SlidersHorizontal,
  Bell,
  Phone,
  Printer,
  CalendarClock,
  CheckSquare,
  Square,
  ChevronRight,
  ChevronLeft,
  Building,
  User,
  MapPin,
  ClipboardList,
  AlertTriangle,
  CalendarDays,
  ListFilter,
  Check,
} from "lucide-react";

function DashboardContent() {
  const {
    patients,
    activeCaseId,
    searchQuery,
    filterModality,
    beds,
    bookedCases,
    currentStaff,
    setCurrentStaff,
    advanceStage,
    callPatientToLab,
    completeProcedureAndTransfer,
    setSearchQuery,
    setFilterModality,
    bookCase,
    rescheduleCase,
    getTomorrowReminders,
    screenCaseChecklist,
  } = useEndoflowStore();

  // Load session if present in localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("vascule_staff_session");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.code) {
            const matched = INSTITUTIONAL_STAFF_ACCOUNTS.find(
              (s) => s.code === parsed.code
            );
            if (matched && (!currentStaff || currentStaff.code !== matched.code)) {
              setCurrentStaff(matched);
            }
          }
        }
      }
    } catch {
      // Safe fallback
    }
  }, [currentStaff, setCurrentStaff]);

  // Effective staff role and permissions
  const activeStaff =
    currentStaff ||
    INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "DM01") ||
    INSTITUTIONAL_STAFF_ACCOUNTS[0];
  const permissions = getStaffPermissions(activeStaff.role);

  // Tab State for Doctors: Default & Only view is Vascule Booking Diary
  const [doctorActiveTab, setDoctorActiveTab] = useState<"booking">("booking");

  const searchParams = useSearchParams();
  const urlView = searchParams.get("view");

  // Booking View Mode: List Diary vs Calendar View
  const [bookingViewMode, setBookingViewMode] = useState<"list" | "calendar">(
    urlView === "calendar" ? "calendar" : "list"
  );

  useEffect(() => {
    if (urlView === "calendar") {
      setBookingViewMode("calendar");
    }
  }, [urlView]);

  // Calendar Navigation State (Default to current month / year or 2026)
  const [calendarYear, setCalendarYear] = useState<number>(2026);
  const [calendarMonth, setCalendarMonth] = useState<number>(8); // 0-indexed: 8 = September 2026

  // Reminders for tomorrow: Only show patients where NOT ALL 4 screening points are verified!
  // Once all 4 points are ticked, the patient goes away. When all cases are screened, the entire box disappears.
  const tomorrowReminders = useMemo(() => {
    const raw = getTomorrowReminders();
    return raw.filter((c) => {
      const allFourScreened =
        c.npoVerified &&
        c.labsVerified &&
        c.bloodProductsVerified &&
        c.hardwareVerified;
      return !allFourScreened;
    });
  }, [getTomorrowReminders, bookedCases]);

  // Today's date string and today's patients for the dashboard home page
  const todayDateStr = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const todayCases = useMemo(() => {
    return bookedCases.filter((c) => c.scheduledDate === todayDateStr);
  }, [bookedCases, todayDateStr]);

  // Modals
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [rescheduleModalCase, setRescheduleModalCase] =
    useState<BookedCaseRecord | null>(null);
  const [newRescheduleDate, setNewRescheduleDate] = useState<string>("");
  const [rescheduleReason, setRescheduleReason] = useState<string>("");
  const [printSummaryCase, setPrintSummaryCase] =
    useState<BookedCaseRecord | null>(null);
  const [selectedDossierPatient, setSelectedDossierPatient] =
    useState<EndoflowPatient | null>(null);

  // Booking Form State
  const [formPatientName, setFormPatientName] = useState<string>("Ramswaroop Meena");
  const [formAge, setFormAge] = useState<number>(56);
  const [formSex, setFormSex] = useState<"Male" | "Female">("Male");
  const [formContact, setFormContact] = useState<string>("9829012345");
  const [formSso, setFormSso] = useState<string>("SMS-2026-089");
  const [formLocation, setFormLocation] = useState<string>("Sikar");
  const [formScheduledDate, setFormScheduledDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [formOrganSystem, setFormOrganSystem] = useState<string>(
    "Liver & Hepatobiliary"
  );
  const [formDiseaseKey, setFormDiseaseKey] = useState<string>("budd_chiari_dips");

  // Form Disease Guidance State
  const activeProtocol = useMemo(() => {
    return (
      IR_CLINICAL_PROTOCOLS.find((p) => p.key === formDiseaseKey) ||
      IR_CLINICAL_PROTOCOLS[0]
    );
  }, [formDiseaseKey]);

  const [selectedLabs, setSelectedLabs] = useState<string[]>([]);
  const [selectedSpecialLabs, setSelectedSpecialLabs] = useState<string[]>([]);
  const [preScanAnswers, setPreScanAnswers] = useState<Record<string, string>>({});
  const [hardwareItems, setHardwareItems] = useState<
    { id: string; item: string; spec: string; checked: boolean }[]
  >([]);
  const [customHardwareItem, setCustomHardwareItem] = useState<string>("");
  const [customHardwareSpec, setCustomHardwareSpec] = useState<string>("");

  // IR Scheme & Approved Implant Selection State
  const [selectedSchemeCode, setSelectedSchemeCode] = useState<string>("2849-IN061A");
  const [selectedImplants, setSelectedImplants] = useState<string[]>(["2849-IN061A IMP 38", "2849-IN061A IMP 39"]);

  const activeSchemePackage = useMemo(() => {
    return (
      IR_SCHEME_PACKAGES.find((pkg) => pkg.packageCode === selectedSchemeCode) ||
      IR_SCHEME_PACKAGES[0]
    );
  }, [selectedSchemeCode]);

  // Rotterdam Calculator Inputs
  const [calcEnceph, setCalcEnceph] = useState<number>(0);
  const [calcAscites, setCalcAscites] = useState<number>(1);
  const [calcInr, setCalcInr] = useState<number>(1.8);
  const [calcBili, setCalcBili] = useState<number>(3.2);

  const rotterdamResult: RotterdamResult = useMemo(() => {
    return calculateRotterdam({
      enceph: calcEnceph,
      ascites: calcAscites,
      ptRatio: calcInr,
      bilirubinMg: calcBili,
    });
  }, [calcEnceph, calcAscites, calcInr, calcBili]);

  // When activeProtocol changes, sync form defaults
  useEffect(() => {
    if (activeProtocol) {
      setSelectedLabs(activeProtocol.recommendedLabs);
      setSelectedSpecialLabs(activeProtocol.specialInvestigations || []);
      const defaults: Record<string, string> = {};
      activeProtocol.preScanAnatomyChecklist.forEach((item) => {
        defaults[item.id] = item.defaultSelected;
      });
      setPreScanAnswers(defaults);
      setHardwareItems(
        activeProtocol.hardwareRequisition.map((h) => ({
          id: h.id,
          item: h.item,
          spec: h.spec,
          checked: h.required,
        }))
      );
    }
  }, [activeProtocol]);

  // Check holiday warning for selected booking date
  const selectedDateHoliday = useMemo(() => {
    return getHolidayForDate(formScheduledDate);
  }, [formScheduledDate]);

  // Technician OPD Intake State
  const [techIntakeName, setTechIntakeName] = useState<string>("");
  const [techIntakeAge, setTechIntakeAge] = useState<number>(45);
  const [techIntakeSex, setTechIntakeSex] = useState<"Male" | "Female">("Male");
  const [techIntakePhone, setTechIntakePhone] = useState<string>("");
  const [techIntakeSso, setTechIntakeSso] = useState<string>("");
  const [techIntakeCity, setTechIntakeCity] = useState<string>("Jaipur");
  const [techIntakeDept, setTechIntakeDept] = useState<string>("Gastroenterology");
  const [techIntakeComplaint, setTechIntakeComplaint] = useState<string>("");
  const [techIntakeModality, setTechIntakeModality] = useState<ModalityType>("XA");
  const [techIntakeSuccess, setTechIntakeSuccess] = useState<string | null>(null);

  const handleTechIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!techIntakeName || !techIntakePhone) return;

    const newPatient: EndoflowPatient = {
      id: `PT-${Date.now().toString().slice(-4)}`,
      name: techIntakeName,
      age: Number(techIntakeAge),
      sex: techIntakeSex,
      hid: techIntakeSso || `SMS-2026-${Math.floor(100 + Math.random() * 900)}`,
      scanId: `PACS-IR-${Math.floor(100 + Math.random() * 900)}`,
      phone: techIntakePhone,
      unit: techIntakeDept,
      postedBy: activeStaff.name,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      summary: techIntakeComplaint || "OPD Patient Intake completed by Cath-Lab Technician.",
      procedureKey: "opd_intake_pending",
      procedure: "Consultation & Cath-Lab Workup",
      modality: techIntakeModality,
      status: "Scheduled",
      scheme: "MAAY",
      schemeTid: "TID-Pending",
      beneficiaryId: "Jan Aadhaar Verified",
      preAuthStatus: "Pending IR Review",
      ipd: {
        admissionType: "OPD Intake",
        ward: "OPD Waiting Bay",
        bed: "Intake Bay 01",
        podDay: "Pre-Admission",
      },
      labs: {
        ast: 25,
        alt: 25,
        bili: 0.9,
        ldh: 180,
        alb: 4.0,
        creat: 0.9,
        inr: 1.1,
        plt: 220000,
        fib: 280,
        protc: 85,
        prots: 90,
        ascitesGrade: "none",
      },
      preOp: {
        bedLocation: "OPD Intake Area",
        npoHours: 0,
        inrChecked: false,
        creatinineChecked: false,
        consentSigned: false,
        ivCannulaGauge: "Pending",
        calledToLab: false,
        labCleared: false,
      },
    };

    useEndoflowStore.getState().admitPatient(newPatient);
    setTechIntakeSuccess(`Patient ${techIntakeName} successfully registered in OPD Intake Registry.`);
    setTechIntakeName("");
    setTechIntakePhone("");
    setTechIntakeSso("");
    setTechIntakeComplaint("");
    setTimeout(() => setTechIntakeSuccess(null), 3000);
  };

  // Handle Book Case Submit
  const handleBookCaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const res = bookCase({
      patientName: formPatientName,
      age: Number(formAge),
      sex: formSex,
      contactNumber: formContact,
      ssoNumber: formSso,
      location: `${formLocation}, Rajasthan`,
      scheduledDate: formScheduledDate,
      organSystem: formOrganSystem,
      diseaseKey: formDiseaseKey,
      procedureTitle: activeProtocol.title,
      bookedBy: `${activeStaff.name} (${activeStaff.code})`,
      orderedLabs: selectedLabs,
      specialInvestigations: selectedSpecialLabs,
      preScanAnatomy: preScanAnswers,
      hardwareChecklist: hardwareItems,
      rotterdamScore:
        activeProtocol.calculatorType === "rotterdam"
          ? {
              score: rotterdamResult.score,
              classLevel: `${rotterdamResult.riskClass} (${rotterdamResult.riskLevel})`,
              oneYearSurvival: rotterdamResult.oneYrSurvival,
            }
          : undefined,
      postOpPlan: activeProtocol.postOpCare.drugs.join(" • "),
    });

    if (res.success) {
      setShowBookingModal(false);
    }
  };

  // Filtered Master Worklist
  const filteredWorklist = useMemo(() => {
    return patients.filter((p) => {
      if (filterModality !== "all" && p.modality !== filterModality) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.hid.toLowerCase().includes(q) ||
          p.procedure.toLowerCase().includes(q) ||
          p.postedBy.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [patients, filterModality, searchQuery]);

  // Active in-room patient for Cath-Lab console
  const activeInRoomPatient = useMemo(() => {
    if (activeCaseId) {
      const found = patients.find((p) => p.id === activeCaseId);
      if (found && found.status === "In Cath-Lab") return found;
    }
    return patients.find((p) => p.status === "In Cath-Lab") || patients[0];
  }, [patients, activeCaseId]);

  // Generate Calendar Days for Current Month
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const days = [];

    // Prepend empty padding for previous month days
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    // Days in current month
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const holidayInfo = getHolidayForDate(dateStr);
      const casesOnDate = bookedCases.filter((c) => c.scheduledDate === dateStr);
      days.push({
        dayNumber: d,
        dateStr,
        holidayInfo,
        cases: casesOnDate,
      });
    }

    return days;
  }, [calendarYear, calendarMonth, bookedCases]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* 1. Official Department Header: Decluttered & Professional */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#1A73E8] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
            SMS
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-[#202124] tracking-tight">
                Department of Radiodiagnosis & Interventional Radiology
              </h1>
            </div>
            <p className="text-xs text-[#5F6368] mt-0.5 flex items-center gap-1.5 flex-wrap">
              <span>SMS Medical College & Attached Hospitals, Jaipur</span>
            </p>
          </div>
        </div>
      </div>

      {/* 2. Advance 1-Day Reminder Alert & 4-Point Checklist (When Cases Scheduled for Tomorrow) */}
      {permissions.isDoctor && tomorrowReminders.length > 0 && (
        <div className="bg-[#FEF7E0] border border-[#FEEFC3] rounded-2xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#FBBC04]/20 text-[#B06000] shrink-0 mt-0.5">
              <Bell className="w-5 h-5 animate-bounce" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-[#202124] flex items-center gap-2">
                  <span>Cath-Lab Advance 1-Day Pre-Op Screening Queue</span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-[#F29900] text-white">
                    {tomorrowReminders.length} Case Scheduled for Tomorrow
                  </span>
                </h3>
                <span className="text-xs font-mono text-[#5F6368]">
                  Tomorrow: {tomorrowReminders[0].scheduledDate}
                </span>
              </div>

              {tomorrowReminders.map((c) => (
                <div
                  key={c.id}
                  className="bg-[#FFFFFF] border border-[#FEEFC3] rounded-xl p-4 text-xs space-y-3 shadow-2xs"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#FEEFC3] pb-2.5">
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#202124] text-sm flex items-center gap-2">
                        <span>{c.patientName}</span>
                        <span className="text-xs font-normal text-[#5F6368]">
                          ({c.age}y / {c.sex})
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-[#F1F3F4] rounded border border-[#DADCE0]">
                          CR: {c.ssoNumber}
                        </span>
                      </p>
                      <p className="text-xs text-[#1A73E8] font-semibold">
                        {c.procedureTitle} • {c.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${c.contactNumber}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] hover:bg-[#CEEAD6] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call ({c.contactNumber})</span>
                      </a>
                      <button
                        onClick={() => {
                          setRescheduleModalCase(c);
                          setNewRescheduleDate(c.scheduledDate);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <CalendarClock className="w-3.5 h-3.5 text-[#5F6368]" />
                        <span>Reschedule</span>
                      </button>
                      <button
                        onClick={() => setPrintSummaryCase(c)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#1A73E8] text-white hover:bg-[#1557B0] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <ClipboardList className="w-3.5 h-3.5" />
                        <span>Review Protocol</span>
                      </button>
                    </div>
                  </div>

                  {/* 4-Point Mandatory Pre-Op Resident Screening Checklist */}
                  <div className="space-y-2">
                    <p className="font-bold text-[#B06000] text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Mandatory 4-Point Screening Checklist (Dr. Neel / Dr. Nilesh Sign-off):
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {/* Checkbox 1: 6h NPO */}
                      <label
                        className={`flex items-start gap-2 p-2.5 rounded-lg border transition-colors cursor-pointer ${
                          c.npoVerified
                            ? "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]"
                            : "bg-[#F8F9FA] border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={c.npoVerified}
                          onChange={(e) =>
                            screenCaseChecklist(
                              c.id,
                              "npo",
                              e.target.checked,
                              activeStaff.name
                            )
                          }
                          className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0 cursor-pointer"
                        />
                        <div className="text-[11px]">
                          <span className="font-bold block">1. 6-Hour NPO Fasting</span>
                          <span className="text-[10px] text-[#5F6368]">
                            Verified with patient / attendant
                          </span>
                        </div>
                      </label>

                      {/* Checkbox 2: Labs Checked */}
                      <label
                        className={`flex items-start gap-2 p-2.5 rounded-lg border transition-colors cursor-pointer ${
                          c.labsVerified
                            ? "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]"
                            : "bg-[#F8F9FA] border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={c.labsVerified}
                          onChange={(e) =>
                            screenCaseChecklist(
                              c.id,
                              "labs",
                              e.target.checked,
                              activeStaff.name
                            )
                          }
                          className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0 cursor-pointer"
                        />
                        <div className="text-[11px]">
                          <span className="font-bold block">2. LFT, RFT & Coagulation</span>
                          <span className="text-[10px] text-[#5F6368]">
                            PT-INR, Platelets, Creatinine OK
                          </span>
                        </div>
                      </label>

                      {/* Checkbox 3: Blood Products */}
                      <label
                        className={`flex items-start gap-2 p-2.5 rounded-lg border transition-colors cursor-pointer ${
                          c.bloodProductsVerified
                            ? "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]"
                            : "bg-[#F8F9FA] border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={c.bloodProductsVerified}
                          onChange={(e) =>
                            screenCaseChecklist(
                              c.id,
                              "bloodProducts",
                              e.target.checked,
                              activeStaff.name
                            )
                          }
                          className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0 cursor-pointer"
                        />
                        <div className="text-[11px]">
                          <span className="font-bold block">3. Blood Products Reserved</span>
                          <span className="text-[10px] text-[#5F6368]">
                            PRBC / FFP crossmatched
                          </span>
                        </div>
                      </label>

                      {/* Checkbox 4: Hardware Available */}
                      <label
                        className={`flex items-start gap-2 p-2.5 rounded-lg border transition-colors cursor-pointer ${
                          c.hardwareVerified
                            ? "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]"
                            : "bg-[#F8F9FA] border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={c.hardwareVerified}
                          onChange={(e) =>
                            screenCaseChecklist(
                              c.id,
                              "hardware",
                              e.target.checked,
                              activeStaff.name
                            )
                          }
                          className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0 cursor-pointer"
                        />
                        <div className="text-[11px]">
                          <span className="font-bold block">4. Hardware & Implants</span>
                          <span className="text-[10px] text-[#5F6368]">
                            Sheaths, wires & stents in stock
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Screening Clearance Status Banner */}
                    {c.keptForTomorrow ? (
                      <div className="p-2.5 rounded-lg bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0" />
                          <span className="font-semibold text-xs">
                            Screening Complete • Kept for Tomorrow + Admission Card & Code Addition Updated
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#137333]">
                          Screened by {c.screenedBy || activeStaff.name}
                        </span>
                      </div>
                    ) : (
                      <p className="text-[11px] text-[#5F6368] italic">
                        * Check all 4 items to mark case as &ldquo;Kept for Tomorrow + Admission &amp; Code Addition&rdquo; and clear alert.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ROLE-GATED INTERFACE (DOCTORS vs TECHNICIANS vs NURSES) */}
      {/* ========================================================================= */}

      {/* ===================== VIEW A: DOCTORS (FACULTY, DM, SR) ===================== */}
      {permissions.isDoctor && (
        <div className="space-y-6">
          {/* Doctor Navigation Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#DADCE0] pb-2 gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setBookingViewMode("list")}
                className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  bookingViewMode === "list"
                    ? "border-[#1A73E8] text-[#1A73E8]"
                    : "border-transparent text-[#5F6368] hover:text-[#202124]"
                }`}
              >
                Vascule Booking Diary
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-[#F1F3F4] rounded-full p-0.5 border border-[#DADCE0]">
                <button
                  onClick={() => setBookingViewMode("list")}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    bookingViewMode === "list"
                      ? "bg-[#FFFFFF] text-[#1A73E8] shadow-xs"
                      : "text-[#5F6368] hover:text-[#202124]"
                  }`}
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>List Diary</span>
                </button>
                <button
                  onClick={() => setBookingViewMode("calendar")}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    bookingViewMode === "calendar"
                      ? "bg-[#FFFFFF] text-[#1A73E8] shadow-xs"
                      : "text-[#5F6368] hover:text-[#202124]"
                  }`}
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>2026 Calendar</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setBookingViewMode("calendar");
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Admit / Book Case</span>
              </button>
            </div>
          </div>

          {/* VASCULE BOOKING DIARY & CALENDAR */}
          <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
                <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Total Booked Cases</p>
                <p className="text-xl font-bold text-[#202124] mt-0.5">{bookedCases.length}</p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
                <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Today&apos;s Patients</p>
                <p className="text-xl font-bold text-[#1E8E3E] mt-0.5">
                  {todayCases.length}
                </p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
                <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Scheduled Future</p>
                <p className="text-xl font-bold text-[#1A73E8] mt-0.5">
                  {bookedCases.filter((c) => c.status === "Scheduled").length}
                </p>
              </div>
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3.5">
                <p className="text-[11px] font-semibold text-[#5F6368] uppercase">Rescheduled</p>
                <p className="text-xl font-bold text-[#B06000] mt-0.5">
                  {bookedCases.filter((c) => c.status === "Rescheduled").length}
                </p>
              </div>
            </div>

            {/* Prominent Today's Patients Section (Dashboard Home View) */}
            <div className="bg-[#FFFFFF] border-2 border-[#CEEAD6] rounded-2xl overflow-hidden shadow-xs">
              <div className="p-4 bg-[#E6F4EA]/60 border-b border-[#CEEAD6] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#1E8E3E] animate-pulse" />
                  <h3 className="text-sm font-bold text-[#137333] uppercase tracking-wide">
                    Today&apos;s Cath-Lab Patients ({todayDateStr})
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1E8E3E] text-white">
                  {todayCases.length} {todayCases.length === 1 ? "Patient" : "Patients"} Today
                </span>
              </div>

              {todayCases.length === 0 ? (
                <div className="p-6 text-center text-xs text-[#5F6368] space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-[#1E8E3E] mx-auto opacity-70" />
                  <p className="font-semibold text-[#202124]">No Elective Cases Scheduled for Today</p>
                  <p>All emergency and call cases can be admitted directly via Admit / Book.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#DADCE0]">
                  {todayCases.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 hover:bg-[#F8F9FA] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#202124]">
                            {c.patientName}
                          </span>
                          <span className="text-xs text-[#5F6368]">
                            ({c.age}y / {c.sex})
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
                            CR: {c.ssoNumber}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                            Today&apos;s Case
                          </span>
                        </div>
                        <p className="text-xs text-[#1A73E8] font-bold">
                          {c.procedureTitle}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#5F6368]">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-[#137333]" />
                            <a href={`tel:${c.contactNumber}`} className="hover:underline text-[#202124]">
                              {c.contactNumber}
                            </a>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                            {c.location}
                          </span>
                          <span>• Booked by: {c.bookedBy}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setPrintSummaryCase(c)}
                          className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
                          <span>Summary</span>
                        </button>
                        <button
                          onClick={() => {
                            setRescheduleModalCase(c);
                            setNewRescheduleDate(c.scheduledDate);
                          }}
                          className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] transition-colors cursor-pointer"
                        >
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CALENDAR VIEW: Complete Full-Page 2026 Calendar View */}
            {bookingViewMode === "calendar" && (
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
                {/* Calendar Header with Month Navigation */}
                <div className="flex items-center justify-between border-b border-[#DADCE0] pb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-[#202124] flex items-center gap-2">
                      <span>{monthNames[calendarMonth]} {calendarYear}</span>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                        Official 2026 Rajasthan Master
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (calendarMonth === 0) {
                          setCalendarMonth(11);
                          setCalendarYear((y) => y - 1);
                        } else {
                          setCalendarMonth((m) => m - 1);
                        }
                      }}
                      className="p-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#3C4043] cursor-pointer"
                      title="Previous Month"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setCalendarMonth(8);
                        setCalendarYear(2026);
                      }}
                      className="px-2.5 py-1 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] cursor-pointer"
                    >
                      Sept 2026
                    </button>
                    <button
                      onClick={() => {
                        if (calendarMonth === 11) {
                          setCalendarMonth(0);
                          setCalendarYear((y) => y + 1);
                        } else {
                          setCalendarMonth((m) => m + 1);
                        }
                      }}
                      className="p-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-[#3C4043] cursor-pointer"
                      title="Next Month"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Day Names Header */}
                <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-[#5F6368] py-1 border-b border-[#DADCE0]">
                  <span className="text-[#C5221F]">Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                {/* Calendar 7-Column Grid: Gazetted Holidays & Sundays in Red */}
                <div className="grid grid-cols-7 gap-1.5">
                  {calendarDays.map((cell, idx) => {
                    if (!cell) {
                      return (
                        <div
                          key={`empty-${idx}`}
                          className="min-h-[95px] rounded-xl bg-[#F8F9FA]/40 border border-transparent p-1.5"
                        />
                      );
                    }

                    const isSun = cell.holidayInfo.isSunday;
                    const isGazetted = cell.holidayInfo.type === "Gazetted";
                    const isHolidayRed = isSun || isGazetted;
                    const hasCases = cell.cases.length > 0;

                    return (
                      <div
                        key={cell.dateStr}
                        onClick={() => {
                          setFormScheduledDate(cell.dateStr);
                          setShowBookingModal(true);
                        }}
                        className={`min-h-[105px] rounded-xl border p-2 flex flex-col justify-between transition-all cursor-pointer ${
                          isHolidayRed
                            ? "bg-[#FCE8E6]/40 border-[#F5C2C7]"
                            : "bg-[#FFFFFF] border-[#DADCE0] hover:border-[#1A73E8] hover:shadow-xs"
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-xs font-bold ${
                                isHolidayRed ? "text-[#C5221F]" : "text-[#202124]"
                              }`}
                            >
                              {cell.dayNumber}
                            </span>

                            {isGazetted && (
                              <span className="px-1.5 py-0.2 text-[8px] font-bold uppercase rounded bg-[#FCE8E6] text-[#C5221F] border border-[#F5C2C7]">
                                Gazetted Holiday
                              </span>
                            )}
                            {isSun && !isGazetted && (
                              <span className="px-1.5 py-0.2 text-[8px] font-bold uppercase rounded bg-[#FCE8E6] text-[#C5221F] border border-[#F5C2C7]">
                                Sunday
                              </span>
                            )}
                          </div>

                          {/* Booked Cases Chips without festival names */}
                          {hasCases && (
                            <div className="space-y-1 pt-1">
                              {cell.cases.map((c) => (
                                <div
                                  key={c.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setPrintSummaryCase(c);
                                  }}
                                  className="p-1 rounded bg-[#E8F0FE] border border-[#D2E3FC] text-[10px] font-medium text-[#1A73E8] truncate hover:bg-[#D2E3FC]"
                                  title={`${c.patientName} (${c.procedureTitle})`}
                                >
                                  • {c.patientName.split(" ")[0]}: {c.procedureTitle.slice(0, 18)}...
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <span className="text-[9px] text-[#1A73E8] font-semibold text-right block self-end">
                          + Book Case
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Calendar Legend: Strictly Red for Gazetted & Sunday */}
                <div className="flex flex-wrap items-center gap-4 text-xs pt-3 border-t border-[#DADCE0] text-[#5F6368]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-[#FFFFFF] border border-[#DADCE0]" />
                    <span>Working Day (Elective Cath-Lab Open)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-[#FCE8E6] border border-[#F5C2C7]" />
                    <span className="text-[#C5221F] font-semibold">Sundays &amp; Rajasthan Gazetted Holidays (Red)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-[#E8F0FE] border border-[#D2E3FC]" />
                    <span>Booked Cath-Lab Case</span>
                  </span>
                </div>
              </div>
            )}

            {/* LIST VIEW: Booked Cases (Vascule Booking Diary) */}
            {bookingViewMode === "list" && (
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl overflow-hidden shadow-xs">
                <div className="p-4 border-b border-[#DADCE0] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#202124]">
                      Vascule Booking Diary
                    </h3>
                    <p className="text-xs text-[#5F6368]">
                      Organized by probable procedure date • Verified contact records • 1-Click date rescheduling
                    </p>
                  </div>
                  <span className="text-xs text-[#5F6368]">
                    Showing {bookedCases.length} records
                  </span>
                </div>

                <div className="divide-y divide-[#DADCE0]">
                  {bookedCases.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 hover:bg-[#F8F9FA] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#202124]">
                            {c.patientName}
                          </span>
                          <span className="text-xs text-[#5F6368]">
                            ({c.age}y / {c.sex})
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
                            SSO: {c.ssoNumber}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                              c.status === "Scheduled"
                                ? "bg-[#E6F4EA] text-[#137333]"
                                : c.status === "Rescheduled"
                                ? "bg-[#FEF7E0] text-[#B06000]"
                                : "bg-[#E8F0FE] text-[#1A73E8]"
                            }`}
                          >
                            {c.status}
                          </span>
                        </div>

                        <p className="text-xs text-[#1A73E8] font-semibold">
                          {c.procedureTitle}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#5F6368]">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#1A73E8]" />
                            <strong className="text-[#202124]">{c.scheduledDate}</strong>
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-[#137333]" />
                            <a href={`tel:${c.contactNumber}`} className="hover:underline text-[#202124]">
                              {c.contactNumber}
                            </a>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                            {c.location}
                          </span>
                          <span>• Booked by: {c.bookedBy}</span>
                        </div>

                        {c.rotterdamScore && (
                          <div className="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded bg-[#F1F3F4] text-[#3C4043]">
                            <span className="font-bold">Rotterdam Score:</span>
                            <span className="font-mono text-[#C5221F] font-bold">
                              {c.rotterdamScore.score} ({c.rotterdamScore.classLevel})
                            </span>
                            <span>• 1-Yr Survival: {c.rotterdamScore.oneYearSurvival}</span>
                          </div>
                        )}
                      </div>

                      {/* Case Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setRescheduleModalCase(c);
                            setNewRescheduleDate(c.scheduledDate);
                          }}
                          className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] transition-colors cursor-pointer"
                        >
                          Reschedule
                        </button>
                        <button
                          onClick={() => setPrintSummaryCase(c)}
                          className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-semibold text-[#3C4043] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
                          <span>Summary</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================== VIEW B: TECHNICIANS (TC01 - TC06) ===================== */}
      {permissions.isTechnician && (
        <div className="space-y-6">
          {/* Institutional Role Notice */}
          <div className="p-4 rounded-xl bg-[#FEF7E0] border border-[#FEEFC3] text-xs text-[#B06000] flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>
              <strong>Technician Authority Active:</strong> You are authorized to register incoming OPD patient intake details and demographic records. Procedure clinical protocoling, hardware requisitions, and discharge authorization are restricted to Interventional Radiologists.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Intake Form */}
            <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
              <div className="border-b border-[#DADCE0] pb-3 mb-4">
                <h3 className="text-base font-bold text-[#202124]">
                  OPD Patient Intake Registration
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Record patient demographic particulars and chief complaints
                </p>
              </div>

              {techIntakeSuccess && (
                <div className="mb-4 p-3 rounded-lg bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{techIntakeSuccess}</span>
                </div>
              )}

              <form onSubmit={handleTechIntakeSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={techIntakeName}
                      onChange={(e) => setTechIntakeName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={techIntakePhone}
                      onChange={(e) => setTechIntakePhone(e.target.value)}
                      placeholder="e.g. 9829012345"
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      value={techIntakeAge}
                      onChange={(e) => setTechIntakeAge(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Gender
                    </label>
                    <select
                      value={techIntakeSex}
                      onChange={(e) => setTechIntakeSex(e.target.value as "Male" | "Female")}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      CR No / SSO ID
                    </label>
                    <input
                      type="text"
                      value={techIntakeSso}
                      onChange={(e) => setTechIntakeSso(e.target.value)}
                      placeholder="SMS-2026-..."
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      District (Rajasthan)
                    </label>
                    <select
                      value={techIntakeCity}
                      onChange={(e) => setTechIntakeCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      {RAJASTHAN_DISTRICTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                      Referring Department
                    </label>
                    <select
                      value={techIntakeDept}
                      onChange={(e) => setTechIntakeDept(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Vascular Surgery">Vascular Surgery</option>
                      <option value="Pulmonary Medicine">Pulmonary Medicine</option>
                      <option value="Urology">Urology</option>
                      <option value="General Medicine">General Medicine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                    Chief Complaint / Clinical Notes
                  </label>
                  <textarea
                    rows={2}
                    value={techIntakeComplaint}
                    onChange={(e) => setTechIntakeComplaint(e.target.value)}
                    placeholder="e.g. Abdominal distension, suspected hepatic venous outflow obstruction..."
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Save OPD Intake Record
                </button>
              </form>
            </div>

            {/* Registered Patients Feed */}
            <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
              <div className="border-b border-[#DADCE0] pb-3 mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#202124]">
                    Registered OPD Intake Queue
                  </h3>
                  <p className="text-xs text-[#5F6368]">
                    Patients logged for Interventional Specialist consultation
                  </p>
                </div>
                <span className="text-xs font-bold text-[#1A73E8]">
                  {patients.length} Active
                </span>
              </div>

              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 divide-y divide-[#DADCE0]">
                {patients.map((p) => (
                  <div key={p.id} className="pt-3 first:pt-0 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#202124] text-sm">{p.name}</span>
                      <span className="text-[#5F6368] font-mono">{p.hid}</span>
                    </div>
                    <p className="text-[#1A73E8] font-semibold">{p.procedure}</p>
                    <p className="text-[#5F6368] text-[11px] line-clamp-1">{p.summary}</p>
                    <div className="flex items-center justify-between text-[11px] text-[#5F6368] pt-1">
                      <span>Phone: {p.phone}</span>
                      <span>Unit: {p.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== VIEW C: NURSING OFFICERS (NO01 - NO06) ===================== */}
      {permissions.isNurse && (
        <div className="space-y-6">
          {/* Institutional Role Notice */}
          <div className="p-4 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6] text-xs text-[#137333] flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>
              <strong>Nursing Officer Authority Active:</strong> You are authorized to manage the 8-Bed Inpatient Care Board (3 ICU beds + 5 Ward beds), record bedside hemodynamics, monitor groin puncture site seals, and manage bed transfers. Procedure booking and discharge summaries are restricted to Medical Officers.
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  8-Bed Inpatient Nursing Care Console
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Continuous vital signs surveillance, puncture site seal integrity, and distal pulse checks
                </p>
              </div>
              <span className="text-xs font-bold text-[#137333] bg-[#E6F4EA] px-3 py-1 rounded-full border border-[#CEEAD6]">
                {beds.filter((b) => b.status === "occupied").length} / 8 Beds Monitored
              </span>
            </div>

            {/* 3 ICU Beds */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5221F] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                Liver ICU High-Acuity Unit (3 Beds)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {beds
                  .filter((b) => b.type === "ICU")
                  .map((bed) => (
                    <div
                      key={bed.id}
                      className="rounded-xl border border-[#DADCE0] p-4 bg-[#FFFFFF] shadow-xs space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#202124]">{bed.id}</span>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                            bed.status === "occupied"
                              ? "bg-[#FCE8E6] text-[#C5221F]"
                              : "bg-[#E6F4EA] text-[#137333]"
                          }`}
                        >
                          {bed.status}
                        </span>
                      </div>

                      <div className="text-xs space-y-1">
                        <p className="font-bold text-[#202124] text-sm">
                          {bed.status === "occupied" ? bed.ptName : "Bed Ready for Admission"}
                        </p>
                        <p className="text-[#5F6368]">{bed.diag}</p>
                        {bed.status === "occupied" && (
                          <div className="p-2 rounded bg-[#F8F9FA] border border-[#DADCE0] space-y-1 text-[11px]">
                            <p className="text-[#202124]">
                              <strong>Vitals:</strong> {bed.vitals}
                            </p>
                            <p className="text-[#137333]">
                              <strong>Puncture Site:</strong> {bed.hemostasisIntact ? "Hemostasis Intact (Dry)" : "Monitoring"}
                            </p>
                            <p className="text-[#1A73E8]">
                              <strong>Distal Pulses:</strong> {bed.distalPulses}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 5 Ward Beds */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5" />
                IR Recovery Ward (5 Beds)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {beds
                  .filter((b) => b.type === "Ward")
                  .map((bed) => (
                    <div
                      key={bed.id}
                      className="rounded-xl border border-[#DADCE0] p-3.5 bg-[#FFFFFF] shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-[#202124]">{bed.id}</span>
                        <span
                          className={`px-1.5 py-0.5 text-[9px] font-bold uppercase rounded-full ${
                            bed.status === "occupied"
                              ? "bg-[#E8F0FE] text-[#1A73E8]"
                              : "bg-[#E6F4EA] text-[#137333]"
                          }`}
                        >
                          {bed.status}
                        </span>
                      </div>

                      <div className="text-xs space-y-1">
                        <p className="font-bold text-[#202124] truncate">
                          {bed.status === "occupied" ? bed.ptName : "Vacant"}
                        </p>
                        <p className="text-[11px] text-[#5F6368] line-clamp-2">{bed.diag}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODALS: CASE BOOKING, RESCHEDULING, PRINT SUMMARY, ROLE SWITCHER */}
      {/* ========================================================================= */}

      {/* MODAL 1: DM Resident Case Booking Form with Protocols Engine */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl w-full max-w-3xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto my-6">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5 border-b border-[#DADCE0] pb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Book New Cath-Lab Case • DM Resident Protocol Engine
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Structured OPD booking, multi-layered DSA hierarchy, and disease-specific automated guidance
                </p>
              </div>
            </div>

            <form onSubmit={handleBookCaseSubmit} className="space-y-5 text-xs">
              {/* Section 1: Patient Particulars */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#202124] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1A73E8]" />
                  1. Patient Demographics & Contact Particulars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formPatientName}
                      onChange={(e) => setFormPatientName(e.target.value)}
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
                        value={formAge}
                        onChange={(e) => setFormAge(Number(e.target.value))}
                        className="w-20 px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                      />
                      <select
                        value={formSex}
                        onChange={(e) => setFormSex(e.target.value as "Male" | "Female")}
                        className="flex-1 px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formContact}
                      onChange={(e) => setFormContact(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      CR No. / SSO ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={formSso}
                      onChange={(e) => setFormSso(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      District (50 Rajasthan Districts)
                    </label>
                    <select
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    >
                      {RAJASTHAN_DISTRICTS.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      Probable Procedure Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formScheduledDate}
                      onChange={(e) => setFormScheduledDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Real-Time Rajasthan Holiday / Sunday Warning */}
                {(selectedDateHoliday.isHoliday || selectedDateHoliday.isSunday) && (
                  <div className="p-3 rounded-lg bg-[#FEF7E0] border border-[#FEEFC3] text-[#B06000] flex items-start gap-2 text-xs">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#F29900]" />
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#202124]">
                        ⚠️ {selectedDateHoliday.type === "Gazetted" ? "Rajasthan Gazetted Holiday" : selectedDateHoliday.isSunday ? "Sunday" : "Optional Holiday"}: {selectedDateHoliday.name || "Sunday (Cath-Lab Closed)"}
                      </p>
                      <p className="text-[11px] text-[#5F6368]">
                        Official elective Cath-Lab lists are closed. Emergency and STAT on-call procedures only.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 2: Multi-Layered DSA Hierarchy Selector */}
              <div className="space-y-2 pt-2 border-t border-[#DADCE0]">
                <h4 className="font-bold text-[#202124] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-[#1A73E8]" />
                  2. Multi-Layered DSA Case Selection (No Biopsies / FNAC)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      Organ / Vascular System
                    </label>
                    <select
                      value={formOrganSystem}
                      onChange={(e) => {
                        const newSystem = e.target.value;
                        setFormOrganSystem(newSystem);
                        const firstMatch = IR_CLINICAL_PROTOCOLS.find(
                          (p) => p.organSystem === newSystem
                        );
                        if (firstMatch) setFormDiseaseKey(firstMatch.key);
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-medium"
                    >
                      <option value="Liver & Hepatobiliary">Liver & Hepatobiliary</option>
                      <option value="Thoracic & Pulmonary">Thoracic & Pulmonary</option>
                      <option value="Gastrointestinal & Mesenteric">Gastrointestinal & Mesenteric</option>
                      <option value="Peripheral Vascular">Peripheral Vascular</option>
                      <option value="Pelvic & Genitourinary">Pelvic & Genitourinary</option>
                      <option value="Venous & Dialysis Access">Venous & Dialysis Access</option>
                      <option value="Musculoskeletal & Pain">Musculoskeletal & Pain</option>
                      <option value="Neurovascular & Head/Neck">Neurovascular & Head/Neck</option>
                      <option value="Aortic & Complex">Aortic & Complex</option>
                      <option value="Lymphatic & Soft Tissue">Lymphatic & Soft Tissue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      Disease-Specific Procedure Protocol
                    </label>
                    <select
                      value={formDiseaseKey}
                      onChange={(e) => setFormDiseaseKey(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-medium"
                    >
                      {IR_CLINICAL_PROTOCOLS.filter(
                        (p) => p.organSystem === formOrganSystem
                      ).map((p) => (
                        <option key={p.key} value={p.key}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] text-[#5F6368] text-[11px] leading-relaxed">
                  <strong>SIR Indication:</strong> {activeProtocol.clinicalCriteria}
                </div>
              </div>

              {/* Section 2B: Rajasthan Government MAAY / RGHS IR Code & Approved Implants */}
              <div className="space-y-3 pt-2 border-t border-[#DADCE0]">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[#202124] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#137333]" />
                    2B. Official Rajasthan Government MAAY / RGHS IR Scheme Codes &amp; Implants
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                    Pure IR Codes • Pre-Auth
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#3C4043] mb-1">
                      Official IR Package Tariff Code *
                    </label>
                    <select
                      value={selectedSchemeCode}
                      onChange={(e) => {
                        const newCode = e.target.value;
                        setSelectedSchemeCode(newCode);
                        const matchedPkg = IR_SCHEME_PACKAGES.find((p) => p.packageCode === newCode);
                        if (matchedPkg && matchedPkg.approvedImplants.length > 0) {
                          setSelectedImplants(matchedPkg.approvedImplants.map((i) => i.implantCode));
                        } else {
                          setSelectedImplants([]);
                        }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none font-semibold text-xs"
                    >
                      {IR_SCHEME_PACKAGES.map((pkg) => (
                        <option key={pkg.packageCode} value={pkg.packageCode}>
                          [{pkg.packageCode}] {pkg.procedureName} (₹{pkg.baseTariffINR.toLocaleString("en-IN")})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="p-3 rounded-lg bg-[#E6F4EA]/40 border border-[#CEEAD6] flex flex-col justify-center space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5F6368] font-medium">Scheme Coverage:</span>
                      <span className="font-bold text-[#137333]">
                        {activeSchemePackage.scheme} ({activeSchemePackage.category})
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5F6368] font-medium">Base Package Tariff:</span>
                      <span className="font-bold text-[#202124]">
                        ₹{activeSchemePackage.baseTariffINR.toLocaleString("en-IN")}
                      </span>
                    </div>
                    {activeSchemePackage.notes && (
                      <p className="text-[10px] text-[#B06000] italic">
                        Notice: {activeSchemePackage.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Approved Scheme Implants Checkboxes */}
                {activeSchemePackage.approvedImplants.length > 0 && (
                  <div className="p-3 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] space-y-2">
                    <p className="font-bold text-[#202124] text-[11px] flex items-center justify-between">
                      <span>Official Approved Implants (Capped Reimbursement Rates):</span>
                      <span className="text-[#137333] font-semibold">Pre-authorized hardware</span>
                    </p>
                    <div className="space-y-1.5">
                      {activeSchemePackage.approvedImplants.map((imp) => (
                        <label key={imp.implantCode} className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedImplants.includes(imp.implantCode)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedImplants([...selectedImplants, imp.implantCode]);
                              } else {
                                setSelectedImplants(selectedImplants.filter((c) => c !== imp.implantCode));
                              }
                            }}
                            className="mt-0.5 rounded border-[#DADCE0] text-[#137333] focus:ring-0 cursor-pointer"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-[#202124]">{imp.name}</span>
                            <span className="text-[#137333] font-semibold"> • [Code: {imp.implantCode}] </span>
                            <span className="text-[#5F6368] font-mono">₹{imp.cappedPriceINR.toLocaleString("en-IN")}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Section 3: Disease-Specific Automated Guidance */}
              <div className="space-y-4 pt-2 border-t border-[#DADCE0]">
                <h4 className="font-bold text-[#202124] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-[#1A73E8]" />
                  3. Automated Clinical Guidance & Pre-Op Workup
                </h4>

                {/* Labs Checklist */}
                <div className="p-3 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] space-y-2">
                  <p className="font-bold text-[#202124] text-[11px] flex items-center justify-between">
                    <span>Mandatory Laboratory Profile:</span>
                    <span className="text-[#1A73E8] font-normal">Check items to order</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {activeProtocol.recommendedLabs.map((lab) => (
                      <label key={lab} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLabs.includes(lab)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedLabs([...selectedLabs, lab]);
                            } else {
                              setSelectedLabs(selectedLabs.filter((l) => l !== lab));
                            }
                          }}
                          className="rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
                        />
                        <span className="text-[#3C4043]">{lab}</span>
                      </label>
                    ))}
                  </div>

                  {activeProtocol.specialInvestigations.length > 0 && (
                    <div className="pt-2 border-t border-[#DADCE0] space-y-1">
                      <p className="font-bold text-[#B06000] text-[11px]">
                        Disease-Specific Special Workup (e.g. Thrombophilia & JAK2):
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {activeProtocol.specialInvestigations.map((slab) => (
                          <label key={slab} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedSpecialLabs.includes(slab)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedSpecialLabs([...selectedSpecialLabs, slab]);
                                } else {
                                  setSelectedSpecialLabs(
                                    selectedSpecialLabs.filter((l) => l !== slab)
                                  );
                                }
                              }}
                              className="rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
                            />
                            <span className="text-[#3C4043]">{slab}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Embedded Prognostic Calculator (Rotterdam Criteria for BCS) */}
                {activeProtocol.calculatorType === "rotterdam" && (
                  <div className="p-3 rounded-lg border border-[#FEEFC3] bg-[#FEF7E0]/40 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#202124] text-[11px]">
                        Rotterdam Prognostic Calculator (Budd-Chiari Syndrome)
                      </span>
                      <span className="font-mono font-bold text-xs text-[#C5221F]">
                        Score: {rotterdamResult.score} ({rotterdamResult.riskClass} • {rotterdamResult.riskLevel})
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-[#5F6368]">
                          Encephalopathy
                        </label>
                        <select
                          value={calcEnceph}
                          onChange={(e) => setCalcEnceph(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded border border-[#DADCE0] bg-[#FFFFFF]"
                        >
                          <option value={0}>Absent (0)</option>
                          <option value={1}>Present (1)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-[#5F6368]">
                          Ascites
                        </label>
                        <select
                          value={calcAscites}
                          onChange={(e) => setCalcAscites(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded border border-[#DADCE0] bg-[#FFFFFF]"
                        >
                          <option value={0}>None / Mild (0)</option>
                          <option value={1}>Moderate / Tense (1)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-[#5F6368]">
                          PT / INR Ratio
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={calcInr}
                          onChange={(e) => setCalcInr(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded border border-[#DADCE0] bg-[#FFFFFF]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-[#5F6368]">
                          Total Bilirubin (mg/dL)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={calcBili}
                          onChange={(e) => setCalcBili(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded border border-[#DADCE0] bg-[#FFFFFF]"
                        />
                      </div>
                    </div>

                    <p className="text-[11px] text-[#C5221F] font-semibold">
                      Recommendation: {rotterdamResult.recommendation}
                    </p>
                  </div>
                )}

                {/* Pre-Scan Anatomical Checklist */}
                <div className="p-3 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] space-y-2">
                  <p className="font-bold text-[#202124] text-[11px]">
                    Pre-Scan Anatomical Checklist (Cross-Sectional Imaging):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProtocol.preScanAnatomyChecklist.map((item) => (
                      <div key={item.id}>
                        <label className="block text-[10px] font-semibold text-[#5F6368] mb-0.5">
                          {item.label}
                        </label>
                        <select
                          value={preScanAnswers[item.id] || item.defaultSelected}
                          onChange={(e) =>
                            setPreScanAnswers({
                              ...preScanAnswers,
                              [item.id]: e.target.value,
                            })
                          }
                          className="w-full px-2.5 py-1.5 rounded border border-[#DADCE0] bg-[#FFFFFF] text-xs"
                        >
                          {item.options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modifiable Hardware Requisition */}
                <div className="p-3 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] space-y-2">
                  <p className="font-bold text-[#202124] text-[11px] flex items-center justify-between">
                    <span>Modifiable Hardware Requisition Checklist:</span>
                    <span className="text-[#5F6368] font-normal">Check required items</span>
                  </p>
                  <div className="space-y-1.5">
                    {hardwareItems.map((h) => (
                      <label key={h.id} className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={h.checked}
                          onChange={(e) => {
                            setHardwareItems(
                              hardwareItems.map((item) =>
                                item.id === h.id ? { ...item, checked: e.target.checked } : item
                              )
                            );
                          }}
                          className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#202124]">{h.item}: </span>
                          <span className="text-[#5F6368]">{h.spec}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Add Custom Hardware Item */}
                  <div className="pt-2 border-t border-[#DADCE0] flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Custom Hardware Name..."
                      value={customHardwareItem}
                      onChange={(e) => setCustomHardwareItem(e.target.value)}
                      className="flex-1 px-2.5 py-1.5 rounded border border-[#DADCE0] text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Specification / Size..."
                      value={customHardwareSpec}
                      onChange={(e) => setCustomHardwareSpec(e.target.value)}
                      className="flex-1 px-2.5 py-1.5 rounded border border-[#DADCE0] text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customHardwareItem.trim()) {
                          setHardwareItems([
                            ...hardwareItems,
                            {
                              id: `custom-${Date.now()}`,
                              item: customHardwareItem.trim(),
                              spec: customHardwareSpec.trim() || "Standard",
                              checked: true,
                            },
                          ]);
                          setCustomHardwareItem("");
                          setCustomHardwareSpec("");
                        }
                      }}
                      className="px-3 py-1.5 rounded bg-[#F1F3F4] hover:bg-[#DADCE0] text-[#202124] font-semibold text-xs cursor-pointer"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>

                {/* Post-Op Care & Drug Protocol Preview */}
                <div className="p-3 rounded-lg border border-[#DADCE0] bg-[#F8F9FA] space-y-1.5 text-xs">
                  <p className="font-bold text-[#202124] text-[11px]">
                    Post-Operative Care & Anticoagulation Protocol:
                  </p>
                  <ul className="list-disc pl-4 text-[#5F6368] space-y-0.5">
                    {activeProtocol.postOpCare.drugs.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#DADCE0]">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F1F3F4] font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold transition-colors cursor-pointer shadow-xs"
                >
                  Confirm & Save Case Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Reschedule Modal */}
      {rescheduleModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl w-full max-w-md shadow-xl p-5 relative">
            <button
              onClick={() => setRescheduleModalCase(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base font-bold text-[#202124] mb-1">
              Reschedule Procedure Slot
            </h3>
            <p className="text-xs text-[#5F6368] mb-4">
              Patient: <strong>{rescheduleModalCase.patientName}</strong> ({rescheduleModalCase.ssoNumber})
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newRescheduleDate) {
                  rescheduleCase(
                    rescheduleModalCase.id,
                    newRescheduleDate,
                    rescheduleReason || "OPD Rescheduled by Resident"
                  );
                  setRescheduleModalCase(null);
                  setRescheduleReason("");
                }
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  New Scheduled Date *
                </label>
                <input
                  type="date"
                  required
                  value={newRescheduleDate}
                  onChange={(e) => setNewRescheduleDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">
                  Clinical Reschedule Reason
                </label>
                <input
                  type="text"
                  placeholder="e.g. Awaiting platelet transfusion, patient requested deferral..."
                  value={rescheduleReason}
                  onChange={(e) => setRescheduleReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setRescheduleModalCase(null)}
                  className="px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F1F3F4] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold cursor-pointer"
                >
                  Save New Date
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Printable Pre-Op Booking Summary Modal */}
      {printSummaryCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl w-full max-w-2xl shadow-2xl p-6 sm:p-8 relative my-8 text-[#202124]">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1A73E8] text-white flex items-center justify-center font-bold text-sm">
                  SMS
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#202124]">
                    SMS Medical College & Attached Hospitals, Jaipur
                  </h3>
                  <p className="text-xs text-[#5F6368]">
                    Department of Radiodiagnosis & Interventional Radiology • Cath-Lab Booking Requisition
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPrintSummaryCase(null)}
                className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Printable Content */}
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                <div>
                  <p><strong>Patient Name:</strong> {printSummaryCase.patientName}</p>
                  <p><strong>Age / Sex:</strong> {printSummaryCase.age}y / {printSummaryCase.sex}</p>
                  <p><strong>Contact:</strong> {printSummaryCase.contactNumber}</p>
                  <p><strong>Location:</strong> {printSummaryCase.location}</p>
                </div>
                <div>
                  <p><strong>CR / SSO ID:</strong> {printSummaryCase.ssoNumber}</p>
                  <p><strong>Scheduled Slot:</strong> {printSummaryCase.scheduledDate}</p>
                  <p><strong>Booked By:</strong> {printSummaryCase.bookedBy}</p>
                  <p><strong>Status:</strong> {printSummaryCase.status}</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm text-[#1A73E8]">{printSummaryCase.procedureTitle}</p>
                <p className="text-[#5F6368]">{printSummaryCase.organSystem}</p>
              </div>

              {printSummaryCase.rotterdamScore && (
                <div className="p-2.5 rounded border border-[#FEEFC3] bg-[#FEF7E0]/50">
                  <p className="font-bold text-[#B06000]">
                    Rotterdam Risk Assessment: Score {printSummaryCase.rotterdamScore.score} ({printSummaryCase.rotterdamScore.classLevel})
                  </p>
                  <p className="text-[#5F6368]">
                    1-Year Survival Prediction: {printSummaryCase.rotterdamScore.oneYearSurvival}
                  </p>
                </div>
              )}

              <div>
                <p className="font-bold text-xs uppercase text-[#3C4043] mb-1">Pre-Scan Anatomical Roadmap:</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  {Object.entries(printSummaryCase.preScanAnatomy).map(([key, val]) => (
                    <div key={key} className="p-1.5 rounded border border-[#DADCE0]">
                      <span className="font-semibold capitalize text-[#5F6368]">{key.replace("_", " ")}: </span>
                      <span className="text-[#202124]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-xs uppercase text-[#3C4043] mb-1">Requisitioned Hardware Checklist:</p>
                <div className="space-y-1">
                  {printSummaryCase.hardwareChecklist.map((h) => (
                    <div key={h.id} className="flex items-center gap-2 text-[11px]">
                      <span className={h.checked ? "text-[#137333] font-bold" : "text-[#5F6368]"}>
                        {h.checked ? "✓" : "○"} {h.item} ({h.spec})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#F8F9FA] border border-[#DADCE0]">
                <p className="font-bold text-xs mb-1">Post-Operative Regimen:</p>
                <p className="text-[#5F6368] text-[11px] leading-relaxed">{printSummaryCase.postOpPlan}</p>
              </div>

              <div className="pt-6 border-t border-[#DADCE0] grid grid-cols-2 gap-8 text-center text-xs text-[#5F6368]">
                <div>
                  <div className="border-b border-[#DADCE0] pb-6" />
                  <p className="mt-1 font-semibold">Dr. Neel Yadav (DM Resident)</p>
                </div>
                <div>
                  <div className="border-b border-[#DADCE0] pb-6" />
                  <p className="mt-1 font-semibold">Faculty Supervisor Sign-off</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-[#DADCE0]">
              <button
                onClick={() => setPrintSummaryCase(null)}
                className="px-4 py-1.5 rounded-lg border border-[#DADCE0] bg-[#FFFFFF] text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Summary</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Patient Clinical Dossier Modal */}
      {selectedDossierPatient && (
        <PatientDossierModal
          patient={selectedDossierPatient}
          isOpen={true}
          onClose={() => setSelectedDossierPatient(null)}
        />
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="flex items-center gap-2 text-sm text-[#5F6368]">
            <div className="w-5 h-5 border-2 border-[#1A73E8] border-t-transparent rounded-full animate-spin" />
            <span>Loading VascFlow Dashboard...</span>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}

