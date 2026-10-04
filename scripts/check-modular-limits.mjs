/**
 * EndoFlow Phase 8: Modular Component De-Bloating Guardrails
 * AST & Line-Count Analyzer (< 200 Lines Rule for Decomposed Modules)
 */

import fs from "node:fs";
import path from "node:path";

const TARGET_DIRECTORIES = [
  "apps/web-app/app/dashboard/operative-notes",
  "apps/web-app/app/dashboard/calendar",
  "apps/web-app/app/dashboard/consent",
];

const TARGET_FILES = [
  "apps/web-app/app/dashboard/op-clinic/ConsultationDeskForm.tsx",
  "apps/web-app/app/dashboard/op-clinic/ConsultationDeskIntakeHeader.tsx",
  "apps/web-app/app/dashboard/op-clinic/ConsultationDeskDemographics.tsx",
  "apps/web-app/app/dashboard/op-clinic/ConsultationDeskClinicalBlock.tsx",
  "apps/web-app/app/dashboard/op-clinic/ConsultationDeskDispositionMatrix.tsx",
  "apps/web-app/app/dashboard/op-clinic/ConsultationDeskSchedulingBar.tsx",
  "apps/web-app/app/dashboard/op-clinic/dispositionTracks.ts",
  "apps/web-app/app/dashboard/discharge/page.tsx",
  "apps/web-app/app/dashboard/discharge/useDischargeSummary.ts",
  "apps/web-app/app/dashboard/discharge/DischargeHeaderBar.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeHospitalHeader.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeDemographicsGrid.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeClinicalNarrative.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeMedicationsTable.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeAdviceAndRedFlags.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeSignaturesBlock.tsx",
  "apps/web-app/app/dashboard/discharge/DischargeStatutoryDocument.tsx",
  "apps/web-app/app/hooks/useDocPreview.ts",
];


// Files that are purely static reference catalogs, exempted from the UI 200-line ceiling
const EXEMPT_DATA_FILES = new Set([
  "dailyRoutineProcedures.ts",
]);

export function checkModularLimits(root = process.cwd()) {
  const violations = [];

  // Check target individual files
  for (const relPath of TARGET_FILES) {
    const fullPath = path.resolve(root, relPath);
    if (!fs.existsSync(fullPath)) continue;
    const lines = fs.readFileSync(fullPath, "utf-8").split("\n").length;
    if (lines > 200) {
      violations.push({ file: relPath, lines, max: 200 });
    }
  }

  // Check directories
  for (const relDir of TARGET_DIRECTORIES) {
    const fullDir = path.resolve(root, relDir);
    if (!fs.existsSync(fullDir)) continue;
    const entries = fs.readdirSync(fullDir, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.isFile() && !EXEMPT_DATA_FILES.has(ent.name) && (ent.name.endsWith(".tsx") || ent.name.endsWith(".ts"))) {
        const filePath = path.join(fullDir, ent.name);
        const relPath = path.relative(root, filePath).replace(/\\/g, "/");
        const lines = fs.readFileSync(filePath, "utf-8").split("\n").length;
        if (lines > 200) {
          violations.push({ file: relPath, lines, max: 200 });
        }
      }
    }
  }

  return violations;
}

if (process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1]))) {
  const violations = checkModularLimits();
  if (violations.length > 0) {
    console.error("❌ Modular line ceiling violations found (> 200 lines):");
    violations.forEach((v) => console.error(`  - ${v.file}: ${v.lines} lines (ceiling: ${v.max})`));
    process.exit(1);
  } else {
    console.log("✅ All target modules strictly comply with the < 200 lines ceiling.");
    process.exit(0);
  }
}
