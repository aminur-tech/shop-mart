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

// JSON Data for 15 Gadgets Products (inspired from high-res images)
const gadgetsData = [
  {
    id: 1,
    name: 'Apple AirPods Pro 2',
    category: 'Earbuds',
    price: 249,
    oldPrice: 299,
    rating: 4.8,
    reviews: 1200,
    image: 'https://thumbs.dreamstime.com/b/fashionable-elegant-watch-classic-design-high-end-luxury-brand-watch-couples-blue-style-starry-dreamy-background-black-431326800.jpg', // Image 0
  },
  {
    id: 2,
    name: 'Samsung Galaxy Watch Ultra',
    category: 'Smartwatch',
    price: 799,
    oldPrice: 899,
    rating: 4.7,
    reviews: 850,
    image: 'https://thumbs.dreamstime.com/b/fashionable-elegant-watch-classic-design-high-end-luxury-brand-watch-couples-blue-style-starry-dreamy-background-black-431326849.jpg', // Image 1
  },
  {
    id: 3,
    name: 'Anker PowerCore Slim 10000',
    category: 'Portable Charger',
    price: 29,
    oldPrice: 39,
    rating: 4.6,
    reviews: 1500,
    image: 'https://thumbs.dreamstime.com/b/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.jpg', // Image 2
  },
  {
    id: 4,
    name: 'Sony WF-1000XM5 Earbuds',
    category: 'Earbuds',
    price: 299,
    oldPrice: 349,
    rating: 4.9,
    reviews: 950,
    image: 'https://imageio.forbes.com/specials-images/imageserve/68669e428abd4d4646f2f4ed/The-viaim-RecDot-AI-earbuds-against-a-black-background-/0x0.jpg?format=jpg&height=2500&width=3750', // Image 3
  },
  {
    id: 5,
    name: 'Fitbit Charge 6',
    category: 'Fitness Tracker',
    price: 179,
    oldPrice: 199,
    rating: 4.5,
    reviews: 600,
    image: 'https://www.cnet.com/a/img/resize/a9f20833da0ab294480c77ba02ed9c5783425da2/hub/2025/11/04/f45467ec-39f5-47a3-938d-67290cb13616/walmart-dotd-nov-4.jpg?auto=webp&fit=crop&height=675&width=1200', // Image 4
  },
  {
    id: 6,
    name: 'Garmin Vivosmart 5',
    category: 'Smartwatch',
    price: 149,
    oldPrice: 169,
    rating: 4.4,
    reviews: 400,
    image: 'https://thumbs.dreamstime.com/b/women-set-accessories-tablet-pc-smart-watch-passport-camera-key-note-pad-sunglasses-headphones-cosmetics-makeup-travel-109550542.jpg', // Image 5
  },
  {
    id: 7,
    name: 'Belkin BoostCharge Pro',
    category: 'Wireless Charger',
    price: 59,
    oldPrice: 69,
    rating: 4.7,
    reviews: 700,
    image: 'https://thumbs.dreamstime.com/b/collection-smart-pet-tech-gadgets-arranged-modern-indoor-setting-devices-include-ai-feeders-gps-trackers-429636036.jpg', // Image 6
  },
  {
    id: 8,
    name: 'Anker 737 Power Bank',
    category: 'Portable Charger',
    price: 99,
    oldPrice: 119,
    rating: 4.8,
    reviews: 1100,
    image: 'https://hips.hearstapps.com/hmg-prod/images/61xlecxv22l-ac-sl1500-693c5e93c28ba.jpg?crop=1.00xw:0.401xh;0,0.260xh&resize=1200:*', // Image 7
  },
  {
    id: 9,
    name: 'Bose QuietComfort Earbuds II',
    category: 'Earbuds',
    price: 279,
    oldPrice: 299,
    rating: 4.9,
    reviews: 1300,
    image: 'https://thumbs.dreamstime.com/b/captivating-image-showcases-sleek-smartphone-glowing-neon-brain-design-symbolizing-advanced-artificial-intelligence-403525493.jpg', // Image 8
  },
  {
    id: 10,
    name: 'Apple Watch Series 10',
    category: 'Smartwatch',
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    reviews: 900,
    image: 'https://www.cnet.com/a/img/resize/00e7ae7973da5fae17f737cd9f96f940ac011433/hub/2026/02/02/982b5f19-558f-4077-b596-440e95e06769/walmart-dotd-feb-2.jpg?auto=webp&fit=crop&height=675&width=1200', // Image 9
  },
  {
    id: 11,
    name: 'Twelve South HiRise 3 Deluxe',
    category: 'Wireless Charger',
    price: 149,
    oldPrice: 169,
    rating: 4.6,
    reviews: 500,
    image: 'https://www.cnet.com/a/img/resize/9a05e0fd9b31890f00b3c5a8a29aa251bf0088ff/hub/2024/11/26/23642402-e263-4d51-8aa7-d5e60c4599bc/hirise-3-deluxe-1.jpg?auto=webp&fit=crop&height=675&width=1200', // Image 10
  },
  {
    id: 12,
    name: 'Jabra Elite 10',
    category: 'Earbuds',
    price: 249,
    oldPrice: 279,
    rating: 4.7,
    reviews: 800,
    image: 'https://thumbs.dreamstime.com/b/digital-gadgets-collection-isolated-white-background-image-features-including-laptop-smartphone-smartwatch-all-437120050.jpg', // Image 11
  },
  {
    id: 13,
    name: 'Oura Ring Gen3',
    category: 'Smart Ring',
    price: 299,
    oldPrice: 349,
    rating: 4.5,
    reviews: 650,
    image: 'https://thumbs.dreamstime.com/b/fashionable-elegant-watch-classic-design-high-end-luxury-brand-watch-couples-blue-style-starry-dreamy-background-black-431326800.jpg', // Duplicate for variety
  },
  {
    id: 14,
    name: 'Anker Soundcore Liberty 4',
    category: 'Earbuds',
    price: 99,
    oldPrice: 129,
    rating: 4.6,
    reviews: 1000,
    image: 'https://thumbs.dreamstime.com/b/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.jpg', // Duplicate
  },
  {
    id: 15,
    name: 'Samsung Galaxy Buds3 Pro',
    category: 'Earbuds',
    price: 229,
    oldPrice: 259,
    rating: 4.8,
    reviews: 750,
    image: 'https://imageio.forbes.com/specials-images/imageserve/68669e428abd4d4646f2f4ed/The-viaim-RecDot-AI-earbuds-against-a-black-background-/0x0.jpg?format=jpg&height=2500&width=3750', // Duplicate
  },
];

