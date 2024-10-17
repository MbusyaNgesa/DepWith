import { Router } from "express";
import { loginUser, registerUser } from "../../controllers/auth.js";
import {
  validateUserLogin,
  validateUserRegistration,
} from "../../middleware/validators.js";

const authRouter = Router();

authRouter.post("/register", validateUserRegistration, registerUser);
authRouter.get("/login", validateUserLogin, loginUser);

export { authRouter };
