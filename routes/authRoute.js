import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
//router object
const router = express.Router();

// * routing
// Register
router.post("/register", registerController);

// login
router.post("/login", loginController);

export default router;
