"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";


const categories = ["All", "Jewelry", "Home Decor", "Accessories", "Clothing"];

const LatestProductsClient = ({ initialProducts }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtering Logic
  const filteredProducts = activeCategory === "All"
    ? initialProducts
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
              activeCategory === cat
                ? "bg-[#F1641E] border-[#F1641E] text-white shadow-lg scale-105"
                : "bg-white border-orange-100 text-gray-600 hover:border-orange-300 cursor-pointer"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No products found in this category.
        </div>
      )}
    </>
  );
};

export default LatestProductsClient;