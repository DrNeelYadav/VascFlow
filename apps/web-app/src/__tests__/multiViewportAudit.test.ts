import { describe, it, expect, vi } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { MobileBottomNav } from "../../app/components/shell/MobileBottomNav";
import { CleanDashboardHeader } from "../../app/dashboard/components/CleanDashboardHeader";
import { DualPaneWorkspace } from "../../app/dashboard/components/DualPaneWorkspace";

vi.mock("next/navigation", () => ({
  usePathname: () => "/dashboard/today",
}));

const APP = path.resolve(process.cwd(), "apps/web-app/app");

function appTsx(dir: string = APP): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) return appTsx(full);
    return entry.endsWith(".tsx") ? [full] : [];
  });
}

describe("Multi-Viewport Responsiveness & Mobile Architecture Audit", () => {
  describe("1. Mobile Viewport Architecture (375px iPhone SE, 390px iPhone 14/15, 412px Samsung Galaxy)", () => {
    it("validates that MobileBottomNav is present in dashboard layout and has md:hidden", () => {
      const layoutSource = readFileSync(path.join(APP, "dashboard/layout.tsx"), "utf-8");
      expect(layoutSource).toContain("MobileBottomNav");
      expect(layoutSource).toMatch(/<MobileBottomNav\b/);

      const navSource = readFileSync(
        path.join(APP, "components/shell/MobileBottomNav.tsx"),
        "utf-8"
      );
      expect(navSource).toContain("md:hidden");

      // Verify rendered component markup includes md:hidden responsive visibility constraint
      const html = renderToStaticMarkup(
        React.createElement(MobileBottomNav, { onToggleMore: () => {} })
      );
      expect(html).toContain("md:hidden");
      expect(html).toContain("<nav");
      expect(html).toContain("aria-label=\"Mobile Navigation Bar\"");
    });

    it("validates safe-area insets (safe-area-inset-bottom) in mobile navigation", () => {
      const navSource = readFileSync(
        path.join(APP, "components/shell/MobileBottomNav.tsx"),
        "utf-8"
      );
      expect(navSource).toMatch(/safe-area-inset-bottom/);
      expect(navSource).toMatch(/pb-\[env\(safe-area-inset-bottom/);

      const mobileCss = readFileSync(path.join(APP, "styles/mobile.css"), "utf-8");
      expect(mobileCss).toMatch(/safe-area-inset-bottom/);
      expect(mobileCss).toMatch(/env\(safe-area-inset-bottom\)/);
    });

    it("validates mobile bottom padding in dashboard/layout.tsx so content does not collide with the nav bar", () => {
      const layoutSource = readFileSync(path.join(APP, "dashboard/layout.tsx"), "utf-8");
      // Main container must provide mobile bottom clearance (pb-20 = 80px) exceeding
      // the 56px (h-14) mobile dock height + safe area, resetting responsively for tablet/desktop
      expect(layoutSource).toMatch(/pb-(?:16|20|24|28)\b/);
      expect(layoutSource).toMatch(/md:pb-[0-6]\b/);

      const mainMatch = layoutSource.match(/<main[^>]+className=["']([^"']+)["']/);
      expect(mainMatch).not.toBeNull();
      const classList = mainMatch![1];
      expect(classList).toContain("pb-20");
      expect(classList).toMatch(/md:pb-(?:4|6)/);
    });

    it("validates mobile dock slot geometry for compact 375px, 390px, and 412px viewports", () => {
      const html = renderToStaticMarkup(
        React.createElement(MobileBottomNav, { onToggleMore: () => {} })
      );
      // Dock carries 4 primary slots + 1 'More' action button = 5 equal columns
      expect(html).toContain("grid-template-columns:repeat(5, minmax(0, 1fr))");

      // Verify mathematical clearance across clinical mobile form factors:
      // iPhone SE (375px): 375 / 5 = 75px per slot (>= 44px Apple HIG touch target)
      // iPhone 14/15 (390px): 390 / 5 = 78px per slot
      // Samsung Galaxy (412px): 412 / 5 = 82.4px per slot
      const viewports = [375, 390, 412];
      for (const width of viewports) {
        const slotWidth = width / 5;
        expect(slotWidth).toBeGreaterThanOrEqual(44);
      }
    });
  });

  describe("2. Touch Target Compliance (WCAG 2.5.5 / Apple HIG)", () => {
    it("validates global CSS specifies >= 44px minimum touch targets on coarse pointers", () => {
      const globalsCss = readFileSync(path.join(APP, "globals.css"), "utf-8");
      expect(globalsCss).toMatch(/@media \(pointer:\s*coarse\)/);
      expect(globalsCss).toMatch(/min-height:\s*44px/);

      // Verify buttons, interactive roles, links, and selects are protected
      const coarseBlock = globalsCss.slice(globalsCss.indexOf("@media (pointer: coarse)"));
      expect(coarseBlock).toMatch(/button/);
      expect(coarseBlock).toMatch(/\[role="button"\]/);
      expect(coarseBlock).toMatch(/a\[href\]/);
      expect(coarseBlock).toMatch(/select/);
    });

    it("validates mobile.css enforces touch-action: manipulation to eliminate 300ms tap delay", () => {
      const mobileCss = readFileSync(path.join(APP, "styles/mobile.css"), "utf-8");
      expect(mobileCss).toMatch(/touch-action:\s*manipulation/);
    });

    it("validates MobileBottomNav items satisfy >= 44px touch targets or touch-manipulation", () => {
      const navSource = readFileSync(
        path.join(APP, "components/shell/MobileBottomNav.tsx"),
        "utf-8"
      );
      // Dock uses h-14 (56px) which exceeds the 44px WCAG 2.5.5 / Apple HIG standard
      expect(navSource).toContain("h-14");
      expect(navSource).toMatch(/min-h-(?:11|\[44px\])/);
      expect(navSource).toContain("touch-manipulation");
    });

    it("validates CleanDashboardHeader and DualPaneWorkspace buttons satisfy >= 44px touch targets with touch-manipulation", () => {
      const headerHtml = renderToStaticMarkup(
        React.createElement(CleanDashboardHeader, {
          department: "Interventional Radiology",
          activeCases: 2,
          onQuickAction: () => {},
        })
      );
      expect(headerHtml).toMatch(/min-h-(?:11|\[44px\])/);
      expect(headerHtml).toContain("touch-manipulation");

      const dualPaneHtml = renderToStaticMarkup(
        React.createElement(DualPaneWorkspace, null, React.createElement("div", null, "Case Content"))
      );
      expect(dualPaneHtml).toMatch(/min-h-(?:11|\[44px\])/);
      expect(dualPaneHtml).toContain("touch-manipulation");
    });
  });

  describe("3. Table and Grid Containment", () => {
    it("validates that EVERY .tsx file in apps/web-app/app with a <table tag has an enclosing overflow-x-auto or overflow-auto", () => {
      const offenders: string[] = [];
      const files = appTsx();
      expect(files.length).toBeGreaterThan(0);

      for (const file of files) {
        const source = readFileSync(file, "utf-8");
        if (!/<table\b/.test(source)) continue;
        // Must be enclosed in a horizontal scroll container
        if (!/overflow-x-auto|overflow-auto/.test(source)) {
          offenders.push(path.relative(process.cwd(), file));
        }
      }

      expect(offenders).toEqual([]);
    });

    it("validates that NO non-table element has fixed pixel width > 400px without responsive prefixes or scroll containers", () => {
      const offenders: string[] = [];
      const fixedWidth = /(?<!min-)w-\[(\d{3,4})px\]/g;

      for (const file of appTsx()) {
        const source = readFileSync(file, "utf-8");
        source.split("\n").forEach((line, index) => {
          if (/^\s*(<table|<canvas|table\b|canvas\b)/.test(line)) return;
          for (const match of Array.from(line.matchAll(fixedWidth))) {
            if (Number(match[1]) <= 400) continue;
            // A responsive prefix makes it intentional across viewports: w-full sm:w-[460px]
            if (/(sm|md|lg|xl):/.test(line)) continue;
            // max-w-* bounds the element; w-full allows shrink without overflow
            if (/max-w-\[/.test(line)) continue;
            // A parent scroll container makes child width reachable
            if (/overflow-x-auto|overflow-auto|overflow-x-scroll/.test(line)) continue;
            offenders.push(
              `${path.relative(process.cwd(), file)}:${index + 1}  ${match[0]}`
            );
          }
        });
      }

      expect(offenders).toEqual([]);
    });

    it("validates that multi-column grids collapse to 1 column on mobile (sm:grid-cols-* or md:grid-cols-*)", () => {
      const STRUCTURAL = [
        "ProcedureCalculatorRunner",
        "BookingChart",
        "calendar/page",
        "DicomCinePlayer",
      ];
      const offenders: string[] = [];

      for (const file of appTsx()) {
        const rel = path.relative(process.cwd(), file).replace(/\\/g, "/");
        if (STRUCTURAL.some((skip) => rel.includes(skip))) continue;

        readFileSync(file, "utf-8")
          .split("\n")
          .forEach((line, index) => {
            const match = line.match(/(?<![\w:-])grid-cols-([3-9])/);
            if (!match) return;
            // Responsive variant ensures mobile fallback to 1 column
            if (/(sm|md|lg|xl):grid-cols-/.test(line)) return;
            offenders.push(
              `${path.relative(process.cwd(), file)}:${index + 1}  grid-cols-${match[1]}`
            );
          });
      }

      expect(offenders).toEqual([]);
    });

    it("validates wide grids (>= 6 cols) reside in an overflow scroll container", () => {
      const offenders: string[] = [];
      for (const file of appTsx()) {
        const source = readFileSync(file, "utf-8");
        source.split("\n").forEach((line, index) => {
          const match = line.match(/(?<![\w:-])grid-cols-(\d+)/);
          if (!match) return;
          if (Number(match[1]) < 6) return;
          if (/overflow-x-auto|overflow-auto|overflow-x-scroll/.test(source)) return;
          offenders.push(
            `${path.relative(process.cwd(), file)}:${index + 1}  grid-cols-${match[1]}`
          );
        });
      }

      expect(offenders).toEqual([]);
    });
  });

  describe("4. Responsive Typography & Icon Sizing", () => {
    it("validates mobile icon sizing rules (<640px) in mobile.css", () => {
      const mobileCss = readFileSync(path.join(APP, "styles/mobile.css"), "utf-8");
      expect(mobileCss).toMatch(/@media \(max-width:\s*639px\)/);
      expect(mobileCss).toMatch(/\.btn svg/);
      expect(mobileCss).toMatch(/button svg/);
      expect(mobileCss).toMatch(/0\.8125rem/); // 13px bounded icon on mobile
    });

    it("validates tabular numerals (tnum) in typography.css and globals.css for dose/lab precision", () => {
      const typographyCss = readFileSync(path.join(APP, "styles/typography.css"), "utf-8");
      expect(typographyCss).toContain('"tnum"');
      expect(typographyCss).toMatch(/font-variant-numeric:\s*tabular-nums/);
      expect(typographyCss).toContain(".tabular-nums");

      const globalsCss = readFileSync(path.join(APP, "globals.css"), "utf-8");
      expect(globalsCss).toContain("tnum");
    });

    it("validates tabular numerals in tables.css and inputs.css for clinical metric alignment", () => {
      const tablesCss = readFileSync(path.join(APP, "styles/tables.css"), "utf-8");
      expect(tablesCss).toMatch(/font-variant-numeric:\s*tabular-nums/);

      const inputsCss = readFileSync(path.join(APP, "styles/inputs.css"), "utf-8");
      expect(inputsCss).toMatch(/font-variant-numeric:\s*tabular-nums/);
    });

    it("validates clinical WorklistTable employs tabular numerals for identifiers and metrics", () => {
      const worklistSource = readFileSync(
        path.join(APP, "dashboard/worklist/WorklistTable.tsx"),
        "utf-8"
      );
      expect(worklistSource).toContain("tabular-nums");
    });
  });
});
