import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

const connectMongo = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) return console.log("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;

