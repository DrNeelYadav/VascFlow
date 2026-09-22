/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Pre-Booking & Pre-Procedure Clinical Workup Templates
 * Aligned with CIRSE, SIR, SVS, and Rajasthan IHMS standards.
 */

export interface WorkupHistoryItem {
  id: string;
  label: string;
  defaultPresent: boolean;
  defaultDuration: string;
}

export interface WorkupScreeningItem {
  id: string;
  label: string;
  defaultValue: string;
  options?: string[];
  placeholder?: string;
}

export interface WorkupHardwareItem {
  item: string;
  quantity: string;
  defaultChecked: boolean;
  category?: 'Access & Sheaths' | 'Wires & Needles' | 'Catheters' | 'Balloons' | 'Stents & Grafts' | 'Embolics & Coils' | 'Hemodynamics & Misc';
}

export interface ProcedureWorkupTemplate {
  protocolId: string;
  procedureName: string;
  shortName: string;
  defaultDiagnosis: string;
  defaultProcedure: string;
  urgencyTier: 'Elective' | 'Priority (Within 24-48h)' | 'Emergency / Salvage';
  commonHistory: WorkupHistoryItem[];
  screeningChecklist: WorkupScreeningItem[];
  hardwareList: WorkupHardwareItem[];
  defaultPlan: string;
}

