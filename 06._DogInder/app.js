import express from "express";

const app = express();

app.use(express.static("public"));


import matchesRouter from "./routers/matchesRouter.js";
app.use(matchesRouter);
import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);



const PORT = process.env.PORT ?? 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));

