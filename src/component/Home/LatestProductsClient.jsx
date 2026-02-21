"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";


const categories = ["All", "Jewelry", "Home Decor", "Accessories", "Clothing"];

const LatestProductsClient = ({ initialProducts }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filtering Logic
  const filteredProducts = activeCategory === "All"
    ? initialProducts
    : initialProducts.filter(p => p.category === activeCategory);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        {currentProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              currentPage === 1 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-[#F1641E] hover:bg-orange-50 cursor-pointer"
            }`}
          >
            Previous
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full font-bold transition-all ${
                  currentPage === index + 1
                    ? "bg-[#F1641E] text-white"
                    : "text-gray-500 hover:bg-gray-100 cursor-pointer"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              currentPage === totalPages 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-[#F1641E] hover:bg-orange-50 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* If there no product */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No products found in this category.
        </div>
      )}
    </>
  );
};

export default LatestProductsClient;