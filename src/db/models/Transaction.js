import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    transactiontype: {
      type: String,
      enum: ["Deposit", "Withdrawal"],
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = model("transacttion", transactionSchema);
export { Transaction };
