import { useState, useMemo, useEffect } from "react";
import {
  useEndoflowStore,
  CtReviewRecord,
  EndoflowPatient,
  BedRecord,
} from "../useEndoflowStore";
import { ClinicalDisposition } from "../../types/clinical";
import { IR_CLINICAL_PROTOCOLS } from "@vascule/catalog";
import {
  INSTITUTIONAL_STAFF_ACCOUNTS,
  StaffAccount,
} from "../../lib/staffAccounts";
import { getHolidayForDate } from "../../lib/rajasthanHolidays2026";

export const URGENCY_OPTIONS = [
  { value: "Routine / Non-Urgent", label: "Routine (Elective Slot)" },
  { value: "Early Treatment", label: "Early Treatment (Within 24-48 Hours)" },
  { value: "Extensive Disease", label: "Extensive Disease / Priority Case" },
  { value: "VIP Patient", label: "VIP Priority" },
  { value: "Emergency / STAT", label: "Emergency / STAT Table" },
];

export const ORGAN_SYSTEM_OPTIONS = [
  "Liver & Hepatobiliary",
  "Thoracic & Pulmonary",
  "Gastrointestinal & Mesenteric",
  "Peripheral Vascular",
  "Pelvic & Genitourinary",
  "Venous & Dialysis Access",
  "Others",
];

export const HOSPITAL_SOURCES = [
  "SONI Hospital",
  "SMS Hospital",
  "EHCC Hospital",
  "External Referral",
];

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
  disposition: "ELECTIVE_OUTPATIENT" as ClinicalDisposition,
  sosTriggerSymptoms: "",
  selectedBedId: "none",
};

export interface AvailablePatientOption {
  id: string;
  label: string;
  type: "review" | "admitted";
  data: CtReviewRecord | EndoflowPatient;
}

export interface UseOpClinicDeskReturn {
  // Form State
  patientName: string;
  setPatientName: React.Dispatch<React.SetStateAction<string>>;
  age: number | string;
  setAge: React.Dispatch<React.SetStateAction<number | string>>;
  sex: "Male" | "Female";
  setSex: React.Dispatch<React.SetStateAction<"Male" | "Female">>;
  contactNumber: string;
  setContactNumber: React.Dispatch<React.SetStateAction<string>>;
  residentContact: string;
  setResidentContact: React.Dispatch<React.SetStateAction<string>>;
  referringDepartment: string;
  setReferringDepartment: React.Dispatch<React.SetStateAction<string>>;
  urgencyCategory: string;
  setUrgencyCategory: React.Dispatch<React.SetStateAction<string>>;
  accessionNumber: string;
  setAccessionNumber: React.Dispatch<React.SetStateAction<string>>;
  hospitalSource: string;
  setHospitalSource: React.Dispatch<React.SetStateAction<string>>;
  organSystem: string;
  setOrganSystem: React.Dispatch<React.SetStateAction<string>>;
  diseaseKey: string;
  setDiseaseKey: React.Dispatch<React.SetStateAction<string>>;
  customProcedureTitle: string;
  setCustomProcedureTitle: React.Dispatch<React.SetStateAction<string>>;
  primaryDiagnosis: string;
  setPrimaryDiagnosis: React.Dispatch<React.SetStateAction<string>>;
  clinicalHistory: string;
  setClinicalHistory: React.Dispatch<React.SetStateAction<string>>;
  cectFindings: string;
  setCectFindings: React.Dispatch<React.SetStateAction<string>>;
  disposition: ClinicalDisposition;
  setDisposition: React.Dispatch<React.SetStateAction<ClinicalDisposition>>;
  sosTriggerSymptoms: string;
  setSosTriggerSymptoms: React.Dispatch<React.SetStateAction<string>>;
  selectedBedId: string;
  setSelectedBedId: React.Dispatch<React.SetStateAction<string>>;
  isOnCallBooking: boolean;
  setIsOnCallBooking: React.Dispatch<React.SetStateAction<boolean>>;

  // Patient Intake Loader
  selectedPatientKey: string;
  setSelectedPatientKey: React.Dispatch<React.SetStateAction<string>>;
  availablePatients: AvailablePatientOption[];
  loadPatientIntoDesk: (key: string) => void;

  // Protocol and Procedure Computations
  matchedProtocol: (typeof IR_CLINICAL_PROTOCOLS)[0];
  effectiveProcedureTitle: string;
  effectiveDiseaseKey: string;

