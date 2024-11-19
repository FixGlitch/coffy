import Image from "next/image";
import Link from "next/link";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Link key={item} href={`/ecommerce/product/${item}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-center items-center relative aspect-square mb-4">
                  <Image
                    src="/coladablend.png"
                    alt={`Producto ${item}`}
                    fill
                    className="object-center"
                  />
                </div>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <h3 className="font-semibold mb-2">Café Arábica Premium</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold">1.000 $</span>
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Añadir al carrito</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
