import express from "express";
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

import moviesRouter from "./routers/moviesRouters.js";
app.use(moviesRouter);


const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080));
