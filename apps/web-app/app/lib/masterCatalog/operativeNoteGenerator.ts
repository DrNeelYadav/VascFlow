import { MasterProcedure, OperativeNoteOptions } from './types';

/**
 * Operative Note Generator for Interventional Radiology procedures.
 * Formats standardized, high-fidelity operative notes strictly compliant with
 * SMS Medical College & Hospital IR Department protocols and Rajasthan MAAY/RGHS criteria.
 * 
 * Accurately formats non-vascular, ultrasound-guided, CT-guided, venous, spine, and endovascular
 * procedural narratives without generic/blanket copy-pasting.
 */

export function buildProceduralNarrative(
  procedure: MasterProcedure,
  customFindings?: string
): string {
  const modality = procedure.modality || 'XA';
  const catNum = procedure.categoryNumber || 1;
  const titleLower = procedure.title.toLowerCase();

  const isBiopsy =
    catNum === 1 ||
    titleLower.includes('biopsy') ||
    titleLower.includes('fnac') ||
    titleLower.includes('fna') ||
    titleLower.includes('cytology');

  const isDrainage =
    catNum === 2 ||
    titleLower.includes('drainage') ||
    titleLower.includes('aspiration') ||
    titleLower.includes('pigtail') ||
    titleLower.includes('catheter drainage') ||
    titleLower.includes('cholecystostomy') ||
    titleLower.includes('paracentesis') ||
    titleLower.includes('thoracentesis') ||
    titleLower.includes('seroma') ||
    titleLower.includes('abscess');

  const isAblation =
    catNum === 9 ||
    titleLower.includes('ablation') ||
    titleLower.includes('rfa') ||
    titleLower.includes('mwa') ||
    titleLower.includes('cryoablation') ||
    titleLower.includes('microwave');

  const isSpineOrPain =
    catNum === 15 ||
    titleLower.includes('vertebroplasty') ||
    titleLower.includes('kyphoplasty') ||
    titleLower.includes('nerve block') ||
    titleLower.includes('neurolysis') ||
    titleLower.includes('epidural') ||
    titleLower.includes('facet');

  const isVenousAblation =
    titleLower.includes('venaseal') ||
    titleLower.includes('evla') ||
    titleLower.includes('radiofrequency ablation of saphenous') ||
    titleLower.includes('endovenous laser') ||
    titleLower.includes('varicose vein') ||
    titleLower.includes('sclerotherapy') ||
    titleLower.includes('foam sclero');

  const isDialysisCentralAccess =
    catNum === 11 ||
    titleLower.includes('permacath') ||
    titleLower.includes('picc') ||
    titleLower.includes('chemoport') ||
    titleLower.includes('central venous line') ||
    titleLower.includes('tunnelled catheter') ||
    titleLower.includes('jugular vein');

  const isUrologyNonVascular =
    (catNum === 19 || titleLower.includes('nephrostomy') || titleLower.includes('pcn') || titleLower.includes('ureter') || titleLower.includes('dj stent')) &&
    !titleLower.includes('embolization') &&
    !titleLower.includes('prostatic artery');

  const isGIEneric =
    catNum === 20 ||
    titleLower.includes('gastrostomy') ||
    titleLower.includes('prg') ||
    titleLower.includes('gastrojejunostomy') ||
    titleLower.includes('esophageal stent') ||
    titleLower.includes('colonic stent');

  // If the proceduralNarrativeTemplate is already specific and non-blanket (does NOT contain generic fallback)
  const templateIsGeneric =
    procedure.proceduralNarrativeTemplate.includes('Under real-time XA image guidance and local anesthesia, percutaneous access was established at the');

  let narrativeBody = '';

  if (!templateIsGeneric && procedure.proceduralNarrativeTemplate.trim().length > 30) {
    narrativeBody = procedure.proceduralNarrativeTemplate.trim();
  } else {
    // Generate specialized dynamic narrative for this procedure
    if (isBiopsy) {
      if (modality === 'US') {
        narrativeBody = `The target lesion was identified and mapped under real-time high-resolution ultrasound imaging. After sterile preparation and draping, local infiltration was performed with 2% lignocaine down to the lesion margin. Utilizing continuous real-time sonographic guidance via ${procedure.accessSiteDefault || 'percutaneous approach'}, a ${procedure.sheathDefault || '18G automated core biopsy needle'} was advanced accurately into the target lesion. Diagnostic core specimens were harvested during suspended respiration and fixed in 10% formalin. Post-procedure sonographic evaluation with color Doppler confirmed complete hemostasis without hematoma, vascular injury, or surrounding fluid collection.`;
      } else if (modality === 'CT') {
        narrativeBody = `Pre-procedure planning CT scan localized the target lesion with millimeter precision. Sterile prep and draping were performed, followed by local anesthesia infiltration along the planned trajectory. Under real-time CT fluoroscopy guidance via ${procedure.accessSiteDefault || 'percutaneous transthoracic/retroperitoneal approach'}, a ${procedure.sheathDefault || '17G/18G coaxial biopsy system'} was introduced into the target lesion. Diagnostic tissue cores were successfully retrieved and placed in fixative. Post-biopsy expiratory CT scan confirmed absence of pneumothorax, active tract hemorrhage, or organ hematoma.`;
      } else {
        narrativeBody = `Under real-time image guidance and local anesthesia, access was established via ${procedure.accessSiteDefault || 'percutaneous approach'} using ${procedure.sheathDefault || 'biopsy needle'}. Diagnostic tissue samples were obtained with complete technical success. Post-procedure imaging confirmed absence of acute hemorrhage or complications.`;
      }
    } else if (isDrainage) {
      narrativeBody = `Under real-time ${modality} guidance, the target fluid collection/cavity was localized and an avascular route planned. Following sterile prep and local anesthesia infiltration, direct needle puncture was performed via ${procedure.accessSiteDefault || 'percutaneous access'}. Purulent/serous fluid was aspirated and dispatched for microbiology and biochemical analysis. A guidewire was looped within the collection, serial tract dilation performed, and a ${procedure.sheathDefault || '10F/12F locking pigtail drainage catheter'} was deployed and locked. Complete cavity evacuation and saline irrigation were performed. The catheter was sutured securely and connected to a dependent gravity drainage bag.`;
    } else if (isAblation) {
      narrativeBody = `Target tumor was localized under real-time ${modality} guidance. Local anesthesia and conscious sedation were administered. Hydrodissection/displacement was performed where indicated to protect adjacent critical structures. A ${procedure.sheathDefault || 'microwave/radiofrequency ablation antenna/electrode'} was placed precisely into the tumor epicenter via ${procedure.accessSiteDefault || 'percutaneous approach'}. Thermal energy was applied according to calibrated protocol, achieving a complete hyperechoic/hypodense ablative margin encompassing the target lesion plus a 5mm safety buffer. Track ablation was executed upon probe withdrawal with zero immediate bleeding on post-ablation imaging.`;
    } else if (isVenousAblation) {
      narrativeBody = `Duplex ultrasound mapping confirmed venous incompetence and reflux in the target saphenous vein. Under real-time ultrasound guidance, percutaneous access was established at the ${procedure.accessSiteDefault || 'distal target vein'} using a ${procedure.sheathDefault || '5F vascular sheath'}. The ablation catheter/device was positioned 2-3 cm distal to the saphenofemoral/saphenopopliteal junction under direct sonographic visualization. Endovenous ablation was performed systematically along the entire incompetent vein segment. Completion duplex scanning verified 100% complete target vein closure and acoustic shadowing with preserved deep venous patency.`;
    } else if (isSpineOrPain) {
      narrativeBody = `Patient was placed in prone position. Biplane fluoroscopy/CT was aligned to project optimal anatomical landmarks. Under local anesthesia down to periosteum, working cannula was advanced via ${procedure.accessSiteDefault || 'transpedicular approach'}. Interventional therapy / high-viscosity PMMA bone cement was incrementally injected under continuous biplane fluoroscopic monitoring, ensuring uniform distribution without epidural extravasation or venous migration. Cannula was rotated and withdrawn with complete hemostasis.`;
    } else if (isDialysisCentralAccess) {
      narrativeBody = `Under real-time ultrasound guidance, targeted venous puncture was performed at the ${procedure.accessSiteDefault || 'right internal jugular vein'}. A guidewire was advanced into the inferior vena cava under fluoroscopic control. Subcutaneous tunneling was created over the anterior chest wall. A ${procedure.sheathDefault || 'dual-lumen catheter'} was advanced through a peel-away sheath, positioning the tip at the cavoatrial junction. Both lumens demonstrated brisk blood return and were locked with heparin solution. Exit and puncture sites were closed with sterile dressing.`;
    } else if (isUrologyNonVascular) {
      narrativeBody = `Under combined ultrasound and fluoroscopic guidance, the target calyx/renal pelvis was identified via Brodel's avascular plane. Under local anesthesia, percutaneous puncture was performed via ${procedure.accessSiteDefault || 'flank approach'}. Opacification confirmed collecting system anatomy. A ${procedure.sheathDefault || 'locking pigtail nephrostomy catheter'} was advanced over wire and locked in the renal pelvis. Free flow of urine was confirmed and the tube was secured to a closed drainage system.`;
    } else if (isGIEneric) {
      narrativeBody = `Under fluoroscopic control, stomach/enteric target was mapped. Under local anesthesia, access was established via ${procedure.accessSiteDefault || 'epigastric approach'} using ${procedure.sheathDefault || 'peel-away system'}. Gastropexy/tract dilation was performed and ${procedure.sheathDefault || 'retention tube/stent'} was deployed with confirmed intraluminal position on contrast check.`;
    } else {
      // Endovascular Arterial / Embolization / Stenting
      narrativeBody = `Under sterile aseptic technique and ${procedure.sedation.toLowerCase()}, target percutaneous vascular access was established at the ${procedure.accessSiteDefault || 'Right Common Femoral Artery'} utilizing a ${procedure.sheathDefault || '5F/6F Vascular Sheath'}. Selective catheterization and diagnostic angiography mapped target vessel anatomy and pathological lesions. Interventional therapy (${procedure.title}) was successfully executed with optimal technical result, brisk restored perfusion / complete target embolization, and zero non-target flow. Completion angiogram confirmed patent parent vessels. Sheath was removed and puncture hemostasis was achieved.`;
    }
  }

  // Prepend standardized SMS Hospital receiving line
  let fullNote = `The patient was received in the ${procedure.modality} Interventional Suite after informed consent verification and pre-procedure safety checklist clearance. Under strict aseptic surgical conditions and ${procedure.sedation.toLowerCase()}, ${narrativeBody}`;

  if (customFindings && customFindings.trim().length > 0) {
    fullNote += ` Intra-Procedural Findings: ${customFindings.trim()}`;
  }

  return fullNote;
}

