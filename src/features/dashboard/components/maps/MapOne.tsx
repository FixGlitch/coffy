"use client";
// @ts-ignore
import jsVectorMap from "jsvectormap";
import { useEffect } from "react";
import "../../js/us-aea-en";

interface MapOneProps {
  id: string;
}

const MapOne = ({ id }: MapOneProps) => {
  useEffect(() => {
    const container = document.getElementById(id) as HTMLElement & {
      _mapInstance?: jsVectorMap;
    };

    if (container && container._mapInstance) {
      container._mapInstance.destroy();
    }

    const mapInstance = new jsVectorMap({
      selector: `#${id}`,
      map: "us_aea_en",
      zoomButtons: true,
      showTooltip: false,

      regionStyle: {
        initial: {
          fill: "#E0D3C4",
        },
        hover: {
          fillOpacity: 1,
          fill: "#A38772",
        },
      },
      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });
  });

  return (
    <div className="col-span-12 rounded-sm border border-black dark:border-white bg-white dark:bg-black py-6 px-7.5 shadow-default xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div id={id} className="mapOne map-btn h-90" />
    </div>
  );
};

export default MapOne;
