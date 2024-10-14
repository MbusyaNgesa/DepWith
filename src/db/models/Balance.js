import { model, Schema } from "mongoose";
import { User } from "./User";
import { Transaction } from "./Transaction";

const balanceSchema = new Schema({
  user: {
    required: true,
    unique: true,
  },
  balance: {
    type: String,
    required: true,
  },
});

const Balance = model("balance", balanceSchema);
export { Balance };
// const balanceSchema = new Schema({
//     User,
//     Transaction
// })
