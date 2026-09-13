import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  StaffPersona,
  StaffRoleCode,
  PatientSafetyProfile,
  BookingSlot,
  BiopsyEntry
} from '../types/clinical';
import { getTomorrowDateString } from '../lib/utils';

export const STAFF_PERSONAS: Record<StaffRoleCode, StaffPersona> = {
  FC01: { code: 'FC01', name: 'Prof. & HOD', title: 'Prof. & Head of Department', role: 'Finalizing Consultant', tier: 'Faculty', badgeClass: 'bg-red-900/60 text-red-200 border-red-700', dept: 'Interventional Radiology', desc: 'Faculty Sign-off' },
  FC02: { code: 'FC02', name: 'Dr. Gupta', title: 'Dr. Gupta (Assoc. Prof.)', role: 'Consultant Interventionalist', tier: 'Faculty', badgeClass: 'bg-red-900/60 text-red-200 border-red-700', dept: 'Interventional Radiology', desc: 'Consultant Review' },
  DM01: { code: 'DM01', name: 'Dr. Sharma', title: 'Dr. Sharma (DM Fellow)', role: 'Senior Interventional Fellow', tier: 'Resident', badgeClass: 'bg-blue-900/60 text-blue-200 border-blue-700', dept: 'Cath Lab Suite', desc: 'Senior Call' },
  DM02: { code: 'DM02', name: 'Dr. Verma', title: 'Dr. Verma (DM Fellow)', role: 'Junior Fellow / Logger', tier: 'Resident', badgeClass: 'bg-blue-900/60 text-blue-200 border-blue-700', dept: 'Cath Lab Suite', desc: 'Junior Call' },
  SR01: { code: 'SR01', name: 'Dr. Choudhary', title: 'Dr. Choudhary (Senior Resident)', role: 'Senior Resident', tier: 'Resident', badgeClass: 'bg-indigo-900/60 text-indigo-200 border-indigo-700', dept: 'Angio Suite', desc: 'Procedure Execution' },
  NO01: { code: 'NO01', name: 'Sister Sunita', title: 'Sr. Sister Sunita (NO)', role: 'Cath Lab In-Charge', tier: 'Nursing', badgeClass: 'bg-emerald-900/60 text-emerald-200 border-emerald-700', dept: 'Angio Suite', desc: 'Vitals & Fasting' },
  NO02: { code: 'NO02', name: 'Staff Nurse Anita', title: 'Staff Nurse Anita (NO)', role: 'Daycare In-Charge', tier: 'Nursing', badgeClass: 'bg-emerald-900/60 text-emerald-200 border-emerald-700', dept: 'IR Daycare', desc: 'Recovery Care' },
  TC01: { code: 'TC01', name: 'Vikram Singh', title: 'Vikram Singh (Technician)', role: 'Chief Cath Lab Tech', tier: 'Technician', badgeClass: 'bg-amber-900/60 text-amber-200 border-amber-700', dept: 'DSA Lab 1', desc: 'DSA & Hardware' },
  TC02: { code: 'TC02', name: 'Ramesh Kumar', title: 'Ramesh Kumar (Technician)', role: 'Asst. Radiographer', tier: 'Technician', badgeClass: 'bg-amber-900/60 text-amber-200 border-amber-700', dept: 'DSA Lab 1', desc: 'Inventory Prep' },
  CR01: { code: 'CR01', name: 'Rajesh Meena', title: 'Rajesh Meena (Counter)', role: 'Scheme Desk In-Charge', tier: 'Counter', badgeClass: 'bg-purple-900/60 text-purple-200 border-purple-700', dept: 'Registration Desk', desc: 'MAAY / RGHS Pre-Auth' }
};

