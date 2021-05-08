"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var cors = require('cors');
var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var app = express();
var server = app.listen(3000);
var PORT = 3000 || process.env.PORT;
var io = socketio(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});
// app.use(cors());
// app.options('*', cors());
server.listen(PORT, function () { return console.log("app running on " + PORT); });
io.on('connection', function (socket) {
    console.log('new ws connectiom');
    socket.emit('message', 'welcome to chatcord');
    socket.on('message', function (message) {
        socket.broadcast.emit('message', message);
    });
});
app.use(cors());
// app.get("/happy",(req,res)=>{
//     console.log("received")
//     res.send("hello")
// })
exports.App = app;
