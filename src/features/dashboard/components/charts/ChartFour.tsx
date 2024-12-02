"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartState {
  hourlyRevenue: number[];
  dailyComparison: number[];
  categoryRevenue: number[];
}

const RevenueCharts: React.FC = () => {
  const [state, setState] = useState<ChartState>({
    hourlyRevenue: [200, 300, 250, 400, 350, 500, 600, 700, 800, 650, 700, 750],
    dailyComparison: [1500, 1600, 1700, 1800, 1600, 1500, 1400], // Current day vs. previous days
    categoryRevenue: [6000, 2000, 3000, 1000], // Revenue by category
  });

  const hourlyRevenueOptions: ApexOptions = {
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
      categories: ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      yaxis: {
        lines: { show: false },
      },
    },
    fill: { opacity: 1 },
    tooltip: {
      x: { show: false },
    },
  };

  const dailyComparisonOptions: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    },
    dataLabels: { enabled: false },
    grid: {
      yaxis: { lines: { show: false } },
    },
    tooltip: {
      x: { show: true },
    },
  };

  const categoryRevenueOptions: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "pie",
      width: "380",
    },
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    dataLabels: { enabled: true },
    legend: { show: true, position: "bottom" },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">Revenue Analytics</h3>
      </div>

      <div className="mb-2">
        <h4 className="text-lg font-semibold text-black dark:text-white">Hourly Revenue</h4>
        <div id="hourlyRevenueChart" className="-ml-5">
          <ApexCharts options={hourlyRevenueOptions} series={[{ data: state.hourlyRevenue }]} type="bar" height={350} />
        </div>
      </div>

      <div className="mb-2">
        <h4 className="text-lg font-semibold text-black dark:text-white">Revenue Comparison with Previous Days</h4>
        <div id="dailyComparisonChart" className="-ml-5">
          <ApexCharts options={dailyComparisonOptions} series={[{ name: "Revenue", data: state.dailyComparison }]} type="line" height={350} />
        </div>
      </div>

      <div className="mb-2">
        <h4 className="text-lg font-semibold text-black dark:text-white">Revenue by Category</h4>
        <div id="categoryRevenueChart" className="-ml-5">
          <ApexCharts options={categoryRevenueOptions} series={state.categoryRevenue} type="pie" width={380} />
        </div>
      </div>
    </div>
  );
};

export default RevenueCharts;
