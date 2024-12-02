import { salesBreakdown } from "@/features/dashboard/constants/sales-breakdown";
import { columns as salesBreakdownColumns } from "./tables/table-sales-breakdown/columns";
import { columns as salesByCategoryColumns } from "./tables/table-sales-by-category/columns";
import { columns as topPerformingSalesPeopleColumns } from "./tables/table-top-performing-sales-people/columns";
import SalesBreakdownTable from "./tables/table-sales-breakdown/data-table";
import SalesByCategoryTable from "./tables/table-sales-by-category/data-table";
import TopPerformingSalesPeopleTable from "./tables/table-top-performing-sales-people/data-table";
import { salesByCategory } from "@/features/dashboard/constants/sales-by-category";
import { topPerformingSalesPeople } from "@/features/dashboard/constants/top-performing-sales-people";

const DailySales = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SalesBreakdownTable
        columns={salesBreakdownColumns}
        data={salesBreakdown}
      />
      <SalesByCategoryTable
        columns={salesByCategoryColumns}
        data={salesByCategory}
      />
      <TopPerformingSalesPeopleTable
        columns={topPerformingSalesPeopleColumns}
        data={topPerformingSalesPeople}
      />
    </div>
  );
};

export default DailySales;
