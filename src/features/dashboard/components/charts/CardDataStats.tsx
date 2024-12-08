import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  icon: ReactNode;
}

const CardDataStats = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  icon,
}: CardDataStatsProps) => {
  if (levelUp && levelDown) {
    console.error(
      "Error: levelUp y levelDown no pueden ser verdaderos al mismo tiempo."
    );
    return null;
  }

  return (
    <Card className="rounded-lg border border-black py-6 px-7.5 shadow-default dark:border-white dark:bg-black">
      <CardHeader
        useDefaultStyles={false}
        className="flex justify-center items-center h-11.5 w-11.5 rounded-full bg-white border border-black shadow-sm dark:border-white dark:bg-black"
      >
        {icon}
      </CardHeader>
      <CardContent className="mt-4 p-0 flex items-end justify-between">
        <CardTitle>
          <div className="text-title-md font-bold text-black dark:text-white">
            {total}
          </div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {title}
          </div>
        </CardTitle>
        <CardDescription
          className={clsx(
            "flex items-center gap-1 -mb-0.5 text-sm font-medium",
            { "text-green-600": levelUp },
            { "text-red-600": levelDown },
            "dark:text-gray-200"
          )}
        >
          {rate}
          {levelUp && <ArrowUp className="w-4 text-success-primary" />}
          {levelDown && <ArrowDown className="w-4 text-danger-primary" />}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardDataStats;
