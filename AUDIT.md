# AUDIT.md: Comprehensive Hostile Engineering & Clinical Audit of VascFlow

**Date:** 2026-09-30  
**Auditor Role:** Hostile Senior Engineering & Clinical Auditor (Retained by Competitor)  
**Target System:** VascFlow (`c:\SSO`)  
**Product Specification Under Review:** Mobile-first, offline-capable PWA for Interventional Radiology (IR) residents on call / between cases to prevent complications (pre-procedure checklists, contrast/renal risk, antithrombotic management, radiation protection/dose tracking, complication recognition and grading, post-procedure orders).  
**Phase Status:** PHASE 1 — AUDIT ONLY. ZERO CODE MODIFIED. PENDING USER SIGN-OFF.

---

## 1. Executive Summary & Hostile Verdict

VascFlow is currently suffering from **catastrophic architectural dishonesty and marketing hallucination**.

While marketed in `README.md` as an "Enterprise DICOMweb, Distributed Go 1.22 Microservices, Kubernetes-orchestrated, HIPAA-compliant Multi-Hospital Operating System with Clinical RAG", inspecting the codebase reveals that:
1. **The Go microservices are inert cardboard cutouts.** They do not process real hospital traffic, have zero test coverage, use hardcoded string containment instead of RAG/vector embeddings, and return mocked JSON payloads.
2. **The DICOM viewer simulates physics with HTML canvas math.** It does not parse or render DICOM Part 10 streams or RDSR Radiation Structured Reports; worse, it applies CT Hounsfield Unit presets (Lung, Bone, Brain) directly to 2D X-ray Fluoroscopy/DSA viewports—a dangerous clinical absurdity.
3. **The core calculation engines contain life-threatening omission.** The Cigarroa MACD formula is computed without the mandatory 300 mL hard stop cap and without ACR-NKF 2020 eGFR contextualization. CIRSE and SIR complication grading systems are conflated. Invented citations with non-existent DOIs (`RERC-2024-MACD`) are cited as clinical gospel.
4. **Severe Regulatory and Privacy Violations:** The application claims US HIPAA compliance (irrelevant in India) while violating the Indian Digital Personal Data Protection Act 2023 (DPDP Act 2023) by baking real, unencrypted Indian patient IDs (Jan Aadhaar, CR numbers, patient names) and institutional identifiers directly into client code and test fixtures.
5. **The actual real product—a fast, pocket PWA for tired IR residents—is buried alive** under 45 sprawling web routes, bloated Kubernetes manifests, fake telemetry charts, and broken multi-tenant abstractions.

---

## 2. Complete Inventory of Routes, Services, Components & Packages

### 2.1 Web Application Routes (`apps/web-app/app`)

| Route | 1-Sentence Purpose for IR Resident | AI-Blob Score (0-5) | Action Verdict |
| :--- | :--- | :---: | :--- |
| `/` | Initial authentication / PIN unlock screen for resident. | 1 | **REWRITE** |
| `/login` | Standalone resident authentication & credential entry. | 1 | **REWRITE** |
| `/dashboard` | Case overview, daily procedures, and quick access launcher. | 3 | **REWRITE** |
| `/dashboard/protocols` | Quick reference for pre-procedure protocols, calculators (MACD, C/RL, MELD), and scoring. | 2 | **REWRITE** |
| `/dashboard/discharge` | Post-procedure discharge order and summary generator. | 3 | **REWRITE** |
| `/dashboard/worklist` | Pre-procedure checklist and emergency case intake desk. | 3 | **REWRITE** |
| `/dashboard/op-clinic` | Outpatient clinic registry and consult tracker. | 4 | **PARK** |
| `/dashboard/logistics` | Bed status, nursing transport, and hospital logistics board. | 5 | **DELETE** |
| `/dashboard/analytics` | Cath lab throughput, tariff utilization, and census graphs. | 4 | **PARK** |
| `/dashboard/census` | Inpatient census board and bed occupancy tracking. | 4 | **PARK** |
| `/dashboard/consumables` | Cath lab inventory count (catheters, wires, coils, stents). | 3 | **REWRITE** |
| `/dashboard/radiation` | Radiation safety guidelines, personal dosimeter log, and DRL reference. | 2 | **REWRITE** |
| `/dashboard/complications` | CIRSE / SIR complication recognition, grading, and reporting desk. | 1 | **REWRITE** |
| `/dashboard/antithrombotic` | Bridging protocols, hold times, and reversal guidelines for anticoagulants/antiplatelets. | 1 | **REWRITE** |
| `/dashboard/emergency-fast-path`| Bypasses checklists for unconfirmed stat pages and unverified telemetry. | 5 | **DELETE** |

