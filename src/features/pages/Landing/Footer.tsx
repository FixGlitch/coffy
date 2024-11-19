import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-coffee-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center md:text-left">
          <Image
            src="/Logo.png"
            alt="Colada Coffee Logo"
            width={200}
            height={200}
            className="w-20 h-20 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm text-white/60">© by Colada Koffee</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about-us" className="text-sm hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Buyers</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/shipping" className="text-sm hover:text-primary">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-sm hover:text-primary">
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm hover:text-primary"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/loyalty-program"
                  className="text-sm hover:text-primary"
                >
                  Loyalty Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Store</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/warranty" className="text-sm hover:text-primary">
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-buy"
                  className="text-sm hover:text-primary"
                >
                  How to Buy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
            <div className="mt-4 flex flex-row gap-4">
              {/* Friday Location */}
              <div className="w-full sm:w-1/2">
                <p className="text-sm font-medium mb-2">Friday</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.053852254271!2d-80.3130474849151!3d25.684659783671004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6b0a5c76d6f%3A0x12836c90f1d30cbb!2s9255%20S%20Dixie%20Hwy%2C%20Pinecrest%2C%20FL%2033146%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="150"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 rounded-md"
                ></iframe>
              </div>
              {/* Saturday & Sunday Location */}
              <div className="w-full sm:w-1/2">
                <p className="text-sm font-medium mb-2">Saturday & Sunday</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.562294752339!2d-80.12284648491323!3d25.889521283588907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ba79b92c6749%3A0x56998e033da20b36!2sCollins%20Ave%20%26%2096th%20St%2C%20Surfside%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="150"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 rounded-md"
                ></iframe>
              </div>
            </div>
              <li className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/coladakulture/" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Colada Kulture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
