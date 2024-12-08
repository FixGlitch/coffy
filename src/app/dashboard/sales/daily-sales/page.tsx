import DailySalesWrapper from "@/features/dashboard/pages/sales/daily-sales/DailySales";
import { SearchParams } from "@/types";

interface DailySalesPageProps {
  searchParams: Promise<SearchParams>;
}

export default function DailySalesPage({ searchParams }: DailySalesPageProps) {
  return <DailySalesWrapper searchParams={searchParams} />;
}
