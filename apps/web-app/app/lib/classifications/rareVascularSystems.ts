/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Rare Literature-Reported Anatomical & Vascular Classifications Engine
 * Incorporating specialized classifications from JVIR, CVIR, Radiographics, and JNIS.
 */

// 1. De Assis PAE Prostatic Artery Classification (JVIR 2012 / CVIR 2018)
export interface PaeArterialVariant {
  type: string;
  name: string;
  origin: string;
  frequency: string;
  description: string;
  embolizationAlert: string;
}

export const DE_ASSIS_PAE_TYPES: Record<string, PaeArterialVariant> = {
  type1: {
    type: 'Type I',
    name: 'Common Trunk with Superior Vesical Artery (P-SVA Trunk)',
    origin: 'Anterior division of Internal Iliac Artery (IIA) as a bifurcation with SVA',
    frequency: '28.7%',
    description: 'Prostatic artery arises from a common trunk with the Superior Vesical Artery. Most common anatomical pattern.',
    embolizationAlert: 'Must advance microcatheter beyond the superior vesical branch to prevent bladder wall necrosis and severe ischemic cystitis.'
  },
  type2: {
    type: 'Type II',
    name: 'Direct Anterior Division Origin (Inferior Vesical Artery / Anterior IIA)',
    origin: 'Directly from Anterior Trunk of Internal Iliac Artery',
    frequency: '14.7%',
    description: 'Direct takeoff from the anterior division trunk between superior vesical and obturator origins.',
    embolizationAlert: 'Ensure stable microcatheter wedging; watch for early capsular vs. central gland branching.'
  },
  type3: {
    type: 'Type III',
    name: 'Obturator Artery Origin',
    origin: 'Arises as a medial branch from the Obturator Artery',
    frequency: '18.9%',
    description: 'Prostatic artery arises from the obturator artery as it courses along the lateral pelvic sidewall.',
    embolizationAlert: 'High angle of takeoff from obturator branch. Requires primary steerable 0.014" wire shaping. Watch out for corona mortis anastomoses!'
  },
  type4: {
    type: 'Type IV',
    name: 'Internal Pudendal Artery Origin',
    origin: 'Arises from Internal Pudendal Artery before Alcock canal entry',
    frequency: '31.1%',
    description: 'Second most common pattern. Originates as an anteromedial branch of the internal pudendal artery.',
    embolizationAlert: 'CRITICAL: Never embolize proximal in Internal Pudendal Artery to avoid permanent erectile dysfunction and penile skin necrosis (PF-PE Shunts).'
  },
  type5: {
    type: 'Type V',
    name: 'Less Common / Variant Origins (Superior Gluteal, Inferior Gluteal, or Accessory Pudendal)',
    origin: 'Posterior division IIA / Superior Gluteal / Accessory Pudendal Artery',
    frequency: '6.6%',
    description: 'Rare variant origins. In up to 4%, an accessory pudendal artery from external iliac or obturator supplies the apical prostate.',
    embolizationAlert: 'Accessory pudendal vessels provide essential penile cavernous supply. Use Cone-Beam CT (CBCT) to rule out penile perfusion before particle injection.'
  }
};

// 2. Sarin Classification of Gastric Varices (Hepatology Consensus)
export interface SarinVaricealType {
  type: string;
  name: string;
  location: string;
  bleedRisk: string;
  intervention: string;
}

export const SARIN_VARICES_TYPES: Record<string, SarinVaricealType> = {
  gov1: {
    type: 'GOV1',
    name: 'Gastroesophageal Varices Type 1',
    location: 'Extend along lesser curvature as a continuation of esophageal varices.',
    bleedRisk: 'Moderate (resembles esophageal varices)',
    intervention: 'Endoscopic Variceal Ligation (EVL) / TIPS + Transjugular Coronary Vein Embolization (Coils + Glue).'
  },
  gov2: {
    type: 'GOV2',
    name: 'Gastroesophageal Varices Type 2',
    location: 'Extend along fundus past gastroesophageal junction toward posterior wall.',
    bleedRisk: 'High mortality & massive hemorrhage risk',
    intervention: 'Balloon-Occluded Retrograde Transvenous Obliteration (BRTO / PARTO / CARTO) or TIPS + Coil/Glue.'
  },
  igv1: {
    type: 'IGV1',
    name: 'Isolated Gastric Varices Type 1 (True Fundal Varices)',
    location: 'Isolated in the gastric fundus without esophageal varices component.',
    bleedRisk: 'Highest rupture volume & massive bleeding',
    intervention: 'Definitive BRTO / PARTO via Gastrorenal Shunt (GRS) using Gelfoam/Sodium Tetradecyl Sulfate (STS) foam or vascular plugs.'
  },
  igv2: {
    type: 'IGV2',
    name: 'Isolated Gastric Varices Type 2 (Ectopic Gastric Varices)',
    location: 'Ectopic varices located in the body, antrum, or pylorus.',
    bleedRisk: 'Rare but severe bleeding',
    intervention: 'Percutaneous Transhepatic / Transjugular Variceal Obliteration (PTO/TIPS).'
  }
};

// 3. Forrest Classification for Peptic Ulcer Hemorrhage
export interface ForrestType {
  type: string;
  name: string;
  description: string;
  rebleedRisk: string;
  irIndication: string;
}

