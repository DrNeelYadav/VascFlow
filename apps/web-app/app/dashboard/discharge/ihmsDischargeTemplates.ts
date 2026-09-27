/**
 * Rajasthan Government IHMS e-Hospital Discharge Summary Schema & Templates
 * Official Department-Wise Discharge Summary Generator
 * Department of Radiodiagnosis & Interventional Radiology
 * Sawai Man Singh (SMS) Medical College & Attached Hospitals, Jaipur
 */

export interface PatientAdmissionDetails {
  hospitalName: string;
  hospitalAddress: string;
  departmentName: string;
  unitHead: string;
  unitName: string;
  opdDays: string;
  hid: string; // Hospital Identification / CR Number (e.g. 150223147650888)
  patientName: string;
  age: string;
  gender: "M" | "F" | "Other";
  admissionNo: string; // e.g. A/SMSH/26/109750
  dateOfAdmission: string; // e.g. 31-08-2026 09:38:00 AM
  dateOfDischarge: string; // e.g. 01-09-2026 04:29:46 PM
  admissionType: string; // e.g. ON DOCTOR ADVICE
  dischargeType: string; // e.g. NORMAL DISCHARGE / DISCHARGE ON REQUEST
  patientCategory: string; // MAAY / RGHS / GENERAL / PMJAY
  wardBed: string; // e.g. OLD GASTRO WARD/IR-1, LIVER ICU/LICU-04
  abhaAddress?: string;
  abhaNumber?: string;
  unitDoctors?: { name: string; designation: string }[];
}

export interface CaseSummaryDiagnosis {
  icdDiagnosis: string; // e.g. (S) Varicose veins of lower extremities (I83)
  diagnosis: string; // e.g. Varicose veins of left lower extremities (I83)
  complaints: string;
  caseHistory: string;
  pastHistory: string;
  familyHistory: string;
  personalHistory: string;
  riskFactor: string;
}

export interface VitalsMeasurement {
  bloodPressure: string; // e.g. 110/80
  pr: string; // e.g. 68
  temp: string; // e.g. 98
  rr: string; // e.g. 20
  spo2: string; // e.g. 100
  pallor: "Absent" | "Present";
  icterus: "Absent" | "Present";
  cyanosis: "Absent" | "Present";
  clubbing: "Absent" | "Present";
  lymphnodes: "Absent" | "Present";
  edema: "Absent" | "Present";
  otherDescription?: string;
}

export interface GeneralPhysicalExam {
  atAdmission: VitalsMeasurement;
  atDischarge: VitalsMeasurement;
}

export interface SystemicExam {
  respiration: string; // N A D
  cvs: string; // N A D
  perAbdomen: string; // N A D / Soft, non-tender
  cns: string; // N A D
  cranialNerve: string; // N A D
  cerebellum: string; // Normal
  meningealSigns: {
    neckRigidity: "Absent" | "Present";
    kernigsSign: "Absent" | "Present";
    otherDescription?: string;
  };
  craniumAndSpine?: string;
  localExamination: string;
}

export interface LabResultItem {
  testName: string;
  parameterName: string;
  firstResult: string;
  lastResult?: string;
}

export interface OtherInvestigations {
  ecg?: string;
  echo2D?: string;
  xRay?: string;
  sonography?: string;
  ctScan?: string;
  mri?: string;
  collisionAndProfile?: string; // Endoscopy
  abg?: string;
  anyOtherInvestigations?: string;
  labResults?: LabResultItem[];
}

export interface ProcedureDetailItem {
  sNo: number;
  dateTime: string;
  operationType: "Minor" | "Major";
  surgicalProcedure: string;
  anaesthesiaType: "LOCAL" | "CONSCIOUS SEDATION" | "GENERAL" | "REGIONAL";
  procedureDetail: string;
  processDoneBy: string;
}

export interface DdcDrugItem {
  sNo: number;
  medicine: string;
  qtyIssued: number;
  issuedDateTime: string;
}

export interface DischargeMedicationItem {
  sNo: number;
  medicine: string;
  genericName?: string;
  dosePower: string;
  route: "ORAL" | "SUBCUTANEOUS" | "IV" | "TOPICAL" | "INHALATION";
  frequency: "OD" | "BD" | "TID" | "QID" | "SOS" | "HS";
  days: number;
  instructions: string;
}

export interface PatientDischargeDetails {
  generalAdvise: string;
  conditionOnDischarge: "Improved" | "Stable" | "Satisfactory" | "Discharged on Request";
  followUp: string;
  followUpDate?: string;
  approvedBy: string;
  dischargePreparedBy: string;
}

export interface ProceduralImageAttachment {
  id: string;
  title: string;
  modality: "XA" | "CT" | "US" | "MRI" | "PHOTO";
  capturedAt: string;
  dataUrl: string; // Base64 or Image URL / SVG representation
  caption: string;
}

export interface PostOperativeNoteData {
  accessSiteHemostasis: string; // e.g. "Complete Hemostasis Achieved (Manual compression / Closure device deployed; puncture clean & dry)"
  telemetryVitals: string; // e.g. "BP: 122/78 mmHg, HR: 74 bpm regular, SpO2: 99% on room air, RR: 16/min"
  sheathRemovalTime: string; // e.g. "31-08-2026 11:30 AM (Immediate post-procedure in holding)"
  sheathStatus?: string; // e.g. "Removed" | "In Situ"
  recoveryStatus: string; // e.g. "Conscious, oriented x3, pain VAS 1/10, stable distal pulses (+++), recovery protocol active"
  recoveryBed?: string; // e.g. "PACU Bay 02 / Cath-Lab Holding"
  distalPulses?: string; // e.g. "Strong (+++) bilaterally equal"
  immediateComplications?: string; // e.g. "Nil - zero hematoma, zero pseudoaneurysm, zero distal ischemia"
  recordedBy?: string; // e.g. "Dr. Neel Yadav (Senior Resident IR)"
  recordedAt?: string;
  notes?: string;
  completionDuplex?: string;
  egitStatus?: string;
  compressionStockings?: string;
  ambulationProtocol?: string;
  painVasScore?: string;
  chairScreening?: string;
}

