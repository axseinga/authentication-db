import dotenv from "dotenv/config";
import mongoose from "mongoose";
import app from "./index.js";

const PORT = process.env.SERVER_PORT || 5050;

mongoose
    .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(() => console.log("connected to db!"))
    .catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
