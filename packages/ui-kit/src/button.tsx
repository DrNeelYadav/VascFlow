import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * Hyper-minimalist Radix / Shadcn Button for Vascule OS
 *
 * Implements strict Google Workspace Monochrome Light standards:
 * - cobalt / primary: Google Medical Blue (#1A73E8) background, pure white text, #1557B0 hover.
 * - secondary / outline: Pure white (#FFFFFF) background, 1px solid #DADCE0 border, #3C4043 text, #F1F3F4 hover.
 * - oled: Harmonized to clean white (#FFFFFF) surface with #DADCE0 border to eliminate harsh black blocks in light mode.
 * - destructive: Soft pastel red (#FCE8E6) background, dark red text (#C5221F).
 * - ghost: Transparent with subtle #F1F3F4 hover.
 *
 * Supports pill-shaped (rounded-full) and standard MD3 (rounded-lg) geometries.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        cobalt:
          "bg-[#1A73E8] text-white hover:bg-[#1557B0] active:bg-[#174EA6] focus-visible:ring-[#1A73E8] shadow-xs",
        primary:
          "bg-[#1A73E8] text-white hover:bg-[#1557B0] active:bg-[#174EA6] focus-visible:ring-[#1A73E8] shadow-xs",
        oled:
          "bg-[#FFFFFF] text-[#202124] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:border-[#BDC1C6] active:bg-[#E8EAED] focus-visible:ring-[#DADCE0] shadow-xs",
        secondary:
          "bg-[#FFFFFF] text-[#3C4043] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#202124] active:bg-[#E8EAED] focus-visible:ring-[#DADCE0] shadow-xs",
        outline:
          "bg-[#FFFFFF] text-[#3C4043] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#202124] active:bg-[#E8EAED] focus-visible:ring-[#DADCE0] shadow-xs",
        destructive:
          "bg-[#FCE8E6] text-[#C5221F] border border-[#FAD2CF] hover:bg-[#F7BCB6] active:bg-[#EE675C] focus-visible:ring-[#C5221F]",
        ghost:
          "bg-transparent text-[#5F6368] hover:bg-[#F1F3F4] hover:text-[#202124] focus-visible:ring-[#1A73E8]",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm rounded-lg",
        sm: "h-8 px-3 text-xs rounded-lg",
        lg: "h-10 px-5 text-base rounded-lg",
        icon: "h-9 w-9 p-0 rounded-lg",
        pill: "h-9 px-4 py-2 text-sm rounded-full",
        "pill-sm": "h-8 px-3 text-xs rounded-full",
        "pill-lg": "h-10 px-5 text-base rounded-full",
        "pill-icon": "h-9 w-9 p-0 rounded-full",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "cobalt",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
