import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        min: 4,
        max: 255,
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        min: 2,
        max: 255,
    },
    surname: {
        type: String,
        required: [true, "Surname is required"],
        min: 2,
        max: 255,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        min: 6,
        max: 255,
    },
    password: {
        type: String,
        min: 6,
        required: [true, "Password is required"],
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ["admin", "owner", "user"],
    },
});

export const User = mongoose.model("User", userSchema);
