import { describe, it, expect } from "vitest";
import {
  applyWindowLevel,
  clampZoom,
  isCanonicalStudyView,
  WINDOW_LEVEL_PRESETS,
  DICOM_TAG_MAP,
  DEFAULT_VIEWER_STATE,
  type CanonicalStudyView,
} from "../types";

// ---------------------------------------------------------------------------
// Window/Level Preset Calculations
// ---------------------------------------------------------------------------

describe("applyWindowLevel", () => {
  it("returns 0 for pixel values below the window lower bound", () => {
    // Angiography: center=300, width=600 -> lower=0, upper=600
    expect(applyWindowLevel(-100, 300, 600)).toBe(0);
    expect(applyWindowLevel(0, 300, 600)).toBe(0);
  });

  it("returns 255 for pixel values above the window upper bound", () => {
    expect(applyWindowLevel(700, 300, 600)).toBe(255);
    expect(applyWindowLevel(600, 300, 600)).toBe(255);
  });

  it("returns 128 (midpoint) for pixel value at window center", () => {
    // center=300, width=600 -> (300 - 0) / 600 * 255 = 127.5 -> rounds to 128
    const result = applyWindowLevel(300, 300, 600);
    expect(result).toBe(128);
  });

  it("correctly maps Angiography preset range", () => {
    const preset = WINDOW_LEVEL_PRESETS.find((p) => p.name === "Angiography")!;
    expect(preset.center).toBe(300);
    expect(preset.width).toBe(600);
    // Lower bound = 300 - 300 = 0, Upper = 300 + 300 = 600
    expect(applyWindowLevel(150, preset.center, preset.width)).toBe(64);
    expect(applyWindowLevel(450, preset.center, preset.width)).toBe(191);
  });

  it("correctly maps Liver preset range", () => {
    const preset = WINDOW_LEVEL_PRESETS.find((p) => p.name === "Liver")!;
    expect(preset.center).toBe(60);
    expect(preset.width).toBe(150);
    // Lower = 60 - 75 = -15, Upper = 60 + 75 = 135
    expect(applyWindowLevel(-15, preset.center, preset.width)).toBe(0);
    expect(applyWindowLevel(135, preset.center, preset.width)).toBe(255);
    expect(applyWindowLevel(60, preset.center, preset.width)).toBe(128);
  });

  it("correctly maps Brain preset range", () => {
    const preset = WINDOW_LEVEL_PRESETS.find((p) => p.name === "Brain")!;
    expect(preset.center).toBe(40);
    expect(preset.width).toBe(80);
    // Narrow window: 0-80 range
    expect(applyWindowLevel(0, preset.center, preset.width)).toBe(0);
    expect(applyWindowLevel(80, preset.center, preset.width)).toBe(255);
  });

  it("correctly maps Lung preset with negative center", () => {
    const preset = WINDOW_LEVEL_PRESETS.find((p) => p.name === "Lung")!;
    expect(preset.center).toBe(-600);
    expect(preset.width).toBe(1600);
    // Lower = -600 - 800 = -1400, Upper = -600 + 800 = 200
    expect(applyWindowLevel(-1400, preset.center, preset.width)).toBe(0);
    expect(applyWindowLevel(200, preset.center, preset.width)).toBe(255);
  });

  it("handles width of 1 (edge case)", () => {
    expect(applyWindowLevel(100, 100, 1)).toBe(128);
    expect(applyWindowLevel(99, 100, 1)).toBe(0);
    expect(applyWindowLevel(101, 100, 1)).toBe(255);
  });
});

// ---------------------------------------------------------------------------
// DICOM Tag Mapping
// ---------------------------------------------------------------------------

describe("DICOM_TAG_MAP", () => {
  it("maps Study Instance UID tag (0020,000D) to studyInstanceUid", () => {
    expect(DICOM_TAG_MAP["0020000D"]).toBe("studyInstanceUid");
  });

  it("maps Modality tag (0008,0060) to modality", () => {
    expect(DICOM_TAG_MAP["00080060"]).toBe("modality");
  });

  it("maps Patient Name tag (0010,0010) to patientName", () => {
    expect(DICOM_TAG_MAP["00100010"]).toBe("patientName");
  });

  it("maps Patient ID tag (0010,0020) to patientId", () => {
    expect(DICOM_TAG_MAP["00100020"]).toBe("patientId");
  });

  it("maps Study Date tag (0008,0020) to studyDate", () => {
    expect(DICOM_TAG_MAP["00080020"]).toBe("studyDate");
  });

  it("maps Study Description tag (0008,1030) to studyDescription", () => {
    expect(DICOM_TAG_MAP["00081030"]).toBe("studyDescription");
  });

  it("maps Institution Name tag (0008,0080) to institutionName", () => {
    expect(DICOM_TAG_MAP["00080080"]).toBe("institutionName");
  });

  it("maps all 11 standard study-level tags", () => {
    expect(Object.keys(DICOM_TAG_MAP)).toHaveLength(11);
  });
});

