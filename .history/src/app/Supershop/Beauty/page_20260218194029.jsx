'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FaSearch, FaSortAmountDown, FaStar, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

// Beauty Products Data
const beautyData = [
  {
    id: 1,
    name: 'Luxury Foundation Cream',
    category: 'Skincare',
    price: 45,
    oldPrice: 55,
    rating: 4.7,
    reviews: 800,
    image: 'https://thumbs.dreamstime.com/b/cosmetics-beauty-products-make-up-sale-banner-glowing-neon-background-pink-sparkles-discount-off-promo-advertising-146396111.jpg',
  },
  {
    id: 2,
    name: 'Premium Perfume Spray',
    category: 'Perfume',
    price: 89,
    oldPrice: 109,
    rating: 4.8,
    reviews: 950,
    image: 'https://thumbs.dreamstime.com/b/luxuriant-product-shot-luxury-perfume-bottle-close-up-view-high-quality-cosmetic-ai-generated-luxuriant-product-shot-luxury-374078583.jpg',
  },
  // ... তোমার বাকি ১৩টা beautyData এখানে পেস্ট করো (যেটা আগে দিয়েছিলাম)
  // শেষ পর্যন্ত পুরো অ্যারে রাখো
];

export default function BeautyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      easing: 'ease-in-out-quad',
    });
  }, []);

  const filteredProducts = beautyData
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-pink-900 to-purple-900 dark:from-slate-950 dark:to-purple-950 overflow-hidden" data-aos="fade-in">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">ShopMart Beauty</h1>
          <p className="text-xl text-white/90 mt-4">Discover Premium Beauty Essentials</p>
        </div>
      </section>

      {/* Search Bar and Filters */}
      <section className="px-4 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Beauty Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-pink-600 dark:focus:border-pink-400 transition-all"
          />
          <FaSearch className="absolute right-4 top-5 text-slate-500 dark:text-gray-300" />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-pink-600 dark:focus:border-pink-400"
        >
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </section>

      {/* Featured Carousel */}
      <section className="px-4 py-16 bg-slate-50 dark:bg-slate-900">
        <h2 className="text-4xl font-black text-center mb-12">Featured Beauty Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="max-w-6xl mx-auto"
        >
          {beautyData.slice(0, 5).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all">
                <Image src={product.image} alt={product.name} width={400} height={300} className="rounded-xl" />
                <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                <p className="text-lg">${product.price} <span className="line-through text-gray-500">${product.oldPrice}</span></p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-400" /> {product.rating} ({product.reviews} reviews)
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* All Products Grid */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12">All Beauty Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="100">
              <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-xl mb-4" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-md">${product.price} <span className="line-through text-gray-500">${product.oldPrice}</span></p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400" /> {product.rating} ({product.reviews})
              </div>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-pink-700">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-xl ${currentPage === index + 1 ? 'bg-pink-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}