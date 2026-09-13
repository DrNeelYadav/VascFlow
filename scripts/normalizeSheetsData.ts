import * as fs from 'fs';
import * as path from 'path';

interface ProcedureRow {
  procedureType: string;
  defaultFollowupType: string;
  defaultIntervalNumber: number;
  defaultIntervalUnit: string;
}

interface NormalizedDataset {
  procedureTypes: Array<ProcedureRow & {
    name: string;
    category: string;
    code: string;
    rghsCode?: string;
    icd10: string;
    baseTariffInr: number;
  }>;
  payerSchemes: string[];
  patientLogColumns: string[];
  followupRules: Record<string, string>;
  summary: {
    totalProcedures: number;
    totalPayerSchemes: number;
    totalColumns: number;
  };
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let insideQuote = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (insideQuote && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === ',' && !insideQuote) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

async function normalize() {
  console.log('--- Starting Data Normalization Pipeline ---');

  const settingsPath = path.resolve('sheet_settings.csv');
  const patientLogPath = path.resolve('patient_log.csv');

  if (!fs.existsSync(settingsPath)) {
    throw new Error(`Missing ${settingsPath}`);
  }

  const settingsContent = fs.readFileSync(settingsPath, 'utf-8');
  const settingsLines = settingsContent.split('\n').map(l => l.trim()).filter(Boolean);

  const procedures: ProcedureRow[] = [];
  const payerSchemes: string[] = [];

  // Line 4 has headers: Procedure Type,Default Follow-up Type,Default Interval Number,Default Interval Unit,,Operator Name,,Referring Doctor,,Payer / Scheme
  for (let i = 4; i < settingsLines.length; i++) {
    const cols = parseCSVLine(settingsLines[i]);
    const procType = cols[0];
    const followType = cols[1];
    const intNum = parseInt(cols[2], 10);
    const intUnit = cols[3];
    const scheme = cols[9];

    if (procType) {
      procedures.push({
        procedureType: procType,
        defaultFollowupType: followType,
        defaultIntervalNumber: isNaN(intNum) ? 4 : intNum,
        defaultIntervalUnit: intUnit || 'Weeks'
      });
    }
    if (scheme && !payerSchemes.includes(scheme)) {
      payerSchemes.push(scheme);
    }
  }

  let patientLogColumns: string[] = [];
  if (fs.existsSync(patientLogPath)) {
    const patientLogContent = fs.readFileSync(patientLogPath, 'utf-8');
    const firstLine = patientLogContent.split('\n')[0];
    patientLogColumns = parseCSVLine(firstLine).filter(Boolean);
  }

  // Procedure enrichment metadata
  const procedureCategories: Record<string, { name: string; category: string; code: string; rghsCode?: string; icd10: string; baseTariffInr: number }> = {
    'TACE': { name: 'Transarterial Chemoembolization (cTACE / DEB-TACE)', category: 'Interventional Oncology', code: '2849-IN061A', rghsCode: '693 / 12', icd10: 'C22.0', baseTariffInr: 47960 },
    'TARE (Y90)': { name: 'Transarterial Radioembolization (TARE / Yttrium-90)', category: 'Interventional Oncology', code: '2849-IN061C', rghsCode: '693 / 13', icd10: 'C22.0', baseTariffInr: 85000 },
    'RFA': { name: 'Radiofrequency Ablation (RFA - Liver / Renal / Bone)', category: 'Tumor Ablation', code: '2849-IN044A', rghsCode: '693 / 14', icd10: 'C22.0', baseTariffInr: 25440 },
    'MWA': { name: 'Microwave Ablation (MWA - Liver / Lung / Bone)', category: 'Tumor Ablation', code: '2849-IN045A', rghsCode: '693 / 16', icd10: 'C22.0', baseTariffInr: 31840 },
    'Cryoablation': { name: 'Percutaneous Cryoablation (Renal / Soft Tissue / Bone)', category: 'Tumor Ablation', code: '2849-IN046A', rghsCode: '693 / 24', icd10: 'C64.9', baseTariffInr: 42000 },
    'PTBD': { name: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & SEMS', category: 'Biliary Interventions', code: '1849-SG105A', rghsCode: '582', icd10: 'C24.0', baseTariffInr: 16000 },
    'PTGBD': { name: 'Percutaneous Transhepatic Gallbladder Drainage (PTGBD)', category: 'Biliary Interventions', code: '1849-IN057A-GB', rghsCode: '584', icd10: 'K81.0', baseTariffInr: 14000 },
    'Nephrostomy (PCN)': { name: 'Percutaneous Nephrostomy (PCN)', category: 'Urinary Interventions', code: '1849-IN013A', rghsCode: '910', icd10: 'N13.0', baseTariffInr: 14000 },
    'DJ Stenting': { name: 'Antegrade Percutaneous Double-J (DJ) Ureteral Stenting', category: 'Urinary Interventions', code: '2849-IN015A', rghsCode: '912', icd10: 'N13.1', baseTariffInr: 13220 },
    'Renal Angioplasty': { name: 'Renal Artery Angioplasty & Stenting', category: 'Arterial Interventions', code: '2849-IN023B', rghsCode: '693 / 20', icd10: 'I15.0', baseTariffInr: 60880 },
    'Peripheral Angioplasty/Stenting': { name: 'Peripheral Arterial Angioplasty & Bare Metal Stenting', category: 'Arterial Interventions', code: '2849-IN023D', rghsCode: '693 / 21', icd10: 'I70.20', baseTariffInr: 60880 },
    'Uterine Fibroid Embolization': { name: 'Uterine Artery Embolization (UAE / UFE)', category: 'Vascular Embolization', code: '2849-IN017B-UFE', rghsCode: '693 / 26', icd10: 'D25.9', baseTariffInr: 32000 },
    'Varicocele Embolization': { name: 'Internal Spermatic Vein Varicocele Embolization', category: 'Venous Interventions', code: '2849-IN020B', rghsCode: '693 / 17', icd10: 'I86.1', baseTariffInr: 22000 },
    'IVC Filter Placement': { name: 'Inferior Vena Cava (IVC) Filter Placement', category: 'Venous Interventions', code: '2849-IN034A', rghsCode: '693 / 19', icd10: 'I82.9', baseTariffInr: 15520 },
    'IVC Filter Retrieval': { name: 'Percutaneous Endovascular IVC Filter Retrieval', category: 'Venous Interventions', code: '2849-IN034C', rghsCode: '693 / 23', icd10: 'Z98.89', baseTariffInr: 11520 },
    'Central Venous Catheter': { name: 'Tunnelled Central Venous Catheter (Permacath)', category: 'Venous Access', code: '2849-IN009A', rghsCode: '693 / 08', icd10: 'Z49.01', baseTariffInr: 11000 },
    'Portacath Insertion': { name: 'Subcutaneous Chemotherapy Port Insertion', category: 'Venous Access', code: '2849-SC076A', rghsCode: '693 / 09', icd10: 'Z45.2', baseTariffInr: 11000 },
    'Liver Biopsy': { name: 'Image-Guided Percutaneous / Transjugular Liver Biopsy', category: 'Biopsy Registry', code: '2849-IN059A', rghsCode: '693 / 01', icd10: 'R93.2', baseTariffInr: 8000 },
    'Renal Biopsy': { name: 'Ultrasound-Guided Percutaneous Renal Biopsy', category: 'Biopsy Registry', code: '1849-IN059B', rghsCode: '693 / 02', icd10: 'N04.9', baseTariffInr: 7000 },
    'Lung Biopsy': { name: 'CT-Guided Percutaneous Transthoracic Lung Biopsy', category: 'Biopsy Registry', code: '1849-IN059C', rghsCode: '693 / 03', icd10: 'R91.8', baseTariffInr: 7500 },
    'Bone Biopsy': { name: 'CT-Guided Percutaneous Bone / Spine Lesion Biopsy', category: 'Biopsy Registry', code: '1849-IN059D', rghsCode: '693 / 04', icd10: 'M89.9', baseTariffInr: 8500 },
    'Sclerotherapy': { name: 'Percutaneous Sclerotherapy for Vascular Malformations', category: 'Vascular Anomalies', code: '1849-IN074A', rghsCode: '693 / 05', icd10: 'D18.01', baseTariffInr: 9120 },
    'Gastrostomy/Jejunostomy': { name: 'Percutaneous Radiological Gastrostomy (PRG)', category: 'Non-Vascular Interventions', code: '1849-IN060A', rghsCode: '585', icd10: 'K22.2', baseTariffInr: 6320 },
    'GI Bleed Embolization': { name: 'Superselective Transcatheter Arterial Embolization for GI Bleed', category: 'Vascular Embolization', code: '2849-IN048A', rghsCode: '693 / 11', icd10: 'K92.2', baseTariffInr: 38500 },
    'Other': { name: 'Specialized Interventional Radiology Procedure', category: 'Specialized IR', code: '2849-IN099A', rghsCode: '693 / 99', icd10: 'Z98.89', baseTariffInr: 10000 }
  };

  const enrichedProcedures = procedures.map(p => {
    const meta = procedureCategories[p.procedureType] || {
      name: p.procedureType,
      category: 'General Interventional Radiology',
      code: 'IR-GEN-01',
      icd10: 'Z98.89',
      baseTariffInr: 10000
    };
    return {
      ...p,
      ...meta
    };
  });

  const normalizedData: NormalizedDataset = {
    procedureTypes: enrichedProcedures,
    payerSchemes,
    patientLogColumns,
    followupRules: {
      'Overdue': 'Due date passed, follow-up not completed (Alert: Red)',
      'Due Soon': 'Due date within 7 calendar days (Alert: Yellow)',
      'Done': 'Follow-up Done Date recorded (Alert: Green)',
      'Pending': 'Due date more than 7 calendar days away',
      'Not Required': 'Patient Status is Lost to Follow-up, Expired, or Follow-up Complete'
    },
    summary: {
      totalProcedures: enrichedProcedures.length,
      totalPayerSchemes: payerSchemes.length,
      totalColumns: patientLogColumns.length
    }
  };

  const outputPath = path.resolve('src/data/normalizedTrackerData.json');
  fs.writeFileSync(outputPath, JSON.stringify(normalizedData, null, 2), 'utf-8');
  console.log(`Saved normalized dataset to ${outputPath}`);
  console.log(`Summary: ${normalizedData.summary.totalProcedures} procedures, ${normalizedData.summary.totalPayerSchemes} schemes, ${normalizedData.summary.totalColumns} patient log columns.`);
}

normalize().catch(err => {
  console.error('Normalization error:', err);
  process.exit(1);
});
