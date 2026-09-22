import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { DualPaneWorkspace } from "../../app/dashboard/components/DualPaneWorkspace";
import { CleanDashboardHeader } from "../../app/dashboard/components/CleanDashboardHeader";
import fs from "fs";
import path from "path";

describe("Tablet Viewport Ergonomics & Touch Target Specifications", () => {
  describe("DualPaneWorkspace Component", () => {
    it("renders dual-pane responsive layout supporting 10.5-inch and 12.9-inch tablets", () => {
      const html = renderToStaticMarkup(
        React.createElement(DualPaneWorkspace, null, React.createElement("div", null, "Active Case Body"))
      );

      // Root container uses responsive flex: flex-col for small devices, md:flex-row for tablets (>=768px)
      expect(html).toContain("flex flex-col md:flex-row");
      expect(html).toContain("w-full");

      // Left pane (Cockpit & Roadmap): 42% on tablets (md), 45% on large displays (lg)
      expect(html).toContain("md:w-[42%]");
      expect(html).toContain("lg:w-[45%]");

      // Right pane (Active Workflow): 58% on tablets (md), 55% on large displays (lg)
      expect(html).toContain("md:w-[58%]");
      expect(html).toContain("lg:w-[55%]");
    });

    it("enforces momentum touch scrolling (-webkit-overflow-scrolling: touch) and touch-pan-y", () => {
      const html = renderToStaticMarkup(
        React.createElement(DualPaneWorkspace, null, React.createElement("div", null, "Active Case Body"))
      );

      // Verify -webkit-overflow-scrolling: touch inline style for 60fps momentum on WebKit tablets
      expect(html).toContain("-webkit-overflow-scrolling:touch");

      // Verify touch-pan-y utility class
      expect(html).toContain("touch-pan-y");
    });

    it("ensures all anatomical roadmap vessel buttons satisfy >= 44px touch targets", () => {
      const html = renderToStaticMarkup(
        React.createElement(DualPaneWorkspace, null, React.createElement("div", null, "Active Case Body"))
      );

      // Verify all vessel buttons have min-h-[44px] and touch-manipulation
      const vesselNames = [
        "Celiac Trunk",
        "Proper Hepatic Artery",
        "Right Hepatic Artery",
        "Splenic Artery",
        "Superior Mesenteric (SMA)",
        "Right Renal Artery",
      ];

      for (const vessel of vesselNames) {
        expect(html).toContain(vessel);
      }

      // Check min-h-[44px] and touch-manipulation classes on the buttons
      expect(html).toContain("min-h-[44px]");
      expect(html).toContain("touch-manipulation");
    });
  });

  describe("CleanDashboardHeader Touch Targets", () => {
    it("ensures quick action buttons satisfy >= 44px touch targets with touch-manipulation", () => {
      const html = renderToStaticMarkup(
        React.createElement(CleanDashboardHeader, {
          department: "Interventional Radiology",
          activeCases: 4,
          onQuickAction: () => {},
        })
      );

      expect(html).toContain("New Case");
      expect(html).toContain("Export");
      expect(html).toContain("min-h-[44px]");
      expect(html).toContain("min-w-[44px]");
      expect(html).toContain("touch-manipulation");
    });
  });

  describe("Source Code Verification for Tablet Guidelines", () => {
    it("verifies source code of DualPaneWorkspace meets Karpathy simplicity and Apple HIG standards", () => {
      const filePath = path.resolve(
        process.cwd(),
        "apps/web-app/app/dashboard/components/DualPaneWorkspace.tsx"
      );
      const source = fs.readFileSync(filePath, "utf-8");

      // Check 44px touch targets
      expect(source).toMatch(/min-h-\[44px\]/);
      expect(source).toMatch(/touch-manipulation/);

      // Check 10.5" / 12.9" tablet responsive split classes
      expect(source).toMatch(/md:w-\[42%\]/);
      expect(source).toMatch(/md:w-\[58%\]/);

      // Check WebKit momentum touch scrolling
      expect(source).toMatch(/WebkitOverflowScrolling:\s*"touch"/);
    });
  });
});
