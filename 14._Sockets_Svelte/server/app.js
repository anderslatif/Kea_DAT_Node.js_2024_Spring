import express from "express";
const app = express();

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

io.on("connection", (socket) => {

    socket.on("client-sends-color", (data) => {
        io.emit("server-sends-color", data);
    });

});

const PORT = process.env.PORT ?? 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