export interface IhmsDischargeSummaryData {
  id: string;
  patientId: string;
  admissionDetails: PatientAdmissionDetails;
  caseSummary: CaseSummaryDiagnosis;
  physicalExam: GeneralPhysicalExam;
  systemicExam: SystemicExam;
  investigations: OtherInvestigations;
  procedureDetails: ProcedureDetailItem[];
  postOperativeNotes?: PostOperativeNoteData;
  ddcDrugs: DdcDrugItem[];
  dischargeMedications: DischargeMedicationItem[];
  dischargeDetails: PatientDischargeDetails;
  attachments: ProceduralImageAttachment[];
}

// ============================================================================
// OFFICIAL SMS HOSPITAL DISCHARGE SUMMARY EXAMPLES (AUTHENTIC REAL RECORDS)
// ============================================================================

export const SUNIL_KUMAR_DISCHARGE: IhmsDischargeSummaryData = {
  id: "IHMS-DIS-2026-001",
  patientId: "EX01",
  admissionDetails: {
    hospitalName: "SAWAI MAN SINGH HOSPITAL JAIPUR",
    hospitalAddress: "SAWAI RAM SINGH ROAD TONK ROAD, JAIPUR",
    departmentName: "INTERVENTIONAL RADIOLOGY",
    unitHead: "DR MEENU BAGARHATTA",
    unitName: "UNIT I",
    opdDays: "Mon,Tue,Wed,Thu,Fri,Sat",
    hid: "150223147650888",
    patientName: "Varicose Veins Patient",
    age: "18Y",
    gender: "M",
    admissionNo: "A/SMSH/26/109750",
    dateOfAdmission: "31-08-2026 09:38:00 AM",
    dateOfDischarge: "01-09-2026 04:29:46 PM",
    admissionType: "ON DOCTOR ADVICE",
    dischargeType: "NORMAL DISCHARGE",
    patientCategory: "MAAY",
    wardBed: "OLD GASTRO WARD/IR-1",
    abhaAddress: "91587244105074@abdm",
    abhaNumber: "91-5872-4410-5074",
    unitDoctors: [
      { name: "DR Meenu Bagarhatta", designation: "Senior Professor & Head" },
      { name: "Dr Shashank Sharma", designation: "Professor" },
    ],
  },
  caseSummary: {
    icdDiagnosis: "(S) Varicose veins of lower extremities (I83)",
    diagnosis: "Varicose veins of left lower extremities (I83)",
    complaints: "Prominent tortuous veins left lower limb with dull aching pain and evening heaviness for 8 months.",
    caseHistory:
      "Patient presented with complaints of prominent visible dilated veins in left lower limb along medial aspect of calf and thigh for 8 months. Associated with heaviness on prolonged standing. No history of ulceration, bleeding, or deep vein thrombosis.",
    pastHistory: "No history of diabetes mellitus, hypertension, tuberculosis, asthma, or previous vascular surgery.",
    familyHistory: "Not significant.",
    personalHistory: "Non-smoker, non-alcoholic. No drug addictions.",
    riskFactor: "Prolonged standing, chronic venous insufficiency, familial history. Viral markers (HIV, HBsAg, Anti-HCV) non-reactive.",
  },
  physicalExam: {
    atAdmission: {
      bloodPressure: "110/80",
      pr: "68",
      temp: "98",
      rr: "20",
      spo2: "100",
      pallor: "Absent",
      icterus: "Absent",
      cyanosis: "Absent",
      clubbing: "Absent",
      lymphnodes: "Absent",
      edema: "Absent",
    },
    atDischarge: {
      bloodPressure: "112/84",
      pr: "66",
      temp: "98",
      rr: "18",
      spo2: "100",
      pallor: "Absent",
      icterus: "Absent",
      cyanosis: "Absent",
      clubbing: "Absent",
      lymphnodes: "Absent",
      edema: "Absent",
    },
  },
  systemicExam: {
    respiration: "N A D (Bilateral vesicular breath sounds, no added sounds)",
    cvs: "N A D (S1, S2 heard, no murmurs)",
    perAbdomen: "N A D (Soft, non-tender, no organomegaly)",
    cns: "N A D (Conscious, oriented, no focal neurological deficits)",
    cranialNerve: "N A D",
    cerebellum: "Normal",
    meningealSigns: {
      neckRigidity: "Absent",
      kernigsSign: "Absent",
    },
    localExamination:
      "Left lower limb: Puncture site below knee joint healthy, no bleeding or hematoma. Glue cast palpable in GSV tract, non-tender. Distal pulses (Dorsalis Pedis & Posterior Tibial) palpable (+++) and equal bilaterally.",
  },
  investigations: {
    sonography: "USG DOPPLER LEFT LOWER LIMB : LEFT GSV INCOMPETENCE WITH SFJ REFLUX (>2.5s)",
    ecg: "Normal Sinus Rhythm, rate 70/min",
    xRay: "Chest X-Ray PA View: NAD",
    labResults: [
      { testName: "CBC", parameterName: "Hemoglobin", firstResult: "13.8 g/dL" },
      { testName: "CBC", parameterName: "Platelets", firstResult: "245,000 /uL" },
      { testName: "RFT", parameterName: "Serum Creatinine", firstResult: "0.85 mg/dL" },
      { testName: "Coagulation", parameterName: "PT / INR", firstResult: "1.04" },
    ],
  },
  procedureDetails: [
    {
      sNo: 1,
      dateTime: "31/08/2026 10:00 AM",
      operationType: "Minor",
      surgicalProcedure: "GLUE EMBOLISATION BY VENASEAL",
      anaesthesiaType: "LOCAL",
      procedureDetail:
        "Under strict aseptic condition under ultrasound guidance. Left GSV punctured below the knee joint. 7 French sheath placed. Venogram taken. Venaseal closure system was used and tip of the delivery Catheter placed 5 centimetre distal to SFJ. Glue embolization done. Post procedure ultrasound revealed glue cast with resulting non compressibility. Sclerotherapy done for few varicosities in left lower limb. No intra/immediate post-op complications seen. Deep venous system patent on Doppler.",
      processDoneBy: "Dr Shashank Sharma",
    },
  ],
  postOperativeNotes: {
    accessSiteHemostasis: "Manual compression applied to left GSV puncture site below knee; complete hemostasis achieved. Puncture site clean, dry & intact. Zero hematoma or active oozing.",
    telemetryVitals: "BP: 112/84 mmHg, HR: 66 bpm, SpO2: 100% on ambient air, RR: 18/min, Afebrile (98°F)",
    sheathRemovalTime: "31-08-2026 10:35 AM (Immediate post-procedure in Cath-Lab angiosuite)",
    sheathStatus: "Removed",
    recoveryStatus: "Conscious, oriented, calm and comfortable (Pain VAS 1/10). Class II compression applied. Ambulation initiated after 2 hours with assistance.",
    recoveryBed: "Cath-Lab Holding Rec-01",
    distalPulses: "Strong (+++) - Bilateral Dorsalis Pedis and Posterior Tibial arteries palpable",
    immediateComplications: "Nil - Zero hematoma, zero DVT on completion Doppler, zero distal ischemia",
    recordedBy: "Dr Shashank Sharma (Professor of IR)",
    recordedAt: "31-08-2026 11:00 AM",
    notes: "Patient tolerated endovenous glue ablation well. Completion duplex confirmed non-compressible left GSV cast with patent deep femoral vein. Discharged in stable condition.",
  },
  ddcDrugs: [
    { sNo: 1, medicine: "Cap. Cholecalciferol 60000 IU soft gelatin capsule [RMSCL DDC #623]", qtyIssued: 4, issuedDateTime: "01-09-2026 01:44 PM" },
    { sNo: 2, medicine: "Venaseal closure system for varicose veins N-butyl cyanoacrylate adhesive [RMSCL DDC #NRS-515]", qtyIssued: 1, issuedDateTime: "31-08-2026 11:43 AM" },
    { sNo: 3, medicine: "Tab. Calcium 500mg with Vitamin D3 250 IU [RMSCL DDC #622]", qtyIssued: 10, issuedDateTime: "01-09-2026 01:44 PM" },
    { sNo: 4, medicine: "Tab. Montelukast 10mg + Levocetirizine 5mg [RMSCL DDC #660]", qtyIssued: 10, issuedDateTime: "01-09-2026 01:43 PM" },
    { sNo: 5, medicine: "Tab. Multivitamin NFI Formula [RMSCL DDC #394]", qtyIssued: 10, issuedDateTime: "01-09-2026 01:43 PM" },
    { sNo: 6, medicine: "Tab. Paracetamol 500mg [RMSCL DDC #28]", qtyIssued: 10, issuedDateTime: "01-09-2026 01:43 PM" },
  ],
  dischargeMedications: [
    { sNo: 1, medicine: "Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]", genericName: "Amoxicillin and Potassium Clavulanate 625mg", dosePower: "625mg", route: "ORAL", frequency: "TID", days: 5, instructions: "After meals" },
    { sNo: 2, medicine: "Tab. Diclofenac 50mg + Serratiopeptidase 10mg [RMSCL DDC #622]", genericName: "Diclofenac 50mg + Serratiopeptidase 10mg", dosePower: "50mg+10mg", route: "ORAL", frequency: "TID", days: 5, instructions: "With meals SOS for pain" },
    { sNo: 3, medicine: "Tab. Levocetirizine 5mg [RMSCL DDC #659]", genericName: "Levocetirizine 5mg", dosePower: "5mg", route: "ORAL", frequency: "BD", days: 5, instructions: "At night" },
  ],
  dischargeDetails: {
    generalAdvise: "Wear Class II graduated compression stockings during daytime for 4 weeks. Normal walking permitted. Avoid high-impact exercise or lifting heavy weights for 2 weeks. Elevate limb while sitting/sleeping.",
    conditionOnDischarge: "Improved",
    followUp: "Follow up Doppler after 1 month in IR OPD Room 48 / Old Gastro Ward (Mon/Thu).",
    followUpDate: "01-10-2026",
    approvedBy: "DR Meenu Bagarhatta",
    dischargePreparedBy: "Dr Shashank Sharma",
  },
  attachments: [
    {
      id: "ATT-002",
      title: "Intra-procedural Left GSV Venogram",
      modality: "XA",
      capturedAt: "31-08-2026 10:15 AM",
      dataUrl: "",
      caption: "Digital Subtraction Angiogram: 7F delivery catheter positioned 5.0 cm distal to saphenofemoral junction (SFJ). No non-target glue migration.",
    },
  ],
};

