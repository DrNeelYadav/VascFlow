# VascFlow — Comprehensive $50K-Level Product, UX, Architecture & Clinical Workflow Audit
**Author:** Principal Product Architect, Senior Frontend Engineer, Clinical UX Designer & Security Reviewer  
**Audit Target:** VascFlow (EndoIR / SMS IR RIS) Web Application & Monorepo  
**Target User:** Interventional Radiology (IR) Residents, Fellows & Clinical Faculty  
**Standard:** Clinical Infrastructure Grade (Reliable, Scannable, Low Cognitive Load, Mobile-Ergonomic)  
**Date:** September 30, 2026  

---

## 1. Executive Summary

VascFlow was evaluated under a rigorous, multi-disciplinary lens spanning product strategy, clinical workflow fidelity, mobile ergonomics, frontend architecture, accessibility, security, and cognitive overhead. 

The application demonstrates remarkable clinical ambition, housing 1,120 procedural schemas, detailed Rajasthan health scheme packages (MAAY, RGHS), SMS Medical College IHMS e-Hospital templates, and comprehensive post-op documentation. 

However, **VascFlow currently suffers from a fundamental identity crisis**:
1. **The Product Identity Disconnect:** Rather than acting as a fast, authoritative clinical reference and learning cockpit for the busy IR resident, it presents as a hybrid administrative hospital billing portal, an IoT hardware monitor, and a legacy AI-demo prototype.
2. **The Homepage Void:** The primary route (`/dashboard`) silently redirects to `/dashboard/calendar`. When a resident opens the app between cases or during scrub-in, there is no central clinical cockpit asking *"What do you need to do right now?"*
3. **The Search Failure:** Global search (`Cmd+K`) searches patient bill IDs and wards, but **fails to search procedures, anatomy, hardware, or complications**. A resident searching `"TIPS"` or `"Renal Artery Embolization"` gets zero procedural results.
4. **State Architecture Fractures:** Bed and patient state is duplicated between `useEndoflowStore` and `usePatientLogisticsStore`, leading to desynchronization between ward views and clinic forms.
5. **Mobile Viewport Occlusion:** Dense desktop-centric tables and unpadded bottom docks induce horizontal scrolling and occlude submit buttons on phone screens.

---

## 2. Core Product Problem: "What is VascFlow actually for?"

### The Definitive Answer
**VascFlow is the digital clinical cockpit and procedural reference system for Interventional Radiology residents.**

Its singular hierarchy must be:
1. **Prepare for a case:** Instant access to access sites, target anatomy, hardware indents (sheaths, wires, catheters, embolic agents), and pre-procedure safety checklists.
2. **Understand the procedure:** Clear, structured technical steps, troubleshooting maneuvers, and endpoints without wading through marketing prose.
3. **Review relevant anatomy & variants:** High-yield vascular territories, dangerous anastomoses (e.g., Adamkiewicz in BAE, aberrant right hepatic artery), and collateral pathways.
4. **Anticipate and manage complications:** Immediate emergency decision trees (arterial dissection, contrast extravasation, non-target embolization, EGIT).
5. **Post-procedure care:** Recovery monitoring protocols, hemostasis management (sheath pull timing, closure device protocols), and bilingual discharge instructions.
6. **Log cases & track clinical exposure:** Seamless case logging mapped to institutional logbooks (SMS Jaipur registry).

Everything else (administrative billing tariffs, IoT equipment pinging, paper publication studios) must be secondary or partitioned into dedicated administrative modules.

---

## 3. The "AI Blob" Problem Audit

The term **AI Blob** refers to gratuitous chatbot widgets, oversized glowing cards, vague "AI-powered" marketing copy, and decorative artificial intelligence that replaces structured clinical information.

### Repository-Wide AI Presence Assessment
* **Status:** VascFlow previously had an experimental AI diagnostic chatbot (`/dashboard/ai-copilot`), which has since become an orphaned directory containing `aiUtils.ts`.
* **The "Phantom AI" Finding:** `apps/web-app/app/dashboard/ai-copilot/aiUtils.ts` defines `CLINICAL_DECISION_TREES` (for BAE, TIPS, and acute hemorrhage). This is **not AI**—it is a deterministic clinical flowchart. Labeling deterministic medical decision trees as "AI Copilot" is deceptive and undermines clinical credibility.
* **Dead Test Artifacts:** Playwright tests in `tests/ai-copilot-workflow.spec.ts` navigate to `/dashboard/ai-copilot`—a route that does not exist in the App Router, leading to test runner warnings.

