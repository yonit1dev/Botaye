import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
    firstName: { type: String, default: "Admin" },
    lastName: { type: String, default: "User" },
    username: { type: String, required: true },
    password: { type: String, required: true },
});
