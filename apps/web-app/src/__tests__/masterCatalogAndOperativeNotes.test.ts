import { describe, it, expect } from "vitest";
import {
  ALL_MASTER_PROCEDURES,
  MASTER_CATEGORIES_METADATA,
  getMasterProcedureById,
  searchMasterProcedures,
  buildOperativeNote,
  OperativeNoteOptions,
} from "../../app/lib/masterCatalog";
import { getConsentForProcedure } from "../../app/lib/consent/consentData";

describe("Comprehensive Master Catalog & Operative Notes Engine", () => {
  it("verifies all 22 Interventional Radiology categories are represented", () => {
    expect(MASTER_CATEGORIES_METADATA.length).toBe(22);
    const categoryNumbers = new Set(ALL_MASTER_PROCEDURES.map((p) => p.categoryNumber));
    for (let i = 1; i <= 22; i++) {
      expect(categoryNumbers.has(i)).toBe(true);
    }
  });

  it("verifies all procedures have unique IDs and required attributes", () => {
    const ids = ALL_MASTER_PROCEDURES.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ALL_MASTER_PROCEDURES.length);

    ALL_MASTER_PROCEDURES.forEach((p) => {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.categoryName.trim().length).toBeGreaterThan(0);
      expect(p.maayRghsCompatibility).toBeDefined();
      expect(p.maayRghsCompatibility.packageName.trim().length).toBeGreaterThan(0);
      expect(p.maayRghsCompatibility.packageCode.trim().length).toBeGreaterThan(0);
      expect(p.maayRghsCompatibility.icd10.trim().length).toBeGreaterThan(0);
      expect(["MAAY", "RGHS", "BOTH"]).toContain(p.maayRghsCompatibility.schemeName);
      expect(p.postOpCare).toBeDefined();
      expect(p.postOpCare.immobilizationHours).toBeGreaterThanOrEqual(1);
      expect(p.postOpCare.medications.length).toBeGreaterThan(0);
    });
  });

  it("verifies dedicated Venous and Varicose Vein procedures exist with explicit modeling", () => {
    // VenaSeal GSV and SSV
    const venasealGsv = getMasterProcedureById("cat10-venaseal-gsv");
    expect(venasealGsv).toBeDefined();
    expect(venasealGsv?.title).toContain("VenaSeal");
    expect(venasealGsv?.maayRghsCompatibility.packageName).toBe("Endovenous Cyanoacrylate Closure (VenaSeal)");

    const venasealSsv = getMasterProcedureById("cat10-venaseal-ssv");
    expect(venasealSsv).toBeDefined();

    // Sclerotherapy and Perforators
    const foam = getMasterProcedureById("cat10-foam-sclerotherapy");
    expect(foam).toBeDefined();

    const perfSclero = getMasterProcedureById("cat10-perforator-sclerotherapy");
    expect(perfSclero).toBeDefined();

    const perfGlue = getMasterProcedureById("cat10-perforator-glue");
    expect(perfGlue).toBeDefined();

    // Varicose vein embolization (coils, glue, coils + glue)
    const varCoils = getMasterProcedureById("cat10-varicose-embolization-microcoils");
    expect(varCoils).toBeDefined();

    const varGlue = getMasterProcedureById("cat10-varicose-embolization-glue");
    expect(varGlue).toBeDefined();

    const varCoilsGlue = getMasterProcedureById("cat10-varicose-embolization-coils-glue");
    expect(varCoilsGlue).toBeDefined();
  });

  it("verifies Budd-Chiari Syndrome procedures exist including collateral coiling and glue", () => {
    const bcsHvAngio = getMasterProcedureById("cat03-bcs-hv-angioplasty");
    expect(bcsHvAngio).toBeDefined();

    const bcsIvcCavoplasty = getMasterProcedureById("cat03-bcs-ivc-cavoplasty");
    expect(bcsIvcCavoplasty).toBeDefined();

    const brto = getMasterProcedureById("cat03-brto-varices");
    expect(brto).toBeDefined();

    const parto = getMasterProcedureById("cat03-parto-varices");
    expect(parto).toBeDefined();

    const carto = getMasterProcedureById("cat03-carto-varices");
    expect(carto).toBeDefined();

    const glueVarices = getMasterProcedureById("cat03-glue-varices");
    expect(glueVarices).toBeDefined();

    const coilsGlueVarices = getMasterProcedureById("cat03-coils-plus-glue-collaterals");
    expect(coilsGlueVarices).toBeDefined();

    const venoVenous = getMasterProcedureById("cat03-bcs-veno-venous-collateral-coiling-glue");
    expect(venoVenous).toBeDefined();
    expect(venoVenous?.title).toContain("Intrahepatic Veno-Venous Collateral Embolization");
  });

  it("verifies mandatory Chest X-ray order is present for thoracic and lung biopsies", () => {
    const lungBiopsy = getMasterProcedureById("cat01-lung-subpleural-us");
    expect(lungBiopsy).toBeDefined();
    expect(lungBiopsy?.postOpCare.requiredImaging).toContain("Chest X-ray");
    expect(lungBiopsy?.postOpCare.requiredImaging).toContain("pneumothorax");

    const lungFnac = getMasterProcedureById("cat01-lung-fnac-ct");
    expect(lungFnac).toBeDefined();
    expect(lungFnac?.postOpCare.requiredImaging).toContain("Chest X-ray");
  });

  it("builds a clinical operative report with SMS Hospital header and MAAY/RGHS compatibility tag", () => {
    const tips = getMasterProcedureById("cat03-tips-viatorr");
    expect(tips).toBeDefined();

    const options: OperativeNoteOptions = {
      patientName: "Ramswaroop Meena",
      age: 54,
      gender: "Male",
      crNumber: "SMS-2026-089",
      ipdBed: "Ward 14 / Bed 3",
      dateOfProcedure: "2026-09-15",
      supervisingConsultant: "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
      primaryOperator: "Dr. Neel Yadav (DM Resident)",
    };

    const note = buildOperativeNote(tips!, options);

    // Verify SMS Header
    expect(note).toContain("SAWAI MAN SINGH MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR");
    expect(note).toContain("DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY");
    expect(note).toContain("CLINICAL INTERVENTIONAL OPERATIVE REPORT");

    // Verify Patient Demographics
    expect(note).toContain("Ramswaroop Meena");
    expect(note).toContain("SMS-2026-089");
    expect(note).toContain("Dr. Meenu Bagarhatta (Sr. Prof & Head)");
    expect(note).toContain("Dr. Neel Yadav (DM Resident)");

    // Verify Scheme Tag
    expect(note).toContain("[MAAY / RGHS Compatible: Transjugular Intrahepatic Portosystemic Shunt (TIPS)]");
    expect(note).toContain("Package Code: 1849-IN060A");

    // Verify Procedural Technique & Nursing Care
    expect(note).toContain("PROCEDURAL TECHNIQUE & FINDINGS:");
    expect(note).toContain("POST-OPERATIVE ORDERS & NURSING CARE:");
    expect(note).toContain("Strict flat bedrest; do not move/flex limb for 4 hours");
    expect(note).toContain("Duplex Doppler Ultrasound of TIPS shunt at 24 hours");
    expect(note).toContain("Syp Lactulose");
  });

  it("retrieves statutory bilingual informed consents", () => {
    const vAb = getConsentForProcedure("consent-venous-ablation");
    expect(vAb).toBeDefined();
    expect(vAb?.nameHi).toContain("वेनासील");
    expect(vAb?.benefitsHi.length).toBeGreaterThan(0);
    expect(vAb?.specificRisksHi.length).toBeGreaterThan(0);

    const bcsEmbolo = getConsentForProcedure("consent-bcs-embolization");
    expect(bcsEmbolo).toBeDefined();
    expect(bcsEmbolo?.nameHi).toContain("बड-शियारी");
  });

  it("searches procedures by keyword and category", () => {
    const results = searchMasterProcedures("venaseal");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results.some((r) => r.id === "cat10-venaseal-gsv")).toBe(true);

    const bcsResults = searchMasterProcedures("budd-chiari");
    expect(bcsResults.length).toBeGreaterThanOrEqual(3);
  });
