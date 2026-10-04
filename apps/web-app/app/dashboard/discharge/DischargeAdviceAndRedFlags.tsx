"use client";

import React from "react";
import { PatientDischargeDetails } from "./ihmsDischargeTemplates";

interface DischargeAdviceAndRedFlagsProps {
  dischargeDetails: PatientDischargeDetails;
}


export function DischargeAdviceAndRedFlags({
  dischargeDetails,
}: DischargeAdviceAndRedFlagsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 border border-slate-200 rounded bg-slate-50/50 mb-6 print:bg-white print:border-slate-300">
      <div>
        <h4 className="text-[10px] font-bold uppercase text-slate-700 mb-1">
          General Advice &amp; Puncture Site Care
        </h4>
        <p className="text-slate-700 whitespace-pre-line leading-relaxed text-[11px]">
          {dischargeDetails.generalAdvise}
        </p>
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase text-red-700 mb-1">
          Emergency Red Flags / आपातकालीन लक्षण
        </h4>
        <p className="text-slate-700 text-[11px] leading-relaxed">
          In case of sudden bleeding from puncture site, swelling, cold limb, severe pain, or fever (&gt;101°F), report immediately to SMS Hospital Emergency Casualty.
        </p>
        <p className="text-slate-600 text-[10px] leading-relaxed mt-1">
          पंचर वाली जगह से अचानक खून बहने, अत्यधिक सूजन, पैर ठंडा पड़ने, तेज दर्द या बुखार की स्थिति में तुरंत एसएमएस अस्पताल की इमरजेंसी में संपर्क करें।
        </p>
        <div className="mt-2 pt-1 border-t border-slate-200">
          <span className="text-[10px] font-bold text-slate-700 block">
            Follow-up Review Appointment:
          </span>
          <span className="font-semibold text-blue-800">
            {dischargeDetails.followUp} — Date: {dischargeDetails.followUpDate}
          </span>
        </div>
      </div>
    </div>
  );
}