export const DEFAULT_ACTIVE_PATIENT: PatientSafetyProfile = {
  id: 'pt-100',
  crNo: 'CR-2026-9012',
  ipdNo: 'IPD-89230',
  name: 'Kamla Devi',
  age: 54,
  gender: 'Female',
  bedNo: 'Bed 07 (IR Day Care)',
  weightKg: 58,
  serumCreatinine: 1.1,
  totalBilirubin: 1.2,
  serumAlbumin: 3.4,
  inr: 1.2,
  sodiumMeqL: 138,
  scheme: 'MAAY_CHIRANJEEVI',
  schemeTid: 'TID-2026-CHIR-90812',
  diagnosis: 'Refractory Lower GI Bleeding / Cecal Angiodysplasia',
  procedureName: 'Mesenteric Angiography & Microcoil Embolization',
  procedureCode: '2849-IN048A',
  phone: '9829123456'
};

const DEFAULT_BOOKINGS: BookingSlot[] = [
  {
    id: 'book-100',
    patientId: 'pt-100',
    patientName: 'Kamla Devi',
    age: 54,
    gender: 'Female',
    phone: '9829123456',
    crNo: 'CR-2026-9012',
    ipdNo: 'IPD-89230',
    bedNo: 'Bed 07 (IR Day Care)',
    diagnosis: 'Refractory Lower GI Bleeding / Cecal Angiodysplasia',
    procedureCode: '2849-IN048A',
    procedureName: 'Mesenteric Angiography & Microcoil Embolization',
    targetDate: getTomorrowDateString(),
    slotTime: '09:00 AM (First Case)',
    isEmergency: false,
    d1CallCompleted: false,
    status: 'Scheduled',
    hardwareIndented: '5F Sheath, 5F Cobra C2, 2.7F Progreat, 0.018 Microcoils (2mm, 3mm)',
    vendorContact: 'Cook Medical / Terumo India',
    notes: 'Hemoglobin stable at 8.2 g/dL. Strict midnight fasting advised.'
  },
  {
    id: 'book-101',
    patientId: 'pt-101',
    patientName: 'Rajesh Sharma',
    age: 52,
    gender: 'Male',
    phone: '8003733656',
    crNo: 'CR-2026-7841',
    ipdNo: 'IPD-88912',
    bedNo: 'Bed 14 (Ward 3B)',
    diagnosis: 'Cirrhosis, Sarin IGV1 Gastric Varices, Gastrorenal Shunt',
    procedureCode: '2849-IN064A',
    procedureName: 'PARTO (Plug-Assisted Retrograde Transvenous Obliteration)',
    targetDate: '2026-11-02',
    slotTime: '09:00 AM',
    isEmergency: false,
    d1CallCompleted: true,
    status: 'Completed',
    completedAt: '2026-11-02 11:45 AM',
    hardwareIndented: '8F Cook Flexor Sheath (45cm), 12mm Amplatzer Vascular Plug II, Lipiodol',
    vendorContact: 'Abbott Vascular / Jaipur Surgical',
    notes: 'GRS diameter 10.2 mm. Plug sized to 14 mm.'
  },
  {
    id: 'book-102',
    patientId: 'pt-102',
    patientName: 'Manish Agarwal',
    age: 28,
    gender: 'Male',
    phone: '8921487812',
    crNo: 'CR-2026-7890',
    ipdNo: 'IPD-88934',
    bedNo: 'Bed 08 (IR Day Care)',
    diagnosis: 'High-Flow Arteriovenous Malformation (AVM) of Right Hand',
    procedureCode: '2849-IN049B',
    procedureName: 'Hand AVM Embolization (Onyx 18 Liquid Embolic)',
    targetDate: '2026-11-03',
    slotTime: '11:30 AM',
    isEmergency: false,
    d1CallCompleted: true,
    status: 'Scheduled',
    hardwareIndented: '5F Radial Sheath, 5F Envoy Catheter, Marathon Microcatheter, Onyx 18',
    vendorContact: 'Medtronic India',
    notes: 'Direct nidal cannulation planned.'
  },
  {
    id: 'book-103',
    patientId: 'pt-103',
    patientName: 'Hamid Khan',
    age: 61,
    gender: 'Male',
    phone: '9252793162',
    crNo: 'CR-2026-7915',
    ipdNo: 'IPD-88970',
    bedNo: 'Bed 22 (Gastro Ward)',
    diagnosis: 'Multifocal Hepatocellular Carcinoma (HCC), BCLC B, Child-Pugh A',
    procedureCode: '2849-IN061A',
    procedureName: 'Conventional TACE (cTACE - Lipiodol + Doxorubicin)',
    targetDate: '2026-11-04',
    slotTime: '09:00 AM',
    isEmergency: false,
    d1CallCompleted: false,
    status: 'Scheduled',
    hardwareIndented: '5F Sheath, 5F Cobra, 2.7F Progreat, Lipiodol 10ml, Doxorubicin 50mg',
    vendorContact: 'Guerbet India / Terumo',
    notes: 'Bilirubin 1.1 mg/dL, Platelets 110,000 /uL.'
  },
  {
    id: 'book-104',
    patientId: 'pt-104',
    patientName: 'Rahul Meena',
    age: 26,
    gender: 'Male',
    phone: '9829144321',
    crNo: 'CR-2026-7940',
    ipdNo: 'IPD-88988',
    bedNo: 'Bed 05 (Day Care)',
    diagnosis: 'Primary Left Testicular Varicocele (Grade III) with Scrotal Pain',
    procedureCode: '2849-IN020B',
    procedureName: 'Varicocele Embolization (Sandwich Coils + STS Foam)',
    targetDate: '2026-11-04',
    slotTime: '01:00 PM',
    isEmergency: false,
    d1CallCompleted: false,
    status: 'Scheduled',
    hardwareIndented: '5F CFA Sheath, 5F Cobra, 2.7F Progreat, 0.035 Nester Coils, STS 3%',
    vendorContact: 'Cook Medical',
    notes: 'Doppler confirmed retrograde reflux on Valsalva.'
  },
  {
    id: 'book-108',
    patientId: 'pt-108',
    patientName: 'Sunita Devi',
    age: 48,
    gender: 'Female',
    phone: '9829554433',
    crNo: 'CR-2026-8102',
    ipdNo: 'IPD-89110',
    bedNo: 'Bed 15 (Chest Ward)',
    diagnosis: 'Recurrent Massive Hemoptysis, Post-TB Bronchiectasis',
    procedureCode: '2849-MC018A',
    procedureName: 'Bronchial Artery Embolization (BAE)',
    targetDate: '',
    slotTime: '',
    isEmergency: true,
    d1CallCompleted: false,
    status: 'Scheduled',
    isUnscheduled: true,
    hardwareIndented: '5F Sheath, 5F Mikaelson, 2.7F Progreat, PVA 355-500um',
    vendorContact: 'Terumo India',
    notes: 'Awaiting PAC clearance before setting OT slot.'
  }
];

