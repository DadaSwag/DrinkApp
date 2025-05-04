import {
    getAllIngredients,
    getIngredient,
    postIngredient,
    putIngredient,
    deleteIngredient
  } from "../dao/ingredient.dao.js";

  export const getIngredientsController = async (req, res) => {
    try {
      const ingredients = await getAllIngredients();
      res.status(200).json(ingredients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getIngredientController = async (req, res) => {
    try {
      const { id } = req.params;
      const ingredient = await getIngredient(id);
      if (!ingredient) {
        return res.status(404).json({ message: "Ingredient not found" });
      }
      res.status(200).json(ingredient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const postIngredientController = async (req, res) => {
    try {
      const ingredient = await postIngredient(req.body);
      res.status(201).json(ingredient);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const putIngredientController = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedIngredient = await putIngredient(id, req.body);
      if (!updatedIngredient) {
        return res.status(404).json({ message: "Ingredient not found" });
      }
      const refreshed = await getIngredient(id);
      res.status(200).json(refreshed);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteIngredientController = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await deleteIngredient(id);
      if (!deleted) {
        return res.status(404).json({ message: "Ingredient not found" });
      }
      res.status(200).json({ message: "Ingredient deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  