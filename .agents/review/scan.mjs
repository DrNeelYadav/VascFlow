#!/usr/bin/env node
/**
 * Vascule OS — Deterministic Code Review Scanner
 * Part 1 of the SSO review agent: mechanical, evidence-based checks.
 * Specialist agents (skill: sso-code-review) review the JSON this emits.
 *
 * Usage:  node .agents/review/scan.mjs [--json] [--since N]
 *         node .agents/review/scan.mjs --file <path>   # single-file deep dive
 * Output: findings JSON, one entry per real defect, each with file:line + evidence.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const IGNORE = new Set([
  "node_modules", ".next", ".git", ".turbo", "dist", "archive",
  "_legacy_root_archive", "_legacy_vite_archive", "graphify-out", "public",
  "__pycache__", ".agents", "audit_shots", "figures", "papers",
]);

const SCAN_DIRS = ["apps", "packages", "prisma", "api", "scripts", "cypress"];
const findings = [];
let scanned = 0;

const rel = (p) => relative(ROOT, p).replace(/\\/g, "/");

function add(severity, rule, file, line, message, evidence) {
  findings.push({ severity, rule, file, line, message, evidence: (evidence || "").slice(0, 240) });
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (IGNORE.has(name) || name.startsWith(".") && name !== ".agents") continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if ([".ts", ".tsx", ".js", ".mjs", ".prisma", ".rules"].includes(extname(name))) out.push(full);
  }
  return out;
}

const files = [];
if (process.argv.includes("--file")) {
  const idx = process.argv.indexOf("--file");
  files.push(join(ROOT, process.argv[idx + 1]));
} else {
  for (const d of SCAN_DIRS) walk(join(ROOT, d), files);
}

// Guard recognisers: the direct auth() call AND the project's own access
// helpers in app/lib/auth/clinicalAccess.ts. A route using getVerifiedStaff()
// is authenticated even though `auth()` never appears in the file.
const AUTH_RE = /\b(auth|getServerSession|requireAuth|getToken|currentUser|verifySession|withAuth|getVerifiedStaff|assertStaff|requireStaff|canViewIdentifiableClinicalData)\s*\(|session\?\.user|session\.user/;
const EXPORT_RE = /^export\s+(async\s+)?(function|const)\s+(GET|POST|PUT|PATCH|DELETE|get|post|put|patch|del)/im;
const PHI_RE = /\b(patientName|aadhaar|aadhar|uhid|mrn|abha|phone|contactNumber|address|diagnosis|sex|gender|age)\b/i;

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const lines = src.split(/\r?\n/);
  const r = rel(file);
  scanned++;
  const isRoute = /app\/api\/.*\/route\.(ts|js)$/.test(r);
  const isTest = /(__tests__|\.test\.|\.spec\.)/.test(r);
  const isPrisma = r.endsWith(".prisma");
  const isPageOrComponent = /\/(app|components|src)\/.*\.(tsx|ts)$/.test(r) && !isRoute;

  const linesWith = (re, cb) => lines.forEach((ln, i) => { if (re.test(ln)) cb(ln, i + 1); });

  // --- R1: type safety ---
  linesWith(/:\s*any\b/, (ln, n) => {
    if (/eslint-disable|@ts-ignore/.test(ln)) return;
    add("high", "type-safety/any-usage", r, n, "Explicit `any` erases type guarantees across the call boundary.", ln.trim());
  });
  linesWith(/@ts-ignore(?!-)/, (ln, n) =>
    add("medium", "type-safety/ts-ignore", r, n, "`@ts-ignore` silences the compiler AND hides the next error; `@ts-expect-error` is preferred.", ln.trim()));
  linesWith(/as\s+any\b/, (ln, n) =>
    add("high", "type-safety/unsafe-cast", r, n, "`as any` cast bypasses the type system at a boundary.", ln.trim()));

  // --- R2: authn/authz on API routes ---
  if (isRoute && EXPORT_RE.test(src) && !/\/healthz|\/version|\/nextauth|census\/public/.test(r)) {
    const hasAuth = AUTH_RE.test(src);
    if (!hasAuth) {
      const m = src.match(EXPORT_RE);
      const line = src.slice(0, m.index).split(/\r?\n/).length;
      add("critical", "security/missing-auth", r, line,
        "API route exports an HTTP handler with no auth()/session/verified-staff check anywhere in the file. Any unauthenticated caller can reach this data.", m[0].trim());
    }
  }
  // hardcoded actor fallback = spoofable audit trail
  linesWith(/\|\|\s*"(staff|sms|research|system|admin)[a-z0-9_-]*"/, (ln, n) =>
    add("critical", "security/actor-fallback", r, n,
      "Audit actor falls back to a hardcoded identity when session is absent. Audit trail becomes forgeable and the action is attributed to the wrong person.", ln.trim()));
  linesWith(/session\?\.user\?\.email\s*\|\|\s*(body|params|query|req)/, (ln, n) =>
    add("high", "security/actor-from-input", r, n,
      "Actor identity is taken from the request body when the session lacks an email - client can impersonate any user in the audit log.", ln.trim()));

  // Env var that falls back to a literal secret. Matched across newlines: the
  // declaration and the literal are usually on separate lines.
  {
    const decl = /(?:const|let)\s+(\w*(?:KEY|SECRET|TOKEN|PASSWORD)\w*)\s*=\s*([^;]{0,400});/g;
    let m;
    while ((m = decl.exec(src))) {
      const [, name, body] = m;
      if (isTest) break;
      const fallback = body.match(/\|\|\s*["']([^"']{12,})["']/);
      if (!fallback) continue;
      const line = src.slice(0, m.index).split(/\r?\n/).length;
      add("critical", "security/env-fallback-secret", r, line,
        `\`${name}\` falls back to the hardcoded literal "${fallback[1].slice(0, 24)}…". If the env var is unset in a deployment, verification silently runs against a key committed to git. Remove the fallback and fail closed.`,
        body.trim().replace(/\s+/g, " ").slice(0, 200));
    }
  }
  // --- R3: secrets / PHI leakage ---
  linesWith(/(api[_-]?key|secret|password|token)\s*[:=]\s*["'][A-Za-z0-9_\-]{12,}["']/i, (ln, n) => {
    if (/process\.env|import\.meta\.env|getenv/.test(ln)) return;
    if (isTest || /\.test\./.test(r)) return; // fixtures are not deployed secrets
    add("critical", "security/hardcoded-secret", r, n, "Credential literal in source. Committed to git history and shipped in the client bundle.", ln.trim());
  });
  if (isRoute) {
    linesWith(new RegExp(`NextResponse\\.json\\([^)]*${PHI_RE.source}`, "i"), (ln, n) => {
      if (/redact|mask|count|aggregate/.test(ln)) return;
      add("critical", "security/phi-in-response", r, n,
        "Response body appears to serialise patient identifiers. Verify the payload is aggregate-only or de-identified before it leaves the server.", ln.trim());
    });
  }
  // console logging of PHI
  linesWith(/console\.(log|debug|info|warn|error)\(.*(patient|uhid|aadhaar|abha|phone|diagnos)/i, (ln, n) =>
    add("high", "security/phi-in-logs", r, n, "PHI written to logs. Logs are not a HIPAA-appropriate sink for patient identifiers.", ln.trim()));

  // --- R4: error handling ---
  // An empty catch is only a defect when it hides a FAILED WRITE or a clinical
  // read. Swallowing a localStorage or theme read is correct. Severity and
  // wording depend on which: mislabelling cosmetic catches as clinical-safety
  // defects makes the rule untrustworthy and buries the real ones.
  const CLINICAL_CTX = /\b(prisma|firestore|db\.|tx\b|transaction|mutation|fetch\(|POST|PUT|PATCH|DELETE|inventory|case|patient|stent|coil|hardware|discharge|dose|consent|audit|log)\b/i;
  linesWith(/catch\s*(\([^)]*\))?\s*\{\s*\}/, (ln, n) => {
    const win = lines.slice(Math.max(0, n - 8), n + 2).join(" ");
    if (!CLINICAL_CTX.test(win)) return; // cosmetic swallow
    const isWrite = /\b(prisma|tx|transaction|mutation|\.set\(|\.add\(|\.update\(|\.create\(|POST|PUT|PATCH|DELETE)\b/i.test(win);
    add(isWrite ? "critical" : "high", isWrite ? "reliability/swallowed-write" : "reliability/empty-catch", r, n,
      isWrite
        ? "Empty catch around a state-changing call. The write can fail while the UI reports success - in this codebase that means consumed hardware or a recorded dose that never persisted."
        : "Empty catch around a clinical read; a failure is indistinguishable from 'no data'.",
      ln.trim());
  });
  linesWith(/(await\s+[\w.]+\([^)]*\));/, (ln, n) => {
    if (isTest) return;
    // Only flag when the whole module has no error handling at all; otherwise
    // the try/catch is simply above our 4-line window.
    if (/\btry\s*\{/.test(src) || /\.catch\s*\(/.test(src)) return;
    add("medium", "reliability/unhandled-rejection", r, n,
      "Awaited call in a module with no try/catch or .catch anywhere - an upstream failure becomes an unhandled rejection.", ln.trim());
  });

  // --- R5: clinical safety (this product is patient-facing) ---
  if (isPageOrComponent || isRoute) {
    linesWith(/\bconfirm\s*\(/, (ln, n) => {
      // A confirm() is only a defect when its RESULT is ignored. The common
      // correct form is `if (confirm(...)) {` on one line, so check this line
      // as well as the preceding ones.
      if (/\bif\s*\(\s*[^)]*$/.test(ln) || /\bif\s*\([^)]*confirm/.test(ln)) return;
      if (/\b(if|while)\s*\(\s*$/.test(lines[n - 2] || "")) return;
      const after = lines.slice(n, n + 3).join(" ");
      if (/\bif\s*\(|\breturn\b|\|\|\s*confirm/.test(after)) return;
      add("high", "clinical/ignored-confirmation", r, n,
        "confirm() result appears to be discarded - the destructive action may run even when the clinician cancels.", ln.trim());
    });
  }
  linesWith(/innerHTML|dangerouslySetInnerHTML/, (ln, n) => {
    if (/sanitize|DOMPurify/.test(ln)) return;
    add("high", "security/unsafe-html", r, n, "Raw HTML injection point without sanitisation - stored XSS against clinical workstations.", ln.trim());
  });

  // --- R5b: clinical dose ceilings must have ONE implementation ---
  // A duplicated formula with a different cap is a patient-safety defect, not
  // duplication. The canonical engine is calculateMacd() in lib/calculators.ts
  // (300 mL hard cap, 40 mL when eGFR<30 or Scr>=3.0). Flag any other surface
  // that recomputes it, especially with a default creatinine.
  // Canonical implementations. Other calculator modules are legitimate
  // implementations too - the defect is a *third* divergent copy, so exclude
  // the engines and ignore comment lines.
  const DOSE_ENGINE = /lib\/calculators\.ts|packages\/catalog\/src\/calculators\.ts|procedureCalculators\.ts/;
  const isComment = (s) => /^\s*(\/\/|\*|\/\*)/.test(s) || /\/\//.test(s);
  linesWith(/\(\s*5\s*\*\s*\w*[Ww]eight/, (ln, n) => {
    if (DOSE_ENGINE.test(r)) return;
    if (isComment(ln)) return;
    add("critical", "clinical/duplicate-dose-formula", r, n,
      "Cigarroa MACD recomputed outside the canonical calculateMacd(). The canonical engine enforces a 300 mL hard cap and a 40 mL ceiling for eGFR<30 / Scr>=3.0; this copy enforces neither, so the operator sees a higher ceiling than the guardrail intends.",
      ln.trim());
  });
  linesWith(/[Cc]reatinine\s*(\|\||\?\?)\s*1(\.0)?\b/, (ln, n) => {
    if (DOSE_ENGINE.test(r)) return;
    if (/test|__tests__|spec/.test(r)) return;
    if (isComment(ln)) return;
    add("critical", "clinical/fabricated-clinical-default", r, n,
      "A missing creatinine is substituted with a normal-appearing value. An unmeasured renal function must block or flag, never resolve to 1.0 mg/dL - that silently authorises a full contrast dose for an undiagnosed CKD patient.",
      ln.trim());
  });

  // --- R6: React correctness ---
  if (r.endsWith(".tsx")) {
    linesWith(/useEffect\(\(\)\s*=>\s*\{/, (ln, n) => {
      const body = lines.slice(n - 1, n + 30).join(" ");
      const end = body.indexOf("}, [");
      const deps = end === -1 ? "" : body.slice(end, end + 200);
      if (deps && !/^\s*\}, \[\]\)/m.test(deps.split("\n")[0] || "")) {
        const depLine = body.slice(0, end).split(/\r?\n/).pop();
        if (!/^\s*\}\s*,\s*\[[^\]]+\]\)/.test(depLine || "") && /return|catch|abort/i.test(body) && !/useRef|useCallback/.test(depLine || ""))
          add("medium", "react/effect-deps", r, n,
            "useEffect returns a value or manages async work without an explicit dependency array.", ln.trim());
      }
    });
  linesWith(/\.map\(/, (ln, n) => {
    if (!/=>|<[A-Za-z]/.test(ln)) return;                 // not an element render
    const ctx = lines.slice(Math.max(0, n - 2), n + 2).join(" ");
    if (/\bkey=/.test(ctx)) return;
    if (/isLoading|isError|\.filter\(|\.map\(/.test(ln)) return; // intermediate chain, not JSX
    add("low", "react/missing-key", r, n, "List render without a stable `key` on the element.", ln.trim());
  });
  }

  // --- R7: data & schema integrity ---
  if (isPrisma) {
    let reported = 0;
    linesWith(/^\s{2,4}\w+\s+(String|DateTime)\s*\??\s*$/, (ln, n) => {
      if (/@unique|@id|updatedAt|createdAt/.test(ln)) return;
      if (reported >= 8) return; // cap so one schema can't flood the report
      reported++;
      add("medium", "data/unindexed-field", r, n,
        "Queryable scalar without an index - filters on this field will table-scan as the patient dataset grows.", ln.trim());
    });
  }
  linesWith(/\.deleteMany\(|\.updateMany\(/, (ln, n) => {
    if (/where/.test(lines[n] || "")) return;
    if (/prisma\/seed\.ts|\/seed\.ts$|\/__tests__\//.test(r)) return; // intentional truncation in seed
    add("critical", "data/unbounded-write", r, n, "Bulk write with no `where` clause - would affect every row.", ln.trim());
  });

  // --- R7b: clinical write safety: idempotency & bounded retry ---
  // A retried POST with no idempotency key double-applies. In this codebase
  // that means a stent consumed twice, or a dose recorded twice.
  if (isRoute && !isTest) {
    if (EXPORT_RE.test(src) && /\.(post|POST)\b/i.test(src) && !/idempotency|Idempotency|requestId|dedupe/i.test(src)) {
      if (/inventory|hardware|use|deplete|discharge|consent|case/i.test(r)) {
        const m = src.match(EXPORT_RE);
        const line = src.slice(0, m.index).split(/\r?\n/).length;
        add("critical", "clinical/no-idempotency", r, line,
          "Clinical POST with no idempotency key. This route is retried by lib/offlineQueue.ts on a lost response, so a request that already committed gets applied a second time.",
          m[0].trim());
      }
    }
  }
  // Offline queue must bound its retries, or a permanently failing mutation
  // replays forever and silently double-applies.
  if (/lib\/offlineQueue\.ts$/.test(r)) {
    linesWith(/retryCount\s*[:+]/, (ln, n) => {
      // `retryCount: number;` is a type declaration, and `retryCount: 0` is
      // initialisation - neither is an unbounded increment.
      if (/:\s*number\s*;?$/.test(ln)) return;
      if (/:\s*0\s*[,;]?$/.test(ln)) return;
      if (/>\s*\d|MAX_RETRIES|<\s*\d|<=\s*\d/.test(ln)) return;
      add("critical", "reliability/unbounded-retry", r, n,
        "retryCount is incremented but never compared against a maximum. A mutation that keeps failing is replayed indefinitely; on a non-idempotent clinical POST that double-applies the effect.",
        ln.trim());
    });
  }
  // Promise.race cannot cancel the loser: if the timeout wins, the abandoned
  // transaction may still commit after the fallback path has already run.
  linesWith(/Promise\.race\(/, (ln, n) => {
    if (isTest) return;
    const win = lines.slice(Math.max(0, n - 6), n + 14).join(" ");
    if (/prisma|firestore|transaction|\btx\b|runTransaction/i.test(win)) {
      add("critical", "reliability/uncancellable-race", r, n,
        "Promise.race around a database transaction. The loser is not cancelled, so the abandoned transaction can still commit after the fallback path has written the same change - two writes, two databases, one physical item.",
        ln.trim());
    }
  });

  // --- R8: language law (project rule: 100% English) ---
  linesWith(/[\u0900-\u097F]/, (ln, n) =>
    add("medium", "i18n/hindi-text", r, n, "Devanagari text violates the project's 100% English code law.", ln.trim()));

  // --- R9: build hygiene ---
  linesWith(/\bconsole\.(log|debug)\(/, (ln, n) => {
    if (isTest || /scripts/.test(r)) return;
    add("low", "hygiene/console-debug", r, n, "Debug logging left in production path.", ln.trim());
  });
  const loc = lines.length;
  if (loc > 600) add("medium", "hygiene/oversized-module", r, 1, `Module is ${loc} lines. Above ~400 it resists review and is the usual source of god components.`, `wc -l = ${loc}`);

  // --- R10: dead code / legacy leakage ---
  if (/\/archive\/|_legacy/.test(r)) add("info", "hygiene/legacy-path", r, 1, "Archived/legacy code is inside the scan path. Exclude it so findings stay actionable.", r);
}

// --- R11: gate integrity: the project's own CI must be able to run ---
// A security workflow that targets paths which do not exist fails on every push
// and trains the team to ignore red builds.
{
  const wfDir = join(ROOT, ".github/workflows");
  if (existsSync(wfDir)) {
    for (const name of readdirSync(wfDir).filter((n) => /\.ya?ml$/.test(n))) {
      const wf = readFileSync(join(wfDir, name), "utf8").split(/\r?\n/);
      wf.forEach((ln, i) => {
        // cd services/<x> && ...  or docker build ... services/<x>
        const ref = ln.match(/(?:^|\s)services\/([a-z0-9-]+)/i);
        if (!ref) return;
        if (existsSync(join(ROOT, "services", ref[1]))) return;
        add("critical", "ci/phantom-path", `.github/workflows/${name}`, i + 1,
          `Workflow references services/${ref[1]}, which does not exist. This job fails on every run; a permanently red security pipeline gets ignored, which is the same as having none.`,
          ln.trim());
      });
    }
  }
}

// --- R12: typecheck must pass (project law: verify via tsc before "done") ---
// `npx` is a shell wrapper and fails to spawn from Node on Windows, so invoke
// the local tsc entrypoint directly.
if (!process.argv.includes("--no-typecheck")) {
  const tscJs = join(ROOT, "node_modules/typescript/lib/tsc.js");
  const runTsc = () =>
    execFileSync(process.execPath, [tscJs, "--noEmit", "--project", "apps/web-app/tsconfig.json"], {
      cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 300000,
    });
  if (existsSync(tscJs)) {
    let out = "";
    try {
      out = runTsc();
    } catch (e) {
      out = `${e.stdout || ""}`;
    }
    const errs = out.split(/\r?\n/).filter((l) => /error TS\d+/.test(l));
    errs.slice(0, 10).forEach((er) => {
      const m = er.match(/^([^(]+)\((\d+),\d+\):\s*(.*)$/);
      if (m) add("critical", "gate/typecheck-failure", m[1], Number(m[2]),
        "TypeScript error. rules.md mandates `npx tsc --noEmit` before any change is declared complete; this does not compile.", m[3]);
    });
    if (errs.length > 10) add("critical", "gate/typecheck-failure", "apps/web-app", 0, `+${errs.length - 10} further type errors (see \`npm run typecheck\`).`, "");
    if (!errs.length) add("info", "gate/typecheck-pass", "apps/web-app", 0, "`tsc --noEmit` is clean.", "");
  } else {
    add("info", "gate/typecheck-skipped", "apps/web-app", 0, "TypeScript is not installed, so the mandatory typecheck gate could not run.", "");
  }
}

// --- R13: tests must pass (project law: verify via the test suite) ---
if (!process.argv.includes("--no-tests")) {
  const vitestJs = join(ROOT, "node_modules/vitest/vitest.mjs");
  if (existsSync(vitestJs)) {
    let out = "";
    try {
      out = execFileSync(process.execPath, [vitestJs, "run"], {
        cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 420000,
      });
    } catch (e) {
      out = `${e.stdout || ""}`;
    }
    const failedFiles = [...out.matchAll(/(?:FAIL|❯)\s+(\S+\.test\.tsx?)/g)].map((m) => m[1]);
    const uniq = [...new Set(failedFiles)];
    uniq.slice(0, 8).forEach((f) =>
      add("critical", "gate/test-failure", f, 0,
        "Failing test file. rules.md requires the test suite to pass before a change is declared complete; a red suite makes every 'done' claim unverifiable.",
        "npm test"));
    const summary = out.match(/Test Files\s+(.+)/);
    if (summary) add(summary[1].includes("failed") ? "critical" : "info", "gate/test-summary", "apps/web-app", 0,
      `Test suite state: ${summary[1].trim()}`, summary[0]);
    if (!uniq.length && !summary?.includes("failed")) add("info", "gate/test-summary", "apps/web-app", 0, "Test suite is green.", "");
  } else {
    add("info", "gate/tests-skipped", "apps/web-app", 0, "Vitest is not installed, so the test gate could not run.", "");
  }
}

// --- R11b: secret files tracked in git ---
try {
  const tracked = execFileSync("git", ["ls-files"], { cwd: ROOT, encoding: "utf8" }).split(/\r?\n/);
  for (const f of tracked) {
    if (/(^|\/)\.env(\.|$)/.test(f) && !/example|sample|template/.test(f))
      add("critical", "security/env-tracked", f, 1, "Real .env file is tracked by git - rotate every credential it contains.", f);
    if (/\.(pem|key|p12|pfx)$/.test(f)) add("critical", "security/key-tracked", f, 1, "Private key committed to the repository.", f);
  }
} catch { /* not a git repo - skip */ }

