import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export { User };
