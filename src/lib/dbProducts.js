import connectDB from "@/lib/db";
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
});

const Product = mongoose.models.latestproducts || mongoose.model("latestproducts", ProductSchema);

export async function getLatestProducts() {
  await connectDB();
  const products = await Product.find({});
  
  return JSON.parse(JSON.stringify(products));
}