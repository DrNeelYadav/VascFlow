import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { Activity, Heart, Radio, ShieldCheck } from "lucide-react";

/**
 * Precision Cards for Vascule OS implementing MD3 elevation and Cath Lab OLED Black borders.
 */
const meta: Meta<typeof Card> = {
  title: "Foundations/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "oled", "interactive", "flat"],
      description: "Visual surface treatment",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultElevation: Story = {
  render: () => (
    <Card variant="default" className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Pre-Op Evaluation Summary
        </CardTitle>
        <CardDescription>
          Patient demographics and nephrotoxic contrast risk
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-[#94A3B8]">Baseline eGFR:</span>
          <span className="font-mono font-medium">68 mL/min/1.73m²</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#94A3B8]">Serum Creatinine:</span>
          <span className="font-mono font-medium">1.14 mg/dL</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#94A3B8]">MACD Threshold:</span>
          <span className="font-mono font-medium text-[#2563EB]">160 mL</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-2">
        <Button variant="secondary" size="sm">
          Dismiss
        </Button>
        <Button variant="cobalt" size="sm">
          Acknowledge
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const OledCathLabSurface: Story = {
  render: () => (
    <Card variant="oled" className="w-[380px] bg-[#090A0F] border-[#1E293B]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-mono text-[#94A3B8] flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#EF4444]" />
          CARDIAC RHYTHM
        </CardTitle>
        <span className="text-[10px] font-mono text-[#10B981] bg-[#064E3B]/40 border border-[#10B981]/30 px-1.5 py-0.5 rounded">
          SINUS
        </span>
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold font-mono text-white">72</span>
          <span className="text-xs font-mono text-[#94A3B8]">BPM</span>
        </div>
        <div className="text-xs font-mono text-[#94A3B8] flex justify-between">
          <span>PR: 156ms</span>
          <span>QTc: 412ms</span>
        </div>
      </CardContent>
    </Card>
  ),
};

export const InteractiveSelectionCard: Story = {
  render: () => (
    <Card variant="interactive" className="w-[380px] p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#2563EB]" />
          <h4 className="text-sm font-semibold text-white">Angio Suite 1</h4>
        </div>
        <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 px-2 py-0.5 rounded-full">
          READY FOR CASE
        </span>
      </div>
      <p className="text-xs text-[#94A3B8]">
        Siemens Artis pheno // Biplane C-Arm // DrySeal Dry Vascular Pack loaded.
      </p>
    </Card>
  ),
};
