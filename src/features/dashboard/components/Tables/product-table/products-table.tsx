"use client";

import * as React from "react";
import type {
  DataTableAdvancedFilterField,
  DataTableFilterField,
  DataTableRowAction,
} from "@/types";

import { toSentenceCase } from "@/lib/utils";
import { useDataTable } from "@/hooks/use-data-table";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";

import {
  getProductPriorityCounts,
  getProducts,
  getProductStatusCounts,
} from "@/lib/product-queries";
import { getPriorityIcon, getStatusIcon } from "@/lib/utils";
import { getColumns } from "./products-table-columns";
import { Product } from "@/schema/ProductSchema";
import { ProductsTableFloatingBar } from "./products-table-floating-bar";
import { ProductsTableToolbarActions } from "./products-table-toolbar-actions";
import { DeleteProductsDialog } from "./delete-products-dialog";
import { useFeatureFlags } from "@/components/data-table/feature-flags-provider";

interface ProductsTableProps {
  promises: Promise<
    [
      Awaited<ReturnType<typeof getProducts>>,
      Awaited<ReturnType<typeof getProductStatusCounts>>,
      Awaited<ReturnType<typeof getProductPriorityCounts>>,
    ]
  >;
}

export function ProductsTable({ promises }: ProductsTableProps) {
  const { featureFlags } = useFeatureFlags();

  const [{ data, pageCount }, statusCounts, priorityCounts] =
    React.use(promises);

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Product> | null>(null);

  const columns = React.useMemo(
    () => getColumns({ setRowAction }),
    [setRowAction]
  );

  const filterFields: DataTableFilterField<Product>[] = [
    {
      id: "title",
      label: "Title",
      placeholder: "Filter titles...",
    },
    {
      id: "status",
      label: "Status",
      options: ["todo", "in-progress", "done", "canceled"].map((status) => ({
        label: toSentenceCase(status),
        value: status,
        icon: getStatusIcon(
          status as "todo" | "in-progress" | "done" | "canceled"
        ),
        count:
          statusCounts && status in statusCounts
            ? statusCounts[
                status as "todo" | "in-progress" | "done" | "canceled"
              ]
            : 0,
      })),
    },
    {
      id: "priority",
      label: "Priority",
      options: ["low", "medium", "high"].map((priority) => ({
        label: toSentenceCase(priority),
        value: priority,
        icon: getPriorityIcon(priority as "low" | "medium" | "high"),
        count:
          priorityCounts && priority in priorityCounts
            ? priorityCounts[priority as "low" | "medium" | "high"]
            : 0,
      })),
    },
  ];

  const advancedFilterFields: DataTableAdvancedFilterField<Product>[] = [
    {
      id: "title",
      label: "Title",
      type: "text",
    },
    {
      id: "status",
      label: "Status",
      type: "multi-select",
      options: ["todo", "in-progress", "done", "canceled"].map((status) => ({
        label: toSentenceCase(
          status as "todo" | "in-progress" | "done" | "canceled"
        ),
        value: status,
        icon: getStatusIcon(
          status as "todo" | "in-progress" | "done" | "canceled"
        ),
        count:
          statusCounts && status in statusCounts
            ? statusCounts[
                status as "todo" | "in-progress" | "done" | "canceled"
              ]
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
        icon: getPriorityIcon(priority as "low" | "medium" | "high"),
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
          enableFloatingBar ? <ProductsTableFloatingBar table={table} /> : null
        }
      >
        {enableAdvancedTable ? (
          <DataTableAdvancedToolbar
            table={table}
            filterFields={advancedFilterFields}
            shallow={false}
          >
            <ProductsTableToolbarActions table={table} />
          </DataTableAdvancedToolbar>
        ) : (
          <DataTableToolbar table={table} filterFields={filterFields}>
            <ProductsTableToolbarActions table={table} />
          </DataTableToolbar>
        )}
      </DataTable>
      <DeleteProductsDialog
        open={rowAction?.type === "delete"}
        onOpenChange={() => setRowAction(null)}
        products={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </>
  );
}
