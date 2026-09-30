#!/usr/bin/env node
/**
 * Renders the scanner JSON into a reviewable Markdown report grouped by
 * severity, with a triage table. Usage:
 *   node .agents/review/scan.mjs --json > sso-scan.json
 *   node .agents/review/report.mjs [sso-scan.json] [OUT.md]
 */
import { readFileSync, writeFileSync } from "node:fs";

const inPath = process.argv[2] || "sso-scan.json";
const outPath = process.argv[3] || "REVIEW.md";
const r = JSON.parse(readFileSync(inPath, "utf8"));

const LABEL = {
  critical: "Critical - ship blocker",
  high: "High - fix before merge",
  medium: "Medium - schedule",
  low: "Low - opportunistic",
};
const bySev = ["critical", "high", "medium", "low"];
const groups = {};
for (const f of r.findings) (groups[f.rule] ||= []).push(f);

const ruleCounts = {};
for (const f of r.findings) ruleCounts[f.rule] = (ruleCounts[f.rule] || 0) + 1;

let md = `# SSO Code Review - Deterministic Scan

**Scope** \`${r.root}\` - ${r.scannedFiles} TypeScript/Prisma files
**Findings** ${r.total} (${r.rawTotal} raw, deduplicated to max 5 per rule per file)
**Generated** by \`.agents/review/scan.mjs\`

| Severity | Count |
|---|---|
${bySev.map((s) => `| ${LABEL[s]} | ${r.summary[s] || 0} |`).join("\n")}

## Rule histogram

| Rule | Findings |
|---|---|
${Object.entries(ruleCounts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| \`${k}\` | ${v} |`).join("\n")}

## Triage index

| # | Severity | Rule | Location | Issue |
|---|---|---|---|---|
${r.findings.map((f, i) => `| ${i + 1} | ${f.severity} | \`${f.rule}\` | \`${f.file}:${f.line}\` | ${f.message.replace(/\|/g, "\\|")} |`).join("\n")}
`;

md += "\n## Detail by severity\n";
for (const sev of bySev) {
  const items = r.findings.filter((f) => f.severity === sev);
  if (!items.length) continue;
  md += `\n### ${LABEL[sev]} (${items.length})\n\n`;
  for (const f of items) {
    md += `**\`${f.file}:${f.line}\`** - \`${f.rule}\`\n\n${f.message}\n\n`;
    if (f.evidence) md += `\`\`\`\n${f.evidence}\n\`\`\`\n\n`;
  }
}

md += `\n---\n\nStatic analysis only. Every item needs a human confirm/deny: scanners cannot\ntell an intentional trade-off from a defect. Specialist agents\n(\`skill: sso-code-review\`) adjudicate and add the design-level findings a\nregex cannot see.\n`;

writeFileSync(outPath, md, "utf8");
console.log(`Wrote ${outPath} (${r.total} findings, ${md.length} chars)`);
