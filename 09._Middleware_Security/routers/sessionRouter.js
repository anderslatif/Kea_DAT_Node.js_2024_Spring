import { Router } from "express";
const router = Router();

router.get("/definesecretmessage", (req, res) => {
    const secretMessage = req.query.secretMessage;

    if (secretMessage) {
        req.session.secretMessage = secretMessage;
        res.send({ message: `You have defined the secret message as: ${secretMessage}`  });
    } else {
        res.send({ message: "You have not defined the query parameter 'secretMessage'" });
    }
});

router.get("/peaksecretmessage", (req, res) => {
    res.send({ secretMessage: req.session.secretMessage });
});

export default router;