const SEV = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
findings.sort((a, b) => SEV[a.severity] - SEV[b.severity] || a.file.localeCompare(b.file) || a.line - b.line);

// Deduplicate: one finding per (rule, file) for line-level rules, keeping the
// first N lines of evidence. Keeps a 300-hit rule from burying real signal.
const CAP = 5;
const seen = new Map();
const deduped = [];
for (const f of findings) {
  const key = `${f.rule}::${f.file}`;
  const n = seen.get(key) || 0;
  if (n >= CAP) continue;
  seen.set(key, n + 1);
  deduped.push(n < CAP - 1 ? f : { ...f, evidence: f.evidence + ` (+${findings.filter((x) => x.rule === f.rule && x.file === f.file).length - CAP} more in this file)` });
}
const capped = deduped.sort((a, b) => SEV[a.severity] - SEV[b.severity] || a.file.localeCompare(b.file) || a.line - b.line);

const summary = capped.reduce((acc, f) => ((acc[f.severity] = (acc[f.severity] || 0) + 1), acc), {});
const report = { root: ROOT, scannedFiles: scanned, total: capped.length, rawTotal: findings.length, summary, findings: capped };

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`Vascule OS review scan  |  ${scanned} files  |  ${report.total} findings (${findings.length} raw, deduped per rule+file)`);
  console.log(Object.entries(summary).map(([k, v]) => `${k}: ${v}`).join("  "));
  console.log("");
  for (const f of capped) {
    console.log(`${f.severity.toUpperCase().padEnd(8)} ${f.rule.padEnd(34)} ${f.file}:${f.line}`);
    console.log(`         ${f.message}`);
    if (f.evidence) console.log(`         > ${f.evidence}`);
  }
}
process.exit(findings.some((f) => f.severity === "critical") ? 2 : 0);
