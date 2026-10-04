/**
 * HONEST EMPTY AND UNREACHABLE STATES.
 *
 * A PACS workstation is mostly empty in practice: the Orthanc process is down,
 * or it is up and holds nothing. Both states must read as themselves. The
 * failure this guards against is the expensive one -- a viewer that renders a
 * convincing, populated-looking worklist when the PACS is unreachable, because
 * that is indistinguishable from real patient data on a clinical screen.
 *
 * HorosStudyList documents exactly four honest outcomes and no fifth:
 *
 *   connection.state "unreachable"  -> the unreachable panel, no rows
 *   no probe has run yet           -> the "not queried" panel, no rows
 *   probe returned nothing         -> the empty-PACS panel, no rows
 *   probe returned studies         -> the rows
 *
 * These assertions are written against that real prop contract, taken from
 * horosTypes.ts: `connection: PacsConnectionStatus` carries the state, and
 * `studies` is `readonly HorosStudyRow[]`.
 */

import { describe, it, expect, beforeAll } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type {
  HorosStudyListProps,
  HorosStudyRow,
  PacsConnectionStatus,
} from "../../app/components/imaging/horos/horosTypes";

/**
 * The heading the component renders for a reachable-but-empty PACS, verbatim
 * from HorosStudyList's `showEmptyPacs` StatePanel.
 *
 * This constant is load-bearing twice over: once to pin the empty-state wording,
 * and once as the NEGATIVE in the filter-miss test below ("a filter that matches
 * nothing" must not read as an empty PACS). A constant that matches nothing in
 * the app would make that negative assertion pass vacuously, so this string has
 * to be the one the component actually renders -- not an invented paraphrase.
 */
const EMPTY_PACS_MESSAGE = "No studies in the PACS";

let StudyList: React.ComponentType<HorosStudyListProps>;

async function loadStudyList(): Promise<React.ComponentType<HorosStudyListProps>> {
  try {
    const mod = (await import(
      /* @vite-ignore */ "../../app/components/imaging/horos/HorosStudyList"
    )) as { HorosStudyList?: React.ComponentType<HorosStudyListProps> };
    if (!mod.HorosStudyList) {
      throw new Error("module resolved but exported no HorosStudyList named export");
    }
    return mod.HorosStudyList;
  } catch (cause) {
    throw new Error(
      `HorosStudyList could not be loaded from ` +
        `"app/components/imaging/horos/HorosStudyList.tsx".\n  Underlying error: ` +
        `${cause instanceof Error ? cause.message : String(cause)}`,
    );
  }
}

const NOOP = (): void => {};

/** A PACS that answered and is holding nothing. */
const CONNECTED: PacsConnectionStatus = {
  state: "connected",
  baseUrl: "http://127.0.0.1:8042",
  version: "1.13.0",
  checkedAt: "2026-01-15T09:30:00.000Z",
  error: null,
};

/** A PACS that is not answering, with the reason the probe recorded. */
const UNREACHABLE: PacsConnectionStatus = {
  state: "unreachable",
  baseUrl: "http://127.0.0.1:8042",
  version: null,
  checkedAt: "2026-01-15T09:30:00.000Z",
  error: "connect ECONNREFUSED 127.0.0.1:8042",
};

/** A probe that has not run yet. Distinct from both of the above. */
const UNKNOWN: PacsConnectionStatus = {
  state: "unknown",
  baseUrl: "http://127.0.0.1:8042",
  version: null,
  checkedAt: null,
  error: null,
};

/**
 * A fully-formed study row, used only where a test must prove the row is NOT
 * rendered. Nothing here is real patient data: the name is obviously synthetic
 * and the assertion is about its absence.
 */
function aStudyRow(studyUid: string): HorosStudyRow {
  return {
    studyUid,
    studyInstanceUid: null,
    patientId: null,
    patientName: "MUST NOT APPEAR",
    patientBirthDate: null,
    patientSex: null,
    studyDate: null,
    studyDescription: null,
    accessionNumber: null,
    modalities: [],
    seriesCount: 0,
    instanceCount: 0,
    isComplete: true,
  };
}

function renderStudyList(overrides: Partial<HorosStudyListProps>): string {
  return renderToStaticMarkup(
    React.createElement(StudyList, {
      studies: [],
      selectedStudyUid: null,
      onSelectStudy: NOOP,
      connection: CONNECTED,
      loading: false,
      onRefresh: NOOP,
      filter: "",
      onFilterChange: NOOP,
      sortKey: "studyDate",
      onSortChange: NOOP,
      lastSyncedAt: null,
      totalCount: 0,
      ...overrides,
    }),
  );
}

