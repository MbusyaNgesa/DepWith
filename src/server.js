import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.configDotenv();
connectDB();

const app = express();

app.get("/", (req, res) => {
  console.log("Hello Ngesa");
  res.json({ message: "Response Received" });
});

app.listen(3005, () => {
  console.log("Server is running on port:");
});
