"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartHourlyRevenueState {
  hourlyRevenue: number[];
}

const ChartHourlyRevenue: React.FC = () => {
  const [state, setState] = useState<ChartHourlyRevenueState>({
    hourlyRevenue: [200, 300, 250, 400, 350, 500, 600, 700, 800, 650, 700, 750],
  });

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
        "5 AM",
        "6 AM",
        "7 AM",
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      yaxis: { lines: { show: false } },
    },
    fill: { opacity: 1 },
    tooltip: { x: { show: false } },
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h4 className="text-lg font-semibold text-black dark:text-white">
        Hourly Revenue
      </h4>
      <div id="hourlyRevenueChart">
        <ApexCharts
          options={options}
          series={[{ data: state.hourlyRevenue }]}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartHourlyRevenue;
