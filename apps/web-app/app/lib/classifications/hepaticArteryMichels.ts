/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Michels & Hiatt Classification of Hepatic Arterial Anatomy
 * Clinical Decision Engine for TACE, Y90 TARE, Hepatic Aneurysm Embolization,
 * Portal Vein Embolization (PVE), and Post-Liver Transplant Angiography.
 */

export interface HepaticVariant {
  michels: string;
  hiatt: string;
  name: string;
  frequency: string;
  description: string;
  originDetails: string;
  irConsiderations: string[];
  nonTargetRisk: string;
  recommendedHardware: string;
}

export const MICHELS_HIATT_VARIANTS: Record<string, HepaticVariant> = {
  type1: {
    michels: 'Type I',
    hiatt: 'Type I',
    name: 'Classic / Standard Anatomy',
    frequency: '55 - 75%',
    description: 'Celiac trunk -> Common Hepatic Artery (CHA) -> Proper Hepatic Artery (PHA) -> Right Hepatic Artery (RHA) & Left Hepatic Artery (LHA).',
    originDetails: 'CHA originates normally from Celiac Trunk; GDA bifurcates normally to give PHA.',
    irConsiderations: [
      'Standard anatomical landmark for hepatic interventions.',
      'Identify cystic artery (originates from RHA in 75-80%) to avoid non-target gallbladder embolization during right lobe TACE.',
      'Identify right gastric artery (usually from PHA or LHA) and supraduodenal artery before therapeutic embolization.'
    ],
    nonTargetRisk: 'Low anatomical variation risk; check cystic and right gastric artery origins.',
    recommendedHardware: '5F C2 (Cobra 2) or Simmons-1 (SIM1) catheter + 2.0-2.4F microcatheter (Progreat / Renegade).'
  },
  type2: {
    michels: 'Type II',
    hiatt: 'Type II',
    name: 'Replaced Left Hepatic Artery (rLHA) from Left Gastric Artery (LGA)',
    frequency: '8 - 10%',
    description: 'Left hepatic artery is absent from PHA and arises completely from Left Gastric Artery (LGA), running in the gastrohepatic ligament (pars flaccida).',
    originDetails: 'LGA branches directly into the left hepatic lobe (Segments II, III, IV) in addition to gastric branches.',
    irConsiderations: [
      'Crucial during Left Lobe TACE/TARE: Left lobe tumor supply is via LGA, not Proper Hepatic Artery.',
      'Must selectively cannulate LGA with high microcatheter advancement past esophageal and gastric branches to avoid gastric mucosal ulceration/necrosis.',
      'High risk of inadvertent ligation or transection during gastric or esophageal surgery.'
    ],
    nonTargetRisk: 'High risk of gastric ulceration and severe mucosal necrosis if embolized proximal in LGA.',
    recommendedHardware: '5F Left Gastric (LGA) catheter or Simmons-1 (SIM1) + 1.9-2.0F superselective microcatheter with micro-guide wire (0.014" or 0.016").'
  },
  type3: {
    michels: 'Type III',
    hiatt: 'Type III',
    name: 'Replaced Right Hepatic Artery (rRHA) from Superior Mesenteric Artery (SMA)',
    frequency: '10 - 12%',
    description: 'Right hepatic artery is absent from PHA and arises directly from SMA, ascending along the posterolateral aspect of the Portal Vein in the hepatoduodenal ligament.',
    originDetails: 'rRHA originates from proximal SMA (usually within 2-4 cm from SMA ostium).',
    irConsiderations: [
      'Most frequent significant vascular variation encountered in IR.',
      'Right lobe TACE/TARE requires SMA cannulation rather than Celiac Trunk.',
      'Course is posterior to head of pancreas and portal vein; critical to preserve during Whipple resection or pancreatic embolization.',
      'Look for cystic artery branching directly from the replaced RHA.'
    ],
    nonTargetRisk: 'SMA branch ischemia if subselective microcatheterization is not achieved past jejunal/pancreatic branches.',
    recommendedHardware: '5F Cobra-2 (C2), SOS-Omni, or Simmons-1 (SIM1) engaged in SMA + 2.0-2.4F microcatheter into rRHA.'
  },
  type4: {
    michels: 'Type IV',
    hiatt: 'Type IV',
    name: 'Replaced Left Hepatic Artery (from LGA) AND Replaced Right Hepatic Artery (from SMA)',
    frequency: '1 - 2%',
    description: 'Both RHA and LHA are completely replaced. PHA is absent.',
    originDetails: 'RHA arises from SMA; LHA arises from LGA; Celiac axis gives CHA that terminates only in GDA and Right Gastric.',
    irConsiderations: [
      'Dual vascular access required: SMA catheterization for right lobe lesions and LGA catheterization for left lobe lesions.',
      'Very little to no parenchyma supplied by the native Celiac PHA.',
      'High surgical and interventional significance during liver transplantation and TACE.'
    ],
    nonTargetRisk: 'Dual-source embolization required; verify no residual tumor feeder from contralateral replaced artery.',
    recommendedHardware: 'SIM1 / C2 for SMA access; LGA / Shepherd Hook catheter for LGA access.'
  },
  type5: {
    michels: 'Type V',
    hiatt: 'Type II (Accessory)',
    name: 'Accessory Left Hepatic Artery (aLHA) from Left Gastric Artery (LGA)',
    frequency: '7 - 10%',
    description: 'Standard LHA exists from PHA, PLUS an additional accessory LHA arises from the Left Gastric Artery.',
    originDetails: 'Segment II/III often receives dual or exclusive contribution from the accessory LGA branch.',
    irConsiderations: [
      'Tumor in segment II/III may persist after classic TACE if accessory LHA from LGA is missed.',
      'If tumor vascularity is incomplete on Celiac DSA, perform LGA angiogram to interrogate accessory LHA.'
    ],
    nonTargetRisk: 'Incomplete tumor necrosis if accessory vessel is omitted during TACE/TARE.',
    recommendedHardware: 'Check both Celiac and LGA with 5F SIM1 or C2.'
  },
  type6: {
    michels: 'Type VI',
    hiatt: 'Type III (Accessory)',
    name: 'Accessory Right Hepatic Artery (aRHA) from Superior Mesenteric Artery (SMA)',
    frequency: '4 - 7%',
    description: 'Standard RHA exists from PHA, PLUS an additional accessory RHA arises from the proximal SMA.',
    originDetails: 'Posterior right hepatic segments (VI, VII) often supplied by this accessory vessel.',
    irConsiderations: [
      'Residual tumor blush in segment VI/VII after proper hepatic TACE warrants immediate SMA interrogation.',
      'Accessory RHA may also give origin to the cystic artery.'
    ],
    nonTargetRisk: 'Under-treatment / incomplete tumor necrosis if secondary SMA supply is overlooked.',
    recommendedHardware: '5F C2 or SIM1 engaged in SMA.'
  },
  type7: {
    michels: 'Type VII',
    hiatt: 'Type IV (Accessory)',
    name: 'Accessory LHA (from LGA) AND Accessory RHA (from SMA)',
    frequency: '1 - 2%',
    description: 'Normal PHA branches exist, accompanied by both accessory LHA (from LGA) and accessory RHA (from SMA).',
    originDetails: 'Triple arterial supply to the liver (PHA + LGA + SMA).',
    irConsiderations: [
      'Comprehensive triple-vessel angiogram mandatory before declaring complete embolization in multifocal HCC.'
    ],
    nonTargetRisk: 'Complex collateralization with high potential for non-target gastric or jejunal particle reflux.',
    recommendedHardware: 'Microcatheter superselection with coil/particle protection.'
  },
  type8: {
    michels: 'Type VIII',
    hiatt: 'Type IV (Combined)',
    name: 'Combined Replaced & Accessory (rRHA + aLHA or rLHA + aRHA)',
    frequency: '< 2%',
    description: 'One hepatic lobe has a completely replaced artery while the contralateral lobe has both native and accessory vessels.',
    originDetails: 'e.g., Replaced RHA from SMA with Accessory LHA from LGA, or vice versa.',
    irConsiderations: [
      'Perform complete anatomical mapping of Celiac, SMA, and LGA prior to any lobar or segmentectomy embolization.'
    ],
    nonTargetRisk: 'High anatomical complexity.',
    recommendedHardware: 'Dedicated diagnostic DSA mapping.'
  },
  type9: {
    michels: 'Type IX',
    hiatt: 'Type V',
    name: 'Entire Common Hepatic Artery (CHA) Arising from SMA (Hepatomesenteric Trunk)',
    frequency: '2 - 4.5%',
    description: 'The complete Common Hepatic Artery arises as a major branch of the SMA; celiac axis gives only Splenic and Left Gastric arteries.',
    originDetails: 'Hepatomesenteric trunk or direct CHA origin from SMA. PHA and GDA all branch from this SMA-derived trunk.',
    irConsiderations: [
      'All hepatic and gastroduodenal interventions are performed exclusively via SMA cannulation.',
      'Celiac angiogram will demonstrate complete absence of CHA (Splenogastric trunk).',
      'Watch out for GDA origin and ensure microcatheter is advanced into PHA beyond GDA before TACE.'
    ],
    nonTargetRisk: 'High risk of acute duodenal/pancreatic ulceration if embolized proximal to GDA takeoff in the hepatomesenteric trunk.',
    recommendedHardware: '5F SOS-Omni, Simmons-1 (SIM1), or Cobra-2 (C2) catheter in SMA.'
  },
  type10: {
    michels: 'Type X',
    hiatt: 'Type VI (Other)',
    name: 'Entire Common Hepatic Artery (CHA) Arising from Left Gastric Artery (LGA)',
    frequency: '< 0.5%',
    description: 'Entire hepatic arterial supply arises from Left Gastric Artery (Gastrosplenic / Gastrohepatic trunk variations).',
    originDetails: 'LGA gives origin to CHA, which courses across the lesser omentum to the porta hepatis.',
    irConsiderations: [
      'Very rare variant. Large calibre LGA supplies entire liver and stomach.',
      'Extreme care needed to avoid large-volume gastric necrosis during hepatic embolization.'
    ],
    nonTargetRisk: 'Catastrophic gastric ischemia if proximal LGA is occluded.',
    recommendedHardware: 'SIM1 / LGA catheter with distal microcatheter placement beyond gastric branches.'
  }
};

export interface HepaticClassificationResult {
  valid: boolean;
  selectedKey: string;
  variant: HepaticVariant;
  summaryText: string;
  alerts: string[];
}

export function evaluateHepaticClassification(variantKey: string): HepaticClassificationResult {
  const variant = MICHELS_HIATT_VARIANTS[variantKey] ?? MICHELS_HIATT_VARIANTS['type1'];
  
  const alerts: string[] = [
    `Classification: Michels ${variant.michels} / Hiatt ${variant.hiatt} (Frequency: ${variant.frequency})`,
    `Anatomy: ${variant.description}`,
    `Non-Target Risk: ${variant.nonTargetRisk}`,
    `Recommended Hardware: ${variant.recommendedHardware}`
  ];

  return {
    valid: true,
    selectedKey: variantKey,
    variant,
    summaryText: `Michels ${variant.michels} (${variant.name}) - ${variant.description}`,
    alerts
  };
}
