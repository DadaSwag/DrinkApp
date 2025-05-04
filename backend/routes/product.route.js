import express from "express";
import {getProductsController} from "../controllers/product.controlers.js"
import { getProductController } from "../controllers/product.controlers.js";
import { postProductController } from "../controllers/product.controlers.js";
import { putProductController } from "../controllers/product.controlers.js";
import { deleteProductController } from "../controllers/product.controlers.js";

const router = express.Router();

router.get(`/`, getProductsController)
router.get(`/:id`, getProductController)
router.post(`/create`, postProductController)
router.put(`/:id`, putProductController)
router.delete(`/:id`, deleteProductController)

export default router