import xlsx, { IJsonSheet } from "json-as-xlsx";
import { salesBreakdown } from "../constants/sales-breakdown";
import { salesByCategory } from "../constants/sales-by-category";
import { topPerformingSalesPeople } from "../constants/top-performing-sales-people";

function generateExcel(
  sheetName: string,
  columns: IJsonSheet[],
  fileName: string
) {
  const settings = { fileName };
  xlsx(columns, settings);
}

export function downloadSalesBreakdown() {
  const columns: IJsonSheet[] = [
    {
      sheet: "Sales Breakdown",
      columns: [
        { label: "ID", value: "id" },
        { label: "Product", value: "product" },
        { label: "Units Sold", value: "units_sold" },
        { label: "Revenue ($)", value: "revenue" },
        {
          label: "Date of Sale",
          value: (row) =>
            new Date(row.date_of_sale as string).toLocaleDateString(),
        },
      ],
      content: salesBreakdown,
    },
  ];

  generateExcel("Sales Breakdown", columns, "Sales Breakdown Excel");
}

export function downloadSalesByCategory() {
  const columns: IJsonSheet[] = [
    {
      sheet: "Sales By Category",
      columns: [
        { label: "ID", value: "id" },
        { label: "Category", value: "category" },
        { label: "Units Sold", value: "units_sold" },
        { label: "Revenue ($)", value: "revenue" },
        {
          label: "Date of Sale",
          value: (row) =>
            new Date(row.date_of_sale as string).toLocaleDateString(),
        },
      ],
      content: salesByCategory,
    },
  ];

  generateExcel("Sales By Category", columns, "Sales By Category Excel");
}

export function downloadTopPerformingSalesPeople() {
  const columns: IJsonSheet[] = [
    {
      sheet: "Sales By Category",
      columns: [
        { label: "ID", value: "id" },
        { label: "Sales Person", value: "sales_person" },
        { label: "Total Sales ($)", value: "total_sales" },
        { label: "Total Commission ($)", value: "total_commission" },
        {
          label: "Date of Sale",
          value: (row) =>
            new Date(row.date_of_sales as string).toLocaleDateString(),
        },
      ],
      content: topPerformingSalesPeople,
    },
  ];

  generateExcel(
    "Top Performing Sales People",
    columns,
    "Top Performing Sales People Excel"
  );
}
