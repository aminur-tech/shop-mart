
import { Suspense } from "react";
import { getLatestProducts } from "@/lib/dbProducts";
import ProductCard from "@/component/Home/ProductCard";


function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm animate-pulse h-[420px]">
          <div className="h-72 bg-gray-200" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function FashionPage() {
  const products = await getLatestProducts({
    category: "fashion",
    limit: 20,
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Fashion Collection</h1>

      <Suspense fallback={<LoadingSkeleton />}>
        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-20">No fashion products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}