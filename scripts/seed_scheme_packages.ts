import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  console.log("Ingesting official scheme packages into PostgreSQL...");
  const jsonPath = path.join(__dirname, "../packages/features/scheme-billing/src/officialSchemePackages.json");
  const rawData = fs.readFileSync(jsonPath, "utf8");
  const packages: any[] = JSON.parse(rawData);

  console.log(`Loaded ${packages.length} packages from officialSchemePackages.json`);

  const BATCH_SIZE = 500;
  let inserted = 0;

  for (let i = 0; i < packages.length; i += BATCH_SIZE) {
    const batch = packages.slice(i, i + BATCH_SIZE).map((p) => ({
      packageCode: p.packageCode,
      packageName: p.packageName,
      scheme: p.scheme,
      specialty: p.specialty || "General Interventional",
      baseTariffINR: Number(p.baseTariffINR) || 0,
      nonNabhTariffINR: p.nonNabhTariffINR ? Number(p.nonNabhTariffINR) : null,
      implantsIncluded: Boolean(p.implantsIncluded),
      preAuthRequired: Boolean(p.preAuthRequired),
      authorizedImplants: p.authorizedImplants || [],
      requiredDocuments: p.requiredDocuments || [],
    }));

    try {
      await prisma.schemePackage.createMany({
        data: batch,
        skipDuplicates: true,
      });
      inserted += batch.length;
      console.log(`Ingested ${inserted} / ${packages.length} packages...`);
    } catch (err) {
      console.warn(`Batch failed or duplicate handled:`, err);
    }
  }

  console.log(`Seeding complete. Total packages processed: ${inserted}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
