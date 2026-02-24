"use client";
import { useState } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";

export default function ProductDetailsPage() {
  // Temporary static product (later fetch by slug)
  const product = {
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    category: "Electronics",
    image: "/product.jpg",
    isNew: true,
    rating: 4.5,
    reviews: 128,
    price: 120,
    oldPrice: 150,
    description:
      "Experience crystal clear sound quality with premium wireless headphones. Designed for long sessions, superior comfort, active noise cancellation and powerful bass.",
    features: [
      "Bluetooth 5.3 – Stable & Low Latency",
      "Active Noise Cancellation (ANC)",
      "Up to 20 Hours Battery Life",
      "Fast Charging – 10 min = 2 hours playtime",
      "Soft Memory Foam Ear Cushions",
    ],
  };

  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-gray-50/70 min-h-screen py-12 md:py-16 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* ── LEFT ── Image + thumbnails ── */}
          <div className="space-y-5 md:space-y-6">
            {/* Main Image */}
            <div
              className={`
                group relative h-[380px] sm:h-[450px] lg:h-[520px] 
                rounded-[30px] overflow-hidden border border-orange-100/60 
                shadow-xl shadow-orange-100/20 
                transition-all duration-700 
                hover:shadow-2xl hover:shadow-orange-200/40
                perspective-1000
              `}
            >
              <div
                className="
                  absolute inset-0 transition-transform duration-1000 
                  group-hover:scale-110 group-hover:rotate-x-3
                "
              >
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                />
              </div>

              {product.isNew && (
                <span className="absolute top-5 left-5 bg-[#F1641E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                  NEW
                </span>
              )}

              {/* Wishlist heart */}
              <button
                onClick={() => setLiked(!liked)}
                className="absolute top-5 right-5 z-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition"
              >
                <Heart
                  size={22}
                  className={liked ? "fill-red-500 text-red-500" : "text-gray-700"}
                />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-orange-200">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(product.image)}
                  className={`
                    min-w-[90px] h-24 sm:h-28 rounded-2xl overflow-hidden 
                    cursor-pointer border-2 transition-all duration-300
                    ${
                      mainImage === product.image
                        ? "border-[#F1641E] scale-105 shadow-md"
                        : "border-transparent hover:border-orange-300"
                    }
                  `}
                >
                  <img
                    src={product.image}
                    alt={`thumbnail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── Info ── */}
          <div className="space-y-6 lg:space-y-8 pt-2 md:pt-6">
            <div>
              <p className="text-[#F1641E] uppercase text-sm font-bold tracking-wider">
                {product.category}
              </p>

              <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2D2D2D] leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2.5">
              <div className="flex text-[#F1641E]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    className={i < product.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="font-bold text-gray-800">{product.rating}</span>
              <span className="text-gray-500 text-sm">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-4xl sm:text-5xl font-black text-[#2D2D2D]">
                ${product.price}
              </span>
              {product.oldPrice && (
                <div className="flex flex-col">
                  <span className="text-xl text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                  <span className="text-sm text-green-600 font-medium">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed text-[15.5px]">
              {product.description}
            </p>

            {/* Features */}
            <ul className="space-y-2.5 text-gray-700">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#F1641E] text-xl font-black">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Quantity + Cart */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-5 py-3 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="px-6 py-3 text-xl font-semibold min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-5 py-3 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <button
                className="
                  flex-1 sm:flex-none min-w-[220px] flex items-center justify-center gap-3 
                  bg-[#F1641E] hover:bg-[#d95c18] text-white 
                  px-8 py-4 rounded-full font-bold text-lg
                  shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40
                  transition-all duration-300 active:scale-95
                "
              >
                <ShoppingCart size={22} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* ── Reviews Section (simple version) ── */}
        <div className="mt-16 lg:mt-20 bg-white rounded-[30px] p-8 md:p-10 shadow-xl border border-orange-50">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-8">
            Customer Reviews
          </h2>

          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="flex text-[#F1641E]">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <span className="font-semibold">John Doe</span>
                <span className="text-gray-500 text-sm">• 2 weeks ago</span>
              </div>
              <p className="mt-3 text-gray-700">
                Amazing sound quality and very comfortable even after hours of use. Battery life is impressive. Highly recommended!
              </p>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}