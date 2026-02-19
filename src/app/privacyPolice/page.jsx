"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Lock,
  Database,
  UserCheck,
  ChevronDown,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

// টেক্সট অ্যানিমেশনের জন্য ভেরিয়েন্ট
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const policyData = [
    {
      title: "Data Collection",
      icon: <Database className="w-6 h-6" />,
      color: "bg-blue-500",
      content:
        "We collect information you provide directly to us when you create an account, such as name, email, and phone number for secure marketplace access.",
    },
    {
      title: "Secure Payments",
      icon: <Lock className="w-6 h-6" />,
      color: "bg-purple-500",
      content:
        "ShopMart does not store your credit card details. All transactions are encrypted and handled through secure Escrow payment gateways in Bangladesh.",
    },
    {
      title: "Usage Policy",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-emerald-500",
      content:
        "Your data helps us improve order tracking, prevent fraud, and provide personalized product recommendations to enhance your shopping experience.",
    },
    {
      title: "User Rights",
      icon: <UserCheck className="w-6 h-6" />,
      color: "bg-orange-500",
      content:
        "Under the Cyber Security Act of Bangladesh, you have the right to request access to your data, correct errors, or delete your account at any time.",
    },
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-indigo-100 pb-20 overflow-hidden">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative py-32 bg-[#0a0a20] overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4" />
            Your privacy is our #1 priority
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Policy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            At ShopMart, we build trust through transparency. Learn how we
            handle your data with industry-leading security.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. STATS SECTION --- */}
      <section className="container mx-auto px-4 -mt-16 relative z-30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Encryption", val: "256-bit AES", icon: <Lock /> },
            { label: "Compliance", val: "BD Law 2026", icon: <CheckCircle2 /> },
            {
              label: "Data Safety",
              val: "100% Protected",
              icon: <ShieldCheck />,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex items-center gap-5"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-gray-900">{stat.val}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 3. ACCORDION SECTION --- */}
      <section className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">
              Detailed <span className="text-indigo-600">Protocols</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We ensure your information is handled with the highest level of
              care.
            </p>
            <div className="p-6 bg-yellow-50 rounded-3xl border border-yellow-100">
              <ShieldAlert className="w-8 h-8 text-yellow-600 mb-3" />
              <p className="text-sm text-yellow-800 font-medium leading-snug">
                Updated: Feb 2026. <br />
                Applies to all ShopMart users.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-4">
            {policyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-[2rem] overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-white shadow-2xl ring-1 ring-black/5"
                    : "bg-white/50 border border-gray-100"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-7 text-left"
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      animate={{ scale: activeIndex === index ? 1.1 : 1 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${item.color}`}
                    >
                      {item.icon}
                    </motion.div>
                    <span
                      className={`text-xl font-bold tracking-tight transition-colors ${activeIndex === index ? "text-gray-900" : "text-gray-600"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${activeIndex === index ? "text-indigo-600" : "text-gray-400"}`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className="px-7 pb-8 pt-0 ml-[4.2rem]">
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-slate-50 p-6 rounded-2xl text-gray-600 text-lg leading-relaxed border border-dashed border-gray-200"
                        >
                          {item.content}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. FOOTER CARD --- */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative p-12 bg-[#0a0a20] rounded-[3.5rem] overflow-hidden shadow-2xl text-center md:text-left border border-white/5"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Questions about your data?
              </h2>
              <p className="text-gray-400 text-lg">
                Our Data Protection Office is ready to help you.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:privacy@shopmart.com.bd"
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/20 transition-all text-center"
            >
              Contact Officer
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
