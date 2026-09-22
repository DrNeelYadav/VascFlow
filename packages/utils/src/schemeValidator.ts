/**
 * VascFlow OS - Rajasthan Government Scheme Pre-Submission Validator
 * Validates compliance prerequisites for MAAY (Chiranjeevi) and RGHS prior to claims submission.
 */

export interface SchemeValidationInput {
  scheme: "MAAY" | "RGHS" | "PAID" | string;
  packageCode: string;
  preAuthNumber?: string;
  preProcedureImagingTimestamp?: string | Date | null;
  postProcedureFluoroRecord?: string | boolean | null;
  implantInvoice?: string | boolean | null;
  requiresImplant?: boolean;
}

export interface SchemeValidationRequirement {
  id: "pre_auth" | "pre_imaging" | "post_fluoro" | "implant_invoice";
  label: string;
  satisfied: boolean;
  mandatory: boolean;
  detail?: string;
}

export interface SchemeValidationResult {
  isCompliant: boolean;
  status: "READY" | "INCOMPLETE" | "EXEMPT";
  readinessScore: number; // 0 to 100
  missingRequirements: string[];
  requirements: SchemeValidationRequirement[];
}

/**
 * Validates whether a procedural case fulfills all Rajasthan Government health scheme
 * claim pre-submission audit mandates (RGHS / MAAY).
 */
export function validateSchemePreSubmission(
  input: SchemeValidationInput
): SchemeValidationResult {
  const normScheme = (input.scheme || "").toUpperCase().trim();

  // Non-government or general paid cases are exempt from scheme pre-auth rules
  if (normScheme === "PAID" || normScheme === "GENERAL" || !normScheme) {
    return {
      isCompliant: true,
      status: "EXEMPT",
      readinessScore: 100,
      missingRequirements: [],
      requirements: [],
    };
  }

  const requirements: SchemeValidationRequirement[] = [];

  // 1. Official Pre-Authorization Number
  const hasPreAuth = Boolean(
    input.preAuthNumber && input.preAuthNumber.trim().length >= 6
  );
  requirements.push({
    id: "pre_auth",
    label: "Government Scheme Pre-Authorization ID",
    satisfied: hasPreAuth,
    mandatory: true,
    detail: hasPreAuth
      ? input.preAuthNumber
      : "Missing mandatory 6+ digit pre-authorization approval code",
  });

  // 2. Pre-Procedure Baseline Diagnostic Imaging Timestamp
  const hasPreImaging = Boolean(input.preProcedureImagingTimestamp);
  requirements.push({
    id: "pre_imaging",
    label: "Pre-Procedure Diagnostic Imaging Record",
    satisfied: hasPreImaging,
    mandatory: true,
    detail: hasPreImaging
      ? String(input.preProcedureImagingTimestamp)
      : "Missing verified CT/MRI/Ultrasound indication timestamp",
  });

  // 3. Post-Procedure Fluoroscopy & Catheterization Run Confirmation
  const hasFluoro = Boolean(
    input.postProcedureFluoroRecord === true ||
      (typeof input.postProcedureFluoroRecord === "string" &&
        input.postProcedureFluoroRecord.trim().length > 0)
  );
  requirements.push({
    id: "post_fluoro",
    label: "Post-Procedure Angiosuite Fluoro Archive",
    satisfied: hasFluoro,
    mandatory: true,
    detail: hasFluoro
      ? "Archived in PACS"
      : "Missing completion angiography cine or spot fluoroscopy archive",
  });

  // 4. Implant Invoice & Barcode Verification
  const isImplantMandatory = input.requiresImplant !== false;
  const hasInvoice = Boolean(
    input.implantInvoice === true ||
      (typeof input.implantInvoice === "string" &&
        input.implantInvoice.trim().length > 0)
  );
  requirements.push({
    id: "implant_invoice",
    label: "Implant Tax Invoice & RMSCL Barcode Log",
    satisfied: isImplantMandatory ? hasInvoice : true,
    mandatory: isImplantMandatory,
    detail: hasInvoice
      ? "Logged & Attached"
      : isImplantMandatory
      ? "Missing manufacturer barcode serial & GST purchase invoice"
      : "No implant required for this procedure",
  });

  const mandatoryReqs = requirements.filter((r) => r.mandatory);
  const satisfiedMandatory = mandatoryReqs.filter((r) => r.satisfied).length;
  const readinessScore = Math.round(
    (satisfiedMandatory / (mandatoryReqs.length || 1)) * 100
  );

  const missing = requirements
    .filter((r) => r.mandatory && !r.satisfied)
    .map((r) => r.label);

  const isCompliant = missing.length === 0;

  return {
    isCompliant,
    status: isCompliant ? "READY" : "INCOMPLETE",
    readinessScore,
    missingRequirements: missing,
    requirements,
  };
}
