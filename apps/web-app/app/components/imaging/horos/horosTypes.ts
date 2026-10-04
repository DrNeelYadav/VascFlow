/**
 * Types for the HOROS desktop chrome.
 *
 * Types and type-level constants only, so every chrome component and the page
 * that drives them can agree on shapes without a cycle.
 *
 * Two rules run through all of these shapes:
 *
 *  1. **Nothing is defaulted.** A DICOM tag the scanner did not write arrives as
 *     `null`, not as an empty string and not as an invented default. The
 *     chrome renders `null` as a dash or as `Not on file`.
 *  2. **Nothing is faked.** There is no `isDemo` field, no `sample` flag and
 *     no fallback dataset. An empty PACS renders an empty PACS.
 */

import type { ComponentType } from "react";

/* ------------------------------------------------------------------ *
 * Layout and tools
 * ------------------------------------------------------------------ */

/**
 * Viewport grid layouts.
 *
 * `2x1` is two columns by one row; `1x2` is one column by two rows. The
 * geometry is spelled out in `HOROS_LAYOUTS` in horosTokens.
 */
export type HorosLayoutMode = "1x1" | "2x1" | "1x2" | "2x2" | "3x3";

/**
 * The tool that the pointer is currently bound to.
 *
 * Flip, invert, cine transport and zoom stepping are actions rather than modes:
 * they are commands against the viewport, not a state the pointer sits in, so
 * they live in `HorosViewportCommand` and leave this union alone.
 */
export type HorosToolMode =
  | "none"
  | "windowLevel"
  | "zoom"
  | "pan"
  | "rotate"
  | "stackScroll"
  | "length"
  | "angle"
  | "region"
  | "probe";

/** Modality of a study or series, from DICOM (0008,0060). Null when absent. */
export type HorosModality = string | null;

/* ------------------------------------------------------------------ *
 * PACS connection
 * ------------------------------------------------------------------ */

/**
 * The four states a PACS query can end in.
 *
 * `unreachable` is spelled out rather than folded into "no data" because the
 * two are clinically different: an empty PACS means nothing has been sent, an
 * unreachable PACS means the viewer cannot see anything at all.
 */
export type PacsConnectionState = "unknown" | "checking" | "connected" | "unreachable";

/**
 * The real state of the Orthanc instance, as last observed.
 *
 * Built by whoever performs the query. The chrome never assumes `connected`:
 * `unknown` and `checking` render as unknown, and only an actual successful
 * probe sets `connected`.
 */
export interface PacsConnectionStatus {
  /** The state of the last probe. Defaults to `unknown`, never to connected. */
  state: PacsConnectionState;
  /** The Orthanc base URL that was probed, e.g. `http://127.0.0.1:8042`. */
  baseUrl: string;
  /** Orthanc version string, when `/system` answered. Null otherwise. */
  version: string | null;
  /** ISO timestamp of the last probe. Null when no probe has run. */
  checkedAt: string | null;
  /** The failure reason when `state` is `unreachable`. Null otherwise. */
  error: string | null;
}

/* ------------------------------------------------------------------ *
 * Study list rows
 * ------------------------------------------------------------------ */

/** Sort order of the study list. */
export type HorosStudySortKey = "studyDate" | "patientName" | "modality" | "seriesCount";

/**
 * One study row in the left panel.
 *
 * `studyUid` is the row's identity: the DICOM StudyInstanceUID when the PACS
 * reports one, otherwise the PACS's own study handle. The distinction matters
 * for a DICOMweb-backed PACS, so `studyInstanceUid` keeps the real UID.
 */
