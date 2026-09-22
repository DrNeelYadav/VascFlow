/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Stanford & DeBakey Aortic Dissection Classification Engine
 * Clinical Triage, TEVAR Endovascular Repair Suitability & PETTICOAT Technique.
 */

export interface AorticDissectionClassification {
  stanford: 'Type A' | 'Type B' | 'Non-A Non-B';
  debakey: 'Type I' | 'Type II' | 'Type IIIa' | 'Type IIIb';
  name: string;
  entryTearLocation: string;
  extent: string;
  irEligibility: 'Emergent Open Cardiac Surgery' | 'TEVAR Candidate (Complicated)' | 'Medical / TEVAR Option';
  complicatingFeatures: string[];
  tevarLandingZone: string;
}

export const DISSECTION_TYPES: Record<string, AorticDissectionClassification> = {
  stanford_b_complicated: {
    stanford: 'Type B',
    debakey: 'Type IIIb',
    name: 'Complicated Acute Type B Aortic Dissection (TBAD)',
    entryTearLocation: 'Distal to Left Subclavian Artery (LSA) ostium (Zone 2/3)',
    extent: 'Extends down descending thoracic aorta into abdominal aorta and iliac vessels',
    irEligibility: 'TEVAR Candidate (Complicated)',
    complicatingFeatures: [
      'Malperfusion syndrome (visceral, renal, or lower extremity ischemia)',
      'Refractory pain despite maximum medical therapy',
      'Refractory hypertension requiring >= 3 IV antihypertensives',
      'Rapid aortic expansion (> 10 mm/year or total diameter > 45-50 mm)',
      'Impending rupture / hemothorax / periaortic hematoma'
    ],
    tevarLandingZone: 'Proximal Landing Zone 2 (LSA revascularization / chimney / castelli) or Zone 3 (distal to LSA). Maintain minimum 20 mm healthy seal zone.'
  },
  stanford_b_uncomplicated: {
    stanford: 'Type B',
    debakey: 'Type IIIa',
    name: 'Uncomplicated Acute / Subacute Type B Aortic Dissection',
    entryTearLocation: 'Distal to Left Subclavian Artery (Zone 3)',
    extent: 'Confined to descending thoracic aorta above celiac axis (IIIa) or stable distal extension (IIIb)',
    irEligibility: 'Medical / TEVAR Option',
    complicatingFeatures: [
      'Optimal Medical Therapy (OMT): Strict HR < 60 bpm and SBP < 120 mmHg (IV Esmolol/Labetalol).',
      'Subacute elective TEVAR in subacute window (14-90 days) promotes positive aortic remodeling and prevents chronic aneurysmal degeneration (INSTEAD-XL trial).'
    ],
    tevarLandingZone: 'Zone 3 or Zone 2 with 20mm seal.'
  },
  stanford_a_debakey1: {
    stanford: 'Type A',
    debakey: 'Type I',
    name: 'DeBakey I / Stanford A (Ascending + Arch + Descending)',
    entryTearLocation: 'Ascending Aorta proximal to Innominate (Brachiocephalic) Artery',
    extent: 'Ascending aorta, aortic arch, and descending aorta',
    irEligibility: 'Emergent Open Cardiac Surgery',
    complicatingFeatures: [
      'Immediate risk of pericardial tamponade, acute aortic regurgitation, coronary ostial dissection, or fatal rupture.',
      'Emergency open surgical hemiarch/total arch replacement with Frozen Elephant Trunk (FET).'
    ],
    tevarLandingZone: 'Open cardiac surgery indicated. Hybrid TEVAR reserved for secondary stage into Frozen Elephant Trunk.'
  },
  stanford_a_debakey2: {
    stanford: 'Type A',
    debakey: 'Type II',
    name: 'DeBakey II / Stanford A (Ascending Aorta Only)',
    entryTearLocation: 'Ascending Aorta strictly proximal to Innominate Artery',
    extent: 'Confined to ascending aorta',
    irEligibility: 'Emergent Open Cardiac Surgery',
    complicatingFeatures: [
      'High risk of aortic valve incompetence and coronary occlusion.',
      'Emergency Open Dacron graft replacement of ascending aorta.'
    ],
    tevarLandingZone: 'Open surgery only.'
  }
};

export interface DissectionEvaluationResult {
  valid: boolean;
  selectedKey: string;
  dissection: AorticDissectionClassification;
  isComplicated: boolean;
  recommendation: string;
  recommendedHardware: string;
}

export function evaluateAorticDissection(
  dissectionKey: string,
  hasMalperfusion: boolean = false,
  hasRefractoryPain: boolean = false
): DissectionEvaluationResult {
  const dissection = DISSECTION_TYPES[dissectionKey] ?? DISSECTION_TYPES['stanford_b_complicated'];
  const isComplicated = hasMalperfusion || hasRefractoryPain || dissection.stanford === 'Type B';

  let recommendation = '';
  if (dissection.stanford === 'Type A') {
    recommendation = 'Stanford Type A / DeBakey I-II: SURGICAL EMERGENCY. Immediate cardiothoracic surgical consult for ascending aortic replacement/FET. High mortality under conservative management.';
  } else {
    recommendation = `Stanford Type B / DeBakey III: ${hasMalperfusion ? 'COMPLICATED by Malperfusion - Emergent TEVAR indicated to cover primary entry tear and depressurize false lumen.' : 'Initial strict anti-impulse medical therapy (Beta-blockers to keep HR<60, SBP<120). Monitor for malperfusion; consider subacute TEVAR for aortic remodeling.'}`;
  }

  return {
    valid: true,
    selectedKey: dissectionKey,
    dissection,
    isComplicated,
    recommendation,
    recommendedHardware: 'Large-bore access (18-24F) via femoral artery (Preclose technique with 2x ProGlide) -> Stiff 0.035" Lunderquist / Backup Meier wire in True Lumen -> Thoracic Stent Graft (e.g. Gore TAG / Cook Zenith Alpha / Medtronic Valiant Navion) with 10-15% oversizing (avoid aggressive oversizing to prevent retrograde Type A dissection) +/- PETTICOAT bare distal stent extension.'
  };
}
