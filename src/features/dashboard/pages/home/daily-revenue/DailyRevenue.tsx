import { dailyRevenue } from "@/features/dashboard/constants/daily-revenue";
import { columns } from "./tables/table-daily-revenue/columns";
import DailyRevenueTable from "./tables/table-daily-revenue/data-table";
import ChartTotalRevenue from "./charts/chart-total-revenue/chart-total-revenue";
import ChartTotalTransactions from "./charts/chart-total-transactions/chart-total-transaction";
import ChartAverageIncome from "./charts/chart-average-income-per-sale/chart-average-income-per-sale";
import ChartStarProduct from "./charts/chart-star-product/chart-star-product";
import ChartHourlyRevenue from "./charts/chart-hourly-revenue/chart-hourly-revenue";
import ChartCategoryRevenue from "./charts/chart-category-revenue/chart-category-revenue";
import ChartDailyComparison from "./charts/chart-daily-comparison/chart-daily-comparison";

const DailyRevenue = () => {
  return (
    <>
      <DailyRevenueTable columns={columns} data={dailyRevenue} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
        <ChartTotalRevenue />
        <ChartTotalTransactions />
        <ChartAverageIncome />
        <ChartStarProduct />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
        <div className="col-span-1 md:col-span-4">
          <ChartHourlyRevenue />
        </div>
        <div className="col-span-1 md:col-span-4 lg:col-span-3">
          <ChartDailyComparison />
        </div>
        <div className="col-span-1 md:col-span-4 lg:col-span-1">
          <ChartCategoryRevenue />
        </div>
      </div>
    </>
  );
};

export default DailyRevenue;
