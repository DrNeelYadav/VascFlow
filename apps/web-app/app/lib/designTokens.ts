/**
 * Scalable Design Tokens & Theme Management Module
 *
 * Implements a 3-tier Design Token architecture adhering to the W3C Design Tokens
 * Community Group (DTCG) specification and Tailwind CSS CSS Custom Properties methodology.
 *
 * Architecture:
 * - Tier 1: Primitive Tokens (Base palettes: Slate, Crimson, Emerald, Amber, Cyan)
 * - Tier 2: Semantic Tokens (Mapped to HSL CSS variables for Light & Cath Lab Ultra-Dark modes)
 * - Tier 3: Component Utility Tokens (Consolidated Tailwind classes ensuring seamless transitions)
 */

export interface ColorToken {
  hsl: string;
  hex: string;
  description: string;
}

export interface SemanticThemeTokens {
  background: ColorToken;
  foreground: ColorToken;
  card: ColorToken;
  cardForeground: ColorToken;
  popover: ColorToken;
  popoverForeground: ColorToken;
  primary: ColorToken;
  primaryForeground: ColorToken;
  secondary: ColorToken;
  secondaryForeground: ColorToken;
  muted: ColorToken;
  mutedForeground: ColorToken;
  accent: ColorToken;
  accentForeground: ColorToken;
  destructive: ColorToken;
  destructiveForeground: ColorToken;
  border: ColorToken;
  input: ColorToken;
  ring: ColorToken;
}

export interface DesignTokenSystem {
  name: string;
  version: string;
  themes: {
    clinicalDeskLight: SemanticThemeTokens;
    cathLabUltraDark: SemanticThemeTokens;
  };
  typography: {
    fontSans: string;
    fontMono: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  transitions: {
    themeSwitch: string;
  };
}

export const CLINICAL_DESIGN_TOKENS: DesignTokenSystem = {
  name: 'SMS IR-RIS Design Token System',
  version: '2.0.0',
  themes: {
    clinicalDeskLight: {
      background: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Daylight ward & clinical desk canvas' },
      foreground: { hsl: '222 47% 11%', hex: '#0F172A', description: 'High contrast text for daylight reading' },
      card: { hsl: '0 0% 100%', hex: '#FFFFFF', description: 'Clean elevated card surface' },
      cardForeground: { hsl: '222 47% 11%', hex: '#0F172A', description: 'Card content foreground' },
      popover: { hsl: '0 0% 100%', hex: '#FFFFFF', description: 'Popover and dropdown surface' },
      popoverForeground: { hsl: '222 47% 11%', hex: '#0F172A', description: 'Popover text foreground' },
      primary: { hsl: '346 77% 49%', hex: '#DC2626', description: 'SMS Crimson brand primary' },
      primaryForeground: { hsl: '0 0% 100%', hex: '#FFFFFF', description: 'Primary action text' },
      secondary: { hsl: '210 40% 96.1%', hex: '#F1F5F9', description: 'Secondary button and tab backgrounds' },
      secondaryForeground: { hsl: '222 47% 11%', hex: '#0F172A', description: 'Secondary button label' },
      muted: { hsl: '210 40% 96.1%', hex: '#F1F5F9', description: 'Subtle container backgrounds' },
      mutedForeground: { hsl: '215.4 16.3% 46.9%', hex: '#64748B', description: 'Muted auxiliary captions and timestamps' },
      accent: { hsl: '210 40% 96.1%', hex: '#F1F5F9', description: 'Hover and active state highlights' },
      accentForeground: { hsl: '222 47% 11%', hex: '#0F172A', description: 'Accent text foreground' },
      destructive: { hsl: '0 84.2% 60.2%', hex: '#EF4444', description: 'Critical warnings and emergency alerts' },
      destructiveForeground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Destructive button label' },
      border: { hsl: '214.3 31.8% 91.4%', hex: '#E2E8F0', description: 'Clean divider and border lines' },
      input: { hsl: '214.3 31.8% 91.4%', hex: '#E2E8F0', description: 'Form input field outline' },
      ring: { hsl: '346 77% 49%', hex: '#DC2626', description: 'Keyboard focus indicator ring' }
    },
    cathLabUltraDark: {
      background: { hsl: '222 47% 4%', hex: '#070A10', description: 'Cath Lab fluoroscopy low-glare canvas' },
      foreground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Anti-fatigue luminescent typography' },
      card: { hsl: '222 47% 7%', hex: '#0F1523', description: 'Dark angiographic workstation card' },
      cardForeground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Workstation card text' },
      popover: { hsl: '222 47% 7%', hex: '#0F1523', description: 'Dark modal and dropdown overlay' },
      popoverForeground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Dark popover text' },
      primary: { hsl: '346 77% 49%', hex: '#DC2626', description: 'High-visibility Crimson action beacon' },
      primaryForeground: { hsl: '0 0% 100%', hex: '#FFFFFF', description: 'Primary action text' },
      secondary: { hsl: '217.2 32.6% 17.5%', hex: '#1E293B', description: 'Cath lab elevated panels' },
      secondaryForeground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Secondary button label' },
      muted: { hsl: '217.2 32.6% 17.5%', hex: '#1E293B', description: 'Muted dark surfaces' },
      mutedForeground: { hsl: '215 20.2% 65.1%', hex: '#94A3B8', description: 'Subtle captions and inactive metadata' },
      accent: { hsl: '217.2 32.6% 17.5%', hex: '#1E293B', description: 'Hovered row in dark mode' },
      accentForeground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Hovered text' },
      destructive: { hsl: '0 62.8% 30.6%', hex: '#7F1D1D', description: 'Deep red safety alert' },
      destructiveForeground: { hsl: '210 40% 98%', hex: '#F8FAFC', description: 'Destructive label' },
      border: { hsl: '217.2 32.6% 17.5%', hex: '#1E293B', description: 'Cath lab structural grid borders' },
      input: { hsl: '217.2 32.6% 17.5%', hex: '#1E293B', description: 'Dark input border' },
      ring: { hsl: '346 77% 49%', hex: '#DC2626', description: 'Cath lab focus ring' }
    }
  },
  typography: {
    fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  radii: {
    sm: 'calc(var(--radius) - 4px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    xl: '0.75rem',
    full: '9999px'
  },
  transitions: {
    themeSwitch: 'color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out'
  }
};

/**
 * Applies or toggles dark mode class on document element with localStorage persistence.
 */
export function applyTheme(isDark: boolean): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  try {
    localStorage.setItem('sms_ir_theme', isDark ? 'dark' : 'light');
  } catch {
    // Ignore storage errors in restricted iframe environments
  }
}

/**
 * Reads preferred theme from localStorage or OS system preference.
 */
export function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const saved = localStorage.getItem('sms_ir_theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
  } catch {
    // Fall through to OS preference
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
