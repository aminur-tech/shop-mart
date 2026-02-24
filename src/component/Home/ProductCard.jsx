"use client";
import React from "react";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div
      data-aos="fade-up"
      className="group bg-white rounded-[30px] p-4 border border-orange-100 shadow-sm hover:shadow-2xl transition-all duration-500 perspective-1000"
    >
      {/* Image Section */}
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-[300px] w-full overflow-hidden rounded-[25px] transition-all duration-700 transform group-hover:rotate-x-6 group-hover:scale-95 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-[#F1641E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              NEW
            </span>
          )}
        </div>
      </Link>

      {/* Content Section */}
      <div className="mt-5 space-y-2">
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">
          {product.category}
        </p>

        <Link href={`/cat/${product.prodectdetails}`}>
          <h3 className="text-[#2D2D2D] font-bold text-xl truncate text-shadow-premium hover:text-orange-500 transition cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-orange-400">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-bold text-gray-700">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#2D2D2D]">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {/* 🔥 Cart Icon Click → Go to Details */}
          <Link href={`/categories/${product.category}`}>
            <button className="p-3 bg-orange-50 text-[#F1641E] rounded-full hover:bg-[#F1641E] hover:text-white transition-colors">
              <ShoppingCart size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;