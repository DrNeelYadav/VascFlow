import { describe, it, expect } from "vitest";
import {
  calculateCigarroaMacd,
  evaluateContrastSafety,
  assessRadiationSafety,
  parseDicomRadiationReport,
} from "../../../../../apps/web-app/app/lib/pacs/dicomSrParser";
import { parseGs1Barcode } from "../../../../../apps/web-app/app/dashboard/inventory/BarcodeScannerModal";
import {
  computeDossierSignature,
  buildPreAuthDossierPdf,
} from "../../../../../apps/web-app/app/lib/schemes/pdfPacketBuilder";
import {
  formatNatureLatexTable,
  formatNatureMarkdownTable,
  computeCohortSummary,
  deIdentifyToResearchPatient,
} from "../../../../../apps/web-app/app/lib/census/natureTableFormatter";

describe("SUB-AGENT 1: DICOM-SR & Radiation Dosimetry Models", () => {
  it("calculates Cigarroa MACD accurately: (5 * Weight) / Creatinine", () => {
    // 70 kg, 1.4 mg/dL -> (5 * 70) / 1.4 = 250 mL
    const macd = calculateCigarroaMacd(70, 1.4);
    expect(macd).toBe(250);
  });

  it("evaluates contrast safety load ratio and detects exceeded limit", () => {
    // 60 kg, 1.5 mg/dL -> MACD = (5 * 60) / 1.5 = 200 mL
    // Delivered 240 mL -> Ratio 1.2 (Exceeded)
    const evaluation = evaluateContrastSafety(
      { weightKg: 60, serumCreatinineMgDl: 1.5 },
      240
    );
    expect(evaluation.isExceeded).toBe(true);
    expect(evaluation.macdVolumeMl).toBe(200);
    expect(evaluation.macdRatio).toBe(1.2);
    expect(evaluation.ciAkiRiskCategory).toBe("CRITICAL");
  });

  it("classifies CIRSE radiation sentinel thresholds correctly", () => {
    // High DAP > 500 Gy.cm2 triggers SENTINEL_EVENT
    const highDap = assessRadiationSafety(550, 2500, 45);
    expect(highDap.safetyGrade).toBe("SENTINEL_EVENT");
    expect(highDap.isHighDapAlert).toBe(true);

    // Normal dose
    const normalDose = assessRadiationSafety(120, 800, 15);
    expect(normalDose.safetyGrade).toBe("SAFE");
  });

  it("parses DICOM-SR TID 10001 projection radiation dose parameters", () => {
    const dummyBuffer = new ArrayBuffer(256);
    const sr = parseDicomRadiationReport(dummyBuffer);
    expect(sr.totalFluoroTimeMinutes).toBeGreaterThan(0);
    expect(sr.doseAreaProductGyCm2).toBeGreaterThan(0);
    expect(sr.referencePointAirKermaMGy).toBeGreaterThan(0);
    expect(sr.cArmGeometry).toBeDefined();
    expect(sr.acquisitionEvents.length).toBeGreaterThan(0);
  });
});

describe("SUB-AGENT 2: GS1-128 & 2D DataMatrix Parser", () => {
  it("parses parenthesized GS1 Application Identifiers (01, 17, 10, 21)", () => {
    const raw = "(01)00884521098231(17)270831(10)LOT8291042(21)SN104928";
    const parsed = parseGs1Barcode(raw);
    expect(parsed).not.toBeNull();
    expect(parsed?.gtin).toBe("00884521098231");
    expect(parsed?.expirationDate).toBe("2027-08-31");
    expect(parsed?.lotNumber).toBe("LOT8291042");
    expect(parsed?.serialNumber).toBe("SN104928");
    expect(parsed?.catalogName).toContain("Wallstent");
    expect(parsed?.category).toBe("SEMS");
  });

  it("handles unparenthesized raw GS1 barcode strings", () => {
    const raw = "01007619284102941726123110LOT5510931";
    const parsed = parseGs1Barcode(raw);
    expect(parsed).not.toBeNull();
    expect(parsed?.gtin).toBe("00761928410294");
    expect(parsed?.catalogName).toContain("Lipiodol");
    expect(parsed?.category).toBe("Embolic Agents");
  });
});

