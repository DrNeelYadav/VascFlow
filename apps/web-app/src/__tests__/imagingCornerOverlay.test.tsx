/**
 * THE FOUR-CORNER DICOM OVERLAY.
 *
 * This is the single most recognisable thing about a PACS viewport and it is
 * where fabricated clinical data would do the most damage: the overlay sits on
 * top of the pixels, is read at a glance, and every field in it is read off a
 * DICOM tag. The contract fixes the corners as:
 *
 *   top-left     patient name, ID, sex/age, study date
 *   top-right    modality + series description, frame/slice index of total
 *   bottom-left  institution / manufacturer
 *   bottom-right zoom %, WW/WL, rendering preset name
 *
 * DicomCornerOverlay is pure presentational, so renderToStaticMarkup is a real
 * test of it rather than an approximation.
 *
 * The null case is the important one. A PACS holding instances ingested after
 * the Orthanc 1.12.9 -> 1.13.0 upgrade returns null for the simplified DB tag
 * index even though the file on disk is intact (see CONTRACT.md section 2).
 * Every field can therefore arrive as null, and the overlay must degrade to an
 * explicit placeholder. Inventing a plausible patient name or a 1024x1024
 * geometry to fill a gap is the single worst defect this component could have,
 * so it is asserted directly.
 */

import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

async function loadOverlay(): Promise<React.ComponentType<never>> {
  try {
    const mod = (await import(
      /* @vite-ignore */ "../../app/components/imaging/horos/DicomCornerOverlay"
    )) as { DicomCornerOverlay?: React.ComponentType<never> };
    const component = mod.DicomCornerOverlay;
    if (!component) {
      throw new Error(
        "module resolved but exported no DicomCornerOverlay (named export required)",
      );
    }
    return component;
  } catch (cause) {
    throw new Error(
      `DicomCornerOverlay could not be loaded from ` +
        `"app/components/imaging/horos/DicomCornerOverlay.tsx".\n` +
        `  Underlying error: ${cause instanceof Error ? cause.message : String(cause)}`,
    );
  }
}

function render(overlay: React.ComponentType<never>, props: Record<string, unknown>): string {
  return renderToStaticMarkup(React.createElement(overlay, props as never));
}

/** Every field populated, as a fully-populated study would supply it. */
const FULL_PROPS = {
  patientName: "KASHISH^RD",
  patientId: "SMS-IR-2026-4417",
  patientSex: "F",
  patientAge: "19",
  studyDate: "20230809",
  modality: "XA",
  seriesDescription: "Selective Splenic Artery DSA",
  frameIndex: 42,
  frameCount: 120,
  institution: "AIIMS New Delhi",
  manufacturer: "Philips Medical Systems",
  zoom: 1.25,
  windowWidth: 2048,
  windowLevel: 1024,
  preset: "Soft Tissue",
  slicePosition: null,
  stackCount: null,
};

/** Every DICOM attribute absent, as the post-upgrade null tag index returns. */
const ALL_NULL_PROPS = {
  patientName: null,
  patientId: null,
  patientSex: null,
  patientAge: null,
  studyDate: null,
  modality: null,
  seriesDescription: null,
  frameIndex: null,
  frameCount: null,
  institution: null,
  manufacturer: null,
  zoom: null,
  windowWidth: null,
  windowLevel: null,
  preset: null,
  slicePosition: null,
  stackCount: null,
};

/** Placeholders the contract permits for an absent attribute. */
const PLACEHOLDERS = ["\u2014", "Not on file"];

function hasPlaceholder(html: string): boolean {
  return PLACEHOLDERS.some((p) => html.includes(p));
}