const DEFAULT_BIOPSIES: BiopsyEntry[] = [
  {
    id: 'bx-01',
    date: '2026-09-10',
    station: 'D9211_CT',
    crNo: 'CR-2026-10492',
    name: 'Kailash Chand',
    phone: '9829012345',
    organ: 'Right Lung Lower Lobe Mass (4.2 cm)',
    needleGauge: '18G Coaxial Tru-cut (3 cores)',
    coresCount: 3,
    operatorResident: 'Dr. Sharma (DM Fellow)',
    pathLab: 'In-House SMS Pathology',
    status: 'Pending',
    diagnosticYield: true
  },
  {
    id: 'bx-02',
    date: '2026-09-08',
    station: 'Room922_USG',
    crNo: 'CR-2026-10231',
    name: 'Shanti Devi',
    phone: '9414098765',
    organ: 'Liver Segment VI SOL (3.8 cm)',
    needleGauge: '18G Tru-cut (2 cores)',
    coresCount: 2,
    operatorResident: 'Dr. Verma (DM Fellow)',
    pathLab: 'In-House SMS Pathology',
    status: 'Report_Received',
    diagnosticYield: true,
    histopathologyDiagnosis: 'Moderately differentiated Hepatocellular Carcinoma (HCC), Glypican-3 positive'
  },
  {
    id: 'bx-03',
    date: '2026-08-28',
    station: 'D9211_CT',
    crNo: 'CR-2026-09881',
    name: 'Brij Mohan',
    phone: '9828112233',
    organ: 'Retroperitoneal Para-Aortic Lymph Node',
    needleGauge: '18G Coaxial (2 cores)',
    coresCount: 2,
    operatorResident: 'Dr. Choudhary (SR)',
    pathLab: 'In-House SMS Pathology',
    status: 'Lost_To_Followup',
    diagnosticYield: true,
    histopathologyDiagnosis: 'Pending report (> 14 days overdue)'
  }
];

