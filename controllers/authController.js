import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// * Register new user
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // validation
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    // check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Email is already registered. Please log in.",
      });
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // save user
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).send({
      success: false,
      message: "Error in registration",
    });
  }
};

// * Login user
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).send({
      success: false,
      message: "Error in login",
    });
  }
};

// test controller
export const testController = async(req, res) => {
  try {
return res.send("Protected Routes");
  } catch (error) {
    console.log(error);
  }
};
