"use client";

import { type Table } from "@tanstack/react-table";
import { Download } from "lucide-react";

import { exportTableToCSV } from "@/lib/export";
import { Button } from "@/components/ui/button";

import { Product } from "@/schema/ProductSchema";
import { DeleteProductsDialog } from "./delete-products-dialog";

interface ProductsTableToolbarActionsProps {
  table: Table<Product>;
}

export function ProductsTableToolbarActions({
  table,
}: ProductsTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteProductsDialog
          products={table
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
            filename: "products",
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
