/**
 * LAYOUT MODES.
 *
 * A PACS workstation's layout is the radiologist's control surface for how many
 * images are compared at once. horosTokens.ts fixes the geometry:
 *
 *   HOROS_LAYOUTS     a record of all five modes, each with columns/rows/slots
 *   HOROS_LAYOUT_ORDER the order the menu bar shows them in
 *
 * and horosTokens.defaultLayoutForModality fixes the default:
 *
 *   projectional fluoro (CR DX XA RF MG NM PT) -> 1x1, one large viewport
 *   everything else (CT MR ...)                 -> 2x2, the comparison quad
 *
 * The default matters clinically. A single large fluoroscopic frame is what a
 * cath lab needs; four small quadrants of a DSA run is unreadable. A CT stack
 * defaults to 2x2 because that is the comparison layout. Getting this backwards
 * is not a cosmetic bug.
 *
 * These assertions are written against the real exported API rather than
 * against rendered glyphs, because the glyph is a drawing and the mode is the
 * contract.
 */

import { describe, it, expect, beforeAll } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { HorosLayoutMode } from "../../app/components/imaging/horos/horosTypes";

/** The five layouts the contract requires the picker to offer. */
const REQUIRED_LAYOUTS = ["1x1", "2x2", "3x3", "1x2", "2x1"] as const;

/** Projectional modalities, which read best in one large viewport. */
const PROJECTIONAL = ["XA", "CR", "DX", "RF"] as const;

/** Cross-sectional modalities, which read best in the 2x2 comparison quad. */
const CROSS_SECTIONAL = ["CT", "MR"] as const;

type TokensModule = {
  HOROS_LAYOUTS?: Record<string, { columns: number; rows: number; slots: number }>;
  HOROS_LAYOUT_ORDER?: readonly string[];
  defaultLayoutForModality?: (modalities: readonly string[]) => HorosLayoutMode;
};

async function loadTokens(): Promise<TokensModule> {
  try {
    return (await import(
      /* @vite-ignore */ "../../app/components/imaging/horos/horosTokens"
    )) as TokensModule;
  } catch (cause) {
    throw new Error(
      `horosTokens could not be loaded from ` +
        `"app/components/imaging/horos/horosTokens.ts".\n  Underlying error: ` +
        `${cause instanceof Error ? cause.message : String(cause)}`,
    );
  }
}

let tokens: TokensModule;

