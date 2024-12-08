import * as React from "react";
import { type DataTableRowAction } from "@/types";
import { type ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { toast } from "sonner";

import { getErrorMessage } from "@/lib/handle-error";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { getPriorityIcon, getStatusIcon } from "@/lib/utils";
import { Product, ProductSchema } from "@/schema/ProductSchema";
import { updateProduct } from "@/lib/product-actions";
import { z } from "zod";
import {
  getArchivedIconColor,
  getBadgeStyles,
  getPriorityIconColor,
  getStatusIconColor,
} from "@/components/data-table/actions-styles";

interface GetColumnsProps {
  setRowAction: React.Dispatch<
    React.SetStateAction<DataTableRowAction<Product> | null>
  >;
}

export function getColumns({
  setRowAction,
}: GetColumnsProps): ColumnDef<Product>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "code",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Product" />
      ),
      cell: ({ row }) => <div className="w-20">{row.getValue("code")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
        const label = row.original.label;

        return (
          <div className="flex space-x-2">
            {label && (
              <Badge
                variant="outline"
                className={`mr-2 ${getBadgeStyles(label)}`}
              >
                {label}
              </Badge>
            )}
            <span className="max-w-[31.25rem] truncate font-medium">
              {row.getValue("title")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
      ),
      cell: ({ row }) => (
        <div className="max-w-[31.25rem] truncate">
          {row.getValue("description")}
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Price" />
      ),
      cell: ({ row }) => {
        const price = row.getValue("price");
        if (typeof price === "number") {
          return `$${price.toFixed(2)}`;
        }
        return "$0.00";
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.original.status;
        if (!status) return null;

        const Icon = getStatusIcon(status);

        const color = getStatusIconColor(status);

        return (
          <div className="flex w-[6.25rem] items-center">
            <Icon className={`mr-2 h-4 w-4 ${color}`} aria-hidden="true" />
            <span className="capitalize">{status}</span>
          </div>
        );
      },

      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Priority" />
      ),
      cell: ({ row }) => {
        const priority = row.original.priority;
        if (!priority) return null;

        const Icon = getPriorityIcon(priority);

        const color = getPriorityIconColor(priority);

        return (
          <div className="flex items-center">
            <Icon className={`mr-2 h-4 w-4 ${color}`} aria-hidden="true" />
            <span className="capitalize">{priority}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "archived",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Archived" />
      ),
      cell: ({ row }) => {
        const archived = row.original.archived;
        const archivedColors = getArchivedIconColor(archived);

        return (
          <Badge variant="outline" className={`font-medium ${archivedColors}`}>
            {archived ? "Yes" : "No"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),
    },
    {
      accessorKey: "updatedAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Updated At" />
      ),
      cell: ({ cell }) => formatDate(cell.getValue() as Date),
    },
    {
      id: "actions",
      cell: function Cell({ row }) {
        const [isUpdatePending, startUpdateTransition] = React.useTransition();

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                variant="ghost"
                className="flex size-8 p-0 data-[state=open]:bg-muted"
              >
                <Ellipsis className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "update" })}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={row.original.label}
                    onValueChange={(value) => {
                      startUpdateTransition(() => {
                        toast.promise(
                          updateProduct({
                            id: row.original.id,
                            label: value as Product["label"],
                          }),
                          {
                            loading: "Updating...",
                            success: "Label updated",
                            error: (err) => getErrorMessage(err),
                          }
                        );
                      });
                    }}
                  >
                    {(
                      ProductSchema.shape.label._def.innerType as z.ZodEnum<
                        ["bug", "feature", "enhancement", "documentation"]
                      >
                    ).options.map((label) => (
                      <DropdownMenuRadioItem
                        key={label}
                        value={label}
                        className="capitalize"
                        disabled={isUpdatePending}
                      >
                        {label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => setRowAction({ row, type: "delete" })}
              >
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      size: 40,
    },
  ];
}
