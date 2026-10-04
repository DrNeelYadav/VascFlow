/**
 * Venous Interventional Radiology Clinical Schema & Synthesis Engine
 * Grounded in SVS/AVF 2023, CIRSE 2020, and UIP International Consensus Guidelines.
 * Tailored for EndoFlow / SMS Medical College & Hospitals, Jaipur.
 */

import type { DischargeMedicationItem, PostOperativeNoteData } from './ihmsDischargeTemplates';
import type { CriteriaField } from './procedureDischargeTemplates';

// ============================================================================
// 1. ANATOMICAL & PROCEDURAL TYPES
// ============================================================================

export type VenousLaterality = 'Left lower limb' | 'Right lower limb' | 'Bilateral lower limbs';

export type VenousModality = 'VenaSeal' | 'EVLT' | 'UGFS_Only' | 'VenaSeal_UGFS' | 'EVLT_UGFS';

export type PerforatorName = 
  | 'Cockett I (Lower Paratibial 6-8cm)'
  | 'Cockett II (Mid Paratibial 12-15cm)'
  | 'Cockett III (Upper Paratibial 18-24cm)'
  | "Boyd's (Proximal Medial Calf below knee)"
  | "Dodd's (Mid-Thigh Adductor Canal)"
  | 'Hunterian (Proximal Thigh Adductor Canal)';

export interface PerforatorMappingItem {
  name: PerforatorName;
  location: string;
  pathologicalDiameterMm: number; // Pathological cutoff >= 3.5 mm (SVS/AVF)
  refluxDurationSec: number; // Cutoff >= 0.5 s outward flow
  status: 'Treated with UGFS' | 'Observed (Sub-critical)' | 'Ablated';
  incompetent: boolean;
}

export interface TruncalIncompetence {
  gsvAboveKnee: boolean;
  gsvAboveKneeDiameterMm: number;
  gsvBelowKnee: boolean;
  gsvBelowKneeDiameterMm: number;
  ssv: boolean;
  ssvDiameterMm: number;
  aasv: boolean;
  aasvDiameterMm: number;
  sfjRefluxDurationSec: number; // Cutoff >= 0.5 s
  spjRefluxDurationSec: number; // Cutoff >= 0.5 s
}

export interface SclerotherapyDistribution {
  aboveKneeThighVarices: boolean;
  belowKneeCalfVarices: boolean;
  perforatorTributaries: boolean;
  sclerosantAgent: '1% Polidocanol foam' | '2% Polidocanol foam' | '3% Polidocanol foam' | '1% STS foam' | '3% STS foam';
  liquidToGasRatio: '1:4 Tessari (Air)' | '1:4 Tessari (CO2/O2)';
  totalVolumeMl: number; // Strict safety ceiling <= 10 mL per session (UIP Consensus)
}

export type CeapClinicalClass = 'C0' | 'C1' | 'C2' | 'C3' | 'C4a' | 'C4b' | 'C5' | 'C6';

export interface VcssBreakdown {
  pain: number; // 0=None, 1=Mild/Occasional, 2=Moderate/Daily, 3=Severe/Constrained
  varicoseVeins: number; // 0=None, 1=Few/Scattered, 2=Multiple/Calf or thigh, 3=Extensive/Thigh & calf
  venousEdema: number; // 0=None, 1=Mild/Evening, 2=Moderate/Afternoon, 3=Severe/Morning
  skinPigmentation: number; // 0=None, 1=Mild/Perimalleolar, 2=Moderate/Lower 1/3, 3=Severe/Wide distribution
  inflammation: number; // 0=None, 1=Mild/Erythema, 2=Moderate/Cellulitis, 3=Severe/Severe eczema
  induration: number; // 0=None, 1=Mild/Focal <5cm, 2=Moderate/Lower 1/3, 3=Severe/Entire lower 1/3 (inverted bottle)
  activeUlcerNumber: number; // 0=0, 1=1, 2=2, 3=3+
  activeUlcerDuration: number; // 0=None, 1=<3m, 2=3-12m, 3=>1y
  activeUlcerSize: number; // 0=None, 1=<2cm, 2=2-6cm, 3=>6cm
  compressionTherapy: number; // 0=None, 1=Intermittent, 2=Most days, 3=Full compliance
}

export interface VaricoseClinicalModel {
  laterality: VenousLaterality;
  modality: VenousModality;
  symptomDuration: string;
  itchingDuration: string;
  ulcerSizeAndSite: string;
  familyHistory: string;
  truncal: TruncalIncompetence;
  perforators: PerforatorMappingItem[];
  sclerotherapy: SclerotherapyDistribution;
  ceapClass: CeapClinicalClass;
  vcss: VcssBreakdown;
  findings: {
    varicoseVeins: boolean;
    venousUlcer: boolean;
    hyperpigmentation: boolean;
    lipodermatosclerosis: boolean;
    coronaPhlebectatica: boolean;
    edema: boolean;
    achingPain: boolean;
    nightCramps: boolean;
    restlessLegs: boolean;
    thrombophlebitis: boolean;
  };
  glueAliquotsCount?: number;
  totalGlueVolumeMl?: number;
  laserJoulesTotal?: number;
  compressionStockingsApplied: boolean;
  immediateAmbulationMinutes: number;
  vasPainScore: number; // 0 - 10
  egitStatus: 'Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)' | 'Grade I (Thrombus flush with junction)' | 'Grade II (<50% CFV protrusion)' | 'Grade III (>50% CFV protrusion)' | 'Grade IV (CFV Occlusion)';
  chairScreening: 'Negative (No erythema, urticaria or hypersensitivity)' | 'Mild self-limiting perivenous erythema (Grade 1)' | 'Moderate allergic phlebitis along tract (Grade 2)';
}

export interface VaricoceleClinicalModel {
  laterality: 'Left' | 'Right' | 'Bilateral';
  clinicalGrade: 'Grade I (Palpable with Valsalva)' | 'Grade II (Palpable without Valsalva)' | 'Grade III (Visible through scrotal skin)';
  indication: 'Scrotal pain & heaviness' | 'Infertility & abnormal semen parameters (OAT)' | 'Testicular hypotrophy & cosmetic discomfort';
  symptomDuration: string;
  pampiniformDiameterRestMm: number;
  pampiniformDiameterValsalvaMm: number;
  refluxDurationSec: number;
  embolicTechnique: 'Sandwich Technique (Distal & Proximal Microcoils + 3% STS Foam)' | 'Microcoils Alone' | 'Cyanoacrylate Glue Embolization';
  coilsCount: number;
  collateralsOccluded: boolean;
  semenParametersAbnormal: boolean;
  vasPainScore: number;
}

// ============================================================================
// 2. DEFAULT CLINICAL STATE FACTORIES
// ============================================================================

export function createDefaultPerforators(): PerforatorMappingItem[] {
  return [
    {
      name: 'Cockett I (Lower Paratibial 6-8cm)',
      location: 'Medial calf, 6-8 cm proximal to medial malleolus',
      pathologicalDiameterMm: 0,
      refluxDurationSec: 0,
      status: 'Observed (Sub-critical)',
      incompetent: false,
    },
    {
      name: 'Cockett II (Mid Paratibial 12-15cm)',
      location: 'Medial calf, 12-15 cm proximal to medial malleolus',
      pathologicalDiameterMm: 0,
      refluxDurationSec: 0,
      status: 'Observed (Sub-critical)',
      incompetent: false,
    },
    {
      name: 'Cockett III (Upper Paratibial 18-24cm)',
      location: 'Medial calf, 18-24 cm proximal to medial malleolus',
      pathologicalDiameterMm: 0,
      refluxDurationSec: 0,
      status: 'Observed (Sub-critical)',
      incompetent: false,
    },
    {
      name: "Boyd's (Proximal Medial Calf below knee)",
      location: 'Medial calf, ~10 cm distal to medial tibial plateau',
      pathologicalDiameterMm: 0,
      refluxDurationSec: 0,
      status: 'Observed (Sub-critical)',
      incompetent: false,
    },
    {
      name: "Dodd's (Mid-Thigh Adductor Canal)",
      location: 'Mid-thigh medial aspect within adductor canal',
      pathologicalDiameterMm: 0,
      refluxDurationSec: 0,
      status: 'Observed (Sub-critical)',
      incompetent: false,
    },
    {
      name: 'Hunterian (Proximal Thigh Adductor Canal)',
      location: 'Proximal to mid-thigh along sartorius muscle',
      pathologicalDiameterMm: 0,
      refluxDurationSec: 0,
      status: 'Observed (Sub-critical)',
      incompetent: false,
    },
  ];
}