export default function GadgetsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // For pagination

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      easing: 'ease-in-out-quad',
    });
  }, []);

  // Filter and sort products
  const filteredProducts = gadgetsData
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
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 dark:from-slate-950 dark:to-purple-950 overflow-hidden" data-aos="fade-in">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">ShopMart Gadgets</h1>
          <p className="text-xl text-white/90 mt-4">Discover Premium Tech Essentials</p>
        </div>
      </section>

      {/* Search Bar and Filters */}
      <section className="px-4 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Gadgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-blue-600 dark:focus:border-blue-400 transition-all"
          />
          <FaSearch className="absolute right-4 top-5 text-slate-500 dark:text-gray-300" />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-blue-600 dark:focus:border-blue-400"
        >
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </section>

      {/* Featured Carousel */}
      <section className="px-4 py-16 bg-slate-50 dark:bg-slate-900">
        <h2 className="text-4xl font-black text-center mb-12">Featured Gadgets</h2>
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
          {gadgetsData.slice(0, 5).map((product) => (
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
        <h2 className="text-4xl font-black text-center mb-12">All Gadgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="100">
              <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-xl mb-4" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-md">${product.price} <span className="line-through text-gray-500">${product.oldPrice}</span></p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400" /> {product.rating} ({product.reviews})
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700">
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
              className={`px-4 py-2 rounded-xl ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}