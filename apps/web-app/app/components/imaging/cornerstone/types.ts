/**
 * Shared types for the HOROS imaging workstation.
 *
 * These are the contracts the chrome and viewport components (Agents 6 and 7)
 * import. They deliberately describe *viewer state and DICOM-derived facts*
 * only: every field is either read from a DICOM header or computed from it.
 *
 * Two rules are load-bearing throughout, from CONTRACT.md section 1:
 *
 *   1. Absent data is `null`, never a placeholder. A study with no PatientName
 *      has `patientName: null` and the overlay renders `Not on file`. There is
 *      no default value anywhere in this file that could stand in for a fact
 *      the archive does not contain.
 *   2. `instanceNumber` and slice ordering are kept separate on purpose. Some
 *      archive objects (several OT/XA series) have no InstanceNumber at all, and
 *      a radiologist reads stack order from spatial position. `sortKey`
 *      records which signal actually ordered the stack so the UI can say so.
 */

/** Viewport grid layouts, HOROS convention. */
export enum ViewportLayout {
  /** 1x1 large. Default for projectional fluoro (XA / CR / DX). */
  Single = 'single',
  /** 1x2 side by side. */
  DualHorizontal = 'dual-horizontal',
  /** 2x1 stacked. */
  DualVertical = 'dual-vertical',
  /** 2x2. Default for cross-sectional (CT / MR). */
  Quad = 'quad',
  /** 1x3 across. */
  TripleHorizontal = 'triple-horizontal',
  /** 3x1 stacked. */
  TripleVertical = 'triple-vertical',
  /** 3x3. */
  NineUp = 'nine-up',
}

/** Number of viewport cells in a layout. */
export const VIEWPORT_COUNT_BY_LAYOUT: Readonly<Record<ViewportLayout, number>> = {
  [ViewportLayout.Single]: 1,
  [ViewportLayout.DualHorizontal]: 2,
  [ViewportLayout.DualVertical]: 2,
  [ViewportLayout.Quad]: 4,
  [ViewportLayout.TripleHorizontal]: 3,
  [ViewportLayout.TripleVertical]: 3,
  [ViewportLayout.NineUp]: 9,
};

/** Modality classes that decide the default layout for a series. */
export type ModalityClass = 'cross-sectional' | 'projectional' | 'unknown';

/**
 * Modalities read as cross-sectional multi-slice volumes.
 *
 * The list is the DICOM modality set that carries a voxel grid. Anything not
 * listed here and not in PROJECTIONAL is reported as `unknown` rather than
 * guessed into one of the two buckets.
 */
const CROSS_SECTIONAL_MODALITIES: ReadonlySet<string> = new Set([
  'CT',
  'MR',
  'PT',
  'US',
  'NM',
  'SR',
  'RTIMAGE',
]);

/** Modalities read as projectional stacks (single plane, often many frames). */
const PROJECTIONAL_MODALITIES: ReadonlySet<string> = new Set([
  'CR',
  'DX',
  'XA',
  'RF',
  'MG',
  'IO',
  'OT',
  'OP',
  'SC',
]);

/** Classifies a DICOM Modality value, case-insensitively, never guessing. */
export function classifyModality(modality: string | null): ModalityClass {
  if (!modality) return 'unknown';
  const upper = modality.toUpperCase();
  if (CROSS_SECTIONAL_MODALITIES.has(upper)) return 'cross-sectional';
  if (PROJECTIONAL_MODALITIES.has(upper)) return 'projectional';
  return 'unknown';
}

/** The default viewport layout for a modality class, per the product intent. */
export function defaultLayoutForModality(modality: string | null): ViewportLayout {
  return classifyModality(modality) === 'projectional'
    ? ViewportLayout.Single
    : ViewportLayout.Quad;
}

/** Which right-panel tool is armed. `none` means navigation only. */
export enum ToolMode {
  None = 'none',
  WindowLevel = 'windowLevel',
  Pan = 'pan',
  Zoom = 'zoom',
  Rotate = 'rotate',
  Flip = 'flip',
  StackScroll = 'stackScroll',
  Cine = 'cine',
  Length = 'length',
  Probe = 'probe',
  RectangleRoi = 'rectangleRoi',
  FreehandRoi = 'freehandRoi',
  Livewire = 'livewire',
  Bidirectional = 'bidirectional',
  ArrowAnnotate = 'arrowAnnotate',
}

/**
 * Mouse map. HOROS/PACS convention, matching cornerstone `MouseBindings`.
 *
 * Left drags window/level, right drags pan, middle wheel zooms, wheel scrolls
 * the stack. These are the values passed to `ToolGroup.setToolActive`.
 */
export const HOROS_MOUSE_BINDINGS = {
  windowLevel: 1,
  pan: 2,
  zoom: 4,
  wheel: 524288,
} as const;

/** One loaded image in a stack viewport, as the overlay reads it. */
export interface ImageDescriptor {
  /** Cornerstone imageId, i.e. the `wadors:` URI used to load it. */
  imageId: string;
  /** DICOM SOPInstanceUID. */
  sopInstanceUID: string;
  /** Zero-based index within the stack, as displayed. */
  index: number;
  /** Total images in the stack. */
  total: number;
  /** DICOM (0020,0013) InstanceNumber, or null when the archive omits it. */
  instanceNumber: number | null;
  /** DICOM (0020,0032) ImagePositionPatient, or null when absent. */
  imagePositionPatient: [number, number, number] | null;
  /** DICOM (0020,0037) ImageOrientationPatient, or null when absent. */
  imageOrientationPatient: [number, number, number, number, number, number] | null;
  /** Pixel spacing [row, column] from (0028,0030), or null when absent. */
  pixelSpacing: [number, number] | null;
  /** Rows. Null only if the header could not be read at all. */
  rows: number | null;
  /** Columns. Null only if the header could not be read at all. */
  columns: number | null;
  /** DICOM (0028,0008) NumberOfFrames, or null for a single-frame object. */
  numberOfFrames: number | null;
  /** DICOM (0008,0060) Modality. */
  modality: string | null;
  /** UID of the containing series. */
  seriesInstanceUID: string;
  /** UID of the containing study. */
  studyInstanceUID: string;
}

