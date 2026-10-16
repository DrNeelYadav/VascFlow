import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("PWA Icon & Desktop Taskbar Branding Suite", () => {
  const root = process.cwd();
  const publicDir = path.resolve(root, "apps/web-app/public");
  const appDir = path.resolve(root, "apps/web-app/app");

  it("verifies multi-resolution favicon.ico exists in public and app directories", () => {
    const publicIco = path.join(publicDir, "favicon.ico");
    const appIco = path.join(appDir, "favicon.ico");

    expect(fs.existsSync(publicIco)).toBe(true);
    expect(fs.existsSync(appIco)).toBe(true);

    const buf = fs.readFileSync(publicIco);
    // Verify valid ICO header: 0, 1 (ICO type), count >= 4
    expect(buf.readUInt16LE(0)).toBe(0);
    expect(buf.readUInt16LE(2)).toBe(1);
    const count = buf.readUInt16LE(4);
    expect(count).toBeGreaterThanOrEqual(4);
  });

  it("verifies manifest.json defines Windows taskbar desktop sizes with purpose 'any'", () => {
    const manifestPath = path.join(publicDir, "manifest.json");
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    expect(manifest.name).toBe("EndoFlow | SMS IR Angiosuite");
    expect(manifest.short_name).toBe("EndoFlow");

    const anyIcons = manifest.icons.filter((i: any) => i.purpose === "any");
    expect(anyIcons.length).toBeGreaterThanOrEqual(5);

    const sizes = anyIcons.map((i: any) => i.sizes);
    expect(sizes.some((s: string) => s.includes("48x48"))).toBe(true);
    expect(sizes.some((s: string) => s.includes("192x192"))).toBe(true);
    expect(sizes.some((s: string) => s.includes("512x512"))).toBe(true);
  });

  it("verifies layout.tsx registers multi-resolution favicon and PNG icons", () => {
    const layoutPath = path.join(appDir, "layout.tsx");
    const content = fs.readFileSync(layoutPath, "utf-8");

    expect(content).toContain('shortcut: "/favicon.ico?v=3"');
    expect(content).toContain('url: "/favicon.ico?v=3"');
    expect(content).toContain('url: "/icon-48.png?v=3"');
    expect(content).toContain('url: "/icon.png?v=3"');
  });

  it("verifies clinical forms retain the official SMS Hospital logo seal", () => {
    const preBookingHeader = fs.readFileSync(
      path.join(appDir, "dashboard/pre-booking/PreBookingHeader.tsx"),
      "utf-8"
    );
    const consentHeader = fs.readFileSync(
      path.join(appDir, "dashboard/consent/ConsentStatutoryHeader.tsx"),
      "utf-8"
    );

    expect(preBookingHeader).toContain('src="/sms_hospital_logo.png"');
    expect(consentHeader).toContain('src="/sms_hospital_logo.png"');
  });
});
