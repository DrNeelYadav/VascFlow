"use client";

import React from "react";
import { ProcedureCategory } from "./preBookingTypes";
import { SclerotherapyPage1Sheet } from "./SclerotherapyPage1Sheet";
import { SclerotherapyPage2Sheet } from "./SclerotherapyPage2Sheet";
import { TacePreBookingSheet } from "./TacePreBookingSheet";
import { BaePreBookingSheet } from "./BaePreBookingSheet";
import { BleederPreBookingSheet } from "./BleederPreBookingSheet";
import { BiliaryPreBookingSheet } from "./BiliaryPreBookingSheet";
import { VaricoseVeinPreBookingSheet } from "./VaricoseVeinPreBookingSheet";
import { JnaPreBookingSheet } from "./JnaPreBookingSheet";
import { UaePreBookingSheet } from "./UaePreBookingSheet";
import { FistuloplastyPreBookingSheet } from "./FistuloplastyPreBookingSheet";
import { PcnPreBookingSheet } from "./PcnPreBookingSheet";
import { GeneralIrPreBookingSheet } from "./GeneralIrPreBookingSheet";

interface SheetRendererProps {
  selectedCategory: ProcedureCategory;
  patientName: string;
  age: string;
  sex: string;
  uhid: string;
  contactNumber: string;
  location: string;
  unit: string;
  scheduledDate: string;
}

export const PreBookingSheetRenderer: React.FC<SheetRendererProps> = (props) => {
  const { selectedCategory, patientName, uhid } = props;

  switch (selectedCategory) {
    case "sclerotherapy":
      return (
        <>
          <div className="print:break-after-page">
            <SclerotherapyPage1Sheet {...props} />
          </div>
          <div className="print:break-before-page">
            <SclerotherapyPage2Sheet patientName={patientName} uhid={uhid} />
          </div>
        </>
      );
    case "tace":
      return <TacePreBookingSheet {...props} />;
    case "bae":
      return <BaePreBookingSheet {...props} />;
    case "bleeder":
      return <BleederPreBookingSheet {...props} />;
    case "biliary":
      return <BiliaryPreBookingSheet {...props} />;
    case "varicose":
      return <VaricoseVeinPreBookingSheet {...props} />;
    case "jna":
      return <JnaPreBookingSheet {...props} />;
    case "uae":
      return <UaePreBookingSheet {...props} />;
    case "fistuloplasty":
      return <FistuloplastyPreBookingSheet {...props} />;
    case "pcn":
      return <PcnPreBookingSheet {...props} />;
    case "general":
    case "other":
    default:
      return <GeneralIrPreBookingSheet {...props} />;
  }
};
