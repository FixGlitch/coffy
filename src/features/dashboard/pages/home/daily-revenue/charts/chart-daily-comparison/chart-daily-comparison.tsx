"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartDailyComparisonState {
  dailyComparison: number[];
}

const ChartDailyComparison: React.FC = () => {
  const [state, setState] = useState<ChartDailyComparisonState>({
    dailyComparison: [1500, 1600, 1700, 1800, 1600, 1500, 1400],
  });

  const options: ApexOptions = {
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
    tooltip: { x: { show: true } },
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <h4 className="text-lg font-semibold text-black dark:text-white">Revenue Comparison with Previous Days</h4>
      <div id="dailyComparisonChart">
        <ApexCharts options={options} series={[{ name: "Revenue", data: state.dailyComparison }]} type="line" height={350} />
      </div>
    </div>
  );
};

export default ChartDailyComparison;