export const FORREST_TYPES: Record<string, ForrestType> = {
  ia: {
    type: 'Forrest Ia',
    name: 'Spurting Hemorrhage (Active Arterial Bleed)',
    description: 'Active pulsatile arterial spurting from ulcer bed.',
    rebleedRisk: '90% without definitive therapy',
    irIndication: 'Emergency Transcatheter Arterial Embolization (TAE). Front-and-back door coil embolization of GDA/Left Gastric Artery.'
  },
  ib: {
    type: 'Forrest Ib',
    name: 'Oozing Hemorrhage (Active Non-Pulsatile)',
    description: 'Active continuous oozing from ulcer bed.',
    rebleedRisk: '60-80%',
    irIndication: 'Urgent Catheter Angiography & GDA/LGA microcoil/gelfoam embolization if refractory to endoscopic clipping.'
  },
  iia: {
    type: 'Forrest IIa',
    name: 'Non-Bleeding Visible Vessel',
    description: 'Raised pigmented vessel stump in ulcer crater.',
    rebleedRisk: '40-50%',
    irIndication: 'Prophylactic GDA embolization indicated in elderly or high-risk surgical patients failing dual endoscopic therapy.'
  },
  iib: {
    type: 'Forrest IIb',
    name: 'Adherent Clot',
    description: 'Resistant overlying clot refractory to gentle irrigation.',
    rebleedRisk: '20-30%',
    irIndication: 'Endoscopic removal and targeted clipping; TAE if rebleeding occurs.'
  },
  iic: {
    type: 'Forrest IIc',
    name: 'Flat Pigmented Spot (Hematin Base)',
    description: 'Clean base with dark spots.',
    rebleedRisk: '< 10%',
    irIndication: 'Medical therapy with high-dose IV PPI. Endovascular intervention rarely required.'
  },
  iii: {
    type: 'Forrest III',
    name: 'Clean-Based Ulcer',
    description: 'Pristine ulcer bed without stigmata of recent hemorrhage.',
    rebleedRisk: '< 5%',
    irIndication: 'Oral PPI therapy. No IR intervention.'
  }
};

// 4. Dubin-Amelar & Sarteschi Varicocele Classification
export interface VaricoceleGrade {
  grade: string;
  name: string;
  clinicalExam: string;
  dopplerCriteria: string;
  embolizationCandidate: boolean;
}

export const SARTESCHI_VARICOCELE_GRADES: Record<string, VaricoceleGrade> = {
  grade1: {
    grade: 'Grade I',
    name: 'Subclinical / Reflux at Saphenofemoral/Internal Ring Only',
    clinicalExam: 'Not palpable at rest or during Valsalva.',
    dopplerCriteria: 'Retrograde flow transient (<2 sec) only during prolonged Valsalva at groin level.',
    embolizationCandidate: false
  },
  grade2: {
    grade: 'Grade II',
    name: 'Supratesticular Varicocele (Palpable only with Valsalva)',
    clinicalExam: 'Palpable as a venous fullness only during active Valsalva maneuver.',
    dopplerCriteria: 'Continuous venous reflux in supratesticular pampiniform plexus (>2 sec) during Valsalva.',
    embolizationCandidate: true
  },
  grade3: {
    grade: 'Grade III',
    name: 'Scrotal Varicocele (Palpable at Rest)',
    clinicalExam: 'Readily palpable scrotal veins at rest without Valsalva.',
    dopplerCriteria: 'Severe continuous reflux extending into intrascrotal plexus with testicular vein diameter > 3.5 mm.',
    embolizationCandidate: true
  },
  grade4: {
    grade: 'Grade IV',
    name: 'Overt Visible Varicocele ("Bag of Worms")',
    clinicalExam: 'Visible through scrotal skin at rest without palpation ("Bag of worms" appearance).',
    dopplerCriteria: 'Spontaneous resting retrograde flow; testicular atrophy / volume loss > 20% compared to contralateral.',
    embolizationCandidate: true
  },
  grade5: {
    grade: 'Grade V',
    name: 'Resting Spontaneous Continuous Reflux (Sarteschi V)',
    clinicalExam: 'Severe visible deformity with marked testicular hypotrophy and scrotal heaviness.',
    dopplerCriteria: 'Permanent retrograde venous pooling even in supine position without provocation.',
    embolizationCandidate: true
  }
};

// Evaluation Helper Functions
export function evaluatePaeClassification(typeKey: string) {
  const v = DE_ASSIS_PAE_TYPES[typeKey] ?? DE_ASSIS_PAE_TYPES['type1'];
  return {
    valid: true,
    typeData: v,
    summary: `PAE De Assis ${v.type} (${v.name}): Origin ${v.origin} (Frequency ${v.frequency})`,
    alert: v.embolizationAlert
  };
}

export function evaluateSarinClassification(typeKey: string) {
  const v = SARIN_VARICES_TYPES[typeKey] ?? SARIN_VARICES_TYPES['igv1'];
  return {
    valid: true,
    typeData: v,
    summary: `Sarin ${v.type} (${v.name}): ${v.location}`,
    intervention: v.intervention
  };
}

export function evaluateForrestClassification(typeKey: string) {
  const v = FORREST_TYPES[typeKey] ?? FORREST_TYPES['ia'];
  return {
    valid: true,
    typeData: v,
    summary: `Forrest ${v.type} (${v.name}): ${v.description}`,
    rebleedRisk: v.rebleedRisk,
    irIndication: v.irIndication
  };
}

export function evaluateVaricoceleClassification(typeKey: string) {
  const v = SARTESCHI_VARICOCELE_GRADES[typeKey] ?? SARTESCHI_VARICOCELE_GRADES['grade3'];
  return {
    valid: true,
    typeData: v,
    summary: `Varicocele ${v.grade} (${v.name}): ${v.clinicalExam}`,
    dopplerCriteria: v.dopplerCriteria,
    embolizationCandidate: v.embolizationCandidate
  };
}

// ============================================================================
// 5. COGNARD & BORDEN CLASSIFICATION OF DURAL ARTERIOVENOUS FISTULAS (dAVF)
// ============================================================================
export interface DavfClassificationType {
  type: string;
  name: string;
  venousDrainage: string;
  corticalReflux: boolean;
  annualHemorrhageRisk: string;
  treatmentStrategy: string;
}

