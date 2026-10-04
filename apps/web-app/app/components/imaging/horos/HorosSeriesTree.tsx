"use client";

/**
 * The series tree: the procedures inside the open study, and the instances
 * inside each series.
 *
 * This panel is written defensively on purpose. The known Orthanc 1.12.9 to
 * 1.13.0 upgrade defect leaves the DB tag index empty for instances ingested
 * after the upgrade, so a series can arrive with a null series number, a null
 * modality, a null description and null geometry while the pixel data is
 * perfectly intact. Nothing here assumes a tag is present: each one falls back
 * to a dash, or to `Not on file` for the values a radiologist must not have to
 * guess at, and an incomplete series is labelled with what is missing rather
 * than quietly showing the loaded count.
 *
 * A series that reports fewer instances than it should carries a count of the
 * form `18/24`, because the number that matters clinically is the one the
 * scanner promised, not the number that happened to arrive.
 */

import React, { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, HardDrive, Layers } from "lucide-react";
import { HOROS_COLORS, HOROS_FONT, HOROS_SIZE, HOROS_SPACE } from "./horosTokens";
import type {
  HorosInstanceRow,
  HorosSeriesRow,
  PacsConnectionStatus,
} from "./horosTypes";
import {
  HOROS_DASH,
  HOROS_NOT_ON_FILE,
  countText,
  formatDicomDate,
  isAbsent,
  numberText,
  text,
  uidTail,
} from "./horosFormat";
import {
  badgeSelectedStyle,
  badgeStyle,
  panelFooterStyle,
  panelHeaderStyle,
  panelStyle,
  scrollAreaStyle,
} from "./horosStyles";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

export interface HorosSeriesTreeProps {
  /** Series of the open study, in stack order as the PACS reported them. */
  series: readonly HorosSeriesRow[];
  /** The open series, by `HorosSeriesRow.seriesUid`, or null. */
  selectedSeriesUid: string | null;
  onSelectSeries: (seriesUid: string) => void;
  /** The open instance, by PACS instance handle, or null. */
  selectedInstanceId: string | null;
  onSelectInstance: (seriesUid: string, instanceId: string) => void;
  /** The real connection state, as last probed. */
  connection: PacsConnectionStatus;
  /** A series or instance query is in flight. */
  loading: boolean;
  /** The open study, by `HorosStudyRow.studyUid`, or null. */
  studyUid: string | null;
  className?: string;
}

/** The count cell: `24` when the series is whole, `18/24` when it is not. */
function instanceCountText(series: HorosSeriesRow): string {
  if (series.isComplete) return `${countText(series.loadedInstanceCount)}i`;
  return `${countText(series.loadedInstanceCount)}/${countText(series.instanceCount)}i`;
}

/** `128x128`, or the dash when the geometry tags did not survive. */
function geometryText(rows: number | null, columns: number | null): string {
  if (rows === null || columns === null) return HOROS_DASH;
  return `${countText(columns)}x${countText(rows)}`;
}

/** Pixel spacing, which is what a measurement is actually derived from. */
function pixelSpacingText(spacing: readonly number[] | null | undefined): string {
  if (!spacing || spacing.length < 2) return HOROS_DASH;
  const row = Number(spacing[0]);
  const column = Number(spacing[1]);
  if (!Number.isFinite(row) || !Number.isFinite(column)) return HOROS_DASH;
  return `${numberText(column, 3)}/${numberText(row, 3)}mm`;
}