export const PROCEDURE_WORKUP_TEMPLATES: Record<string, ProcedureWorkupTemplate> = {
  bcs: {
    protocolId: 'bcs',
    procedureName: 'Budd-Chiari Syndrome (BCS) & Direct Intrahepatic Portosystemic Shunt (DIPS / TIPS)',
    shortName: 'Budd-Chiari DIPS/TIPS',
    defaultDiagnosis: 'Budd-Chiari Syndrome with Hepatic Venous Outflow Tract Obstruction, Caudate Hypertrophy & Refractory Ascites (ICD-10: I82.0)',
    defaultProcedure: 'Right IJV Access + Transcaval Caudate Puncture to Right Portal Vein (DIPS) / TIPS with Gore Viatorr 10mm x 70+20mm Stent-Graft Deployment',
    urgencyTier: 'Priority (Within 24-48h)',
    commonHistory: [
      {
        id: 'ascites',
        label: 'Tense / Refractory Ascites (Abdominal Distension)',
        defaultPresent: true,
        defaultDuration: '6 months'
      },
      {
        id: 'abdominal_fullness',
        label: 'Abdominal Fullness, Heaviness & Right Hypochondriac Pain',
        defaultPresent: true,
        defaultDuration: '3 months'
      },
      {
        id: 'pedal_edema',
        label: 'Bilateral Lower Limb Pedal Edema',
        defaultPresent: true,
        defaultDuration: '2 months'
      },
      {
        id: 'jaundice',
        label: 'Icterus / Yellowish Discoloration of Sclera',
        defaultPresent: false,
        defaultDuration: '1 month'
      },
      {
        id: 'upper_gi_bleed',
        label: 'Upper GI Bleed (Hematemesis / Melena) / Prior EVBL Banding',
        defaultPresent: false,
        defaultDuration: 'Past episode 4 weeks ago'
      },
      {
        id: 'prior_interventions',
        label: 'Prior Therapeutic Paracentesis / Anticoagulation (Rivaroxaban/Heparin)',
        defaultPresent: true,
        defaultDuration: '2 weekly paracentesis'
      }
    ],
    screeningChecklist: [
      {
        id: 'hepatic_vein_status',
        label: 'Hepatic Vein Status (RHV, MHV, LHV Doppler & Triphasic Waveform)',
        defaultValue: 'RHV and MHV occluded / cord-like with spiderweb collaterals; LHV hypoplastic with absent flow',
        options: [
          'All three major hepatic veins (RHV, MHV, LHV) occluded / cord-like with intrahepatic comma collaterals',
          'RHV and MHV occluded; accessory inferior RHV patent',
          'Membranous ostial web in RHV; MHV/LHV occluded',
          'Stent in situ in RHV with in-stent restenosis/thrombosis',
          'Normal patent hepatic veins with triphasic flow'
        ]
      },
      {
        id: 'ivc_status',
        label: 'Retrohepatic IVC Status & Compression',
        defaultValue: 'Markedly compressed and slit-like by hypertrophied caudate lobe; no intraluminal thrombus',
        options: [
          'Compressed and slit-like (<5mm AP) by hypertrophied caudate lobe; patent lumen',
          'Circumferential membranous web in suprahepatic IVC',
          'Thrombosis / occlusion of retrohepatic and infrahepatic IVC',
          'Patent IVC with normal caliber and respiratory variation'
        ]
      },
      {
        id: 'ijv_status',
        label: 'Right Internal Jugular Vein (IJV) Status for Transjugular Access',
        defaultValue: 'Right Internal Jugular Vein (IJV) fully patent, compliant, compressible; caliber 12.5 mm; suitable for 10F sheath access',
        options: [
          'Right IJV patent, fully compressible (Caliber ≥ 11 mm); optimal access',
          'Right IJV patent but small (Caliber 7-9 mm); ultrasound-guided puncture required',
          'Right IJV thrombosed / occluded; Left IJV or Transfemoral approach required',
          'Left IJV patent, selected for access'
        ]
      },
      {
        id: 'caudate_rpv_distance',
        label: 'Caudate Lobe Thickness & Caudate-to-Right Portal Vein Distance (for DIPS Planning)',
        defaultValue: 'Caudate thickness: 48 mm (hypertrophied); Direct transcaval puncture distance to RPV: 22 mm (for DIPS planning)',
        placeholder: 'e.g. Caudate AP: 45 mm, Puncture distance to RPV: 20-25 mm'
      },
      {
        id: 'portal_vein_status',
        label: 'Main Portal Vein (MPV) Patency, Caliber & Flow Direction',
        defaultValue: 'MPV patent, diameter 13.5 mm, hepatopetal flow; no cavernous transformation or thrombus',
        options: [
          'MPV patent, caliber 13-15 mm, sluggish hepatopetal flow; no thrombus',
          'MPV patent with bidirectional / hepatofugal flow',
          'Partial non-occlusive mural thrombus in MPV',
          'Complete portal vein thrombosis with cavernomatous transformation'
        ]
      },
      {
        id: 'varices_and_spleen',
        label: 'Splenomegaly & Portosystemic Collaterals / Varices',
        defaultValue: 'Splenomegaly (craniocaudal span 16.5 cm); large gastroesophageal and retroperitoneal varices present',
        placeholder: 'e.g. Spleen 16 cm, grade III esophageal varices, patent splenorenal shunt'
      }
    ],
    hardwareList: [
      { item: '10F 45cm Destination / Check-Flo Introducer Sheath', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: 'Rösch-Uchida Transjugular TIPS Puncture Set (RUPS-100, 16G trocar needle)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: '0.035" Stiff Glidewire 260cm (Angled tip, Terumo)', quantity: '2', defaultChecked: true, category: 'Wires & Needles' },
      { item: '0.035" Amplatz Super Stiff Wire 260cm (1cm flexible tip, Boston Scientific)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: '5F 100cm MPA-1 (Multipurpose A) Angiographic Catheter', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '5F 100cm Kumpe or Cobra-2 Catheter', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '8mm x 40mm High-Pressure PTA Balloon (Conquest / Mustang)', quantity: '1', defaultChecked: true, category: 'Balloons' },
      { item: '10mm x 40mm PTA Dilatation Balloon (Mustang / Atlas)', quantity: '1', defaultChecked: true, category: 'Balloons' },
      { item: 'Gore Viatorr TIPS Endoprosthesis (10mm diameter, 7cm covered + 2cm bare = 9cm total)', quantity: '1', defaultChecked: true, category: 'Stents & Grafts' },
      { item: '0.035" Nester Embolization Coils (8mm, 10mm, 12mm) for varices', quantity: '4', defaultChecked: true, category: 'Embolics & Coils' },
      { item: 'Medex Invasive Hemodynamic Blood Pressure Transducer Kit & Manifold for HVPG/RAP/PVP', quantity: '1', defaultChecked: true, category: 'Hemodynamics & Misc' }
    ],
    defaultPlan: `1. Ultrasound-guided puncture of Right Internal Jugular Vein (RIJV) under local anesthesia (2% Xylocaine) and sterile drape.
2. Advance 0.035" Glidewire and exchange for 10F 45cm Destination vascular introducer sheath parked in the retrohepatic IVC.
3. Perform baseline inferior vena cavography and measure Right Atrial Pressure (RAP) and IVC pressures.
4. Position RUPS-100 cannula in IVC at level of caudate lobe under biplane fluoroscopic and ultrasound guidance.
5. Direct anterior/anterolateral parenchymal puncture through the caudate lobe into the Right Branch of the Portal Vein (DIPS technique).
6. Confirm portal vein entry with gentle contrast injection; advance 0.035" Glidewire into the Main Portal Vein / Splenic Vein.
7. Exchange for 5F MPA catheter; measure baseline Portal Venous Pressure (PVP) and calculate Pre-Shunt Portosystemic Pressure Gradient (Target: > 12 mmHg baseline).
8. Perform direct portography to map intrahepatic branches, varices (coronary / gastroesophageal), and mesenteric outflow.
9. Perform tract pre-dilation using an 8mm x 40mm PTA balloon catheter.
10. Deploy Gore Viatorr TIPS endoprosthesis (10mm x 7cm covered + 2cm bare), ensuring covered segment extends from parenchymal-IVC junction to portal vein junction.
11. Perform post-dilation with 10mm x 40mm balloon. Measure post-shunt PVP and RAP (Target post-shunt gradient < 12 mmHg, preferably 8-10 mmHg).
12. If significant residual varices with persistent filling: superselect coronary vein and embolize with 0.035" Nester coils.
13. Complete final portography confirming rapid decompressive flow into IVC without extravasation.
14. Withdraw sheath, manual compression of RIJV for 10 minutes, apply sterile dressing. Patient to stay in Recovery / HDU for 6 hours; start post-op Rivaroxaban protocol.`
  },

  tace: {
    protocolId: 'tace',
    procedureName: 'Transarterial Chemoembolization (cTACE / DEB-TACE)',
    shortName: 'Post-TACE Oncology',
    defaultDiagnosis: 'Multifocal Hepatocellular Carcinoma (HCC), BCLC Stage B (Intermediate), Child-Pugh A6, ECOG 0 (ICD-10: C22.0)',
    defaultProcedure: 'Right Common Femoral Artery Access + Superselective Segmental Chemoembolization (Doxorubicin 50mg + Lipiodol + Gelfoam)',
    urgencyTier: 'Elective',
    commonHistory: [
      { id: 'chronic_liver_disease', label: 'Underlying Chronic Liver Disease / Hepatitis B or C / Cirrhosis', defaultPresent: true, defaultDuration: '4 years' },
      { id: 'weight_loss', label: 'Unintentional Weight Loss & Appetite Reduction', defaultPresent: true, defaultDuration: '2 months' },
      { id: 'ruq_pain', label: 'Right Upper Quadrant Dull Aching Pain', defaultPresent: true, defaultDuration: '1 month' },
      { id: 'jaundice', label: 'Jaundice / Pruritus', defaultPresent: false, defaultDuration: 'Nil' },
      { id: 'prior_tace', label: 'Prior TACE or Ablation Sessions', defaultPresent: false, defaultDuration: 'First intervention' }
    ],
    screeningChecklist: [
      { id: 'tumor_burden', label: 'Tumor Size, Number & Couinaud Segments (Multiphasic CT/MRI)', defaultValue: 'Segment VIII dominant mass (4.8 cm) + Segment V satellite (2.1 cm); Arterial hyperenhancement with portal venous washout' },
      { id: 'portal_patency', label: 'Portal Vein Patency & Main/Branch Invasion', defaultValue: 'Main portal vein and left/right primary branches patent; No macroscopic vascular invasion (Vp0)' },
      { id: 'hepatic_artery_anatomy', label: 'Celiac Axis & Hepatic Artery Anatomy (Michels Classification)', defaultValue: 'Type I standard anatomy: Common hepatic artery gives GDA and proper hepatic artery dividing into RHA and LHA' },
      { id: 'baseline_lft_albi', label: 'Baseline LFT & ALBI Grade', defaultValue: 'Total Bilirubin: 1.1 mg/dL, Albumin: 3.8 g/dL (ALBI Grade 1: -2.85), INR: 1.15' }
    ],
    hardwareList: [
      { item: '5F 11cm Terumo Radifocus Introducer Sheath', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '5F 100cm C2 (Cobra-2) or Simmons-1 Catheter', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '0.035" Radifocus Glidewire 150cm (Angled)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: '2.0F - 2.4F Progreat / Merit Maestro Microcatheter 130cm', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '0.014" - 0.016" Asahi Meister or Fathom Steerable Microwire', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: 'Lipiodol Ultra-Fluid (Guerbet) 10 mL ampoule', quantity: '1', defaultChecked: true, category: 'Embolics & Coils' },
      { item: 'Doxorubicin Hydrochloride 50 mg powder vial', quantity: '1', defaultChecked: true, category: 'Embolics & Coils' },
      { item: 'Gelfoam absorbable gelatin sponge slurry / Embosphere particles (100-300 um)', quantity: '1', defaultChecked: true, category: 'Embolics & Coils' }
    ],
    defaultPlan: `1. Right CFA retrograde puncture under ultrasound guidance, place 5F sheath.
2. Select Celiac axis and common hepatic artery using 5F Cobra/Simmons catheter. Perform digital subtraction celiac angiography (DSA) in AP and 30 deg RAO/LAO.
3. Identify hypervascular tumor blush in Segment VIII and V supplied by anterior division of Right Hepatic Artery.
4. Advance 2.0F/2.4F microcatheter coaxially into the subsegmental feeding arteries (A8 and A5). Confirm tumor blush with cone-beam CT / selective angiography.
5. Emulsify Doxorubicin (50mg dissolved in 5mL non-ionic contrast) with Lipiodol (10mL) in 1:2 ratio using 3-way stopcock until stable milky emulsion formed.
6. Slowly infuse emulsion under strict fluoroscopic visualization until complete intratumoral saturation and reflux into portal venules seen.
7. Embolize feeding artery with Gelfoam slurry / 100-300 um particles until flow stasis achieved.
8. Perform post-embolization DSA to confirm complete devascularization of target tumors with preservation of uninvolved liver parenchyma.
9. Remove 5F sheath, achieve hemostasis with manual compression or closure device (Angio-Seal). Post-op IV hydration and Paracetamol protocol.`
  },

  bae: {
    protocolId: 'bae',
    procedureName: 'Bronchial Artery Embolization (BAE) for Massive Hemoptysis',
    shortName: 'Hemoptysis BAE',
    defaultDiagnosis: 'Life-Threatening Massive Hemoptysis (>300 mL/24h) secondary to Post-Tubercular Bronchiectasis (ICD-10: R04.2)',
    defaultProcedure: 'Right CFA Access + Bilateral Bronchial & Non-Bronchial Systemic Artery (NBSA) Angiography + Microparticle Embolization',
    urgencyTier: 'Emergency / Salvage',
    commonHistory: [
      { id: 'hemoptysis_volume', label: 'Active Coughing of Fresh Red Blood (Volume > 300 mL/24h)', defaultPresent: true, defaultDuration: '3 days (acute exacerbation)' },
      { id: 'past_tb', label: 'History of Pulmonary Tuberculosis (Completed ATT / Relapse)', defaultPresent: true, defaultDuration: 'Completed ATT 5 years ago' },
      { id: 'chronic_cough', label: 'Chronic Productive Cough & Purulent Sputum', defaultPresent: true, defaultDuration: '6 months' },
      { id: 'dyspnea', label: 'Dyspnea & Tachycardia at Rest', defaultPresent: true, defaultDuration: '12 hours' },
      { id: 'anticoagulation', label: 'NSAID / Anticoagulant / Antiplatelet Intake', defaultPresent: false, defaultDuration: 'Nil' }
    ],
    screeningChecklist: [
      { id: 'ct_angiogram', label: 'CT Bronchial Angiography (CTBA) Findings & Bleeding Locus', defaultValue: 'Hypertrophied Right Intercostobronchial Trunk (ICBT) with tortuous caliber (4.2 mm) and parenchymal hypervascularity in Right Upper Lobe' },
      { id: 'anterior_spinal_artery', label: 'Anterior Spinal Artery (Artery of Adamkiewicz / Hairpin Loop) Screen', defaultValue: 'MANDATORY SCREEN: No hairpin anterior spinal artery branch arising from target ICBT. Confirmed safe for embolization.' },
      { id: 'non_bronchial_collaterals', label: 'Non-Bronchial Systemic Collaterals (NBSA) Identified', defaultValue: 'Right internal mammary and lateral thoracic branches checked; no significant transpleural shunting' },
      { id: 'baseline_coagulation', label: 'Coagulation Profile & Platelet Count', defaultValue: 'INR: 1.18, Platelets: 210,000 / µL, Hb: 8.8 g/dL (drop from 11.2)' }
    ],
    hardwareList: [
      { item: '5F 11cm Introducer Sheath', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '5F 100cm Mikaelsson or Shepherd Hook Catheter', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '0.035" Glidewire 150cm (Angled)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: '2.0F / 2.4F Microcatheter (Progreat / Renegade HI-FLO 130cm)', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '0.014" Steerable Hydrophilic Microwire (Transend / Asahi)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: 'PVA Particles (350 - 500 µm or 500 - 710 µm) / Bead Block', quantity: '2 vials', defaultChecked: true, category: 'Embolics & Coils' },
      { item: 'Pushable / Detachable Microcoils (0.018" 2-4mm) for distal anchoring', quantity: '2', defaultChecked: true, category: 'Embolics & Coils' }
    ],
    defaultPlan: `1. Right CFA access under local anesthesia, insert 5F sheath.
2. Advance 5F Mikaelsson catheter into descending thoracic aorta (T4-T7 levels).
3. Select Right ICBT (T5-T6 level); perform high-resolution DSA in AP projection with breath-hold.
4. RIGOROUS SAFETY CHECK: Carefully review for Anterior Spinal Artery (characteristic anterior medial descent with "hairpin" turn). If spinal branch present, coaxial microcatheter MUST be advanced strictly distal to spinal take-off.
5. Cannulate hypertrophied bronchial branch coaxially with 2.0F microcatheter and 0.014" wire.
6. Confirm wedge-position or distal flow with microcatheter run showing hypervascular blush, parenchymal neovascularity, and tortuous bronchial-pulmonary shunting.
7. Embolize slowly with 350-500 um PVA particles suspended in 50% diluted contrast under continuous real-time fluoroscopy until near-complete stasis (5-beat rule).
8. Perform completion angiography of right ICBT and check left bronchial artery + subclavian branches for collateral feeder sources.
9. Remove sheath, achieve femoral hemostasis. Post-op strict bed rest for 6h, monitor vitals and sputum for hemoptysis cessation.`
  },

  ptbd: {
    protocolId: 'ptbd',
    procedureName: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & Stenting',
    shortName: 'PTBD Biliary Drainage',
    defaultDiagnosis: 'Malignant Biliary Obstruction / Cholangiocarcinoma (Klatskin Bismuth Type IIIa) with Severe Obstructive Jaundice & Cholangitis (ICD-10: C24.0)',
    defaultProcedure: 'Right Transhepatic Biliary Puncture + Drainage Catheter Placement (8.5F / 10F Ring Drainage Catheter) ± Metallic Stenting',
    urgencyTier: 'Emergency / Salvage',
    commonHistory: [
      { id: 'progressive_jaundice', label: 'Progressive Deep Jaundice with High-Colored Urine & Pale Stools', defaultPresent: true, defaultDuration: '1 month' },
      { id: 'pruritus', label: 'Severe Generalized Pruritus & Scratch Marks', defaultPresent: true, defaultDuration: '3 weeks' },
      { id: 'cholangitis_fever', label: 'Charcot Triad / Cholangitis (High-grade Fever with Chills & RUQ Pain)', defaultPresent: true, defaultDuration: '4 days' },
      { id: 'weight_loss', label: 'Significant Anorexia & Cachectic Weight Loss', defaultPresent: true, defaultDuration: '2 months' },
      { id: 'failed_ercp', label: 'Prior Failed Endoscopic Retrograde Cholangiopancreatography (ERCP)', defaultPresent: true, defaultDuration: 'Failed cannulation 5 days ago' }
    ],
    screeningChecklist: [
      { id: 'mrcp_biliary_level', label: 'MRCP / CECT Biliary Anatomy & Level of Obstruction (Bismuth Class)', defaultValue: 'Marked intrahepatic biliary radicle dilatation (IHBRD). Stricture at confluence extending into right hepatic duct (Bismuth Type IIIa)' },
      { id: 'ascites_status', label: 'Perihepatic Ascites Screen (Ultrasound)', defaultValue: 'Minimal perihepatic fluid; safe for right mid-axillary intercostal percutaneous puncture' },
      { id: 'portal_vein_patency', label: 'Right & Left Portal Vein Branches Patency', defaultValue: 'Right and left portal branches patent, no vascular encasement or occlusion' },
      { id: 'baseline_bilirubin', label: 'Baseline LFT & Coagulation Status', defaultValue: 'Total Bilirubin: 18.6 mg/dL, Direct: 14.2 mg/dL, ALP: 680 IU/L, INR: 1.25, Platelets: 165,000 / µL' }
    ],
    hardwareList: [
      { item: '21G / 22G Chiba Percutaneous Access Needle (15cm or 20cm)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: 'AccuStick / Neff Percutaneous Access Set with 0.018" Platinum Wire', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '0.035" Stiff Glidewire 150cm (Angled tip, Terumo)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: '5F Kumpe / KMP Angiographic Catheter 65cm', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: '8.5F or 10F Ring Transhepatic Biliary Drainage Catheter (Cook / Boston)', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: 'Biliary Dilator Set (6F, 8F, 10F Teflon Dilators)', quantity: '1 set', defaultChecked: true, category: 'Access & Sheaths' },
      { item: 'Percutaneous Drainage Bag with Anti-Reflux Valve & Luer Connector', quantity: '1', defaultChecked: true, category: 'Hemodynamics & Misc' }
    ],
    defaultPlan: `1. Patient positioned supine; right mid-axillary line sterilized and draped under ultrasound and fluoroscopy.
2. Local infiltration with 1% Lignocaine down to liver capsule. Ultrasound guidance to target peripheral Right Posterior Segmental Duct (Segment VI/VII) to minimize vascular injury.
3. Advance 21G Chiba needle into bile duct. Remove stylet, gently aspirate dark bile, inject 2-3 mL diluted contrast confirming ductal puncture.
4. Advance 0.018" wire through needle into central biliary tree. Introduce 4F/6F coaxial introducer set.
5. Exchange for 0.035" Glidewire and manipulate across the stricture into duodenum using 5F Kumpe catheter.
6. If crossable: perform internal-external drainage using 8.5F/10F Ring biliary catheter with sideholes across stricture and pigtail anchored in duodenum.
7. If uncrossable (tight stricture/sepsis): perform external drainage with 8.5F catheter locked in right hepatic duct. Plan re-attempt of stricture traversal after 48-72h decompression.
8. Connect catheter to external drainage bag; record bile volume (target 300-800 mL/day). Monitor for post-op hemobilia or sepsis.`
  },

  dvt_thrombolysis: {
    protocolId: 'dvt_thrombolysis',
    procedureName: 'Catheter-Directed Thrombolysis (CDT) & Percutaneous Thrombectomy for Iliofemoral DVT',
    shortName: 'DVT Thrombolysis',
    defaultDiagnosis: 'Acute Iliofemoral Deep Vein Thrombosis with May-Thurner Syndrome / Left Common Iliac Compression (ICD-10: I80.2)',
    defaultProcedure: 'Prone/Supine Popliteal Vein Puncture + Multi-Sidehole Infusion Catheter Placement (EKOS / Unifuse) ± Iliac Stenting',
    urgencyTier: 'Emergency / Salvage',
    commonHistory: [
      { id: 'acute_leg_swelling', label: 'Acute Massive Leg Swelling, Tightness & Severe Calf Pain', defaultPresent: true, defaultDuration: '4 days (< 14 days acute window)' },
      { id: 'phlegmasia_screen', label: 'Phlegmasia Cerulea Dolens Screen (Cyanosis, Paresthesia, Loss of Pedal Pulses)', defaultPresent: false, defaultDuration: 'No limb-threatening ischemia' },
      { id: 'risk_factors', label: 'VTE Risk Factors (Oral Contraceptive Pills, Long Travel, Immobilization)', defaultPresent: true, defaultDuration: 'OCP use for 6 months' },
      { id: 'anticoagulation_status', label: 'Initiation of Therapeutic LMWH (Enoxaparin 1 mg/kg BD)', defaultPresent: true, defaultDuration: 'Started 2 days ago' }
    ],
    screeningChecklist: [
      { id: 'duplex_extent', label: 'Doppler Ultrasound Thrombosis Extent', defaultValue: 'Continuous non-compressible hypoechoic thrombus extending from left popliteal vein through femoral and common femoral into external iliac vein' },
      { id: 'ct_venogram_may_thurner', label: 'CT Venography (CTV) Pelvic Vein & IVC Screen', defaultValue: 'Left Common Iliac Vein compressed against L5 vertebra by Right Common Iliac Artery (May-Thurner spur); IVC patent' },
      { id: 'baseline_fibrinogen', label: 'Baseline Serum Fibrinogen & Coagulation', defaultValue: 'Fibrinogen: 380 mg/dL (must stay > 100 mg/dL during CDT), Platelets: 240,000 / µL, Hb: 13.2 g/dL' }
    ],
    hardwareList: [
      { item: '6F 11cm Micro-Puncture Access Set & Sheath', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '0.035" Glidewire 260cm (Stiff, Angled)', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: 'EKOS Ultrasonic Infusion Catheter or 5F Unifuse Infusion Catheter (40-50cm infusion length)', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: 'Recombinant Tissue Plasminogen Activator (Alteplase / Actilyse rtPA 50 mg)', quantity: '1 vial', defaultChecked: true, category: 'Hemodynamics & Misc' },
      { item: '12mm - 14mm Dedicated Venous Self-Expanding Stent (Wallstent / Venovo / Abre)', quantity: '1', defaultChecked: true, category: 'Stents & Grafts' },
      { item: '10mm - 12mm High-Pressure PTA Balloon for post-stenting', quantity: '1', defaultChecked: true, category: 'Balloons' }
    ],
    defaultPlan: `1. Prone or reverse Trendelenburg position. Ultrasound-guided puncture of Left Popliteal Vein.
2. Advance 0.035" Glidewire through the occluded femoral-iliac segment into the IVC under fluoroscopy.
3. Perform ascending venography mapping thrombus burden from popliteal vein to IVC.
4. Position multi-sidehole infusion catheter (EKOS / Unifuse, 40cm slotted length) across thrombus burden.
5. Connect rtPA infusion: 0.5 to 1.0 mg/hour rtPA + sub-therapeutic Heparin (500 units/hour) via sheath.
6. Transfer patient to ICU/HDU with strict bedrest; monitor serum fibrinogen q6h (hold rtPA if fibrinogen < 150 mg/dL).
7. Return to cath lab at 18-24 hours for check venography. Perform suction thrombectomy for residual clot.
8. Identify underlying May-Thurner Left CIV spur; deploy 14mm x 60mm self-expanding venous stent across spur into IVC; post-dilate with 12mm balloon.
9. Remove catheter and sheath; initiate long-term Rivaroxaban / DOAC protocol.`
  },

  evar_tevar: {
    protocolId: 'evar_tevar',
    procedureName: 'Endovascular Aneurysm Repair (EVAR / TEVAR)',
    shortName: 'Aortic Repair EVAR/TEVAR',
    defaultDiagnosis: 'Infrarenal Abdominal Aortic Aneurysm (AAA) > 5.5 cm with Aortic Neck Angulation < 60 degrees (ICD-10: I71.4)',
    defaultProcedure: 'Bilateral Percutaneous Common Femoral Artery Access (ProGlide pre-close) + Modular Bifurcated Aortic Endograft Deployment',
    urgencyTier: 'Elective',
    commonHistory: [
      { id: 'asymptomatic_mass', label: 'Pulsatile Abdominal Mass / Incidental Ultrasound Finding', defaultPresent: true, defaultDuration: 'Discovered 4 months ago' },
      { id: 'growth_rate', label: 'Documented Aneurysm Expansion Rate (> 0.5 cm in 6 months)', defaultPresent: true, defaultDuration: 'Grown from 4.8 cm to 5.6 cm' },
      { id: 'back_pain', label: 'Back or Flank Pain (Impending Rupture Warning Sign)', defaultPresent: false, defaultDuration: 'Nil (asymptomatic elective)' },
      { id: 'cardiovascular_history', label: 'Coronary Artery Disease, Hypertension, Smoking History', defaultPresent: true, defaultDuration: '30 pack-year smoker, on Amlodipine' }
    ],
    screeningChecklist: [
      { id: 'proximal_neck', label: 'Proximal Aortic Neck Anatomy (Length, Diameter, Angulation)', defaultValue: 'Neck length: 18 mm (adequate >15 mm), Diameter: 23 mm, Infrarenal angulation: 28 degrees, Minimal thrombus/calcification' },
      { id: 'max_aneurysm_diameter', label: 'Maximum Aneurysm Sac Diameter & Longitudinal Extent', defaultValue: 'Max outer-to-outer diameter: 56.5 mm; Length from lowest renal to aortic bifurcation: 98 mm' },
      { id: 'iliac_access', label: 'Iliac Arteries Caliber, Tortuosity & Calcification', defaultValue: 'Right CIA diameter: 12 mm; Left CIA: 11.5 mm; Minimum external iliac caliber: 7.5 mm bilaterally (suitable for 18F device)' }
    ],
    hardwareList: [
      { item: 'Abbott Perclose ProGlide Suture-Mediated Closure Devices', quantity: '4 (2 per groin)', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '18F - 20F Large-Bore DrySeal / Solopath Introducer Sheath', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '0.035" Lunderquist Extra Stiff Wire 260cm (Cook)', quantity: '2', defaultChecked: true, category: 'Wires & Needles' },
      { item: '5F Pigtail Calibrated Angiographic Marker Catheter (100cm)', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: 'Bifurcated Aortic Main Body Endograft (Medtronic Endurant / Gore Excluder / Cook Zenith)', quantity: '1', defaultChecked: true, category: 'Stents & Grafts' },
      { item: 'Contralateral Iliac Limb Endograft', quantity: '1-2', defaultChecked: true, category: 'Stents & Grafts' },
      { item: 'Coda / Reliant Large Aortic Molding Balloon', quantity: '1', defaultChecked: true, category: 'Balloons' }
    ],
    defaultPlan: `1. General anesthesia or spinal anesthesia with arterial line monitoring.
2. Bilateral CFA ultrasound-guided puncture; deploy 2 ProGlide devices per groin in 'pre-close' fashion.
3. Advance 0.035" Lunderquist wire into ascending aorta bilaterally.
4. Position 5F calibrated marker pigtail from left groin at level of renal arteries.
5. Perform high-pressure diagnostic aortogram to map lowest renal artery and aortic bifurcation.
6. Introduce Main Bifurcated Body device through right groin over Lunderquist wire; align graft fabric immediately below lowest renal artery orifice.
7. Deploy main aortic body. Perform contralateral gate cannulation from left groin using 5F Cobra and steerable wire.
8. Verify gate cannulation with rotated pigtail catheter and fluoroscopy; exchange for stiff wire.
9. Deploy contralateral iliac limb overlapping 30mm with main gate and landing above internal iliac artery origin.
10. Deploy ipsilateral iliac limb.
11. Mold proximal neck and overlap zones using Coda molding balloon.
12. Perform completion aortogram: verify complete exclusion of aneurysm sac, zero Type I or Type III endoleak, and patent renal + internal iliac arteries.
13. Remove sheaths, cinch ProGlide pre-close sutures, confirm bilateral femoral pulses and pedal Doppler signals.`
  }
};

/**
 * Universal fallback generator that produces a rich, standardized
 * pre-booking clinical workup template for any of the 46 protocols in DRUG_PROTOCOLS.
 */
export function getWorkupTemplateForProtocol(
  protocolId: string,
  procedureNameFallback = 'Interventional Procedure'
): ProcedureWorkupTemplate {
  if (PROCEDURE_WORKUP_TEMPLATES[protocolId]) {
    return PROCEDURE_WORKUP_TEMPLATES[protocolId];
  }

  // Fallback template tailored dynamically
  return {
    protocolId,
    procedureName: procedureNameFallback,
    shortName: procedureNameFallback.split('(')[0].trim(),
    defaultDiagnosis: `Indication for ${procedureNameFallback}: Confirmed clinical pathology under evaluation (CIRSE/SIR Category).`,
    defaultProcedure: `Percutaneous / Endovascular Intervention: ${procedureNameFallback} under Image Guidance (US / Fluoroscopy / CT)`,
    urgencyTier: 'Elective',
    commonHistory: [
      {
        id: 'primary_symptom',
        label: 'Primary Presenting Symptom / Clinical Indication',
        defaultPresent: true,
        defaultDuration: '2 months'
      },
      {
        id: 'secondary_pain',
        label: 'Associated Pain / Functional Impairment / Secondary Complaints',
        defaultPresent: true,
        defaultDuration: '3 weeks'
      },
      {
        id: 'prior_treatment',
        label: 'Prior Medical / Interventional Therapy Trials',
        defaultPresent: true,
        defaultDuration: 'Medical therapy refractory'
      },
      {
        id: 'comorbidities',
        label: 'Cardiopulmonary / Renal Comorbidities / Diabetes Mellitus',
        defaultPresent: false,
        defaultDuration: 'Documented on record'
      }
    ],
    screeningChecklist: [
      {
        id: 'imaging_anatomy',
        label: 'Pre-Procedure Diagnostic Imaging (CT / MRI / Doppler US)',
        defaultValue: 'Relevant target vascular / parenchymal lesion confirmed; anatomical access confirmed feasible'
      },
      {
        id: 'access_route',
        label: 'Target Access Route & Vascular / Percutaneous Path Status',
        defaultValue: 'Femoral / Radial / Jugular or Direct Percutaneous access site patent and suitable'
      },
      {
        id: 'coagulation_renal',
        label: 'Coagulation Profile & Renal Function (eGFR / Serum Creatinine)',
        defaultValue: 'INR < 1.5, Platelets > 50,000 / µL, Serum Creatinine < 1.5 mg/dL (SIR Category 2 Criteria Met)'
      }
    ],
    hardwareList: [
      { item: 'Sterile Vascular Access Set / Puncture Needle', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: 'Vascular Introducer Sheath (Appropriate Fr Size)', quantity: '1', defaultChecked: true, category: 'Access & Sheaths' },
      { item: '0.035" Diagnostic Steerable Guidewire 150-260cm', quantity: '1', defaultChecked: true, category: 'Wires & Needles' },
      { item: 'Diagnostic Angiographic / Drainage Catheter', quantity: '1', defaultChecked: true, category: 'Catheters' },
      { item: 'Interventional Implant / Stent / Embolic Agents / Balloon as required', quantity: '1 unit', defaultChecked: true, category: 'Stents & Grafts' },
      { item: 'Sterile Puncture Site Dressing & Hemostasis Device', quantity: '1', defaultChecked: true, category: 'Hemodynamics & Misc' }
    ],
    defaultPlan: `1. Confirm patient identity, informed consent, NPO status (> 6 hours), and baseline vitals.
2. Position patient on angiosuite table; apply antiseptic prep and sterile draping under image guidance.
3. Infiltrate local anesthesia (1-2% Lignocaine) at planned access site.
4. Establish percutaneous / endovascular access under real-time ultrasound or fluoroscopy.
5. Perform baseline diagnostic angiogram / fluoroscopic roadmap confirming anatomy.
6. Execute target interventional procedure according to standardized SIR / CIRSE clinical guidelines.
7. Perform completion imaging verifying therapeutic success and absence of immediate complications.
8. Remove access sheath/hardware; achieve hemostasis via manual compression or closure device.
9. Transfer patient to Post-Intervention Recovery Unit; initiate departmental post-procedure drug protocol.`
  };
}
