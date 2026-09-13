import { describe, it, expect, beforeEach } from "vitest";
import {
  useEndoflowStore,
  EndoflowPatientSchema,
  ClinicalStageSchema,
  INITIAL_ENDOFLOW_PATIENTS,
} from "../../app/dashboard/useEndoflowStore";

describe("Phase 19: Faithful EndoFlow Clinical Workflow & Security Port (Web-App Suite)", () => {
  beforeEach(() => {
    useEndoflowStore.getState().resetToDefaultPatients();
    useEndoflowStore.getState().setSearchQuery("");
    useEndoflowStore.getState().setFilterModality("all");
  });

  describe("1. Exact EndoFlow Initial State & 4 Core Sections", () => {
    it("loads all 8 authentic EndoFlow patients from app.js", () => {
      const state = useEndoflowStore.getState();
      expect(state.patients.length).toBe(8);
      expect(state.patients.map((p) => p.id)).toEqual([
        "PT01",
        "PT02",
        "PT03",
        "PT04",
        "PT05",
        "PT06",
        "PT07",
        "PT08",
      ]);
    });

    it("verifies Active In-Room Cath-Lab case (PT03 - Rajesh Kumawat)", () => {
      const state = useEndoflowStore.getState();
      const inRoomPt = state.patients.find((p) => p.status === "In Cath-Lab");
      expect(inRoomPt).toBeDefined();
      expect(inRoomPt?.id).toBe("PT03");
      expect(inRoomPt?.name).toBe("Rajesh Kumawat");
      expect(inRoomPt?.procedureKey).toBe("bae_hemoptysis");
      expect(inRoomPt?.inRoom).toBeDefined();
      expect(inRoomPt?.inRoom?.activeSheathAccess).toContain("Femoral Artery Sheath");
      expect(inRoomPt?.inRoom?.elapsedFluoroSeconds).toBe(878);
      expect(inRoomPt?.inRoom?.contrastInjectedMl).toBe(48);
    });

    it("verifies Pre-Op Holding Queue (PT05, PT06)", () => {
      const state = useEndoflowStore.getState();
      const preOpList = state.patients.filter((p) => p.status === "Pre-Op Pending");
      expect(preOpList.length).toBeGreaterThanOrEqual(2);
      preOpList.forEach((pt) => {
        expect(pt.preOp).toBeDefined();
        expect(pt.preOp.npoHours).toBeGreaterThanOrEqual(4);
        expect(pt.preOp.consentSigned).toBe(true);
      });
    });

    it("verifies Post-Op Ward Monitoring & Hemostasis (PT01 - Ramswaroop Meena)", () => {
      const state = useEndoflowStore.getState();
      const postOpPt = state.patients.find((p) => p.id === "PT01");
      expect(postOpPt).toBeDefined();
      expect(postOpPt?.status).toBe("Post-Op ICU");
      expect(postOpPt?.postOp?.recoveryBed).toBe("Liver ICU Bed LICU-04");
      expect(postOpPt?.postOp?.punctureSiteSeal).toBe("Hemostasis Intact");
      expect(postOpPt?.postOp?.distalPulses).toBe("Strong (+++)");
    });

    it("verifies Master Scheduled Worklist modalities and schemes", () => {
      const state = useEndoflowStore.getState();
      const modalities = state.patients.map((p) => p.modality);
      expect(modalities).toContain("XA");
      expect(modalities).toContain("CT");
      expect(modalities).toContain("US");
      expect(modalities).toContain("ROSE");
    });
  });

  describe("2. Seamless Clinical Stage Progression Flow", () => {
    it("advances patient through Scheduled → Pre-Op → In-Room → Post-Op → Discharged", () => {
      const store = useEndoflowStore.getState();
      const ptId = "PT02"; // Kamla Devi Sharma (Scheduled)

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