/** The instance row, indented under its series. */
function InstanceRow({
  instance,
  selected,
  position,
  onSelect,
}: {
  instance: HorosInstanceRow;
  selected: boolean;
  /** One-based position in the stack, as the PACS sorted it. */
  position: number;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={selected ? "true" : undefined}
      title={[
        `Position ${countText(position)} of this stack`,
        `Instance ${text(instance.instanceNumber)}`,
        instance.sliceLocation !== null
          ? `slice location ${numberText(instance.sliceLocation, 2)} mm`
          : null,
        `geometry ${geometryText(instance.rows, instance.columns)}`,
        `pixel spacing ${pixelSpacingText(instance.pixelSpacing)}`,
        instance.sopInstanceUid ? `SOP ${instance.sopInstanceUid}` : null,
      ]
        .filter((line): line is string => line !== null)
        .join("\n")}
      className={`horos-row${selected ? " horos-row--selected" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: "26px 34px 1fr 52px",
        alignItems: "center",
        gap: P.xxs,
        width: "100%",
        height: S.controlDense - 1,
        padding: `0 ${P.sm}px 0 20px`,
        backgroundColor: selected ? C.accent : "transparent",
        border: "none",
        color: selected ? C.accentText : C.textMuted,
        fontFamily: F.sans,
        fontSize: F.micro,
        textAlign: "left",
        cursor: "pointer",
      }}
    >
      <span style={{ fontFamily: F.mono, color: selected ? C.accentText : C.textDim }}>
        {countText(instance.instanceNumber)}
      </span>
      <span style={{ fontFamily: F.mono, fontVariantNumeric: "tabular-nums" }}>
        {instance.sliceLocation !== null
          ? `${numberText(instance.sliceLocation, 1)}mm`
          : HOROS_DASH}
      </span>
      <span className="horos-truncate" style={{ fontFamily: F.mono, letterSpacing: "0.02em" }}>
        {uidTail(instance.sopInstanceUid, 12)}
      </span>
      <span
        className="horos-truncate"
        style={{
          fontFamily: F.mono,
          textAlign: "right",
          color: selected ? C.accentTextMuted : C.textFaint,
        }}
      >
        {geometryText(instance.rows, instance.columns)}
      </span>
    </button>
  );
}

export function HorosSeriesTree({
  series,
  selectedSeriesUid,
  onSelectSeries,
  selectedInstanceId,
  onSelectInstance,
  connection,
  loading,
  studyUid,
  className,
}: HorosSeriesTreeProps) {
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(new Set<string>());

  // The open series is always expanded, so selecting a series from anywhere
  // shows its stack without the user having to find the disclosure triangle.
  const isExpanded = (uid: string) => expanded.has(uid) || uid === selectedSeriesUid;

  const toggle = (uid: string) => {
    setExpanded((previous) => {
      const next = new Set(previous);
      if (next.has(uid)) next.delete(uid);
      else next.add(uid);
      return next;
    });
  };

  const totalInstances = useMemo(
    () => series.reduce((sum, s) => sum + s.loadedInstanceCount, 0),
    [series],
  );
  const incomplete = useMemo(
    () => series.filter((s) => !s.isComplete).length,
    [series],
  );

  const selectedSeries = useMemo(
    () => series.find((s) => s.seriesUid === selectedSeriesUid) ?? null,
    [series, selectedSeriesUid],
  );

  const isUnreachable = connection.state === "unreachable";
  const showNoStudy = !isUnreachable && studyUid === null;
  const showEmpty = !isUnreachable && studyUid !== null && !loading && series.length === 0;

  return (
    <div style={panelStyle} className={className}>
      <div style={panelHeaderStyle}>
        <span className="horos-truncate">
          Series
          <span style={{ color: C.textFaint, fontFamily: F.mono, marginLeft: 5 }}>
            {countText(series.length)}
          </span>
        </span>
        {incomplete > 0 ? (
          <span
            title={`${countText(incomplete)} series report fewer instances than they should`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 3,
              color: C.alert,
              fontFamily: F.mono,
              fontSize: F.micro,
              flex: "0 0 auto",
            }}
          >
            <Layers style={{ width: 9, height: 9 }} aria-hidden="true" />
            {countText(incomplete)} short
          </span>
        ) : null}
      </div>

      <div style={scrollAreaStyle} className="horos-scroll">
        {isUnreachable ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: P.xs,
              padding: `${P.lg}px ${P.md}px`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: P.xs }}>
              <HardDrive style={{ width: 13, height: 13, color: C.alert, flex: "0 0 auto" }} aria-hidden="true" />
              <span
                style={{
                  color: C.alert,
                  fontSize: F.tiny,
                  fontWeight: F.weightBold,
                  letterSpacing: F.trackWide,
                  textTransform: "uppercase",
                }}
              >
                PACS unreachable
              </span>
            </div>
            <p
              style={{
                margin: 0,
                color: C.textDim,
                fontSize: F.tiny,
                lineHeight: F.lineTight,
              }}
            >
              Series cannot be listed while {text(connection.baseUrl)} is not answering.
            </p>
          </div>
        ) : null}

        {showNoStudy ? (
          <div
            style={{
              padding: `${P.lg}px ${P.md}px`,
              color: C.textDim,
              fontSize: F.tiny,
              lineHeight: F.lineTight,
            }}
          >
            No study open. Select a study in the list above to read its series.
          </div>
        ) : null}

        {loading ? (
          <div
            style={{
              padding: `${P.md}px`,
              color: C.textDim,
              fontSize: F.tiny,
              letterSpacing: F.trackWide,
              textTransform: "uppercase",
            }}
          >
            Reading series...
          </div>
        ) : null}

        {showEmpty ? (
          <div
            style={{
              padding: `${P.lg}px ${P.md}px`,
              color: C.textMuted,
              fontSize: F.tiny,
              lineHeight: F.lineTight,
            }}
          >
            This study reports no series. Open a different study, or check that the
            objects arrived with their Series Sequence intact.
          </div>
        ) : null}

        {!isUnreachable && studyUid !== null
          ? series.map((row) => {
              const selected = row.seriesUid === selectedSeriesUid;
              const open = isExpanded(row.seriesUid);
              const hasInstances = row.instances.length > 0;
              const Disclosure = open ? ChevronDown : ChevronRight;
              const badge = isAbsent(row.modality) ? "" : row.modality.trim().toUpperCase().slice(0, 3);

              return (
                <div key={row.seriesUid}>
                  <button
                    type="button"
                    onClick={() => onSelectSeries(row.seriesUid)}
                    onDoubleClick={() => {
                      if (hasInstances) toggle(row.seriesUid);
                    }}
                    aria-current={selected ? "true" : undefined}
                    aria-expanded={hasInstances ? open : undefined}
                    title={[
                      `Series ${text(row.seriesNumber)}`,
                      isAbsent(row.seriesDescription) ? HOROS_NOT_ON_FILE : row.seriesDescription,
                      isAbsent(row.modality) ? HOROS_NOT_ON_FILE : row.modality,
                      isAbsent(row.protocolName) ? null : `protocol ${row.protocolName}`,
                      isAbsent(row.bodyPartExamined) ? null : `body ${row.bodyPartExamined}`,
                      isAbsent(row.manufacturer) ? null : row.manufacturer,
                      row.seriesInstanceUid ? `SOP ${row.seriesInstanceUid}` : null,
                      row.isComplete
                        ? `${countText(row.loadedInstanceCount)} instances`
                        : `${countText(row.loadedInstanceCount)} of ${countText(
                            row.instanceCount,
                          )} instances present`,
                    ]
                      .filter((line): line is string => line !== null)
                      .join("\n")}
                    className={`horos-row${selected ? " horos-row--selected" : ""}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "12px 26px 22px 1fr auto",
                      alignItems: "center",
                      gap: P.xxs,
                      width: "100%",
                      height: S.seriesRow,
                      padding: `0 ${P.sm}px`,
                      backgroundColor: selected ? C.accent : C.panel,
                      border: "none",
                      borderBottom: `1px solid ${C.hairlineDark}`,
                      color: selected ? C.accentText : C.text,
                      fontFamily: F.sans,
                      fontSize: F.tiny,
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    {hasInstances ? (
                      <Disclosure
                        style={{ width: 10, height: 10, color: selected ? C.accentText : C.textDim, flex: "0 0 auto" }}
                        aria-hidden="true"
                      />
                    ) : (
                      <span style={{ width: 10, flex: "0 0 auto" }} />
                    )}
                    <span
                      style={{
                        fontFamily: F.mono,
                        fontVariantNumeric: "tabular-nums",
                        textAlign: "right",
                        color: selected ? C.accentText : C.textDim,
                      }}
                    >
                      {text(row.seriesNumber)}
                    </span>
                    <span style={selected ? badgeSelectedStyle : badgeStyle}>{badge}</span>
                    <span className="horos-truncate">
                      {isAbsent(row.seriesDescription) ? HOROS_NOT_ON_FILE : row.seriesDescription}
                    </span>
                    <span
                      className="horos-truncate"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: P.xs,
                        fontFamily: F.mono,
                        fontSize: F.micro,
                        color: row.isComplete
                          ? selected
                            ? C.accentTextMuted
                            : C.textDim
                          : C.alert,
                      }}
                    >
                      <span>{geometryText(row.rows, row.columns)}</span>
                      <span>{instanceCountText(row)}</span>
                    </span>
                  </button>

                  {open && hasInstances ? (
                    <div style={{ backgroundColor: C.panelSunken }}>
                      {row.instances.map((instance, index) => (
                        <InstanceRow
                          key={instance.instanceId}
                          instance={instance}
                          position={index + 1}
                          selected={instance.instanceId === selectedInstanceId}
                          onSelect={() => onSelectInstance(row.seriesUid, instance.instanceId)}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>

      <div style={panelFooterStyle}>
        <span className="horos-truncate">
          {selectedSeries
            ? `${instanceCountText(selectedSeries)}  ${geometryText(
                selectedSeries.rows,
                selectedSeries.columns,
              )}`
            : `${countText(totalInstances)} instances`}
        </span>
        <span className="horos-truncate" title={selectedSeries ? text(selectedSeries.seriesInstanceUid) : undefined}>
          {selectedSeries
            ? `${text(selectedSeries.modality)}  ${formatDicomDate(selectedSeries.seriesDate)}  ${uidTail(
                selectedSeries.seriesInstanceUid,
                6,
              )}`
            : HOROS_DASH}
        </span>
      </div>
    </div>
  );
}

export default HorosSeriesTree;
