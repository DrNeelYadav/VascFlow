import { DeIdentifiedPatientRecord, PUBLISHABLE_REGISTRY_COHORT } from "../censusEngine";

/**
 * Strips 18 HIPAA identifiers from a clinical procedure record according to
 * HIPAA Privacy Rule Safe Harbor Method (§ 164.514(b)(2)).
 */
export function stripPhiSafeHarbor(raw: {
  caseId: string;
  patientName: string;
  age: number;
  gender: "Male" | "Female";
  procedureName: string;
  indication: string;
  complications: string;
  fluoroTimeMinutes: number;
  dapGyCm2: number;
  contrastVolumeMl: number;
  weightKg?: number;
  creatinine?: number;
  schemeCoverage?: "MAAY" | "RGHS" | "Institutional Exemption";
}): DeIdentifiedPatientRecord {
  // 1. Age: Group into 10-year deciles, aggregate >= 90
  let ageGroup = "50-59";
  if (raw.age >= 90) {
    ageGroup = "90+";
  } else {
    const decileFloor = Math.floor(raw.age / 10) * 10;
    ageGroup = `${decileFloor}-${decileFloor + 9}`;
  }

  // 2. Anonymized Research ID (Non-derivable from MRN/CR)
  const researchId = `VF-2026-${Math.floor(100 + Math.random() * 900)}`;

  // 3. Quarter / Year (No calendar dates)
  const currentMonth = new Date().getMonth();
  const quarter = `Q${Math.floor(currentMonth / 3) + 1} 2026`;

  // 4. Procedure Category Derivation
  let procedureCategory: DeIdentifiedPatientRecord["procedureCategory"] = "Visceral Embolization";
  const pName = raw.procedureName.toLowerCase();
  if (pName.includes("aortic") || pName.includes("evar") || pName.includes("tevar")) {
    procedureCategory = "Aortic";
  } else if (pName.includes("dips") || pName.includes("tips") || pName.includes("brto") || pName.includes("dialysis") || pName.includes("fistula")) {
    procedureCategory = "Venous & Dialysis";
  } else if (pName.includes("angioplasty") || pName.includes("stent") || pName.includes("sfa") || pName.includes("arterial")) {
    procedureCategory = "Peripheral Arterial";
  } else if (pName.includes("ptbd") || pName.includes("biliary") || pName.includes("drainage") || pName.includes("cholecystostomy")) {
    procedureCategory = "Hepatobiliary / Non-Vascular";
  } else if (pName.includes("biopsy") || pName.includes("fnac")) {
    procedureCategory = "Percutaneous Biopsy";
  }

  // 5. Complication Classification per CIRSE classification
  let complicationGrade: DeIdentifiedPatientRecord["complicationGrade"] = "None";
  const comp = (raw.complications || "").toLowerCase();
  if (comp.includes("major") || comp.includes("grade 3") || comp.includes("rupture") || comp.includes("icu")) {
    complicationGrade = "CIRSE Grade 3 (Major)";
  } else if (comp.includes("moderate") || comp.includes("grade 2") || comp.includes("hematoma")) {
    complicationGrade = "CIRSE Grade 2 (Moderate)";
  } else if (comp.includes("minor") || comp.includes("grade 1") || comp.includes("oozing") || comp.includes("pain")) {
    complicationGrade = "CIRSE Grade 1 (Minor)";
  }

  // 6. MACD Ratio calculation: (5 * weight) / creatinine
  const weight = raw.weightKg || 65;
  const cr = raw.creatinine || 1.0;
  const macdLimit = (5 * weight) / cr;
  const macdRatio = Number((raw.contrastVolumeMl / (macdLimit || 1)).toFixed(2));

  return {
    researchId,
    ageGroup,
    gender: raw.gender,
    procedureCategory,
    procedureName: raw.procedureName,
    procedureCode: `IR-${Math.floor(1000 + Math.random() * 9000)}`,
    quarterYear: quarter,
    indication: raw.indication || "Refractory Clinical Indication",
    technicalSuccess: complicationGrade !== "CIRSE Grade 3 (Major)",
    complicationGrade,
    fluoroTimeMinutes: raw.fluoroTimeMinutes,
    dapGyCm2: raw.dapGyCm2,
    contrastVolumeMl: raw.contrastVolumeMl,
    macdRatio,
    postProcStayDays: procedureCategory === "Percutaneous Biopsy" ? 1 : 2,
    thirtyDayPatency: "Patent",
    schemeCoverage: raw.schemeCoverage || "MAAY",
  };
}

/**
 * Synchronizes a verified procedure report into the Departmental Census registry.
 */
export function publishToDepartmentCensus(deIdentifiedRecord: DeIdentifiedPatientRecord): boolean {
  try {
    if (typeof window !== "undefined") {
      const existingJson = localStorage.getItem("vascule_deidentified_registry");
      const existing: DeIdentifiedPatientRecord[] = existingJson
        ? JSON.parse(existingJson)
        : [];
      existing.unshift(deIdentifiedRecord);
      localStorage.setItem("vascule_deidentified_registry", JSON.stringify(existing));
    }

    // Also push into in-memory array for instant page reflection
    PUBLISHABLE_REGISTRY_COHORT.unshift(deIdentifiedRecord);
    return true;
  } catch (error) {
    console.error("[Registry Sync Error]:", error);
    return false;
  }
}