  // Review Queue Filtering State
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCenter: string;
  setSelectedCenter: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  filteredReviews: CtReviewRecord[];

  // Booking Modal State
  showBookingModal: boolean;
  setShowBookingModal: React.Dispatch<React.SetStateAction<boolean>>;
  bookingStep: 1 | 2;
  setBookingStep: React.Dispatch<React.SetStateAction<1 | 2>>;
  urgencyLevel: "Elective" | "Urgent" | "Emergency";
  setUrgencyLevel: React.Dispatch<React.SetStateAction<"Elective" | "Urgent" | "Emergency">>;
  bookingDate: string;
  setBookingDate: React.Dispatch<React.SetStateAction<string>>;
  calendarViewDate: Date;
  setCalendarViewDate: React.Dispatch<React.SetStateAction<Date>>;
  bookingDateHoliday: ReturnType<typeof getHolidayForDate>;

  // Popover State
  activePopover: { id: string; type: "contact" | "date" | "postpone" } | null;
  setActivePopover: React.Dispatch<
    React.SetStateAction<{ id: string; type: "contact" | "date" | "postpone" } | null>
  >;
  popoverInput: string;
  setPopoverInput: React.Dispatch<React.SetStateAction<string>>;
  popoverReason: string;
  setPopoverReason: React.Dispatch<React.SetStateAction<string>>;

  // Notification State
  successBanner: {
    message: string;
    linkHref?: string;
    linkLabel?: string;
  } | null;
  setSuccessBanner: React.Dispatch<
    React.SetStateAction<{
      message: string;
      linkHref?: string;
      linkLabel?: string;
    } | null>
  >;

  // Store Entities & Diagnostics
  activeStaff: StaffAccount;
  beds: BedRecord[];
  ctReviews: CtReviewRecord[];
  patients: EndoflowPatient[];
  syncAlert: string | null;
  clearSyncAlert: () => void;

  // Clinical Handlers
  handleSaveConsultation: (e?: React.FormEvent) => void;
  handleAdmitWardPreOp: () => void;
  handleOpenBookingModal: () => void;
  handleConfirmCathLabBooking: (e?: React.FormEvent) => void;
  handleSaveAndExecute: (e?: React.FormEvent) => void;
  handleApplyDisposition: () => void;
  handleQuickReviewUpdate: (reviewId: string, newStatus: string) => void;
  handlePostponeReview: (reviewId: string, date: string, reason?: string) => void;
  handleHoldReview: (reviewId: string, reason?: string) => void;
  handleReactivateReview: (reviewId: string) => void;
  handleKeepOnCallReview: (reviewId: string) => void;
  handleUpdateContact: (reviewId: string, contact: string) => void;
  handleUpdateDate: (reviewId: string, newDate: string) => void;
}

