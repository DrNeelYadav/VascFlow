# VASCULE OS: PRODUCT REQUIREMENTS DOCUMENT (PRD) & ARCHITECTURE BLUEPRINT
## Document Version: 1.0.0-PROD | Status: Approved Baseline | Audience: Enterprise Engineering

---

## Executive Overview
**Vascule OS** is a high-concurrency, edge-rendered clinical operating system purpose-built for Interventional Radiology (IR), Cath Lab suites, and Angio OT environments. Designed for a 1,000-engineer enterprise organization, it combines a Next.js 14 edge frontend with Golang high-throughput microservices orchestrated within a Turborepo monorepo.

---

## Phase 1: Product Requirements Document (PRD) Blueprint

### 1. Identity & Branding
* **Product Name**: **Vascule OS**
* **Brand Concept**: Minimalist, geometric **Mobius strip** / continuous loop rendered in pure **OLED Black (`#000000`)** and **Medical Cobalt (`#2563EB`)**. The Mobius strip represents continuous, laminar vascular flow and infinite bidirectional clinical data interoperability. No literal stethoscopes, red crosses, or cluttered icons.
* **Tagline**: *The speed of thought in the Angio Suite.*
* **Design Language**: Hyper-minimalist, high-contrast monochrome canvas (`#FFFFFF` light mode, `#000000` Cath Lab OLED dark mode) with Google Workspace / Material Design 3 elevation standards.

```svg
<!-- Vascule OS Minimalist Mobius Strip Monogram -->
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
  <path d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="16 8"/>
  <circle cx="24" cy="24" r="3" fill="#2563EB"/>
</svg>
```

### 2. Core Objectives & Scope
* **The Problem**: Existing hospital RIS and EMR systems impose severe cognitive friction and manual typing overhead on interventionalists and residents in dim, sterile environments, leading to burnout, procedural documentation delays, and missing contrast safety guardrails.
* **The Solution**: A zero-latency, offline-capable clinical OS that automates scheduling and rounds logging, enforces real-time biometric and contrast ceilings (Cigarroa MACD, CI-AKI risk, Child-Pugh, MELD 3.0), and provides a bidirectional bridge to state health and EMR systems.
* **Target Audience**: Interventional Radiologists, Fellows, Senior Residents, Cath Lab Technicians, Nursing Officers, and Clinical Administrators.

### 3. Success Metrics (KPIs)
| KPI Metric | Target Threshold | Measurement Methodology |
|---|---|---|
| **Latency (TTI)** | **< 1.2 seconds** | Web Vitals Time-to-Interactive on hospital Wi-Fi / LTE |
| **EMR Dual-Entry Reduction** | **&ge; 90% reduction** | Automated single-click structured JSON / FHIR serialization |
| **Safety Guardrail Accuracy** | **100% automated enforcement** | Automated Cigarroa MACD contrast volume & CI-AKI guardrails |
| **System Uptime** | **99.99% Availability** | Multi-region edge deployment with offline service workers |

---

## Phase 2: Enterprise Monorepo Topology

The platform is structured as a **Turborepo** monorepo allowing 1,000 engineers across Frontend, Backend, Mobile, and QA teams to collaborate with shared type definitions, linting, and build caching:

```text
vascule-os-monorepo/
├── apps/
│   ├── web-app/               # Next.js 14 (App Router) - The primary clinical suite
│   ├── public-site/           # Next.js 14 - Edge-rendered landing, documentation, and API docs
│   └── mobile-app/            # React Native (Expo) - Mobile ward rounds & resident on-call companion
├── packages/
│   ├── ui-kit/                # Shared Radix / Shadcn UI primitives & Mobius components
│   ├── design-tokens/         # Shared CSS variables & Google/Vascule design tokens
│   ├── clinical-math/         # Framework-agnostic TS math formulas (eGFR, MACD, MELD 3.0)
│   ├── dicom-engine/          # WebAssembly (Rust/C++) DICOM parser & WADO-RS client
│   └── eslint-config/         # Firm-wide strict linting & TypeScript rules
├── services/                  # Golang Microservices
│   ├── auth-service/          # JWT, SSO, OAuth2/OIDC, Role-Based Access Control
│   ├── patient-service/       # HL7 v2 / FHIR R4 ingestion engine & lab streams
│   └── scheduling-service/    # Holiday matrices, goroutine event loops & OT conflict resolution
└── infrastructure/
    └── terraform/             # AWS / GCP cloud infrastructure as code (EKS, Cloud Run, RDS)
```

