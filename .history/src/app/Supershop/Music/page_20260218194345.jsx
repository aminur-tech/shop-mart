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
import { FaSearch, FaStar, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

// Full 15 Music Products JSON Data
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
    image: 'https://thegadgetflow.com/wp-content/uploads/2022/12/Bowers-Wilkins-Px8-007-Edition-Wireless-Headphones-01-1024x576.jpeg',
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
  const itemsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      easing: 'ease-in-out-quad',
    });
  }, []);

  const filteredProducts = musicData
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
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 dark:from-slate-950 dark:to-indigo-950 overflow-hidden" data-aos="fade-in">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">ShopMart Music</h1>
          <p className="text-xl text-white/90 mt-4">Discover Premium Audio Gear</p>
        </div>
      </section>

      <section className="px-4 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Music Gear..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-purple-600 dark:focus:border-purple-400 transition-all"
          />
          <FaSearch className="absolute right-4 top-5 text-slate-500 dark:text-gray-300" />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-purple-600 dark:focus:border-purple-400"
        >
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </section>

      <section className="px-4 py-16 bg-slate-50 dark:bg-slate-900">
        <h2 className="text-4xl font-black text-center mb-12">Featured Music Gear</h2>
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
          {musicData.slice(0, 5).map((product) => (
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

      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12">All Music Gear</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="100">
              <Image src={product.image} alt={product.name} width={300} height={200} className="rounded-xl mb-4" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-md">${product.price} <span className="line-through text-gray-500">${product.oldPrice}</span></p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400" /> {product.rating} ({product.reviews})
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-xl ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}