export interface HorosStudyRow {
  /** Row identity: DICOM StudyInstanceUID, or the PACS study handle. */
  studyUid: string;
  /** DICOM StudyInstanceUID (0020,000D). Null when the PACS did not report one. */
  studyInstanceUid: string | null;
  /** DICOM PatientID (0010,0020). */
  patientId: string | null;
  /** DICOM PatientName (0010,0010), family name first as PACS systems send it. */
  patientName: string | null;
  /** DICOM PatientBirthDate (0010,0030), YYYYMMDD. */
  patientBirthDate: string | null;
  /** DICOM PatientSex (0010,0040), as written by the scanner. */
  patientSex: string | null;
  /** DICOM StudyDate (0008,0020), YYYYMMDD. */
  studyDate: string | null;
  /** DICOM StudyDescription (0008,1030). */
  studyDescription: string | null;
  /** DICOM AccessionNumber (0008,0050). */
  accessionNumber: string | null;
  /** Modalities present in the study. Empty when the PACS reported none. */
  modalities: readonly string[];
  /** Series count as reported by the PACS. */
  seriesCount: number;
  /** Instance count across the study as reported by the PACS. */
  instanceCount: number;
  /** A study the PACS flags as incomplete is shown, and labelled, as such. */
  isComplete: boolean;
}

/** A patient group in the study list, with the studies it owns. */
export interface HorosPatientGroup {
  /** Group identity: the patient ID, else the name, else a literal marker. */
  key: string;
  patientId: string | null;
  patientName: string | null;
  patientBirthDate: string | null;
  patientSex: string | null;
  studies: readonly HorosStudyRow[];
}

/* ------------------------------------------------------------------ *
 * Series and instance rows
 * ------------------------------------------------------------------ */

/**
 * One instance inside a series.
 *
 * Sorted spatially by the PACS client before it reaches the tree, so scrolling
 * the stack moves through the anatomy rather than through insertion order.
 */
export interface HorosInstanceRow {
  /** Row identity: the PACS instance handle. */
  instanceId: string;
  /** DICOM SOPInstanceUID (0008,0018). */
  sopInstanceUid: string | null;
  /** DICOM InstanceNumber (0020,0013). */
  instanceNumber: number | null;
  /** DICOM SliceLocation (0020,1041), in mm. */
  sliceLocation: number | null;
  /** DICOM ImagePositionPatient (0020,0032), six doubles. */
  imagePositionPatient: readonly number[] | null;
  /** DICOM PixelSpacing (0028,0030), two doubles in mm. */
  pixelSpacing: readonly number[] | null;
  /** DICOM Rows (0028,0010). */
  rows: number | null;
  /** DICOM Columns (0028,0011). */
  columns: number | null;
}

/**
 * One series (a procedure) in the series tree.
 *
 * Every DICOM attribute is nullable on purpose. The known Orthanc 1.12.9 to
 * 1.13.0 upgrade defect leaves the DB tag index empty for instances ingested
 * after the upgrade, so a series can arrive with a null description, a null
 * series number and a null modality while the pixels are perfectly intact.
 * The tree must render that, not crash and not invent.
 */
export interface HorosSeriesRow {
  /** Row identity: DICOM SeriesInstanceUID, or the PACS series handle. */
  seriesUid: string;
  /** PACS series handle, used to address instances. */
  seriesId: string | null;
  /** DICOM SeriesInstanceUID (0020,000E). */
  seriesInstanceUid: string | null;
  /** DICOM SeriesNumber (0020,0011). */
  seriesNumber: number | null;
  /** DICOM SeriesDescription (0008,103E). */
  seriesDescription: string | null;
  /** DICOM Modality (0008,0060). */
  modality: string | null;
  /** DICOM ProtocolName (0018,1030). */
  protocolName: string | null;
  /** DICOM BodyPartExamined (0018,0015). */
  bodyPartExamined: string | null;
  /** DICOM Manufacturer (0008,0070). */
  manufacturer: string | null;
  /** DICOM SeriesDate (0008,0021), YYYYMMDD. */
  seriesDate: string | null;
  /** DICOM ManufacturerModelName (0008,1090). */
  manufacturerModelName: string | null;
  /** Instances the series says it should have. */
  instanceCount: number;
  /** Instances actually retrievable from the PACS right now. */
  loadedInstanceCount: number;
  /** False when `loadedInstanceCount` is below `instanceCount`. */
  isComplete: boolean;
  /** DICOM Rows (0028,0010) read off the first instance. */
  rows: number | null;
  /** DICOM Columns (0028,0011) read off the first instance. */
  columns: number | null;
  /** The instances, in stack order. Empty when they have not been listed yet. */
  instances: readonly HorosInstanceRow[];
}

