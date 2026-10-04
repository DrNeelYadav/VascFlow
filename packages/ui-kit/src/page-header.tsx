import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * Page header for a clinical surface: a title, an optional supporting line, and
 * a slot for actions. Every workspace route uses this so the top of a page reads
 * identically whether it is the schedule, a consent form or the inventory list.
 */
const pageHeaderVariants = cva(
  "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between print:hidden"
);

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  /** Right-aligned action cluster: primary button, filters, export. */
  actions?: React.ReactNode;
  /** Small status chip rendered above the title, e.g. "Live" or "Read only". */
  badge?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  actions,
  badge,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn(pageHeaderVariants(), className)} {...props}>
      <div className="min-w-0">
        {badge}
        <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h1>
        {description && (
          <p className="mt-0.5 text-[13px] text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

PageHeader.displayName = "PageHeader";
