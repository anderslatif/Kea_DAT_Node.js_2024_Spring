import { Router } from "express";

const router = Router();

router.get("/nicknames", (req, res) => {
    console.log(req.session);
    res.send({ data: req.session.nickname });
});

router.post("/nicknames", (req, res) => {
    const nickname = req.body.nickname;
    req.session.nickname = nickname;

    res.send({ data: nickname });
});


export default router;
