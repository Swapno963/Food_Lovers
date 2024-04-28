import { userModel } from "@/models/user-model";
import mongoose from "mongoose";

import { FoodModel } from "@/models/food-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

async function getAllFoods(query) {
  let allFoods = await FoodModel.find().lean();
  return replaceMongoIdInArray(allFoods);
}

async function getFoodById(foodId) {
  const food = await FoodModel.findById(foodId).lean();
  return replaceMongoIdInObject(food);
}
async function getFoodByCategory(category) {
  console.log(category);
  const food = await FoodModel.find({
    $or: [
      { name: { $regex: category, $options: "i" } }, // Search by name
      { category: { $regex: category, $options: "i" } }, // Search by category
      { description: { $regex: category, $options: "i" } }, // Search by category
    ],
  }).lean();
  return food;
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  console.log("creadintion from quety", credentials);
  const user = await userModel.find(credentials).lean();
  console.log("from find user ", user);

  if (user) {
    return user;
  }
  return null;
}

async function updateFav(foodId, authId) {
  const user = await userModel.findById(authId);
  let foundUsers;
  if (user) {
    foundUsers = user.favourites.find((id) => id.toString() === foodId);

    if (foundUsers) {
      user.favourites.pull(new mongoose.Types.ObjectId(foodId));
    } else {
      user.favourites.push(new mongoose.Types.ObjectId(foodId));
    }

    user.save();
  }
}

async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));
  event.save();
}

export {
  createUser,
  findUserByCredentials,
  getAllFoods,
  getFoodByCategory,
  getFoodById,
  updateFav,
  updateGoing,
};
