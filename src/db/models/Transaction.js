import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    username: {
      required: true,
      unique: true,
    },
    balance: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = model("transacttion", transactionSchema);
export { Transaction };
