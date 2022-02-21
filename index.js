import express from "express";
import { router as authRoute } from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/api/user", authRoute);

export default app;
