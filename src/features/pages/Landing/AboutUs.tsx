"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutUs() {
  const pathname = usePathname();
  const showAbout = pathname.startsWith("/about");

  return (
    <section id="about-us" className="w-full bg-coffee-100 py-16">
      <div className="container mx-auto px-4">
        {!showAbout && (
          <>
            <h2 className="text-2xl font-bold text-center mb-8">
              About Our Story
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
              <div className="w-[300px] h-full">
                <Image
                  src="/our.png"
                  alt="About Us"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full min-h-full rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">
                  A Passion for Coffee & Community
                </h3>
                <p className="text-gray-600 mb-6">
                  Colada Kulture Co was founded by Yamila, a passionate coffee
                  enthusiast and entrepreneur, alongside her loyal companion,
                  Colada the Golden Retriever. Together, they’ve built a mobile
                  coffee and food truck that’s become a beloved part of South
                  Florida’s community events, celebrations, and gatherings.
                </p>
                <Link href="/about">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>
          </>
        )}
        {showAbout && (
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
              <div className="w-[300px] h-full">
                <Image
                  src="/our.png"
                  alt="About Us"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full min-h-full rounded-lg shadow-lg mx-auto"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Our History</h3>
                <p className="text-gray-600 mb-6">
                  Colada Kulture Co is a mobile coffee bar founded by Yamila, a
                  Latin entrepreneur with an insatiable love for coffee and her
                  faithful companion, Colada, her energetic Golden Retriever.
                  Together, they created a welcoming space where coffee
                  enthusiasts and dog lovers alike could bond over their shared
                  affections, one cup of coffee and wagging tail at a time.
                  Colada Kulture is more than a business—it&apos;s a reflection
                  of her values, aspirations, and vision. Growing up in a
                  close-knit Hispanic family where coffee was more than just a
                  beverage but a symbol of connection and hospitality, she
                  witnessed firsthand the power of coffee to bring people
                  together, spark conversations, and forge lasting bonds. With
                  this in mind, she sourced the highest quality beans from
                  women-owned farms with a goal to create unforgettable moments
                  of joy with every sip of coffee. Colada Kulture Co. It&apos;s
                  not just a place for coffee; it&apos;s a vibrant space where
                  people from all walks of life gather to share stories and can
                  bring their dogs for a Puppaccino. Join them at Colada
                  Kulture, where every cup tells a story.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
