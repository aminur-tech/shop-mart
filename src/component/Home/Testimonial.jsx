"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Zap } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-gray-900">EXPLORE THE MART</h2>
            <p className="text-gray-500 mt-2 font-medium">Over 10,000+ products added this week.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
            View All Collections <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {/* Main Hero Card - Spans 2 cols, 2 rows */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] bg-zinc-900 overflow-hidden group p-10"
          >
            <div className="relative z-10 h-full flex flex-col justify-end">
              <span className="bg-blue-600 w-fit px-4 py-1 rounded-full text-xs font-bold text-white mb-4">TRENDING NOW</span>
              <h3 className="text-white text-5xl font-extrabold leading-none tracking-tighter">The Future <br/> of Audio.</h3>
              <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-black w-fit hover:bg-blue-600 hover:text-white transition-colors">SHOP DEALS</button>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-[100px]" />
          </motion.div>

          {/* Featured Category - Spans 2 cols, 1 row */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 bg-indigo-600 rounded-[2.5rem] p-8 relative overflow-hidden flex items-center justify-between"
          >
            <div className="z-10">
              <h3 className="text-white text-2xl font-bold italic">Gaming Rig Setup</h3>
              <p className="text-indigo-200 mt-1">450+ Items Available</p>
            </div>
            <Zap className="text-white/20 absolute -right-4 -bottom-4 rotate-12" size={120} />
          </motion.div>

          {/* Small Data Cards */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm"
          >
            <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600">
              <ShoppingBag size={24} />
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">8.4k</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Active Sales</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-100 rounded-[2rem] p-6 flex flex-col justify-center items-center text-center group cursor-pointer"
          >
            <p className="text-gray-400 font-bold group-hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4">Discover More Categories</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}