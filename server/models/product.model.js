import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
    required: "price is required",
  },
  quantity: {
    type: Number,
    trim: true,
    required: "quantity is required",
  },
  category: {
    type: String,
  },
  salt: String,
});

ProductSchema.path("name").validate(function (v) {
  if (this.isNew && !this.name) {
    this.invalidate("name", "Name is required");
  }
}, null);

ProductSchema.path("price").validate(function (v) {
  if (this.isNew && !this.price) {
    this.invalidate("price", "Price is required");
  }
}, null);

ProductSchema.path("quantity").validate(function (v) {
  if (this.isNew && !this.quantity) {
    this.invalidate("quantity", "Quantity is required");
  }
}, null);

export default mongoose.model("Product", ProductSchema);
