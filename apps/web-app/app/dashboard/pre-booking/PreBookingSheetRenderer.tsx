"use client";

import React from "react";
import { ProcedureCategory } from "./preBookingTypes";
import { SclerotherapyPage1Sheet } from "./SclerotherapyPage1Sheet";
import { SclerotherapyPage2Sheet } from "./SclerotherapyPage2Sheet";
import { PageBreakDivider } from "../common/PageBreakDivider";
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
        <div className="space-y-6 print:space-y-0 print:block print-document">
          <div className="print:block">
            <SclerotherapyPage1Sheet {...props} />
          </div>
          <PageBreakDivider label="Anatomy &amp; Phlebogram Pen Sketch (Page 2)" pageNumber={2} totalPages={2} />
          <div
            className="print:block print-break-before"
            style={{ breakBefore: "page", pageBreakBefore: "always" }}
          >
            <SclerotherapyPage2Sheet patientName={patientName} uhid={uhid} />
          </div>
        </div>
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
