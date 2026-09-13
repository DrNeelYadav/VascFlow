import { describe, it, expect } from 'vitest';
import { buttonVariants } from '../../packages/ui-kit/src/button';
import { cardVariants } from '../../packages/ui-kit/src/card';
import { cn } from '../../packages/ui-kit/src/utils';

describe('Vascule OS UI Kit (@vascule/ui-kit)', () => {
  describe('Button Variants & Styling Tokens', () => {
    it('generates cobalt variant with Google Blue (#1A73E8) background and white text', () => {
      const classes = buttonVariants({ variant: 'cobalt' });
      expect(classes).toContain('bg-[#1A73E8]');
      expect(classes).toContain('text-white');
      expect(classes).toContain('hover:bg-[#1557B0]');
    });

    it('generates oled variant with Google White (#FFFFFF) background eliminating solid black buttons', () => {
      const classes = buttonVariants({ variant: 'oled' });
      expect(classes).toContain('bg-[#FFFFFF]');
      expect(classes).toContain('border-[#DADCE0]');
      expect(classes).toContain('hover:bg-[#F1F3F4]');
    });

    it('generates secondary variant with clean white (#FFFFFF) background, dark text (#3C4043), and border (#DADCE0)', () => {
      const classes = buttonVariants({ variant: 'secondary' });
      expect(classes).toContain('bg-[#FFFFFF]');
      expect(classes).toContain('text-[#3C4043]');
      expect(classes).toContain('border-[#DADCE0]');
    });

    it('generates destructive variant with soft pastel red (#FCE8E6) background and dark red text (#C5221F)', () => {
      const classes = buttonVariants({ variant: 'destructive' });
      expect(classes).toContain('bg-[#FCE8E6]');
      expect(classes).toContain('text-[#C5221F]');
      expect(classes).toContain('border-[#FAD2CF]');
    });

    it('generates ghost variant with transparent background and subtle hover', () => {
      const classes = buttonVariants({ variant: 'ghost' });
      expect(classes).toContain('bg-transparent');
      expect(classes).toContain('text-[#5F6368]');
      expect(classes).toContain('hover:bg-[#F1F3F4]');
    });

    it('supports pill-shaped (rounded-full) and rounded-lg geometries', () => {
      const defaultButton = buttonVariants({ size: 'default' });
      expect(defaultButton).toContain('rounded-lg');

      const pillButton = buttonVariants({ size: 'pill' });
      expect(pillButton).toContain('rounded-full');

      const pillSmallButton = buttonVariants({ size: 'pill-sm' });
      expect(pillSmallButton).toContain('rounded-full');

      const shapedPill = buttonVariants({ shape: 'pill' });
      expect(shapedPill).toContain('rounded-full');

      const shapedRounded = buttonVariants({ shape: 'rounded' });
      expect(shapedRounded).toContain('rounded-lg');
    });
  });

  describe('Card Variants & Elevation Tokens', () => {
    it('generates default card with sleek border and MD3 subtle elevation', () => {
      const classes = cardVariants({ variant: 'default' });
      expect(classes).toContain('bg-[#FFFFFF]');
      expect(classes).toContain('border-[#DADCE0]');
      expect(classes).toContain('shadow-md-1');
      expect(classes).toContain('dark:bg-[#000000]');
      expect(classes).toContain('dark:border-[#1E293B]');
    });

    it('generates oled card with OLED Black background and subtle border', () => {
      const classes = cardVariants({ variant: 'oled' });
      expect(classes).toContain('bg-[#000000]');
      expect(classes).toContain('border-[#1E293B]');
      expect(classes).toContain('text-white');
    });
  });

  describe('Utility Functions', () => {
    it('merges class names and resolves conflicting Tailwind classes', () => {
      const merged = cn('px-2 py-1 bg-[#FFFFFF]', 'px-4 font-semibold');
      expect(merged).toContain('px-4');
      expect(merged).not.toContain('px-2');
      expect(merged).toContain('py-1');
      expect(merged).toContain('bg-[#FFFFFF]');
      expect(merged).toContain('font-semibold');
    });
  });

  describe('Language & Localization Constraints', () => {
    it('ensures 100% English content and zero Hindi characters across design tokens', () => {
      const cobaltClasses = buttonVariants({ variant: 'cobalt' });
      expect(/[\u0900-\u097F]/.test(cobaltClasses)).toBe(false);

      const oledClasses = buttonVariants({ variant: 'oled' });
      expect(/[\u0900-\u097F]/.test(oledClasses)).toBe(false);

      const cardClasses = cardVariants({ variant: 'default' });
      expect(/[\u0900-\u097F]/.test(cardClasses)).toBe(false);
    });
  });
});