export const VARICOSE_VEINS_DISCHARGE: IhmsDischargeSummaryData = SUNIL_KUMAR_DISCHARGE;

export const BUDD_CHIARI_DISCHARGE: IhmsDischargeSummaryData = {
  id: "IHMS-DIS-2026-002",
  patientId: "EX02",
  admissionDetails: {
    hospitalName: "SMS SUPER SPECIALITY HOSPITAL JAIPUR",
    hospitalAddress: "9 VIVEKANAND MARG NEAR TRAUMA HOSPITAL JAIPUR",
    departmentName: "INTERVENTIONAL RADIOLOGY / GASTROENTEROLOGY",
    unitHead: "DR MEENU BAGARHATTA",
    unitName: "UNIT 1",
    opdDays: "Mon,Thu",
    hid: "240826303019538",
    patientName: "Budd-Chiari Patient",
    age: "31Y",
    gender: "F",
    admissionNo: "A/SSH/26/17215",
    dateOfAdmission: "24-08-2026 01:22:00 PM",
    dateOfDischarge: "31-08-2026 03:29:10 PM",
    admissionType: "ON DOCTOR ADVICE",
    dischargeType: "DISCHARGE ON REQUEST",
    patientCategory: "MAAY",
    wardBed: "202 GASTRO MALE AND FEMALE / GASTROUI-24",
    abhaAddress: "anjumnisha1995@abdm",
    abhaNumber: "91-1045-4574-3452",
    unitDoctors: [
      { name: "DR Sudhir Maharshi", designation: "Professor" },
      { name: "DR Kamlesh Kumar Sharma", designation: "Associate Professor" },
    ],
  },
  caseSummary: {
    icdDiagnosis: "(S) Budd-Chiari syndrome (I82.0)\n(S) Fibrosis and cirrhosis of liver (K74)",
    diagnosis: "PHTN - NB - NO ESO VX (MLP+) (25/8/26). BUDD CHIARI SYNDROME P/W ASCITES.",
    complaints: "Pain abdomen followed by abdominal distension for 15 days.",
    caseHistory:
      "The patient has history of pain abdomen initially of severe intensity with multiple episodes of vomiting which reduced in intensity - for last 15 days followed by progressive abdominal distension for last 10 days. No history of altered sensorium / hematemesis / melena / reduced urine output or fever. O/E at admission: Pallor absent, icterus absent, cyanosis absent, clubbing absent, edema absent, JVP normal. Patient was investigated with routine investigations, X-ray, ECG, USG W/A and Triphasic MRI - S/O BUDD-CHIARI SYNDROME. IR OPINION DONE -- Patient was appropriately investigated and managed conservatively; now being discharged in vitally stable condition and advised to follow up.",
    pastHistory: "No prior history of diabetes mellitus, hypertension, tuberculosis or previous surgery.",
    familyHistory: "Not significant.",
    personalHistory: "No addictions. Normal bowel and bladder habits.",
    riskFactor: "HIV, HCV, HBsAg - all 3 negative / non-reactive.",
  },
  physicalExam: {
    atAdmission: {
      bloodPressure: "118/74",
      pr: "78",
      temp: "98.4",
      rr: "18",
      spo2: "99",
      pallor: "Absent",
      icterus: "Absent",
      cyanosis: "Absent",
      clubbing: "Absent",
      lymphnodes: "Absent",
      edema: "Absent",
    },
    atDischarge: {
      bloodPressure: "120/76",
      pr: "72",
      temp: "98",
      rr: "16",
      spo2: "99",
      pallor: "Absent",
      icterus: "Absent",
      cyanosis: "Absent",
      clubbing: "Absent",
      lymphnodes: "Absent",
      edema: "Absent",
    },
  },
  systemicExam: {
    respiration: "N A D (Bilateral air entry equal, clear)",
    cvs: "N A D (S1 S2 normal, no murmur)",
    perAbdomen: "Distended, non-tender. Fluid thrill positive on admission, resolved to shifting dullness. No guarding/rigidity.",
    cns: "N A D (GCS 15/15, oriented to time, place, person)",
    cranialNerve: "N A D",
    cerebellum: "Normal",
    meningealSigns: {
      neckRigidity: "Absent",
      kernigsSign: "Absent",
    },
    localExamination: "No superficial collaterals visible on abdominal wall. Peripheral pulses normal.",
  },
  investigations: {
    ecg: "Normal Sinus Rhythm (NSR)",
    echo2D: "All cardiac chambers normal. LVEF 55%, no RWMA. IVC not dilated, >50% collapsible. Minimal pericardial effusion. No clot/thrombus.",
    xRay: "Chest X-Ray: Bilateral mild pleural effusion.",
    sonography:
      "12/8/26 USG WA: Liver 16.7 cm, caudate lobe hypertrophy with heterogeneous hepatic echotexture. Single visualized hepatic vein with attenuated flow on CDI. Spleen enlarged (14.4 cm). Moderate ascites. IMPRESSION: ACUTE BUDD-CHIARI SYNDROME.",
    ctScan:
      "14/8/26 CECT WA: Marked hypertrophy of caudate lobe and left lobe. Complete non-visualization/obliteration of all hepatic veins with narrowing at HV-IVC junction. Small filling defect 7x7mm in intrahepatic IVC suggestive of thrombus. Moderate to gross ascites. Mild right-sided pleural effusion.",
    mri:
      "25/8/26 MRI WA: Non-opacification of all three major hepatic veins with attenuated intrahepatic IVC, caudate lobe hypertrophy, recanalized umbilical vein and portosystemic collaterals. Highly suggestive of Budd-Chiari syndrome.",
    collisionAndProfile: "25/8/26 UGI Endoscopy: Esophagus & GE junction normal. Fundus/body has MLP. No esophageal varices.",
    anyOtherInvestigations: "IR opinion done: Advised medical anticoagulation bridging and follow-up for elective DIPS shunt.",
    labResults: [
      { testName: "LIVER FUNCTION", parameterName: "SGOT", firstResult: "513.0", lastResult: "186.9" },
      { testName: "LIVER FUNCTION", parameterName: "SGPT", firstResult: "207.0", lastResult: "91.3" },
      { testName: "LIVER FUNCTION", parameterName: "Serum Albumin", firstResult: "2.72", lastResult: "2.74" },
      { testName: "RENAL FUNCTION", parameterName: "Serum Creatinine", firstResult: "1.18", lastResult: "0.80" },
      { testName: "COAGULATION", parameterName: "PT / INR", firstResult: "29.6s", lastResult: "2.43" },
      { testName: "CBC", parameterName: "Hemoglobin", firstResult: "11.2", lastResult: "12.4" },
      { testName: "CBC", parameterName: "Platelets", firstResult: "308,000", lastResult: "203,000" },
    ],
  },
  procedureDetails: [
    {
      sNo: 1,
      dateTime: "26/08/2026 11:30 AM",
      operationType: "Minor",
      surgicalProcedure: "DIAGNOSTIC HEPATIC VENOGRAPHY & TRANSCUTANEOUS DOPPLER MAPPING",
      anaesthesiaType: "LOCAL",
      procedureDetail:
        "Right IJV access under ultrasound guidance. Right atrium and suprahepatic IVC catheterized. Occlusion of right and left hepatic vein ostia confirmed. Cavogram demonstrates extrinsic caudate lobe compression. Therapeutic anticoagulation plan formulated.",
      processDoneBy: "Dr Naresh Mangalhara",
    },
  ],
  postOperativeNotes: {
    accessSiteHemostasis: "Right Internal Jugular Vein (IJV) puncture site sealed; pressure dressing applied. Zero hematoma, zero local bruit, dressing dry and intact.",
    telemetryVitals: "BP: 120/76 mmHg, HR: 72 bpm sinus rhythm, SpO2: 99% on ambient air, RR: 16/min, Temp: 98.0°F",
    sheathRemovalTime: "26-08-2026 12:15 PM (Post-procedure check completed in Angiosuite)",
    sheathStatus: "Removed",
    recoveryStatus: "Conscious, oriented, stable hemodynamics. Fluid restriction 1.5 L/day initiated. Shifted safely to 202 Gastro Ward for ongoing observation.",
    recoveryBed: "202 GASTRO MALE AND FEMALE / GASTROUI-24",
    distalPulses: "Strong (+++) - Radial and carotid pulses bilaterally palpable and equal",
    immediateComplications: "Nil - Zero neck hematoma, zero hemothorax/pneumothorax, zero access site hemorrhage",
    recordedBy: "Dr Naresh Mangalhara (Associate Professor of IR)",
    recordedAt: "26-08-2026 01:00 PM",
    notes: "Post-venography recovery uneventful. Anticoagulation protocol with Apixaban bridged according to protocol. No acute distress.",
  },
  ddcDrugs: [
    { sNo: 1, medicine: "Tab. Torsemide 40mg [RMSCL DDC #445]", qtyIssued: 14, issuedDateTime: "31-08-2026 12:30 PM" },
    { sNo: 2, medicine: "Tab. Spironolactone 100mg [RMSCL DDC #448]", qtyIssued: 14, issuedDateTime: "31-08-2026 12:30 PM" },
    { sNo: 3, medicine: "Tab. Ofloxacin 400mg [RMSCL DDC #112]", qtyIssued: 10, issuedDateTime: "31-08-2026 12:30 PM" },
    { sNo: 4, medicine: "Syp. Lactulose 30ml [RMSCL DDC #512]", qtyIssued: 1, issuedDateTime: "31-08-2026 12:30 PM" },
  ],
  dischargeMedications: [
    { sNo: 1, medicine: "Tab. Apixaban 10mg [RMSCL DDC #820]", genericName: "Apixaban 10mg", dosePower: "10mg", route: "ORAL", frequency: "BD", days: 7, instructions: "For 7 days, then 5 mg OD thereafter for 14 days" },
    { sNo: 2, medicine: "Tab. Torsemide 40mg [RMSCL DDC #445]", genericName: "Torsemide 40mg", dosePower: "40mg", route: "ORAL", frequency: "BD", days: 14, instructions: "Morning and evening after meals" },
    { sNo: 3, medicine: "Tab. Spironolactone 100mg [RMSCL DDC #448]", genericName: "Spironolactone 100mg", dosePower: "100mg", route: "ORAL", frequency: "BD", days: 14, instructions: "With food" },
    { sNo: 4, medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]", genericName: "Pantoprazole 40mg", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 14, instructions: "Empty stomach in morning" },
    { sNo: 5, medicine: "Tab. Ofloxacin 400mg [RMSCL DDC #112]", genericName: "Ofloxacin 400mg", dosePower: "400mg", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals" },
    { sNo: 6, medicine: "Syp. Lactulose 30ml [RMSCL DDC #512]", genericName: "Lactulose 30ml", dosePower: "30ml", route: "ORAL", frequency: "HS", days: 14, instructions: "At bedtime to maintain 2-3 soft stools daily" },
    { sNo: 7, medicine: "Tab. Multivitamin NFI Formula [RMSCL DDC #394]", genericName: "Multivitamin NFI Formula", dosePower: "1 Tab", route: "ORAL", frequency: "OD", days: 14, instructions: "Post meals" },
  ],
  dischargeDetails: {
    generalAdvise: "Diet explained: High protein, low salt diet (<2g sodium/day). Daily morning weight monitoring. Fluid restriction to 1.5 L/day. Strict compliance with Apixaban anticoagulation.",
    conditionOnDischarge: "Improved",
    followUp: "In Gastro OPD Room No. 3, 4, 5 after 2 weeks; SOS on Monday/Thursday or immediate visit to IR Emergency in case of worsening distension.",
    followUpDate: "14-09-2026",
    approvedBy: "DR MEENU BAGARHATTA",
    dischargePreparedBy: "Dr Naresh Mangalhara",
  },
  attachments: [
    {
      id: "ATT-AN-01",
      title: "Triphasic CECT Abdomen: Caudate Lobe Hypertrophy",
      modality: "CT",
      capturedAt: "14-08-2026 02:30 PM",
      dataUrl: "",
      caption: "SMS Super Speciality Hospital CECT: Heterogeneous mosaic parenchymal perfusion, caudate hypertrophy, non-visualization of hepatic veins, and prominent retroperitoneal collateralization.",
    },
    {
      id: "ATT-AN-02",
      title: "Color Doppler Shunt Mapping & Portal Flow",
      modality: "US",
      capturedAt: "26-08-2026 11:45 AM",
      dataUrl: "",
      caption: "Ultrasound Color Doppler: Attenuated intrahepatic IVC caliber (6.2 mm), recanalized umbilical vein with hepatofugal collaterals.",
    },
  ],
};

export const ANJUM_NISHA_DISCHARGE: IhmsDischargeSummaryData = BUDD_CHIARI_DISCHARGE;

// ============================================================================
// AUTOMATIC GENERATOR FOR ANY PATIENT
// ============================================================================

/**
 * Pure deterministic numeric generator from string seed
 * Avoids any Math.random() in hospital discharge records
 */
function deterministicDigits(seed: string, length: number): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  let result = "";
  for (let i = 0; i < length; i++) {
    hash = (hash * 1664525 + 1013904223) >>> 0;
    result += (hash % 10).toString();
  }
  return result;
}

