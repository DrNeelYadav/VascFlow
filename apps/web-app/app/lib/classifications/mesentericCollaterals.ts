/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Mesenteric & SMA Collateral Systems Classification
 * (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler, Barkow's Arc)
 * Clinical Guidance for Acute/Chronic Mesenteric Ischemia (CMI/AMI),
 * Lower/Upper GI Bleeding Embolization, and SMA/IMA Revascularization.
 */

export interface MesentericCollateral {
  id: string;
  name: string;
  connectingVessels: string;
  embryologicOrigin: string;
  flowDirection: string;
  clinicalSignificance: string;
  embolizationAlert: string;
}

export const MESENTERIC_COLLATERALS: Record<string, MesentericCollateral> = {
  arc_of_riolan: {
    id: 'arc_of_riolan',
    name: 'Arc of Riolan (Meandering Mesenteric Artery / Central Anastomosis)',
    connectingVessels: 'Middle Colic Artery (from SMA) -> Left Colic Artery ascending branch (from IMA)',
    embryologicOrigin: 'Central retroperitoneal anastomosis located close to the root of the mesentery, distinct from marginal artery.',
    flowDirection: 'Bidirectional (SMA to IMA in IMA occlusion; or IMA to SMA in Celiac/SMA chronic occlusion).',
    clinicalSignificance: 'Crucial lifeline maintaining gut viability in chronic SMA occlusion or aortic aneurysms requiring sacrifice of IMA during EVAR. If Arc of Riolan is hyper-dilated, SMA is severely stenosed/occluded.',
    embolizationAlert: 'NEVER embolize or occlude a hypertrophied Arc of Riolan during EVAR or colonic bleed embolization; doing so will cause catastrophic total midgut and colonic necrosis!'
  },
  marginal_artery_drummond: {
    id: 'marginal_artery_drummond',
    name: 'Marginal Artery of Drummond (Continuous Peripheral Arcade)',
    connectingVessels: 'Ileocolic, Right Colic, Middle Colic (SMA) -> Left Colic, Sigmoidal Arteries (IMA)',
    embryologicOrigin: 'Continuous peripheral vessel coursing 1-2 cm from the mesenteric border of the entire large intestine.',
    flowDirection: 'Continuous peripheral ring; terminates at the Rectosigmoid junction (Critical Point of Sudeck).',
    clinicalSignificance: 'Ensures segment-to-segment bowel perfusion. Vulnerable at Griffiths point (splenic flexure) where Drummond arcade is thin or absent in up to 5% of individuals.',
    embolizationAlert: 'For lower GI diverticular bleeding: Microcatheter must be advanced into the final vasa recta (straight terminal arteriole) right at the bowel wall. Never embolize the main marginal artery trunk.'
  },
  arc_of_buhler: {
    id: 'arc_of_buhler',
    name: 'Arc of Bühler (Persistent Celiac-SMA Ventral Longitudinal Anastomosis)',
    connectingVessels: 'Celiac Axis trunk -> Superior Mesenteric Artery (SMA) main stem directly',
    embryologicOrigin: 'Persistent embryologic ventral longitudinal anastomosis of Tandler that fails to regress.',
    flowDirection: 'Direct vertical shunt between Celiac and SMA independent of GDA and Pancreaticoduodenal arcades.',
    clinicalSignificance: 'Present in 1-4% of the population. Serves as direct high-flow bypass during Median Arcuate Ligament Syndrome (MALS) or Celiac axis occlusion.',
    embolizationAlert: 'Frequently develops high-flow pseudoaneurysms due to shear stress in celiac stenosis. Direct coil embolization with prior celiac stent or median arcuate release.'
  },
  barkow_arc: {
    id: 'barkow_arc',
    name: 'Arc of Barkow (Great Omental Epiploic Arcade)',
    connectingVessels: 'Right Gastroepiploic Artery (from GDA) -> Left Gastroepiploic Artery (from Splenic Artery)',
    embryologicOrigin: 'Omental retro-colic vascular arcade located within the posterior layers of the greater omentum.',
    flowDirection: 'GDA to Splenic or Splenic to GDA.',
    clinicalSignificance: 'Provides collateral perfusion to spleen in proximal splenic artery occlusion, and to stomach during GDA embolization.',
    embolizationAlert: 'Account for this pathway during proximal splenic artery embolization for trauma vs. distal splenic infarct.'
  },
  pancreaticoduodenal_arcade: {
    id: 'pancreaticoduodenal_arcade',
    name: 'Pancreaticoduodenal Arcades (Anterior & Posterior Superior/Inferior Arcades)',
    connectingVessels: 'GDA (from CHA/Celiac) -> Inferior Pancreaticoduodenal Artery (IPDA from SMA)',
    embryologicOrigin: 'Peripancreatic head vascular ring supplying duodenal C-loop and uncinate process.',
    flowDirection: 'SMA to Celiac in Celiac occlusion; Celiac to SMA in SMA ostial stenosis.',
    clinicalSignificance: 'High shear stress causes true aneurysm formation of pancreaticoduodenal arteries in median arcuate ligament syndrome.',
    embolizationAlert: 'During GDA coiling for duodenal ulcer bleed: Must "sandwich" or "front-and-back door" coil GDA both distal and proximal to ulcer branch to prevent retrograde bleeding via IPDA.'
  }
};

export interface MesentericEvaluationResult {
  valid: boolean;
  selectedCollateralKey: string;
  collateral: MesentericCollateral;
  clinicalStrategy: string;
  recommendedHardware: string;
}

export function evaluateMesentericCollateral(collateralKey: string): MesentericEvaluationResult {
  const collateral = MESENTERIC_COLLATERALS[collateralKey] ?? MESENTERIC_COLLATERALS['arc_of_riolan'];

  let clinicalStrategy = '';
  if (collateral.id === 'arc_of_riolan') {
    clinicalStrategy = 'Arc of Riolan detected: Indicates chronic high-grade SMA or Celiac obstruction. Revascularize SMA ostium with Balloon-Expandable Covered/Bare Metal Stent. Maintain IMA patency.';
  } else if (collateral.id === 'marginal_artery_drummond') {
    clinicalStrategy = 'Marginal Artery of Drummond: For LGIB, perform superselective microcatheter cannulation of bleeding vasa recta. Deploy microcoils or 300-500um PVA particles. Avoid proximal arcade trunk sacrifice.';
  } else if (collateral.id === 'arc_of_buhler') {
    clinicalStrategy = 'Arc of Bühler: Evaluate for Celiac Trunk stenosis / Median Arcuate Ligament compression. If aneurysm present, coil with packing density >24% or stent celiac trunk.';
  } else if (collateral.id === 'pancreaticoduodenal_arcade') {
    clinicalStrategy = 'Pancreaticoduodenal Artery: Essential "sandwich" isolation required when embolizing GDA to prevent back-bleeding from SMA/IPDA.';
  } else {
    clinicalStrategy = 'Arc of Barkow: Omental collateral protecting gastric and splenic perfusion.';
  }

  return {
    valid: true,
    selectedCollateralKey: collateralKey,
    collateral,
    clinicalStrategy,
    recommendedHardware: '5F SOS-Omni, C2, or SIM1 catheter for SMA/IMA selection -> 1.9-2.4F low-profile microcatheter (e.g., Terumo Progreat, Asahi Masters, Boston Scientific Renegade HI-FLO) + 0.014" microguidewire.'
  };
}
