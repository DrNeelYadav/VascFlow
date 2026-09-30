# VascFlow

A mobile-first, offline-capable Progressive Web Application (PWA) and clinical workstation built for Interventional Radiology (IR) residents, fellows, and faculty.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node: 20+](https://img.shields.io/badge/Node-20%2B-green.svg)](https://nodejs.org/)
[![Next.js: 16.3](https://img.shields.io/badge/Next.js-16.3%20App%20Router-black.svg)](https://nextjs.org/)
[![PostgreSQL: 16](https://img.shields.io/badge/PostgreSQL-16%20Prisma-336791.svg)](https://www.postgresql.org/)
[![Cloud Firestore](https://img.shields.io/badge/Firestore-Google%20Cloud-FFCA28.svg)](https://firebase.google.com/docs/firestore)
[![Unit Tests: 303 Passed](https://img.shields.io/badge/Vitest-303%20Passed-729B1B.svg)](https://vitest.dev/)
[![TypeScript: Strict](https://img.shields.io/badge/TypeScript-Strict%20Check-blue.svg)](https://www.typescriptlang.org/)

---

## 🎯 Clinical Mission & Scope

VascFlow is purpose-built for IR residents and clinicians between cases to prevent complications, calculate risk thresholds accurately, and maintain procedural safety:
- **Pre-Procedure Checklists & Verification**: WHO surgical safety, lab clearances, NPO hours, and consent tracking. Missing clinical data remains unrecorded/unknown—never populated with synthetic normal values.
- **Contrast & Renal Risk Guardrails**:
  - **ACR-NKF 2020 Consensus** (Davenport et al., *Radiology* 2020) IV iodinated contrast guidance: Prophylaxis indicated for eGFR < 30 mL/min/1.73m² (not on dialysis) or acute kidney injury (AKI); individualized decision for eGFR 30–44; prophylaxis not indicated for eGFR ≥ 45.
  - **Cigarroa Maximum Allowable Contrast Dose (MACD)**: $5 \times \text{weight (kg)} / \text{serum creatinine (mg/dL)}$, hard-capped at 300 mL (labeled as validated for coronary angiography). An institutional conservative alert (40 mL cap) is explicitly labeled as a departmental convention.
- **Strictly Separated Complication Systems**:
  - **CIRSE 2017 Classification** (Filippiadis et al.): Grades 1 through 6 based on therapy requirements, level of care, and sequelae.
  - **SIR 2003 Classification** (Sacks et al.): Classes A through F from minor to major adverse outcomes. CIRSE and SIR categories are maintained strictly independent and never blended.
- **Radiation Protection & Dosimetry**: Cumulative Air Kerma (mGy), Dose Area Product (DAP in $\text{Gy}\cdot\text{cm}^2$), and fluoroscopy time tracking against reference diagnostic levels.
- **Operative Notes & Post-Procedure Orders**: Standardized synoptic procedure notes and printable letterhead records for department archives.

---

## 🏛️ System Architecture

VascFlow is deployed as a unified Next.js 16 App Router application. All legacy unverified microservices and dead container templates have been replaced with a secure, serverless-ready architecture:

```mermaid
graph TD
    Client["PWA Client / Mobile & Workstation<br/>(Tailwind CSS, Offline Stores, PWA Manifest)"]
    NextServer["Next.js 16 App Router (apps/web-app)<br/>Server Actions & Route Handlers"]
    AuthModule["Auth.js v5 (NextAuth)<br/>Role-Tier Verified Sessions"]
    RBAC["Server RBAC Boundary<br/>(clinicalAccess.ts)"]
    Firestore["Google Cloud Firestore<br/>(Cases, Worklist, Inventory)"]
    Postgres["PostgreSQL 16 (Prisma ORM)<br/>(Append-Only Cryptographic Audit Log)"]

    Client --> NextServer
    NextServer --> AuthModule
    AuthModule --> RBAC
    RBAC -->|Clinicians: Full Clinical Data| Firestore
    RBAC -->|Technicians: Redacted Worklist Only| Firestore
    NextServer --> Postgres
```

### Role-Based Access Control (RBAC)
- **Physician Roles** (`FACULTY`, `FELLOW`, `RESIDENT`, `SENIOR_RESIDENT`, `DM`, `SR`, `CONSULTANT`): Permitted to view identifiable patient information, clinical histories, labs, vitals, operative notes, and to create/update procedure cases.
- **Technician & Nursing Roles** (`TECHNICIAN`, `TECH`, `NURSE`): Strictly denied patient identifiers (name, CR number, HID, contact numbers), clinical summaries, labs, vitals, and attachments at the server API boundary (`apps/web-app/app/lib/auth/clinicalAccess.ts`).
- **Unauthenticated Requests**: Fail closed immediately with HTTP 401.

### Truth in Data
- **No Synthetic Clinical Defaults**: Missing labs, vitals, or clinical fields remain undefined/empty (`—`).
- **Truthful Infrastructure Probing**: `/api/healthz` probes real database and cache connectivity; unconfigured services are reported as `UNCONFIGURED` rather than simulated healthy states.
- **PACS / DICOMweb**: Upstream PACS endpoints fail closed with HTTP 503 if not configured.

---

## 📦 Repository Structure

```text
c:/SSO (DrNeelYadav/VascFlow)
├── apps/
│   └── web-app/                     # Next.js 16 App Router PWA & clinical workstation
│       ├── app/                     # App Router pages and API routes
│       │   ├── api/                 # Server endpoints (cases, clinical-sync, audit, healthz, pacs)
│       │   ├── dashboard/           # Clinical interfaces (worklist, protocols, reports, operative-notes)
│       │   └── lib/                 # Core utilities, calculators, and RBAC security rules
│       ├── src/__tests__/           # Vitest test suites (clinical logic, RBAC, store sanitization)
│       └── Dockerfile               # Multi-stage production container definition
│
├── packages/
│   ├── db/                          # Prisma ORM schema & tamper-evident audit logging
│   ├── catalog/                     # IR hardware specifications and pricing catalogs
│   └── utils/                       # Clean clinical sanitizers, date formatters, and calculators
│
├── docker-compose.yml               # Local development stack (PostgreSQL + Next.js web-app)
└── vitest.config.ts                 # Monorepo test runner configuration
```

---

## 🚦 Verification & Quality Gates

| Verification Suite | Target | Status |
|---|---|---|
| **Vitest Unit & Integration Tests** | 43 Test Suites | **303 / 303 Passed (100%)** |
| **TypeScript Type Check** | `apps/web-app/tsconfig.json` | **0 Errors (`npx tsc --noEmit`)** |
| **Next.js Production Compilation** | 34 App Router Routes | **Clean Build (Turbopack, Exit Code 0)** |
| **RBAC Server API Boundary** | `clinicalAccessRbac.test.ts` | **13 / 13 Passed** |
| **Contrast & AKI Calculations** | `contrastCeilingSingleSource.test.ts` | **7 / 7 Passed** |
| **Emergency STAT Guardrails** | `statAndAkiGuardrails.test.ts` | **8 / 8 Passed** |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v20.x or later
- **npm**: v10.x or later
- **PostgreSQL**: v16 (optional for local audit log persistence)

### 1. Installation
```bash
git clone https://github.com/DrNeelYadav/VascFlow.git
cd VascFlow
npm install
```

### 2. Environment Configuration
Create `.env.local` inside `apps/web-app/` with the required parameters:
```env
# Database & Audit Trail
DATABASE_URL="postgresql://vascule:vascule_local_dev@localhost:5432/vascule?schema=public"

# Auth.js Authentication
AUTH_SECRET="your-generated-auth-secret-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-auth-secret-here"

# Google Cloud Firestore (Optional for local testing / Required for cloud sync)
# GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
```

### 3. Run Development Server
```bash
npm --prefix apps/web-app run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Test Suites
```bash
# Run all unit and integration tests
npx vitest run --exclude '**/archive/**'

# Verify TypeScript typecheck
npx tsc --noEmit --project apps/web-app/tsconfig.json
```

### 5. Production Build
```bash
npm --prefix apps/web-app run build
```

---

## 🐳 Docker Deployment

The application includes a hardened Dockerfile running as non-root user `vascule`:
```bash
docker compose up --build
```
This launches:
- `web-app`: Next.js 16 standalone production container on port 3000
- `postgres`: PostgreSQL 16 on port 5432 with healthchecks

---

## 📄 License
This project is licensed under the MIT License.
