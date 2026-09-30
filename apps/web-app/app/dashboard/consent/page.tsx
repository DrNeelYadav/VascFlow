"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  FileText,
  Printer,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  User,
  HeartPulse,
  Calendar,
  Layers,
  ChevronDown,
  Sparkles,
  Info,
  Clock,
  Pill,
  Activity,
  AlertCircle,
  Search,
  Stethoscope,
  Syringe,
  FileCheck,
} from "lucide-react";
import {
  PROCEDURE_CONSENT_TEMPLATES,
  GENERAL_RISKS_EN,
  GENERAL_RISKS_HI,
  STATUTORY_DECLARATION_EN,
  STATUTORY_DECLARATION_HI,
  ProcedureConsentTemplate,
} from "../../lib/consent/consentData";
import { EXTENSIVE_IR_PROCEDURES } from "../../lib/data/procedures";
import { ALL_MASTER_PROCEDURES } from "../../lib/masterCatalog";
import {
  LAB_SAFETY_THRESHOLDS,
  DRUG_HOLDING_SCHEDULE,
  WARD_NURSING_CHECKLIST,
} from "../../lib/preparation/preparationData";
import { INITIAL_RIS_WORKLIST_CASES } from "../worklist/worklistData";

// Relationship options mapping English to Hindi
const RELATIONSHIP_OPTIONS = [
  { value: "Husband", labelEn: "Husband", labelHi: "पति" },
  { value: "Wife", labelEn: "Wife", labelHi: "पत्नी" },
  { value: "Son", labelEn: "Son", labelHi: "पुत्र" },
  { value: "Daughter", labelEn: "Daughter", labelHi: "पुत्री" },
  { value: "Father", labelEn: "Father", labelHi: "पिता" },
  { value: "Mother", labelEn: "Mother", labelHi: "माता" },
  { value: "Brother", labelEn: "Brother", labelHi: "भाई" },
  { value: "Sister", labelEn: "Sister", labelHi: "बहन" },
  { value: "Relative", labelEn: "Relative", labelHi: "नातेदार / परिजन" },
  { value: "Self", labelEn: "Self", labelHi: "स्वयं" },
  { value: "Guardian", labelEn: "Guardian", labelHi: "विधिक संरक्षक" },
];

// Clinical categories order for stagewise grouping
const CATEGORY_ORDER = [
  "Hepatobiliary & Portal Hypertension",
  "Interventional Oncology",
  "Arterial Embolization & Pelvic Interventions",
  "Aortic & Peripheral Arterial Interventions",
  "Neurointerventional & Lymphatic",
  "Venous Thromboembolism & Non-Vascular Drainage",
  "Dialysis Access & Fistula",
  "Rare Syndromes & Vascular Disorders",
];

// Helper to normalize procedure category into one of the 8 clinical domains
function normalizeProcedureCategory(rawCat: string): string {
  if (!rawCat) return "Hepatobiliary & Portal Hypertension";
  const c = rawCat.toLowerCase();
  if (c.includes("portal") || c.includes("hpb") || c.includes("hepato") || c.includes("biliary")) {
    return "Hepatobiliary & Portal Hypertension";
  }
  if (c.includes("onco") || c.includes("ablat") || c.includes("tace") || c.includes("sirt") || c.includes("radioembol")) {
    return "Interventional Oncology";
  }
  if (c.includes("embol") || c.includes("pelvic") || c.includes("visceral") || c.includes("gyn") || c.includes("hemorrhage") || c.includes("trauma")) {
    return "Arterial Embolization & Pelvic Interventions";
  }
  if (c.includes("aort") || c.includes("peripheral") || c.includes("arterial") || c.includes("revascular")) {
    return "Aortic & Peripheral Arterial Interventions";
  }
  if (c.includes("neuro") || c.includes("stroke") || c.includes("lymph") || c.includes("cerebro") || c.includes("aneurysm")) {
    return "Neurointerventional & Lymphatic";
  }
  if (c.includes("venous") || c.includes("varicose") || c.includes("drain") || c.includes("biops") || c.includes("urolog") || c.includes("enteric") || c.includes("pcn") || c.includes("fluid")) {
    return "Venous Thromboembolism & Non-Vascular Drainage";
  }
  if (c.includes("dialysis") || c.includes("fistula") || c.includes("access") || c.includes("avf")) {
    return "Dialysis Access & Fistula";
  }
  return "Rare Syndromes & Vascular Disorders";
}

// Helper to resolve or construct a ProcedureConsentTemplate for any of the ~290 IR procedures
function getProcedureConsentTemplate(templateKey: string): ProcedureConsentTemplate {
  // 1. Direct match in dedicated rich consent templates
  if (PROCEDURE_CONSENT_TEMPLATES[templateKey]) {
    return PROCEDURE_CONSENT_TEMPLATES[templateKey];
  }

  // 2. Alias mapping from procedure IDs to existing rich templates
  const aliasMap: Record<string, string> = {
    "tips-creation-viatorr": "tips",
    "tips-revision-angioplasty-relining": "tips",
    "tips-with-variceal-embolization": "tips",
    "tips-stent-graft-reduction": "tips",
    "tace-neuroendocrine-liver-metastases": "tace",
    "bae-massive-hemoptysis": "bae",
    "ptbd-right-lobe-access": "ptbd",
    "ptbd-left-lobe-access": "ptbd",
    "ptbd-covered-stent-bile-leak": "ptbd",
    "uae-primary-pph-gelfoam": "uae",
    "uae-symptomatic-adenomyosis": "uae",
    "pcnl-access-tract-dilation": "pcn",
    "evar-bifurcated-modular": "evar",
    "varicose-evla": "varicose",
    "fistuloplasty-stenosis": "fistuloplasty",
  };
  if (aliasMap[templateKey] && PROCEDURE_CONSENT_TEMPLATES[aliasMap[templateKey]]) {
    return PROCEDURE_CONSENT_TEMPLATES[aliasMap[templateKey]];
  }

  // 3. Find in ALL_MASTER_PROCEDURES catalog (~580+ procedures across all 22 categories)
  const master = ALL_MASTER_PROCEDURES.find((p) => p.id === templateKey);
  if (master) {
    const indicationsList =
      master.targetAnatomy && master.targetAnatomy.length > 0
        ? [
            `Targeted therapeutic intervention for ${master.targetAnatomy.join(", ")}`,
            `Package Code: ${master.maayRghsCompatibility.packageCode} (${master.maayRghsCompatibility.packageName})`,
          ]
        : ["Interventional radiology diagnostic and therapeutic indication"];
    const complicationsList =
      master.postOpCare.redFlags && master.postOpCare.redFlags.length > 0
        ? [
            "Catheter access site hematoma, swelling, pain, or pseudoaneurysm formation.",
            "Vessel injury, arterial/venous dissection, spasm, or in-situ thrombosis.",
            "Allergic reaction to iodinated contrast media or contrast-induced nephropathy.",
            ...master.postOpCare.redFlags,
          ]
        : [
            "Catheter access site hematoma, swelling, pain, or pseudoaneurysm formation.",
            "Vessel injury, arterial/venous dissection, spasm, or in-situ thrombosis.",
            "Allergic reaction to iodinated contrast media or contrast-induced nephropathy.",
            "Technical failure or inability to complete procedure due to complex vascular anatomy.",
          ];

    return {
      id: master.id,
      category: normalizeProcedureCategory(master.categoryName),
      nameEn: master.title,
      nameHi: `${master.title} (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)`,
      indicationEn: indicationsList.join("; "),
      indicationHi:
        "क्लीनिकल रोग निदान, इमेजिंग जांच एवं विशेषज्ञ चिकित्सीय परामर्श अनुसार न्यूनतम इनवेसिव प्रक्रिया की चिकित्सीय आवश्यकता।",
      descriptionEn:
        master.proceduralNarrativeTemplate ||
        `Under real-time image guidance (fluoroscopy, ultrasound, or CT), specialized catheters, wires, and interventional hardware are percutaneously guided to achieve targeted therapeutic resolution for ${master.title}.`,
      descriptionHi:
        "एक्स-रे (फ्लोरोस्कोपी), सीटी स्कैन अथवा सोनोग्राफी की सीधी निगरानी में सुई एवं कैथेटर द्वारा की जाने वाली न्यूनतम आक्रामक इंटरवेंशनल प्रक्रिया, जिसमें बिना बड़े चीरे के सटीक उपचार किया जाता है।",
      benefitsEn: [
        `Targeted therapeutic intervention for ${master.targetAnatomy.join(", ")}`,
        "Minimally invasive percutaneous approach avoiding large surgical incisions, with faster recovery.",
        "Significantly reduced post-procedure pain, minimal blood loss, and shorter hospital stay.",
      ],
      benefitsHi: [
        "न्यूनतम चीर-फाड़ द्वारा बीमारी का लक्षित, सुरक्षित एवं प्रभावी उपचार।",
        "खुले ऑपरेशन की तुलना में अत्यंत कम दर्द, नगण्य रक्तस्राव एवं टांके के निशान नहीं होना।",
        "शीघ्र स्वास्थ्य लाभ एवं अस्पताल से जल्दी छुट्टी।",
      ],
      specificRisksEn: complicationsList,
      specificRisksHi: [
        "कैथेटर डालने के स्थान पर रक्तस्राव, सूजन, नील पड़ना अथवा हेमेटोमा होना।",
        "रक्तवाहिनी में सिकुड़न (Spasm), आंतरिक परत में खिंचाव या खून का थक्का जमना।",
        "कंट्रास्ट डाई से एलर्जी अथवा गुर्दों (किडनी) की कार्यक्षमता पर अस्थायी प्रभाव।",
        "जटिल शारीरिक बनावट के कारण प्रक्रिया में तकनीकी कठिनाई या पुनः प्रक्रिया की आवश्यकता।",
      ],
      alternativesEn:
        "Open surgical operation, endoscopic intervention, medical pharmacotherapy, or watchful clinical surveillance depending on clinical staging.",
      alternativesHi:
        "खुला ऑपरेशन (ओपन सर्जरी), दूरबीन द्वारा इलाज, अथवा केवल दवाओं द्वारा रूढ़िवादी उपचार।",
      sedationTypeEn:
        master.sedation ||
        "Local anesthesia infiltration at puncture site with monitored conscious sedation / IV analgesia as clinically indicated.",
      sedationTypeHi:
        "प्रक्रिया स्थल पर स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं आवश्यकतानुसार हल्की बेहोशी / शामक दवाइयां (Conscious Sedation)।",
    };
  }

  // 4. Find in EXTENSIVE_IR_PROCEDURES catalog (~290 procedures)
  const proc = EXTENSIVE_IR_PROCEDURES.find((p) => p.id === templateKey);
  if (proc) {
    const indicationsList =
      proc.indications && proc.indications.length > 0
        ? proc.indications
        : ["Interventional radiology diagnostic and therapeutic indication"];
    const complicationsList =
      proc.complications && proc.complications.length > 0
        ? proc.complications
        : [
            "Catheter access site hematoma, swelling, pain, or pseudoaneurysm formation.",
            "Vessel injury, arterial/venous dissection, spasm, or in-situ thrombosis.",
            "Allergic reaction to iodinated contrast media or contrast-induced nephropathy.",
            "Technical failure or inability to complete procedure due to complex vascular anatomy.",
          ];

    return {
      id: proc.id,
      category: normalizeProcedureCategory(proc.category),
      nameEn: proc.name,
      nameHi: `${proc.name} (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)`,
      indicationEn: indicationsList.join("; "),
      indicationHi:
        "क्लीनिकल रोग निदान, इमेजिंग जांच एवं विशेषज्ञ चिकित्सीय परामर्श अनुसार न्यूनतम इनवेसिव प्रक्रिया की चिकित्सीय आवश्यकता।",
      descriptionEn:
        proc.techniqueSteps && proc.techniqueSteps.length > 0
          ? proc.techniqueSteps.join(" ")
          : `Under real-time image guidance (fluoroscopy, ultrasound, or CT), specialized catheters, wires, and interventional hardware are percutaneously guided to achieve targeted therapeutic resolution for ${proc.name}.`,
      descriptionHi:
        "एक्स-रे (फ्लोरोस्कोपी), सीटी स्कैन अथवा सोनोग्राफी की सीधी निगरानी में सुई एवं कैथेटर द्वारा की जाने वाली न्यूनतम आक्रामक इंटरवेंशनल प्रक्रिया, जिसमें बिना बड़े चीरे के सटीक उपचार किया जाता है।",
      benefitsEn: [
        ...indicationsList.slice(0, 2).map((ind) => `Targeted therapeutic intervention for ${ind.toLowerCase()}`),
        "Minimally invasive percutaneous approach avoiding large surgical incisions, with faster recovery.",
        "Significantly reduced post-procedure pain, minimal blood loss, and shorter hospital stay.",
      ],
      benefitsHi: [
        "न्यूनतम चीर-फाड़ द्वारा बीमारी का लक्षित, सुरक्षित एवं प्रभावी उपचार।",
        "खुले ऑपरेशन की तुलना में अत्यंत कम दर्द, नगण्य रक्तस्राव एवं टांके के निशान नहीं होना।",
        "शीघ्र स्वास्थ्य लाभ एवं अस्पताल से जल्दी छुट्टी।",
      ],
      specificRisksEn: complicationsList,
      specificRisksHi: [
        "कैथेटर डालने के स्थान पर रक्तस्राव, सूजन, नील पड़ना अथवा हेमेटोमा होना।",
        "रक्तवाहिनी में सिकुड़न (Spasm), आंतरिक परत में खिंचाव या खून का थक्का जमना।",
        "कंट्रास्ट डाई से एलर्जी अथवा गुर्दों (किडनी) की कार्यक्षमता पर अस्थायी प्रभाव।",
        "जटिल शारीरिक बनावट के कारण प्रक्रिया में तकनीकी कठिनाई या पुनः प्रक्रिया की आवश्यकता।",
      ],
      alternativesEn:
        "Open surgical operation, endoscopic intervention, medical pharmacotherapy, or watchful clinical surveillance depending on clinical staging.",
      alternativesHi:
        "खुला ऑपरेशन (ओपन सर्जरी), दूरबीन द्वारा इलाज, अथवा केवल दवाओं द्वारा रूढ़िवादी उपचार।",
      sedationTypeEn:
        "Local anesthesia infiltration at puncture site with monitored conscious sedation / IV analgesia as clinically indicated.",
      sedationTypeHi:
        "प्रक्रिया स्थल पर स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं आवश्यकतानुसार हल्की बेहोशी / शामक दवाइयां (Conscious Sedation)।",
    };
  }

  // Fallback default
  return PROCEDURE_CONSENT_TEMPLATES["tips"];
}

