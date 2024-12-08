import CatalogWrapper from "@/features/dashboard/pages/products/catalog/Catalog";
import { SearchParams } from "@/types";

interface CatalogPageProps {
  searchParams: Promise<SearchParams>;
}
export default function CatalogPage({ searchParams }: CatalogPageProps) {
  return <CatalogWrapper searchParams={searchParams} />;
}
