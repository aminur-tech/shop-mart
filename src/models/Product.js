import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  image: { type: String, required: true },
  isNew: { type: Boolean, default: false },
  tag: { type: String },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);