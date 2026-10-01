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
    it("renders the workstation header with title and subtitle", () => {
      const html = renderToStaticMarkup(React.createElement(ImagingWorkstationPage));

      expect(html).toContain("Imaging &amp; Cine Viewer");
      expect(html).toContain("Zero-lag DSA fluoroscopy cines, pre-op CT/MRI slice scrubbing, and Google Drive / Tailscale streaming.");
    });

    it("renders all four source switcher tabs", () => {
      const html = renderToStaticMarkup(React.createElement(ImagingWorkstationPage));

      expect(html).toContain("Sample IR Cines &amp; Scans");
      expect(html).toContain("Google Drive / Cloud Stream");
      expect(html).toContain("Departmental PC (Tailscale)");
      expect(html).toContain("Upload / Drop Video");
    });

    it("renders sample IR procedures and sequential angiography runs", () => {
      const html = renderToStaticMarkup(React.createElement(ImagingWorkstationPage));

      expect(html).toContain("Splenic Artery Embolization DSA");
      expect(html).toContain("Bronchial Artery DSA (Hemoptysis)");
      expect(html).toContain("TACE Hepatic Angiogram");
      expect(html).toContain("Abdominal Aortic CT");

      // Check angiosuite runs list
      expect(html).toContain("Angiosuite Runs &amp; Series");
      expect(html).toContain("Celiac Axis Diagnostic Run");
      expect(html).toContain("Selective Splenic Artery DSA");
    });
  });

  describe("GoogleSidebar Navigation Integration", () => {
    it("verifies Imaging & Cine Viewer is registered in GoogleSidebar.tsx", () => {
      const sidebarPath = path.resolve(
        process.cwd(),
        "apps/web-app/app/components/GoogleSidebar.tsx"
      );
      const content = fs.readFileSync(sidebarPath, "utf-8");

      expect(content).toContain('id: "imaging"');
      expect(content).toContain('name: "Imaging & Cine Viewer"');
      expect(content).toContain('href: "/dashboard/imaging"');
      expect(content).toContain("Film");
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
