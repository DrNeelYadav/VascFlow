/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Scapular & Subclavian Arterial Collateral Systems
 * Clinical Assessment Engine for Subclavian Steal Syndrome,
 * Upper Limb Chronic / Acute Limb Ischemia, Thoracic Outlet Syndrome,
 * and Axillary/Brachial Vascular Trauma Embolization.
 */

export interface ScapularPathway {
  id: string;
  name: string;
  proximalInflow: string;
  connectingArcade: string;
  distalReconstitution: string;
  clinicalSignificance: string;
  angiographicSign: string;
}

export const SCAPULAR_SUBCLAVIAN_PATHWAYS: ScapularPathway[] = [
  {
    id: 'periscapular_arcade',
    name: 'Periscapular Anastomotic Circle (Thyrocervical-Subscapular Trunk)',
    proximalInflow: 'Thyrocervical Trunk (Suprascapular Artery & Transverse Cervical / Dorsal Scapular Artery)',
    connectingArcade: 'Supraspinous and infraspinous fossa anastomoses connecting with Circumflex Scapular Artery and Thoracodorsal Artery',
    distalReconstitution: 'Subscapular Artery -> Distal 3rd part Axillary Artery / Brachial Artery',
    clinicalSignificance: 'Provides robust limb-salvage collateral flow in complete 2nd/3rd part Subclavian or proximal Axillary artery occlusion. Allows transcatheter retrograde access to arm vessels.',
    angiographicSign: 'Delayed brisk filling of brachial artery despite complete mid-axillary cutoff on aortic arch flush.'
  },
  {
    id: 'costocervical_intercostal',
    name: 'Costocervical & Supreme Intercostal Collaterals',
    proximalInflow: 'Costocervical Trunk (Deep Cervical & Superior Intercostal Arteries)',
    connectingArcade: 'Posterior intercostal arteries anastomosing with Lateral Thoracic and Supreme Thoracic arteries',
    distalReconstitution: '1st and 2nd parts of Axillary Artery',
    clinicalSignificance: 'Secondary chest wall shunt preserving shoulder girdle and arm perfusion in proximal subclavian stenosis.',
    angiographicSign: 'Tortuous rib-notching collaterals on selective costocervical or thoracic aortogram.'
  },
  {
    id: 'subclavian_steal_vertebrobasilar',
    name: 'Vertebrobasilar Subclavian Steal Pathway',
    proximalInflow: 'Contralateral Vertebral Artery & Basilar Artery (Willis Circle)',
    connectingArcade: 'Retrograde ipsilateral Vertebral Artery flow down into Subclavian Artery distal to occlusion',
    distalReconstitution: 'Ipsilateral Subclavian Artery (distal to vertebral origin) -> Upper Limb',
    clinicalSignificance: 'Reversal of vertebral artery flow causes posterior circulation ischemia (dizziness, ataxia, syncope upon arm exercise). Indication for Subclavian PTA/Stenting.',
    angiographicSign: 'Reversed "bunny rabbit" waveform on Doppler ultrasound; delayed retrograde filling of ipsilateral vertebral on late-phase arch DSA.'
  },
  {
    id: 'internal_mammary_epigastric',
    name: 'Internal Thoracic (LIMA/RIMA) to Superior/Inferior Epigastric System',
    proximalInflow: 'Internal Mammary Artery (IMA) from 1st part Subclavian',
    connectingArcade: 'Superior Epigastric Artery anastomosing in rectus sheath with Inferior Epigastric Artery (from External Iliac)',
    distalReconstitution: 'Retrograde reconstitution of Iliac/Femoral system in aortic coarctation / Leriche syndrome OR ascending flow to upper limb in proximal subclavian occlusion',
    clinicalSignificance: 'Crucial collateral in Leriche syndrome and coarctation. Must never be embolized or harvested for CABG if lower limb relies on this bridge.',
    angiographicSign: 'Giant corkscrew internal mammary and epigastric conduits on trunk angiography.'
  }
];

export interface ScapularEvaluationResult {
  valid: boolean;
  selectedCondition: string;
  dominantPathways: ScapularPathway[];
  stealStage: 'None' | 'Grade I (Latent)' | 'Grade II (Intermittent/Hesitant)' | 'Grade III (Permanent Retrograde)';
  recommendation: string;
  recommendedHardware: string;
}

export function evaluateScapularSubclavianCollaterals(
  occlusionLocation: 'pre_vertebral' | 'post_vertebral' | 'axillary' | 'brachial',
  stealGrade: 'grade0' | 'grade1' | 'grade2' | 'grade3' = 'grade0'
): ScapularEvaluationResult {
  let dominantPathways: ScapularPathway[] = [];
  let stealStageText: ScapularEvaluationResult['stealStage'] = 'None';

  if (occlusionLocation === 'pre_vertebral') {
    dominantPathways.push(SCAPULAR_SUBCLAVIAN_PATHWAYS[2]); // Vertebrobasilar steal
    dominantPathways.push(SCAPULAR_SUBCLAVIAN_PATHWAYS[0]); // Periscapular
    dominantPathways.push(SCAPULAR_SUBCLAVIAN_PATHWAYS[1]); // Costocervical
    if (stealGrade === 'grade1') stealStageText = 'Grade I (Latent)';
    else if (stealGrade === 'grade2') stealStageText = 'Grade II (Intermittent/Hesitant)';
    else if (stealGrade === 'grade3') stealStageText = 'Grade III (Permanent Retrograde)';
  } else if (occlusionLocation === 'post_vertebral' || occlusionLocation === 'axillary') {
    dominantPathways.push(SCAPULAR_SUBCLAVIAN_PATHWAYS[0]); // Periscapular
    dominantPathways.push(SCAPULAR_SUBCLAVIAN_PATHWAYS[1]); // Costocervical
  } else {
    dominantPathways.push(SCAPULAR_SUBCLAVIAN_PATHWAYS[0]);
  }

  let recommendation = '';
  if (occlusionLocation === 'pre_vertebral') {
    recommendation = `Subclavian Steal (${stealStageText}): Pre-vertebral ostial subclavian lesion. Indication for Endovascular Angioplasty and Balloon-Expandable Stenting (preferred over self-expanding for accurate ostial placement at aortic border). Protect vertebral origin to avoid distal plaque shift.`;
  } else if (occlusionLocation === 'axillary') {
    recommendation = 'Axillary Artery Obstruction: Periscapular collateral arcade active. For trauma/pseudoaneurysm, covered stent (e.g. Gore Viabahn 6-8mm) or coil embolization beyond circumflex scapular branch.';
  } else {
    recommendation = 'Distal Arm Ischemia: Evaluate brachial bifurcation and radial/ulnar runoff. Consider trans-brachial or trans-radial micro-angioplasty or pulse-spray thrombolysis.';
  }

  return {
    valid: true,
    selectedCondition: occlusionLocation,
    dominantPathways,
    stealStage: stealStageText,
    recommendation,
    recommendedHardware: '6F/7F Trans-femoral or trans-radial sheath + 5F Headhunter / Simmons-1 / Berenstein diagnostic catheter -> 0.035" Stiff Glidewire or Amplatz Super Stiff -> 6-8mm x 20-30mm Balloon-Expandable Stent (e.g., Express SD, Omnilink, or Bentley Begraft).'
  };
}