export function createDefaultTruncal(): TruncalIncompetence {
  return {
    gsvAboveKnee: true,
    gsvAboveKneeDiameterMm: 0,
    gsvBelowKnee: true,
    gsvBelowKneeDiameterMm: 0,
    ssv: false,
    ssvDiameterMm: 0,
    aasv: false,
    aasvDiameterMm: 0,
    sfjRefluxDurationSec: 0,
    spjRefluxDurationSec: 0,
  };
}

export function createDefaultSclerotherapy(): SclerotherapyDistribution {
  return {
    aboveKneeThighVarices: true,
    belowKneeCalfVarices: true,
    perforatorTributaries: true,
    sclerosantAgent: '1% Polidocanol foam',
    liquidToGasRatio: '1:4 Tessari (Air)',
    totalVolumeMl: 6.0, // Strictly <= 10 mL
  };
}

export function createDefaultVcss(): VcssBreakdown {
  return {
    pain: 2,
    varicoseVeins: 2,
    venousEdema: 1,
    skinPigmentation: 2,
    inflammation: 1,
    induration: 1,
    activeUlcerNumber: 0,
    activeUlcerDuration: 0,
    activeUlcerSize: 0,
    compressionTherapy: 2,
  };
}

export function calculateVcssTotal(vcss: VcssBreakdown): { score: number; severity: 'Mild' | 'Moderate' | 'Severe' } {
  const score = 
    vcss.pain +
    vcss.varicoseVeins +
    vcss.venousEdema +
    vcss.skinPigmentation +
    vcss.inflammation +
    vcss.induration +
    vcss.activeUlcerNumber +
    vcss.activeUlcerDuration +
    vcss.activeUlcerSize +
    vcss.compressionTherapy;

  let severity: 'Mild' | 'Moderate' | 'Severe' = 'Mild';
  if (score >= 14) severity = 'Severe';
  else if (score >= 8) severity = 'Moderate';

  return { score, severity };
}

// ============================================================================
// 3. CLINICAL SYNTHESIS ENGINES (SVS/AVF & CIRSE COMPLIANT)
// ============================================================================

export function synthesizeVenousDiagnosis(model: VaricoseClinicalModel): string {
  const truncalSegments: string[] = [];
  if (model.truncal.gsvAboveKnee) truncalSegments.push('GSV (Above-knee)');
  if (model.truncal.gsvBelowKnee) truncalSegments.push('GSV (Below-knee)');
  if (model.truncal.ssv) truncalSegments.push('SSV (SPJ)');
  if (model.truncal.aasv) truncalSegments.push('AASV');

  const truncalStr = truncalSegments.length > 0 ? truncalSegments.join(' & ') : 'GSV';
  const treatedPerforators = model.perforators.filter(p => p.incompetent || p.status === 'Treated with UGFS').map(p => p.name.split(' ')[0]);
  const perfStr = treatedPerforators.length > 0 ? ` with incompetent perforators (${treatedPerforators.join(', ')})` : '';

  let modalityDesc = 'Endovenous Cyanoacrylate Closure (VenaSeal)';
  if (model.modality === 'EVLT') modalityDesc = 'Endovenous Laser Ablation (EVLT 1470nm)';
  else if (model.modality === 'VenaSeal_UGFS' || model.modality === 'VenaSeal') modalityDesc = 'Combined VenaSeal Glue Embolization & Ultrasound-Guided Foam Sclerotherapy (UGFS)';
  else if (model.modality === 'EVLT_UGFS') modalityDesc = 'Combined EVLT (1470nm Radial) & Ultrasound-Guided Foam Sclerotherapy (UGFS)';
  else if (model.modality === 'UGFS_Only') modalityDesc = 'Ultrasound-Guided Foam Sclerotherapy (UGFS)';

  return `Primary Chronic Venous Insufficiency (CVI) of ${model.laterality} with truncal reflux in ${truncalStr}${perfStr} (CEAP ${model.ceapClass}) [CEAP Class ${model.ceapClass}, VCSS ${calculateVcssTotal(model.vcss).score}/30], successfully treated with ${modalityDesc}.`;
}

export function synthesizeVenousComplaints(model: VaricoseClinicalModel): string {
  const complaints: string[] = [];
  complaints.push(`Prominent dilated tortuous veins in ${model.laterality}`);
  if (model.findings.achingPain) complaints.push('dull aching pain, heaviness, and evening fatigue');
  if (model.findings.edema) complaints.push('lower leg swelling worse after standing');
  if (model.findings.nightCramps) complaints.push('painful nocturnal muscle cramps');
  if (model.findings.restlessLegs) complaints.push('restless legs symptoms at night');
  if (model.findings.hyperpigmentation) complaints.push('brownish skin discoloration around ankle and gaiter zone');
  if (model.findings.venousUlcer || model.ulcerSizeAndSite !== 'None') complaints.push(`active non-healing venous ulceration (${model.ulcerSizeAndSite})`);
  if (model.itchingDuration !== 'None') complaints.push(`stasis eczema and itching (Itching present for ${model.itchingDuration})`);

  return `${complaints.join(', ')} for ${model.symptomDuration}. Symptoms aggravated on prolonged standing and relieved by leg elevation.`;
}

export function synthesizeVenousHistory(model: VaricoseClinicalModel): string {
  const { score, severity } = calculateVcssTotal(model.vcss);
  const treatedPerfs = model.perforators
    .filter(p => p.incompetent || p.status === 'Treated with UGFS')
    .map(p => {
      let desc = p.name;
      const parts: string[] = [];
      if (p.pathologicalDiameterMm && p.pathologicalDiameterMm > 0) parts.push(`caliber ${p.pathologicalDiameterMm}mm`);
      if (p.refluxDurationSec && p.refluxDurationSec > 0) parts.push(`reflux ${p.refluxDurationSec}s`);
      return parts.length > 0 ? `${desc} (${parts.join(', ')})` : desc;
    });

  const ulcerText = model.ulcerSizeAndSite && model.ulcerSizeAndSite !== 'None' ? ` Active venous ulceration noted at ${model.ulcerSizeAndSite}.` : '';
  const procedurePlan = model.modality.includes('VenaSeal') ? 'VenaSeal cyanoacrylate glue embolization' : 'endovenous thermal ablation';

  const truncalFindings: string[] = [];
  if (model.truncal.gsvAboveKnee) {
    const cal = model.truncal.gsvAboveKneeDiameterMm && model.truncal.gsvAboveKneeDiameterMm > 0 ? ` caliber ${model.truncal.gsvAboveKneeDiameterMm} mm at mid-thigh` : '';
    const reflux = model.truncal.sfjRefluxDurationSec && model.truncal.sfjRefluxDurationSec > 0 ? ` with saphenofemoral junction (SFJ) reflux duration of ${model.truncal.sfjRefluxDurationSec} s (pathological threshold >= 0.5 s)` : ' with saphenofemoral junction (SFJ) reflux';
    truncalFindings.push(`GSV above-knee${cal}${reflux}`);
  }
  if (model.truncal.gsvBelowKnee) {
    const cal = model.truncal.gsvBelowKneeDiameterMm && model.truncal.gsvBelowKneeDiameterMm > 0 ? ` (caliber ${model.truncal.gsvBelowKneeDiameterMm} mm)` : '';
    truncalFindings.push(`GSV below-knee incompetence${cal}`);
  }
  if (model.truncal.ssv) {
    const cal = model.truncal.ssvDiameterMm && model.truncal.ssvDiameterMm > 0 ? ` caliber ${model.truncal.ssvDiameterMm} mm` : '';
    const reflux = model.truncal.spjRefluxDurationSec && model.truncal.spjRefluxDurationSec > 0 ? ` with SPJ reflux duration of ${model.truncal.spjRefluxDurationSec} s` : ' with SPJ reflux';
    truncalFindings.push(`SSV${cal}${reflux}`);
  }
  if (model.truncal.aasv) {
    const cal = model.truncal.aasvDiameterMm && model.truncal.aasvDiameterMm > 0 ? ` (${model.truncal.aasvDiameterMm} mm)` : '';
    truncalFindings.push(`anterior accessory saphenous vein (AASV) incompetence${cal}`);
  }

  const truncalText = truncalFindings.length > 0 ? truncalFindings.join('; ') : 'superficial venous reflux';
  const perfText = treatedPerfs.length > 0
    ? `Deep ultrasound perforator mapping demonstrated incompetent paratibial/thigh perforators: ${treatedPerfs.join('; ')}.`
    : 'Deep ultrasound perforator mapping demonstrated no pathological perforators.';

  return `Patient presented to the Department of Interventional Radiology, SMS Hospital, Jaipur with a ${model.symptomDuration} history of symptomatic chronic venous disease affecting the ${model.laterality}. Evaluated under standard SVS/AVF guidelines. Clinical evaluation demonstrates CEAP Class ${model.ceapClass} with a Venous Clinical Severity Score (VCSS) of ${score}/30 (${severity} disease).${ulcerText} Comprehensive high-resolution venous color duplex ultrasonography revealed truncal venous reflux: ${truncalText}. ${perfText} Deep venous system (common femoral, femoral, and popliteal veins) was widely patent with normal phasic respiratory variations, competent valves, and complete absence of deep vein thrombosis (DVT). Treatment successfully executed with ${procedurePlan}. Family history: ${model.familyHistory}.`;
}

