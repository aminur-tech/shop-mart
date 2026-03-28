"use client";
import { motion } from "framer-motion";

const brands = [
  "NIKE", "SAMSUNG", "APPLE", "ADIDAS", "SONY", 
  "NIKE", "SAMSUNG", "APPLE", "ADIDAS", "SONY" // Duplicated for seamless loop
];

export default function BrandLogos() {
  return (
    <div className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
          Official Marketplace Partners
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Infinite Scroll Container */}
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {brands.map((brand, index) => (
            <span
              key={index}
              className="text-4xl md:text-5xl font-black italic text-gray-200 hover:text-blue-600 transition-colors cursor-default select-none tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Gradient Overlays for "Fade Out" effect on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
}