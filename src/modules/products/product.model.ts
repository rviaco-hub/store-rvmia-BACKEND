import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  category: String
}, { timestamps: true });

export const Product = model("Product", ProductSchema);
