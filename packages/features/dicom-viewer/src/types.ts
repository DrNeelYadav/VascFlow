// ---------------------------------------------------------------------------
// Vascule OS DICOM Viewer - Type Definitions
// ---------------------------------------------------------------------------

/**
 * Radiation Dose Structured Report summary from DICOM RDSR.
 * Maps 1:1 to the Golang dicom-service RadiationDoseReport struct.
 */
export interface RadiationDoseReport {
  totalDAPGyCm2: number;
  cumulativeAirKermaMGy: number;
  fluoroscopyTimeSeconds: number;
  totalAcquisitions: number;
  totalFrames: number;
  protocolName: string;
  doseAreaProductUnit: string;
  referencePointAirKermaMGy?: number;
}

/**
 * Canonical study view returned by dicom-service GET /api/v1/studies/{uid}.
 * Browser-optimized projection of DICOM study-level metadata.
 */
export interface CanonicalStudyView {
  studyInstanceUid: string;
  modality: string;
  modalities: string[];
  patientName: string;
  patientId: string;
  studyDate: string;
  studyTime: string;
  accessionNumber: string;
  studyDescription: string;
  numberOfInstances: number;
  numberOfSeries: number;
  institutionName: string;
  radiationDoseReport: RadiationDoseReport | null;
}

/**
 * Full study detail response envelope from the dicom-service.
 */
export interface StudyDetailResponse {
  studyInstanceUid: string;
  canonical: CanonicalStudyView;
  dicomweb: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Window/Level (WW/WL) Presets
// ---------------------------------------------------------------------------

/**
 * A single Window Width / Window Level preset with display metadata.
 */
export interface WindowLevelPreset {
  /** Human-readable preset name */
  name: string;
  /** Window Center (WL) */
  center: number;
  /** Window Width (WW) */
  width: number;
  /** Keyboard shortcut hint */
  shortcut?: string;
}

/**
 * Clinical WW/WL presets for Interventional Radiology and diagnostic imaging.
 * Values align with IHE and ACR recommendations.
 */
export const WINDOW_LEVEL_PRESETS: WindowLevelPreset[] = [
  { name: "Angiography", center: 300, width: 600, shortcut: "1" },
  { name: "Liver", center: 60, width: 150, shortcut: "2" },
  { name: "Bone", center: 500, width: 2000, shortcut: "3" },
  { name: "Lung", center: -600, width: 1600, shortcut: "4" },
  { name: "Brain", center: 40, width: 80, shortcut: "5" },
  { name: "Abdomen", center: 40, width: 400, shortcut: "6" },
];

/**
 * Dedicated high-speed angio-suite presets:
 * Angio (600/200), Soft Tissue (400/40), Bone (2000/500)
 */
export const CLINICAL_ANGIO_PRESETS: WindowLevelPreset[] = [
  { name: "Angio", center: 200, width: 600, shortcut: "A" },
  { name: "Soft Tissue", center: 40, width: 400, shortcut: "S" },
  { name: "Bone", center: 500, width: 2000, shortcut: "B" },
];

// ---------------------------------------------------------------------------
// Viewer State
// ---------------------------------------------------------------------------

/** Interaction mode for the DICOM canvas. */
export type ViewerTool = "wwwl" | "pan" | "zoom" | "scroll";

/** Runtime state of the DICOM canvas viewer. */
export interface ViewerState {
  /** Active Window Level (center) */
  windowCenter: number;
  /** Active Window Width */
  windowWidth: number;
  /** Pan offset in canvas pixels */
  panX: number;
  panY: number;
  /** Zoom factor (1.0 = 100%) */
  zoom: number;
  /** Current image index in the stack (0-based) */
  currentFrame: number;
  /** Total frames in the active series */
  totalFrames: number;
  /** Currently selected interaction tool */
  activeTool: ViewerTool;
  /** CornerstoneJS / WADO-RS endpoint URL */
  wadoRsUrl?: string;
  /** Cine playback status */
  isPlayingCine?: boolean;
  /** Cine playback framerate (1–30 fps) */
  cineFps?: number;
}

/** Default viewer state at component mount. Uses Angiography preset. */
export const DEFAULT_VIEWER_STATE: ViewerState = {
  windowCenter: 300,
  windowWidth: 600,
  panX: 0,
  panY: 0,
  zoom: 1.0,
  currentFrame: 0,
  totalFrames: 1,
  activeTool: "wwwl",
  isPlayingCine: false,
  cineFps: 15,
};

// ---------------------------------------------------------------------------
// DICOM Tag Mapping
// ---------------------------------------------------------------------------

/**
 * Maps standard DICOM tag hex identifiers to their canonical JSON field names.
 * Used for parsing raw DICOMweb JSON responses into CanonicalStudyView.
 */
export const DICOM_TAG_MAP: Record<string, keyof CanonicalStudyView> = {
  "0020000D": "studyInstanceUid",
  "00080060": "modality",
  "00100010": "patientName",
  "00100020": "patientId",
  "00080020": "studyDate",
  "00080030": "studyTime",
  "00080050": "accessionNumber",
  "00081030": "studyDescription",
  "00201208": "numberOfInstances",
  "00201206": "numberOfSeries",
  "00080080": "institutionName",
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Apply Window/Level transformation to a raw Hounsfield Unit pixel value.
 * Returns a display intensity in the range [0, 255].
 *
 * @param rawValue - The raw pixel / HU value
 * @param center   - Window Center (WL)
 * @param width    - Window Width (WW)
 * @returns Display intensity 0-255
 */
export function applyWindowLevel(
  rawValue: number,
  center: number,
  width: number,
): number {
  const lower = center - width / 2;
  const upper = center + width / 2;
  if (rawValue <= lower) return 0;
  if (rawValue >= upper) return 255;
  return Math.round(((rawValue - lower) / width) * 255);
}

/**
 * Clamp zoom factor to safe rendering bounds.
 */
export function clampZoom(zoom: number): number {
  return Math.max(0.1, Math.min(zoom, 10.0));
}

/**
 * Type guard: checks if an object conforms to the CanonicalStudyView shape.
 */
export function isCanonicalStudyView(obj: unknown): obj is CanonicalStudyView {
  if (typeof obj !== "object" || obj === null) return false;
  const candidate = obj as Record<string, unknown>;
  return (
    typeof candidate.studyInstanceUid === "string" &&
    typeof candidate.modality === "string" &&
    typeof candidate.patientName === "string" &&
    typeof candidate.patientId === "string" &&
    typeof candidate.studyDate === "string" &&
    typeof candidate.numberOfInstances === "number" &&
    typeof candidate.numberOfSeries === "number"
  );
}