it("verifies newly integrated high-frequency SMS Cath-Lab procedures exist with complete specs", () => {
    // 1. JNA Embolization
    const jna = getMasterProcedureById("cat16-jna-embolization");
    expect(jna).toBeDefined();
    expect(jna?.title).toContain("Juvenile Nasopharyngeal Angiofibroma");
    expect(jna?.embolicOrImplants).toContain("PVA");

    // 2. GDA Pseudoaneurysm Sandwich Embolization
    const gda = getMasterProcedureById("cat06-gda-pseudoaneurysm-embolization");
    expect(gda).toBeDefined();
    expect(gda?.title).toContain("Gastroduodenal Artery (GDA) Pseudoaneurysm");
    expect(gda?.proceduralNarrativeTemplate).toContain("Sandwich technique");

    // 3. CFA Thrombin Injection
    const thrombin = getMasterProcedureById("cat04-cfa-thrombin-injection");
    expect(thrombin).toBeDefined();
    expect(thrombin?.title).toContain("Thrombin Injection");
    expect(thrombin?.modality).toBe("US");

    // 4. Bronchial Artery Embolization (BAE)
    const bae = getMasterProcedureById("cat04-bae-massive-hemoptysis");
    expect(bae).toBeDefined();
    expect(bae?.title).toContain("Bronchial Artery Embolization");
    expect(bae?.postOpCare.redFlags).toContain("Bilateral leg weakness or sensory loss (anterior spinal artery ischemia)");

    // 5. Adrenal Vein Sampling (AVS)
    const avs = getMasterProcedureById("cat17-adrenal-vein-sampling-avs");
    expect(avs).toBeDefined();
    expect(avs?.title).toContain("Adrenal Vein Sampling");
    expect(avs?.proceduralNarrativeTemplate).toContain("Selectivity Index");

    // 6. Ring Internal-External PTBD
    const ringPtbd = getMasterProcedureById("cat03-ptbd-ring-internal-external");
    expect(ringPtbd).toBeDefined();
    expect(ringPtbd?.title).toContain("Ring Internal-External Catheter");
  });

  it("verifies REAL_SMS_PATIENT_REGISTRY contains 758 de-identified cases with complete logbook attributes", async () => {
    const { REAL_SMS_PATIENT_REGISTRY } = await import("../../app/lib/realData/smsCathLabRealData");
    expect(REAL_SMS_PATIENT_REGISTRY.length).toBe(758);

    // Verify presence of representative de-identified patients
    expect(REAL_SMS_PATIENT_REGISTRY.some((c) => c.patientName === "Patient 001")).toBe(true);
    expect(REAL_SMS_PATIENT_REGISTRY.some((c) => c.patientName === "Patient 002")).toBe(true);
    expect(REAL_SMS_PATIENT_REGISTRY.some((c) => c.crNumber === "CR-0001")).toBe(true);

    // Verify all cases have valid scheme types and DSA numbers
    REAL_SMS_PATIENT_REGISTRY.forEach((c) => {
      expect(["MAAY", "RGHS", "PAID"]).toContain(c.schemeType);
      expect(c.dsaNo.trim().length).toBeGreaterThan(0);
      expect(c.patientName.trim().length).toBeGreaterThan(0);
      expect(c.procedureName.trim().length).toBeGreaterThan(0);
      expect(c.date.trim().length).toBeGreaterThan(0);
    });
  });
});
