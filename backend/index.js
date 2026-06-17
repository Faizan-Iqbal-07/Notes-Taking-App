import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/routes.js";
import connectDB from "./config/database.js";
const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});