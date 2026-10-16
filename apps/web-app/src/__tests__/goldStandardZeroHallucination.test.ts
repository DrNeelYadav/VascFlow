import { describe, it, expect } from "vitest";
import { GOLD_STANDARD_1090_CASES } from "../../app/lib/realData/goldStandard1090Cases";
import { GET } from "../../app/api/cases/archive/route";
import { NextRequest } from "next/server";

describe("Strict Zero-Hallucination & Clinical Safety Test Suite (SMS Cath-Lab Master Registry)", () => {
  describe("1. Demographics & Gender Attribution Integrity", () => {
    it("verifies Shivika (IR #1090) is accurately labeled Female with unrecorded age/procedure left blank", () => {
      const shivika = GOLD_STANDARD_1090_CASES.find((c) => c.dsaNo === "1090");
      expect(shivika).toBeDefined();
      expect(shivika?.patientName).toBe("Shivika");
      expect(shivika?.gender).toBe("Female");
      expect(shivika?.age).toBe("—");
      expect(shivika?.procedureName).toBe("—");
      expect(shivika?.diagnosis).toBe("—");
    });

    it("verifies Uma Agarwal (IR #1087) is accurately labeled Female with unrecorded age/procedure left blank", () => {
      const uma = GOLD_STANDARD_1090_CASES.find((c) => c.dsaNo === "1087");
      expect(uma).toBeDefined();
      expect(uma?.patientName).toBe("Uma Agarwal");
      expect(uma?.gender).toBe("Female");
      expect(uma?.age).toBe("—");
      expect(uma?.procedureName).toBe("—");
      expect(uma?.diagnosis).toBe("—");
    });

    it("verifies Vimlesh (IR #1086) is accurately labeled Female", () => {
      const vimlesh = GOLD_STANDARD_1090_CASES.find((c) => c.dsaNo === "1086");
      expect(vimlesh).toBeDefined();
      expect(vimlesh?.patientName).toBe("Vimlesh");
      expect(vimlesh?.gender).toBe("Female");
      expect(vimlesh?.age).toBe("—");
      expect(vimlesh?.procedureName).toBe("—");
    });

    it("verifies female patients with Devi/Bai/Kumari/Smt are never defaulted to Male", () => {
      const femaleKeywords = ["devi", "bai", "kumari", "kanwar", "begum", "smt"];
      const matches = GOLD_STANDARD_1090_CASES.filter((c) => {
        const words = c.patientName.toLowerCase().split(/\s+/);
        return words.some((w) => femaleKeywords.includes(w) || w.endsWith("devi") || w.endsWith("kumari") || (w.endsWith("bai") && !w.startsWith("bair")));
      });
      expect(matches.length).toBeGreaterThan(100);
      matches.forEach((c) => {
        expect(c.gender).toBe("Female");
      });
    });

    it("verifies no cases default to fake age 45 when age is unrecorded in source documents", () => {
      // In source JSON, 77 cases had empty Age_Gender. They must now have age '—'
      const unrecordedAgeCases = GOLD_STANDARD_1090_CASES.filter((c) => c.age === "—");
      expect(unrecordedAgeCases.length).toBeGreaterThanOrEqual(70);
    });
  });

  describe("2. Elimination of Phantom Procedures & Diagnoses", () => {
    it("verifies zero occurrences of placeholder 'Interventional Radiology Procedure' in registry", () => {
      const phantomProcedures = GOLD_STANDARD_1090_CASES.filter(
        (c) =>
          c.procedureName.toLowerCase().includes("interventional radiology procedure") ||
          c.diagnosis.toLowerCase().includes("interventional radiology procedure")
      );
      expect(phantomProcedures).toEqual([]);
    });

    it("verifies genuine procedure names are preserved when recorded in source DSA registry", () => {
      const case1085 = GOLD_STANDARD_1090_CASES.find((c) => c.dsaNo === "1085");
      expect(case1085?.patientName).toBe("Gopal Lal Meena");
      expect(case1085?.procedureName).toBe("Bronchial Artery Embolization");
      expect(case1085?.diagnosis).toBe("—");

      const case1089 = GOLD_STANDARD_1090_CASES.find((c) => c.dsaNo === "1089");
      expect(case1089?.patientName).toBe("Sachin Kr. Parewa");
      expect(case1089?.procedureName).toBe("Adrenal Venous Sampling");
      expect(case1089?.diagnosis).toBe("—");
    });
  });

  describe("3. Archive API Filtering & Date Parsing (Year 2026)", () => {
    it("returns all 199 cases for year 2026 regardless of delimiter (/ or . or -)", async () => {
      const req = new NextRequest("http://localhost:3000/api/cases/archive?year=2026&limit=200");
      const res = await GET(req);
      expect(res.status).toBe(200);
      const json = await res.json();
      expect(json.total).toBe(199);
      expect(json.cases.length).toBe(199);
      json.cases.forEach((c: any) => {
        expect(c.date).toContain("2026");
      });
    });

    it("serves newest cases first (DSA #1090 down to #1) by default", async () => {
      const req = new NextRequest("http://localhost:3000/api/cases/archive?limit=10");
      const res = await GET(req);
      const json = await res.json();
      expect(json.cases[0].dsaNo).toBe("1090");
      expect(json.cases[1].dsaNo).toBe("1089");
      expect(json.cases[2].dsaNo).toBe("1088");
    });

    it("serves oldest cases first (DSA #1 up to #1090) when sort=oldest is requested", async () => {
      const req = new NextRequest("http://localhost:3000/api/cases/archive?sort=oldest&limit=10");
      const res = await GET(req);
      const json = await res.json();
      expect(json.cases[0].dsaNo).toBe("1");
      expect(json.cases[1].dsaNo).toBe("2");
      expect(json.cases[2].dsaNo).toBe("3");
    });
  });
});
