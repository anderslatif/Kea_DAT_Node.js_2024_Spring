import express from "express";
const app = express();

/* assignment create a greeter middleware 
that logs hello before passing them on to the next route */

// middleware
function doorman(req, res, next) {
    if (req.query.secret?.toLowerCase() === "open sesame") {
        console.log("You are allowed to enter");
        next();
    } else {
        res.status(401).send({ message: "You are not allowed to get into the room" });
    } 
}

// app.get("/room", doorman, (req, res, next) => {
//     console.log("You are in room 1");
//     // res.send({ data: "You are in room 1" });
//     next();
// });

                // inline middleware
app.get("/room", (req, res, next) => {
    console.log("On to the next room... room 2 coming up!");
    next();
}, (req, res, next) => {
    console.log("You are in room 2");
    res.send({ data: "You are in room 2" });
    // next();
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>Not Found</h1>");
});

app.all("*", (req, res) => {
    res.status(404).send({ message: "Not Found" });
});


const PORT = process.env.PORT ?? 8080;
app.listen(PORT, console.log("Server is running on port", PORT));
