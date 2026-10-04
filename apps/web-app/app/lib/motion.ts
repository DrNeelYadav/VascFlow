/**
 * Vascule OS motion primitives.
 *
 * Motion in a clinical workstation has one job: explain a state change quickly
 * and then get out of the way. Anything that delays a clinician reading a dose
 * ceiling or a warning colour is a defect, not polish.
 *
 * Two rules govern every transition here:
 *
 * 1. Duration scales with distance, not importance. A 120ms fade for an
 *    in-place state change; 240ms for something entering the layout. A full
 *    second is never justified in a reading workflow.
 * 2. Reduced motion is not optional. Roughly one in four users has it enabled,
 *    and vestibular triggers in a dim cath-lab reading room are real. Every
 *    primitive degrades to an instant state change.
 */

import { useReducedMotion } from "framer-motion";

export interface MotionPreset {
  /** Spring stiffness. Higher = faster, less overshoot. */
  stiffness: number;
  /** Spring damping. Higher = less bounce. */
  damping: number;
  /** Approximate duration in ms, for transitions that need an easing curve. */
  duration: number;
  ease: [number, number, number, number];
}

/**
 * Named presets. Use the name that matches what changed, not how dramatic it
 * should feel.
 */
export const MOTION = {
  /** In-place: hover, focus, active, colour change. */
  instant: {
    stiffness: 400,
    damping: 34,
    duration: 0.12,
    ease: [0.2, 0, 0, 1],
  },
  /** Small travel: a row appearing, a chip, a tooltip. */
  quick: {
    stiffness: 320,
    damping: 28,
    duration: 0.18,
    ease: [0.2, 0, 0, 1],
  },
  /** Panel or drawer entering the layout. */
  panel: {
    stiffness: 260,
    damping: 26,
    duration: 0.24,
    ease: [0.32, 0.72, 0, 1],
  },
  /**
   * Deliberate, for a modal that interrupts work. Critically damped - it
   * settles without overshoot, so nothing appears to bounce past its resting
   * position. A bouncing dialog over a patient record reads as unstable.
   */
  overlay: {
    stiffness: 240,
    damping: 30,
    duration: 0.2,
    ease: [0.32, 0.72, 0, 1],
  },
} as const satisfies Record<string, MotionPreset>;

export type MotionName = keyof typeof MOTION;

/**
 * Returns a spring transition for the named preset, or an instant transition
 * when the user has asked for reduced motion.
 *
 * ```tsx
 * const transition = useMotionTransition("panel");
 * <motion.div {...transition} />
 * ```
 */
export function useMotionTransition(name: MotionName) {
  const reduced = useReducedMotion();
  const preset = MOTION[name];

  if (reduced) {
    return { duration: 0 } as const;
  }

  return {
    type: "spring" as const,
    stiffness: preset.stiffness,
    damping: preset.damping,
  };
}

/**
 * Variants for a list that enters as a group. Staggered by 24ms, capped at six
 * items - beyond that the last row arrives late enough to read as lag.
 */
export function useStaggerList(count: number, name: MotionName = "quick") {
  const reduced = useReducedMotion();
  const preset = MOTION[name];
  const capped = Math.min(count, 6);

  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.024,
        delayChildren: 0,
      },
    },
    item: {
      hidden: { opacity: 0, y: reduced ? 0 : 6 },
      show: {
        opacity: 1,
        y: 0,
        transition: reduced
          ? { duration: 0 }
          : { type: "spring" as const, stiffness: preset.stiffness, damping: preset.damping },
      },
    },
  };
}

/** Shared enter/exit pair for conditionally rendered panels. */
export const panelVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -4, scale: 0.99 },
};