
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

// JSON Data for 15 Music Products
const musicData = [
  {
    id: 1,
    name: 'Bowers & Wilkins Px8 Headphones',
    category: 'Headphones',
    price: 699,
    oldPrice: 799,
    rating: 4.9,
    reviews: 1200,
    image: 'https://thumbs.dreamstime.com/b/clean-studio-focused-headphone-display-dark-surface-matte-black-headset-unmarked-box-accessories-crisp-420950932.jpg', // Image 22
  },
  {
    id: 2,
    name: 'Sennheiser Momentum 4 Wireless',
    category: 'Headphones',
    price: 379,
    oldPrice: 399,
    rating: 4.8,
    reviews: 950,
    image: 'https://thumbs.dreamstime.com/b/modern-black-sound-speakers-headphones-dark-background-58820191.jpg', // Image 23
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    price: 399,
    oldPrice: 449,
    rating: 4.7,
    reviews: 1100,
    image: 'https://www.iwantek.com/cdn/shop/articles/breaking-the-bank-the-highest-priced-headphones-ranked-3041490_1024x1024.jpg?v=1761017570', // Image 24
  },
  {
    id: 4,
    name: 'JBL Tour Pro 2 Earbuds',
    category: 'Earbuds',
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    reviews: 800,
    image: 'https://thumbs.dreamstime.com/b/premium-headphones-clean-desktop-soft-studio-lighting-modern-vibe-close-up-resting-desk-boxed-accessory-setup-421296957.jpg', // Image 25
  },
  {
    id: 5,
    name: 'Bose QuietComfort Ultra',
    category: 'Headphones',
    price: 429,
    oldPrice: 479,
    rating: 4.9,
    reviews: 1300,
    image: 'https://imboldn.com/wp-content/uploads/2026/01/Meze-STRADA-Closed%E2%80%91Back-Luxury-With-Ebony-and-Magnesium-main.jpg', // Image 26
  },
  {
    id: 6,
    name: 'Audio-Technica ATH-M50x',
    category: 'Headphones',
    price: 149,
    oldPrice: 169,
    rating: 4.7,
    reviews: 700,
    image: 'https://thegadgetflow.com/wp-content/uploads/2022/12/Bowers-Wilkins-Px8-007-Edition-Wireless-Headphones-01-1024x576.jpeg', // Image 27
  },
  {
    id: 7,
    name: 'Beats Studio Buds+',
    category: 'Earbuds',
    price: 169,
    oldPrice: 199,
    rating: 4.5,
    reviews: 600,
    image: 'https://thumbs.dreamstime.com/b/d-rendering-showcases-headphones-as-ultimate-audio-listening-device-d-rendering-showcases-headphones-as-ultimate-audio-293818442.jpg', // Image 28
  },
  {
    id: 8,
    name: 'Sonos Era 100 Speaker',
    category: 'Speakers',
    price: 249,
    oldPrice: 279,
    rating: 4.8,
    reviews: 850,
    image: 'https://thumbs.dreamstime.com/b/experience-immersive-sound-modern-wireless-headphones-premium-audio-bliss-comfortable-listening-immerse-yourself-403842993.jpg', // Image 29
  },
  {
    id: 9,
    name: 'Jabra Elite 8 Active',
    category: 'Earbuds',
    price: 199,
    oldPrice: 229,
    rating: 4.6,
    reviews: 550,
    image: 'https://images.squarespace-cdn.com/content/v1/621663e7e8f5476ba5df4287/1731857102993-T1SWC9M8C0CHE7JCFMSD/Best-earbuds-for+bass.jpg', // Image 30
  },
  {
    id: 10,
    name: 'Marshall Acton III Speaker',
    category: 'Speakers',
    price: 279,
    oldPrice: 299,
    rating: 4.7,
    reviews: 650,
    image: 'https://thumbs.dreamstime.com/b/audio-equipment-mouse-speakers-wooden-table-pair-headphones-arranged-neatly-creating-harmonious-display-technology-314346121.jpg', // Image 31
  },
  {
    id: 11,
    name: 'Audio-Technica AT-LP60X Turntable',
    category: 'Turntable',
    price: 149,
    oldPrice: 169,
    rating: 4.5,
    reviews: 400,
    image: 'https://www.rollingstone.com/wp-content/uploads/2021/04/rolling-stone-audio-awards.jpg?w=1547&h=960&crop=1', // Image 32
  },
  {
    id: 12,
    name: 'Sennheiser HD 660S2',
    category: 'Headphones',
    price: 599,
    oldPrice: 649,
    rating: 4.9,
    reviews: 900,
    image: 'https://cdn.mos.cms.futurecdn.net/FhKsyhnfiY8tDm7JrcsLB4.jpg', // Image 33
  },
  {
    id: 13,
    name: 'Anker Soundcore Motion+',
    category: 'Speakers',
    price: 99,
    oldPrice: 119,
    rating: 4.6,
    reviews: 750,
    image: 'https://thumbs.dreamstime.com/b/studio-shot-pair-modern-black-over-ear-headphones-against-vibrant-blue-backdrop-image-highlights-sleek-design-premium-402879585.jpg', // Image 34
  },
  {
    id: 14,
    name: 'Shure AONIC 50 Gen 2',
    category: 'Headphones',
    price: 349,
    oldPrice: 399,
    rating: 4.7,
    reviews: 550,
    image: 'https://www.digitaltrends.com/tachyon/2025/09/PXL_20250930_150935394.jpg?resize=1200%2C720', // Image 35
  },
  {
    id: 15,
    name: 'Ultimate Ears BOOM 4',
    category: 'Speakers',
    price: 129,
    oldPrice: 149,
    rating: 4.5,
    reviews: 450,
    image: 'https://thumbs.dreamstime.com/b/clean-studio-focused-headphone-display-dark-surface-matte-black-headset-unmarked-box-accessories-crisp-420950932.jpg', // Duplicate
  },
];

export default function MusicPage() {
  // Same code as GadgetsPage, replace data with musicData and hero h1 to "ShopMart Music"
  // ... (Duplicate and adjust)
}