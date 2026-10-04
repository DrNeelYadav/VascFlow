import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * Data table for case lists, registries and cohort tables.
 *
 * Clinical tables are dense and scannable, so the density is a variant rather
 * than a per-page decision: `compact` for a worklist of 200 rows, `default` for
 * a registry, `relaxed` for a form-like layout.
 */
const tableVariants = cva("w-full border-collapse text-left text-[13px]", {
  variants: {
    density: {
      compact: "[&_td]:py-1.5 [&_th]:py-1.5",
      default: "[&_td]:py-2.5 [&_th]:py-2",
      relaxed: "[&_td]:py-4 [&_th]:py-3",
    },
  },
  defaultVariants: { density: "default" },
});

export interface DataTableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

export function DataTable({ className, density, ...props }: DataTableProps) {
  return <table className={cn(tableVariants({ density }), className)} {...props} />;
}
DataTable.displayName = "DataTable";

export function TableHead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("border-b border-slate-200 dark:border-slate-800", className)} {...props} />;
}
TableHead.displayName = "TableHead";

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("divide-y divide-slate-100 dark:divide-slate-800/70", className)} {...props} />;
}
TableBody.displayName = "TableBody";

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export function TableRow({ className, selected, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        "transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50",
        selected && "bg-blue-50 dark:bg-blue-950/40",
        className
      )}
      {...props}
    />
  );
}
TableRow.displayName = "TableRow";

export interface TableHeadCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Right-align numeric columns so digits line up down the column. */
  numeric?: boolean;
}

export function TableHeadCell({ className, numeric, ...props }: TableHeadCellProps) {
  return (
    <th
      scope="col"
      className={cn(
        "text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400",
        numeric ? "text-right tabular-nums" : "text-left",
        className
      )}
      {...props}
    />
  );
}
TableHeadCell.displayName = "TableHeadCell";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}

export function TableCell({ className, numeric, ...props }: TableCellProps) {
  return (
    <td
      className={cn(
        "text-slate-700 dark:text-slate-300",
        numeric ? "text-right tabular-nums" : "text-left",
        className
      )}
      {...props}
    />
  );
}
TableCell.displayName = "TableCell";

export { tableVariants, DataTable as Table };
