"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.sendTOAll = void 0;
const rabbitSender_1 = require("./rabbitSender");
const rabbitReceiver_1 = require("./rabbitReceiver");
const EventEmitter = require('events');
const cors = require('cors');
const express = require('express');
const app = express();
var http = require('http').Server(app);
const PORT = 3000 || process.env.PORT;
const myEmitter = new EventEmitter();
const receiver = new EventEmitter();
let rabbit = rabbitSender_1.rabbitSender(myEmitter);
let rabbiRec = rabbitReceiver_1.rabbitReceiver(receiver);
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3005",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
//io.set('origins', 'http://localhost:4200');
http.listen(PORT, function () {
    console.log('listening on *:3000');
});
// const io=socketio(http,  {
//     origins: ["http://localhost:4200"]
//   });
//   io.set( 'origins', '*localhost:4200' );
// app.options('*', cors());
receiver.on('message', (data) => {
    console.log("broad casting is done ", data);
    io.emit('message', data);
});
io.on('connection', socket => {
    console.log('nw ws connectiom');
    socket.on('message', (message) => {
        console.log("mesasge is commmmmm");
        myEmitter.emit('sendMessage', message);
    });
});
exports.sendTOAll = (data) => {
    io.emit('message', data);
};
//io.origins(['http://localhost:4200']);
// app.use(cors());
// app.get("/happy",(req,res)=>{
//     console.log("received")
//     res.send("hello")
// })
exports.App = app;
