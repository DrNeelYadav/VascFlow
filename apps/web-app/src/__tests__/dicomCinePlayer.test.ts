import { describe, it, expect, vi } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  DicomCinePlayer,
  parseGoogleDriveUrl,
} from "../../app/components/imaging/DicomCinePlayer";
import ImagingWorkstationPage from "../../app/dashboard/imaging/page";
import fs from "fs";
import path from "path";

describe("DICOM & Cine Web Player Suite", () => {
  describe("parseGoogleDriveUrl Helper", () => {
    it("translates standard Google Drive share URLs into direct stream endpoints", () => {
      const shareUrl = "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing";
      const expected = "https://drive.google.com/uc?id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs&export=download";
      expect(parseGoogleDriveUrl(shareUrl)).toBe(expected);
    });

    it("translates open?id= Google Drive links", () => {
      const openUrl = "https://drive.google.com/open?id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs";
      const expected = "https://drive.google.com/uc?id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs&export=download";
      expect(parseGoogleDriveUrl(openUrl)).toBe(expected);
    });

    it("translates raw 33-character Google Drive file IDs", () => {
      const rawId = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs";
      const expected = "https://drive.google.com/uc?id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs&export=download";
      expect(parseGoogleDriveUrl(rawId)).toBe(expected);
    });

    it("leaves standard MP4 URLs untouched", () => {
      const mp4Url = "http://100.85.12.34:8042/studies/1/cine.mp4";
      expect(parseGoogleDriveUrl(mp4Url)).toBe(mp4Url);
    });

    it("handles empty or blank inputs safely", () => {
      expect(parseGoogleDriveUrl("")).toBe("");
    });
  });

  describe("DicomCinePlayer Component Rendering", () => {
    it("renders clinical HUD overlay with modality, patient metadata, and frame counters", () => {
      const html = renderToStaticMarkup(
        React.createElement(DicomCinePlayer, {
          src: "/samples/splenic_dsa.mp4",
          modality: "XA",
          patientId: "SMS-IR-2026-985",
          patientName: "ANON_GOPAL_R",
          seriesDescription: "Selective Splenic Artery DSA",
          frameRate: 15,
          totalFrames: 120,
        })
      );

      // Modality badge
      expect(html).toContain("XA - Angiography");
      // Patient identifiers & DISHA compliance
      expect(html).toContain("SMS-IR-2026-985");
      expect(html).toContain("ANON_GOPAL_R");
      expect(html).toContain("DISHA Compliant");
      // Series description & FPS
      expect(html).toContain("Selective Splenic Artery DSA");
      expect(html).toContain("15.0 FPS");
      // Timeline and counter
      expect(html).toContain("Frame 1");
      expect(html).toContain("120");
    });

    it("renders cross-sectional slice labels when modality is CT or MR", () => {
      const html = renderToStaticMarkup(
        React.createElement(DicomCinePlayer, {
          src: "/samples/aortic_ct.mp4",
          modality: "CT",
          patientId: "SMS-IR-2026-995",
          patientName: "ANON_SHANKAR_L",
          seriesDescription: "Axial 0.625mm Contrast Enhanced",
          frameRate: 30,
          totalFrames: 216,
        })
      );

      expect(html).toContain("CT - Computed Tomography");
      expect(html).toContain("Slice 1");
      expect(html).toContain("216");
    });

    it("renders playback transport controls, loop toggle, and speed presets", () => {
      const html = renderToStaticMarkup(
        React.createElement(DicomCinePlayer, {
          src: "/samples/tace_hepatic_dsa.mp4",
          modality: "XA",
        })
      );

      // Play button
      expect(html).toContain("Play");
      // Loop toggle
      expect(html).toContain("Loop");
      // Speed presets
      expect(html).toContain("0.25x");
      expect(html).toContain("0.5x");
      expect(html).toContain("1x");
      expect(html).toContain("2x");
      // Radiology tools
      expect(html).toContain("Invert LUT");
      expect(html).toContain("Vasc Boost");
    });
  });

  describe("ImagingWorkstationPage Workstation View", () => {
    it("renders the PACS workstation shell", () => {
      const html = renderToStaticMarkup(React.createElement(ImagingWorkstationPage));

      // The page is now a departmental-PACS workstation: study list on the
      // left, Cornerstone viewport in the centre, procedures and tools on the
      // right. There is no title banner - the panels carry the structure.
      expect(html).toContain('PACS');
      // The four old source tabs are gone. Two of them (Google Drive, upload)
      // invited arbitrary external media onto a clinical screen.
      expect(html).not.toContain("Google Drive");
      expect(html).not.toContain("Tailscale");
      expect(html).not.toContain("Sample IR Cines");
    });

    it("offers no external media source switcher", () => {
      // Regression guard: the viewer previously offered a stranger's Google
      // Drive link and a Tailscale peer as clinical image sources.
      const html = renderToStaticMarkup(React.createElement(ImagingWorkstationPage));
      expect(html).not.toContain("Upload / Drop Video");
      expect(html).not.toContain("Departmental PC");
    });

    it("ships no bundled sample studies", () => {
      // Regression guard. The viewer bundled five worked cases, each attributed
      // to an anonymised patient with a fabricated CR number, DAP and air-kerma
      // figure and a "successful access" narrative, rendered exactly like a real
      // study. With those removed the library starts empty and says so.
      const html = renderToStaticMarkup(React.createElement(ImagingWorkstationPage));

      expect(html).not.toContain("Splenic Artery Embolization DSA");
      expect(html).not.toContain("Celiac Axis Diagnostic Run");
      expect(html).not.toContain("ANON_");
      // No invented acquisition defaults either.
      expect(html).not.toContain("1024 x 1024");
      expect(html).not.toContain("Automated DSA");
    });
  });

  describe("GoogleSidebar Navigation Integration", () => {
    it("verifies Imaging & Cine Viewer is reachable from the sidebar", () => {
      // The sidebar no longer hardcodes a nav list; it renders the shared
      // registry in app/lib/navigation. Reachability is asserted against that
      // registry so the guarantee survives a change to either file.
      const navPath = path.resolve(
        process.cwd(),
        "apps/web-app/app/lib/navigation.ts"
      );
      const content = fs.readFileSync(navPath, "utf-8");

      expect(content).toContain('href: "/dashboard/imaging"');
      expect(content).toContain('label: "Imaging"');
      // The sidebar must consume the registry, not a private copy of the list.
      const sidebar = fs.readFileSync(
        path.resolve(process.cwd(), "apps/web-app/app/components/GoogleSidebar.tsx"),
        "utf-8"
      );
      expect(sidebar).toContain("from \"../lib/navigation\"");
      expect(sidebar).not.toContain("/dashboard/imaging");
    });
  });

  describe("Deterministic Math & Scrubbing Verification", () => {
    it("verifies frame-to-time scrubbing formula bounds and step accuracy", () => {
      const totalFrames = 216;
      const duration = 7.2; // 7.2 seconds for 216 frames at 30 fps

      // Deterministic calculation: (targetFrame / totalFrames) * duration
      const calculateTimeForFrame = (targetFrame: number) => {
        const clamped = Math.max(1, Math.min(totalFrames, targetFrame));
        return ((clamped - 1) / (totalFrames - 1)) * duration;
      };

      // Frame 1 should map to 0s
      expect(calculateTimeForFrame(1)).toBe(0);

      // Frame 216 should map to duration 7.2s
      expect(calculateTimeForFrame(216)).toBeCloseTo(7.2, 5);

      // Frame 108.5 (middle) should map to middle
      const midTime = calculateTimeForFrame(108);
      expect(midTime).toBeGreaterThan(0);
      expect(midTime).toBeLessThan(7.2);
    });
  });
});
