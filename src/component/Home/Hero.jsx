"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const slides = [
    {
      id: 1,
      badge: "Handmade Treasures",
      title: "Discover Real Craftsmanship",
      desc: "Explore authentic handmade products from the heart of Bangladesh, delivered safely to your doorstep.",
      image:
        "https://images.unsplash.com/photo-1610116303244-6239f893fb7f?q=80&w=1470&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1470&auto=format&fit=crop",
      primaryBtn: "Track Order",
      secondaryBtn: "Help Center",
      iconP: <Truck size={20} />,
      iconS: <Info size={20} />,
    },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#FAF9F6]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#FFF5E6] to-[#FFEBD6] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh] py-12">
                {/* Left Side Content */}
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="overflow-hidden mb-4">
                    <span
                      data-aos="fade-down"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-sm font-bold text-orange-600"
                    >
                      ✨ {slide.badge}
                    </span>
                  </div>

                  <h1
                    key={`title-${activeIndex}`}
                    className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-[#2D2D2D] animate-vibrate"
                  >
                    {slide.title}
                  </h1>

                  <p
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="text-lg text-gray-600 max-w-lg leading-relaxed mb-8"
                  >
                    {slide.desc}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex flex-wrap gap-5"
                  >
                    <button className="flex items-center gap-2 px-8 py-4 bg-[#F1641E] hover:bg-[#d9561a] text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
                      {slide.iconP} {slide.primaryBtn}
                    </button>
                    <button className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 border border-orange-100 text-[#2D2D2D] rounded-2xl font-bold transition-all shadow-sm">
                      {slide.iconS} {slide.secondaryBtn}
                    </button>
                  </div>
                </div>

                {/* Right Side Image with Angle Zoom-out Effect */}
                <div className="order-1 md:order-2 flex justify-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="relative group w-[300px] h-[380px] md:w-[450px] md:h-[550px] perspective-1000"
                  >
                    {/* Hover Effect Container */}
                    <div className="relative w-full h-full transition-all duration-700 ease-in-out transform group-hover:rotate-x-6 group-hover:rotate-y-12 group-hover:scale-95">
                      {/* Decorative Frame */}
                      <div className="absolute inset-0 border-2 border-orange-200 rounded-[40px] translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                      {/* Main Image */}
                      <div className="w-full h-full rounded-[40px] overflow-hidden border-4 border-white bg-white shadow-2xl relative">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                        />
                        {/* Soft Glow overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* 3D Perspective Setup */
        .perspective-1000 {
          perspective: 1000px;
        }

        /* Custom Rotate Classes (Tailwind doesn't have these by default) */
        .group:hover .group-hover\:rotate-x-6 {
          transform: rotateX(6deg) rotateY(-12deg) scale(0.95);
        }

        @keyframes vibrate {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-vibrate {
          animation: vibrate 0.4s linear;
        }

        .swiper-pagination-bullet-active {
          background: #f1641e !important;
          width: 30px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