interface ClinicalState {
  activeRole: StaffRoleCode;
  activePatient: PatientSafetyProfile;
  bookings: BookingSlot[];
  biopsies: BiopsyEntry[];
  isCathLabDarkMode: boolean;
  isDossierOpen: boolean;
  isAdminOpen: boolean;
  dossierPatient: PatientSafetyProfile | null;
  hasHydrated: boolean;
  setHasHydrated: (hydrated: boolean) => void;

  // Actions
  setActiveRole: (role: StaffRoleCode) => void;
  setActivePatient: (patient: PatientSafetyProfile) => void;
  updatePatientSafetyProfile: (updates: Partial<PatientSafetyProfile>) => void;
  toggleTheme: () => void;
  openDossier: (patient?: PatientSafetyProfile | BookingSlot) => void;
  closeDossier: () => void;
  openAdmin: () => void;
  closeAdmin: () => void;

  // Bookings Actions
  addBooking: (booking: BookingSlot) => void;
  updateBooking: (id: string, updates: Partial<BookingSlot>) => void;
  toggleD1Call: (id: string) => void;
  toggleCompletedStatus: (id: string) => void;
  rescheduleBooking: (id: string, newDate: string, newSlot: string) => void;

  // Biopsies Actions
  addBiopsy: (biopsy: BiopsyEntry) => void;
  updateBiopsy: (id: string, updates: Partial<BiopsyEntry>) => void;

  // Data Vault Actions
  exportDatabaseJson: () => string;
  importDatabaseJson: (jsonString: string) => boolean;
  resetToDefaults: () => void;
}

