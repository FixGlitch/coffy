"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartOptions: ApexOptions = {
  colors: ["#3A2A21", "#A38772"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: { borderRadius: 0, columnWidth: "25%" },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",
  },
  fill: { opacity: 1 },
};

interface ChartData {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartWeeklySales: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    series: [
      { name: "Sales", data: [44, 55, 41, 67] },
      { name: "Revenue", data: [13, 23, 20, 8] },
    ],
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
  };

  return (
    <div className="rounded-lg border border-coffee-400 bg-coffee-50 p-7.5 shadow-default">
      <div className="mb-4 flex justify-between items-center gap-4">
        <h3 className="text-lg font-semibold">Weekly Sales</h3>
        <div className="relative">
          <select
            onChange={handleSelectChange}
            className="appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
          >
            <option value="this-week">This Week</option>
            <option value="last-week">Last Week</option>
          </select>
          <span className="absolute top-1/2 right-3 -translate-y-1/2">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47 1.09C0.47 1.03 0.5 0.96 0.54 0.91C0.65 0.81 0.81 0.81 0.91 0.9L4.85 4.6C4.93 4.68 5.06 4.68 5.15 4.6L9.09 0.9C9.19 0.79 9.36 0.81 9.46 0.91C9.56 1.01 9.55 1.18 9.44 1.28L5.5 4.99C5.22 5.24 4.78 5.24 4.52 4.99L0.56 1.28C0.5 1.22 0.47 1.16 0.47 1.09Z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="-ml-5 -mb-9">
        <ApexCharts
          options={chartOptions}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartWeeklySales;