export const COGNARD_DAVF_TYPES: Record<string, DavfClassificationType> = {
  type1: {
    type: 'Cognard Type I / Borden Type I',
    name: 'Dural Sinus Drainage with Antegrade Flow',
    venousDrainage: 'Drains directly into dural sinus with normal antegrade sinus flow. No cortical venous reflux.',
    corticalReflux: false,
    annualHemorrhageRisk: '< 1% (Benign natural history)',
    treatmentStrategy: 'Conservative observation, manual carotid-jugular compression, or elective transvenous coil/Onyx embolization if pulsatile tinnitus is intolerable.'
  },
  type2a: {
    type: 'Cognard Type IIa / Borden Type I',
    name: 'Dural Sinus Drainage with Retrograde Sinus Flow',
    venousDrainage: 'Drains into dural sinus with retrograde flow in the sinus itself, but NO cortical venous reflux.',
    corticalReflux: false,
    annualHemorrhageRisk: '~1.5% (Low risk)',
    treatmentStrategy: 'Transvenous or transarterial Onyx embolization recommended if symptomatic or progressive sinus hypertension.'
  },
  type2b: {
    type: 'Cognard Type IIb / Borden Type II',
    name: 'Dural Sinus Drainage with Retrograde Cortical Venous Reflux',
    venousDrainage: 'Drains into dural venous sinus with retrograde reflux into cortical/leptomeningeal veins.',
    corticalReflux: true,
    annualHemorrhageRisk: '10% annual intracranial hemorrhage risk',
    treatmentStrategy: 'Aggressive endovascular treatment: Transarterial Onyx/PHIL embolization or transvenous sinus coil occlusion to eliminate cortical reflux.'
  },
  type2ab: {
    type: 'Cognard Type IIa+b / Borden Type II',
    name: 'Retrograde Dural Sinus Flow + Cortical Venous Reflux',
    venousDrainage: 'Retrograde flow in both the major venous sinus and cortical leptomeningeal draining veins.',
    corticalReflux: true,
    annualHemorrhageRisk: '15-20% annual intracranial hemorrhage risk',
    treatmentStrategy: 'Urgent endovascular embolization (transarterial Onyx or balloon-assisted transvenous occlusion).'
  },
  type3: {
    type: 'Cognard Type III / Borden Type III',
    name: 'Direct Cortical Venous Drainage without Sinus Intermediate',
    venousDrainage: 'Direct fistulous drainage into isolated cortical/leptomeningeal veins without sinus involvement.',
    corticalReflux: true,
    annualHemorrhageRisk: '35-40% annual intracranial hemorrhage / neurological deficit risk',
    treatmentStrategy: 'High-risk aggressive lesion: Immediate transarterial liquid embolic (Onyx/SQUID) embolization or surgical clip disconnection of the draining vein.'
  },
  type4: {
    type: 'Cognard Type IV / Borden Type III',
    name: 'Direct Cortical Drainage with Venous Ectasia (>5mm)',
    venousDrainage: 'Direct cortical venous drainage accompanied by giant venous ectasia / pseudaneurysmal pouch.',
    corticalReflux: true,
    annualHemorrhageRisk: '50-65% catastrophic rupture and ICH risk',
    treatmentStrategy: 'Emergent endovascular cure via superselective transarterial Onyx cast or combined hybrid microsurgical disconnection.'
  },
  type5: {
    type: 'Cognard Type V',
    name: 'Spinal Perimedullary Venous Drainage',
    venousDrainage: 'Foramen magnum / posterior fossa dAVF with descending perimedullary venous drainage into spinal cord veins.',
    corticalReflux: true,
    annualHemorrhageRisk: 'High risk of progressive myelopathy (Foix-Alajouanine syndrome) and brainstem hemorrhage',
    treatmentStrategy: 'Prompt superselective transarterial Onyx/NBCA embolization or surgical disconnection of the radicular feeding vessel.'
  }
};

export function evaluateCognardDavf(typeKey: string) {
  const v = COGNARD_DAVF_TYPES[typeKey] ?? COGNARD_DAVF_TYPES['type3'];
  return {
    valid: true,
    typeData: v,
    summary: `${v.type} (${v.name}): ${v.venousDrainage}`,
    corticalReflux: v.corticalReflux,
    hemorrhageRisk: v.annualHemorrhageRisk,
    treatmentStrategy: v.treatmentStrategy
  };
}

// ============================================================================
// 6. ISHIMARU AORTIC ARCH LANDING ZONES (ZONES 0 TO 4) & TEVAR SUITABILITY
// ============================================================================
export interface IshimaruZoneType {
  zone: string;
  name: string;
  proximalBoundary: string;
  distalBoundary: string;
  debranchingRequired: string;
  tevarFeasibility: string;
}

export const ISHIMARU_AORTIC_ZONES: Record<string, IshimaruZoneType> = {
  zone0: {
    zone: 'Zone 0',
    name: 'Ascending Aorta (Proximal to Innominate / Brachiocephalic Artery)',
    proximalBoundary: 'Aortic valve annulus / Sinotubular junction',
    distalBoundary: 'Distal border of the Innominate (Brachiocephalic) artery origin',
    debranchingRequired: 'Total Aortic Arch Debranching (Ascending-to-bicarotid-subclavian bypass) or Double-Inner-Branch Aortic Stent-Graft.',
    tevarFeasibility: 'Extremely high complexity; requires open surgical landing or customized arch branch devices.'
  },
  zone1: {
    zone: 'Zone 1',
    name: 'Between Innominate & Left Common Carotid Artery (LCCA)',
    proximalBoundary: 'Distal border of Innominate artery',
    distalBoundary: 'Distal border of Left Common Carotid Artery origin',
    debranchingRequired: 'Right-to-Left Carotid-Carotid Bypass or Innominate-to-LCCA bypass + Left Subclavian revascularization.',
    tevarFeasibility: 'Requires single-branch arch endograft or surgical extra-anatomic carotid bypass.'
  },
  zone2: {
    zone: 'Zone 2',
    name: 'Between Left Common Carotid & Left Subclavian Artery (LSA)',
    proximalBoundary: 'Distal border of Left Common Carotid Artery',
    distalBoundary: 'Distal border of Left Subclavian Artery origin',
    debranchingRequired: 'Left Carotid-to-Subclavian Bypass or LSA Chimney / Castor branched stent graft (prevents left arm ischemia and posterior stroke).',
    tevarFeasibility: 'Standard TEVAR landing with prophylactic LSA revascularization or scalloped/fenestrated graft.'
  },
  zone3: {
    zone: 'Zone 3',
    name: 'Proximal Descending Thoracic Aorta (First 2 cm Distal to LSA)',
    proximalBoundary: 'Distal border of Left Subclavian Artery',
    distalBoundary: '20 mm distal to the lower border of LSA orifice',
    debranchingRequired: 'None required if >= 20 mm healthy non-aneurysmal neck exists distal to LSA.',
    tevarFeasibility: 'Ideal landing zone for standard non-branched thoracic stent grafts with >= 20mm seal length.'
  },
  zone4: {
    zone: 'Zone 4',
    name: 'Mid-to-Distal Descending Thoracic Aorta (> 2 cm Distal to LSA)',
    proximalBoundary: '20 mm distal to LSA orifice',
    distalBoundary: 'Celiac axis origin (T12)',
    debranchingRequired: 'None; strictly intra-thoracic landing.',
    tevarFeasibility: 'Standard straight or tapered TEVAR endograft placement.'
  }
};

