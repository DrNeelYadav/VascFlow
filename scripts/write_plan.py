import os

content = """# Implementation Plan: VascFlow OS Enterprise Modernization

Transform the VascFlow repository into a secure, production-grade clinical Interventional Radiology operating system (**VascFlow OS**) adhering to healthcare security standards (HIPAA § 164.312, CWE-1236 formula injection mitigation, PostgreSQL Row-Level Security, and server-side RBAC).

---

## User Review Required

> [!IMPORTANT]
> **Legacy Root Cleanup**: Root legacy web assets (`/js/`, `/css/`, obsolete root python scripts, and legacy HTMLs) will be archived/cleaned up as all application runtime code has been modernized into Turborepo workspaces (`apps/web-app`, `apps/mobile-app`, `packages/db`, `packages/ui-kit`, `packages/api-contracts`, `packages/features`).
>
> **Massive JSON Extraction into PostgreSQL**: `officialSchemePackages.json` (2.43 MB) is currently imported into frontend bundles, inducing high main-thread blocking on hospital workstations. We will decouple it into a normalized Prisma model (`SchemePackage`) with server-side paginated full-text search at `/api/schemes/search`.
>
> **CSV / Excel Formula Injection Sanitization**: All tabular exports will be routed through a dedicated sanitization engine (`packages/utils/sanitizers.ts`) that neutralizes formula triggers (`=`, `+`, `-`, `@`, `\\t`, `\\r`) with single quotes and proper escaping.

---

## Proposed Changes Across the 5 Phases

### Phase 1: Architectural Consolidation & Cleanup

- **Clean Up Root Legacy Assets**:
  - Remove obsolete prototype scripts and legacy static files from repository root: `js/` (old vanilla JS prototypes), `css/` (unreferenced legacy styles `css/style.css`), `dist/`, `patient_log.csv`, and obsolete Python scratch extractors.
  - Retain active research abstract assets in `abstract_assets/` and documented datasets while cleaning unused scratch files.
- **Package Workspace Structure**:
  - Establish `packages/utils` workspace containing the dedicated tabular sanitization engine, date/math utilities, and validation helpers.

---

### Phase 2: Security Hardening & Formula Injection Mitigation

#### [NEW] [packages/utils/src/sanitizers.ts](file:///C:/SSO/packages/utils/src/sanitizers.ts)
- `sanitizeCsvCell(value: unknown): string`:
  - Inspects field values for formula injection vectors (`=`, `+`, `-`, `@`, `\\t`, `\\r`).
  - Prepends a single quote (`'`) to disable formula execution in Microsoft Excel and LibreOffice Calc.
  - Escapes interior double quotes (`\"\"`) and wraps in outer quotes.
- `generateSafeCsv(headers: string[], rows: unknown[][]): string`:
  - Converts tabular matrices into injection-proof CSV strings.

#### [MODIFY] Tabular Export Consumers
- [apps/web-app/app/api/census/export/route.ts](file:///C:/SSO/apps/web-app/app/api/census/export/route.ts): Route Safe Harbor research cohort exports through `sanitizeCsvCell`.
- [apps/web-app/app/components/DataToolsModal.tsx](file:///C:/SSO/apps/web-app/app/components/DataToolsModal.tsx): Replace raw string concatenation with `generateSafeCsv` and replace raw browser `alert()` with modern notification toasts.
- [apps/web-app/app/dashboard/logbook/page.tsx](file:///C:/SSO/apps/web-app/app/dashboard/logbook/page.tsx): Sanitize operative logbook CSV downloads.
- [apps/web-app/app/dashboard/census/page.tsx](file:///C:/SSO/apps/web-app/app/dashboard/census/page.tsx): Sanitize departmental census exports.

#### [MODIFY] [apps/web-app/middleware.ts](file:///C:/SSO/apps/web-app/middleware.ts)
- Enforce mandatory HTTP security headers on all responses:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy`: Enforce strict healthcare-grade script, object, and frame-ancestor boundaries.
- Strengthen server-side RBAC tiers (`Administrative`, `Faculty`, `Resident`, `Nursing`, `Technician`, `Clinician`).

#### [AUDIT] Database Row-Level Security (RLS) & Secrets Hygiene
- Audit [packages/db/migrations/20260913_rls_policies.sql](file:///C:/SSO/packages/db/migrations/20260913_rls_policies.sql) and [packages/db/tenantContext.ts](file:///C:/SSO/packages/db/tenantContext.ts) to verify complete `tenantId` isolation across `Patient`, `Staff`, `ScheduleSlot`, and `AuditLog`.
- Verify `.env` is ignored by `.gitignore` and ensure `.env.example` documents Doppler / HashiCorp Vault runtime injection.

---

### Phase 3: Database & Backend Optimization (Massive JSON Decoupling)

#### [MODIFY] [packages/db/schema.prisma](file:///C:/SSO/packages/db/schema.prisma)
- Add/normalize `SchemePackage` model:
  - Fields: `id`, `schemeType` (`MAAY` | `RGHS`), `packageCode`, `packageName`, `category`, `specialty`, `price`, `icd10`, `preAuthRequired`, `implants` (JSON), `documentationChecklist` (JSON).
  - Add search indexes on `packageCode`, `packageName`, and `schemeType`.

#### [NEW] [packages/db/src/seedSchemes.ts](file:///C:/SSO/packages/db/src/seedSchemes.ts)
- Batch-insertion seeder that reads `officialSchemePackages.json` and populates the PostgreSQL database table in efficient chunks.

#### [NEW] [apps/web-app/app/api/schemes/search/route.ts](file:///C:/SSO/apps/web-app/app/api/schemes/search/route.ts)
- Server-side paginated search route (`/api/schemes/search?q=...&scheme=...&page=...&limit=...`).
- Queries database or high-performance server memory index, returning paginated packages with total counts in `< 50ms`.

#### [MODIFY] [apps/web-app/app/dashboard/schemes/page.tsx](file:///C:/SSO/apps/web-app/app/dashboard/schemes/page.tsx)
- Refactor scheme directory to fetch from `/api/schemes/search` with debouncing and a sleek `ClinicalTableSkeleton`.
- Removes direct client-side import of the 2.43 MB JSON file, eliminating main-thread browser freezes.

---

### Phase 4: Enterprise UI/UX, Design System & Accessibility

#### [MODIFY] Design Tokens & Component Library
- Enforce tokenized clinical palette in `@vascule/ui-kit` and `apps/web-app/app/globals.css`.
- Ensure modals (`DataToolsModal`, `StatEmergencyModal`, `StatusTransitionModal`) implement:
  - Focus trap (`autoFocus` and focus containment).
  - Escape key listener for rapid keyboard dismissal.
  - Background scroll locking (`overflow-hidden` on body).

---

### Phase 5: Verification, Tests & Deployment Manifests

#### [NEW] [packages/utils/src/__tests__/sanitizers.test.ts](file:///C:/SSO/packages/utils/src/__tests__/sanitizers.test.ts)
- Comprehensive test suite for CSV formula injection mitigation:
  - Tests strings starting with `=`, `+`, `-`, `@`, `\\t`, `\\r` (e.g., `=cmd|' /C calc'!A0`, `@SUM(A1:A10)`).
  - Verifies proper single-quote prefixing, double-quote escaping, and multiline table formatting.

#### [MODIFY] Deployment Manifests
- Review and update [docker-compose.yml](file:///C:/SSO/docker-compose.yml) and [deploy/k8s/](file:///C:/SSO/deploy/k8s/) to configure environment secrets injection, health checks, and production readiness.

---

## Verification Plan

### Automated Tests
1. **Type Safety Verification**:
   ```bash
   npx.cmd tsc --noEmit --project apps/web-app/tsconfig.json
   ```
2. **Unit & Integration Test Suite**:
   ```bash
   npm test
   ```
3. **Production Next.js Build**:
   ```bash
   npm run build
   ```

### Manual & Security Verification
1. **Formula Injection Verification**:
   - Create a test patient with name `=cmd|'/C calc'!A0`.
   - Export CSV from Data Tools and Census export.
   - Inspect raw CSV file to verify formula trigger is neutral single-quoted (`\"'=cmd|'/C calc'!A0'\"`).
2. **HTTP Security Headers Check**:
   - Send `curl -I http://localhost:3001/dashboard/worklist`.
   - Verify `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, and CSP headers.
3. **Scheme Search Performance**:
   - Query `/api/schemes/search?q=TACE&limit=10`.
   - Verify server response time is `< 50ms`.
"""

target = r"C:\Users\NEEL\.gemini\antigravity\brain\d3893895-7d34-4d5d-919c-6044b61dc3fe\implementation_plan.md"
os.makedirs(os.path.dirname(target), exist_ok=True)
with open(target, "w", encoding="utf-8") as f:
    f.write(content)
print("Successfully wrote implementation plan to:", target)
