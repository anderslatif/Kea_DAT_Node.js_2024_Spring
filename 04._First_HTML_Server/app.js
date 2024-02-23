const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

const knownName = "Anders";

app.get("/greeting", (req, res) => {
    if (req.query.name === knownName) {
        res.send({ data: `Hello ${knownName}!` });
    } else {
        res.send({ data: "Hello stranger!" });
    }
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
