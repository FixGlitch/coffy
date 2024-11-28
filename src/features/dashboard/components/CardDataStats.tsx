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
}: CardDataStatsProps) =>{
  if (levelUp && levelDown) {
    console.error("Error: levelUp y levelDown no pueden ser verdaderos al mismo tiempo.");
    return null;
  }

  return (
    <Card className="rounded-lg border border-coffee-400 bg-coffee-50 py-6 px-7.5 shadow-default">
      <CardHeader
        useDefaultStyles={false}
        className="flex justify-center items-center h-11.5 w-11.5 rounded-full bg-white border border-coffee-400 shadow-4"
      >
        {icon}
      </CardHeader>
      <CardContent className="mt-4 p-0 flex items-end justify-between">
        <CardTitle>
          <div className="text-title-md font-bold text-black">{total}</div>
          <div className="text-sm font-medium">{title}</div>
        </CardTitle>
        <CardDescription
          className={clsx(
            "flex items-center gap-1 -mb-0.5 text-sm font-medium",
            { "text-success-primary": levelUp },
            { "text-danger-primary": levelDown }
          )}
        >
          {rate}
          {levelUp && <ArrowUp className="w-4" />}
          {levelDown && <ArrowDown className="w-4" />}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default CardDataStats
