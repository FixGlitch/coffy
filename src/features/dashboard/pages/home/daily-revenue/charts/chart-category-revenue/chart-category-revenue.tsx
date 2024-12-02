"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartCategoryRevenueState {
  categoryRevenue: number[];
}

const ChartCategoryRevenue: React.FC = () => {
  const [state, setState] = useState<ChartCategoryRevenueState>({
    categoryRevenue: [6000, 2000, 3000, 1000],
  });

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "pie",
      width: "100%",
      height: "auto",
    },
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    dataLabels: { enabled: true },
    legend: { show: true, position: "bottom" },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default p-4 sm:p-5">
      <h4 className="text-lg font-semibold text-black dark:text-white">
        Revenue by Category
      </h4>
      <div id="categoryRevenueChart">
        <ApexCharts
          options={options}
          series={state.categoryRevenue}
          type="pie"
          width="100%"
        />
      </div>
    </div>
  );
};

export default ChartCategoryRevenue;
