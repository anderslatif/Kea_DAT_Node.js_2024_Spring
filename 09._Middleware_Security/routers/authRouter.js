import { Router } from "express";
const router = Router();

function isAdmin(req, res, next) {
    // todo simulate database or similar to check if the user is an Admin
    // and assuming that they are indeed an admin
    req.isAdmin = true;
    req.user = {
        name: "Owner of the house"
    };

    next();
}

router.get("/auth/lockedRoom", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.user);
    res.send({ message: "You are in the locked room" });
});

export default router;
