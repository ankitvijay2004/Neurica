import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js"

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    uptime: process.uptime(),
  });
});

const startServer = async () => {
  const isProduction = process.env.NODE_ENV === "production";

  try {
    const dbConnected = await connectDB();
    if (!dbConnected && isProduction) {
      throw new Error("MongoDB connection is required in production.");
    }
    if (!dbConnected) {
      console.warn("⚠️ Running in degraded mode: database features may not work until MongoDB is configured.");
    }

    try {
      await connectCloudinary();
    } catch (cloudinaryErr) {
      if (isProduction) {
        throw cloudinaryErr;
      }
      console.warn("⚠️ Cloudinary not configured. File upload features may not work in development.");
    }

    app.listen(port, () => {
      console.log(`🚀 Server started on PORT:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  process.exit(1);
});
