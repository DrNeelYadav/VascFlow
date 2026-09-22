import { ProcedureBlueprint } from '../../types/clinical';

export const DIALYSIS_AND_FISTULA_PROCEDURES: ProcedureBlueprint[] = [
  {
    id: 'avf_radiocephalic_pta',
    name: 'Radiocephalic (Brescia-Cimino) AV Fistula Plain Balloon Angioplasty (PTA)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV001A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of vascular dialysis catheter/graft/fistula, initial encounter)',
    indications: [
      'Clinically significant (>50% luminal diameter reduction) stenosis in the forearm cephalic vein outflow with elevated dynamic venous dialysis pressure (>0.5 venous pressure ratio)',
      'Access circuit flow reduction (Qa < 500 mL/min or drop >25% from baseline) accompanied by prolonged bleeding after needle withdrawal',
      'Difficulty cannulating the fistula due to localized focal segment stenosis in Brescia-Cimino forearm tract'
    ],
    preOpCriteria: [
      'Duplex ultrasound mapping showing forearm cephalic vein diameter <3 mm at stenosis with peak systolic velocity ratio (PSVR) > 2.0',
      'Platelet count > 50,000/uL and INR < 1.5 within acceptable limits for forearm access',
      'Fistula examination confirming palpable pulse/thrill changes along forearm run with elevated dialysis circuit pressures',
      'Documented nephrology referral indicating inadequate dialysis adequacy (Kt/V < 1.2)'
    ],
    hardware: [
      { category: 'Micropuncture Kit', name: '4F-5F Micropuncture Access Set', spec: '21G echogenic needle, 0.018 in nitinol mandril wire, 4F/5F co-axial dilator', standardStore: 'Angio Suite Store' },
      { category: 'Vascular Sheath', name: '5F Glidesheath Slender / Radifocus Sheath', spec: '5F, 7-10 cm length, hemostatic valve', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: 'Radifocus Glidewire Advantage / Standard', spec: '0.035 in, 150 cm, angled stiff/regular tip', standardStore: 'Central IR Store' },
      { category: 'PTA Balloon Catheter', name: 'Mustang / Ultraverse 0.035 PTA Balloon Catheter', spec: '5 mm - 6 mm diameter x 40 mm length, 75 cm shaft, 0.035 in wire', standardStore: 'Central IR Store' },
      { category: 'Inflation Device', name: 'Standard 20-30 atm High Pressure Inflation Device', spec: '20 mL volume syringe with analog manometer gauge and locking mechanism', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Heparin', name: 'Unfractionated Heparin Sodium Injection', spec: '3000 - 5000 IU intra-arterial/intravenous ampoule', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient placed in supine position with abducted arm on radiolucent armboard; skin prepped and draped under aseptic precautions.',
      'Sonographic evaluation of the radiocephalic fistula to identify stenosis location, caliber, and favorable retrograde or antegrade cannulation site at least 3-5 cm from the lesion.',
      'Ultrasound-guided puncture of cephalic vein using a 21G echogenic needle; 0.018-inch nitinol wire advanced under fluoroscopic guidance.',
      'Exchange for a 5F Glidesheath over wire; administer 3,000-5,000 IU unfractionated heparin intra-luminally.',
      'Perform baseline digital subtraction angiography (DSA) of the fistula tract from anastomosis up to subclavian/central veins using 50% diluted non-ionic contrast.',
      'Cross the target forearm cephalic vein stenosis using an angled 0.035-inch hydrophilic Glidewire supported by a 4F Berenstein or straight flush catheter.',
      'Position a 5-6 mm non-compliant or semi-compliant PTA balloon catheter across the stenosis; inflate under fluoroscopic monitoring up to nominal/burst pressure (12-16 atm) until the balloon waist fully resolves for 60-90 seconds.',
      'Perform completion fistulography confirming luminal gain with residual stenosis <30%, brisk venous outflow, and absence of flow-limiting dissection or extravasation; pull sheath and achieve hemostasis with purse-string suture or digital manual pressure.'
    ],
    complications: [
      'Venous rupture / contrast extravasation at angioplasty site',
      'Acute access thrombosis secondary to flow-limiting intimal dissection',
      'Forearm hematoma or pseudoaneurysm at sheath puncture site',
      'Distal arterial embolization of dislodged mural thrombus'
    ],
    maayTariffInr: 22500,
    vendorContacts: [
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)',
      'BD Bard Peripheral Vascular (+91 98291 77654)'
    ]
  },
  {
    id: 'avf_juxta_conquest',
    name: 'Brachiocephalic AVF Juxta-Anastomotic Stenosis High-Pressure Balloon Angioplasty (Conquest/Atlas)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV002A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of vascular dialysis catheter/graft/fistula, initial encounter)',
    indications: [
      'High-grade resistant fibroepithelial hyperplasia within the juxta-anastomotic outflow segment (first 3 cm from arteriovenous anastomosis) in a brachiocephalic AVF',
      'Extremely elevated dynamic arterial/venous pressures and collapse of vein during hemodialysis pump ramp-up',
      'Failure of conventional standard PTA balloon (<20 atm) to yield or efface rigid fibrotic waist'
    ],
    preOpCriteria: [
      'Color Doppler ultrasound confirming severe juxta-anastomotic narrowing (<2.5 mm) with post-stenotic jet velocity > 3.5 m/s',
      'Upper extremity arterial pulse examination showing patent brachial and radial arteries with intact triphasic waveforms',
      'Laboratory evaluation: Platelets > 50,000/uL, INR < 1.4, baseline serum potassium reviewed prior to contrast administration',
      'Informed consent documenting risk of juxta-anastomotic rupture requiring emergency surgical banding, stenting, or cutdown'
    ],
    hardware: [
      { category: 'Access Sheath', name: '6F Terumo Glidesheath Slender Introducer', spec: '6F, 10 cm, radiopaque tip with mini guide wire', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.018 or 0.035 in Stiff Hydrophilic Guidewire (Radiofocus Advantage / Glidewire GT)', spec: '0.035 in, 180 cm length, stiff angled tip', standardStore: 'Angio Suite Store' },
      { category: 'Ultra High-Pressure Balloon', name: 'ConQuest 40 / Atlas High-Pressure PTA Dilatation Catheter', spec: '6 mm - 7 mm diameter x 40 mm length, Rated Burst Pressure 30-40 atm, 0.035 wire compatible', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Ultra High Pressure Inflator', name: 'Atlas 40-atm Inflation Device with Steel Barrel / Threader', spec: '40 atm capability, 20 mL capacity, high-torque piston', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Diagnostic Catheter', name: '4F Headhunter / Kumpe Access Catheter', spec: '65 cm, 4F, end-hole angled taper', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Sterile prep and drape of the upper arm and antecubital fossa; local anesthesia with 1% lidocaine.',
      'Retrograde cannulation of the cephalic vein mid-shaft segment under ultrasound guidance directed towards the elbow anastomosis.',
      'Insert 6F vascular sheath; administer 4,000 IU unfractionated heparin.',
      'Perform retrograde fistulogram and brachial arteriogram through diagnostic catheter to map juxta-anastomotic stenosis morphology and angle of takeoff from brachial artery.',
      'Carefully advance a 0.035-inch Glidewire Advantage through the tight fibrous waist across the surgical anastomosis into the brachial artery.',
      'Track a 6 mm or 7 mm ConQuest / Atlas ultra-high pressure balloon across the juxta-anastomotic junction, ensuring proximal marker stays clear of deep brachial bifurcation.',
      'Inflate balloon incrementally using a 40-atm dedicated inflator; observe gradual opening of the waist between 24 and 35 atm, holding at full expansion for 90 seconds.',
      'Deflate balloon, pull back into sheath, and perform completion DSA including brachial run-off to rule out flap dissection, recoil, or distal forearm embolization.'
    ],
    complications: [
      'Vascular rupture across juxta-anastomotic elbow hinge point requiring immediate balloon tamponade or stent-graft',
      'Arterial intimal dissection extending into the brachial artery trunk',
      'Spasm or acute thrombosis of the brachial artery with distal hand ischemia',
      'Contrast extravasation and expanding antecubital hematoma'
    ],
    maayTariffInr: 28500,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'avf_brachiobasilic_transposition_pta_stent',
    name: 'Brachiobasilic AVF Transposition Outflow Tract Stenosis PTA & Stenting',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV003A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of vascular dialysis catheter/graft/fistula, initial encounter)',
    indications: [
      'Recurrent severe outflow tract stenosis along the transposed swing point or sub-pectoral axillary venous junction in a transposed brachiobasilic AVF',
      'Dynamic venous pressure elevation exceeding 220 mmHg at 300 mL/min blood pump speed on dialysis',
      'Severe elastic recoil (>50% residual narrowing) or flow-limiting dissection immediately post high-pressure balloon dilation'
    ],
    preOpCriteria: [
      'Doppler ultrasound showing transposition swing point kink with peak systolic velocity > 4 m/s and luminal lumen < 3 mm',
      'Previous history of failed plain balloon angioplasty with rapid restenosis (<3 months)',
      'Upper limb chest radiograph to evaluate surgical tunneling route and presence of underlying thoracic outlet compression',
      'Assessment of patient tolerance for post-procedure dual antiplatelet therapy (Aspirin + Clopidogrel)'
    ],
    hardware: [
      { category: 'Introducer Sheath', name: '7F Performer / Pinnacle Destination Introducer Sheath', spec: '7F, 11 cm - 25 cm length, hemostatic check-valve', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: 'Rosen / Amplatz Super Stiff Guidewire', spec: '0.035 in, 145 cm - 180 cm, 3 mm J-tip, heavy duty shaft', standardStore: 'Central IR Store' },
      { category: 'PTA Balloon', name: 'Mustang / Charger High Pressure Balloon', spec: '7 mm - 8 mm x 40 mm, 0.035 in lumen, 24 atm', standardStore: 'Angio Suite Store' },
      { category: 'Self-Expanding Covered / Bare Stent', name: 'Fluency Plus Endovascular Stent Graft or E-Luminexx Bare Stent', spec: '8 mm - 9 mm diameter x 40 mm - 60 mm length, 7F delivery', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Inflation Syringe', name: 'Medtronic / Merit BasixTouch 30 atm Inflator', spec: '30 atm, 30 mL volume gauge syringe', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound evaluation of the basilic transposition loop; local infiltration of 2% lignocaine at puncture site.',
      'Antegrade cannulation of the transposed basilic conduit in the mid-arm under sterile ultrasound guidance.',
      'Exchange 21G micropuncture system for a 7F long introducer sheath; administer 5,000 IU heparin.',
      'Perform baseline antegrade fistulogram visualizing upper arm basilic transposition run, swing point crossing axillary vein, and central mediastinal venous return.',
      'Cross the swing point stenosis using a 0.035-inch steerable angled Glidewire and 4F vertebral catheter; exchange for an Amplatz Super Stiff wire.',
      'Perform pre-dilation with an 7 mm x 40 mm Mustang balloon up to 18-20 atm; observe prominent elastic recoil and luminal recoil > 50%.',
      'Deploy an 8 mm x 60 mm self-expanding covered stent (Fluency Plus) or nitinol bare stent across the basilic-to-axillary swing segment under precise roadmapping.',
      'Post-dilate the stent construct using an 8 mm balloon at nominal pressure to ensure complete wall apposition; perform completion angiogram verifying brisk unrestricted outflow into subclavian vein.'
    ],
    complications: [
      'Stent migration or foreshortening into central thoracic vessels',
      'Venous perforation at axillary vein transition with sub-pectoral hematoma',
      'Acute in-stent thrombosis requiring immediate declotting / lysis',
      'Fracture or structural collapse of stent at arm flexion stress zones'
    ],
    maayTariffInr: 46200,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'W. L. Gore & Associates India (+91 98293 88123)'
    ]
  },
  {
    id: 'avf_cephalic_arch_cas_viabahn',
    name: 'Cephalic Arch Stenosis (CAS) Ultra-High Pressure Angioplasty & Viabahn Covered Stenting',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV004A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of vascular dialysis catheter/graft/fistula, initial encounter)',
    indications: [
      'Recurrent, resistant cephalic arch stenosis (CAS) in a brachiocephalic AV fistula causing severe venous hypertension, arm edema, and dialyzer high pressure alarms',
      'Rapid restenosis (<3 months) following multiple high-pressure plain balloon dilatations',
      'Intimal dissection or elastic recoil >50% at the cephalic arch junction into the axillary vein'
    ],
    preOpCriteria: [
      'Venous duplex showing severe narrowing (<2.5 mm) at the cephalic vein arch as it penetrates the clavipectoral fascia',
      'Upper limb non-contrast CT venogram or previous catheter angiogram confirming absence of concomitant central brachiocephalic/SVC occlusion',
      'Baseline coagulation profile within limits (INR < 1.5, Platelets > 60,000/uL)',
      'Patient candidate for post-procedural antiplatelet protocol'
    ],
    hardware: [
      { category: 'Access Sheath', name: '7F Terumo Radifocus Introducer Sheath', spec: '7F, 11 cm - 25 cm length', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in hydrophilic stiff wire + Amplatz Super Stiff', spec: '0.035 in, 180 cm - 260 cm, angled tip and 1 cm floppy J-tip', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon Catheter', name: 'ConQuest 40 / Conquest Pro High Pressure Balloon', spec: '7 mm - 8 mm x 40 mm, 0.035 in wire, rated burst pressure 30-40 atm', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Endovascular Stent Graft', name: 'Gore Viabahn Endoprosthesis with Propaten Heparin Surface', spec: '8 mm - 9 mm diameter x 50 mm length, 7F delivery, ePTFE lined nitinol stent', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '4F Kumpe or MPA Angle Catheter', spec: '4F, 65 cm length, radiopaque tip', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound assessment of upper arm brachiocephalic fistula run; infiltrate 1% lignocaine at puncture point.',
      'Antegrade puncture of cephalic vein in mid-biceps region under real-time ultrasound guidance; insert 7F sheath.',
      'Administer 5,000 IU unfractionated heparin IV/intra-arterially.',
      'Advance 4F diagnostic catheter and 0.035-inch hydrophilic Glidewire across the cephalic arch into the axillary/subclavian vein; record baseline DSA in AP and 30-degree ipsilateral oblique projections.',
      'Exchange for an Amplatz Super Stiff 0.035-inch wire placed deeply into the superior vena cava / right atrium.',
      'Perform high-pressure balloon dilatation with an 8 mm ConQuest balloon inflated to 26-30 atm for 2 minutes to efface the thick clavipectoral fibrotic band.',
      'Assess for recoil and dissection; deliver an 8 mm or 9 mm x 50 mm Gore Viabahn covered stent precisely across the cephalic arch, ensuring it does not protrude >2 mm into the axillary vein lumen to protect future axillary options.',
      'Post-dilate the Viabahn endoprosthesis with an 8 mm Mustang balloon up to nominal 9-12 atm; confirm brisk uninterrupted flow into axillary/subclavian vein on completion DSA.'
    ],
    complications: [
      'Cephalic arch rupture with clavipectoral / retropectoral hemorrhage',
      'Stent jailing or inadvertent coverage of the main axillary vein lumen',
      'Acute stent graft thrombosis secondary to low-flow outflow kinks',
      'Late edge stenosis at the distal or proximal landing zone'
    ],
    maayTariffInr: 49500,
    vendorContacts: [
      'W. L. Gore & Associates India (+91 98293 88123)',
      'BD Bard Peripheral Vascular (+91 98291 77654)'
    ]
  },
  {
    id: 'avf_accessory_branch_embolization',
    name: 'Radiocephalic AVF Accessory Branch Embolization (Coil/Vascular Plug)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV005A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Fistula Failure to Mature / Accessory Venous Branch Steal)',
    indications: [
      'Non-maturing Brescia-Cimino radiocephalic AV fistula at 6-8 weeks post-surgery with access flow < 500 mL/min (Rule of 6s failure)',
      'Presence of large competitor accessory venous side branches (>3 mm) diverting flow away from the primary cephalic vein cannulation trunk',
      'Failure of fistula vein diameter to reach 6 mm despite patent anastomosis due to branch runoff into deep forearm veins'
    ],
    preOpCriteria: [
      'Duplex ultrasound mapping showing accessory branch diameter > 3 mm stealing >40% of total anastomotic inflow volume',
      'Primary cephalic trunk is patent without high-grade tandem inflow stenosis requiring simultaneous dilatation',
      'Normal renal panel and non-contraindication to iodinated contrast medium',
      'Skin condition along forearm free of active dermatitis or soft-tissue infection'
    ],
    hardware: [
      { category: 'Access Sheath', name: '5F Terumo Radiofocus Introducer Sheath', spec: '5F, 10 cm, radiopaque marker', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: 'Progreat 2.7F / Renegade HI-FLO Microcatheter System', spec: '130 cm, 2.7F, with 0.014 in Glidewire GT', standardStore: 'Angio Suite Store' },
      { category: 'Embolization Coils', name: 'Nester / Tornado Embolization Microcoils', spec: '0.018 in, 3 mm - 6 mm diameter, 5 cm - 14 cm length, fibered platinum', standardStore: 'DDC-14 Central' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug 4 (AVP 4)', spec: '4 mm - 6 mm diameter, through-catheter 0.038 delivery', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '4F Berenstein / Kumpe Catheter', spec: '65 cm, 4F, end-hole taper', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Local infiltration of 1% lidocaine at the mid-forearm puncture site; sterile prep of upper extremity.',
      'Retrograde cannulation of the cephalic vein under ultrasound guidance 5 cm proximal to the side branch origin.',
      'Insert 5F introducer sheath; administer 3,000 IU heparin.',
      'Perform selective digital subtraction fistulography through 4F catheter placed near anastomosis to demonstrate primary conduit caliber and anatomy of competing branches.',
      'Subselect the large accessory branch (e.g. median antebrachial or deep perforator vein) using a 2.7F Progreat microcatheter over a 0.014-inch microwire.',
      'Advance the microcatheter at least 2 cm into the side branch to prevent non-target coil protrusion into the main cannulation trunk.',
      'Deploy 0.018-inch fibered platinum microcoils (or AVP-4 vascular plug) sized 20-30% larger than the vessel diameter until dense packing and complete flow arrest are confirmed.',
      'Repeat completion fistulography confirming total diversion of flow into the main superficial cephalic vein trunk with palpable augmentation of thrill and increased vessel caliber.'
    ],
    complications: [
      'Coil migration into the main cephalic vein conduit or pulmonary arterial circulation',
      'Thrombosis of the primary cephalic trunk due to local thrombogenic cascade',
      'Vascular perforation of fragile thin-walled tributary vein with hematoma',
      'Paresthesia or superficial radial nerve irritation from dense coil nest'
    ],
    maayTariffInr: 34500,
    vendorContacts: [
      'Cook Medical India (+91 98290 44556)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'endoavf_ellipsys_creation',
    name: 'Percutaneous Endovascular AVF Creation (Ellipsys Vascular Access System)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV006A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'Need for permanent hemodialysis vascular access in an ESRD patient with suitable proximity of radial artery and perforating vein at the antecubital fossa',
      'Preservation of patient superficial forearm vasculature without surgical incisions, scarring, or wound healing complications',
      'Patient preference for cosmetically discreet, minimally invasive vascular access creation'
    ],
    preOpCriteria: [
      'Pre-procedure high-resolution duplex vascular ultrasound confirming: Proximal radial artery diameter >= 2.0 mm, Perforating communicating vein diameter >= 2.0 mm, Distance between artery and vein <= 1.5 mm',
      'Cephalic and basilic veins patent with luminal diameter >= 2.5 mm extending through arm',
      'Absence of severe radial artery medial wall calcification (Monckeberg sclerosis)',
      'Normal Allen test confirming palmar arch patency from ulnar arterial circulation'
    ],
    hardware: [
      { category: 'EndoAVF System', name: 'Ellipsys Vascular Access Catheter System', spec: 'Single-operator thermal resistance anastomosis catheter, 6F delivery, dual-probe thermal fusion', standardStore: 'Central IR Store' },
      { category: 'Access Sheath', name: '6F Short Vascular Introducer Sheath', spec: '6F, 7 cm, hemostatic check-valve', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.014 in Coronary / Peripheral Crossing Guidewire', spec: '0.014 in, 180 cm length, Balance Middleweight (BMW) or Runthrough NS', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon Catheter', name: 'Specialty Low Profile / Peripheral PTA Dilatation Balloon', spec: '5.0 mm x 20 mm, 0.014 / 0.018 compatible balloon catheter', standardStore: 'Angio Suite Store' },
      { category: 'Ultrasound System', name: 'High-Frequency Linear Probe Ultrasound (12-18 MHz)', spec: 'Vascular preset with power Doppler and real-time guidance needle guide', standardStore: 'SMS Interventional Cath Lab Store' }
    ],
    techniqueSteps: [
      'Patient placed supine with elbow extended; continuous high-resolution ultrasound visualization of the proximal radial artery and deep communicating perforating vein.',
      'Infiltrate local anesthetic (1% lidocaine with sodium bicarbonate) perivascularly at the cubital fossa puncture target.',
      'Under direct transverse ultrasound guidance, puncture the perforating vein and advance needle through its posterior wall into the adjacent radial artery.',
      'Advance a 0.014-inch guidewire into the radial artery; exchange needle for a 6F Ellipsys access sheath.',
      'Track the Ellipsys thermal-resistance catheter over the wire until the distal probe is positioned inside the radial artery and proximal base in the perforating vein.',
      'Engage and lock the device jaws to capture the coapted walls of the artery and vein; confirm positioning on ultrasound.',
      'Apply thermal fusion energy cycle (typically 2-4 seconds) delivering precise thermal pressure to vaporize tissue and weld the arterial and venous walls together.',
      'Release and withdraw the Ellipsys device; advance a 5.0 mm x 20 mm balloon over the wire across the neo-anastomosis and inflate to nominal pressure to calibrate fistula geometry; confirm flow on Doppler.'
    ],
    complications: [
      'Incomplete anastomosis or failure of fusion requiring surgical cutdown',
      'Anastomotic pseudoaneurysm or antecubital hematoma',
      'Acute radial artery spasm or thrombosis',
      'Steal syndrome / hand ischemia'
    ],
    maayTariffInr: 58000,
    vendorContacts: [
      'Medtronic Interventional India (+91 98292 33445)',
      'Jaipur Surgical / Access Solutions (+91 98290 12345)'
    ]
  },
  {
    id: 'endoavf_wavelinq_creation',
    name: 'Percutaneous Endovascular AVF Creation (WavelinQ 4F EndoAVF System)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV007A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'End-stage kidney disease patient requiring permanent arteriovenous access with favorable parallel ulnar artery / ulnar vein or radial artery / radial vein anatomy',
      'Desire to minimize surgical trauma, surgical site infections, and arm scarring in high-risk dialysis candidates',
      'Presence of adequate deep and superficial venous drainage pathways suitable for subsequent maturation'
    ],
    preOpCriteria: [
      'Pre-op ultrasound mapping meeting WavelinQ criteria: Target artery diameter >= 2.0 mm, Target vein diameter >= 2.0 mm, Vessels closely adjacent (< 1.5 mm distance), Deep brachial and superficial basilic/cephalic drainage patent',
      'Patent ulnar and radial palmar arch verified by Doppler Allen examination',
      'Absence of extensive vessel calcification at the upper third of forearm access location',
      'Adequate coagulation status: INR < 1.4, Platelet count > 75,000/uL'
    ],
    hardware: [
      { category: 'EndoAVF System', name: 'WavelinQ 4F EndoAVF Catheter System', spec: 'Dual-catheter magnetic alignment system with RF electrode (Arterial and Venous catheters)', standardStore: 'Central IR Store' },
      { category: 'RF Generator', name: 'ESU Electrosurgical RF Generator (BD WavelinQ)', spec: 'Standard high-frequency cut burst RF unit', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Access Sheath', name: '4F Glidesheath Slender Introducer Sheaths (2 units)', spec: '4F, 7 cm or 10 cm, radiopaque markers', standardStore: 'Central IR Store' },
      { category: 'Guidewires', name: '0.014 in Specialty Hydrophilic Micro-guidewires (2 units)', spec: '0.014 in, 180 cm length, Whisper / Choice PT', standardStore: 'Angio Suite Store' },
      { category: 'Embolization Coils', name: '0.018 in Detachable Microcoils', spec: '3 mm - 4 mm diameter for brachial vena comitans embolization', standardStore: 'DDC-14 Central' }
    ],
    techniqueSteps: [
      'Patient placed supine on fluoroscopy table with forearm extended; arm prepped and draped under aseptic conditions.',
      'Under ultrasound guidance, obtain retrograde puncture of brachial or radial/ulnar artery and antegrade puncture of accompanying brachial or forearm vein; place 4F sheaths in each.',
      'Administer 5,000 IU unfractionated heparin systemically.',
      'Advance 0.014-inch guidewires into the target artery (ulnar or radial) and target parallel vein.',
      'Introduce the WavelinQ arterial catheter into the artery and venous catheter into the adjacent vein over the wires.',
      'Advance catheters until the rare-earth magnets attract and snap into precise coaptation across the intervening tissue wall, verified under dual-plane fluoroscopy.',
      'Connect the venous catheter to the electrosurgical generator; deliver a discrete 1-second burst of radiofrequency energy to vaporize the intervening arterial and venous walls creating a channel.',
      'Disengage catheters and withdraw; perform balloon dilation of the fistula tract and embolize the accompanying deep brachial vena comitans if necessary to redirect flow to superficial basilic/cephalic veins.'
    ],
    complications: [
      'Radiofrequency burn / non-target thermal injury to adjacent median/ulnar nerves',
      'Arterial dissection or thrombosis at puncture or anastomosis site',
      'Inadequate maturation requiring secondary surgical superficialization or branch coil embolization',
      'Distal hand ischemia (steal syndrome)'
    ],
    maayTariffInr: 62000,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'Jaipur Surgical / Access Solutions (+91 98290 12345)'
    ]
  },
  {
    id: 'avg_arterial_anastomosis_pta',
    name: 'AV Graft Arterial Anastomosis Stenosis Balloon Angioplasty',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV008A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of arteriovenous graft anastomosis)',
    indications: [
      'Significant inflow stenosis (>50% luminal diameter loss) at the arterial graft anastomosis (e.g. brachial-to-ePTFE junction)',
      'Severe drop in access blood flow (Qa < 600 mL/min) with negative arterial pre-pump pressures exceeding -200 mmHg during hemodialysis',
      'Weak or high-pitched thrill over arterial limb of graft with normal soft outflow'
    ],
    preOpCriteria: [
      'Duplex ultrasound demonstrating peak systolic velocity ratio (PSVR) > 3.0 across arterial anastomosis',
      'Preserved distal brachial and radial pulses ruling out underlying native inflow occlusion',
      'Standard renal safety checks: check for severe hyperkalemia or fluid overload prior to procedure',
      'Written informed consent acknowledging risk of distal hand embolization during inflow manipulation'
    ],
    hardware: [
      { category: 'Vascular Sheath', name: '6F Terumo Radifocus Introducer Sheath', spec: '6F, 10 cm, radiopaque marker', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Stiff Hydrophilic Glidewire Advantage', spec: '0.035 in, 150 cm - 180 cm length, angled tip', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon', name: 'Mustang / Ultraverse 0.035 PTA Balloon Catheter', spec: '5.0 mm - 6.0 mm diameter x 20 mm - 40 mm length, 18-24 atm rated burst pressure', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '4F Headhunter / Vertebral Catheter', spec: '65 cm, 4F taper', standardStore: 'Central IR Store' },
      { category: 'Heparin', name: 'Heparin Sodium Injection', spec: '5000 IU/vial', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Sterile preparation of the graft limb; palpate and locate the ePTFE graft loop under ultrasound guidance.',
      'Puncture the graft body in a retrograde direction towards the arterial anastomosis using a 21G micropuncture needle.',
      'Place a 6F sheath into the graft; administer 4,000-5,000 IU systemic heparin.',
      'Advance 4F Berenstein catheter over a 0.035-inch Glidewire into the feeding brachial artery; perform retrograde inflow arteriogram.',
      'Map the exact geometry and extent of fibrointimal hyperplasia narrowing the arterial hood and adjacent brachial artery.',
      'Cross the arterial stenosis carefully with Glidewire Advantage, parking the tip in the proximal brachial artery.',
      'Position a 5 mm or 6 mm non-compliant balloon catheter across the anastomosis; inflate to 16-20 atm for 60 seconds.',
      'Perform completion arteriogram including distal forearm and hand run-off to rule out distal thromboembolism or flap dissection.'
    ],
    complications: [
      'Distal arterial embolization of dislodged intimal plaque or graft thrombus into radial/ulnar arteries',
      'Arterial rupture at the suture line requiring emergency balloon occlusion and surgical revision',
      'Graft limb pseudoaneurysm at the sheath insertion site',
      'Brachial artery dissection'
    ],
    maayTariffInr: 25500,
    vendorContacts: [
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'avg_venous_anastomosis_pta_stent',
    name: 'AV Graft Venous Anastomosis Pseudo-Intimal Hyperplasia Angioplasty & Covered Stenting',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV009A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of arteriovenous graft venous anastomosis)',
    indications: [
      'Severe (>50%) pseudointimal hyperplasia at the graft-vein anastomosis of a loop or straight prosthetic ePTFE graft',
      'Dynamic venous pressure ratio > 0.5 on hemodialysis with prolonged post-dialysis cannulation site bleeding',
      'Recurrent refractory stenosis occurring within 3 months of previous balloon angioplasty or flow-limiting elastic recoil > 50%'
    ],
    preOpCriteria: [
      'Duplex ultrasound identifying localized venous anastomotic stenosis with PSV > 4.0 m/s and graft flow Qa < 600 mL/min',
      'Evaluation of central veins confirming patency of subclavian and brachiocephalic veins to prevent stenting against downstream central outflow obstruction',
      'Platelet count > 50,000/uL, INR < 1.4',
      'Informed consent for permanent endovascular covered stent deployment'
    ],
    hardware: [
      { category: 'Vascular Sheath', name: '7F Terumo Radifocus Introducer Sheath', spec: '7F, 11 cm length, hemostatic check-valve', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Amplatz Super Stiff Guidewire', spec: '0.035 in, 180 cm length, 1 cm floppy J-tip', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Balloon', name: 'ConQuest 40 / Conquest Pro PTA Balloon', spec: '7.0 mm - 8.0 mm x 40 mm, 0.035 in, rated burst pressure 30-40 atm', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Endovascular Covered Stent', name: 'Gore Viabahn Endoprosthesis or Fluency Plus Endovascular Stent Graft', spec: '8 mm - 9 mm diameter x 40 mm - 60 mm length, 7F delivery', standardStore: 'Central IR Store' },
      { category: 'Inflation Device', name: 'BasixTouch 30-atm High Pressure Syringe', spec: '30 atm capability, 30 mL volume gauge syringe', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Sterile preparation of the extremity; ultrasound-guided antegrade puncture of the graft venous limb.',
      'Insert 7F sheath; administer 5,000 IU unfractionated heparin.',
      'Perform baseline fistulography visualizing the graft-to-vein anastomosis, draining basilic/axillary vein, and central venous thoracic drainage.',
      'Cross the hyperplastic venous anastomotic narrowing using a 0.035-inch angled Glidewire and Kumpe catheter; advance into axillary vein and swap to an Amplatz Super Stiff wire.',
      'Perform primary angioplasty with an 8 mm high-pressure balloon inflated to 24 atm; verify persistent severe elastic recoil or deep adventitial notch.',
      'Select a covered stent (Fluency Plus or Gore Viabahn) sized 1 mm larger than the target native outflow vein caliber.',
      'Deploy the covered stent spanning the anastomosis, ensuring at least 1 cm extends into the ePTFE graft and 1 cm into the native vein without crossing uncompromised major branch bifurcations.',
      'Post-dilate the stent graft with an 8 mm balloon to nominal pressure; verify brisk laminar run-off without endoleak or residual narrowing on final DSA.'
    ],
    complications: [
      'Stent migration into central thoracic veins during respiratory excursions',
      'Venous rupture at the distal un-stented landing zone',
      'Acute stent graft thrombosis secondary to low-flow inflow limitations',
      'Late edge restenosis due to progressive intimal hyperplasia'
    ],
    maayTariffInr: 48500,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'W. L. Gore & Associates India (+91 98293 88123)'
    ]
  },
  {
    id: 'avf_acute_clot_pharmacomechanical_thrombectomy',
    name: 'Acute Clotted AV Fistula Pharmacomechanical Thrombectomy (Aspirex/Cleaner) & Lyse-and-Wait',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV010A',
    rghsCode: '693 / 31',
    icd10: 'T82.868A (Thrombosis of vascular dialysis graft/fistula)',
    indications: [
      'Acute cessation of bruit/thrill (<48-72 hours) in an autogenous AV fistula',
      'Urgent necessity to restore vascular access to prevent emergency temporary central venous catheterization',
      'Large thrombus burden filling the main body and outflow segment of the fistula'
    ],
    preOpCriteria: [
      'Complete ultrasound confirmation of absent flow with intraluminal echoes in fistula; no flow on color Doppler',
      'Absence of active systemic bleeding, recent stroke (<3 months), or uncontrolled hypertension (BP > 180/110 mmHg) contraindicating thrombolytics',
      'Serum potassium checked and corrected prior to thrombectomy to prevent hyperkalemia from lysed red cells',
      'Platelet count > 60,000/uL and baseline INR available'
    ],
    hardware: [
      { category: 'Thrombectomy System', name: 'Cleaner 15 Rotational Thrombectomy System or Straub Aspirex S 6F', spec: '6F, rotational S-wire / mechanical Archimedes screw maceration system', standardStore: 'Central IR Store' },
      { category: 'Thrombolytic Agent', name: 'Inj Urokinase / Recombinant Tissue Plasminogen Activator (r-tPA)', spec: '100,000-250,000 IU Urokinase or 2.5-5.0 mg Alteplase', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Vascular Sheath', name: '6F Terumo Radifocus Introducer Sheath (2 units for cross-sheath technique)', spec: '6F, 10 cm, radiopaque marker', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Glidewire Advantage Stiff Wire', spec: '0.035 in, 180 cm length, angled floppy tip', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon', name: 'Mustang High Pressure Balloon Catheter', spec: '6.0 mm - 7.0 mm x 40 mm, 0.035 in, 20 atm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Sterile prep and drape of the entire arm from fingers to shoulder; sonographic survey of clotted fistula length.',
      'Perform dual cross-sheath puncture (criss-cross technique): one sheath placed antegrade towards outflow, second sheath placed retrograde towards arterial anastomosis.',
      'Administer 5,000 IU systemic heparin; pulse-spray or gently infuse 2.5-5.0 mg r-tPA (or 100,000-250,000 IU urokinase) into the thrombus mass (lyse-and-wait for 15-20 minutes).',
      'Introduce the Cleaner rotational thrombectomy catheter or Aspirex mechanical thrombectomy catheter over wire and systematically macerate and aspirate the clot from anastomosis to axillary vein.',
      'Advance 6 mm PTA balloon through the retrograde sheath and perform thrombo-aspiration and balloon maceration of any residual plug at the arterial anastomotic plug.',
      'Perform DSA through both sheaths to detect underlying culprit underlying inflow or outflow stenosis responsible for thrombosis.',
      'Treat identified culprit stenosis with high-pressure balloon angioplasty (6-7 mm Mustang balloon up to 20 atm).',
      'Confirm restoration of brisk biphasic thrill, strong pulse, and unrestricted angiographic outflow into the central veins without residual clot; close sheath sites.'
    ],
    complications: [
      'Pulmonary thromboembolism during venous outflow maceration',
      'Arterial embolization into forearm vessels causing acute hand ischemia',
      'Systemic hemorrhagic complications from lytic agents',
      'Vascular wall rupture during rotational mechanical maceration'
    ],
    maayTariffInr: 38500,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'Rex Medical / Merit Medical (+91 98290 66789)'
    ]
  },
  {
    id: 'avg_acute_clot_fogarty_declot',
    name: 'Acute Clotted Loop Forearm AV Graft Mechanical Thrombectomy & Fogarty Balloon-Assisted Declot',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV011A',
    rghsCode: '693 / 31',
    icd10: 'T82.868A (Thrombosis of arteriovenous graft)',
    indications: [
      'Acute complete thrombosis of loop or straight forearm PTFE arteriovenous graft (<48 hours duration)',
      'Absent bruit and thrill on auscultation/palpation with dialyzer circuit inability to cannulate',
      'Patient scheduled for immediate hemodialysis within next 12 hours'
    ],
    preOpCriteria: [
      'Ultrasound assessment documenting echogenic thrombus completely occluding the graft conduit with absent flow signals',
      'Cardiopulmonary stability to tolerate minor pulmonary micro-embolization',
      'Pre-procedure serum potassium < 5.5 mEq/L (give anti-hyperkalemic measures if elevated)',
      'Absence of active severe bleeding diathesis'
    ],
    hardware: [
      { category: 'Thrombectomy Balloon', name: 'Fogarty Thru-Lumen Embolectomy Balloon / Over-The-Wire Embolectomy Catheter', spec: '4F - 5F, 80 cm length, calibrated compliant latex balloon', standardStore: 'Central IR Store' },
      { category: 'Vascular Sheath', name: '6F Check-Flo Performer Introducer Sheaths (2 units)', spec: '6F, 10 cm length with side arm', standardStore: 'Central IR Store' },
      { category: 'High Pressure Balloon', name: 'Mustang / Conquest PTA Balloon', spec: '7.0 mm x 40 mm, 0.035 in, 24 atm', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: '0.035 in Glidewire Advantage Hydrophilic Wire', spec: '0.035 in, 180 cm length, stiff angled shaft', standardStore: 'Central IR Store' },
      { category: 'Thrombus Aspiration', name: 'Merit ASAP Aspiration Syringe / Large-bore Aspiration Cannula', spec: '50 mL lockable vacuum aspiration kit', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Aseptic preparation of the forearm loop graft; ultrasound localization of the apex and both limbs.',
      'Obtain cross-sheath access: place one 6F sheath into the arterial limb pointing toward the venous anastomosis, and a second 6F sheath into the venous limb pointing toward the arterial anastomosis.',
      'Administer 5,000 IU unfractionated heparin IV.',
      'Advance 0.035-inch Glidewire across venous anastomosis into native draining veins; advance Fogarty balloon over wire beyond venous anastomosis, inflate balloon, and pull back thrombus into the sheath while aspirating through the side port.',
      'Cross the arterial anastomosis with wire and Fogarty balloon; inflate balloon gently in proximal artery and drag the arterial resistant "white clot" plug back into the graft lumen and aspirate forcefully.',
      'Perform thorough aspiration thrombectomy until rapid arterial inflow jet is restored through the arterial sheath.',
      'Perform high-pressure balloon angioplasty (7 mm balloon, 20-24 atm) across the culprit venous anastomosis pseudointimal stenosis.',
      'Perform completion fistulography confirming clear graft lumen, unhindered inflow and outflow, and absence of residual filling defects; remove sheaths and obtain hemostasis.'
    ],
    complications: [
      'Distal arterial embolization causing cold, painful, ischemic fingers',
      'Symptomatic pulmonary thromboembolism',
      'Pseudoaneurysm formation at the sheath puncture sites',
      'Rupture of native outflow vein during Fogarty balloon traction'
    ],
    maayTariffInr: 34500,
    vendorContacts: [
      'Edwards Lifesciences India (+91 98290 88776)',
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)'
    ]
  },
  {
    id: 'avf_pseudoaneurysm_covered_stent_exclusion',
    name: 'AV Fistula Venous Outflow Aneurysm/Pseudoaneurysm Covered Stent Exclusion (Fluency/Viabahn)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV012A',
    rghsCode: '693 / 31',
    icd10: 'I72.1 (Aneurysm/Pseudoaneurysm of artery of upper extremity) / T82.898A',
    indications: [
      'Rapidly expanding, pulsatile pseudoaneurysm (>2.5 cm) or localized false aneurysm in the cannulation outflow zone risking catastrophic skin necrosis and rupture',
      'Impaired overlying skin with thinning, ulceration, spontaneous weeping, or eschar formation',
      'Patient unable to tolerate surgical revision or graft replacement due to severe comorbidities'
    ],
    preOpCriteria: [
      'High-resolution ultrasound measuring pseudoaneurysm neck, sac dimensions, distance to overlying thinned skin, and outflow runoff',
      'Absence of localized purulent skin ulceration or bacteremia (active infection is an absolute contraindication to stent-grafts)',
      'Adequate normal proximal and distal venous landing zones (at least 15 mm healthy vein on either side)',
      'INR < 1.4, Platelets > 70,000/uL'
    ],
    hardware: [
      { category: 'Endovascular Covered Stent', name: 'Gore Viabahn Endoprosthesis or Fluency Plus Covered Stent', spec: '8 mm - 10 mm diameter x 60 mm - 80 mm length, 7F-8F delivery system', standardStore: 'Central IR Store' },
      { category: 'Vascular Sheath', name: '8F Terumo Pinnacle Destination Guiding Sheath', spec: '8F, 25 cm - 45 cm length with radiopaque tip', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: 'Amplatz Super Stiff 0.035 in Guidewire', spec: '0.035 in, 180 cm length, 1 cm floppy J-tip', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon', name: 'Mustang / XXL PTA Dilatation Catheter', spec: '8.0 mm - 10.0 mm x 40 mm, 0.035 in lumen, 14 atm', standardStore: 'Central IR Store' },
      { category: 'Angiographic Catheter', name: '4F Marked Pigtail / Straight Flush Catheter', spec: '65 cm, 1 cm marker bands for calibrated measurement', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Extensive sterile prep of the arm and pseudoaneurysm site; local infiltration avoiding direct entry into the aneurysmal sac.',
      'Remote retrograde or antegrade percutaneous venous puncture at least 6 cm away from the pseudoaneurysm neck.',
      'Place an 8F guiding sheath; administer 5,000 IU unfractionated heparin IV.',
      'Advance calibrated marking catheter over 0.035-inch Glidewire; perform multi-angle roadmap angiography to precisely identify the defect neck and healthy landing zones.',
      'Exchange for an Amplatz Super Stiff guidewire anchored safely in the central subclavian vein.',
      'Select a covered stent graft (Gore Viabahn or Fluency Plus) oversized by 10-15% relative to the healthy non-aneurysmal landing zones and long enough to cover >=15 mm beyond the defect on both sides.',
      'Deploy the covered stent graft across the pseudoaneurysm neck under direct fluoroscopic roadmapping.',
      'Post-dilate the stent graft landing zones with an 8-10 mm PTA balloon; perform completion DSA verifying complete exclusion of the pseudoaneurysm sac with brisk laminar outflow into central circulation.'
    ],
    complications: [
      'Graft stent infection requiring urgent surgical explantation',
      'Endoleak (Type I or Type II) with persistent pseudoaneurysmal pressurization',
      'Stent fracture or compression from accidental external pressure or needle cannulation',
      'Distal migration of covered stent into thoracic veins'
    ],
    maayTariffInr: 51200,
    vendorContacts: [
      'W. L. Gore & Associates India (+91 98293 88123)',
      'BD Bard Peripheral Vascular (+91 98291 77654)'
    ]
  },
  {
    id: 'avf_pseudoaneurysm_thrombin_injection',
    name: 'AV Fistula Pseudoaneurysm Ultrasound-Guided Percutaneous Thrombin Injection',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV013A',
    rghsCode: '693 / 31',
    icd10: 'I72.1 (Aneurysm/Pseudoaneurysm of upper limb vessel) / T82.898A',
    indications: [
      'Iatrogenic cannulation-induced pseudoaneurysm with a narrow neck (<3 mm) and active swirling "yin-yang" color Doppler flow pattern',
      'Expanding false aneurysm not suitable for immediate surgical cutdown or stent-graft placement',
      'Persistent post-dialysis leak with large subcutaneous hematoma maintaining a discrete false lumen communicating with fistula conduit'
    ],
    preOpCriteria: [
      'Duplex ultrasound confirmation of a narrow neck (<3 mm) separating the pseudoaneurysm sac from the native fistula flow lumen',
      'Absence of systemic sepsis, active local cutaneous infection, or bovine thrombin allergy',
      'Patient able to remain immobile during real-time percutaneous needle stabilization',
      'Normal distal extremity perfusion on clinical examination'
    ],
    hardware: [
      { category: 'Thrombin Agent', name: 'Human or Bovine Thrombin (Tisseel / FloSeal Thrombin Component)', spec: '1000 - 5000 IU lyophilized powder reconstituted with sterile saline to 1000 IU/mL', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Injection Needle', name: '21G - 22G Echogenic Spinal Needle / Chiba Needle', spec: '21G/22G, 5 cm - 9 cm length, echogenic tip', standardStore: 'Central IR Store' },
      { category: 'Tuberculin Syringe', name: '1 mL Luer-Lock Low-Dead-Space Syringes (2 units)', spec: '1 mL graduated in 0.01 mL increments', standardStore: 'Angio Suite Store' },
      { category: 'Ultrasound System', name: 'High-Frequency Linear Vascular Probe (10-15 MHz)', spec: 'Vascular Doppler preset with color / spectral analysis', standardStore: 'SMS Interventional Cath Lab Store' }
    ],
    techniqueSteps: [
      'Position patient comfortably with arm supported; sterile preparation and draping of the pseudoaneurysm region.',
      'Real-time Doppler ultrasound assessment to map the neck, depth, and flow velocities of the pseudoaneurysm; measure distance from skin to center of sac.',
      'Reconstitute thrombin to a concentration of 500-1,000 IU/mL in a 1 mL tuberculin syringe.',
      'Under continuous real-time ultrasound guidance, introduce a 22G needle into the pseudoaneurysm sac, keeping the needle tip distinctly away from the neck and native fistula lumen.',
      'Confirm tip position inside the turbulent vortex and aspirate briefly to verify free blood return.',
      'Slowly inject thrombin in 0.1 mL increments (100-200 IU) while continuously observing the color Doppler signal in the sac and native fistula lumen.',
      'Cease injection immediately as soon as echogenic thrombus completely fills the false lumen and color Doppler flow ceases in the sac.',
      'Observe for 10 minutes under continuous Doppler imaging; verify that the main fistula lumen maintains patent, unrestricted flow without thrombus protrusion.'
    ],
    complications: [
      'Accidental non-target thrombin escape into native fistula lumen causing acute access thrombosis',
      'Distal arterial or pulmonary embolization',
      'Severe allergic or anaphylactic reaction to bovine-derived thrombin',
      'Recurrence of flow within the pseudoaneurysm requiring repeat injection or surgery'
    ],
    maayTariffInr: 16500,
    vendorContacts: [
      'Baxter India Healthcare (+91 98290 99887)',
      'SMS Central Pharmacy Supply (+91 98291 55678)'
    ]
  },
  {
    id: 'avf_dass_miller_banding',
    name: 'Dialysis Access Steal Syndrome: Minimally Invasive Flow Reduction (MILLER Banding Technique)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV014A',
    rghsCode: '693 / 31',
    icd10: 'T82.898A (Vascular complication of vascular access / Steal syndrome)',
    indications: [
      'Dialysis Access-Associated Steal Syndrome (DASS) Grade 2 or 3 with resting hand pain, cold pale digits, or ischemic ulceration',
      'High-flow arteriovenous fistula (Qa > 1,500 - 2,000 mL/min) causing high-output cardiac failure',
      'Preservation of fistula patency while restoring distal hand perfusion'
    ],
    preOpCriteria: [
      'Digital plethysmography or pulse oximetry demonstrating diminished/absent digital waveforms that normalize during manual fistula occlusion',
      'Color Doppler flow measurement confirming access volume flow Qa > 1,200 mL/min',
      'Digital Brachial Index (DBI) < 0.6 at baseline improving with temporary fistula compression',
      'Sterile skin at the planned percutaneous banding site in the proximal forearm or arm'
    ],
    hardware: [
      { category: 'PTA Sizing Balloon', name: 'Mustang / Ultraverse Sizing Balloon Catheter', spec: '3.0 mm - 4.5 mm diameter x 20 mm length, 0.035 in wire', standardStore: 'Central IR Store' },
      { category: 'Suture Material', name: 'Ethibond / Prolene 2-0 Braided Polyester or Polypropylene Suture', spec: 'Heavy gauge non-absorbable suture with cutting needle', standardStore: 'Angio Suite Store' },
      { category: 'Puncture Needle', name: '18G Extra-Long Angiocath / Tuohy Needle', spec: '18G, 7 cm length for subcutaneous suture looping', standardStore: 'Central IR Store' },
      { category: 'Access Sheath', name: '5F Terumo Radifocus Introducer Sheath', spec: '5F, 10 cm length', standardStore: 'Central IR Store' },
      { category: 'Continuous Pulse Oximeter', name: 'Digital Finger Pulse Oximetry Sensor', spec: 'Real-time waveform monitor attached to index/thumb', standardStore: 'SMS Interventional Cath Lab Store' }
    ],
    techniqueSteps: [
      'Sterile prep and drape of the fistula arm; attach continuous pulse oximetry sensor to the ipsilateral index finger.',
      'Percutaneous retrograde or antegrade cannulation of the fistula vein 5-8 cm distal to the planned banding site; place a 5F sheath.',
      'Advance a 3.0 mm to 4.0 mm balloon catheter over a 0.035-inch Glidewire and position it in the juxta-anastomotic outflow vein.',
      'Under ultrasound and fluoroscopy, pass a heavy 2-0 non-absorbable suture subcutaneously circumferentially around the vein using an 18G needle pass technique to create a loop.',
      'Inflate the sizing balloon to nominal pressure (6-8 atm) to act as an internal sizing mandrel.',
      'Cinch and tie the subcutaneous suture down tightly against the fully inflated balloon while observing digital pulse oximetry waveform and hand perfusion.',
      'Deflate and remove the sizing balloon; perform fistulography and Doppler flow measurement.',
      'Confirm reduction of access flow to 500-800 mL/min, retention of brisk continuous thrill, and dramatic immediate restoration of strong triphasic digital waveforms.'
    ],
    complications: [
      'Acute complete access thrombosis from over-tightening the band',
      'Under-correction of steal syndrome requiring repeat smaller caliber banding',
      'Erosion of the subcutaneous banding suture through the skin',
      'Infection of the percutaneous suture tract'
    ],
    maayTariffInr: 29500,
    vendorContacts: [
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)',
      'Ethicon Johnson & Johnson India (+91 98291 44332)'
    ]
  },
  {
    id: 'avf_dass_clip_suture_banding',
    name: 'Dialysis Access Steal Syndrome: Percutaneous Balloon-Assisted Banding with Hemostatic Clips/Suture',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV015A',
    rghsCode: '693 / 31',
    icd10: 'T82.898A (Vascular complication of vascular access / Steal syndrome)',
    indications: [
      'High-output heart failure (cardiac index > 3.5 L/min/m2) induced by super-hyperemic AV fistula (Qa > 2,000 mL/min)',
      'Severe ischemic hand symptoms (Marked cyanosis, resting pain, motor weakness) during hemodialysis sessions',
      'Refractory steal syndrome requiring precise titanium clip calibration under radiologic guidance'
    ],
    preOpCriteria: [
      'Echocardiography demonstrating left ventricular volume overload and elevated cardiac output',
      'Duplex ultrasound mapping showing native outflow vein diameter > 10 mm with turbulent excessive flow',
      'Baseline non-invasive digital pressures confirming severe steal (DBI < 0.45)',
      'Adequate soft tissue depth over the intended banding zone'
    ],
    hardware: [
      { category: 'Sizing Balloon', name: 'Ultraverse 0.035 PTA Dilatation Catheter', spec: '3.5 mm - 4.5 mm diameter x 20 mm length', standardStore: 'Central IR Store' },
      { category: 'Hemostatic Clips', name: 'Endo Clip / Ligaclip Titanium Medium-Large Vascular Clips', spec: 'Titanium non-absorbable hemostatic surgical clips with applier', standardStore: 'Central IR Store' },
      { category: 'Vascular Sheath', name: '5F Terumo Radiofocus Sheath', spec: '5F, 10 cm, radiopaque marker', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Glidewire Advantage Hydrophilic Wire', spec: '0.035 in, 150 cm length, stiff angled shaft', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '4F Kumpe / Berenstein Catheter', spec: '65 cm, 4F taper', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient supine on angio table; continuous plethysmographic pulse monitoring on symptomatic fingers.',
      'Percutaneous puncture of the mid-cephalic vein; insert 5F sheath and administer 3,000 IU heparin.',
      'Perform baseline fistulography and measure intra-arterial and venous pressures; calculate baseline Qa.',
      'Advance a 4.0 mm balloon catheter over wire into the proximal outflow vein 2 cm from anastomosis.',
      'Make a small 1 cm transverse cutaneous incision under local anesthesia directly over the vein.',
      'Dissect tissue bluntly to the adventitia; inflate the 4.0 mm balloon to low pressure to serve as an internal calibration mold.',
      'Apply calibrated titanium vascular clips or polyester pledgeted suture around the calibrated vessel wall until snug against the balloon surface.',
      'Deflate balloon, record post-banding fistulogram, confirm elevation of peripheral perfusion pressure, and close tiny skin incision with subcuticular suture.'
    ],
    complications: [
      'Immediate thrombosis of fistula circuit if over-compressed',
      'Clip displacement or migration in surrounding subcutaneous fat',
      'Superficial wound infection or hematoma at incision site',
      'Persistent steal requiring secondary revision or surgical ligation'
    ],
    maayTariffInr: 28500,
    vendorContacts: [
      'Ethicon Johnson & Johnson India (+91 98291 44332)',
      'BD Bard Peripheral Vascular (+91 98291 77654)'
    ]
  },
  {
    id: 'cvs_subclavian_pta_stent',
    name: 'Central Venous Stenosis: Subclavian Vein Balloon Venoplasty & Bare Metal Stenting',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV016A',
    rghsCode: '693 / 31',
    icd10: 'I87.1 (Compression/Stenosis of vein) / T82.858A',
    indications: [
      'High-grade symptomatic subclavian central vein stenosis (>50%) causing massive ipsilateral arm edema, breast swelling, and collateral chest wall engorgement',
      'Markedly elevated dynamic venous pressures on hemodialysis preventing prescribed blood pump rates',
      'Elastic recoil >50% or severe flow-limiting central dissection following high-pressure central venoplasty'
    ],
    preOpCriteria: [
      'Contrast-enhanced CT venogram or Doppler confirming subclavian vein narrowing with prominent collateral circulation',
      'Prior history of ipsilateral subclavian or internal jugular hemodialysis catheter placement',
      'Normal cardiopulmonary status and baseline coagulation tests (INR < 1.5, Platelets > 50,000/uL)',
      'Patient informed regarding lifelong antiplatelet/anticoagulant therapy'
    ],
    hardware: [
      { category: 'Vascular Sheath', name: '8F - 9F Terumo Pinnacle Destination Guiding Sheath', spec: '8F/9F, 45 cm - 65 cm length, radiopaque tip', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Rosen / Amplatz Super Stiff Guidewire', spec: '0.035 in, 260 cm length, 1.5 mm J-tip', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Balloon', name: 'Atlas High Pressure / XXL Balloon Catheter', spec: '10 mm - 12 mm x 40 mm, 0.035 in wire, 18-24 atm', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Self-Expanding Bare Metal Stent', name: 'E-Luminexx / SMART Control Nitinol Stent', spec: '12 mm - 14 mm diameter x 60 mm - 80 mm length, 8F delivery', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F KMP / Kumpe / Pigtail Catheter', spec: '65 cm - 100 cm length, 0.035 in', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Aseptic preparation of the access arm; obtain retrograde or antegrade access into the fistula vein under ultrasound.',
      'Place an 8F long vascular sheath; administer 5,000 IU unfractionated heparin.',
      'Advance a 5F Kumpe catheter and 0.035-inch angled Glidewire into the thoracic central veins; acquire baseline DSA of axillary, subclavian, brachiocephalic veins, and SVC.',
      'Carefully navigate wire across the tight subclavian vein stenosis into the inferior vena cava or right atrium.',
      'Exchange for a 260 cm Amplatz Super Stiff wire; dilate stenosis with a 10 mm - 12 mm high-pressure Atlas balloon catheter up to 18-20 atm.',
      'Assess venogram: if severe elastic recoil >50% or extensive dissection flap is present, select a 12 mm or 14 mm self-expanding nitinol bare stent (e.g. SMART Control / E-Luminexx).',
      'Deploy the nitinol stent across the subclavian stenosis, avoiding the costoclavicular space if possible to prevent thoracic outlet stent crushing.',
      'Post-dilate the stent construct with an 11-12 mm balloon to ensure full expansion and wall apposition; verify rapid unrestricted drainage into the SVC.'
    ],
    complications: [
      'Subclavian vein rupture with massive hemothorax or mediastinal hematoma',
      'Stent crush or fracture from dynamic compression between first rib and clavicle',
      'Stent migration into right atrium or pulmonary artery',
      'Acute central venous stent thrombosis'
    ],
    maayTariffInr: 47500,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'Cordis India Healthcare (+91 98292 22119)'
    ]
  },
  {
    id: 'cvo_brachiocephalic_sharp_recanalization',
    name: 'Central Venous Occlusion: Brachiocephalic Vein Sharp Recanalization (RF Wire / Chiba Needle)',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV017A',
    rghsCode: '693 / 31',
    icd10: 'I87.1 (Central venous obstruction/occlusion) / T82.858A',
    indications: [
      'Chronic total occlusion (CTO) of the brachiocephalic (innominate) vein refractory to blunt hydrophilic wire probing in an ESRD patient with ipsilateral access',
      'Severe incapacitating facial, neck, and upper limb edema (Central Venous Hypertension / Impending SVC syndrome)',
      'Exhaustion of alternative venous access sites requiring access salvage'
    ],
    preOpCriteria: [
      'Pre-procedure contrast CT venography defining the gap distance (<3 cm), angulation, and anatomic relations between occluded vein stump and patent central target',
      'Dual access planned: simultaneous peripheral fistula access and right transfemoral vein access',
      'Coagulation profile normalized: INR < 1.3, Platelet count > 75,000/uL',
      'Signed high-risk informed consent detailing risks of hemopericardium, hemothorax, and cardiac tamponade'
    ],
    hardware: [
      { category: 'Radiofrequency / Sharp Device', name: 'PowerWire RF Elimination Guidewire / 21G Chiba Needle-Through-Catheter', spec: '0.035 in RF crossing wire with RF generator or 21G 100 cm Chiba needle', standardStore: 'Central IR Store' },
      { category: 'Guiding Sheath', name: '8F - 9F Oscor / Cook Flexor Guiding Sheath', spec: '8F/9F, 65 cm - 90 cm length, braided shaft with radiopaque tip', standardStore: 'Central IR Store' },
      { category: 'Endovascular Snare', name: 'Amplatz GooseNeck Snare Kit', spec: '15 mm - 20 mm loop diameter, 100 cm length catheter', standardStore: 'Angio Suite Store' },
      { category: 'Central Stent Graft', name: 'Gore Viabahn / Fluency Plus Covered Stent', spec: '12 mm - 14 mm diameter x 60 mm - 80 mm length', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Balloon', name: 'Atlas High Pressure PTA Balloon Catheter', spec: '10 mm - 12 mm x 40 mm, 0.035 in, 20-24 atm', standardStore: 'SMS Interventional Cath Lab Store' }
    ],
    techniqueSteps: [
      'Dual vascular access obtained: 8F sheath in access arm cephalic vein and 9F sheath in right common femoral vein.',
      'Advance 5F pigtail catheter and 20 mm GooseNeck snare from the femoral access into the superior vena cava, positioning open snare loop at the patent central margin of the occluded innominate vein.',
      'From the upper arm access, advance an 8F guiding sheath and Kumpe catheter to the peripheral stump of the occluded brachiocephalic vein.',
      'Under strict orthogonal biplane fluoroscopy, align the sharp recanalization system (RF wire or 21G needle) aiming directly into the center of the target snare loop.',
      'Deliver sharp puncture / discrete RF energy pulse advancing across the fibrotic occlusion directly into the open femoral snare.',
      'Tighten the GooseNeck snare around the penetrating wire; exteriorize the wire through the femoral sheath to establish continuous stable through-and-through (body-floss) access.',
      'Perform serial balloon dilation across the neo-tract using 6 mm up to 12 mm Atlas high-pressure balloons.',
      'Deploy a 12 mm - 14 mm covered stent graft across the recanalized segment into the SVC to ensure hemostasis; post-dilate and verify brisk central mediastinal flow without extravasation.'
    ],
    complications: [
      'Mediastinal hematoma, aortic puncture, or fatal hemopericardium with cardiac tamponade',
      'Pneumothorax or hemothorax requiring emergent chest tube insertion',
      'Central stent displacement into right heart chambers',
      'Immediate central venous re-occlusion'
    ],
    maayTariffInr: 54000,
    vendorContacts: [
      'Baylis Medical / Boston Scientific (+91 98290 12345)',
      'Cook Medical India (+91 98290 44556)'
    ]
  },
  {
    id: 'cvo_svc_kissing_balloon_stent',
    name: 'Superior Vena Cava (SVC) Stenosis in Dialysis Patient: Kissing Balloon Angioplasty & Bilateral Stenting',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV018A',
    rghsCode: '693 / 31',
    icd10: 'I87.1 (Superior vena cava obstruction/stenosis) / T82.858A',
    indications: [
      'High-grade symptomatic SVC stenosis involving the confluence of both right and left brachiocephalic veins in a bilateral dialysis-dependent patient',
      'Severe SVC syndrome: gross facial plethora, bilateral neck vein distension, dyspnea, and bilateral upper limb swelling',
      'Maintenance of bilateral central drainage to preserve existing or planned contralateral access circuits'
    ],
    preOpCriteria: [
      'Contrast-enhanced multidetector CT chest demonstrating high-grade (>75%) SVC stenosis at or near the innominate bifurcation',
      'Cardiovascular evaluation: ruling out pericardial effusion or extrinsic compressive malignant mass',
      'Coagulation assessment (INR < 1.4, Platelets > 60,000/uL)',
      'Pre-medication with IV hydrocortisone if severe contrast allergy or tracheal compromise present'
    ],
    hardware: [
      { category: 'Vascular Sheaths', name: '8F Terumo Pinnacle Destination Sheaths (2 units)', spec: '8F, 45 cm - 65 cm length', standardStore: 'Central IR Store' },
      { category: 'Guidewires', name: '0.035 in Amplatz Super Stiff Guidewires (2 units)', spec: '0.035 in, 260 cm length, 1.5 mm J-tip', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloons', name: 'Atlas High Pressure PTA Balloon Catheters (2 units)', spec: '10 mm - 12 mm x 40 mm, 0.035 in wire, 20 atm', standardStore: 'Central IR Store' },
      { category: 'Self-Expanding Stents', name: 'Wallstent Endoprosthesis or SMART Nitinol Stents (2 units)', spec: '12 mm - 14 mm diameter x 60 mm length, bilateral kissing deployment', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Inflation Devices', name: 'High-Pressure BasixTouch Inflation Devices (2 units)', spec: '30 atm capability, 30 mL volume syringes', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Simultaneous bilateral access obtained: right arm/vein access and left arm/vein access (or bilateral femoral approaches) with 8F long sheaths.',
      'Administer 5,000 IU heparin IV.',
      'Simultaneously cross the SVC confluence from both right and left sides into the inferior vena cava using 0.035-inch Glidewires and 5F catheters.',
      'Exchange both wires for bilateral 260 cm Amplatz Super Stiff wires.',
      'Position bilateral high-pressure balloons (10-12 mm diameter) across the confluence into the SVC.',
      'Perform simultaneous synchronized "kissing balloon" angioplasty up to 16-18 atm to expand the bifurcated central channel without crushing either limb.',
      'Simultaneously advance two 12 mm or 14 mm self-expanding stents across the right and left innominate veins, extending side-by-side into the main SVC trunk (kissing stent configuration).',
      'Deploy stents simultaneously; perform synchronized kissing post-dilation with balloons; confirm unobstructed bilateral central outflow into right atrium.'
    ],
    complications: [
      'SVC rupture with rapidly fatal mediastinal hemopericardium',
      'Stent migration into right atrium or ventricle with tricuspid valve entrapment',
      'Acute in-stent central venous thrombosis',
      'Persistent contralateral venous obstruction if kissing symmetry is lost'
    ],
    maayTariffInr: 59500,
    vendorContacts: [
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'hero_graft_endovascular_deployment',
    name: 'Dialysis Access HeRO (Hemodialysis Reliable Outflow) Graft Endovascular Deployment & Outflow Bypass',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV019A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Vascular access complications / Central venous occlusion)',
    indications: [
      'Catheter-dependent hemodialysis patient with bilateral central venous stenosis or occlusion who has exhausted all conventional upper extremity peripheral fistula/graft options',
      'Recurrent central venous stenosis rapidly failing endovascular balloon venoplasty and covered stenting',
      'Need to convert a bridging tunneled dialysis catheter to a fully subcutaneous long-term graft circuit'
    ],
    preOpCriteria: [
      'Pre-procedure fluoroscopy and venography confirming target right internal jugular vein access route leading across central occlusion into right atrium',
      'Arterial mapping confirming patent brachial artery diameter >= 3.0 mm for arterial inflow anastomosis',
      'Echocardiography confirming absence of large right atrial vegetative thrombus or tricuspid endocarditis',
      'Normal platelet count (>60,000/uL) and INR < 1.4'
    ],
    hardware: [
      { category: 'HeRO Graft System', name: 'Merit Medical HeRO Vascular Access Device System', spec: 'Venous Outflow Component (19F OD, 5 mm ID silicone/nitinol) + Arterial Graft Component (6 mm ePTFE) + Titanium Connector', standardStore: 'Central IR Store' },
      { category: 'Delivery Sheath', name: '16F - 18F HeRO Introducer Sheath and Dilator Set', spec: 'Tear-away or dedicated delivery sheath for Venous Outflow Component', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Guidewire', name: '0.035 in Amplatz Extra Stiff Guidewire', spec: '0.035 in, 260 cm length, 3 mm J-tip', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon', name: 'XXL / Atlas High-Pressure Balloon Catheter', spec: '10 mm - 12 mm x 40 mm, 0.035 in', standardStore: 'Central IR Store' },
      { category: 'Heparin', name: 'Heparin Sodium Injection', spec: '5000 IU/vial', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'General anesthesia or monitored deep conscious sedation; sterile prep from neck down to upper chest and forearm.',
      'Percutaneous ultrasound-guided access of right internal jugular vein; cross central venous occlusion into the right atrium with 0.035-inch stiff wire.',
      'Dilate the central venous tract using serial dilators up to 16F/18F; insert the dedicated HeRO delivery sheath.',
      'Advance the 19F HeRO Venous Outflow Component over the stiff wire until its radiopaque marker band sits in the mid-to-upper right atrium.',
      'Surgically expose brachial artery via a small incision in the upper arm or antecubital fossa; create subcutaneous tunnel from upper arm to deltopectoral subclavicular pocket.',
      'Tunnel the 6 mm ePTFE arterial graft component and connect it securely to the titanium connector of the venous outflow component in the pocket.',
      'Perform end-to-side surgical anastomosis between the arterial graft component and the brachial artery; administer systemic heparin.',
      'De-air and declamp graft; verify continuous low-resistance arterial thrill and unobstructed central venous discharge into right atrium on fluoroscopy.'
    ],
    complications: [
      'Right atrial perforation or cardiac tamponade during stiff venous component manipulation',
      'Bacteremia / deep graft sepsis requiring complete system explantation',
      'Arterial limb steal syndrome with hand ischemia',
      'Acute early mechanical kinking at the titanium connector junction'
    ],
    maayTariffInr: 65000,
    vendorContacts: [
      'Merit Medical Systems (+91 98290 66789)',
      'Jaipur Surgical / Access Solutions (+91 98290 12345)'
    ]
  },
  {
    id: 'cvo_left_bc_outback_reentry',
    name: 'Left Brachiocephalic Vein Chronic Total Occlusion (CTO) Crossing with Outback / Frontrunner Re-Entry Catheter',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV020A',
    rghsCode: '693 / 31',
    icd10: 'I87.1 (Central vein occlusion) / T82.858A',
    indications: [
      'Long-segment chronic total occlusion (>4 cm) of the left brachiocephalic vein refractory to standard hydrophilic and stiff crossing wires',
      'Severe left arm vascular access hypertension risking rupture of dialysis fistula',
      'Failure of conventional subintimal recanalization with false-lumen tracking outside the true venous pathway'
    ],
    preOpCriteria: [
      'Contrast-enhanced 3D CT venogram detailing the relationship of the occluded left innominate vein to the ascending aorta, trachea, and sternum',
      'Platelet count > 75,000/uL, normal PT/INR, absence of active systemic sepsis',
      'High-resolution biplane fluoroscopy room availability',
      'Dual transfemoral and left arm access planned'
    ],
    hardware: [
      { category: 'Re-entry System', name: 'Cordis Outback Elite Re-Entry Catheter or Frontrunner CTO Catheter', spec: '120 cm length, curved nitinol retractable needle tip, 0.014 in delivery', standardStore: 'Central IR Store' },
      { category: 'Guiding Sheath', name: '8F Flexor Guiding Sheath with Ansel Curve', spec: '8F, 90 cm length, radiopaque tip', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Target Snare', name: 'EN Snare / Amplatz GooseNeck Snare', spec: '15 mm - 20 mm tri-petal or loop snare, 100 cm length', standardStore: 'Angio Suite Store' },
      { category: 'Endovascular Stent Graft', name: 'Gore Viabahn Endoprosthesis', spec: '10 mm - 12 mm diameter x 80 mm length', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.014 in Whisper / Command ES Guidewire', spec: '0.014 in, 300 cm exchange length, stiff radiopaque tip', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Obtain simultaneous left upper arm access (6F sheath) and right common femoral vein access (8F sheath).',
      'Advance 20 mm snare from the femoral sheath into the confluence of the SVC and right atrium to serve as the fluoroscopic target.',
      'Introduce 8F Ansel guiding sheath from left arm access to the proximal fibrous stump of the left brachiocephalic vein.',
      'Advance Outback Elite re-entry catheter through the sheath into the subintimal occlusion plane.',
      'Under fluoroscopic roadmap alignment in two orthogonal views (LAO 30 and RAO 30), rotate the Outback marker until the "L-T" orientation faces directly into the target snare.',
      'Deploy the Outback nitinol needle across the occlusion wall directly into the lumen of the SVC target snare; advance 0.014-inch guidewire through the needle.',
      'Cinch snare around the wire and pull down into IVC; exchange for 0.035-inch Amplatz wire to establish stable through-and-through circuit.',
      'Perform serial dilation with 8-10 mm balloons; deploy a 10 mm - 12 mm Gore Viabahn covered stent to seal the recanalized channel and verify brisk left-to-right central drainage.'
    ],
    complications: [
      'Transmural aortic puncture or pericardial extravasation causing cardiac tamponade',
      'Mediastinal hematoma requiring emergency thoracic exploration',
      'Carotid-subclavian arterial trunk injury',
      'Acute thrombosis of recanalized central vein'
    ],
    maayTariffInr: 56500,
    vendorContacts: [
      'Cordis India Healthcare (+91 98292 22119)',
      'W. L. Gore & Associates India (+91 98293 88123)'
    ]
  },
  {
    id: 'permcath_right_ijv_placement',
    name: 'Tunnelled Cuffed Dual-Lumen Hemodialysis Catheter (Permcath) Placement via Right Internal Jugular Vein',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV021A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'End-stage renal disease requiring intermediate-to-long term hemodialysis access while awaiting maturation of permanent AV fistula/graft',
      'Acute kidney injury requiring dialytic therapy exceeding 2-3 weeks',
      'Permanent vascular access failure in patients who are not peritoneal dialysis candidates'
    ],
    preOpCriteria: [
      'Ultrasound pre-scan of right internal jugular vein confirming patency, collapsibility, caliber > 8 mm, and absence of intraluminal thrombus',
      'Platelets > 50,000/uL, INR < 1.5, aPTT within acceptable limits',
      'Normal cardiopulmonary status without severe active orthopnea',
      'Absence of skin erythema, boils, or infection in the right anterior chest wall tunnel area'
    ],
    hardware: [
      { category: 'Tunnelled Catheter Kit', name: 'Palindrome / Split-Cath / Permcath Dual Lumen Catheter Kit', spec: '14.5F, 19 cm - 28 cm tip-to-cuff length, silicone/carbothane, with peel-away sheath', standardStore: 'Central IR Store' },
      { category: 'Micropuncture Access Set', name: 'Micropuncture Introducer Set', spec: '21G echogenic needle, 0.018 in nitinol wire, 4F coaxial dilator', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: '0.035 in J-Tip Stiff Guidewire', spec: '0.035 in, 145 cm length, 3 mm J-tip', standardStore: 'Central IR Store' },
      { category: 'Catheter Tunneler', name: 'Malleable Stainless Steel Subcutaneous Tunneler', spec: 'Threaded barbed or sleeve tip connector', standardStore: 'Central IR Store' },
      { category: 'Antimicrobial Lock', name: 'Taurolidine / Heparin Catheter Lock Solution', spec: '5000 IU/mL Heparin or TauroLock ampoules', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient placed in 15-degree Trendelenburg position; sterile skin preparation and chlorhexidine draping of right neck and anterior chest wall.',
      'Real-time ultrasound guidance using 21G needle to puncture the mid-to-lower right internal jugular vein; advance 0.018-inch wire and exchange for 0.035-inch J-tip guidewire.',
      'Fluoroscopically verify wire position in the inferior vena cava.',
      'Infiltrate local anesthetic (1% lidocaine with adrenaline) along planned subcutaneous tract on anterior chest wall below clavicle.',
      'Create 5 mm incision at chest exit site; tunnel the catheter from exit site to neck puncture site using malleable tunneler, positioning Dacron cuff 2-3 cm inside tunnel.',
      'Dilate venous puncture tract serially; introduce 15F-16F valved peel-away sheath into right internal jugular vein over wire.',
      'Advance catheter through peel-away sheath under fluoroscopy until tip reaches mid-to-lower right atrium (cavoatrial junction); peel away the sheath.',
      'Aspirate briskly from both arterial (red) and venous (blue) lumens (minimum 20 mL without resistance); flush with saline, instill concentrated heparin lock according to exact lumen priming volumes, and close neck puncture site.'
    ],
    complications: [
      'Accidental common carotid artery puncture with expanding neck hematoma',
      'Air embolism during sheath peel-away or deep breathing',
      'Pneumothorax / hemothorax',
      'Cardiac arrhythmia triggered by guide wire or catheter tip in right ventricle'
    ],
    maayTariffInr: 18500,
    vendorContacts: [
      'Medtronic Interventional India (+91 98292 33445)',
      'BD Bard Access Systems (+91 98291 77654)'
    ]
  },
  {
    id: 'permcath_left_ijv_placement',
    name: 'Left Internal Jugular Vein Permcath Placement with Fluoroscopic Steering & Bend Relief',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV022A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'End-stage renal disease needing tunnelled hemodialysis catheter access with thrombosed, stenosed, or exhausted right internal jugular vein',
      'Need to avoid left subclavian catheterization to preserve left upper extremity vascular access potential',
      'Long-term dialysis access requirement in a patient with a previously infected right-sided neck access'
    ],
    preOpCriteria: [
      'Duplex ultrasound pre-scan confirming left internal jugular vein patency, diameter > 8 mm, and respiratory caliber variation',
      'Review of chest radiograph to evaluate mediastinal shift and tortuosity of the left brachiocephalic vein crossing',
      'Platelet count > 50,000/uL, INR < 1.4',
      'Selection of a longer catheter length (typically 24 cm - 28 cm tip-to-cuff) to account for longer course across left innominate vein'
    ],
    hardware: [
      { category: 'Tunnelled Catheter Kit', name: 'Palindrome / Split-Cath Left-Sided Long Dual Lumen Catheter Kit', spec: '14.5F, 24 cm - 28 cm tip-to-cuff length, with peel-away sheath', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Rosen / Amplatz Extra Stiff Guidewire', spec: '0.035 in, 180 cm length, J-tip', standardStore: 'Central IR Store' },
      { category: 'Micropuncture Kit', name: '21G Echogenic Micropuncture Introducer Set', spec: '21G needle, 0.018 in nitinol wire, 4F/5F dilator', standardStore: 'Angio Suite Store' },
      { category: 'Catheter Tunneler', name: 'Surgical Metal Tunneler with Bend Adapter', spec: 'Gentle arc tunneler to prevent acute kink at neck entry', standardStore: 'Central IR Store' },
      { category: 'Heparin Lock', name: 'Heparin Sodium Concentrated Lock Solution', spec: '5000 IU/mL, sterile ampoules', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Trendelenburg positioning; full chlorhexidine antiseptic preparation of left neck and anterior chest.',
      'Ultrasound-guided puncture of left internal jugular vein using 21G echogenic needle; advance 0.018-inch wire followed by 4F co-axial dilator.',
      'Advance 0.035-inch stiff Amplatz wire under fluoroscopy through left brachiocephalic vein down into the SVC and inferior vena cava; check for sharp angles at innominate junction.',
      'Infiltrate lidocaine over left chest wall; create smooth, wide-arc subcutaneous tunnel to prevent kinking at the acute left internal jugular entry turn.',
      'Tunnel the long (24-28 cm) dual lumen catheter from anterior chest up to neck incision; position Dacron cuff well inside tunnel.',
      'Serially dilate the left IJV entry tract; advance 16F valved peel-away sheath over the stiff wire into the upper SVC.',
      'Introduce the catheter through the sheath; under continuous fluoroscopy, verify that the catheter tip lies vertically straight in the mid-to-lower right atrium without hooking onto lateral wall.',
      'Aspirate and flush both lumens, ensure zero positional flow variation, lock with concentrated heparin according to stated internal volumes, and close incisions.'
    ],
    complications: [
      'Catheter kinking at the acute left internal jugular-to-innominate junction',
      'Left brachiocephalic vein or SVC lateral wall perforation with hemothorax',
      'Left thoracic duct injury causing chylothorax / lymph fistula',
      'Common carotid artery accidental puncture'
    ],
    maayTariffInr: 19500,
    vendorContacts: [
      'Medtronic Interventional India (+91 98292 33445)',
      'BD Bard Access Systems (+91 98291 77654)'
    ]
  },
  {
    id: 'permcath_external_jugular_placement',
    name: 'External Jugular Vein Cutdown / Percutaneous Permcath Placement',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV023A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'Exhausted or occluded bilateral internal jugular veins with patent superficial external jugular veins',
      'Desire to preserve internal jugular vein for future surgical bypass or permanent fistula drainage',
      'High-risk neck anatomy (tracheostomy, radical neck dissection, or severe cervical hematoma)'
    ],
    preOpCriteria: [
      'High-resolution ultrasound demonstrating external jugular vein caliber >= 4.5-5.0 mm with Valsalva maneuver and unobstructed drainage into subclavian vein',
      'Fluoroscopy pre-evaluation ruling out sharp or tortuous confluence valve at the external jugular-subclavian junction',
      'Normal coagulation profile: INR < 1.4, Platelets > 60,000/uL',
      'Adequate patient tolerance for head-down positioning during vein cannulation'
    ],
    hardware: [
      { category: 'Tunnelled Catheter Kit', name: 'Dual Lumen Split-Cath / Permcath Kit', spec: '14.5F, 19 cm - 24 cm tip-to-cuff length with 16F peel-away sheath', standardStore: 'Central IR Store' },
      { category: 'Hydrophilic Steerable Wire', name: '0.035 in Terumo Glidewire Advantage', spec: '0.035 in, 180 cm length, angled tip', standardStore: 'Angio Suite Store' },
      { category: 'Micropuncture Access Set', name: '21G Echogenic Micropuncture Set', spec: '21G needle, 0.018 in nitinol wire, 4F co-axial sheath', standardStore: 'Central IR Store' },
      { category: 'Vascular Serial Dilators', name: 'Cook 8F - 16F Central Venous Dilator Set', spec: 'Smooth progressive French size dilators', standardStore: 'Central IR Store' },
      { category: 'Heparin Lock', name: 'Heparin Sodium Lock Solution', spec: '5000 IU/mL ampoules', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient supine in Trendelenburg position; neck turned slightly to contralateral side; full sterile preparation.',
      'Under ultrasound guidance, directly puncture the prominent external jugular vein in the lower cervical region using a 21G echogenic needle.',
      'Pass 0.018-inch wire through the junction into the subclavian vein; advance 4F co-axial sheath.',
      'Under fluoroscopic control, carefully navigate an angled 0.035-inch Glidewire across the venous valves at the subclavian confluence into the SVC and IVC.',
      'Exchange for a stiff Amplatz guidewire to straighten the tortuous junction.',
      'Infiltrate lidocaine on the infraclavicular chest wall; tunnel the 14.5F cuffed catheter to the external jugular puncture site.',
      'Progressively dilate the external jugular tract; insert the 15F-16F peel-away sheath over the stiff wire into the SVC.',
      'Deliver catheter through sheath into the right atrium; peel away the sheath, confirm free aspiration (>20 mL) from both ports, lock with heparin, and secure exit site.'
    ],
    complications: [
      'Inability to negotiate the acute external jugular-subclavian valve/junction',
      'External jugular vein tear or hematoma at the clavicular junction',
      'Pneumothorax from low clavicular puncture angle',
      'Catheter tip malfunction due to junctional kinking'
    ],
    maayTariffInr: 18500,
    vendorContacts: [
      'BD Bard Access Systems (+91 98291 77654)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'permcath_transfemoral_placement',
    name: 'Transfemoral / Common Femoral Vein Tunnelled Cuffed Hemodialysis Catheter Placement',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV024A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'Exhausted thoracic and cervical venous access (bilateral internal jugular, subclavian, and innominate occlusions)',
      'Severe superior vena cava syndrome precluding upper body catheter insertion',
      'Urgent need for hemodialysis access in an ambulatory dialysis patient awaiting renal transplant'
    ],
    preOpCriteria: [
      'Color Doppler ultrasound of common femoral veins confirming patency, compressibility, and caliber > 9 mm without deep vein thrombosis (DVT)',
      'Assessment of groin skin hygiene; absence of fungal intertrigo, active ulcers, or morbid panniculus infection',
      'Platelets > 50,000/uL, INR < 1.4',
      'Catheter tip-to-cuff length selected (36 cm - 55 cm long femoral catheter) to ensure catheter tip resides in the mid-to-upper IVC'
    ],
    hardware: [
      { category: 'Long Tunnelled Catheter Kit', name: 'Palindrome / Split-Cath XL Long Femoral Catheter Kit', spec: '14.5F, 40 cm - 55 cm tip-to-cuff length, carbothane dual lumen with 16F peel-away sheath', standardStore: 'Central IR Store' },
      { category: 'Micropuncture Access Set', name: '21G Echogenic Needle and Dilator', spec: '21G needle, 0.018 in wire, 4F/5F dilator', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: '0.035 in Amplatz Super Stiff Guidewire', spec: '0.035 in, 180 cm length, J-tip', standardStore: 'Central IR Store' },
      { category: 'Femoral Tunneler', name: 'Long Malleable Subcutaneous Tunneler', spec: 'Stainless steel 35 cm tunneler', standardStore: 'Central IR Store' },
      { category: 'Heparin Lock', name: 'Heparin Sodium Lock Solution', spec: '5000 IU/mL ampoules', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient supine; extensive chlorhexidine preparation of right groin and anterior mid-thigh.',
      'Ultrasound-guided puncture of the right common femoral vein below the inguinal ligament using a 21G needle.',
      'Advance 0.035-inch Amplatz Super Stiff guidewire under fluoroscopy into the suprarenal IVC or right atrium.',
      'Local anesthesia over the anterolateral mid-thigh (at least 10-12 cm below the inguinal crease to avoid moist groin fold).',
      'Tunnel the long (40-55 cm) catheter subcutaneously from the mid-thigh exit site upward to the femoral vein entry site, ensuring Dacron cuff is buried deep in the thigh tunnel.',
      'Progressively dilate femoral venous tract; insert 16F peel-away sheath over the stiff wire into the lower IVC.',
      'Advance catheter through sheath under fluoroscopic control until tips reach the mid-to-upper inferior vena cava (well above renal veins, below right atrium).',
      'Peel away sheath; verify rapid, pulsatile, resistance-free aspiration from both ports; flush and instill heparin locks; suture catheter securely to mid-thigh.'
    ],
    complications: [
      'Femoral artery accidental puncture with retroperitoneal hematoma',
      'Groin site catheter-related bloodstream infection (CRBSI) or tunnel tract infection',
      'Deep vein thrombosis of iliofemoral system',
      'Catheter tip migration or IVC wall suction during hemodialysis'
    ],
    maayTariffInr: 21500,
    vendorContacts: [
      'Medtronic Interventional India (+91 98292 33445)',
      'BD Bard Access Systems (+91 98291 77654)'
    ]
  },
  {
    id: 'permcath_translumbar_ivc_placement',
    name: 'Translumbar Inferior Vena Cava (IVC) Tunnelled Hemodialysis Catheter Placement for Exhausted Vascular Access',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV025A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (End-stage renal disease)',
    indications: [
      'Complete exhaustion of all conventional upper extremity, thoracic, and iliofemoral central venous access routes',
      'Occlusion of both internal jugular, external jugular, subclavian, and femoral veins in an ESRD patient requiring life-sustaining hemodialysis',
      'Salvage catheterization in end-stage access patients who are not candidates for peritoneal dialysis or urgent renal transplant'
    ],
    preOpCriteria: [
      'Contrast or non-contrast CT abdomen confirming patency of the infrarenal inferior vena cava with caliber >= 15 mm',
      'Platelets > 75,000/uL, INR < 1.3, normal thromboelastogram parameters',
      'Absence of severe retroperitoneal fibrosis, aortic aneurysm, or local lumbar cutaneous infection',
      'High-risk procedural consent signed by family and patient'
    ],
    hardware: [
      { category: 'Long Tunnelled Catheter', name: 'Split-Cath XL / Palindrome Translumbar Hemodialysis Catheter', spec: '14.5F, 55 cm length, dual lumen carbothane catheter with Dacron cuff', standardStore: 'Central IR Store' },
      { category: 'Translumbar Access Set', name: 'Cook Translumbar Access Set / 21G Chiba Long Needle', spec: '21G, 15 cm - 20 cm echogenic needle with 0.018 in wire and 4F/5F coaxial dilator', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Guidewire', name: 'Amplatz Super Stiff / Extra Stiff 0.035 in Wire', spec: '0.035 in, 260 cm length, 3 mm J-tip', standardStore: 'Angio Suite Store' },
      { category: 'Peel-Away Sheath', name: '16F Valved Central Venous Tear-Away Sheath', spec: '16F, 20 cm length', standardStore: 'Central IR Store' },
      { category: 'Tunneler', name: 'Extended Length Malleable Stainless Steel Tunneler', spec: '40 cm length with catheter sleeve adapter', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed in prone or left lateral decubitus position on the fluoroscopy table under conscious sedation or general anesthesia.',
      'Identify landmark: right flank, approximately 8-10 cm to the right of midline, between the right iliac crest and the 12th rib.',
      'Under fluoroscopic guidance (L2-L3 vertebral level), advance a 21G 15-20 cm needle angled 45 degrees anteriorly and medially towards the anterior aspect of the vertebral body.',
      'Confirm intravenous entry into IVC by aspiration of dark venous blood and contrast cavogram showing rapid opacification of the infrarenal IVC.',
      'Advance 0.018-inch wire, followed by co-axial 5F dilator; advance 0.035-inch Amplatz Extra Stiff wire deeply into the right atrium.',
      'Create a lateral flank incision and fashion a smooth subcutaneous tunnel pointing downward toward the anterior abdominal wall or iliac crest.',
      'Dilate the retroperitoneal translumbar tract serially up to 16F; insert a 16F peel-away sheath over the wire.',
      'Introduce the 55 cm dual-lumen catheter through the peel-away sheath into the IVC until the tip reaches the right atrium; peel the sheath away, test aspiration, lock with heparin, and secure.'
    ],
    complications: [
      'Retroperitoneal hemorrhage or lumbar artery puncture requiring emergency embolization',
      'Pneumothorax / hemothorax from high pleural entry',
      'Renal pelvis or ureteric perforation',
      'Catheter displacement or kink at the deep muscular fascia'
    ],
    maayTariffInr: 32500,
    vendorContacts: [
      'Cook Medical India (+91 98290 44556)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'permcath_transhepatic_ivc_placement',
    name: 'Transhepatic IVC Tunnelled Hemodialysis Catheter Placement',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV026A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'Exhausted classical venous access pathways (bilateral jugular, subclavian, femoral veins occluded) where translumbar approach is contraindicated or previously failed',
      'Severe inferior vena cava occlusion below hepatic vein confluence with patent suprahepatic IVC and hepatic veins',
      'Salvage access for ongoing critical hemodialysis therapy'
    ],
    preOpCriteria: [
      'Pre-procedure contrast CT or Doppler ultrasound confirming patent middle or right hepatic vein and patent suprahepatic IVC into right atrium',
      'Liver function tests acceptable (Total bilirubin < 2.5 mg/dL, AST/ALT < 3x upper normal limit)',
      'Coagulation parameters: INR < 1.3, Platelet count > 80,000/uL, normal fibrinogen',
      'Informed consent acknowledging liver bleeding, bile leak, and catheter dislodgement risks'
    ],
    hardware: [
      { category: 'Tunnelled Catheter Kit', name: 'Palindrome / Split-Cath 14.5F Tunnelled Catheter Kit', spec: '14.5F, 28 cm - 32 cm tip-to-cuff length, dual lumen silicone/carbothane', standardStore: 'Central IR Store' },
      { category: 'Transhepatic Access Set', name: 'NeFF Percutaneous Access Set (Cook)', spec: '21G needle, 0.018 in nitinol wire, 4F/6F co-axial dilator', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Guidewire', name: '0.035 in Amplatz Super Stiff Wire', spec: '0.035 in, 180 cm length, J-tip', standardStore: 'Angio Suite Store' },
      { category: 'Peel-Away Sheath', name: '16F Valved Peel-Away Introducer Sheath', spec: '16F, 15 cm length with lockable hemostatic valve', standardStore: 'Central IR Store' },
      { category: 'Embolic Material (for track)', name: 'Gelfoam Slurry / Tornado Embolization Coils', spec: 'For tract embolization in case of bleeding/revision', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient supine on the fluoroscopy table under monitored conscious sedation; sterile prep of the right mid-axillary chest wall and upper abdomen.',
      'Under real-time ultrasound guidance, select a peripheral branch of the middle or right hepatic vein through the 10th or 11th intercostal space.',
      'Puncture the hepatic vein branch using a 21G echogenic needle; advance 0.018-inch wire through the hepatic vein into the suprahepatic IVC and right atrium.',
      'Exchange for a 0.035-inch Amplatz Super Stiff guidewire parked securely in the mid right atrium.',
      'Infiltrate lidocaine over the right lower anterior chest wall or epigastrium; create a subcutaneous tunnel downward towards the right costal margin.',
      'Tunnel the catheter from the exit site to the hepatic entry tract, ensuring the Dacron cuff resides in the subcutaneous tract.',
      'Dilate the transhepatic parenchymal tract serially; advance the 16F peel-away sheath over the stiff wire into the suprahepatic IVC.',
      'Advance the dual-lumen catheter through the peel-away sheath until the tip floats freely in the mid-right atrium; peel the sheath, confirm brisk blood return (>25 mL), heparin lock, and close skin.'
    ],
    complications: [
      'Intrahepatic / subcapsular hematoma or fatal intraperitoneal hemorrhage',
      'Biliary peritonitis or biloma formation from transhepatic bile duct puncture',
      'Catheter tip migration or retraction during diaphragmatic respiratory excursions',
      'Hemothorax or pneumothorax'
    ],
    maayTariffInr: 34500,
    vendorContacts: [
      'Cook Medical India (+91 98290 44556)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'permcath_transcollateral_intercostal_placement',
    name: 'Transcollateral / Transcostal Intercostal Vein Access for Salvage Hemodialysis Catheter',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV027A',
    rghsCode: '693 / 31',
    icd10: 'Z99.2 (Dependence on renal dialysis) / N18.6 (ESRD)',
    indications: [
      'Complete central occlusion of all primary thoracic and abdominal venous trunks in a desperate vascular access scenario',
      'Hypertrophied intercostal vein or azygos/hemi-azygos venous collateral network demonstrating continuous outflow into the SVC or right atrium',
      'Life-saving bridge for dialysis when all extremity and conventional thoracic routes are non-negotiable'
    ],
    preOpCriteria: [
      'High-resolution contrast CT chest showing hypertrophied intercostal or paravertebral vein collateral >= 6-7 mm entering patent azygos arch or SVC',
      'Platelet count > 80,000/uL, normal coagulation profile (INR < 1.3)',
      'Direct cross-sectional multiplanar planning to plot needle trajectory avoiding pulmonary parenchyma and intercostal neurovascular bundles',
      'Detailed multidisciplinary discussion and informed consent'
    ],
    hardware: [
      { category: 'Tunnelled Catheter Kit', name: 'Dual Lumen Silicone Hemodialysis Catheter Kit', spec: '12.5F - 14F, 24 cm - 28 cm length with peel-away sheath', standardStore: 'Central IR Store' },
      { category: 'Micropuncture Access Set', name: '21G Echogenic Needle Micropuncture Set', spec: '21G, 10 cm needle with 0.018 in wire and 4F dilator', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Guidewire', name: '0.035 in Rosen / Stiff Glidewire Advantage', spec: '0.035 in, 180 cm length, angled tip', standardStore: 'Angio Suite Store' },
      { category: 'Peel-Away Sheath', name: '14F - 15F Tear-Away Introducer Sheath', spec: '14F/15F, 15 cm length', standardStore: 'Central IR Store' },
      { category: 'Heparin Lock', name: 'Heparin Sodium Concentrated Lock Solution', spec: '5000 IU/mL', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient placed in prone or semi-lateral oblique position; real-time ultrasound and fluoroscopic landmarking of the targeted intercostal collateral.',
      'Local anesthetic infiltration along the superior border of the rib to avoid the intercostal nerve and artery located at the inferior rib groove.',
      'Under combined ultrasound/fluoroscopic guidance, advance a 21G needle into the lumen of the dilated intercostal collateral vein.',
      'Aspirate dark venous blood; inject contrast confirming collateral connection into the azygos trunk and superior vena cava.',
      'Advance 0.018-inch nitinol wire into the azygos vein and SVC; exchange for a 0.035-inch stiff wire.',
      'Create a subcutaneous tunnel along the chest wall toward the flank or anterior thorax; tunnel the catheter and position the retention cuff.',
      'Serially dilate the chest wall track; advance 14F peel-away sheath into the collateral channel over the stiff wire.',
      'Deploy the catheter through the sheath with the tip positioned in the azygos arch or cavoatrial junction; check flow aspiration, lock with heparin, and secure.'
    ],
    complications: [
      'Pneumothorax requiring urgent chest tube decompression',
      'Intercostal artery laceration causing intractable chest wall / pleural hemorrhage',
      'Collateral vein rupture / dissection during tract dilation',
      'Intercostal neuralgia from nerve irritation'
    ],
    maayTariffInr: 36000,
    vendorContacts: [
      'Cook Medical India (+91 98290 44556)',
      'BD Bard Access Systems (+91 98291 77654)'
    ]
  },
  {
    id: 'permcath_fibrin_sheath_snare_stripping',
    name: 'Fibrin Sheath Stripping of Malfunctioning Hemodialysis Catheter via Transfemoral Snare Loop',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV028A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Fibrin sheath occlusion of vascular catheter) / Z99.2',
    indications: [
      'Persistent dialysis catheter dysfunction manifested by inability to aspirate (one-way valve effect) despite effortless flushing, refractory to intraluminal alteplase (tPA)',
      'Fluoroscopic or contrast evidence of a circumferential sleeve/fibrin sheath extending from the tip and side-holes of a tunnelled catheter',
      'Preservation of well-functioning, non-infected tunnelled catheter and tunnel tract'
    ],
    preOpCriteria: [
      'Catheter linogram demonstrating contrast tracking retrogradely along the outer catheter shaft outside the vascular lumen (classic fibrin sheath sign)',
      'Absence of bacteremia, rigors, or active catheter exit-site infection',
      'Common femoral vein patent and compressible under ultrasound',
      'Standard coagulation screen: INR < 1.5, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Endovascular Snare Kit', name: 'Amplatz GooseNeck Snare Kit or EN Snare System', spec: '15 mm - 25 mm loop diameter, 100 cm snare catheter, 0.035 in delivery', standardStore: 'Angio Suite Store' },
      { category: 'Femoral Sheath', name: '7F - 8F Terumo Radifocus Introducer Sheath', spec: '7F/8F, 11 cm - 25 cm length', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Guidewire', name: '0.035 in Glidewire Advantage Hydrophilic Wire', spec: '0.035 in, 180 cm length, angled tip', standardStore: 'Central IR Store' },
      { category: 'Heparin', name: 'Heparin Sodium Injection', spec: '5000 IU/vial', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Heparin Lock', name: 'Heparin Lock Flush Solution', spec: '5000 IU/mL', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Prep and drape the right groin and the pre-existing tunnelled dialysis catheter hub under sterile conditions.',
      'Ultrasound-guided puncture of right common femoral vein; place a 7F or 8F vascular sheath; administer 3,000 IU heparin.',
      'Advance a 15-25 mm GooseNeck snare catheter from the femoral sheath into the right atrium and superior vena cava under fluoroscopy.',
      'Open the snare loop widely and manipulate it over the indwelling tips of the tunnelled hemodialysis catheter.',
      'Cinch the snare loop gently around the catheter shaft above the side-holes.',
      'Pull the cinched snare firmly downward along the catheter shaft and over the distal tips to mechanically peel and shear the sleeve of fibrin off the catheter.',
      'Repeat the stripping pass 2-3 times until the entire catheter surface is clean; withdraw the snare and captured fibrin tissue through the femoral sheath.',
      'Perform brisk aspiration and contrast injection through both catheter ports confirming free flow without residual retrograde jet or filling defect; pull femoral sheath and compress.'
    ],
    complications: [
      'Pulmonary embolization of sheared fibrin debris',
      'Catheter fracture, kink, or accidental dislodgement during snare traction',
      'Femoral puncture site hematoma or pseudoaneurysm',
      'Recurrence of fibrin sheath within 4-8 weeks'
    ],
    maayTariffInr: 24500,
    vendorContacts: [
      'Medtronic Interventional India (+91 98292 33445)',
      'Merit Medical Systems (+91 98290 66789)'
    ]
  },
  {
    id: 'permcath_fibrin_sheath_balloon_disruption',
    name: 'Fibrin Sheath Disruption via Through-Catheter High-Pressure Balloon Angioplasty',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV029A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Mechanical breakdown/fibrin sheath of dialysis catheter) / Z99.2',
    indications: [
      'Persistent hemodialysis catheter aspiration failure secondary to tip fibrin sleeve in patients where femoral access for snare stripping is undesirable or contraindicated',
      'Desire for a single-operator, rapid, through-the-existing-catheter endovascular salvage technique',
      'Preserved tunnel tract without subcutaneous infection or cuff extrusion'
    ],
    preOpCriteria: [
      'Catheter fistulography/linogram showing persistent pericatheter contrast halo and lack of distal dispersion',
      'Catheter lumen wire passage easily achievable using 0.018-inch or 0.035-inch guidewires',
      'Normal platelet count (>50,000/uL) and INR < 1.5',
      'Strict asepsis at the catheter hub interface'
    ],
    hardware: [
      { category: 'High-Pressure Balloon', name: 'ConQuest 40 / Atlas 0.035 PTA Dilatation Balloon Catheter', spec: '8.0 mm - 10.0 mm diameter x 40 mm length, 24 atm', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Amplatz Super Stiff Guidewire', spec: '0.035 in, 180 cm - 260 cm length, 1.5 mm J-tip', standardStore: 'Angio Suite Store' },
      { category: 'Balloon Inflator', name: 'BasixTouch 30 atm High Pressure Syringe', spec: '30 atm, 30 mL volume gauge syringe', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Exchange Sheath / Dilator', name: '10F - 12F Short Vascular Dilator', spec: 'Standard taper radiopaque dilator', standardStore: 'Central IR Store' },
      { category: 'Heparin Lock', name: 'Heparin Sodium Lock Solution', spec: '5000 IU/mL ampoules', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Sterile prep of the chest wall catheter hubs and adjacent skin; drape under surgical conditions.',
      'Aspirate existing locking solution from both lumens; pass a 0.035-inch stiff guidewire through one of the catheter lumens into the inferior vena cava.',
      'Under fluoroscopic monitoring, advance the wire until firmly anchored in the IVC.',
      'Carefully advance an 8 mm or 10 mm high-pressure balloon catheter over the wire directly through the catheter lumen and push it beyond the catheter tip into the SVC/right atrium.',
      'Partially pull back the catheter 2-3 cm over the balloon catheter shaft to expose the fibrin sleeve.',
      'Inflate the balloon to 16-20 atm across the tip zone and along the catheter shaft to rupture and disintegrate the surrounding cylindrical fibrin sleeve.',
      'Deflate balloon, re-advance the dialysis catheter over the balloon into its original cavoatrial position, and withdraw the balloon and wire.',
      'Confirm uninhibited two-way aspiration and flush from both lumens; lock with standard concentrated heparin.'
    ],
    complications: [
      'Catheter hub laceration or shaft rupture during balloon passage',
      'Micro-embolization of fragmented fibrin tissue to pulmonary capillary bed',
      'Accidental retraction and premature loss of venous catheter tract',
      'Venous wall injury or hemopericardium'
    ],
    maayTariffInr: 23000,
    vendorContacts: [
      'BD Bard Peripheral Vascular (+91 98291 77654)',
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)'
    ]
  },
  {
    id: 'permcath_exchange_subcutaneous_relocation',
    name: 'Exchange of Infected/Dysfunctional Permcath Over Hydrophilic Stiff Wire with Subcutaneous Tract Relocation',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV030A',
    rghsCode: '693 / 31',
    icd10: 'T82.7XXA (Infection and inflammatory reaction due to vascular dialysis catheter) / T82.858A',
    indications: [
      'Tunnel tract infection or exit-site purulence in a patient with no alternative central venous access options requiring catheter retention',
      'Catheter cuff extrusion or structural cracking of external catheter hubs with patent internal jugular vein entry',
      'Severe irreversible intraluminal thrombosis refractory to tPA and stripping'
    ],
    preOpCriteria: [
      'Absence of systemic septic shock or high-grade bacteremia with persistent positive blood cultures (uncomplicated localized exit/tunnel infection)',
      'Blood cultures obtained prior to exchange; patient receiving targeted parenteral antibiotics',
      'Pre-procedure ultrasound verifying absence of extensive venous thrombus surrounding the neck puncture site',
      'Adequate coagulation status: INR < 1.5, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Tunnelled Catheter Kit', name: 'New Dual Lumen Tunnelled Hemodialysis Catheter Kit', spec: '14.5F, 19 cm - 24 cm tip-to-cuff length with peel-away sheath', standardStore: 'Central IR Store' },
      { category: 'Stiff Guidewires', name: '0.035 in Amplatz Super Stiff Guidewires (2 units)', spec: '0.035 in, 180 cm length, J-tip and straight', standardStore: 'Angio Suite Store' },
      { category: 'Catheter Tunneler', name: 'Surgical Stainless Steel Tunneler', spec: 'Curved subcutaneous tunneler with tip sleeve', standardStore: 'Central IR Store' },
      { category: 'Surgical Set', name: 'Minor Surgical Cutdown and Suture Pack', spec: 'Scalpel #11, needle holder, 2-0 / 3-0 Silk and Monocryl sutures', standardStore: 'Central IR Store' },
      { category: 'Antibiotic Irrigation', name: 'Gentamicin / Vancomycin Saline Flush Solution', spec: 'For subcutaneous tunnel irrigation', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Sterile prep of the neck, old catheter, and surrounding anterior chest wall; separate sterile draping of old infected exit site.',
      'Through the old catheter lumens, advance a 0.035-inch Amplatz Super Stiff guidewire into the IVC under fluoroscopic guidance.',
      'Dissect the Dacron cuff free from surrounding fibrous tissue at the old subcutaneous tract via blunt and sharp dissection under local anesthesia.',
      'Carefully withdraw the old catheter out over the stiff wire, maintaining absolute control of the wire within the vein.',
      'Make a small separate incision at the neck venous entry point; grasp wire securely at neck and discard the infected chest tunnel and old catheter.',
      'Create a completely fresh, sterile subcutaneous tunnel pointing towards a new lateral chest wall exit site at least 4-5 cm away from the contaminated old site.',
      'Tunnel the brand new 14.5F catheter through the newly created tunnel to the neck incision.',
      'Advance a 16F peel-away sheath over the wire into the IJV, insert new catheter into right atrium, peel sheath, test brisk flow from both ports, and close neck and old exit incisions.'
    ],
    complications: [
      'Loss of guidewire access into the jugular vein during old catheter withdrawal',
      'Seeding of new catheter tract with residual local infection',
      'Venous laceration or air embolism during exchange',
      'Carotid artery injury'
    ],
    maayTariffInr: 22500,
    vendorContacts: [
      'Medtronic Interventional India (+91 98292 33445)',
      'BD Bard Access Systems (+91 98291 77654)'
    ]
  },
  {
    id: 'avf_deep_perforator_embolization',
    name: 'Incompetent Deep Perforator Vein Embolization in Non-Maturing Radiocephalic AV Fistula',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV031A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Failure of fistula maturation / deep venous steal) / N18.6',
    indications: [
      'Failure of radiocephalic Brescia-Cimino fistula to mature at 6 weeks due to an incompetent deep perforating vein in the mid/upper forearm diverting blood into interosseous or deep venous systems',
      'Superficial cephalic vein remains underfilled (<4 mm caliber) with access flow < 400 mL/min',
      'Absence of primary inflow arterial stenosis or outflow cephalic vein occlusion'
    ],
    preOpCriteria: [
      'High-resolution duplex ultrasound showing deep perforator vein >= 3 mm caliber stealing > 50% of the fistula volume flow',
      'Cephalic vein superficial trunk patent with intact continuity up to the elbow',
      'Coagulation profile within normal limits (INR < 1.4, Platelets > 60,000/uL)',
      'Normal renal function considerations regarding non-ionic iodinated contrast dosage'
    ],
    hardware: [
      { category: 'Vascular Sheath', name: '5F Terumo Radifocus Introducer Sheath', spec: '5F, 10 cm, radiopaque marker', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: 'Progreat 2.7F Microcatheter System (Terumo)', spec: '130 cm, 2.7F, with 0.014 in Glidewire GT', standardStore: 'Angio Suite Store' },
      { category: 'Embolic Coils', name: 'Nester / Tornado Fibered Microcoils', spec: '0.018 in, 4 mm - 6 mm diameter, 7 cm - 14 cm length', standardStore: 'DDC-14 Central' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug 4 (AVP 4)', spec: '4 mm - 5 mm diameter', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '4F Berenstein Catheter', spec: '65 cm, 4F taper', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient supine with forearm abducted; prep and drape forearm under sterile conditions; local anesthesia at puncture point.',
      'Antegrade or retrograde puncture of the cephalic vein under ultrasound guidance; advance 5F sheath.',
      'Administer 3,000 IU unfractionated heparin.',
      'Perform digital subtraction fistulography in AP and oblique views to demonstrate the takeoff of the deep perforator channel diverting flow to the deep volar veins.',
      'Introduce 2.7F Progreat microcatheter over a 0.014-inch microwire; subselect the deep perforator vein at least 1.5 cm into its tract.',
      'Confirm superselective position by gentle hand contrast injection, ensuring no reflux into the main superficial cephalic conduit.',
      'Deploy fibered platinum microcoils (or AVP-4 plug) tightly within the perforator vein until stagnation and complete flow arrest are observed.',
      'Repeat completion fistulography confirming immediate flow redistribution into the superficial cephalic vein with palpable thrill augmentation and enlarged vessel diameter.'
    ],
    complications: [
      'Accidental coil migration into the deep venae comitantes or pulmonary arterial circulation',
      'Thrombosis of the superficial cephalic vein trunk',
      'Perforation of fragile perforator vein with deep muscular compartment hematoma',
      'Median or radial nerve branch compression from hematoma'
    ],
    maayTariffInr: 32000,
    vendorContacts: [
      'Cook Medical India (+91 98290 44556)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'avf_basilic_superficialization_pta',
    name: 'Basilic Vein Superficialization Percutaneous Balloon Maturation Assistance',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV032A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Fistula non-maturation / deep basilic vein) / N18.6',
    indications: [
      'Immature or deep-seated brachiobasilic AV fistula where the basilic vein is patent but has small caliber (<5 mm) or focal segment hypoplasia preventing surgical superficialization/elevation',
      'Need to promote flow-induced remodeling and mechanical dilatation to allow cannulation without requiring extensive surgical dissection',
      'Focal stenosis at the surgical anastomotic or outflow junction inhibiting physiological fistula maturation'
    ],
    preOpCriteria: [
      'Ultrasound evaluation showing basilic vein diameter between 3.0 mm and 4.5 mm with flow volume < 500 mL/min',
      'Patent brachial artery inflow without proximal arterial stenosis',
      'Platelet count > 60,000/uL, INR < 1.4',
      'Absence of deep vein thrombosis in the accompanying brachial veins'
    ],
    hardware: [
      { category: 'Vascular Sheath', name: '5F - 6F Terumo Glidesheath Slender', spec: '5F/6F, 10 cm, radiopaque marker', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 in Glidewire Advantage Hydrophilic Wire', spec: '0.035 in, 180 cm length, stiff angled shaft', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon', name: 'Ultraverse / Mustang Balloon Dilatation Catheter', spec: '5.0 mm - 6.0 mm diameter x 40 mm - 80 mm length, 14-18 atm', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '4F Kumpe Catheter', spec: '65 cm, 4F taper', standardStore: 'Central IR Store' },
      { category: 'Inflation Device', name: '20 atm High-Pressure Inflation Syringe', spec: '20 mL volume syringe with pressure gauge', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Upper arm sterile prep and drape; local anesthetic infiltration at the distal arm cannulation site.',
      'Ultrasound-guided retrograde or antegrade cannulation of the basilic vein; insert 5F or 6F sheath.',
      'Administer 4,000 IU unfractionated heparin IV.',
      'Perform baseline fistulography defining the entire length of the basilic vein from elbow anastomosis up to the axillary vein.',
      'Navigate 0.035-inch Glidewire Advantage across any tight segments into the central axillary vein.',
      'Perform gentle serial balloon dilatation along the entire deep basilic conduit using a 5 mm to 6 mm balloon at low nominal pressures (4-6 atm) for 60 seconds per station to induce endothelial shear stress and break adventitial compliance restraints.',
      'Perform completion angiogram assessing luminal gain and confirming absence of flow-limiting dissection or rupture.',
      'Provide nephrology team with ultrasound measurements showing enlarged diameter (>6 mm) and shallow course for subsequent cannulation.'
    ],
    complications: [
      'Vein rupture or perivascular extravasation into deep arm compartments',
      'Acute access thrombosis secondary to extensive endothelial denudation',
      'Medial cutaneous nerve of the forearm irritation from balloon distension',
      'Hematoma at puncture site'
    ],
    maayTariffInr: 24500,
    vendorContacts: [
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)',
      'BD Bard Peripheral Vascular (+91 98291 77654)'
    ]
  },
  {
    id: 'avf_snuffbox_balloon_angioplasty',
    name: 'Snuffbox (Anatomical Snuffbox) AV Fistula Balloon Angioplasty',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV033A',
    rghsCode: '693 / 31',
    icd10: 'T82.858A (Stenosis of anatomical snuffbox vascular access) / N18.6',
    indications: [
      'Significant inflow or juxta-anastomotic stenosis in an anatomical snuffbox AV fistula (radial artery to dorsal branch of cephalic vein) causing high venous pressure or low dialyzer blood flow',
      'Impaired fistula maturation with access flow < 400 mL/min at 6-8 weeks post-surgery',
      'Difficult needle cannulation due to low thrill and collapsed dorsal forearm vein'
    ],
    preOpCriteria: [
      'Color Doppler mapping confirming stenosis (<2.0 mm) at the snuffbox anastomosis with peak systolic velocity ratio > 2.5',
      'Intact palmar arch verified by Allen test to ensure hand viability during distal radial manipulation',
      'Platelet count > 50,000/uL, INR < 1.4',
      'Written informed consent documenting risk of radial artery spasm or hand ischemia'
    ],
    hardware: [
      { category: 'Micropuncture Kit', name: '4F Micropuncture Access System', spec: '21G needle, 0.018 in nitinol wire, 4F co-axial sheath', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: '0.014 in - 0.018 in Specialty Hydrophilic Crossing Wire', spec: '0.014 in Runthrough NS or 0.018 in Glidewire Advantage, 180 cm', standardStore: 'Central IR Store' },
      { category: 'Low-Profile PTA Balloon', name: 'Coyote / Ultraverse 0.014-0.018 PTA Dilatation Catheter', spec: '3.0 mm - 4.0 mm diameter x 20 mm - 40 mm length, 14-16 atm', standardStore: 'Central IR Store' },
      { category: 'Vasodilator Cocktails', name: 'Intra-arterial Nitroglycerin & Verapamil', spec: 'Nitroglycerin 200 ug + Verapamil 2.5 mg cocktail for spasm prevention', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Inflation Device', name: 'Standard 20 atm High-Pressure Inflation Syringe', spec: '20 mL volume syringe with manometer', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Sterile prep of the hand, wrist, and forearm; patient positioned with thumb abducted to expose anatomical snuffbox.',
      'Under ultrasound guidance, obtain retrograde puncture of the dorsal cephalic vein 4-6 cm proximal to the snuffbox anastomosis using a 21G needle.',
      'Place a 4F micropuncture sheath; administer 3,000 IU heparin and 200 ug intra-arterial nitroglycerin to mitigate spasm.',
      'Perform initial retrograde fistulography through 4F sheath to map radial artery inflow and anastomotic stenosis.',
      'Carefully steer a 0.014-inch or 0.018-inch wire across the snuffbox anastomosis into the main radial artery trunk.',
      'Advance a 3.0 mm to 4.0 mm small-vessel balloon catheter across the anastomosis.',
      'Inflate balloon to 12-16 atm for 60-90 seconds until the resistant waist fully resolves.',
      'Perform completion arteriogram/fistulogram confirming restored brisk inflow, wide anastomotic channel, and absence of distal radial spasm or hand ischemia; remove sheath and achieve hemostasis.'
    ],
    complications: [
      'Severe radial artery spasm causing acute hand hypoperfusion',
      'Vascular rupture at the snuffbox hinge joint with dorsal wrist hematoma',
      'Distal radial artery dissection',
      'Superficial branch of radial nerve injury causing thumb dysesthesia'
    ],
    maayTariffInr: 25500,
    vendorContacts: [
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)',
      'Medtronic Interventional India (+91 98292 33445)'
    ]
  },
  {
    id: 'avg_thigh_femoral_thrombectomy_pta',
    name: 'Lower Extremity Thigh AV Graft (Femoral Artery to Femoral Vein) Thrombectomy & Venous Anastomosis PTA',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV034A',
    rghsCode: '693 / 31',
    icd10: 'T82.868A (Thrombosis of prosthetic arteriovenous graft) / T82.858A',
    indications: [
      'Acute complete thrombosis of loop or straight thigh prosthetic (ePTFE) arteriovenous graft in a patient with exhausted upper body access',
      'Inability to achieve hemodialysis with absent graft bruit and thrill on groin auscultation',
      'Preservation of lower extremity dialysis access circuit to prevent long-term transhepatic or translumbar catheters'
    ],
    preOpCriteria: [
      'Duplex ultrasound confirming complete thrombotic occlusion of thigh ePTFE graft with patent native common femoral artery and femoral vein',
      'Evaluation of distal extremity pedal pulses (Dorsalis pedis / Posterior tibial) to ensure distal limb perfusion baseline',
      'Coagulation profile: INR < 1.4, Platelets > 60,000/uL; Serum potassium < 5.5 mEq/L',
      'Informed consent documenting risk of distal lower extremity arterial embolization'
    ],
    hardware: [
      { category: 'Thrombectomy Balloon', name: 'Fogarty Thru-Lumen Embolectomy Balloon Catheter', spec: '5F - 6F, 80 cm length, over-the-wire latex balloon', standardStore: 'Central IR Store' },
      { category: 'Vascular Sheath', name: '7F Terumo Check-Flo Introducer Sheaths (2 units)', spec: '7F, 11 cm length, hemostatic valve', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Balloon', name: 'Atlas / Mustang PTA Balloon Catheter', spec: '8.0 mm - 10.0 mm x 40 mm, 0.035 in wire, 24 atm', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: '0.035 in Glidewire Advantage / Amplatz Super Stiff', spec: '0.035 in, 180 cm length, stiff angled shaft', standardStore: 'Central IR Store' },
      { category: 'Aspiration Kit', name: 'Large-Bore Vacuum Thrombo-Aspiration Syringe Kit', spec: '60 mL lockable aspiration syringe with large connector', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Patient supine; rigorous chlorhexidine surgical prep and drape of the groin, thigh, and distal leg; continuous pedal pulse palpation.',
      'Obtain cross-sheath puncture of the thigh loop graft: place one 7F sheath facing the venous anastomosis, and a second 7F sheath facing the femoral arterial anastomosis.',
      'Administer 5,000 IU unfractionated heparin systemically.',
      'Pass a 0.035-inch Glidewire across the venous anastomosis into the common femoral/external iliac vein; advance Fogarty balloon and pull back thrombus mass into venous sheath under forceful syringe aspiration.',
      'Pass wire and Fogarty balloon across the arterial anastomosis into the common femoral artery; gently inflate balloon in the artery and pull the arterial inflow clot plug into the graft, followed by aspiration.',
      'Perform DSA through both sheaths; identify the severe pseudointimal hyperplasia stenosis at the graft-to-femoral vein anastomosis.',
      'Perform high-pressure balloon angioplasty of the venous anastomosis using an 8 mm or 9 mm Atlas balloon inflated to 20-24 atm.',
      'Confirm continuous brisk thrill, restored low-resistance thigh graft flow, and patent distal lower extremity runoff on completion angiogram; achieve hemostasis at sheath sites.'
    ],
    complications: [
      'Distal lower extremity arterial embolization causing acute foot ischemia requiring emergency embolectomy',
      'Groin hematoma or seroma formation around thigh graft',
      'Pulmonary thromboembolism during venous limb maceration',
      'Arterial or venous anastomotic suture line rupture'
    ],
    maayTariffInr: 39500,
    vendorContacts: [
      'Edwards Lifesciences India (+91 98290 88776)',
      'Boston Scientific India / Jaipur Surgical (+91 98290 12345)'
    ]
  },
  {
    id: 'cvo_sharp_recanalization_snare_rendezvous',
    name: 'Sharp Central Venous Recanalization with Snare-Target Fluoroscopic Rendezvous Technique',
    category: 'Dialysis Access & Fistula',
    code: '2849-AV035A',
    rghsCode: '693 / 31',
    icd10: 'I87.1 (Compression and occlusion of central veins) / T82.858A',
    indications: [
      'Rigid chronic total occlusion (CTO) of the superior vena cava or brachiocephalic vein refractory to stiff blunt guidewires and standard hydrophilic techniques',
      'End-stage dialysis patient with symptomatic upper body central venous congestion and functional fistula about to be abandoned',
      'Need for definitive endovascular rendezvous through fibrous scar to reconstruct central drainage pathway'
    ],
    preOpCriteria: [
      'Multislice CT venogram showing occlusion length <= 3 cm and defining spatial proximity to the ascending aorta, trachea, and pericardial reflection',
      'Dual vascular access planned (Right femoral vein + Ipsilateral upper arm access)',
      'Platelet count > 80,000/uL, INR < 1.3, normal activated partial thromboplastin time',
      'Operating in a cath lab with cardiac surgical backup on standby'
    ],
    hardware: [
      { category: 'Sharp Crossing Needle', name: '21G Chiba Transseptal / Transvenous Crossing Needle', spec: '21G, 100 cm length, echogenic sharp beveled needle tip', standardStore: 'SMS Interventional Cath Lab Store' },
      { category: 'Target Snare', name: 'Amplatz GooseNeck Snare or EN Snare Kit', spec: '15 mm - 20 mm loop diameter, 100 cm snare catheter', standardStore: 'Angio Suite Store' },
      { category: 'Guiding Sheaths', name: '8F - 9F Flexor Guiding Sheaths (2 units)', spec: '8F/9F, 65 cm and 90 cm lengths, braided torque shaft', standardStore: 'Central IR Store' },
      { category: 'Central Stent Graft', name: 'Gore Viabahn / Fluency Plus Covered Stent', spec: '12 mm - 14 mm diameter x 60 mm - 80 mm length', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Balloon', name: 'Atlas High Pressure PTA Balloon Catheter', spec: '10 mm - 12 mm x 40 mm, 0.035 in, 24 atm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Obtain simultaneous femoral access (9F sheath) and upper extremity access (8F sheath) under ultrasound guidance.',
      'Administer 5,000 IU unfractionated heparin IV.',
      'From the femoral sheath, advance an 8F guiding catheter and deploy a 20 mm GooseNeck snare at the central aspect of the occlusion (SVC/right atrium).',
      'From the upper arm sheath, advance an 8F guiding catheter to the peripheral stump of the central occlusion; align orthogonal biplane projections (30 LAO and 30 RAO).',
      'Introduce a 21G Chiba needle through the upper catheter; fluoroscopically aim the needle tip into the center of the open GooseNeck snare loop.',
      'Advance the needle through the fibrous CTO cap until it enters the snare; advance a 0.018-inch or 0.014-inch guidewire through the needle into the snare loop.',
      'Tighten the snare firmly around the wire, pull the wire down into the femoral sheath, and exteriorize it establishing continuous through-and-through "body-floss" control.',
      'Dilate the recanalized channel with serial high-pressure balloons up to 10-12 mm; immediately deploy a 12-14 mm covered stent graft to protect the mediastinum; post-dilate and confirm brisk flow into the right atrium without extravasation.'
    ],
    complications: [
      'Fatal aortic puncture or pericardial tamponade requiring emergency sternotomy',
      'Pneumothorax or tension hemothorax',
      'Central stent dislodgement into right cardiac chambers',
      'Immediate in-stent central re-occlusion'
    ],
    maayTariffInr: 57500,
    vendorContacts: [
      'Cook Medical India (+91 98290 44556)',
      'W. L. Gore & Associates India (+91 98293 88123)'
    ]
  }
];
