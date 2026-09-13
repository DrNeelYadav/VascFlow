import { describe, it, expect } from "vitest";
import {
  serializeReport,
  LETTERHEAD_INSTITUTION,
  LETTERHEAD_DEPARTMENT,
} from "../../apps/web-app/app/dashboard/report/[studyId]/page";

describe("Structured Report Studio Unit Tests", () => {
  const mockStudyId = "1.2.840.113619.2.55.3.2831164244";

  const defaultMockForm = {
    procedureType: "TACE" as const,
    patientName: "SHARMA^RAJESH",
    patientId: "SMS2026-IR-00147",
    studyDate: "2026-09-13",
    clinicalIndication: "Hepatocellular carcinoma segment VII, candidate for chemoembolization.",
    accessSite: "Right Common Femoral Artery",
    catheterUsed: "2.7F Progreat microcatheter with 5F C2 Cobra",
    contrastVolumeMl: "65",
    findings: "Selective catheterization of right hepatic artery performed.",
    complication: "None" as const,
    operatorName: "Dr. A. Sharma",
    supervisorName: "Prof. R. K. Gupta",
    reportDateTime: "2026-09-13T10:30",
  };

  it("serializes report data correctly into structured payload", () => {
    const payload = serializeReport(mockStudyId, defaultMockForm);

    expect(payload.studyId).toBe(mockStudyId);
    expect(payload.procedureType).toBe("TACE");
    expect(payload.patientName).toBe("SHARMA^RAJESH");
    expect(payload.patientId).toBe("SMS2026-IR-00147");
    expect(payload.procedureDetails.accessSite).toBe("Right Common Femoral Artery");
    expect(payload.procedureDetails.catheterUsed).toBe("2.7F Progreat microcatheter with 5F C2 Cobra");
    expect(payload.procedureDetails.contrastVolumeMl).toBe(65);
    expect(payload.findings).toContain("Selective catheterization");
    expect(payload.complication).toBe("None");
    expect(payload.operator).toBe("Dr. A. Sharma");
    expect(payload.supervisor).toBe("Prof. R. K. Gupta");
    expect(payload.createdAt).toBeDefined();
  });

  it("handles contrast volume fallback if invalid or empty", () => {
    const payload = serializeReport(mockStudyId, {
      ...defaultMockForm,
      contrastVolumeMl: "",
    });

    expect(payload.procedureDetails.contrastVolumeMl).toBe(0);
  });

  it("validates official letterhead institutional metadata", () => {
    expect(LETTERHEAD_INSTITUTION).toBe("SMS Medical College & Attached Hospitals, Jaipur");
    expect(LETTERHEAD_DEPARTMENT).toBe("Department of Radiodiagnosis & Interventional Radiology");
  });

  it("formats findings correctly when multiple macros are appended", () => {
    const macro1 = "Selective catheterization performed successfully without immediate complication.";
    const macro2 = "No extravasation identified.";
    const combinedFindings = `${defaultMockForm.findings}\n${macro1}\n${macro2}`;

    const payload = serializeReport(mockStudyId, {
      ...defaultMockForm,
      findings: combinedFindings,
    });

    expect(payload.findings).toContain("Selective catheterization performed successfully");
    expect(payload.findings).toContain("No extravasation identified");
  });

  it("handles complication classification updates accurately", () => {
    const payloadMinor = serializeReport(mockStudyId, {
      ...defaultMockForm,
      complication: "Minor - requiring nominal therapy",
    });
    expect(payloadMinor.complication).toBe("Minor - requiring nominal therapy");

    const payloadMajor = serializeReport(mockStudyId, {
      ...defaultMockForm,
      complication: "Major - requiring major therapy",
    });
    expect(payloadMajor.complication).toBe("Major - requiring major therapy");
  });
});
