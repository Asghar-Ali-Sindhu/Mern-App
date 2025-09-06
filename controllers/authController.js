import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Eamil is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    // Existing User
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already registerd, Please log in",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user =await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();
    res.status(201).send({
        success:true,
        message:'User registered successfully',
        user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};



// "name":"Muhammad Abdullah",
// "email":"abdullah@gmail.com",
// "phone":"12121212",
// "password":"123456",
// "address":"Multan"