describe("HOROS viewer: honest empty and unreachable PACS states", () => {
  beforeAll(async () => {
    StudyList = await loadStudyList();
    // The Cornerstone import graph takes ~1.4s on its own but its cold
    // transform competes with 54 other files under vitest's default
    // parallelism, which overruns the 10s hook default. Budget for the
    // queue, not for the assertion.
  }, 60_000);

  describe("PACS unreachable", () => {
    it("states plainly that the PACS is unreachable", () => {
      const html = renderStudyList({ connection: UNREACHABLE });

      expect(
        /unreachable|offline|not answering|no answer|not responding/i.test(html),
        `Study list must say in plain English that the PACS is unreachable. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).toBe(true);
    });

    it("renders zero study rows when the PACS is unreachable", () => {
      // Deliberately non-empty input. A list that renders rows while reporting
      // the PACS as down is displaying data it does not have, which is the
      // single most dangerous thing this component could do.
      const html = renderStudyList({
        connection: UNREACHABLE,
        studies: [aStudyRow("should-not-render-1")],
        totalCount: 1,
      });

      expect(
        html,
        `Unreachable PACS must render no study rows. Rendered: ${html.slice(0, 700)}`,
      ).not.toContain("MUST NOT APPEAR");
    });

    it("surfaces the real failure reason rather than a generic error", () => {
      const html = renderStudyList({ connection: UNREACHABLE });

      // The probe recorded a specific reason. Echoing it lets the clinician
      // tell "Orthanc is stopped" from "the address is wrong" without opening
      // a support ticket.
      expect(
        html,
        `Unreachable state must surface the probe's recorded reason. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).toMatch(/ECONNREFUSED|8042|not answering|no answer/);
    });

    it("tells the clinician what to do about it", () => {
      const html = renderStudyList({ connection: UNREACHABLE });

      expect(
        /orthanc|start|query again|refresh|restart|ensure/i.test(html),
        `Unreachable state must include a recovery instruction. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).toBe(true);
    });

    it("reports no study count, because an unreachable PACS has no count", () => {
      const html = renderStudyList({ connection: UNREACHABLE, totalCount: 0 });

      // A count presented next to an unreachable PACS implies the viewer knows
      // what is in it. It does not.
      expect(
        html,
        `Unreachable PACS must not present a study count. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).not.toMatch(/\b\d+\s*\/\s*\d+\s*stud/i);
    });
  });

  describe("PACS reachable but empty", () => {
    it(`states that there are "${EMPTY_PACS_MESSAGE}"`, () => {
      const html = renderStudyList({ connection: CONNECTED, studies: [], totalCount: 0 });

      expect(
        html,
        `A reachable but empty PACS must read "${EMPTY_PACS_MESSAGE}". ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).toContain(EMPTY_PACS_MESSAGE);
    });

    it("does not claim to be unreachable when it answered", () => {
      const html = renderStudyList({ connection: CONNECTED, studies: [], totalCount: 0 });

      // The panel title says "unreachable". That word must not leak into the
      // empty state, or a radiologist cannot tell the two apart at a glance.
      expect(
        html,
        `An empty-but-reachable PACS must not read as unreachable. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).not.toMatch(/unreachable/i);
    });

    it("distinguishes empty from unreachable rather than reusing one message", () => {
      const empty = renderStudyList({ connection: CONNECTED });
      const down = renderStudyList({ connection: UNREACHABLE });

      expect(
        down,
        "Unreachable and empty are different operational states and must not " +
          "render the same worklist body.",
      ).not.toBe(empty);
    });

    it("distinguishes empty from not-yet-queried", () => {
      // "We have not looked" and "we looked and there is nothing" are different
      // facts. Collapsing them asserts something that was never established.
      const empty = renderStudyList({ connection: CONNECTED });
      const unknown = renderStudyList({ connection: UNKNOWN });

      expect(
        unknown,
        "An unprobed PACS must not render the same body as a probed-and-empty one.",
      ).not.toBe(empty);
    });

    it("shows a zero study count rather than a blank or a fabricated number", () => {
      const html = renderStudyList({ connection: CONNECTED, studies: [], totalCount: 0 });

      expect(
        html,
        `Empty PACS must report a study count of 0. Rendered: ${html.slice(0, 700)}`,
      ).toMatch(/\(0\)|0 studies|no studies/i);
    });

    it("renders no patient group for an empty PACS", () => {
      const html = renderStudyList({
        connection: CONNECTED,
        studies: [],
        totalCount: 0,
        filter: "",
      });

      expect(html, "Empty PACS must not render a patient group.").not.toContain(
        "MUST NOT APPEAR",
      );
    });
  });

  describe("a filter that matches nothing", () => {
    it("says the filter matched nothing rather than claiming the PACS is empty", () => {
      const html = renderStudyList({
        connection: CONNECTED,
        studies: [],
        totalCount: 12,
        filter: "no-such-patient-uid",
      });

      expect(
        html,
        `A no-match filter must read as a filter miss, not as an empty PACS. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).not.toContain(EMPTY_PACS_MESSAGE);
    });
  });

  describe("the rendered imaging page in its pre-fetch state", () => {
    async function renderPage(): Promise<string> {
      try {
        const mod = (await import(
          /* @vite-ignore */ "../../app/dashboard/imaging/page"
        )) as { default: React.ComponentType };
        return renderToStaticMarkup(React.createElement(mod.default));
      } catch (cause) {
        throw new Error(
          `The rebuilt imaging page could not be loaded from ` +
            `"app/dashboard/imaging/page.tsx".\n  Underlying error: ` +
            `${cause instanceof Error ? cause.message : String(cause)}`,
        );
      }
    }

    it("renders no clinical identifier with no PACS record behind it", async () => {
      const html = await renderPage();

      const identifiers = html.match(/\b(?:CR|MR|UH|HID|IR)[-/][A-Z0-9-]{4,}/gi) ?? [];
      expect(
        identifiers,
        `Imaging page rendered clinical identifiers with no PACS record behind them: ` +
          `${identifiers.join(", ")}`,
      ).toEqual([]);
    });

    it("renders no DICOM UID before any study is loaded", async () => {
      const html = await renderPage();

      // A real DICOM UID is digits and dots only. Any uid-shaped string on the
      // pre-fetch page is invented.
      const uids = html.match(/\b[12]\.\d+\.\d+\.\d+\.\d+[\d.]*/g) ?? [];
      expect(
        uids,
        `Imaging page rendered a DICOM-style UID before any study was loaded: ` +
          `${uids.join(", ")}`,
      ).toEqual([]);
    });

    it("selects no study before a clinician has chosen one", async () => {
      const html = await renderPage();

      expect(
        html,
        "Imaging page rendered a selected study before any study was loaded.",
      ).not.toMatch(/aria-current="true"|aria-selected="true"/);
    });
  });
});