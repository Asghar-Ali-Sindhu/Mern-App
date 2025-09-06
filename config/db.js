import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(` Connected to mongodb ${conn.connection.host} `.bgGreen.white);
  } catch (error) {
    console.log(`Error in mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;
