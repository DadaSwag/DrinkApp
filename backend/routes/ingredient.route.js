import express from "express";
import {
  getIngredientsController,
  getIngredientController,
  postIngredientController,
  putIngredientController,
  deleteIngredientController
} from "../controllers/ingredient.controller.js";

const router = express.Router();

router.get(`/`, getIngredientsController);
router.get(`/:id`, getIngredientController);
router.post(`/create`, postIngredientController);
router.put(`/:id`, putIngredientController);
router.delete(`/:id`, deleteIngredientController);

export default router;
