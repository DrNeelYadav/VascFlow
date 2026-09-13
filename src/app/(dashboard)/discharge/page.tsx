'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useClinicalStore } from '@/stores/useClinicalStore';
import { calculateMacd, calculateEgfrCkdEpi2021 } from '@/lib/calculators';
import { serializeDischargePayload, copyToClipboard } from '@/lib/ihmsBridge';
import {
  FileText,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Printer,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DischargeFormValues {
  procedureName: string;
  procedureDate: string;
  operator: string;
  accessSite: string;
  sheathSize: string;
  fluoroTimeMinutes: number;
  contrastVolumeMl: number;
  hardwareUsed: string;
  embolicAgents: string;
  immediateComplications: string;
  hemostasisMethod: string;
  chiefComplaints: string;
  historyOfPresentIllness: string;
  preOpLabs: string;
  preOpImaging: string;
  intraOpNotes: string;
  hospitalCourse: string;
  dischargeVitals: string;
  dischargeMedications: string;
  dischargeAdvice: string;
  followUpAdvice: string;
}

export default function DischargeStudioPage() {
  const activePatient = useClinicalStore((s) => s.activePatient);

  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);
  const [ocrFileName, setOcrFileName] = useState<string | null>(null);
  const [isOcrProcessing, setIsOcrProcessing] = useState(false);

  // Kidney & safety metrics
  const patientEgfr = calculateEgfrCkdEpi2021(
    activePatient.serumCreatinine,
    activePatient.age,
    activePatient.gender === 'Female'
  );

  const macdCalc = calculateMacd(activePatient.weightKg, activePatient.serumCreatinine);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<DischargeFormValues>({
    defaultValues: {
      procedureName: activePatient.procedureName || 'Transarterial Chemoembolization (TACE)',
      procedureDate: new Date().toISOString().split('T')[0],
      operator: 'Dr. Choudhary (SR) / Dr. Sharma (DM Fellow)',
      accessSite: 'Right Common Femoral Artery (RCFA)',
      sheathSize: '5F Radiofocus Introducer Sheath (Terumo)',
      fluoroTimeMinutes: 14.5,
      contrastVolumeMl: 45,
      hardwareUsed: '5F Yashiro Catheter, 0.035 Radifocus Wire, 2.7F Progreat Microcatheter with 0.014 Wire',
      embolicAgents: 'Lipiodol 10 mL + Doxorubicin 50 mg emulsion, followed by 300-500um PVA particles',
      immediateComplications: 'None. Hemodynamically stable throughout procedure.',
      hemostasisMethod: 'Manual compression for 15 minutes; compression bandage applied.',
      chiefComplaints: 'Weight loss, mild right upper quadrant abdominal discomfort, and known hepatitis B.',
      historyOfPresentIllness: 'Known cirrhotic presenting with AFP elevation (640 ng/mL). CECT revealed 4.2 cm arterializing SOL in Segment VII/VIII.',
      preOpLabs: `Hb: 11.2 g/dL | TLC: 6,400 | Platelets: 98,000 | INR: 1.25 | Cr: ${activePatient.serumCreatinine} mg/dL | Bilirubin: ${activePatient.totalBilirubin} mg/dL | Albumin: ${activePatient.serumAlbumin} g/dL`,
      preOpImaging: 'CECT Abdomen: 42 x 38 mm hypervascular lesion in right hepatic lobe with rapid portal washout. Compatible with LI-RADS 5 (HCC).',
      intraOpNotes: 'Under local anesthesia, RCFA cannulated. 5F Yashiro engaged Celiac axis and Common Hepatic Artery. Selective catheterization of anterior branch of Right Hepatic Artery with Progreat microcatheter. Superselective tumor stain opacified. Infused Lipiodol-Doxorubicin emulsion followed by PVA until complete devascularization. Post-procedure angiogram shows stasis.',
      hospitalCourse: 'Patient monitored in IR Day Care for 6 hours post-procedure. Puncture site soft with intact distal pulses. Tolerated oral liquids well.',
      dischargeVitals: 'BP: 124/82 mmHg | HR: 74 bpm | SpO2: 99% on room air | Temp: 98.4 F',
      dischargeMedications: 'Tab Pantoprazole 40mg OD x 7 days\nTab Paracetamol 650mg SOS for pain/fever\nTab Ondansetron 4mg BD x 3 days\nContinue regular antivirals (Tenofovir 300mg OD)',
      dischargeAdvice: 'Strict bed rest for 12 hours. Avoid lifting heavy weights for 48 hours. Watch for puncture site swelling or groin hematoma.',
      followUpAdvice: 'Review in IR OPD after 4 weeks with fresh LFT, Serum Creatinine, and follow-up Triphasic CECT Abdomen.'
    }
  });

  const currentContrastVolume = watch('contrastVolumeMl');
  const isContrastExceeded = currentContrastVolume > macdCalc.macdMl;

  const handleSimulatedOcrDrop = (fileName: string) => {
    setIsOcrProcessing(true);
    setOcrFileName(fileName);

    setTimeout(() => {
      setValue('procedureName', 'Percutaneous Transhepatic Biliary Drainage (PTBD)');
      setValue('accessSite', 'Right Intercostal Approach (8th ICS Mid-Axillary Line)');
      setValue('sheathSize', '8.5F Biliary Drainage Catheter');
      setValue('contrastVolumeMl', 35);
      setValue('fluoroTimeMinutes', 18.2);
      setValue('hardwareUsed', '22G Chiba needle, 0.018 micro-puncture system, 0.035 Amplatz stiff wire, 8.5F Ring biliary catheter.');
      setValue('embolicAgents', 'N/A (External-Internal Biliary Decompression)');
      setValue('chiefComplaints', 'Deepening painless obstructive jaundice and pruritus for 1 month.');
      setValue('intraOpNotes', 'Right 8th intercostal segment 6 biliary radicle punctured under ultrasound guidance. Cholangiogram demonstrated Bismuth-Corlette Type II confluence stricture. Wire negotiated into duodenum. 8.5F external-internal biliary drain deployed across ampulla.');
      setIsOcrProcessing(false);
    }, 600);
  };

  const handleCopySummary = () => {
    const formData = watch();
    const payloadObj = serializeDischargePayload({
      patient: activePatient,
      chiefComplaints: formData.chiefComplaints,
      historyOfPresentIllness: formData.historyOfPresentIllness,
      preOpLabs: formData.preOpLabs,
      preOpImaging: formData.preOpImaging,
      procedureName: formData.procedureName,
      procedureDate: formData.procedureDate,
      operator: formData.operator,
      accessSite: formData.accessSite,
      sheath: formData.sheathSize,
      contrastVolumeMl: formData.contrastVolumeMl,
      fluoroTimeMinutes: formData.fluoroTimeMinutes,
      hardwareUsed: formData.hardwareUsed,
      embolicAgents: formData.embolicAgents,
      intraOpNotes: formData.intraOpNotes,
      complications: formData.immediateComplications,
      hemostasis: formData.hemostasisMethod,
      hospitalCourse: formData.hospitalCourse,
      dischargeVitals: formData.dischargeVitals,
      dischargeMedications: formData.dischargeMedications,
      dischargeAdvice: formData.dischargeAdvice,
      followUpAdvice: formData.followUpAdvice
    });

    copyToClipboard(payloadObj.clinicalFormattedNote);
    setCopiedStatus('Discharge note copied to clipboard.');
    setTimeout(() => setCopiedStatus(null), 3000);
  };

  const handlePrintA4 = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 select-none">
      {/* Header Bar */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="font-heading font-medium text-2xl text-[#202124] tracking-tight">
                Discharge Summary
              </h1>
              <p className="text-xs text-[#5F6368] mt-1">
                Interventional Radiology procedural record and patient discharge instructions.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrintA4}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-xs font-medium text-[#202124] transition shadow-xs"
              >
                <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] active:bg-[#1557B0] text-white text-xs font-medium transition shadow-xs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Summary</span>
              </button>
            </div>
          </div>

          {/* Active Target Patient Info Banner */}
          <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-lg p-3.5 flex items-center justify-between flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-2 font-mono">
              <span className="font-bold text-[#202124]">{activePatient.name}</span>
              <span className="text-[#5F6368]">({activePatient.age}Y/{activePatient.gender.charAt(0)})</span>
              <span className="text-[#DADCE0]">•</span>
              <span className="text-[#202124]">CR: {activePatient.crNo}</span>
              <span className="text-[#DADCE0]">•</span>
              <span className="text-[#202124]">IPD: {activePatient.ipdNo}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span>Weight: <b>{activePatient.weightKg}kg</b></span>
              <span className="text-[#DADCE0]">•</span>
              <span>Cr: <b>{activePatient.serumCreatinine}</b></span>
              <span className="text-[#DADCE0]">•</span>
              <span>eGFR: <b className="text-[#1A73E8]">{patientEgfr} mL/min</b></span>
              <span className="text-[#DADCE0]">•</span>
              <span>MACD: <b className="text-[#1E8E3E]">{macdCalc.macdMl} mL</b></span>
            </div>
          </div>

          {copiedStatus && (
            <div className="bg-[#E6F4EA] border border-[#1E8E3E]/30 text-[#137333] px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E8E3E] shrink-0" />
              <span>{copiedStatus}</span>
            </div>
          )}
        </div>
      </div>

      {/* Section 1: Notes & Intake */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1A73E8]" />
            <h2 className="font-heading font-medium text-base text-[#202124]">
              1. Operative Notes
            </h2>
          </div>
          <span className="text-xs text-[#5F6368]">Optional Template Pre-fill</span>
        </div>

        <div className="border border-dashed border-[#DADCE0] hover:border-[#1A73E8] bg-[#F8F9FA] rounded-lg p-6 text-center transition">
          <UploadCloud className="w-8 h-8 text-[#5F6368] mx-auto mb-2" />
          <p className="text-xs font-medium text-[#202124]">
            {ocrFileName ? `Loaded: ${ocrFileName}` : 'Select a clinical template to populate form fields'}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <button
              type="button"
              onClick={() => handleSimulatedOcrDrop('TACE_PostOp_Template.txt')}
              className="px-3.5 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-medium text-[#202124] shadow-xs"
            >
              Load TACE Template
            </button>
            <button
              type="button"
              onClick={() => handleSimulatedOcrDrop('PTBD_PostOp_Template.txt')}
              className="px-3.5 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F1F3F4] text-xs font-medium text-[#202124] shadow-xs"
            >
              Load PTBD Template
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Procedure Parameters */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-heading font-medium text-base text-[#202124]">
          2. Procedure Parameters
        </h2>

        {isContrastExceeded && (
          <div className="bg-[#FCE8E6] border border-[#F5C2C7] text-[#C5221F] p-4 rounded-lg flex items-start gap-3 text-xs">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <div className="font-medium">Cigarroa MACD Ceiling Exceeded</div>
              <div className="text-[11px] mt-0.5">
                Current contrast volume ({currentContrastVolume} mL) exceeds maximum allowable ceiling of {macdCalc.macdMl} mL.
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Procedure Name
            </label>
            <input
              type="text"
              {...register('procedureName', { required: true })}
              className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Procedure Date
            </label>
            <input
              type="date"
              {...register('procedureDate', { required: true })}
              className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Operating Physicians
            </label>
            <input
              type="text"
              {...register('operator', { required: true })}
              className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Vascular / Organ Access Site
            </label>
            <input
              type="text"
              {...register('accessSite')}
              className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Contrast Volume Administered (mL)
            </label>
            <input
              type="number"
              {...register('contrastVolumeMl', { valueAsNumber: true })}
              className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Fluoroscopy Time (Minutes)
            </label>
            <input
              type="number"
              step="0.1"
              {...register('fluoroTimeMinutes', { valueAsNumber: true })}
              className="w-full h-11 px-3.5 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono"
            />
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Hardware Used
            </label>
            <textarea
              rows={2}
              {...register('hardwareUsed')}
              className="w-full p-3 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Embolic / Therapeutic Agents
            </label>
            <textarea
              rows={2}
              {...register('embolicAgents')}
              className="w-full p-3 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Clinical Assessment */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-heading font-medium text-base text-[#202124]">
          3. Clinical Assessment
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Chief Complaints & History
            </label>
            <textarea
              rows={3}
              {...register('chiefComplaints')}
              className="w-full p-3 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Detailed Operative Technique
            </label>
            <textarea
              rows={4}
              {...register('intraOpNotes')}
              className="w-full p-3 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Post-Procedure Orders */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="font-heading font-medium text-base text-[#202124]">
          4. Post-Procedure Orders & Discharge Advice
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Discharge Medications
            </label>
            <textarea
              rows={3}
              {...register('dischargeMedications')}
              className="w-full p-3 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none font-mono leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5F6368] mb-1.5">
              Discharge & Follow-Up Advice
            </label>
            <textarea
              rows={3}
              {...register('followUpAdvice')}
              className="w-full p-3 rounded-lg border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#DADCE0]">
          <button
            type="button"
            onClick={handlePrintA4}
            className="px-5 py-2.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-xs font-medium text-[#202124] shadow-xs"
          >
            Print Record
          </button>
          <button
            type="button"
            onClick={handleCopySummary}
            className="px-6 py-2.5 rounded-full bg-[#1A73E8] hover:bg-[#1765CC] active:bg-[#1557B0] text-white text-xs font-medium shadow-xs"
          >
            Copy Summary Note
          </button>
        </div>
      </div>
    </div>
  );
}
