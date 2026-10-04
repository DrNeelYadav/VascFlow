/**
 * ZERO FABRICATED CLINICAL DATA — the guardrail for the HOROS imaging rebuild.
 *
 * This is the highest-value suite in the repo. Every other imaging test can be
 * satisfied by a well-built component; this one fails if a clinician is ever
 * shown a patient, an identifier or an acquisition figure that did not come out
 * of a DICOM header, the IR registry or an on-disk document.
 *
 * Two independent passes, because they catch different defects:
 *
 *   1. RENDERED pass — asserts the markup a clinician actually sees is clean.
 *   2. SOURCE pass    — reads the .ts/.tsx files as text with comments
 *                       stripped, so a fabricated value parked in a dead
 *                       branch, a constant array or an unreachable prop
 *                       default still fails. Rendered-only checks cannot see
 *                       those.
 *
 * The comment stripping matters. A doc comment explaining "the Google Drive tab
 * was removed" is documentation of a deletion, not fabricated data, and must
 * not fail this suite. A string literal in code is the opposite.
 *
 * Nothing here is weakened to accommodate the implementation. Every forbidden
 * token came from a user complaint about this codebase.
 */

import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import fs from "fs";
import path from "path";

// Resolved from this file rather than from `process.cwd()`: vitest runs with
// the cwd set to apps/web-app, so a cwd-relative path doubles up into
// apps/web-app/apps/web-app and every existence check below silently fails.
const APP_ROOT = path.resolve(__dirname, "..", "..");
const APP = path.join(APP_ROOT, "app");
const IMAGING_DIR = path.join(APP, "components/imaging");
const HOROS_DIR = path.join(IMAGING_DIR, "horos");
const IMAGING_PAGE = path.join(APP, "dashboard/imaging/page.tsx");

/**
 * The components Agents 6 and 7 own. The viewer cannot be considered rebuilt
 * until every one of them exists, so the suite names them explicitly rather
 * than globbing: a silently missing file must not read as a passing suite.
 */
const REQUIRED_HOROS_COMPONENTS = [
  "HorosAppShell.tsx",
  "HorosMenuBar.tsx",
  "HorosStudyList.tsx",
  "HorosSeriesTree.tsx",
  "HorosToolPanel.tsx",
  "HorosLayoutPicker.tsx",
  "HorosStatusBar.tsx",
  "ViewportGrid.tsx",
  "StudyViewport.tsx",
  "DicomCornerOverlay.tsx",
  "CineControls.tsx",
] as const;

const REQUIRED_HOROS_MODULES = ["horosTokens.ts", "horosTypes.ts"] as const;

/**
 * Every token the user named as fabricated or removed. Rendered pass and source
 * pass both assert against this list.
 */
const FORBIDDEN_TOKENS = [
  "ANON_",
  "ANONYMIZED",
  "GOPAL_R",
  "SHANKAR_L",
  "DISHA",
  "CIRSE",
  "Zero-Lag",
  "1024 x 1024",
  "Automated DSA",
  "100.85.12.",
  "Select Procedure",
  "Google Drive",
  "Tailscale",
  "Sample IR Cines",
] as const;

/** Loads a module, converting a missing file into an actionable test failure. */
async function loadModule<T>(specifier: string, label: string): Promise<T> {
  try {
    return (await import(/* @vite-ignore */ specifier)) as T;
  } catch (cause) {
    throw new Error(
      `${label} could not be loaded from "${specifier}".\n` +
        `  Underlying error: ${cause instanceof Error ? cause.message : String(cause)}`,
    );
  }
}

/**
 * Removes comments from TypeScript/TSX source so the source-text pass cannot
 * be tripped by prose that documents a removal.
 *
 * Quote-aware: a `//` inside a string literal (a URL, a wadouri: id) is not a
 * comment and must survive.
 */
export function stripComments(source: string): string {
  let out = "";
  let i = 0;
  // "none" | "line" | "block" | "'" | '"' | "`"
  let mode: string = "none";

  while (i < source.length) {
    const two = source.slice(i, i + 2);

    if (mode === "none") {
      if (two === "//") {
        mode = "line";
        i += 2;
        continue;
      }
      if (two === "/*") {
        mode = "block";
        i += 2;
        continue;
      }
      if (source[i] === "'" || source[i] === '"' || source[i] === "`") {
        mode = source[i];
      }
      out += source[i];
      i += 1;
      continue;
    }

    if (mode === "line") {
      if (source[i] === "\n") {
        mode = "none";
        out += "\n";
      }
      i += 1;
      continue;
    }

    if (mode === "block") {
      if (two === "*/") {
        mode = "none";
        i += 2;
        continue;
      }
      if (source[i] === "\n") out += "\n";
      i += 1;
      continue;
    }

    // Inside a string literal.
    if (source[i] === "\\") {
      out += source.slice(i, i + 2);
      i += 2;
      continue;
    }
    if (source[i] === mode) mode = "none";
    out += source[i];
    i += 1;
  }

  return out;
}

