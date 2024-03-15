import { Router } from "express";

import getMatches from "../util/matches.js";


const router = Router();

router.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
});

export default router;