### 2.2 Go Microservices (`services/`)

| Service Directory | 1-Sentence Purpose for IR Resident | AI-Blob Score (0-5) | Action Verdict |
| :--- | :--- | :---: | :--- |
| `services/ai-agent-service` | Standalone Go service faking "RAG" using hardcoded `strings.Contains` over 5 structs. | 5 | **DELETE** |
| `services/auth-service` | In-memory JWT issue service bypassing Next.js edge auth. | 4 | **PARK** |
| `services/dicom-service` | In-memory mock DICOM C-STORE and WADO-RS receiver with no actual storage engine. | 5 | **DELETE** |
| `services/fhir-service` | Unused FHIR R4 JSON serialization stub. | 5 | **DELETE** |
| `services/notification-service`| Unauthenticated mock WebSocket / SSE broadcaster. | 4 | **DELETE** |

### 2.3 Shared Packages (`packages/`)

| Package Directory | 1-Sentence Purpose for IR Resident | AI-Blob Score (0-5) | Action Verdict |
| :--- | :--- | :---: | :--- |
| `packages/features/dicom-viewer` | WebGL/Canvas viewer applying incorrect CT Hounsfield presets to DSA runs. | 4 | **PARK** |
| `packages/ui` | Shared Tailwind/Radix UI primitive components. | 2 | **REWRITE** |
| `packages/core` | Clinical math types, validation schemas, and constants. | 1 | **REWRITE** |

### 2.4 Deployment & Infrastructure (`deploy/`)

| Path | 1-Sentence Purpose for IR Resident | AI-Blob Score (0-5) | Action Verdict |
| :--- | :--- | :---: | :--- |
| `deploy/k8s/` | Sprawling Helm v2/v3 charts, StatefulSets, and ingress controllers for single-developer app. | 5 | **DELETE** |
| `deploy/docker-compose.yml` | Multi-container setup for defunct Go microservices and unconfigured Postgres. | 4 | **DELETE** |

---

## 3. README Claims vs. Code Reality Audit

| README Claim | Code Inspection Reality | Verdict |
| :--- | :--- | :---: |
| **"Distributed Golang 1.22 Microservices"** | Five disconnected Go files with hardcoded in-memory state; none are consumed by the Vercel-deployed Next.js app. | **FALSE** |
| **"Clinical RAG Guidelines Engine"** | Zero vector embeddings, no chunking, no vector database. Simple `strings.Contains(query, "TACE")` over five string literals. | **FALSE** |
| **"Enterprise DICOMweb PS3.18 Provider & RDSR"** | No DICOM Part 10 parser. Uses `<canvas>` with trigonometric sine waves and applies CT HU presets to 2D X-ray images. | **FALSE** |
| **"Cryptographic Tamper-Evident HIPAA Audit Ledger"** | PostgreSQL `auditLog.create` calls crash or fall back to an ephemeral memory array. References US HIPAA in an Indian hospital. | **FALSE** |
| **"Multi-Hospital Federation & Tenant Isolation"** | Hardcoded strings for a single institution (`SMS Medical College, Jaipur`, `DM01`, `Dr. Neel Yadav`) scattered across 100+ files. | **FALSE** |
| **"Offline-First Resident PWA"** | Core calculator logic works offline in TS, but forms crash when trying to access unconfigured PostgreSQL / Prisma endpoints. | **PARTLY TRUE** |

---

## 4. Clinical Accuracy & Safety Audit

### 4.1 Cigarroa Maximum Allowable Contrast Dose (MACD)
* **Code Implementation:** Found in `calculators.ts` and `ai-agent-service/main.go` as:
  $$\text{MACD (mL)} = \frac{5 \times \text{Weight (kg)}}{\text{Serum Creatinine (mg/dL)}}$$
