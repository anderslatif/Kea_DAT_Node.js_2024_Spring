import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

import getMatches from "./util/matches.js";

import fs from "fs";

const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const homepage = fs.readFileSync("./public/pages/homepage/homepage.html").toString();
const matches = fs.readFileSync("./public/pages/matches/matches.html").toString();
const contact = fs.readFileSync("./public/pages/contact/contact.html").toString();

const homepagePage = header + homepage + footer;
const matchesPage = header + matches + footer;
const contactPage = header + contact + footer;


// ========= HTML =================

app.get("/", (req, res) => {
    res.send(homepagePage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});


app.get("/page", (req, res) => {
    res.send("<div><h1>sdfdsfdsf</h1><h2>sdfdsfdsfdsfsdfsdf</h2></div>");
});

// ========== API =================

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
