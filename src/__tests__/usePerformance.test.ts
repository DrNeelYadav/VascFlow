import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce, throttle } from '../hooks/usePerformance';

describe('High-Performance Utilities & Hooks (usePerformance)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('debounce', () => {
    it('executes only once after the wait duration has elapsed', () => {
      const fn = vi.fn();
      const debouncedFn = debounce(fn, 200);

      debouncedFn('first');
      debouncedFn('second');
      debouncedFn('third');

      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(199);
      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(1);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith('third');
    });

    it('cancels pending invocation when cancel() is called', () => {
      const fn = vi.fn();
      const debouncedFn = debounce(fn, 200);

      debouncedFn('will-cancel');
      debouncedFn.cancel();

      vi.advanceTimersByTime(300);
      expect(fn).not.toHaveBeenCalled();
    });
  });

  describe('throttle', () => {
    it('executes immediately on first call, and throttles rapid subsequent calls', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn(1);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(1);

      throttledFn(2);
      throttledFn(3);
      expect(fn).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenCalledWith(3);
    });

    it('cancels scheduled trailing call when cancel() is called', () => {
      const fn = vi.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn(1);
      throttledFn(2);
      throttledFn.cancel();

      vi.advanceTimersByTime(200);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(1);
    });
  });
});
