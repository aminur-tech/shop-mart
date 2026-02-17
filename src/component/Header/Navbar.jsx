"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, FileText, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="relative w-full border-b border-gray-200 bg-[#F5F3EE] z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-black shrink-0"
          >
            <span className="font-extrabold">Shop</span>{" "}
            <span className="font-light">Mart</span>
          </Link>

          {/* Nav Links - DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
            {/* Shop Mega Menu */}
            <div className="group static">
              <Link
                href="/shop"
                className="hover:text-black transition flex items-center gap-1 py-7"
              >
                Shop
                
              </Link>
              <div className="absolute left-0 right-0 top-full bg-[#F5F3EE] border-t border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 p-10">
                  <div className="space-y-4 text-lg font-medium">
                    {[
                      "Promotions",
                      "Coffee",
                      "Smoothies",
                      "Deli",
                      "Takeout",
                      "Bags",
                    ].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block hover:text-black text-gray-700"
                      >
                        {item}
                      </Link>
                    ))}
                    <div className="pt-6 border-t border-gray-300">
                      <Link
                        href="/shop"
                        className="text-2xl font-semibold hover:text-black"
                      >
                        Shop all products
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Custom Packaging
                      </h3>
                      <p className="text-sm text-gray-600">
                        Tailored solutions for your business brand.
                      </p>
                    </div>
                    <button className="text-sm font-medium underline text-left">
                      Explore
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-900 text-white rounded-2xl p-6">
                      <h3 className="font-semibold mb-2">Loyalty Program</h3>
                      <p className="text-xs mb-4">
                        Earn 5% back on every order.
                      </p>
                      <button className="underline text-sm">Join Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Packaging Solutions */}
            <div className="relative group">
              <Link
                href="/packaging-solutions"
                className="hover:text-black transition"
              >
                Packaging Solutions
              </Link>

              {/* Mega Menu */}
              <div className="absolute left-12/9 -translate-x-1/2 top-full mt-6 w-screen bg-[#F5F3EE] border-t border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-4 gap-8">
                  {/* Card 1 */}
                  <div className="relative rounded-2xl overflow-hidden group/card cursor-pointer">
                    {/* <img
                      src="/food-service.jpg"
                      alt="Food Service"
                      className="w-full h-72 object-cover group-hover/card:scale-105 transition duration-500"
                    /> */}
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold">Food Service</h3>
                      <p className="text-sm mt-2 underline">Explore</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="relative rounded-2xl overflow-hidden group/card cursor-pointer">
                    {/* <img
                      src="/food-processing.jpg"
                      alt="Food Processing"
                      className="w-full h-72 object-cover group-hover/card:scale-105 transition duration-500"
                    /> */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold">Food Processing</h3>
                      <p className="text-sm mt-2 underline">Explore</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="relative rounded-2xl overflow-hidden group/card cursor-pointer">
                    {/* <img
                      src="/agriculture.jpg"
                      alt="Agriculture"
                      className="w-full h-72 object-cover group-hover/card:scale-105 transition duration-500"
                    /> */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold">Agriculture</h3>
                      <p className="text-sm mt-2 underline">Explore</p>
                    </div>
                  </div>

                  {/* Card 4 - Light Info Card */}
                  <div className="bg-[#EDE9DF] rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Looking for something specific?
                      </h3>
                      <p className="text-sm text-gray-600">
                        We can customise your packaging to fit your needs
                      </p>
                    </div>
                    <p className="underline mt-6 cursor-pointer">Explore</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/company" className="hover:text-black transition py-7">
              Category
            </Link>
            {/* Resources */}
            <div className="relative group">
              <Link href="/resources" className="hover:text-black transition">
                Resources
              </Link>

              {/* Dropdown */}
              <div className="fixed left-0 right-0 w-screen bg-[#F5F3EE] border-t border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-2 gap-16 items-center">
                  {/* LEFT SIDE - Links */}
                  <div className="space-y-6 text-4xl font-light text-gray-800">
                    <Link
                      href="#"
                      className="block hover:text-black transition"
                    >
                      Waitlist
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-black transition"
                    >
                      Yucca Rewards & Direct
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-black transition"
                    >
                      Case Studies & Blogs
                    </Link>
                    <Link
                      href="#"
                      className="block hover:text-black transition"
                    >
                      FAQs
                    </Link>
                  </div>

                  {/* RIGHT SIDE - Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* <img
                      src="/resources-image.jpg"
                      alt="Resources"
                      className="w-full h-[350px] object-cover"
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className="hover:text-black transition py-7">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="/credit"
              className="hidden sm:flex p-2.5 text-gray-700 hover:bg-black/5 rounded-xl transition"
            >
              <FileText size={20} />
            </Link>

            <button className="p-2.5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition">
              <ShoppingCart size={20} className="text-gray-700" />
            </button>

            {/* User Dropdown */}
            <div className="relative group hidden md:block">
              <button className="flex items-center gap-2 p-1 rounded-full border border-gray-300 bg-white overflow-hidden">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                  JD
                </div>
              </button>
              <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 border-b border-gray-100">
                  <p className="text-sm font-bold">John Doe</p>
                  <p className="text-xs text-gray-500">john@email.com</p>
                </div>
                <div className="p-2">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-lg"
                  >
                    Profile
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#F5F3EE] text-black shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">ShopMart</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-2xl font-semibold">
            {["Shop", "Packaging", "Category", "Resources", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:translate-x-2 transition-transform"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-sm text-gray-600">john@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
