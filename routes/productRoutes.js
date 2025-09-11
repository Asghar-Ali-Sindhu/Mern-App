import express from "express";
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductContrller,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

// * routes
// create produt
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get all products
router.get("/get-products", getProductController);

// get single product
router.get("/single-product/:slug", getSingleProductContrller);

// get photo
router.get('/product-photo/:pid', productPhotoController)

// delete product controller
router.delete('/delete-product/:pid', deleteProductController)

// update product controller
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)

export default router;