/** A series as the left panel and viewport chrome read it. */
export interface SeriesDescriptor {
  seriesInstanceUID: string;
  studyInstanceUID: string;
  /** DICOM (0020,0011) SeriesNumber, or null when absent. */
  seriesNumber: number | null;
  /** DICOM (0008,103E) SeriesDescription, or null when absent. */
  seriesDescription: string | null;
  /** DICOM (0008,0060) Modality, or null when absent. */
  modality: string | null;
  /** Instance count from QIDO, or null if the count was not returned. */
  instanceCount: number | null;
}

/** A study as the left panel reads it. */
export interface StudyDescriptor {
  studyInstanceUID: string;
  /** DICOM (0010,0010) PatientName, or null when absent. */
  patientName: string | null;
  /** DICOM (0010,0020) PatientID, or null when absent. */
  patientId: string | null;
  /** DICOM (0010,0040) PatientSex, or null when absent. */
  patientSex: string | null;
  /** DICOM (0010,1010) PatientAge, e.g. "035Y", verbatim or null. */
  patientAge: string | null;
  /** DICOM (0008,0020) StudyDate as "YYYYMMDD", or null when absent. */
  studyDate: string | null;
  /** DICOM (0008,1030) StudyDescription, or null when absent. */
  studyDescription: string | null;
  /** Modalities present, derived from the series list. Never invented. */
  modalities: string[];
  /** Series UIDs in this study. */
  seriesInstanceUIDs: string[];
}

/** How the stack got ordered, so the status bar can report it truthfully. */
export type StackOrderBasis = 'instance-number' | 'image-position' | 'sop-uid';

/** Cine playback state. Single-frame stacks report `frameCount: 1`. */
export interface CineState {
  /** False when the stack has fewer than two frames: nothing to play. */
  playing: boolean;
  /** Frames per second. Null when the source states no CineRate. */
  frameRate: number | null;
  /** DICOM (0018,0040) CineRate, verbatim string or null when absent. */
  cineRate: string | null;
  /** Total frames available in the current stack. */
  frameCount: number;
  /** Zero-based current frame. */
  currentFrame: number;
  /** True when the source has exactly one frame and cannot loop meaningfully. */
  singleFrame: boolean;
}

/** Window/level and display state for one viewport. */
export interface ViewportRenderState {
  viewportId: string;
  /** Index of the displayed image within the stack. */
  currentImageIdIndex: number;
  /** Total images in the stack, 0 when nothing is loaded. */
  stackLength: number;
  /** DICOM window centre actually in effect, from VOI or the applied preset. */
  windowCenter: number | null;
  /** DICOM window width actually in effect. */
  windowWidth: number | null;
  /** Camera scale relative to fit-to-viewport. 1 is the default fit. */
  zoomScale: number;
  /** Whether the viewport is inverted. */
  inverted: boolean;
  /** Rotation in degrees, 0 when unrotated. */
  rotationDegrees: number;
  /** Horizontal flip applied. */
  flippedHorizontal: boolean;
  /** Vertical flip applied. */
  flippedVertical: boolean;
  /** Rendering preset name shown in the bottom-right overlay. */
  renderingPresetName: string | null;
  /** Stack ordering basis, reported rather than implied. */
  stackOrderBasis: StackOrderBasis;
}

/** Live state of the PACS connection, for the bottom status bar. */
export interface PacsConnectionState {
  /** True when the last reachability probe succeeded. */
  reachable: boolean;
  /** Orthanc version string from GET /system, or null when unreachable. */
  serverVersion: string | null;
  /** Loaded plugin names from GET /plugins, or null when unreachable. */
  plugins: string[] | null;
  /** Millisecond timestamp of the last completed probe. */
  lastCheckedAt: number | null;
  /** Populated when the last probe failed. Null on success. */
  lastError: string | null;
}

/** Combined viewer state pushed up to the chrome by the viewport components. */
export interface HorosViewerState {
  /** Layout currently driving the grid. */
  layout: ViewportLayout;
  /** Armed tool in the right panel. */
  toolMode: ToolMode;
  /** Per-viewport render state, keyed by viewportId. */
  viewports: Record<string, ViewportRenderState>;
  /** Cine playback state for the focused viewport. */
  cine: CineState;
  /** PACS connection state. */
  pacs: PacsConnectionState;
  /** Series under display, or null when nothing is selected. */
  activeSeries: SeriesDescriptor | null;
  /** Images in the active stack, ordered. Empty when nothing is loaded. */
  stack: ImageDescriptor[];
}

/**
 * The explicit absence marker the UI renders when a DICOM attribute is null.
 *
 * CONTRACT.md section 1 forbids inventing a default. `NOT_ON_FILE` is the one
 * sanctioned way to express "the archive does not contain this", so the overlay
 * has a single symbol to render rather than each component inventing one.
 */
export const NOT_ON_FILE = 'Not on file';

/** Renders a nullable DICOM value for display, never substituting a default. */
export function displayValue(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return NOT_ON_FILE;
  const text = String(value).trim();
  return text.length > 0 ? text : NOT_ON_FILE;
}