export function synthesizeVenousLocalExam(model: VaricoseClinicalModel): string {
  const findings: string[] = [];
  findings.push(`${model.laterality}: Inspection reveals extensive tortuous varicosities distributed along the medial thigh, calf, and popliteal fossa.`);
  if (model.findings.coronaPhlebectatica) findings.push('Fan-shaped intradermal venules (Corona phlebectatica paraplantaris) prominent around medial and lateral malleoli [C1].');
  if (model.findings.edema) findings.push('Moderate pitting pedal and perimalleolar edema [C3].');
  if (model.findings.hyperpigmentation) findings.push('Confluent stasis hyperpigmentation and eczema in the supramalleolar gaiter zone [C4a].');
  if (model.findings.lipodermatosclerosis) findings.push('Circumferential woody induration, subcutaneous fibrosis, and inverted champagne bottle deformity characteristic of lipodermatosclerosis [C4b].');
  if (model.ulcerSizeAndSite !== 'None') {
    findings.push(`Venous ulceration noted: ${model.ulcerSizeAndSite}. Ulcer bed clean with healthy red granulation tissue, regular sloping margins, and shallow base [${model.ulcerSizeAndSite.includes('Healed') ? 'C5' : 'C6'}].`);
  }
  findings.push('Brodie-Trendelenburg test confirms saphenofemoral junction incompetence with rapid retrograde filling; Perthes test negative indicating wide patency of deep venous conduits.');
  findings.push('Palpation reveals warm extremities with intact distal peripheral arterial pulses: Dorsalis Pedis (DP) and Posterior Tibial (PT) are strong (Grade 2+/+++) bilaterally with brisk capillary refill time (< 2 seconds).');
  findings.push('Puncture sites: Clean, sterile compression dressing in situ with zero oozing or hematoma.');

  return findings.join(' ');
}

export function synthesizeVenousOperativeNote(model: VaricoseClinicalModel): string {
  const isVenaSeal = model.modality.includes('VenaSeal');
  const isEvlt = model.modality.includes('EVLT');
  const hasUgfs = model.modality.includes('UGFS') || model.sclerotherapy.totalVolumeMl > 0;

  const treatedPerfs = model.perforators.filter(p => p.incompetent || p.status === 'Treated with UGFS').map(p => p.name);
  const aliquots = model.glueAliquotsCount || 14;
  const glueVol = model.totalGlueVolumeMl || (aliquots * 0.09).toFixed(2);

  let op = `OPERATIVE PROCEDURE NOTE:\n`;
  op += `Patient positioned supine (and prone for SSV as needed) on cath-lab procedure table. Strict surgical asepsis maintained under real-time ultrasound guidance (high-frequency 8-13 MHz linear transducer). Local infiltration anesthesia with 2% lignocaine with adrenaline at puncture sites.\n\n`;

  // Access & Sheath
  op += `1. ULTRASOUND-GUIDED VASCULAR ACCESS:\n`;
  op += `Under continuous sonographic visualization, percutaneous access to the ${model.laterality} great saphenous vein (GSV) was established at the below-knee proximal calf level using a 19G echogenic needle. Successful flashback achieved, 0.035" J-tip guidewire advanced easily across the SFJ into the external iliac vein. `;
  
  if (isVenaSeal) {
    op += `A 5F VenaSeal introducer sheath and dilator were advanced over the wire into the GSV. The delivery catheter was flushed and primed with n-butyl-2-cyanoacrylate proprietary monomer. Under direct sagittal duplex guidance, the catheter tip was positioned exactly 5.0 cm caudal to the saphenofemoral junction (SFJ), clearly identifying and preserving the superficial epigastric vein (SEV) confluence and ensuring zero protrusion into the common femoral vein (CFV).\n\n`;
    op += `2. PRECISION CYANOACRYLATE GLUE DELIVERY (SVS/AVF & CIRSE PROTOCOL):\n`;
    op += `VenaSeal delivery gun engaged. VenaSeal cyanoacrylate glue dispensed: first initial double-dose aliquot of cyanoacrylate glue (${(0.09 * 2).toFixed(2)} mL) was dispensed at the 5.0 cm mark. Continuous firm probe compression was immediately maintained over the SFJ for exactly 3 minutes (180 seconds) to ensure complete coaptation and polymerization, verified on duplex as a hyperechoic intraluminal cast. Following initial 3-minute junctional seal, the catheter was sequentially retracted by 3 cm intervals, delivering 0.09 mL per aliquot with 30 seconds of firm external probe compression per segment. A total of ${aliquots} aliquots (${glueVol} mL glue) delivered along a treated GSV segment of ${aliquots * 3} cm down to the below-knee puncture site. Delivery sheath removed with simultaneous firm pressure.\n\n`;
  } else if (isEvlt) {
    op += `A 6F vascular sheath was advanced over the guidewire. A 1470 nm radial laser fiber was introduced and its tip positioned exactly 2.0 cm distal to the SFJ under duplex control.\n\n`;
    op += `2. PERIVENOUS TUMESCENT ANESTHESIA & LASER ABLATION:\n`;
    op += `Under real-time ultrasound monitoring, 350 mL of chilled perivenous tumescent anesthesia (saline 500 mL + 2% lignocaine 25 mL + 8.4% NaHCO3 5 mL + 1:1000 adrenaline 0.5 mL) was infused into the saphenous fascial compartment along the entire GSV tract, creating a uniform >10mm circumferential fluid heat sink and ensuring vein wall coaptation. Laser firing initiated at 7 Watts continuous mode with mechanized pullback at 1.0 mm/sec, delivering a linear endovenous energy density (LEED) of ~65 J/cm (Total energy: ${model.laserJoulesTotal || 2850} Joules). Smooth, continuous pullback completed without technical difficulty.\n\n`;
  }

  // Sclerotherapy
  if (hasUgfs) {
    const perfScleroText = treatedPerfs.length > 0 ? ` and incompetent perforating veins (${treatedPerfs.join(', ')})` : '';
    op += `3. CONCOMITANT ULTRASOUND-GUIDED FOAM SCLEROTHERAPY (UGFS - TESSARI METHOD):\n`;
    op += `Concomitant UGFS performed for residual tortuous branch varicosities (${model.sclerotherapy.aboveKneeThighVarices ? 'above-knee thigh tributaries, ' : ''}${model.sclerotherapy.belowKneeCalfVarices ? 'below-knee calf clusters' : ''})${perfScleroText}. Sclerosant foam prepared using the Tessari double-syringe technique via a 3-way stopcock with ${model.sclerotherapy.sclerosantAgent} and room air in a 1:4 liquid-to-gas ratio. Direct percutaneous micro-puncture using 23G/25G butterfly needles under sonographic vision.`;
    if (treatedPerfs.length > 0) {
      op += ` Incompetent perforator fascial defect sealed with targeted injection under duplex flow arrest.`;
    }
    op += ` Total foam sclerosant volume strictly limited to ${model.sclerotherapy.totalVolumeMl.toFixed(1)} mL (well within the UIP <= 10 mL safety consensus limit). Immediate intraluminal micro-foam distribution and venospasm verified.\n\n`;
  }

  // Completion Duplex
  op += `4. COMPLETION DUPLEX COLOR DOPPLER ASSESSMENT:\n`;
  op += `Immediate comprehensive completion scan performed from groin to ankle: Treated GSV trunk demonstrates 100% complete occlusion, thickened non-compressible hyperechoic lumen with posterior acoustic shadowing (glue cast) and zero flow. Common Femoral Vein (CFV) and Popliteal Vein are widely patent with normal spontaneous flow and phasic respiratory variation. Strict screening confirms Endovenous Glue-Induced Thrombosis (EGIT) Grade 0 (Negative - zero extension into CFV lumen) and complete absence of Deep Vein Thrombosis (DVT). Puncture site hemostasis achieved with manual compression. Class II graduated compression stocking applied.`;

  return op;
}

