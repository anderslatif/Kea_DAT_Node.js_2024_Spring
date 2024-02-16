const express = require("express");

const app = express();

const drinks = [
    { id: 1, name: "Mojito" },
    { id: 2, name: "Isbjørn" },
    { id: 3, name: "Old Fashion" },
];

app.get("/drinks", (req, res) => {
    res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const providedDrinkId = Number(req.params.id);
    const foundDrink = drinks.find((drink) => drink.id === providedDrinkId);
    if (!foundDrink) {
        res.status(404).send({ data: "Drink not found" });
    } else {
        res.send({ data: foundDrink });
    }
});


app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
        return;
    }
    console.log("Server is running on port", 8080);
});
