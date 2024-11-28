"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

export function Navbar() {
  const pathname = usePathname();
  const isEcommercePage = pathname.startsWith("/ecommerce");

  return (
    <header className="w-full border-b bg-white">
      <div className="flex h-28 items-center justify-around px-4 md:px-8">
        <Link href="/home" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            width={100}
            height={100}
            alt="Coffy"
          />
        </Link>

        {isEcommercePage ? (
          <>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/home/oferts"
                className="text-sm font-medium hover:text-primary"
              >
                Oferts
              </Link>
              <Link
                href="/home/recently-added"
                className="text-sm font-medium hover:text-primary"
              >
                Recently Added
              </Link>
              <Link
                href="/home/#reviews-of-customers"
                className="text-sm font-medium hover:text-primary"
              >
                Reviews of Customers
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <form className="hidden lg:block relative w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-8"
                  type="search"
                />
              </form>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Favoritos"
              >
                <Heart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  0
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  0
                </span>
              </Button>
            </div>
          </>
        ) : (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/home/#about-us"
              className="transition-colors hover:text-foreground/80"
            >
              About Us
            </Link>
            <Link
              href="/home/#events"
              className="transition-colors hover:text-foreground/80"
            >
              Events
            </Link>
            <Link
              href="/home/book-our-mobile-bar"
              className="transition-colors hover:text-foreground/80"
            >
              Book Our Mobile Bar
            </Link>
            <Link
              href="/home/ecommerce"
              className="transition-colors hover:text-foreground/80"
            >
              Ecommerce
            </Link>
          </nav>
        )}

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
