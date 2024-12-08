"use client";

import * as React from "react";
import type { DataTableFilterField, ExtendedSortingState } from "@/types";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type TableOptions,
  type TableState,
  type Updater,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  parseAsArrayOf,
  parseAsString,
  useQueryState,
  useQueryStates,
  type Parser,
  type UseQueryStateOptions,
} from "nuqs";

import { getSortingStateParser } from "@/lib/parsers";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";

interface UseDataTableProps<TData>
  extends Omit<
      TableOptions<TData>,
      | "state"
      | "pageCount"
      | "getCoreRowModel"
      | "manualFiltering"
      | "manualPagination"
      | "manualSorting"
    >,
    Required<Pick<TableOptions<TData>, "pageCount">> {
  filterFields?: DataTableFilterField<TData>[];
  history?: "push" | "replace";
  scroll?: boolean;
  shallow?: boolean;
  throttleMs?: number;
  debounceMs?: number;
  startTransition?: React.TransitionStartFunction;
  clearOnDefault?: boolean;
  enableAdvancedFilter?: boolean;

  initialState?: Omit<Partial<TableState>, "sorting"> & {
    sorting?: ExtendedSortingState<TData>;
  };
}

export function useDataTable<TData>({
  pageCount = -1,
  filterFields = [],
  enableAdvancedFilter = false,
  history = "replace",
  scroll = false,
  shallow = true,
  throttleMs = 50,
  debounceMs = 300,
  clearOnDefault = false,
  startTransition,
  initialState,
  ...props
}: UseDataTableProps<TData>) {
  const queryStateOptions = React.useMemo<
    Omit<UseQueryStateOptions<string>, "parse">
  >(() => {
    return {
      history,
      scroll,
      shallow,
      throttleMs,
      debounceMs,
      clearOnDefault,
      startTransition,
    };
  }, [
    history,
    scroll,
    shallow,
    throttleMs,
    debounceMs,
    clearOnDefault,
    startTransition,
  ]);

  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
    initialState?.rowSelection ?? {}
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialState?.columnVisibility ?? {});

  const [page, setPage] = React.useState<number>(
    initialState?.pagination?.pageIndex ?? 1
  );
  const [perPage, setPerPage] = React.useState<number>(
    initialState?.pagination?.pageSize ?? 10
  );

  const [sorting, setSorting] = useQueryState(
    "sort",
    getSortingStateParser<TData>()
      .withOptions(queryStateOptions)
      .withDefault(initialState?.sorting ?? [])
  );

  const filterParsers = React.useMemo(() => {
    return filterFields.reduce<
      Record<string, Parser<string> | Parser<string[]>>
    >((acc, field) => {
      if (field.options) {
        acc[field.id] = parseAsArrayOf(parseAsString, ",").withOptions(
          queryStateOptions
        );
      } else {
        acc[field.id] = parseAsString.withOptions(queryStateOptions);
      }
      return acc;
    }, {});
  }, [filterFields, queryStateOptions]);

  const [filterValues, setFilterValues] = useQueryStates(filterParsers);

  const debouncedSetFilterValues = useDebouncedCallback(
    setFilterValues,
    debounceMs
  );

  const pagination: PaginationState = {
    pageIndex: page - 1,
    pageSize: perPage,
  };

  function onPaginationChange(updaterOrValue: Updater<PaginationState>) {
    if (typeof updaterOrValue === "function") {
      const newPagination = updaterOrValue(pagination);
      void setPage(newPagination.pageIndex + 1);
      void setPerPage(newPagination.pageSize);
    } else {
      void setPage(updaterOrValue.pageIndex + 1);
      void setPerPage(updaterOrValue.pageSize);
    }
  }

  function onSortingChange(updaterOrValue: Updater<SortingState>) {
    if (typeof updaterOrValue === "function") {
      const newSorting = updaterOrValue(sorting) as ExtendedSortingState<TData>;
      void setSorting(newSorting);
    }
  }

  const initialColumnFilters: ColumnFiltersState = React.useMemo(() => {
    return enableAdvancedFilter
      ? []
      : Object.entries(filterValues).reduce<ColumnFiltersState>(
          (filters, [key, value]) => {
            if (value !== null) {
              filters.push({
                id: key,
                value: Array.isArray(value) ? value : [value],
              });
            }
            return filters;
          },
          []
        );
  }, [filterValues, enableAdvancedFilter]);

  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialColumnFilters);
  const { searchableColumns, filterableColumns } = React.useMemo(() => {
    return enableAdvancedFilter
      ? { searchableColumns: [], filterableColumns: [] }
      : {
          searchableColumns: filterFields.filter((field) => !field.options),
          filterableColumns: filterFields.filter((field) => field.options),
        };
  }, [filterFields, enableAdvancedFilter]);

  const onColumnFiltersChange = React.useCallback(
    (updaterOrValue: Updater<ColumnFiltersState>) => {
      if (enableAdvancedFilter) return;

      setColumnFilters((prev) => {
        const next =
          typeof updaterOrValue === "function"
            ? updaterOrValue(prev)
            : updaterOrValue;

        const filterUpdates = next.reduce<
          Record<string, string | string[] | null>
        >((acc, filter) => {
          if (searchableColumns.find((col) => col.id === filter.id)) {
            acc[filter.id] = filter.value as string;
          } else if (filterableColumns.find((col) => col.id === filter.id)) {
            acc[filter.id] = filter.value as string[];
          }
          return acc;
        }, {});

        prev.forEach((prevFilter) => {
          if (!next.some((filter) => filter.id === prevFilter.id)) {
            filterUpdates[prevFilter.id] = null;
          }
        });

        void setPage(1);

        debouncedSetFilterValues(filterUpdates);
        return next;
      });
    },
    [
      debouncedSetFilterValues,
      enableAdvancedFilter,
      filterableColumns,
      searchableColumns,
      setPage,
    ]
  );

  const table = useReactTable({
    ...props,
    initialState,
    pageCount,
    state: {
      pagination,
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters: enableAdvancedFilter ? [] : columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange,
    onSortingChange,
    onColumnFiltersChange,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: enableAdvancedFilter
      ? undefined
      : getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: enableAdvancedFilter ? undefined : getFacetedRowModel(),
    getFacetedUniqueValues: enableAdvancedFilter
      ? undefined
      : getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  return { table };
}
