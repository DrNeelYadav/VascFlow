import { describe, it, expect, beforeEach } from "vitest";
import {
  useEndoflowStore,
  DopplerRecordSchema,
  INITIAL_DOPPLER_RECORDS,
  INITIAL_ENDOFLOW_PATIENTS,
  type DopplerRecord,
} from "../../apps/web-app/app/dashboard/useEndoflowStore";
import {
  calculateRotterdam,
  calculateClichy,
  calculateChildPugh,
  calculateMeld3,
  calculateCigarroaMACD,
  calculateEgfrCkdEpi,
} from "@vascule/catalog";

describe("EndoFlow Port - Complete Clinical Workflow & Dossier Suite", () => {
  beforeEach(() => {
    useEndoflowStore.getState().resetToDefaultPatients();
  });

  describe("Doppler Surveillance Schema & Initial Records", () => {
    it("validates all 7 initial Doppler records against DopplerRecordSchema", () => {
      expect(INITIAL_DOPPLER_RECORDS).toHaveLength(7);
      INITIAL_DOPPLER_RECORDS.forEach((record) => {
        const parsed = DopplerRecordSchema.safeParse(record);
        expect(parsed.success).toBe(true);
      });
    });

    it("verifies specific initial surveillance protocols from legacy EndoFlow", () => {
      const dips = INITIAL_DOPPLER_RECORDS.find((d) => d.id === "DOP01");
      expect(dips).toBeDefined();
      expect(dips?.proc).toContain("DIPS");
      expect(dips?.implant).toBe("Viatorr 10mm x 7cm covered");
      expect(dips?.interval).toBe("1m");
      expect(dips?.targetVelocity).toContain("90-190 cm/s");

      const sfa = INITIAL_DOPPLER_RECORDS.find((d) => d.id === "DOP04");
      expect(sfa).toBeDefined();
      expect(sfa?.implant).toBe("EverFlex 6mm x 100mm Nitinol Stent");
      expect(sfa?.targetVessel).toBe("Superficial Femoral Artery");

      const avf = INITIAL_DOPPLER_RECORDS.find((d) => d.id === "DOP06");
      expect(avf).toBeDefined();
      expect(avf?.targetVelocity).toContain("Volume Flow >600 mL/min");
    });

    it("adds a new Doppler surveillance record via addDopplerRecord", () => {
      const store = useEndoflowStore.getState();
      const initialCount = store.dopplerRecords.length;

      store.addDopplerRecord({
        ptId: "PT08",
        name: "Surendra Yadav",
        age: 51,
        sex: "M",
        crNo: "SMS-2026-147",
        proc: "USG-Guided Thyroid RFA",
        implant: "18G Cool-tip RFA Electrode",
        interval: "1m",
        intervalLabel: "1-Month Post-Op",
        dueDate: "15/10/2026",
        targetVessel: "Right Thyroid Lobe",
        targetVelocity: "Avascular Zone",
        status: "Scheduled",
        lastPsv: 0,
        lastMpv: 0,
        patency: "Widely Patent (Normal Velocity)",
        notes: "Scheduled for post-ablation volume reduction check.",
      });

      const updated = useEndoflowStore.getState().dopplerRecords;
      expect(updated.length).toBe(initialCount + 1);
      const added = updated[updated.length - 1];
      expect(added.id).toMatch(/^DOP\d{2}$/);
      expect(added.name).toBe("Surendra Yadav");
    });

    it("updates an existing Doppler record via updateDopplerRecord", () => {
      const store = useEndoflowStore.getState();
      store.updateDopplerRecord("DOP02", {
        lastPsv: 155.5,
        lastMpv: 40.0,
        status: "Completed",
        interval: "completed",
        notes: "Follow-up Doppler performed. Viatorr shunt widely patent.",
      });

      const updated = useEndoflowStore.getState().dopplerRecords.find((d) => d.id === "DOP02");
      expect(updated?.lastPsv).toBe(155.5);
      expect(updated?.lastMpv).toBe(40.0);
      expect(updated?.status).toBe("Completed");
      expect(updated?.interval).toBe("completed");
    });
  });

  describe("Patient Dossier Updates", () => {
    it("updates patient clinical profile and labs via updatePatient", () => {
      const store = useEndoflowStore.getState();
      store.updatePatient("PT01", {
        phone: "9829999999",
        summary: "Updated clinical indication after MDT board review.",
        labs: {
          ...INITIAL_ENDOFLOW_PATIENTS[0].labs,
          bili: 1.5,
          inr: 1.2,
          creat: 0.85,
        },
      });

      const updated = useEndoflowStore.getState().patients.find((p) => p.id === "PT01");
      expect(updated?.phone).toBe("9829999999");
      expect(updated?.summary).toBe("Updated clinical indication after MDT board review.");
      expect(updated?.labs.bili).toBe(1.5);
      expect(updated?.labs.inr).toBe(1.2);
    });
  });

  describe("Live Calculative Risk Indices for Dossier", () => {
    it("computes Rotterdam BCS-PI with correct classification and survival prediction", () => {
      const res = calculateRotterdam({
        enceph: 0,
        ascites: 1,
        ptRatio: 1.45,
        bilirubinMg: 2.8,
      });

      expect(res.score).toBeGreaterThan(1.5);
      expect(res.riskClass).toBe("Class III");
      expect(res.riskLevel).toBe("High Risk");
      expect(res.recommendation).toContain("TIPS/DIPS");
    });

    it("computes Clichy Score with favorable vs poor threshold at 5.4", () => {
      const favorable = calculateClichy({
        age: 45,
        bilirubinMg: 1.2,
        alt: 35,
        creatinineMg: 0.8,
      });
      expect(favorable.score).toBeLessThan(5.4);
      expect(favorable.riskGroup).toBe("Low Risk (Favorable)");

      const highRisk = calculateClichy({
        age: 68,
        bilirubinMg: 4.5,
        alt: 120,
        creatinineMg: 2.1,
      });
      expect(highRisk.score).toBeGreaterThanOrEqual(5.4);
      expect(highRisk.riskGroup).toBe("High Risk (Poor)");
    });

    it("computes Child-Pugh score, CTP grade, and 1-year survival", () => {
      const ctpA = calculateChildPugh({
        bilirubinMg: 1.0,
        albuminGdl: 4.2,
        inr: 1.1,
        ascites: "None",
        encephalopathy: "None",
      });
      expect(ctpA.score).toBe(5);
      expect(ctpA.grade).toBe("Class A");
      expect(ctpA.oneYrSurvival).toBe("100%");

      const ctpB = calculateChildPugh({
        bilirubinMg: 2.5,
        albuminGdl: 3.1,
        inr: 1.8,
        ascites: "Slight/Controlled",
        encephalopathy: "None",
      });
      expect(ctpB.score).toBe(9);
      expect(ctpB.grade).toBe("Class B");
      expect(ctpB.oneYrSurvival).toBe("80%");
    });

    it("computes MELD 3.0 score bounded between 6 and 40", () => {
      const meld = calculateMeld3({
        creatinine: 0.92,
        bilirubin: 2.8,
        inr: 1.45,
        sodium: 138,
        albumin: 2.9,
        isFemale: false,
      });
      expect(meld.meldScore).toBeGreaterThanOrEqual(6);
      expect(meld.meldScore).toBeLessThanOrEqual(40);
      expect(typeof meld.threeMonthMortality).toBe("string");
    });

    it("computes Cigarroa MACD maximum allowable contrast volume", () => {
      const contrast = calculateCigarroaMACD(70, 0.92);
      expect(contrast.macdMl).toBe(380.4);
      expect(contrast.safeLimit80Percent).toBe(304.3);
      expect(contrast.isSafe(200)).toBe(true);
      expect(contrast.isSafe(400)).toBe(false);
    });

    it("computes eGFR using CKD-EPI equation", () => {
      const egfr = calculateEgfrCkdEpi(0.92, 56, false);
      expect(egfr.egfr).toBeGreaterThan(60);
      expect(egfr.stage).toMatch(/G[1-5]/);
    });
  });

  describe("Data Tools Export Formats", () => {
    it("generates well-formed TSV rows from patient store", () => {
      const patients = useEndoflowStore.getState().patients;
      const tsvHeader = ["ID", "Name", "Age", "Sex", "HID", "Procedure", "Modality", "Status", "Scheme"].join("\t");
      const rows = patients.map((pt) =>
        [pt.id, pt.name, pt.age, pt.sex, pt.hid, pt.procedure, pt.modality, pt.status, pt.scheme].join("\t")
      );
      const fullTsv = [tsvHeader, ...rows].join("\n");

      expect(fullTsv.split("\n")).toHaveLength(patients.length + 1);
      expect(fullTsv).toContain("Ramswaroop Meena");
      expect(fullTsv).toContain("SMS-2026-089");
    });

    it("generates well-formed CSV rows with escaped fields", () => {
      const patients = useEndoflowStore.getState().patients;
      const csvHeader = ["ID", "Name", "Age", "Sex", "HID"].join(",");
      const rows = patients.map((pt) => [pt.id, `"${pt.name}"`, pt.age, pt.sex, pt.hid].join(","));
      const fullCsv = [csvHeader, ...rows].join("\n");

      expect(fullCsv).toContain('"Ramswaroop Meena"');
      expect(fullCsv).toContain('"Kamla Devi Sharma"');
    });
  });
});
