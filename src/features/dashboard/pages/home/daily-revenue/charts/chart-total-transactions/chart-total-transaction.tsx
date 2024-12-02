"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartTotalRevenueState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
    width: "250px",
  },
  colors: ["#6B4F3E", "#A38772"],
  labels: ["Completed", "Pending"],
  legend: {
    show: false,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "50%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

export default function ChartTotalTransactions() {
  const [state, setState] = useState<ChartTotalRevenueState>({
    series: [75, 25],
  });

  const handleReset = () => {
    setState({
      series: [75, 25],
    });
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleReset();
  };

  return (
    <div className="rounded-sm border border-coffee-400 bg-coffee-50 px-5 pt-7.5 pb-5 shadow-default">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <h5 className="text-xl font-semibold text-black dark:text-white">
          Total Transactions
        </h5>
        <div className="relative z-20 inline-block">
          <select
            name=""
            id=""
            className="inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            onChange={handleDropdownChange}
          >
            <option value="day">Day</option>
            <option value="hour">Hour</option>
          </select>
          <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="mb-2">
        <div id="chartTransactions" className="mx-auto flex justify-center">
          <ApexCharts options={options} series={state.series} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-coffee-800"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Completed</span>
              <span>75%</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-coffee-400"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Pending</span>
              <span>25%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
