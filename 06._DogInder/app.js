import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

import getMatches from "./util/matches.js";

// ========= HTML =================

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/homepage/homepage.html"));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/matches/matches.html"));
});

// ========== API =================

app.get("/api/matches", (req, res) => {
    const matches = getMatches();
    res.send({ data: matches });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
