import Image from "next/image";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Ecommerce() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-[500px] bg-[url('/truck.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Kafe Point Arabica 100%
              </h1>
              <p className="text-xl text-white mb-8">Descuento del 40%</p>
              <div className="text-5xl font-bold text-white mb-8">480 $</div>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Comprar ahora
              </Button>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/coladablend.png"
                        width={500}
                        height={300}
                        alt={`Producto ${item}`}
                        className="object-cover rounded-md"
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
                    <h3 className="font-semibold mb-2">Nombre del Producto</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">1.000 $</span>
                      <Button size="icon" variant="outline">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Añadir al carrito</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Precios bajos",
                  description: "Ofrecemos los mejores precios del mercado",
                },
                {
                  title: "Envío rápido",
                  description: "Entrega en 24 horas en toda Rusia",
                },
                {
                  title: "Atención al cliente",
                  description: "Soporte 24/7 para todas tus consultas",
                },
                {
                  title: "Productos de calidad",
                  description: "Solo los mejores granos de café seleccionados",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opiniones-de-clientes" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Opiniones de clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                      <div>
                        <h4 className="font-semibold">Nombre del Cliente</h4>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      &quot;Excelente café y servicio. Definitivamente volveré a
                      comprar.&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
