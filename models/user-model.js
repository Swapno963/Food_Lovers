import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: {
    required: false,
    type: String,
  },
  lastName: {
    required: false,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  favourites: {
    required: false,
    type: Array,
  },
});

export const userModel =
  mongoose.models?.users ?? mongoose.model("users", schema);