export function buildAdviceBullets(procedure: MasterProcedure): string[] {
  const postOp = procedure.postOpCare;
  const modality = procedure.modality || 'XA';
  const catNum = procedure.categoryNumber || 1;
  const titleLower = procedure.title.toLowerCase();

  const isBiopsy =
    catNum === 1 ||
    titleLower.includes('biopsy') ||
    titleLower.includes('fnac') ||
    titleLower.includes('fna') ||
    titleLower.includes('cytology');

  const isVenousAblation =
    titleLower.includes('venaseal') ||
    titleLower.includes('evla') ||
    titleLower.includes('radiofrequency ablation of saphenous') ||
    titleLower.includes('endovenous laser') ||
    titleLower.includes('varicose vein');

  // Format bed rest line
  let bedRestText = '';
  if (isVenousAblation) {
    bedRestText = `Immediate ambulation encouraged. Ambulate in recovery for 15-20 minutes; wear Class II compression stockings as advised.`;
  } else if (isBiopsy) {
    bedRestText = `Bed rest for ${postOp.immobilizationHours || 4} hours. ${postOp.immobilizationInstructions || 'Keep puncture site compressed and undisturbed.'}`;
  } else {
    bedRestText = `Strict flat bedrest; do not move/flex limb for ${postOp.immobilizationHours || 4} hours. ${postOp.immobilizationInstructions || 'Keep access limb straight and immobilized.'}`;
  }

  const bullets: string[] = [];
  bullets.push(bedRestText);

  if (postOp.hydrationProtocol && postOp.hydrationProtocol.trim()) {
    bullets.push(`Hydration: ${postOp.hydrationProtocol}`);
  } else {
    bullets.push(`Hydration: Maintain oral fluids ad libitum after 2 hours if non-nauseated.`);
  }

  if (postOp.medications && postOp.medications.length > 0) {
    bullets.push(`Medications: ${postOp.medications.join(', ')}`);
  } else {
    bullets.push(`Medications: Symptomatic analgesia as clinically indicated.`);
  }

  if (postOp.requiredImaging && postOp.requiredImaging.trim()) {
    bullets.push(`Post-Op Imaging: ${postOp.requiredImaging}`);
  } else {
    bullets.push(`Post-Op Imaging: Routine ward clinical review; repeat imaging on clinical indication.`);
  }

  if (postOp.redFlags && postOp.redFlags.length > 0) {
    bullets.push(`Red Flags: ${postOp.redFlags.join('; ')}`);
  } else {
    bullets.push(`Red Flags: Notify IR Resident immediately for active bleeding, severe pain, cold pale extremity, shortness of breath, or fever.`);
  }

  return bullets;
}

