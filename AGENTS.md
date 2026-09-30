# VascFlow (EndoIR) — Antigravity Engineering & Clinical Rules
**Institution:** SMS Medical College & Attached Hospitals, Jaipur  
**Domain:** Interventional Radiology (IR) Angiosuites & Inpatient Wards  
**Platform:** Next.js 16 (App Router, Turbopack), TypeScript, React 18, Tailwind CSS, Prisma, PostgreSQL, Vitest  

---

## 1. Core Operating Principles

### A. Clinical Safety First (Zero-Tolerance for Silent Failures)
* **No Phantom Data:** Never invent, hallucinate, or hardcode fake lab values (e.g. INR, Creatinine, Bilirubin, Platelets) or patient vitals.
* **Deterministic Math:** Clinical scores (Rotterdam BCS-PI, Clichy, MELD/MELD-Na, Cigarroa CI-AKI MACD limit, C/RL ratios) MUST be deterministic pure functions with unit tests.
* **Traceable Reference Badges:** Clearly distinguish authoritative reference standards (`[REF]`), institutional Rajasthan MAAY/IHMS protocols (`[INST]`), and deterministic calculation outputs (`[CALC]`).
* **DISHA & PHI Compliance:** Adhere to Indian DISHA & digital health data safeguards. De-identify patient data in logs and client telemetry.

### B. Andrej Karpathy Coding Guidelines
1. **Think Before Coding:** Explicitly state assumptions, surface ambiguity, and request user clarification before writing code.
2. **Simplicity First:** Implement the absolute minimum amount of code necessary to resolve the task at hand. Avoid speculative abstractions or decorative AI bloat.
3. **Surgical Changes:** Touch only the code and files necessary to complete the task. Maintain existing codebase comments and docstrings.
4. **Goal-Driven Execution:** Transform instructions into concrete, verifiable targets. Always verify type safety (`npx tsc --noEmit`) and tests (`npm test`) before declaring complete.

---

## 2. Workspace Skills (Antigravity Progressively Disclosed)

Located in [`.agents/skills/`](file:///c:/SSO/.agents/skills):

| Skill Name | Purpose in VascFlow |
| :--- | :--- |
| `healthcare-cdss-patterns` | Clinical Decision Support System patterns, drug interactions, dose validation, scoring alerts |
| `healthcare-emr-patterns` | EMR/EHR workflows, encounter UX, prescription kits, and single-page clinical forms |
| `healthcare-phi-compliance` | DISHA, HIPAA, and GDPR PHI protection, schema tagging, and audit trail enforcement |
| `healthcare-eval-harness` | Healthcare evaluation harness, deterministic formula verification, clinical safety benchmarking |
| `nextjs-turbopack` | Next.js App Router patterns, Turbopack optimization, server/client boundary architecture |
| `prisma-patterns` | Prisma ORM schema design, connection pooling, migrations, and atomic transactions |
| `postgres-patterns` | PostgreSQL query optimization, indexing, schema design, and row-level security |
| `react-patterns` | Modern React 18 component patterns, state containment, and custom hooks |
| `react-performance` | Virtualization, re-render elimination, and clinical dashboard performance |
| `react-testing` | Vitest, React Testing Library, mock isolation, and component test suites |
| `tdd-workflow` | Test-Driven Development (Red $\rightarrow$ Green $\rightarrow$ Refactor) |
| `api-design` | RESTful route handlers, Zod request/response validation, and standard error envelopes |
| `backend-patterns` | Clean architectural layering, service layer boundaries, and resilience |
| `frontend-patterns` | Modern frontend architecture, responsive layouts, and state management |
| `e2e-testing` | Playwright end-to-end integration workflows |
| `accessibility` | WCAG 2.1 AA clinical workstation accessibility, keyboard traps, and contrast compliance |
| `security-review` | OWASP Top 10 auditing, authentication verification, and vulnerability scanning |
| `continuous-learning-v2` | Project knowledge retention and convention persistence |

---

## 3. Workspace Rules Hierarchy

Located in [`.agents/rules/`](file:///c:/SSO/.agents/rules):
* `rules/typescript/`: Strict typing, zero unchecked `any`, discriminated unions for clinical stages.
* `rules/react/`: Single-responsibility components, memoization hygiene, accessibility hooks.
* `rules/web/`: Mobile-first responsive layouts, design quality, and zero horizontal table overflow.
* `rules/common/`: Code review standards, git workflows, development lifecycles, and security practices.

---

## 4. Verification Commands

Before concluding any feature or refactoring task:
1. **Type Safety:** `npx tsc --noEmit --project apps/web-app/tsconfig.json` (Must exit with code 0).
2. **Automated Unit Tests:** `npm test` (Must pass all suites).
