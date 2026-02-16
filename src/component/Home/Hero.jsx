"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // 4 image & dynamic slider
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
    },
    {
      id: 2,
      badge: "Secure Escrow",
      title: "Safe & Trustworthy Shopping",
      desc: "Our secure escrow system ensures your money is protected until you receive and verify your product.",
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop",
      primaryBtn: "Learn More",
      secondaryBtn: "Join as Seller",
    },
    {
      id: 3,
      badge: "Premium Collection",
      title: "Elevate Your Lifestyle",
      desc: "From traditional wear to modern home decor, find everything you need in one secure marketplace.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
      primaryBtn: "Shop Collection",
      secondaryBtn: "New Arrivals",
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
    },
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0a0a0a] text-white flex items-center overflow-hidden py-16 md:py-0">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={"fade"} // Smooth transition fade effect
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">
                {/* Left Side: Text Content */}
                <div className="order-2 md:order-1 space-y-6">
                  <div data-aos="fade-down">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-sm font-semibold text-indigo-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </span>
                      {slide.badge}
                    </span>
                  </div>

                  <h1
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="text-5xl md:text-7xl font-extrabold leading-[1.1] bg-gradient-to-r from-white via-gray-100 to-gray-500 bg-clip-text text-transparent"
                  >
                    {slide.title}
                  </h1>

                  <p
                    data-aos="fade-right"
                    data-aos-delay="400"
                    className="text-lg text-gray-400 max-w-lg leading-relaxed"
                  >
                    {slide.desc}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="flex flex-wrap gap-5 pt-4"
                  >
                    <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-500/25">
                      {slide.primaryBtn}
                    </button>
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all backdrop-blur-sm">
                      {slide.secondaryBtn}
                    </button>
                  </div>
                </div>

                {/* Right Side: Image with Advanced Hover Effect */}
                <div className="order-1 md:order-2 flex justify-center">
                  <div
                    data-aos="zoom-in-left"
                    data-aos-duration="1200"
                    className="relative group w-[280px] h-[350px] md:w-[420px] md:h-[520px]"
                  >
                    {/* Background Glow on Hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[45px] blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                    {/* Dynamic Border Frame */}
                    <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-[40px] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 -z-10"></div>

                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #6366f1 !important;
          width: 30px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .hero-swiper {
          padding-bottom: 60px !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
