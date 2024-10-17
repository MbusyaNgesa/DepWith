import { model, Schema } from "mongoose";

const balanceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: String,
    required: true,
    default: 0,
  },
});

const Balance = model("balance", balanceSchema);
export { Balance };
