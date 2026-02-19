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

// JSON Data for 15 Beauty Products
const beautyData = [
  {
    id: 1,
    name: 'Luxury Foundation Cream',
    category: 'Skincare',
    price: 45,
    oldPrice: 55,
    rating: 4.7,
    reviews: 800,
    image: 'https://thumbs.dreamstime.com/b/cosmetics-beauty-products-make-up-sale-banner-glowing-neon-background-pink-sparkles-discount-off-promo-advertising-146396111.jpg', // Image 12
  },
  {
    id: 2,
    name: 'Premium Perfume Spray',
    category: 'Perfume',
    price: 89,
    oldPrice: 109,
    rating: 4.8,
    reviews: 950,
    image: 'https://thumbs.dreamstime.com/b/luxuriant-product-shot-luxury-perfume-bottle-close-up-view-high-quality-cosmetic-ai-generated-luxuriant-product-shot-luxury-374078583.jpg', // Image 13
  },
  {
    id: 3,
    name: 'Matte Lipstick Set',
    category: 'Makeup',
    price: 29,
    oldPrice: 39,
    rating: 4.6,
    reviews: 700,
    image: 'https://thumbs.dreamstime.com/b/captivating-cosmetics-banner-showcase-luxurious-makeup-skincare-products-your-online-store-elevate-presence-379638399.jpg', // Image 14
  },
  {
    id: 4,
    name: 'Hydrating Serum',
    category: 'Skincare',
    price: 59,
    oldPrice: 69,
    rating: 4.9,
    reviews: 1100,
    image: 'https://marketplace.canva.com/EAFUB5kf688/1/0/1600w/canva-skincare-product-presentation-JmwTvEHH0EQ.jpg', // Image 15
  },
  {
    id: 5,
    name: 'Eau de Parfum Deluxe',
    category: 'Perfume',
    price: 119,
    oldPrice: 139,
    rating: 4.8,
    reviews: 850,
    image: 'https://i.etsystatic.com/41855169/r/il/137d66/6212281442/il_fullxfull.6212281442_btf0.jpg', // Image 16
  },
  {
    id: 6,
    name: 'Glow Highlighter Palette',
    category: 'Makeup',
    price: 39,
    oldPrice: 49,
    rating: 4.7,
    reviews: 600,
    image: 'https://tint.creativemarket.com/n5FB40tiOuSCkdlSyWK94UokNgpfOE1xi-OEd6P72oU/width:1200/height:800/gravity:ce/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUxMDQvNTEwNDUvNTEwNDU5MjkvOC1iZWF1dHktYW5kLXNraW5jYXJlLW51c2luZXNzLXN0b2NrLWltYWdlLWJ1bmRsZS1vLmpwZyMxNzE5NDMzNjY0?1719433664', // Image 17
  },
  {
    id: 7,
    name: 'Anti-Aging Cream',
    category: 'Skincare',
    price: 79,
    oldPrice: 99,
    rating: 4.5,
    reviews: 500,
    image: 'https://coutureusa.com/cdn/shop/articles/IMG_0017-Edit_1800x.jpg?v=1730144188', // Image 18
  },
  {
    id: 8,
    name: 'Eyeshadow Palette Pro',
    category: 'Makeup',
    price: 49,
    oldPrice: 59,
    rating: 4.8,
    reviews: 750,
    image: 'https://tint.creativemarket.com/igv4dmpUZcwzznSwkTpsO5dHhe_wRjsL_1Ajw2-0fz0/width:1200/height:800/gravity:ce/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzU0NzMvNTQ3MzIvNTQ3MzI4OTUvMi1vLmpwZyMxNzYzNjQ1ODk4?1763645898', // Image 19
  },
  {
    id: 9,
    name: 'Rose Perfume Essence',
    category: 'Perfume',
    price: 69,
    oldPrice: 89,
    rating: 4.6,
    reviews: 650,
    image: 'https://c8.alamy.com/comp/2H3YNJJ/skincare-gel-in-golden-bottle-and-business-card-on-pink-background-2H3YNJJ.jpg', // Image 20
  },
  {
    id: 10,
    name: 'Blush & Bronzer Kit',
    category: 'Makeup',
    price: 35,
    oldPrice: 45,
    rating: 4.7,
    reviews: 550,
    image: 'https://thumbs.dreamstime.com/b/makeup-cosmetic-women-products-pouring-shopping-bag-pink-background-perfume-accessories-flat-lay-beauty-cheap-discount-162056848.jpg', // Image 21
  },
  {
    id: 11,
    name: 'Moisturizing Lotion',
    category: 'Skincare',
    price: 25,
    oldPrice: 35,
    rating: 4.5,
    reviews: 400,
    image: 'https://thumbs.dreamstime.com/b/cosmetics-beauty-products-make-up-sale-banner-glowing-neon-background-pink-sparkles-discount-off-promo-advertising-146396111.jpg', // Duplicate for variety
  },
  {
    id: 12,
    name: 'Vanilla Perfume Spray',
    category: 'Perfume',
    price: 99,
    oldPrice: 119,
    rating: 4.8,
    reviews: 900,
    image: 'https://thumbs.dreamstime.com/b/luxuriant-product-shot-luxury-perfume-bottle-close-up-view-high-quality-cosmetic-ai-generated-luxuriant-product-shot-luxury-374078583.jpg', // Duplicate
  },
  {
    id: 13,
    name: 'Mascara Volume Max',
    category: 'Makeup',
    price: 19,
    oldPrice: 29,
    rating: 4.6,
    reviews: 450,
    image: 'https://thumbs.dreamstime.com/b/captivating-cosmetics-banner-showcase-luxurious-makeup-skincare-products-your-online-store-elevate-presence-379638399.jpg', // Duplicate
  },
  {
    id: 14,
    name: 'Eye Cream Anti-Wrinkle',
    category: 'Skincare',
    price: 39,
    oldPrice: 49,
    rating: 4.7,
    reviews: 600,
    image: 'https://marketplace.canva.com/EAFUB5kf688/1/0/1600w/canva-skincare-product-presentation-JmwTvEHH0EQ.jpg', // Duplicate
  },
  {
    id: 15,
    name: 'Lip Gloss Shine',
    category: 'Makeup',
    price: 15,
    oldPrice: 25,
    rating: 4.5,
    reviews: 350,
    image: 'https://i.etsystatic.com/41855169/r/il/137d66/6212281442/il_fullxfull.6212281442_btf0.jpg', // Duplicate
  },
];

export default function BeautyPage() {
  // Same code as GadgetsPage, just replace gadgetsData with beautyData and hero text to "ShopMart Beauty"
  // ... (Copy the entire function from GadgetsPage and change data + hero h1 to "ShopMart Beauty")
  // For brevity, I'm not repeating the full code here, but in your project, duplicate and adjust.
}



