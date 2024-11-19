import Image from "next/image";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DescriptionTab from "./DescriptionTab";
import CharacteristicsTab from "./CharacteristicsTab";
import ReviewsTab from "./ReviewsTab";

export default function ProductDetail() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-square">
                <Image
                  src="/coladablend.png"
                  alt="Kafe Point Arabica 100%"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="relative aspect-square">
                    <Image
                      src="/coladablend.png"
                      alt={`Imagen ${item}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Kafe Point Arabica 100%, 1000 gr.
              </h1>
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  (12 opiniones)
                </span>
              </div>
              <div className="text-3xl font-bold mb-4">1.480 $</div>
              <p className="text-sm text-muted-foreground mb-6">
                Café en grano 100% Arábica de alta calidad. Tostado medio,
                perfecto para espresso y cappuccino.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <label
                    htmlFor="grind"
                    className="block text-sm font-medium mb-1"
                  >
                    Molienda
                  </label>
                  <select
                    id="grind"
                    className="w-full border rounded-md py-2 px-3"
                  >
                    <option>Grano entero</option>
                    <option>Molido para espresso</option>
                    <option>Molido para filtro</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium mb-1"
                  >
                    Cantidad
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-24 border rounded-md py-2 px-3"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-8">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Añadir al carrito
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Añadir a favoritos</span>
                </Button>
              </div>
              <Tabs defaultValue="description">
                <TabsList>
                  <TabsTrigger value="description">Descripción</TabsTrigger>
                  <TabsTrigger value="characteristics">
                    Características
                  </TabsTrigger>
                  <TabsTrigger value="reviews">Opiniones</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <DescriptionTab />
                </TabsContent>
                <TabsContent value="characteristics">
                  <CharacteristicsTab />
                </TabsContent>
                <TabsContent value="reviews">
                  <ReviewsTab />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
