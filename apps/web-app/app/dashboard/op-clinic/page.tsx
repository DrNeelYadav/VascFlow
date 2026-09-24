"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  useEndoflowStore,
  CtReviewRecord,
  EndoflowPatient,
} from "../useEndoflowStore";
import { ClinicalDisposition } from "../../types/clinical";
import {
  IR_CLINICAL_PROTOCOLS,
} from "@vascule/catalog";
import {
  INSTITUTIONAL_STAFF_ACCOUNTS,
} from "../../lib/staffAccounts";
import {
  getHolidayForDate,
} from "../../lib/rajasthanHolidays2026";
import {
  getScheduledRadiationTasks,
  RadiationSentinelTask,
} from "../../lib/censusEngine";
import {
  Stethoscope,
  BedDouble,
  CalendarPlus,
  Search,
  Eye,
  CheckCircle2,
  Plus,
  X,
  Building,
  Phone,
  Calendar,
  AlertTriangle,
  Radio,
  ClipboardList,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  UserCheck,
  FileText,
  Clock,
  Layers,
  Activity,
  History,
  ShieldAlert,
  Zap,
  Pause,
  Play,
} from "lucide-react";

export const BLANK_PATIENT_FORM = {
  patientName: "",
  age: "" as unknown as number,
  sex: "Male" as "Male" | "Female",
  contactNumber: "",
  residentContact: "",
  referringDepartment: "Gastroenterology & Hepatology",
  urgencyCategory: "Routine / Non-Urgent",
  accessionNumber: "",
  hospitalSource: "SONI Hospital",
  organSystem: "Liver & Hepatobiliary",
  diseaseKey: "budd_chiari_dips",
  customProcedureTitle: "",
  primaryDiagnosis: "",
  clinicalHistory: "",
  cectFindings: "",
  disposition: "ADMIT_WARD_PREOP" as ClinicalDisposition,
  sosTriggerSymptoms: "",
};

