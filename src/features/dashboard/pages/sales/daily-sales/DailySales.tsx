"use server";

import React from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { DailySalesTable } from "@/features/dashboard/components/Tables/daily-sales-table/daily-sales-table";
import { getValidFilters } from "@/lib/data-table";
import {
  getDailySales,
  getDailySalesStatusCounts,
  getDailySalesPriorityCounts,
} from "@/lib/daily-sales-queries";
import { searchParamsCacheDaily } from "@/lib/daily-sales-validations";
import { SearchParams } from "@/types";
import { FeatureFlagsProvider } from "@/components/data-table/feature-flags-provider";
import { DateRangePicker } from "@/components/data-table/date-range-picker";

interface DailySalesProps {
  searchParams: SearchParams;
}

export default async function DailySalesWrapper(props: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await props.searchParams;
  return <DailySales searchParams={resolvedSearchParams} />;
}

function DailySales({ searchParams }: DailySalesProps) {
  const search = searchParamsCacheDaily.parse(searchParams);
  const validFilters = search.filters ? getValidFilters(search.filters) : [];

  const promises = Promise.all([
    getDailySales({ ...search, filters: validFilters }),
    getDailySalesStatusCounts(),
    getDailySalesPriorityCounts(),
  ]);

  return (
    <div className="shell gap-2">
      <FeatureFlagsProvider>
        <React.Suspense fallback={<Skeleton className="h-7 w-52" />}>
          <DateRangePicker
            triggerSize="sm"
            triggerClassName="ml-auto w-56 sm:w-60"
            align="end"
            shallow={false}
          />
        </React.Suspense>
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={6}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem", "8rem"]}
              shrinkZero
            />
          }
        >
          <DailySalesTable promises={promises} />
        </React.Suspense>
      </FeatureFlagsProvider>
    </div>
  );
}
