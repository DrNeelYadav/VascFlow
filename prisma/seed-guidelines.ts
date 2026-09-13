import { PrismaClient } from '@prisma/client';
import { CLINICAL_GUIDELINES } from '../src/data/clinicalGuidelines';

const prisma = new PrismaClient();

async function seedGuidelines() {
  console.log('Seeding CIRSE, SIR, and RERC Clinical Guidelines...');

  for (const g of CLINICAL_GUIDELINES) {
    await prisma.clinicalGuideline.upsert({
      where: { code: g.code },
      update: {
        society: g.society,
        procedureName: g.procedureName,
        title: g.title,
        year: g.year,
        evidenceGrade: g.evidenceGrade,
        indications: g.indications,
        contraindications: g.contraindications,
        technicalSuccessThreshold: g.technicalSuccessThreshold,
        majorComplicationThreshold: g.majorComplicationThreshold,
        antibioticProphylaxis: g.antibioticProphylaxis,
        preProcedureChecklist: g.preProcedureChecklist,
        postProcedureCare: g.postProcedureCare,
        gradingCriteria: JSON.stringify(g.gradingCriteria),
      },
      create: {
        code: g.code,
        society: g.society,
        procedureName: g.procedureName,
        title: g.title,
        year: g.year,
        evidenceGrade: g.evidenceGrade,
        indications: g.indications,
        contraindications: g.contraindications,
        technicalSuccessThreshold: g.technicalSuccessThreshold,
        majorComplicationThreshold: g.majorComplicationThreshold,
        antibioticProphylaxis: g.antibioticProphylaxis,
        preProcedureChecklist: g.preProcedureChecklist,
        postProcedureCare: g.postProcedureCare,
        gradingCriteria: JSON.stringify(g.gradingCriteria),
      },
    });
    console.log(`Seeded guideline: [${g.society}] ${g.code} - ${g.procedureName}`);
  }

  console.log('Finished seeding clinical guidelines successfully.');
}

seedGuidelines()
  .catch((e) => {
    console.error('Error seeding guidelines:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
