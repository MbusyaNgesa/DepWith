import { Router } from "express";
import { authRouter } from "./auth.js";

const v1Router = Router();

// v1Router.get("/", (req, res) => {
//   res.send("Hello from version 1");
// });

v1Router.use("/auth", authRouter);
export { v1Router };