export function evaluateIshimaruZone(zoneKey: string) {
  const v = ISHIMARU_AORTIC_ZONES[zoneKey] ?? ISHIMARU_AORTIC_ZONES['zone2'];
  return {
    valid: true,
    typeData: v,
    summary: `${v.zone} (${v.name}): ${v.proximalBoundary} to ${v.distalBoundary}`,
    debranching: v.debranchingRequired,
    feasibility: v.tevarFeasibility
  };
}

// ============================================================================
// 7. CRAWFORD & SAFI THORACOABDOMINAL AORTIC ANEURYSM (TAAA) EXTENT
// ============================================================================
export interface CrawfordTaaaType {
  extent: string;
  name: string;
  proximalLimit: string;
  distalLimit: string;
  paraplegiaRisk: string;
  endovascularTechnique: string;
}

export const CRAWFORD_TAAA_EXTENTS: Record<string, CrawfordTaaaType> = {
  extent1: {
    extent: 'Crawford Extent I',
    name: 'Upper Thoracic to Above Renal Arteries',
    proximalLimit: 'Origin of Left Subclavian Artery (T4-T6)',
    distalLimit: 'Suprarenal abdominal aorta (above renal artery origins)',
    paraplegiaRisk: 'Moderate (4-8% spinal cord ischemia)',
    endovascularTechnique: 'Custom Fenestrated/Branched TEVAR (F-EVAR) or Celiac/SMA branched endograft.'
  },
  extent2: {
    extent: 'Crawford Extent II',
    name: 'Total Thoracoabdominal Aorta (Most Extensive)',
    proximalLimit: 'Origin of Left Subclavian Artery',
    distalLimit: 'Aortic bifurcation into iliac arteries (Infrarenal/Iliac)',
    paraplegiaRisk: 'Highest (15-25% spinal cord ischemia risk; requires CSF drain & staged repair)',
    endovascularTechnique: '4-vessel Branched EVAR (t-Branch / Custom E-nside) covering Celiac, SMA, and bilateral Renal Arteries + lumbar sacrifice.'
  },
  extent3: {
    extent: 'Crawford Extent III',
    name: 'Distal Thoracic to Aortic Bifurcation',
    proximalLimit: 'Mid-to-lower descending thoracic aorta (below T6 level)',
    distalLimit: 'Aortic bifurcation / Iliac vessels',
    paraplegiaRisk: 'Moderate-High (8-12% SCI risk)',
    endovascularTechnique: 'Branched EVAR (Celiac, SMA, Renal branches) with distal bifurcated infrarenal extension.'
  },
  extent4: {
    extent: 'Crawford Extent IV',
    name: 'Abdominal Aorta Involving Visceral Segment',
    proximalLimit: 'Diaphragm / Celiac axis level (T12)',
    distalLimit: 'Aortic bifurcation',
    paraplegiaRisk: 'Low (< 3% spinal cord ischemia risk)',
    endovascularTechnique: 'Standard 4-vessel Fenestrated EVAR (FEVAR) or Visceral Parallel Chimney/Periscope Stents (ChEVAR).'
  },
  extent5: {
    extent: 'Crawford-Safi Extent V',
    name: 'Lower Thoracic to Suprarenal (Safi Modified)',
    proximalLimit: 'Distal descending thoracic aorta (below T6 level)',
    distalLimit: 'Suprarenal aorta (above or at renal arteries, sparing infrarenal)',
    paraplegiaRisk: 'Low-Moderate (3-5% SCI risk)',
    endovascularTechnique: 'Fenestrated aortic cuff or hybrid visceral debranching.'
  }
};

export function evaluateCrawfordTaaa(extentKey: string) {
  const v = CRAWFORD_TAAA_EXTENTS[extentKey] ?? CRAWFORD_TAAA_EXTENTS['extent2'];
  return {
    valid: true,
    typeData: v,
    summary: `${v.extent} (${v.name}): ${v.proximalLimit} down to ${v.distalLimit}`,
    paraplegiaRisk: v.paraplegiaRisk,
    technique: v.endovascularTechnique
  };
}

// ============================================================================
// 8. STRASBERG & BISMUTH IATROGENIC BILE DUCT INJURY CLASSIFICATION
// ============================================================================
export interface StrasbergBiliaryType {
  type: string;
  name: string;
  anatomicLesion: string;
  clinicalPresentation: string;
  irManagement: string;
}

