/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Middle Meningeal Artery (MMA) Branching & Dangerous Anastomoses Engine
 * Clinical Guidance for Chronic Subdural Hematoma (CSDH) Embolization,
 * Meningioma Embolization, and Dural Arteriovenous Fistula (dAVF).
 */

export interface MmaDangerousAnastomosis {
  id: string;
  name: string;
  branchOrigin: string;
  targetVessel: string;
  complicationRisk: string;
  preventionTechnique: string;
  severity: 'critical' | 'warning';
}

export const MMA_DANGEROUS_ANASTOMOSES: MmaDangerousAnastomosis[] = [
  {
    id: 'meningo_ophthalmic',
    name: 'Meningo-Ophthalmic Artery (Anterior MMA to Ophthalmic Artery)',
    branchOrigin: 'Anterior (Frontal) Branch of MMA near Superior Orbital Fissure (SOF) / Sphenoid Ridge',
    targetVessel: 'Ophthalmic Artery -> Central Retinal Artery (CRA)',
    complicationRisk: 'Monocular Irreversible Blindness / CRAO (Central Retinal Artery Occlusion)',
    preventionTechnique: 'Obtain dedicated high-resolution lateral/oblique magnified DSA with prolonged injection. Ensure microcatheter tip is navigated distal to the orbital branch takeoff before particle (PVA 150-250um) or liquid embolic (Onyx/PHIL/Squid) administration. Never embolize if choroidal crescent blush is visible!',
    severity: 'critical'
  },
  {
    id: 'petrosal_facial_nerve',
    name: 'Petrosal Branch / Stylomastoid Anastomosis',
    branchOrigin: 'Main MMA stem or posterior branch passing near Fallopian canal and Geniculate Ganglion',
    targetVessel: 'Petrosal branch of Middle Meningeal Artery -> Stylomastoid Artery',
    complicationRisk: 'Iatrogenic Lower Motor Neuron Facial Nerve (CN VII) Palsy / Hemifacial Paralysis',
    preventionTechnique: 'Advance microcatheter distally into the convexity dural convex arcades beyond the petrous apex. Keep particle sizes >= 150-250 um. If patient reports intense retroauricular or temporal pain during trial injection, stop immediately.',
    severity: 'critical'
  },
  {
    id: 'cavernous_ica',
    name: 'Mandibulovidian / Cavernous ICA Anastomosis',
    branchOrigin: 'Proximal MMA trunk near Foramen Spinosum',
    targetVessel: 'Inferolateral Trunk (ILT) / Meningohypophyseal Trunk (MHT) of Internal Carotid Artery',
    complicationRisk: 'Major Ischemic Stroke / Middle Cerebral Artery Embolism / Cranial Nerve III, IV, VI Palsy',
    preventionTechnique: 'Perform microcatheter injection with hand syringe under high-frame-rate DSA. Ensure no reflux into ICA siphon. Embolize with wedged microcatheter or distal flow control.',
    severity: 'critical'
  },
  {
    id: 'occipital_transosseous',
    name: 'Transosseous Squamosal Collaterals to Occipital Artery',
    branchOrigin: 'Posterior (Parietal) Branch of MMA',
    targetVessel: 'Transosseous branches of Occipital Artery / Posterior Auricular Artery',
    complicationRisk: 'Scalp Necrosis / Occipital Hair Loss or Ineffective Embolization',
    preventionTechnique: 'Benign extracranial communication; adjust microcatheter position distal to calvarial penetrators.',
    severity: 'warning'
  }
];

export interface MmaEvaluationResult {
  valid: boolean;
  selectedBranch: 'anterior' | 'posterior' | 'both' | 'proximal';
  targetDisease: string;
  identifiedRisks: MmaDangerousAnastomosis[];
  recommendation: string;
  recommendedHardware: string;
}

export function evaluateMmaAnatomy(
  selectedBranch: 'anterior' | 'posterior' | 'both' | 'proximal',
  targetDisease: 'csdh' | 'meningioma' | 'davf' = 'csdh'
): MmaEvaluationResult {
  let identifiedRisks: MmaDangerousAnastomosis[] = [];

  if (selectedBranch === 'anterior' || selectedBranch === 'both' || selectedBranch === 'proximal') {
    identifiedRisks.push(MMA_DANGEROUS_ANASTOMOSES[0]); // meningo-ophthalmic
  }
  if (selectedBranch === 'posterior' || selectedBranch === 'both' || selectedBranch === 'proximal') {
    identifiedRisks.push(MMA_DANGEROUS_ANASTOMOSES[1]); // petrosal facial
    identifiedRisks.push(MMA_DANGEROUS_ANASTOMOSES[3]); // occipital
  }
  if (selectedBranch === 'proximal') {
    identifiedRisks.push(MMA_DANGEROUS_ANASTOMOSES[2]); // cavernous ica
  }

  let recommendation = '';
  if (targetDisease === 'csdh') {
    recommendation = 'For CSDH: Selective catheterization of BOTH Anterior and Posterior convexity branches. Use PVA particles (150-250 um or 250-355 um) or liquid embolic (Onyx-18 / PHIL 25%) until complete stasis of the neocapillary membrane ("cotton-wool" blush). Preserve proximal MMA trunk.';
  } else if (targetDisease === 'meningioma') {
    recommendation = 'For Pre-op Meningioma: Subselective tumor feeder penetration using 150-250 um PVA particles or Squid-12 for tumor devascularization. Avoid proximal coil embolization to prevent collateral recruiting.';
  } else {
    recommendation = 'For dAVF: Navigate microcatheter as close as possible to the venous fistulous pouch. Onyx/PHIL transarterial penetration across the shunt nidus into the recipient dural sinus.';
  }

  return {
    valid: true,
    selectedBranch,
    targetDisease,
    identifiedRisks,
    recommendation,
    recommendedHardware: '5F/6F Envoy / Guider Softip or Neuron MAX guiding catheter in External Carotid Artery (ECA) -> 1.5F-1.7F Headway Duo, Marathon, Apollo, or Echelon microcatheter + 0.010" / 0.014" Synchro / Traxcess microguidewire.'
  };
}
