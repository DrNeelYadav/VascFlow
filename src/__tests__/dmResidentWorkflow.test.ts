import { describe, it, expect, beforeEach } from "vitest";
import {
  INSTITUTIONAL_STAFF_ACCOUNTS,
  authenticateStaff,
  getStaffPermissions,
  UNIVERSAL_PASSWORD,
} from "../../apps/web-app/app/lib/staffAccounts";
import {
  useEndoflowStore,
  INITIAL_8_BEDS,
  getTomorrowDateString,
  getTodayDateString,
} from "../../apps/web-app/app/dashboard/useEndoflowStore";
import {
  IR_CLINICAL_PROTOCOLS,
  calculateRotterdam,
} from "@vascule/catalog";

describe("Phase 20: DM Resident OPD Workflow, Institutional RBAC, & 8-Bed Inpatient Matrix", () => {
  beforeEach(() => {
    useEndoflowStore.getState().resetToDefaultPatients();
  });

  describe("1. Institutional Staff Roster & Universal Authentication (20 Accounts)", () => {
    it("contains exactly 20 institutional accounts across 5 tiers", () => {
      expect(INSTITUTIONAL_STAFF_ACCOUNTS.length).toBe(20);

      const faculty = INSTITUTIONAL_STAFF_ACCOUNTS.filter((s) => s.tier === "FACULTY");
      const dmResidents = INSTITUTIONAL_STAFF_ACCOUNTS.filter((s) => s.tier === "DM_RESIDENT");
      const seniorResidents = INSTITUTIONAL_STAFF_ACCOUNTS.filter((s) => s.tier === "SENIOR_RESIDENT");
      const nurses = INSTITUTIONAL_STAFF_ACCOUNTS.filter((s) => s.tier === "NURSING_OFFICER");
      const technicians = INSTITUTIONAL_STAFF_ACCOUNTS.filter((s) => s.tier === "CATHLAB_TECHNICIAN");

      expect(faculty.length).toBe(4);
      expect(dmResidents.length).toBe(2);
      expect(seniorResidents.length).toBe(2);
      expect(nurses.length).toBe(6);
      expect(technicians.length).toBe(6);
    });

    it("verifies universal password 123456 authenticates all 20 institutional accounts", () => {
      for (const account of INSTITUTIONAL_STAFF_ACCOUNTS) {
        const authenticated = authenticateStaff(account.code, UNIVERSAL_PASSWORD);
        expect(authenticated).not.toBeNull();
        expect(authenticated?.code).toBe(account.code);
        expect(authenticated?.name).toBe(account.name);
        expect(authenticated?.role).toBe(account.role);
      }
    });

    it("verifies designated doctor names for FC01-04, DM01-02, SR01-02", () => {
      // Faculty
      expect(authenticateStaff("FC01", "123456")?.name).toContain("Meenu");
      expect(authenticateStaff("FC02", "123456")?.name).toContain("Naresh");
      expect(authenticateStaff("FC03", "123456")?.name).toContain("Shashank");
      expect(authenticateStaff("FC04", "123456")?.name).toContain("Alok");

      // DM Residents
      expect(authenticateStaff("DM01", "123456")?.name).toContain("Neel");
      expect(authenticateStaff("DM02", "123456")?.name).toContain("Nilesh");

      // Senior Residents
      expect(authenticateStaff("SR01", "123456")?.name).toContain("Pragati");
      expect(authenticateStaff("SR02", "123456")?.name).toContain("Sahil");
    });

    it("verifies designated codes for Nursing Officers (NO01-06) and Technicians (TC01-06)", () => {
      const nurseCodes = ["NO01", "NO02", "NO03", "NO04", "NO05", "NO06"];
      for (const code of nurseCodes) {
        const nurse = authenticateStaff(code, "123456");
        expect(nurse).not.toBeNull();
        expect(nurse?.role).toBe("NURSE");
      }

      const techCodes = ["TC01", "TC02", "TC03", "TC04", "TC05", "TC06"];
      for (const code of techCodes) {
        const tech = authenticateStaff(code, "123456");
        expect(tech).not.toBeNull();
        expect(tech?.role).toBe("TECHNICIAN");
      }
    });

    it("rejects invalid security PIN or non-existent staff IDs", () => {
      expect(authenticateStaff("DM01", "wrong_pin")).toBeNull();
      expect(authenticateStaff("FC01", "000000")).toBeNull();
      expect(authenticateStaff("INVALID_ID", "123456")).toBeNull();
    });
  });

  describe("2. Institutional RBAC Permissions Matrix", () => {
    it("grants Full Authority to Doctors (Faculty, DM, SR)", () => {
      const doctorPerms = getStaffPermissions("DOCTOR");
      expect(doctorPerms.isDoctor).toBe(true);
      expect(doctorPerms.canBookProcedures).toBe(true);
      expect(doctorPerms.canAccessWardBeds).toBe(true);
      expect(doctorPerms.canAddPatientIntake).toBe(true);
      expect(doctorPerms.canAccessCalculators).toBe(true);
      expect(doctorPerms.canGenerateDischargeCard).toBe(true);
      expect(doctorPerms.canViewAll).toBe(true);
    });

    it("restricts Nursing Officers to Inpatient Bed Care and prohibits Procedure Booking", () => {
      const nursePerms = getStaffPermissions("NURSE");
      expect(nursePerms.isDoctor).toBe(false);
      expect(nursePerms.isNurse).toBe(true);
      expect(nursePerms.canAccessWardBeds).toBe(true);
      expect(nursePerms.canBookProcedures).toBe(false); // Restricted from booking
      expect(nursePerms.canGenerateDischargeCard).toBe(false); // Restricted from discharge cards
      expect(nursePerms.canViewAll).toBe(false);
    });

    it("restricts Cath-Lab Technicians to OPD Patient Demographics Intake", () => {
      const techPerms = getStaffPermissions("TECHNICIAN");
      expect(techPerms.isDoctor).toBe(false);
      expect(techPerms.isTechnician).toBe(true);
      expect(techPerms.canAddPatientIntake).toBe(true);
      expect(techPerms.canBookProcedures).toBe(false);
      expect(techPerms.canAccessWardBeds).toBe(false);
      expect(techPerms.canAccessCalculators).toBe(false);
      expect(techPerms.canGenerateDischargeCard).toBe(false);
    });
  });

  describe("3. 8-Bed Inpatient Care Matrix (3 ICU + 5 Ward)", () => {
    it("enforces exactly 8 beds in the inpatient matrix", () => {
      const store = useEndoflowStore.getState();
      expect(store.beds.length).toBe(8);

      const icuBeds = store.beds.filter((b) => b.type === "ICU");
      const wardBeds = store.beds.filter((b) => b.type === "Ward");

      expect(icuBeds.length).toBe(3);
      expect(wardBeds.length).toBe(5);

      expect(icuBeds.map((b) => b.id)).toEqual(["ICU-01", "ICU-02", "ICU-03"]);
      expect(wardBeds.map((b) => b.id)).toEqual([
        "Ward-01",
        "Ward-02",
        "Ward-03",
        "Ward-04",
        "Ward-05",
      ]);
    });

    it("executes seamless bed transfer between beds and clears originating bed", () => {
      const store = useEndoflowStore.getState();
      const originBed = store.beds.find((b) => b.id === "ICU-01");
      expect(originBed?.status).toBe("occupied");
      const patientName = originBed?.ptName;

      // Transfer from ICU-01 to vacant Ward-04
      store.transferPatientBed("PT01", "ICU-01", "Ward-04");

      const updatedStore = useEndoflowStore.getState();
      const newOrigin = updatedStore.beds.find((b) => b.id === "ICU-01");
      const newDest = updatedStore.beds.find((b) => b.id === "Ward-04");

      expect(newOrigin?.status).toBe("vacant");
      expect(newOrigin?.ptName).toBe("-");
      expect(newDest?.status).toBe("occupied");
      expect(newDest?.ptName).toBe(patientName);
    });
  });

  describe("4. DM Resident OPD Case Booking & 1-Day Advance Reminder Alert", () => {
    it("books a new Cath-Lab case into the resident diary with structured schema", () => {
      const store = useEndoflowStore.getState();
      const initialCount = store.bookedCases.length;

      const result = store.bookCase({
        patientName: "Gopal Lal Sharma",
        age: 58,
        sex: "Male",
        contactNumber: "9829099887",
        ssoNumber: "SMS-2026-119",
        location: "Dausa, Rajasthan",
        scheduledDate: "2026-09-20",
        organSystem: "Liver & Hepatobiliary",
        diseaseKey: "budd_chiari_dips",
        procedureTitle: "Budd-Chiari Syndrome: Transcaval DIPS / Recanalization",
        bookedBy: "Dr. Neel Yadav (DM01)",
        orderedLabs: ["Liver Function Tests", "Coagulation Profile"],
        specialInvestigations: ["JAK2 V617F Mutation Assay"],
        preScanAnatomy: { rhv: "Occluded", ivc_status: "Web" },
        hardwareChecklist: [
          { id: "h1", item: "Transjugular Sheath", spec: "10F 45cm Ansel", checked: true },
        ],
        rotterdamScore: {
          score: 1.42,
          classLevel: "Class III",
          oneYearSurvival: "63%",
        },
        postOpPlan: "LMWH 4h post-sheath removal.",
      });

      expect(result.success).toBe(true);
      expect(result.id).toBeDefined();

      const updatedCases = useEndoflowStore.getState().bookedCases;
      expect(updatedCases.length).toBe(initialCount + 1);
      const booked = updatedCases.find((c) => c.id === result.id);
      expect(booked?.patientName).toBe("Gopal Lal Sharma");
      expect(booked?.contactNumber).toBe("9829099887");
      expect(booked?.status).toBe("Scheduled");
    });

    it("triggers 1-Day Advance Reminder for cases scheduled for tomorrow", () => {
      const store = useEndoflowStore.getState();
      const tomorrowReminders = store.getTomorrowReminders();

      expect(tomorrowReminders.length).toBeGreaterThanOrEqual(1);
      const tomorrowCase = tomorrowReminders[0];
      expect(tomorrowCase.scheduledDate).toBe(getTomorrowDateString());
      expect(tomorrowCase.patientName).toBe("Ramswaroop Meena");
      expect(tomorrowCase.contactNumber).toBe("9829012345");
    });

    it("executes 1-click date rescheduling and records audit history", () => {
      const store = useEndoflowStore.getState();
      const targetCase = store.bookedCases[0];
      const originalDate = targetCase.scheduledDate;
      const newDate = "2026-09-28";

      store.rescheduleCase(
        targetCase.id,
        newDate,
        "Low platelet count - deferred pending 4 units RDP transfusion"
      );

      const updated = useEndoflowStore.getState().bookedCases.find((c) => c.id === targetCase.id);
      expect(updated?.scheduledDate).toBe(newDate);
      expect(updated?.status).toBe("Rescheduled");
      expect(updated?.rescheduleHistory.length).toBe(1);
      expect(updated?.rescheduleHistory[0].previousDate).toBe(originalDate);
      expect(updated?.rescheduleHistory[0].newDate).toBe(newDate);
      expect(updated?.rescheduleHistory[0].reason).toContain("platelet count");
    });

    it("allows toggling hardware items and adding custom items dynamically", () => {
      const store = useEndoflowStore.getState();
      const targetCase = store.bookedCases[0];

      // Toggle first item to false
      const firstHw = targetCase.hardwareChecklist[0];
      store.updateCaseHardwareItem(targetCase.id, firstHw.id, false);
      let updatedCase = useEndoflowStore.getState().bookedCases.find((c) => c.id === targetCase.id);
      expect(updatedCase?.hardwareChecklist.find((h) => h.id === firstHw.id)?.checked).toBe(false);

      // Add custom hardware item
      store.addCustomHardwareItem(
        targetCase.id,
        "Gore DrySeal 12F Sheath",
        "12F x 33cm Large-Bore"
      );
      updatedCase = useEndoflowStore.getState().bookedCases.find((c) => c.id === targetCase.id);
      const customAdded = updatedCase?.hardwareChecklist.find((h) => h.item === "Gore DrySeal 12F Sheath");
      expect(customAdded).toBeDefined();
      expect(customAdded?.checked).toBe(true);
    });
  });

  describe("5. SIR Clinical Guidance & Rotterdam Prognostic Calculator", () => {
    it("verifies Rotterdam Score calculator classification logic", () => {
      // High-risk case: enceph=1, ascites=1, INR=2.2, Bili=4.5 mg/dL (~77 umol/L)
      const highRisk = calculateRotterdam({
        enceph: 1,
        ascites: 1,
        ptRatio: 2.2,
        bilirubinMg: 4.5,
      });
      expect(highRisk.score).toBeGreaterThan(1.5);
      expect(highRisk.riskClass).toBe("Class III");
      expect(highRisk.riskLevel).toBe("High Risk");
      expect(highRisk.recommendation).toContain("TIPS/DIPS");

      // Low-risk case: enceph=0, ascites=0, INR=1.0, Bili=0.8 mg/dL (~13.7 umol/L)
      const lowRisk = calculateRotterdam({
        enceph: 0,
        ascites: 0,
        ptRatio: 1.0,
        bilirubinMg: 0.8,
      });
      expect(lowRisk.score).toBeLessThan(1.1);
      expect(lowRisk.riskClass).toBe("Class I");
      expect(lowRisk.riskLevel).toBe("Low Risk");
    });

    it("verifies Budd-Chiari Syndrome protocol anatomical roadmap components", () => {
      const bcsProtocol = IR_CLINICAL_PROTOCOLS.find((p) => p.key === "budd_chiari_dips");
      expect(bcsProtocol).toBeDefined();
      const anatomicalIds = bcsProtocol?.preScanAnatomyChecklist.map((c) => c.id);
      expect(anatomicalIds).toContain("rhv");
      expect(anatomicalIds).toContain("mhv");
      expect(anatomicalIds).toContain("lhv");
      expect(anatomicalIds).toContain("ivc_status");
      expect(anatomicalIds).toContain("caudate");
      expect(anatomicalIds).toContain("right_ijv");
    });
  });
});
