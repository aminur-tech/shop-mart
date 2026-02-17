import connectDB from "./db"; 
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  oldPrice: Number,
  rating: Number,
  reviews: Number,
  image: String,
  isNew: Boolean,
  tag: String,
}, { 

  suppressReservedKeysWarning: true 
});

const Product = mongoose.models.latestproducts || mongoose.model("latestproducts", ProductSchema, "latestproducts");

export async function getLatestProducts() {
  try {
    await connectDB();
    
    const products = await Product.find({});
    
    console.log(`Successfully fetched ${products.length} products from MongoDB.`);

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("❌ Error fetching products from DB:", error);
    return [];
  }
}