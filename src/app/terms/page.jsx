"use client";
import { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      id: "01",
      title: "Introduction",
      content:
        "ShopMart is a secure multi-vendor marketplace designed to connect quality sellers with buyers across Bangladesh.",
    },
    {
      id: "02",
      title: "Escrow Payment Security",
      content:
        "Your money is safe with us. We hold funds in a secure escrow account until you receive and confirm the product.",
    },
    {
      id: "03",
      title: "Seller Responsibility",
      content:
        "Sellers must provide genuine products, accurate descriptions, and hold valid trade licenses as per local laws.",
    },
    {
      id: "04",
      title: "Delivery Guidelines",
      content:
        "Delivery must be completed within 5-10 days as per Bangladesh Digital Commerce Operation Guidelines 2021.",
    },
    {
      id: "05",
      title: "Return & Refund",
      content:
        "Buyers can request returns for damaged or mismatched products through our integrated dispute system.",
    },
  ];

  const productImages = [
    // 1. Electronics (Watch)
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",

    // 2. Gadget (Headphone)
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",

    // 3. Shoe (Sneakers)
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",

    // 4. Camera (Gadget) - আগেরটির বদলে এটি কাজ করবে
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-100">
      <Head>
        <title>Terms of Service | ShopMart</title>
      </Head>

      {/* 1. Hero Section with Background Product Image */}
      <section className="relative py-32 overflow-hidden text-center flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 to-slate-900/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Terms of <span className="text-yellow-400">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed font-light">
            Everything you need to know about our marketplace rules, escrow
            safety, and your rights in{" "}
            <span className="font-semibold text-white">ShopMart</span>.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-yellow-400 mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </section>

      {/* 2. Terms Highlight Section (Text Left, 4 Images Right) */}
      <section className="py-24 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* LEFT SIDE: Content */}
            <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
              <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                Our Commitment
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Fair Marketplace for <br />
                <span className="text-indigo-600">Buyers & Sellers</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At **ShopMart**, transparency is our core value. Our terms
                ensure every transaction is protected by a secure **Escrow
                System**. We bridge the trust gap between local sellers and
                smart shoppers.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "No hidden fees",
                  "Verified sellers",
                  "24/7 Dispute System",
                  "Fast Payouts",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 font-medium bg-slate-50 p-3 rounded-lg border border-gray-100"
                  >
                    <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE: Animated Image Grid */}
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              {productImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: index % 2 === 0 ? -5 : 5,
                  }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white"
                >
                  <img
                    src={src}
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Terms List */}
      <main className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="grid gap-10">
          {sections.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="group bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <div className="flex flex-col md:flex-row items-start gap-8">
                <span className="text-5xl font-black text-indigo-50 opacity-20 group-hover:opacity-100 group-hover:text-indigo-100 transition-all">
                  {item.id}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Contact/Legal Footer */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-20 p-12 bg-indigo-950 rounded-[3rem] text-white shadow-3xl text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Have questions about our terms?
            </h3>
            <p className="text-indigo-200 mb-8 max-w-xl mx-auto italic">
              "We believe in honest commerce. If you're unclear about any
              policy, our legal team is ready to help."
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 px-10 rounded-full transition-all transform hover:shadow-lg">
              Contact Compliance Team
            </button>
          </div>
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/5 rounded-full -ml-24 -mb-24 blur-2xl" />
        </motion.div>
      </main>
    </div>
  );
};

export default TermsPage;