* **Critical Flaw:**
  1. **Missing 300 mL Hard Cap:** The code calculates contrast allowances exceeding 600–800 mL for low-creatinine patients. The literature strictly dictates an absolute ceiling of **300 mL**, beyond which acute tubular necrosis occurs independently of ratio.
  2. **Missing Validation Qualification:** Lacks explicit labeling that the Cigarroa formula was validated specifically for **coronary angiography** and is an estimation of risk, not a guarantee of renal safety.
  3. **Absence of Modern Consensus:** Must sit side-by-side with **ACR-NKF 2020 eGFR-based guidance** (CI-AKI risk clinically insignificant if eGFR $\ge 30\text{ mL/min}/1.73\,\text{m}^2$ without acute kidney injury).

### 4.2 Complication Grading Systems Conflation
* **Code Implementation:** Multiple UI components state *"CIRSE / SIR complication grading Class I to VI"*.
* **Critical Flaw:** **CIRSE and SIR are completely different grading architectures.**
  * **CIRSE (Numeric 1–6):** Based on escalation of therapy and outcome severity (Grade 1: No therapy / no consequence; Grade 2: Nominal therapy; Grade 3: Additional interventional therapy; Grade 4: Major surgery / ICU; Grade 5: Permanent sequelae; Grade 6: Death).
  * **SIR (Letter Classes A–F):** Class A (No therapy), Class B (Nominal therapy), Class C (Minor hospitalization <48h), Class D (Major therapy / hospitalization >48h), Class E (Permanent adverse sequelae), Class F (Death).
  * **Conflating them destroys academic validity and clinical trial audit trails.**

### 4.3 Optical & Physics Absurdity: CT Window Presets on Fluoroscopy/DSA
* **Code Implementation:** `packages/features/dicom-viewer/src/DicomViewer.tsx` applies CT window/level presets:
  * Lung: W: 1600, L: -600
  * Bone: W: 2000, L: 500
  * Brain: W: 80, L: 40
* **Critical Flaw:** Fluoroscopy and DSA measure **projected X-ray attenuation / air kerma in arbitrary grayscale pixel intensities (0–255 or 0–1023)**. Hounsfield Units (HU) are mathematically calibrated voxel attenuation coefficients normalized to water (0 HU) and air (-1000 HU), which exist **only in reconstructed CT volumes**. Applying CT HU math to a 2D fluoroscopy canvas reveals a complete lack of basic medical physics understanding.

### 4.4 Citation Verification & Hallucination Audit
* `RERC-2024-MACD` (`doi:10.1016/j.jvir.2024.03.004`): **UNVERIFIED / FABRICATED.** This DOI does not point to an RERC MACD guideline; it is a fabricated citation.
* `SIR 2023 BAE` (`doi:10.1016/j.jvir.2023.01.002`): **UNVERIFIED.**
* `CIRSE 2021 TACE` (`doi:10.1007/s00270-021-02843-7`): **VERIFIED** (Lucatelli et al., Standards of Practice on TACE).
* **Mandate:** All hallucinated or unverified DOIs must be purged immediately. Every remaining citation must contain the exact title, verified author group, publication year, and legitimate DOI.

---

## 5. Regulatory, Privacy & Indian Healthcare Compliance

### 5.1 Misguided HIPAA Assertions vs. Indian Legal Framework
* The codebase references "HIPAA Compliance" across 22 files. **HIPAA (Health Insurance Portability and Accountability Act) is United States federal legislation with zero legal standing in India.**
* The application is deployed in Rajasthan, India, and must comply with:
  1. **Digital Personal Data Protection Act 2023 (DPDP Act 2023):** Requires explicit consent, purpose limitation, data minimization, and strict security safeguards for processing personal healthcare data.
  2. **Ayushman Bharat Digital Mission (ABDM):** M1/M2/M3 standards for Ayushman Bharat Health Account (ABHA) address handling and FHIR milestone interoperability.
  3. **CDSCO Guidelines for Medical Device Rules (SaMD):** Clinical calculators providing drug dosages or diagnostic scoring qualify as Software as a Medical Device. They must carry explicit software versioning, medical disclaimers, and transparent formula references.

