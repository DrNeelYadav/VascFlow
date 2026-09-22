/**
 * Database Resilience & Transaction Retry Handler
 * 
 * Provides fail-safe retries with exponential backoff and jitter for transient PostgreSQL
 * deadlocks (40P01, serialization_failure 40001), write conflicts (Prisma P2034),
 * and bursty angiosuite telemetry connection timeouts.
 */

export interface RetryOptions {
  maxRetries?: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
  backoffFactor?: number;
  retryableErrorCodes?: string[];
  onRetry?: (attempt: number, error: unknown, delayMs: number) => void;
}

const DEFAULT_RETRYABLE_CODES = [
  "40P01", // deadlock_detected
  "40001", // serialization_failure
  "55P03", // lock_not_available
  "P2034", // Prisma write conflict / deadlock
  "P2028", // Transaction API error / timeout
  "P1001", // Can't reach database server
  "P1002", // Database reached but timed out
  "P1008", // Operations timed out
];

export function isRetryableError(
  error: unknown,
  customCodes: string[] = DEFAULT_RETRYABLE_CODES
): boolean {
  if (!error) return false;

  const err = error as Record<string, any>;
  const code = err.code || err.sqlState || (err.meta?.code as string) || "";
  const msg = typeof err.message === "string" ? err.message : "";

  if (customCodes.includes(code)) {
    return true;
  }

  // Check common deadlock and transient connection error message patterns
  const transientPatterns = [
    /deadlock detected/i,
    /could not serialize access/i,
    /lock timeout/i,
    /write conflict/i,
    /connection terminated/i,
    /connection timed out/i,
    /Can't reach database server/i,
  ];

  return transientPatterns.some((pattern) => pattern.test(msg));
}

/**
 * Calculates exponential backoff with full jitter to avoid thundering herd problem.
 */
export function calculateJitterDelay(
  attempt: number,
  initialDelayMs: number,
  maxDelayMs: number,
  backoffFactor: number
): number {
  const exponentialDelay = initialDelayMs * Math.pow(backoffFactor, attempt - 1);
  const cappedDelay = Math.min(maxDelayMs, exponentialDelay);
  // Full jitter: random between 0 and cappedDelay
  return Math.floor(Math.random() * cappedDelay);
}

/**
 * Executes an operation with automatic retries on transient PostgreSQL deadlocks or connection dropouts.
 */
export async function withRetry<T>(
  operation: () => Promise<T>,
  options?: RetryOptions
): Promise<T> {
  const maxRetries = options?.maxRetries ?? 3;
  const initialDelayMs = options?.initialDelayMs ?? 50;
  const maxDelayMs = options?.maxDelayMs ?? 1000;
  const backoffFactor = options?.backoffFactor ?? 2;
  const retryableCodes = options?.retryableErrorCodes ?? DEFAULT_RETRYABLE_CODES;

  let attempt = 0;

  while (true) {
    attempt++;
    try {
      return await operation();
    } catch (error) {
      if (attempt > maxRetries || !isRetryableError(error, retryableCodes)) {
        throw error;
      }

      const delayMs = calculateJitterDelay(
        attempt,
        initialDelayMs,
        maxDelayMs,
        backoffFactor
      );

      if (options?.onRetry) {
        options.onRetry(attempt, error, delayMs);
      } else {
        console.warn(
          `[Database Retry] Attempt ${attempt}/${maxRetries} failed with transient error. Retrying in ${delayMs}ms...`,
          (error as Error)?.message || error
        );
      }

      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}
