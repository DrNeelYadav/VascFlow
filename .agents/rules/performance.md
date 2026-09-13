# Vascule OS High-Performance & Smoothness Directives

To maintain sub-50ms interaction latency and 60 FPS across all devices and Angio Suite displays, adhere strictly to these principles:

## 1. 60 FPS Transitions & Hardware Acceleration
- Animate only composite properties: `transform` (translate/scale) and `opacity`.
- Never animate layout-triggering properties (`height`, `width`, `top`, `bottom`, `margin`, `padding`).
- Use `will-change: transform, opacity` sparingly on active drawer/dialog surfaces during open/close transitions.

## 2. React 18 & Zustand State Optimization
- **Atomic Zustand Selectors**: Never call `useVasculeStore()` without a selector. Always extract the minimal slice: `useVasculeStore(s => s.activeTab)`.
- **Heavy Computations**: Wrap large array transformations (RIS logs, MAAY/RGHS catalog lookups, schedule slots) in `useMemo`.
- **Event Handlers**: Wrap frequently passed event handlers in `useCallback` to prevent unnecessary child re-renders.

## 3. Code Splitting & Dynamic Imports
- Lazy-load heavy dialogs, drawers, and secondary views using `React.lazy` or `next/dynamic` (e.g., DICOM viewer, Report Studio, System Admin Drawer).
- Keep initial bundle size small so First Contentful Paint (FCP) remains under 800ms.

## 4. Query Caching & Debouncing
- Set appropriate `staleTime` and `gcTime` on TanStack Query instances for static or semi-static data (e.g., scheme codes, drugs, catalog).
- Debounce live search inputs by 250ms to prevent render stutter and request thrashing.
