/**
 * AUTHENTIC SMS Hospital IR Patient Archive
 *
 * GENERATED FILE -- do not edit by hand.
 * Regenerate with:  python C:/SSO/tools/ir_bundler/build_real_archive.py
 *
 * Source registry : DSA DATA SHEET.xlsx (IR 1-1058)
 * Documents linked: 60 scanned/extracted files, matched to
 *                   IR numbers by identifiers found INSIDE each document
 * Patients with a real document on file: 15
 *
 * This replaces the deleted synthetic archive. Every field here traces to a
 * real record. Structured vitals, medication lists and operator rosters are
 * deliberately ABSENT -- they are not reliably machine-readable across this
 * corpus, so they are omitted rather than invented. The UI shows the
 * document file and its on-disk location instead.
 */

export interface ArchiveDocumentRef {
  path: string;
  method: string;
  chars: number;
  linkReason: string;
}

export interface ArchivedPatientRecord {
  irNumber: string;
  dsaNo: string;
  irNumberValue: number;
  year: number;
  month: string;
  monthNum: number;
  patientName: string;
  age: number | string;
  gender: "Male" | "Female" | "Unknown";
  crNo: string;
  admissionNo?: string;
  procedureName: string;
  procedureCategory: string;
  diagnosis: string;
  scheme: string;
  unitOrWard: string;
  procedureDate: string;
  folderPath?: string | null;
  filesAvailable: string[];
  hasDischargeCard: boolean;
  hasOperativeNote: boolean;
  dischargeDocuments: ArchiveDocumentRef[];
  operativeDocuments: ArchiveDocumentRef[];
  provenance: "authentic";
  dischargeChars: number;
  operativeChars: number;
  dischargeData?: {
    admissionDate?: string;
    dischargeDate?: string;
    chiefComplaints?: string;
    caseHistory?: string;
    physicalExam?: {
      bloodPressure?: string;
      pulse?: string;
      temperature?: string;
      respiratoryRate?: string;
      spo2?: string;
      systemicExam?: string;
      localExam?: string;
    };
    operativeSummary?: string;
    medications?: Array<{
      sNo?: number;
      medicine: string;
      dosePower: string;
      frequency: string;
      days: number;
      instructions: string;
    }>;
    dischargeAdvice?: string;
    followUp?: string;
  } | null;
  operativeNoteData?: {
    indication?: string;
    operators?: string;
    accessSite?: string;
    sheath?: string;
    diagnosticCath?: string;
    microCath?: string;
    microWire?: string;
    embolicAgent?: string;
    balloon?: string;
    contrastMl?: string | number;
    heparinUnits?: string | number;
    findings?: string;
    techniqueSummary?: string;
    technicalSuccess?: string;
    complications?: string;
    postOpCare?: string;
  } | null;
}