describe("DicomCornerOverlay: four-corner DICOM overlay", () => {
  describe("with every attribute present", () => {
    it("renders patient identity in the top-left corner", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, FULL_PROPS);

      expect(html, "Patient name must be shown.").toContain("KASHISH^RD");
      expect(html, "Patient ID must be shown.").toContain("SMS-IR-2026-4417");
      expect(html, "Patient sex must be shown.").toContain("F");
      expect(html, "Patient age must be shown.").toContain("19");
    });

    it("renders the study date", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, FULL_PROPS);

      // Accept either a raw DICOM DA or the conventional YYYY-MM-DD rendering.
      expect(
        html,
        `Study date must be shown. Rendered: ${html.slice(0, 800)}`,
      ).toMatch(/20230809|2023-08-09/);
    });

    it("renders modality and series description in the top-right corner", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, FULL_PROPS);

      expect(html, "Modality must be shown.").toContain("XA");
      expect(html, "Series description must be shown.").toContain(
        "Selective Splenic Artery DSA",
      );
    });

    it("renders the frame position as an index of total", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, FULL_PROPS);

      // 42 of 120. Both numbers, in one readable position, not just the total.
      expect(html, "Frame position must show the current frame.").toMatch(/42/);
      expect(html, "Frame position must show the total frame count.").toMatch(/120/);
    });

    it("renders institution or manufacturer in the bottom-left corner", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, FULL_PROPS);

      expect(
        html,
        "Institution/manufacturer must be shown. Rendered: " + html.slice(0, 800),
      ).toMatch(/AIIMS New Delhi|Philips Medical Systems/);
    });

    it("renders zoom, window width/level and preset in the bottom-right corner", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, FULL_PROPS);

      expect(html, "Zoom must be shown.").toMatch(/1\.25/);
      expect(html, "Window width must be shown.").toMatch(/2048/);
      expect(html, "Window level must be shown.").toMatch(/1024/);
      expect(html, "Rendering preset name must be shown.").toContain("Soft Tissue");
    });
  });

  describe("with every DICOM attribute null", () => {
    it("renders placeholders instead of crashing", async () => {
      const overlay = await loadOverlay();

      // The post-upgrade Orthanc null tag index makes this the common case,
      // not an edge case. A throw here blanks the viewport entirely.
      let html: string;
      try {
        html = render(overlay, ALL_NULL_PROPS);
      } catch (cause) {
        throw new Error(
          `DicomCornerOverlay threw on all-null DICOM attributes. It must ` +
            `degrade to placeholders.\n  ${cause instanceof Error ? cause.stack : String(cause)}`,
        );
      }

      expect(
        hasPlaceholder(html),
        `All-null attributes must render "—" or "Not on file". ` +
          `Rendered: ${html.slice(0, 800)}`,
      ).toBe(true);
    });

    it("invents no patient name", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      expect(html, "An absent patient name must not be invented.").not.toMatch(
        /\b(?:ANON|DEMO|TEST|SAMPLE|UNKNOWN|JOHN|JANE|DOE)[A-Z_0-9^]*/,
      );
    });

    it("invents no patient identifier or CR number", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      expect(
        html,
        "An absent patient ID must not be invented: " + html.slice(0, 800),
      ).not.toMatch(/\b(?:CR|MR|UH|HID|IR)[-/][A-Z0-9-]{4,}/i);
    });

    it("invents no acquisition geometry", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      // 1024x1024 was an invented acquisition default in the previous viewer.
      expect(
        html,
        "An absent image geometry must not be invented: " + html.slice(0, 800),
      ).not.toMatch(/1024\s*x\s*1024/);
    });

    it("invents no window width, window level or zoom value", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      // A plausible-looking 2048/1024 pair reads as read off the console.
      // Neither may appear when the scanner reported nothing.
      expect(
        html,
        "Window width/level must not be invented when absent: " + html.slice(0, 800),
      ).not.toMatch(/\b2048\b/);
      expect(html, "Window level must not be invented when absent.").not.toMatch(
        /\b1024\b/,
      );
      expect(html, "Zoom must not be invented when absent.").not.toMatch(/1\.25/);
    });

    it("invents no frame count", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      expect(
        html,
        "An absent frame count must not be invented: " + html.slice(0, 800),
      ).not.toMatch(/\b120\b/);
    });

    it("invents no institution", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      expect(
        html,
        "An absent institution must not be invented: " + html.slice(0, 800),
      ).not.toMatch(/AIIMS|Philips|Siemens|GE Medical|Canon/);
    });

    it("never renders a literal null, undefined or NaN to the clinician", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, ALL_NULL_PROPS);

      // The classic null-safety defect in an overlay is `String(null)`.
      expect(html, "Literal 'null' leaked into the overlay.").not.toMatch(/\bnull\b/i);
      expect(
        html,
        "Literal 'undefined' leaked into the overlay.",
      ).not.toMatch(/\bundefined\b/i);
      expect(html, "Literal 'NaN' leaked into the overlay.").not.toMatch(/\bNaN\b/);
    });
  });

  describe("partial attribute availability", () => {
    it("renders each real value and placeholders only for the absent ones", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, {
        ...ALL_NULL_PROPS,
        patientName: "AJAY KUMAR",
        modality: "MR",
      });

      // The two present attributes survive...
      expect(html, "A present patient name must render.").toContain("AJAY KUMAR");
      expect(html, "A present modality must render.").toContain("MR");
      // ...and the absent ones did not leak an invented value.
      expect(html, "An absent institution must not be invented.").not.toMatch(/AIIMS/);
      expect(html, "An absent preset must not be invented.").not.toMatch(
        /Soft Tissue/,
      );
      expect(hasPlaceholder(html), "Absent fields must still show a placeholder.").toBe(
        true,
      );
    });

    it("renders a zero frame count as a real zero rather than as absent", async () => {
      const overlay = await loadOverlay();
      const html = render(overlay, { ...FULL_PROPS, frameIndex: 0, frameCount: 0 });

      // 0 is a legitimate count, not a missing value. Conflating the two makes
      // a single-frame study look broken.
      expect(
        html,
        `A zero frame count must render as 0. Rendered: ${html.slice(0, 800)}`,
      ).toMatch(/0/);
    });
  });
});