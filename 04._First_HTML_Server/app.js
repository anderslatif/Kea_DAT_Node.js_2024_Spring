const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});



app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
