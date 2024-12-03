import { topSellingProducts } from "@/features/dashboard/constants/top-shelling-products";
import { columns } from "./tables/columns";
import TopSellingProductsTable from "./tables/data-table";
import ProductList from "./cards/card-list";

const TopSellingProducts = () => {
  return (
    <div className="flex flex-col gap-5">
      <ProductList />
      <TopSellingProductsTable columns={columns} data={topSellingProducts} />
    </div>
  );
};

export default TopSellingProducts;
