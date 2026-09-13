'use client';

import React, { useState, useCallback } from 'react';
import { motion, useReducedMotion, HTMLMotionProps, Variants } from 'framer-motion';

export interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Google Material Design 3 (MD3) Standard Easing Curves:
 * Decelerate (Standard Enter): cubic-bezier(0.2, 0, 0, 1)
 * Accelerate (Standard Exit): cubic-bezier(0.4, 0, 0.2, 1)
 */
export const GOOGLE_MD3_EASING = {
  decelerate: [0.2, 0, 0, 1] as const,
  accelerate: [0.4, 0, 0.2, 1] as const,
  standard: [0.4, 0, 0.2, 1] as const,
};

/**
 * Clean, non-distracting Google Workspace page transition.
 * Pure opacity and subtle Y-translation with exact MD3 decelerate/accelerate physics.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 4,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.2,
        ease: GOOGLE_MD3_EASING.decelerate,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -3,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.15,
        ease: GOOGLE_MD3_EASING.accelerate,
      },
    },
  };

  return (
    <motion.div
      key={id}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`w-full flex-1 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Subtle Google MD3 element fade-in for cards, alerts, and vital stat changes.
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.2,
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: GOOGLE_MD3_EASING.decelerate,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface SlideInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

/**
 * Directional slide micro-interaction for Google Workspace drawers and modals.
 */
export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'left':
        return { x: -12, y: 0 };
      case 'right':
        return { x: 12, y: 0 };
      case 'up':
        return { x: 0, y: 12 };
      case 'down':
        return { x: 0, y: -12 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialOffset() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, ...getInitialOffset() }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : 0.2,
        ease: GOOGLE_MD3_EASING.decelerate,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

/**
 * Sequential stagger container for rosters, lists, and procedure queues.
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.03,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 4 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.18,
            ease: GOOGLE_MD3_EASING.decelerate,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface RippleInstance {
  x: number;
  y: number;
  size: number;
  id: number;
}

/**
 * Google Material Design 3 Signature Ripple Surface Wrapper
 * Provides tactile, subtle click feedback on buttons, tabs, and list items.
 */
export const GoogleRipple: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ children, className = '', onClick }) => {
  const [ripples, setRipples] = useState<RippleInstance[]>([]);

  const handlePointerDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: RippleInstance = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 500);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      onMouseDown={handlePointerDown}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            top: r.y,
            left: r.x,
            width: r.size,
            height: r.size,
          }}
          className="google-ripple-effect"
        />
      ))}
    </div>
  );
};

export default PageTransition;
