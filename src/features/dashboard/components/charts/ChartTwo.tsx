import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  colors: ["#3A2A21", "#A38772"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
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
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

export default function ChartTwo() {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: "Revenue",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-lg border border-black dark:border-white bg-white dark:bg-black p-7.5 shadow-default xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-black dark:bg-white rounded-lg py-1 pl-3 pr-8 text-sm font-medium text-white dark:text-black outline-none"
            >
              <option value="" className="text-white dark:text-black">
                This Week
              </option>
              <option value="" className="text-white dark:text-black">
                Last Week
              </option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ApexCharts
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
