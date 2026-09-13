import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Activity, Heart, AlertCircle, Play, ShieldAlert, Check } from "lucide-react";

/**
 * Hyper-minimalist Radix / Shadcn Button for Vascule OS.
 * Conforms to OLED Black (#000000) and Medical Cobalt (#2563EB) surgical aesthetics.
 */
const meta: Meta<typeof Button> = {
  title: "Foundations/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["cobalt", "oled", "secondary", "destructive", "ghost"],
      description: "Visual clinical styling variant",
    },
    size: {
      control: "select",
      options: [
        "default",
        "sm",
        "lg",
        "icon",
        "pill",
        "pill-sm",
        "pill-lg",
        "pill-icon",
      ],
      description: "Size and padding geometry",
    },
    disabled: {
      control: "boolean",
      description: "Disables interaction during active operations",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const MedicalCobalt: Story = {
  args: {
    children: "Book a Case",
    variant: "cobalt",
    size: "pill",
  },
};

export const OledBlack: Story = {
  args: {
    children: "Cath Lab Telemetry",
    variant: "oled",
    size: "default",
  },
};

export const GoogleWorkspaceSecondary: Story = {
  args: {
    children: "Admit a Case",
    variant: "secondary",
    size: "default",
  },
};

export const DestructiveEmergency: Story = {
  args: {
    children: "Abort Fluoroscopy",
    variant: "destructive",
    size: "pill",
  },
};

export const GhostAction: Story = {
  args: {
    children: "Pause Telemetry",
    variant: "ghost",
    size: "sm",
  },
};

export const PillGeometry: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="cobalt" size="pill">
        Primary Pill Action
      </Button>
      <Button variant="oled" size="pill">
        OLED Pill Action
      </Button>
      <Button variant="secondary" size="pill">
        Google Light Pill
      </Button>
    </div>
  ),
};

export const WithClinicalIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="cobalt" size="pill" className="gap-2">
        <Play className="w-4 h-4 text-white" />
        Resume Stream
      </Button>
      <Button variant="oled" size="default" className="gap-2">
        <Heart className="w-4 h-4 text-[#EF4444]" />
        Cardiac Rhythm (72 BPM)
      </Button>
      <Button variant="destructive" size="pill" className="gap-2">
        <ShieldAlert className="w-4 h-4" />
        Radiation Dose Alert
      </Button>
    </div>
  ),
};

export const DisabledOperationalState: Story = {
  args: {
    children: "Acquisition Locked",
    variant: "cobalt",
    disabled: true,
  },
};
