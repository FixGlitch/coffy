"use client";

import { SalesPerformance } from "@/features/dashboard/constants/sales-performance";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<SalesPerformance>[] = [
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
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "hour",
    header: "Hour",
    cell: ({ row }) => {
      const hour = row.getValue("hour") as string;
      const formattedHour = new Date(hour).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      return <div className="font-medium">{formattedHour}</div>;
    },
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      const product = row.getValue("product") as string;
      return <div>{product}</div>;
    },
    filterFn: (row, columnId, value) => {
      const product = row.getValue(columnId) as string;
      return product.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    accessorKey: "amount",
    header: "Units Sold",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return <div>{amount}</div>;
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Total Revenue
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const total = row.getValue("total") as number;
      return <div className="font-medium">${total.toFixed(2)}</div>;
    },
  },
  {
    accessorKey: "payment_method",
    header: "Payment Method",
    cell: ({ row }) => {
      const paymentMethod = row.getValue("payment_method") as string;
      return <div>{paymentMethod}</div>;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date of Sale
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      const formattedDate = new Date(date).toLocaleDateString();
      return <div className="font-medium">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const sale = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(sale.product);
              }}
            >
              Copy product name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
