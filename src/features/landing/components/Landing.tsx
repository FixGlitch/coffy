"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AboutUs from "./AboutUs";

export default function Landing() {
  const eventImages = Array.from(
    { length: 5 },
    (_, i) => `/event-${i + 1}.png`
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + eventImages.length) % eventImages.length
    );
  };
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative h-[600px] bg-[url('/truck.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              MOBILE COFFEE & FOOD TRUCK
            </h1>
            <p className="w-3/5 text-xl text-white mb-8 mx-auto text-center">
              Bringing a full-service mobile espresso bar and gourmet food
              experience to your events and gatherings across South Florida.
            </p>
            <Link href="/book-our-mobile-bar">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="events" className="w-full bg-coffee-100">
        <div className="grid md:grid-cols-2">
          <section className="relative h-[600px] overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={eventImages[currentIndex]}
                alt={`Event ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
              />
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
                <button
                  onClick={goToPrevious}
                  className="p-2 bg-black bg-opacity-50 rounded-full"
                >
                  &#10094;
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
                <button
                  onClick={goToNext}
                  className="p-2 bg-black bg-opacity-50 rounded-full"
                >
                  &#10095;
                </button>
              </div>
            </div>
          </section>
          <div className="flex flex-col justify-center px-8 py-16">
            <h2 className="text-2xl font-bold mb-4">Events & Gatherings</h2>
            <p className="text-gray-600">
              Whether it&apos;s a wedding, corporate event, or private party,
              our coffee and food truck adds a unique and unforgettable touch to
              every occasion. With handcrafted espresso drinks and a variety of
              delicious bites, we cater to coffee enthusiasts and food lovers
              alike.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Quality You Can Taste
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Image
                key={i}
                src={`/event-${i}.png?height=300&width=300&text=Coffee${i}`}
                alt={`Coffee Image ${i}`}
                width={300}
                height={300}
                className="object-cover aspect-square w-full h-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-coffee-100 py-16">
        <div className="container mx-auto text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-16">
            Our Food & Coffee Truck in Action
          </h2>
          <div className="aspect-[2/1] w-full mx-auto">
            <Image
              src="/truck.png"
              alt="Truck in Action"
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Delicious Moments Await
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[4, 5, 6].map((i) => (
              <Image
                key={i}
                src={`/event-${i}.png?height=300&width=300&text=Coffee${i}`}
                alt={`Food Image ${i}`}
                width={300}
                height={300}
                className="object-cover aspect-square w-full h-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about-us">
        <AboutUs />
      </section>
    </div>
  );
}
