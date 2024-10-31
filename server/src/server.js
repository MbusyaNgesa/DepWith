import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { v1Router } from "./routes/v1/index.js";
import { v2Router } from "./routes/v2/index.js";

dotenv.configDotenv();
connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Hello Ngesa");
  res.json({ message: "Response Received" });
});

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3005, () => {
  console.log("Server is running on port:");
});