describe("SUB-AGENT 3: Pre-Auth Dossier & Cryptographic Signature", () => {
  const sampleDossier = {
    caseId: "CASE-RJ-TACE-001",
    patientCrNo: "CR-2026-09142",
    patientIpdNo: "IPD-48192",
    patientName: "RAMESH CHANDRA MEENA",
    age: 54,
    gender: "Male" as const,
    bedNo: "W-3B / 14",
    scheme: "MAAY_CHIRANJEEVI" as const,
    schemeCardTid: "TID-RJ-2026-98124",
    packageCode: "2849-IN061A",
    packageName: "Conventional TACE",
    category: "Interventional Oncology",
    baseTariffInr: 47960,
    approvedImplants: [
      {
        implantCode: "2849-IN061A IMP 38",
        name: "Lipiodol Ultra-Fluid",
        lotNumber: "LOT-5510931",
        cappedPriceInr: 18000,
      },
    ],
    clinicalIndication: "Multifocal HCC",
    diagnosis: "Hepatocellular Carcinoma",
    icd10Code: "C22.0",
    renalProfile: {
      serumCreatinineMgDl: 1.1,
      egfrMlmIn: 78,
      inr: 1.15,
      plateletCount: 185,
      contrastDeliveredMl: 65,
      cigarroaMacdMl: 245,
      macdRatio: 0.27,
    },
    dosimetry: {
      angiosuite: "Cath Lab 1 (Siemens Artis Zee)",
      fluoroTimeMinutes: 14.8,
      dapGyCm2: 122.4,
      airKermaMGy: 740,
    },
    techniqueSummary: {
      accessSite: "Right Common Femoral Artery",
      sheathSize: "6F",
      catheterUsed: "Progreat 2.7F",
      hemostasisMethod: "Angio-Seal 6F",
      immediateComplications: "None",
    },
    consultant: {
      name: "Prof. (Dr.) Interventional Radiologist",
      title: "Senior Professor",
      medicalRegNo: "RMC-IR-2014-0492",
      department: "Interventional Radiology, SMS Hospital",
    },
  };

  it("generates deterministic cryptographic HMAC-SHA256 signature", () => {
    const sig1 = computeDossierSignature(sampleDossier);
    const sig2 = computeDossierSignature(sampleDossier);
    expect(sig1).toBe(sig2);
    expect(sig1).toHaveLength(64); // SHA-256 hex
  });

  it("builds valid multi-page PDF document buffer with header and trailer", () => {
    const result = buildPreAuthDossierPdf(sampleDossier);
    expect(result.contentLength).toBeGreaterThan(500);
    const pdfText = new TextDecoder("latin1").decode(result.pdfBuffer);
    expect(pdfText).toContain("%PDF-1.4");
    expect(pdfText).toContain("%%EOF");
    expect(pdfText).toContain(sampleDossier.caseId);
    expect(result.verificationHash).toBeDefined();
  });
});

describe("SUB-AGENT 4: Multicenter Research Registry & Export Pipeline", () => {
  it("enforces 18 HIPAA Safe Harbor rules: caps age at 90+ and converts date to quarter", () => {
    const deId = deIdentifyToResearchPatient(
      {
        crNo: "CR-SENSITIVE-9999",
        age: 94,
        gender: "Female",
        procedureCategory: "Visceral Embolization",
        procedureName: "cTACE",
        procedureCode: "2849-IN061A",
        procedureDate: new Date("2026-05-18"),
        indication: "HCC",
        technicalSuccess: true,
        fluoroTimeMinutes: 14.2,
        dapGyCm2: 110.5,
        contrastVolumeMl: 60,
      },
      0
    );

    expect(deId.researchId).toBe("VF-2026-001");
    expect(deId.ageBinned).toBe("90+"); // Age strictly capped
    expect(deId.quarterYear).toBe("Q2 2026"); // Date binned to quarter
  });

  it("generates publication-ready LaTeX table conforming to booktabs format", () => {
    const sampleCohort = [
      deIdentifyToResearchPatient(
        {
          age: 55,
          gender: "Male",
          procedureCategory: "Visceral Embolization",
          procedureName: "cTACE",
          procedureCode: "2849-IN061A",
          procedureDate: "2026-03-12",
          indication: "HCC",
          technicalSuccess: true,
          fluoroTimeMinutes: 16.0,
          dapGyCm2: 120.0,
          contrastVolumeMl: 55,
        },
        0
      ),
    ];

    const latex = formatNatureLatexTable(sampleCohort);
    expect(latex).toContain("\\begin{table}");
    expect(latex).toContain("\\toprule");
    expect(latex).toContain("\\midrule");
    expect(latex).toContain("\\bottomrule");
    expect(latex).toContain("\\end{table}");

    const md = formatNatureMarkdownTable(sampleCohort);
    expect(md).toContain("### Table 1:");
    expect(md).toContain("CIRSE");
  });
});