export function synthesizeVenousPostOpNote(model: VaricoseClinicalModel): PostOperativeNoteData {
  const isVenaSeal = model.modality.includes('VenaSeal');
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const dateStr = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;

  const notesText = `Enhanced Post-Operative Venous Recovery Note:
1. Access Site: Below-knee GSV / mid-calf SSV puncture sites clean, dry, and sealed. Sterile pressure dressing in situ. Zero active oozing, zero hematoma.
2. Distal Neurovascular Status: Bilateral Dorsalis Pedis (DP) and Posterior Tibial (PT) pulses strong (+++), symmetrical. Feet warm to touch, brisk capillary refill (< 2s).
3. Completion Duplex Sonography: 100% technical occlusion of treated GSV/SSV axis with acoustic shadowing from glue polymer. Common Femoral Vein (CFV) and Popliteal Veins widely patent with phasic respiratory flow.
4. EGIT / DVT Screening: Evaluated for Endovenous Glue-Induced Thrombosis: Confirmed EGIT ${model.egitStatus}. Zero extension across SFJ/SPJ. Deep venous system negative for DVT.
5. Compression Stockings: Class II graduated compression stockings (23-32 mmHg) applied smoothly from toe to thigh without rolling edges.
6. Ambulation Protocol: Mandatory immediate ${model.immediateAmbulationMinutes || 25}-minute continuous walking protocol completed in the recovery corridor to stimulate calf muscle venopump and prevent venous stasis.
7. Pain & Reaction Screening: Pain score recorded as VAS ${model.vasPainScore || 1}/10 (minimal ache). Screening for Complex Hypersensitivity and Irritation Reaction (CHAIR): ${model.chairScreening}.
8. Disposition: Patient fully conscious, alert, oriented x 3, ambulating comfortably with stable hemodynamics. Safe for same-day daycare discharge.`;

  return {
    accessSiteHemostasis: 'Complete Hemostasis Achieved. Sterile pressure dressing intact; puncture clean & dry with zero hematoma or bruit.',
    telemetryVitals: '',
    sheathRemovalTime: `${dateStr} ${timeStr} (Immediate post-closure in Angiosuite / US-guided closure)`,
    sheathStatus: 'Removed',
    recoveryStatus: `Conscious, oriented x3, pain VAS ${model.vasPainScore || 1}/10, completed ${model.immediateAmbulationMinutes || 25}m ambulation protocol. EGIT Grade 0, DVT absent.`,
    recoveryBed: 'Venous Daycare PACU / Cath-Lab Holding Bay-03',
    distalPulses: 'Strong (+++) - Bilateral Dorsalis Pedis & Posterior Tibial pulses warm with brisk capillary refill (<2s)',
    immediateComplications: 'Nil - Zero hematoma, zero DVT, zero EGIT, zero skin burn, zero nerve injury',
    recordedBy: 'Dr. Neel Yadav (Senior Resident IR) / Dr. Alok Verma (Professor & Head IR)',
    recordedAt: `${dateStr} ${timeStr}`,
    notes: notesText,
    completionDuplex: 'Full target occlusion with dense acoustic shadowing, patent CFV & popliteal vein',
    egitStatus: model.egitStatus,
    compressionStockings: 'Class II graduated compression stockings (23-32 mmHg) applied',
    ambulationProtocol: `Immediate ${model.immediateAmbulationMinutes || 25} min continuous walking completed in corridor`,
    painVasScore: `VAS ${model.vasPainScore || 1}/10`,
    chairScreening: model.chairScreening,
  };
}

export function synthesizeVenousMedications(model: VaricoseClinicalModel): DischargeMedicationItem[] {
  const meds: DischargeMedicationItem[] = [
    {
      sNo: 1,
      medicine: 'Tab. Micronized Purified Flavonoid Fraction (Daflon / MPFF) 500mg [RMSCL DDC #622]',
      genericName: 'Micronized Purified Flavonoid Fraction (MPFF 450mg Diosmin + 50mg Hesperidin)',
      dosePower: '500mg',
      route: 'ORAL',
      frequency: 'BD',
      days: 30,
      instructions: 'After meals (Venoactive tonic to enhance venous tone and reduce capillary hyperpermeability)',
    },
    {
      sNo: 2,
      medicine: 'Tab. Aceclofenac 100mg + Paracetamol 325mg [RMSCL DDC #622/624]',
      genericName: 'Aceclofenac + Paracetamol',
      dosePower: '1 Tab',
      route: 'ORAL',
      frequency: 'BD',
      days: 5,
      instructions: 'After meals for post-procedure discomfort and mild perivenous inflammation',
    },
    {
      sNo: 3,
      medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]',
      genericName: 'Pantoprazole',
      dosePower: '40mg',
      route: 'ORAL',
      frequency: 'OD',
      days: 10,
      instructions: 'Take 30 minutes before breakfast (Gastroprotection)',
    },
  ];

  // Conditional: CHAIR screening or itching
  if (model.itchingDuration !== 'None' || model.chairScreening.includes('Grade 1') || model.chairScreening.includes('Grade 2')) {
    meds.push({
      sNo: meds.length + 1,
      medicine: 'Tab. Levocetirizine 5mg [RMSCL DDC #659]',
      genericName: 'Levocetirizine',
      dosePower: '5mg',
      route: 'ORAL',
      frequency: 'HS',
      days: 10,
      instructions: 'At bedtime (For stasis itching / prophylaxis against cyanoacrylate hypersensitivity reaction)',
    });
  }

  // Conditional: Active Ulcer (CEAP C6)
  if (model.ceapClass === 'C6' || model.ulcerSizeAndSite.includes('Active') || model.findings.venousUlcer) {
    meds.push({
      sNo: meds.length + 1,
      medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]',
      genericName: 'Amoxicillin and Potassium Clavulanate',
      dosePower: '625mg',
      route: 'ORAL',
      frequency: 'BD',
      days: 5,
      instructions: 'After food (Prophylaxis against secondary soft-tissue / venous ulcer infection)',
    });
  }

  return meds.map((m, idx) => ({ ...m, sNo: idx + 1 }));
}

export function synthesizeVenousDischargeAdvice(model: VaricoseClinicalModel): string[] {
  const isVenaSeal = model.modality.includes('VenaSeal');
  const advice: string[] = [];

  advice.push('1. AMBULATION & MOBILITY: Normal walking is strongly encouraged immediately. Avoid prolonged motionless standing or sitting (> 45 minutes) without walking or performing ankle flexion exercises.');
  
  if (model.modality.includes('EVLT') || model.sclerotherapy.totalVolumeMl > 0 || model.ceapClass >= 'C3') {
    advice.push('2. COMPRESSION STOCKINGS: Wear Class II graduated compression stockings (23-32 mmHg) continuously during daytime for 3 to 4 weeks. Remove while sleeping at night.');
  } else {
    advice.push('2. COMPRESSION: Stocking wear is optional following cyanoacrylate closure (VenaSeal), but recommended for 1 week if concomitant foam sclerotherapy was administered.');
  }

  advice.push('3. LEG ELEVATION: Keep legs elevated on 2 pillows above heart level while resting or sleeping to assist venous return.');
  advice.push('4. PUNCTURE WOUND CARE: Keep puncture sites clean and dry. Outer waterproof dressing may be removed after 48 hours. You may shower after 48 hours; do not rub puncture sites.');
  advice.push('5. PHYSICAL EXERTION: Refrain from strenuous heavy gym weightlifting (> 15 kg), running, cycling, sauna, or hot water baths for 10-14 days.');
  advice.push('6. TRACT INDURATION: A firm, cord-like sensation along the inner thigh/calf is the expected occluded vein (glue cast / ablated vein) and will gradually soften over months.');

  return advice;
}

