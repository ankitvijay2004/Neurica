import mongoose from "mongoose";

const connectDB = async () => {
  const rawUri = process.env.MONGODB_URI || "";
  const mongoUri = rawUri.trim();
  const isPlaceholderUri =
    mongoUri.includes("username:password@cluster.mongodb.net") ||
    mongoUri.includes("cluster.mongodb.net/neurica");

  if (!mongoUri || isPlaceholderUri) {
    console.warn("⚠️ MongoDB URI is missing or placeholder. Starting without database connection.");
    return false;
  }

  // Prevent duplicate connections
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to the database");
    return true;
  }

  // Attach listeners only once
  mongoose.connection.once("connected", () => {
    console.log("✅ Database connected successfully");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔁 Database reconnected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ Database connection error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Database disconnected");
  });

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Fail fast if can't reach server
      socketTimeoutMS: 45000,         // Drop idle sockets
      family: 4,                      // Use IPv4 (faster DNS)
    });
    return true;
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err.message);
    return false;
  }
};

export default connectDB;

 