import { describe, it, expect } from 'vitest';
import { buttonVariants } from '../components/ui/button';
import { NAV_ITEMS } from '../components/shell/Sidebar';
import { cn } from '../lib/utils';

describe('UI & Navigation Primitives (Google Workspace MD3 Standard)', () => {
  describe('Button Variants (Hyper-Minimalist Google Tokens)', () => {
    it('generates default variant classes with Google Blue primary styling', () => {
      const classes = buttonVariants({ variant: 'default' });
      expect(classes).toContain('bg-[#1A73E8]');
      expect(classes).toContain('text-white');
      expect(classes).toContain('rounded-full');
    });

    it('generates secondary variant classes with white background and subtle gray border', () => {
      const classes = buttonVariants({ variant: 'secondary' });
      expect(classes).toContain('bg-[#FFFFFF]');
      expect(classes).toContain('border-[#DADCE0]');
      expect(classes).toContain('rounded-full');
    });

    it('generates destructive variant classes with soft pastel red background', () => {
      const classes = buttonVariants({ variant: 'destructive' });
      expect(classes).toContain('bg-[#FCE8E6]');
      expect(classes).toContain('text-[#C5221F]');
      expect(classes).toContain('border-[#F5C2C7]');
    });

    it('applies custom size classes properly', () => {
      const smallClasses = buttonVariants({ size: 'sm' });
      expect(smallClasses).toContain('h-7');

      const iconClasses = buttonVariants({ size: 'icon' });
      expect(iconClasses).toContain('h-8 w-8');
    });
  });

  describe('Sanitized Navigation Items (Decluttered & AI Slot Removal)', () => {
    it('defines 11 core IR clinical modules', () => {
      expect(NAV_ITEMS).toHaveLength(11);
    });

    it('contains all mandatory clinical routes', () => {
      const paths = NAV_ITEMS.map((item) => item.path);
      expect(paths).toContain('/');
      expect(paths).toContain('/ot-booking');
      expect(paths).toContain('/roster');
      expect(paths).toContain('/encyclopedia');
      expect(paths).toContain('/discharge');
      expect(paths).toContain('/biopsies');
      expect(paths).toContain('/education');
      expect(paths).toContain('/simulations');
      expect(paths).toContain('/schemes');
      expect(paths).toContain('/calculators');
      expect(paths).toContain('/protocols');
    });

    it('enforces strictly one-word tab names without clutter', () => {
      NAV_ITEMS.forEach((item) => {
        expect(item.name.trim().split(/\s+/)).toHaveLength(1);
      });
    });

    it('has zero clutter badges across all navigation items', () => {
      NAV_ITEMS.forEach((item) => {
        expect((item as any).badge).toBeUndefined();
      });
    });

    it('uses English only for all module names with zero Hindi characters', () => {
      NAV_ITEMS.forEach((item) => {
        expect(typeof item.name).toBe('string');
        expect(item.name.length).toBeGreaterThan(0);
        // Ensure no Hindi Unicode characters (\u0900-\u097F)
        expect(/[\u0900-\u097F]/.test(item.name)).toBe(false);
      });
    });
  });

  describe('Tailwind Class Merging with Google Tokens', () => {
    it('merges class names and handles overrides correctly', () => {
      const result = cn('bg-[#F8F9FA] text-[#5F6368]', 'text-[#202124] font-bold');
      expect(result).toContain('bg-[#F8F9FA]');
      expect(result).toContain('text-[#202124]');
      expect(result).not.toContain('text-[#5F6368]');
    });
  });
});
