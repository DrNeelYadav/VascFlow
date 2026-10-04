"use client";

/**
 * The left panel: patients, their studies, and the PACS state underneath them.
 *
 * This is the worklist a radiologist reads at the start of a session, so the
 * columns are the ones that decide which study gets opened next: patient and
 * demographics, modality, date, description, series and instance counts. Rows
 * are grouped by patient because that is how a reading session is organised,
 * and the group header carries the sex/age and patient ID once instead of on
 * every row.
 *
 * There are exactly four honest outcomes and no fifth:
 *
 *  - the PACS did not answer            -> the unreachable panel, no rows
 *  - no probe has run yet               -> a query prompt, no rows
 *  - the PACS answered with nothing     -> an empty-PACS panel, no rows
 *  - the PACS answered with studies     -> the rows
 *
 * A filter that matches nothing prints a filter message, and nothing else. No
 * sample patients, no seeded worklist, no optimistic rows.
 */

import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  HardDrive,
  RefreshCw,
  RotateCw,
  Search,
} from "lucide-react";
import {
  HOROS_COLORS,
  HOROS_FONT,
  HOROS_SIZE,
  HOROS_SPACE,
  HOROS_TOOL_SHORTCUTS,
} from "./horosTokens";
import type {
  HorosStudyListProps,
  HorosStudyRow,
  HorosStudySortKey,
  PacsConnectionStatus,
} from "./horosTypes";
import {
  HOROS_DASH,
  HOROS_NOT_ON_FILE,
  countText,
  demographics,
  formatClockTime,
  formatDicomDate,
  isAbsent,
  modalityBadge,
  patientNameOrMissing,
  text,
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

interface PatientGroup {
  key: string;
  patientId: string | null;
  patientName: string | null;
  patientBirthDate: string | null;
  patientSex: string | null;
  studies: HorosStudyRow[];
}

/** Matches a study against the filter box, across every column on the row. */
function matchesFilter(study: HorosStudyRow, query: string): boolean {
  if (!query) return true;
  const haystack = [
    study.patientName,
    study.patientId,
    study.studyDescription,
    study.accessionNumber,
    study.studyInstanceUid,
    study.studyDate,
    ...study.modalities,
  ]
    .filter((v): v is string => !isAbsent(v))
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

/** Sorts newest first, with absent dates last rather than first. */
function byStudyDateDesc(a: HorosStudyRow, b: HorosStudyRow): number {
  const left = a.studyDate ?? "";
  const right = b.studyDate ?? "";
  if (left === right) return 0;
  if (left === "") return 1;
  if (right === "") return -1;
  return right.localeCompare(left);
}

/** The order the two-dimensional study list is shown in. */
function sortGroups(
  groups: PatientGroup[],
  sortKey: HorosStudySortKey,
): PatientGroup[] {
  const sorted = groups.map((group) => {
    const studies = [...group.studies];
    if (sortKey === "seriesCount") {
      studies.sort((a, b) => b.seriesCount - a.seriesCount || byStudyDateDesc(a, b));
    } else if (sortKey === "modality") {
      studies.sort(
        (a, b) =>
          (a.modalities[0] ?? "").localeCompare(b.modalities[0] ?? "") ||
          byStudyDateDesc(a, b),
      );
    } else {
      studies.sort(byStudyDateDesc);
    }
    return { ...group, studies };
  });

  if (sortKey === "patientName") {
    sorted.sort((a, b) =>
      (a.patientName ?? "").localeCompare(b.patientName ?? ""),
    );
  } else if (sortKey === "modality") {
    sorted.sort((a, b) =>
      (a.studies[0]?.modalities[0] ?? "").localeCompare(
        b.studies[0]?.modalities[0] ?? "",
      ),
    );
  } else if (sortKey === "seriesCount") {
    sorted.sort(
      (a, b) =>
        b.studies.reduce((sum, s) => sum + s.seriesCount, 0) -
        a.studies.reduce((sum, s) => sum + s.seriesCount, 0),
    );
  } else {
    // Newest first: the group carrying the most recent study leads.
    sorted.sort(
      (a, b) =>
        (b.studies[0]?.studyDate ?? "").localeCompare(a.studies[0]?.studyDate ?? ""),
    );
  }
  return sorted;
}

/** The panel shown when there is genuinely nothing to list. */
function StatePanel({
  title,
  detail,
  color,
  action,
}: {
  title: string;
  detail: string;
  color: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div style={{ padding: `${P.lg}px ${P.md}px`, display: "flex", flexDirection: "column", gap: P.sm }}>
      <div style={{ display: "flex", alignItems: "center", gap: P.xs }}>
        <HardDrive style={{ width: 13, height: 13, color, flex: "0 0 auto" }} aria-hidden="true" />
        <span
          style={{
            color,
            fontFamily: F.sans,
            fontSize: F.tiny,
            fontWeight: F.weightBold,
            letterSpacing: F.trackWide,
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
      </div>
      <p
        style={{
          margin: 0,
          color: C.textDim,
          fontFamily: F.sans,
          fontSize: F.tiny,
          lineHeight: F.lineTight,
        }}
      >
        {detail}
      </p>
      {action ? (
        <button
          type="button"
          onClick={action.onClick}
          className="horos-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: P.xxs,
            alignSelf: "flex-start",
            height: S.control,
            padding: `0 ${P.sm}px`,
            backgroundColor: C.control,
            border: `1px solid ${C.hairline}`,
            borderRadius: S.radius,
            color: C.text,
            fontFamily: F.sans,
            fontSize: F.tiny,
            fontWeight: F.weightMedium,
            cursor: "pointer",
          }}
        >
          <RotateCw style={{ width: 11, height: 11 }} aria-hidden="true" />
          {action.label}
        </button>
      ) : null}
    </div>
  );
}

export function HorosStudyList({
  studies,
  selectedStudyUid,
  onSelectStudy,
  connection,
  loading,
  onRefresh,
  filter,
  onFilterChange,
  sortKey,
  onSortChange,
  lastSyncedAt,
  totalCount,
  className,
}: HorosStudyListProps) {
  const [collapsed, setCollapsed] = useState<ReadonlySet<string>>(new Set<string>());

  const query = filter.trim().toLowerCase();
  const groups = useMemo(() => {
    const buckets = new Map<string, PatientGroup>();
    for (const study of studies) {
      const key = isAbsent(study.patientId)
        ? isAbsent(study.patientName)
          ? "__unidentified__"
          : `name:${study.patientName.trim()}`
        : `id:${study.patientId.trim()}`;
      const bucket = buckets.get(key);
      if (bucket) {
        bucket.studies.push(study);
      } else {
        buckets.set(key, {
          key,
          patientId: study.patientId,
          patientName: study.patientName,
          patientBirthDate: study.patientBirthDate,
          patientSex: study.patientSex,
          studies: [study],
        });
      }
    }
    // The filter applies to individual studies, so a group keeps only the
    // studies that match and disappears entirely when none of them do.
    const filtered = Array.from(buckets.values())
      .map((group) => ({ ...group, studies: group.studies.filter((s) => matchesFilter(s, query)) }))
      .filter((group) => group.studies.length > 0);
    return sortGroups(filtered, sortKey);
  }, [studies, sortKey, query]);

  // Keep a collapsed group open when it holds the open study, so selecting a
  // study from elsewhere in the app can never hide the selection.
  const openStudyGroup = useMemo(() => {
    if (!selectedStudyUid) return null;
    const study = studies.find((s) => s.studyUid === selectedStudyUid);
    if (!study) return null;
    if (!isAbsent(study.patientId)) return `id:${study.patientId.trim()}`;
    if (!isAbsent(study.patientName)) return `name:${study.patientName.trim()}`;
    return "__unidentified__";
  }, [studies, selectedStudyUid]);

  const matchedCount = useMemo(
    () => groups.reduce((sum, group) => sum + group.studies.length, 0),
    [groups],
  );

  const toggleGroup = (key: string) => {
    setCollapsed((previous) => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const isUnreachable = connection.state === "unreachable";
  const hasProbed = connection.state === "connected";
  const showQueryPrompt = !isUnreachable && !hasProbed && !loading;
  const showEmptyPacs = hasProbed && matchedCount === 0 && query.length === 0;
  const showNoFilterMatch = hasProbed && matchedCount === 0 && query.length > 0;

  return (
    <div style={panelStyle} className={className}>
      {/* Panel header: title, live count, query button. */}
      <div style={panelHeaderStyle}>
        <span className="horos-truncate">
          Studies
          <span style={{ color: C.textFaint, fontFamily: F.mono, marginLeft: 5 }}>
            {query ? `${matchedCount}/${totalCount}` : countText(totalCount)}
          </span>
        </span>
        <button
          type="button"
          onClick={onRefresh}
          disabled={loading}
          title="Query the PACS for the study list (F5)"
          aria-label="Query the PACS for the study list"
          className="horos-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            height: S.controlDense - 4,
            padding: `0 ${P.xs}px`,
            backgroundColor: C.control,
            border: `1px solid ${C.hairline}`,
            borderRadius: S.radius,
            color: loading ? C.textFaint : C.text,
            fontFamily: F.sans,
            fontSize: F.micro,
            fontWeight: F.weightBold,
            letterSpacing: F.trackWide,
            textTransform: "uppercase",
            cursor: loading ? "default" : "pointer",
            flex: "0 0 auto",
          }}
        >
          <RefreshCw
            style={{ width: 9, height: 9, flex: "0 0 auto" }}
            className={loading ? "animate-spin" : undefined}
            aria-hidden="true"
          />
          Query
        </button>
      </div>

      {/* Filter. */}
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          gap: P.xs,
          padding: `${P.xxs}px ${P.sm}px`,
          borderBottom: `1px solid ${C.hairlineDark}`,
          backgroundColor: C.panelSunken,
        }}
      >
        <Search style={{ width: 11, height: 11, color: C.textDim, flex: "0 0 auto" }} aria-hidden="true" />
        <input
          type="search"
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
          placeholder="Patient, ID, accession, modality"
          aria-label="Filter the study list"
          className="horos-input horos-truncate"
          style={{
            flex: "1 1 auto",
            minWidth: 0,
            height: S.controlDense,
            padding: `0 ${P.xs}px`,
            backgroundColor: C.chrome,
            color: C.text,
            border: `1px solid ${C.hairline}`,
            borderRadius: S.radius,
            fontFamily: F.sans,
            fontSize: F.micro,
            lineHeight: 1,
            outline: "none",
          }}
        />
      </div>

      {/* Column headers. The first three sort. */}
      <div
        style={{
          flex: "0 0 auto",
          display: "grid",
          gridTemplateColumns: "22px 1fr 54px 34px",
          alignItems: "center",
          height: S.controlDense,
          backgroundColor: C.panelSunken,
          borderBottom: `1px solid ${C.hairline}`,
          color: C.textDim,
          fontFamily: F.sans,
          fontSize: F.micro,
          fontWeight: F.weightBold,
          letterSpacing: F.trackWide,
          textTransform: "uppercase",
        }}
      >
        <span style={{ textAlign: "center" }}>Mod</span>
        {(["patientName", "studyDate", "seriesCount"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onSortChange(key)}
            title={`Sort by ${key === "patientName" ? "patient name" : key === "studyDate" ? "study date, newest first" : "series count"}`}
            className="horos-col"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              height: "100%",
              padding: `0 ${P.xs}px`,
              backgroundColor: "transparent",
              border: "none",
              borderRight: `1px solid ${C.hairlineDark}`,
              color: sortKey === key ? C.accent : C.textDim,
              fontFamily: F.sans,
              fontSize: F.micro,
              fontWeight: F.weightBold,
              letterSpacing: F.trackWide,
              textTransform: "uppercase",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span className="horos-truncate">
              {key === "patientName" ? "Patient" : key === "studyDate" ? "Date" : "Ser"}
            </span>
            {sortKey === key ? (
              <span style={{ fontSize: 7, lineHeight: 1 }} aria-hidden="true">
                ▼
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {/* Rows, or the honest reason there are none. */}
      <div style={scrollAreaStyle} className="horos-scroll">
        {isUnreachable ? (
          <StatePanel
            title="PACS unreachable"
            color={C.alert}
            detail={`No answer from ${text(connection.baseUrl)}: ${text(
              connection.error,
              "no response",
            )}. Start Orthanc on this workstation from tools/departmental-pacs, then query again. Last probe ${formatClockTime(
              connection.checkedAt,
            )}.`}
            action={{ label: "Query again", onClick: onRefresh }}
          />
        ) : null}

        {loading ? (
          <div
            style={{
              padding: `${P.md}px`,
              color: C.textDim,
              fontFamily: F.sans,
              fontSize: F.tiny,
              letterSpacing: F.trackWide,
              textTransform: "uppercase",
            }}
          >
            Querying PACS...
          </div>
        ) : null}

        {showQueryPrompt ? (
          <StatePanel
            title="Not queried"
            color={C.textDim}
            detail={`The viewer has not checked ${text(
              connection.baseUrl,
            )} yet, so the study list is unknown rather than empty.`}
            action={{ label: "Query PACS", onClick: onRefresh }}
          />
        ) : null}

        {showEmptyPacs ? (
          <StatePanel
            title="No studies in the PACS"
            color={C.textMuted}
            detail={`${text(connection.baseUrl)} answered and holds no studies. Send a case to the Telegram group and run the ingest; it lands in this PACS.`}
            action={{ label: "Query again", onClick: onRefresh }}
          />
        ) : null}

        {showNoFilterMatch ? (
          <div
            style={{
              padding: `${P.md}px`,
              color: C.textMuted,
              fontFamily: F.sans,
              fontSize: F.tiny,
              lineHeight: F.lineTight,
            }}
          >
            No study matches <span style={{ fontFamily: F.mono }}>{filter}</span> out of{" "}
            {countText(totalCount)} in the PACS.
          </div>
        ) : null}

        {!isUnreachable && !showQueryPrompt
          ? groups.map((group) => {
              const isOpenStudyGroup = group.key === openStudyGroup;
              const isCollapsed = collapsed.has(group.key) && !isOpenStudyGroup;
              const Disclosure = isCollapsed ? ChevronRight : ChevronDown;
              const groupSeries = group.studies.reduce((sum, s) => sum + s.seriesCount, 0);
              const groupInstances = group.studies.reduce(
                (sum, s) => sum + s.instanceCount,
                0,
              );
              return (
                <div key={group.key}>
                  {/* Patient group header. */}
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.key)}
                    aria-expanded={!isCollapsed}
                    title={`${patientNameOrMissing(group.patientName)}${
                      group.patientId ? ` (${group.patientId})` : ""
                    } - ${group.studies.length} studies`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "12px 1fr auto",
                      alignItems: "center",
                      gap: P.xxs,
                      width: "100%",
                      height: S.controlDense,
                      padding: `0 ${P.sm}px`,
                      backgroundColor: C.panelSunken,
                      border: "none",
                      borderTop: `1px solid ${C.hairlineDark}`,
                      borderBottom: `1px solid ${C.hairlineDark}`,
                      color: C.textMuted,
                      fontFamily: F.sans,
                      fontSize: F.micro,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <Disclosure
                      style={{ width: 10, height: 10, color: C.textDim, flex: "0 0 auto" }}
                      aria-hidden="true"
                    />
                    <span className="horos-truncate" style={{ color: C.text, fontWeight: F.weightBold }}>
                      {patientNameOrMissing(group.patientName)}
                    </span>
                    <span
                      className="horos-truncate"
                      style={{ fontFamily: F.mono, fontSize: F.micro, color: C.textDim }}
                    >
                      {demographics(group.patientBirthDate, group.patientSex)}
                      {group.patientId ? `  ${group.patientId}` : ""}
                      {`  ${groupSeries}s/${groupInstances}i`}
                    </span>
                  </button>

                  {isCollapsed ? null : (
                    <div>
                      {group.studies.map((study) => {
                        const selected = study.studyUid === selectedStudyUid;
                        const badge = modalityBadge(study.modalities);
                        return (
                          <button
                            key={study.studyUid}
                            type="button"
                            onClick={() => onSelectStudy(study.studyUid)}
                            aria-current={selected ? "true" : undefined}
                            title={`${patientNameOrMissing(study.patientName)}${
                              study.patientId ? ` (${study.patientId})` : ""
                            } - ${text(study.studyDescription)}${
                              study.accessionNumber ? ` - accession ${study.accessionNumber}` : ""
                            }`}
                            className={`horos-row${selected ? " horos-row--selected" : ""}`}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "22px 1fr auto",
                              alignItems: "center",
                              gap: P.xs,
                              width: "100%",
                              minHeight: S.studyRow,
                              padding: `2px ${P.sm}px`,
                              backgroundColor: selected ? C.accent : C.panel,
                              border: "none",
                              borderBottom: `1px solid ${C.hairlineDark}`,
                              color: selected ? C.accentText : C.text,
                              fontFamily: F.sans,
                              fontSize: F.small,
                              textAlign: "left",
                              cursor: "pointer",
                            }}
                          >
                            <span style={selected ? badgeSelectedStyle : badgeStyle}>
                              {badge ?? ""}
                            </span>

                            <span
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                minWidth: 0,
                              }}
                            >
                              <span
                                className="horos-truncate"
                                style={{ color: selected ? C.accentText : C.text, fontWeight: F.weightBold }}
                              >
                                {patientNameOrMissing(study.patientName)}
                              </span>
                              <span
                                className="horos-truncate"
                                style={{
                                  color: selected ? C.accentTextMuted : C.textDim,
                                  fontFamily: F.mono,
                                  fontSize: F.micro,
                                }}
                              >
                                {isAbsent(study.patientId) ? HOROS_NOT_ON_FILE : study.patientId}
                                {study.accessionNumber ? `  ${study.accessionNumber}` : ""}
                              </span>
                              <span
                                className="horos-truncate"
                                style={{
                                  color: selected ? C.accentTextMuted : C.textMuted,
                                  fontSize: F.micro,
                                }}
                              >
                                {isAbsent(study.studyDescription)
                                  ? HOROS_NOT_ON_FILE
                                  : study.studyDescription}
                              </span>
                            </span>

                            <span
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                gap: 1,
                                flex: "0 0 auto",
                                fontFamily: F.mono,
                                fontSize: F.micro,
                                color: selected ? C.accentText : C.textMuted,
                              }}
                            >
                              <span>{formatDicomDate(study.studyDate)}</span>
                              <span>{countText(study.seriesCount)}s</span>
                              <span style={{ color: selected ? C.accentTextMuted : C.textFaint }}>
                                {study.isComplete ? `${countText(study.instanceCount)}i` : `${countText(study.instanceCount)}i?`}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          : null}
      </div>

      {/* Footer: what was queried, when, and with what result. */}
      <div style={panelFooterStyle}>
        <span className="horos-truncate">
          {lastSyncedAt ? `synced ${formatClockTime(lastSyncedAt)}` : "never synced"}
        </span>
        <span className="horos-truncate">
          {connection.state === "connected"
            ? `${matchedCount}/${countText(totalCount)}`
            : HOROS_DASH}
        </span>
      </div>

      {/* The keyboard map, printed once, so the shortcuts are discoverable. */}
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: P.xs,
          height: S.controlDense,
          padding: `0 ${P.sm}px`,
          backgroundColor: C.chrome,
          borderTop: `1px solid ${C.hairlineDark}`,
          color: C.textFaint,
          fontFamily: F.mono,
          fontSize: F.micro,
        }}
      >
        <span>Enter open</span>
        <span>
          {HOROS_TOOL_SHORTCUTS.windowLevel} {HOROS_TOOL_SHORTCUTS.stackScroll}{" "}
          {HOROS_TOOL_SHORTCUTS.length}
        </span>
        <span>Up/Down stack</span>
      </div>
    </div>
  );
}

export default HorosStudyList;
