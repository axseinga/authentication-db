import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) return res.status(404).send("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(404).send("Invalid Token");
    }
};
