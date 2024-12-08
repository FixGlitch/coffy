"use client";
import dynamic from "next/dynamic";
import ChartOne from "../../components/charts/ChartOne";
import ChartTwo from "../../components/charts/ChartTwo";
import ChartThree from "../../components/charts/ChartThree";
import CardDataStats from "../../components/charts/CardDataStats";
import { Eye, ShoppingBag, ShoppingCart, Users } from "lucide-react";
const MapOne = dynamic(() => import("../../components/Maps/MapOne"), {
  ssr: false,
});

const HomeDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-2 ">
        <CardDataStats
          title="Total views"
          total="$3.456K"
          rate="0.43%"
          icon={<Eye className="text-black dark:text-white w-8" />}
          levelUp
        />
        <CardDataStats
          title="Total Profit"
          total="$45,2K"
          rate="4.35%"
          icon={<ShoppingCart className="text-black dark:text-white w-8" />}
          levelUp
        />
        <CardDataStats
          title="Total Product"
          total="2.450"
          rate="2.59%"
          icon={<ShoppingBag className="text-black dark:text-white w-8" />}
          levelUp
        />
        <CardDataStats
          title="Total Users"
          total="3.456"
          rate="0.95%"
          icon={<Users className="text-black dark:text-white w-8" />}
          levelDown
        />
      </div>
      <div className="grid grid-cols-12 mt-2 gap-2">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne id={"map1"} />
      </div>
    </>
  );
};

export default HomeDashboard;
