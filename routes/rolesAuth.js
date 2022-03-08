import { User } from "../models/userModel.js";

export const setUser = async (req, res, next) => {
    const userId = req.user._id;
    if (!userId) {
        return res.status(401).send("Unauthorized Access");
    }
    req.user = await User.findOne({ _id: userId });
    next();
};

export const authRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            console.log(req.user, role);
            return res.status(401).send("Unauthorized Access");
        }

        next();
    };
};
