import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * Form field primitives.
 *
 * The department records thousands of discrete measurements per case. A missing
 * measurement must never look like a filled one, so the input carries an
 * explicit `missing` state that renders as an empty dashed field rather than
 * resolving to a default. See `Field` for the label and help-text contract.
 */
const inputVariants = cva(
  "w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500",
  {
    variants: {
      tone: {
        default:
          "border-slate-200 focus:border-blue-600 focus:ring-blue-600 dark:border-slate-700 dark:focus:border-blue-500",
        /** Value is required and absent. Blocked, never defaulted. */
        missing:
          "border-dashed border-rose-300 bg-rose-50/40 focus:border-rose-500 focus:ring-rose-500 dark:border-rose-800 dark:bg-rose-950/20",
        invalid:
          "border-rose-400 focus:border-rose-600 focus:ring-rose-600 dark:border-rose-700",
      },
      size: {
        sm: "h-8 text-[13px]",
        md: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: { tone: "default", size: "md" },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, tone, size, ...props }, ref) => (
    <input ref={ref} className={cn(inputVariants({ tone, size }), className)} {...props} />
  )
);
Input.displayName = "Input";

export interface FieldProps {
  /** Visible label. Required for any clinical measurement. */
  label: string;
  /** Unit suffix rendered inside the label, e.g. "mg/dL". */
  unit?: string;
  /** Guidance shown under the control. */
  hint?: string;
  /**
   * True when the measurement is required and not recorded. Renders the control
   * in the blocked state and marks the label, so the gap is visible rather than
   * silently filled.
   */
  missing?: boolean;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({
  label,
  unit,
  hint,
  missing = false,
  htmlFor,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline gap-1.5 text-[12px] font-medium text-slate-700 dark:text-slate-300"
      >
        <span>{label}</span>
        {unit && <span className="text-[11px] font-normal text-slate-400">{unit}</span>}
        {missing && (
          <span className="text-[11px] font-medium text-rose-600 dark:text-rose-400">
            required
          </span>
        )}
      </label>
      {children}
      {hint && <p className="text-[11px] leading-snug text-slate-500">{hint}</p>}
    </div>
  );
}

Field.displayName = "Field";

export { inputVariants };