export const STRASBERG_BILIARY_TYPES: Record<string, StrasbergBiliaryType> = {
  typeA: {
    type: 'Strasberg Type A',
    name: 'Cystic Duct Leak or Minor Liver Bed Radicle Leak',
    anatomicLesion: 'Bile leak from cystic duct stump or small subvesical ducts of Luschka in gallbladder fossa.',
    clinicalPresentation: 'Post-laparoscopic cholecystectomy biloma, right upper quadrant pain, mild peritonitis.',
    irManagement: 'Percutaneous ultrasound-guided biloma catheter drainage + ERCP biliary sphincterotomy / Plastic biliary stent.'
  },
  typeB: {
    type: 'Strasberg Type B',
    name: 'Occlusion of Aberrant Right Sectoral Biliary Duct',
    anatomicLesion: 'Inadvertent clipping/ligation of an aberrant right posterior sectoral bile duct without leakage.',
    clinicalPresentation: 'Segmental liver atrophy of right posterior segments (6 & 7) with localized asymptomatic ductal dilatation.',
    irManagement: 'Conservative observation if asymptomatic and non-infected. PTBD indicated if recurrent cholangitis ensues.'
  },
  typeC: {
    type: 'Strasberg Type C',
    name: 'Transection / Leak of Aberrant Right Sectoral Duct',
    anatomicLesion: 'Complete transection and persistent bile leakage from aberrant right sectoral duct not communicating with common hepatic duct.',
    clinicalPresentation: 'Persistent high-volume external biliary leak or large intra-abdominal biloma.',
    irManagement: 'Targeted percutaneous transhepatic biliary drainage (PTBD) into isolated aberrant sector + biloma evacuation; prepare for surgical hepaticojejunostomy if unresolved.'
  },
  typeD: {
    type: 'Strasberg Type D',
    name: 'Lateral Incomplete Injury of Major Bile Duct',
    anatomicLesion: 'Partial lateral laceration/thermal burn injury to common hepatic duct or common bile duct (> 5mm).',
    clinicalPresentation: 'High-output bile peritonitis or controlled T-tube fistula.',
    irManagement: 'Percutaneous transhepatic internal-external biliary drainage (PTBD) across defect with bridging 8.5-10F catheter to allow spontaneous epithelial sealing.'
  },
  typeE1: {
    type: 'Strasberg Type E1 (Bismuth I)',
    name: 'Common Hepatic Duct Transection / Stricture > 2 cm from Confluence',
    anatomicLesion: 'Complete transaction or tight circumferential stricture with CHD stump length > 2 cm below confluence.',
    clinicalPresentation: 'Obstructive jaundice with generalized intrahepatic biliary radical dilatation.',
    irManagement: 'Percutaneous biliary balloon dilation (8-10 mm cutting balloon) + prolonged dual catheter internal-external drainage or surgical Roux-en-Y hepaticojejunostomy.'
  },
  typeE2: {
    type: 'Strasberg Type E2 (Bismuth II)',
    name: 'Common Hepatic Duct Stricture < 2 cm from Confluence',
    anatomicLesion: 'Stricture of common hepatic duct leaving < 2 cm of healthy CHD stump below hilar confluence.',
    clinicalPresentation: 'Progressive severe painless obstructive jaundice and pruritus.',
    irManagement: 'Bilateral PTBD access, transhepatic rendezvous wire passage, progressive sequential balloon dilation and dual 10-12F drainage stenting.'
  },
  typeE3: {
    type: 'Strasberg Type E3 (Bismuth III)',
    name: 'Hilar Confluence Stricture (Left & Right Ducts in Communication)',
    anatomicLesion: 'Stricture flush at the confluence of the right and left hepatic ducts, preserving inter-ductal communication.',
    clinicalPresentation: 'Hilar obstruction; elevated ALP, GGT, and total bilirubin > 15 mg/dL.',
    irManagement: 'Bilateral PTBD with crossing of both ductal systems; long-term large-bore (12-14F) catheter stenting across confluence.'
  },
  typeE4: {
    type: 'Strasberg Type E4 (Bismuth IV)',
    name: 'Confluence Disruption with Right & Left Ductal Separation',
    anatomicLesion: 'Complete disruption and destruction of biliary confluence; right and left intrahepatic ducts are disconnected.',
    clinicalPresentation: 'Segmental biliary obstruction; disparate lobar cholangitis.',
    irManagement: 'Separate right and left percutaneous transhepatic biliary drains (independent access) for bilateral decompression and clearance before complex surgical reconstruction.'
  },
  typeE5: {
    type: 'Strasberg Type E5 (Bismuth V)',
    name: 'Combined Stricture of Main Confluence + Aberrant Right Sectoral Duct',
    anatomicLesion: 'Simultaneous stricture of main biliary confluence PLUS stricture/injury to an anomalous low-inserting right sectoral duct.',
    clinicalPresentation: 'Refractory right-lobe cholangitis and progressive hepatic decompensation.',
    irManagement: 'Triple PTBD access (Left, Right Anterior, and Right Posterior aberrant ducts) with targeted balloon angioplasty.'
  }
};

export function evaluateStrasbergBiliaryInjury(typeKey: string) {
  const v = STRASBERG_BILIARY_TYPES[typeKey] ?? STRASBERG_BILIARY_TYPES['typeE2'];
  return {
    valid: true,
    typeData: v,
    summary: `${v.type} (${v.name}): ${v.anatomicLesion}`,
    presentation: v.clinicalPresentation,
    irManagement: v.irManagement
  };
}

// ============================================================================
// 9. WSES & AAST ORGAN INJURY SCALES (OIS I-V) FOR SOLID ORGAN TRAUMA
// ============================================================================
export interface SolidOrganTraumaGrade {
  grade: string;
  organ: 'Liver' | 'Spleen' | 'Kidney';
  hematomaCriteria: string;
  lacerationCriteria: string;
  vascularLesion: string;
  managementGuideline: string;
}

