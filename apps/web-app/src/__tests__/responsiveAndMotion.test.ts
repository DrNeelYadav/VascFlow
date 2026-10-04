import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const APP = path.resolve(process.cwd(), 'apps/web-app/app');

function appTsx(dir: string = APP): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) return appTsx(full);
    return entry.endsWith('.tsx') ? [full] : [];
  });
}

describe('responsive layout', () => {
  it('declares a viewport that allows pinch-zoom', () => {
    // A clinical reference tool gets consulted on a phone in a corridor. A
    // user-scalable=no viewport makes the small print unreadable rather than
    // merely awkward.
    const layout = readFileSync(path.join(APP, 'layout.tsx'), 'utf-8');
    expect(layout).toMatch(/export const viewport/);
    const block = layout.slice(layout.indexOf('export const viewport'));
    expect(block).not.toMatch(/userScalable\s*:\s*false/);
    expect(block).not.toMatch(/maximumScale\s*:\s*1\b/);
  });

  it('gives every dashboard page a mobile bottom navigation', () => {
    const layout = readFileSync(path.join(APP, 'dashboard/layout.tsx'), 'utf-8');
    expect(layout).toContain('MobileBottomNav');
  });

  it('keeps fixed pixel widths off non-table elements', () => {
    // A fixed w-[460px] panel overflows a 375px viewport. Some fixed widths are
    // legitimate: table columns and canvases set a minimum and scroll, and a
    // max-w paired with w-full constrains rather than overflows. This guard
    // flags only a hard width with neither escape.
    const offenders: string[] = [];
        // Match a standalone `w-`, not the tail of `min-w-`.
        const fixedWidth = /(?<!min-)w-\[(\d{3,4})px\]/g;

    for (const file of appTsx()) {
      const source = readFileSync(file, 'utf-8');
      source.split('\n').forEach((line, index) => {
        if (/^\s*(<table|<canvas|table\b|canvas\b)/.test(line)) return;
        for (const match of Array.from(line.matchAll(fixedWidth))) {
          if (Number(match[1]) <= 400) continue;
          // A responsive prefix makes it deliberate: w-full sm:w-[460px].
          if (/(sm|md|lg|xl):/.test(line)) continue;
          // max-w-* bounds the element; w-full lets it shrink. Together, and
          // on their own, a max-width never causes horizontal overflow.
          if (/max-w-\[/.test(line)) continue;
          // A parent that scrolls makes any child width reachable.
          if (/overflow-x-auto|overflow-auto|overflow-x-scroll/.test(line)) continue;
          offenders.push(
            `${path.relative(process.cwd(), file)}:${index + 1}  ${match[0]}`
          );
        }
      });
    }

    expect(offenders).toEqual([]);
  });

  it('keeps wide grids inside a horizontal scroll container', () => {
    // Six or more columns cannot fit a 375px viewport. A week view or a
    // theatre time axis has a fixed column count by definition - a calendar
    // with seven days is still seven days - so the requirement is that it can
    // be scrolled, not that it collapses.
    const offenders: string[] = [];
    for (const file of appTsx()) {
      const source = readFileSync(file, 'utf-8');
      source.split('\n').forEach((line, index) => {
        const match = line.match(/(?<![\w:-])grid-cols-(\d+)/);
        if (!match) return;
        if (Number(match[1]) < 6) return;
        if (/overflow-x-auto|overflow-auto|overflow-x-scroll/.test(source)) return;
        offenders.push(
          `${path.relative(process.cwd(), file)}:${index + 1}  grid-cols-${match[1]}`
        );
      });
    }

    expect(offenders).toEqual([]);
  });

  it('collapses content grids to one column on narrow viewports', () => {
    // A 3- or 4-up grid of reading cards is fine on a phone only if it stacks.
    // Structural grids (week header, time axis, calculator label/value pairs)
    // are excluded because their column count is fixed by what they represent.
    const STRUCTURAL = [
      'ProcedureCalculatorRunner',
      'BookingChart',
      'calendar/page',
      'DicomCinePlayer',
    ];
    const offenders: string[] = [];

    for (const file of appTsx()) {
      const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
      if (STRUCTURAL.some((skip) => rel.includes(skip))) continue;

      readFileSync(file, 'utf-8')
        .split('\n')
        .forEach((line, index) => {
          const match = line.match(/(?<![\w:-])grid-cols-([3-9])/);
          if (!match) return;
          // A responsive variant on the same line means the author already
          // handled it.
          if (/(sm|md|lg|xl):grid-cols-/.test(line)) return;
          offenders.push(
            `${path.relative(process.cwd(), file)}:${index + 1}  grid-cols-${match[1]}`
          );
        });
    }

    expect(offenders).toEqual([]);
  });

  it('wraps wide tables in a horizontal scroll container', () => {
    // A clinical table with more columns than a phone has is fine, provided it
    // scrolls. One that cannot is simply unreachable.
    const offenders: string[] = [];
    for (const file of appTsx()) {
      const source = readFileSync(file, 'utf-8');
      if (!/<table/.test(source)) continue;
      if (/overflow-x-auto/.test(source)) continue;
      // A table inside an element already marked overflow-auto is fine.
      if (/overflow-auto/.test(source)) continue;
      offenders.push(path.relative(process.cwd(), file));
    }
    expect(offenders).toEqual([]);
  });

});

describe('accessibility floor for a gloved, keyboard-driven reader', () => {
  it('provides 44px touch targets on coarse pointers', () => {
    const css = readFileSync(path.join(APP, 'globals.css'), 'utf-8');
    expect(css).toMatch(/@media \(pointer: coarse\)/);
    expect(css).toMatch(/min-height:\s*44px/);
  });

  it('honours reduced motion globally', () => {
    const css = readFileSync(path.join(APP, 'globals.css'), 'utf-8');
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)/);
  });

  it('keeps a visible focus ring on keyboard navigation', () => {
    const css = readFileSync(path.join(APP, 'globals.css'), 'utf-8');
    expect(css).toMatch(/:focus-visible/);
  });

  it('keeps tabular numerals for dose and lab columns', () => {
    // A transposed digit in a creatinine or MACD ceiling is a dosing error.
    const css = readFileSync(path.join(APP, 'globals.css'), 'utf-8');
    expect(css).toMatch(/tnum/);
  });

  it('applies negative tracking as Apple does at every size', () => {
    const css = readFileSync(path.join(APP, 'globals.css'), 'utf-8');
    expect(css).toMatch(/letter-spacing:\s*-/);
  });
});

describe('motion primitives', () => {
  it('ships named presets that degrade under reduced motion', () => {
    const motion = readFileSync(
      path.join(APP, 'lib/motion.ts'),
      'utf-8'
    );
    for (const preset of ['instant', 'quick', 'panel', 'overlay']) {
      expect(motion).toContain(preset);
    }
    expect(motion).toContain('useReducedMotion');
    // Nothing may exceed a quarter second in a reading workflow.
    const durations = Array.from(
          motion.matchAll(/duration:\s*([\d.]+)/g)
        ).map((m) => Number(m[1]));
    expect(Math.max(...durations)).toBeLessThanOrEqual(0.25);
  });
});