export default function OpClinicConsultationDeskPage() {
  const {
    ctReviews,
    addCtReview,
    updateCtReview,
    convertCtReviewToBooking,
    postponeCtReview,
    holdCtReview,
    reactivateCtReview,
    patients,
    admitPatient,
    beds,
    updateBed,
    bookCase,
    bookedCases,
    currentStaff,
    syncAlert,
    clearSyncAlert,
  } = useEndoflowStore();

  const activeStaff =
    currentStaff ||
    INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "DM01") ||
    INSTITUTIONAL_STAFF_ACCOUNTS[0];

  // Selected Mode: "desk" (Consultation Desk) or "queue" (Review Queue Directory)
  const [activeTab, setActiveTab] = useState<"desk" | "queue">("desk");

  // Patient Selector State - default to clean "new" patient intake
  const [selectedPatientKey, setSelectedPatientKey] = useState<string>("new");

  // Form Fields for Active Consultation - initialized strictly blank
  const [patientName, setPatientName] = useState<string>(BLANK_PATIENT_FORM.patientName);
  const [age, setAge] = useState<number | string>("");
  const [sex, setSex] = useState<"Male" | "Female">(BLANK_PATIENT_FORM.sex);
  const [contactNumber, setContactNumber] = useState<string>(BLANK_PATIENT_FORM.contactNumber);
  const [residentContact, setResidentContact] = useState<string>(BLANK_PATIENT_FORM.residentContact);
  const [referringDepartment, setReferringDepartment] = useState<string>(BLANK_PATIENT_FORM.referringDepartment);
  const [urgencyCategory, setUrgencyCategory] = useState<string>(BLANK_PATIENT_FORM.urgencyCategory);
  const [accessionNumber, setAccessionNumber] = useState<string>(BLANK_PATIENT_FORM.accessionNumber);
  const [hospitalSource, setHospitalSource] = useState<string>(BLANK_PATIENT_FORM.hospitalSource);
  const [organSystem, setOrganSystem] = useState<string>(BLANK_PATIENT_FORM.organSystem);
  const [diseaseKey, setDiseaseKey] = useState<string>(BLANK_PATIENT_FORM.diseaseKey);
  const [customProcedureTitle, setCustomProcedureTitle] = useState<string>(BLANK_PATIENT_FORM.customProcedureTitle);
  const [primaryDiagnosis, setPrimaryDiagnosis] = useState<string>(BLANK_PATIENT_FORM.primaryDiagnosis);

  // Key Clinical History & Imaging Blocks
  const [clinicalHistory, setClinicalHistory] = useState<string>(BLANK_PATIENT_FORM.clinicalHistory);
  const [cectFindings, setCectFindings] = useState<string>(BLANK_PATIENT_FORM.cectFindings);

  // Multi-Track Clinical Disposition Matrix State
  const [disposition, setDisposition] = useState<ClinicalDisposition>(BLANK_PATIENT_FORM.disposition);
  const [sosTriggerSymptoms, setSosTriggerSymptoms] = useState<string>(BLANK_PATIENT_FORM.sosTriggerSymptoms);

  // Filtering & Search for Queue
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // 2-Step Booking Workflow States
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [bookingStep, setBookingStep] = useState<1 | 2>(1);
  const [urgencyLevel, setUrgencyLevel] = useState<"Elective" | "Urgent" | "Emergency">("Elective");
  const [bookingDate, setBookingDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [calendarViewDate, setCalendarViewDate] = useState<Date>(
    () => new Date("2026-09-21T00:00:00")
  );
  const [successBanner, setSuccessBanner] = useState<{
    message: string;
    linkHref?: string;
    linkLabel?: string;
  } | null>(null);
  const [sentinelTasks, setSentinelTasks] = useState<RadiationSentinelTask[]>([]);

  // Action Popover State for Review Queue
  const [activePopover, setActivePopover] = useState<{ id: string; type: "contact" | "date" | "postpone" } | null>(null);
  const [popoverInput, setPopoverInput] = useState<string>("");
  const [popoverReason, setPopoverReason] = useState<string>("");

  useEffect(() => {
    setSentinelTasks(getScheduledRadiationTasks());
  }, []);

  // Holiday check on Cath-Lab booking date
  const bookingDateHoliday = useMemo(() => {
    return getHolidayForDate(bookingDate);
  }, [bookingDate]);

  // Authentic Patients Directory (combined list for selection)
  const availablePatients = useMemo(() => {
    const list: { id: string; label: string; type: "review" | "admitted"; data: any }[] = [];

    ctReviews.forEach((r) => {
      list.push({
        id: r.id,
        label: `${r.patientName} (${r.age}y / ${r.sex}) • ${r.primaryDiagnosis.substring(0, 30)}... [${r.status}]`,
        type: "review",
        data: r,
      });
    });

    patients.forEach((p) => {
      list.push({
        id: p.id,
        label: `${p.name} (${p.age}y / ${p.sex}) • ${p.procedure.substring(0, 30)}... [${p.status}]`,
        type: "admitted",
        data: p,
      });
    });

    return list;
  }, [ctReviews, patients]);

  // Load Patient Data into Consultation Desk - clean zero-ghost loading
  const loadPatientIntoDesk = (key: string) => {
    setSelectedPatientKey(key);

    if (key === "new") {
      setPatientName(BLANK_PATIENT_FORM.patientName);
      setAge("");
      setSex(BLANK_PATIENT_FORM.sex);
      setContactNumber(BLANK_PATIENT_FORM.contactNumber);
      setResidentContact(BLANK_PATIENT_FORM.residentContact);
      setReferringDepartment(BLANK_PATIENT_FORM.referringDepartment);
      setUrgencyCategory(BLANK_PATIENT_FORM.urgencyCategory);
      setAccessionNumber(BLANK_PATIENT_FORM.accessionNumber);
      setHospitalSource(BLANK_PATIENT_FORM.hospitalSource);
      setOrganSystem(BLANK_PATIENT_FORM.organSystem);
      setDiseaseKey(BLANK_PATIENT_FORM.diseaseKey);
      setCustomProcedureTitle(BLANK_PATIENT_FORM.customProcedureTitle);
      setPrimaryDiagnosis(BLANK_PATIENT_FORM.primaryDiagnosis);
      setClinicalHistory(BLANK_PATIENT_FORM.clinicalHistory);
      setCectFindings(BLANK_PATIENT_FORM.cectFindings);
      setDisposition(BLANK_PATIENT_FORM.disposition);
      setSosTriggerSymptoms(BLANK_PATIENT_FORM.sosTriggerSymptoms);
      return;
    }

    // Find in CT Reviews
    const review = ctReviews.find((r) => r.id === key);
    if (review) {
      setPatientName(review.patientName || "");
      setAge(review.age ?? "");
      setSex(review.sex || "Male");
      setContactNumber(review.contactNumber || "");
      setResidentContact(review.residentContact || "");
      setReferringDepartment(review.referringDepartment || "Gastroenterology & Hepatology");
      setUrgencyCategory(review.urgencyCategory || "Routine / Non-Urgent");
      setAccessionNumber(review.accessionNumber || review.ctNumber || "");
      setHospitalSource(review.hospitalSource || "SONI Hospital");
      setOrganSystem(review.organSystem || "Liver & Hepatobiliary");
      setDiseaseKey(review.diseaseKey || "budd_chiari_dips");
      setCustomProcedureTitle(review.customProcedureTitle || "");
      setPrimaryDiagnosis(review.primaryDiagnosis || "");
      setClinicalHistory(review.clinicalHistory || review.clinicalHistory3Months || review.presentingComplaints || "");
      setCectFindings(review.cectFindings || review.ctReviewNotes || "");
      setDisposition(review.disposition || "ADMIT_WARD_PREOP");
      setSosTriggerSymptoms(review.sosTriggerSymptoms || "");
      return;
    }

    // Find in Admitted Patients
    const patient = patients.find((p) => p.id === key);
    if (patient) {
      setPatientName(patient.name || "");
      setAge(patient.age ?? "");
      setSex(patient.sex || "Male");
      setContactNumber(patient.phone || "");
      setResidentContact("");
      setReferringDepartment("Gastroenterology & Hepatology");
      setUrgencyCategory("Routine / Non-Urgent");
      setAccessionNumber(patient.scanId || "");
      setHospitalSource("SONI Hospital");
      setDiseaseKey(patient.procedureKey);
      const proto = IR_CLINICAL_PROTOCOLS.find((pr) => pr.key === patient.procedureKey);
      if (proto) {
        setOrganSystem(proto.organSystem);
      } else {
        setOrganSystem("Others");
      }
      setCustomProcedureTitle(patient.procedure || "");
      setPrimaryDiagnosis(patient.procedure || "");
      setClinicalHistory(patient.clinicalHistory3Months || patient.history3Months || patient.chiefComplaints || patient.summary || "");
      setCectFindings(patient.cectFindings || "");
      setDisposition(patient.disposition || "ADMIT_WARD_PREOP");
      setSosTriggerSymptoms(patient.sosTriggerSymptoms || "");
    }
  };

  // Initial load on mount - initializes desk cleanly
  useEffect(() => {
    loadPatientIntoDesk("new");
  }, []);

  // Filtered Reviews for Queue Directory
  const filteredReviews = useMemo(() => {
    return ctReviews.filter((r) => {
      if (selectedCenter !== "all" && r.hospitalSource !== selectedCenter) return false;
      if (selectedStatus !== "all" && r.status !== selectedStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          r.patientName.toLowerCase().includes(q) ||
          r.ctNumber.toLowerCase().includes(q) ||
          r.smsBillId.toLowerCase().includes(q) ||
          r.primaryDiagnosis.toLowerCase().includes(q) ||
          (r.clinicalHistory && r.clinicalHistory.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [ctReviews, selectedCenter, selectedStatus, searchQuery]);

  // Selected Procedure Protocol Details
  const matchedProtocol = useMemo(() => {
    return (
      IR_CLINICAL_PROTOCOLS.find((p) => p.key === diseaseKey) ||
      IR_CLINICAL_PROTOCOLS[0]
    );
  }, [diseaseKey]);

  const effectiveProcedureTitle = useMemo(() => {
    if (organSystem === "Others") {
      return customProcedureTitle.trim() || "Interventional Radiology Procedure";
    }
    return matchedProtocol?.title || "Interventional Radiology Procedure";
  }, [organSystem, customProcedureTitle, matchedProtocol]);

  const effectiveDiseaseKey = useMemo(() => {
    if (organSystem === "Others") {
      return "custom_procedure";
    }
    return diseaseKey || "custom_procedure";
  }, [organSystem, diseaseKey]);

  // ==========================================================================
  // ACTION 1: MULTI-TRACK CLINICAL DISPOSITION (STRICT 8-BED INTEGRITY)
  // ==========================================================================
  const handleApplyDisposition = () => {
    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const generatedSeq = Date.now().toString().slice(-4);
    const generatedHid = `SMS-2026-${generatedSeq}`;
    const generatedScanId = accessionNumber.trim() || `SONI-ACC-2026-${generatedSeq}`;
    const newPatientId = selectedPatientKey.startsWith("PT")
      ? selectedPatientKey
      : `PT-OPD-${generatedSeq}`;

    // Track 1: Inpatient Ward Admission - STRICTLY THE ONLY DISPOSITION that allocates an 8-bed slot
    if (disposition === "ADMIT_WARD_PREOP") {
      const vacantBed = beds.find((b) => b.status === "vacant");
      if (!vacantBed) {
        alert("All 8 Ward/ICU beds are currently occupied. Please discharge or transfer an inpatient first.");
        return;
      }

      const newPatientRecord: EndoflowPatient = {
        id: newPatientId,
        name: effectiveName,
        age: Number(age) || 0,
        sex,
        hid: generatedHid,
        scanId: generatedScanId,
        phone: contactNumber.trim() || "",
        unit: `Unit I / Interventional Radiology (${vacantBed.title})`,
        postedBy: `${activeStaff.name} (${activeStaff.code})`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        summary: `${primaryDiagnosis.trim() || effectiveProcedureTitle}. History: ${clinicalHistory.trim()}`,
        history3Months: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        chiefComplaints: clinicalHistory.trim(),
        cectFindings: cectFindings.trim(),
        procedureKey: effectiveDiseaseKey,
        procedure: effectiveProcedureTitle,
        modality: "CT",
        status: "Pre-Op Pending",
        scheme: "MAAY",
        schemeTid: "TID-9482103",
        beneficiaryId: "Jan Aadhaar 7821-9482-10",
        preAuthStatus: "Approved",
        disposition: "ADMIT_WARD_PREOP",
        sosTriggerSymptoms: "",
        ipd: {
          admissionType: "IPD",
          ward: vacantBed.type === "ICU" ? "Liver ICU" : "IR Ward D-Block",
          bed: vacantBed.title,
          podDay: "Pre-Op",
        },
        labs: {
          ast: 25, alt: 25, bili: 0.8, ldh: 180, alb: 4.0, creat: 0.9,
          inr: 1.1, plt: 220000, fib: 280, protc: 85, prots: 90, ascitesGrade: "none",
        },
        preOp: {
          bedLocation: vacantBed.title,
          npoHours: 6,
          inrChecked: true,
          creatinineChecked: true,
          consentSigned: true,
          ivCannulaGauge: "18G Green",
          calledToLab: false,
          labCleared: true,
        },
      };

      admitPatient(newPatientRecord);

      updateBed(vacantBed.id, {
        status: "occupied",
        ptName: effectiveName,
        crNo: generatedHid,
        diag: effectiveProcedureTitle,
        doctor: activeStaff.name,
        ptId: newPatientId,
      });

      if (selectedPatientKey.startsWith("CT-REV")) {
        updateCtReview(selectedPatientKey, {
          status: "To be reviewed by consultant",
          reviewedBy: activeStaff.name,
          reviewedAt: new Date().toLocaleDateString("en-IN"),
          disposition: "ADMIT_WARD_PREOP",
        });
      }

      setSuccessBanner({
        message: `Patient ${effectiveName} admitted to ${vacantBed.title}. Ward Bed Board slot assigned.`,
        linkHref: "/dashboard/bed-board",
        linkLabel: "Open Ward & Bed Board →",
      });
      setTimeout(() => setSuccessBanner(null), 6000);
      return;
    }

    // Track 2: STAT Cath-Lab Immediate Activation (Emergency - Zero Ward Bed Allocation)
    if (disposition === "STAT_CATH_LAB") {
      const newPatientRecord: EndoflowPatient = {
        id: newPatientId,
        name: effectiveName,
        age: Number(age) || 0,
        sex,
        hid: generatedHid,
        scanId: generatedScanId,
        phone: contactNumber.trim() || "",
        unit: "Cath Lab (Philips Azurion) STAT Table",
        postedBy: `${activeStaff.name} (${activeStaff.code})`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        summary: `STAT Emergency Activation: ${primaryDiagnosis.trim() || effectiveProcedureTitle}. History: ${clinicalHistory.trim()}`,
        history3Months: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        chiefComplaints: clinicalHistory.trim(),
        cectFindings: cectFindings.trim(),
        procedureKey: effectiveDiseaseKey,
        procedure: effectiveProcedureTitle,
        modality: "XA",
        status: "In Cath-Lab",
        scheme: "MAAY",
        schemeTid: "TID-STAT-EMERGENCY",
        beneficiaryId: "Emergency Fast-Path",
        preAuthStatus: "Emergency Pre-Auth",
        disposition: "STAT_CATH_LAB",
        sosTriggerSymptoms: "",
        ipd: {
          admissionType: "STAT_CATH_LAB",
          ward: "Cath Lab Angiosuite",
          bed: "Angio Table 01",
          podDay: "Emergent",
        },
        labs: {
          ast: 25, alt: 25, bili: 0.8, ldh: 180, alb: 4.0, creat: 0.9,
          inr: 1.1, plt: 220000, fib: 280, protc: 85, prots: 90, ascitesGrade: "none",
        },
        preOp: {
          bedLocation: "Cath-Lab Direct Table",
          npoHours: 0,
          inrChecked: true,
          creatinineChecked: true,
          consentSigned: true,
          ivCannulaGauge: "16G Grey",
          calledToLab: true,
          labCleared: true,
        },
      };

      admitPatient(newPatientRecord);

      if (selectedPatientKey.startsWith("CT-REV")) {
        updateCtReview(selectedPatientKey, {
          status: "Booked in Cath-Lab",
          reviewedBy: activeStaff.name,
          reviewedAt: new Date().toLocaleDateString("en-IN"),
          disposition: "STAT_CATH_LAB",
        });
      }

      setSuccessBanner({
        message: `🚨 STAT Cath-Lab Activated for ${effectiveName}! Transferred directly to Table without locking Ward beds.`,
      });
      setTimeout(() => setSuccessBanner(null), 6000);
      return;
    }

    // Track 3: Elective Outpatient Day-Care Procedure (Zero Ward Bed Allocation)
    if (disposition === "ELECTIVE_OUTPATIENT") {
      setShowBookingModal(true);
      return;
    }

    // Tracks 4, 5, 6: NO_INTERVENTION_NEEDED, DEFERRED_REVIEW_SOS, SURVEILLANCE_PROTOCOL
    // Zero Ward Bed Allocation
    if (selectedPatientKey.startsWith("CT-REV")) {
      updateCtReview(selectedPatientKey, {
        patientName: effectiveName,
        age: Number(age) || 0,
        sex,
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        smsBillId: generatedHid,
        ctNumber: generatedScanId,
        accessionNumber: generatedScanId,
        hospitalSource: "SONI Hospital",
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        primaryDiagnosis: primaryDiagnosis.trim() || effectiveProcedureTitle,
        presentingComplaints: clinicalHistory.trim(),
        clinicalHistory: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        status: disposition === "NO_INTERVENTION_NEEDED" ? "Pending Review" : "Reviewed by Neel / Nilesh",
        disposition,
        sosTriggerSymptoms: disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
        reviewedBy: activeStaff.name,
        reviewedAt: new Date().toLocaleDateString("en-IN"),
      });
    } else {
      addCtReview({
        patientName: effectiveName,
        age: Number(age) || 0,
        sex,
        date: new Date().toISOString().split("T")[0],
        primaryDiagnosis: primaryDiagnosis.trim() || effectiveProcedureTitle,
        clinicalHistory: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        presentingComplaints: clinicalHistory.trim(),
        ctNumber: generatedScanId,
        accessionNumber: generatedScanId,
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        status: "Pending Review",
        smsBillId: generatedHid,
        hospitalSource: "SONI Hospital",
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        sosTriggerSymptoms: disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
      });
    }

    const dispositionFeedback: Record<ClinicalDisposition, string> = {
      STAT_CATH_LAB: "STAT Cath-Lab Activated",
      ADMIT_WARD_PREOP: "Ward Bed Assigned",
      ELECTIVE_OUTPATIENT: "Elective Day-Care",
      NO_INTERVENTION_NEEDED: "Conservative Referral Logged (Zero Ward Beds Occupied)",
      DEFERRED_REVIEW_SOS: `Deferred Review on SOS Triggers [${sosTriggerSymptoms.trim() || "Progression"}] (Zero Ward Beds Occupied)`,
      SURVEILLANCE_PROTOCOL: "Interval Surveillance Protocol Enrolled (Zero Ward Beds Occupied)",
    };

    setSuccessBanner({
      message: `Clinical Disposition applied: ${dispositionFeedback[disposition]} for ${effectiveName}.`,
    });
    setTimeout(() => setSuccessBanner(null), 6000);
  };

  const handleAdmitToWard = () => {
    setDisposition("ADMIT_WARD_PREOP");
    handleApplyDisposition();
  };

  // ==========================================================================
  // ACTION 2: BOOK FOR CATH-LAB
  // ==========================================================================
  const handleConfirmCathLabBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const effectiveDate = bookingDate || new Date().toISOString().split("T")[0];
    const generatedSeq = Date.now().toString().slice(-4);
    const generatedSso = `SMS-2026-${generatedSeq}`;
    const generatedAcc = accessionNumber.trim() || `SONI-ACC-2026-${generatedSeq}`;

    if (selectedPatientKey.startsWith("CT-REV")) {
      // Transition existing CT review record
      const result = convertCtReviewToBooking(
        selectedPatientKey,
        effectiveDate,
        effectiveDiseaseKey,
        effectiveProcedureTitle,
        `${activeStaff.name} (${activeStaff.code})`
      );

      if (result.success) {
        setShowBookingModal(false);
        setBookingStep(1);
        setSuccessBanner({
          message: `Cath-Lab Case Booked (${urgencyCategory})! ${effectiveName} scheduled for ${effectiveDate} with ${effectiveProcedureTitle}.`,
          linkHref: "/dashboard/calendar",
          linkLabel: "View in Visual OT Calendar →",
        });
        setTimeout(() => setSuccessBanner(null), 6000);
      }
    } else {
      // New consult or existing admitted patient -> bookCase
      const bookingResult = bookCase({
        patientName: effectiveName,
        age: Number(age) || 0,
        sex,
        contactNumber: contactNumber.trim() || "",
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || urgencyLevel,
        customProcedureTitle: organSystem === "Others" ? (customProcedureTitle.trim() || undefined) : undefined,
        ssoNumber: generatedSso,
        accessionNumber: generatedAcc,
        location: "Jaipur",
        scheduledDate: effectiveDate,
        urgency: urgencyCategory || urgencyLevel,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        sosTriggerSymptoms: disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
        bookedBy: `${activeStaff.name} (${activeStaff.code})`,
        orderedLabs: [
          "Liver Function Tests (Total & Direct Bilirubin, AST, ALT, Albumin)",
          "Renal Function Tests (Serum Creatinine, BUN, Electrolytes)",
          "Coagulation Profile (PT, INR, aPTT)",
          "Complete Blood Count (Hb, TLC, Platelets)",
        ],
        specialInvestigations: [
          `PACS Accession #${generatedAcc}: ${cectFindings.trim() || "No CT findings recorded"}`,
          `Clinical History: ${clinicalHistory.trim() || "Clinical course documented."}`,
        ],
        preScanAnatomy: {},
        hardwareChecklist: [
          { id: "h1", item: "Vascular Access Sheath", spec: "6F 45cm Destination Sheath", checked: true },
          { id: "h2", item: "Selective Diagnostic Catheter", spec: "5F Cobra C2 / Simmons 1", checked: true },
          { id: "h3", item: "Hydrophilic Guidewire", spec: "0.035\" 260cm Terumo Glidewire", checked: true },
        ],
        postOpPlan: `Cath-Lab intervention: ${effectiveProcedureTitle}. Clinical History: ${clinicalHistory.trim() || "Standard"}. Pre-procedure hydration & pre-op vitals check verified.`,
        npoVerified: false,
        labsVerified: false,
        bloodProductsVerified: false,
        hardwareVerified: false,
        screenedBy: null,
        screenedAt: null,
        keptForTomorrow: false,
        admissionCardUpdated: false,
        codeAdditionStatus: "Pending",
      });

      if (bookingResult.success) {
        setShowBookingModal(false);
        setBookingStep(1);
        setSuccessBanner({
          message: `Cath-Lab Case Booked (${urgencyCategory})! ${effectiveName} scheduled for ${effectiveDate} with ${effectiveProcedureTitle}.`,
          linkHref: "/dashboard/calendar",
          linkLabel: "View in Visual OT Calendar →",
        });
        setTimeout(() => setSuccessBanner(null), 6000);
      }
    }
  };

  // ==========================================================================
  // ACTION 3: SAVE / UPDATE OPD CONSULT IN QUEUE
  // ==========================================================================
  const handleSaveConsult = (e: React.FormEvent) => {
    e.preventDefault();
    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const newSeq = Date.now().toString().slice(-4);
    const generatedAcc = accessionNumber.trim() || `SONI-ACC-2026-${newSeq}`;

    if (selectedPatientKey.startsWith("CT-REV")) {
      updateCtReview(selectedPatientKey, {
        patientName: effectiveName,
        age: Number(age) || 0,
        sex,
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        smsBillId: `SMS-OPD-2026-${newSeq}`,
        ctNumber: generatedAcc,
        accessionNumber: generatedAcc,
        hospitalSource: "SONI Hospital",
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        primaryDiagnosis: primaryDiagnosis.trim() || effectiveProcedureTitle,
        presentingComplaints: clinicalHistory.trim(),
        clinicalHistory: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        disposition,
        sosTriggerSymptoms: disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
        reviewedBy: activeStaff.name,
        reviewedAt: new Date().toLocaleDateString("en-IN"),
      });

      setSuccessBanner({
        message: `OPD Consultation & Triage records updated for ${effectiveName}.`,
      });
      setTimeout(() => setSuccessBanner(null), 4000);
    } else {
      addCtReview({
        patientName: effectiveName,
        age: Number(age) || 0,
        sex,
        date: new Date().toISOString().split("T")[0],
        primaryDiagnosis: primaryDiagnosis.trim() || effectiveProcedureTitle,
        clinicalHistory: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        presentingComplaints: clinicalHistory.trim(),
        ctNumber: generatedAcc,
        accessionNumber: generatedAcc,
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        status: "Pending Review",
        smsBillId: `SMS-OPD-2026-${newSeq}`,
        hospitalSource: "SONI Hospital",
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        sosTriggerSymptoms: disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
      });

      setSuccessBanner({
        message: `New OPD Consultation saved for ${effectiveName}.`,
      });
      setTimeout(() => setSuccessBanner(null), 4000);
    }
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto pb-12">
      {/* 1. Apple-Style Header Banner */}
      <div className="bg-white border border-[#E5E5EA] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center font-bold text-sm shrink-0">
            <Stethoscope className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-[#1C1C1E] tracking-tight">
              OPD Consultation &amp; Triage Desk
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Segmented Control Mode Switcher */}
          <div className="flex items-center bg-[#F2F2F7] p-1 rounded-xl shrink-0 self-stretch sm:self-auto">
            <button
              onClick={() => setActiveTab("desk")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "desk"
                  ? "bg-white text-[#1C1C1E] shadow-xs"
                  : "text-[#8E8E93] hover:text-[#1C1C1E]"
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Consultation Desk</span>
            </button>
            <button
              onClick={() => setActiveTab("queue")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "queue"
                  ? "bg-white text-[#1C1C1E] shadow-xs"
                  : "text-[#8E8E93] hover:text-[#1C1C1E]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Review Queue ({ctReviews.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cloud Sync Failure / Offline Toast */}
      {syncAlert && (
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-medium flex items-center justify-between shadow-xs animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{syncAlert}</span>
          </div>
          <button
            onClick={clearSyncAlert}
            className="px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-[11px] font-bold cursor-pointer transition shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* 2. Success Banner / Notification */}
      {successBanner && (
        <div className="p-3.5 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 text-[#248A3D] text-xs font-medium flex items-center justify-between shadow-xs animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0" />
            <span>{successBanner.message}</span>
          </div>
          {successBanner.linkHref && (
            <Link
              href={successBanner.linkHref}
              className="underline font-semibold hover:opacity-80 transition-opacity ml-2 shrink-0 cursor-pointer"
            >
              {successBanner.linkLabel}
            </Link>
          )}
        </div>
      )}

      {/* 3. High-Dose Fluoroscopy Sentinel Surveillance Tasks */}
      {sentinelTasks.length > 0 && (
        <div className="bg-amber-50/70 border border-amber-300 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 mb-2.5 text-amber-900 font-bold text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>High-Dose Radiation Sentinel Tasks ({sentinelTasks.length})</span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-amber-200 text-amber-900 font-mono font-bold">
              SIR/CIRSE Safety Protocol (≥5.0 Gy / ≥60 min)
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {sentinelTasks.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-amber-200 rounded-xl p-3 flex flex-col justify-between gap-2 text-xs shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-[#1C1C1E]">
                      {t.patientName} (CR: {t.patientCrNo})
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold font-mono">
                      Due: {t.scheduledForDate}
                    </span>
                  </div>
                  <div className="text-[11px] text-amber-800 font-mono mt-1">
                    {t.triggerReason}
                  </div>
                  <p className="text-[11px] text-[#5F6368] mt-1 leading-relaxed">
                    {t.instructions}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-amber-100 text-[10px] text-amber-700 font-semibold">
                  <span>Task: {t.taskType}</span>
                  <span className="text-amber-800 font-mono">Target: {t.targetRoute}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE A: STREAMLINED OPD CONSULTATION DESK */}
      {/* ========================================================================= */}
      {activeTab === "desk" && (
        <div className="space-y-5">
          {/* Consultation Desk Intake Card */}
          <form onSubmit={handleSaveConsult} className="bg-white border border-[#E5E5EA] rounded-2xl p-5 sm:p-6 shadow-xs space-y-6">
            {/* Section 1: Patient Demographics & Accession */}
            <div>
              <div className="border-b border-[#E5E5EA] pb-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  Section 1: Patient Demographics &amp; Accession
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {/* Patient Full Name */}
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="e.g. Bhanwar Lal Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Age & Biological Sex */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Age &amp; Biological Sex
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                      autoComplete="off"
                      data-lpignore="true"
                      placeholder="Age"
                      className="w-20 px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                    />
                    <select
                      value={sex}
                      onChange={(e) => setSex(e.target.value as "Male" | "Female")}
                      className="flex-1 px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                {/* Accession Number / CR Number */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Accession / CR Number
                  </label>
                  <input
                    type="text"
                    value={accessionNumber}
                    onChange={(e) => setAccessionNumber(e.target.value)}
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="e.g. 2026-99214"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-mono focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Contact & Referring Department */}
            <div>
              <div className="border-b border-[#E5E5EA] pb-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  Section 2: Contact &amp; Referring Department
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {/* Patient Contact Number (strictly 10-digit mobile) */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Patient Contact Number
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Resident Contact Number (10-digit mobile) */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Resident Contact Number
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={residentContact}
                    onChange={(e) => setResidentContact(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="Resident 10-digit mobile"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  />
                </div>

                {/* Referring Department */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Referring Department
                  </label>
                  <select
                    value={referringDepartment}
                    onChange={(e) => setReferringDepartment(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  >
                    <option value="Gastroenterology & Hepatology">Gastroenterology &amp; Hepatology</option>
                    <option value="General Surgery">General Surgery</option>
                    <option value="Urology & Renal Transplant">Urology &amp; Renal Transplant</option>
                    <option value="Pulmonary Medicine / Chest TB">Pulmonary Medicine / Chest TB</option>
                    <option value="Obstetrics & Gynecology">Obstetrics &amp; Gynecology</option>
                    <option value="Medical & Surgical Oncology">Medical &amp; Surgical Oncology</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Emergency Medicine & Trauma">Emergency Medicine &amp; Trauma</option>
                    <option value="Nephrology">Nephrology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Neurology & Neurosurgery">Neurology &amp; Neurosurgery</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Other Department">Other Department</option>
                  </select>
                </div>

                {/* Urgency / Priority Category */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Urgency / Priority Category
                  </label>
                  <select
                    value={urgencyCategory}
                    onChange={(e) => setUrgencyCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  >
                    <option value="Routine / Non-Urgent">Routine / Non-Urgent</option>
                    <option value="Early Treatment">Early Treatment</option>
                    <option value="Extensive Disease">Extensive Disease</option>
                    <option value="VIP Patient">VIP Patient</option>
                    <option value="Emergency / STAT">Emergency / STAT</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Clinical Presentation & History */}
            <div>
              <div className="border-b border-[#E5E5EA] pb-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Section 3: Clinical Presentation &amp; History
                </h3>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                  Clinical History &amp; Chief Complaints
                </label>
                <textarea
                  rows={3}
                  value={clinicalHistory}
                  onChange={(e) => setClinicalHistory(e.target.value)}
                  autoComplete="off"
                  data-lpignore="true"
                  placeholder="Presenting symptoms and clinical history..."
                  className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] leading-relaxed focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Section 4: CT Review & Imaging Findings */}
            <div>
              <div className="border-b border-[#E5E5EA] pb-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  Section 4: CT Review &amp; Imaging Findings
                </h3>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                  CT Review / Imaging Findings
                </label>
                <textarea
                  rows={3}
                  value={cectFindings}
                  onChange={(e) => setCectFindings(e.target.value)}
                  autoComplete="off"
                  data-lpignore="true"
                  placeholder="e.g. Triple-phase CECT: Cirrhotic liver morphology, attenuated right and left hepatic veins, marked caudate lobe hypertrophy (>3.5 cm), patent main portal vein with hepatopetal flow. Feasible for transcaval DIPS..."
                  className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] leading-relaxed focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Section 5: Diagnosis & Suggested IR Protocol */}
            <div>
              <div className="border-b border-[#E5E5EA] pb-2 mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Section 5: Diagnosis &amp; Suggested IR Protocol
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Primary Diagnosis
                  </label>
                  <input
                    type="text"
                    value={primaryDiagnosis}
                    onChange={(e) => setPrimaryDiagnosis(e.target.value)}
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="e.g. Budd-Chiari Syndrome with Refractory Ascites (optional)"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                    Organ System
                  </label>
                  <select
                    value={organSystem}
                    onChange={(e) => {
                      const newSys = e.target.value;
                      setOrganSystem(newSys);
                      if (newSys === "Others") {
                        setDiseaseKey("custom_procedure");
                      } else {
                        const first = IR_CLINICAL_PROTOCOLS.find((p) => p.organSystem === newSys);
                        if (first) setDiseaseKey(first.key);
                      }
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                  >
                    <option value="Liver & Hepatobiliary">Liver &amp; Hepatobiliary</option>
                    <option value="Thoracic & Pulmonary">Thoracic &amp; Pulmonary</option>
                    <option value="Gastrointestinal & Mesenteric">Gastrointestinal &amp; Mesenteric</option>
                    <option value="Peripheral Vascular">Peripheral Vascular</option>
                    <option value="Pelvic & Genitourinary">Pelvic &amp; Genitourinary</option>
                    <option value="Venous & Dialysis Access">Venous &amp; Dialysis Access</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  {organSystem === "Others" ? (
                    <div>
                      <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                        Suggested IR Protocol (Custom Entry)
                      </label>
                      <input
                        type="text"
                        value={customProcedureTitle}
                        onChange={(e) => setCustomProcedureTitle(e.target.value)}
                        autoComplete="off"
                        data-lpignore="true"
                        placeholder="e.g. Percutaneous Sclerotherapy / Custom Angio"
                        className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[11px] font-semibold text-[#636366] mb-1">
                        Suggested IR Protocol
                      </label>
                      <select
                        value={diseaseKey}
                        onChange={(e) => setDiseaseKey(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-xs text-[#1C1C1E] font-medium focus:bg-white focus:border-[#007AFF] focus:outline-none transition-colors"
                      >
                        {IR_CLINICAL_PROTOCOLS.filter((p) => p.organSystem === organSystem).map((p) => (
                          <option key={p.key} value={p.key}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 6: Clinical Disposition Matrix (6-Track Framework) */}
            <div>
              <div className="border-b border-[#E5E5EA] pb-2 mb-3 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#007AFF] flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Section 6: Clinical Disposition Matrix (6-Track Framework)
                </h3>
                <span className="text-[11px] text-[#8E8E93] hidden sm:inline">
                  Strict 8-Bed Inpatient Guardrail • Non-inpatient tracks never lock beds
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3">
                {/* 1. STAT Cath-Lab */}
                <button
                  type="button"
                  onClick={() => setDisposition("STAT_CATH_LAB")}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    disposition === "STAT_CATH_LAB"
                      ? "border-[#EA4335] bg-[#EA4335]/10 text-[#C5221F] shadow-xs font-bold ring-1 ring-[#EA4335]"
                      : "border-[#E5E5EA] bg-[#FAFAFA] text-[#636366] hover:border-[#EA4335]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#EA4335]" />
                      STAT Cath-Lab
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8E93] leading-tight">
                    Emergency fast-path direct to table
                  </span>
                </button>

                {/* 2. Admit Ward Pre-Op */}
                <button
                  type="button"
                  onClick={() => setDisposition("ADMIT_WARD_PREOP")}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    disposition === "ADMIT_WARD_PREOP"
                      ? "border-[#5856D6] bg-[#5856D6]/10 text-[#4745B8] shadow-xs font-bold ring-1 ring-[#5856D6]"
                      : "border-[#E5E5EA] bg-[#FAFAFA] text-[#636366] hover:border-[#5856D6]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold flex items-center gap-1">
                      <BedDouble className="w-3 h-3 text-[#5856D6]" />
                      Admit Ward
                    </span>
                    <span className="px-1 py-0.2 rounded text-[9px] bg-purple-200 text-purple-900 font-mono">
                      8-Bed
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8E93] leading-tight">
                    Assigns 1 of 8 beds on Ward Board
                  </span>
                </button>

                {/* 3. Elective Outpatient */}
                <button
                  type="button"
                  onClick={() => setDisposition("ELECTIVE_OUTPATIENT")}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    disposition === "ELECTIVE_OUTPATIENT"
                      ? "border-[#007AFF] bg-[#007AFF]/10 text-[#0062CC] shadow-xs font-bold ring-1 ring-[#007AFF]"
                      : "border-[#E5E5EA] bg-[#FAFAFA] text-[#636366] hover:border-[#007AFF]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold flex items-center gap-1">
                      <CalendarPlus className="w-3 h-3 text-[#007AFF]" />
                      Elective Day-Care
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8E93] leading-tight">
                    Day procedure, zero ward bed locks
                  </span>
                </button>

                {/* 4. No Intervention Needed */}
                <button
                  type="button"
                  onClick={() => setDisposition("NO_INTERVENTION_NEEDED")}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    disposition === "NO_INTERVENTION_NEEDED"
                      ? "border-[#34C759] bg-[#34C759]/10 text-[#248A3D] shadow-xs font-bold ring-1 ring-[#34C759]"
                      : "border-[#E5E5EA] bg-[#FAFAFA] text-[#636366] hover:border-[#34C759]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#34C759]" />
                      Conservative
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8E93] leading-tight">
                    Primary referral / No intervention
                  </span>
                </button>

                {/* 5. Deferred Review SOS */}
                <button
                  type="button"
                  onClick={() => setDisposition("DEFERRED_REVIEW_SOS")}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    disposition === "DEFERRED_REVIEW_SOS"
                      ? "border-[#FF9500] bg-[#FF9500]/10 text-[#C97100] shadow-xs font-bold ring-1 ring-[#FF9500]"
                      : "border-[#E5E5EA] bg-[#FAFAFA] text-[#636366] hover:border-[#FF9500]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-[#FF9500]" />
                      Deferred (SOS)
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8E93] leading-tight">
                    Wait-and-watch on red flags
                  </span>
                </button>

                {/* 6. Surveillance Protocol */}
                <button
                  type="button"
                  onClick={() => setDisposition("SURVEILLANCE_PROTOCOL")}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    disposition === "SURVEILLANCE_PROTOCOL"
                      ? "border-[#32ADE6] bg-[#32ADE6]/10 text-[#0077A6] shadow-xs font-bold ring-1 ring-[#32ADE6]"
                      : "border-[#E5E5EA] bg-[#FAFAFA] text-[#636366] hover:border-[#32ADE6]/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#32ADE6]" />
                      Surveillance
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8E8E93] leading-tight">
                    Interval imaging follow-up
                  </span>
                </button>
              </div>

              {/* Conditional SOS Trigger Symptoms Input */}
              {disposition === "DEFERRED_REVIEW_SOS" && (
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-300 text-xs space-y-1.5 animate-in fade-in">
                  <label className="block text-[11px] font-bold text-amber-950 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    SOS Red-Flag Trigger Symptoms for Urgent Hospital Return *
                  </label>
                  <input
                    type="text"
                    value={sosTriggerSymptoms}
                    onChange={(e) => setSosTriggerSymptoms(e.target.value)}
                    autoComplete="off"
                    data-lpignore="true"
                    placeholder="e.g. Abdominal pain progression, fresh melena/hematemesis, expanding hematoma, sudden Hb drop, high fever..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-amber-300 bg-white font-medium text-amber-950 focus:outline-none focus:border-amber-600"
                  />
                  <p className="text-[10px] text-amber-800">
                    Documenting SOS triggers ensures patient has explicit clinical boundary conditions without occupying an inpatient hospital bed.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Action Strip */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#E5E5EA]">
              <div className="text-[11px] text-[#8E8E93] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Consultant: <strong>{activeStaff.name}</strong> ({activeStaff.code})</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl border border-[#E5E5EA] bg-white hover:bg-[#F2F2F7] text-xs font-semibold text-[#1C1C1E] transition-all cursor-pointer"
                >
                  Save / Update Consult
                </button>
                <button
                  type="button"
                  onClick={handleApplyDisposition}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                    disposition === "STAT_CATH_LAB"
                      ? "bg-[#EA4335] hover:bg-[#D93025]"
                      : disposition === "ADMIT_WARD_PREOP"
                      ? "bg-[#5856D6] hover:bg-[#4745B8]"
                      : "bg-[#007AFF] hover:bg-[#0062CC]"
                  }`}
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>Execute Disposition ({disposition === "ADMIT_WARD_PREOP" ? "Ward Bed" : disposition === "STAT_CATH_LAB" ? "STAT" : "Non-Bed"})</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookingStep(1);
                    setShowBookingModal(true);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#007AFF] bg-white text-[#007AFF] hover:bg-[#007AFF]/10 text-xs font-semibold transition-all cursor-pointer"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Book Cath-Lab</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE B: OPD CT REVIEW QUEUE & DIRECTORY */}
      {/* ========================================================================= */}
      {activeTab === "queue" && (
        <div className="space-y-4">
          {/* Search & Filter Controls */}
          <div className="bg-white border border-[#E5E5EA] rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E8E93]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patient, CT number, SMS Bill ID, diagnosis..."
                className="w-full bg-[#F2F2F7] text-xs rounded-xl pl-9 pr-4 py-2 border border-transparent focus:border-[#007AFF] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <select
                value={selectedCenter}
                onChange={(e) => setSelectedCenter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#F2F2F7] text-xs font-semibold text-[#1C1C1E] focus:outline-none"
              >
                <option value="all">All Imaging Centers</option>
                <option value="SONI Hospital">SONI Hospital PACS</option>
                <option value="SMS Hospital">SMS Hospital CT</option>
                <option value="External PACS">External / Other</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#F2F2F7] text-xs font-semibold text-[#1C1C1E] focus:outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Reviewed by DM Resident">Reviewed by DM Resident</option>
                <option value="To be reviewed by consultant">To be reviewed by consultant</option>
                <option value="Booking Cath-Lab on next available date">Booking Cath-Lab</option>
                <option value="Booked in Cath-Lab">Booked in Cath-Lab</option>
              </select>
            </div>
          </div>

          {/* Queue List Cards */}
          <div className="space-y-3">
            {filteredReviews.length === 0 ? (
              <div className="bg-white border border-[#E5E5EA] rounded-2xl p-12 text-center text-[#8E8E93] space-y-2">
                <Eye className="w-10 h-10 mx-auto text-[#C7C7CC]" />
                <p className="font-semibold text-sm text-[#1C1C1E]">No CT Review records match current filters</p>
                <p className="text-xs">Select or add a new patient to populate the OPD consultation queue.</p>
              </div>
            ) : (
              filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E5E5EA] rounded-2xl p-5 shadow-xs hover:border-[#C7C7CC] transition-all space-y-3"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#E5E5EA] pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-base text-[#1C1C1E]">
                          {item.patientName}
                        </h3>
                        <span className="text-xs text-[#8E8E93]">
                          ({item.age}y / {item.sex})
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#F2F2F7] text-[#3A3A3C]">
                          HID: {item.smsBillId}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase rounded-full ${
                            item.status === "Booked in Cath-Lab"
                              ? "bg-[#34C759]/15 text-[#248A3D]"
                              : item.status === "Deferred / Postponed"
                              ? "bg-amber-100 text-amber-800"
                              : item.status === "On Hold"
                              ? "bg-gray-200 text-gray-800"
                              : item.status === "Pending Review"
                              ? "bg-[#FF9500]/15 text-[#C97100]"
                              : "bg-[#007AFF]/15 text-[#007AFF]"
                          }`}
                        >
                          {item.status}
                        </span>
                        {item.postponedUntilDate && (
                          <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            Postponed until {item.postponedUntilDate}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#8E8E93]">
                        <span className="flex items-center gap-1 font-medium text-[#1C1C1E]">
                          <Building className="w-3.5 h-3.5 text-[#007AFF]" />
                          {item.hospitalSource}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[#1C1C1E]">
                          <Radio className="w-3.5 h-3.5 text-[#FF9500]" />
                          CT #{item.ctNumber}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#34C759]" />
                          {item.contactNumber}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            loadPatientIntoDesk(item.id);
                            setActiveTab("desk");
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E5E5EA] bg-white hover:bg-[#F2F2F7] text-xs font-semibold text-[#1C1C1E] transition-all cursor-pointer"
                        >
                          <ClipboardList className="w-3.5 h-3.5 text-[#8E8E93]" />
                          <span>Open in Desk</span>
                        </button>

                        <button
                          onClick={() => {
                            loadPatientIntoDesk(item.id);
                            setBookingStep(1);
                            setShowBookingModal(true);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#007AFF] hover:bg-[#0062CC] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
                        >
                          <CalendarPlus className="w-3.5 h-3.5" />
                          <span>Book Lab</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* 1. Call Patient Button */}
                        <div className="relative">
                          {item.contactNumber ? (
                            <a
                              href={`tel:${item.contactNumber}`}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 text-[11px] font-semibold transition-all cursor-pointer"
                            >
                              <Phone className="w-3 h-3" />
                              <span>Call Patient</span>
                            </a>
                          ) : (
                            <>
                              <button
                                onClick={() => setActivePopover(activePopover?.id === item.id && activePopover?.type === 'contact' ? null : { id: item.id, type: 'contact' })}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 text-[11px] font-semibold transition-all cursor-pointer"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Add Number</span>
                              </button>
                              {activePopover?.id === item.id && activePopover?.type === 'contact' && (
                                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-[#E5E5EA] rounded-xl shadow-lg p-2 z-10 flex gap-2">
                                  <input 
                                    type="tel"
                                    placeholder="Phone number"
                                    value={popoverInput}
                                    onChange={(e) => setPopoverInput(e.target.value)}
                                    className="flex-1 px-2 py-1 text-xs border border-[#E5E5EA] rounded-lg focus:outline-none focus:border-[#007AFF]"
                                  />
                                  <button
                                    onClick={() => {
                                      updateCtReview(item.id, { contactNumber: popoverInput });
                                      setActivePopover(null);
                                      setPopoverInput("");
                                    }}
                                    className="px-2 py-1 bg-teal-600 text-white text-xs rounded-lg font-semibold cursor-pointer"
                                  >
                                    Save
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        {/* 2. Give Date Button */}
                        <div className="relative">
                          <button
                            onClick={() => setActivePopover(activePopover?.id === item.id && activePopover?.type === 'date' ? null : { id: item.id, type: 'date' })}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-[11px] font-semibold transition-all cursor-pointer"
                          >
                            <CalendarPlus className="w-3 h-3" />
                            <span>Give Date</span>
                          </button>
                          {activePopover?.id === item.id && activePopover?.type === 'date' && (
                            <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-[#E5E5EA] rounded-xl shadow-lg p-2 z-10 space-y-2">
                              <input 
                                type="date"
                                value={popoverInput}
                                onChange={(e) => setPopoverInput(e.target.value)}
                                className="w-full px-2 py-1 text-xs border border-[#E5E5EA] rounded-lg focus:outline-none focus:border-[#007AFF]"
                              />
                              {popoverInput && (getHolidayForDate(popoverInput).isHoliday || getHolidayForDate(popoverInput).isSunday) && (
                                <div className="text-[9px] text-amber-700 bg-amber-50 p-1.5 rounded border border-amber-200 leading-tight">
                                  <AlertTriangle className="w-3 h-3 inline mr-1" />
                                  Holiday/Sunday warning: {getHolidayForDate(popoverInput).name || "Sunday"}
                                </div>
                              )}
                              <button
                                onClick={() => {
                                  convertCtReviewToBooking(item.id, popoverInput, item.diseaseKey || '', item.procedureTitle || 'Elective IR Procedure', activeStaff.name);
                                  setActivePopover(null);
                                  setPopoverInput("");
                                }}
                                disabled={!popoverInput}
                                className="w-full px-2 py-1 bg-blue-600 text-white text-xs rounded-lg font-semibold disabled:opacity-50 cursor-pointer"
                              >
                                Confirm Date
                              </button>
                            </div>
                          )}
                        </div>

                        {/* 3. Postpone / Hold Button */}
                        <div className="relative">
                          <button
                            onClick={() => setActivePopover(activePopover?.id === item.id && activePopover?.type === 'postpone' ? null : { id: item.id, type: 'postpone' })}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 text-[11px] font-semibold transition-all cursor-pointer"
                          >
                            <Pause className="w-3 h-3" />
                            <span>{item.status === "Booked in Cath-Lab" && item.bookedCaseId ? "Reschedule Booking" : "Postpone / Hold"}</span>
                          </button>
                          {activePopover?.id === item.id && activePopover?.type === 'postpone' && (
                            <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-[#E5E5EA] rounded-xl shadow-lg p-3 z-10 space-y-3">
                              {item.status === "Booked in Cath-Lab" && item.bookedCaseId ? (
                                <Link 
                                  href={`/dashboard/calendar?highlight=${item.bookedCaseId}`}
                                  className="block w-full text-center px-2 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded-lg font-semibold"
                                >
                                  Go to Calendar to Reschedule
                                </Link>
                              ) : (
                                <>
                                  <div className="space-y-1.5 pb-2 border-b border-[#E5E5EA]">
                                    <span className="text-[10px] font-bold text-gray-500 block mb-1">POSTPONE TO DATE</span>
                                    <input 
                                      type="date"
                                      value={popoverInput}
                                      onChange={(e) => setPopoverInput(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-[#E5E5EA] rounded-lg focus:outline-none focus:border-[#007AFF]"
                                    />
                                    <input 
                                      type="text"
                                      placeholder="Reason (optional)"
                                      value={popoverReason}
                                      onChange={(e) => setPopoverReason(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-[#E5E5EA] rounded-lg focus:outline-none focus:border-[#007AFF]"
                                    />
                                    <button
                                      onClick={() => {
                                        postponeCtReview(item.id, popoverInput, popoverReason);
                                        setActivePopover(null);
                                        setPopoverInput("");
                                        setPopoverReason("");
                                      }}
                                      disabled={!popoverInput}
                                      className="w-full px-2 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded-lg font-semibold disabled:opacity-50 cursor-pointer"
                                    >
                                      Postpone
                                    </button>
                                  </div>
                                  <div className="space-y-1.5 pt-1">
                                    <span className="text-[10px] font-bold text-gray-500 block mb-1">ON HOLD (INDEFINITE)</span>
                                    <input 
                                      type="text"
                                      placeholder="Reason"
                                      value={popoverReason}
                                      onChange={(e) => setPopoverReason(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-[#E5E5EA] rounded-lg focus:outline-none focus:border-[#007AFF]"
                                    />
                                    <button
                                      onClick={() => {
                                        holdCtReview(item.id, popoverReason);
                                        setActivePopover(null);
                                        setPopoverReason("");
                                      }}
                                      className="w-full px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded-lg font-semibold cursor-pointer"
                                    >
                                      Put On Hold
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>

                        {/* 4. Reactivate Button */}
                        {(item.status === 'Deferred / Postponed' || item.status === 'On Hold') && (
                          <button
                            onClick={() => reactivateCtReview(item.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 text-[11px] font-semibold transition-all cursor-pointer"
                          >
                            <Play className="w-3 h-3" />
                            <span>Reactivate</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-[#8E8E93]">Primary Diagnosis: </span>
                      <span className="font-semibold text-[#1C1C1E]">{item.primaryDiagnosis}</span>
                    </div>

                    {item.clinicalHistory && (
                      <div className="p-2.5 rounded-xl bg-[#F2F2F7]/70 text-xs">
                        <span className="font-bold text-[10px] text-[#636366] uppercase tracking-wider block mb-0.5">
                          3-Month Clinical Course:
                        </span>
                        <p className="text-[#1C1C1E] leading-relaxed">{item.clinicalHistory}</p>
                      </div>
                    )}

                    <div className="p-3 rounded-xl bg-[#007AFF]/5 border border-[#007AFF]/10">
                      <p className="font-bold text-[10px] text-[#007AFF] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        CECT Findings:
                      </p>
                      <p className="text-xs text-[#1C1C1E] leading-relaxed">{item.ctReviewNotes}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: CONFIRM CATH-LAB BOOKING */}
      {/* ========================================================================= */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs p-3 sm:p-4">
          <div className="bg-white border border-[#E5E5EA] rounded-2xl w-full max-w-lg max-h-[90dvh] overflow-y-auto shadow-xl p-4 sm:p-6 relative">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F2F2F7] text-[#8E8E93] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center">
                <CalendarPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#1C1C1E] tracking-tight">
                  Confirm Cath-Lab Booking
                </h3>
                <p className="text-xs text-[#8E8E93]">
                  Schedule patient directly into Cath-Lab Day-Care &amp; RIS Worklist
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F2F2F7] text-xs space-y-1 mb-4">
              <p><strong>Patient:</strong> {patientName.trim() || "OPD Consultation Patient"} ({age || 0}y / {sex})</p>
              <p><strong>Procedure:</strong> {effectiveProcedureTitle}</p>
              <p><strong>Diagnosis:</strong> {primaryDiagnosis.trim() || effectiveProcedureTitle}</p>
              <p><strong>Clinical History:</strong> {clinicalHistory.trim() || "Symptom progression documented."}</p>
              {referringDepartment && <p><strong>Referring Dept:</strong> {referringDepartment}</p>}
              {urgencyCategory && <p><strong>Urgency:</strong> {urgencyCategory}</p>}
            </div>

            <form onSubmit={handleConfirmCathLabBooking} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#636366] mb-1">
                  Scheduled Cath-Lab Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-[#1C1C1E] focus:bg-white focus:border-[#007AFF] focus:outline-none"
                />
              </div>

              {/* Rajasthan Holiday Detection */}
              {(bookingDateHoliday.isHoliday || bookingDateHoliday.isSunday) && (
                <div className="p-2.5 rounded-xl bg-[#FF9500]/10 border border-[#FF9500]/20 text-[#C97100] flex items-center gap-2 text-[11px]">
                  <AlertTriangle className="w-4 h-4 text-[#FF9500] shrink-0" />
                  <span>
                    <strong>Notice:</strong> {bookingDateHoliday.name || "Sunday"} is a Rajasthan {bookingDateHoliday.type || "Gazetted"} Holiday.
                  </span>
                </div>
              )}

              <div>
                <label className="block font-semibold text-[#636366] mb-1">
                  Procedure Protocol
                </label>
                {organSystem === "Others" ? (
                  <input
                    type="text"
                    value={customProcedureTitle}
                    onChange={(e) => setCustomProcedureTitle(e.target.value)}
                    placeholder="e.g. Custom IR Procedure"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-[#1C1C1E] font-semibold focus:bg-white focus:border-[#007AFF] focus:outline-none"
                  />
                ) : (
                  <select
                    value={diseaseKey}
                    onChange={(e) => setDiseaseKey(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] text-[#1C1C1E] font-semibold focus:bg-white focus:border-[#007AFF] focus:outline-none"
                  >
                    {IR_CLINICAL_PROTOCOLS.map((p) => (
                      <option key={p.key} value={p.key}>
                        {p.title} ({p.organSystem})
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#E5E5EA]">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 rounded-xl border border-[#E5E5EA] bg-white text-[#3A3A3C] hover:bg-[#F2F2F7] font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] text-white font-semibold cursor-pointer shadow-xs"
                >
                  Confirm &amp; Book Cath-Lab
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Attribution */}
      <div className="text-center py-4 text-xs text-[#8E8E93] select-none">
        SMS Hospital Angiosuite • Made by Dr. Neel Yadav
      </div>
    </div>
  );
}

