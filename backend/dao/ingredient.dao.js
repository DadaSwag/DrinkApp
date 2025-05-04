import Ingredient from "../models/ingredient.model.js"

export const getAllIngredients = async () => {
  return await Ingredient.find();
};

export const getIngredient = async (id) => {
  return await Ingredient.findById(id);
};

export const postIngredient = async (ingredientData) => {
  return await Ingredient.create(ingredientData);
};

export const putIngredient = async (id, ingredientData) => {
  return await Ingredient.findByIdAndUpdate(id, ingredientData, { new: true });
};

export const deleteIngredient = async (id) => {
  return await Ingredient.findByIdAndDelete(id);
};
