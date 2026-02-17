import { getLatestProducts } from "@/lib/dbProducts";
import ProductCard from "./ProductCard";


const LatestProducts = async () => {
  const products = await getLatestProducts();

  return (
    <section className="container mx-auto px-6 mt-20 mb-20">
      <div className="flex flex-col items-center mb-12" data-aos="fade-up">
        <span className="text-[#F1641E] font-bold tracking-widest uppercase text-sm mb-2">
          Explore Collection
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#2D2D2D] text-shadow-premium">
          Latest Arrivals
        </h2>
        <div className="w-20 h-1.5 bg-[#F1641E] mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;