export function useOpClinicDesk(): UseOpClinicDeskReturn {
  const {
    ctReviews,
    addCtReview,
    updateCtReview,
    convertCtReviewToBooking,
    postponeCtReview,
    holdCtReview,
    reactivateCtReview,
    keepCtReviewOnCall,
    patients,
    admitPatient,
    beds,
    updateBed,
    bookCase,
    currentStaff,
    syncAlert,
    clearSyncAlert,
  } = useEndoflowStore();

  const activeStaff: StaffAccount =
    currentStaff ||
    INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "DM01") ||
    INSTITUTIONAL_STAFF_ACCOUNTS[0];

  // Patient Selector State - default to clean "new" patient intake
  const [selectedPatientKey, setSelectedPatientKey] = useState<string>("new");

  // Form Fields for Active Consultation - initialized strictly blank
  const [patientName, setPatientName] = useState<string>(BLANK_PATIENT_FORM.patientName);
  const [age, setAge] = useState<number | string>("");
  const [sex, setSex] = useState<"Male" | "Female">(BLANK_PATIENT_FORM.sex);
  const [contactNumber, setContactNumber] = useState<string>(BLANK_PATIENT_FORM.contactNumber);
  const [residentContact, setResidentContact] = useState<string>(BLANK_PATIENT_FORM.residentContact);
  const [referringDepartment, setReferringDepartment] = useState<string>(
    BLANK_PATIENT_FORM.referringDepartment
  );
  const [urgencyCategory, setUrgencyCategory] = useState<string>(
    BLANK_PATIENT_FORM.urgencyCategory
  );
  const [accessionNumber, setAccessionNumber] = useState<string>(
    BLANK_PATIENT_FORM.accessionNumber
  );
  const [hospitalSource, setHospitalSource] = useState<string>(BLANK_PATIENT_FORM.hospitalSource);
  const [organSystem, setOrganSystem] = useState<string>(BLANK_PATIENT_FORM.organSystem);
  const [diseaseKey, setDiseaseKey] = useState<string>(BLANK_PATIENT_FORM.diseaseKey);
  const [customProcedureTitle, setCustomProcedureTitle] = useState<string>(
    BLANK_PATIENT_FORM.customProcedureTitle
  );
  const [primaryDiagnosis, setPrimaryDiagnosis] = useState<string>(
    BLANK_PATIENT_FORM.primaryDiagnosis
  );

  // Key Clinical History & Imaging Blocks
  const [clinicalHistory, setClinicalHistory] = useState<string>(
    BLANK_PATIENT_FORM.clinicalHistory
  );
  const [cectFindings, setCectFindings] = useState<string>(BLANK_PATIENT_FORM.cectFindings);

  // Multi-Track Clinical Disposition Matrix State
  const [disposition, setDisposition] = useState<ClinicalDisposition>(
    BLANK_PATIENT_FORM.disposition
  );
  const [sosTriggerSymptoms, setSosTriggerSymptoms] = useState<string>(
    BLANK_PATIENT_FORM.sosTriggerSymptoms
  );
  const [selectedBedId, setSelectedBedId] = useState<string>("none");

  // Filtering & Search for Queue
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // 2-Step Booking Workflow States
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [bookingStep, setBookingStep] = useState<1 | 2>(1);
  const [isOnCallBooking, setIsOnCallBooking] = useState<boolean>(false);
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

  // Action Popover State for Review Queue
  const [activePopover, setActivePopover] = useState<{
    id: string;
    type: "contact" | "date" | "postpone";
  } | null>(null);
  const [popoverInput, setPopoverInput] = useState<string>("");
  const [popoverReason, setPopoverReason] = useState<string>("");

  // Holiday check on Cath-Lab booking date
  const bookingDateHoliday = useMemo(() => {
    return getHolidayForDate(bookingDate);
  }, [bookingDate]);

  // Authentic Patients Directory (combined list for selection)
  const availablePatients = useMemo<AvailablePatientOption[]>(() => {
    const list: AvailablePatientOption[] = [];

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
      setSelectedBedId("none");
      setIsOnCallBooking(false);
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
      setClinicalHistory(
        review.clinicalHistory || review.clinicalHistory3Months || review.presentingComplaints || ""
      );
      setCectFindings(review.cectFindings || review.ctReviewNotes || "");
      setDisposition(review.disposition || "ELECTIVE_OUTPATIENT");
      setSosTriggerSymptoms(review.sosTriggerSymptoms || "");
      if (review.disposition === "STAT_CATH_LAB") {
        setSelectedBedId("stat");
      } else if (review.disposition === "DEFERRED_REVIEW_SOS" || review.isOnCall) {
        setSelectedBedId("on_call");
        setIsOnCallBooking(true);
      } else if (review.disposition === "ADMIT_WARD_PREOP") {
        const matchBed = beds.find((b) => b.ptName === review.patientName);
        setSelectedBedId(matchBed ? matchBed.id : "Ward-01");
      } else {
        setSelectedBedId("none");
        setIsOnCallBooking(false);
      }
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
      setClinicalHistory(
        patient.clinicalHistory3Months ||
          patient.history3Months ||
          patient.chiefComplaints ||
          patient.summary ||
          ""
      );
      setCectFindings(patient.cectFindings || "");
      setDisposition(patient.disposition || "ADMIT_WARD_PREOP");
      setSosTriggerSymptoms(patient.sosTriggerSymptoms || "");
      if (patient.ipd?.bed) {
        const matchBed = beds.find((b) => b.title === patient.ipd.bed || b.id === patient.ipd.bed);
        setSelectedBedId(matchBed ? matchBed.id : "Ward-01");
      } else if (patient.disposition === "STAT_CATH_LAB") {
        setSelectedBedId("stat");
      } else {
        setSelectedBedId("none");
      }
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
      if (selectedStatus !== "all") {
        if (selectedStatus === "Keep On Call (Standby)") {
          if (r.status !== "Keep On Call (Standby)" && !r.isOnCall) return false;
        } else if (r.status !== selectedStatus) {
          return false;
        }
      }
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
  // HANDLER: ADMIT TO INPATIENT WARD (STRICT 8-BED INTEGRITY)
  // ==========================================================================
  const handleAdmitWardPreOp = () => {
    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const generatedSeq = Date.now().toString().slice(-4);
    const generatedHid = `SMS-2026-${generatedSeq}`;
    const generatedScanId = accessionNumber.trim() || `SONI-ACC-2026-${generatedSeq}`;
    const newPatientId = selectedPatientKey.startsWith("PT")
      ? selectedPatientKey
      : `PT-OPD-${generatedSeq}`;

    const targetBed =
      selectedBedId &&
      selectedBedId !== "none" &&
      selectedBedId !== "stat" &&
      selectedBedId !== "on_call"
        ? beds.find((b) => b.id === selectedBedId && b.status === "vacant") ||
          beds.find((b) => b.status === "vacant")
        : beds.find((b) => b.status === "vacant");

    if (!targetBed) {
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
      unit: `Unit I / Interventional Radiology (${targetBed.title})`,
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
        ward: targetBed.type === "ICU" ? "Liver ICU" : "IR Ward D-Block",
        bed: targetBed.title,
        podDay: "Pre-Op",
      },
      labs: {},
      preOp: {
        bedLocation: targetBed.title,
        npoHours: 0,
        inrChecked: false,
        creatinineChecked: false,
        consentSigned: false,
        ivCannulaGauge: "18G Green",
        calledToLab: false,
        labCleared: false,
      },
    };

    admitPatient(newPatientRecord);

    updateBed(targetBed.id, {
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

    setDisposition("ADMIT_WARD_PREOP");
    setSelectedBedId(targetBed.id);

    setSuccessBanner({
      message: `Patient ${effectiveName} admitted to ${targetBed.title}. Ward Bed Board slot assigned.`,
      linkHref: "/dashboard/bed-board",
      linkLabel: "Open Ward & Bed Board →",
    });
    setTimeout(() => setSuccessBanner(null), 6000);
  };

  // ==========================================================================
  // HANDLER: SAVE CONSULTATION TO REVIEW QUEUE
  // ==========================================================================
  const handleSaveConsultation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
        hospitalSource: hospitalSource || "SONI Hospital",
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
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
        reviewedBy: activeStaff.name,
        reviewedAt: new Date().toLocaleDateString("en-IN"),
      });

      setSuccessBanner({
        message: `OPD Consultation updated for ${effectiveName}. Record is live in the Review Queue.`,
      });
      setTimeout(() => setSuccessBanner(null), 5000);
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
        hospitalSource: hospitalSource || "SONI Hospital",
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
      });

      setSuccessBanner({
        message: `New OPD Consultation saved for ${effectiveName}. Record added to the Consultation Review Queue.`,
      });
      setTimeout(() => setSuccessBanner(null), 5000);
    }

    // Reset consultation desk to blank form for the next patient
    loadPatientIntoDesk("new");

    // Clear filters
    setSearchQuery("");
    setSelectedStatus("all");
    setSelectedCenter("all");
  };

  // ==========================================================================
  // HANDLER: OPEN CATH-LAB BOOKING MODAL
  // ==========================================================================
  const handleOpenBookingModal = () => {
    setBookingStep(1);
    setShowBookingModal(true);
  };

  // ==========================================================================
  // HANDLER: CONFIRM CATH-LAB BOOKING
  // ==========================================================================
  const handleConfirmCathLabBooking = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const effectiveDate = isOnCallBooking
      ? "ON_CALL"
      : bookingDate || new Date().toISOString().split("T")[0];
    const generatedSeq = Date.now().toString().slice(-4);
    const generatedSso = `SMS-2026-${generatedSeq}`;
    const generatedAcc = accessionNumber.trim() || `SONI-ACC-2026-${generatedSeq}`;

    if (isOnCallBooking) {
      if (selectedPatientKey.startsWith("CT-REV")) {
        keepCtReviewOnCall(selectedPatientKey, "Kept on call standby from booking modal");
      } else {
        bookCase({
          patientName: effectiveName,
          age: Number(age) || 0,
          sex,
          contactNumber: contactNumber.trim() || "",
          residentContact: residentContact.trim() || undefined,
          referringDepartment: referringDepartment || undefined,
          urgencyCategory: "On Call",
          customProcedureTitle:
            organSystem === "Others" ? customProcedureTitle.trim() || undefined : undefined,
          ssoNumber: generatedSso,
          accessionNumber: generatedAcc,
          location: "Jaipur",
          scheduledDate: "ON_CALL",
          urgency: "On Call",
          organSystem,
          diseaseKey: effectiveDiseaseKey,
          procedureTitle: effectiveProcedureTitle,
          disposition,
          sosTriggerSymptoms:
            disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
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
            { id: "h3", item: "Hydrophilic Guidewire", spec: '0.035" 260cm Terumo Glidewire', checked: true },
          ],
          postOpPlan: `On-Call Standby Case: ${effectiveProcedureTitle}. Pre-procedure call pending.`,
          status: "On Call",
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
      }
      setShowBookingModal(false);
      setBookingStep(1);
      setSuccessBanner({
        message: `Patient ${effectiveName} placed in On-Call Standby Roster (To be called in case of cancellation).`,
        linkHref: "/dashboard/calendar",
        linkLabel: "View On-Call Roster in Calendar →",
      });
      setTimeout(() => setSuccessBanner(null), 6000);
      return;
    }

    if (selectedPatientKey.startsWith("CT-REV")) {
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
      const bookingResult = bookCase({
        patientName: effectiveName,
        age: Number(age) || 0,
        sex,
        contactNumber: contactNumber.trim() || "",
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || urgencyLevel,
        customProcedureTitle:
          organSystem === "Others" ? customProcedureTitle.trim() || undefined : undefined,
        ssoNumber: generatedSso,
        accessionNumber: generatedAcc,
        location: "Jaipur",
        scheduledDate: effectiveDate,
        urgency: urgencyCategory || urgencyLevel,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
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
          { id: "h3", item: "Hydrophilic Guidewire", spec: '0.035" 260cm Terumo Glidewire', checked: true },
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
  // HANDLER: SAVE & BOOK CATH-LAB (EXECUTE)
  // ==========================================================================
  const handleSaveAndExecute = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const newSeq = Date.now().toString().slice(-4);
    const generatedAcc = accessionNumber.trim() || `SONI-ACC-2026-${newSeq}`;
    const generatedHid = `SMS-2026-${newSeq}`;
    const effectiveDate =
      isOnCallBooking || selectedBedId === "on_call"
        ? "ON_CALL"
        : bookingDate || new Date().toISOString().split("T")[0];

    // 1. Save or Update in CT Reviews
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
        hospitalSource: hospitalSource || "SONI Hospital",
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        primaryDiagnosis: primaryDiagnosis.trim() || effectiveProcedureTitle,
        presentingComplaints: clinicalHistory.trim(),
        clinicalHistory: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        status:
          isOnCallBooking || selectedBedId === "on_call"
            ? "Keep On Call (Standby)"
            : "Booked in Cath-Lab",
        disposition,
        isOnCall: isOnCallBooking || selectedBedId === "on_call",
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
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
        ctNumber: generatedAcc,
        accessionNumber: generatedAcc,
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        status:
          isOnCallBooking || selectedBedId === "on_call"
            ? "Keep On Call (Standby)"
            : "Booked in Cath-Lab",
        smsBillId: `SMS-OPD-2026-${newSeq}`,
        hospitalSource: hospitalSource || "SONI Hospital",
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        isOnCall: isOnCallBooking || selectedBedId === "on_call",
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
      });
    }

    // 2. Bed Allocation if Ward/ICU or STAT table selected
    if (selectedBedId === "stat") {
      const newPatientRecord: EndoflowPatient = {
        id: `PT-STAT-${newSeq}`,
        name: effectiveName,
        age: Number(age) || 0,
        sex,
        hid: generatedHid,
        scanId: generatedAcc,
        phone: contactNumber.trim() || "",
        unit: "Cath Lab STAT Table",
        postedBy: `${activeStaff.name} (${activeStaff.code})`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        summary: `STAT Emergency: ${primaryDiagnosis.trim() || effectiveProcedureTitle}. History: ${clinicalHistory.trim()}`,
        history3Months: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        chiefComplaints: clinicalHistory.trim(),
        cectFindings: cectFindings.trim(),
        procedureKey: effectiveDiseaseKey,
        procedure: effectiveProcedureTitle,
        modality: "XA",
        status: "In Cath-Lab",
        scheme: "MAAY",
        schemeTid: "TID-STAT",
        beneficiaryId: "Emergency Fast-Path",
        preAuthStatus: "Emergency Pre-Auth",
        disposition: "STAT_CATH_LAB",
        ipd: {
          admissionType: "STAT_CATH_LAB",
          ward: "Cath Lab",
          bed: "Angio Table 01",
          podDay: "Emergent",
        },
        labs: {},
        preOp: {
          bedLocation: "Cath-Lab Direct Table",
          npoHours: 0,
          inrChecked: false,
          creatinineChecked: false,
          consentSigned: false,
          ivCannulaGauge: "16G Grey",
          calledToLab: true,
          labCleared: false,
        },
      };
      admitPatient(newPatientRecord);
    } else if (selectedBedId !== "none" && selectedBedId !== "on_call") {
      const targetBed =
        beds.find((b) => b.id === selectedBedId) || beds.find((b) => b.status === "vacant");
      if (targetBed) {
        const newPatientRecord: EndoflowPatient = {
          id: `PT-IPD-${newSeq}`,
          name: effectiveName,
          age: Number(age) || 0,
          sex,
          hid: generatedHid,
          scanId: generatedAcc,
          phone: contactNumber.trim() || "",
          unit: `Interventional Radiology (${targetBed.title})`,
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
          ipd: {
            admissionType: "IPD",
            ward: targetBed.type === "ICU" ? "Liver ICU" : "IR Ward D-Block",
            bed: targetBed.title,
            podDay: "Pre-Op",
          },
          labs: {},
          preOp: {
            bedLocation: targetBed.title,
            npoHours: 0,
            inrChecked: false,
            creatinineChecked: false,
            consentSigned: false,
            ivCannulaGauge: "18G Green",
            calledToLab: false,
            labCleared: false,
          },
        };
        admitPatient(newPatientRecord);
        updateBed(targetBed.id, {
          status: "occupied",
          ptName: effectiveName,
          crNo: generatedHid,
          diag: effectiveProcedureTitle,
          doctor: activeStaff.name,
          ptId: newPatientRecord.id,
        });
      }
    }

    // 3. Book Cath-Lab Case
    bookCase({
      patientName: effectiveName,
      age: Number(age) || 0,
      sex,
      contactNumber: contactNumber.trim() || "",
      residentContact: residentContact.trim() || undefined,
      referringDepartment: referringDepartment || undefined,
      urgencyCategory: urgencyCategory || "Routine / Non-Urgent",
      customProcedureTitle:
        organSystem === "Others" ? customProcedureTitle.trim() || undefined : undefined,
      ssoNumber: `SMS-2026-${newSeq}`,
      accessionNumber: generatedAcc,
      location: "Jaipur",
      scheduledDate: effectiveDate,
      urgency: urgencyCategory?.includes("Emergency")
        ? "Emergency"
        : urgencyCategory?.includes("Early")
        ? "Urgent"
        : "Elective",
      organSystem,
      diseaseKey: effectiveDiseaseKey,
      procedureTitle: effectiveProcedureTitle,
      disposition,
      isOnCall: isOnCallBooking || selectedBedId === "on_call",
      sosTriggerSymptoms:
        disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
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
        { id: "h3", item: "Hydrophilic Guidewire", spec: '0.035" 260cm Terumo Glidewire', checked: true },
      ],
      postOpPlan: `Cath-Lab intervention: ${effectiveProcedureTitle}. Clinical History: ${clinicalHistory.trim() || "Standard"}.`,
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

    setSuccessBanner({
      message: `Cath-Lab Case Executed & Scheduled! ${effectiveName} booked for ${effectiveDate} (${effectiveProcedureTitle}).`,
      linkHref: "/dashboard/calendar",
      linkLabel: "View in OT Calendar →",
    });
    setTimeout(() => setSuccessBanner(null), 6000);

    // Reset to blank form
    loadPatientIntoDesk("new");
    setSelectedBedId("none");
    setSearchQuery("");
    setSelectedStatus("all");
    setSelectedCenter("all");
  };

  // ==========================================================================
  // HANDLER: APPLY MULTI-TRACK DISPOSITION
  // ==========================================================================
  const handleApplyDisposition = () => {
    const effectiveName = patientName.trim() || "OPD Consultation Patient";
    const generatedSeq = Date.now().toString().slice(-4);
    const generatedHid = `SMS-2026-${generatedSeq}`;
    const generatedScanId = accessionNumber.trim() || `SONI-ACC-2026-${generatedSeq}`;
    const newPatientId = selectedPatientKey.startsWith("PT")
      ? selectedPatientKey
      : `PT-OPD-${generatedSeq}`;

    // Track 1: Inpatient Ward Admission
    if (disposition === "ADMIT_WARD_PREOP") {
      handleAdmitWardPreOp();
      return;
    }

    // Track 2: STAT Cath-Lab Immediate Activation
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
        labs: {},
        preOp: {
          bedLocation: "Cath-Lab Direct Table",
          npoHours: 0,
          inrChecked: false,
          creatinineChecked: false,
          consentSigned: false,
          ivCannulaGauge: "16G Grey",
          calledToLab: true,
          labCleared: false,
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

    // Track 3: Elective Outpatient Day-Care Procedure
    if (disposition === "ELECTIVE_OUTPATIENT") {
      setShowBookingModal(true);
      return;
    }

    // Tracks 4, 5, 6: NO_INTERVENTION_NEEDED, DEFERRED_REVIEW_SOS, SURVEILLANCE_PROTOCOL
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
        hospitalSource: hospitalSource || "SONI Hospital",
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        primaryDiagnosis: primaryDiagnosis.trim() || effectiveProcedureTitle,
        presentingComplaints: clinicalHistory.trim(),
        clinicalHistory: clinicalHistory.trim(),
        clinicalHistory3Months: clinicalHistory.trim(),
        ctReviewNotes: cectFindings.trim(),
        cectFindings: cectFindings.trim(),
        status:
          disposition === "NO_INTERVENTION_NEEDED" ? "Pending Review" : "Reviewed by Neel / Nilesh",
        disposition,
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
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
        hospitalSource: hospitalSource || "SONI Hospital",
        contactNumber: contactNumber.trim(),
        residentContact: residentContact.trim() || undefined,
        referringDepartment: referringDepartment || undefined,
        urgencyCategory: urgencyCategory || undefined,
        customProcedureTitle: organSystem === "Others" ? customProcedureTitle.trim() : undefined,
        organSystem,
        diseaseKey: effectiveDiseaseKey,
        procedureTitle: effectiveProcedureTitle,
        disposition,
        sosTriggerSymptoms:
          disposition === "DEFERRED_REVIEW_SOS" ? sosTriggerSymptoms.trim() : undefined,
      });
    }

    const dispositionFeedback: Record<ClinicalDisposition, string> = {
      STAT_CATH_LAB: "STAT Cath-Lab Activated",
      ADMIT_WARD_PREOP: "Ward Bed Assigned",
      ELECTIVE_OUTPATIENT: "Elective Day-Care",
      NO_INTERVENTION_NEEDED: "Conservative Referral Logged (Zero Ward Beds Occupied)",
      DEFERRED_REVIEW_SOS: `Deferred Review on SOS Triggers [${
        sosTriggerSymptoms.trim() || "Progression"
      }] (Zero Ward Beds Occupied)`,
      SURVEILLANCE_PROTOCOL: "Interval Surveillance Protocol Enrolled (Zero Ward Beds Occupied)",
    };

    setSuccessBanner({
      message: `Clinical Disposition applied: ${dispositionFeedback[disposition]} for ${effectiveName}.`,
    });
    setTimeout(() => setSuccessBanner(null), 6000);
  };

  // ==========================================================================
  // HANDLERS FOR REVIEW QUEUE ACTIONS
  // ==========================================================================
  const handleQuickReviewUpdate = (reviewId: string, newStatus: string) => {
    updateCtReview(reviewId, {
      status: newStatus as any,
      reviewedBy: activeStaff.name,
      reviewedAt: new Date().toLocaleDateString("en-IN"),
    });
    setSuccessBanner({
      message: `Review record updated to "${newStatus}".`,
    });
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handlePostponeReview = (reviewId: string, date: string, reason?: string) => {
    postponeCtReview(reviewId, date, reason);
    setActivePopover(null);
    setPopoverInput("");
    setPopoverReason("");
    setSuccessBanner({
      message: `Review postponed until ${date}.`,
    });
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleHoldReview = (reviewId: string, reason?: string) => {
    holdCtReview(reviewId, reason);
    setActivePopover(null);
    setPopoverReason("");
    setSuccessBanner({
      message: `Review placed on indefinite hold.`,
    });
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleReactivateReview = (reviewId: string) => {
    reactivateCtReview(reviewId);
    setSuccessBanner({
      message: `Review reactivated to active queue.`,
    });
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleKeepOnCallReview = (reviewId: string) => {
    keepCtReviewOnCall(reviewId);
    const rev = ctReviews.find((r) => r.id === reviewId);
    setSuccessBanner({
      message: `Patient ${rev?.patientName || reviewId} placed on Standby On-Call roster.`,
      linkHref: "/dashboard/calendar",
      linkLabel: "View in Calendar →",
    });
    setTimeout(() => setSuccessBanner(null), 5000);
  };

  const handleUpdateContact = (reviewId: string, contact: string) => {
    updateCtReview(reviewId, { contactNumber: contact });
    setActivePopover(null);
    setPopoverInput("");
    setSuccessBanner({
      message: `Contact number updated for patient.`,
    });
    setTimeout(() => setSuccessBanner(null), 4000);
  };

  const handleUpdateDate = (reviewId: string, newDate: string) => {
    const rev = ctReviews.find((r) => r.id === reviewId);
    convertCtReviewToBooking(
      reviewId,
      newDate,
      rev?.diseaseKey || "",
      rev?.procedureTitle || "Elective IR Procedure",
      activeStaff.name
    );
    setActivePopover(null);
    setPopoverInput("");
    setSuccessBanner({
      message: `Cath-Lab date confirmed for ${newDate}.`,
      linkHref: "/dashboard/calendar",
      linkLabel: "View in Calendar →",
    });
    setTimeout(() => setSuccessBanner(null), 5000);
  };

  return {
    // Form State
    patientName,
    setPatientName,
    age,
    setAge,
    sex,
    setSex,
    contactNumber,
    setContactNumber,
    residentContact,
    setResidentContact,
    referringDepartment,
    setReferringDepartment,
    urgencyCategory,
    setUrgencyCategory,
    accessionNumber,
    setAccessionNumber,
    hospitalSource,
    setHospitalSource,
    organSystem,
    setOrganSystem,
    diseaseKey,
    setDiseaseKey,
    customProcedureTitle,
    setCustomProcedureTitle,
    primaryDiagnosis,
    setPrimaryDiagnosis,
    clinicalHistory,
    setClinicalHistory,
    cectFindings,
    setCectFindings,
    disposition,
    setDisposition,
    sosTriggerSymptoms,
    setSosTriggerSymptoms,
    selectedBedId,
    setSelectedBedId,
    isOnCallBooking,
    setIsOnCallBooking,

    // Patient Intake Loader
    selectedPatientKey,
    setSelectedPatientKey,
    availablePatients,
    loadPatientIntoDesk,

    // Protocol and Procedure Computations
    matchedProtocol,
    effectiveProcedureTitle,
    effectiveDiseaseKey,

    // Review Queue Filtering State
    searchQuery,
    setSearchQuery,
    selectedCenter,
    setSelectedCenter,
    selectedStatus,
    setSelectedStatus,
    filteredReviews,

    // Booking Modal State
    showBookingModal,
    setShowBookingModal,
    bookingStep,
    setBookingStep,
    urgencyLevel,
    setUrgencyLevel,
    bookingDate,
    setBookingDate,
    calendarViewDate,
    setCalendarViewDate,
    bookingDateHoliday,

    // Popover State
    activePopover,
    setActivePopover,
    popoverInput,
    setPopoverInput,
    popoverReason,
    setPopoverReason,

    // Notification State
    successBanner,
    setSuccessBanner,

    // Store Entities & Diagnostics
    activeStaff,
    beds,
    ctReviews,
    patients,
    syncAlert,
    clearSyncAlert,

    // Clinical Handlers
    handleSaveConsultation,
    handleAdmitWardPreOp,
    handleOpenBookingModal,
    handleConfirmCathLabBooking,
    handleSaveAndExecute,
    handleApplyDisposition,
    handleQuickReviewUpdate,
    handlePostponeReview,
    handleHoldReview,
    handleReactivateReview,
    handleKeepOnCallReview,
    handleUpdateContact,
    handleUpdateDate,
  };
}