export function synthesizeVenousRedFlags(): string[] {
  return [
    'Sudden onset severe swelling, fullness, or tightening of the entire calf or thigh (suspected DVT - report immediately)',
    'Sudden chest pain, difficulty in breathing, rapid heartbeat, or coughing up blood (suspected PE - Emergency SMS Hospital casualty)',
    'Spreading warm red rash, severe itching, or hives along the inner thigh (suspected CHAIR hypersensitivity reaction)',
    'Active persistent bleeding or enlarging painful hematoma at the puncture site',
    'High fever (> 101°F) with chills or purulent discharge from wound',
  ];
}

export function synthesizeVenousSonographyReport(model: VaricoseClinicalModel): string {
  const treatedPerfs = model.perforators
    .filter(p => p.incompetent || p.status === 'Treated with UGFS')
    .map(p => {
      const parts: string[] = [];
      if (p.pathologicalDiameterMm && p.pathologicalDiameterMm > 0) parts.push(`Dia: ${p.pathologicalDiameterMm}mm`);
      if (p.refluxDurationSec && p.refluxDurationSec > 0) parts.push(`Reflux: ${p.refluxDurationSec}s`);
      return parts.length > 0 ? `${p.name} (${parts.join(', ')})` : p.name;
    });

  const sfjRefluxText = model.truncal.sfjRefluxDurationSec && model.truncal.sfjRefluxDurationSec > 0
    ? `continuous retrograde reflux (${model.truncal.sfjRefluxDurationSec}s > 0.5s cutoff)`
    : 'pathological retrograde reflux (> 0.5s cutoff)';

  const gsvSegments: string[] = [];
  if (model.truncal.gsvAboveKnee) {
    const cal = model.truncal.gsvAboveKneeDiameterMm && model.truncal.gsvAboveKneeDiameterMm > 0 ? ` (${model.truncal.gsvAboveKneeDiameterMm}mm)` : '';
    gsvSegments.push(`above-knee${cal}`);
  }
  if (model.truncal.gsvBelowKnee) {
    const cal = model.truncal.gsvBelowKneeDiameterMm && model.truncal.gsvBelowKneeDiameterMm > 0 ? ` (${model.truncal.gsvBelowKneeDiameterMm}mm)` : '';
    gsvSegments.push(`below-knee${cal}`);
  }
  const gsvDesc = gsvSegments.length > 0 ? gsvSegments.join(' and ') : 'segments';

  let ssvLine = '';
  if (model.truncal.ssv) {
    const cal = model.truncal.ssvDiameterMm && model.truncal.ssvDiameterMm > 0 ? ` (${model.truncal.ssvDiameterMm}mm)` : '';
    const reflux = model.truncal.spjRefluxDurationSec && model.truncal.spjRefluxDurationSec > 0 ? `, reflux ${model.truncal.spjRefluxDurationSec}s` : '';
    ssvLine = `- Saphenopopliteal Junction (SPJ) & SSV: Incompetent${cal}${reflux}.\n`;
  }

  let aasvLine = '';
  if (model.truncal.aasv) {
    const cal = model.truncal.aasvDiameterMm && model.truncal.aasvDiameterMm > 0 ? ` (${model.truncal.aasvDiameterMm}mm)` : '';
    aasvLine = `- Anterior Accessory Saphenous Vein (AASV): Incompetent${cal} with anterior thigh varicosities.\n`;
  }

  return `VENOUS COLOR DUPLEX DOPPLER SCAN (${model.laterality.toUpperCase()}):
- Saphenofemoral Junction (SFJ): Incompetent with marked ${sfjRefluxText}.
- Great Saphenous Vein (GSV): Dilated along ${gsvDesc} with pathological reflux.
${ssvLine}${aasvLine}- Perforators: ${treatedPerfs.length > 0 ? treatedPerfs.join('; ') : 'None pathological (competent)'}.
- Deep Venous Conduits: Common Femoral, Superficial Femoral, and Popliteal Veins are fully compressible, widely patent with normal phasic respiratory variation and zero intraluminal thrombus (DVT Ruled Out).`;
}

// ============================================================================
// 4. VARICOCELE TRANSVENOUS EMBOLIZATION SYNTHESIS ENGINES
// ============================================================================

export function synthesizeVaricoceleDiagnosis(model: VaricoceleClinicalModel): string {
  return `${model.laterality} Varicocele (${model.clinicalGrade}) with ${model.indication.toLowerCase()} [ICD-10 I86.1], successfully treated with Transvenous Catheter-Directed Embolization via ${model.embolicTechnique}.`;
}

export function synthesizeVaricoceleComplaints(model: VaricoceleClinicalModel): string {
  const parts: string[] = [];
  parts.push(`Dull dragging scrotal aching pain and heaviness on the ${model.laterality.toLowerCase()} side for ${model.symptomDuration}`);
  parts.push('discomfort aggravated during standing, heavy physical work, or hot weather');
  if (model.semenParametersAbnormal) parts.push('associated subfertility with abnormal semen analysis');
  return parts.join(', ') + '.';
}

export function synthesizeVaricoceleHistory(model: VaricoceleClinicalModel): string {
  return `Patient presented to the Department of Interventional Radiology, SMS Hospital, Jaipur with a ${model.symptomDuration} history of symptomatic ${model.laterality.toLowerCase()}-sided scrotal swelling and dragging ache. Physical examination confirmed ${model.clinicalGrade}. Indication for intervention: ${model.indication}. High-resolution scrotal color duplex Doppler ultrasound revealed dilated, tortuous pampiniform plexus veins measuring ${model.pampiniformDiameterRestMm} mm at rest and expanding to ${model.pampiniformDiameterValsalvaMm} mm with continuous retrograde reflux lasting ${model.refluxDurationSec} s (> 2.0 s threshold) on Valsalva maneuver. Bilateral testes descended with normal echotexture. Catheter-directed transvenous embolization was selected as a minimally invasive, high-efficacy outpatient approach.`;
}

export function synthesizeVaricoceleLocalExam(model: VaricoceleClinicalModel): string {
  return `Local Scrotal Examination: ${model.laterality} hemiscrotum reveals characteristic 'bag of worms' appearance (${model.clinicalGrade.toLowerCase()}). Prominent, compressible tortuous venous bundles palpable along the spermatic cord, accentuating significantly on upright posture and sustained Valsalva maneuver. Bilateral testes descended, non-tender, normal volume and consistency. Inguinal rings competent. Right groin / access puncture site: Clean, dry, sterile compression dressing in situ with zero hematoma or bruit. Distal lower limb peripheral pulses (Dorsalis Pedis and Posterior Tibial) strong (Grade 2+/+++) bilaterally.`;
}

