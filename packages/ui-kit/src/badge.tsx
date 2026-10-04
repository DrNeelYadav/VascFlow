import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * Status chip for clinical state. The variants encode the department's
 * three-state safety vocabulary, so a chip cannot be given a colour that
 * contradicts the state it labels.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium leading-none whitespace-nowrap",
  {
    variants: {
      tone: {
        neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        info: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
        /** Signed, finalized, verified against source. */
        verified: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
        /** In progress, awaiting review or sign-off. */
        holding: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
        /** Hard safety stop: dose exceeded, sentinel triggered, missing data. */
        alert: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

Badge.displayName = "Badge";

export { badgeVariants };