### Microservice Division of Responsibilities
* **Frontend Layer (Next.js 14 App Router)**: Edge-rendered UI, React Server Components (RSC), SSR for fast initial paint, offline service workers, and client-side reactive state via Zustand.
* **Backend Microservices (Golang)**:
  * `auth-service` (Go 1.22 + Gin/gRPC): High-performance session validation, mTLS inter-service auth, JWT signing.
  * `patient-service` (Go 1.22): Parses real-time HL7 v2 `ORM^O01` / `ORU^R01` streams, validates FHIR R4 resources, handles DICOM metadata extraction.
  * `scheduling-service` (Go 1.22): Manages concurrent OT slot locks, evaluates 2026 holiday matrices, and broadcasts real-time updates via WebSockets.

---

## Phase 3: Public Medical Datasets for AI & Bootstrapping

To build enterprise intelligence without violating patient privacy (HIPAA / GDPR / DISHA), the platform is bootstrapped using vetted open medical datasets:

1. **MIMIC-IV (Medical Information Mart for Intensive Care)**:
   * **Application**: Real-world de-identified critical care records used to train predictive algorithms for CI-AKI onset, post-embolization syndrome recovery, and lab trajectory forecasting.
2. **TCIA (The Cancer Imaging Archive)**:
   * **Application**: Massive cross-sectional CTA, MRA, and DSA radiological image archives used to validate the Wasm DICOM viewer, window level presets, and 3D vessel segmentation.
3. **RadLex (Radiology Lexicon)**:
   * **Application**: RSNA standardized radiology ontology integrated directly into the procedure blueprint and reporting engines, standardizing hardware indents, catheter sizes, and anatomical vascular sites.
4. **ICD-10 & SNOMED CT**:
   * **Application**: Instant, type-safe diagnostic and procedural lookups downloaded directly from WHO and IHTSDO for seamless reimbursement billing under MAAY, RGHS, and private insurers.

---

## Phase 4: The 1,000-Engineer Playbook (Engineering Governance)

### 1. RFCs (Request for Comments) Before Code
* No engineer writes code without a peer-reviewed 2-page RFC detailing:
  1. Problem statement & clinical motivation.
  2. Database schema migrations (PostgreSQL / Prisma / Go-Migrate).
  3. API contracts (Protobuf definitions for gRPC, OpenAPI 3.1 for REST).
  4. Security, audit logging, and HIPAA compliance implications.

### 2. Design-System-Driven Development
* Direct CSS authoring in applications is strictly prohibited. Engineers compose interfaces exclusively using tokens and primitives from `@vascule/ui-kit` and `@vascule/design-tokens`. Design changes originate from Figma tokens and are synchronized automatically via CI/CD.

### 3. Feature Flags & Canary Deployments
* Production code is deployed continuously behind feature flags (LaunchDarkly pattern). New features are enabled for a 5% canary cohort of fellows and nurses before gradual 100% rollout, monitoring error rates in real-time.

### 4. Shift-Left Security & Automated Compliance
* Every Pull Request must satisfy automated security gates:
  * Static Application Security Testing (SAST) & dependency scanning (Trivy / Snyk).
  * Automated HIPAA / SOC2 audit verification (zero unencrypted PHI in logs).
  * 100% TypeScript typecheck (`npx tsc --noEmit`) and Vitest test coverage thresholds.

### 5. Observability & Telemetry
* Distributed tracing (OpenTelemetry + Datadog) instrumented across frontend and Go microservices. P99 latency anomalies (> 1.2s) automatically generate high-priority incident tickets with full stack traces and network waterfall telemetry.

---

## Phase 5: Multi-Agent Swarm Orchestration & Tooling Integration

When engineering tasks are issued, the Lead AI Orchestrator delegates tasks to specialized subagents:
* **`architect-agent`**: RFC and schema authoring.
* **`frontend-agent`**: Next.js 14 and `@vascule/ui-kit` development.
* **`golang-backend-agent`**: Microservice implementation in Go.
* **`knowledge-graph-agent` (`graphify-windows`)**: Knowledge graph generation and code query via `graphify-out/`.
* **`clinical-dataset-agent` (`ponytail`)**: Medical guideline extraction and dataset integration.
* **`qa-security-agent`**: Automated test suites and compliance verification.