export function synthesizeVaricoceleOperativeNote(model: VaricoceleClinicalModel): string {
  const dateStr = new Date().toLocaleDateString('en-IN');
  let note = `OPERATIVE NOTE - TRANSVENOUS VARICOCELE EMBOLIZATION:\n`;
  note += `Date: ${dateStr}. Performed under local anesthesia (2% Lignocaine) and continuous digital subtraction angiography (DSA) fluoroscopic guidance with full surgical asepsis.\n\n`;
  note += `1. VASCULAR ACCESS & RENAL VEIN CANNULATION:\n`;
  note += `Under ultrasound guidance, right common femoral vein (RCFV) was cannulated using a 19G echogenic needle and a 5F/6F vascular introducer sheath placed over a 0.035" J-tip guidewire. A 5F Cobra (C2) / Simmons 1 catheter and 0.035" hydrophilic Glidewire were manipulated into the IVC and selectively engaged into the left renal vein.\n\n`;
  note += `2. DIAGNOSTIC GONADAL VENOGRAPHY:\n`;
  note += `Selective left renal venogram with Valsalva maneuver demonstrated competent left renal vein with absence of nutcracker compression, and severe retrograde reflux into the left internal spermatic vein (ISV / gonadal vein). Selective cannulation of the ISV orifice achieved. Selective gonadal venography demonstrated dilated main ISV trunk (${model.pampiniformDiameterValsalvaMm}mm caliber) with multiple retroperitoneal parallel duplicate channels and renocaval/lumbar collaterals opacifying the scrotal pampiniform plexus.\n\n`;
  note += `3. SUPERSELECTIVE COAXIAL EMBOLIZATION (CIRSE PROTOCOL):\n`;
  note += `A 2.7F microcatheter (Progreat) was advanced coaxially through the 5F diagnostic catheter down to the distal ISV at the level of the deep inguinal ring (superior border of the pubic ramus). Embolization performed using the Sandwich Technique:\n`;
  note += `- Distal Occlusion: Deployment of ${Math.max(2, Math.floor(model.coilsCount / 2))} platinum microcoils (0.018", 4-6mm) at the deep inguinal ring to prevent non-target migration.\n`;
  note += `- Interstitial Sclerotherapy: Slow injection of 2.0 mL of 3% Sodium Tetradecyl Sulfate (STS) foam sclerosant (Tessari method, 1:4 with air) under strict fluoroscopic flow-arrest monitoring to thrombose parallel collateral veins.\n`;
  note += `- Proximal Occlusion: Retraction of microcatheter to L2-L3 vertebral level, approximately 2.0 cm below the renal vein confluence, and deployment of ${Math.max(2, Math.ceil(model.coilsCount / 2))} interlocking/pushable coils (0.035", 6-8mm) creating a tight proximal embolic nest.\n\n`;
  note += `4. COMPLETION VENOGRAPHY & POST-OP HEMOSTASIS:\n`;
  note += `Completion DSA during forceful Valsalva maneuver demonstrated 100% complete occlusion of the internal spermatic vein and all collateral channels with zero retrograde flow into the scrotum and widely preserved left renal vein flow. Catheters and sheath removed. Manual compression applied over RCFV puncture site for 10 minutes until complete hemostasis achieved. Sterile pressure dressing applied. Zero immediate procedural complications.`;

  return note;
}

export function synthesizeVaricocelePostOpNote(model: VaricoceleClinicalModel): PostOperativeNoteData {
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const dateStr = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;

  return {
    accessSiteHemostasis: 'RCFV puncture site clean, dry, and intact. Firm pressure dressing applied; zero visible hematoma or active oozing.',
    telemetryVitals: '',
    sheathRemovalTime: `${dateStr} ${timeStr} (Immediate post-procedure hemostasis in Angiosuite)`,
    sheathStatus: 'Removed',
    recoveryStatus: `Conscious, oriented x3, pain VAS ${model.vasPainScore || 1}/10. Scrotal support (langot) applied. Bed rest for 2 hours completed uneventfully.`,
    recoveryBed: 'Venous Daycare PACU Bay-02',
    distalPulses: 'Strong (+++) bilaterally equal - Dorsalis Pedis & Posterior Tibial pulses intact with rapid capillary refill',
    immediateComplications: 'Nil - Zero groin hematoma, zero pseudoaneurysm, zero testicular ischemia, zero coil migration',
    recordedBy: 'Dr. Neel Yadav (Senior Resident IR) / Dr. Alok Verma (Professor & Head IR)',
    recordedAt: `${dateStr} ${timeStr}`,
    notes: `Transvenous Varicocele Embolization Recovery: Sandwich coil and foam embolization verified on completion DSA. Puncture site sealed. Scrotal support applied. Patient ambulating comfortably without pain or dizziness.`,
  };
}

export function synthesizeVaricoceleMedications(): DischargeMedicationItem[] {
  return [
    {
      sNo: 1,
      medicine: 'Tab. Cefixime 200mg [RMSCL DDC #112]',
      genericName: 'Cefixime',
      dosePower: '200mg',
      route: 'ORAL',
      frequency: 'BD',
      days: 5,
      instructions: 'After meals (Prophylactic antibiotic coverage)',
    },
    {
      sNo: 2,
      medicine: 'Tab. Aceclofenac 100mg + Paracetamol 325mg [RMSCL DDC #622/624]',
      genericName: 'Aceclofenac + Paracetamol',
      dosePower: '1 Tab',
      route: 'ORAL',
      frequency: 'BD',
      days: 3,
      instructions: 'After meals for groin or mild testicular ache',
    },
    {
      sNo: 3,
      medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]',
      genericName: 'Pantoprazole',
      dosePower: '40mg',
      route: 'ORAL',
      frequency: 'OD',
      days: 5,
      instructions: 'Before breakfast (Gastroprotection)',
    },
  ];
}

export function synthesizeVaricoceleDischargeAdvice(): string[] {
  return [
    '1. SCROTAL SUPPORT: Wear firm scrotal supporter (athletic supporter / tight cotton briefs / langot) continuously for 10-14 days to minimize dependent venous congestion.',
    '2. GROIN PUNCTURE SITE: Keep right groin puncture site clean and dry for 48 hours. Remove outer dressing after 48 hours. You may take a shower after 48 hours without soaking in a tub.',
    '3. PHYSICAL ACTIVITY: Avoid heavy weightlifting (> 10 kg), strenuous gym workouts, running, cycling, or straining for 2 weeks.',
    '4. SEXUAL ACTIVITY: Abstain from sexual intercourse and masturbation for 7 days post-procedure.',
    '5. POST-EMBOLIZATION SYMPTOMS: A mild dull ache in the groin or flank for 2-3 days is common as the gonadal vein thromboses, and is easily controlled with prescribed analgesics.',
    '6. FOLLOW-UP SCHEDULE: Follow up in IR OPD Room 48 / Old Gastro Ward in 2 weeks for puncture site check. Repeat scrotal Doppler ultrasound and semen analysis at 3 months.',
  ];
}

// ============================================================================
// 5. CRITERIA FIELDS FOR DYNAMIC TEMPLATE RENDERER
// ============================================================================