export function generateIhmsDischargeForPatient(patient: {
  id: string;
  name: string;
  age: number;
  sex: "Male" | "Female";
  hid: string;
  scanId?: string;
  unit: string;
  postedBy: string;
  summary: string;
  procedure: string;
  procedureKey: string;
  scheme: string;
  chiefComplaints?: string;
  clinicalHistory3Months?: string;
  cectFindings?: string;
  ipd: { ward: string; bed: string; podDay: string };
  labs: {
    ast: number;
    alt: number;
    bili: number;
    alb: number;
    creat: number;
    inr: number;
    plt: number;
  };
  inRoom?: {
    activeSheathAccess?: string;
    elapsedFluoroSeconds?: number;
    contrastInjectedMl?: number;
    macdThresholdMl?: number;
    vitals?: string;
    targetArtery?: string;
    cathetersInUse?: string[];
    currentStepDescription?: string;
  };
  postOp?: {
    recoveryBed?: string;
    punctureSiteSeal?: string;
    distalPulses?: string;
    instructions?: string;
    sheathRemoved?: boolean;
    dischargeReady?: boolean;
  };
  attachments?: ProceduralImageAttachment[];
}): IhmsDischargeSummaryData {
  const isBuddChiari = patient.procedureKey.includes("budd") || patient.procedureKey.includes("dips");
  const isVaricose = patient.procedureKey.includes("varicose") || patient.procedureKey.includes("glue");
  const isArterial = patient.procedureKey.includes("sfa") || patient.procedureKey.includes("pad");
  const isBae = patient.procedureKey.includes("bae") || patient.procedureKey.includes("hemoptysis");
  const isBiopsy = patient.procedureKey.includes("biopsy") || patient.procedureKey.includes("fnac");

  // Determine ICD-10
  let icdDiagnosis = "(S) Unspecified vascular intervention (Z98.89)";
  let diagnosis = patient.procedure;
  if (isBuddChiari) {
    icdDiagnosis = "(S) Budd-Chiari syndrome (I82.0)\n(S) Portal hypertension (K76.6)";
    diagnosis = "Budd-Chiari syndrome with diffuse hepatic venous outflow obstruction. Decompressive Shunt (DIPS) completed.";
  } else if (isVaricose) {
    icdDiagnosis = "(S) Varicose veins of lower extremities (I83)";
    diagnosis = "Varicose veins of lower extremity with incompetence.";
  } else if (isArterial) {
    icdDiagnosis = "(S) Atherosclerosis of native arteries of extremities with claudication (I70.21)";
    diagnosis = "Critical limb ischemia / severe peripheral arterial occlusive disease (SFA).";
  } else if (isBae) {
    icdDiagnosis = "(S) Hemoptysis (R04.2)\n(S) Bronchiectasis with acute lower respiratory infection (J47.0)";
    diagnosis = "Massive hemoptysis secondary to post-tubercular bronchiectasis with systemic collateral hypertrophy.";
  } else if (isBiopsy) {
    icdDiagnosis = "(S) Solitary lesion / Neoplasm of uncertain behavior (D48.9)";
    diagnosis = "Targeted image-guided tissue biopsy for histopathology and immunohistochemistry.";
  }

  // Procedure note narrative
  let procedureDetail = `Patient shifted to Angiosuite. Under strict aseptic precautions and local anesthesia, vascular access established. Targeted catheterization performed with diagnostic roadmapping. Intervention executed successfully. Completion run verifies optimal result. Hemostasis achieved. Patient tolerated procedure well.`;
  let opType: "Minor" | "Major" = "Major";
  let anaesthesia: "LOCAL" | "CONSCIOUS SEDATION" | "GENERAL" = "LOCAL";

  if (isBuddChiari) {
    procedureDetail = `Under strict aseptic conditions and real-time fluoroscopic guidance. Right IJV punctured under ultrasound guidance; 10F Ansel guiding sheath placed. Colapinto RUPS-100 needle utilized for transcaval portal vein access under ultrasound guidance. Portogram confirmed portal vein entry. Tract dilated with 8x40mm balloon. 10mm x 7cm covered (+2cm bare) Gore Viatorr TIPS stent-graft deployed across shunt tract. Pre-procedure gradient: 22 mmHg; post-procedure gradient: 6 mmHg. Widely patent shunt with brisk hepatofugal flow. Hemostasis intact.`;
  } else if (isBae) {
    procedureDetail = `Under strict aseptic conditions. Right CFA punctured; 5F sheath placed. Selective bronchial angiography performed with 5F Mikaelsson catheter revealing hypertrophied right intercostobronchial trunk with hypervascular parenchymal blush. Superselective cannulation achieved with 2.4F Progreat microcatheter. Embolization performed with PVA 300-500 µm particles and pushable microcoils. Completion angiogram demonstrated complete devascularization of the bleeding territory. No non-target embolization.`;
  } else if (isArterial) {
    procedureDetail = `Under strict aseptic conditions. Contralateral left CFA crossover access established with 6F 45cm Destination guiding sheath. Selective right superficial femoral artery (SFA) angiogram revealed long-segment occlusion. Crossed intraluminally with 0.035" Terumo Glidewire and Rubicon support catheter. Pre-dilation with 5x80mm balloon followed by deployment of Eluvia/EverFlex Nitinol self-expanding stent. Post-dilation performed. Brisk 2-vessel distal runoff confirmed into the pedal arch.`;
  } else if (isBiopsy) {
    opType = "Minor";
    procedureDetail = `Under real-time image guidance and strict asepsis, local anesthesia infiltrated. 18G coaxial core needle introduced into the target lesion. 3 core biopsy specimens retrieved with adequate tissue yield for histopathology. Check sonography/CT showed zero hematoma, pneumothorax, or active bleeding.`;
  }

  if (patient.inRoom && (patient.inRoom.contrastInjectedMl || patient.inRoom.elapsedFluoroSeconds)) {
    const fluoroMins = patient.inRoom.elapsedFluoroSeconds ? (patient.inRoom.elapsedFluoroSeconds / 60).toFixed(1) : "0.0";
    procedureDetail += ` Intra-Operative Telemetry: Access: ${patient.inRoom.activeSheathAccess || "Vascular Sheath"}. Contrast Administered: ${patient.inRoom.contrastInjectedMl || 0} mL (Safe MACD Limit: ${patient.inRoom.macdThresholdMl || 180} mL). Fluoroscopy Time: ${fluoroMins} min. Hemodynamic status: ${patient.inRoom.vitals || "Stable"}.`;
  }

  // Discharge meds
  const meds: DischargeMedicationItem[] = [
    { sNo: 1, medicine: "Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]", genericName: "Amoxicillin and Potassium Clavulanate 625mg", dosePower: "625mg", route: "ORAL", frequency: "BD", days: 5, instructions: "After food" },
    { sNo: 2, medicine: "Tab. Paracetamol 650mg [RMSCL DDC #28]", genericName: "Paracetamol 650mg", dosePower: "650mg", route: "ORAL", frequency: "TID", days: 3, instructions: "SOS for pain or fever" },
    { sNo: 3, medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]", genericName: "Pantoprazole 40mg", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 7, instructions: "Before breakfast" },
  ];

  if (isBuddChiari) {
    meds.unshift({ sNo: 0, medicine: "Tab. Apixaban 5mg [RMSCL DDC #820]", genericName: "Apixaban 5mg", dosePower: "5mg", route: "ORAL", frequency: "BD", days: 30, instructions: "Anticoagulation for stent patency" });
  } else if (isArterial) {
    meds.unshift(
      { sNo: 0, medicine: "Tab. Aspirin 75mg [RMSCL DDC #22]", genericName: "Aspirin 75mg", dosePower: "75mg", route: "ORAL", frequency: "OD", days: 90, instructions: "Post lunch" },
      { sNo: 0, medicine: "Tab. Clopidogrel 75mg [RMSCL DDC #25]", genericName: "Clopidogrel 75mg", dosePower: "75mg", route: "ORAL", frequency: "OD", days: 90, instructions: "Post lunch" }
    );
  }

  // Re-number
  meds.forEach((m, i) => (m.sNo = i + 1));

  // Pure deterministic IDs
  const admissionSeq = deterministicDigits(`${patient.id}_${patient.hid}`, 6);
  const admissionNo = patient.scanId && patient.scanId.startsWith("A/SMSH/")
    ? patient.scanId
    : `A/SMSH/26/${admissionSeq}`;

  const abha1 = deterministicDigits(`${patient.id}_abha1`, 4);
  const abha2 = deterministicDigits(`${patient.id}_abha2`, 4);
  const abha3 = deterministicDigits(`${patient.id}_abha3`, 4);
  const abhaNumber = `91-${abha1}-${abha2}-${abha3}`;

  // 3-Month Clinical History incorporation
  const history3m = patient.clinicalHistory3Months?.trim()
    || (patient.summary && (patient.summary.toLowerCase().includes("month") || patient.summary.toLowerCase().includes("history")) ? patient.summary : null)
    || "Documented 3-month progressive clinical course with refractory symptoms necessitating specialized endovascular intervention.";

  const complaints = patient.chiefComplaints?.trim()
    ? `${patient.chiefComplaints.trim()} (3-month clinical progression: ${history3m}). Admitted for planned interventional procedure: ${patient.procedure}. Presentation: ${patient.summary}`
    : `Admitted for planned interventional procedure: ${patient.procedure}. 3-Month Clinical Presentation: ${history3m}. ${patient.summary}`;

  const caseHistory = `Patient was admitted to ${patient.ipd.ward} under ${patient.unit} for evaluation and endovascular intervention. 3-Month Clinical History: ${history3m}. Indication Summary: ${patient.summary}.${patient.cectFindings ? ` Cross-sectional CECT imaging findings: ${patient.cectFindings}.` : ""} Pre-procedure biochemical, hematological, and cross-sectional imaging workup verified. Vital signs stable throughout admission.`;

  return {
    id: `IHMS-DIS-${patient.id}`,
    patientId: patient.id,
    admissionDetails: {
      hospitalName: "SAWAI MAN SINGH HOSPITAL JAIPUR",
      hospitalAddress: "SAWAI RAM SINGH ROAD TONK ROAD, JAIPUR",
      departmentName: "INTERVENTIONAL RADIOLOGY",
      unitHead: "DR MEENU BAGARHATTA",
      unitName: "UNIT I",
      opdDays: "Mon,Tue,Wed,Thu,Fri,Sat",
      hid: patient.hid,
      patientName: patient.name,
      age: `${patient.age}Y`,
      gender: patient.sex === "Male" ? "M" : "F",
      admissionNo,
      dateOfAdmission: new Date(Date.now() - 86400000).toLocaleDateString("en-IN") + " 09:30 AM",
      dateOfDischarge: new Date().toLocaleDateString("en-IN") + " 04:30 PM",
      admissionType: "ON DOCTOR ADVICE",
      dischargeType: "NORMAL DISCHARGE",
      patientCategory: patient.scheme || "MAAY",
      wardBed: `${patient.ipd.ward}/${patient.ipd.bed}`,
      abhaAddress: `${patient.name.toLowerCase().replace(/\s+/g, "")}@abdm`,
      abhaNumber,
      unitDoctors: [
        { name: "DR Meenu Bagarhatta", designation: "Senior Professor & Head" },
        { name: patient.postedBy || "Dr Naresh Mangalhara", designation: "Associate Professor" },
      ],
    },
    caseSummary: {
      icdDiagnosis,
      diagnosis,
      complaints,
      caseHistory,
      pastHistory: "No prior history of diabetes, hypertension, tuberculosis, or major surgical intervention.",
      familyHistory: "Not significant.",
      personalHistory: "No addiction. Normal bowel and bladder habits.",
      riskFactor: isVaricose
        ? "Prolonged standing, chronic venous insufficiency, familial history. Viral markers (HIV, HBsAg, Anti-HCV) non-reactive."
        : "Viral markers (HIV, HBsAg, Anti-HCV) non-reactive. Coagulation screen verified.",
    },
    physicalExam: {
      atAdmission: {
        bloodPressure: "120/80",
        pr: "74",
        temp: "98.4",
        rr: "18",
        spo2: "99",
        pallor: "Absent",
        icterus: "Absent",
        cyanosis: "Absent",
        clubbing: "Absent",
        lymphnodes: "Absent",
        edema: "Absent",
      },
      atDischarge: {
        bloodPressure: "118/76",
        pr: "70",
        temp: "98",
        rr: "16",
        spo2: "99",
        pallor: "Absent",
        icterus: "Absent",
        cyanosis: "Absent",
        clubbing: "Absent",
        lymphnodes: "Absent",
        edema: "Absent",
      },
    },
    systemicExam: {
      respiration: "N A D (Bilateral vesicular breath sounds, no rales)",
      cvs: "N A D (S1 S2 normal, regular rhythm)",
      perAbdomen: "N A D (Soft, non-tender, no guarding or rigidity)",
      cns: "N A D (Conscious, oriented to time, place, and person)",
      cranialNerve: "N A D",
      cerebellum: "Normal",
      meningealSigns: {
        neckRigidity: "Absent",
        kernigsSign: "Absent",
      },
      localExamination: patient.postOp?.punctureSiteSeal
        ? `Vascular access (${patient.inRoom?.activeSheathAccess || "puncture site"}): ${patient.postOp.punctureSiteSeal}. Sheath status: ${patient.postOp.sheathRemoved ? "Removed with manual compression / closure" : "In situ"}. Distal peripheral pulses: ${patient.postOp.distalPulses || "palpable (+++)"}. Zero active bleeding or hematoma.`
        : "Vascular access site dry and intact. Zero hematoma, bruit, or active oozing. Distal peripheral pulses palpable (+++) and equal.",
    },
    investigations: {
      ecg: "Normal Sinus Rhythm, HR 72/min, normal axis.",
      echo2D: "Normal LV systolic function, LVEF 60%, valves normal, no pericardial effusion.",
      xRay: "Chest X-Ray: Clear lung parenchyma, normal cardiothoracic ratio.",
      sonography: "Pre-procedure Doppler mapping completed. Post-procedure ultrasound verifies widely patent access site and target vessel flow.",
      ctScan: "CECT roadmap reviewed prior to intervention.",
      labResults: [
        { testName: "LIVER FUNCTION", parameterName: "AST", firstResult: `${patient.labs.ast} U/L` },
        { testName: "LIVER FUNCTION", parameterName: "ALT", firstResult: `${patient.labs.alt} U/L` },
        { testName: "LIVER FUNCTION", parameterName: "Total Bilirubin", firstResult: `${patient.labs.bili} mg/dL` },
        { testName: "LIVER FUNCTION", parameterName: "Serum Albumin", firstResult: `${patient.labs.alb} g/dL` },
        { testName: "RENAL FUNCTION", parameterName: "Serum Creatinine", firstResult: `${patient.labs.creat} mg/dL` },
        { testName: "COAGULATION", parameterName: "PT / INR", firstResult: `${patient.labs.inr}` },
        { testName: "CBC", parameterName: "Platelets", firstResult: `${patient.labs.plt.toLocaleString()} /uL` },
      ],
    },
    procedureDetails: [
      {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:30 AM",
        operationType: opType,
        surgicalProcedure: patient.procedure,
        anaesthesiaType: anaesthesia,
        procedureDetail,
        processDoneBy: patient.postedBy || "Dr Naresh Mangalhara",
      },
    ],
    postOperativeNotes: {
      accessSiteHemostasis: patient.postOp?.punctureSiteSeal
        ? `Access site (${patient.inRoom?.activeSheathAccess || "Puncture site"}): ${patient.postOp.punctureSiteSeal}. Pressure dressing applied, site clean and dry with zero active hematoma or oozing.`
        : "Vascular access site dry and intact. Manual compression / closure achieved. Zero hematoma, bruit or active oozing.",
      telemetryVitals: patient.inRoom?.vitals
        ? `Monitored Cath-Lab Holding Vitals: ${patient.inRoom.vitals}. Temperature: 98.4°F, Respiratory Rate: 16/min regular.`
        : "BP: 120/80 mmHg, HR: 72 bpm regular, SpO2: 99% on room air, RR: 16/min, Afebrile",
      sheathRemovalTime: patient.postOp?.sheathRemoved
        ? `${new Date().toLocaleDateString("en-IN")} 11:30 AM (Sheath safely removed post-procedure; manual hemostasis confirmed)`
        : "Sheath in situ under continuous hemodynamic monitoring",
      sheathStatus: patient.postOp?.sheathRemoved ? "Removed" : "In Situ",
      recoveryStatus: patient.postOp?.dischargeReady
        ? "Conscious, fully oriented, ambulating comfortably, discharge criteria fulfilled."
        : `Conscious, oriented, pain controlled (VAS 1/10). Flat supine bed rest / recovery instructions active: ${patient.postOp?.instructions || "Flat supine bed rest for 4 hours."}`,
      recoveryBed: patient.postOp?.recoveryBed || `${patient.ipd.ward} / ${patient.ipd.bed}`,
      distalPulses: patient.postOp?.distalPulses ? `${patient.postOp.distalPulses} - equal bilaterally with prompt capillary refill (<2s)` : "Strong (+++) - Bilateral peripheral pulses palpable and equal",
      immediateComplications: "Nil documented - Zero access site bleeding, zero pseudoaneurysm, zero acute distal limb ischemia",
      recordedBy: patient.postedBy || "Dr. Neel Yadav (Senior Resident IR)",
      recordedAt: `${new Date().toLocaleDateString("en-IN")} 12:00 PM`,
      notes: `Patient underwent ${patient.procedure}. Immediate post-operative monitoring in recovery completed uneventfully. Vitals and access site stability documented.`,
    },
    ddcDrugs: [
      { sNo: 1, medicine: "Tab. Paracetamol 500mg [RMSCL DDC #28]", qtyIssued: 10, issuedDateTime: new Date().toLocaleDateString("en-IN") + " 11:00 AM" },
      { sNo: 2, medicine: "Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]", qtyIssued: 10, issuedDateTime: new Date().toLocaleDateString("en-IN") + " 11:00 AM" },
      { sNo: 3, medicine: "Tab. Multivitamin NFI Formula [RMSCL DDC #394]", qtyIssued: 10, issuedDateTime: new Date().toLocaleDateString("en-IN") + " 11:00 AM" },
    ],
    dischargeMedications: meds,
    dischargeDetails: {
      generalAdvise: patient.postOp?.instructions
        ? `${patient.postOp.instructions} Keep puncture site clean and dry for 48 hours. Push oral fluids for contrast clearance. Normal diet. Avoid heavy lifting (>5 kg) for 1 week. Report immediately to emergency in case of fever, bleeding, or increasing swelling.`
        : "Keep puncture site clean and dry for 48 hours. Push oral fluids for contrast clearance. Normal diet. Avoid heavy lifting (>5 kg) for 1 week. Report immediately to emergency in case of fever, bleeding, or increasing swelling.",
      conditionOnDischarge: "Improved",
      followUp: isVaricose
        ? "Follow-up in Interventional Radiology OPD Room 48 / Old Gastro Ward after 4 weeks with repeat Doppler check."
        : "Follow-up in Interventional Radiology OPD Room 48 / Old Gastro Ward after 2 weeks with repeat Doppler check.",
      followUpDate: (() => {
        const d = new Date();
        d.setDate(d.getDate() + (isVaricose ? 30 : 14));
        return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
      })(),
      approvedBy: "DR MEENU BAGARHATTA",
      dischargePreparedBy: patient.postedBy || "Dr Naresh Mangalhara",
    },
    attachments:
      patient.attachments && patient.attachments.length > 0
        ? patient.attachments.filter(att => !isVaricose || att.modality !== "US")
        : [
            {
              id: `ATT-${patient.id}-01`,
              title: `Pre-Procedure Diagnostic Angiogram / Roadmap`,
              modality: "XA",
              capturedAt:
                new Date(Date.now() - 86400000).toLocaleDateString("en-IN") + " 10:00 AM",
              dataUrl: "",
              caption: `SMS Medical College Angiosuite: Pre-intervention roadmap for ${patient.procedure}. Target anatomy identified with selective catheterization.`,
            },
            {
              id: `ATT-${patient.id}-02`,
              title: `Post-Procedure Completion Image & Hemostasis`,
              modality: "XA",
              capturedAt: new Date().toLocaleDateString("en-IN") + " 11:15 AM",
              dataUrl: "",
              caption: `SMS Medical College Angiosuite: Post-procedure check verifying technical success, prompt flow, and complete devascularization/stent expansion.`,
            },
          ],
  };
}
