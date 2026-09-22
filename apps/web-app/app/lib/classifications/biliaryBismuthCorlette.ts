/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Bismuth-Corlette Classification of Malignant Biliary Strictures
 * Clinical Triage & Technical Strategy for Percutaneous Transhepatic Biliary Drainage (PTBD)
 * and Metallic Biliary Stenting (SEMS - Unilateral vs. Bilateral Y/T-stenting).
 */

export interface BismuthCorletteType {
  type: string;
  name: string;
  anatomicLevel: string;
  drainageStrategy: string;
  stentingTechnique: string;
  irComplexity: 'Standard' | 'Intermediate' | 'High' | 'Very High';
  approachAccess: string;
}

export const BISMUTH_TYPES: Record<string, BismuthCorletteType> = {
  type1: {
    type: 'Type I',
    name: 'Distal Common Hepatic Duct Stricture',
    anatomicLevel: 'Stricture involves the Common Hepatic Duct (CHD) >= 2 cm below the primary biliary confluence.',
    drainageStrategy: 'Single right or left percutaneous transhepatic access. Crossing the stricture into duodenum is generally straightforward.',
    stentingTechnique: 'Single self-expanding metallic stent (SEMS, 8-10mm x 60-80mm) deployed across stricture with distal end in duodenum and proximal end in CHD below confluence.',
    irComplexity: 'Standard',
    approachAccess: 'Right lateral segment (Segment VI/VII) or Left lateral (Segment III) duct access.'
  },
  type2: {
    type: 'Type II',
    name: 'Primary Confluence Stricture',
    anatomicLevel: 'Stricture reaches the primary confluence of Right and Left Hepatic Ducts, but does not involve secondary intrahepatic biliary bifurcations.',
    drainageStrategy: 'Unilateral drainage (Right or Left) is frequently sufficient if draining liver lobe >= 50% liver volume and non-atrophic. Bilateral drainage if cholangitis in contralateral lobe.',
    stentingTechnique: 'Single stent across confluence, or Side-by-Side (SBS) dual stents if both lobes require drainage.',
    irComplexity: 'Intermediate',
    approachAccess: 'Right intercostal fluoroscopy-guided access or Left subxiphoid ultrasound-guided access.'
  },
  type3a: {
    type: 'Type IIIa',
    name: 'Confluence Stricture with Right Secondary Ducts Involvement',
    anatomicLevel: 'Involves main confluence and extends into Right Anterior (Sec. V/VIII) and Right Posterior (Sec. VI/VII) sectoral bile duct bifurcation. Left duct confluence patent.',
    drainageStrategy: 'Left duct PTBD usually provides easiest and most effective drainage of >50% functional liver. If right lobe infected or left atrophic, dual right sectoral punctures (Ant + Post) required.',
    stentingTechnique: 'Left-sided SEMS to duodenum, +/- Right anterior and posterior stent extensions ("Y" or "T" configuration).',
    irComplexity: 'High',
    approachAccess: 'Left duct (Seg III) preferred for single access; Right Ant (Seg VIII) & Right Post (Seg VI) if right-sided clearance needed.'
  },
  type3b: {
    type: 'Type IIIb',
    name: 'Confluence Stricture with Left Secondary Ducts Involvement',
    anatomicLevel: 'Involves main confluence and extends into Left Medial (Sec. IV) and Left Lateral (Sec. II/III) sectoral ducts. Right duct confluence patent.',
    drainageStrategy: 'Right duct PTBD provides single access drainage of the entire right hemiliver (approx. 60-70% total liver volume).',
    stentingTechnique: 'Right hepatic duct to duodenal SEMS. If left lobe is infected/obstructed, additional ultrasound-guided segment III puncture required.',
    irComplexity: 'High',
    approachAccess: 'Right lateral intercostal puncture (Segment VI or VII).'
  },
  type4: {
    type: 'Type IV',
    name: 'Bilateral Secondary Confluence Strictures / Multifocal',
    anatomicLevel: 'Involves both Right and Left secondary sectoral duct bifurcations, or multifocal separated biliary segments.',
    drainageStrategy: 'Multi-catheter PTBD required (Dual or Triple drains: Right Anterior + Right Posterior + Left Duct). Drainage goal is to drain >= 50% liver parenchyma without contaminating undrained obstructed sectors.',
    stentingTechnique: 'Stent-in-Stent (SIS) through large-mesh SEMS, Side-by-Side (SBS) double/triple stents, or internalized multi-drainage catheters.',
    irComplexity: 'Very High',
    approachAccess: 'Bilateral combined approach: Right segment VI + Right segment VIII + Left segment III punctures.'
  }
};

export interface BismuthEvaluationResult {
  valid: boolean;
  selectedTypeKey: string;
  typeData: BismuthCorletteType;
  recommendation: string;
  recommendedHardware: string;
}

export function evaluateBismuthCorlette(typeKey: string): BismuthEvaluationResult {
  const typeData = BISMUTH_TYPES[typeKey] ?? BISMUTH_TYPES['type1'];

  let recommendation = `Bismuth-Corlette ${typeData.type} (${typeData.name}): ${typeData.anatomicLevel} Strategy: ${typeData.drainageStrategy} Stenting: ${typeData.stentingTechnique}`;

  return {
    valid: true,
    selectedTypeKey: typeKey,
    typeData,
    recommendation,
    recommendedHardware: '21G/22G Chiba needle + 0.018" Platinum tip wire (AccuStick/Neff set) -> 8.5F/10F Ring Biliary drainage catheter (Cook / Boston Scientific) -> 8-10mm x 60-100mm uncovered or partially covered Biliary SEMS (Epic, Zilver, or E-Luminexx).'
  };
}
