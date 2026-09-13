# VASCULE OS: 1,000-ENGINEER ENTERPRISE ARCHITECTURE & OPERATIONAL LAWS
## Next.js + Golang Microservices Monorepo Standard

These architectural laws and operational protocols govern all system engineering, agent orchestration, and code delivery across the **Vascule OS** enterprise platform.

---

## 1. Skill 1 - Andrej Karpathy LLM Coding Paradigm
- **Think Before Coding**: Analyze data flows, state dependencies, and clinical guardrails before writing code. Explicitly state assumptions and surface ambiguity.
- **Simplicity First**: Implement the absolute minimum amount of code necessary. Avoid speculative abstractions, unnecessary flexibility, or unrequested features.
- **Surgical Precision**: Touch only the code and files necessary to complete the task. Maintain existing codebase comments and docstring integrity.
- **Zero Placeholders**: Never write `// TODO`, `// Implement here`, or partial code blocks. All code must be complete, functional, and strictly typed.
- **Goal-Driven Execution & Verification**: Verify all changes via `npx tsc --noEmit` and unit/integration test suites before declaring tasks complete.

---

## 2. Skill 2 - Mandatory Subagent Orchestration Protocol
The Lead AI Orchestrator must **never** operate as a single monolithic developer for complex enterprise tasks. All multi-step workflows, service implementations, and architectural pivots **must explicitly deploy specialized sub-agents** in parallel via `invoke_subagent`:

1. **`architect-agent`**:
   - Authors Product Requirements Documents (PRDs) and 2-page Requests for Comments (RFCs).
   - Specifies database schemas, gRPC Protobuf contracts, and OpenAPI 3.1 REST interfaces.
2. **`frontend-agent`**:
   - Develops Next.js 14 (App Router) edge-rendered applications in `apps/web-app` and `apps/public-site`.
   - Assembles UI exclusively from `@vascule/ui-kit` (Radix Primitives, Tailwind tokens).
   - Implements the Vascule OS Mobius loop branding in OLED Black (`#000000`) and Medical Cobalt (`#2563EB`).
3. **`golang-backend-agent`**:
   - Implements high-concurrency microservices in `services/`:
     - `auth-service` (JWT, OAuth2/OIDC, Role-Based Access Control).
     - `patient-service` (HL7 v2.x streams, FHIR R4 resources, DICOM Part 10 ingestion).
     - `scheduling-service` (Goroutine event loops, WebSocket broadcast, OT conflict engines).
4. **`knowledge-graph-agent` (`graphify-windows`)**:
   - Executes the `/graphify-windows` skill to generate, update, and query the codebase knowledge graph (`graphify-out/`).
   - Surfaces god nodes, structural dependencies, and cross-service boundary issues.
5. **`clinical-dataset-agent` (`ponytail`)**:
   - Performs deep-scraping and normalization of authoritative ontologies and public medical datasets:
     - **MIMIC-IV** (vitals, lab metrics, electronic clinical records).
     - **TCIA** (The Cancer Imaging Archive: cross-sectional CTA/DSA DICOM image sets).
     - **RadLex** (Radiology Lexicon standardized interventional terminology).
     - **ICD-10 / SNOMED CT** (type-safe diagnosis and procedural codes).
     - **CIRSE / SIR / RERC Guidelines** (evidence-based clinical practice guidelines).
6. **`qa-security-agent`**:
   - Shift-left security: Automated HIPAA/SOC2 compliance checks, SAST, and dependency auditing.
   - Executes Vitest suites, end-to-end integration workflows, and performance benchmarking.

---

## 3. Skill 3 - Graphify Knowledge Graph Protocol (`/graphify-windows`)
- **Continuous Knowledge Graphing**: Use `/graphify-windows` to transform code, contracts, and documentation into a persistent knowledge graph (`graphify-out/graph.json`, `graph.html`, and `GRAPH_REPORT.md`).
- **Semantic Code Queries**: When analyzing architectural dependencies or cross-service communication, query the graph directly:
  ```bash
  graphify query "<question>"
  graphify path "<SourceService>" "<TargetService>"
  ```
- **Integrity Gates**: Run Step 4.5 health checks on extractions to prevent dangling endpoints, collapsed edges, or cyclic dependency leaks.

