"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="text-center z-10 px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Shop<span className="text-blue-400">Mart</span>
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto opacity-80">
            The Future of Secure Two-Sided Marketplaces. Built for Trust.
            Engineered for Speed.
          </p>
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* --- Vision Section --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6 border-l-8 border-blue-600 pl-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ShopMart is not just an e-commerce site; it's a modern ecosystem.
              We solve the core issues of online shopping: **Fraud, Delivery
              Uncertainty, and Payment Risks.**
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <span className="block text-2xl font-bold text-blue-600">
                  Fast
                </span>
                <span className="text-sm text-gray-500">Next.js Powered</span>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <span className="block text-2xl font-bold text-purple-600">
                  Safe
                </span>
                <span className="text-sm text-gray-500">Escrow System</span>
              </div>
            </div>
          </div>

          {/* --- ইমেজ সেকশন এখানে ঠিক করা হয়েছে --- */}
          <div className="relative h-[400px] w-full" data-aos="zoom-in">
            <Image
              src="/images/about-image.jpg" // সরাসরি নাম দিন, public লিখতে হবে না
              alt="ShopMart Marketplace"
              fill
              className="rounded-3xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Why Choose ShopMart?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3">Escrow Payments</h3>
              <p className="text-gray-500 text-sm">
                Money is held safely until delivery. Zero risk for both parties.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-500 text-sm">
                Built with Next.js for instant page loads and seamless
                experience.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                ⚖️
              </div>
              <h3 className="text-xl font-bold mb-3">Dispute System</h3>
              <p className="text-gray-500 text-sm">
                Fair resolution for every problem. Our team ensures honesty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="py-20 text-center" data-aos="zoom-out">
        <h2 className="text-4xl font-bold mb-6 text-slate-800">
          Ready to start your journey?
        </h2>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
          Get Started Now
        </button>
      </section>

      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ShopMart Marketplace.
      </footer>
    </div>
  );
};

export default AboutPage;