export const WSES_ORGAN_INJURY_GRADES: Record<string, SolidOrganTraumaGrade> = {
  liver_grade1: {
    grade: 'Grade I',
    organ: 'Liver',
    hematomaCriteria: 'Subcapsular hematoma < 10% surface area',
    lacerationCriteria: 'Capsular tear < 1 cm parenchymal depth',
    vascularLesion: 'None (no active contrast extravasation)',
    managementGuideline: 'Non-Operative Management (NOM). Strict ICU monitoring, serial hematocrit checks.'
  },
  liver_grade2: {
    grade: 'Grade II',
    organ: 'Liver',
    hematomaCriteria: 'Subcapsular 10-50% surface area; intraparenchymal < 5 cm diameter',
    lacerationCriteria: 'Laceration 1-3 cm depth, < 10 cm length',
    vascularLesion: 'None',
    managementGuideline: 'NOM with serial repeat CE-CT at 48 hours or if hemodynamic drop occurs.'
  },
  liver_grade3: {
    grade: 'Grade III',
    organ: 'Liver',
    hematomaCriteria: 'Subcapsular > 50% surface area or expanding/ruptured; intraparenchymal > 5 cm',
    lacerationCriteria: 'Laceration > 3 cm parenchymal depth',
    vascularLesion: 'Contained pseudoaneurysm or arteriovenous fistula without free intraperitoneal extravasation',
    managementGuideline: 'Endovascular Transcatheter Arterial Embolization (TAE) with microcoils/Gelfoam for vascular pseudoaneurysms; conservative NOM if hemodynamically stable.'
  },
  liver_grade4: {
    grade: 'Grade IV',
    organ: 'Liver',
    hematomaCriteria: 'Ruptured intraparenchymal hematoma with active bleeding',
    lacerationCriteria: 'Parenchymal disruption involving 25-75% of hepatic lobe or 1-3 Couinaud segments',
    vascularLesion: 'Active arterial contrast extravasation into parenchyma or peritoneum (blush)',
    managementGuideline: 'EMERGENCY CATH LAB: Superselective hepatic artery catheterization and embolization (coils + microparticles/glue). Immediate stabilization.'
  },
  liver_grade5: {
    grade: 'Grade V',
    organ: 'Liver',
    hematomaCriteria: 'Complete lobar tissue destruction',
    lacerationCriteria: 'Parenchymal disruption > 75% of hepatic lobe or > 3 segments in a single lobe',
    vascularLesion: 'Major juxtahepatic venous injury (retrohepatic IVC or major central hepatic veins)',
    managementGuideline: 'Damage Control Laparotomy with perihepatic packing + emergency hybrid endovascular balloon occlusion (REBOA Zone 1 / retrohepatic stent-graft).'
  },
  spleen_grade1: {
    grade: 'Grade I',
    organ: 'Spleen',
    hematomaCriteria: 'Subcapsular < 10% surface area',
    lacerationCriteria: 'Capsular tear < 1 cm depth',
    vascularLesion: 'None',
    managementGuideline: 'NOM: Bed rest, continuous hemodynamic monitoring.'
  },
  spleen_grade2: {
    grade: 'Grade II',
    organ: 'Spleen',
    hematomaCriteria: 'Subcapsular 10-50% surface area; intraparenchymal < 5 cm',
    lacerationCriteria: 'Laceration 1-3 cm depth not involving trabecular vessels',
    vascularLesion: 'None',
    managementGuideline: 'NOM with close clinical surveillance.'
  },
  spleen_grade3: {
    grade: 'Grade III',
    organ: 'Spleen',
    hematomaCriteria: 'Subcapsular > 50% surface area or expanding; intraparenchymal >= 5 cm',
    lacerationCriteria: 'Laceration > 3 cm depth or involving trabecular vessels',
    vascularLesion: 'Vascular injury (pseudoaneurysm / AVF) identified on CT angiography',
    managementGuideline: 'Prophylactic Proximal Splenic Artery Embolization (PSAE) using vascular plugs or oversized coils (Amplatzer / Concerto) to reduce splenic pulp pressure while preserving immune reticuloendothelial function.'
  },
  spleen_grade4: {
    grade: 'Grade IV',
    organ: 'Spleen',
    hematomaCriteria: 'Ruptured intraparenchymal hematoma with active bleeding',
    lacerationCriteria: 'Laceration involving segmental or hilar vessels producing > 25% devascularization',
    vascularLesion: 'Active intrasplenic contrast blush / extravasation',
    managementGuideline: 'Emergent Splenic Artery Embolization: Combined proximal + distal superselective microcoil embolization. High salvage rate (>90%).'
  },
  spleen_grade5: {
    grade: 'Grade V',
    organ: 'Spleen',
    hematomaCriteria: 'Completely shattered spleen',
    lacerationCriteria: 'Complete splenic disruption and fragmentation',
    vascularLesion: 'Total hilar devascularization / transection with torrential intraperitoneal bleeding',
    managementGuideline: 'Emergency Exploratory Laparotomy and Splenectomy if in uncorrectable hemorrhagic shock; immediate TAE if transient responder.'
  },
  kidney_grade3: {
    grade: 'Grade III',
    organ: 'Kidney',
    hematomaCriteria: 'Perirenal hematoma confined to Gerota fascia',
    lacerationCriteria: 'Renal cortical laceration > 1 cm depth without collecting system rupture (no urine extravasation)',
    vascularLesion: 'Contained segmental pseudoaneurysm',
    managementGuideline: 'NOM + Superselective microcoil embolization if segmental pseudoaneurysm or AV fistula is present.'
  },
  kidney_grade4: {
    grade: 'Grade IV',
    organ: 'Kidney',
    hematomaCriteria: 'Expanding perirenal retroperitoneal hematoma',
    lacerationCriteria: 'Parenchymal laceration extending through corticomedullary junction into renal collecting system (urinary extravasation)',
    vascularLesion: 'Main renal artery/vein thrombosis or segmental branch pseudoaneurysm with active extravasation',
    managementGuideline: 'Superselective Renal Transcatheter Arterial Embolization (TAE) with microcoils/glue + DJ stent / nephrostomy placement for collecting system leak.'
  },
  kidney_grade5: {
    grade: 'Grade V',
    organ: 'Kidney',
    hematomaCriteria: 'Massive retroperitoneal hematoma',
    lacerationCriteria: 'Completely shattered kidney',
    vascularLesion: 'Main renal hilum avulsion or devascularization',
    managementGuideline: 'Emergency main renal artery covered stent / coil embolization or emergent open nephrectomy.'
  }
};

export function evaluateWsesOrganInjury(gradeKey: string) {
  const v = WSES_ORGAN_INJURY_GRADES[gradeKey] ?? WSES_ORGAN_INJURY_GRADES['liver_grade4'];
  return {
    valid: true,
    organ: v.organ,
    grade: v.grade,
    summary: `${v.organ} ${v.grade}: ${v.hematomaCriteria}; ${v.lacerationCriteria}`,
    vascularLesion: v.vascularLesion,
    guideline: v.managementGuideline
  };
}

// ============================================================================
// 10. PORTAL VEIN TUMOR THROMBUS (PVTT) CHENG & VP CLASSIFICATION
// ============================================================================
export interface PvttVpType {
  vpStage: string;
  name: string;
  anatomicExtent: string;
  medianSurvivalWithoutTx: string;
  irTherapyOptions: string;
}

