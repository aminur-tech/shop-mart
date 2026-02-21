"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, FileText, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const pathname = usePathname();

  // Active states
  const isShopActive = pathname === "/" || pathname.startsWith("/shop");
  const isPackagingActive =
    pathname === "/packaging-solutions" || pathname.startsWith("/packaging");
  const isCategoryActive =
    pathname === "/company" || pathname.startsWith("/company");
  const isResourcesActive = pathname.startsWith("/resources");
  const isContactActive = pathname.startsWith("/contact");

  // ── Data ───────────────────────────────────────────────────────────────

  const resourceLinks = [
    { label: "Waitlist", href: "/waitlist" },
    { label: "Yucca Rewards & Direct", href: "/rewards" },
    { label: "Case Studies & Blogs", href: "/blogs" },
    { label: "FAQs", href: "/faqs" },
  ];

  // For demo – replace with real auth later
  const isLoggedIn = true;
  const user = { name: "Shuvo", email: "shuvo@example.com", initials: "S" };

  return (
    <header className="relative w-full border-b border-gray-200 bg-[#F5F3EE] z-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group relative inline-block text-2xl font-bold tracking-tight"
          >
            <span className="relative z-10 flex items-center gap-1 transition-all duration-500 group-hover:tracking-wide group-hover:scale-105">
              <span className="font-extrabold bg-gradient-to-r from-amber-800 to-amber-500 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-amber-400">
                Shop
              </span>
              <span className="font-light text-amber-800/80 group-hover:text-amber-900">
                Mart
              </span>
            </span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-amber-700 to-amber-400 transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium text-gray-800">
            {/* Shop Mega Menu */}
            <div className="group relative">
              <Link
                href="/"
                className={`relative py-7 transition-colors ${isShopActive ? "text-amber-800" : "text-gray-700 hover:text-amber-800"}`}
              >
                Shop
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-amber-800 transition-all duration-300 ${isShopActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>

              <div className="absolute left-5 -translate-x-3/9 top-full w-screen bg-white border-t rounded-3xl border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 px-10 py-12">
                  {/* Categories list */}
                  <div className="space-y-4 text-lg font-medium">
                    {/* Home & Living */}
                    <Link
                      href="/categories/home-living"
                      className={`block transition-all ${
                        pathname.startsWith("/categories/home-living")
                          ? "text-amber-800 font-semibold"
                          : "text-gray-700 hover:text-amber-800 hover:translate-x-1.5"
                      }`}
                    >
                      Home & Living
                    </Link>

                    {/* Electronics */}
                    <Link
                      href="/electronics"
                      className={`block transition-all ${
                        pathname.startsWith("/electronics")
                          ? "text-amber-800 font-semibold"
                          : "text-gray-700 hover:text-amber-800 hover:translate-x-1.5"
                      }`}
                    >
                      Electronics
                    </Link>

                    {/* Fashion */}
                    <Link
                      href="/categories/fashion"
                      className={`block transition-all ${
                        pathname.startsWith("/fashion")
                          ? "text-amber-800 font-semibold"
                          : "text-gray-700 hover:text-amber-800 hover:translate-x-1.5"
                      }`}
                    >
                      Fashion
                    </Link>

                    {/* Gadgets */}
                    <Link
                      href="/gadgets"
                      className={`block transition-all ${
                        pathname.startsWith("/gadgets")
                          ? "text-amber-800 font-semibold"
                          : "text-gray-700 hover:text-amber-800 hover:translate-x-1.5"
                      }`}
                    >
                      Gadgets
                    </Link>

                    {/* Beauty */}
                    <Link
                      href="/beauty"
                      className={`block transition-all ${
                        pathname.startsWith("/beauty")
                          ? "text-amber-800 font-semibold"
                          : "text-gray-700 hover:text-amber-800 hover:translate-x-1.5"
                      }`}
                    >
                      Beauty
                    </Link>

                    {/* Music & Instruments */}
                    <Link
                      href="/music"
                      className={`block transition-all ${
                        pathname.startsWith("/music")
                          ? "text-amber-800 font-semibold"
                          : "text-gray-700 hover:text-amber-800 hover:translate-x-1.5"
                      }`}
                    >
                      Music & Instruments
                    </Link>

                    {/* View All Products */}
                    <Link
                      href="/product" 
                      className={`block transition-all font-semibold ${
                        pathname.startsWith("/products") ||
                        pathname === "/products"
                          ? "text-amber-900 underline underline-offset-4"
                          : "text-amber-700 hover:text-amber-900 hover:underline hover:underline-offset-4"
                      }`}
                    >
                      View All Products →
                    </Link>
                  </div>
                  {/* Promo cards */}
                  <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Custom Packaging
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Tailored solutions for your brand.
                    </p>
                    <Link
                      href="/categories/explore"
                      className="text-sm font-medium text-amber-800 underline hover:text-amber-600 transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>

                  <div className="bg-amber-800 text-white rounded-2xl p-7 hover:bg-amber-700 transition">
                    <h3 className="font-semibold mb-2 text-lg">
                      Loyalty Program
                    </h3>
                    <p className="text-sm opacity-90 mb-5">
                      Earn 5% back on every order
                    </p>
                    <span className="text-sm font-medium underline hover:opacity-80">
                      Join Now →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging Solutions */}
            <div className="group relative">
              <Link
                href="/packaging-solutions"
                className={`relative py-7 transition-colors ${isPackagingActive ? "text-amber-800" : "text-gray-700 hover:text-amber-800"}`}
              >
                Packaging Solutions
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-amber-800 transition-all ${isPackagingActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>

              <div className="absolute -left-3/9 -translate-x-3/9 top-full w-screen bg-white mt-6 border-t rounded-3xl border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-8 px-12 py-10">
                  {["Food Service", "Food Processing", "Agriculture"].map(
                    (title, i) => (
                      <div
                        key={title}
                        className="relative rounded-2xl overflow-hidden group/card cursor-pointer"
                      >
                        <div className="relative h-72 w-full">
                          <Image
                            src={
                              i === 0
                                ? "/images/about-image.jpg"
                                : i === 1
                                  ? "/images/navbarimg/vf7ouGudSG.jpeg"
                                  : "/images/navbarimg/agri.jpg"
                            }
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            quality={82}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/35" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-xl font-semibold">{title}</h3>
                          <p className="text-sm mt-1.5 underline">Explore</p>
                        </div>
                      </div>
                    ),
                  )}

                  <div className="bg-[#EDE9DF] rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Need something specific?
                      </h3>
                      <p className="text-sm text-gray-700">
                        We can customize packaging for your exact needs.
                      </p>
                    </div>
                    <p className="mt-6 text-sm underline cursor-pointer hover:text-amber-800">
                      Get in touch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category */}
            <Link
              href="/company"
              className={`relative py-7 transition-colors ${isCategoryActive ? "text-amber-800" : "text-gray-700 hover:text-amber-800"}`}
            >
              Category
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-amber-800 transition-all ${isCategoryActive ? "w-full" : "w-0 hover:w-full"}`}
              />
            </Link>

            {/* Resources */}
            <div className="group relative">
              <Link
                href="/resources"
                className={`relative py-7 transition-colors ${isResourcesActive ? "text-amber-800" : "text-gray-700 hover:text-amber-800"}`}
              >
                Resources
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-amber-800 transition-all ${isResourcesActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>

              <div className="absolute left-10 mt-5  -translate-x-4/7 top-full w-screen bg-white border-t rounded-3xl border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 px-12 py-14">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-8">
                      Explore Resources
                    </p>
                    <ul className="space-y-6">
                      {resourceLinks.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-2xl font-light text-gray-700 hover:text-black transition-all inline-flex items-center gap-3 group"
                          >
                            {item.label}
                            <span className="w-0 h-0.5 bg-black transition-all group-hover:w-12" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="/images/imgi_206.jpg"
                      alt="Resources showcase"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`relative py-7 transition-colors ${isContactActive ? "text-amber-800" : "text-gray-700 hover:text-amber-800"}`}
            >
              Contact
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-amber-800 transition-all ${isContactActive ? "w-full" : "w-0 hover:w-full"}`}
              />
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/credit"
              className="hidden sm:block p-2.5 text-gray-700 hover:bg-black/5 rounded-xl transition"
            >
              <FileText size={22} />
            </Link>

            <button className="p-2.5 rounded-xl border border-gray-200 bg-white hover:shadow transition">
              <ShoppingCart size={22} className="text-gray-700" />
            </button>

            {/* User avatar dropdown – hover version */}
            {isLoggedIn ? (
              <div className="relative group hidden md:block">
                <button className="flex items-center gap-2.5 p-1.5 rounded-full border border-gray-300 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition">
                  <div className="w-9 h-9 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-inner">
                    {user.initials}
                  </div>
                </button>

                <div className="absolute right-0 top-full mt-3 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/60">
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{user.email}</p>
                  </div>
                  <div className="py-2">
                    <Link
                      href="/profile"
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                    >
                      Settings
                    </Link>
                    <hr className="my-2 border-gray-100 mx-4" />
                    <button className="w-full text-left px-6 py-3 text-sm text-red-600 hover:bg-red-50 transition">
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-amber-800"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-2 text-sm font-medium bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-800"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay + sidebar */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity md:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-[#F5F3EE] z-50 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold tracking-tight text-amber-900">
              ShopMart
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-xl font-medium text-gray-800">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link
              href="/packaging-solutions"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Packaging Solutions
            </Link>
            <Link href="/company" onClick={() => setIsMobileMenuOpen(false)}>
              Category
            </Link>
            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)}>
              Resources
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          <div className="mt-auto pt-8 border-t border-gray-200">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold">
                  {user.initials}
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  className="text-center py-3 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="text-center py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
