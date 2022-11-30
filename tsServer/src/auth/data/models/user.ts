import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: "Admin" },
    lastName: { type: String, default: "User" },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    collection: "users",
  }
);
