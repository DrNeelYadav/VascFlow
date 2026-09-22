import { describe, it, expect } from "vitest";
import {
  REAL_SMS_PATIENT_REGISTRY,
  RealSmsPatientCase,
  normalizeSmsCathLabDate,
  standardizeSemsProcedure,
  disambiguateDsaProcedure,
  getCathLabModality,
} from "../../app/lib/realData/smsCathLabRealData";
import {
  matchWardFilter,
  getWardBadgeStyle,
  WARD_FILTER_OPTIONS,
} from "../../app/dashboard/logbook/page";

describe("SMS Cath-Lab Master Logbook & Registry Precision Engine", () => {
  describe("1. Record Count & Mandatory Field Integrity", () => {
    it("contains all 758 authentic SMS hospital cath-lab records", () => {
      expect(REAL_SMS_PATIENT_REGISTRY.length).toBe(758);
    });

    it("verifies every record has populated core clinical attributes", () => {
      REAL_SMS_PATIENT_REGISTRY.forEach((c) => {
        expect(c.dsaNo).toBeDefined();
        expect(c.patientName.trim().length).toBeGreaterThan(0);
        expect(c.date).toBeDefined();
        expect(c.age).toBeGreaterThanOrEqual(0);
        expect(["Male", "Female"]).toContain(c.gender);
        expect(c.unit.trim().length).toBeGreaterThan(0);
        expect(c.crNumber.trim().length).toBeGreaterThan(0);
        expect(["MAAY", "RGHS", "PAID"]).toContain(c.schemeType);
        expect(c.procedureName.trim().length).toBeGreaterThan(0);
        expect(c.diagnosis.trim().length).toBeGreaterThan(0);
        expect(c.radiationDose).toBeDefined();
      });
    });
  });

  describe("2. Date Normalization & Excel Epoch Math (1899-12-30)", () => {
    it("verifies all 758 records have strict DD.MM.YYYY formatted dates", () => {
      const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
      REAL_SMS_PATIENT_REGISTRY.forEach((c) => {
        expect(c.date).toMatch(dateRegex);
        const [day, month, year] = c.date.split(".").map(Number);
        expect(day).toBeGreaterThanOrEqual(1);
        expect(day).toBeLessThanOrEqual(31);
        expect(month).toBeGreaterThanOrEqual(1);
        expect(month).toBeLessThanOrEqual(12);
        expect(year).toBeGreaterThanOrEqual(2000);
      });
    });

    it("verifies normalizeSmsCathLabDate converts Excel serial numbers using 1899-12-30 epoch", () => {
      // 45170 -> 01.09.2023
      expect(normalizeSmsCathLabDate("45170")).toBe("01.09.2023");
      expect(normalizeSmsCathLabDate(45170)).toBe("01.09.2023");

      // 45659 -> 02.01.2025
      expect(normalizeSmsCathLabDate("45659")).toBe("02.01.2025");
      expect(normalizeSmsCathLabDate(45659)).toBe("02.01.2025");

      // 45640 -> 14.12.2024
      expect(normalizeSmsCathLabDate("45640")).toBe("14.12.2024");
    });

    it("verifies normalizeSmsCathLabDate corrects date typos and 2-digit years", () => {
      expect(normalizeSmsCathLabDate("27.02,23")).toBe("27.02.2023");
      expect(normalizeSmsCathLabDate("16.01.23")).toBe("16.01.2023");
      expect(normalizeSmsCathLabDate("26.07.023")).toBe("26.07.2023");
      expect(normalizeSmsCathLabDate("20-08-2025")).toBe("20.08.2025");
      expect(normalizeSmsCathLabDate("1.07.23")).toBe("01.07.2023");
      expect(normalizeSmsCathLabDate("1.1.2024")).toBe("01.01.2024");
    });
  });

  describe("3. Chronological Descending Sorting (Latest First)", () => {
    it("verifies the registry is sorted descending with latest 2025 cases first", () => {
      const firstCase = REAL_SMS_PATIENT_REGISTRY[0];
      expect(firstCase.date.endsWith("2025")).toBe(true);

      const parseDateToTime = (dStr: string) => {
        const [day, month, year] = dStr.split(".").map(Number);
        return new Date(year, month - 1, day).getTime();
      };

      for (let i = 0; i < REAL_SMS_PATIENT_REGISTRY.length - 1; i++) {
        const currentTime = parseDateToTime(REAL_SMS_PATIENT_REGISTRY[i].date);
        const nextTime = parseDateToTime(REAL_SMS_PATIENT_REGISTRY[i + 1].date);
        expect(currentTime).toBeGreaterThanOrEqual(nextTime);
      }
    });

    it("verifies 2025 cases precede 2024, 2023, and 2022 cases", () => {
      const first2025Idx = REAL_SMS_PATIENT_REGISTRY.findIndex((c) => c.date.endsWith("2025"));
      const first2024Idx = REAL_SMS_PATIENT_REGISTRY.findIndex((c) => c.date.endsWith("2024"));
      const first2023Idx = REAL_SMS_PATIENT_REGISTRY.findIndex((c) => c.date.endsWith("2023"));
      const first2022Idx = REAL_SMS_PATIENT_REGISTRY.findIndex((c) => c.date.endsWith("2022"));

      expect(first2025Idx).toBe(0);
      expect(first2024Idx).toBeGreaterThan(first2025Idx);
      expect(first2023Idx).toBeGreaterThan(first2024Idx);
      expect(first2022Idx).toBeGreaterThan(first2023Idx);
    });
  });

  describe("4. SEMS Capitalization & Specific Procedure Standardization", () => {
    it("ensures no procedure contains lowercase 'Sems' or 'sems'", () => {
      REAL_SMS_PATIENT_REGISTRY.forEach((c) => {
        expect(c.procedureName).not.toMatch(/\bSems\b/);
        expect(c.procedureName).not.toMatch(/\bsems\b/);
      });
    });

    it("verifies standardized SEMS procedure names", () => {
      expect(standardizeSemsProcedure("Sems")).toBe("Biliary SEMS Placement");
      expect(standardizeSemsProcedure("Sems Biliary Stenting")).toBe("Biliary SEMS Placement");
      expect(standardizeSemsProcedure("Bilateral Sems")).toBe("Bilateral Biliary SEMS Placement");
      expect(standardizeSemsProcedure("B/L Billiary Sems Stenting")).toBe("B/L Billiary SEMS Stenting");
      expect(standardizeSemsProcedure("Ptbd Biliary Sems Placement")).toBe("Ptbd Biliary SEMS Placement");
    });

    it("verifies that all SEMS procedures in registry feature uppercase SEMS", () => {
      const semsCases = REAL_SMS_PATIENT_REGISTRY.filter((c) =>
        c.procedureName.toUpperCase().includes("SEMS")
      );
      expect(semsCases.length).toBeGreaterThan(0);
      semsCases.forEach((c) => {
        expect(c.procedureName).toContain("SEMS");
      });
    });
  });

  describe("5. Specificity for 'DSA' (Disambiguation Rules)", () => {
    it("ensures zero records have ambiguous 'Dsa' or 'DSA' alone", () => {
      REAL_SMS_PATIENT_REGISTRY.forEach((c) => {
        expect(c.procedureName.trim().toLowerCase()).not.toBe("dsa");
      });
    });

    it("verifies JNA specificity -> Diagnostic Cerebral & ECA Angiography (JNA DSA)", () => {
      const result = disambiguateDsaProcedure("DSA", "JNA Tumor", "ENT 1");
      expect(result).toBe("Diagnostic Cerebral & ECA Angiography (JNA DSA)");
    });

    it("verifies BAE / Hemoptysis / Bronchial specificity -> Bronchial Artery Angiography & Embolization (BAE)", () => {
      expect(disambiguateDsaProcedure("DSA", "Severe Hemoptysis", "Respiratory Ward")).toBe(
        "Bronchial Artery Angiography & Embolization (BAE)"
      );
      expect(disambiguateDsaProcedure("Dsa", "BAE Planned", "Ward")).toBe(
        "Bronchial Artery Angiography & Embolization (BAE)"
      );
      expect(disambiguateDsaProcedure("DSA", "Bronchial Bleed", "Chest")).toBe(
        "Bronchial Artery Angiography & Embolization (BAE)"
      );
    });

    it("verifies Glomus / Carotid specificity -> Diagnostic Carotid & Glomus Angiography (DSA)", () => {
      expect(disambiguateDsaProcedure("DSA", "Glomus Jugulare", "ENT")).toBe(
        "Diagnostic Carotid & Glomus Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("Dsa", "Carotid Stenosis", "Neurology")).toBe(
        "Diagnostic Carotid & Glomus Angiography (DSA)"
      );
    });

    it("verifies PAD / Leg / SFA / Claudication specificity -> Peripheral Lower Limb Angiography (DSA)", () => {
      expect(disambiguateDsaProcedure("DSA", "PAD severe", "Vascular")).toBe(
        "Peripheral Lower Limb Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("Dsa", "Right Leg Ischemia", "Surgery")).toBe(
        "Peripheral Lower Limb Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("DSA", "SFA Occlusion", "Surgery")).toBe(
        "Peripheral Lower Limb Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("Dsa", "Intermittent Claudication", "OPD")).toBe(
        "Peripheral Lower Limb Angiography (DSA)"
      );
    });

    it("verifies Splenic / GDA / Aneurysm / Bleed / Liver specificity -> Celiac & Visceral Angiography (DSA)", () => {
      expect(disambiguateDsaProcedure("DSA", "Splenic Artery Aneurysm", "Old Gastro")).toBe(
        "Celiac & Visceral Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("Dsa", "GDA Bleed", "Surgery")).toBe(
        "Celiac & Visceral Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("DSA", "Liver Mass", "Liver Ward")).toBe(
        "Celiac & Visceral Angiography (DSA)"
      );
    });

    it("verifies fallback default -> Diagnostic Visceral & Peripheral Angiography (DSA)", () => {
      expect(disambiguateDsaProcedure("DSA", "Routine Angiography", "General Ward")).toBe(
        "Diagnostic Visceral & Peripheral Angiography (DSA)"
      );
      expect(disambiguateDsaProcedure("Dsa", "Dsa", "Unit I")).toBe(
        "Diagnostic Visceral & Peripheral Angiography (DSA)"
      );
    });

    it("verifies authentic record DSA 128 (Liver Ward) resolved to Celiac & Visceral Angiography (DSA)", () => {
      const case128 = REAL_SMS_PATIENT_REGISTRY.find((c) => c.dsaNo === "128");
      expect(case128).toBeDefined();
      expect(case128?.procedureName).toBe("Celiac & Visceral Angiography (DSA)");
    });
  });

  describe("6. Logbook UI Smart Filtering & Ward Badge Capabilities", () => {
    it("verifies ward filter matching logic for key SMS hospital departments", () => {
      expect(matchWardFilter("HEPATO PANCREATO BILLIARY SURGERY/UNIT 1", "LIVER_ICU")).toBe(true);
      expect(matchWardFilter("LT ICU /HPB/103", "LIVER_ICU")).toBe(true);
      expect(matchWardFilter("IR/UNIT-1/OLD GASTRO WARD", "OLD_GASTRO")).toBe(true);
      expect(matchWardFilter("GASTROLOGY WARD SSB", "OLD_GASTRO")).toBe(true);
      expect(matchWardFilter("GASTROENTEROLOGY UNIT 1 (SSB)", "SSB")).toBe(true);
      expect(matchWardFilter("NEUROLOGY/UNIT 4/BMRC 1", "BMRC_NEURO")).toBe(true);
      expect(matchWardFilter("MALE ENT WARD UNIT 1", "ENT")).toBe(true);
      expect(matchWardFilter("OPD", "OPD")).toBe(true);
      expect(matchWardFilter("ANY WARD", "ALL")).toBe(true);
    });

    it("verifies ward badge style returns styled classes with valid Tailwind keys", () => {
      const icuStyle = getWardBadgeStyle("Liver ICU");
      expect(icuStyle.bg).toContain("rose");

      const gastroStyle = getWardBadgeStyle("Old Gastro Ward");
      expect(gastroStyle.bg).toContain("amber");

      const ssbStyle = getWardBadgeStyle("SSB Unit 1");
      expect(ssbStyle.bg).toContain("blue");

      const neuroStyle = getWardBadgeStyle("BMRC 1 Neurology");
      expect(neuroStyle.bg).toContain("purple");
    });

    it("verifies getCathLabModality classifies procedures accurately into XA, CT, US", () => {
      expect(getCathLabModality({ procedureName: "Bronchial Artery Embolization" })).toBe("XA");
      expect(getCathLabModality({ procedureName: "Diagnostic Visceral Angiography (DSA)" })).toBe("XA");
      expect(getCathLabModality({ procedureName: "Usg Guided Procedure" })).toBe("US");
      expect(getCathLabModality({ procedureName: "CT Guided Biopsy", diagnosis: "Chest mass" })).toBe("CT");
    });

    it("verifies all expected options exist in WARD_FILTER_OPTIONS", () => {
      const values = WARD_FILTER_OPTIONS.map((o) => o.value);
      expect(values).toContain("ALL");
      expect(values).toContain("LIVER_ICU");
      expect(values).toContain("OLD_GASTRO");
      expect(values).toContain("SSB");
      expect(values).toContain("AGH");
      expect(values).toContain("SSH");
      expect(values).toContain("BMRC_NEURO");
    });
  });
});