/* ------------------------------------------------------------------ *
 * Viewport readout
 * ------------------------------------------------------------------ */

/**
 * Presentation state of one viewport, as the viewport reports it.
 *
 * The status bar and the tool panel both read from this, so they can never
 * disagree with the pixels on screen. Everything numeric is nullable: a viewport
 * with nothing loaded has no window, no zoom and no frame.
 */
export interface HorosViewportReadout {
  /** Slot index in the current layout grid. */
  slotIndex: number;
  /** DICOM SeriesInstanceUID (0020,000E) on display, or null. */
  seriesInstanceUid: string | null;
  /** DICOM Modality (0008,0060) on display, or null. */
  modality: string | null;
  /** DICOM SeriesDescription (0008,103E) on display, or null. */
  seriesDescription: string | null;
  /** Zero-based index of the displayed image within its stack. */
  imageIndex: number;
  /** Images in the stack. Zero when nothing is loaded. */
  imageCount: number;
  /** DICOM WindowWidth (0028,1051) in effect. */
  windowWidth: number | null;
  /** DICOM WindowCenter (0028,1051) in effect. */
  windowCenter: number | null;
  /** Camera magnification, 1.0 being fit-to-window. */
  zoom: number | null;
  /** Rotation in degrees, clockwise, zero when the camera is upright. */
  rotation: number | null;
  /** Greyscale inversion is applied. */
  isInverted: boolean;
  /** DICOM Rows (0028,0010) of the displayed image. */
  rows: number | null;
  /** DICOM Columns (0028,0011) of the displayed image. */
  columns: number | null;
  /** The viewport has a decoded image on it. */
  isLoaded: boolean;
}

/** Cine transport state. */
export interface HorosCineState {
  isPlaying: boolean;
  /** Frames per second. Zero when the rate is not set. */
  framesPerSecond: number;
  /** Playback wraps at the end of the stack. */
  loop: boolean;
}

/** The cine state of a stopped player that has never been configured. */
export const HOROS_CINE_IDLE: HorosCineState = {
  isPlaying: false,
  framesPerSecond: 0,
  loop: true,
};

/* ------------------------------------------------------------------ *
 * Commands
 * ------------------------------------------------------------------ */

/**
 * A command sent to the viewport engine.
 *
 * `value` carries the one argument these commands need, and nothing else:
 * `cineFps` takes frames per second, `imageByIndex` takes a zero-based index.
 * Every other command ignores it.
 */
export type HorosViewportCommand =
  | "zoomIn"
  | "zoomOut"
  | "zoomToFit"
  | "actualSize"
  | "resetView"
  | "panReset"
  | "rotateLeft"
  | "rotateRight"
  | "rotateReset"
  | "flipHorizontal"
  | "flipVertical"
  | "invert"
  | "windowLevelReset"
  | "firstImage"
  | "previousImage"
  | "nextImage"
  | "lastImage"
  | "imageByIndex"
  | "cinePlay"
  | "cinePause"
  | "cineFirst"
  | "cinePrevious"
  | "cineNext"
  | "cineLast"
  | "cineLoop"
  | "cineFps"
  | "addLength"
  | "addAngle"
  | "addRegion"
  | "addProbe"
  | "deleteLastMeasurement"
  | "clearMeasurements";

/** Signature of the viewport command sink. */
export type HorosViewportCommandHandler = (
  command: HorosViewportCommand,
  value?: number,
) => void;

/**
 * A menu command.
 *
 * Split into two families. `view.invert` and `view.fullScreen` are performed by
 * the shell itself, so they work with no page wiring at all. Everything else is
 * forwarded to the page, and the menu disables it when no handler is present
 * rather than showing a button that does nothing.
 */
export type HorosMenuCommand =
  | "file.openStudy"
  | "file.closeStudy"
  | "query.refresh"
  | "query.patient"
  | "query.accession"
  | "query.clearFilters"
  | "import.dicomFolder"
  | "import.orthanc"
  | "export.dicom"
  | "export.image"
  | "export.studyListCsv"
  | "send.study"
  | "send.series"
  | "send.report"
  | "view.actualSize"
  | "view.fitToWindow"
  | "view.reset"
  | "view.rotateReset"
  | "view.invert"
  | "view.fullScreen";