export function buildOperativeNote(
  procedure: MasterProcedure,
  options: OperativeNoteOptions
): string {
  const supervising =
    options.supervisingConsultant ||
    'Dr. Meenu Bagarhatta (Sr. Prof & Head) / Dr. Shashank Sharma (Prof)';
  const operator = options.primaryOperator || 'Dr. Naresh Mangalhara (Associate Professor)';
  const suite =
    options.suite ||
    (procedure.modality === 'CT'
      ? 'CT Suite'
      : procedure.modality === 'US'
      ? 'Ultrasound Review Room'
      : procedure.modality === 'MRI'
      ? 'Interventional MRI Suite'
      : 'Cath Lab (Philips Azurion)');

  const schemeInfo = `[MAAY / RGHS Compatible: ${procedure.maayRghsCompatibility.packageName}] (Package Code: ${procedure.maayRghsCompatibility.packageCode}, ICD-10: ${procedure.maayRghsCompatibility.icd10})`;

  const narrative =
    options.customIntervention && options.customIntervention.trim().length > 0
      ? options.customIntervention
      : buildProceduralNarrative(procedure, options.customFindings);

  const adviceList = buildAdviceBullets(procedure);
  const adviceString = adviceList.map((item) => `• ${item}`).join('\n');

  const divider = '='.repeat(80);

  return `${divider}
SAWAI MAN SINGH MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY
CLINICAL INTERVENTIONAL OPERATIVE REPORT
${divider}
PATIENT DEMOGRAPHICS:
Patient Name : ${options.patientName.padEnd(28)} Age / Sex : ${options.age} Y / ${options.gender}
CR No. / UHID: ${options.crNumber.padEnd(28)} IPD Bed   : ${options.ipdBed}
Date of Proc : ${options.dateOfProcedure.padEnd(28)} Suite     : ${suite}
Supervising Consultant : ${supervising}
Primary Operator       : ${operator}

PROCEDURE PERFORMED:
${procedure.title}
${schemeInfo}

PROCEDURAL TECHNIQUE & FINDINGS:
${narrative}

POST-OPERATIVE ORDERS & NURSING CARE:
${adviceString}

LOCAL PUNCTURE SITE & NEUROVASCULAR PROTOCOL:
• Access Site Monitoring: Check puncture site for hematoma, bruit, and active oozing every 15 min x 4, every 30 min x 2, then every 1 hr x 2.
• Distal Perfusion: Palpate distal pulses, check capillary refill (<2s), skin temperature, and calf tenderness.
• Analgesia: Scheduled Paracetamol + procedural analgesia as indicated; notify IR Resident SOS for sudden swelling or severe pain.

${divider}
INSTITUTIONAL FACULTY & OPERATOR SIGN-OFF:
Dr. Meenu Bagarhatta           Dr. Naresh K Mangalhara           Dr. Shashank Sharma           Dr. Alok Verma
Senior Professor & Head        Associate Professor (PDCC IR)     Professor                     Assistant Professor (PDCC IR)

Attending Primary Operator: ${operator}
Supervising Consultant   : ${supervising}
${divider}`;
}