export const PVTT_VP_STAGES: Record<string, PvttVpType> = {
  vp1: {
    vpStage: 'Vp1 (Cheng Type I)',
    name: 'Segmental / Subsegmental Portal Vein Branch Thrombus',
    anatomicExtent: 'Tumor thrombus limited to distal segmental or subsegmental portal vein branches (Couinaud segments).',
    medianSurvivalWithoutTx: '12-18 months',
    irTherapyOptions: 'Superselective conventional TACE / DEB-TACE, microwave/radiofrequency ablation, or stereotactic body radiation therapy (SBRT).'
  },
  vp2: {
    vpStage: 'Vp2 (Cheng Type II)',
    name: 'Second-Order Portal Vein Branch Thrombus (Right or Left PV)',
    anatomicExtent: 'Tumor thrombus extending into either the right main branch or left main branch of the portal vein.',
    medianSurvivalWithoutTx: '6-9 months',
    irTherapyOptions: 'Targeted Y-90 Radioembolization (TARE), superselective TACE + concurrent systemic Atezolizumab-Bevacizumab / Sorafenib.'
  },
  vp3: {
    vpStage: 'Vp3 (Cheng Type III)',
    name: 'First-Order Main Portal Vein Trunk Thrombus',
    anatomicExtent: 'Tumor thrombus invading the main portal vein trunk proximal to the bifurcation.',
    medianSurvivalWithoutTx: '3-4 months',
    irTherapyOptions: 'Y-90 Glass Microspheres (TARE) with radiation lobectomy, Portal Vein Stenting (self-expanding bare/covered stent) + TACE, or Endovascular PVTT I-125 seed strand brachytherapy.'
  },
  vp4: {
    vpStage: 'Vp4 (Cheng Type IV)',
    name: 'Superior Mesenteric Vein (SMV) / IVC Extension',
    anatomicExtent: 'Tumor thrombus extending down into the Superior Mesenteric Vein (SMV) or across hepatic veins into the IVC/Right Atrium.',
    medianSurvivalWithoutTx: '1-2 months',
    irTherapyOptions: 'Palliative Portal / SMV stenting to relieve refractory intestinal ischemia and ascites + systemic targeted immunotherapy (Atezolizumab + Bevacizumab).'
  }
};

export function evaluatePvttVpStage(vpKey: string) {
  const v = PVTT_VP_STAGES[vpKey] ?? PVTT_VP_STAGES['vp3'];
  return {
    valid: true,
    vpStage: v.vpStage,
    summary: `${v.vpStage} (${v.name}): ${v.anatomicExtent}`,
    prognosis: v.medianSurvivalWithoutTx,
    treatment: v.irTherapyOptions
  };
}

// ============================================================================
// 11. GRAVES RENAL ARTERY SEGMENTAL ANATOMY
// ============================================================================
export interface GravesRenalSegment {
  segment: string;
  name: string;
  territory: string;
  endArteryNote: string;
}

export const GRAVES_RENAL_SEGMENTS: Record<string, GravesRenalSegment> = {
  apical: {
    segment: 'Apical (Superior) Segment',
    name: 'Apical Segmental Artery',
    territory: 'Upper pole anterior and medial renal parenchyma.',
    endArteryNote: 'End-artery with zero intra-parenchymal collaterals; superselective embolization yields precise polar infarction with complete preservation of lower poles.'
  },
  upper_anterior: {
    segment: 'Upper Anterior Segment',
    name: 'Upper Anterior Segmental Artery',
    territory: 'Anterosuperior middle third of the renal cortex.',
    endArteryNote: 'Major contributor to central AML/RCC vascularity.'
  },
  middle_anterior: {
    segment: 'Middle Anterior Segment',
    name: 'Middle Anterior Segmental Artery',
    territory: 'Anteroinferior midzone cortex and interpolar region.',
    endArteryNote: 'Often crosses anterior to the renal pelvis; target for selective pseudoaneurysm coiling post-PCNL.'
  },
  inferior: {
    segment: 'Inferior (Lower Pole) Segment',
    name: 'Lower Pole Segmental Artery',
    territory: 'Entire inferior pole anterior and posterior renal cortex.',
    endArteryNote: 'Frequently arises as an accessory renal artery directly from the aorta or common iliac; crossing lower pole vessels may cause PUJ obstruction (Fraley syndrome).'
  },
  posterior: {
    segment: 'Posterior Segment',
    name: 'Posterior Segmental Artery (Retropyelic Artery of Brodel)',
    territory: 'Entire posterior renal parenchyma across the avascular line of Brodel.',
    endArteryNote: 'Sole branch of the posterior division of the main renal artery; key landmark for avascular caliceal puncture in PCNL and targeted embolization of posterior lacerations.'
  }
};

export function evaluateGravesRenalSegment(segmentKey: string) {
  const v = GRAVES_RENAL_SEGMENTS[segmentKey] ?? GRAVES_RENAL_SEGMENTS['posterior'];
  return {
    valid: true,
    segment: v.segment,
    summary: `${v.segment} (${v.name}): ${v.territory}`,
    note: v.endArteryNote
  };
}

// ============================================================================
// 12. LASJAUNIAS CRANIOFACIAL DANGEROUS ANASTOMOSES
// ============================================================================
export interface LasjauniasDangerousConnection {
  pathway: string;
  name: string;
  dangerousConnection: string;
  ischemicRisk: string;
  irSafetyRule: string;
}

