import {
  PROCEDURE_CONSENT_TEMPLATES,
  ProcedureConsentTemplate,
} from "../../lib/consent/consentData";
import { EXTENSIVE_IR_PROCEDURES } from "../../lib/data/procedures";
import { ALL_MASTER_PROCEDURES } from "../../lib/masterCatalog";

export const RELATIONSHIP_OPTIONS = [
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

export const CATEGORY_ORDER = [
  "Hepatobiliary & Portal Hypertension",
  "Interventional Oncology",
  "Arterial Embolization & Pelvic Interventions",
  "Aortic & Peripheral Arterial Interventions",
  "Neurointerventional & Lymphatic",
  "Venous Thromboembolism & Non-Vascular Drainage",
  "Dialysis Access & Fistula",
  "Rare Syndromes & Vascular Disorders",
];

export function normalizeProcedureCategory(rawCat: string): string {
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

const ALIAS_MAP: Record<string, string> = {
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

export function getProcedureConsentTemplate(templateKey: string): ProcedureConsentTemplate {
  if (PROCEDURE_CONSENT_TEMPLATES[templateKey]) {
    return PROCEDURE_CONSENT_TEMPLATES[templateKey];
  }

  if (ALIAS_MAP[templateKey] && PROCEDURE_CONSENT_TEMPLATES[ALIAS_MAP[templateKey]]) {
    return PROCEDURE_CONSENT_TEMPLATES[ALIAS_MAP[templateKey]];
  }

  const master = ALL_MASTER_PROCEDURES.find((p) => p.id === templateKey);
  if (master) {
    const indicationsList = master.targetAnatomy && master.targetAnatomy.length > 0
      ? [
          `Targeted therapeutic intervention for ${master.targetAnatomy.join(", ")}`,
          `Package Code: ${master.maayRghsCompatibility.packageCode} (${master.maayRghsCompatibility.packageName})`,
        ]
      : ["Interventional radiology diagnostic and therapeutic indication"];
    const complicationsList = master.postOpCare?.redFlags && master.postOpCare.redFlags.length > 0
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
      indicationHi: "क्लीनिकल रोग निदान, इमेजिंग जांच एवं विशेषज्ञ चिकित्सीय परामर्श अनुसार न्यूनतम इनवेसिव प्रक्रिया की चिकित्सीय आवश्यकता।",
      descriptionEn: master.proceduralNarrativeTemplate || `Under real-time image guidance, specialized catheters, wires, and interventional hardware are percutaneously guided to achieve targeted therapeutic resolution for ${master.title}.`,
      descriptionHi: "एक्स-रे (फ्लोरोस्कोपी), सीटी स्कैन अथवा सोनोग्राफी की सीधी निगरानी में सुई एवं कैथेटर द्वारा की जाने वाली न्यूनतम आक्रामक इंटरवेंशनल प्रक्रिया, जिसमें बिना बड़े चीरे के सटीक उपचार किया जाता है।",
      benefitsEn: [
        `Targeted therapeutic intervention for ${master.targetAnatomy?.join(", ") || master.title}`,
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
      alternativesEn: "Open surgical operation, endoscopic intervention, medical pharmacotherapy, or watchful clinical surveillance depending on clinical staging.",
      alternativesHi: "खुला ऑपरेशन (ओपन सर्जरी), दूरबीन द्वारा इलाज, अथवा केवल दवाओं द्वारा रूढ़िवादी उपचार।",
      sedationTypeEn: master.sedation || "Local anesthesia infiltration at puncture site with monitored conscious sedation / IV analgesia as clinically indicated.",
      sedationTypeHi: "प्रक्रिया स्थल पर स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं आवश्यकतानुसार हल्की बेहोशी / शामक दवाइयां (Conscious Sedation)।",
    };
  }

  const proc = EXTENSIVE_IR_PROCEDURES.find((p) => p.id === templateKey);
  if (proc) {
    const indicationsList = proc.indications && proc.indications.length > 0
      ? proc.indications
      : ["Interventional radiology diagnostic and therapeutic indication"];
    const complicationsList = proc.complications && proc.complications.length > 0
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
      indicationHi: "क्लीनिकल रोग निदान, इमेजिंग जांच एवं विशेषज्ञ चिकित्सीय परामर्श अनुसार न्यूनतम इनवेसिव प्रक्रिया की चिकित्सीय आवश्यकता।",
      descriptionEn: `Percutaneous image-guided interventional radiology procedure for ${proc.name}.`,
      descriptionHi: "एक्स-रे अथवा सोनोग्राफी मार्गदर्शन में की जाने वाली न्यूनतम आक्रामक प्रक्रिया।",
      benefitsEn: [
        "Targeted image-guided therapeutic or diagnostic procedure.",
        "Minimally invasive approach with minimal discomfort.",
        "Rapid recovery and short hospital stay.",
      ],
      benefitsHi: [
        "न्यूनतम चीर-फाड़ द्वारा बीमारी का लक्षित उपचार।",
        "खुले ऑपरेशन की तुलना में अत्यंत कम दर्द।",
        "शीघ्र स्वास्थ्य लाभ एवं अस्पताल से जल्दी छुट्टी।",
      ],
      specificRisksEn: complicationsList,
      specificRisksHi: [
        "कैथेटर डालने के स्थान पर रक्तस्राव, सूजन अथवा हेमेटोमा होना।",
        "रक्तवाहिनी में खिंचाव या खून का थक्का जमना।",
        "कंट्रास्ट डाई से एलर्जी अथवा गुर्दों पर अस्थायी प्रभाव।",
      ],
      alternativesEn: "Medical therapy, conservative surveillance, or surgical management.",
      alternativesHi: "खुला ऑपरेशन अथवा दवाओं द्वारा रूढ़िवादी उपचार।",
      sedationTypeEn: "Local anesthesia with conscious sedation as indicated.",
      sedationTypeHi: "स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia)।",
    };
  }

  return PROCEDURE_CONSENT_TEMPLATES["tips"];
}
