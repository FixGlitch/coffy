"use client";

import { type Table } from "@tanstack/react-table";
import { Download } from "lucide-react";

import { exportTableToCSV } from "@/lib/export";
import { Button } from "@/components/ui/button";

import { DeleteDailySalesDialog } from "./delete-daily-sales-dialog";
import { DailySales } from "@/schema/DailySalesSchema";

interface DailySalesTableToolbarActionsProps {
  table: Table<DailySales>;
}

export function DailySalesTableToolbarActions({
  table,
}: DailySalesTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteDailySalesDialog
          dailySales={table
            .getFilteredSelectedRowModel()
            .rows.map((row) => row.original)}
          onSuccess={() => table.toggleAllRowsSelected(false)}
        />
      ) : null}
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          exportTableToCSV(table, {
            filename: "daily-sales",
            excludeColumns: ["select", "actions"],
          })
        }
        className="gap-2"
      >
        <Download className="size-4" aria-hidden="true" />
        Exportar
      </Button>
    </div>
  );
}
