"use server";

const { findUserByCredentials, updateFav } = require("@/db/queries");
const { redirect } = require("next/navigation");

export async function handelLogin(data) {
  const found = await findUserByCredentials(data);
  console.log(found);
  return found;
}

export async function handelServerFav(foodId, authId) {
  console.log(foodId, authId);
  const fab = await updateFav(foodId, authId);
  console.log(fab);
  return fab;
}