export const VENOUS_CRITERIA_FIELDS: CriteriaField[] = [
  // Group: Procedure & Target
  {
    key: 'laterality',
    label: 'Target Limb Laterality',
    type: 'select',
    options: [
      { value: 'Left lower limb', label: 'Left Lower Limb' },
      { value: 'Right lower limb', label: 'Right Lower Limb' },
      { value: 'Bilateral lower limbs', label: 'Bilateral Lower Limbs' },
    ],
    defaultValue: 'Left lower limb',
    group: '1. Target & Modality',
  },
  {
    key: 'modality',
    label: 'Procedural Modality',
    type: 'select',
    options: [
      { value: 'VenaSeal_UGFS', label: 'VenaSeal Cyanoacrylate + Concomitant UGFS' },
      { value: 'VenaSeal', label: 'VenaSeal Cyanoacrylate Alone' },
      { value: 'EVLT_UGFS', label: 'EVLT (1470nm Laser) + Concomitant UGFS' },
      { value: 'EVLT', label: 'EVLT (1470nm Laser) Alone' },
      { value: 'UGFS_Only', label: 'UGFS Foam Sclerotherapy Alone' },
    ],
    defaultValue: 'VenaSeal_UGFS',
    group: '1. Target & Modality',
  },
  // Group: Truncal Reflux Anatomy
  {
    key: 'gsvAboveKnee',
    label: 'GSV Above-Knee Reflux (Caliber >= 5.5mm, Reflux >= 0.5s)',
    type: 'checkbox',
    defaultValue: true,
    group: '2. Truncal Reflux Anatomy',
  },
  {
    key: 'gsvBelowKnee',
    label: 'GSV Below-Knee Reflux',
    type: 'checkbox',
    defaultValue: true,
    group: '2. Truncal Reflux Anatomy',
  },
  {
    key: 'ssv',
    label: 'SSV / Saphenopopliteal Junction (SPJ) Reflux',
    type: 'checkbox',
    defaultValue: false,
    group: '2. Truncal Reflux Anatomy',
  },
  {
    key: 'aasv',
    label: 'AASV (Anterior Accessory Saphenous Vein) Reflux',
    type: 'checkbox',
    defaultValue: true,
    group: '2. Truncal Reflux Anatomy',
  },
  {
    key: 'sfjRefluxDuration',
    label: 'SFJ Reflux Duration (Seconds)',
    type: 'select',
    options: [
      { value: '1.5', label: '1.5 s (> 0.5s threshold)' },
      { value: '2.5', label: '2.5 s (Marked reflux)' },
      { value: '3.5', label: '3.5 s (Severe reflux)' },
      { value: 'Continuous', label: 'Continuous Retrograde Flow' },
    ],
    defaultValue: '2.5',
    group: '2. Truncal Reflux Anatomy',
  },
  // Group: Deep Perforator Mapping
  {
    key: 'cockettI',
    label: 'Cockett I Perforator (Medial Calf 6-8cm) Treated with UGFS',
    type: 'checkbox',
    defaultValue: false,
    group: '3. Deep Ultrasound Perforator Mapping',
  },
  {
    key: 'cockettII',
    label: 'Cockett II Perforator (Medial Calf 12-15cm, >=3.5mm) Treated with UGFS',
    type: 'checkbox',
    defaultValue: true,
    group: '3. Deep Ultrasound Perforator Mapping',
  },
  {
    key: 'cockettIII',
    label: 'Cockett III Perforator (Medial Calf 18-24cm, >=3.5mm) Treated with UGFS',
    type: 'checkbox',
    defaultValue: true,
    group: '3. Deep Ultrasound Perforator Mapping',
  },
  {
    key: 'boyds',
    label: "Boyd's Perforator (Proximal Medial Calf below knee) Treated with UGFS",
    type: 'checkbox',
    defaultValue: true,
    group: '3. Deep Ultrasound Perforator Mapping',
  },
  {
    key: 'doddsHunterian',
    label: "Dodd's / Hunterian Perforator (Mid/Distal Thigh Adductor Canal)",
    type: 'checkbox',
    defaultValue: false,
    group: '3. Deep Ultrasound Perforator Mapping',
  },
  // Group: Foam Sclerotherapy
  {
    key: 'sclerosantAgent',
    label: 'Sclerosant Agent & Preparation',
    type: 'select',
    options: [
      { value: '1% Polidocanol foam', label: '1% Polidocanol (Tessari 1:4 with air)' },
      { value: '2% Polidocanol foam', label: '2% Polidocanol (Tessari 1:4 with air)' },
      { value: '3% Polidocanol foam', label: '3% Polidocanol (Tessari 1:4 with air)' },
      { value: '1% STS foam', label: '1% Sodium Tetradecyl Sulfate (STS)' },
      { value: '3% STS foam', label: '3% Sodium Tetradecyl Sulfate (STS)' },
    ],
    defaultValue: '1% Polidocanol foam',
    group: '4. Foam Sclerotherapy (UGFS)',
  },
  {
    key: 'foamVolume',
    label: 'Total Sclerosant Foam Volume (mL, max 10mL)',
    type: 'select',
    options: [
      { value: '3', label: '3.0 mL' },
      { value: '5', label: '5.0 mL' },
      { value: '6', label: '6.0 mL' },
      { value: '8', label: '8.0 mL' },
      { value: '10', label: '10.0 mL (UIP Safety Ceiling)' },
    ],
    defaultValue: '6',
    group: '4. Foam Sclerotherapy (UGFS)',
  },
  {
    key: 'thighVarices',
    label: 'Above-Knee Thigh Varicosities Treated',
    type: 'checkbox',
    defaultValue: true,
    group: '4. Foam Sclerotherapy (UGFS)',
  },
  {
    key: 'calfVarices',
    label: 'Below-Knee Calf Varicosities Treated',
    type: 'checkbox',
    defaultValue: true,
    group: '4. Foam Sclerotherapy (UGFS)',
  },
  // Group: Classification
  {
    key: 'ceapClass',
    label: 'CEAP Clinical Class',
    type: 'select',
    options: [
      { value: 'C2', label: 'C2: Varicose veins (>= 3mm)' },
      { value: 'C3', label: 'C3: Edema' },
      { value: 'C4a', label: 'C4a: Pigmentation or eczema' },
      { value: 'C4b', label: 'C4b: Lipodermatosclerosis / atrophie blanche' },
      { value: 'C5', label: 'C5: Healed venous ulcer' },
      { value: 'C6', label: 'C6: Active venous ulcer' },
    ],
    defaultValue: 'C4a',
    group: '5. Clinical Classification & Severity',
  },
  {
    key: 'vcssBand',
    label: 'VCSS Severity Assessment',
    type: 'select',
    options: [
      { value: 'Mild (0-7)', label: 'Mild (VCSS 0-7)' },
      { value: 'Moderate (8-13)', label: 'Moderate (VCSS 8-13)' },
      { value: 'Severe (14-30)', label: 'Severe (VCSS 14-30)' },
    ],
    defaultValue: 'Moderate (8-13)',
    group: '5. Clinical Classification & Severity',
  },
  // Group: Post-op Safety & Monitoring
  {
    key: 'egitScreening',
    label: 'EGIT / DVT Completion Duplex Finding',
    type: 'select',
    options: [
      { value: 'Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)', label: 'Grade 0 (Absent - Normal patent CFV, zero protrusion)' },
      { value: 'Grade I (Thrombus flush with junction)', label: 'Grade I (Thrombus flush with SFJ/SPJ)' },
      { value: 'Grade II (<50% CFV protrusion)', label: 'Grade II (<50% CFV lumen protrusion)' },
    ],
    defaultValue: 'Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)',
    group: '6. Enhanced Post-Op Recovery & Safety',
  },
  {
    key: 'chairScreening',
    label: 'Screening for CHAIR (Hypersensitivity / Irritation)',
    type: 'select',
    options: [
      { value: 'Negative (No erythema, urticaria or hypersensitivity)', label: 'Negative (Screened clean, zero reaction)' },
      { value: 'Mild self-limiting perivenous erythema (Grade 1)', label: 'Mild self-limiting erythema along tract (Grade 1)' },
    ],
    defaultValue: 'Negative (No erythema, urticaria or hypersensitivity)',
    group: '6. Enhanced Post-Op Recovery & Safety',
  },
  {
    key: 'immediateAmbulation',
    label: 'Immediate Post-Op Ambulation Protocol',
    type: 'select',
    options: [
      { value: '20', label: '20 Minutes Continuous Corridor Ambulation' },
      { value: '25', label: '25 Minutes Continuous Corridor Ambulation' },
      { value: '30', label: '30 Minutes Continuous Corridor Ambulation' },
    ],
    defaultValue: '25',
    group: '6. Enhanced Post-Op Recovery & Safety',
  },
  {
    key: 'vasPain',
    label: 'Recovery Pain Score (VAS 0-10)',
    type: 'select',
    options: [
      { value: '0', label: 'VAS 0/10 (Pain Free)' },
      { value: '1', label: 'VAS 1/10 (Minimal Discomfort)' },
      { value: '2', label: 'VAS 2/10 (Mild Ache)' },
      { value: '3', label: 'VAS 3/10 (Moderate Ache)' },
    ],
    defaultValue: '1',
    group: '6. Enhanced Post-Op Recovery & Safety',
  },
];