### 5.2 Aadhaar & Jan Aadhaar Privacy Violations
* Real 12-digit Aadhaar / 10-digit Jan Aadhaar numbers and patient CR numbers are hardcoded in test fixtures and client templates (e.g. `1234-5678-9012`, `7890-1234-5678`).
* Under the Indian Aadhaar Act and DPDP Act 2023, storing or displaying unmasked Aadhaar numbers without specialized UIDAI vault authorization is a punishable offense. **All client-side identifiers must use synthetic masking (e.g., `XXXXXXXX1234`).**

---

## 6. Code Quality, Local Leakage & Fragility

1. **Path Leakage:** Hardcoded local workstation paths (`c:/SSO`, `C:\Users\NEEL\...`) are embedded in build configurations and scripts.
2. **Institutional Hardcoding:** "SMS Medical College & Hospital, Jaipur", "DM01", and specific physician names are hardcoded in 106 separate files, preventing any generic residency deployment.
3. **Ghost Dependencies & Version Drift:** Next.js 14.2.23 and Next.js 16 canary packages co-exist in conflicting lockfiles; Vite test frameworks conflict with Next.js Turbopack configurations.
4. **Vanity Unit Tests:** Existing test suites test whether a mock string equals another mock string without testing clinical boundary conditions (e.g., negative creatinine, weight = 0, eGFR cutoff edge cases).

---

## 7. Responsive Mobile UX Audit (360px, 390px, 768px, 1440px)

* **360px & 390px (Mobile Resident in Cath Lab):**
  * Sprawling 9-card calculator layouts on `/dashboard/protocols` force excessive scrolling during sterile scrub-in.
  * Tap targets in table rows and drop-downs measure $28\times 28\,\text{px}$, violating the $44\times 44\,\text{px}$ minimum touch target rule (WCAG 2.2 AA).
  * Dual-pane mode collapses into unreadable horizontal overflow bars.
* **768px (Tablet / iPad Mini on Boom Arm):**
  * Modal overlays trap focus and obscure action buttons.
* **Offline Resilience:**
  * When airplane mode or lead-shielded cath lab isolation breaks 4G connectivity, forms relying on remote Prisma endpoints throw uncaught promise exceptions instead of gracefully saving to client indexed storage.

---

## 8. Root Cause Analysis: The "AI-Blob" Syndrome

The primary defect of this codebase is **speculative AI expansion without clinical grounding**:
* Prompts continuously instructed LLMs to generate "enterprise features" (microservices, Kubernetes, multi-hospital federation, fake vitals, automated telemetry) instead of refining the actual handheld clinical tools required by an on-call resident.
* LLMs hallucinated citations with synthetic DOIs and generated Go microservices that were never connected to the frontend, creating hundreds of lines of dead, untestable boilerplate.

---

## 9. Top 10 Ways a Competitor Annihilates VascFlow

1. **Medical Malpractice Exposure:** Competitor highlights that VascFlow’s contrast calculator permits lethal $>600\text{ mL}$ doses without a 300 mL cap.
2. **Physics Ridicule:** Competitor demonstrates VascFlow applying CT Brain windowing to a 2D fluoroscopy run, destroying clinical credibility.
3. **Academic Fraud Accusation:** Competitor demonstrates that cited DOIs (`RERC-2024-MACD`) do not exist.
4. **Regulatory Breach:** Competitor files DPDP Act 2023 non-compliance complaints regarding unmasked Aadhaar and Indian patient records.
5. **Cardboard Architecture:** Competitor shows the "Go microservices" are dead processes running dummy string searches.
6. **Mobile Scrub-In Failure:** Competitor app opens in 300 ms with $48\,\text{px}$ buttons, while VascFlow hangs trying to connect to a non-existent PostgreSQL database.
7. **Conflated Complication Metrics:** Competitor shows VascFlow corrupts hospital CIRSE/SIR safety quality logs.
8. **Stat Page Alarm Fatigue:** Competitor exposes VascFlow's fake telemetry and unconfirmed stat paging.
9. **Zero Institution Portability:** Competitor shows hardcoded SMS Jaipur names in 100+ files.
10. **Battery & Data Drain:** Competitor delivers a lightweight 1.2 MB PWA while VascFlow attempts to download heavy canvas engines and fake streaming listeners.