---

## 4. Skill 4 - Ponytail Deep-Scraping Protocol (`/ponytail`)
- **Authoritative Extraction**: When ingesting medical guidelines (CIRSE, SIR, RERC, ICMR, DGHS) or hospital tariffs, structurally extract and normalize all criteria into typed TypeScript interfaces and relational schemas.
- **Categorical Evidence Grading**: Categorize indications, contraindications, technical success thresholds, complication rates, and Clavien-Dindo / CIRSE complication grades without ambiguity.

---

## 5. Vascule OS Product Architecture & Identity (Day Zero PRD)
- **Product Name**: **Vascule OS**
- **Brand Monogram**: Minimalist geometric Mobius strip / continuous loop in OLED Black (`#000000`) and Medical Cobalt (`#2563EB`), symbolizing laminar blood flow and infinite data interoperability. No literal stethoscopes or crosses.
- **Tagline**: *The speed of thought in the Angio Suite.*
- **Core Mission**: Eliminate physician cognitive load and duplicate typing in high-stress, low-light interventional suites through a zero-latency, offline-capable clinical OS.
- **Success Metrics (KPIs)**:
  - **Latency**: Time-to-interactive (TTI) < 1.2s on standard hospital networks.
  - **Adoption**: 90% reduction in dual-entry typing to state EMR/IHMS systems.
  - **Safety**: 100% automated CI-AKI and Cigarroa MACD contrast ceiling alerts.

---

## 6. Monorepo Structure (`vascule-os-monorepo`)
All enterprise repositories must strictly conform to the Turborepo workspace topology:
```text
vascule-os-monorepo/
├── apps/
│   ├── web-app/               # Next.js 14 (App Router) - The main clinical suite
│   ├── public-site/           # Next.js 14 - Fast, SEO-optimized landing page
│   └── mobile-app/            # React Native (Expo) - For morning ward rounds
├── packages/
│   ├── ui-kit/                # Shared Radix / Shadcn UI primitives & Mobius components
│   ├── design-tokens/         # Shared CSS variables & Google/Vascule design tokens
│   ├── clinical-math/         # Framework-agnostic TS math formulas (eGFR, MACD, MELD 3.0)
│   ├── dicom-engine/          # WebAssembly (Rust/C++) DICOM parser & WADO-RS client
│   └── eslint-config/         # Firm-wide strict linting & TypeScript rules
├── services/                  # Golang Microservices
│   ├── auth-service/          # JWT, SSO, RBAC logic & institutional auth
│   ├── patient-service/       # HL7 v2 / FHIR R4 ingestion engine & lab streams
│   └── scheduling-service/    # Holiday matrices & OT conflict resolution
└── infrastructure/
    └── terraform/             # AWS / GCP cloud infrastructure as code
```

---

## 7. The 1,000-Engineer Playbook (Best Practices)
1. **RFCs (Request for Comments) Before Code**:
   - No feature is built without a 2-page RFC document detailing database schema changes, API contracts, and security implications.
2. **Design System Driven**:
   - Engineers do not write bespoke CSS. All components must be assembled from pre-approved tokens and primitives in `packages/ui-kit`.
3. **Feature Flags**:
   - Continuous deployment with canary rollouts (LaunchDarkly pattern) to deploy code safely behind feature toggles.
4. **Shift-Left Security**:
   - Automated SOC2 / HIPAA compliance audits, static application security testing (SAST), and dependency vulnerability scans on every pull request.
5. **Observability & Telemetry**:
   - Distributed tracing and latency tracking with automated alerts for any performance degradation.

---

## 8. Decluttering, AI Slot Removal & Language Laws
- **Blank Canvas Standard**: Default dashboard must remain as clean, inviting, and uncluttered as an open Google Doc.
- **Action-First Simplicity**: Main screen defaults to primary actions: **"Book a Case"** and **"Admit a Case"**.
- **No Verbose Jargon**: Zero marketing buzzwords ("Jaipur hub", "Command Suit", "AI slots", "1-click IHMS").
- **Language Constraint**: Strictly 100% English across all UI labels, code comments, tests, and documentation. Zero Hindi.
