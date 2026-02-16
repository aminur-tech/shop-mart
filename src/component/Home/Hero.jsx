"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  // We can use in future API or Database
  const sliderData = [
    {
      id: 1,
      title: "Handmade Treasures from Bangladesh",
      subtitle: "Discover unique crafts made with love.",
      image:
        "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1470&auto=format&fit=crop", // example image
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Secure Two-Sided Marketplace",
      subtitle: "Buy and sell with confidence using Escrow.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",
      buttonText: "Join as Seller",
    },
    {
      id: 3,
      title: "Support Local Entrepreneurs",
      subtitle: "The best place for small & medium businesses.",
      image:
        "https://images.unsplash.com/photo-1511317551229-c992849a6552?q=80&w=1470&auto=format&fit=crop",
      buttonText: "Explore More",
    },
  ];

  return (
    <section className="w-full h-[500px] md:h-[600px] bg-[#f8ebe6] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full w-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
              }}
            >
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-[#F1641E] hover:text-white transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
