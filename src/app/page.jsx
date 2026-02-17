import Hero from "@/component/Home/Hero";
import CategoryRibbon from "@/component/Home/CategoryRibbon";
import FlashSale from "@/component/Home/FlashSale";
import BentoGrid from "@/component/Home/BentoGrid";
import NewArrivalsScroll from "@/component/Home/NewArrivalsScroll";
import BrandLogos from "@/component/Home/BrandLogos";
import Testimonial from "@/component/Home/Testimonial";
import TrustSection from "@/component/Home/TrustSection"; // Fixed import
import Newsletter from "@/component/Home/Newsletter";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import ProductCard from "@/components/ProductCard";
import LatestProducts from "@/component/Home/LatestProducts";

export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero / Main Visual */}
      <Hero />

      {/* 2. Quick Navigation */}
      <CategoryRibbon />

      <LatestProducts />

      {/* 3. Urgency / Conversion */}
      <FlashSale />

      {/* 4. Curated Collections */}
      <BentoGrid />

      {/* 5. Fresh Inventory */}
      <NewArrivalsScroll />

      {/* 6. Social Proof */}
      <Testimonial />

      {/* 7. Marketplace Authority */}
      <BrandLogos />

      {/* 8. Safety & Trust */}
      <TrustSection />

      {/* 9. Lead Generation (Best placed at the end) */}
      <Newsletter />
    </main>
  );
}