describe("HOROS viewer: viewport layout modes", () => {
  beforeAll(async () => {
    tokens = await loadTokens();
  });

  describe("the layout table", () => {
    it("exports HOROS_LAYOUTS covering all five required modes", () => {
      expect(
        tokens.HOROS_LAYOUTS,
        "horosTokens must export HOROS_LAYOUTS describing every layout mode.",
      ).toBeDefined();

      const table = tokens.HOROS_LAYOUTS as Record<string, unknown>;
      const missing = REQUIRED_LAYOUTS.filter((mode) => !(mode in table));
      expect(
        missing,
        `HOROS_LAYOUTS is missing: ${missing.join(", ")}. ` +
          `Present: ${Object.keys(table).join(", ")}`,
      ).toEqual([]);
    });

    it("declares no layout beyond the five agreed ones", () => {
      const table = tokens.HOROS_LAYOUTS as Record<string, unknown>;
      const extra = Object.keys(table).filter(
        (mode) => !REQUIRED_LAYOUTS.includes(mode as (typeof REQUIRED_LAYOUTS)[number]),
      );
      expect(
        extra,
        `HOROS_LAYOUTS declares unagreed layouts: ${extra.join(", ")}. ` +
          `An unagreed layout is an unverified layout.`,
      ).toEqual([]);
    });

    it("gives each layout a slot count equal to its grid area", () => {
      const table = tokens.HOROS_LAYOUTS as Record<
        string,
        { columns: number; rows: number; slots: number }
      >;

      const wrong: string[] = [];
      for (const mode of REQUIRED_LAYOUTS) {
        const spec = table[mode];
        if (!spec) continue;
        if (spec.slots !== spec.columns * spec.rows) {
          wrong.push(`${mode}: ${spec.columns}x${spec.rows} declares ${spec.slots} slots`);
        }
      }

      expect(
        wrong,
        `Slot counts must equal columns x rows:\n  ${wrong.join("\n  ")}`,
      ).toEqual([]);
    });

    it("orders the layouts for the menu bar without dropping any", () => {
      expect(
        tokens.HOROS_LAYOUT_ORDER,
        "horosTokens must export HOROS_LAYOUT_ORDER for the menu bar.",
      ).toBeDefined();

      const order = tokens.HOROS_LAYOUT_ORDER as readonly string[];
      const missing = REQUIRED_LAYOUTS.filter((mode) => !order.includes(mode));
      const extra = order.filter(
        (mode) => !REQUIRED_LAYOUTS.includes(mode as (typeof REQUIRED_LAYOUTS)[number]),
      );

      expect(missing, `HOROS_LAYOUT_ORDER omits: ${missing.join(", ")}`).toEqual([]);
      expect(extra, `HOROS_LAYOUT_ORDER includes unagreed layouts: ${extra.join(", ")}`).toEqual(
        [],
      );
    });
  });

  describe("the rendered picker", () => {
    async function renderPicker(layoutMode: HorosLayoutMode): Promise<string> {
      let Picker: React.ComponentType<Record<string, unknown>>;
      try {
        const mod = (await import(
          /* @vite-ignore */ "../../app/components/imaging/horos/HorosLayoutPicker"
        )) as unknown as {
          HorosLayoutPicker?: React.ComponentType<Record<string, unknown>>;
        };
        if (!mod.HorosLayoutPicker) {
          throw new Error("module resolved but exported no HorosLayoutPicker");
        }
        Picker = mod.HorosLayoutPicker;
      } catch (cause) {
        throw new Error(
          `HorosLayoutPicker could not be loaded from ` +
            `"app/components/imaging/horos/HorosLayoutPicker.tsx".\n  ` +
            `Underlying error: ${cause instanceof Error ? cause.message : String(cause)}`,
        );
      }

      return renderToStaticMarkup(
        React.createElement(Picker, {
          layoutMode,
          onLayoutChange: () => {},
          enabled: true,
        }),
      );
    }

    it("renders one radio control per layout mode", async () => {
      const html = await renderPicker("2x2");

      const radios = html.match(/role="radio"/g) ?? [];
      expect(
        radios.length,
        `Picker must render ${REQUIRED_LAYOUTS.length} layout radios, found ${radios.length}. ` +
          `Rendered: ${html.slice(0, 700)}`,
      ).toBe(REQUIRED_LAYOUTS.length);
    });

    it("marks the active layout as checked", async () => {
      const html = await renderPicker("2x2");

      // A radiologist must see which layout is active without clicking.
      expect(
        html,
        `Active layout must be marked checked. Rendered: ${html.slice(0, 700)}`,
      ).toMatch(/aria-checked="true"/);
    });

    it("names every layout for assistive technology and tooltip", async () => {
      const html = await renderPicker("1x1");

      // The glyph is a drawing; the label is what names it.
      const missing = REQUIRED_LAYOUTS.filter((mode) => !html.includes(mode));
      expect(
        missing,
        `Picker must label every layout mode; missing from rendered output: ` +
          `${missing.join(", ")}. Rendered: ${html.slice(0, 700)}`,
      ).toEqual([]);
    });

    it("disables every preset when the picker is disabled", async () => {
      let Picker: React.ComponentType<Record<string, unknown>>;
      try {
        const mod = (await import(
          /* @vite-ignore */ "../../app/components/imaging/horos/HorosLayoutPicker"
        )) as unknown as {
          HorosLayoutPicker?: React.ComponentType<Record<string, unknown>>;
        };
        if (!mod.HorosLayoutPicker) throw new Error("no named export");
        Picker = mod.HorosLayoutPicker;
      } catch (cause) {
        throw new Error(
          `HorosLayoutPicker could not be loaded. ${cause instanceof Error ? cause.message : String(cause)}`,
        );
      }

      const html = renderToStaticMarkup(
        React.createElement(Picker, {
          layoutMode: "1x1",
          onLayoutChange: () => {},
          enabled: false,
        }),
      );

      // A layout change mid-load would point the viewport at a series that is
      // not there, so the picker is gated while loading.
      expect(
        html,
        `A disabled picker must mark its controls disabled. Rendered: ${html.slice(0, 700)}`,
      ).toMatch(/disabled/);
    });
  });

  describe("modality-driven default layout", () => {
    it("exports a default-layout resolver", () => {
      expect(
        typeof tokens.defaultLayoutForModality,
        "horosTokens must export defaultLayoutForModality(modalities) so the " +
          "contract's projectional-fluoro rule is expressible and testable.",
      ).toBe("function");
    });

    it.each(PROJECTIONAL)("defaults projectional fluoro %s to 1x1", (modality) => {
      const layout = tokens.defaultLayoutForModality!([modality]);
      expect(
        layout,
        `Projectional fluoro (${modality}) must default to a single large ` +
          `viewport (1x1), not ${layout}.`,
      ).toBe("1x1");
    });

    it.each(CROSS_SECTIONAL)("defaults cross-sectional %s to 2x2", (modality) => {
      const layout = tokens.defaultLayoutForModality!([modality]);
      expect(
        layout,
        `Cross-sectional (${modality}) must default to the 2x2 comparison ` +
          `layout, not ${layout}.`,
      ).toBe("2x2");
    });

    it("is case-insensitive about modality, because DICOM uppercases it but a source may not", () => {
      const lower = tokens.defaultLayoutForModality!(["xa"]);
      const upper = tokens.defaultLayoutForModality!(["XA"]);

      expect(
        lower,
        `A lowercase modality must resolve the same as its uppercase form: ` +
          `"xa" gave ${lower}, "XA" gave ${upper}.`,
      ).toBe(upper);
      expect(lower).toBe("1x1");
    });

    it("does not default an unrecognised modality to a projectional layout", () => {
      const layout = tokens.defaultLayoutForModality!(["OT"]);

      // OT exists in this department's real data. An unrecognised modality must
      // fall back to the general comparison layout, never silently to fluoro 1x1.
      expect(
        layout,
        `An unrecognised modality resolved to ${layout}. It must fall back to ` +
          `the general layout, not to a projectional-fluoro one.`,
      ).not.toBe("1x1");
    });

    it("falls back to a general layout when no modality was reported", () => {
      // NumberOfStudyRelatedModalities is not reliably populated, so an empty
      // list is a real input, not a synthetic one.
      const layout = tokens.defaultLayoutForModality!([]);
      expect(
        layout,
        `No modality must resolve to a general layout, not to ${layout}.`,
      ).not.toBe("1x1");
    });

    it("resolves to 1x1 when any modality in a mixed study is projectional", () => {
      // A study can carry a localiser (CR) plus the run (XA). The projectional
      // frame is the one that needs the full viewport.
      const layout = tokens.defaultLayoutForModality!(["CR", "XA"]);
      expect(
        layout,
        `A study containing a projectional series must open at 1x1, not ${layout}.`,
      ).toBe("1x1");
    });
  });
});