// ---------------------------------------------------------------------------
// Zoom Clamping
// ---------------------------------------------------------------------------

describe("clampZoom", () => {
  it("clamps zoom below 0.1 to 0.1", () => {
    expect(clampZoom(0.01)).toBe(0.1);
    expect(clampZoom(-5)).toBe(0.1);
  });

  it("clamps zoom above 10.0 to 10.0", () => {
    expect(clampZoom(15)).toBe(10.0);
    expect(clampZoom(100)).toBe(10.0);
  });

  it("passes through valid zoom values unchanged", () => {
    expect(clampZoom(1.0)).toBe(1.0);
    expect(clampZoom(2.5)).toBe(2.5);
    expect(clampZoom(0.5)).toBe(0.5);
  });
});

// ---------------------------------------------------------------------------
// Type Guard
// ---------------------------------------------------------------------------

describe("isCanonicalStudyView", () => {
  const validStudy: CanonicalStudyView = {
    studyInstanceUid: "1.2.840.113619.2.55.3.2831164244",
    modality: "XA",
    modalities: ["XA", "SR"],
    patientName: "SHARMA^RAJESH",
    patientId: "SMS2026-IR-00147",
    studyDate: "20260913",
    studyTime: "091500",
    accessionNumber: "ACC-2026-09130042",
    studyDescription: "TACE - LEFT HEPATIC ARTERY",
    numberOfInstances: 342,
    numberOfSeries: 8,
    institutionName: "SMS Medical College, Jaipur",
    radiationDoseReport: null,
  };

  it("returns true for a valid CanonicalStudyView", () => {
    expect(isCanonicalStudyView(validStudy)).toBe(true);
  });

  it("returns false for null", () => {
    expect(isCanonicalStudyView(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isCanonicalStudyView(undefined)).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isCanonicalStudyView("not a study")).toBe(false);
  });

  it("returns false for an object missing required fields", () => {
    expect(isCanonicalStudyView({ studyInstanceUid: "1.2.3" })).toBe(false);
    expect(
      isCanonicalStudyView({
        studyInstanceUid: "1.2.3",
        modality: "XA",
        // missing patientName, patientId, etc.
      }),
    ).toBe(false);
  });

  it("returns false when numeric fields are strings", () => {
    expect(
      isCanonicalStudyView({
        ...validStudy,
        numberOfInstances: "342",
      }),
    ).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Default State
// ---------------------------------------------------------------------------

describe("DEFAULT_VIEWER_STATE", () => {
  it("uses Angiography preset as default WW/WL", () => {
    expect(DEFAULT_VIEWER_STATE.windowCenter).toBe(300);
    expect(DEFAULT_VIEWER_STATE.windowWidth).toBe(600);
  });

  it("starts at zoom 1.0 with no pan offset", () => {
    expect(DEFAULT_VIEWER_STATE.zoom).toBe(1.0);
    expect(DEFAULT_VIEWER_STATE.panX).toBe(0);
    expect(DEFAULT_VIEWER_STATE.panY).toBe(0);
  });

  it("starts at frame 0 with wwwl tool active", () => {
    expect(DEFAULT_VIEWER_STATE.currentFrame).toBe(0);
    expect(DEFAULT_VIEWER_STATE.activeTool).toBe("wwwl");
  });
});

// ---------------------------------------------------------------------------
// Preset Registry
// ---------------------------------------------------------------------------

describe("WINDOW_LEVEL_PRESETS", () => {
  it("contains exactly 6 clinical presets", () => {
    expect(WINDOW_LEVEL_PRESETS).toHaveLength(6);
  });

  it("includes all required IR presets by name", () => {
    const names = WINDOW_LEVEL_PRESETS.map((p) => p.name);
    expect(names).toContain("Angiography");
    expect(names).toContain("Liver");
    expect(names).toContain("Bone");
    expect(names).toContain("Lung");
    expect(names).toContain("Brain");
    expect(names).toContain("Abdomen");
  });

  it("assigns keyboard shortcuts 1-6", () => {
    WINDOW_LEVEL_PRESETS.forEach((preset, idx) => {
      expect(preset.shortcut).toBe(String(idx + 1));
    });
  });
});