export const useClinicalStore = create<ClinicalState>()(
  persist(
    (set, get) => ({
      activeRole: 'DM01',
      activePatient: DEFAULT_ACTIVE_PATIENT,
      bookings: DEFAULT_BOOKINGS,
      biopsies: DEFAULT_BIOPSIES,
      isCathLabDarkMode: false,
      isDossierOpen: false,
      isAdminOpen: false,
      dossierPatient: DEFAULT_ACTIVE_PATIENT,
      hasHydrated: false,

      setHasHydrated: (hydrated) => set({ hasHydrated: hydrated }),
      setActiveRole: (role) => set({ activeRole: role }),

      setActivePatient: (patient) => set({ activePatient: patient }),

      updatePatientSafetyProfile: (updates) =>
        set((state) => ({ activePatient: { ...state.activePatient, ...updates } })),

      toggleTheme: () => set((state) => ({ isCathLabDarkMode: !state.isCathLabDarkMode })),

      openDossier: (candidate) => {
        let p: PatientSafetyProfile = get().activePatient;
        if (candidate) {
          if ('weightKg' in candidate) {
            p = candidate;
          } else {
            p = {
              id: candidate.patientId,
              crNo: candidate.crNo,
              ipdNo: candidate.ipdNo,
              name: candidate.patientName,
              age: candidate.age || 50,
              gender: (candidate.gender as any) || 'Male',
              bedNo: candidate.bedNo,
              weightKg: 60,
              serumCreatinine: 1.1,
              totalBilirubin: 1.2,
              serumAlbumin: 3.5,
              inr: 1.2,
              sodiumMeqL: 138,
              scheme: 'MAAY_CHIRANJEEVI',
              schemeTid: 'TID-2026-CHIR-90812',
              diagnosis: candidate.diagnosis,
              procedureName: candidate.procedureName,
              procedureCode: candidate.procedureCode,
              phone: candidate.phone
            };
          }
        }
        set({ dossierPatient: p, isDossierOpen: true });
      },

      closeDossier: () => set({ isDossierOpen: false }),

      openAdmin: () => set({ isAdminOpen: true }),
      closeAdmin: () => set({ isAdminOpen: false }),

      addBooking: (booking) =>
        set((state) => ({ bookings: [booking, ...state.bookings] })),

      updateBooking: (id, updates) =>
        set((state) => ({
          bookings: state.bookings.map((b) => (b.id === id ? { ...b, ...updates } : b))
        })),

      toggleD1Call: (id) =>
        set((state) => ({
          bookings: state.bookings.map((b) => {
            if (b.id === id) {
              const nextState = !b.d1CallCompleted;
              return {
                ...b,
                d1CallCompleted: nextState,
                callDoneAt: nextState ? new Date().toLocaleString('en-GB') : undefined
              };
            }
            return b;
          })
        })),

      toggleCompletedStatus: (id) =>
        set((state) => ({
          bookings: state.bookings.map((b) => {
            if (b.id === id) {
              const isComp = b.status === 'Completed';
              return {
                ...b,
                status: isComp ? 'Scheduled' : 'Completed',
                completedAt: !isComp ? new Date().toLocaleString('en-GB') : undefined
              };
            }
            return b;
          })
        })),

      rescheduleBooking: (id, newDate, newSlot) =>
        set((state) => ({
          bookings: state.bookings.map((b) => {
            if (b.id === id) {
              return {
                ...b,
                targetDate: newDate,
                slotTime: newSlot,
                isUnscheduled: false,
                d1CallCompleted: false,
                status: 'Scheduled'
              };
            }
            return b;
          })
        })),

      addBiopsy: (biopsy) =>
        set((state) => ({ biopsies: [biopsy, ...state.biopsies] })),

      updateBiopsy: (id, updates) =>
        set((state) => ({
          biopsies: state.biopsies.map((bx) => (bx.id === id ? { ...bx, ...updates } : bx))
        })),

      exportDatabaseJson: () => {
        const state = get();
        return JSON.stringify(
          {
            activeRole: state.activeRole,
            activePatient: state.activePatient,
            bookings: state.bookings,
            biopsies: state.biopsies,
            exportedAt: new Date().toISOString()
          },
          null,
          2
        );
      },

      importDatabaseJson: (jsonString: string) => {
        try {
          const parsed = JSON.parse(jsonString);
          if (parsed && Array.isArray(parsed.bookings) && Array.isArray(parsed.biopsies)) {
            set({
              bookings: parsed.bookings,
              biopsies: parsed.biopsies,
              activePatient: parsed.activePatient || get().activePatient,
              activeRole: parsed.activeRole || get().activeRole
            });
            return true;
          }
          return false;
        } catch {
          return false;
        }
      },

      resetToDefaults: () =>
        set({
          activePatient: DEFAULT_ACTIVE_PATIENT,
          bookings: DEFAULT_BOOKINGS,
          biopsies: DEFAULT_BIOPSIES
        })
    }),
    {
      name: 'sms_ir_store_v1',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

/**
 * SSR-safe hydration hook for Next.js App Router.
 * Prevents hydration mismatch by returning undefined until client storage is mounted.
 */
export function useHydratedStore<T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
): F | undefined {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
}

