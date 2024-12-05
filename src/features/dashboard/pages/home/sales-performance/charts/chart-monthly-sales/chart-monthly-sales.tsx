"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartMonthlySalesState {
  series: number[];
}

const ChartMonthlySales = () => {
  const [state, setState] = useState<ChartMonthlySalesState>({
    series: [65, 34, 12],
  });

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["January", "February", "March"],
    colors: ["#160D08", "#3A2A21", "#6B4F3E"],
    legend: {
      show: false,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            width: "100%",
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

  const handleReset = () => {
    setState({ series: [65, 34, 12] });
  };

  const handleDropdownChange = () => {
    handleReset();
  };

  const renderLegendItem = (
    label: string,
    percentage: number,
    color: string
  ) => (
    <div className="w-full px-8 sm:w-1/2">
      <div className="flex items-center">
        <span
          className="mr-2 h-3 w-full max-w-3 rounded-full"
          style={{ backgroundColor: color }}
        ></span>
        <p className="flex justify-between w-full text-sm font-medium text-black dark:text-white">
          <span>{label}</span>
          <span>{percentage}%</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="rounded-sm border border-coffee-400 bg-coffee-50 px-5 pt-7.5 pb-5 shadow-default sm:px-7.5">
      <div className="mb-3 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Monthly Sales</h3>
        <div className="relative z-20">
          <select
            className="appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            onChange={handleDropdownChange}
          >
            <option value="">Monthly</option>
            <option value="">Yearly</option>
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
                d="M0.47 1.09c0-.06.03-.13.08-.18.1-.1.27-.1.37-.01l3.94 3.71c.07.07.2.07.29 0L9.09.9c.1-.1.27-.1.37.01.1.1.09.27-.01.37L5.5 4.99c-.28.25-.72.25-1 0L0.56 1.27c-.06-.06-.09-.12-.09-.18z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
      </div>

      <div id="chartThree" className="flex justify-center mb-2">
        <ApexCharts
          options={options}
          series={state.series}
          type="donut"
          height={350}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-y-3">
        {renderLegendItem("January", 65, "#160D08")}
        {renderLegendItem("February", 34, "#3A2A21")}
        {renderLegendItem("March", 12, "#6B4F3E")}
      </div>
    </div>
  );
};

export default ChartMonthlySales;
