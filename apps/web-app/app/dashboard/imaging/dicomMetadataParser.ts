import type {
  HorosInstanceRow,
  HorosSeriesRow,
  HorosStudyRow,
} from "@/app/components/imaging/horos/horosTypes";
import type {
  DicomJsonRecord,
  PacsSeriesSummary,
  PacsStudySummary,
} from "./pacsDataContract";

export function readString(record: DicomJsonRecord | null, tag: string): string | null {
  const element = record?.[tag];
  if (!element || !Array.isArray(element.Value)) return null;
  for (const entry of element.Value) {
    if (typeof entry === "string") {
      const trimmed = entry.trim();
      if (trimmed.length > 0) return trimmed;
      continue;
    }
    if (entry && typeof entry === "object") {
      const name = entry as Record<string, string | undefined>;
      const value = name.Alphabetic ?? name.Ideographic ?? name.Phonetic;
      if (typeof value === "string" && value.trim().length > 0) return value.trim();
    }
  }
  return null;
}

export function readNumber(record: DicomJsonRecord | null, tag: string): number | null {
  const raw = readString(record, tag);
  if (raw === null) return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

export function readNumbers(record: DicomJsonRecord | null, tag: string): number[] | null {
  const element = record?.[tag];
  if (!element || !Array.isArray(element.Value)) return null;
  const numbers: number[] = [];
  for (const entry of element.Value) {
    const parsed = typeof entry === "number" ? entry : Number(entry);
    if (!Number.isFinite(parsed)) return null;
    numbers.push(parsed);
  }
  return numbers.length > 0 ? numbers : null;
}

export function readNumberOfFrames(record: DicomJsonRecord | null): number {
  const frames = readNumber(record, "00280008");
  if (frames === null || frames < 1) return 1;
  return Math.floor(frames);
}

export function clean(value: string | number | null | undefined): string | null {
  if (value === null || value === undefined) return null;
  const trimmed = String(value).trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function cleanNumber(value: number | string | null | undefined): number | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
}

export function toStudyRow(study: PacsStudySummary): HorosStudyRow {
  const seriesCount = study.reportedSeriesCount;
  const instanceCount = study.reportedInstanceCount;
  return {
    studyUid: study.studyInstanceUID,
    studyInstanceUid: study.studyInstanceUID,
    patientId: clean(study.patientId),
    patientName: clean(study.patientName),
    patientBirthDate: clean(study.birthDate),
    patientSex: clean(study.sex),
    studyDate: clean(study.studyDate),
    studyDescription: clean(study.studyDescription),
    accessionNumber: clean(study.accessionNumber),
    modalities: study.modalities.filter((modality) => clean(modality) !== null),
    seriesCount: seriesCount ?? 0,
    instanceCount: instanceCount ?? 0,
    isComplete: seriesCount !== null && instanceCount !== null,
  };
}

export interface LoadedInstance {
  row: HorosInstanceRow;
  sopInstanceUID: string | null;
  frameCount: number;
  record: DicomJsonRecord;
}

export function sliceNormalFrom(orientation: number[] | null): [number, number, number] | null {
  if (!orientation || orientation.length < 6) return null;
  const row = orientation.slice(0, 3);
  const col = orientation.slice(3, 6);
  if (row.some((n) => !Number.isFinite(n)) || col.some((n) => !Number.isFinite(n))) {
    return null;
  }
  const normal: [number, number, number] = [
    row[1] * col[2] - row[2] * col[1],
    row[2] * col[0] - row[0] * col[2],
    row[0] * col[1] - row[1] * col[0],
  ];
  const length = Math.hypot(normal[0], normal[1], normal[2]);
  if (length === 0) return null;
  return [normal[0] / length, normal[1] / length, normal[2] / length];
}

export function sortInstances(instances: LoadedInstance[]): LoadedInstance[] {
  const normal = sliceNormalFrom(readNumbers(instances[0]?.record ?? null, "00200037"));
  const projected = instances.map((instance) => {
    const position = readNumbers(instance.record, "00200032");
    let projection = 0;
    if (normal && position && position.length >= 3) {
      projection = position[0] * normal[0] + position[1] * normal[1] + position[2] * normal[2];
    }
    return { instance, projection };
  });

  projected.sort((left, right) => {
    const a = left.instance.row;
    const b = right.instance.row;
    if (a.sliceLocation !== null && b.sliceLocation !== null) {
      return a.sliceLocation - b.sliceLocation;
    }
    if (left.projection !== right.projection) return left.projection - right.projection;
    if (
      a.instanceNumber !== null &&
      b.instanceNumber !== null &&
      a.instanceNumber !== b.instanceNumber
    ) {
      return a.instanceNumber - b.instanceNumber;
    }
    return (left.instance.sopInstanceUID ?? "").localeCompare(right.instance.sopInstanceUID ?? "");
  });

  return projected.map((entry) => entry.instance);
}

export function toSeriesRow(series: PacsSeriesSummary, instances: LoadedInstance[]): HorosSeriesRow {
  const ordered = sortInstances(instances);
  const first = ordered[0]?.record ?? null;
  const expected = series.reportedInstanceCount ?? series.instanceCount;
  return {
    seriesUid: series.seriesInstanceUID,
    seriesId: series.seriesInstanceUID,
    seriesInstanceUid: series.seriesInstanceUID,
    seriesNumber: cleanNumber(series.seriesNumber),
    seriesDescription: clean(series.seriesDescription),
    modality: clean(series.modality),
    protocolName: clean(series.protocolName),
    bodyPartExamined: clean(series.bodyPartExamined),
    manufacturer: clean(series.manufacturer),
    seriesDate: clean(series.seriesDate),
    manufacturerModelName: null,
    instanceCount: expected,
    loadedInstanceCount: ordered.length,
    isComplete: ordered.length >= expected,
    rows: readNumber(first, "00280010"),
    columns: readNumber(first, "00280011"),
    instances: ordered.map((instance) => instance.row),
  };
}

export function groupInstancesBySeries(records: DicomJsonRecord[]): Map<string, LoadedInstance[]> {
  const grouped = new Map<string, LoadedInstance[]>();
  for (const record of records) {
    const sopInstanceUID = readString(record, "00080018");
    const seriesInstanceUID = readString(record, "0020000E");
    if (!sopInstanceUID || !seriesInstanceUID) continue;

    const bucket = grouped.get(seriesInstanceUID) ?? [];
    bucket.push({
      sopInstanceUID,
      frameCount: readNumberOfFrames(record),
      record,
      row: {
        instanceId: sopInstanceUID,
        sopInstanceUid: sopInstanceUID,
        instanceNumber: readNumber(record, "00200013"),
        sliceLocation: readNumber(record, "00201041"),
        imagePositionPatient: readNumbers(record, "00200032"),
        pixelSpacing: readNumbers(record, "00280030"),
        rows: readNumber(record, "00280010"),
        columns: readNumber(record, "00280011"),
      },
    });
    grouped.set(seriesInstanceUID, bucket);
  }
  return grouped;
}