/** Signature of the page-level menu command sink. */
export type HorosMenuCommandHandler = (command: HorosMenuCommand) => void;

/**
 * Per-command enablement.
 *
 * `undefined` means enabled. Only an explicit `false` disables, and a disabled
 * item always carries a reason, so the user is never left guessing.
 */
export type HorosMenuAvailability = Partial<Record<HorosMenuCommand, boolean>>;

/* ------------------------------------------------------------------ *
 * The viewport slot contract
 * ------------------------------------------------------------------ */

/**
 * The props the chrome hands one viewport slot.
 *
 * This is the interface Agent 7's `<StudyViewport>` must satisfy. The chrome
 * does not import it: `HorosAppShell` takes the component as a prop named
 * `ViewportComponent`, and the page passes the import in. That keeps the
 * dependency one-way and keeps this folder compiling while the viewport files
 * are still being written.
 *
 * A viewport must:
 *  - fill the slot it is given, edge to edge, with no padding of its own;
 *  - render nothing but pixels for the stack it is handed, and report the truth
 *    through `onReadout` whenever that changes;
 *  - treat `imageIds` as authoritative and never fabricate an imageId;
 *  - render an explicit empty state when `imageIds` is empty, rather than
 *    leaving the slot black without explanation.
 */
export interface HorosViewportSlotProps {
  /** Zero-based index of this slot in the current layout grid. */
  slotIndex: number;
  /** Total slots in the current layout grid. */
  slotCount: number;
  /** The layout mode the grid is currently in. */
  layoutMode: HorosLayoutMode;
  /** Cornerstone imageIds to display, in stack order. May be empty. */
  imageIds: readonly string[];
  /** The tool the pointer is bound to. */
  activeTool: HorosToolMode;
  /** The series whose stack is on display, or null when nothing is selected. */
  series: HorosSeriesRow | null;
  /** The instance that should be shown, by PACS instance handle, or null. */
  selectedInstanceId: string | null;
  /** Greyscale inversion is applied to this slot. */
  isInverted: boolean;
  /** Slice this slot jumped to, or null. */
  requestedImageIndex: number | null;
  /** Frame the cine player should show, or null when not playing. */
  requestedCineFrame: number | null;
  /** Rendered when there is no image: a short, honest reason. */
  emptyMessage: string | null;
  /** Fires whenever this slot's presentation state changes. */
  onReadout: (readout: HorosViewportReadout) => void;
  /** Fires when a slot is clicked, so the shell can make it the active one. */
  onSlotFocus: (slotIndex: number) => void;
  /** Fires when the user scrubs the stack inside this slot. */
  onImageIndexChange: (slotIndex: number, imageIndex: number) => void;
}

/** The viewport component the shell renders into every slot. */
export type HorosViewportComponent = ComponentType<HorosViewportSlotProps>;

/**
 * Props of the left-panel study browser.
 *
 * Declared here rather than in `HorosStudyList.tsx` so the type can be
 * imported without pulling in the component: `HorosStudyList` already depends
 * on this module, and a reverse import would close a cycle.
 */
export interface HorosStudyListProps {
  /** Studies as returned by the last PACS query. */
  studies: readonly HorosStudyRow[];
  /** The open study, by `HorosStudyRow.studyUid`, or null. */
  selectedStudyUid: string | null;
  onSelectStudy: (studyUid: string) => void;
  /** The real connection state, as last probed. */
  connection: PacsConnectionStatus;
  /** A study query is in flight. */
  loading: boolean;
  /** Runs a fresh study query against the PACS. */
  onRefresh: () => void;
  /** Current filter text, owned by the shell so the menu can clear it. */
  filter: string;
  onFilterChange: (value: string) => void;
  sortKey: HorosStudySortKey;
  onSortChange: (key: HorosStudySortKey) => void;
  /** ISO time of the last completed query, or null if none has succeeded. */
  lastSyncedAt: string | null;
  /** Studies returned by the last query, before filtering. */
  totalCount: number;
  className?: string;
}