export const SMS_PATIENT_ARCHIVE_REAL: ArchivedPatientRecord[] = [
  {
    irNumber: "IR-39",
    dsaNo: "39",
    irNumberValue: 39,
    year: 2022,
    month: "September",
    monthNum: 9,
    patientName: "GORISHANKAR",
    crNo: "1012215506675",
    procedureName: "ENDOVASCULAR PVA  EMBOLIZATION",
    procedureCategory: "Other IR",
    diagnosis: "LT SIDE SPhENOPALATINE ,recurrent h/o episatxis",
    scheme: "MMCSBY",
    unitOrWard: "ENT UNIT 1",
    procedureDate: "2022-09-28",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1486,
    age: "65",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["suman devi right maxillary hemangioma.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\suman devi right maxillary hemangioma.docx", method: "docx", chars: 1486, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-137",
    dsaNo: "137",
    irNumberValue: 137,
    year: 2023,
    month: "April",
    monthNum: 4,
    patientName: "FARAS GIRI",
    crNo: "180121095723866",
    procedureName: "SEMS",
    procedureCategory: "PTBD",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS /UNIT1/ OLD GASTRO WARD",
    procedureDate: "2023-04-06",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1291,
    age: "73",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["Faras Giri SEMS 6.4.23.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\April 23\\Faras Giri SEMS 6.4.23.docx", method: "docx", chars: 1291, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-138",
    dsaNo: "138",
    irNumberValue: 138,
    year: 2023,
    month: "April",
    monthNum: 4,
    patientName: "ARUNA DEVI",
    crNo: "70223146342054",
    procedureName: "SEMS",
    procedureCategory: "PTBD",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "MEDICAL ONCOLOGY /UNIT 1/DAY CARE BCC WARD",
    procedureDate: "2023-04-10",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1456,
    age: "55",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["ARUNA DEVI BILATERAL SEMS 10.04.23.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\April 23\\ARUNA DEVI BILATERAL SEMS 10.04.23.docx", method: "docx", chars: 1456, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-145",
    dsaNo: "145",
    irNumberValue: 145,
    year: 2023,
    month: "April",
    monthNum: 4,
    patientName: "CHANDRA KANWAR",
    crNo: "30719103545379",
    procedureName: "VERICOSE VEIN",
    procedureCategory: "Other IR",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS /UNIT1/ OLD GASTRO WARD",
    procedureDate: "2023-04-19",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1244,
    age: "37",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["Komal Endo Vascular Laser Ablation of Vericose Vein 12.04.23.docx", "chandraknwar Endo Vascular Laser Ablation of Vericose Vein 12.04.23.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\April 23\\Komal Endo Vascular Laser Ablation of Vericose Vein 12.04.23.docx", method: "docx", chars: 1244, linkReason: "name_and_date_exact"}, {path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\April 23\\chandraknwar Endo Vascular Laser Ablation of Vericose Vein 12.04.23.docx", method: "docx", chars: 1158, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-147",
    dsaNo: "147",
    irNumberValue: 147,
    year: 2023,
    month: "April",
    monthNum: 4,
    patientName: "PRAVEEN SAINI",
    crNo: "80521115012369",
    procedureName: "VERICOSE VEIN",
    procedureCategory: "Other IR",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS /UNIT1/ OLD GASTRO WARD",
    procedureDate: "2023-04-20",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1122,
    age: "21",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["Praveen saini Endo Vascular Laser Ablation of Vericose Vein 20.04.23.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\April 23\\Praveen saini Endo Vascular Laser Ablation of Vericose Vein 20.04.23.docx", method: "docx", chars: 1122, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-148",
    dsaNo: "148",
    irNumberValue: 148,
    year: 2023,
    month: "April",
    monthNum: 4,
    patientName: "LAKHAN LAL",
    crNo: "101222138591869",
    procedureName: "VERICOSE VEIN",
    procedureCategory: "Other IR",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS /UNIT1/ OLD GASTRO WARD",
    procedureDate: "2023-04-24",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1173,
    age: "60",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["lakhan Endo Vascular Laser Ablation of Vericose Vein 12.04.23.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\April 23\\lakhan Endo Vascular Laser Ablation of Vericose Vein 12.04.23.docx", method: "docx", chars: 1173, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-252",
    dsaNo: "252",
    irNumberValue: 252,
    year: 2023,
    month: "August",
    monthNum: 8,
    patientName: "RAKESH CHOUDHARY",
    crNo: "30723165806190",
    procedureName: "JNA EMBOLIZATION",
    procedureCategory: "JNA",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS/UNIT 1/OLD GASTRO WARD",
    procedureDate: "2023-08-31",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1549,
    age: "20",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["Rakesh  JNA pre po embolisation.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\aug23\\Rakesh  JNA pre po embolisation.docx", method: "docx", chars: 1549, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-300",
    dsaNo: "300",
    irNumberValue: 300,
    year: 2023,
    month: "November",
    monthNum: 11,
    patientName: "POOJA",
    crNo: "110622112517857",
    procedureName: "AVM ERMBOLISAION",
    procedureCategory: "Other IR",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS/UNIT 1/OLD GASTRO WARD",
    procedureDate: "2023-11-03",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 2073,
    age: "23",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["POOJA ARM AVM.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\aug23\\POOJA ARM AVM.docx", method: "docx", chars: 2073, linkReason: "uhid_exact"}],
  },
  {
    irNumber: "IR-332",
    dsaNo: "332",
    irNumberValue: 332,
    year: 2023,
    month: "December",
    monthNum: 12,
    patientName: "MEENA",
    crNo: "211123185670425",
    procedureName: "SCLEROTHERAPY",
    procedureCategory: "Other IR",
    diagnosis: "",
    scheme: "RMRS",
    unitOrWard: "CTVS/UNIT1",
    procedureDate: "2023-12-08",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 489,
    age: "34",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["mEENA SCLEROTHERAPY.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\DEcember 2023\\mEENA SCLEROTHERAPY.docx", method: "docx", chars: 489, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-334",
    dsaNo: "334",
    irNumberValue: 334,
    year: 2023,
    month: "December",
    monthNum: 12,
    patientName: "HIRA LAL",
    crNo: "10223145382288",
    procedureName: "SEMS",
    procedureCategory: "PTBD",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS/UNIT 1/OLD GASTRO WARD",
    procedureDate: "2023-12-11",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1069,
    age: "68",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["hira lal SEMS.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\DEcember 2023\\hira lal SEMS.docx", method: "docx", chars: 1069, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-339",
    dsaNo: "339",
    irNumberValue: 339,
    year: 2023,
    month: "December",
    monthNum: 12,
    patientName: "AJAY",
    crNo: "51023179657667",
    procedureName: "JNA",
    procedureCategory: "JNA",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSI /UNIT1/OLD GASTRO WARD",
    procedureDate: "2023-12-14",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1445,
    age: "16",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["Ajay JNA.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\DEcember 2023\\Ajay JNA.docx", method: "docx", chars: 1445, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-341",
    dsaNo: "341",
    irNumberValue: 341,
    year: 2023,
    month: "December",
    monthNum: 12,
    patientName: "MAHENDRA PAREEK",
    crNo: "301023183074255",
    procedureName: "HEPATIC ARTERY PSEUDOANEURYSM",
    procedureCategory: "Other IR",
    diagnosis: "",
    scheme: "DM PERMISSION[DOR]",
    unitOrWard: "RADIODIAGNOSIS/UNIT1/OLDGASTRO WARD",
    procedureDate: "2023-12-16",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1611,
    age: "31",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["Mahender pareek Hepati PSA.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\DEcember 2023\\Mahender pareek Hepati PSA.docx", method: "docx", chars: 1611, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-343",
    dsaNo: "343",
    irNumberValue: 343,
    year: 2023,
    month: "December",
    monthNum: 12,
    patientName: "NEELAM BHATIA",
    crNo: "291123186543675",
    procedureName: "VARICOSE VEIN LASER ABLATION",
    procedureCategory: "VenaSeal",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGNOSIS/UNIT1/OLDGASTRO WARD",
    procedureDate: "2023-12-19",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 2047,
    age: "46",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["DEPARTMENT OF RADIODIAGNOSIS.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\DEcember 2023\\DEPARTMENT OF RADIODIAGNOSIS.docx", method: "docx", chars: 2047, linkReason: "uhid_exact"}],
  },
  {
    irNumber: "IR-348",
    dsaNo: "348",
    irNumberValue: 348,
    year: 2023,
    month: "December",
    monthNum: 12,
    patientName: "SUMIT KUMAR YADAV",
    crNo: "250723168960637",
    procedureName: "JNA",
    procedureCategory: "JNA",
    diagnosis: "",
    scheme: "MMCSBY",
    unitOrWard: "RADIODIAGOSIS/OLDGASTRO /UNIT1",
    procedureDate: "2023-12-22",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1452,
    age: "16",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["sumit kumar Yadav JNA.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\DEcember 2023\\sumit kumar Yadav JNA.docx", method: "docx", chars: 1452, linkReason: "name_and_date_exact"}],
  },
  {
    irNumber: "IR-774",
    dsaNo: "774",
    irNumberValue: 774,
    year: 2025,
    month: "November",
    monthNum: 11,
    patientName: "ARUNA DEVI",
    crNo: "270123144850806",
    procedureName: "VARICOSE VEIN DSA WITH SCLEROTHERAPY",
    procedureCategory: "VenaSeal",
    diagnosis: "",
    scheme: "MAAY",
    unitOrWard: "IR/OLD GASTRO WARD / UNIT 1",
    procedureDate: "2025-11-13",
    hasDischargeCard: false,
    hasOperativeNote: true,
    provenance: "authentic",
    dischargeChars: 0,
    operativeChars: 1956,
    age: "54",
    gender: "Unknown",
    folderPath: "",
    admissionNo: "",
    filesAvailable: ["ARUNA.docx"],
    dischargeDocuments: [],
    operativeDocuments: [{path: "01_Clinical_Operative_Cases_and_Reports\\2023_Cases\\ARUNA.docx", method: "docx", chars: 1956, linkReason: "uhid_exact"}],
  },
];

export default SMS_PATIENT_ARCHIVE_REAL;
