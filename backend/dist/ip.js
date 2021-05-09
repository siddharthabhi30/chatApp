"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = require('events');
const rabbitSender_1 = require("./rabbitSender");
const cors = require('cors');
const express = require('express');
const app = express();
const myEmitter = new EventEmitter();
let rabbit = rabbitSender_1.rabbitSender(myEmitter);
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
app.get("/", cors(), (req, res) => {
    res.send('http://localhost:3000');
});
app.get("/send", cors(), (req, res) => {
    myEmitter.emit('sendMessage', "send this data withput loading");
    res.send('http://localhost:3000');
});
app.use(cors());
