import xlsx, { IJsonSheet } from "json-as-xlsx";
import { salesBreakdown } from "../constants/sales-breakdown";
import { salesByCategory } from "../constants/sales-by-category";
import { topPerformingSalesPeople } from "../constants/top-performing-sales-people";
import { dailyRevenue } from "../constants/daily-revenue";
import { topSellingProducts } from "../constants/top-shelling-products";

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

export function downloadDailyRevenue() {
  const columns: IJsonSheet[] = [
    {
      sheet: "Daily Revenue",
      columns: [
        { label: "ID", value: "id" },
        {
          label: "Hour",
          value: (row) =>
            new Date(row.hour as string).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
        },
        {
          label: "Product",
          value: (row) => {
            if (Array.isArray(row.products)) {
              return row.products
                .map(
                  (product) =>
                    `${product.quantity}x ${product.name} ($${product.price.toFixed(2)})`
                )
                .join(", ");
            }
            return "";
          },
        },
        { label: "Units Sold", value: "amount" },
        { label: "Total Revenue ($)", value: "total" },
        { label: "Payment Method", value: "payment_method" },
        { label: "Category", value: "category" },
        {
          label: "Date of Sale",
          value: (row) => new Date(row.date as string).toLocaleDateString(),
        },
      ],
      content: dailyRevenue.map((row) => ({
        ...row,
        products: Array.isArray(row.products)
          ? row.products
              .map(
                (product) =>
                  `${product.quantity}x ${product.name} ($${product.price.toFixed(2)})`
              )
              .join(", ")
          : "",
      })),
    },
  ];

  generateExcel("Daily Revenue Report", columns, "Daily Revenue Excel");
}

export function downloadTopSellingProducts() {
  const columns: IJsonSheet[] = [
    {
      sheet: "Top Selling Products",
      columns: [
        { label: "ID", value: "id" },
        { label: "Product Name", value: "name" },
        { label: "Category", value: "category" },
        { label: "Units Sold", value: "sold_units" },
        { label: "Image URL", value: "image" },
      ],
      content: topSellingProducts,
    },
  ];

  generateExcel(
    "Top Selling Products",
    columns,
    "Top Selling Products Excel"
  );
}