export const VARICOCELE_CRITERIA_FIELDS: CriteriaField[] = [
  {
    key: 'laterality',
    label: 'Varicocele Laterality',
    type: 'select',
    options: [
      { value: 'Left', label: 'Left (Most common ~90%)' },
      { value: 'Right', label: 'Right' },
      { value: 'Bilateral', label: 'Bilateral' },
    ],
    defaultValue: 'Left',
    group: '1. Anatomy & Indication',
  },
  {
    key: 'clinicalGrade',
    label: 'Clinical Grade (Dubin-Amelar / Sarteschi)',
    type: 'select',
    options: [
      { value: 'Grade I (Palpable with Valsalva)', label: 'Grade I (Palpable only with Valsalva)' },
      { value: 'Grade II (Palpable without Valsalva)', label: 'Grade II (Palpable at rest without Valsalva)' },
      { value: 'Grade III (Visible through scrotal skin)', label: 'Grade III (Visible bag of worms through scrotal skin)' },
    ],
    defaultValue: 'Grade III (Visible through scrotal skin)',
    group: '1. Anatomy & Indication',
  },
  {
    key: 'indication',
    label: 'Primary Clinical Indication',
    type: 'select',
    options: [
      { value: 'Scrotal pain & heaviness', label: 'Scrotal pain, dragging ache & heaviness' },
      { value: 'Infertility & abnormal semen parameters (OAT)', label: 'Subfertility & abnormal semen parameters' },
      { value: 'Testicular hypotrophy & cosmetic discomfort', label: 'Testicular hypotrophy & asymmetry' },
    ],
    defaultValue: 'Scrotal pain & heaviness',
    group: '1. Anatomy & Indication',
  },
  {
    key: 'symptomDuration',
    label: 'Symptom Duration',
    type: 'select',
    options: [
      { value: '3 months', label: '3 Months' },
      { value: '6 months', label: '6 Months' },
      { value: '1 year', label: '1 Year' },
      { value: '2+ years', label: '2+ Years' },
    ],
    defaultValue: '6 months',
    group: '1. Anatomy & Indication',
  },
  {
    key: 'embolicTechnique',
    label: 'Transvenous Embolization Technique',
    type: 'select',
    options: [
      { value: 'Sandwich Technique (Distal & Proximal Microcoils + 3% STS Foam)', label: 'Sandwich Technique (Microcoils + 3% STS Foam)' },
      { value: 'Microcoils Alone', label: 'Microcoils Alone (Nitinol/Platinum pushable + detachable)' },
      { value: 'Cyanoacrylate Glue Embolization', label: 'Cyanoacrylate Glue / n-BCA Embolization' },
    ],
    defaultValue: 'Sandwich Technique (Distal & Proximal Microcoils + 3% STS Foam)',
    group: '2. Embolization Hardware & Technique',
  },
  {
    key: 'coilsCount',
    label: 'Number of Microcoils Deployed',
    type: 'select',
    options: [
      { value: '2', label: '2 Coils' },
      { value: '4', label: '4 Coils' },
      { value: '6', label: '6 Coils' },
      { value: '8', label: '8 Coils' },
    ],
    defaultValue: '6',
    group: '2. Embolization Hardware & Technique',
  },
  {
    key: 'semenParametersAbnormal',
    label: 'Abnormal Semen Analysis (Oligoasthenoteratozoospermia)',
    type: 'checkbox',
    defaultValue: false,
    group: '2. Embolization Hardware & Technique',
  },
  {
    key: 'vasPainScore',
    label: 'Post-Procedure Pain Score (VAS 0-10)',
    type: 'select',
    options: [
      { value: '0', label: 'VAS 0/10' },
      { value: '1', label: 'VAS 1/10' },
      { value: '2', label: 'VAS 2/10' },
      { value: '3', label: 'VAS 3/10' },
    ],
    defaultValue: '1',
    group: '3. Post-Op Recovery & Safety',
  },
];

export function mapCriteriaToVaricoseModel(c: Record<string, any>): VaricoseClinicalModel {
  const truncal = createDefaultTruncal();
  truncal.gsvAboveKnee = c.gsvAboveKnee !== false;
  truncal.gsvBelowKnee = c.gsvBelowKnee !== false;
  truncal.ssv = !!c.ssv;
  truncal.aasv = c.aasv !== false;
  truncal.sfjRefluxDurationSec = parseFloat(c.sfjRefluxDuration || '2.5') || 2.5;

  const perforators = createDefaultPerforators();
  if (c.cockettI !== undefined) perforators[0].status = c.cockettI ? 'Treated with UGFS' : 'Observed (Sub-critical)';
  if (c.cockettII !== undefined) perforators[1].status = c.cockettII ? 'Treated with UGFS' : 'Observed (Sub-critical)';
  if (c.cockettIII !== undefined) perforators[2].status = c.cockettIII ? 'Treated with UGFS' : 'Observed (Sub-critical)';
  if (c.boyds !== undefined) perforators[3].status = c.boyds ? 'Treated with UGFS' : 'Observed (Sub-critical)';
  if (c.doddsHunterian !== undefined) {
    perforators[4].status = c.doddsHunterian ? 'Treated with UGFS' : 'Observed (Sub-critical)';
    perforators[5].status = c.doddsHunterian ? 'Treated with UGFS' : 'Observed (Sub-critical)';
  }

  const sclerotherapy = createDefaultSclerotherapy();
  if (c.sclerosantAgent) sclerotherapy.sclerosantAgent = c.sclerosantAgent;
  if (c.foamVolume) sclerotherapy.totalVolumeMl = Math.min(10, parseFloat(c.foamVolume) || 6);
  if (c.thighVarices !== undefined) sclerotherapy.aboveKneeThighVarices = !!c.thighVarices;
  if (c.calfVarices !== undefined) sclerotherapy.belowKneeCalfVarices = !!c.calfVarices;

  const vcss = createDefaultVcss();
  if (c.vcssBand === 'Mild (0-7)') {
    vcss.pain = 1; vcss.varicoseVeins = 1; vcss.skinPigmentation = 0; vcss.induration = 0;
  } else if (c.vcssBand === 'Severe (14-30)') {
    vcss.pain = 3; vcss.varicoseVeins = 3; vcss.skinPigmentation = 3; vcss.induration = 2; vcss.venousEdema = 2;
  }

  const ceapClass: CeapClinicalClass = c.ceapClass || 'C4a';

  return {
    laterality: (c.laterality as VenousLaterality) || 'Left lower limb',
    modality: (c.modality as VenousModality) || 'VenaSeal_UGFS',
    symptomDuration: c.symptomDuration || '10 months',
    itchingDuration: c.itchingDuration || (ceapClass === 'C4a' ? '3 months' : 'None'),
    ulcerSizeAndSite: c.ulcerSizeAndSite || (ceapClass === 'C6' ? 'Left medial malleolus (3x2 cm)' : 'None'),
    familyHistory: c.familyHistory || 'Present (Mother)',
    truncal,
    perforators,
    sclerotherapy,
    ceapClass,
    vcss,
    findings: {
      varicoseVeins: true,
      venousUlcer: ceapClass === 'C6' || ceapClass === 'C5',
      hyperpigmentation: ceapClass === 'C4a' || ceapClass === 'C4b' || ceapClass === 'C5' || ceapClass === 'C6',
      lipodermatosclerosis: ceapClass === 'C4b' || ceapClass === 'C5' || ceapClass === 'C6',
      coronaPhlebectatica: true,
      edema: ceapClass >= 'C3',
      achingPain: true,
      nightCramps: true,
      restlessLegs: false,
      thrombophlebitis: false,
    },
    compressionStockingsApplied: true,
    immediateAmbulationMinutes: parseInt(c.immediateAmbulation || '25', 10) || 25,
    vasPainScore: parseInt(c.vasPain || '1', 10) || 1,
    egitStatus: c.egitScreening || 'Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)',
    chairScreening: c.chairScreening || 'Negative (No erythema, urticaria or hypersensitivity)',
  };
}

export function mapCriteriaToVaricoceleModel(c: Record<string, any>): VaricoceleClinicalModel {
  return {
    laterality: c.laterality || 'Left',
    clinicalGrade: c.clinicalGrade || 'Grade III (Visible through scrotal skin)',
    indication: c.indication || 'Scrotal pain & heaviness',
    symptomDuration: c.symptomDuration || '6 months',
    pampiniformDiameterRestMm: 3.8,
    pampiniformDiameterValsalvaMm: 4.8,
    refluxDurationSec: 3.2,
    embolicTechnique: c.embolicTechnique || 'Sandwich Technique (Distal & Proximal Microcoils + 3% STS Foam)',
    coilsCount: parseInt(c.coilsCount || '6', 10) || 6,
    collateralsOccluded: true,
    semenParametersAbnormal: !!c.semenParametersAbnormal,
    vasPainScore: parseInt(c.vasPainScore || '1', 10) || 1,
  };
}

