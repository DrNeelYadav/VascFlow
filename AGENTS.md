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

### B. Andrej Karpathy & Ponytail Coding Guidelines
1. **Zero-Code Execution Gate (Strict User Approval):** Do NOT write or modify application code without explicit user direction to commence coding. All initial phases must focus strictly on PRD specifications, rules documents, architecture designs, and scrutiny reviews.
2. **Socratic Clarification & Question-Asking Authority:** If any user requirement or architectural decision is ambiguous, underspecified, or complex, the AI MUST halt immediately, formulate targeted clarifying questions (using `ask_question` or structured inquiry), and request user alignment before proceeding.
3. **Mandatory Step 0 Pre-Flight Pre-Loading (Skills, Plugins, MCP Servers, Data Graphers):** Before touching any code, the AI must explicitly pre-load and review all relevant workspace skills (e.g. `healthcare-cdss-patterns`, `react-patterns`, `prisma-patterns`), MCP tools (Postgres, Firebase, Gemini API), and data graphers (`graphify.ai` / `c:\SSO\graphify-out/`, `KNOWLEDGE_GRAPH.md`). The `ponytail` discipline and `graphify` must be active before writing any code.
4. **Simplicity First & Ponytail Discipline:** Implement the absolute minimum amount of code necessary. Maximize output while minimizing tokens. Read before writing, execute single surgical edits, produce zero redundant tokens, and eliminate boilerplate.
5. **Surgical Changes & "See the Design, Don't Change the Design":** Touch only the code and files necessary to complete the task. Respect established clinical layouts, visual hierarchy, spacing rhythms, and borders. Do NOT gratuitously alter or reskin working UI designs.
6. **100–200 Line Document Limit & Custom Hook Extraction:** Every React component and page orchestrator must strictly maintain a size ceiling of ~100–200 lines. Monolithic files (>300 lines) are prohibited. Surgically extract state, clinical handlers, form schemas, and mutations into dedicated custom hooks (`use*.ts`) and modular sub-components.
7. **Goal-Driven Execution:** Transform instructions into concrete, verifiable targets. Always verify type safety (`npx tsc --noEmit`) and tests (`npm test`) before declaring complete.

---

## 2. Design System & Ergonomics Contract (Venus, Shadcn, Radix UI, Framer Motion)

* **Design Token Centralization:** Centralize all theme variables and tactile borders in `tokens.css` rather than scattered global CSS overrides. Guarantee instantaneous, flicker-free light and dark mode switching.
* **Component Primitives (Shadcn + Radix UI):** Build upon accessible, keyboard-navigable Radix UI primitives with Shadcn-inspired compact, high-density styling (`@vascule/ui-kit`).
* **Decoupled UI Hooks Architecture (Anti-Monolithic CSS):** Instead of dumping interactions into `global.css`, encapsulate interactive behaviors into specialized, isolated custom hooks:
  - Button state and haptic feedback hooks (e.g. `useButtonFeedback.ts`)
  - Motion and spring orchestration hooks (e.g. `useFramerSpring.ts`, `useDrawerMotion.ts`)
  - Landing page hero and card interactive hooks (e.g. `useLandingHeroMotion.ts`)
  - Artifact and document preview hooks (e.g. `useDocPreview.ts`)
  - Form validation and input focus hooks (e.g. `useClinicalFormValidation.ts`)
  - Strictly separate UI interaction hooks from domain business logic and data-fetching hooks (`useCasesQuery`, `usePatientsQuery`).
* **Standard Guidelines for SVG Documents & Asset Manifests:**
  - Standardized vector line iconography (stroke-based, 1.5–2.0px stroke-width, `viewBox="0 0 24 24"`, inheriting `currentColor`).
  - Zero reliance on external unverified CDNs. All clinical icons, hospital badges, and system logos must have local verified SVG definitions in `packages/ui-kit` or `/public` asset manifests.
  - Proper ARIA attributes (`aria-hidden="true"` for decorative icons, `role="img"` with `aria-label` for semantic badges).
* **Fluid Micro-Interactions (Framer Motion):** Use Framer Motion (`AnimatePresence`, spring physics, layout animations) for drawer slide-overs, booking modals, tab switches, and notification banners. Ensure all animations respect `prefers-reduced-motion` and maintain 60 FPS in angiosuites.
* **UI/UX ProMax Ergonomics:** Mobile-first responsive layouts with dedicated mobile bottom navigation (`MobileBottomNav`), compact 18–20px iconography, minimum 44px touch targets, zero table overflow, and momentum touch scrolling.

---

## 3. Pre-Task Knowledge Graph Protocol (Graphify.ai)

* **MANDATORY STEP 0:** Before modifying any cross-file dependencies or core symbols (god nodes), query the architecture graph (`c:\SSO\graphify-out/` and `KNOWLEDGE_GRAPH.md`).
* **Dependency Tracing:** Check all call sites for store hooks (`useEndoflowStore`, `useCasesQuery`), clinical calculators (`calculateMacd`, `calculateEgfrCkdEpi2021`), and registry datasets (`GOLD_STANDARD_1090_CASES`) before performing modifications.

---

## 4. Automated Clinical Ingestion Protocol (WhatsApp + Gemini Vision OCR)

* **Zero Manual Intake Friction:** Departmental WhatsApp group integration connects directly to Gemini Vision API (1.5 Flash / 2.0 Flash) to OCR CT console photos, requisition slips, and patient stickers.
* **Strict Privacy & Scope Boundary:** Only whitelisted group IDs are monitored. All personal chats and unlisted groups are ignored.
* **Human-in-the-Loop Verification:** Extracted fields (Patient Name, CR/UHID, Age, Sex, Scan Date, Clinical Indication) populate the `/dashboard/op-clinic` Review Queue as pre-filled drafts for fellow/faculty verification.

---

## 5. MiroFish Multi-Disciplinary Engineering & Clinical Scrutiny Protocol

Before committing to any production architecture or refactor, deploy a MiroFish audit panel representing:
1. **Chief Systems Architect:** Analyzes frontend/backend/database boundaries, service layer decoupling, and architectural tier isolation.
2. **Lead Frontend Engineer:** Audits file size limits (100–200 lines), custom hook extraction, CSS token purity, and SVG asset completeness.
3. **Clinical IR Director:** Evaluates clinical workflow fidelity, 1,090 ground-truth case integrity, and patient safety guardrails.
4. **Security & Compliance Officer:** Validates Indian DISHA, HIPAA, and role-based access control, ensuring zero PHI leaks in telemetry.

---

## 6. Workspace Skills (Antigravity Progressively Disclosed)

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

## 7. Workspace Rules Hierarchy

Located in [`.agents/rules/`](file:///c:/SSO/.agents/rules):
* `rules/graphify-first.md`: Knowledge graph dependency tracing and god-node inspection.
* `rules/typescript/`: Strict typing, zero unchecked `any`, discriminated unions for clinical stages.
* `rules/react/`: Single-responsibility components, memoization hygiene, custom hook extraction.
* `rules/web/`: Mobile-first responsive layouts, design quality, and zero horizontal table overflow.
* `rules/common/`: Code review standards, git workflows, development lifecycles, and security practices.

---

## 8. Verification Commands

Before concluding any feature or refactoring task:
1. **Type Safety:** `npx tsc --noEmit --project apps/web-app/tsconfig.json` (Must exit with code 0).
2. **Automated Unit Tests:** `npm test` (Must pass all suites).
