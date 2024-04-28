import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  activeTime: {
    required: true,
    type: String,
  },
  totalTime: {
    required: false,
    type: String,
  },
  thumbnail: {
    required: false,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  category: {
    required: false,
    type: String,
  },
  serves: {
    required: false,
    type: Number,
  },
  rating: {
    required: false,
    type: Number,
  },
  steps: {
    required: false,
    type: Array,
  },
});

export const FoodModel =
  mongoose.models?.recipes ?? mongoose.model("recipes", recipeSchema);
