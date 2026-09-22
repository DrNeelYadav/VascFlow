import { MasterProcedure } from './types';

/**
 * Category 21: Pediatric Interventions (2 Procedures)
 * Strict Rajasthan MAAY / RGHS compatibility and SMS Medical College clinical protocols.
 */
export const CATEGORY_21_PEDIATRIC: MasterProcedure[] = [
  {
    id: 'cat21-pda-closure',
    categoryNumber: 21,
    categoryName: 'Pediatric Interventions',
    title: 'Patent Ductus Arteriosus (PDA) Transcatheter Closure with Plugs & Coils',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Congenital Cardiac Catheterization & Intervention',
      packageCode: '1849-CV028A',
      icd10: 'Q25.0',
      tariffInr: 50000,
    },
    modality: 'XA',
    targetAnatomy: ["Patent Ductus Arteriosus", "Descending Aorta", "Main Pulmonary Artery"],
    sedation: 'General Anesthesia or Deep Sedation',
    accessSiteDefault: 'Right Femoral Vein and Femoral Artery under General Anesthesia',
    sheathDefault: '4F - 6F Sheaths',
    cathetersAndWires: '0.035" wire, 4F JR catheter, Amplatzer Duct Occluder (ADO I / II) or Flipper Coils',
    microcatheterSystem: 'N/A',
    embolicOrImplants: 'Amplatzer Duct Occluder II (ADO II) / Nit-Occlud Coil',
    proceduralNarrativeTemplate:
      'Pediatric patient under general anesthesia. Arterial and venous femoral access established. Lateral descending aortogram delineated Krichenko Type A PDA (minimal diameter 2.8mm, ampulla 7mm). 4F delivery sheath advanced from femoral vein through right heart, pulmonary artery, and PDA into descending aorta. ADO II device advanced. Retention disc deployed in aorta; device pulled gently against aortic ampulla. Waist and pulmonary disc deployed in ductus. Repeat aortogram confirmed stable position, zero residual shunt, and unimpeded left pulmonary artery and aortic arch flow. Device detached. Groin pressure hemostasis.',
    postOpCare: {
      immobilizationHours: 4,
      immobilizationInstructions: 'Flat bedrest x 4 hours.',
      hematomaChecks: 'Check femoral puncture sites and bilateral distal pulses q15m x 1h, q30m x 2h, then q1h.',
      requiredImaging: 'Transthoracic Echocardiogram at 24 hours to confirm ductal closure and verify normal aortic arch and LPA velocities.',
      hydrationProtocol: 'IV fluids titrated to pediatric maintenance.',
      medications: ["Syrup Paracetamol 15mg/kg PO TDS PRN", "Single-dose IV Cefazolin 25mg/kg"],
      redFlags: ["Device embolization to pulmonary artery or aorta", "LPA stenosis", "Coarctation of aorta"],
    },
    consentId: 'consent-pediatric-ir',
  },
  {
    id: 'cat21-intussusception-reduction',
    categoryNumber: 21,
    categoryName: 'Pediatric Interventions',
    title: 'Fluoroscopy / US-Guided Air / Saline Hydrostatic Reduction of Intussusception',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Intussusception Hydrostatic / Pneumatic Reduction',
      packageCode: '1849-IN078A',
      icd10: 'K56.1',
      tariffInr: 12000,
    },
    modality: 'XA',
    targetAnatomy: ["Ileocolic Intussusception", "Cecum", "Ascending Colon"],
    sedation: 'General Anesthesia or Deep Sedation',
    accessSiteDefault: 'Transrectal approach with Foley / specialized reduction catheter',
    sheathDefault: 'Large-Bore Foley Catheter (18F - 22F)',
    cathetersAndWires: 'Air reduction insufflator with pop-off pressure valve (max 120 mmHg) / warm normal saline bag',
    microcatheterSystem: 'N/A',
    embolicOrImplants: 'N/A',
    proceduralNarrativeTemplate:
      'Indicated for acute ileocolic intussusception without signs of peritonitis or shock. Pediatric surgical standby verified. 20F Foley catheter inserted per-rectum and balloon inflated with 15 mL air; buttocks taped together firmly. Controlled pneumatic reduction performed: air insufflated under continuous fluoroscopic monitoring, keeping pressure <100 mmHg. Soft-tissue mass visualized pushed retrogradely from transverse colon, hepatic flexure, and cecum. Sudden free reflux of massive air into multiple loops of terminal ileum confirmed complete, successful anatomical reduction. Post-procedure ultrasound verified complete disappearance of \'donut / target\' sign and absence of perforation.',
    postOpCare: {
      immobilizationHours: 2,
      immobilizationInstructions: 'Observation in pediatric unit x 4-6 hours.',
      hematomaChecks: 'Abdominal examination (check for soft abdomen, rule out peritonitis) and vitals q30m x 2h, then q1h.',
      requiredImaging: 'Bedside USG if irritability or recurrent vomiting.',
      hydrationProtocol: 'Clear oral fluids after 2 hours.',
      medications: ["Syrup Paracetamol 15mg/kg PRN", "Encourage breastfeeding / oral rehydration"],
      redFlags: ["Colonic perforation / tension pneumoperitoneum", "Recurrence (10-15%)", "Failed reduction requiring laparotomy"],
    },
    consentId: 'consent-pediatric-ir',
  },
];
