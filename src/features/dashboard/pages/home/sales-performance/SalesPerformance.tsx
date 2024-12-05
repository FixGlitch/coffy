"use client";

import { salesPerformance } from "@/features/dashboard/constants/sales-performance";
import ChartDailySales from "./charts/chart-daily-sales/chart-daily-sales";
import ChartMonthlySales from "./charts/chart-monthly-sales/chart-monthly-sales";
import ChartWeeklySales from "./charts/chart-weekly-sales/chart-weekly-sales";
import { columns } from "./tables/table-sales-performance/columns";
import SalesPerformaceTable from "./tables/table-sales-performance/data-table";

const SalesPerformance = () => {
  return (
    <div className="space-y-8">
      <SalesPerformaceTable columns={columns} data={salesPerformance} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChartDailySales />
        <ChartWeeklySales />
        <ChartMonthlySales />
      </div>
    </div>
  );
};

export default SalesPerformance;
