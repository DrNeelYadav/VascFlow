import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const APP = path.resolve(process.cwd(), 'apps/web-app/app');

function appFiles(dir: string = APP, exts = ['.ts', '.tsx']): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) return appFiles(full, exts);
    return exts.some((e) => entry.endsWith(e)) ? [full] : [];
  });
}

function source(file: string): string {
  return readFileSync(file, 'utf-8');
}

/** Files that legitimately hold authentic patient records. */
const AUTHENTIC_SOURCES = ['/realData/', '/masterCatalog/'];

function isAuthenticSource(file: string): boolean {
  const rel = file.replace(/\\/g, '/');
  return AUTHENTIC_SOURCES.some((marker) => rel.includes(marker));
}

describe('no fabricated patient data', () => {
  it('has no demo/seed data module', () => {
    const libFiles = readdirSync(path.join(APP, 'lib'));
    const seeds = libFiles.filter((f) => /demo|seed|mock|fixture/i.test(f));
    expect(seeds).toEqual([]);
  });

  it('exposes no loadDemoSeedData action on the clinical store', () => {
    const store = source(path.join(APP, 'dashboard/useEndoflowStore.ts'));
    expect(store).not.toContain('loadDemoSeedData');
    expect(store).not.toContain('DEMO_');
  });

  it('starts with no patients, bookings, reviews or doppler records', () => {
    // The invariants the old seed loader used to overwrite.
    const store = source(path.join(APP, 'dashboard/useEndoflowStore.ts'));
    expect(store).toMatch(/INITIAL_ENDOFLOW_PATIENTS\s*(?::[^=]+)?=\s*\[\]/);
    expect(store).toMatch(/INITIAL_BOOKED_CASES\s*(?::[^=]+)?=\s*\[\]/);
    expect(store).toMatch(/INITIAL_CT_REVIEWS\s*(?::[^=]+)?=\s*\[\]/);
  });

  it('starts the logistics store empty rather than with invented admissions', () => {
    const logistics = source(path.join(APP, 'lib/logistics/patientLogisticsStore.ts'));
    expect(logistics).toMatch(/INITIAL_LOGISTICS_PATIENTS\s*(?::[^=]+)?=\s*\[\]/);
    // No invented theatre turnover driving the cath-lab turnaround timer.
    expect(logistics).toMatch(/INITIAL_ROOM_TURNOVER[^=]*=\s*null/);
    expect(logistics).not.toContain('SMS-2026-');
  });

  it('ships no sample imaging studies with invented dose figures', () => {
    // The viewer previously bundled five worked cases, each attributed to an
    // anonymised patient with a fabricated CR number, DAP and air-kerma figure
    // and a "successful access" narrative. All five are gone; the viewer reads
    // only what the departmental PACS actually holds.
    const imaging = source(path.join(APP, 'dashboard/imaging/page.tsx'));
    expect(imaging).not.toContain('SAMPLE_CASES');
    expect(imaging).not.toContain('ANON_');

    // Invented acquisition defaults presented as if read off the console.
    expect(imaging).not.toContain('1024 x 1024');
    expect(imaging).not.toContain('Automated DSA');

    // Walk the whole imaging tree rather than naming panels: the viewer has
    // been restructured more than once, and a bundled library could reappear in
    // any of its files. A name that does not exist is not evidence.
    const offenders: string[] = [];
    const pattern = /patientName\s*:\s*["']([A-Z][a-z]+ [A-Z][a-z]+[^"']*)["']/g;
    const walk = (dir: string): void => {
      for (const entry of readdirSync(dir)) {
        const full = path.join(dir, entry);
        if (statSync(full).isDirectory()) {
          walk(full);
          continue;
        }
        if (!/\.(ts|tsx)$/.test(entry)) continue;
        for (const found of Array.from(source(full).matchAll(pattern))) {
          offenders.push(`${path.relative(process.cwd(), full)}: ${found[1]}`);
        }
      }
    };
    walk(path.join(APP, 'components/imaging'));
    expect(offenders).toEqual([]);
  });

  it('does not open the pre-booking dossier pre-filled with a patient', () => {
    // A fixed name, age 48 and a plausible mobile number meant a clinician could
    // generate and file a pre-operative dossier for a patient who does not exist.
    const protocols = source(path.join(APP, 'dashboard/protocols/page.tsx'));
    expect(protocols).not.toContain('9829012345');
    expect(protocols).not.toContain('"PATIENT NAME"');
    expect(protocols).not.toContain('IPD-8821');
  });

  it('never stamps authentic registry records with a placeholder phone number', () => {
    const calendar = source(path.join(APP, 'dashboard/calendar/page.tsx'));
    expect(calendar).not.toContain('9829000000');
  });

  it('leaves no fabricated identifier literal outside the authentic sources', () => {
    // Anything matching patientName/crNo/hid/ssoNumber with a human-sounding
    // value, in a file that is not an authentic source, is invented data.
    const identifier = /(?:patientName|crNo|crNumber|hid|ssoNumber|ptName)\s*:\s*"([^"]{2,40})"/g;
    const offenders: string[] = [];

    for (const file of appFiles()) {
      if (isAuthenticSource(file)) continue;
      for (const match of Array.from(source(file).matchAll(identifier))) {
        const value = match[1];
        // Digits mean it is an ID or a blanked field; explicit "no case"
        // sentinels are not patient records.
        if (/\d/.test(value)) continue;
        if (value === '-' || value === '') continue;
        if (/no active case|not on file|patient name|not specified/i.test(value)) continue;
        offenders.push(`${path.relative(process.cwd(), file)}: ${value}`);
      }
    }

    expect(offenders).toEqual([]);
  });

  it('leaves no bare 10-digit phone literal outside authentic sources', () => {
    // A placeholder number that gets dialled reaches a real stranger.
    const offenders: string[] = [];
    for (const file of appFiles()) {
      if (isAuthenticSource(file)) continue;
      for (const match of Array.from(source(file).matchAll(/"(\d{10})"/g))) {
        offenders.push(`${path.relative(process.cwd(), file)}: ${match[1]}`);
      }
    }
    expect(offenders).toEqual([]);
  });
});

describe('the FHIR endpoint will not mint clinical records', () => {
  it('returns 404 rather than synthesising a DiagnosticReport', () => {
    // The route used to fabricate a full record - name, operator, air kerma,
    // fluoroscopy time, contrast volume - for any CASE-/IR- identifier, and emit
    // it as an ABDM national health-exchange bundle.
    const route = source(
      path.join(APP, 'api/fhir/Procedure/[caseId]/route.ts')
    );
    expect(route).not.toMatch(/patientName\s*:\s*["']Interventional Patient["']/);
    expect(route).toContain('OperationOutcome');
    expect(route).not.toMatch(/airKermaGy:\s*0\./);
    expect(route).not.toMatch(/contrastVolumeMl:\s*\d/);
  });

  it('does not auto-write a successful-outcome conclusion', () => {
    // "<procedure> completed successfully without immediate adverse technical
    // events" is a fabricated clinical assertion in a compliance payload.
    const generator = source(
      path.resolve(process.cwd(), 'packages/utils/src/fhir/abdmBundleGenerator.ts')
    );
    expect(generator).not.toContain('completed successfully without');
  });

  it('treats the bundle patient name as optional so it can be omitted', () => {
    const types = source(
      path.resolve(process.cwd(), 'packages/utils/src/fhir/types.ts')
    );
    const block = types.slice(types.indexOf('interface IrCaseClinicalData'));
    expect(block).toMatch(/patientName\?\s*:\s*string/);
    expect(block).toMatch(/procedureName\?\s*:\s*string/);
  });
});