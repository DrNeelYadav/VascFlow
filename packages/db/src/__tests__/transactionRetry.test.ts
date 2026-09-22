import { describe, it, expect, vi } from "vitest";
import {
  withRetry,
  isRetryableError,
  calculateJitterDelay,
} from "../resilience/transactionRetry";

describe("Database Resilience & Transaction Retry Suite", () => {
  it("identifies PostgreSQL deadlocks, write conflicts, and transient connection drops as retryable", () => {
    expect(isRetryableError({ code: "40P01", message: "deadlock detected" })).toBe(true);
    expect(isRetryableError({ code: "P2034", message: "Transaction write conflict" })).toBe(true);
    expect(isRetryableError({ code: "40001", message: "could not serialize access" })).toBe(true);
    expect(isRetryableError({ message: "Can't reach database server at localhost:5432" })).toBe(true);
    expect(isRetryableError({ code: "P2028", message: "Transaction expired" })).toBe(true);

    // Non-retryable
    expect(isRetryableError({ code: "P2002", message: "Unique constraint failed" })).toBe(false);
    expect(isRetryableError(new Error("Syntax error in SQL statement"))).toBe(false);
  });

  it("calculates exponential jittered delay capped by maxDelayMs", () => {
    for (let attempt = 1; attempt <= 5; attempt++) {
      const delay = calculateJitterDelay(attempt, 50, 500, 2);
      expect(delay).toBeGreaterThanOrEqual(0);
      expect(delay).toBeLessThanOrEqual(500);
    }
  });

  it("successfully resolves operation immediately when no errors occur", async () => {
    const mockOp = vi.fn().mockResolvedValue({ id: "CASE-001", status: "COMMITTED" });
    const result = await withRetry(mockOp);

    expect(result).toEqual({ id: "CASE-001", status: "COMMITTED" });
    expect(mockOp).toHaveBeenCalledTimes(1);
  });

  it("retries on transient deadlock and succeeds when transaction is cleared", async () => {
    let calls = 0;
    const mockOp = vi.fn().mockImplementation(async () => {
      calls++;
      if (calls < 3) {
        const deadlockError: any = new Error("deadlock detected between CathLab-1 and CathLab-2");
        deadlockError.code = "40P01";
        throw deadlockError;
      }
      return { success: true, attempts: calls };
    });

    const retriedAttempts: number[] = [];
    const result = await withRetry<{ success: boolean; attempts: number }>(mockOp, {
      maxRetries: 3,
      initialDelayMs: 5,
      maxDelayMs: 20,
      onRetry: (attempt) => retriedAttempts.push(attempt),
    });

    expect(result.success).toBe(true);
    expect(mockOp).toHaveBeenCalledTimes(3);
    expect(retriedAttempts).toEqual([1, 2]);
  });

  it("throws immediately on non-retryable constraint violations without retrying", async () => {
    const nonRetryable = new Error("Unique constraint failed on field 'email'");
    (nonRetryable as any).code = "P2002";

    const mockOp = vi.fn().mockRejectedValue(nonRetryable);

    await expect(
      withRetry(mockOp, { maxRetries: 3, initialDelayMs: 5 })
    ).rejects.toThrow("Unique constraint failed");

    expect(mockOp).toHaveBeenCalledTimes(1);
  });

  it("throws after exhausting maxRetries if deadlock persists", async () => {
    const deadlockError: any = new Error("deadlock detected");
    deadlockError.code = "40P01";

    const mockOp = vi.fn().mockRejectedValue(deadlockError);

    await expect(
      withRetry(mockOp, { maxRetries: 2, initialDelayMs: 5, maxDelayMs: 10 })
    ).rejects.toThrow("deadlock detected");

    expect(mockOp).toHaveBeenCalledTimes(3); // Initial + 2 retries
  });
});
