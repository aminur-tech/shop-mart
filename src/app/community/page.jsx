"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, MessageSquare, Award, Heart, Plus } from "lucide-react";

const Community = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // স্ক্রল আপ-ডাউন করলে বারবার অ্যানিমেশন হবে
      mirror: true,
    });
  }, []);

  const members = [
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100",
      name: "Rahat",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      name: "Siam",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      name: "Nila",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
      name: "Arif",
    },
  ];

  // উপরের প্রোডাক্ট ইমেজগুলো
  const floatingProducts = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200", // Watch
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200", // Headphone
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200", // Shoe
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* 🧊 1. Floating Product Images (Top Decoration) */}
      <div className="absolute top-0 left-0 w-full flex justify-center gap-10 opacity-10 pointer-events-none -translate-y-12">
        {floatingProducts.map((src, idx) => (
          <div
            key={idx}
            data-aos="fade-down"
            data-aos-delay={idx * 200}
            className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-200 shadow-2xl"
          >
            <img
              src={src}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-bold tracking-wide uppercase shadow-sm">
              <Users className="w-4 h-4" />
              Join the Movement
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
              More than just a store, it's a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Family.
              </span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              ৫০০,০০০+ মেম্বারের সাথে যুক্ত হোন। সেরা ডিল নিয়ে আলোচনা করুন,
              রিভিউ শেয়ার করুন এবং জিতে নিন আকর্ষণীয় রিওয়ার্ড।
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all"
              >
                Join Community
              </motion.button>

              <div className="flex -space-x-4">
                {members.map((m, i) => (
                  <motion.img
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    src={m.img}
                    alt={m.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-lg hover:z-20 hover:scale-110 transition-transform"
                  />
                ))}
                <div className="w-14 h-14 rounded-full bg-slate-900 border-4 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  +10k
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: BENTO CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Live Chat */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              className="group p-8 bg-slate-900 rounded-[3rem] text-white space-y-4 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <MessageSquare className="text-indigo-400 group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold italic tracking-tight">
                Live Chat
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Share tips with fellow shoppers and get instant answers.
              </p>
            </div>

            {/* Card 2: Rewards */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="300"
              className="group p-8 bg-indigo-600 rounded-[3rem] text-white space-y-4 md:mt-12 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                <Award className="text-yellow-400 group-hover:text-slate-900" />
              </div>
              <h4 className="text-2xl font-bold italic tracking-tight">
                Points
              </h4>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Earn points for every review and redeem them for discounts.
              </p>
            </div>

            {/* Card 3: Events */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="group p-8 bg-rose-50 rounded-[3rem] border border-rose-100 space-y-4 hover:bg-rose-100 transition-all duration-500 shadow-sm"
            >
              <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <Heart className="text-white w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 italic tracking-tight">
                Charity
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every purchase supports our local community projects.
              </p>
            </div>

            {/* Card 4: Pre-launch */}
            <div
              data-aos="zoom-in-up"
              data-aos-delay="400"
              className="group p-8 bg-amber-50 rounded-[3rem] border border-amber-100 space-y-4 md:mt-12 hover:bg-amber-100 transition-all duration-500 shadow-sm"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Plus size={30} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 italic tracking-tight">
                Exclusive
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Get notified about new drops before the general public.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Community;
