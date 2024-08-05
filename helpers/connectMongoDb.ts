import mongoose from "mongoose";

type MongoDbUri = string;

export const connectMongo = async () => {
  try {
    const dbURI: MongoDbUri = process.env.MONGODB_URI || "";

    if (!dbURI) {
      throw new Error("MongoDB URI is not set in the environment variables");
    }

    await mongoose.connect(dbURI);

    console.log("Mongo connection successful");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Error connecting to db");
  }
};
