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
import { FaSearch, FaStar, FaShoppingCart, FaTag, FaEye, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

// Cleaned & consistent music products data
const musicData = [
  {
    id: 1,
    name: 'Bowers & Wilkins Px8 Headphones',
    category: 'Headphones',
    price: 699,
    oldPrice: 799,
    rating: 4.9,
    reviews: 1200,
    image: 'https://thumbs.dreamstime.com/b/clean-studio-focused-headphone-display-dark-surface-matte-black-headset-unmarked-box-accessories-crisp-420950932.jpg',
  },
  {
    id: 2,
    name: 'Sennheiser Momentum 4 Wireless',
    category: 'Headphones',
    price: 379,
    oldPrice: 399,
    rating: 4.8,
    reviews: 950,
    image: 'https://thumbs.dreamstime.com/b/modern-black-sound-speakers-headphones-dark-background-58820191.jpg',
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    price: 399,
    oldPrice: 449,
    rating: 4.7,
    reviews: 1100,
    image: 'https://www.iwantek.com/cdn/shop/articles/breaking-the-bank-the-highest-priced-headphones-ranked-3041490_1024x1024.jpg?v=1761017570',
  },
  {
    id: 4,
    name: 'JBL Tour Pro 2 Earbuds',
    category: 'Earbuds',
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    reviews: 800,
    image: 'https://thumbs.dreamstime.com/b/premium-headphones-clean-desktop-soft-studio-lighting-modern-vibe-close-up-resting-desk-boxed-accessory-setup-421296957.jpg',
  },
  {
    id: 5,
    name: 'Bose QuietComfort Ultra',
    category: 'Headphones',
    price: 429,
    oldPrice: 479,
    rating: 4.9,
    reviews: 1300,
    image: 'https://imboldn.com/wp-content/uploads/2026/01/Meze-STRADA-Closed%E2%80%91Back-Luxury-With-Ebony-and-Magnesium-main.jpg',
  },
  {
    id: 6,
    name: 'Audio-Technica ATH-M50x',
    category: 'Headphones',
    price: 149,
    oldPrice: 169,
    rating: 4.7,
    reviews: 700,
    image: 'https://www.cnet.com/a/img/resize/0da9d626f87c8cc6ba7aa3ad8c6ad835a61ee79b/hub/2014/05/21/6f48ee2e-7bed-4816-aea9-9bb90429b67f/audio-technica-ath-m50x-product-photos07.jpg?auto=webp&fit=crop&height=675&width=1200',
  },
  {
    id: 7,
    name: 'Beats Studio Buds+',
    category: 'Earbuds',
    price: 169,
    oldPrice: 199,
    rating: 4.5,
    reviews: 600,
    image: 'https://thumbs.dreamstime.com/b/d-rendering-showcases-headphones-as-ultimate-audio-listening-device-d-rendering-showcases-headphones-as-ultimate-audio-293818442.jpg',
  },
  {
    id: 8,
    name: 'Sonos Era 100 Speaker',
    category: 'Speakers',
    price: 249,
    oldPrice: 279,
    rating: 4.8,
    reviews: 850,
    image: 'https://thumbs.dreamstime.com/b/experience-immersive-sound-modern-wireless-headphones-premium-audio-bliss-comfortable-listening-immerse-yourself-403842993.jpg',
  },
  {
    id: 9,
    name: 'Jabra Elite 8 Active',
    category: 'Earbuds',
    price: 199,
    oldPrice: 229,
    rating: 4.6,
    reviews: 550,
    image: 'https://images.squarespace-cdn.com/content/v1/621663e7e8f5476ba5df4287/1731857102993-T1SWC9M8C0CHE7JCFMSD/Best-earbuds-for+bass.jpg',
  },
  {
    id: 10,
    name: 'Marshall Acton III Speaker',
    category: 'Speakers',
    price: 279,
    oldPrice: 299,
    rating: 4.7,
    reviews: 650,
    image: 'https://thumbs.dreamstime.com/b/audio-equipment-mouse-speakers-wooden-table-pair-headphones-arranged-neatly-creating-harmonious-display-technology-314346121.jpg',
  },
  {
    id: 11,
    name: 'Audio-Technica AT-LP60X Turntable',
    category: 'Turntable',
    price: 149,
    oldPrice: 169,
    rating: 4.5,
    reviews: 400,
    image: 'https://www.rollingstone.com/wp-content/uploads/2021/04/rolling-stone-audio-awards.jpg?w=1547&h=960&crop=1',
  },
  {
    id: 12,
    name: 'Sennheiser HD 660S2',
    category: 'Headphones',
    price: 599,
    oldPrice: 649,
    rating: 4.9,
    reviews: 900,
    image: 'https://cdn.mos.cms.futurecdn.net/FhKsyhnfiY8tDm7JrcsLB4.jpg',
  },
  {
    id: 13,
    name: 'Anker Soundcore Motion+',
    category: 'Speakers',
    price: 99,
    oldPrice: 119,
    rating: 4.6,
    reviews: 750,
    image: 'https://thumbs.dreamstime.com/b/studio-shot-pair-modern-black-over-ear-headphones-against-vibrant-blue-backdrop-image-highlights-sleek-design-premium-402879585.jpg',
  },
  {
    id: 14,
    name: 'Shure AONIC 50 Gen 2',
    category: 'Headphones',
    price: 349,
    oldPrice: 399,
    rating: 4.7,
    reviews: 550,
    image: 'https://www.digitaltrends.com/tachyon/2025/09/PXL_20250930_150935394.jpg?resize=1200%2C720',
  },
  {
    id: 15,
    name: 'Ultimate Ears BOOM 4',
    category: 'Speakers',
    price: 129,
    oldPrice: 149,
    rating: 4.5,
    reviews: 450,
    image: 'https://thumbs.dreamstime.com/b/clean-studio-focused-headphone-display-dark-surface-matte-black-headset-unmarked-box-accessories-crisp-420950932.jpg',
  },
];

export default function MusicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const itemsPerPage = 8; // ← increased for better UX (was 4)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  const filteredProducts = musicData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => filterCategory === 'All' || product.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const categories = ['All', ...new Set(musicData.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 overflow-hidden">
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
            ShopMart Music
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mt-4 font-light">
            Discover Premium Audio Gear
          </p>
        </div>
      </section>

      {/* Search + Filter Bar */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-5 items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search headphones, earbuds, speakers..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-14 pr-6 py-4 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xl pointer-events-none" />
            </div>

            {/* Sort & Filter */}
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-end">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-6 py-4 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition min-w-[200px]"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="relative">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition flex items-center gap-2 shadow-md"
                >
                  <FaFilter /> Filter
                </button>

                {showFilter && (
                  <div className="absolute right-0 md:right-0 mt-3 w-64 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 p-5" data-aos="fade-down">
                    <h4 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">
                      Categories
                    </h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setFilterCategory(cat);
                            setShowFilter(false);
                            setCurrentPage(1);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition ${
                            filterCategory === cat
                              ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-medium'
                              : 'hover:bg-gray-100 dark:hover:bg-slate-700'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-slate-800 dark:text-white">
            Featured Audio Gear
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            className="!pb-14"
          >
            {musicData.slice(0, 6).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized // ← temporary – replace with next.config.js later
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.oldPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center text-sm">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{product.rating}</span>
                      <span className="text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-800 dark:text-white">
          All Audio Products
        </h2>

        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400 text-xl">
            No products found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="relative aspect-square">
                  {product.oldPrice && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized // ← temporary
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold">${product.price}</span>
                        {product.oldPrice && (
                          <span className="ml-3 text-sm text-gray-500 line-through">${product.oldPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center text-sm">
                        <FaStar className="text-yellow-400 mr-1" />
                        {product.rating}
                      </div>
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 shadow-md">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-5 py-3 rounded-lg font-medium transition-all ${
                  currentPage === page
                    ? 'bg-purple-600 text-white shadow-lg scale-110'
                    : 'bg-gray-200 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}