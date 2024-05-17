import "dotenv/config";

import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../client/dist")));

app.use(express.json());

import cors from "cors";
app.use(cors({
    origin: true,
    credentials: true
}));

import session from "express-session";

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});

app.use(sessionMiddleware);


import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

io.engine.use(sessionMiddleware);

io.on("connection", (socket) => {

    socket.on("client-sends-color", (data) => {
        data.nickname = socket.request.session.nickname;
        
        io.emit("server-sends-color", data);
    });

});

import nicknamesRouter from "./routers/nicknamesRouter.js";
app.use(nicknamesRouter)

const PORT = process.env.PORT ?? 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
