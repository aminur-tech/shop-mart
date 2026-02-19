"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import {
  ShoppingBag,
  ArrowRight,
  Info,
  UserPlus,
  Truck,
  Search,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    badge: "Handmade Treasures",
    title: "Discover Real Craftsmanship",
    desc: "Explore authentic handmade products from the heart of Bangladesh, delivered safely to your doorstep.",
    image: "https://i.ibb.co/y9D4jvj/photographer-man-viewing-his-photos-camera-53876-119842.avif",
    primaryBtn: "Browse Shop",
    secondaryBtn: "View Categories",
    iconP: <ShoppingBag size={20} />,
    iconS: <Search size={20} />,
  },
  {
    id: 2,
    badge: "Secure Escrow",
    title: "Safe & Trustworthy Shopping",
    desc: "Our secure escrow system ensures your money is protected until you receive and verify your product.",
    image: "https://images.unsplash.com/photo-1556742049-63cf56540c1e?auto=format&fit=crop&q=80&w=800",
    primaryBtn: "How it Works",
    secondaryBtn: "Join as Seller",
    iconP: <Info size={20} />,
    iconS: <UserPlus size={20} />,
  },
  {
    id: 3,
    badge: "Premium Collection",
    title: "Elevate Your Lifestyle",
    desc: "From traditional wear to modern home decor, find everything you need in one secure marketplace.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    primaryBtn: "Shop Now",
    secondaryBtn: "New Arrivals",
    iconP: <ShoppingBag size={20} />,
    iconS: <ArrowRight size={20} />,
  },
  {
    id: 4,
    badge: "Fast Delivery",
    title: "Swift Delivery Nationwide",
    desc: "Experience the fastest delivery service with real-time tracking for every order you place.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
    primaryBtn: "Track Order",
    secondaryBtn: "Help Center",
    iconP: <Truck size={20} />,
    iconS: <Info size={20} />,
  },
];

const Hero = ({ onShopClick }) => {
  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#FAF9F6]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#FFF5E6] to-[#FFEBD6] -z-10" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={800}
          onSlideChange={() => {
            if (typeof AOS !== "undefined") {
              AOS.refresh();
            }
          }}
          className="hero-swiper !overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh] py-10 lg:py-16">
                {/* Left - Text Content */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                  <div className="overflow-hidden mb-5">
                    <span
                      data-aos="fade-down"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-200 text-sm font-semibold text-orange-700 shadow-sm"
                    >
                      ✨ {slide.badge}
                    </span>
                  </div>

                  <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[#1F1F1F] animate-vibrate drop-shadow-md"
                  >
                    {slide.title}
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="text-lg sm:text-xl text-gray-700 max-w-xl leading-relaxed mb-10"
                  >
                    {slide.desc}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex flex-wrap gap-4 sm:gap-6"
                  >
                    <button
                      onClick={onShopClick}
                      className="flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 bg-[#F1641E] hover:bg-[#e0581a] text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 text-base sm:text-lg"
                    >
                      {slide.iconP} {slide.primaryBtn}
                    </button>

                    <button className="flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 bg-white hover:bg-orange-50 border border-orange-200 text-[#1F1F1F] font-bold rounded-2xl transition-all duration-300 shadow-sm text-base sm:text-lg">
                      {slide.iconS} {slide.secondaryBtn}
                    </button>
                  </div>
                </div>

                {/* Right - Image with 3D Tilt */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className="relative group w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] aspect-[4/5] lg:aspect-[5/6] perspective-[1200px]"
                  >
                    <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:rotate-x-6 group-hover:-rotate-y-10 group-hover:scale-[0.96] group-hover:shadow-2xl">
                      {/* Decorative angled frame */}
                      <div className="absolute inset-0 border-2 border-orange-200/60 rounded-3xl translate-x-5 translate-y-5 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 rounded-br-[60px]" />

                      {/* Main Image Container */}
                      <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white bg-white shadow-2xl relative">
                        <img
                          src={slide.image}
                          alt={`${slide.title} - ${slide.badge}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes vibrate {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1.5px, 1.5px); }
          40% { transform: translate(-1.5px, -1.5px); }
          60% { transform: translate(1.5px, 1.5px); }
          80% { transform: translate(1.5px, -1.5px); }
        }
        .animate-vibrate {
          animation: vibrate 0.5s ease-in-out;
        }

        .swiper-pagination-bullet {
          background: #f1641e !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #f1641e !important;
          width: 32px !important;
          border-radius: 9999px !important;
          opacity: 1 !important;
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal {
          bottom: 20px !important;
        }
        @media (max-width: 640px) {
          .swiper-pagination-bullets {
            bottom: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;