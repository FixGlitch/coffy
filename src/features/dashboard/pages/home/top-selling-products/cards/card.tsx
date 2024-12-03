import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  category: string;
}

const ProductCard = ({ imageUrl, productName, category }: ProductCardProps) => {
  return (
    <Card className="border">
      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <CardHeader>
        <CardTitle>{productName}</CardTitle>
        <CardDescription>Category: {category}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
