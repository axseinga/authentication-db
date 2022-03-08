import express from "express";
import { router as authRoute } from "./routes/auth.js";
import { verify } from "./routes/verifyToken.js";
import { roles } from "./routes/roles.js";
import { setUser, authRole } from "./routes/rolesAuth.js";

const app = express();
app.use(express.json());

app.use("/api/user", authRoute);

// example of verification of the user
app.use("/api/dashboard", verify, (req, res) => {
    res.send("user dashboard access");
});

// example of verification of the owner
app.use("/api/owner", verify, setUser, authRole(roles.OWNER), (req, res) => {
    res.send("owner access");
});

// example of verification of the admin
app.use("/api/admin", verify, setUser, authRole(roles.ADMIN), (req, res) => {
    res.send("admin axcess");
});
export default app;
