import React from "react";
import Link from "next/link";
import { SmsHospitalCrest } from "../../components/SmsHospitalCrest";
import {
  ShieldAlert,
  PhoneCall,
  Clock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Sun,
  Moon,
  Droplets,
  HeartPulse,
  MapPin,
  ChevronRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

interface PatientCarePageProps {
  params: Promise<{ caseId: string }>;
}

export default async function PatientCarePage({ params }: PatientCarePageProps) {
  const { caseId } = await params;
  const decodedCaseId = decodeURIComponent(caseId || "SMS-IR-DISCHARGE").toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 font-sans antialiased pb-20">
      {/* Top Government & Hospital Banner */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs px-4 py-3">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <SmsHospitalCrest size={32} />
            <div>
              <h1 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                SMS Hospital, Jaipur
              </h1>
              <p className="text-[10px] text-blue-700 font-semibold tracking-wide uppercase">
                Dept. of Interventional Radiology
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Verified Discharge</span>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 pt-4 space-y-4">
        {/* Verification Card with Reference ID */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Patient Reference ID:</span>
            <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
              {decodedCaseId}
            </span>
          </div>
          <div className="text-center py-1">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200/60">
              डिजिटल डिस्चार्ज व पंचर देखभाल कार्ड • Patient Post-Op Care
            </span>
          </div>
        </section>

        {/* Emergency Red Flags Card (Urgent - First thing to see) */}
        <section className="bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-2xl shadow-md p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xs">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold leading-tight">
                तत्काल आपातकालीन खतरे के संकेत
              </h2>
              <p className="text-xs text-rose-100 font-medium">
                When to Rush to Emergency Immediately
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 space-y-2.5 text-xs text-rose-50 border border-white/15">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">
                  पंचर वाली जगह से खून बहना या अचानक सूजन (Active Bleeding or Bulge)
                </strong>
                <span>दबाव बनाकर तुरंत अस्पताल पहुंचें। Apply firm pressure and rush.</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">
                  हाथ या पैर का ठंडा, नीला या सुन्न पड़ना (Cold or Pale Limb)
                </strong>
                <span>रक्त प्रवाह में रुकावट का संकेत हो सकता है। May indicate ischemia.</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">
                  तेज बुखार या कंपकंपी (High Fever &gt; 101°F with Chills)
                </strong>
                <span>संक्रमण की संभावना। Potential infection risk.</span>
              </div>
            </div>
          </div>

          <a
            href="tel:01412560291"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-rose-700 font-bold text-xs shadow-sm hover:bg-rose-50 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>इमरजेंसी में कॉल करें: 0141-2560291 (Call 24/7 Casualty)</span>
          </a>
        </section>

        {/* Puncture Site Care Section (Bilingual Hindi & English) */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-3.5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                पंचर वाली जगह की देखभाल
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Puncture Wound Care Instructions
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-150">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold">
                  पट्टी को 48 घंटे तक सूखा रखें (Keep Dressing Clean &amp; Dry)
                </strong>
                <p className="text-slate-600 mt-0.5">
                  पंचर वाली जगह पर पानी न लगने दें। 48 घंटे बाद हल्की पट्टी हटाएं। Do not soak in water for 48 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-150">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold">
                  5 दिनों तक भारी वजन न उठाएं (No Heavy Lifting &gt; 5 kg)
                </strong>
                <p className="text-slate-600 mt-0.5">
                  वजन उठाने या तेज दौड़ने से बचें। Avoid vigorous exercise or heavy lifting for 5-7 days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-150">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold">
                  हल्की सैर करें, लगातार खड़े न रहें (Gentle Ambulation)
                </strong>
                <p className="text-slate-600 mt-0.5">
                  कमरे में धीरे-धीरे टहलें। बैठकर पैर को थोड़ा ऊपर रखें। Gentle walking is encouraged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medication Timing Schedule */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-3.5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                दवाइयों का समय व खुराक
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Prescribed Medication Schedule
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 space-y-1">
              <Sun className="w-4 h-4 mx-auto text-amber-600" />
              <span className="font-bold text-slate-900 block">सुबह (Morning)</span>
              <span className="text-[10px] text-slate-600 block">नाश्ते के बाद (After Food)</span>
            </div>

            <div className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-200/70 space-y-1">
              <Sun className="w-4 h-4 mx-auto text-sky-600" />
              <span className="font-bold text-slate-900 block">दोपहर (Noon)</span>
              <span className="text-[10px] text-slate-600 block">खाने के बाद (After Lunch)</span>
            </div>

            <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-200/70 space-y-1">
              <Moon className="w-4 h-4 mx-auto text-indigo-600" />
              <span className="font-bold text-slate-900 block">रात (Night)</span>
              <span className="text-[10px] text-slate-600 block">सोते समय (Before Bed)</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
            कृपया डॉक्टर द्वारा दी गई सरकारी पर्ची (RMSCL e-Aushadhi) के अनुसार पूरी दवाइयां लें। Take all prescribed medicines as directed.
          </p>
        </section>

        {/* 24/7 SMS Hospital Emergency Hotlines & Location */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                24/7 अस्पताल सहायता नंबर
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                SMS Hospital Emergency Contacts
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div>
                <span className="font-bold text-slate-900 block">एसएमएस अस्पताल इमरजेंसी कैजुअल्टी</span>
                <span className="text-[11px] text-slate-500">SMS Hospital 24x7 Casualty</span>
              </div>
              <a
                href="tel:01412560291"
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center gap-1 shadow-2xs hover:bg-blue-700"
              >
                <PhoneCall className="w-3 h-3" />
                <span>0141-2560291</span>
              </a>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <div>
                <span className="font-bold text-slate-900 block">कैथ लैब कंट्रोल डेस्क (IR Suite)</span>
                <span className="text-[11px] text-slate-500">Angiosuite Control Desk</span>
              </div>
              <a
                href="tel:01412518200"
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-bold text-xs flex items-center gap-1 shadow-2xs hover:bg-slate-900"
              >
                <PhoneCall className="w-3 h-3" />
                <span>0141-2518200</span>
              </a>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200/60 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-900 block font-semibold">
                  ओपीडी परामर्श कमरा 114 (OPD Room 114)
                </strong>
                <p className="text-blue-800 text-[11px] mt-0.5">
                  सोमवार से शनिवार • सुबह 9:00 बजे से दोपहर 1:00 बजे तक (Mon–Sat 9 AM – 1 PM)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link to Clinical Station */}
        <div className="text-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span>Staff Login Portal (स्टाफ लॉगिन)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
