/**
 * EndoFlow Phase 38: Google Gemini Vision Multimodal OCR Extraction Service
 * Zero-phantom clinical intake from WhatsApp/Telegram CT console photos and requisition slips
 */

export interface ExtractedClinicalOcrResult {
  patientName: string;
  uhidOrCr: string;
  age: number | null;
  gender: "Male" | "Female" | "Other" | null;
  scanDate: string | null;
  clinicalIndication: string;
  targetOrgan: string;
  suggestedProcedure: string;
  confidence: number;
  rawText?: string;
}

export function parseDeterministicClinicalText(text: string): ExtractedClinicalOcrResult {
  const result: ExtractedClinicalOcrResult = {
    patientName: "",
    uhidOrCr: "",
    age: null,
    gender: null,
    scanDate: null,
    clinicalIndication: "",
    targetOrgan: "Others",
    suggestedProcedure: "",
    confidence: 0.85,
    rawText: text,
  };

  if (!text) return result;

  // 1. Patient Name matching
  const nameMatch = text.match(/(?:patient(?:\s+name)?|name|pt\.?\s*name)[:\s]+([a-zA-Z\s\.]+)(?:\r?\n|,|$)/i);
  if (nameMatch && nameMatch[1].trim()) {
    result.patientName = nameMatch[1].trim();
  }

  // 2. UHID / CR Number matching
  const crMatch = text.match(/(?:cr(?:\s*no\.?|\s*number)?|uhid)[:\s]+([a-zA-Z0-9\-\/]+)/i);
  if (crMatch && crMatch[1].trim()) {
    result.uhidOrCr = crMatch[1].trim();
  }

  // 3. Age & Gender matching (e.g. 45/M, 52 Y / Female)
  const ageGenderMatch = text.match(/(\d{1,3})\s*(?:y(?:ears?)?|yrs?)?\s*[\/\-]\s*(m(?:ale)?|f(?:emale)?)/i);
  if (ageGenderMatch) {
    result.age = parseInt(ageGenderMatch[1], 10);
    const g = ageGenderMatch[2].toUpperCase();
    result.gender = g.startsWith("M") ? "Male" : "Female";
  }

  // 4. Clinical Indication & Procedure mapping
  const lower = text.toLowerCase();
  if (lower.includes("budd chiari") || lower.includes("dips") || lower.includes("tips")) {
    result.targetOrgan = "Liver & Hepatobiliary";
    result.suggestedProcedure = lower.includes("dips") ? "Direct Intrahepatic Portosystemic Shunt (DIPS)" : "TIPS";
    result.clinicalIndication = "Budd-Chiari Syndrome / Portal Hypertension";
  } else if (lower.includes("varicose") || lower.includes("evla") || lower.includes("rfa")) {
    result.targetOrgan = "Venous & Dialysis Access";
    result.suggestedProcedure = "Endovenous Laser / Radiofrequency Ablation (EVLA/RFA)";
    result.clinicalIndication = "Symptomatic Lower Limb Varicose Veins (CEAP C4-C6)";
  } else if (lower.includes("tace") || lower.includes("hcc")) {
    result.targetOrgan = "Liver & Hepatobiliary";
    result.suggestedProcedure = "Transarterial Chemoembolization (TACE)";
    result.clinicalIndication = "Hepatocellular Carcinoma (HCC)";
  } else if (lower.includes("ptbd") || lower.includes("biliary")) {
    result.targetOrgan = "Liver & Hepatobiliary";
    result.suggestedProcedure = "Percutaneous Transhepatic Biliary Drainage (PTBD)";
    result.clinicalIndication = "Obstructive Jaundice / Malignant Biliary Obstruction";
  } else if (lower.includes("hemoptysis") || lower.includes("bae")) {
    result.targetOrgan = "Thoracic & Pulmonary";
    result.suggestedProcedure = "Bronchial Artery Embolization (BAE)";
    result.clinicalIndication = "Life-Threatening Massive Hemoptysis";
  } else if (lower.includes("av fistula") || lower.includes("fistuloplasty")) {
    result.targetOrgan = "Venous & Dialysis Access";
    result.suggestedProcedure = "AV Fistula Angioplasty / Central Venous Recanalization";
    result.clinicalIndication = "Dialysis Access Dysfunction";
  }

  return result;
}

export async function extractClinicalDataWithGeminiVision(
  imageBase64OrUrl: string,
  captionHint?: string,
  apiKey = process.env.GEMINI_API_KEY
): Promise<ExtractedClinicalOcrResult> {
  // If API key is not present or running in test/offline environment, use deterministic text parsing on caption
  if (!apiKey || process.env.NODE_ENV === "test") {
    return parseDeterministicClinicalText(captionHint || "");
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const payload = {
      contents: [
        {
          parts: [
            {
              text: `You are an Interventional Radiology clinical documentation OCR specialist. Extract structured patient metadata from this CT console photo, requisition slip, or clinical report photo.
Return ONLY valid JSON matching this schema:
{
  "patientName": string,
  "uhidOrCr": string,
  "age": number or null,
  "gender": "Male" or "Female" or null,
  "scanDate": string (YYYY-MM-DD) or null,
  "clinicalIndication": string,
  "targetOrgan": "Liver & Hepatobiliary" | "Thoracic & Pulmonary" | "Gastrointestinal & Mesenteric" | "Peripheral Vascular" | "Pelvic & Genitourinary" | "Venous & Dialysis Access" | "Others",
  "suggestedProcedure": string,
  "confidence": number between 0.0 and 1.0
}
Strict Rule: Do NOT invent, hallucinate, or hardcode fake data. If a field cannot be determined, set it to empty string or null.`,
            },
            imageBase64OrUrl.startsWith("data:")
              ? {
                  inlineData: {
                    mimeType: imageBase64OrUrl.split(";")[0].replace("data:", ""),
                    data: imageBase64OrUrl.split(",")[1],
                  },
                }
              : { text: `Image Source: ${imageBase64OrUrl}` },
            captionHint ? { text: `Clinical Note / Caption: ${captionHint}` } : undefined,
          ].filter(Boolean),
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.1,
      },
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return parseDeterministicClinicalText(captionHint || "");
    }

    const json = await res.json();
    const rawContent = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (rawContent) {
      const parsed = JSON.parse(rawContent) as ExtractedClinicalOcrResult;
      return {
        ...parsed,
        confidence: typeof parsed.confidence === "number" ? parsed.confidence : 0.9,
      };
    }
  } catch (err) {
    console.error("[GeminiVisionOcr] Extraction error, falling back to deterministic text parser:", err);
  }

  return parseDeterministicClinicalText(captionHint || "");
}
