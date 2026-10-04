# Pre-Task Knowledge Graph Protocol

**MANDATORY STEP 0** — Before starting ANY coding or architecture task in this workspace:

## Step 0.0 — Zero-Code Execution Gate & Socratic Clarification
- **Zero-Code Lock:** Do NOT write or modify application code without explicit user instruction. Preliminary phases are strictly reserved for PRD, rules, and architecture specs.
- **Clarification / Question-Asking Authority:** If any user intent or requirement is ambiguous or underspecified, STOP immediately and formulate clarifying questions rather than guessing or making assumptions.

## Step 0.0b — Pre-Load Skills, Plugins, MCP Servers & Data Graphers
Before writing any code, verify and pre-load all relevant assets:
- **Relevant Skills:** Pre-load domain skills (`healthcare-cdss-patterns`, `healthcare-emr-patterns`, `react-patterns`, `frontend-patterns`, `prisma-patterns`, `backend-patterns`).
- **MCP Servers:** Verify MCP tools (Postgres, Firebase, Gemini API, SQLite).
- **Data Graphers:** Pre-load `graphify.ai` knowledge graph and `ponytail` discipline before a single line of code is modified.

## Step 0.1 — Read the Knowledge Graph
```
Read: c:\SSO\KNOWLEDGE_GRAPH.md
```
This file documents:
- The full monorepo topology (29 dashboard routes, all packages)
- God nodes (the 10 most-connected symbols — touch with extreme care)
- Patient data flow (`INITIAL_ENDOFLOW_PATIENTS` → all pages)
- Protocol → Calculator linkage map
- Scheme / tariff data flow
- Component hierarchy
- State management rules (Zustand atomic selectors)
- Agent skill protocol reference

## Step 0.2 — Query the Graphify Knowledge Graph
If the task touches architectural dependencies or cross-file data flows, run:
```bash
# Navigate affected-area dependencies
graphify query "<affected component or function>"

# Trace a specific data path
graphify path "<SourceSymbol>" "<TargetSymbol>"
```
Graphify output lives at: `c:\SSO\graphify-out\`
- `graph.html` — Interactive visual explorer (open in browser)
- `graph.json` — Raw graph data (342 nodes · 709 edges)
- `GRAPH_REPORT.md` — God nodes, communities, knowledge gaps

## Step 0.3 — Apply the Three Agent Skills

### 1. Karpathy (Always On)
- Think Before Coding: state assumptions, surface ambiguity
- Simplicity First: minimum code to solve the task
- Surgical Precision: touch only necessary files
- Zero Placeholders: all code must be complete and typed
- Verify: run `npx tsc --noEmit` + `npm test` before closing

### 2. Graphify-Windows (Architecture Changes)
Activate when: adding a new page, new data file, new calculator, new package, or cross-file refactoring.
Invoke the `knowledge-graph-agent` sub-agent to re-run graphify and update `graphify-out/`.

### 3. Ponytail & Design Discipline (Every Coding Task)
Senior-developer discipline — maximum output, minimum code, minimum tokens:
- **"See the design, don't change the design"**: Preserve proven clinical layouts, visual hierarchy, spacing rhythms, and borders. Do NOT restyle working UI.
- **100–200 line document ceiling**: Every component must be partitioned to ~100–200 lines. Split mega-files into modular subsets.
- **Extract custom hooks (`use*.ts`)**: Move state, mutations, and clinical handlers out of JSX into clean, testable hooks.
- **Read before writing**: grep/read only the exact files affected
- **One surgical edit**: smallest possible diff that satisfies the task
- **Zero redundant tokens**: no self-evident comments, no restating the task
- **Reuse before creating**: check `cn()`, existing hooks, existing utils first
- **No scaffolding waste**: no boilerplate, no `TODO` placeholders
- **Single-pass correctness**: fix all TSC errors in one round
- **Speed over ceremony**: skip planning artifacts for changes under 50 lines

## Step 0.4 — Check God Nodes
If your task touches any of these, read ALL their dependents first:

| Symbol | Dependents | File |
|--------|-----------|------|
| `cn()` | 59 components | `lib/utils.ts` |
| `useEndoflowStore` / `useClinicalStore` | 36 components | `dashboard/useEndoflowStore.ts` |
| `calculateMacd()` | 15 call sites | `lib/calculators.ts:36` |
| `calculateEgfrCkdEpi2021()` | 9 call sites | `lib/calculators.ts:~110` |
| `DRUG_PROTOCOLS` | all protocols page | `lib/data/protocolsData.ts` |
| `INITIAL_ENDOFLOW_PATIENTS` | 10+ pages | `lib/realData/worklistData.ts` |
| `PROCEDURE_CALCULATORS` | all calculators | `lib/procedureCalculators.ts:3543` |

## Verification Gates (Run Before Closing Any Task)
```powershell
npx tsc --noEmit                          # 0 errors required
npm test                                  # 150/150 tests required
npm run build --prefix apps/web-app       # 38/38 routes required
```
