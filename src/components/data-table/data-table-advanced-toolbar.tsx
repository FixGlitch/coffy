"use client"

import * as React from "react"
import { type Table } from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { DataTableAdvancedFilterField } from "@/types"
import { DataTableFilterList } from "./data-table-filter-list"
import { DataTableSortList } from "./data-table-sort-list"
import { DataTableViewOptions } from "./data-table-view-options"

interface DataTableAdvancedToolbarProps<TData>
  extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>
  filterFields: DataTableAdvancedFilterField<TData>[]
  debounceMs?: number
  shallow?: boolean
}

export function DataTableAdvancedToolbar<TData>({
  table,
  filterFields = [],
  debounceMs = 300,
  shallow = true,
  children,
  className,
  ...props
}: DataTableAdvancedToolbarProps<TData>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-2 overflow-auto p-1",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <DataTableFilterList
          table={table}
          filterFields={filterFields}
          debounceMs={debounceMs}
          shallow={shallow}
        />
        <DataTableSortList
          table={table}
          debounceMs={debounceMs}
          shallow={shallow}
        />
      </div>
      <div className="flex items-center gap-2">
        {children}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
