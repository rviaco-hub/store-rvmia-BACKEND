import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "client" },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
