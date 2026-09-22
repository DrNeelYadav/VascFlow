import { PrismaClient } from "@prisma/client";

/**
 * Enterprise Soft-Delete Extension for VascFlow OS.
 * Intercepts delete mutations on patient logs and clinical cases,
 * setting `deletedAt = new Date()` to prevent accidental clinical data loss.
 */
export function createSoftDeletePrismaClient(baseClient?: PrismaClient) {
  const client = baseClient ?? new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

  return client.$extends({
    name: "softDelete",
    query: {
      patientLogEntry: {
        async delete({ args }) {
          return client.patientLogEntry.update({
            where: args.where,
            data: { deletedAt: new Date() },
          });
        },
        async deleteMany({ args }) {
          return client.patientLogEntry.updateMany({
            where: args.where,
            data: { deletedAt: new Date() },
          });
        },
      },
      patientCase: {
        async delete({ args }) {
          return client.patientCase.update({
            where: args.where,
            data: { deletedAt: new Date() },
          });
        },
        async deleteMany({ args }) {
          return client.patientCase.updateMany({
            where: args.where,
            data: { deletedAt: new Date() },
          });
        },
      },
    },
  });
}
