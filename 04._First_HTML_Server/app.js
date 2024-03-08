const express = require("express");

const app = express();

app.use(express.static("public"));

// const helicopterFactoryFile = require("./util/helicopterFactory.js");
// console.log(helicopterFactoryFile.helicopterFactory());

const { helicopterFactory } = require("./util/helicopterFactory.js");
console.log(helicopterFactory());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/treasuretrove", (req, res) => {
    res.send({ data: "You found it!" });
});

app.get("/secretpassphrase", (req, res) => {
    if (req.query.passphrase !== "SesameOpenUp") {
        res.status(400).send({ data: "Wrong passphrase" });
    } else {
        res.redirect("/treasuretrove");
    }
});

const knownNames = ["Anders", "Alice"];

app.get("/greeting", (req, res) => {
    const providedName = req.params.name;
    if (knownNames.includes(providedName)) {
        res.send({ data: `Hello ${providedName}!` });
    } else {
        res.send({ data: "Hello stranger!" });
    }
});

app.get("/knownpeople", (req, res) => {
    res.send({ data: knownNames.length });
});

app.get("/proxy", (req, res) => {
    // fetch("https://www.google.com")
    // .then((response) => response.text())
    // .then((result) => res.send(result));
    fetch("https://google.com")
    .then(response => response.arrayBuffer())
    .then(buffer => {
        const decoder = new TextDecoder('iso-8859-1');
        const text = decoder.decode(buffer);
        res.send(text);
    });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
