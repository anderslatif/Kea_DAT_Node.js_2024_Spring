import express from "express";
const app = express();

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

app.use(ipLogger);



import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);


app.get("*", (req, res) => {
    res.status(404).send("<h1>Not Found</h1>");
});

app.all("*", (req, res) => {
    res.status(404).send({ message: "Not Found" });
});


const PORT = process.env.PORT ?? 8080;
app.listen(PORT, console.log("Server is running on port", PORT));