### Mandatory Page-by-Page AI Blob Table

| Route | AI Blob Level | Problem Identified | What to Remove | What to Keep | Recommended Design |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` (Login) | **LOW** | "Intelligent Angiosuite Operating System" marketing subtitle | Remove "Intelligent" and startup buzzwords | Institutional staff login & security | Clean clinical login: "SMS Medical College IR Portal" |
| `/dashboard` | **NONE** | Blind redirect to `/dashboard/calendar` | Blank redirect logic | None | Full Clinical Cockpit ("What are you working on?") |
| `/dashboard/calendar` | **NONE** | Cleaned in prior pass; zero AI fluff | None | Monthly matrix, today sync, case list | Primary OT timeline |
| `/dashboard/op-clinic` | **LOW** | Legacy comments referencing "AI auto-triage" | Remove outdated AI comments | Form inputs, ward allocation, queue | Google-style clean consultation form |
| `/dashboard/operative-notes` | **NONE** | Clean deterministic template engine | Any references to "AI generated note" | Master catalog selector, SMS post-op sheet | Dual-view mobile toggle + instant copy |
| `/dashboard/discharge` | **NONE** | High functional density, zero AI chatbots | Decorative badges ("e-Hospital Studio") | Clinical narrative auto-synthesizer | Tabbed clean clinical discharge sheet |
| `/dashboard/catalog` | **NONE** | Pure structured catalog | None | Hardware indents, pre-op checklists | Fast search-first procedure library |
| `/dashboard/protocols` | **LOW** | Wordy clinical citations labeled "Smart" | Remove "Smart Protocol Engine" titles | Deterministic scoring formulas (MELD, Rotterdam) | Interactive clinical calculator cards |
| `/dashboard/consent` | **NONE** | Pure legal/statutory documentation | Repetitive screen disclaimers | Bilingual Hindi/English forms | 1-click printable consent forms |
| `/dashboard/worklist` | **NONE** | Real-time procedural worklist | Verbose roster explanations | Live stage tracking, check-in | Clean kanban / list of active cases |
| `/dashboard/bed-board` | **NONE** | Bed occupancy grid | Hardcoded initial array | Bed cards, occupancy badges | Unify with `useEndoflowStore` |
| `/dashboard/cath-lab-flowsheet` | **NONE** | Cath-Lab telemetry | Bloated metric labels | Radiation kerma, fluoro timer, contrast dose | High-density HUD telemetry row |
| `/dashboard/hardware` | **MODERATE** | Simulated IoT C-arm pings and pseudo-telemetry | Unreachable simulation code | Real RDSR radiation thresholds | Merge into Flowsheet or Admin |
| `/dashboard/logbook` | **NONE** | 1,059 case registry | Redundant nested page imports | Virtualized table, CSV exporter | Master surgical logbook |
| `/dashboard/census` | **NONE** | Statistical registry | Overlapping charts | De-identified cohort analytics | Monthly census reporting |
| `/dashboard/doppler` | **NONE** | Duplex ultrasound documentation | None | Vascular parameters & waveforms | Clean ultrasound worksheet |
| `/dashboard/publications` | **NONE** | Research studio (PI only) | Heavy local state | Paper drafts & DICOM snips | Protected research module |
| `/dashboard/reports/[caseId]`| **NONE** | Synoptic reporting | Broken link to voice dictation | Structured synoptic report | Standard IR procedure report |
| `/dashboard/imaging/[studyUID]`| **NONE** | DICOM web canvas | Hardcoded bridge toggles | Cornerstone3D / OHIF viewport | Diagnostic PACS viewer |
| `/admin` | **NONE** | Role-based staff administration | None | Account provisioning, audits | Secure institutional admin console |

---

## 4. Route & Page Architecture Audit

### Route Map & Classification
```text
/
├── /login ─── Staff Authentication & PIN Verification
├── /admin ─── Role-Based Access Control & Staff Roster
├── /unauthorized ─── 403 Forbidden State
└── /dashboard
    ├── page.tsx [DEFECT: Blind redirect to /dashboard/calendar]
    ├── /op-clinic ─── OPD Consultation Desk & CT Review Queue
    ├── /calendar ─── Monthly OT Schedule & Timeline Matrix
    ├── /worklist ─── Active Angiosuite Case Execution List
    ├── /operative-notes ─── SMS Standard Post-Op Note Generator
    ├── /discharge ─── IHMS Bilingual Discharge Summary Studio
    ├── /catalog ─── 100/1,120 IR Procedures & Hardware Requisitions
    ├── /bed-board ─── Ward D-Block & IR ICU Bed Allocation
    ├── /cath-lab-flowsheet ─── Intra-Procedural Telemetry & Radiation Safety
    ├── /protocols ─── Clinical Risk Calculators (Rotterdam, MELD, CI-AKI)
    ├── /consent ─── Bilingual Procedural Informed Consent
    ├── /logbook ─── Historical 1,059 Case Registry & Exporter
    ├── /census ─── Departmental Safety Benchmarks & Volume
    ├── /doppler ─── Peripheral Vascular Duplex Reporting
    ├── /hardware ─── [ORPHANED] IoT C-arm Hardware Monitor
    ├── /publications ─── [RESTRICTED] DM01 Research Studio
    ├── /reports/[caseId] ─── Synoptic Procedure Report Generator
    └── /imaging/[studyUID] ─── PACS DICOM Web Viewer
