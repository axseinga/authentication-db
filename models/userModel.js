import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 255,
    },
    name: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    surname: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password: {
        type: String,
        min: 6,
        required: true,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const User = mongoose.model("User", userSchema);
