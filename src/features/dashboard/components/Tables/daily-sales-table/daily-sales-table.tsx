"use client";

import * as React from "react";
import type {
  DataTableAdvancedFilterField,
  DataTableFilterField,
  DataTableRowAction,
} from "@/types";

import { getStatusIconDailySales, toSentenceCase } from "@/lib/utils";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";

import {
  getDailySalesPriorityCounts,
  getDailySales,
  getDailySalesStatusCounts,
} from "@/lib/daily-sales-queries";
import { getPriorityIconDailySales} from "@/lib/utils";
import { useFeatureFlags } from "../../../../../components/data-table/feature-flags-provider";
import { getColumns } from "./daily-sales-table-columns";
import { DailySalesTableFloatingBar } from "./daily-sales-table-floating-bar";
import { DailySalesTableToolbarActions } from "./daily-sales-table-toolbar-actions";
import { DeleteDailySalesDialog } from "./delete-daily-sales-dialog";
import { DailySales } from "@/schema/DailySalesSchema";

interface DailySalesTableProps {
  promises: Promise<
    [
      Awaited<ReturnType<typeof getDailySales>>,
      Awaited<ReturnType<typeof getDailySalesStatusCounts>>,
      Awaited<ReturnType<typeof getDailySalesPriorityCounts>>,
    ]
  >;
}

export function DailySalesTable({ promises }: DailySalesTableProps) {
  const { featureFlags } = useFeatureFlags();

  const [{ data, pageCount }, statusCounts, priorityCounts] =
    React.use(promises);

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<DailySales> | null>(null);

  const columns = React.useMemo(
    () => getColumns({ setRowAction }),
    [setRowAction]
  );

  const filterFields: DataTableFilterField<DailySales>[] = [
    {
      id: "sale",
      label: "sale",
      placeholder: "Filter titles...",
    },
    {
      id: "status",
      label: "Status",
      options: ["pending", "completed", "canceled"].map((status) => ({
        label: toSentenceCase(status),
        value: status,
        icon: getStatusIconDailySales(
          status as "pending" | "completed" | "canceled"
        ),
        count:
          statusCounts && status in statusCounts
            ? statusCounts[(status as "pending", "completed", "canceled")]
            : 0,
      })),
    },
    {
      id: "priority",
      label: "Priority",
      options: ["low", "medium", "high"].map((priority) => ({
        label: toSentenceCase(priority),
        value: priority,
        icon: getPriorityIconDailySales(priority as "low" | "medium" | "high"),
        count:
          priorityCounts && priority in priorityCounts
            ? priorityCounts[priority as "low" | "medium" | "high"]
            : 0,
      })),
    },
  ];

  const advancedFilterFields: DataTableAdvancedFilterField<DailySales>[] = [
    {
      id: "sale",
      label: "sale",
      type: "text",
    },
    {
      id: "status",
      label: "Status",
      type: "multi-select",
      options: ["pending", "completed", "canceled"].map((status) => ({
        label: toSentenceCase(status as "pending" | "completed" | "canceled"),
        value: status,
        icon: getStatusIconDailySales(
          status as "pending" | "completed" | "canceled"
        ),
        count:
          statusCounts && status in statusCounts
            ? statusCounts[(status as "pending", "completed", "canceled")]
            : 0,
      })),
    },
    {
      id: "priority",
      label: "Priority",
      type: "multi-select",
      options: ["low", "medium", "high"].map((priority) => ({
        label: toSentenceCase(priority as "low" | "medium" | "high"),
        value: priority,
        icon: getPriorityIconDailySales(priority as "low" | "medium" | "high"),
        count:
          priorityCounts && priority in priorityCounts
            ? priorityCounts[priority as "low" | "medium" | "high"]
            : 0,
      })),
    },
    {
      id: "createdAt",
      label: "Created at",
      type: "date",
    },
  ];

  const enableAdvancedTable = featureFlags.includes("advancedTable");
  const enableFloatingBar = featureFlags.includes("floatingBar");

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: enableAdvancedTable,
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    getRowId: (originalRow, index) => `${originalRow.id}-${index}`,
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <>
      <DataTable
        table={table}
        floatingBar={
          enableFloatingBar ? (
            <DailySalesTableFloatingBar table={table} />
          ) : null
        }
      >
        {enableAdvancedTable ? (
          <DataTableAdvancedToolbar
            table={table}
            filterFields={advancedFilterFields}
            shallow={false}
          >
            <DailySalesTableToolbarActions table={table} />
          </DataTableAdvancedToolbar>
        ) : (
          <DataTableToolbar table={table} filterFields={filterFields}>
            <DailySalesTableToolbarActions table={table} />
          </DataTableToolbar>
        )}
      </DataTable>
      <DeleteDailySalesDialog
        open={rowAction?.type === "delete"}
        onOpenChange={() => setRowAction(null)}
        dailySales={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </>
  );
}
