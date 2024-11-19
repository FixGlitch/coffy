"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <span className="text-[40vw] font-bold text-gray-100">404</span>
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-gray-900 mb-4 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            404
          </motion.h1>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.6,
            }}
          ></motion.div>
        </div>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Oops! The page you were looking for doesn&apos;t exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            asChild
            className="bg-coffee-200 hover:bg-coffee-300 text-coffee-900 px-8 py-3 rounded-full text-lg transition-colors"
          >
            <Link href="/">Go Home</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
