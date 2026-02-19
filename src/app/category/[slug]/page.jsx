import ProductCard from "@/component/Home/ProductCard";
import connectDB from "@/lib/db";
import mongoose from "mongoose";
import Link from "next/link";

const ProductSchema = new mongoose.Schema({
name: String,
category: String,
price: Number,
oldPrice: Number,
image: String,
rating: Number,
reviews: Number,
});

async function getProductsByCategory(categoryName) {
  await connectDB();

  const Product = mongoose.models.Latestproducts || mongoose.model("Latestproducts", ProductSchema, "Latestproducts");
  
  // Case-insensitive search for regex uses
  const products = await Product.find({
    category: { $regex: new RegExp("^" + categoryName + "$", "i") }
  });
  
  return JSON.parse(JSON.stringify(products));
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const products = await getProductsByCategory(slug);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900 capitalize">
              {slug} Collection
            </h1>
            <p className="text-gray-500 mt-2">Showing {products.length} products</p>
          </div>
          <Link href="/" className="text-[#F1641E] font-bold hover:underline">
            ← Back to Home
          </Link>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-400">No products found in this category.</h2>
            <p className="text-gray-500">Try checking other categories!</p>
          </div>
        )}
      </div>
    </main>
  );
}