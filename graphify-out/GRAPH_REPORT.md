# Graph Report - SSO  (2026-09-13)

## Corpus Check
- 78 files · ~55,617 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .css 3)

## Summary
- 342 nodes · 709 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Module 0
- Module 1
- Module 2
- Module 3
- Module 4
- Module 5
- Module 6
- Module 7
- Module 8
- Module 9
- Module 10
- Module 11
- Module 12
- Module 13
- Module 14

## God Nodes (most connected - your core abstractions)
1. `cn()` - 59 edges
2. `useClinicalStore` - 36 edges
3. `calculateMacd()` - 15 edges
4. `isHolidayOrSunday()` - 9 edges
5. `calculateEgfrCkdEpi2021()` - 9 edges
6. `CalculatorsPage()` - 9 edges
7. `DischargeStudioPage()` - 8 edges
8. `StaffRoleCode` - 8 edges
9. `PatientSafetyProfile` - 8 edges
10. `OTCalendar()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `useClinicalStore`  [EXTRACTED]
  src/App.tsx → src/stores/useClinicalStore.ts
- `BiopsyRegistryPage()` --calls--> `cn()`  [EXTRACTED]
  src/app/(dashboard)/biopsies/page.tsx → src/lib/utils.ts
- `BiopsyRegistryPage()` --calls--> `useClinicalStore`  [EXTRACTED]
  src/app/(dashboard)/biopsies/page.tsx → src/stores/useClinicalStore.ts
- `DischargeStudioPage()` --calls--> `calculateEgfrCkdEpi2021()`  [EXTRACTED]
  src/app/(dashboard)/discharge/page.tsx → src/lib/calculators.ts
- `DischargeStudioPage()` --calls--> `calculateMacd()`  [EXTRACTED]
  src/app/(dashboard)/discharge/page.tsx → src/lib/calculators.ts

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "Module 0"
Cohesion: 0.07
Nodes (46): ConflictState, OTCalendar(), OTCalendarProps, parseDateParts(), NAV_ITEMS, NavItem, SidebarProps, Button (+38 more)

### Community 1 - "Module 1"
Cohesion: 0.08
Nodes (25): metadata, CathLabAppShell(), CathLabAppShellInner(), CathLabAppShellInnerProps, Header(), Layout(), NavigationTabs(), PatientSafetyStrip() (+17 more)

### Community 2 - "Module 2"
Cohesion: 0.07
Nodes (19): App(), AnatomicalPin, EducationPage(), IMAGING_STACKS, ImagingStack, DutyShift, INITIAL_SHIFTS, RosterPage() (+11 more)

### Community 3 - "Module 3"
Cohesion: 0.10
Nodes (23): BiopsyRegistryPage(), LoginPage(), AuthState, AuthUser, DEFAULT_USER, useAuthStore, ClinicalState, DEFAULT_ACTIVE_PATIENT (+15 more)

### Community 4 - "Module 4"
Cohesion: 0.12
Nodes (24): DischargeApiPayload, POST(), ClinicalFAB(), AlbiResult, BclcResult, BsaResult, calculateAlbi(), calculateBclc() (+16 more)

### Community 5 - "Module 5"
Cohesion: 0.15
Nodes (25): DischargeFormData, bookingSlotToFhirServiceRequest(), bookingSlotToHl7OrmO01(), createHl7Ack(), dischargeToFhirDiagnosticReport(), dischargeToHl7OruR01(), extractAllSegments(), extractSegment() (+17 more)

### Community 6 - "Module 6"
Cohesion: 0.08
Nodes (25): AdmissionStatus, AnalyticsDashboardData, AnalyticsFilter, AnalyticsKpiSummary, CategoryCount, ClinicalOutcome, CurrentlyAdmittedPatient, FollowupStatus (+17 more)

### Community 7 - "Module 7"
Cohesion: 0.16
Nodes (12): BookingPayload, GET(), POST(), EncyclopediaPage(), getHolidayDetails(), isHolidayOrSunday(), RAJASTHAN_HOLIDAYS_2026, IR_PROCEDURES (+4 more)

### Community 8 - "Module 8"
Cohesion: 0.18
Nodes (8): DischargeFormValues, DischargeStudioPage(), PatientDossierDrawer(), DRUG_PROTOCOLS, copyToClipboard(), serializeDischargePayload(), DrugProtocolsPage(), DrugProtocol

### Community 9 - "Module 9"
Cohesion: 0.21
Nodes (15): buildQidoSearchUrl(), buildWadoRsUrl(), calculateHounsfieldUnits(), computeWindowedPixel(), DICOM_TAGS, DICOM_WINDOW_PRESETS, DicomMetadata, DicomPixelSpacing (+7 more)

### Community 10 - "Module 10"
Cohesion: 0.29
Nodes (4): CLINICAL_DESIGN_TOKENS, ColorToken, DesignTokenSystem, SemanticThemeTokens

### Community 12 - "Module 12"
Cohesion: 0.40
Nodes (3): config, PERSONA_ROLE_MAP, ROLE_PERMISSIONS

### Community 14 - "Module 14"
Cohesion: 0.50
Nodes (3): CLINICAL_GUIDELINES, ClinicalGuidelineItem, ComplicationGrade

## Knowledge Gaps
- **102 isolated node(s):** `DischargeFormValues`, `AnatomicalPin`, `ImagingStack`, `IMAGING_STACKS`, `ShiftType` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 132 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Module 0` to `Module 1`, `Module 2`, `Module 3`, `Module 4`, `Module 7`, `Module 8`?**
  _High betweenness centrality (0.172) - this node is a cross-community bridge._
- **Why does `useClinicalStore` connect `Module 1` to `Module 0`, `Module 2`, `Module 3`, `Module 4`, `Module 7`, `Module 8`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `PatientSafetyProfile` connect `Module 5` to `Module 8`, `Module 1`, `Module 3`, `Module 9`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `DischargeFormValues`, `AnatomicalPin`, `ImagingStack` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Module 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07364114552893045 - nodes in this community are weakly interconnected._
- **Should `Module 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08362369337979095 - nodes in this community are weakly interconnected._
- **Should `Module 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07254623044096728 - nodes in this community are weakly interconnected._