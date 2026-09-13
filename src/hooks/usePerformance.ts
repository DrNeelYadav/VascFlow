import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Creates a debounced function that delays invoking `func` until after `waitMs`
 * milliseconds have elapsed since the last time the debounced function was invoked.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  waitMs: number = 250
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, waitMs);
  };

  debounced.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per every `waitMs` milliseconds.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  waitMs: number = 50
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let lastRan = 0;
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;

  const throttled = (...args: Parameters<T>) => {
    const now = Date.now();
    const remaining = waitMs - (now - lastRan);
    lastArgs = args;

    if (remaining <= 0 || remaining > waitMs) {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      lastRan = now;
      func(...args);
    } else if (timerId === null) {
      timerId = setTimeout(() => {
        lastRan = Date.now();
        timerId = null;
        if (lastArgs) {
          func(...lastArgs);
        }
      }, remaining);
    }
  };

  throttled.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    lastArgs = null;
  };

  return throttled;
}

/**
 * Debounces a value by a specified delay in milliseconds.
 * Useful for search inputs and rapid filters to prevent unnecessary re-renders.
 */
export function useDebounce<T>(value: T, delayMs: number = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delayMs]);

  return debouncedValue;
}

/**
 * Throttles a callback function so it only fires at most once per `intervalMs`.
 * Ideal for 60fps animations, resize observers, and scroll listeners.
 */
export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  intervalMs: number = 50
): (...args: Parameters<T>) => void {
  const lastRan = useRef<number>(0);
  const callbackRef = useRef<T>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRan.current >= intervalMs) {
        lastRan.current = now;
        callbackRef.current(...args);
      }
    },
    [intervalMs]
  );
}

/**
 * Monitors element visibility with IntersectionObserver for lazy-loading off-screen DOM nodes.
 */
export function useIntersectionObserver(
  targetRef: React.RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, options.threshold, options.root, options.rootMargin]);

  return isVisible;
}