export default function ConsentAndPreparationPage() {
  const [activeTab, setActiveTab] = useState<"CONSENT" | "PREPARATION" | "OPERATIVE_NOTE">("CONSENT");
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<string>("tips");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [procedureSearch, setProcedureSearch] = useState<string>("");
  const [languageMode, setLanguageMode] = useState<"BILINGUAL" | "EN" | "HI">("BILINGUAL");

  // Active Template
  const activeTemplate: ProcedureConsentTemplate = useMemo(() => {
    return getProcedureConsentTemplate(selectedTemplateKey);
  }, [selectedTemplateKey]);

  // Patient Demographics State (Blank defaults by user specification; not mandatory)
  const [patientName, setPatientName] = useState<string>("");
  const [patientAge, setPatientAge] = useState<string>("");
  const [patientGender, setPatientGender] = useState<string>("");
  const [crNumber, setCrNumber] = useState<string>("");
  const [ipdNumber, setIpdNumber] = useState<string>("");
  const [relativeName, setRelativeName] = useState<string>("");
  const [relativeRelation, setRelativeRelation] = useState<string>("");
  const [relativePhone, setRelativePhone] = useState<string>("");
  const [procedureDate, setProcedureDate] = useState<string>("");
  const [procedureTime, setProcedureTime] = useState<string>("");

  // Fixed Ward Name (No bed number input)
  const fixedWard = "IR Ward (Old Gastro Ward)";

  // Attending Staff Credentials (Doctor Medical Reg No removed per user specifications)
  const [doctorName, setDoctorName] = useState<string>("Prof. (Dr.) Interventional Radiologist");
  const [doctorDesignation, setDoctorDesignation] = useState<string>(
    "Senior Professor & Head, Interventional Radiology"
  );
  const [residentDoctor, setResidentDoctor] = useState<string>(
    "Dr. Neel Yadav, DM Resident, Interventional Radiology"
  );

  // Customizable Clinical Details (pre-populated from template)
  const [customIndicationEn, setCustomIndicationEn] = useState<string>("");
  const [customIndicationHi, setCustomIndicationHi] = useState<string>("");
  const [customRisksEn, setCustomRisksEn] = useState<string>("");
  const [customRisksHi, setCustomRisksHi] = useState<string>("");

  // Post-Operative Report State (Fully editable with smart catalog defaults)
  const [opIndication, setOpIndication] = useState<string>("");
  const [opAccessSite, setOpAccessSite] = useState<string>(
    "Right Common Femoral Artery / Vein (Ultrasound-guided percutaneous access under sterile precautions with 6F vascular sheath)"
  );
  const [opAnesthesiaType, setOpAnesthesiaType] = useState<string>(
    "Local Anesthesia infiltration (2% Xylocaine) with Monitored Conscious Sedation (IV Midazolam 1mg + Fentanyl 50mcg)"
  );
  const [opHardwareUsed, setOpHardwareUsed] = useState<string>(
    "6F Radial/Femoral Sheath, 0.035\" Terumo Glidewire, 4F/5F Diagnostic Catheter (Cobra C2 / Simmons / Pigtail), 2.7F Progreat Microcatheter system"
  );
  const [opProceduralSteps, setOpProceduralSteps] = useState<string>("");
  const [opIntraOpFindings, setOpIntraOpFindings] = useState<string>(
    "Diagnostic fluoroscopy and DSA confirmed target pathology. No evidence of arterial/venous dissection, non-target embolization, or acute contrast extravasation."
  );
  const [opTechnicalResult, setOpTechnicalResult] = useState<string>(
    "Technical success achieved (100%). Complete target occlusion / revascularization with preserved flow in non-target branches and brisk distal run-off."
  );
  const [opHemostasisMethod, setOpHemostasisMethod] = useState<string>(
    "Vascular access sheath removed. Manual compression / vascular closure device (Perclose ProStyle / Angio-Seal) deployed. Complete hemostasis achieved without hematoma. Distal pedal/radial pulses +2 palpable and warm."
  );
  const [opFluoroTime, setOpFluoroTime] = useState<string>("12.4 min");
  const [opDapDose, setOpDapDose] = useState<string>("38.2 Gy·cm²");
  const [opContrastVolume, setOpContrastVolume] = useState<string>("60 mL (Omnipaque 350 mg I/mL)");
  const [opComplications, setOpComplications] = useState<string>(
    "None. Patient tolerated the intervention well and remained hemodynamically stable throughout."
  );
  const [opPostOpOrders, setOpPostOpOrders] = useState<string>(
    "1. Strict flat bed rest for 4-6 hours with puncture site limb kept extended.\n2. Hourly puncture site inspection and distal pulse check for 4 hours.\n3. IV Hydration: 0.9% Normal Saline @ 100 mL/hr for 4 hours.\n4. Symptomatic analgesia: Inj. Paracetamol 1g IV SOS.\n5. Notify IR Resident on duty immediately for acute puncture site hematoma, bleeding, limb coldness, or acute hypotension."
  );
  const [opMedicationPlan, setOpMedicationPlan] = useState<string>(
    "Tab. Ecosprin 75mg OD, Tab. Clopidogrel 75mg OD, Cap. Pantoprazole 40mg OD before breakfast, Inj. Cefuroxime 1.5g IV BD x 24 hours."
  );
  const [opDischargeAdvice, setOpDischargeAdvice] = useState<string>(
    "Avoid lifting weights (>5 kg) or strenuous exertion for 5 days. Keep puncture dressing dry and intact for 24 hours. Review in IR OPD in 7 days."
  );
  const [opCathLabSuite, setOpCathLabSuite] = useState<string>(
    "Cath Lab 1 (Philips Azurion 7 B20/15 Biplane Suite)"
  );

  // Sync procedure details into operative report on procedure change
  useEffect(() => {
    if (activeTemplate) {
      setOpIndication(activeTemplate.indicationEn || "");
      setOpProceduralSteps(activeTemplate.descriptionEn || "");
      if (activeTemplate.sedationTypeEn) {
        setOpAnesthesiaType(activeTemplate.sedationTypeEn);
      }
    }
  }, [selectedTemplateKey, activeTemplate]);

  // Patient Lab Values for Preparation Sheet
  const [weightKg, setWeightKg] = useState<number>(68);
  const [patientHb, setPatientHb] = useState<number>(10.4);
  const [patientPlatelets, setPatientPlatelets] = useState<number>(115000);
  const [patientInr, setPatientInr] = useState<number>(1.25);
  const [patientAptt, setPatientAptt] = useState<number>(31.0);
  const [patientCreatinine, setPatientCreatinine] = useState<number>(1.1);
  const [patientEgfr, setPatientEgfr] = useState<number>(76.4);
  const [viralStatus, setViralStatus] = useState<
    "NON_REACTIVE" | "HCV_POSITIVE" | "HBSAG_POSITIVE" | "HIV_POSITIVE"
  >("NON_REACTIVE");
  const [bloodGroup, setBloodGroup] = useState<string>("B Positive (2 Units PRBC Arranged)");

  // Nursing Checklist State
  const [checkedNursingTasks, setCheckedNursingTasks] = useState<Record<string, boolean>>({
    npo_solid: true,
    npo_liquid: true,
    iv_cannula: true,
    skin_prep: true,
    metallic_removal: true,
    pre_antibiotic: true,
    consent_signed: true,
    wristband_id: true,
  });

  // Calculate Cigarroa MACD: (5 * Wt) / Cr
  const macdLimitMl = useMemo(() => {
    if (patientCreatinine <= 0) return 300;
    return Math.round((5 * weightKg) / patientCreatinine);
  }, [weightKg, patientCreatinine]);

  // Load from preset patients
  const handleLoadPresetPatient = (caseId: string) => {
    const matched = INITIAL_RIS_WORKLIST_CASES.find((c) => c.caseId === caseId);
    if (!matched) return;
    setPatientName(matched.patientName);
    setCrNumber(matched.crNumber);
    setDoctorName(matched.supervisingConsultant);
    setResidentDoctor(matched.operatorResident);
    setProcedureDate(new Date().toISOString().split("T")[0]);
    setProcedureTime("09:30 AM");

    // Map procedure if possible
    const pName = matched.procedureName.toLowerCase();
    const matchedCatalogProc = EXTENSIVE_IR_PROCEDURES.find(
      (p) =>
        p.name.toLowerCase().includes(pName) || pName.includes(p.name.toLowerCase())
    );
    if (matchedCatalogProc) {
      setSelectedTemplateKey(matchedCatalogProc.id);
    } else if (pName.includes("dips") || pName.includes("tips")) {
      setSelectedTemplateKey("tips");
    } else if (pName.includes("brto")) {
      setSelectedTemplateKey("parto_brto");
    } else if (pName.includes("bronchial") || pName.includes("bae")) {
      setSelectedTemplateKey("bae");
    } else if (pName.includes("uterine") || pName.includes("uae")) {
      setSelectedTemplateKey("uae");
    } else if (pName.includes("biliary") || pName.includes("ptbd")) {
      setSelectedTemplateKey("ptbd");
    } else if (pName.includes("sfa") || pName.includes("angioplasty") || pName.includes("fistul")) {
      setSelectedTemplateKey("fistuloplasty");
    } else if (pName.includes("biopsy")) {
      setSelectedTemplateKey("biopsy");
    } else if (pName.includes("nephrostomy") || pName.includes("pcn")) {
      setSelectedTemplateKey("pcn");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleNursingTask = (id: string) => {
    setCheckedNursingTasks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Unified catalog of all IR procedures + verified templates + master catalog
  const allProceduresList = useMemo(() => {
    const list: { id: string; name: string; category: string; code?: string }[] = [];
    const seenIds = new Set<string>();

    // 1. Include verified templates first
    Object.keys(PROCEDURE_CONSENT_TEMPLATES).forEach((key) => {
      const t = PROCEDURE_CONSENT_TEMPLATES[key];
      seenIds.add(key);
      list.push({
        id: key,
        name: t.nameEn,
        category: normalizeProcedureCategory(t.category),
        code: "STD-CONSENT",
      });
    });

    // 2. Include all procedures from ALL_MASTER_PROCEDURES (~580+)
    ALL_MASTER_PROCEDURES.forEach((p) => {
      if (!seenIds.has(p.id)) {
        seenIds.add(p.id);
        list.push({
          id: p.id,
          name: p.title,
          category: normalizeProcedureCategory(p.categoryName),
          code: p.maayRghsCompatibility?.packageCode,
        });
      }
    });

    // 3. Include all procedures from EXTENSIVE_IR_PROCEDURES (~290)
    EXTENSIVE_IR_PROCEDURES.forEach((p) => {
      if (!seenIds.has(p.id)) {
        seenIds.add(p.id);
        list.push({
          id: p.id,
          name: p.name,
          category: normalizeProcedureCategory(p.category),
          code: p.code,
        });
      }
    });

    return list;
  }, []);

  // Filtered categories according to category dropdown
  const filteredCategories = useMemo(() => {
    if (selectedCategory === "ALL") return CATEGORY_ORDER;
    return [selectedCategory];
  }, [selectedCategory]);

  return (
    <div className="flex flex-col gap-5 max-w-5xl mx-auto font-sans text-zinc-900 pb-16 print:p-0 print:m-0 print:max-w-none print:w-full print:block print:pb-0">
      {/* 1. Header Toolbar (Hidden during Print) */}
      <div className="print:hidden flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-zinc-200">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-semibold text-zinc-900">
                Informed Consent
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                Bilingual (हिंदी / English)
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Tab Switcher */}
          <div className="flex items-center bg-zinc-100 p-1 rounded-lg border border-zinc-200 text-xs">
            <button
              onClick={() => setActiveTab("CONSENT")}
              className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                activeTab === "CONSENT"
                  ? "bg-white text-zinc-900 shadow-xs border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Consent Form (सहमति पत्र)
            </button>
            <button
              onClick={() => setActiveTab("PREPARATION")}
              className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                activeTab === "PREPARATION"
                  ? "bg-white text-zinc-900 shadow-xs border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Preparation Sheet (तैयारी पत्र)
            </button>
            <button
              onClick={() => setActiveTab("OPERATIVE_NOTE")}
              className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                activeTab === "OPERATIVE_NOTE"
                  ? "bg-white text-zinc-900 shadow-xs border border-zinc-200"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Post-Op Report (ऑपरेटिव रिपोर्ट)
            </button>
          </div>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center gap-2 transition cursor-pointer shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>
              {activeTab === "CONSENT"
                ? "Print Consent"
                : activeTab === "PREPARATION"
                ? "Print Prep Sheet"
                : "Print Operative Report"}
            </span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Customizer Panel (Hidden during Print) */}
      <div className="print:hidden bg-white p-4 rounded-xl border border-zinc-200 flex flex-col gap-4 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-zinc-800">
              Customize Procedure Template &amp; Patient Data
            </span>
          </div>

          {/* Quick Load Patient from RIS Worklist */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-[11px]">Load Worklist Case:</span>
            <select
              onChange={(e) => handleLoadPresetPatient(e.target.value)}
              defaultValue=""
              className="px-2 py-1 rounded border border-zinc-300 bg-zinc-50 text-xs font-medium text-zinc-800 outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Choose Worklist Case...
              </option>
              {INITIAL_RIS_WORKLIST_CASES.map((c) => (
                <option key={c.caseId} value={c.caseId}>
                  {c.patientName} ({c.crNumber}) - {c.procedureName.slice(0, 30)}...
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Procedure Selection: Stagewise / Categorized dropdown for all ~290 IR procedures */}
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-semibold text-zinc-700">
                Select IR Procedure ({allProceduresList.length} Catalog):
              </label>
              <span className="text-[10px] font-mono text-zinc-500">
                {allProceduresList.length} procedures available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {/* Stage / Clinical Category Dropdown */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-2 py-1.5 rounded-lg border border-zinc-300 bg-white font-medium text-xs text-zinc-900 outline-none focus:border-blue-500"
              >
                <option value="ALL">All Clinical Domains ({allProceduresList.length})</option>
                {CATEGORY_ORDER.map((cat) => {
                  const count = allProceduresList.filter((p) => p.category === cat).length;
                  return (
                    <option key={cat} value={cat}>
                      {cat} ({count})
                    </option>
                  );
                })}
              </select>

              {/* Quick Search Filter */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search ${allProceduresList.length} IR procedures...`}
                  value={procedureSearch}
                  onChange={(e) => setProcedureSearch(e.target.value)}
                  className="w-full pl-7 pr-6 py-1.5 rounded-lg border border-zinc-300 bg-zinc-50 text-xs text-zinc-900 outline-none focus:border-blue-500 focus:bg-white"
                />
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2 top-2.5" />
                {procedureSearch && (
                  <button
                    type="button"
                    onClick={() => setProcedureSearch("")}
                    className="absolute right-2 top-1.5 text-zinc-400 hover:text-zinc-600 text-xs font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Categorized Dropdown with Optgroups */}
            <select
              value={selectedTemplateKey}
              onChange={(e) => setSelectedTemplateKey(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-lg border border-zinc-300 bg-white font-medium text-zinc-900 text-xs outline-none focus:border-blue-500"
            >
              {filteredCategories.map((cat) => {
                const q = procedureSearch.trim().toLowerCase();
                const procs = allProceduresList.filter(
                  (p) =>
                    p.category === cat &&
                    (!q ||
                      p.name.toLowerCase().includes(q) ||
                      p.id.toLowerCase().includes(q) ||
                      (p.code && p.code.toLowerCase().includes(q)))
                );
                if (procs.length === 0) return null;
                return (
                  <optgroup key={cat} label={`── ${cat} (${procs.length}) ──`}>
                    {procs.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} {p.code && p.code !== "STD-CONSENT" ? `[${p.code}]` : ""}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
          </div>

          {/* Language Mode Toggle */}
          <div>
            <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
              Language Output:
            </label>
            <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-md border border-zinc-200">
              <button
                type="button"
                onClick={() => setLanguageMode("BILINGUAL")}
                className={`flex-1 py-1 text-[11px] rounded transition ${
                  languageMode === "BILINGUAL" ? "bg-white text-blue-700 font-semibold shadow-xs" : "text-zinc-600"
                }`}
              >
                Bilingual (हिंदी/En)
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode("EN")}
                className={`flex-1 py-1 text-[11px] rounded transition ${
                  languageMode === "EN" ? "bg-white text-blue-700 font-semibold shadow-xs" : "text-zinc-600"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguageMode("HI")}
                className={`flex-1 py-1 text-[11px] rounded transition ${
                  languageMode === "HI" ? "bg-white text-blue-700 font-semibold shadow-xs" : "text-zinc-600"
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Procedure Date & Time */}
          <div>
            <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
              Procedure Date &amp; Time:
            </label>
            <div className="flex gap-1.5">
              <input
                type="date"
                value={procedureDate}
                onChange={(e) => setProcedureDate(e.target.value)}
                className="w-full px-2 py-1 rounded border border-zinc-300 bg-white text-xs outline-none"
              />
              <input
                type="text"
                value={procedureTime}
                onChange={(e) => setProcedureTime(e.target.value)}
                placeholder="09:30 AM"
                className="w-20 px-2 py-1 rounded border border-zinc-300 bg-white text-xs outline-none"
              />
            </div>
          </div>
        </div>

        {/* Patient & Relatives Row (Blank defaults, not mandatory) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-2 border-t border-zinc-100">
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Patient Name</label>
            <input
              type="text"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-2 py-1 rounded border border-zinc-300 font-medium text-zinc-900 text-xs"
            />
          </div>
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Age / Gender</label>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Age"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                className="w-14 px-2 py-1 rounded border border-zinc-300 font-mono text-xs"
              />
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                className="flex-1 px-1 py-1 rounded border border-zinc-300 text-xs bg-white"
              >
                <option value="">Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">CR / UHID No.</label>
            <input
              type="text"
              placeholder="CR/UHID"
              value={crNumber}
              onChange={(e) => setCrNumber(e.target.value)}
              className="w-full px-2 py-1 rounded border border-zinc-300 font-mono text-zinc-800 text-xs"
            />
          </div>
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Ward (Fixed)</label>
            <div className="w-full px-2 py-1 rounded border border-zinc-200 bg-zinc-100 text-zinc-700 text-xs truncate select-none">
              {fixedWard}
            </div>
          </div>
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Relative / Guardian</label>
            <input
              type="text"
              placeholder="Relative name"
              value={relativeName}
              onChange={(e) => setRelativeName(e.target.value)}
              className="w-full px-2 py-1 rounded border border-zinc-300 font-medium text-zinc-900 text-xs"
            />
          </div>
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Relationship &amp; Phone</label>
            <div className="flex gap-1">
              {/* Relationship Dropdown */}
              <select
                value={relativeRelation}
                onChange={(e) => setRelativeRelation(e.target.value)}
                className="w-28 px-1.5 py-1 rounded border border-zinc-300 text-xs bg-white text-zinc-900"
              >
                <option value="">Relation</option>
                {RELATIONSHIP_OPTIONS.map((rel) => (
                  <option key={rel.value} value={rel.value}>
                    {rel.labelEn}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={relativePhone}
                onChange={(e) => setRelativePhone(e.target.value)}
                placeholder="Phone"
                className="flex-1 px-1.5 py-1 rounded border border-zinc-300 font-mono text-xs"
              />
            </div>
          </div>
        </div>

        {/* Doctor & Resident Credentials Row (Medical Reg No removed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-zinc-100">
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Performing Radiologist</label>
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="w-full px-2 py-1 rounded border border-zinc-300 font-medium text-zinc-900 text-xs"
            />
          </div>
          <div>
            <label className="text-[11px] text-zinc-500 block mb-0.5">Designation &amp; Department</label>
            <input
              type="text"
              value={doctorDesignation}
              onChange={(e) => setDoctorDesignation(e.target.value)}
              className="w-full px-2 py-1 rounded border border-zinc-300 text-zinc-800 text-xs"
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. PRINTABLE TAB 1: INFORMED CONSENT FORM (सहमति पत्र)                     */}
      {/* ========================================================================= */}
      {activeTab === "CONSENT" && (
        <div className="bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm print:shadow-none print:border-none print:p-0 print:m-0 print:w-full flex flex-col gap-6 text-zinc-900">
          {/* Institutional Official Header: Print Only so interactive form is immediately accessible on screen */}
          <div className="hidden print:flex border-b-2 border-zinc-900 pb-3 text-center flex-col items-center">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-1.5">
              <img
                src="/sms_hospital_logo.png"
                alt="SMS Hospital Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0"
              />
              <div className="text-left">
                {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 font-serif leading-tight">
                    SMS MEDICAL COLLEGE &amp; HOSPITAL, JAIPUR
                  </h1>
                )}
                {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                  <h2
                    className={`${
                      languageMode === "HI" ? "text-xl sm:text-2xl font-black" : "text-sm sm:text-base font-bold"
                    } text-zinc-900 tracking-tight leading-tight`}
                  >
                    सवाई मानसिंह मेडिकल कॉलेज एवं चिकित्सालय, जयपुर
                  </h2>
                )}
                <p className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5">
                  {languageMode === "HI"
                    ? "इंटरवेंशनल रेडियोलॉजी विभाग"
                    : languageMode === "EN"
                    ? "Department of Interventional Radiology"
                    : "Department of Interventional Radiology (इंटरवेंशनल रेडियोलॉजी विभाग)"}
                </p>
              </div>
            </div>

            {/* Statutory Informed Consent Heading (smaller font size, placed cleanly below header) */}
            <div className="mt-1 px-3 py-0.5 rounded bg-zinc-100 print:bg-zinc-100 border border-zinc-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-800">
              {languageMode === "HI"
                ? "इंटरवेंशनल रेडियोलॉजी प्रक्रिया हेतु विशिष्ट सूचित सहमति पत्र"
                : languageMode === "EN"
                ? "STATUTORY INFORMED CONSENT FOR INTERVENTIONAL RADIOLOGY PROCEDURE"
                : "STATUTORY INFORMED CONSENT FOR INTERVENTIONAL RADIOLOGY PROCEDURE (विशिष्ट सूचित सहमति पत्र)"}
            </div>
          </div>

          {/* Patient Identification Grid: Pure Hindi, Pure English, or Bilingual */}
          <div className="border border-zinc-300 rounded-lg p-3.5 bg-zinc-50/50 print:bg-transparent text-xs grid grid-cols-2 sm:grid-cols-4 gap-y-2.5 gap-x-4">
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "मरीज का नाम:"
                  : languageMode === "EN"
                  ? "Patient Name:"
                  : "Patient Name (मरीज का नाम):"}
              </span>
              <strong className="text-zinc-950 text-sm">{patientName || "—"}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "उम्र / लिंग:"
                  : languageMode === "EN"
                  ? "Age / Sex:"
                  : "Age / Sex (उम्र / लिंग):"}
              </span>
              <strong className="text-zinc-950">
                {[
                  patientAge ? `${patientAge} ${languageMode === "HI" ? "वर्ष" : "Years"}` : "",
                  patientGender
                    ? languageMode === "HI"
                      ? patientGender === "Male"
                        ? "पुरुष"
                        : patientGender === "Female"
                        ? "महिला"
                        : "अन्य"
                      : patientGender
                    : "",
                ]
                  .filter(Boolean)
                  .join(" / ") || "—"}
              </strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "सीआर / यूएचआईडी संख्या:"
                  : languageMode === "EN"
                  ? "CR / UHID No.:"
                  : "CR / UHID No. (सीआर संख्या):"}
              </span>
              <strong className="font-mono text-zinc-950">{crNumber || "—"}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "वार्ड:"
                  : languageMode === "EN"
                  ? "Ward:"
                  : "Ward (वार्ड):"}
              </span>
              <strong className="text-zinc-950">
                {fixedWard}
                {ipdNumber ? ` • IPD: ${ipdNumber}` : ""}
              </strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "परिजन / विधिक संरक्षक:"
                  : languageMode === "EN"
                  ? "Relative / Guardian:"
                  : "Relative / Guardian (परिजन / संरक्षक):"}
              </span>
              <strong className="text-zinc-950">
                {relativeName ? (
                  <>
                    {relativeName}
                    {relativeRelation && (
                      <span className="text-xs font-normal text-zinc-700 ml-1">
                        (
                        {languageMode === "HI"
                          ? RELATIONSHIP_OPTIONS.find((r) => r.value === relativeRelation)?.labelHi ||
                            relativeRelation
                          : languageMode === "EN"
                          ? relativeRelation
                          : `${relativeRelation} / ${
                              RELATIONSHIP_OPTIONS.find((r) => r.value === relativeRelation)?.labelHi ||
                              relativeRelation
                            }`}
                        )
                      </span>
                    )}
                  </>
                ) : (
                  "—"
                )}
              </strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "मोबाइल नंबर:"
                  : languageMode === "EN"
                  ? "Contact Phone:"
                  : "Contact Phone (मोबाइल नं.):"}
              </span>
              <strong className="font-mono text-zinc-950">{relativePhone || "—"}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "प्रक्रियाकर्ता चिकित्सक:"
                  : languageMode === "EN"
                  ? "Attending Radiologist:"
                  : "Attending Doctor (प्रक्रियाकर्ता):"}
              </span>
              <strong className="text-zinc-950">{doctorName || "—"}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI"
                  ? "दिनांक व समय:"
                  : languageMode === "EN"
                  ? "Date & Time:"
                  : "Date & Time (दिनांक व समय):"}
              </span>
              <strong className="text-zinc-950">
                {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "—"}
              </strong>
            </div>
          </div>

          {/* Section 1: Procedure Title (PROPOSED PROCEDURE label removed; procedure font size increased) */}
          <div className="border-l-4 border-blue-600 pl-3.5 py-1 bg-zinc-50/60 print:bg-transparent rounded-r-md">
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                {activeTemplate.nameEn}
              </h3>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <h4
                className={`${
                  languageMode === "HI"
                    ? "text-xl sm:text-2xl font-extrabold text-zinc-950"
                    : "text-base sm:text-lg font-bold text-zinc-800"
                } mt-0.5 leading-snug`}
              >
                {activeTemplate.nameHi}
              </h4>
            )}
          </div>

          {/* Section 2: Clinical Indication (बीमारी एवं प्रक्रिया का कारण) */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1">
              {languageMode === "HI"
                ? "1. बीमारी का निदान एवं प्रक्रिया का कारण:"
                : languageMode === "EN"
                ? "1. Clinical Indication & Diagnosis:"
                : "1. Clinical Indication & Diagnosis (बीमारी का निदान एवं प्रक्रिया का कारण):"}
            </h4>
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <p className="text-zinc-800 leading-relaxed">
                <strong>Indication:</strong> {customIndicationEn || activeTemplate.indicationEn}
              </p>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <p className="text-zinc-800 leading-relaxed">
                <strong>संकेत:</strong> {customIndicationHi || activeTemplate.indicationHi}
              </p>
            )}
          </div>

          {/* Section 3: Layman Description (प्रक्रिया का विवरण एवं तरीका) */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1">
              {languageMode === "HI"
                ? "2. प्रक्रिया का विवरण एवं तरीका:"
                : languageMode === "EN"
                ? "2. Nature of the Procedure:"
                : "2. Nature of the Procedure (प्रक्रिया का विवरण एवं तरीका):"}
            </h4>
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <p className="text-zinc-800 leading-relaxed text-justify">
                {activeTemplate.descriptionEn}
              </p>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <p className="text-zinc-800 leading-relaxed text-justify">
                {activeTemplate.descriptionHi}
              </p>
            )}
          </div>

          {/* Section 4: Expected Benefits (अपेक्षित लाभ) */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1">
              {languageMode === "HI"
                ? "3. प्रक्रिया के अपेक्षित लाभ:"
                : languageMode === "EN"
                ? "3. Expected Clinical Benefits:"
                : "3. Expected Clinical Benefits (प्रक्रिया के अपेक्षित लाभ):"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                <ul className="list-disc pl-4 space-y-1 text-zinc-800">
                  {activeTemplate.benefitsEn.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              )}
              {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                <ul className="list-disc pl-4 space-y-1 text-zinc-800">
                  {activeTemplate.benefitsHi.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Section 5: Specific Risks & Known Complications (संभावित जोखिम एवं जटिलताएं) */}
          <div className="flex flex-col gap-2 text-xs">
            <h4 className="font-bold uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 text-red-700">
              {languageMode === "HI"
                ? "4. संभावित जोखिम एवं विशिष्ट प्रक्रियागत जटिलताएं:"
                : languageMode === "EN"
                ? "4. Material Risks & Procedure-Specific Complications:"
                : "4. Material Risks & Procedure-Specific Complications (संभावित जोखिम एवं विशिष्ट जटिलताएं):"}
            </h4>

            {/* General Risks Box */}
            <div className="p-3 bg-zinc-50 print:bg-transparent rounded-lg border border-zinc-200 text-[11px] text-zinc-700">
              <span className="font-bold text-zinc-900 block mb-1">
                {languageMode === "HI"
                  ? "सामान्य प्रक्रियागत जोखिम:"
                  : languageMode === "EN"
                  ? "Common & General Risks:"
                  : "Common & General Risks (सामान्य प्रक्रियागत जोखिम):"}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                  <ul className="list-disc pl-4 space-y-0.5">
                    {GENERAL_RISKS_EN.slice(0, 5).map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
                {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                  <ul className="list-disc pl-4 space-y-0.5">
                    {GENERAL_RISKS_HI.slice(0, 5).map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Procedure Specific Risks */}
            <div className="p-3 bg-red-50/50 print:bg-transparent rounded-lg border border-red-200 text-xs text-zinc-900">
              <span className="font-bold text-red-900 block mb-1.5">
                {languageMode === "HI"
                  ? `${activeTemplate.nameHi} हेतु विशिष्ट जोखिम:`
                  : languageMode === "EN"
                  ? `Specific Risks for ${activeTemplate.nameEn}:`
                  : `Specific Risks for ${activeTemplate.nameEn} (विशिष्ट जोखिम):`}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                  <ul className="list-disc pl-4 space-y-1 text-zinc-800">
                    {activeTemplate.specificRisksEn.map((r, idx) => (
                      <li key={idx} className="leading-snug">
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
                {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                  <ul className="list-disc pl-4 space-y-1 text-zinc-800">
                    {activeTemplate.specificRisksHi.map((r, idx) => (
                      <li key={idx} className="leading-snug">
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Section 6: Alternatives & Sedation (अन्य विकल्प एवं एनेस्थीसिया) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-zinc-900 mb-1">
                {languageMode === "HI"
                  ? "5. अन्य उपलब्ध वैकल्पिक उपचार विधियां:"
                  : languageMode === "EN"
                  ? "5. Alternative Treatment Options:"
                  : "5. Alternative Treatment Options (अन्य उपलब्ध विकल्प):"}
              </h5>
              {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                <p className="text-zinc-700 leading-relaxed mb-1">{activeTemplate.alternativesEn}</p>
              )}
              {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                <p className="text-zinc-700 leading-relaxed">{activeTemplate.alternativesHi}</p>
              )}
            </div>

            <div className="p-3 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-zinc-900 mb-1">
                {languageMode === "HI"
                  ? "6. एनेस्थीसिया एवं बेहोशी की सहमति:"
                  : languageMode === "EN"
                  ? "6. Anesthesia & Sedation:"
                  : "6. Anesthesia & Sedation (एनेस्थीसिया / बेहोशी की सहमति):"}
              </h5>
              {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                <p className="text-zinc-700 leading-relaxed mb-1">{activeTemplate.sedationTypeEn}</p>
              )}
              {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                <p className="text-zinc-700 leading-relaxed">{activeTemplate.sedationTypeHi}</p>
              )}
            </div>
          </div>

          {/* Section 7: Solemn Voluntary Declaration (विधिक घोषणा) */}
          <div className="border-t-2 border-zinc-900 pt-3 text-xs flex flex-col gap-2">
            <h4 className="font-bold text-zinc-950 text-center uppercase tracking-wider text-xs">
              {languageMode === "HI"
                ? STATUTORY_DECLARATION_HI.voluntaryConsentTitle
                : languageMode === "EN"
                ? STATUTORY_DECLARATION_EN.voluntaryConsentTitle
                : "PATIENT & LEGAL GUARDIAN VOLUNTARY DECLARATION (मरीज एवं विधिक अभिभावक / परिजन की स्वैच्छिक घोषणा)"}
            </h4>

            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <p className="text-zinc-800 leading-relaxed text-justify text-[11px]">
                {STATUTORY_DECLARATION_EN.understandingClause} {STATUTORY_DECLARATION_EN.questionClause}{" "}
                {STATUTORY_DECLARATION_EN.bloodTransfusionClause} {STATUTORY_DECLARATION_EN.emergencyClause}{" "}
                {STATUTORY_DECLARATION_EN.noGuaranteeClause} {STATUTORY_DECLARATION_EN.signatureClause}
              </p>
            )}

            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <p className="text-zinc-800 leading-relaxed text-justify text-[11px] pt-1">
                {STATUTORY_DECLARATION_HI.understandingClause} {STATUTORY_DECLARATION_HI.questionClause}{" "}
                {STATUTORY_DECLARATION_HI.bloodTransfusionClause} {STATUTORY_DECLARATION_HI.emergencyClause}{" "}
                {STATUTORY_DECLARATION_HI.noGuaranteeClause} {STATUTORY_DECLARATION_HI.signatureClause}
              </p>
            )}
          </div>

          {/* Section 8: MANDATORY 3-TIER SIGNATURE BLOCK (विधिक हस्ताक्षर) */}
          <div className="border border-zinc-400 rounded-lg p-4 bg-white mt-2 print:mt-4 break-inside-avoid print-break-inside-avoid">
            <h5 className="font-bold text-center text-xs uppercase tracking-wider text-zinc-950 mb-4 border-b border-zinc-300 pb-1">
              {languageMode === "HI"
                ? "अनिवार्य विधिक हस्ताक्षर एवं प्रमाणीकरण"
                : languageMode === "EN"
                ? "MANDATORY SIGNATURES & CERTIFICATION"
                : "MANDATORY SIGNATURES & CERTIFICATION (अनिवार्य विधिक हस्ताक्षर एवं प्रमाणीकरण)"}
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-xs">
              {/* Box 1: Patient Signature / Thumb Impression */}
              <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
                <div>
                  <span className="font-bold text-zinc-950 block">
                    {languageMode === "HI"
                      ? "1. रोगी के हस्ताक्षर"
                      : languageMode === "EN"
                      ? "1. Patient Signature"
                      : "1. Patient Signature / Thumb"}
                  </span>
                  <span className="text-[11px] text-zinc-600 block">
                    {languageMode === "HI"
                      ? "(हस्ताक्षर अथवा बायाँ अँगूठा निशान)"
                      : languageMode === "EN"
                      ? "(Signature or Left Thumb Impression)"
                      : "(रोगी के हस्ताक्षर / बायाँ अँगूठा निशान)"}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-700 mt-4">
                  <div>
                    {languageMode === "HI" ? "नाम: " : "Name: "}
                    <strong>{patientName || "_________________"}</strong>
                  </div>
                  <div>
                    {languageMode === "HI" ? "दिनांक व समय: " : "Date & Time: "}
                    {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "_____________"}
                  </div>
                </div>
              </div>

              {/* Box 2: Relative / Legal Guardian / Witness */}
              <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
                <div>
                  <span className="font-bold text-zinc-950 block">
                    {languageMode === "HI"
                      ? "2. परिजन / साक्षी के हस्ताक्षर"
                      : languageMode === "EN"
                      ? "2. Relative / Witness Signature"
                      : "2. Relative / Witness Signature"}
                  </span>
                  <span className="text-[11px] text-zinc-600 block">
                    {languageMode === "HI"
                      ? "(मरीज के परिजन अथवा साक्षी)"
                      : languageMode === "EN"
                      ? "(Patient Relative or Legal Guardian)"
                      : "(मरीज के परिजन / साक्षी के हस्ताक्षर)"}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-700 mt-4">
                  <div>
                    {languageMode === "HI" ? "नाम: " : "Name: "}
                    <strong>{relativeName || "_________________"}</strong>
                  </div>
                  <div>
                    {languageMode === "HI" ? "संबंध: " : "Relation: "}
                    {relativeRelation ? (
                      languageMode === "HI"
                        ? RELATIONSHIP_OPTIONS.find((r) => r.value === relativeRelation)?.labelHi ||
                          relativeRelation
                        : relativeRelation
                    ) : (
                      "_____________"
                    )}
                  </div>
                  <div>
                    {languageMode === "HI" ? "फोन: " : "Phone: "}
                    {relativePhone || "_____________"}
                  </div>
                </div>
              </div>

              {/* Box 3: Performing Doctor (Medical Reg No removed per user specifications) */}
              <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
                <div>
                  <span className="font-bold text-zinc-950 block">
                    {languageMode === "HI"
                      ? "3. प्रक्रियाकर्ता इंटरवेंशनल रेडियोलॉजिस्ट"
                      : languageMode === "EN"
                      ? "3. Interventional Radiologist"
                      : "3. Interventional Radiologist"}
                  </span>
                  <span className="text-[11px] text-zinc-600 block">
                    {languageMode === "HI"
                      ? "(चिकित्सक के हस्ताक्षर व मुहर)"
                      : languageMode === "EN"
                      ? "(Signature & Official Seal)"
                      : "(प्रक्रियाकर्ता चिकित्सक के हस्ताक्षर व मुहर)"}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-700 mt-4">
                  <div>
                    {languageMode === "HI" ? "नाम: " : "Name: "}
                    <strong>{doctorName}</strong>
                  </div>
                  <div>
                    {languageMode === "HI" ? "पद: " : "Desig: "}
                    {doctorDesignation}
                  </div>
                </div>
              </div>
            </div>

            {/* Resident / Interpreter Footnote */}
            <div className="mt-4 pt-2 border-t border-zinc-200 text-[10px] text-zinc-500 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? `सहमति परामर्शकर्ता: ${residentDoctor}`
                  : `Consent Counseled by: ${residentDoctor}`}
              </span>
              <span>
                {languageMode === "HI"
                  ? "रेडियोनिदान एवं इंटरवेंशनल रेडियोलॉजी विभाग, सवाई मानसिंह चिकित्सालय, जयपुर"
                  : languageMode === "EN"
                  ? "Department of Radiodiagnosis & Interventional Radiology, SMS Hospital, Jaipur"
                  : "Department of Radiodiagnosis & Interventional Radiology, SMS Hospital, Jaipur"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. PRINTABLE TAB 2: PRE-PROCEDURE PREPARATION SHEET (तैयारी पत्र)         */}
      {/* ========================================================================= */}
      {activeTab === "PREPARATION" && (
        <div className="bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm print:shadow-none print:border-none print:p-0 print:m-0 print:w-full flex flex-col gap-6 text-zinc-900">
          {/* Header: Print Only so preparation sheet is immediately accessible on screen */}
          <div className="hidden print:flex border-b-2 border-zinc-900 pb-3 text-center flex-col items-center">
            <div className="flex items-center justify-center gap-3.5 sm:gap-4 mb-1">
              <img
                src="/sms_hospital_logo.png"
                alt="SMS Hospital Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
              />
              <div className="text-left">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-zinc-950 font-serif">
                  SMS HOSPITAL &amp; MEDICAL COLLEGE, JAIPUR
                </h2>
                <p className="text-[11px] sm:text-xs font-semibold text-zinc-700">
                  सवाई मानसिंह चिकित्सालय एवं मेडिकल कॉलेज, जयपुर • रेडियोनिदान एवं इंटरवेंशनल रेडियोलॉजी विभाग
                </p>
              </div>
            </div>
            <h1 className="text-sm md:text-base font-extrabold text-zinc-950 mt-1 uppercase tracking-wide">
              CATH-LAB PRE-PROCEDURE PREPARATION &amp; NURSING WARD ORDERS
            </h1>
            <p className="text-[11px] font-semibold text-zinc-600">
              मरीज की पूर्व-प्रक्रिया तैयारी, लैब जांच सुरक्षा सीमाएं एवं नर्सिंग निर्देश पत्र
            </p>
          </div>

          {/* Patient Quick Strip */}
          <div className="border border-zinc-300 rounded-lg p-3 bg-zinc-50 print:bg-transparent text-xs grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              Patient: <strong>{patientName || "—"}</strong>{" "}
              {patientAge || patientGender
                ? `(${[patientAge ? `${patientAge}y` : "", patientGender].filter(Boolean).join("/")})`
                : ""}
            </div>
            <div>
              CR No: <strong className="font-mono">{crNumber || "—"}</strong>
            </div>
            <div>
              Ward: <strong>{fixedWard}</strong>
              {ipdNumber ? ` • IPD: ${ipdNumber}` : ""}
            </div>
            <div>
              Procedure: <strong>{activeTemplate.nameEn}</strong>
            </div>
          </div>

          {/* Section 1: FASTING (NPO) MANDATE */}
          <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200 text-xs flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>STRICT PRE-OP FASTING (NPO) GUIDELINES (भूखा पेट रहने के नियम):</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-800 pl-6">
              <div>
                <strong>Solid Foods &amp; Milk (ठोस भोजन एवं दूध):</strong>
                <p className="text-zinc-700 mt-0.5">
                  Strict NPO for at least <strong>6 hours</strong> prior to procedure call. No chapatis, rice, tea,
                  milk, or biscuits.
                </p>
              </div>
              <div>
                <strong>Clear Fluids (सादा पानी):</strong>
                <p className="text-zinc-700 mt-0.5">
                  Plain water allowed up to <strong>2 hours</strong> prior to scheduled conscious sedation. Zero
                  intake thereafter.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: ESSENTIAL LAB INVESTIGATIONS & SAFETY CUT-OFFS */}
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-1">
              <span className="font-bold uppercase tracking-wider text-zinc-900 text-xs flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-blue-600" />
                Pre-Op Laboratory Safety Thresholds (आवश्यक लैब जांचें व सुरक्षा सीमाएं):
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Weight: {weightKg} kg • Cigarroa MACD: {macdLimitMl} mL
              </span>
            </div>

            <div className="border border-zinc-200 rounded-lg overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[500px]">
                <thead className="bg-zinc-100 text-[11px] font-semibold text-zinc-700 border-b border-zinc-200">
                  <tr>
                    <th className="px-3 py-2">Investigation (जांच)</th>
                    <th className="px-3 py-2">Safe Target</th>
                    <th className="px-3 py-2">Patient Value (मरीज की रिपोर्ट)</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Clinical Action if Abnormal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {/* Hb */}
                  <tr className="hover:bg-zinc-50">
                    <td className="px-3 py-2 font-medium">Hemoglobin (Hb)</td>
                    <td className="px-3 py-2 font-mono">≥ 9.0 g/dL</td>
                    <td className="px-3 py-2 font-mono font-bold">{patientHb} g/dL</td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          patientHb >= 9 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {patientHb >= 9 ? "PASS" : "LOW"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-[11px] text-zinc-600">If Hb &lt; 8.0, arrange 1-2 PRBC units.</td>
                  </tr>

                  {/* Platelets */}
                  <tr className="hover:bg-zinc-50">
                    <td className="px-3 py-2 font-medium">Platelet Count</td>
                    <td className="px-3 py-2 font-mono">≥ 80,000 /μL</td>
                    <td className="px-3 py-2 font-mono font-bold">{patientPlatelets.toLocaleString("en-IN")} /μL</td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          patientPlatelets >= 80000
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {patientPlatelets >= 80000 ? "PASS" : "TRANSFUSE RDP"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-[11px] text-zinc-600">
                      Transfuse platelets pre-puncture if &lt; 50k.
                    </td>
                  </tr>

                  {/* PT / INR */}
                  <tr className="hover:bg-zinc-50">
                    <td className="px-3 py-2 font-medium">Prothrombin Time / INR</td>
                    <td className="px-3 py-2 font-mono">≤ 1.5</td>
                    <td className="px-3 py-2 font-mono font-bold">{patientInr}</td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          patientInr <= 1.5 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {patientInr <= 1.5 ? "PASS" : "HIGH (GIVE FFP)"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-[11px] text-zinc-600">If INR &gt; 1.5, give FFP / Vit K / PCC.</td>
                  </tr>

                  {/* Creatinine / eGFR */}
                  <tr className="hover:bg-zinc-50">
                    <td className="px-3 py-2 font-medium">Serum Creatinine &amp; eGFR</td>
                    <td className="px-3 py-2 font-mono">Cr &lt; 1.5, eGFR &gt; 30</td>
                    <td className="px-3 py-2 font-mono font-bold">
                      {patientCreatinine} mg/dL (eGFR: {patientEgfr})
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          patientCreatinine < 1.5 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {patientCreatinine < 1.5 ? "NORMAL" : "NEPHRO RISK"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-[11px] text-zinc-600">
                      Limit contrast to &lt; {macdLimitMl} mL. Pre-hydrate with 0.9% NS.
                    </td>
                  </tr>

                  {/* Blood Group */}
                  <tr className="hover:bg-zinc-50">
                    <td className="px-3 py-2 font-medium">Blood Group &amp; Crossmatch</td>
                    <td className="px-3 py-2 font-mono">Type &amp; Reserve</td>
                    <td className="px-3 py-2 font-mono font-bold" colSpan={2}>
                      {bloodGroup}
                    </td>
                    <td className="px-3 py-2 text-[11px] text-zinc-600">Blood bank token confirmed in file.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: ANTIMICROBIAL & MEDICATION WITHHOLDING PROTOCOL */}
          <div className="flex flex-col gap-2 text-xs">
            <span className="font-bold uppercase tracking-wider text-zinc-900 text-xs border-b border-zinc-200 pb-1 flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-emerald-600" />
              Medication Adjustment &amp; Anticoagulant Cessation Schedule:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-red-200 bg-red-50/40 text-xs">
                <strong className="text-red-900 block mb-1">Blood Thinners (खून पतला करने की दवा):</strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-zinc-800">
                  <li>
                    <strong>Clopidogrel / Prasugrel:</strong> Hold 5-7 days prior.
                  </li>
                  <li>
                    <strong>Warfarin / Acitrom:</strong> Hold 5 days (INR ≤ 1.5).
                  </li>
                  <li>
                    <strong>DOACs (Rivaroxaban / Apixaban):</strong> Hold 48 hours.
                  </li>
                  <li>
                    <strong>LMWH (Enoxaparin):</strong> Hold therapeutic 24h.
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/40 text-xs">
                <strong className="text-amber-900 block mb-1">Diabetes &amp; BP Drugs:</strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-zinc-800">
                  <li>
                    <strong>Metformin:</strong> STOP morning of procedure &amp; 48h post-contrast (prevent lactic acidosis).
                  </li>
                  <li>
                    <strong>ACE-i / ARBs:</strong> Withhold morning dose (prevent intra-op hypotension).
                  </li>
                  <li>
                    <strong>Insulin:</strong> Halve morning dose while fasting.
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border border-blue-200 bg-blue-50/40 text-xs">
                <strong className="text-blue-900 block mb-1">Pre-Procedure Medications:</strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-zinc-800">
                  <li>
                    <strong>IV Antibiotic:</strong> Cefuroxime 1.5g IV or Cefoperazone-Sulbactam 30-60 min pre-puncture.
                  </li>
                  <li>
                    <strong>Pre-Hydration:</strong> 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-contrast.
                  </li>
                  <li>
                    <strong>Sedation:</strong> Midazolam 1-2mg + Fentanyl 25-50mcg IV in cath-lab.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: WARD NURSING CHECKLIST (वार्ड नर्सिंग चेकलिस्ट) */}
          <div className="flex flex-col gap-2 text-xs">
            <span className="font-bold uppercase tracking-wider text-zinc-900 text-xs border-b border-zinc-200 pb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Ward Nursing Verification Checklist before Transfer to Cath-Lab:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {WARD_NURSING_CHECKLIST.map((t) => {
                const isChecked = !!checkedNursingTasks[t.id];
                return (
                  <label
                    key={t.id}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border transition cursor-pointer ${
                      isChecked ? "bg-zinc-50 border-zinc-300" : "bg-white border-zinc-200 opacity-75"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleNursingTask(t.id)}
                      className="mt-0.5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="text-[11px]">
                      <div className="font-semibold text-zinc-900">{t.taskEn}</div>
                      <div className="text-zinc-600 text-[10px] mt-0.5">{t.taskHi}</div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Sign-Off Strip */}
          <div className="border border-zinc-400 rounded-lg p-3.5 bg-white text-xs grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
            <div>
              <span className="font-bold text-zinc-900 block">Ward Staff Nurse Sign-Off:</span>
              <div className="text-[11px] text-zinc-600 mt-4">
                <div>Name: ______________________</div>
                <div>
                  Date &amp; Time: {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "______________"}
                </div>
              </div>
            </div>
            <div>
              <span className="font-bold text-zinc-900 block">IR Resident Doctor Sign-Off:</span>
              <div className="text-[11px] text-zinc-600 mt-4">
                <div>
                  Name: <strong>{residentDoctor}</strong>
                </div>
                <div>Pre-Op Check Verified</div>
              </div>
            </div>
            <div>
              <span className="font-bold text-zinc-900 block">Cath-Lab Receiving Tech:</span>
              <div className="text-[11px] text-zinc-600 mt-4">
                <div>Puncture Site Prepped &amp; Verified</div>
                <div>Time Received: ______________</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. PRINTABLE TAB 3: CLINICAL OPERATIVE REPORT & POST-OP NOTES (ऑपरेटिव रिपोर्ट) */}
      {/* ========================================================================= */}
      {activeTab === "OPERATIVE_NOTE" && (
        <div className="bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm print:shadow-none print:border-none print:p-0 print:m-0 print:w-full flex flex-col gap-6 text-zinc-900 printable-sheet">
          {/* Institutional Official Header: Print Only so operative note is immediately accessible on screen */}
          <div className="hidden print:flex border-b-2 border-zinc-900 pb-3 text-center flex-col items-center">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-1.5">
              <img
                src="/sms_hospital_logo.png"
                alt="SMS Hospital Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0"
              />
              <div className="text-left">
                {(languageMode === "BILINGUAL" || languageMode === "EN") && (
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 font-serif leading-tight">
                    SMS MEDICAL COLLEGE &amp; HOSPITAL, JAIPUR
                  </h1>
                )}
                {(languageMode === "BILINGUAL" || languageMode === "HI") && (
                  <h2
                    className={`${
                      languageMode === "HI" ? "text-xl sm:text-2xl font-black" : "text-sm sm:text-base font-bold"
                    } text-zinc-900 tracking-tight leading-tight`}
                  >
                    सवाई मानसिंह मेडिकल कॉलेज एवं चिकित्सालय, जयपुर
                  </h2>
                )}
                <p className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5">
                  {languageMode === "HI"
                    ? "इंटरवेंशनल रेडियोलॉजी विभाग"
                    : languageMode === "EN"
                    ? "Department of Interventional Radiology"
                    : "Department of Interventional Radiology (इंटरवेंशनल रेडियोलॉजी विभाग)"}
                </p>
              </div>
            </div>

            {/* Operative Report Heading Banner (smaller font, placed cleanly below header) */}
            <div className="mt-1 px-3 py-0.5 rounded bg-zinc-100 print:bg-zinc-100 border border-zinc-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-800">
              {languageMode === "HI"
                ? "इंटरवेंशनल रेडियोलॉजी प्रक्रिया रिपोर्ट एवं पश्चातवर्ती नर्सिंग निर्देश पत्र"
                : languageMode === "EN"
                ? "CLINICAL INTERVENTIONAL RADIOLOGY OPERATIVE REPORT & POST-PROCEDURE ORDERS"
                : "CLINICAL INTERVENTIONAL RADIOLOGY OPERATIVE REPORT & POST-PROCEDURE ORDERS (प्रक्रिया रिपोर्ट)"}
            </div>
          </div>

          {/* Patient Identification & Cath-Lab Case Strip */}
          <div className="border border-zinc-300 rounded-lg p-3.5 bg-zinc-50/50 print:bg-transparent text-xs grid grid-cols-2 sm:grid-cols-4 gap-y-2.5 gap-x-4">
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "मरीज का नाम:" : "Patient Name:"}
              </span>
              <strong className="text-zinc-950 text-sm">{patientName || "—"}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "उम्र / लिंग:" : "Age / Sex:"}
              </span>
              <strong className="text-zinc-950">
                {[
                  patientAge ? `${patientAge} ${languageMode === "HI" ? "वर्ष" : "Y"}` : "",
                  patientGender
                    ? languageMode === "HI"
                      ? patientGender === "Male"
                        ? "पुरुष"
                        : patientGender === "Female"
                        ? "महिला"
                        : "अन्य"
                      : patientGender
                    : "",
                ]
                  .filter(Boolean)
                  .join(" / ") || "—"}
              </strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "सीआर / यूएचआईडी:" : "CR / UHID No.:"}
              </span>
              <strong className="font-mono text-zinc-950">{crNumber || "—"}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "वार्ड / स्थान:" : "Ward / Unit:"}
              </span>
              <strong className="text-zinc-950">
                {fixedWard}
                {ipdNumber ? ` • IPD: ${ipdNumber}` : ""}
              </strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "प्रक्रिया दिनांक व समय:" : "Procedure Date & Time:"}
              </span>
              <strong className="text-zinc-950">
                {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "—"}
              </strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "कैथ-लैब सुइट:" : "Interventional Suite:"}
              </span>
              <strong className="text-zinc-950">{opCathLabSuite}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "मुख्य प्रक्रियाकर्ता (DM):" : "Primary Operator (DM):"}
              </span>
              <strong className="text-zinc-950">{residentDoctor}</strong>
            </div>
            <div>
              <span className="text-zinc-500 text-[11px] block">
                {languageMode === "HI" ? "मार्गदर्शक आचार्य / विशेषज्ञ:" : "Supervising Consultant:"}
              </span>
              <strong className="text-zinc-950">{doctorName}</strong>
            </div>
          </div>

          {/* Procedure Title Banner */}
          <div className="border-l-4 border-blue-600 pl-3.5 py-1 bg-zinc-50/60 print:bg-transparent rounded-r-md">
            {(languageMode === "BILINGUAL" || languageMode === "EN") && (
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                {activeTemplate.nameEn}
              </h3>
            )}
            {(languageMode === "BILINGUAL" || languageMode === "HI") && (
              <h4
                className={`${
                  languageMode === "HI"
                    ? "text-xl sm:text-2xl font-extrabold text-zinc-950"
                    : "text-base sm:text-lg font-bold text-zinc-800"
                } mt-0.5 leading-snug`}
              >
                {activeTemplate.nameHi}
              </h4>
            )}
          </div>

          {/* 1. CLINICAL INDICATION & PRE-PROCEDURE DIAGNOSIS */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "1. क्लीनिकल निदान एवं प्रक्रिया का कारण:"
                  : languageMode === "EN"
                  ? "1. Clinical Indication & Diagnosis:"
                  : "1. Clinical Indication & Pre-Procedure Diagnosis (क्लीनिकल निदान एवं कारण):"}
              </span>
            </h4>
            <textarea
              rows={2}
              value={opIndication}
              onChange={(e) => setOpIndication(e.target.value)}
              placeholder="Clinical indication..."
              className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
            />
          </div>

          {/* 2. VASCULAR ACCESS & ANESTHESIA */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "2. वैस्कुलर एक्सेस, पंक्चर स्थल एवं एनेस्थीसिया:"
                  : languageMode === "EN"
                  ? "2. Vascular Access & Anesthesia:"
                  : "2. Vascular Access, Puncture Site & Anesthesia (एक्सेस व बेहोशी):"}
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Vascular / Percutaneous Access Site:
                </label>
                <textarea
                  rows={2}
                  value={opAccessSite}
                  onChange={(e) => setOpAccessSite(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Anesthesia / Sedation Type:
                </label>
                <textarea
                  rows={2}
                  value={opAnesthesiaType}
                  onChange={(e) => setOpAnesthesiaType(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
                />
              </div>
            </div>
          </div>

          {/* 3. HARDWARE & IMPLANTS USED */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "3. प्रयुक्त उपकरण, कैथेटर एवं हार्डवेयर इम्प्लांट्स:"
                  : languageMode === "EN"
                  ? "3. Hardware, Catheters & Implants Used:"
                  : "3. Interventional Hardware, Catheters & Implants Deployed (प्रयुक्त उपकरण):"}
              </span>
            </h4>
            <textarea
              rows={2}
              value={opHardwareUsed}
              onChange={(e) => setOpHardwareUsed(e.target.value)}
              placeholder="Sheaths, catheters, guidewires, stents, coils, embolics..."
              className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
            />
          </div>

          {/* 4. PROCEDURAL TECHNIQUE & STEP-BY-STEP NARRATIVE */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "4. प्रक्रिया का विस्तृत विवरण एवं चरणबद्ध तकनीक:"
                  : languageMode === "EN"
                  ? "4. Step-by-Step Procedural Technique:"
                  : "4. Step-by-Step Procedural Technique & Execution (विस्तृत विवरण):"}
              </span>
            </h4>
            <textarea
              rows={4}
              value={opProceduralSteps}
              onChange={(e) => setOpProceduralSteps(e.target.value)}
              placeholder="Detailed operative procedure narrative..."
              className="w-full p-2.5 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 leading-relaxed focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
            />
          </div>

          {/* 5. INTRA-PROCEDURAL FINDINGS & ANGIOGRAPHY */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "5. प्रक्रिया के दौरान निष्कर्ष एवं एंजियोग्राफी विवरण:"
                  : languageMode === "EN"
                  ? "5. Intra-Procedural Findings & Angiography:"
                  : "5. Diagnostic Angiography & Intra-Procedural Findings (निष्कर्ष व एंजियोग्राफी):"}
              </span>
            </h4>
            <textarea
              rows={2}
              value={opIntraOpFindings}
              onChange={(e) => setOpIntraOpFindings(e.target.value)}
              placeholder="Diagnostic findings, vessel morphology, DSA notes..."
              className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
            />
          </div>

          {/* 6. TECHNICAL RESULT & HEMOSTASIS */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "6. अंतिम प्रक्रियागत परिणाम एवं हेमोस्टेसिस विवरण:"
                  : languageMode === "EN"
                  ? "6. Technical Result & Hemostasis:"
                  : "6. Post-Procedure Technical Result & Hemostasis (अंतिम परिणाम व हेमोस्टेसिस):"}
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Final Angiographic / Technical Result:
                </label>
                <textarea
                  rows={2}
                  value={opTechnicalResult}
                  onChange={(e) => setOpTechnicalResult(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Hemostasis Method &amp; Pulse Assessment:
                </label>
                <textarea
                  rows={2}
                  value={opHemostasisMethod}
                  onChange={(e) => setOpHemostasisMethod(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
                />
              </div>
            </div>
          </div>

          {/* 7. RADIATION & CONTRAST DOSIMETRY */}
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50/70 print:bg-transparent print:border-zinc-300 text-xs">
            <span className="font-bold uppercase tracking-wider text-zinc-900 text-[11px] block mb-2 border-b border-zinc-200 pb-1">
              {languageMode === "HI"
                ? "7. रेडिएशन एवं कंट्रास्ट डाई मात्रा विवरण:"
                : languageMode === "EN"
                ? "7. Radiation Exposure & Contrast Dosimetry:"
                : "7. Radiation Exposure & Iodinated Contrast Media Dosimetry (डोज एवं कंट्रास्ट):"}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">Fluoro Time:</label>
                <input
                  type="text"
                  value={opFluoroTime}
                  onChange={(e) => setOpFluoroTime(e.target.value)}
                  className="w-full px-2 py-1 rounded border border-zinc-300 bg-white font-mono text-xs font-semibold text-zinc-900 outline-none focus:border-blue-500 print:border-none print:p-0 print:bg-transparent"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">DAP / Kerma Dose:</label>
                <input
                  type="text"
                  value={opDapDose}
                  onChange={(e) => setOpDapDose(e.target.value)}
                  className="w-full px-2 py-1 rounded border border-zinc-300 bg-white font-mono text-xs font-semibold text-zinc-900 outline-none focus:border-blue-500 print:border-none print:p-0 print:bg-transparent"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Contrast Injected (MACD: {macdLimitMl} mL):
                </label>
                <input
                  type="text"
                  value={opContrastVolume}
                  onChange={(e) => setOpContrastVolume(e.target.value)}
                  className="w-full px-2 py-1 rounded border border-zinc-300 bg-white font-mono text-xs font-semibold text-zinc-900 outline-none focus:border-blue-500 print:border-none print:p-0 print:bg-transparent"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">Complications:</label>
                <input
                  type="text"
                  value={opComplications}
                  onChange={(e) => setOpComplications(e.target.value)}
                  className="w-full px-2 py-1 rounded border border-zinc-300 bg-white text-xs font-medium text-zinc-900 outline-none focus:border-blue-500 print:border-none print:p-0 print:bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* 8. POST-OPERATIVE ORDERS & NURSING SURVEILLANCE */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "8. पश्चातवर्ती नर्सिंग निर्देश एवं मरीज निगरानी प्रोटोकॉल:"
                  : languageMode === "EN"
                  ? "8. Post-Operative Orders & Nursing Surveillance:"
                  : "8. Post-Operative Orders & Ward Nursing Surveillance (पोस्ट-ऑपरेटिव निर्देश):"}
              </span>
            </h4>
            <textarea
              rows={3}
              value={opPostOpOrders}
              onChange={(e) => setOpPostOpOrders(e.target.value)}
              placeholder="Bedrest hours, pulse checks, hydration, analgesia, emergency alerts..."
              className="w-full p-2.5 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 leading-relaxed focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
            />
          </div>

          {/* 9. MEDICATION PLAN & DISCHARGE ADVICE */}
          <div className="flex flex-col gap-1.5 text-xs">
            <h4 className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>
                {languageMode === "HI"
                  ? "9. डिस्चार्ज दवाइयां एवं सावधानियां:"
                  : languageMode === "EN"
                  ? "9. Post-Procedure Medication & Discharge Regimen:"
                  : "9. Post-Procedure Medication & Discharge Advice (दवाइयां एवं सलाह):"}
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Prescription &amp; Anticoagulation:
                </label>
                <textarea
                  rows={2}
                  value={opMedicationPlan}
                  onChange={(e) => setOpMedicationPlan(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-zinc-500 block mb-0.5">
                  Discharge Advice &amp; Red Flags:
                </label>
                <textarea
                  rows={2}
                  value={opDischargeAdvice}
                  onChange={(e) => setOpDischargeAdvice(e.target.value)}
                  className="w-full p-2 rounded-lg border border-zinc-200 bg-white font-sans text-xs text-zinc-900 focus:border-blue-500 outline-none print:border-none print:p-0 print:bg-transparent resize-y"
                />
              </div>
            </div>
          </div>

          {/* 10. MANDATORY OPERATOR & SUPERVISING CONSULTANT SIGNATURES */}
          <div className="border border-zinc-400 rounded-lg p-4 bg-white mt-2 print:mt-4 break-inside-avoid print-break-inside-avoid">
            <h5 className="font-bold text-center text-xs uppercase tracking-wider text-zinc-950 mb-4 border-b border-zinc-300 pb-1">
              {languageMode === "HI"
                ? "प्रक्रियाकर्ता एवं विशेषज्ञ चिकित्सक प्रमाणीकरण व हस्ताक्षर"
                : languageMode === "EN"
                ? "OPERATOR & SUPERVISING FACULTY CERTIFICATION"
                : "OPERATOR & SUPERVISING FACULTY CERTIFICATION (चिकित्सक हस्ताक्षर व मुहर)"}
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 text-xs">
              {/* Box 1: Primary Operator */}
              <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
                <div>
                  <span className="font-bold text-zinc-950 block">
                    {languageMode === "HI" ? "1. मुख्य प्रक्रियाकर्ता चिकित्सक" : "1. Primary Operator (Interventionalist)"}
                  </span>
                  <span className="text-[11px] text-zinc-600 block">
                    {languageMode === "HI"
                      ? "(हस्ताक्षर व प्रक्रिया समय)"
                      : "(Signature & Timestamp)"}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-700 mt-4">
                  <div>
                    {languageMode === "HI" ? "नाम: " : "Name: "}
                    <strong>{residentDoctor}</strong>
                  </div>
                  <div>
                    {languageMode === "HI" ? "प्रक्रिया तिथि व समय: " : "Date & Time: "}
                    {[procedureDate, procedureTime].filter(Boolean).join(" • ") || "_____________"}
                  </div>
                </div>
              </div>

              {/* Box 2: Supervising Consultant */}
              <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[110px]">
                <div>
                  <span className="font-bold text-zinc-950 block">
                    {languageMode === "HI" ? "2. मार्गदर्शक आचार्य / विशेषज्ञ" : "2. Supervising Faculty / Consultant"}
                  </span>
                  <span className="text-[11px] text-zinc-600 block">
                    {languageMode === "HI"
                      ? "(हस्ताक्षर व राजकीय मुहर)"
                      : "(Signature & Official Seal)"}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-700 mt-4">
                  <div>
                    {languageMode === "HI" ? "नाम: " : "Name: "}
                    <strong>{doctorName}</strong>
                  </div>
                  <div>
                    {languageMode === "HI" ? "पद: " : "Desig: "}
                    {doctorDesignation}
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Seal & Department Footnote */}
            <div className="mt-4 pt-2 border-t border-zinc-200 text-[10px] text-zinc-500 flex items-center justify-between">
              <span>
                Verified Clinical Operative Record • SMS Medical College &amp; Attached Hospitals, Jaipur
              </span>
              <span>
                Department of Radiodiagnosis &amp; Interventional Radiology
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Light subtle footer attribution */}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
