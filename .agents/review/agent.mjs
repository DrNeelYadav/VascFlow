#!/usr/bin/env node
/**
 * SSO Review Agent - orchestrator entry point.
 *
 *   node .agents/review/agent.mjs              # full review (scanner + specialist agents)
 *   node .agents/review/agent.mjs --scan-only  # deterministic pass only, no LLM
 *   node .agents/review/agent.mjs --scope api  # only findings under apps/web-app/app/api
 *   node .agents/review/agent.mjs --git-range A..B   # review a diff instead of the tree
 *
 * Exit codes: 0 clean, 1 usage error, 2 critical findings present (CI gate).
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const args = process.argv.slice(2);
const scanOnly = args.includes("--scan-only");
const arg = (flag) => (args.includes(flag) ? args[args.indexOf(flag) + 1] : null);

const SCAN = ".agents/review/scan.mjs";
const REPORT = ".agents/review/report.mjs";
const JSON_OUT = "sso-scan.json";
const MD_OUT = "REVIEW.md";

function run(cmd, cmdArgs, opts = {}) {
  try {
    return execFileSync(cmd, cmdArgs, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...opts });
  } catch (e) {
    // Scanner exits 2 on criticals; that is a finding, not a crash.
    if (e.status === 2 && e.stdout) return e.stdout;
    throw e;
  }
}

console.log("[1/3] deterministic scan ...");
const raw = run("node", [SCAN, "--json"], { stdio: ["ignore", "pipe", "inherit"] });
const report = JSON.parse(raw);
writeFileSync(JSON_OUT, JSON.stringify(report, null, 2));
run("node", [REPORT, JSON_OUT, MD_OUT]);

// Optional narrowing so a full-tree review stays readable.
const scope = arg("--scope");
let findings = report.findings;
if (scope) {
  findings = findings.filter((f) => f.file.includes(scope));
  console.log(`      scope "${scope}" -> ${findings.length} findings`);
}
const gitRange = arg("--git-range");
if (gitRange) {
  const changed = new Set(
    run("git", ["diff", "--name-only", gitRange]).split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
  );
  const before = findings.length;
  findings = findings.filter((f) => changed.has(f.file));
  console.log(`      diff ${gitRange} -> ${findings.length}/${before} findings in changed files`);
}

const bySev = (s) => findings.filter((f) => f.severity === s);
console.log(`      ${findings.length} findings: ${bySev("critical").length} critical, ${bySev("high").length} high, ${bySev("medium").length} medium, ${bySev("low").length} low`);

if (scanOnly) {
  console.log(`[3/3] scan-only mode - wrote ${MD_OUT} and ${JSON_OUT}`);
  process.exit(bySev("critical").length ? 2 : 0);
}

// Hand the scanner output to specialist agents. Each agent receives the
// findings it owns plus the repo context, and adjudicates each one by reading
// the source. See the sso-code-review skill for the agent roster and the
// severity contract they must honour.
const briefing = {
  root: report.root,
  scannedFiles: report.scannedFiles,
  scope: scope || gitRange || "full tree",
  severityContract: {
    critical: "Ship blocker: patient-safety, PHI exposure, auth bypass, or data loss.",
    high: "Merge blocker: correctness or maintainability defect with a concrete failure mode.",
    medium: "Scheduled: real but contained, or a convention breach.",
    low: "Opportunistic.",
  },
  rules: {
    note: "Every scanner finding is a CLAIM, not a verdict. Adjudicate by reading the file.",
    severity: "Re-derive severity from the contract above. Downgrade or dismiss false positives explicitly and say why.",
  },
  counts: Object.fromEntries(["critical", "high", "medium", "low"].map((s) => [s, bySev(s).length])),
};
writeFileSync(".agents/review/briefing.json", JSON.stringify(briefing, null, 2));
console.log(`[2/3] briefing written to .agents/review/briefing.json`);
console.log(`[3/3] deterministic pass complete. Specialist agents (skill: sso-code-review)`);
console.log(`      adjudicate these findings and add design-level issues.`);
console.log(`      Machine output: ${MD_OUT}, ${JSON_OUT}`);

process.exit(bySev("critical").length ? 2 : 0);
