import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoute.js'
//configure dotenv
dotenv.config();

// database config
connectDB();
// reset object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

// * All routes
app.use('/api/v1/auth', authRoutes)
//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce App</h1>");

  
});



// port
const PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => {
  console.log(
    ` Server is running on ${process.env.DEV_MODE} mode on port:${PORT} `
      .bgMagenta.white
  );
});