/** All .ts/.tsx files under a directory, recursively. Missing dir => []. */
function sourceFilesUnder(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) out.push(...sourceFilesUnder(full));
    else if (full.endsWith(".ts") || full.endsWith(".tsx")) out.push(full);
  }
  return out;
}

/** Files whose contents are allowed to hold authentic patient records. */
const AUTHENTIC_SOURCE_MARKERS = ["/realData/", "/masterCatalog/"] as const;

function isAuthenticSource(file: string): boolean {
  const rel = file.replace(/\\/g, "/");
  return AUTHENTIC_SOURCE_MARKERS.some((m) => rel.includes(m));
}

describe("HOROS viewer: zero fabricated clinical data", () => {
  describe("the HOROS component set exists", () => {
    it("ships every chrome and viewport component the workstation is built from", () => {
      // A glob-driven scan would quietly shrink if a component were renamed or
      // dropped. The viewer being "rebuilt as a PACS workstation" is only true
      // while this list is fully present.
      const missing = REQUIRED_HOROS_COMPONENTS.filter(
        (name) => !fs.existsSync(path.join(HOROS_DIR, name)),
      );
      expect(
        missing,
        `Missing HOROS components under ${HOROS_DIR}. ` +
          `These are owned by Agents 6/7 per tools/horos-viewer/CONTRACT.md.`,
      ).toEqual([]);
    });

    it("ships the design-token and type modules the components compile against", () => {
      const missing = REQUIRED_HOROS_MODULES.filter(
        (name) => !fs.existsSync(path.join(HOROS_DIR, name)),
      );
      expect(
        missing,
        `Missing HOROS modules under ${HOROS_DIR}. ` +
          `These are owned by Agents 6/7 per tools/horos-viewer/CONTRACT.md.`,
      ).toEqual([]);
    });
  });

  describe("rendered output carries no fabricated value", () => {
    it("renders the imaging page without a single fabricated token", async () => {
      // The page pulls in the full Cornerstone runtime, so a cold transform of
      // this graph exceeds vitest's 5s default under full-suite parallelism.
      // The assertions are unchanged; only the budget is raised.
      const mod = await loadModule<{ default: React.ComponentType }>(
        "../../app/dashboard/imaging/page",
        "The rebuilt imaging page (app/dashboard/imaging/page.tsx)",
      );
      const html = renderToStaticMarkup(React.createElement(mod.default));

      const present = FORBIDDEN_TOKENS.filter((token) => html.includes(token));
      expect(
        present,
        `Fabricated/removed tokens rendered by the imaging page: ${present.join(", ")}. ` +
          `Everything on screen must trace to a DICOM header or the IR registry.`,
      ).toEqual([]);
    }, 30_000);

    it("renders no patient row the PACS did not supply", async () => {
      // The page mounts with an empty study list and fetches asynchronously, so
      // a server-side render must show zero studies. Anything else means
      // something seeded the list.
      const mod = await loadModule<{ default: React.ComponentType }>(
        "../../app/dashboard/imaging/page",
        "The rebuilt imaging page (app/dashboard/imaging/page.tsx)",
      );
      const html = renderToStaticMarkup(React.createElement(mod.default));

      // A CR number, an MRN or a study count presented as though read off the
      // console. Digits alone are harmless (a date is digits); a clinical
      // identifier prefix is not.
      const identifierish = html.match(/\b(?:CR|MR|UH|HID|IR)[-/][A-Z0-9-]{4,}/gi) ?? [];
      expect(
        identifierish,
        `Imaging page rendered clinical identifier(s) with no PACS record behind them: ` +
          `${identifierish.join(", ")}`,
      ).toEqual([]);
    });
  });

  describe("source text carries no fabricated value", () => {
    it("keeps every fabricated token out of the imaging page source", () => {
      expect(fs.existsSync(IMAGING_PAGE)).toBe(true);
      const code = stripComments(fs.readFileSync(IMAGING_PAGE, "utf-8"));

      const present = FORBIDDEN_TOKENS.filter((token) => code.includes(token));
      expect(
        present,
        `Fabricated/removed tokens in executable source of ` +
          `app/dashboard/imaging/page.tsx: ${present.join(", ")}`,
      ).toEqual([]);
    });

    it("keeps every fabricated token out of the HOROS component source", () => {
      const files = sourceFilesUnder(HOROS_DIR);

      // Guard against a vacuous pass: scanning zero files proves nothing.
      expect(
        files.length,
        `No source files found under ${HOROS_DIR}, so this scan would pass ` +
          `vacuously. The HOROS components are not built yet.`,
      ).toBeGreaterThan(0);

      const offenders: string[] = [];
      for (const file of files) {
        const code = stripComments(fs.readFileSync(file, "utf-8"));
        for (const token of FORBIDDEN_TOKENS) {
          if (code.includes(token)) {
            offenders.push(`${path.relative(process.cwd(), file)}: ${token}`);
          }
        }
      }

      expect(
        offenders,
        `Fabricated/removed tokens in HOROS component source:\n  ${offenders.join("\n  ")}`,
      ).toEqual([]);
    });

    it("keeps every fabricated token out of the DICOM client and viewport source", () => {
      // The PACS client maps DICOM tags to display values, so it is the most
      // likely place for an invented default to hide.
      const files = [
        path.join(APP, "lib/imaging/pacsClient.ts"),
        path.join(IMAGING_DIR, "cornerstoneRuntime.ts"),
        ...sourceFilesUnder(path.join(IMAGING_DIR, "cornerstone")),
      ].filter((f) => fs.existsSync(f));

      expect(files.length, "No DICOM client source found to scan.").toBeGreaterThan(0);

      const offenders: string[] = [];
      for (const file of files) {
        const code = stripComments(fs.readFileSync(file, "utf-8"));
        for (const token of FORBIDDEN_TOKENS) {
          if (code.includes(token)) {
            offenders.push(`${path.relative(process.cwd(), file)}: ${token}`);
          }
        }
      }

      expect(
        offenders,
        `Fabricated/removed tokens in DICOM client source:\n  ${offenders.join("\n  ")}`,
      ).toEqual([]);
    });

    it("hardcodes no patient name anywhere in the HOROS components", () => {
      const files = sourceFilesUnder(HOROS_DIR);
      expect(files.length, "No HOROS source found to scan.").toBeGreaterThan(0);

      // A name-shaped literal assigned to a patient-ish field. The viewer must
      // read PatientName off the instance, never carry one of its own.
      const namedField =
        /(?:patientName|patient_name|ptName|patientFullName|patientId|patient_id|crNo|crNumber|mrn)\s*[:=]\s*["'`]([^"'`]{2,48})["'`]/g;

      // Values that are legitimately not a patient.
      const NOT_A_NAME =
        /^(?:not on file|unknown|patient name|patient id|no case|—|-|n\/?a|)$/i;

      const offenders: string[] = [];
      for (const file of files) {
        if (isAuthenticSource(file)) continue;
        const code = stripComments(fs.readFileSync(file, "utf-8"));
        for (const m of Array.from(code.matchAll(namedField))) {
          const value = m[1].trim();
          if (NOT_A_NAME.test(value)) continue;
          // A value with no letters is an id-shaped sentinel, not a name.
          if (!/[A-Za-z]{2}/.test(value)) continue;
          offenders.push(`${path.relative(process.cwd(), file)}: ${JSON.stringify(value)}`);
        }
      }

      expect(
        offenders,
        `Hardcoded patient-identifying values in HOROS components:\n  ${offenders.join("\n  ")}`,
      ).toEqual([]);
    });

    it("fabricates no study, series or instance seed arrays", () => {
      const files = sourceFilesUnder(IMAGING_DIR);
      expect(files.length, "No imaging source found to scan.").toBeGreaterThan(0);

      const offenders: string[] = [];
      for (const file of files) {
        if (isAuthenticSource(file)) continue;
        const code = stripComments(fs.readFileSync(file, "utf-8"));
        // A non-empty literal array assigned to a seed/sample/mock-looking name
        // is a bundled case library. The library must start empty.
        const seedArray =
          /\b(?:SAMPLE|SAMPLE_CASES|SEED|SEED_CASES|MOCK_STUDIES|DEMO_STUDIES|DUMMY|FIXTURE)\w*\s*(?::[^=]+)?=\s*(\[[^\]]*\])/g;
        for (const m of Array.from(code.matchAll(seedArray))) {
          const literal = m[1];
          // `= []` and a cast-only empty array are the correct shape.
          if (/\[\s*\]/.test(literal)) continue;
          offenders.push(
            `${path.relative(process.cwd(), file)}: ${m[0].slice(0, 80)}`,
          );
        }
      }

      expect(
        offenders,
        `Non-empty seed/sample arrays shipped in the imaging tree:\n  ${offenders.join("\n  ")}`,
      ).toEqual([]);
    });
  });
});