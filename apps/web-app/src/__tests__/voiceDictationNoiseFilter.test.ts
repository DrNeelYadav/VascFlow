import { describe, it, expect } from "vitest";
import {
  filterAngiosuiteAcousticNoise,
  extractVascularEntities,
} from "../../app/dashboard/report/components/VoiceDictationStudio";

describe("VoiceDictationStudio Acoustic Noise Filter & Entity Extraction", () => {
  describe("filterAngiosuiteAcousticNoise", () => {
    it("strips bracketed, parenthesized, and asterisked speech engine noise tokens", () => {
      const noisy = "Access obtained [c-arm moving] in the right common femoral artery (alarm sounding) *beep* successfully.";
      const cleaned = filterAngiosuiteAcousticNoise(noisy);
      expect(cleaned).not.toContain("[c-arm moving]");
      expect(cleaned).not.toContain("(alarm sounding)");
      expect(cleaned).not.toContain("*beep*");
      expect(cleaned).toBe("Access obtained in the right common femoral artery successfully.");
    });

    it("filters hemodynamic monitor alerts and telemetry voice bleed", () => {
      const noisy =
        "Patient baseline stable pulse oximeter tone spo2 99% heart rate 72 map 85 nibp cycling followed by puncture.";
      const cleaned = filterAngiosuiteAcousticNoise(noisy);
      expect(cleaned).not.toContain("pulse oximeter tone");
      expect(cleaned).not.toContain("spo2 99%");
      expect(cleaned).not.toContain("heart rate 72");
      expect(cleaned).not.toContain("map 85");
      expect(cleaned).not.toContain("nibp cycling");
      expect(cleaned).toBe("Patient baseline stable followed by puncture.");
    });

    it("filters C-arm hydraulic pumps and mechanical movement noise", () => {
      const noisy =
        "Fluoroscopy pedal click performed hydraulic pump whine table tilt motor hum confirmed position.";
      const cleaned = filterAngiosuiteAcousticNoise(noisy);
      expect(cleaned).not.toContain("fluoroscopy pedal click");
      expect(cleaned).not.toContain("hydraulic pump whine");
      expect(cleaned).not.toContain("table tilt");
      expect(cleaned).not.toContain("motor hum");
      expect(cleaned).toBe("performed confirmed position.");
    });

    it("filters high-flow laminar HVAC rush and surgical suction white noise", () => {
      const noisy =
        "Sterile field prepped laminar airflow hvac rush suction on white noise catheter advanced.";
      const cleaned = filterAngiosuiteAcousticNoise(noisy);
      expect(cleaned).not.toContain("laminar airflow");
      expect(cleaned).not.toContain("hvac rush");
      expect(cleaned).not.toContain("suction on");
      expect(cleaned).not.toContain("white noise");
      expect(cleaned).toBe("Sterile field prepped catheter advanced.");
    });

    it("preserves pure vascular dictation without alteration", () => {
      const pure = "Puncture of right common femoral artery under ultrasound guidance.";
      const cleaned = filterAngiosuiteAcousticNoise(pure);
      expect(cleaned).toBe(pure);
    });
  });

  describe("extractVascularEntities amidst simulated angiosuite ambient noise", () => {
    it("extracts all five hardware & procedural parameters from a noisy cath-lab transcript", () => {
      const cathLabTranscript = `
        Under sterile precautions, ultrasound-guided puncture of the right common femoral artery [c-arm moving]
        was performed. A 6 French sheath was placed without resistance (alarm sounding).
        Selected the celiac trunk using a Simmons 2 catheter with hydraulic pump whine in the background.
        Administered Lipiodol emulsion and PVA particles for selective chemoembolization [laminar airflow].
        Hemostasis was achieved using an Angio-Seal closure device with excellent result.
      `;

      const entities = extractVascularEntities(cathLabTranscript);

      expect(entities.accessSite).toBe("Right Common Femoral Artery");
      expect(entities.sheathSize).toBe("6F");
      expect(entities.catheter).toBe("Simmons 2");
      expect(entities.embolicAgent).toBe("Lipiodol");
      expect(entities.hemostasisMethod).toBe("Angio-Seal");
      expect(entities.rawTranscript).toBe(cathLabTranscript);
    });

    it("extracts transradial uterine artery embolization hardware parameters correctly", () => {
      const transradialTranscript = `
        Left radial artery puncture with 5 French radiofocus sheath.
        Advanced Progreat microcatheter coaxially into bilateral uterine arteries (pulse oximeter tone).
        Embolized using Gelfoam slurry and microcoils.
        Hemostasis secured with TR Band for patent hemostasis.
      `;

      const entities = extractVascularEntities(transradialTranscript);

      expect(entities.accessSite).toBe("Left Radial Artery");
      expect(entities.sheathSize).toBe("5F");
      expect(entities.catheter).toBe("Progreat");
      expect(entities.embolicAgent).toBe("Gelfoam Slurry");
      expect(entities.hemostasisMethod).toBe("Tr Band");
    });

    it("extracts TIPS / venous intervention hardware parameters correctly", () => {
      const tipsTranscript = `
        Right internal jugular vein access achieved. Placed 10F introducer sheath [suction on].
        Canalized hepatic vein using Cobra catheter.
        Embolized varices with Onyx 18 and coils.
        Manual compression applied at neck puncture site.
      `;

      const entities = extractVascularEntities(tipsTranscript);

      expect(entities.accessSite).toBe("Right Internal Jugular Vein");
      expect(entities.sheathSize).toBe("10F");
      expect(entities.catheter).toBe("Cobra");
      expect(entities.embolicAgent).toBe("Onyx 18");
      expect(entities.hemostasisMethod).toBe("Manual Compression");
    });

    it("handles missing or sparse entity dictations gracefully", () => {
      const sparseTranscript = "Diagnostic angiography performed via right femoral artery. Hemostasis with Perclose.";
      const entities = extractVascularEntities(sparseTranscript);

      expect(entities.accessSite).toBe("Right Femoral Artery");
      expect(entities.sheathSize).toBeUndefined();
      expect(entities.catheter).toBeUndefined();
      expect(entities.embolicAgent).toBeUndefined();
      expect(entities.hemostasisMethod).toBe("Perclose");
    });
  });
});