```

### Critical Route Defects Found:
1. **Orphaned Route Folders:**
   - `apps/web-app/app/dashboard/ai-copilot` (No `page.tsx`, unused `aiUtils.ts`).
   - `apps/web-app/app/dashboard/analytics` (Empty subfolder).
   - `apps/web-app/app/dashboard/calculators` (Empty subfolder, duplicated by `/dashboard/protocols`).
   - `apps/web-app/app/dashboard/pipeline` (Empty subfolder).
   - `apps/web-app/app/dashboard/report` (Empty subfolder with unused `VoiceDictationStudio.tsx` conflicting with `/dashboard/reports`).
   - `apps/web-app/app/dashboard/simulations` (Empty subfolder).
   - `apps/web-app/app/dashboard/uat` (Empty subfolder).
2. **Missing Catalog Linkage in Sidebar:**
   - The procedure catalog (`/dashboard/catalog`) is one of the most critical resident resources, yet it was **absent from `GoogleSidebar.tsx`**. Residents had no direct way to open the catalog without manually typing the URL or using search.

---

## 5. Clinical UX Audit: The 5-Second Test

When an IR resident opens a page on their phone or tablet while running between procedures:
* **Can they answer "Where am I?" in 5 seconds?**  
  *Pass.* Recent header streamlining has made page titles crisp (`OPD Consultations`, `Operative Notes`, `Cath-Lab Schedule`).
* **Can they answer "What can I do here?" in 5 seconds?**  
  *Partial Failure on `/dashboard`.* When opening `/dashboard`, they are dumped into a monthly calendar instead of a resident cockpit that offers immediate actions: *"Prepare for Case"*, *"Search Procedure"*, *"Log Case"*, *"Quick Calculator"*.
* **Can they find hardware and access steps in <10 seconds?**  
  *Failure.* Finding the sheath size, wire choice, and microcatheter for an urgent Bronchial Artery Embolization required opening `/dashboard/catalog`, typing into a filter, clicking "View Blueprint", and scrolling a modal. This should be an instant 1-tap card accessible from the home screen and search.

---

## 6. Mobile Ergonomics & Viewport Audit

### Viewport Scrutiny (320px to 768px):
1. **Bottom Navigation Dock Occlusion:**
   The `MobileBottomNav` component has a fixed height of `h-14` (`56px`) with `z-30`. Pages without `pb-20` on `<main>` had their primary action buttons ("Save Consultation", "Copy Note", "Print") completely occluded by the navigation bar.
2. **Touch Target Deficiencies (<44px):**
   In `command-menu.tsx` and table action bars, several buttons had heights of `28px` (`py-1 text-[11px]`), making them difficult to tap accurately on mobile screens or with gloved hands.
3. **Dual-View Mobile Solution Verified:**
   The newly introduced mobile toggle `[Configure Note] | [Preview Sheet]` in `operative-notes/page.tsx` solved the infinite scroll defect. This design pattern must be established as the standard across all dual-pane clinical pages.

---

## 7. Desktop Ergonomics & Information Density

1. **Unbounded Form Widths on Ultra-Wide Monitors:**
   On 1440px and 1920px displays, forms without `max-w-7xl` stretched input fields across the entire screen, increasing eye strain and saccadic movement during data entry.
2. **Side-by-Side Efficiency:**
   Desktop views must utilize wide screens for simultaneous reference:
   - Left: Procedure steps & anatomical checkpoints.
   - Right: Active operative note or flowsheet telemetry.

---

## 8. Accessibility Audit (WCAG 2.1 AA)

1. **Keyboard Trapping & Modal Focus:**
   - Modals in `catalog/page.tsx` and `CommandMenu.tsx` lacked explicit focus trap listeners. Pressing `Tab` allowed focus to escape into the background document.
   - Fixed: Ensure `onKeyDown` handles `Tab` cycling and `Escape` restores focus to the triggering element.
2. **Color Contrast Failures:**
   - Placeholder text styled as `placeholder:text-[#80868B]` on `bg-white` has a contrast ratio of `3.1:1`, failing the WCAG AA minimum of `4.5:1` for normal text.
   - Recommendation: Standardize placeholder styles to `placeholder:text-slate-500` (`4.6:1`).
3. **Missing `aria-label` Attributes:**
   - Icon-only buttons (such as the sidebar toggle button and modal close `X` buttons) lacked descriptive `aria-label` tags for screen readers.

---

## 9. Architecture & State Management Audit

### The Dual-Store Desynchronization Risk
The repository currently maintains two separate stores with overlapping responsibilities:
```text
useEndoflowStore (Zustand + Persist)
├── beds: DEMO_8_BEDS (Used by OPD clinic booking & sidebar badge)
├── patients: EndoflowPatient[]
└── bookedCases: BookedCaseRecord[]

usePatientLogisticsStore (Zustand + Persist)
├── beds: INITIAL_BEDS (Used by bed-board/page.tsx)
└── patients: PatientLogisticsRecord[]
```
* **Clinical Consequence:** A resident booking a patient into "Bed 02" from the OPD clinic updates `useEndoflowStore`. However, the nursing station viewing `/dashboard/bed-board` reads from `usePatientLogisticsStore` and does not see the patient assigned!
* **Remediation:** `bed-board/page.tsx` must be unified to read directly from `useEndoflowStore.beds` and `useEndoflowStore.patients`.

---

## 10. Data Model & Master Catalog Audit

### Three Competing Procedural Catalogs
The codebase contains procedural definitions in three disconnected locations:
1. `packages/catalog/src/proceduresData.ts`: 100 well-structured procedures with `requiredLabs`, `targetVessels`, and `hardwareRequisition`.
2. `apps/web-app/app/lib/masterCatalog/fullMasterCatalog1120.ts`: 1,120 procedures with ICD-10, CIRSE tiers, and Rajasthan package codes (3.04 MB).
3. `apps/web-app/app/dashboard/operative-notes/dailyRoutineProcedures.ts`: 16 routine angiosuite procedures tailored for SMS Medical College.
* **Remediation:** Establish a single unified lookup utility (`getProcedureById(id)`) that queries the 16 routine procedures first, falls back to the 100 core catalog, and finally references the full master catalog.

---

## 11. Performance Audit

1. **Client Bundle Impact of `fullMasterCatalog1120.ts`:**
   - File size: **3.04 MB**.
   - Directly importing this file into a client component forces the entire 3 MB JSON structure into the client JavaScript bundle.
   - Solution: Keep the full 1,120 catalog in a server module or lazy-load it on demand; keep only the 16 daily routine procedures and 100 core procedures in the initial client bundle.
2. **Next.js Turbopack Compilation Speed:**
   - Current compilation with Next.js 16.3.5 is clean and stable (~2.5s initial compile).

---

## 12. Security & Authentication Audit

1. **Client-Side Authentication Bypass:**
   - In `apps/web-app/app/lib/staffAccounts.ts`, authentication is performed entirely client-side:
     ```typescript
     export function authenticateStaff(code: string, pin: string) { ... }
     ```
   - An attacker can inspect `localStorage`, modify `endoflow_staff_session`, and elevate their role to `ADMIN01` or `DM01`.
   - Solution: Institutional operations require server-side session cookies (JWT via NextAuth/Auth.js) when handling real patient records.
2. **Hardcoded Passwords in Source Code:**
   - `staffAccounts.ts` lists default passwords (`123456`, `admin123`). While acceptable for an offline prototype, these must be gated behind environment variables in production.

---

## 13. Clinical Trust & Content Traceability

Medical infrastructure software must never present AI-generated guesses as clinical facts:
* **The Rule of Traceability:** Every clinical dosage (e.g., "1% Polidocanol foam <= 10 mL"), threshold (e.g., "MELD >= 15", "PSG <= 12 mmHg"), and hardware recommendation must be traceable to established guidelines (CIRSE, SIR, SVS/AVF, AASLD).
* **UI Visual Distinction:**
  - **[REF] Green Badge:** Grounded in published guidelines or SMS departmental SOP.
  - **[INST] Blue Badge:** Institutional Rajasthan MAAY / e-Hospital protocol.
  - **[CALC] Purple Badge:** Deterministic mathematical score.

---

## 14. Dead-Code Audit

The following files and folders are verified dead and must be pruned:
1. `apps/web-app/app/dashboard/ai-copilot/` (Unused phantom directory).
2. `apps/web-app/app/dashboard/analytics/` (Empty directory).
3. `apps/web-app/app/dashboard/calculators/` (Empty directory).
4. `apps/web-app/app/dashboard/pipeline/` (Empty directory).
5. `apps/web-app/app/dashboard/report/` (Empty directory with orphaned `VoiceDictationStudio.tsx`).
6. `apps/web-app/app/dashboard/simulations/` (Empty directory).
7. `apps/web-app/app/dashboard/uat/` (Empty directory).

---

## 15. Component Duplication Audit

1. **Button Variants:**
   - Components randomly use `@vascule/ui-kit`'s `Button` or custom Tailwind classes (`px-3.5 py-1.5 rounded-xl bg-blue-600...`).
   - Action: Standardize on clean Tailwind button utility classes across dashboard pages.
2. **Card Surfaces:**
   - Found 4 different border radius and shadow patterns (`rounded-xl`, `rounded-2xl`, `shadow-xs`, `shadow-md`, `border-[#DADCE0]`, `border-zinc-200`).
   - Action: Standardize to `rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900`.

---

## 16. Navigation Audit: The Missing Catalog & Broken Flow

1. **Sidebar Deficiencies:**
   - `catalog` was missing from `GoogleSidebar.tsx`.
   - `hardware` was orphaned.
2. **Bottom Navigation Deficiencies:**
   - `MobileBottomNav.tsx` had 5 hardcoded items: `OPD`, `Beds`, `Worklist`, `OT Cal`, `Calcs`.
   - `Operative Notes` and `Catalog`—the two most frequent resident tools—were buried under the "More" hamburger drawer.

---

## 17. Search Audit: Upgrading Search to Clinical Infrastructure

### Current Limitation:
`CommandMenu` (`Cmd+K`) only indexes admitted patients, booked cases, and navigation routes.

### The Required Upgrade:
When an IR resident types in the search bar:
- `"TIPS"` $\rightarrow$ Returns:
  1. **Procedure Blueprint:** TIPS / DIPS Recanalization (Indications, RIJV Access, 10mm Viatorr Stent-Graft, Pre/Post PSG <= 12 mmHg).
  2. **Calculator:** Rotterdam Score / Clichy Score / MELD.
  3. **Admitted Patients:** Live patients awaiting TIPS.
  4. **Logbook History:** Prior TIPS cases in the registry.
- `"BAE"` $\rightarrow$ Returns:
  1. **Procedure Blueprint:** Bronchial Artery Embolization (Spinal branch alert, 5F Mikaelsson, 355-500um PVA).
  2. **Active Worklist:** Today's hemoptysis cases.

---

## 18. Error, Loading & Empty-State Audit

1. **Empty Search States:**
   - In `catalog/page.tsx`, typing an unmatched query showed an empty screen without a button to clear filters or search the extended 1,120 master catalog.
2. **Sync Toast Errors:**
   - Network failure warnings in `op-clinic/page.tsx` blocked form elements on small screens.

---

## 19. "Before $\rightarrow$ After" UX Plan for Major Surfaces

### Surface 1: The App Homepage (`/dashboard`)
* **CURRENT:** Blind redirect to `/dashboard/calendar`. User is confused; no home cockpit.
* **PROBLEMS:** Zero orientation; lacks resident quick-actions; fails the 5-second test.
* **NEW INFORMATION HIERARCHY:**
  1. **Search Bar:** "Search procedures, anatomy, hardware, calculators, patients..."
  2. **Quick Case Preparation:** 1-tap chips for today's routine procedures (BAE, TIPS, TACE, PTBD, VenaSeal, PCD).
  3. **Today's Operational Pulse:** Active in-lab case status, occupied beds count, pending consults.
  4. **High-Yield Clinical Tools:** Calculators (MELD, Rotterdam, Contrast limit), Master Catalog, Logbook.
* **PRIMARY ACTION:** Instant search or 1-tap case prep.

### Surface 2: Global Search (`CommandMenu.tsx`)
* **CURRENT:** Only matches patient names, HID, and page links.
* **PROBLEMS:** Fails the primary learning/procedural use case.
* **NEW INFORMATION HIERARCHY:**
  - Group 1: Procedures & Clinical Blueprints (100 Core + 16 Routine).
  - Group 2: Clinical Calculators & Protocols.
  - Group 3: Active Patients & Cath-Lab Cases.
  - Group 4: Navigation Routes.
* **PRIMARY ACTION:** Press `Cmd+K` $\rightarrow$ type procedure $\rightarrow$ instant clinical blueprint modal.

### Surface 3: Ward Bed Board (`/dashboard/bed-board`)
* **CURRENT:** Reads from unlinked `INITIAL_BEDS` and `patientLogisticsStore`.
* **PROBLEMS:** Desynchronized with OPD admissions; updates in OPD do not appear on bed board.
* **NEW HIERARCHY:** Single unified state source connected directly to `useEndoflowStore`.

---

## 20. Prioritized Remediation Plan

| Priority | Issue / Task | Target Location | Impact |
| :--- | :--- | :--- | :--- |
| **P0** | **Build Real Resident Home Cockpit (`/dashboard`)** | `apps/web-app/app/dashboard/page.tsx` | Replaces blind redirect with true clinical command center |
| **P0** | **Elevate Search to First-Class Infrastructure** | `apps/web-app/app/components/command-menu.tsx` | Enables instant procedure, hardware, and calculator search |
| **P1** | **Unify Bed Board with `useEndoflowStore`** | `apps/web-app/app/dashboard/bed-board/page.tsx` | Eliminates state divergence between OPD and Wards |
| **P1** | **Add Catalog & Notes to Sidebar & Bottom Dock** | `GoogleSidebar.tsx`, `MobileBottomNav.tsx` | Exposes core resident tools in 1 tap |
| **P2** | **Prune Dead Phantom Folders & Code** | `ai-copilot/`, `calculators/`, `report/`, etc. | Eliminates 7 orphaned directories and dead imports |
| **P2** | **Ensure Full Mobile Bottom-Dock Clearance** | `apps/web-app/app/dashboard/layout.tsx` | Prevents navigation dock from occluding action buttons |
| **P3** | **Design System Spacing & Surface Standardization** | Global CSS / Component cards | Consistent Google Minimalist clinical workstation |

---
*End of Audit Report. Proceeding to Phase 1 & Phase 2 Execution.*
