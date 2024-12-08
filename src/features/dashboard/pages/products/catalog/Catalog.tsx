"use server";

import React from "react";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductsTable } from "@/features/dashboard/components/Tables/product-table/products-table";
import { getValidFilters } from "@/lib/data-table";
import {
  getProductPriorityCounts,
  getProducts,
  getProductStatusCounts,
} from "@/lib/product-queries";
import { searchParamsCache } from "@/lib/product-validations";
import { SearchParams } from "@/types";
import { FeatureFlagsProvider } from "@/components/data-table/feature-flags-provider";
import { DateRangePicker } from "@/components/data-table/date-range-picker";

interface CatalogProps {
  searchParams: SearchParams;
}

export default async function CatalogWrapper(props: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await props.searchParams;
  return <Catalog searchParams={resolvedSearchParams} />;
}

function Catalog({ searchParams }: CatalogProps) {
  const search = searchParamsCache.parse(searchParams);
  const validFilters = search.filters ? getValidFilters(search.filters) : [];

  const promises = Promise.all([
    getProducts({ ...search, filters: validFilters }),
    getProductStatusCounts(),
    getProductPriorityCounts(),
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
          <ProductsTable promises={promises} />
        </React.Suspense>
      </FeatureFlagsProvider>
    </div>
  );
}
