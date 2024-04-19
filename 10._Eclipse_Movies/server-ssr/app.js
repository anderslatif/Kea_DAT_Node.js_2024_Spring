import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve('../client/dist')));

import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

const liveReloadServer = livereload.createServer();
liveReloadServer.watch('../client/dist');
liveReloadServer.server.once("connection", () => {
setTimeout(() => {
    liveReloadServer.refresh("/");
}, 500);
});
app.use(connectLivereload()); 


import session from "express-session";
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

import moviesRouter from "./routers/moviesRouter.js";
app.use(moviesRouter);
import customersRouter from "./routers/customersRouter.js";
app.use(customersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve('../client/dist/index.html'));
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080));
