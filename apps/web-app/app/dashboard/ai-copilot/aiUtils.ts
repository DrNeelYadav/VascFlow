// ---------------------------------------------------------------------------
// VascFlow Deterministic Clinical Guidelines & Procedural Decision Flowcharts
// Department of Interventional Radiology, SMS Medical College, Jaipur
// Evidence-grounded deterministic clinical decision algorithms (CIRSE / SIR / AASLD)
// ---------------------------------------------------------------------------

export interface ClinicalDecisionNode {
  id: string;
  scenario: string;
  prompt: string;
  options: {
    label: string;
    description: string;
    nextNodeId?: string;
    riskAlert?: string;
    isTerminal?: boolean;
    recommendation?: string;
  }[];
}

// Backward-compatibility alias
export type DecisionTreeNode = ClinicalDecisionNode;

export const DETERMINISTIC_CLINICAL_FLOWCHARTS: Record<string, ClinicalDecisionNode> = {
  // Scenario 1: BAE (Massive Hemoptysis)
  "bae-root": {
    id: "bae-root",
    scenario: "Massive Hemoptysis (BAE Protocol)",
    prompt: "Diagnostic bronchial arteriogram obtained via 5F Cobra C2 catheter. Examine the vascular anatomy. What does the initial fluoroscopic run demonstrate?",
    options: [
      {
        label: "Bronchial Artery with Anterior Medullary (Adamkiewicz) Branch",
        description: "Characteristic hairpin loop descending into anterior spinal cord sulcus seen originating from common intercostobronchial trunk.",
        nextNodeId: "bae-spinal-identified",
        riskAlert: "CRITICAL: Embolization from current position will cause anterior spinal artery infarction and paraplegia.",
      },
      {
        label: "Hypertrophied Bronchial Artery, No Spinal Branch",
        description: "Tortuous bronchial vessels with parenchymal blush and hypervascularity. No midline hairpin loop.",
        nextNodeId: "bae-no-spinal",
      },
      {
        label: "Negative Bronchial Arteriogram",
        description: "Normal caliber bronchial vessels without parenchymal blush or active contrast extravasation.",
        nextNodeId: "bae-non-bronchial",
      },
    ],
  },
  "bae-spinal-identified": {
    id: "bae-spinal-identified",
    scenario: "Massive Hemoptysis - Spinal Branch Identified",
    prompt: "A spinal branch is identified. How do you proceed with catheterization?",
    options: [
      {
        label: "Advance 2.0F/2.7F Microcatheter Distal to Spinal Origin",
        description: "Superselective coaxial microcatheterization past the origin of the anterior medullary artery into the distal pathological branch.",
        nextNodeId: "bae-superselection-success",
      },
      {
        label: "Abort Bronchial Embolization on this Trunk",
        description: "If unable to safely cross distal to the spinal branch, abort this vessel and search for non-bronchial systemic collaterals.",
        nextNodeId: "bae-aborted",
        isTerminal: true,
        recommendation: "ABORTED: High risk of spinal infarction. Proceed to search for internal mammary or subclavian collaterals.",
      },
    ],
  },
  "bae-superselection-success": {
    id: "bae-superselection-success",
    scenario: "Massive Hemoptysis - Superselection Complete",
    prompt: "Microcatheter tip confirmed distal to the spinal artery with no reflux. Select embolic agent:",
    options: [
      {
        label: "PVA Particles (300-500 um) or Calibrated Microspheres",
        description: "Slow injection of particulate embolic under continuous live fluoroscopy to endpoint of near-stasis.",
        isTerminal: true,
        recommendation: "PROCEDURAL SUCCESS: Controlled particulate embolization achieving stasis without spinal reflux. Adhere to SIR 2023 Guidelines.",
      },
      {
        label: "Liquid Embolic (NBCA Glue / Onyx)",
        description: "Liquid embolic cast.",
        riskAlert: "WARNING: Liquid embolics carry elevated risk of inadvertent retrograde penetration into spinal collateral arcade.",
        isTerminal: true,
        recommendation: "HIGH CAUTION: Liquid embolic chosen. Requires continuous blank roadmapping and expert attending supervision.",
      },
    ],
  },
  "bae-no-spinal": {
    id: "bae-no-spinal",
    scenario: "Massive Hemoptysis - Clear Bronchial Run",
    prompt: "Vessel confirmed safe for embolization. Select particulate agent and endpoint:",
    options: [
      {
        label: "300-500 um PVA Particles to Near-Stasis",
        description: "Standard embolic protocol for pulmonary vascular parenchymal shunts.",
        isTerminal: true,
        recommendation: "SUCCESS: Standard BAE completed. SIR 2023 Grade A evidence. Post-procedure CT monitoring indicated.",
      },
    ],
  },
  "bae-non-bronchial": {
    id: "bae-non-bronchial",
    scenario: "Massive Hemoptysis - Non-Bronchial Systemic Search",
    prompt: "Main bronchial arteries are normal. Where do you search for culprit non-bronchial systemic arteries (NBSA)?",
    options: [
      {
        label: "Internal Mammary, Inferior Phrenic & Intercostal Arteries",
        description: "Common collateral sources in chronic inflammatory lung disease (TB/bronchiectasis).",
        isTerminal: true,
        recommendation: "RECOMMENDATION: Angiogram of ipsilateral internal mammary and inferior phrenic. 40% of recurrent hemoptysis originates from NBSA.",
      },
    ],
  },

  // Scenario 2: TACE (Hepatocellular Carcinoma)
  "tace-root": {
    id: "tace-root",
    scenario: "BCLC-B Intermediate HCC (TACE Protocol)",
    prompt: "71yo male with multinodular HCC, ECOG 0, Child-Pugh A (Score 5), Bilirubin 1.1 mg/dL, Albumin 3.8 g/dL. Triphasic CT shows 3 lesions in Segments V and VIII, largest 4.2 cm. Assess eligibility:",
    options: [
      {
        label: "Eligible for Conventional / DEB-TACE (BCLC-B Standard)",
        description: "Preserved hepatic reserve and patent portal vein. Proceed with celiac and SMA arteriogram.",
        nextNodeId: "tace-anatomy",
      },
      {
        label: "Recommend Systemic Therapy (Atezolizumab + Bevacizumab)",
        description: "Diffuse bilobar infiltrative disease or vascular invasion noted on detailed review.",
        isTerminal: true,
        recommendation: "EVALUATION: If tumor exceeds up-to-7 criteria with high tumor burden, systemic immunotherapy is preferred over transarterial therapy (AASLD 2023).",
      },
    ],
  },
  "tace-anatomy": {
    id: "tace-anatomy",
    scenario: "TACE - Vascular Anatomy Evaluation",
    prompt: "Celiac arteriogram shows common hepatic artery with replaced right hepatic artery arising from SMA (Michels Type III). How do you select the target branch?",
    options: [
      {
        label: "Cannulate Replaced Right Hepatic via SMA using Cobra C2",
        description: "Superselect right hepatic branch supplying Segments V and VIII.",
        nextNodeId: "tace-dose-calc",
      },
    ],
  },
  "tace-dose-calc": {
    id: "tace-dose-calc",
    scenario: "TACE - Chemoembolic Formulation",
    prompt: "Largest lesion is 4.2 cm. Calculate Lipiodol-Doxorubicin emulsion volume:",
    options: [
      {
        label: "2.1 - 4.2 mL Lipiodol Emulsion (0.5 to 1.0 mL per cm tumor)",
        description: "Mix 30-50mg Doxorubicin with Lipiodol at 1:2 to 1:3 aqueous-to-oil ratio via 3-way stopcock pumping (20 cycles).",
        isTerminal: true,
        recommendation: "SUCCESS: Emulsion prepared within CIRSE 2021 guidelines. Follow with Gelfoam slurry embolization to near-stasis.",
      },
    ],
  },
};

// Aliased for backward compatibility with existing clinical decision tree references
export const CLINICAL_DECISION_TREES = DETERMINISTIC_CLINICAL_FLOWCHARTS;

/**
 * Calculates Cigarroa Maximum Allowable Contrast Dose (MACD) in milliliters.
 * Formula: (5 mL * weight in kg) / serum creatinine in mg/dL.
 * Mandatory 300 mL maximum hard ceiling cap applied to avoid acute tubular necrosis.
 * Originally validated for coronary angiography; evaluate alongside ACR-NKF 2020 eGFR guidance.
 */
export function calculateMacdLimit(weightKg: number, serumCreatinineMgDl: number): number {
  if (weightKg <= 0 || serumCreatinineMgDl <= 0) return 0;
  const raw = (5.0 * weightKg) / serumCreatinineMgDl;
  const calculatedDose = Math.round(raw * 10) / 10;
  return Math.min(calculatedDose, 300);
}