export const LASJAUNIAS_CONNECTIONS: Record<string, LasjauniasDangerousConnection> = {
  meningo_ophthalmic: {
    pathway: 'MMA - Ophthalmic Artery',
    name: 'Meningo-Ophthalmic Anastomosis (Orbital Branch of MMA)',
    dangerousConnection: 'Anterior branch of Middle Meningeal Artery communicates with the Ophthalmic Artery via superior orbital fissure or meningolacrimal canal.',
    ischemicRisk: 'Blindness / Central Retinal Artery Occlusion (CRAO) from non-target particulate or liquid embolic embolization.',
    irSafetyRule: 'Perform superselective microcatheter run in lateral and AP projection; if choroidal blush or ophthalmic filling is observed, embolize distal to the orbital branch or use microcoils.'
  },
  petrosal_facial: {
    pathway: 'MMA - Petrosal / Stylomastoid Artery',
    name: 'Petrosal Branch to Facial Nerve (CN VII) Vasorum',
    dangerousConnection: 'Petrosal branch of MMA supplies the geniculate ganglion and communicates with the stylomastoid artery (ECA/Occipital branch).',
    ischemicRisk: 'Permanent Lower Motor Neuron Facial Palsy (Bell-type paralysis).',
    irSafetyRule: 'Avoid liquid adhesives (Onyx/NBCA) proximal to the petrosal branch; keep microcatheter tip distal to the spinosum origin.'
  },
  mandibular_vidian: {
    pathway: 'Internal Maxillary - Petrous / Cavernous ICA',
    name: 'Mandibular / Vidian / Pterygovaginal Anastomoses',
    dangerousConnection: 'Distal internal maxillary artery branches communicate with the inferolateral trunk (ILT) or meningohypophyseal trunk (MHT) of the internal carotid artery.',
    ischemicRisk: 'Major Middle Cerebral Artery (MCA) or Carotid territory embolic stroke.',
    irSafetyRule: 'Use high-pressure roadmapping; ensure microcatheter is wedged strictly past the sphenopalatine/maxillary bifurcation.'
  },
  ascending_pharyngeal_odontoid: {
    pathway: 'Ascending Pharyngeal - Vertebral Artery / Anterior Spinal',
    name: 'Neuromeningeal Trunk & Odontoid Arcade to Vertebrobasilar System',
    dangerousConnection: 'Hypoglossal and jugular branches of ascending pharyngeal artery anastomose with the vertebral artery and supply CN IX, X, XI, XII.',
    ischemicRisk: 'Brainstem / Cerebellar infarction and multiple lower cranial nerve palsies (Collet-Sicard syndrome).',
    irSafetyRule: 'Always perform test injection under roadmapping; never use liquid embolic if radicular or vertebral branches opacify.'
  }
};

export function evaluateLasjauniasConnection(pathwayKey: string) {
  const v = LASJAUNIAS_CONNECTIONS[pathwayKey] ?? LASJAUNIAS_CONNECTIONS['meningo_ophthalmic'];
  return {
    valid: true,
    pathway: v.pathway,
    name: v.name,
    summary: `${v.pathway} (${v.name}): ${v.dangerousConnection}`,
    risk: v.ischemicRisk,
    safetyRule: v.irSafetyRule
  };
}

// ============================================================================
// 13. KDOQI & CIRSE DIALYSIS AV FISTULA STENOSIS & MATURATION
// ============================================================================
export interface DoqiAvfStenosisCriteria {
  parameter: string;
  name: string;
  ruleOf6sCriterion: string;
  angiographicStenosisThreshold: string;
  interventionTrigger: string;
}

export const DOQI_AVF_CRITERIA: Record<string, DoqiAvfStenosisCriteria> = {
  rule_of_6s: {
    parameter: 'Rule of 6s Maturation Protocol',
    name: 'KDOQI AV Fistula Clinical Maturation Benchmark (at 6 Weeks)',
    ruleOf6sCriterion: 'Flow >= 600 mL/min, Diameter >= 6 mm, Depth <= 6 mm from skin surface, Straight segment length >= 6 cm.',
    angiographicStenosisThreshold: 'Access blood flow < 500 mL/min or vein diameter < 4 mm indicates non-maturation.',
    interventionTrigger: 'Fistulogram + Balloon Angioplasty (plain or cutting balloon) / side branch embolization if not mature by 6-8 weeks.'
  },
  juxta_anastomotic: {
    parameter: 'Juxta-Anastomotic Stenosis (Swing Zone)',
    name: 'Juxta-Anastomotic / Mobilization Segment Stenosis',
    ruleOf6sCriterion: 'Most frequent site of primary AVF failure due to surgical mobilization, angulation, and neointimal hyperplasia.',
    angiographicStenosisThreshold: '> 50% lumen reduction with associated thrill loss or high dynamic venous pressure (> 0.5 arterial).',
    interventionTrigger: 'High-pressure balloon angioplasty (Conquest / Dorado 20-30 atm) +/- paclitaxel drug-coated balloon (DCB).'
  },
  cephalic_arch: {
    parameter: 'Cephalic Arch Stenosis (CAS)',
    name: 'Cephalic Arch Near Deltopectoral Groove / Axillary Junction',
    ruleOf6sCriterion: 'Severe turbulent shear stress and valves leading to aggressive fibromuscular hyperplasia.',
    angiographicStenosisThreshold: '> 50% stenosis with elevated dialysis venous pressure or dialysis clearance drop (Kt/V < 1.2).',
    interventionTrigger: 'Ultra-high pressure dilation (up to 30 atm) or Bare/Covered Nitinol Stent-Graft (Viabahn) placement for elastic recoil.'
  },
  central_vein: {
    parameter: 'Central Venous Stenosis (Subclavian / Innominate / SVC)',
    name: 'Thoracic Central Venous Stenosis (Post-Catheterization)',
    ruleOf6sCriterion: 'Secondary to prior temporary/tunneled dialysis catheters, pacemakers, or PICC lines.',
    angiographicStenosisThreshold: '> 50% stenosis with ipsilateral limb edema, breast swelling, and collateral chest wall veins.',
    interventionTrigger: 'Balloon angioplasty; reserve self-expanding covered stent-grafts (Fluency/Viabahn) for refractory elastic recoil or acute rupture.'
  }
};

export function evaluateDoqiAvfStenosis(criterionKey: string) {
  const v = DOQI_AVF_CRITERIA[criterionKey] ?? DOQI_AVF_CRITERIA['rule_of_6s'];
  return {
    valid: true,
    parameter: v.parameter,
    summary: `${v.name}: ${v.ruleOf6sCriterion}`,
    stenosisThreshold: v.angiographicStenosisThreshold,
    intervention: v.interventionTrigger
  };
}

