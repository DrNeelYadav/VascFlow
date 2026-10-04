import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const APP = path.resolve(process.cwd(), "apps/web-app/app");
const UI_KIT = path.resolve(process.cwd(), "packages/ui-kit/src");

/** Every .tsx under the app directory. */
function appTsxFiles(dir: string = APP): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) return appTsxFiles(full);
    return entry.endsWith(".tsx") ? [full] : [];
  });
}

describe("design system adoption", () => {
  it("exports every primitive from the ui-kit barrel", () => {
    const index = readFileSync(path.join(UI_KIT, "index.ts"), "utf-8");
    for (const primitive of [
      "./button",
      "./card",
      "./badge",
      "./data-table",
      "./field",
      "./page-header",
    ]) {
      expect(index).toContain(`export * from "${primitive}"`);
    }
  });

  it("declares each primitive as a package export", () => {
    const pkg = JSON.parse(
      readFileSync(path.resolve(process.cwd(), "packages/ui-kit/package.json"), "utf-8")
    );
    for (const subpath of ["./badge", "./data-table", "./field", "./page-header"]) {
      expect(pkg.exports[subpath]).toBeDefined();
    }
  });

  it("keeps the colour contract free of hardcoded hex utilities", () => {
    const contract = readFileSync(
      path.resolve(process.cwd(), "apps/web-app/app/lib/colorTokens.ts"),
      "utf-8"
    );
    // The contract maps hexes to tokens; it must not itself introduce new
    // arbitrary-value utilities, or the two layers would drift.
    expect(contract).not.toMatch(/(bg|text|border|ring)-\[#/);
  });

  it("keeps the codemod and the contract module in step", () => {
    // Two copies of the same table is two places to forget. If they disagree,
    // the codemod silently stops being the mechanical form of the contract.
    const codemod = readFileSync(
      path.resolve(process.cwd(), "scripts/tokenize-colors.mjs"),
      "utf-8"
    );
    const contract = readFileSync(
      path.resolve(process.cwd(), "apps/web-app/app/lib/colorTokens.ts"),
      "utf-8"
    );
    const entries = codemod.match(
      /"(#[0-9A-Fa-f]{6})"\s*:\s*"([a-z]+-\d{2,3}|white)"/g
    ) ?? [];
    expect(entries.length).toBeGreaterThan(100);
    for (const entry of entries) {
      expect(contract).toContain(entry);
    }
  });

  it("leaves no arbitrary hex colour utility anywhere in the app", () => {
    // The whole point of the codemod. Any hit here is a file that was missed.
    // `shadow` is excluded from the pattern on purpose: a coloured shadow is a
    // different property from a coloured surface, and must be reviewed by hand.
    const PREFIX =
      "(?:bg|text|border|ring|fill|stroke|from|to|via|divide|outline|placeholder|decoration|accent)";
    const re = new RegExp(`\\b${PREFIX}(?:-[trblyxy])?-\\[#[0-9A-Fa-f]{3,8}\\]`, "i");
    const offenders: string[] = [];
    for (const file of appTsxFiles()) {
      if (re.test(readFileSync(file, "utf-8"))) {
        offenders.push(path.relative(process.cwd(), file));
      }
    }
    expect(offenders).toEqual([]);
  });

  it("does not reintroduce the collapse-to-midnight FAB route", () => {
    // ClinicalFAB was never mounted and pointed at /dashboard/calculators,
    // which does not exist. Assert the component and the dead route are gone.
    const shell = path.join(APP, "components/shell");
    const names = readdirSync(shell);
    expect(names).not.toContain("ClinicalFAB.tsx");

    for (const file of appTsxFiles()) {
      const source = readFileSync(file, "utf-8");
      expect(source).not.toContain("/dashboard/calculators");
    }
  });
});