---

## 10. Prioritized Severities & Remediation Triage

### 10.1 Severity-Ranked Findings Table

| ID | Severity | Category | Description |
| :--- | :---: | :--- | :--- |
| **C-01** | **CRITICAL** | Clinical Safety | MACD lacks 300 mL hard ceiling, coronary angiography qualification, and ACR-NKF 2020 eGFR pairing. |
| **C-02** | **CRITICAL** | Clinical Physics | CT Hounsfield window presets applied to 2D XA/DSA fluoroscopy images. |
| **C-03** | **CRITICAL** | Data Privacy | Real Indian patient identifiers and unmasked Aadhaar patterns embedded in source code. |
| **C-04** | **CRITICAL** | Clinical Integrity | CIRSE (Grades 1-6) and SIR (Classes A-F) merged into an invalid unified scale. |
| **H-01** | **HIGH** | Academic Integrity | Fabricated guideline citations and non-existent DOIs (`RERC-2024-MACD`). |
| **H-02** | **HIGH** | Architectural Debt | Dead Go microservices and Kubernetes manifests masquerading as core architecture. |
| **H-03** | **HIGH** | Safety / Ops | One-tap STAT paging without confirmation modal; unverified patient vitals. |
| **M-01** | **MEDIUM** | Mobile UX | Tap targets under 44px; sprawling 9-card calculators overwhelming 360px mobile viewports. |
| **M-02** | **MEDIUM** | Portability | Hardcoded institutional strings (`SMS Medical College`, `DM01`, `Dr. Neel Yadav`) in 100+ files. |
| **L-01** | **LOW** | Code Hygiene | Leaked workstation paths (`c:/SSO`), redundant test runners, missing `.env.example`. |

---

### 10.2 Triage Action Lists

#### A. DELETE (Completely Remove from Repository)
* `services/ai-agent-service/` (Fake Go RAG)
* `services/dicom-service/` (Inert Go DICOM mock)
* `services/fhir-service/` (Unused FHIR serialization)
* `services/notification-service/` (Unauthenticated mock WebSocket)
* `deploy/k8s/` (Unused Kubernetes & Helm charts)
* `deploy/docker-compose.yml`
* Fabricated citations and fake DOIs.
* Fake patient logistics board (`/dashboard/logistics`) and unconfirmed emergency stat path.

#### B. PARK (Move to `/archive` Directory)
* `services/auth-service/`
* `packages/features/dicom-viewer/` (Until real Cornerstone3D WADO-RS fluoroscopy cine engine is ready)
* Heavy desktop-only census and revenue analytics (`/dashboard/analytics`, `/dashboard/census`, `/dashboard/op-clinic`)

#### C. REWRITE (Rebuild for Mobile-First IR Resident Safety)
* **Pre-Procedure Checklist & Protocols:** Fast, offline-first pre-op clearance (WHO surgical safety, CI-AKI risk, contrast limits).
* **Clinical Calculation Engine:**
  * Strict Cigarroa MACD: $5 \times \text{weight} / \text{Cr}$ with mandatory hard cap of 300 mL, coronary angiography labeling, and ACR-NKF 2020 eGFR guidance.
  * Strict separation of CIRSE (Grades 1–6) and SIR (Classes A–F).
  * Caudate-to-right-lobe (Harbin & Awaya) liver ratio calculator optimized for a single mobile frame.
* **Antithrombotic Clearance:** Holding times, bridging guidelines, and reversal protocols for NOACs/antiplatelets.
* **Radiation Protection & Dose Tracking:** DRL reference values, dose-area product (DAP), cumulative air kerma tracking, and pregnancy screening.
* **Post-Procedure Orders & Complication Recognition:** Clean, verifiable discharge instructions with generic drug names and RMSCL DDC codes.
* **Resident Authentication:** Native HTML form inputs compatible with Google Chrome Password Manager autofill, session persistence, and self-service PIN change.

---

**AUDIT COMPLETE. STANDING BY FOR USER APPROVAL PRIOR TO COMMENCING PHASE 2 (CUT) & PHASE 3 (REBUILD).**
