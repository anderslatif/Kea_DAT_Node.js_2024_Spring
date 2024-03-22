import { Router } from "express";
const router = Router();


router.post("/api/contact", (req, res) => {
    console.log("FORM:", req.body);
    res.redirect("/");
});


export default router;
